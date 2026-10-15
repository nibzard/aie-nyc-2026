---
title: Figure library
description: "19 redrawn figures from both days of AI Engineer NYC 2026: concept
  diagrams and data charts, each traced to its source session."
prev: false
next: false
---

<p class="digest-kicker">Reference · 19 figures · Both days</p>

Every figure below is redrawn from the session records of the October 13–14 main-stage livestreams. Numbers, names, and quotes are verbatim from the cited talks, including their hedges. Where a record gives no numbers, the figure carries the claim as text instead of invented bars.

[All session summaries](/sessions-index/) · [Day 1 digest](/day1/) · [Day 2 digest](/day2/)

## Concept diagrams

### The lethal trifecta

<figure class="library-figure">
<a class="figure-preview" href="/figures/lethal-trifecta.svg" aria-label="Open full-size figure: The lethal trifecta"><img src="/figures/lethal-trifecta.svg" alt="Venn diagram of untrusted content exposure, private-data access, and external communication. All three together require human sign-off." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>Three attack surfaces that are manageable in pairs and lethal together, with day two’s rule of two.</figcaption>
<a class="figure-full-size" href="/figures/lethal-trifecta.svg" aria-label="Open full-size figure: The lethal trifecta">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A Venn diagram of three circles: untrusted content exposure, private-data access, and external communication. Each pair may coexist, but the center intersection, where all three overlap, is marked lethal with a human-sign-off-required chip. A side panel carries day two's rule of two from the Bloomberg talk.</p></details>
</figure>

Drawn from [Your Agent Is a Lethal Trifecta](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Security in the Age of AI: Recent Attacks, Incidents & Defenses](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/).

### Authorize per tool call, not per agent

<figure class="library-figure">
<a class="figure-preview" href="/figures/per-tool-call-token-exchange.svg" aria-label="Open full-size figure: Authorize per tool call, not per agent"><img src="/figures/per-tool-call-token-exchange.svg" alt="Sequence diagram: a sandboxed agent requests a per-tool-call ephemeral token from a token exchange and calls the tool; audit logs stay outside the agent’s control." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>Ephemeral, task-scoped tokens that expire within minutes, replacing the stored long-lived OAuth token.</figcaption>
<a class="figure-full-size" href="/figures/per-tool-call-token-exchange.svg" aria-label="Open full-size figure: Authorize per tool call, not per agent">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A sequence diagram with four lanes: user, sandboxed agent runtime with a supervisor separate from the worker, token exchange security token service, and tool or MCP server. The user sends a mission of goal, allowed actions, and limits; the runtime exchanges the subject token for an ephemeral per-tool-call token that expires within minutes and is never stored; the user subject is kept down the chain. A contrast panel shows the replaced failure mode: an agent holding a long-lived OAuth token, drawn as a blocked dashed path.</p></details>
</figure>

Drawn from [Intent Based Auth](/sessions/020-intent-based-auth-panel-runtime-authorization-for-agents/) · [Your Agent Is a Lethal Trifecta](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Security in the Age of AI: Recent Attacks, Incidents & Defenses](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/).

### What a GPU co-tenant can learn from timing alone

<figure class="library-figure">
<a class="figure-preview" href="/figures/gpu-timing-side-channel.svg" aria-label="Open full-size figure: What a GPU co-tenant can learn from timing alone"><img src="/figures/gpu-timing-side-channel.svg" alt="A GPU split into two MIG partitions, a victim LLM tenant and an attacker tenant, with timing leaks through the shared memory barrier and NVLink." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>MIG and NVLink side channels that identified model architecture and decode speed without reading memory.</figcaption>
<a class="figure-full-size" href="/figures/gpu-timing-side-channel.svg" aria-label="Open full-size figure: What a GPU co-tenant can learn from timing alone">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>One GPU drawn as a rounded chip split into two MIG partitions by the GPU-wide memory barrier: a blue victim tenant serving an LLM with token bursts, and an orange attacker co-tenant reading a latency sparkline of its own loads. A side list gives the reported results: architecture and depth within 97 percent, decode speed 99.3 percent, about 3 microseconds median latency shift probed every 5 microseconds, 79.2 percent across NVLink against a 20 percent baseline, and detection in under 6 milliseconds. A mini diagram shows NVLink peer hops of about 890 nanoseconds idle rising to about 300 microseconds under load.</p></details>
</figure>

