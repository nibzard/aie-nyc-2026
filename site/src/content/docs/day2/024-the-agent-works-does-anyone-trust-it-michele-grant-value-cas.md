---
title: The Agent Works. Does Anyone Trust It?
description: Michele Grant, creator of Leading at Scale, uses a $15 billion M&A
  integration case to argue that a working agent earns enterprise trust only
  through a written value case with baselines, assigned ownership under the
  three lines model, and engineering evidence gated by a four-stage autonomy
  scorecard.
sidebar:
  order: 24
  hidden: false
pagefind: true
prev: false
next: false
---

Michele Grant, creator of Leading at Scale, uses a $15 billion M&A integration case to argue that a working agent earns enterprise trust only through a written value case with baselines, assigned ownership under the three lines model, and engineering evidence gated by a four-stage autonomy scorecard.

## TL;DR
- A pilot proves the software functions. Daily operations must prove the agent creates value within the controls leadership set. Grant calls that trust work "the exact same muscle" as change and risk management on M&A integrations.
- Leadership must answer three questions for every agent: What value does it create? Who is on the hook for it? What evidence gives it permission to run with greater autonomy?
- In the $15 billion acquisition example, the value case fixes three metrics: cycle time (a hard target of five days down to two), analyst capacity (80 hours a week returned, net of compute, licensing, and review costs), and detection time. No stated baseline means no deployment.
- Ownership runs through the three lines model (management, risk and compliance, internal audit), one named daily overseer with override and kill-switch authority, and a one-page Human Work Standard that maps every decision fork to an authorized human role.
- Autonomy is granted in four stages with an autonomy scorecard: shadow mode, supervised draft, exception ensemble, and exceptions only. At stage four, independent sampling matters most, because the biggest vulnerability is what the agent failed to flag.
- The talk is off-agenda. It ran during the 12:40-2:05pm ET networking break, with no host introduction and no Q&A.

## Key lessons
1. Engineer trust before day one, not after launch. On Grant's deals, early change management and risk management meant teams relied on the platform the moment it went live. "AI agents demand the exact same muscle." An agent earns trust when it delivers the value the business budgeted for while staying within the company's approved risk appetite, policies, regulations, and regulatory guardrails.
2. The test changes when an agent leaves the sandbox. A pilot tests whether the software functions. Daily operations tests whether it creates value within the controls set by leadership. Established AI risk frameworks give strong principles, but they do not tell you how to apply them to each agent. Per agent, leadership decides four things: what it is permitted to do, who owns it, what evidence it records, and what triggers an escalation. Grant calls that work "an executive operating mandate," not an engineering task.
3. Agree the value case in writing before the agent touches production data. In the example, a $15 billion acquisition targets $400 million in net synergies across 40 IMO workstreams. The agent drafts the weekly steering-committee report that four analysts build today. Three metrics define its value: cycle time (from five business days to a hard target of two), analyst capacity (four analysts at half a week equals 80 hours a week returned, counted only when the integration lead assigns that time to behind-schedule workstreams, and only after netting out compute, licensing, and human review costs), and detection time, the most important one. Cutting the report from five days to two does not guarantee the committee sees a slip sooner. The agent has to catch it.
4. Every metric needs a pre-deployment baseline. "If the IMO cannot state the baseline today, do not deploy." If you cannot measure where you started, you can never prove the agent moved the needle.
5. Apply the three lines model to the agent. First line: management owns the controls, and the integration lead is the accountable executive who owns the agent's output exactly as she owned the manual deck. Second line: risk and compliance oversee and challenge, with review depth scaled to exposure. An internal draft scrubbed by a senior analyst warrants a very different standard than an autonomous agent publishing figures straight to the board. Third line: internal audit provides assurance and decides, based on material risk, when the agent enters the annual audit plan.
6. Assign one employee to oversee the agent every day, with four capabilities: understand the operational boundaries, interpret the output with context, hold authority to override or reverse it, and have a clear kill switch to shut it down safely. Document authority limits in a one-page policy Grant calls the Human Work Standard: for every fork in the process, it maps the decision, the human role authorized to make it, the required evidence, and the escalation path. The agent prepares the analysis behind every decision and stops there. The person who makes the decision owns the consequence. Keeping decisions with the team does not slow the agent down.
7. Build the evidence for autonomy into the agent itself. Grant looks for three artifacts. First, an auditable decision log that records raw data ingested, tool calls executed, the prompt, model versions, output generated, and the human sign-off. Two engineering choices make it airtight: run the core math and reconciliation rules in deterministic, finance-approved code rather than LLM prose, and treat the model's written summary as explanation, not proof. If reported savings do not match the general ledger, the agent does not touch the number. It flags the discrepancy and routes it up. Second, a model inventory record covering the accountable executive, data lineage, source-system dependencies, validation results, escalation path, and kill-switch runbook, plus regression triggers: any prompt, base model, or source API update requires full revalidation before the agent runs in production again.
8. Grant autonomy in four stages and watch the failure mode of the last one. Stage one is shadow mode, where the agent runs alongside the analyst and the team compares the two. Stage two is the supervised draft, with a senior analyst reviewing every line item. Stage three is the exception ensemble, reviewing flagged initiatives plus a random sample of clean ones. Stage four is exceptions only. Once humans only look at exceptions, the biggest vulnerability is what the agent failed to flag, so track missed material issues through independent sampling, monitor error severity, and watch the override rate. A falling override rate can mean review depth slipped, not that the agent got smarter. The scorecard pairs those control metrics with the value metrics on one page, so the steering committee can promote the agent, hold it, step it back, or drop it to supervised review.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=16103&rel=0" title="The Agent Works. Does Anyone Trust It?" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Michele Grant &middot; 1:08:59 PM ET-1:24:15 PM ET &middot; talk &middot;  <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=16103s" rel="noopener">Watch on YouTube from 04:28:23</a></p>

