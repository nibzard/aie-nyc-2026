---
title: Buy useful output, not just GPU hours
description: What does one acceptable result really cost? Compare sessions from
  both days of AI Engineer NYC 2026, check the limits, and try a small
  experiment.
sidebar:
  label: Compute economics
  order: 3
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Compute economics · Both days</p>

**What does one acceptable result really cost?**

Start with Revolut’s serving results. Compare operator performance and understand how compute contracts affect access and cost.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

The useful purchase is completed work at an acceptable quality and latency. The chip model or token price alone leaves out important operating constraints.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Revolut · Day 1 | Reports an internal self-hosted deployment and serving changes made with a fixed GPU fleet. |
| SemiAnalysis · Day 2 | Compares output from different operators using the same hardware. It separates GPU-hour inputs from useful token output. |
| SF Compute · Day 2 | Examines access to capacity through contracts and credit. Procurement can limit a workload before hardware performance does. |

[Revolut · Day 1](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) · [SemiAnalysis · Day 2](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/) · [SF Compute · Day 2](/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/)

## Where the evidence stops

Revolut’s blended token cost depends on its utilization and deployment. Its reported lead-time improvement is an internal comparison, not an isolated model experiment. Operator benchmarks and financing terms also describe particular setups.

## Try this on your workload

1. Replay one representative workload against two serving options at the same concurrency.
2. Set a quality rubric and latency target before comparing costs.
3. Include retries, idle capacity, engineering time, and minimum commitments in the cost calculation.

### Measure the result

Compare cost per accepted task, latency at the 95th percentile, throughput at the target quality, and committed spending left unused.

## Read the source sessions

- **Revolut · Day 1.** [Our session notes](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/david-abitbol-revolut) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=21830s)
- **SemiAnalysis · Day 2.** [Our session notes](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=8707s)
- **SF Compute · Day 2.** [Our session notes](/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=10199s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
