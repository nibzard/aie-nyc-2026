---
title: The engineering lessons. Without the eight-hour replay.
description: "AI Engineer NYC 2026, distilled for AI engineers: practical
  lessons on evaluation, agent systems, security, workflows, and inference
  costs."
template: splash
hero:
  title: The engineering lessons. Without the eight-hour replay.
  tagline: AI Engineer NYC 2026, distilled for engineers building with AI. Read
    the takeaways, follow the sessions, and find ideas you can use.
  actions:
    - text: Find your topic
      link: "#find-a-lesson-for-what-you-are-building"
      icon: right-arrow
    - text: Read practical takeaways
      link: "#practical-takeaways-for-ai-engineers"
      variant: secondary
---

<p class="digest-kicker">October 13, 2026 · New York · Day one</p>
<p class="digest-navigation"><a href="/sessions-index/">Browse session summaries →</a></p>

## Find a lesson for what you are building

Start with a topic. Each link opens a session summary, key lessons, and a timestamped transcript.

<div class="reading-grid">
<article class="reading-card">
  <p class="card-label">01 / Evaluation</p>
  <h3>Turn past work into better evaluations</h3>
  <p>Build a small benchmark from real tasks. Use it to compare quality and cost before choosing a model.</p>
  <p class="card-links"><a href="/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/">Bridgewater <span aria-hidden="true">→</span></a><a href="/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/">Vals AI <span aria-hidden="true">→</span></a></p>
</article>

<article class="reading-card">
  <p class="card-label">02 / Agent systems</p>
  <h3>Build the loop around your agent</h3>
  <p>Connect traces, evaluations, memory, and recovery. See how teams run agents beyond a single request.</p>
  <p class="card-links"><a href="/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/">Arize AI <span aria-hidden="true">→</span></a><a href="/sessions/018-inside-arca-s-long-horizon-agents-that-run-the-business/">Arca <span aria-hidden="true">→</span></a></p>
</article>

<article class="reading-card">
  <p class="card-label">03 / Security</p>
  <h3>Give each tool call a clear boundary</h3>
  <p>Scope access to the task. Keep credentials, approval rules, and audit logs outside the agent.</p>
  <p class="card-links"><a href="/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/">Keycard <span aria-hidden="true">→</span></a><a href="/sessions/020-intent-based-auth-panel-runtime-authorization-for-agents/">Authorization panel <span aria-hidden="true">→</span></a></p>
</article>

<article class="reading-card">
  <p class="card-label">04 / Inference costs</p>
  <h3>Measure before you buy more compute</h3>
  <p>Compare serving choices and model routing. Revolut shares its self-hosting costs and tuning results.</p>
  <p class="card-links"><a href="/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/">Revolut <span aria-hidden="true">→</span></a><a href="/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/">Modal <span aria-hidden="true">→</span></a></p>
</article>

<article class="reading-card">
  <p class="card-label">05 / Workflows</p>
  <h3>Make execution predictable</h3>
  <p>Separate model judgment from deterministic steps. Learn from typed plans and task decomposition.</p>
  <p class="card-links"><a href="/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/">Perpetual <span aria-hidden="true">→</span></a><a href="/sessions/043-a-hedge-fund-as-a-function-coatue/">Coatue <span aria-hidden="true">→</span></a></p>
</article>

<article class="reading-card">
  <p class="card-label">06 / Domain knowledge</p>
  <h3>Put expert judgment into the system</h3>
  <p>Learn how planners write agent skills and how data pipelines adapt schemas to the task.</p>
  <p class="card-links"><a href="/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/">Range <span aria-hidden="true">→</span></a><a href="/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/">Southbridge <span aria-hidden="true">→</span></a></p>
</article></div>

## Practical takeaways for AI engineers

