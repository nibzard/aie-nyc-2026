---
title: Pre-show hold before opening (no speech until welcome at 15:01; hold
  audio likely, on-screen text unverifiable)
description: Day 2 · Oct 14. The day-three stream went live at 8:40:36 AM ET and
  carried roughly 15 minutes of non-speech hold audio before the first spoken
  words, "Good morning and welcome back," at 00:15:01.
sidebar:
  order: 0
  hidden: true
pagefind: false
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

The day-three stream went live at 8:40:36 AM ET and carried roughly 15 minutes of non-speech hold audio before the first spoken words, "Good morning and welcome back," at 00:15:01.

## TL;DR

- The stream opened at video t=0 (8:40:36 AM ET), about 14.5 minutes before the agenda's first item, "Welcome Remarks," scheduled for 8:55 AM.
- No speech occurs in this segment. The transcription pass (GPT pass) returned empty text for 0-514 s, and the Whisper pass shows only a repeating hallucination line every ~30 s with `no_speech_prob` values of 0.39 to 0.98 up to t~901.
- The hallucination pattern suggests hold music or room tone was present, so "no audio" is not proven; only "no speech" is proven. The frames directory is empty, so any on-screen hold text cannot be checked.
- The segment ends at t=901 (8:55:37 AM ET), where an unidentified host says "Good morning and welcome back." That line is the opening of the next segment, the Welcome Remarks.

## Key lessons

*This segment is a pre-show hold with no spoken content, so it offers no lessons to extract. One boundary-handling note, grounded in the manifest's verification: the stream's first spoken words land exactly at the 00:15:01 boundary (wall clock 8:55:37 AM ET), so the same line closes this record and opens the next segment (order 1, Welcome Remarks). When cutting a stream into sessions, treat the first speech after a hold as the boundary, not the hold itself.*

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=0&rel=0" title="Pre-show hold before opening (no speech until welcome at 15:01; hold audio likely, on-screen text unverifiable)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">8:40:36 AM ET–8:55:37 AM ET &middot; dead air &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=0s" rel="noopener">Watch on YouTube from 00:00:00</a></p>

## Notable quotes

*This is the stream's first spoken line and the show-open boundary. Per the boundary verification, it belongs to the next segment (order 1, Welcome Remarks); this record keeps it as the closing boundary marker.*

> "Good morning and welcome back." — [00:15:02 | 8:55:37 AM]

## Session narrative

The livestream for day three of AI Engineer New York 2026 started at 8:40:36 AM ET, well before the scheduled 8:55 AM Welcome Remarks. For the entire 901 seconds covered by this segment, the audio track contains no recognizable speech: the GPT transcription pass for chunk 0 (0-514 s) produced empty text, and Whisper output for chunks 0 and 1 (514-1200 s) shows only a repeating hallucination line roughly every 30 seconds with high `no_speech_prob` (0.39-0.98) through t~901, which indicates non-speech hold audio such as music or room tone. Whether the video showed a hold slate is unverifiable because no OCR frames were captured.

The hold ends at t=901 (video 00:15:01, wall clock 8:55:37 AM ET) when an unidentified host delivers the stream's first sentence, "Good morning and welcome back." Per the boundary verification, that sentence and everything after it belong to the next segment (order 1, Welcome Remarks): the host introduces the MC, Kseniya Se of Turing Post, at t=912, and the MC opens at t=921. This segment is a complete pre-show hold record with no speakers and no lessons to extract.

## Speaker details

No speakers are credited for this segment in the session manifest.

**Unidentified host (contextual attribution only)** - The single boundary line at [00:15:02 | 8:55:37 AM], "Good morning and welcome back.", is spoken by an unidentified host. Per the manifest notes, this announcer introduces the MC, Kseniya Se of Turing Post, at t=912, and the MC opens at t=921; both belong to the next segment (order 1, Welcome Remarks).

## Full timestamped transcript

```
[00:15:02 | 8:55:37 AM] Good morning and welcome back.
```
