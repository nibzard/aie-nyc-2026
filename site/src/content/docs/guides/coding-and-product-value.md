---
title: Measure what actually reaches the user
description: Did the agent make delivery cheaper and the product better? Compare
  sessions from both days of AI Engineer NYC 2026, check the limits, and try a
  small experiment.
sidebar:
  label: Coding and product value
  order: 6
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Coding and product value · Both days</p>

**Did the agent make delivery cheaper and the product better?**

Connect code quality and product polish to delivery cost. Day 2 brings cost per merged pull request and accessibility requirements for coding agents.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

The talks connect generated code to the work of maintaining and using software. A passing build is one check in a larger delivery process.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Capital One · Day 1 | Separates disposable programs from software that people will keep changing. Quality decisions depend on that expected lifetime. |
| Railway · Day 1 | Makes product behavior concrete: saving, undo, shared URL state, consistent patterns, and verification through actual use. |
| Jellyfish · Day 2 | Looks at the full cost of a merged pull request, including developer time and diminishing returns. |
| CAIS · Day 2 | Adds accessibility requirements before generation, including semantic HTML and keyboard operation. |

[Capital One · Day 1](/sessions/010-does-code-quality-even-matter-understanding-execution/) · [Railway · Day 1](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/) · [Jellyfish · Day 2](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/) · [CAIS · Day 2](/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/)

## Where the evidence stops

CAIS’s reported 58% saving comes from one experiment. Railway’s “700 million tokens” aside is not a measured budget. Neither establishes an expected saving for your team.

## Try this on your workload

1. Choose a small feature and write its acceptance, recovery, and keyboard requirements.
2. Build it using the existing product patterns, then use it with a keyboard and test a failed save.
3. Record total delivery time, including review and repairs, against a comparable completed feature.

### Measure the result

Track accepted functionality, accessibility failures, rework time, and full delivery cost. Keep code volume separate from the outcome users receive.

## Read the source sessions

- **Capital One · Day 1.** [Our session notes](/sessions/010-does-code-quality-even-matter-understanding-execution/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/max-kanat-alexander-code-quality) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=4182s)
- **Railway · Day 1.** [Our session notes](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/mahmoud-abdelwahab-saas-replacements) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=15330s)
- **Jellyfish · Day 2.** [Our session notes](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=17044s)
- **CAIS · Day 2.** [Our session notes](/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=26790s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
