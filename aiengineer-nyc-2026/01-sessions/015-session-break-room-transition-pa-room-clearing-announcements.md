---
session_id: "015"
title: "Session break / room transition (PA room-clearing announcements, then dead air before the Wells Fargo talk)"
agenda_title: null
speakers: []
start_wall: "10:30:35 AM ET"
end_wall: "10:39:17 AM ET"
video_start: "01:42:43"
video_end: "01:51:25"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=6163s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "break"
tags: [break, room-transition, pa-announcements, dead-air, agenda-gap, livestream-hold]
confidence: "high"
---

# Session break / room transition (PA room-clearing announcements, then dead air before the Wells Fargo talk)

> A roughly nine-minute room-turnaround break on the main-stage livestream: a PA voice clears Simons Room after the Arize AI keynote, the stream holds with no speech for about 8.6 minutes, and Freddy Lecue's Wells Fargo talk begins at the segment's closing boundary.

## TL;DR
- At [01:42:43 | 10:30:34 AM], immediately after Aparna Dhinakaran's Arize AI keynote ("What does an AI engineer do?"), a PA voice announced that the current program had finished and asked attendees to collect belongings and exit through the main doors.
- No speech was transcribed for the next 8 minutes 39 seconds (from 01:42:46 to 01:51:25) while the room turned over.
- This segment is the observed filler for the agenda's unpublished 10:30-10:40 AM gap between "What does an AI engineer do?" (agenda t_end 6128) and "Wells Fargo Foundation Model: Application to Fraud Detection at Scale" (agenda t 6728).
- The transcript's final lines, all stamped [01:51:25 | 10:39:17 AM], are the opening sentences of Freddy Lecue's Wells Fargo foundation-model talk; they sit on the boundary timestamp (t=6685) and are the start of session 016's record.

## Key lessons
1. A formulaic PA voice, not the MC, runs the room turnover on the main stage. The break opens with "The current program has finished its run" and a direction to exit through the main doors (01:42:43 to 01:42:46), the same announcement pattern captured in session 014.
2. An agenda gap with no published session still occupies real stream time. No speech was transcribed for 8 minutes 39 seconds (01:42:46 to 01:51:25) while the room turned over between the Arize AI keynote and the 10:40 AM Wells Fargo talk.
3. Boundary lines are shared between adjacent records. All 21 lines stamped [01:51:25 | 10:39:17 AM] open Freddy Lecue's Wells Fargo talk and are also recorded in full in session 016, so nothing is lost by treating this segment as a break.
4. Dead air is itself evidence. The absence of transcription from 01:42:46 to 01:51:25 most likely marks applause, room chatter below the microphone, and stage-reset activity during the turnover, not missing stream data.

## Notable quotes
[01:42:43 | 10:30:34 AM] The current program has finished its run.

[01:42:46 | 10:30:37 AM] Please collect your belongings and proceed through the main doors for your next scheduled task.

## Session narrative
At 10:30:34 AM, as applause from the Arize AI keynote ended, a PA announcer declared the program finished and directed the audience to collect their belongings and proceed through the main doors to their next scheduled task. This is the standard room clear that opens the conference's mid-morning break slot.

For the following 8 minutes 39 seconds the livestream carried no transcribed audio: the room emptied, and the stage and seating reset for the next talk. This matches the agenda's 10:30-10:40 AM gap, which lists no session between "What does an AI engineer do?" and the 10:40 AM Wells Fargo stage talk.

The segment closes at [01:51:25 | 10:39:17 AM], where the transcript picks up Freddy Lecue (Managing Director, Head of Frontier AI Models, Wells Fargo) beginning his talk on the firm's first foundation model for tabular transaction data. Those boundary lines belong to session 016 and are recorded in full there.

## Speaker details
No speakers are credited for this segment in the session manifest.

- **Unidentified venue PA announcer** (identified from session) - A house voice heard over the room public-address system at [01:42:43 | 10:30:34 AM] and [01:42:46 | 10:30:37 AM]. The voice is not on stage, is not named, and has no speaker record; the formulaic phrasing matches the venue announcement system captured in session 014 rather than the conference MC.
- **Freddy Lecue** - Managing Director, Head of Frontier AI Models, Wells Fargo (contextual attribution only). The 21 lines stamped [01:51:25 | 10:39:17 AM] belong to him by context: they open his talk "Wells Fargo Foundation Model: Application to Fraud Detection at Scale" (session 016), which begins at exactly this timestamp. He is credited in the manifest for session 016 (order 16), and his full speaker profile is recorded in session 016's record. Links: [LinkedIn](https://www.linkedin.com/in/freddylecue)

## Full timestamped transcript
```
[01:42:43 | 10:30:34 AM] The current program has finished its run.
[01:42:46 | 10:30:37 AM] Please collect your belongings and proceed through the main doors for your next scheduled task.
[01:51:25 | 10:39:17 AM] And I'm going to show you the work we've been doing lastly on building our first foundation model, a Wells Fargo foundation model.
[01:51:25 | 10:39:17 AM] So I explain why we did that, how we did it, and what we accomplished in doing so.
[01:51:25 | 10:39:17 AM] So, first, foundation model, it doesn't necessarily need to be language-based.
[01:51:25 | 10:39:17 AM] I mean, we're all playing with Claude and ChatGPT and others.
[01:51:25 | 10:39:17 AM] They're all language-based foundation models.
[01:51:25 | 10:39:17 AM] In financial services, we also have language, of course, from unstructured representation data.
[01:51:25 | 10:39:17 AM] But we also have a lot of structured representation, a lot of these data is tabular data.
[01:51:25 | 10:39:17 AM] We have a lot of information from our customers.
[01:51:25 | 10:39:17 AM] We have information in investment banking, consumer banking, and all of these data is data that we have in Wells Fargo and all big financial organizations have too.
[01:51:25 | 10:39:17 AM] And we want to take benefit of all of this huge amount of data that we have.
[01:51:25 | 10:39:17 AM] And it's not like you just take it and put it in a language model and get the best of it.
[01:51:25 | 10:39:17 AM] Of course, you can get a lot of benefit out of it, but it's not necessarily the best way to do it.
[01:51:25 | 10:39:17 AM] So what we decided to do is to look at the data we have, all the transactions, all the customer transactions that are doing with their debit card, credit card, digital, check, all of those coming from many different channels, and see if we can.
[01:51:25 | 10:39:17 AM] Builds from the show model that we can use and fine-tune for downstream tasks like credit scoring, or that you can use it for fraud detection, anti-money laundering, do marketing.
[01:51:25 | 10:39:17 AM] So how we can build one backbone that you can use and streamline across downstream tasks.
[01:51:25 | 10:39:17 AM] So now you're moving from many models very siloed across different organizations into really one backbone that every organization can just reuse because you learn the representations of customers' transactions at scale.
[01:51:25 | 10:39:17 AM] So that's the intent.
[01:51:25 | 10:39:17 AM] And just spoiler alert, you may say, Hey, that's tabular data.
[01:51:25 | 10:39:17 AM] Why do you just don't use XGBoost and the usual suspect?
[01:51:25 | 10:39:17 AM] We did that.
[01:51:25 | 10:39:17 AM] This is the model we had in production.
```