Drawn from [Extra lunch talk: what a GPU co-tenant can learn about your LLM from timing alone (MIG and NVLink side channels)](/sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your/).

### A hedge fund as a function

<figure class="library-figure">
<a class="figure-preview" href="/figures/hedge-fund-as-a-function.svg" aria-label="Open full-size figure: A hedge fund as a function"><img src="/figures/hedge-fund-as-a-function.svg" alt="Function diagram: external and internal context flow in; one tuple of selection, size, and timing flows out; each decomposed step runs on code, statistics, LLMs, or people." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>The whole firm compressed into one tuple, with every step run by the best of four runner types.</figcaption>
<a class="figure-full-size" href="/figures/hedge-fund-as-a-function.svg" aria-label="Open full-size figure: A hedge fund as a function">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Diagram of Frank Long's frame: a hedge fund is a function taking external context (news, prices, filings) and internal context (positions, risk limits, case-study history) and returning one tuple — selection, size, timing — whose time series constructs the portfolio. The function decomposes into gather, analyze, and decide steps, each run by the best of four runner types: deterministic code, classical statistics and ML, LLMs, or people.</p></details>
</figure>

Drawn from [A Hedge Fund as a Function](/sessions/043-a-hedge-fund-as-a-function-coatue/).

### Deterministic outside, adaptive inside

<figure class="library-figure">
<a class="figure-preview" href="/figures/deterministic-outside-adaptive-inside.svg" aria-label="Open full-size figure: Deterministic outside, adaptive inside"><img src="/figures/deterministic-outside-adaptive-inside.svg" alt="A deterministic workflow DAG with one node expanded to show an adaptive agent loop inside it." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>A fixed policy DAG shell with agent loops confined inside nodes, from two talks that converged on the same architecture.</figcaption>
<a class="figure-full-size" href="/figures/deterministic-outside-adaptive-inside.svg" aria-label="Open full-size figure: Deterministic outside, adaptive inside">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Nested-box diagram. An outer deterministic DAG workflow contains policy gates, parallel reviews, and waits, approvals, and follow-ups as first-class nodes; one agent node is expanded to show the adaptive directed-cyclic-graph loop of run steps, check, and apply feedback living inside it. Below, Perpetual's engine: a planner model call emits a typed semantic graph, a compiler that never calls a model turns it into an immutable hash-pinned DAG in eleven deterministic stages, checked against 42 typed action contracts with fail-closed behavior.</p></details>
</figure>

Drawn from [Trusting Agents in Policy-Driven Workflows](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/) · [Reliable and intelligent workflows for finance, wealth, and insurance](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/).

### The five-layer agent foundation

<figure class="library-figure">
<a class="figure-preview" href="/figures/five-layer-agent-foundation.svg" aria-label="Open full-size figure: The five-layer agent foundation"><img src="/figures/five-layer-agent-foundation.svg" alt="A five-layer stack: connectors, skills, identity and permissions, approval, and evals." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>Anthropic’s stack for shipping agents in regulated firms, walked through on a trade-break agent.</figcaption>
<a class="figure-full-size" href="/figures/five-layer-agent-foundation.svg" aria-label="Open full-size figure: The five-layer agent foundation">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A five-layer stack, walked bottom-up in the talk: connectors via MCP, skills, identity and permissions, approval, and evals. Each layer carries its one-line role and detail; a side chip gives the worked example of the trade break investigation agent, and a footer strip shows the industry arc from 2023 chatbots to the coming age of scale.</p></details>
</figure>

Drawn from [Anthropic: Accelerating frontier AI in Financial Services.](/sessions/006-anthropic-accelerating-frontier-ai-in-financial-services/).

### Build the loop, not the feature

