---
title: Agenda and stream notes · Both days
description: Chronology and recording limits for the October 13 and 14
  main-stage livestreams.
---

These notes describe the recordings. For engineering lessons, start with the [two-day digest](/).

[Day 1](#day-1) · [Day 2](#day-2)

## Day 1

October 13, 2026 · [Day 1 digest](/day1/) · [Source video](https://www.youtube.com/watch?v=akEqiXFo3GM)

### The day in one table

| Wall clock | What happened | Why it mattered |
|---|---|---|
| 8:56 AM | [Show open and AIE welcome](/sessions/001-show-open-aie-welcome-from-gm-lia-leah-mcbride/), then [MC welcome](/sessions/002-welcome-remarks-mc-alex-lieberman-on-edge-city-conference/) | Lia McBride opened the third New York event. Alex Lieberman framed the room as an "Edge City" living six months to two years ahead of AI consensus. |
| 9:02 AM | [Vault: Making Unstructured Data Work for Investing (Bridgewater)](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) | A governed 100-million-document corpus. Humans read about 300 words a minute; agents read about 30,000. A 200-example benchmark lifted precision at 10 from about 60% to 90-95%. |
| 9:19 AM | [Anthropic: Accelerating frontier AI in Financial Services](/sessions/006-anthropic-accelerating-frontier-ai-in-financial-services/) | A five-layer agent foundation (MCP connectors, skills, identity, approval, evals). One bank cut $120 million of potential auto-loan fraud in 12 months. |
| 9:38 AM | [Balancing Acceleration and Safety for AI Agents (Two Sigma)](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/) | The $900 million Citi/Revlon wire error, retold. Five composable controls let a regulated firm grant agents real autonomy. |
| 9:58 AM | [Does Code Quality Even Matter? (Capital One)](/sessions/010-does-code-quality-even-matter-understanding-execution/) | Software splits into durable and disposable. Quality matters for the first, not the second, and rigor can be made cheap. |
| 10:15 AM | [What does an AI engineer do? (Arize AI)](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) | Build the loop, not the feature. Arize's Signal agent reads traces and opens fixes; telemetry should serve agents first. |
| 10:39 AM | [Wells Fargo Foundation Model for fraud detection](/sessions/016-wells-fargo-foundation-model-application-to-fraud-detection/) | A 1-billion-parameter model pre-trained from scratch on billions of monthly transactions. It beat the production XGBoost model on detection rate, false positives, and latency inside the 250 ms decline window. |
| 11:08 AM | [Inside Arca's long-horizon agents that run the business](/sessions/018-inside-arca-s-long-horizon-agents-that-run-the-business/) | Agents own 10-day client goals end to end. A signals engine lets agents watch the world so people do not have to. |
| 11:31 AM | [Intent Based Auth (panel)](/sessions/020-intent-based-auth-panel-runtime-authorization-for-agents/) | OAuth 2.0 designer Dick Hardt said people "grabbed" OAuth for agents. The panel argued for per-tool-call authorization, missions, and budgets. |
| 12:15-2:05 PM | Seven unlisted lunch talks: [Range](/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/), [Keycard](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/), [Stealthium](/sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your/), [Railway](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/), [Southbridge](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/), [Perpetual](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/), [Flywire](/sessions/030-extra-lunch-talk-flywire-s-internal-ai-platform-structured-wo/) | The agenda called this a Networking Break. The stream carried almost two hours of unpublished technical content, including two of the day's most concrete security talks. |
| 1:57 PM | [Great Agents Start with Great Infrastructure (Modal)](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/) | Sandboxes now hold multiple containers and sidecars. Production scale: 20 million snapshots a week, 8 petabytes a day, one workload needing 10,000 sandboxes per second. |
| 2:22 PM | [Beyond the Model Card (Vals AI)](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/) | No single model leads every task. Replaying GitHub pull-request history as agent tasks cut one team's spend 90%. |
| 2:44 PM | [AI and the Future of Fundamental Investing (Kepler fireside)](/sessions/035-ai-and-the-future-of-fundamental-investing-kepler-fireside/) | Jack Woodruff: alpha stays divergent, prep work falls from six-to-eight hours to about five minutes, and humans stay the bottleneck. |
| 2:52 PM | [Shipping like a startup, regulated like a bank (Revolut)](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) | Self-hosted GLM on 56 B200 GPUs. Blended token cost fell to 30 cents per million - one-tenth of the old invoice - with 70% better lead time. |
| 3:17 PM | [Everyone Has AI. Who Has the Advantage?](/sessions/038-everyone-has-ai-who-has-the-advantage-three-pillars-design/) | Only about 37% of enterprises report positive EBIT contribution from AI. Judgment, problem selection, and workflow redesign separate leaders. |
| 4:02 PM | [A Hedge Fund as a Function (Coatue)](/sessions/043-a-hedge-fund-as-a-function-coatue/) | The firm compresses context into one tuple: selection, size, timing. Each decomposed step runs on the best of four runners - code, statistics, LLMs, or people. |
| 4:17 PM | [Frontier Models for Acting in Space and Time (General Intuition)](/sessions/046-frontier-models-for-acting-in-space-and-time-pixels-to-actio/) | Pixels in, actions out. Medal yields over 1.5 trillion labeled action tokens a month. One model plays games at the highest level and controls over 10 robot types. |
| 4:36 PM | [Hermes gives you wings (Nous Research)](/sessions/049-hermes-gives-you-wings-build-agents-on-open-foundations-you/), then [Closing Remarks](/sessions/051-closing-remarks-speaker-applause-sponsors-housekeeping-netwo/) | Commoditized models push labs toward the agent layer. Rolnick argued for open foundations you own. The day wrapped by 4:53 PM. |

### Divergences from the published agenda

- **The lunch block replaced the Networking Break.** The 12:15-2:05 PM slot is the only agenda item with no matching segment on the stream. It carried the seven unlisted talks above plus the early Modal start. (timeline)
- **The afternoon ran 25-30 minutes ahead of the agenda from about 2 PM.** Modal started about 26 minutes early ([Great Agents Start with Great Infrastructure](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/), [Hold after Modal talk ends early: no speech or OCR for 10.5 minutes before the Vals AI session](/sessions/032-hold-after-modal-talk-ends-early-no-speech-or-ocr-for-10-5/)), the Revolut talk aired at 2:52 PM against a 3:20 PM slot ([Shipping like a startup, regulated like a bank](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/), [Break / room turnaround in Simons Room: after "Shipping like a startup, regulated like a bank" (David Abitbol, Revolut), before "Everyone Has AI. Who Has the Advantage?" (Sid Pednekar) - 13.6 min with no transcribed audio](/sessions/037-break-room-turnaround-in-simons-room-after-shipping-like-a/)), and Coatue's keynote aired at 4:02 PM against a 4:30 PM slot ([A Hedge Fund as a Function](/sessions/043-a-hedge-fund-as-a-function-coatue/)).
- **The "after stream end" items actually aired.** The agenda annotated [Hermes gives you wings](/sessions/049-hermes-gives-you-wings-build-agents-on-open-foundations-you/) and [Closing Remarks](/sessions/051-closing-remarks-speaker-applause-sponsors-housekeeping-netwo/) as starting after the stream cut. Both aired, at 4:36 PM and 4:51 PM, because the day ran early. They are not gaps.
- **The stream cut early relative to the published day.** The broadcast ended at 4:53:42 PM ET, after applause following the closing remarks - well before the agenda's 5:25-5:30 PM Closing Remarks slot. ([Silence after final sign-off until the livestream cuts (applause or outro, untranscribed)](/sessions/052-silence-after-final-sign-off-until-the-livestream-cuts-appla/))
- **Stream-only artifacts.** The feed opened with an eight-minute countdown hold ([Pre-show countdown hold before show open (holding slide, pre-show music, no speech)](/sessions/000-pre-show-countdown-hold-before-show-open-holding-slide/)) and held through long untranscribed changeovers between afternoon talks: 10.5 minutes after Modal ([Hold after Modal talk ends early: no speech or OCR for 10.5 minutes before the Vals AI session](/sessions/032-hold-after-modal-talk-ends-early-no-speech-or-ocr-for-10-5/)), 12 minutes after Vals ([Break / stage changeover after the Vals AI evals talk (12 min, no speech on stream)](/sessions/034-break-stage-changeover-after-vals-ai-evals-talk-12-min-no/)), 13.6 minutes after Revolut ([Break / room turnaround in Simons Room: after "Shipping like a startup, regulated like a bank" (David Abitbol, Revolut), before "Everyone Has AI. Who Has the Advantage?" (Sid Pednekar) - 13.6 min with no transcribed audio](/sessions/037-break-room-turnaround-in-simons-room-after-shipping-like-a/)), 12.7 minutes before the MC returned ([Untranscribed gap after afternoon talk, before MC returns (12m44s; room changeover / idle stream)](/sessions/039-untranscribed-gap-after-afternoon-talk-before-mc-returns/)), and 10.4 minutes inside the welcome-back block ([Untranscribed gap inside the welcome-back block (~10.3 min; possible sponsor reel, video, or dead air before the MC resumes)](/sessions/041-untranscribed-gap-inside-the-welcome-back-block-10-3-min/)). Treat the agenda as a prior, not a grid.

## Day 2

October 14, 2026 · [Day 2 digest](/day2/) · [Source video](https://www.youtube.com/watch?v=jiUC6IUMdvc)

### The day in one table

| Wall clock | What happened | Why it mattered |
|---|---|---|
| 8:55:37 AM | [Welcome remarks - Ksenia Se (Turing Post)](/day2/001-welcome-remarks-mc-intro-final-day-welcome-sponsor-acknowled/) | Framed day three as capabilities, agents, and who manages them; named the four rooms and the ROI question. |
| 9:00:35 AM | [Ramp - Chasing capabilities while waiting for the frontier](/day2/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app/) | Applied research beat waiting: a post-trained Qwen 3.5 35B specialist shipped under frontier orchestrators, and a 10,000-agent pen test found seven high-severity bugs, all patched. |
| 9:15:03 AM | [Sonar - The Machine that Changed the World, vAI](/day2/004-the-machine-that-changed-the-world-vai-engineering-confidenc/) | Agent-written code rose 2,450% while releases rose only 30%; human review fails under that volume, so confidence must be engineered in. |
| 9:32:03 AM | [Coinbase - Trusting Agents in Policy-Driven Workflows](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/) | Policy as code, deterministic DAGs outside, adaptive agent loops inside, autonomy granted only on measured eval quality. |
| 9:50:08 AM | [OpenAI - Building the Next Chapter of AI in Finance](/day2/007-building-the-next-chapter-of-ai-in-finance-chatgpt-for-finan/) | ChatGPT for financial services, one month old, built with Morgan Stanley and Evercore; expert-level finance judgment predicted for 2027. |
| 10:09:25 AM | [Bloomberg - Security in the Age of AI](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/) | A July 26 sandbox escape ran 17,600 agent actions in 4.5 days before detection; the answer is deterministic controls outside the model. |
| 10:40:32 AM | [Compound AI - Towards Autonomous Analysts in Finance](/day2/012-towards-autonomous-analysts-in-finance-compound-long-running/) | Rebuilt Office with 1.5 trillion tokens and 8M+ lines of code so long-running finance agents can move from copilot to autopilot. |
| 11:05:43 AM | [SemiAnalysis - Not All GPU's Are Deployed The Same](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/) | Two B200 stacks, same model and target: about 200 versus about 300 generated tokens per second at P90. The operator is the multiplier. |
| 11:30:35 AM | [San Francisco Compute - How Compute Markets Work](/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/) | Credit, not power, limits AI; the deposit to start a lab climbed from $10 million to $1 billion in three years. |
| 11:55:58 AM | [Jump Trading - The Dark Pools of Compute](/day2/018-the-dark-pools-of-compute-unlit-otc-compute-markets-jevons-p/) | Physical compute trades unlit, over chat; 15-25% prepayments squeeze middle-market buyers and make procurement a runway decision. |
| 12:20:23 PM | [Compute Exchange + Silicon Data - Carmen Li](/day2/020-ceo-compute-exchange-the-only-neutral-gpu-marketplace-silico/) | GPU term structure turned contango; CME will settle H100 and B200 futures on Silicon Data indices within weeks. |
| 12:39-2:03 PM | [Published "Networking Break" carried recorded, unlisted talks](/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/) | Intuit Credit Karma's MCP stack, Michele Grant's trust framework, Jellyfish's cost-per-PR research, and Nori Agentic's sec-master talk aired only here. |
| 2:03:17 PM | [Built to Scale - Blackstone x Norm.ai fireside](/day2/031-built-to-scale-future-proofing-your-technology-roadmap-black/) | Fix the data strategy first; Norm's tens of thousands of hand-labeled evals let it score agents the day they arrived. |
| 2:30:20 PM | [Kepler - Why Wall Street Still Doesn't Trust AI](/day2/033-why-wall-street-still-doesn-t-trust-ai-kepler-verification-d/) | Code writes every number through pointers; citations are verified, corrected at search time, or refused. |
| 2:52:53 PM | [Google DeepMind - Coding an Autonomous Wall Street Coworker](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/) | Gemini managed agents with write-only credentials, un-editable hooks, and cron triggers; Gemini 4.0 recap from the day before. |
| 3:19:18 PM | [Citadel Securities - Your Company Has No Model of Itself](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/) | Treat the company as a state estimator: half of delivery dates change within two months, and 90% of those changes slip later. |
| 3:39:53 PM | [Prime Intellect - Self-Improving Organizations](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/) | A $300K trained model now competes for knowledge work; train at night on inference capacity that sits idle. |
| 4:07:06 PM | [CAIS accessibility talk, then a Coder talk cut mid-flow](/day2/042-scary-stories-of-ai-gone-wrong-three-real-incidents-and-the/) | Jemima Abu's 11:30 AM breakout aired at 4:07 PM; the off-agenda Coder talk was cut to a music slate at about 4:22 PM. |
| 4:26:03 PM | [Final block: Apollo fireside, Basis, Runway](/day2/045-ai-in-practice-an-inside-look-at-apollo-s-approach-rowspace/) | CLO portfolios went from 2-3 days to minutes; behavior specs supervise process; Runway demoed Continuum and promised release in 8-12 months. |
| 5:27:25 PM | [Closing remarks and the Swyx send-off](/day2/052-swyx-closing-remarks-thanks-ai-engineer-europe-london-februa/) | AI Engineer Europe returns to London in February; the World's Fair plans 10,000 people in San Francisco next summer. |

### Divergences from the published agenda

- **The morning ran three to five minutes ahead.** Sonar began 9:15:03 versus a
  9:18 slot, Coinbase 9:32:03 versus 9:36, OpenAI 9:50:08 versus 9:54, and
  Bloomberg 10:09:25 versus 10:12. Bloomberg closed at 10:25:29, about five
  minutes early, which produced a 15-minute hold before the 10:30 AM break
  ([Post-keynote hold and the 10:30-10:40am ET break (room turnover, no transcribed content)](/day2/011-post-keynote-hold-and-the-10-30-10-40am-et-break-room-turnov/)).
- **The 11:30 AM slot carried Evan Conrad, not the Coinbase talk.** Lincoln
  Murr's "Building the Financial Account for Agents" never appeared on this
  feed. The manifest's boundary check recorded the slot as a swap
  (timeline); the archived agenda copy
  lists Conrad in the Simons Room and Murr in the Shannon Room at the same
  time. Either way, this feed aired
  [How Compute Markets Work](/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/).
- **The lunch block never aired as a break.** Off-agenda content started at
  12:39:23 PM, one minute before the published 12:40 start, and ran to 2:02:56
  PM. The Blackstone fireside then began at 2:03:17 PM, about two minutes
  before its published 2:05 slot
  ([Built to Scale: Future-Proofing Your Technology Roadmap](/day2/031-built-to-scale-future-proofing-your-technology-roadmap-black/)).
- **Afternoon talks ran ahead, then overran.** The Gemini co-worker talk began
  2:52:53 versus a 2:55 slot and ended about three minutes early
  ([Coding an Autonomous Wall Street Coworker: Custom Skills, Connectors, and Event Hooks](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/)).
  Prime Intellect began 3:39:53 versus 3:45 and ran 3 minutes 22 seconds past
  its 4:03 close
  ([Self-Improving Organizations](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/)).
- **A 22-minute published hole, 4:03 to 4:25 PM, was filled with two unscheduled
  talks** ([Stop Wasting Tokens on Products People Can’t Use](/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/),
  [Scary stories of AI gone wrong: three real incidents and the infrastructure controls that prevent them](/day2/042-scary-stories-of-ai-gone-wrong-three-real-incidents-and-the/)).
  One was an 11:30 AM breakout moved by nearly five hours; the other had no
  agenda entry.
- **The early stream cut.** At about 4:22 PM the feed cut the Coder talk
  mid-flow, on "Before I get into the stories, though, let me set up a little
  bit more context," and showed a branded music slate for about 3 minutes 45
  seconds. The three promised incidents never aired
  ([Untranscribed break interstitial: stream cuts from the Coder talk (Zhao Chenjiang) mid-flow to a music slate; captions resume at the welcome-back voiceover for the final block](/day2/043-untranscribed-break-interstitial-stream-cuts-from-the-coder/)).
- **The final block drifted late by cumulative overruns.** Apollo ran about two
  minutes past 4:48, Basis started 1 minute 53 seconds late and ended 3 minutes
  32 seconds past 5:06, and Runway started 3 minutes 44 seconds late and ended
  2 minutes 46 seconds past 5:24
  ([Everything will be Simulated](/day2/049-everything-will-be-simulated-runway-video-models-next-frame/)).
  Closing remarks began 5:27:25 versus the published 5:25, and Swyx's last line
  landed at 5:30:36, 36 seconds past the published close.
- **Net effect.** Measured item by item, the day drifted by minutes, not by
  tens of minutes. The largest divergences are structural: the lunch block that
  carried recorded talks, the 22-minute hole filled from other rooms, and the
  mid-talk cut at 4:22 PM.
