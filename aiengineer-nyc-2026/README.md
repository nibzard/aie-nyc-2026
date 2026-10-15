# AI Engineer NYC 2026 — Oct 13 livestream, organized

Everything on this page derives from one source: the official day-one
livestream of AI Engineer New York 2026 (October 13, 2026), recorded by the
organizers on YouTube. The stream was downloaded, transcribed with OpenAI
models, cut into sessions, and summarized. Original materials are preserved
untouched in `00-original/`.

- Source video: <https://www.youtube.com/watch?v=akEqiXFo3GM> (8 h 05 m 50 s,
  "AI Engineer NYC Livestream | Bridgewater, Anthropic, Two Sigma, Arize,
  Coatue, Nous, Gen. Intuition")
- Event schedule: <https://ai.engineer/nyc/2026/schedule>
- Stream covered: the Simons Room (Metropolitan East) main-stage feed, all
  day, 2026-10-13

## How time works here

Video time `t=0` is **08:47:52 AM ET** (the encoder start). Every timestamp
in these files carries both forms, for example `[01:23:45 | 10:11:37 AM ET]`.
Video links include a direct `&t=<s>` offset into the VOD.

## Folder map

| Path | Contents |
|---|---|
| `00-original/` | Untouched source materials + derived intermediates (see its own README) |
| `00-original/agenda/` | Schedule snapshot (HTML), embedded event JSON, structured agenda with computed video-time ranges |
| `00-original/media/` | The full 1080p60 video (3.4 GB) and full audio track |
| `00-original/chunks/` | 49 ten-minute audio chunks + manifest (the transcription units) |
| `00-original/transcript-raw/` | Raw per-chunk OpenAI API responses + the merged `transcript-master.{json,md}` |
| `00-original/sessions-transcripts/` | Per-session timestamped transcripts (the "cut" the summaries are built on) |
| `00-original/session-timeline.json` | The detected session timeline (53 segments) with evidence and notes |
| `01-sessions/` | One rich Markdown file per session: TL;DR, key lessons, quotes, narrative, speaker details, full transcript |
| `02-index/` | Sessions index, speakers directory, tag index, day summary |

## How it was produced

1. **Download.** `yt-dlp` (HLS formats) pulled the video and audio; the audio
   became 49 ten-minute chunks cut at detected silences.
2. **Transcription.** Every chunk went to OpenAI twice: `gpt-transcribe`
   (best text) and `whisper-1` (segment timestamps). A word-level alignment
   merged them into `transcript-master.json` (3,990 sentences, ~64k words).
3. **Session mapping.** A 71-agent workflow classified 30-minute windows of
   the transcript against the agenda, synthesized a timeline, and verified
   every boundary against the transcript (see `session-timeline.json`).
4. **Session records.** A second workflow enriched speaker data (official
   event JSON + web research with sources), then wrote and audited one MD
   file per session.

## What the timeline revealed

- The stream is the main-stage (Simons Room) feed — not a multi-room mix.
- The published 12:15–2:05 PM "Networking Break" was not a break on this
  feed: it carried **seven unlisted lunch talks** (Range, Keycard,
  Stealthium, Railway, Southbridge, and others — see segments 22–30).
- From about 2 PM the day ran 25–30 minutes ahead of the published agenda,
  so the afternoon keynotes (Coatue, General Intuition, Nous Research
  "Hermes") and the closing remarks all aired before the stream cut at
  4:53:42 PM ET.
- One ASR correction worth knowing: the GPU-security lunch speaker's company
  sounded like "Celtium" but is **Stealthium** (verified against their
  published research).

## Start here

- [Day summary with the big themes](02-index/day-summary.md)
- [All sessions in order](02-index/sessions-index.md)
- [Speakers](02-index/speakers.md)
- [Tags](02-index/tags.md)

To repeat this process on another stream, follow
[../livestream-to-session-docs-playbook.md](../livestream-to-session-docs-playbook.md).

## Per-session audio

`03-session-audio/` holds one `.m4a` per session (stream-copy cut, no
re-encode), named to match the session files in `01-sessions/`. Sessions
shorter than 20 seconds have no clip.
