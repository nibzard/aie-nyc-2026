---
title: Let the model plan. Make code enforce.
description: Which parts of the workflow should be deterministic? Compare
  sessions from both days of AI Engineer NYC 2026, check the limits, and try a
  small experiment.
sidebar:
  label: Workflows and trust
  order: 4
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Workflows and trust · Both days</p>

**Which parts of the workflow should be deterministic?**

Keep approvals, execution rules, arithmetic, and source checks explicit. Compare typed plans, policy-driven loops, and verified citations.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

Perpetual, Coinbase, and Kepler make important constraints explicit in software. They let models interpret work while keeping required execution rules visible.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Perpetual · Day 1 | Compiles a typed plan into an execution graph with explicit waits and approval states. |
| Coinbase · Day 2 | Keeps the outer process policy-driven while allowing adaptive loops inside individual steps. |
| Kepler · Day 2 | Uses source identifiers and code to retrieve facts and calculate numbers. It checks provenance as part of producing the answer. |

[Perpetual · Day 1](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/) · [Coinbase · Day 2](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/) · [Kepler · Day 2](/day2/033-why-wall-street-still-doesn-t-trust-ai-kepler-verification-d/)

## Where the evidence stops

Deterministic execution does not make an incorrect plan correct. A valid source identifier can still refer to the wrong period or document. Planning, retrieval, and policy checks each need their own evaluation.

## Try this on your workload

1. Choose a workflow with one factual lookup and one action requiring approval.
2. Make the model produce a typed plan. Have code validate it, fetch facts, and enforce approval.
3. Test a missing source, an old source, a rejected approval, and a retry after interruption.

### Measure the result

Count unsupported facts, actions taken without approval, duplicate actions, and successful recovery. Inspect the cases the system refuses as well as those it completes.

## Read the source sessions

- **Perpetual · Day 1.** [Our session notes](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/karthic-rao-reliable-smart-workflows) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=17430s)
- **Coinbase · Day 2.** [Our session notes](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=3087s)
- **Kepler · Day 2.** [Our session notes](/day2/033-why-wall-street-still-doesn-t-trust-ai-kepler-verification-d/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=20984s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