- Benchmark the system before you fix it. About 200 hand-labeled questions, built in under a week, turned a vague complaint into a metric - and five improvements moved precision at 10 from about 60% to 90-95%. ([Bridgewater](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/))
- Replay your own work history as evals. Treat each pull request as an issue-resolution pair, run agents against them, and learn which models are overkill. Vals cut spend 90% this way. Judge benchmarks on validity, reliability, and discriminability - not five or six vibe-check samples. ([Vals AI](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/))
- Authorize per tool call, not per agent. Use OAuth 2.0 token exchange so each call gets an ephemeral, task-scoped, attributable token that expires within minutes and is never stored. ([Keycard](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/), [Authorization panel](/sessions/020-intent-based-auth-panel-runtime-authorization-for-agents/))
- Score agents by risk and route review proportionally. A ticket summarizer and a production deployment agent do not belong in one approval queue; one heavy queue breeds shadow IT. ([Two Sigma](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/))
- Turn near-certain approvals into rules. If you would say yes 99.9999999% of the time, make it a deterministic fast path instead of a human prompt - consent fatigue is the failure mode. ([Two Sigma](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/))
- Have domain experts narrate judgment, not steps, when they write skills. Test on five to ten real runs before anyone else sees it, and ship with an owner plus a reviewer who is not the author. ([Range](/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/))
- Split translation from execution. One planner model call turns a request into a typed semantic graph; a compiler that never calls a model turns it into an immutable DAG. Make waits, approvals, and follow-ups first-class nodes, and fail closed. ([Perpetual](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/))
- Keep the authorization boundary outside the agent. Inject credentials the agent cannot see, control egress down to paths rather than domains, keep audit logs where the agent cannot reach them, and separate the supervising agent from the worker. ([Modal](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/), [Authorization panel](/sessions/020-intent-based-auth-panel-runtime-authorization-for-agents/), [Keycard](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/))
- Treat shared GPU hardware as an attack surface. A co-tenant fingerprinted model architecture at 97% and decode speed at 99.3% from timing alone. Do not place untrusted MIG slices next to sensitive models, and watch for one kernel relaunched thousands of times against the same 40 kilobytes. ([Stealthium](/sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your/))
- Tune serving before buying GPUs. With the fleet fixed at 56 B200s, Revolut moved throughput from about 3 to over 7 requests per second and cut time to first token from over 10 seconds to about 1.6 seconds. ([Revolut](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/))
- Ask explicitly for product polish from coding agents. Auto-save, optimistic updates, undo, archiving, and URL state are patterns agents skip by default. End every feature request with end-to-end verification by actually running it. ([Railway](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/))
- Trace the factory, not just the product. Instrument the coding agents behind your agents, and evaluate the evaluators against golden truth datasets before shipping a new judge. ([Arize AI](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/))

## Five themes of the day

