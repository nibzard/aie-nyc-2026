# Playbook: livestream to session documents

Last tested: 2026-10-15 on the AI Engineer NYC 2026 day-one stream
(8 h 05 m 50 s). Working example and all scripts:
`/home/agent/ainy26/aiengineer-nyc-2026/` (see `00-original/scripts/`).

Use this when you must turn a recorded livestream into per-session Markdown
records: download, transcribe, cut into sessions, summarize, index. Follow the
procedures in order. Each phase ends with a check. Do not continue until the
check passes.

## 0. What you need

- `yt-dlp` (update it first; see trap T1), `ffmpeg`/`ffprobe`, `python3`
  with `requests`, `tesseract` (optional, for title-card OCR).
- `OPENAI_API_KEY` in the environment.
- Node or Deno on `PATH` for yt-dlp's JavaScript runtime.
- Disk: about 2.5 times the video size. A 3.4 GB video plus audio, chunks,
  and clips needed about 4.2 GB.
- Effort budget: about 8 h of audio costs roughly $6 of transcription
  (two passes, Oct 2026 prices) and 2 to 3 hours of wall clock with
  background jobs. The multi-agent phase used 212 agents and about
  8 M tokens. Scale to your stream length.

## 1. Traps and their fixes

| # | Trap | Fix |
|---|---|---|
| T1 | yt-dlp older than ~90 days returns HTTP 403 on YouTube media downloads | `python3 -m pip install -U --break-system-packages yt-dlp` |
| T2 | Even current yt-dlp gets 403 on DASH `https` formats on some networks | List formats with `-F`, then download an HLS (`m3u8`) format, for example `-f 234` audio and `617+234` video |
| T3 | `--download-sections` fails; ffmpeg gets 403 on the segment URL | Do not cut during download. Download the full file, then cut locally with `-ss`/`-t` |
| T4 | OpenAI rejects `.opus` files: "Unsupported file format opus" | Use Opus inside an `.ogg` container (`.ogg` extension) |
| T5 | `gpt-transcribe` and `gpt-4o-transcribe` reject `verbose_json`, so they give no timestamps | Run two passes: `gpt-transcribe` for text, `whisper-1` with `verbose_json` and `timestamp_granularities[]=segment` for timing |
| T6 | `gpt-4o-transcribe-diarize` demands `chunking_strategy` and still returns no speaker labels in `json` mode | Skip it. Get speakers from the agenda plus transcript evidence |
| T7 | Hand-computed timezone tables contain errors; this run made two | Compute every mapping with a script from epoch values. Spot-check three known times before trusting it |
| T8 | Verifier agents may return the literal string `"null"` in optional fields | Treat `"null"` and `"None"` as empty when merging. Join agent outputs on a stable key such as `order`, never on timestamps |
| T9 | A rebuilt generator overwrote manual fixes to its output | Fix the generator script, then regenerate. Never sed the artifact twice |
| T10 | Blanket OCR of every frame is too slow (8 h at 120 s steps took >50 min) | Skip the sweep. Extract frames only at proposed session boundaries, then OCR those |
| T11 | Shell working directory resets between commands; a failed `sed ... > file` loop left 0-byte scripts in one directory while the fixed copies landed in another | Always use absolute paths in scripts and redirects. After generating files, verify size and first line before use |
| T12 | A web-research agent can loop for 20+ minutes on a person with no public footprint, stalling a whole workflow phase behind a barrier | Bound the agent: "at most four searches, then write Unknown and stop." Before launching, pre-fill records with transcript-proven facts and drop unverifiable names from the enrich list. If it still hangs: stop the run, fill the record manually, resume without that slug (other agents replay from cache) |

## 2. Procedure A: capture the originals

1. Save the source page first: `curl -sL <schedule-url> -o schedule.html`.
   Keep it untouched. Also extract the embedded data: many event sites ship
   a `__NEXT_DATA__` script tag with full session JSON — titles, rooms,
   times in UTC, descriptions, and speaker records with bios, companies,
   and links. That JSON beats any scraped HTML.
2. Probe the video: `yt-dlp --js-runtimes node --skip-download -F <url>`.
   Confirm duration and pick HLS format IDs (trap T2).
3. Download audio: `yt-dlp --js-runtimes node -f <audio-hls-id> -o stream-audio.m4a <url>`.
4. Download video in the background: `-f <video-id>+<audio-id> -o stream.mp4`.
5. Verify with `ffprobe`: duration, codecs, sample rate.
6. Get the start anchor: `yt-dlp --skip-download --print "%(release_timestamp)s" <url>`.
   For a live stream this is the encoder start. Record
   `t=0 == <wall clock>` and the epoch value.
7. Check the anchor. Transcribe one 60 s sample from the middle of a known
   agenda slot. The content must match that slot's topic. If it does not,
   re-derive the anchor before anything else.

Check: audio and video files exist, durations match, anchor validated.

## 3. Procedure B: chunk and transcribe

1. Cut the audio into about 600 s chunks at silences: run
   `silencedetect` (noise `-35 dB`, duration 0.35 s), then pick the silence
   nearest each target boundary within ±90 s. Fall back to the exact target
   when no silence is near. Write a manifest JSON with exact boundaries.
2. Encode chunks as 16 kHz mono Opus-in-OGG at 32 kbps. Expect about
   2.3 MB per 10 min. This stays far under the 25 MB API limit.
3. Transcribe each chunk twice with four parallel workers:
   `gpt-transcribe` (`response_format=json`, plus a domain `prompt`) and
   `whisper-1` (`verbose_json`, segment granularity). Skip files that
   already exist so the run is resumable. Retry 429 and 5xx with backoff.
