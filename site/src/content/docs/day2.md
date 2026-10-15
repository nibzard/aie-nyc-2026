---
title: Day 2 digest · Oct 14
description: Day 2 of AI Engineer NYC 2026, October 14, 2026. Trust,
  verification, compute economics, and what makes agent work valuable.
---

<p class="digest-kicker">Day 2 · October 14, 2026 · Main-stage livestream</p>
Trust, verification, compute economics, and what makes agent work valuable.

[Lessons from both days](/) · [Day 1 digest](/day1/) · [Day 2 session summaries](/sessions-index/?day=2)

## Practical takeaways for AI engineers

- Apply the rule of two before you ship an agent: of untrusted input, sensitive
  data, and external action, allow any two together. All three require human
  sign-off ([Bloomberg](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/)).
- Give every agent one short-lived, scoped identity. Inventory agent tokens and
  their expiry this week, and block outbound DNS by default
  ([Bloomberg](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/)).
- Treat code confidence as a product of intent, guardrails, verification, and
  evidence. Any element at zero makes confidence zero
  ([Sonar](/day2/004-the-machine-that-changed-the-world-vai-engineering-confidenc/)).
- Post-train a small specialist under a frontier orchestrator. Ramp's Qwen 3.5
  35B beat Opus 4.6 on exact task accuracy at far lower latency
  ([Ramp](/day2/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app/)).
- Keep workflows "deterministic on the outside and adaptive on the inside," and
  run evaluations in repeated series as a statistical analysis, not one-off
  output comparison
  ([Coinbase](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/)).
- Route every tool call through one gateway with JWT auth, review every MCP
  tool with security, and redact PII above a severity threshold before it
  reaches any model or log
  ([Intuit Credit Karma](/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/)).
- Run a context optimizer before every call. The demo cut one query from
  24,000 tokens to 2,400, and typical savings ran 70-78%
  ([Intuit Credit Karma](/day2/022-moving-ai-agents-from-experiment-to-enterprise-production-in/)).
- Store agent credentials write-only behind a network proxy that swaps dummy
  values only on approved domains, and put deterministic guards in protected
  hook files the agent cannot edit
  ([Google DeepMind](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/)).
- Write behavior specs before you change agent context, then reuse them as a
  rubric over unlabeled trajectories. Fork the trajectory at the bad decision
  ([Basis](/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/)).
- Demand a written value case with a pre-deployment baseline per metric. "If
  the IMO cannot state the baseline today, do not deploy."
  ([Michele Grant](/day2/024-the-agent-works-does-anyone-trust-it-michele-grant-value-cas/)).
- Track cost per merged PR, not the token bill. AI is about 2.5% of the cost of
  a merged PR; salary is the other 97.5%
  ([Jellyfish](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/)).
- Treat evals as test cases and turn production traces into training labels;
  route between big and small models, and schedule training runs on inference
  capacity that sits idle at night
  ([Prime Intellect](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/)).
- Buy compute by price per acceptable token and grade the operator, not just
  the chip. The same B200 delivered about 50% more output at P90 in the better
  stack ([SemiAnalysis](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/)).

## Five themes of the day

1. **Trust, not capability, is the bottleneck.** Carried by
   [Sonar](/day2/004-the-machine-that-changed-the-world-vai-engineering-confidenc/),
   [Coinbase](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/),
   [Michele Grant](/day2/024-the-agent-works-does-anyone-trust-it-michele-grant-value-cas/),
   [Kepler](/day2/033-why-wall-street-still-doesn-t-trust-ai-kepler-verification-d/),
   and [Basis](/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/).
   Sonar's numbers set the frame: asynchronous agents lifted lines of code
   2,450% and commits 240%, but releases only 30%, and in one study humans
   agreed with AI four out of five times when the AI was wrong. Kepler gave the
   finance version: trust is structural, so "if a model cannot de-resolve that
   pointer, it cannot print that number out."
2. **Security and governance move outside the model.** Carried by
   [Bloomberg](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/),
   [Intuit Credit Karma](/day2/022-moving-ai-agents-from-experiment-to-enterprise-production-in/),
   [Google DeepMind](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/),
   and [Coder](/day2/042-scary-stories-of-ai-gone-wrong-three-real-incidents-and-the/).
   Bloomberg's catalog is the strongest evidence: escaped sandbox agents took
   17,600 actions in four and a half days, a Morse-code payload passed syntax
   guardrails, and a fake NPM package shipped 15 clean releases before adding
   one exfiltration line. Every fix was deterministic and outside the model.
3. **Compute becomes a financial market, and credit is the constraint.**
   Carried by [SemiAnalysis](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/),
   [SF Compute](/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/),
   [Jump Trading](/day2/018-the-dark-pools-of-compute-unlit-otc-compute-markets-jevons-p/),
   and [Compute Exchange](/day2/020-ceo-compute-exchange-the-only-neutral-gpu-marketplace-silico/).
   The strongest claim is Conrad's: "You hit credit way before you hit power,"
   with the deposit to start a lab rising from $10 million to $1 billion in
   three years. Jump quantified the squeeze: 15-25% prepayment on a $100
   million cluster, and Compute Exchange reported the term structure in
   contango with CME futures settling on its indices within weeks.
