---
title: Give agents context they can trust
description: How do you stop useful context from becoming stale context? Compare
  sessions from both days of AI Engineer NYC 2026, check the limits, and try a
  small experiment.
sidebar:
  label: Company context
  order: 5
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Company context · Both days</p>

**How do you stop useful context from becoming stale context?**

Day 1 tackles changing schemas and expert knowledge. Day 2 adds dated company facts and a shared gateway for tools, memory, and monitoring.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

The talks treat context as something to build and maintain. A large document collection helps only when the agent receives the right meaning, permissions, and evidence.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Southbridge · Day 1 | Adapts schemas to the question and uses different model roles within a data pipeline. |
| Citadel Securities · Day 2 | Tracks dated beliefs about the organization, reconciles sources, and preserves history as facts change. |
| Intuit Credit Karma · Day 2 | Centralizes tool access, monitoring, memory, and context selection through shared infrastructure. |

[Southbridge · Day 1](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/) · [Citadel Securities · Day 2](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/) · [Intuit Credit Karma · Day 2](/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/)

## Where the evidence stops

Compression can remove the evidence needed to notice a contradiction. A quiet data source is missing signal, not confirmation. The context optimizer’s reported savings describe its demonstrations and workloads.

## Try this on your workload

1. Choose one status question and collect dated evidence from two sources.
2. Keep source identifiers and timestamps while creating a shorter context for the agent.
3. Test an outdated claim, conflicting updates, and a source that stops reporting.

### Measure the result

Compare correct answers, unsupported certainty, stale facts used, tokens consumed, and whether the agent can point back to the deciding evidence.

## Read the source sessions

- **Southbridge · Day 1.** [Our session notes](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/hrishi-olickel-just-in-time-ontologies) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=16137s)
- **Citadel Securities · Day 2.** [Our session notes](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=23922s)
- **Intuit Credit Karma · Day 2.** [Our session notes](/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=14328s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
