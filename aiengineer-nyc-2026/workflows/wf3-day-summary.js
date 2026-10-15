export const meta = {
  name: 'day-summary-and-critic',
  description: 'Write the day summary from session records, then run a completeness critic over the whole deliverable',
  phases: [
    { title: 'Digest', detail: 'synthesize the day summary from all session records' },
    { title: 'Critic', detail: 'find gaps: missing sessions, broken links, thin records' },
  ],
}

const ROOT = '/home/agent/ainy26/aiengineer-nyc-2026'
const BASE = `${ROOT}/00-original`

phase('Digest')
const digest = await agent(
  `Write the definitive day summary for the AI Engineer NYC 2026 Oct 13 livestream digest.

Inputs (read them):
1. ${BASE}/session-timeline.json - the 53-segment timeline + stream_summary + agenda_gaps
2. ${ROOT}/02-index/sessions-metadata.json - one row per session file (title, one_liner, tags, speakers, times)
3. The TL;DR + Key lessons sections of the major talk files in ${ROOT}/01-sessions/ (session ids 003, 006, 008, 010, 013, 016, 018, 020, 022, 023, 025, 027, 028, 029, 030, 031, 033, 035, 036, 038, 043, 046, 049 - read at least the ten largest by reading their files; you do not need the transcript sections, stop at the transcript fence)

Write ${ROOT}/02-index/day-summary.md with this structure:

# AI Engineer NYC 2026, day one - digest
> One-paragraph overview of the day.

## The day in one table
| Wall clock | What happened | Why it mattered | (major sessions only, ~15 rows)

## Five themes of the day
Numbered, each with: the theme, which sessions carry it (links to ../01-sessions/...), and the strongest concrete claim or number from those talks.

## The most quotable moments
5-8 verbatim quotes with attribution and time links (from the session files' Notable quotes sections - copy exactly).

## Practical takeaways for AI engineers
8-12 bullets, each actionable and traceable to specific sessions (link them).

## What only stream viewers saw
The seven unlisted lunch talks and the schedule divergence - what they were and why they matter.

## Divergences from the published agenda
The 25-30 min afternoon drift, the lunch block, the early stream cut.

Rules: every claim links to its session file; quotes verbatim; no invented facts. Return a JSON summary: {themes: [names], quote_count, session_files_read, word_count}.`,
  { label: 'day-digest', phase: 'Digest', effort: 'high', schema: {
      type: 'object',
      properties: {
        themes: { type: 'array', items: { type: 'string' } },
        quote_count: { type: 'number' },
        session_files_read: { type: 'number' },
        word_count: { type: 'number' },
      },
      required: ['themes', 'quote_count', 'session_files_read', 'word_count'],
    } }
)

phase('Critic')
const critique = await agent(
  `You are the completeness critic for the AI Engineer NYC 2026 deliverable at ${ROOT}.

Check:
1. ${ROOT}/01-sessions/ contains one 0NN-*.md for every segment in ${BASE}/session-timeline.json (53 segments, orders 0-52). List any missing.
2. Every session file has: complete YAML frontmatter (session_id, title, speakers, start_wall, end_wall, video_start, video_end, video_url, session_type, tags, confidence), and sections TL;DR / Key lessons / Notable quotes / Session narrative / Speaker details / Full timestamped transcript. Spot-check at least 8 files across the day (include one break/filler file and one lunch-talk file). List files with missing sections.
3. ${ROOT}/02-index/sessions-index.md exists and lists every session file; tags.md covers all tags; speakers.md covers all speakers in frontmatter.
4. ${ROOT}/02-index/day-summary.md exists, has the required sections, and its session links resolve to real files.
5. ${ROOT}/README.md links resolve (02-index/day-summary.md, 02-index/sessions-index.md, 02-index/speakers.md, 02-index/tags.md).
6. The speaker records in ${ROOT}/02-index/speaker-data/ cover every frontmatter speaker name (slug = lowercase name with dashes); list uncovered ones.

Do NOT fix anything. Return a precise gap list:
{overall_pass: boolean, missing_session_files: [], thin_session_files: [{file, issues}], broken_links: [], uncovered_speakers: [], index_gaps: [], notes: string}`,
  { label: 'completeness-critic', phase: 'Critic', schema: {
      type: 'object',
      properties: {
        overall_pass: { type: 'boolean' },
        missing_session_files: { type: 'array', items: { type: 'string' } },
        thin_session_files: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, issues: { type: 'array', items: { type: 'string' } } }, required: ['file', 'issues'] } },
        broken_links: { type: 'array', items: { type: 'string' } },
        uncovered_speakers: { type: 'array', items: { type: 'string' } },
        index_gaps: { type: 'array', items: { type: 'string' } },
        notes: { type: 'string' },
      },
      required: ['overall_pass', 'missing_session_files', 'thin_session_files', 'broken_links', 'uncovered_speakers', 'index_gaps', 'notes'],
    } }
)

return { digest, critique }