4. Save every raw response, one file per chunk per model. These are original
   materials.

Check: raw files exist for every chunk; no chunk reports failure.

## 4. Procedure C: merge into one master transcript

1. For each chunk, expand whisper segments to per-word times. Interpolate
   linearly inside each segment.
2. Tokenize the gpt-transcribe text into words. Align the two word lists
   with `difflib.SequenceMatcher` on normalized words. Assign times to
   matched words. Interpolate the rest.
3. Split the gpt text into sentences. Give each sentence the times of its
   first and last words. Add the chunk offset to make global times.
4. Emit `transcript-master.json` (sentences with `t_start`, `t_end`) and a
   readable `transcript-master.md` with `[HH:MM:SS | wall clock]` stamps.

Check: sentence count is sane (this run: 3,990 sentences, ~64 k words for
8 h). Spot-read three timestamps against the audio.

## 5. Procedure D: detect the session timeline

Run this as a workflow with three phases.

1. Slice the master transcript into ~30 min windows on disk, 60 s overlap
   each, one file per window. Include the agenda as a compact reference
   file with computed `t` ranges. Agents Read these files; do not paste
   large text into prompts.
2. Classify: one agent per window. It returns structured events with
   `t_start`, `t_end`, `kind`, `title_guess`, `agenda_match`,
   `speakers_heard`, `confidence`, `evidence` (a verbatim quote).
3. Synthesize: one agent merges all windows into an ordered timeline that
   covers 0..duration with no gaps. Gaps over 20 s become explicit
   break or dead-air segments.
4. Verify: one agent per segment pins exact boundaries against the
   transcript (±3 min excerpts) and may correct titles and speakers.
5. Merge results by `order` with the "null"-string guard (trap T8). Save
   `session-timeline.json`.
6. Cut one transcript file per segment from the master. Write a manifest
   with slug, times, speakers, and the verifier notes.

Expect divergence from the published agenda. In this run: the lunch
"Networking Break" held seven unlisted talks, the afternoon ran 25 to 30 min
ahead, and two items marked "after stream end" did air. Treat the agenda as
a prior, not a grid.

Check: segments cover the full duration with no gap over 30 s; every agenda
item that aired has a match or is listed in `agenda_gaps`.

## 6. Procedure E: speaker data and session records

1. Build speaker records from the official event JSON first. No guessing.
2. Clean names with a script: strip parenthetical and em-dash annotations;
   drop generic placeholders such as "Unidentified host"; deduplicate
   variants ("Dr. X" versus "X").
3. Enrich the gaps with one web-search agent per speaker. Rules: every new
   fact needs a source URL; write "Unknown" rather than guess; watch for
   ASR name mangling (this run: "Celtium" was Stealthium; "Kartik, CTO at
   Perplexity" was Karthic Rao of Perpetual — both fixed from sources).
4. Write session records: one agent per session reads its transcript file,
   its speaker records, and the agenda entry, then writes one MD file with
   fixed frontmatter and fixed sections (TL;DR, Key lessons, Notable
   quotes, Session narrative, Speaker details, Full timestamped
   transcript). Quotes must be copied character for character. Break and
   dead-air segments get honest placeholder sections, not invented lessons.
5. Audit each file: structure, quote fidelity by grep, timestamps inside
   the session range, transcript present at 90 percent or more, no
   hallucinated speakers. Repair failures with a fix stage.

Check: one file per timeline segment; audits pass; quotes grep clean.

## 7. Procedure F: indexes, day summary, critic

1. Build `sessions-index.md`, `tags.md`, and `speakers.md` from the session
   frontmatter with a script. Never from agent returns. Use relative links
   from the index directory (`../01-sessions/...`).
2. Run a digest agent over the session records to write `day-summary.md`:
   one-day table, themes, quotable moments, practical takeaways,
   stream-only content, agenda divergences. Every claim links to a session.
3. Run a completeness critic agent: file per segment, sections present,
   links resolve, speaker coverage, index correctness. It must not fix.
4. Fix what the critic finds in the generators (trap T9), then regenerate.
5. Re-verify all links with a script until zero break.

Check: critic passes or every finding is fixed and regenerated.

## 8. Procedure G: extras worth the effort

1. Per-session audio clips: `ffmpeg -ss <t> -t <dur> -i audio.m4a -c copy
   out.m4a`. Stream copy is fast and lossless. Skip segments under 20 s.
2. Boundary frame OCR: extract one frame at each proposed boundary, OCR
   the bottom third, and use it as evidence in procedure D step 4.
3. A README at the root: time mapping, folder map, pipeline description,
   and the divergences from the published agenda.

## 9. Output layout contract

```
<project>/
  README.md
  00-original/
    agenda/           # page HTML, embedded JSON, structured agenda with t ranges
    media/            # full video + full audio
    chunks/           # n chunks + manifest.json
    transcript-raw/   # raw API responses + transcript-master.{json,md}
    sessions-transcripts/
    session-timeline.json
    sessions-manifest.json
    scripts/          # 01..07 pipeline scripts
  01-sessions/        # one MD per segment, NNN-slug.md
  02-index/           # day-summary, sessions-index, speakers, tags, speaker-data/
  03-session-audio/   # one m4a per segment
```

## 10. Final checklist

- Originals preserved before any transformation.
- Every timestamp carries video time and wall clock.
- Session files: frontmatter complete, six sections, quotes verbatim.
- Transcripts verbatim inside session files; corrections documented, never
  silently applied.
- Zero broken internal links.
- Divergences from the published agenda documented, with evidence.