<figure class="library-figure">
<a class="figure-preview" href="/figures/build-the-loop-not-the-feature.svg" aria-label="Open full-size figure: Build the loop, not the feature"><img src="/figures/build-the-loop-not-the-feature.svg" alt="Two panels: a linear feature pipeline that ends, and an always-on agent loop cycling through trigger, sandbox, sweep, fix, memory, and teardown." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>The AI engineer’s job as an always-on loop that writes and maintains the feature.</figcaption>
<a class="figure-full-size" href="/figures/build-the-loop-not-the-feature.svg" aria-label="Open full-size figure: Build the loop, not the feature">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Two panels. Top: the old job — a linear request, build, ship pipeline that terminates. Below: the always-on agent loop — trigger on cadence, event, or metric; a sandbox loaded with context behind a single proxy; sweep telemetry; open fixes; save issues and skills to memory; teardown credentials; durable resume from a failed step. A footer strip shows the abstraction ladder from higher-level languages to factories of agents.</p></details>
</figure>

Drawn from [What does an AI engineer do?](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/).

### Two readers of the corpus

<figure class="library-figure">
<a class="figure-preview" href="/figures/two-readers-of-the-corpus.svg" aria-label="Open full-size figure: Two readers of the corpus"><img src="/figures/two-readers-of-the-corpus.svg" alt="A split comparison: humans read about 300 words per minute; agents read about 30,000." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Humans and agents need opposite things from search: precision against volume.</figcaption>
<a class="figure-full-size" href="/figures/two-readers-of-the-corpus.svg" aria-label="Open full-size figure: Two readers of the corpus">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Split-panel comparison of the two reader classes of Bridgewater's Vault corpus. Human readers: about 300 words per minute, about 100 queries an hour from 300 users, needing precision and a high signal-to-noise ratio. Agent readers: about 30,000 words per minute, 100-plus queries a second, swarms into the thousands, less sensitive to precision. A central callout reads about 100x faster reading. A footer chip notes that a benchmark of about 200 hand-labeled examples, built in under a week, took precision at 10 from about 60 percent to 90 to 95 percent.</p></details>
</figure>

Drawn from [Vault: Making Unstructured Data Work for Investing](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/).

### Pets, cattle, microbes

<figure class="library-figure">
<a class="figure-preview" href="/figures/pets-cattle-microbes.svg" aria-label="Open full-size figure: Pets, cattle, microbes"><img src="/figures/pets-cattle-microbes.svg" alt="Three panels showing sandbox eras: pets, cattle, and an ocean of microbes." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Sandbox infrastructure eras, ending in swarms measured at 10,000 sandboxes per second.</figcaption>
<a class="figure-full-size" href="/figures/pets-cattle-microbes.svg" aria-label="Open full-size figure: Pets, cattle, microbes">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Three-panel evolution of sandbox infrastructure. Pets: a few named, bespoke, hand-tended machines. Cattle: a replaceable fleet of homogeneous templates that heals when one fails, where most agent deployments sit today. Microbes: an ephemeral ocean of self-evolving sandbox swarms, spun up and back down on demand, an analogy credited to Swyx. Below, the brains-versus-hands split: the harness is the brains, the sandbox is the hands. Stats: 20 million snapshots a week, about 8 petabytes processed a day, one workload needing 10,000 sandboxes a second. Quote: "I don't think you should vibe code a sandbox platform."</p></details>
</figure>

Drawn from [Great Agents Start with Great Infrastructure](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/).

### Autonomy is hill-climbed, not granted

<figure class="library-figure">
<a class="figure-preview" href="/figures/autonomy-hill-climb.svg" aria-label="Open full-size figure: Autonomy is hill-climbed, not granted"><img src="/figures/autonomy-hill-climb.svg" alt="A four-step staircase from shadow mode to exceptions only, climbing an axis of measured eval quality." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>A four-stage autonomy staircase gated on measured eval quality, with the guardrails that keep it auditable.</figcaption>
<a class="figure-full-size" href="/figures/autonomy-hill-climb.svg" aria-label="Open full-size figure: Autonomy is hill-climbed, not granted">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A four-step ascending staircase: shadow mode, supervised draft, exception ensemble, exceptions only, with independent sampling to detect missed material issues. The uphill axis is labeled measured eval quality, with a policy threshold tick near the top. Guardrails around the staircase: a value case agreed in writing with a pre-deployment baseline per metric and the rule "If the IMO cannot state the baseline today, do not deploy"; one named daily overseer with override authority and a kill switch; an auditable decision log plus a model inventory with regression triggers; and evaluations run in repeated series as statistical analysis, outputs viewed in volume rather than as one-off direct comparisons.</p></details>
</figure>