## Notable quotes
- "[04:28:23 | 1:08:59 PM] Go live proves that a system exists, but it doesn't prove the people behind the work will actually use it, or that it will ever deliver a single dollar from the deal model."
- "[04:29:46 | 1:10:22 PM] An agent earns trust when it delivers the value the business budgeted for while staying fully within the company's approved risk appetite."
- "[04:34:56 | 1:15:32 PM] If the IMO cannot state the baseline today, do not deploy."
- "[04:41:54 | 1:22:29 PM] A falling override rate does not automatically mean the agent is getting smarter."

## Session narrative
The talk starts cold at [04:28:23], three seconds after the previous recorded talk on MCP gateways ends. No host introduces the speaker. Grant opens with the hook: go live proves a system exists, but it does not prove people will use it or that it will ever deliver a dollar from the deal model. She introduces herself as the creator of Leading at Scale. The transcriber garbles her name as "Michelle Brand"; the boundary verification corrected it to Michele Grant through web sources. She cites over 20 years in enterprise transformation and more than a decade leading M&A integrations across media, tech, and consumer goods. On those deals, teams engineered trust before day one through early change management and risk management. Her framing: AI agents demand the same muscle, and the question every enterprise now confronts is the one in her title. The agent works. Does anyone trust it?

The core argument gives leadership three questions: What value does it create? Who is on the hook for it? And what evidence gives it permission to run with greater autonomy? She grounds the answers in a scenario: a $15 billion acquisition targeting $400 million in net synergies, already closed, with the integration management office driving the synergy roadmap across 40 workstreams that range from vendor rationalization to ERP consolidation. Every week, analysts reconcile the numbers against the general ledger, chase status from all 40 leads, compare actuals against plan, and assemble the deck for a steering committee that includes the CFO, the Chief Risk Officer, business unit heads, and the integration lead. The engineering team builds an agent to automate that first draft. It ingests weekly updates, reconciles the ledger, runs variance math, and flags slipping initiatives. A four-week pilot passes: the agent's drafts match the analyst reports line for line. The tech works. The rest of the talk answers what the steering committee needs before it trusts the agent to run the business.