4. **Finance is the first production customer for agents.** Carried by
   [OpenAI](/day2/007-building-the-next-chapter-of-ai-in-finance-chatgpt-for-finan/),
   [Compound AI](/day2/012-towards-autonomous-analysts-in-finance-compound-long-running/),
   [Nori Agentic](/day2/029-agentifying-a-sec-master-nori-agentic-podcast-format-aie-onl/),
   [Citadel Securities](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/),
   and [Apollo](/day2/045-ai-in-practice-an-inside-look-at-apollo-s-approach-rowspace/).
   Apollo's numbers are the most concrete: mock CLO portfolios of 200-400
   credit names went from two to three days in Excel to minutes at 80-90%
   completion. Compound spent 1.5 trillion input-output tokens rebuilding
   Office so agents can write files firms actually trust.
5. **The self-improving layer: evals, post-training, world models, simulation.**
   Carried by [Ramp](/day2/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app/),
   [Norm.ai](/day2/031-built-to-scale-future-proofing-your-technology-roadmap-black/),
   [Prime Intellect](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/),
   and [Runway](/day2/049-everything-will-be-simulated-runway-video-models-next-frame/).
   Ramp's pen-test swarm bought detection rate with tokens five times cheaper
   than frontier reasoning; Norm's regression habit produced tens of thousands
   of hand-labeled evals; Prime Intellect cited a $300K knowledge-work model;
   Runway closed the day by claiming simulation "by brute force of scale."

## Talks you might have missed

The published agenda listed one item for the Simons Room from 12:40 to 2:05 PM:
"Networking Break." The feed never went quiet. Eight session records sit inside
that window: four distinct recorded talks (the Intuit talk holds two catalog
records), plus applause, an end screen, and an off-air pre-roll. None of the
talks appears in this room's published program:

- [Intuit Credit Karma enterprise MCP talk](/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/)
  (12:39:24-1:08:53 PM), recorded; the closer "Thank you so much for watching
  this video" proves playback. The catalog holds two records for it
  ([Moving AI agents from experiment to enterprise production (Intuit Credit Karma: LangGraph, MCP gateway, evals, memory, PII blocking) -- off-agenda](/day2/022-moving-ai-agents-from-experiment-to-enterprise-production-in/)
  and 023).
- [The Agent Works. Does Anyone Trust It? - Michele Grant](/day2/024-the-agent-works-does-anyone-trust-it-michele-grant-value-cas/)
  (1:08:59-1:24:15 PM), a $15 billion M&A case with a four-stage autonomy
  scorecard.
- [Tokens Are the Cheap Part - Steve Jamison, Jellyfish](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/)
  (1:24:40-1:42:06 PM), recorded direct to camera.
- [End-screen music](/day2/027-end-screen-transition-music-after-recorded-jellyfish-talk/),
  then a 28-second [off-air pre-roll](/day2/028-off-air-pre-roll-two-speakers-planning-edits-and-naming-thei/)
  in which the Nori founders name their agent "Jiro" and plan an edit.
- [Agentifying a SEC Master - Nori Agentic](/day2/029-agentifying-a-sec-master-nori-agentic-podcast-format-aie-onl/)
  (1:42:54-2:02:56 PM), an AIE online-track recording in podcast format with
  the agent drawing on screen.

Two more unlisted items appeared in the afternoon. Jemima Abu's CAIS
accessibility talk, published as an 11:30 AM breakout in the McCarthy Room,
[aired on this feed at 4:07 PM](/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/).
Zhao Chenjiang's Coder talk on three AI incidents
[ran at 4:17 PM](/day2/042-scary-stories-of-ai-gone-wrong-three-real-incidents-and-the/)
with no agenda entry at all. Swyx's send-off at 5:28 PM, which announced AI
Engineer Europe and the World's Fair, is also
[off-agenda](/day2/052-swyx-closing-remarks-thanks-ai-engineer-europe-london-februa/).

These items matter for two reasons. First, they carry concrete numbers the
main program never repeated: 70-78% token savings from a context optimizer,
cost per merged PR instead of token bills, and a 58% cost cut from an
accessibility skill. Second, anyone reconstructing the event from the published
agenda alone would miss them, because four of the talks were recorded for the
online track and simply played into the break.

## The most quotable moments

Quotes are copied exactly from each session record.

> "And so, given all this, a question that I sometimes get: why not just wait?"
> - Alexander Shevchenko, Ramp ([00:21:34](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=1294s))

> "So that, in essence, is how we think about the challenge of the future: that code is abundant, that confidence is scarce."
> - Tariq Shaukat, Sonar ([00:50:42](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=3042s))

> "So the agents took 17,600 actions in four and a half days."
> - Andrey Rybka, Bloomberg ([01:30:39](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=5439s))

> "You hit credit way before you hit power."
> - Evan Conrad, San Francisco Compute ([02:58:15](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=10695s))

> "I want to stress, though, diminishing returns is not the same as no returns."
> - Steve Jamison, Jellyfish ([04:52:11](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=17531s))

> "If a model cannot de-resolve that pointer, it cannot print that number out."
> - Vinoo Ganesh, Kepler ([06:03:53](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=21833s))

> "The reality is every fact has a half-life."
> - Joao Wenzel, Citadel Securities ([06:48:00](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=24480s))

> "The model just knows how to do that by brute force of scale."
> - Cristóbal Valenzuela, Runway ([08:35:54](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=30954s))

## Watch or browse the day

[Watch the Day 2 recording](https://www.youtube.com/watch?v=jiUC6IUMdvc) · [Agenda and stream notes](/stream-notes/#day-2) · [All Day 2 summaries](/day2-sessions/)

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