Drawn from [The Agent Works. Does Anyone Trust It?](/day2/024-the-agent-works-does-anyone-trust-it-michele-grant-value-cas/) · [Trusting Agents in Policy-Driven Workflows](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/).

### Your company has no model of itself

<figure class="library-figure">
<a class="figure-preview" href="/figures/company-world-model.svg" aria-label="Open full-size figure: Your company has no model of itself"><img src="/figures/company-world-model.svg" alt="A circular loop of update, age, observe, grade, and correct, fed by top-down decks and bottom-up exhaust, with a fact half-life decay inset." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>The company rebuilt as a state estimator, because every fact has a half-life.</figcaption>
<a class="figure-full-size" href="/figures/company-world-model.svg" aria-label="Open full-size figure: Your company has no model of itself">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A central circular loop with five stations in order: update, age, observe, grade, correct — the company world model run as a state estimator. Two input streams converge on the loop: top-down decks, strategy docs, and status reports, tidy but opinion-infused; and bottom-up exhaust — Slack, code changes, meeting notes, agent traces — noisy but close to the truth. The model is where they meet. An inset shows a decay curve with a fresh-evidence reset, illustrating that every fact has a half-life. Stat chips: on average half of delivery dates change within two months, and 90 percent of those changes slip later than first proposed. A watermelon chip notes top-down decks are green on the outside and red on the inside.</p></details>
</figure>

Drawn from [Your Company Has No Model of Itself: Bootstrapping a World Model from Slack, Decks and Meetings](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/).

### Compute becomes a market

<figure class="library-figure">
<a class="figure-preview" href="/figures/compute-becomes-a-market.svg" aria-label="Open full-size figure: Compute becomes a market"><img src="/figures/compute-becomes-a-market.svg" alt="A supply chain from chips through power and credit to contracts, with credit marked as the binding constraint." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>GPU economics rebuilt as a credit and market-design problem, from chips to contango futures.</figcaption>
<a class="figure-full-size" href="/figures/compute-becomes-a-market.svg" aria-label="Open full-size figure: Compute becomes a market">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Concept map of the compute supply chain. Four stations run left to right: chips (GPU supply), power, credit, and contracts. Credit is marked as the binding constraint and carries the quote "You hit credit way before you hit power." A text progression shows the deposit needed to start a lab climbing from $10 million to $100 million to $1 billion in three years. A contrast panel compares unlit over-the-counter deals done over chat, with 15 to 25 percent prepayment on a $100 million cluster, against a neutral exchange whose term curve flipped to contango and where CME will settle H100 and B200 futures on Silicon Data indices, across 100+ verified providers and 80,000+ GPUs in supply.</p></details>
</figure>

Drawn from [How Compute Markets Work](/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/) · [The Dark Pools of Compute](/day2/018-the-dark-pools-of-compute-unlit-otc-compute-markets-jevons-p/) · [CEO, Compute Exchange](/day2/020-ceo-compute-exchange-the-only-neutral-gpu-marketplace-silico/).

## Data charts

### Code is abundant, confidence is scarce

<figure class="library-figure">
<a class="figure-preview" href="/figures/code-abundant-confidence-scarce.svg" aria-label="Open full-size figure: Code is abundant, confidence is scarce"><img src="/figures/code-abundant-confidence-scarce.svg" alt="Bar chart: lines of code up 2,450 percent, commits up 240 percent, releases up 30 percent." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Agent-written code exploded while releases barely moved; the gap is the review problem.</figcaption>
<a class="figure-full-size" href="/figures/code-abundant-confidence-scarce.svg" aria-label="Open full-size figure: Code is abundant, confidence is scarce">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Three horizontal bars compare the effect of asynchronous agents in the development lifecycle: lines of code written up 2,450 percent, commits up 240 percent, and releases up only 30 percent. The releases bar is highlighted in blue; the other two are desaturated. Side chips note that humans agreed with AI four out of five times when it was wrong, and Sonar survey figures of 5 percent of developers running agentic software factories today, 34 percent within a year, and 39 percent in financial services.</p></details>
</figure>

