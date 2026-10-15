export const meta = {
  name: 'write-session-files',
  description: 'Enrich speaker data, write one rich MD file per session, audit every file against the transcript',
  phases: [
    { title: 'Speakers', detail: 'fill gaps in speaker data via web search' },
    { title: 'Sessions', detail: 'one agent per session writes 01-sessions/NNN-slug.md' },
    { title: 'Audit', detail: 'verify structure + fidelity of every session file' },
    { title: 'Fix', detail: 'repair files that failed audit' },
  ],
}

const ROOT = '/home/agent/ainy26/aiengineer-nyc-2026'
const BASE = `${ROOT}/00-original`

// ---------- Phase: Speakers ----------
phase('Speakers')
const SPEAKER_RESULT = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    ok: { type: 'boolean' },
    summary: { type: 'string' },
  },
  required: ['slug', 'ok', 'summary'],
}

const enriched = await parallel(args.enrich.map(sp => () =>
  agent(
    `Fill in the missing fields of a conference speaker record for AI Engineer NYC 2026 (October 2026, New York).

Your entry in ${ROOT}/02-index/speaker-enrich-list.json has slug "${sp.slug}".
Current record file: ${ROOT}/02-index/speaker-data/${sp.slug}.json
First Read both files. Your entry lists which fields are missing.

Known context is in those files (name, role, company, what they spoke about at the conference).

Use WebSearch to find the person (try queries like the name + company, the name + AI/CTO/founder, LinkedIn). If the search cannot confirm anything, write "Unknown" rather than inventing facts. NEVER guess: every new fact needs a source you actually saw. Beware same-name confusions: match company/role context from the conference.

Then update ONLY the missing fields of the JSON record (keep all present data), add an "enriched": true field and a "sources" array with the URLs you used, and WRITE the file back with the same structure.

Return ok=true if the file now has fewer gaps than before (even if some remain unknown).`,
    { label: `speaker:${sp.slug}`, phase: 'Speakers', schema: SPEAKER_RESULT }
  )
))
const enrichOk = enriched.filter(Boolean).filter(r => r.ok).length
log(`speaker enrichment done: ${enrichOk}/${args.enrich.length}`)

// ---------- Phase: Sessions ----------
phase('Sessions')
const SESSION_RESULT = {
  type: 'object',
  properties: {
    order: { type: 'number' },
    file: { type: 'string' },
    exists: { type: 'boolean' },
    one_liner: { type: 'string', description: 'one-sentence summary' },
    tldr: { type: 'array', items: { type: 'string' } },
    tags: { type: 'array', items: { type: 'string' } },
    speakers_used: { type: 'array', items: { type: 'string' } },
    lessons_count: { type: 'number' },
    quotes: { type: 'array', items: { type: 'string' }, description: 'up to 3 verbatim quotes used' },
  },
  required: ['order', 'file', 'exists', 'one_liner', 'tldr', 'tags', 'speakers_used', 'lessons_count', 'quotes'],
}

