---
title: Build an agent that can keep improving
description: What should persist between agent runs? Compare sessions from both
  days of AI Engineer NYC 2026, check the limits, and try a small experiment.
sidebar:
  label: Agent systems
  order: 1
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Agent systems · Both days</p>

**What should persist between agent runs?**

Connect traces, memory, triggers, and recovery. Then use that feedback to improve the model as well as its runtime context.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

The talks connect agent quality to a feedback loop. Traces, saved state, and human decisions give the next run information the previous run lacked.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Arize AI · Day 1 | Signal reads traces and proposes fixes. Issues and learned skills persist while temporary access is removed after each run. |
| Google DeepMind · Day 2 | Focuses on managed execution: triggers, protected hooks, and credentials kept behind a proxy. |
| Prime Intellect · Day 2 | Extends the loop toward model training. Traces and approvals can become evaluations and training labels. |

[Arize AI · Day 1](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) · [Google DeepMind · Day 2](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/) · [Prime Intellect · Day 2](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/)

## Where the evidence stops

Persistent memory and model training solve different problems. Training adds data, evaluation, and operating costs. The proposed overnight learning loop is not evidence that every organization benefits from daily training.

## Try this on your workload

1. Choose a recurring task with a clear trigger and save its run state outside the sandbox.
2. Interrupt a run and test whether it resumes without repeating completed actions.
3. Review ten runs and turn one recurring failure into a regression case before changing the agent.

### Measure the result

Track duplicate actions, recovery success, repeated mistakes, and time spent reviewing fixes. Use the baseline to decide whether a memory change helps.

## Read the source sessions

- **Arize AI · Day 1.** [Our session notes](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/aparna-dhinakaran-ai-engineer) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=5217s)
- **Google DeepMind · Day 2.** [Our session notes](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=22337s)
- **Prime Intellect · Day 2.** [Our session notes](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=25157s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
