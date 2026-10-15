---
title: Put controls outside the agent
description: Which boundary still holds when the agent follows a bad
  instruction? Compare sessions from both days of AI Engineer NYC 2026, check
  the limits, and try a small experiment.
sidebar:
  label: Security
  order: 2
prev: false
next: false
---

<p class="digest-kicker">Engineering field guide · Security · Both days</p>

**Which boundary still holds when the agent follows a bad instruction?**

Pair task-scoped permissions with deterministic checks. Day 2 adds incident evidence for isolation, network limits, and short-lived identities.

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

Keycard, Two Sigma, and Bloomberg place enforceable controls around the model. The model’s intention to finish a task does not grant permission to take an action.

## How the approaches differ

| Session | Approach |
| --- | --- |
| Keycard · Day 1 | Demonstrates task-scoped authorization and credential exchange for individual tool calls. |
| Two Sigma · Day 1 | Combines a registry, risk review, runtime restrictions, evaluations, and selective human review. |
| Bloomberg · Day 2 | Uses incidents to examine isolation, network access, identity, tenant checks, and detection failures. |

[Keycard · Day 1](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Two Sigma · Day 1](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/) · [Bloomberg · Day 2](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/)

## Where the evidence stops

A sandbox cannot replace tool authorization, and tool authorization cannot secure every network path. Incident examples motivate checks; they do not establish that a particular stack is safe.

## Try this on your workload

1. Use a test environment with fake secrets and tools that cannot affect live data.
2. Ask the agent to perform an allowed task, then add an untrusted document requesting an unrelated export.
3. Check whether the gateway denies the export, credentials stay hidden, and the audit log records the attempt.

### Measure the result

Record unauthorized actions allowed or blocked, false denials, missing audit events, and human approvals. Inspect enforcement even when the model refuses the request itself.

## Read the source sessions

- **Keycard · Day 1.** [Our session notes](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/kim-maida-lethal-trifecta) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=12957s)
- **Two Sigma · Day 1.** [Our session notes](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/) · [Official reading edition](https://aie-nyc-2026-talks.swyxio.workers.dev/talks/john-feminella-agent-safety) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM&t=3033s)
- **Bloomberg · Day 2.** [Our session notes](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=5329s)

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
