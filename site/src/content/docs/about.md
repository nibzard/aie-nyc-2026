---
title: About this site
description: How these session notes were produced, and where the source material lives.
---

This site organizes the official day-one livestream of AI Engineer New York
2026 (October 13, 2026) into one page per session: a TL;DR, key lessons,
notable quotes, a narrative, speaker details, and the full timestamped
transcript. Every page links back into the source video at the exact second.

- Source video: [AI Engineer NYC Livestream on YouTube](https://www.youtube.com/watch?v=akEqiXFo3GM)
  (8 h 05 m 50 s)
- Event schedule: [ai.engineer/nyc/2026/schedule](https://ai.engineer/nyc/2026/schedule)
- Stream covered: the Simons Room (Metropolitan East) main-stage feed, all
  day, 2026-10-13

## How time works here

Video time `t=0` is **08:47:52 AM ET** (the encoder start). Every timestamp
carries both forms, for example `[01:23:45 | 10:11:37 AM ET]`. Video links
include a direct `&t=<s>` offset into the VOD.

## How it was produced

1. **Download.** `yt-dlp` pulled the video and audio; the audio was cut into
   49 ten-minute chunks at detected silences.
2. **Transcription.** Every chunk went to OpenAI twice: `gpt-transcribe`
   for best text and `whisper-1` for segment timestamps. A word-level
   alignment merged them into one master transcript (~64k words).
3. **Session mapping.** A multi-agent workflow classified 30-minute windows
   of the transcript against the published agenda, synthesized a timeline,
   and verified every boundary against the transcript.
4. **Session records.** A second workflow enriched speaker data from
   official event JSON plus web research, then wrote and audited one page
   per session.

## Attribution

The talks belong to their speakers and to the event organizers. This site is
an unofficial set of reference notes built from their public livestream, with
links back to the source video on every page. If you are the organizer or a
speaker and want something changed or removed, open an issue or contact the
site maintainer.

## Day two

Day two (October 14) is being processed with the same pipeline and will be
added under its own section when its session records are complete.