The first requirement is a written value case agreed before production data, built on the three metrics and the baseline rule described above. The second is ownership. Grant applies the three lines model to the agent, adds the daily overseer with four capabilities, and introduces the Human Work Standard, her one-page policy that maps every decision fork to the human role authorized to make it. In the example, the senior analyst decides whether a variance is a timing difference or a real cash shortfall. The workstream lead decides how to remediate it. The integration lead decides whether to flag an initiative as at risk to the steering committee. The agent prepares the analysis behind each decision and stops there. Her deployment rule: the only reason to delay is a decision with no assigned owner, because unowned flags lead to no action.

The third requirement is engineering evidence, and here she addresses the engineers in the room. The auditable decision log, the model inventory record with regression triggers, and the autonomy scorecard carry the argument. The scorecard grants autonomy in four stages, from shadow mode to exceptions only, and Grant dwells on stage four: once humans review only exceptions, the biggest vulnerability is what the agent failed to flag, so independent sampling, error-severity monitoring, and override-rate watching become the controls that tell a smarter agent apart from a slipping review. She closes by returning to the three questions and asking the audience to apply them to every agent they build, fund, or govern. The agent did not magically create the $400 million in synergies; procurement, supply chain, and operating leaders captured that value through the gritty work of integration. What the agent delivered was verified evidence weeks ahead of schedule, which gave leadership runway to intervene while the synergies could still be captured. Building an agent that works is the first step. Answering the three questions earns it the trust to run at scale. She signs off with "Thank you." at [04:43:40]. The slot is off-agenda, sits inside the networking break, and has no Q&A.

## Speaker details
**Michele Grant** - Enterprise Transformation and M&A Integration Executive; Executive Global Director and Value Realization Office Lead, Cognizant. (identified from session) The transcript's ASR rendered her name as "Michelle Brand"; the session's boundary verification corrected it to Michele Grant from web sources. She has over 20 years leading complex change programs and over 10 years running post-merger integrations across media, tech, consumer goods, and financial services. Her integration work includes the $30B ViacomCBS merger, NBCUniversal's $39B Sky acquisition, and a private equity-backed consumer goods merger with a $250M+ synergy target. At Cognizant she leads value realization on a multi-billion-dollar post-acquisition managed services transition for a Fortune 500 fintech client. She is the creator of "Leading at Scale", a weekly video and article series on enterprise leadership, and a #1 Amazon bestselling author. She holds a B.S. in Computer Science from St. John's University, is completing a Cornell Johnson Executive MBA, and earned a Wharton M&A credential. In the session itself, she self-introduces as the creator of Leading at Scale with 20+ years in enterprise transformation and a decade of M&A integrations.

Links: the speaker record's link fields are empty; its sources list [sessionize](https://sessionize.com/michelegrant) and [LinkedIn](https://www.linkedin.com/in/michelegrantleadership).