const sessionResults = await pipeline(
  args.sessions,
  (s, _orig, idx) => agent(
    `You are writing the permanent session record for ONE session of the AI Engineer NYC 2026 livestream (Oct 13, 2026). The full record is one Markdown file.

Your session's full data (title, times, speakers, transcript file path, agenda match, notes from the boundary verification) is the entry with "order": ${s.order} inside ${BASE}/sessions-manifest.json. Read that file first and use YOUR entry (cross-check the slug "${s.slug}").

Read these next:
1. Your session transcript (path from your manifest entry, under ${BASE}/sessions-transcripts/).
   Timestamps are [video HH:MM:SS | wall clock ET].
2. The speaker records for every name in your entry's "speakers_clean" (read each file that exists):
   ${ROOT}/02-index/speaker-data/<name-slug>.json  (slug = lowercase name, non-alphanumerics to dashes)
3. The agenda reference for official session data: ${BASE}/agenda/agenda-2026-10-13.json
   If your entry's "agenda_match" is set, find that item and use its official description and its speakers' official names; do not invent one.

Then WRITE the file ${ROOT}/01-sessions/${s.slug}.md with EXACTLY this structure:

---
session_id: "<order, zero-padded to 3 digits, from your manifest entry>"
title: "<actual title: agenda title if matched, else the title the speaker/host used>"
agenda_title: <agenda_match from your entry, or null>
speakers: [names exactly as identified, from speakers_clean / official agenda names]
start_wall: "<wall_start> ET"
end_wall: "<wall_end> ET"
video_start: "<video_start>"
video_end: "<video_end>"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=<round(t_start)>s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "<kind>"
tags: [3-8 kebab-case tags you choose]
confidence: "<confidence>"
---

# <title>

> <one-sentence TL;DR>

## TL;DR
<3-6 bullets>

## Key lessons
<numbered list, 3-8 items, each concrete and traceable to what was said>

## Notable quotes
<2-4 verbatim quotes copied EXACTLY from the transcript, each with its [video time | wall] stamp>

## Session narrative
<2-4 paragraphs telling the arc of the session: opening, core argument, demos, close>

## Speaker details
<for each speaker: **Name** - Role, Company. 1-3 sentence bio drawn from the speaker record. Links (linkedin/twitter/website) if present. If no record exists, write what the session itself reveals (self-introduction) and mark "(identified from session)">

## Full timestamped transcript
<copy the ENTIRE transcript file content here verbatim, inside a code fence>

Quality bar:
- Lessons must be specific (numbers, names, techniques), not generic advice.
- Quotes must be copied character-for-character from the transcript.
- Never invent facts not in the transcript or speaker records.
- If the transcript is short or non-speech (music/break/filler/dead-air), write a brief honest record: describe what happened in 2-3 sentences, skip empty sections, keep the transcript section.
- The transcript file content goes in verbatim - do not summarize it.
- Your manifest entry may carry "notes" from boundary verification (caveats about intros, timing quirks, speaker uncertainty). Respect them.

Return the structured metadata (one_liner, tldr, tags, speakers_used, lessons_count, up to 3 quotes, file path, exists=true).`,
    { label: `session:${String(s.order).padStart(3, '0')}:${s.slug.slice(4, 40)}`, phase: 'Sessions', schema: SESSION_RESULT }
  ),
  // ---------- Phase: Audit ----------
  (res, s) => {
    if (!res || !res.exists) return { ...res, audit: { pass: false, issues: ['session agent returned exists=false or died'] } }
    return agent(
      `Audit one session record file against its source transcript.

Your session's data is the entry with "order": ${s.order} in ${BASE}/sessions-manifest.json (slug "${s.slug}"). Read it first - it names the record file ${ROOT}/01-sessions/${s.slug}.md and the source transcript under ${BASE}/sessions-transcripts/.

Checks:
1. File exists and parses: YAML frontmatter complete (all keys from the template), H1 title present, sections in order: TL;DR, Key lessons, Notable quotes, Session narrative, Speaker details, Full timestamped transcript.
2. Fidelity: pick 2 quotes from the file's Notable quotes section and grep them in the transcript file (use Grep or Read). They must match character-for-character (ignoring surrounding punctuation). Timestamps in the file must fall inside the session range.
3. Completeness: the transcript section contains the full transcript (at least 90% of the transcript file's line count).
4. Hallucination guard: every speaker named in the file's Speaker details must be either in your manifest entry's speakers_clean or clearly identified in the transcript itself.
5. Tags: 3-8 kebab-case tags present in frontmatter.

Return pass=true only if all checks pass; otherwise list precise issues.`,
      { label: `audit:${String(s.order).padStart(3, '0')}`, phase: 'Audit', schema: {
          type: 'object',
          properties: {
            pass: { type: 'boolean' },
            issues: { type: 'array', items: { type: 'string' } },
          },
          required: ['pass', 'issues'],
        } }
    ).then(a => ({ ...res, audit: a }))
  },
  // ---------- Phase: Fix ----------
  async (res, s) => {
    if (!res) return null
    if (res.audit && res.audit.pass) return res
    const issues = res.audit ? res.audit.issues : ['no audit result']
    const fixed = await agent(
      `A session record file failed audit. Repair it in place.

File: ${ROOT}/01-sessions/${s.slug}.md
Your session's manifest entry (order ${s.order}) in ${BASE}/sessions-manifest.json names the source transcript under ${BASE}/sessions-transcripts/ - that transcript is ground truth.
Audit issues: ${JSON.stringify(issues)}

Fix every issue. Rules: quotes verbatim from the transcript; never invent facts; keep the exact section structure (frontmatter, H1, TL;DR, Key lessons, Notable quotes, Session narrative, Speaker details, Full timestamped transcript in a code fence). Read the file and transcript first, then Write the corrected file.

Return pass=true if you believe all issues are now resolved.`,
      { label: `fix:${String(s.order).padStart(3, '0')}`, phase: 'Fix', schema: {
          type: 'object',
          properties: { pass: { type: 'boolean' }, notes: { type: 'string' } },
          required: ['pass', 'notes'],
        } }
    )
    return { ...res, fixed: fixed ? fixed.pass : false, fix_notes: fixed ? fixed.notes : 'fixer died' }
  }
)

const ok = sessionResults.filter(Boolean)
const passed = ok.filter(r => r.audit && r.audit.pass).length
const fixed = ok.filter(r => r.fixed === true).length
log(`sessions: ${ok.length} written, ${passed} passed audit, ${fixed} repaired after audit`)

return {
  sessions: ok.map(r => ({
    order: r.order, file: r.file, one_liner: r.one_liner, tldr: r.tldr,
    tags: r.tags, speakers_used: r.speakers_used, lessons_count: r.lessons_count,
    quotes: r.quotes, audit_pass: r.audit ? r.audit.pass : false,
    audit_issues: r.audit ? r.audit.issues : ['missing'],
    fixed_after_audit: r.fixed === true,
  })),
  speaker_enrichment: { ok: enrichOk, total: args.enrich.length },
}
