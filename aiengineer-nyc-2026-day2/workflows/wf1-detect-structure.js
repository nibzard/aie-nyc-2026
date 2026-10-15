export const meta = {
  name: 'detect-session-structure',
  description: 'Map the 8h livestream transcript onto agenda sessions: classify windows, synthesize a timeline, verify boundaries',
  phases: [
    { title: 'Classify', detail: 'one agent per 30-min transcript window' },
    { title: 'Synthesize', detail: 'merge window classifications into one timeline' },
    { title: 'Verify', detail: 'pinpoint exact boundary times per session' },
  ],
}

const BASE = '/home/agent/ainy26/aiengineer-nyc-2026-day2/00-original'

const EVENT_SCHEMA = {
  type: 'object',
  properties: {
    events: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          t_start: { type: 'number', description: 'video second where this event starts' },
          t_end: { type: 'number' },
          kind: { type: 'string', description: 'one of: keynote, talk, panel, interview, fireside, workshop-demo, announcement, break, filler, dead-air, music, expo, qna' },
          title_guess: { type: 'string', description: 'best title for this segment from content' },
          agenda_match: { type: ['string', 'null'], description: 'exact title from the agenda reference if this segment matches one, else null' },
          speakers_heard: { type: 'array', items: { type: 'string' }, description: 'speaker names heard/seen (self-intros, host intros, lower thirds)' },
          confidence: { type: 'string', description: 'high | medium | low' },
          evidence: { type: 'string', description: 'one-line evidence: quote or OCR text that justifies this' },
        },
        required: ['t_start', 't_end', 'kind', 'title_guess', 'agenda_match', 'speakers_heard', 'confidence', 'evidence'],
      },
    },
    notes: { type: 'string' },
  },
  required: ['events', 'notes'],
}

phase('Classify')
const sliceFiles = args.slices
const classifyResults = await parallel(sliceFiles.map((sf, i) => () =>
  agent(
    `You are analyzing one ${'~30-minute'} window of an 8-hour conference livestream transcript (AI Engineer NYC 2026, Oct 14, main stage / Simons Room).

Read these two files:
1. ${BASE}/slices/${sf}  -- your window: OCR of on-screen text + timestamped transcript. Timestamps are [HH:MM:SS] video time; t in seconds = HH*3600+MM*60+SS. Wall clock ET = 08:40:36 + t.
2. ${BASE}/slices/agenda-reference.txt  -- the official agenda for the day (t ranges, titles, speakers, rooms). NOTE: the stream may diverge from the agenda (extra talks during lunch, shifted times, interviews replacing talks, streams cut short). Treat the agenda as a prior, not a grid.

Identify EVERY distinct content segment in your window: talks, keynotes, panels, interviews, host announcements, Q&A, breaks/filler/dead-air/music. For each, give exact t_start/t_end within your window, the kind, your best title, the agenda match (exact agenda title or null), all speakers you can identify (listen for self-introductions, "please welcome...", host hand-offs, name mentions; the agenda reference lists expected speakers), confidence, and one line of evidence (verbatim quote or OCR line).

Rules:
- Segment boundaries: a new segment starts when a host introduces a new speaker/session, when a talk clearly begins/ends (thanks + applause transitions), or when content type changes (talk -> music -> dead-air etc).
- If the window contains part of a longer segment that clearly extends beyond the window edges, still report it with your visible t_start/t_end; the synthesizer will stitch overlapping reports.
- Do NOT merge different speakers' sessions into one event.
- Dead air, silence, ambient noise, music loops: report as kind dead-air or music with the time range.
- Be precise with t_start of the FIRST sentence of each new session (intros matter).`,
    { label: `classify:${sf}`, phase: 'Classify', schema: EVENT_SCHEMA }
  ).then(r => ({ window: sf, ...r }))
))

const okResults = classifyResults.filter(Boolean)
const allEvents = okResults.flatMap(r => r.events.map(e => ({ ...e, window: r.window })))
log(`collected ${allEvents.length} events from ${okResults.length} windows`)

phase('Synthesize')
const TIMELINE_SCHEMA = {
  type: 'object',
  properties: {
    stream_summary: { type: 'string', description: '2-4 sentences: what this stream actually covered, how it diverged from the agenda' },
    segments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          order: { type: 'number' },
          t_start: { type: 'number' },
          t_end: { type: 'number' },
          kind: { type: 'string' },
          title: { type: 'string' },
          agenda_match: { type: ['string', 'null'] },
          speakers: { type: 'array', items: { type: 'string' } },
          confidence: { type: 'string' },
          evidence: { type: 'string' },
          verify_hint: { type: 'string', description: 'where to look to pin the exact start (e.g. "host intro just before first sentence about X")' },
        },
        required: ['order', 't_start', 't_end', 'kind', 'title', 'agenda_match', 'speakers', 'confidence', 'evidence', 'verify_hint'],
      },
    },
    agenda_gaps: { type: 'array', items: { type: 'string' }, description: 'agenda items expected on stream but with no matching segment' },
  },
  required: ['stream_summary', 'segments', 'agenda_gaps'],
}