1. **The diffusion gap: intelligence runs ahead of adoption.** [Anthropic](/sessions/006-anthropic-accelerating-frontier-ai-in-financial-services/) opened with it - what a model can do on its own doubles every four months, while three quarters of AI's economic gains go to a fifth of companies - and named finance the next threshold crossing after coding and cyber. [Sid Pednekar](/sessions/038-everyone-has-ai-who-has-the-advantage-three-pillars-design/) quantified the same gap from the buyer side: only about 37% of enterprises report positive EBIT contribution from AI, and only about 6% are high performers. The [MC's return segment](/sessions/042-mc-resumes-sponsor-acknowledgments-conference-reflections/) gave it a ladder: 90% LLM rollout, 60% trained users, 50% coding agents, 5% non-engineering agents. The [Kepler fireside](/sessions/035-ai-and-the-future-of-fundamental-investing-kepler-fireside/) added the human constraint - information still has to get into your head.
2. **Agents that run the business, not copilots beside it.** [Arca](/sessions/018-inside-arca-s-long-horizon-agents-that-run-the-business/) gives agents whole 10-day client outcomes; agents there "prompt people more than people are prompting agents" and have done "90% of the work" before a person acts. [Bridgewater](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) treats agents as a second class of reader: 100-plus queries per second against about 100 per hour from humans, ending in an always-on investor workbench. [Range](/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/) pushed authorship to non-coders - 24 skills company-wide, 17 in planning, all written by planners, marketers, and salespeople. [Arize](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) framed the engineer's job as building that always-on loop.
3. **Govern the agent: authorization, controls, and side channels.** [Two Sigma](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/) opened with the $900 million Citi/Revlon wire error - three humans approved a correct warning - and answered with five composable controls instead of lockdown. The [Intent Based Auth panel](/sessions/020-intent-based-auth-panel-runtime-authorization-for-agents/) and [Keycard's lethal-trifecta demo](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) converged on the same fix: authorize each tool call against a mission, with ephemeral tokens that expire within minutes. [Stealthium](/sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your/) extended the threat model to hardware: a GPU co-tenant fingerprinted model architecture at 97% accuracy from timing alone. [Revolut](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) showed the compliance end state - sandboxed, human-in-the-loop coding tasks that passed EU bank review.
4. **Evals built on your own work history are the moat.** [Vals AI](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/) made the sharpest cost claim of the day: free unlimited tokens burned $1.5 million in a month for 10 to 12 engineers, and replaying GitHub pull-request history as agent tasks cut spend 90% for the same output. Vals has crossed six trillion tokens of evaluation, and warns that "agents solve the test, not the problem." [Coatue](/sessions/043-a-hedge-fund-as-a-function-coatue/) agreed from the buy side: compartmentalize into units you can evaluate, then hill climb - without a North Star "you're just fidgeting around." [Southbridge](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/) ran a statewide Ohio entity-resolution job for $795 against a projected $10,000, and [Bridgewater](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) benchmarked search with about 200 hand-labeled examples in under a week.
5. **Own the substrate: infrastructure economics and open foundations.** [Revolut](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) self-hosts GLM on 56 B200 GPUs at 30 cents per million tokens - one-tenth of the previous Anthropic and OpenAI invoice - and improved lead time 70%. [Modal](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/) set the infrastructure bar: brains separated from hands, 10,000 sandboxes per second, and a warning not to vibe-code a sandbox platform. [Perpetual](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/) designed for about 95% of model decisions never needing a frontier model, so local inference becomes a configuration change. [Wells Fargo](/sessions/016-wells-fargo-foundation-model-application-to-fraud-detection/) trained its own 1-billion-parameter transaction model from scratch. [Nous Research](/sessions/049-hermes-gives-you-wings-build-agents-on-open-foundations-you/) closed the loop: build agents on open foundations you own, because tomorrow's moats are network effects, reputation, and reliability.

## Talks you might have missed

The published agenda listed a 12:15-2:05 PM Networking Break with no sessions. The livestream filled it with seven talks that never appeared on the schedule, plus an early Modal start. Room attendees who left for lunch missed them; stream viewers got almost two extra hours of content.

1. [We Let Our Financial Planners Write the Agents (Range)](/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/) - Matt Ragone, a certified financial planner who writes no code, on the pick-teach-pack-test-ship method for expert-written Claude skills.
2. [Your Agent Is a Lethal Trifecta (Keycard)](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) - Kim Maida demos an overprivileged agent leaking PII and dropping a production database, then rebuilds it with token exchange and intent-based authorization.
3. [What a GPU co-tenant can learn about your LLM from timing alone (Stealthium)](/sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your/) - Branislav Brzak on MIG and NVLink side channels: architecture fingerprinted at 97%, decode speed at 99.3%, no root and no data access.
4. [Become your company's SaaS layer (Railway)](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/) - an unnamed Railway engineer, recorded outdoors in Edinburgh, on replacing marketing SaaS with one agent-built internal tool, "700 million tokens later" including real-time collaboration.
5. [No universal schema (Southbridge)](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/) - Hrishi Olickel on just-in-time ontologies, model priors as an error class, and an Ohio entity-resolution job that finished at $795 on an $800 budget.
6. [Reliable and intelligent workflows for finance, wealth, and insurance (Perpetual)](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/) - Karthic Rao on the determinism-versus-judgment boundary, typed plans compiled by a model-free compiler, and 95% of decisions on a flash tier.
7. [Flywire's internal AI platform](/sessions/030-extra-lunch-talk-flywire-s-internal-ai-platform-structured-wo/) - Edu and Javi introduced the Victoria PaaS and the Orbit workflow platform before the stream audio cut mid-slide after 2 minutes 43 seconds. The rest of this talk exists only in the room.

Why this block matters: two of the day's most concrete security talks (023, 025) aired here, off-agenda, and the whole block is invisible in the published schedule. [Modal's talk](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/) then started at 1:57 PM, about 26 minutes before its 2:23 PM slot.

## The most quotable moments

- "And so our question for you is, does your AI know what's going on in the world, and does it remember what your firm has learned about it?" - Sam Green, Bridgewater, [00:30:51](https://www.youtube.com/watch?v=akEqiXFo3GM&t=1851s), [session 003](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/)
- "Intelligence is ahead of adoption. What a model can do on its own is doubling every four months." - Belinda Neal, Anthropic, [00:34:18](https://www.youtube.com/watch?v=akEqiXFo3GM&t=2058s), [session 006](/sessions/006-anthropic-accelerating-frontier-ai-in-financial-services/)
- "It's so that you can go fast and stop safely." - John Feminella, Two Sigma, on why cars have brakes, [01:09:34](https://www.youtube.com/watch?v=akEqiXFo3GM&t=4174s), [session 008](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/)
- "As an AI engineer, your job is no longer to just write the feature, write an AI feature." - Aparna Dhinakaran, Arize AI, [01:29:49](https://www.youtube.com/watch?v=akEqiXFo3GM&t=5389s), [session 013](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/)
- "In an AI-native company, you know you've built one when you can steer your business by steering your agents." - Aman Singh, Arca, [02:32:56](https://www.youtube.com/watch?v=akEqiXFo3GM&t=9176s), [session 018](/sessions/018-inside-arca-s-long-horizon-agents-that-run-the-business/)
- "First one, long context is a scam." - David Abitbol, Revolut, [06:10:58](https://www.youtube.com/watch?v=akEqiXFo3GM&t=22258s), [session 036](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/)
- "Every single thing that a human can see in pixels on the screen, an agent in your building should be able to see via API." - Frank Long, Coatue, [07:16:17](https://www.youtube.com/watch?v=akEqiXFo3GM&t=26177s), [session 043](/sessions/043-a-hedge-fund-as-a-function-coatue/)
- "Skynet was, after all, a closed source company." - Dillon Rolnick, Nous Research, [07:56:18](https://www.youtube.com/watch?v=akEqiXFo3GM&t=28578s), [session 049](/sessions/049-hermes-gives-you-wings-build-agents-on-open-foundations-you/)

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">Browse session summaries →</a> · <a href="/day2/">Day-two digest →</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a></p><p>Unofficial notes from the day-one main-stage livestream. Figures and results are reported by speakers. Use the linked sessions to check context.</p></div>
