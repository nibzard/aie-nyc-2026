---
title: "Audience Q&A after General Intuition keynote: JEPA comparison, action
  labels vs world models"
description: Day 1 · Oct 13. In a 98-second closing Q&A, Pim de Witte
  distinguished General Intuition's action-label-trained foundation models from
  JEPA, calling JEPA "the more correct approach" in the limit but far less
  practical short-term.
sidebar:
  order: 47
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 1 · Oct 13</span> <a href="/day1/">Day 1 digest</a> · <a href="/sessions-index/?day=1">More from this day</a></p>

In a 98-second closing Q&A, Pim de Witte distinguished General Intuition's action-label-trained foundation models from JEPA, calling JEPA "the more correct approach" in the limit but far less practical short-term.

<p class="official-reading"><a href="https://aie-nyc-2026-talks.swyxio.workers.dev/talks/pim-de-witte-space-time">Read the official edition ↗</a><span> A detailed reading edition with a searchable transcript.</span></p>

## TL;DR
- Brief audience Q&A at the end of the "Frontier Models for Acting in Space and Time" keynote (session 046). One question was answered in full.
- Asked how his work differs from JEPA, de Witte said JEPA trains without action labels and bets on inferred action labels instead.
- He called JEPA "the more correct approach" in the limit, but less practical short-term because it needs a separate scaling law for action inference.
- General Intuition went "all in" on foundation models trained on action data, because action data transfers better to action sequences than to pixel generation.

## Key lessons
1. JEPA does not train alongside action labels. It relies on inferred action labels, which means betting on a second, separate scaling law for action inference. That is why de Witte views it as correct in the limit but impractical in the short term.
2. Action labels carry signal that pixels cannot. De Witte's example: when a pilot moves the rudder at the back of a plane, "there's no way of being able to tell that from the video frames." A model trained on action data transfers better to action sequences than to world models and pixel generation.
3. General Intuition's strategy follows from that data advantage: train general foundation models for action prediction, and handle world modeling with "all sorts of techniques" of their own plus work from other companies they like.
4. Research approaches and products are different things. De Witte respects JEPA as a concept and uses some of its ideas in General Intuition's models, but summarized the distinction as "it's an approach, not a product," and expects concepts to be borrowed in both directions.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/akEqiXFo3GM?start=27972&rel=0" title="Audience Q&amp;A after General Intuition keynote: JEPA comparison, action labels vs world models" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Pim de Witte, Unidentified audience member &middot; 4:34:04 PM ET–4:35:42 PM ET &middot; qna &middot; <a href="https://www.youtube.com/watch?v=akEqiXFo3GM&amp;t=27972s" rel="noopener">Watch on YouTube from 07:46:12</a></p>

## Notable quotes
> "So JEPA doesn't train alongside the action labels, so they bet on inferred action labels for the most part." [07:46:29 | 4:34:20 PM]

> "But at the end of the day, it's an approach, not a product." [07:46:54 | 4:34:45 PM]

> "So our mode on having the action data really transfers better to action sequences than it does to world models and to generating the pixels." [07:47:20 | 4:35:12 PM]

## Session narrative
The keynote had just finished when the host announced, "I have time for one or two questions, and then I think we can wrap" [07:46:12 | 4:34:04 PM]. An audience member took the microphone and asked the only question of the session: "Yeah, how's it different from JEPA?" [07:46:19 | 4:34:11 PM].

De Witte answered in three moves. First, the technical distinction: JEPA trains without action labels and must infer them, which he framed as a bet on a second scaling law for action inference. He still endorsed the idea, saying "we really like JEPA as a concept" and that General Intuition uses "some of the things in the models," while drawing the line "it's an approach, not a product." Second, the data argument: with abundant action data, some control signals (a plane's rudder position) are simply not recoverable from video frames, so action-labeled training transfers better to action sequences than to world models or pixel generation. Third, the strategic conclusion: General Intuition went "all in" on general foundation models for action prediction, and covers world modeling with their own techniques plus those of other companies they welcome. After the answer, de Witte offered to take one more question because he had to run. No second question survives in the transcript; he closed with "Thank you, everyone. Have a good one." [07:47:49 | 4:35:41 PM], and the stream moved on to the stage introduction of the final talk of the day.

## Speaker details
**Pim de Witte** - Co-Founder & CEO, General Intuition. He leads the frontier lab for acting in space and time. He previously founded Medal, the world's largest platform for gaming clips, worked with Médecins Sans Frontières, and ran the largest Runescape private server at age 14. General Intuition recently raised $650M+ from Khosla and General Catalyst. Website: https://generalintuition.com

**Unidentified audience member** - (identified from session) Asked the single question of the Q&A, on how General Intuition's models differ from JEPA. No name or affiliation was given on the record.

## Full timestamped transcript
```
[07:46:12 | 4:34:04 PM] I have time for one or two questions, and then I think we can wrap.
[07:46:19 | 4:34:11 PM] Yeah, how's it different from JEPA?
[07:46:29 | 4:34:20 PM] So JEPA doesn't train alongside the action labels, so they bet on inferred action labels for the most part.
[07:46:35 | 4:34:26 PM] Which I think, like, one of the ways of thinking about it is JEPA, I think, in the limit is the more correct approach, but it's just a lot less practical in the short term because you need to bet on a separate scaling law on the action inference itself.
[07:46:45 | 4:34:37 PM] And we really like JEPA as a concept.
[07:46:48 | 4:34:40 PM] We think it's a, you know, we use some of the things in the models.
[07:46:54 | 4:34:45 PM] But at the end of the day, it's an approach, not a product.
[07:46:59 | 4:34:51 PM] And I think we'll, you know, borrow concepts both ways.
[07:47:06 | 4:34:58 PM] One way of thinking about it is because we have so much action data, let's say you're flying a plane and you're moving the rudder in the back.
[07:47:15 | 4:35:06 PM] There's no way of being able to tell that from the video frames.
[07:47:19 | 4:35:11 PM] It's very, very difficult.
[07:47:20 | 4:35:12 PM] So our mode on having the action data really transfers better to action sequences than it does to world models and to generating the pixels.
[07:47:28 | 4:35:20 PM] And that's why we just went all in on training these general foundation models for action predictions, and we use all sorts of techniques to do world models.
[07:47:36 | 4:35:28 PM] You know, our own, we really like other companies building them as well.
[07:47:41 | 4:35:32 PM] Great.
[07:47:41 | 4:35:32 PM] New one more and then I got to run, I think.
[07:47:47 | 4:35:39 PM] Great.
[07:47:48 | 4:35:40 PM] All right.
[07:47:49 | 4:35:41 PM] Thank you, everyone.
[07:47:50 | 4:35:42 PM] Have a good one.
```