Drawn from [The Machine that Changed the World, vAI](/day2/004-the-machine-that-changed-the-world-vai-engineering-confidenc/).

### Per-step accuracy compounds down

<figure class="library-figure">
<a class="figure-preview" href="/figures/compounding-error-curve.svg" aria-label="Open full-size figure: Per-step accuracy compounds down"><img src="/figures/compounding-error-curve.svg" alt="Line chart: 95 percent per-step accuracy decaying to about 36 percent by step 20." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Why long agent chains fail: 95 percent per step is about 36 percent by step 20.</figcaption>
<a class="figure-full-size" href="/figures/compounding-error-curve.svg" aria-label="Open full-size figure: Per-step accuracy compounds down">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A single blue line chart of 0.95 to the power n for n from 1 to 20, falling from 95 percent at step 1 to about 36 percent at step 20. Markers sit at both ends; the endpoint is annotated "95% per step becomes about 36% by step 20". Side chips note 91 percent code-translation accuracy at 10,000 lines collapsing by 50,000, and LLM-judge verdicts changing 7 to 17 percent across identical re-asks.</p></details>
</figure>

Drawn from [The Machine that Changed the World, vAI](/day2/004-the-machine-that-changed-the-world-vai-engineering-confidenc/).

### Where the money goes

<figure class="library-figure">
<a class="figure-preview" href="/figures/where-the-money-goes.svg" aria-label="Open full-size figure: Where the money goes"><img src="/figures/where-the-money-goes.svg" alt="Two panels: AI is 2.5 percent of a merged pull request’s cost; self-hosted tokens at 30 cents per million." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Salary, not tokens, is the cost of a merged pull request; and what self-hosting did to the token bill.</figcaption>
<a class="figure-full-size" href="/figures/where-the-money-goes.svg" aria-label="Open full-size figure: Where the money goes">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Two panels. Left: the cost of a merged PR is about 97.5 percent salary and about 2.5 percent AI spend, with chips for merged PRs per engineer up 43 percent, cost per merged PR down 26 percent, and AI spend up 60 times year over year, plus a quote that the bill tells you what you spent while cost per PR tells you whether it worked. Right: self-hosted tokens at 30 cents per million, one-tenth of the previous Anthropic and OpenAI invoice, with chips for time to first token falling from over 10 seconds to about 1.6 seconds and throughput rising from about 3 to over 7 requests per second on the same 56 GPUs.</p></details>
</figure>

Drawn from [Tokens Are the Cheap Part: AI spend, developer throughput, and cost per merged PR](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/) · [Shipping like a startup, regulated like a bank](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/).

### A GPU falls to the level of the operator

<figure class="library-figure">
<a class="figure-preview" href="/figures/gpu-level-of-operator.svg" aria-label="Open full-size figure: A GPU falls to the level of the operator"><img src="/figures/gpu-level-of-operator.svg" alt="Two bars: about 200 versus about 300 tokens per second at P90 from the same B200." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Two identical B200 stacks, one operator gap: about 50 percent more output from the same chip.</figcaption>
<a class="figure-full-size" href="/figures/gpu-level-of-operator.svg" aria-label="Open full-size figure: A GPU falls to the level of the operator">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Two horizontal bars compare generated output at P90 from two identical B200 serving stacks running the same model against the same interactivity target: about 200 tokens per second on one stack and about 300 on the other, roughly 50% more output from the same chip. The gap comes from software, settings, and request concurrency, all operator choices.</p></details>
</figure>