const synthesis = await agent(
  `You are building the definitive session timeline for the AI Engineer NYC 2026 Oct 14 livestream (8h51m16s, t=0 == 08:40:36 ET, stream is the Simons Room / main stage feed; stream ends t=31876).

You receive event detections from 16 overlapping 30-minute windows (60 s overlap each). Windows may disagree; stitch them into ONE ordered timeline of segments covering the whole stream 0..31876 with no gaps or overlaps (round gaps > 20 s into explicit break/dead-air/music segments; small gaps absorb into the neighboring segment).

Cross-check against the official agenda in ${BASE}/slices/agenda-reference.txt. Where the content clearly matches an agenda item, set agenda_match to the exact agenda title. Where the stream shows something NOT in the agenda (extra lunch talks, interviews), keep it as its own segment with agenda_match null and a descriptive title. If two adjacent window reports describe the same session, merge them (prefer the more precise boundary). If they conflict, prefer the report whose evidence quotes the transcript.

Here are ALL window event detections as JSON:
${JSON.stringify(allEvents, null, 1)}

Also list agenda items that were expected on this stream but that you could not match to any segment (agenda_gaps).`,
  { label: 'synthesize-timeline', phase: 'Synthesize', schema: TIMELINE_SCHEMA, effort: 'high' }
)

phase('Verify')
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    confirmed: { type: 'boolean' },
    t_start: { type: 'number', description: 'verified start second' },
    t_end: { type: 'number', description: 'verified end second' },
    title_ok: { type: 'boolean' },
    corrected_title: { type: ['string', 'null'] },
    speakers_ok: { type: 'boolean' },
    corrected_speakers: { type: ['array', 'null'], items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['confirmed', 't_start', 't_end', 'title_ok', 'corrected_title', 'speakers_ok', 'corrected_speakers', 'notes'],
}

const verified = await parallel(synthesis.segments.map((seg, i) => () =>
  agent(
    `Verify one session boundary assignment against the actual transcript of the AI Engineer NYC 2026 livestream.

Proposed segment: ${JSON.stringify(seg)}
Hint: ${seg.verify_hint || ''}

Run this python3 snippet to print the transcript around the proposed boundaries (edit the two range numbers at the top):
import json
m = json.load(open('${BASE}/transcript-raw/transcript-master.json'))
T0, T1 = ${Math.max(0, seg.t_start - 240)}, ${Math.min(31876, seg.t_start + 240)}
for s in m['sentences']:
    if T0 <= s['t_start'] <= T1:
        print(f"[{int(s['t_start'])}] {s['text']}")
Then again for the end boundary (t_end ± 180 s).

Decide:
- exact t_start: the sentence where this session truly begins (host intro or speaker's first words; include a short host intro if it clearly belongs to this session's slot, otherwise put the intro at the end of the previous segment)
- exact t_end: last sentence of the session (before next intro / break begins)
- is the title correct given the content? correct it if needed
- are the speakers correct? correct the list if the transcript reveals more/fewer speakers (listen for names)
Set confirmed=true if the segment exists and boundaries are now pinned within ±15 s.`,
    { label: `verify:${seg.order}:${(seg.title || '').slice(0, 30)}`, phase: 'Verify', schema: VERDICT_SCHEMA }
  ).then((v, ) => ({ ...seg, verdict: v }))
))

const finalSegments = verified.filter(Boolean).map(seg => {
  const v = seg.verdict
  if (!v) return seg
  return {
    order: seg.order,
    t_start: (typeof v.t_start === 'number' && v.t_start >= 0) ? v.t_start : seg.t_start,
    t_end: (typeof v.t_end === 'number' && v.t_end > 0) ? v.t_end : seg.t_end,
    kind: seg.kind,
    title: (typeof v.corrected_title === 'string' && v.corrected_title.trim() !== '' && v.corrected_title !== 'null' && v.corrected_title !== 'None') ? v.corrected_title : seg.title,
    agenda_match: seg.agenda_match,
    speakers: (Array.isArray(v.corrected_speakers) && v.corrected_speakers.length > 0) ? v.corrected_speakers : seg.speakers,
    confidence: v.confirmed ? 'high' : seg.confidence,
    evidence: seg.evidence,
    notes: v.notes,
  }
})
finalSegments.sort((a, b) => a.t_start - b.t_start)

return {
  stream_summary: synthesis.stream_summary,
  agenda_gaps: synthesis.agenda_gaps,
  segments: finalSegments,
  window_count: okResults.length,
  raw_event_count: allEvents.length,
}
