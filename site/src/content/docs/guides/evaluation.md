---
title: Test the work and the way it gets done
description: How do you know an agent is doing useful work? Compare sessions
  from both days of AI Engineer NYC 2026, check the limits, and try a small
  experiment.
sidebar:
  label: Evaluation
  order: 0
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Evaluation · Both days</p>

**How do you know an agent is doing useful work?**

Day 1 builds benchmarks from real tasks. Day 2 adds behavior specs and regression tests for decisions inside long agent runs.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

Bridgewater, Vals AI, and Basis all make quality explicit. Real tasks and examples of accepted work give you a standard that a generic model ranking cannot supply.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Bridgewater · Day 1 | Measures retrieval with a small labeled question set. Precision at ten checks the usefulness of a search result list. |
| Vals AI · Day 1 | Replays completed tasks to compare success, cost, and speed. Partial credit and fully correct answers support different deployment decisions. |
| Basis · Day 2 | Adds behavior specs for the decisions inside a long run. These help inspect trajectories when you cannot label every possible final outcome. |

[Bridgewater · Day 1](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) · [Vals AI · Day 1](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/) · [Basis · Day 2](/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/)

## Where the evidence stops

A behavior check can explain a failure without proving the final answer is correct. Bridgewater’s reported search improvement and Vals’ spending reduction describe their own evaluations. Neither predicts your success rate.

## Try this on your workload

1. Choose twenty completed tasks and keep their accepted outputs as references.
2. Run two agent configurations on the same tasks. Grade final results against a written rubric.
3. Inspect failed runs against one behavior spec, such as checking a source before making a claim.

### Measure the result

Record fully correct tasks, behavior violations, reviewer time, and cost per accepted result. Keep some tasks out of prompt tuning.

## Read the source sessions

- **Bridgewater · Day 1.** [Our session notes](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/bridgewater-vault) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=829s)
- **Vals AI · Day 1.** [Our session notes](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/rayan-krishnan-jagged-frontier) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=20038s)
- **Basis · Day 2.** [Our session notes](/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=29357s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