## Full timestamped transcript
```
[04:28:23 | 1:08:59 PM] Go live proves that a system exists, but it doesn't prove the people behind the work will actually use it, or that it will ever deliver a single dollar from the deal model.
[04:28:54 | 1:09:30 PM] I am Michelle Brand, creator of Leading at Scale, and the question every enterprise is confronting right now is: agent works.
[04:29:03 | 1:09:39 PM] Does anyone trust it?
[04:29:05 | 1:09:41 PM] I have spent over 20 years in enterprise transformation and more than a decade leading M&A integrations across media, tech, and consumer goods.
[04:29:18 | 1:09:53 PM] On those deals, trust was not something we crossed our fingers and hoped for after launch.
[04:29:26 | 1:10:02 PM] We engineered it before day one through early change management and risk management.
[04:29:33 | 1:10:09 PM] So when the platform went live, the teams on the ground actually relied on it.
[04:29:42 | 1:10:18 PM] AI agents demand the exact same muscle.
[04:29:46 | 1:10:22 PM] An agent earns trust when it delivers the value the business budgeted for while staying fully within the company's approved risk appetite.
[04:29:58 | 1:10:34 PM] Policies and regulations.
[04:30:00 | 1:10:36 PM] And regulatory guardrails.
[04:30:01 | 1:10:37 PM] In my experience, leadership gets there by answering three straightforward questions: What value does it create?
[04:30:11 | 1:10:46 PM] Who is on the hook for it?
[04:30:14 | 1:10:50 PM] And what evidence gives it permission to run with greater autonomy?
[04:30:19 | 1:10:55 PM] The moment an agent steps out of a sandbox and into a core business workflow, the entire test changes.
[04:30:29 | 1:11:04 PM] A pilot tests whether the software functions, but daily operations is where we test whether it creates value within the controls set by leadership.
[04:30:40 | 1:11:16 PM] Established AI risk frameworks give you strong principles.
[04:30:45 | 1:11:20 PM] What they do not give you is how to apply these principles to each agent.
[04:30:52 | 1:11:27 PM] For every agent, leadership has to decide four things: What is it permitted to do?
[04:31:00 | 1:11:35 PM] Who owns it?
[04:31:01 | 1:11:37 PM] What evidence it records?
[04:31:03 | 1:11:39 PM] And what triggers an escalation?
[04:31:07 | 1:11:42 PM] That work is not an engineering task.
[04:31:10 | 1:11:45 PM] We find it is an executive operating mandate.
[04:31:14 | 1:11:50 PM] And today, I'll show you how to meet it.
[04:31:18 | 1:11:53 PM] Let us ground this in a real-world scenario.
[04:31:23 | 1:11:59 PM] Picture a $15 billion acquisition targeting 400 million in net synergies.
[04:31:31 | 1:12:06 PM] The deal has already closed, and the integration efforts are now underway.
[04:31:36 | 1:12:12 PM] The integration management office, which we'll also refer to as the IMO today, is driving the synergy roadmap across 40 workstreams.
[04:31:47 | 1:12:23 PM] Covering everything from rationalizing vendor contracts to consolidating ERP systems, and every single initiative has a business owner accountable for its bottom line savings.
[04:32:02 | 1:12:37 PM] Every week, analysts in the IMO are going to reconcile the numbers against the general ledger.
[04:32:11 | 1:12:47 PM] As they track down status from all 40 leads, they're also comparing actuals against the plan, then finally assembling the executive deck for the steering committee, which is going to include the CFO, the Chief Risk Officer, business unit heads, and the integration lead.
[04:32:34 | 1:13:10 PM] The engineering team builds an agent automate that first draft.
[04:32:41 | 1:13:16 PM] The agent then ingests the weekly updates, reconciles the ledger, runs variance math against the plan, and flags the initiatives that are falling behind.
[04:32:53 | 1:13:29 PM] Everything looks good, and they decide to run a four-week pilot.
[04:32:58 | 1:13:33 PM] The agents draft match the analyst reports line for line, so we can say that the tech works.
[04:33:06 | 1:13:42 PM] Now the question is, what value does that steering committee need before they can trust it to run the business?
[04:33:16 | 1:13:51 PM] First, the steering committee needs a written value case agreed upon before the agent ever touches production data.
[04:33:26 | 1:14:02 PM] In our example, that comes down to three specific metrics.
[04:33:32 | 1:14:07 PM] First, let's look at cycle time.
[04:33:35 | 1:14:10 PM] If that weekly report needs five business days to compile, right now, you're going to want to set a hard target such as two days.
[04:33:45 | 1:14:20 PM] Your second metric will be analyst capacity.
[04:33:48 | 1:14:23 PM] If four analysts spend half of their week building this deck, that is 80 hours a week the agent gives back.
[04:33:59 | 1:14:34 PM] That time counts as value only when the integration lead assigns it to the workstreams that are behind on their synergy targets and need help getting back on track.
[04:34:12 | 1:14:47 PM] Then you only count that value after netting out the compute, licensing, and human review costs of running the agent.
[04:34:23 | 1:14:59 PM] Your third metric is the most important one: detection time.
[04:34:29 | 1:15:04 PM] That is how long it takes from the first sign of a slip in the data to the moment the steering committee sees it.
[04:34:37 | 1:15:12 PM] Cutting the report from five days to two days does not guarantee that the committee sees that slip any sooner.
[04:34:45 | 1:15:20 PM] The agent has to catch it, and the value case measures that directly.
[04:34:52 | 1:15:28 PM] Every single metric requires a pre-deployment baseline.
[04:34:56 | 1:15:32 PM] If the IMO cannot state the baseline today, do not deploy.
[04:35:01 | 1:15:37 PM] If you can't measure where you started, you can never prove the agent moved the needle.
[04:35:08 | 1:15:44 PM] Next, the steering committee needs to know who owns the risk the agent creates.
[04:35:16 | 1:15:52 PM] We are going to apply the three lines model to the agent.
[04:35:22 | 1:15:57 PM] In the first line, management owns the controls.
[04:35:25 | 1:16:01 PM] The integration lead is the accountable executive.
[04:35:29 | 1:16:04 PM] She owns the agent's output exactly the way she owned the manual deck.
[04:35:35 | 1:16:11 PM] In the second line, risk and compliance oversee the agent and challenge how to run it.
[04:35:43 | 1:16:19 PM] How deep they go depends on the agent's exposure.
[04:35:47 | 1:16:23 PM] An internal draft scrubbed by a senior analyst warrants a very different review standard than an autonomous agent publishing figures straight to the board.
[04:36:00 | 1:16:35 PM] In the third line, internal audit provides assurance, deciding based on material risk when and how the agent enters the annual audit plan.
[04:36:12 | 1:16:48 PM] The agent also needs one employee assigned to oversee it every day.
[04:36:18 | 1:16:53 PM] In our example, that is the senior analyst who reviews the draft before it reaches the committee.
[04:36:26 | 1:17:02 PM] Her role requires four specific capabilities.
[04:36:29 | 1:17:05 PM] She has to first understand the operational boundaries.
[04:36:34 | 1:17:09 PM] She has to interpret its output with context.
[04:36:39 | 1:17:14 PM] She must have the authority to override or reverse it.
[04:36:45 | 1:17:20 PM] And she needs clear kill switch to shut it down safely the second it behaves unexpectedly.
[04:36:54 | 1:17:29 PM] Accountability also means defining where the agent's authority stops.
[04:36:59 | 1:17:34 PM] I document this in a one-page policy called the Human Work Standard.
[04:37:05 | 1:17:40 PM] For every fork in the process, it maps the decision, the human role authorized to make it.
[04:37:13 | 1:17:49 PM] The required evidence and the escalation path.
[04:37:18 | 1:17:54 PM] These decisions exist at every tier.
[04:37:21 | 1:17:57 PM] The senior analyst decides whether a variance is an accounting timing difference or a real cash shortfall.
[04:37:30 | 1:18:05 PM] The workstream lead decides how to remediate that shortfall, and the integration lead is going to decide whether to formally flag an initiative as at risk to the steering committee.
[04:37:44 | 1:18:19 PM] The engine prepares the analysis behind every one of those decisions, and it stops there.
[04:37:52 | 1:18:27 PM] The person who makes the decision owns the consequence.
[04:37:57 | 1:18:33 PM] So keeping these decisions with your team does not slow the agent down.
[04:38:02 | 1:18:38 PM] It can go into use while each role keeps its authority.
[04:38:07 | 1:18:43 PM] The one reason to delay deployment is a decision with no assigned owner.
[04:38:14 | 1:18:50 PM] This means if leadership has not agreed who declares an initiative off track, the agent flags lead to no action.
[04:38:26 | 1:19:02 PM] The third question is where the engineers in this room come in.
[04:38:34 | 1:19:09 PM] The evidence for greater autonomy comes from how the agent is built.
[04:38:40 | 1:19:15 PM] I look for three artifacts.
[04:38:43 | 1:19:18 PM] The first is an auditable decision log.
[04:38:46 | 1:19:22 PM] For every workstream the agent evaluates, it records the raw data ingested, the tool calls executed, the prompt, and the model versions.
[04:38:58 | 1:19:34 PM] Output generated along with the human sign-off.
[04:39:04 | 1:19:39 PM] Two engineering choices make that log airtight.
[04:39:08 | 1:19:43 PM] First, your core math and reconciliation rules must run in deterministic, finance-approved code, not generated as conversational prose from an LLM.
[04:39:22 | 1:19:58 PM] Second, treat the model's written summary as a helpful explanation, not proof.
[04:39:29 | 1:20:05 PM] Your real proof lives in the telemetry: what records were pulled, what deterministic tools ran, and who signed the review.
[04:39:41 | 1:20:16 PM] If reported savings do not match the general ledger, agent does not touch the number.
[04:39:49 | 1:20:25 PM] It flags the discrepancy and routes it up.
[04:39:54 | 1:20:29 PM] The second artifact is the model inventory record.
[04:39:58 | 1:20:33 PM] This captures the
[04:40:02 | 1:20:37 PM] First, the accountable executive, data lineage, dependencies across source systems, validation results, escalation path, and the kill switch runbook.
[04:40:16 | 1:20:51 PM] Most importantly, it documents your regression triggers, which are any updates to our prompt, base model, or source API that require full revalidation before running in production again.
[04:40:31 | 1:21:06 PM] Your third artifact, this is going to be the autonomy scorecard.
[04:40:37 | 1:21:12 PM] The steering committee uses it to grant autonomy in four stages.
[04:40:43 | 1:21:18 PM] Stage one is shadow mode.
[04:40:45 | 1:21:20 PM] The analyst builds the report as they do today.
[04:40:49 | 1:21:24 PM] The agent runs right alongside them, and the team compares the two.
[04:40:54 | 1:21:29 PM] Stage two is the supervised draft.
[04:40:58 | 1:21:33 PM] The agent compiles the first draft, and the senior analyst reviews every single line item.
[04:41:06 | 1:21:41 PM] Stage three is the exception ensemble, where the analyst reviews flagged initiatives plus a random sample of the clean ones.
[04:41:17 | 1:21:52 PM] Then we have stage four, where it's exceptions only.
[04:41:22 | 1:21:57 PM] The analyst reviews only high-risk anomalies, supported by periodic independent sampling.
[04:41:30 | 1:22:05 PM] Pay close attention to stage four, however, because once humans only look at exceptions, your biggest vulnerability is what the agent failed to flag.
[04:41:42 | 1:22:17 PM] So I advise tracking missed material issues through independent sampling.
[04:41:48 | 1:22:23 PM] Monitoring error severity and watching your override rate carefully.
[04:41:54 | 1:22:29 PM] A falling override rate does not automatically mean the agent is getting smarter.
[04:41:59 | 1:22:34 PM] It can also mean the depth of review has slipped.
[04:42:03 | 1:22:38 PM] So independent sampling tells you which one of these you are seeing.
[04:42:09 | 1:22:44 PM] The scorecard puts those control metrics side by side with your value metrics: cycle time, analyst hours deployed, and your detection time.
[04:42:21 | 1:22:56 PM] And with that single-page view, the steering committee can make clean, efficient, data-backed decisions to either promote the agent, hold it where it is, step it back, or down to supervised review stage.
[04:42:39 | 1:23:14 PM] So let's come back to the three questions.
[04:42:44 | 1:23:19 PM] Ask them of every agent you build, fund, or govern.
[04:42:49 | 1:23:24 PM] What value does it create?
[04:42:52 | 1:23:27 PM] Who is accountable for it?
[04:42:55 | 1:23:30 PM] And what evidence permits it to operate with autonomy?
[04:43:00 | 1:23:35 PM] In our M&A example today, the agent did not magically create the 400 million in synergies.
[04:43:06 | 1:23:41 PM] Procurement, supply chain, and operating leaders captured that value through the gritty work of integration.
[04:43:14 | 1:23:49 PM] But what the agent delivers is clear: verified evidence weeks ahead of schedule, giving leadership the runway to intervene while the deal's synergies can still be captured.
[04:43:29 | 1:24:04 PM] Building an agent that works is just the first step.
[04:43:33 | 1:24:08 PM] Answering those three questions is what earns it the trust to run at scale.
[04:43:40 | 1:24:15 PM] Thank you.
```