Drawn from [Not All GPU's Are Deployed The Same](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/).

### Right-sizing beats intuition

<figure class="library-figure">
<a class="figure-preview" href="/figures/small-model-wins.svg" aria-label="Open full-size figure: Right-sizing beats intuition"><img src="/figures/small-model-wins.svg" alt="Three panels: 2.50 versus 11 dollars per task; 795 dollars actual against 10,000 projected; and a 35-billion-parameter specialist beating a frontier model." width="960" height="720" loading="lazy" decoding="async" /></a>
<figcaption>Right-sized specialists and replayed work history beat intuition on cost, three talks in a row.</figcaption>
<a class="figure-full-size" href="/figures/small-model-wins.svg" aria-label="Open full-size figure: Right-sizing beats intuition">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Three panels on model economics. Panel one, Vals AI: cost per task on an internal eval, GPT-5.6-Sol at $2.50 per task versus self-hosted Kimi K3 at $11. Panel two, Southbridge AI: a statewide Ohio entity-resolution job projected at about $10,000 finished at $795, with checking costing about four times doing, $545 versus $128. Panel three, Ramp: a post-trained Qwen 3.5 35B specialist beat Opus 4.6 on exact task accuracy at far lower latency under a frontier orchestrator; no numeric accuracy values were given, so the claim is shown as text rather than bars.</p></details>
</figure>

Drawn from [Beyond the Model Card: The Jagged Frontier of AI in Finance](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/) · [No universal schema: just-in-time ontologies, model priors, and Pareto surfing](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/) · [Chasing capabilities while waiting for the frontier](/day2/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app/).

### The diffusion gap

<figure class="library-figure">
<a class="figure-preview" href="/figures/diffusion-gap.svg" aria-label="Open full-size figure: The diffusion gap"><img src="/figures/diffusion-gap.svg" alt="An adoption ladder funnel from 90 percent LLM rollout down to 5 percent non-engineering agents, beside capability and EBIT statistics." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>Capability doubling every four months against an adoption ladder that falls off at agents.</figcaption>
<a class="figure-full-size" href="/figures/diffusion-gap.svg" aria-label="Open full-size figure: The diffusion gap">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>Left panel: an enterprise AI diffusion ladder with four ordinal blue bands — 90 percent have rolled out a general-purpose LLM, about 60 percent have people actually trained on the tools, about 50 percent use coding agents in engineering workflows, and about 5 percent have agents working in non-engineering workflows. Right panel: three stat chips — what a model can do on its own doubles every four months (Belinda Neal, Anthropic); about 37 percent of enterprises report positive EBIT contribution and about 6 percent are high performers (Sid Pednekar); three quarters of AI's economic gains go to a fifth of companies (PwC, cited by Neal).</p></details>
</figure>

Drawn from [Welcome Back - Featured Keynotes](/sessions/042-mc-resumes-sponsor-acknowledgments-conference-reflections/) · [Anthropic: Accelerating frontier AI in Financial Services.](/sessions/006-anthropic-accelerating-frontier-ai-in-financial-services/) · [Everyone Has AI. Who Has the Advantage?](/sessions/038-everyone-has-ai-who-has-the-advantage-three-pillars-design/).

### From 6 billion users to 5,000 frontier users

<figure class="library-figure">
<a class="figure-preview" href="/figures/adoption-funnel.svg" aria-label="Open full-size figure: From 6 billion users to 5,000 frontier users"><img src="/figures/adoption-funnel.svg" alt="A four-band funnel from 6 billion LLM users to about 5,000 frontier users, sized by log scale." width="960" height="540" loading="lazy" decoding="async" /></a>
<figcaption>The usage pyramid behind the frontier: touched, casual, professional, frontier.</figcaption>
<a class="figure-full-size" href="/figures/adoption-funnel.svg" aria-label="Open full-size figure: From 6 billion users to 5,000 frontier users">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>A four-band funnel with widths sized by log10 of each value: 6 billion-plus users have maybe touched an LLM; 1 to 2 billion are casual free-tier users; about 20 million are professionals taking weeks-long work down to days; about 5,000 frontier users run thousands of agents. The span is six orders of magnitude, so band widths follow a log10 scale. The funnel was cited from a weekend tweet, relayed in the Arize AI talk.</p></details>
</figure>

Drawn from [What does an AI engineer do?](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/).

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
