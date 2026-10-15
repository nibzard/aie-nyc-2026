---
session_id: "029"
title: "Reliable and intelligent workflows for finance, wealth, and insurance"
agenda_title: null
speakers: ["Karthic Rao"]
start_wall: "1:38:22 PM ET"
end_wall: "1:53:48 PM ET"
video_start: "04:50:30"
video_end: "05:05:56"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=17430s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: ["regulated-ai", "workflow-engineering", "determinism-vs-judgment", "wealth-management", "compliance", "model-routing", "human-in-the-loop"]
confidence: "high"
---

# Reliable and intelligent workflows for finance, wealth, and insurance

> An extra lunch talk from Perpetual's CTO arguing that reliable AI in regulated finance comes from deliberately placing the boundary between deterministic compiled workflows and minimal, typed model judgment - not from choosing "more agency" or "less agency".

## TL;DR

- In regulated verticals, reliability comes from where you place the boundary between the parts that must be deterministic and the parts that genuinely need judgment. That boundary is the design.
- A one-line advisor request ("fill out the IRS W-9 for Mr. Harper") unfolds into lookups, ambiguity resolution, missing-value chases, waits measured in days, follow-up loops, and an evidence trail. Fixed flowcharts break on the first ambiguity, and an improvising agent cannot get compliance sign-off.
- Perpetual's workflow engine splits the work: a planner model call only translates the request into a typed semantic graph, and a compiler that never calls a model turns it into an immutable, hash-pinned execution DAG in eleven deterministic stages - or fails closed.
- Waits, approvals, and follow-ups are nodes in the plan, not prompts: 72-hour default reply waits (one minute to 30 days), per-action approval gates tied to payload hashes, follow-ups as child plans capped at five rounds, and no automatic retries.
- About 95 percent of model decisions are designed never to need a frontier model. Small typed judgments run on a flash tier you can host yourself, and logged, human-confirmed judgments become training data that shrinks the frontier share release by release.

## Key lessons

1. Four facts of finance and wealth workflows push the architecture in the same direction: the work is complex and needs runtime strategies; the data is sensitive, so you need a path to privately hosted models; a policy violation has severe consequences, not just a bug report; and execution must be reliable and deterministic. Inject intelligence only where runtime judgment is genuinely required, and minimize reliance on LLMs everywhere else.
2. In a regulated industry, "token maxing" is the wrong goal. Most tasks can be laid out in advance as a massive state machine that needs only a sprinkle of intelligence: most steps just follow the next edge, and the model picks a branch at only a few judgment points.
3. Use a concrete walkthrough to size the problem. The W-9 example shows what one sentence triggers: find the form, resolve which of three Harper households, call the advisor, discover three missing values, email the client, wait days, follow up twice, collect e-signature, file, and write back the trail of how each value was obtained - because in this industry, how you know a value matters as much as the value itself.
4. Both fashionable answers are the wrong axis. "More agency and better models" waits for the next model to make agents reliable. "Less agency, more rules" hardcodes every path and breaks on ambiguity. The principle instead: determinism governs control flow, evidence, and side effects; intelligence provides interpretation and judgment. The interplay is recursive - a judgment can open a new, smaller plan that is compiled, gated, and deterministic again.
5. Separate translation from execution. The planner is a single model call whose only job is translation into a typed semantic graph of intents, entities, facts, artifacts, events, and constraints, with every node pointing back to the words it came from. A compiler that never calls a model turns that graph into an execution DAG in eleven deterministic stages, with only three verdicts - valid, needs clarification, or refused. "Which Harper" comes back as a question, not a guess. The compiled plan is immutable and pinned by its hash.
6. Constrain the model with a closed grammar. The compiler checks plans against 42 typed action contracts across forms, documents, email, e-signature, calendar, and human steps, with about 40 ways to fail closed, from a cycle in the graph to an unsupported action. The same contract digest is pinned in the engine, the backend, and the UI. A closed domain means the model can only ask for things the firm already knows how to do safely. The grammar also injects steps the planner never asked for (render the PDF, attach it, judge the reply) because the contracts require them.
7. Make waiting, approval, and follow-up first-class nodes. A reply wait defaults to 72 hours and can range from one minute to 30 days; when it passes, a rule decides what happens, not a model. One approval covers the plan, and every external action has its own gate tied to a hash of the exact payload, checked again right before sending. A partial reply is a provisional judgment that stays blocked until a person confirms it; the follow-up then runs as a new child plan, the approved parent is never changed, and there are at most five rounds. There are no automatic retries, and side effects get a life cycle - prepared, dispatching, succeeded, or "outcome unknown" and manual review. A chat message can approve a step or answer a question, but it cannot change an approved plan. The model steers; it never drives.
8. Route models by judgment size, and log everything. Outside the planner, judgments are small and typed - is this reply complete, does this document match, which field is which - so a fast flash-tier model handles them. In an illustrative run of 20 decisions, 19 went to the flash tier and one to a frontier model. The design target is about 95 percent of model decisions never needing a frontier model. Every judgment is typed and logged, and provisional ones are confirmed or rejected by a person, so each frontier decision produces eval-grade training data by construction. That data can post-train the flash tier, shrinking the frontier share release by release until even the hard cases run locally. Because every call is small, typed, and schema-checked, pointing it at a privately hosted model is a configuration change, not a rewrite - so 95 percent local inference becomes viable as an architectural consequence, not a policy promise.

## Notable quotes

> "So the intelligent way to build is to use intelligence minimally and on purpose." — [04:52:53 | 1:40:45 PM]

> "In regulated verticals, reliability comes from where you place the boundary between the two, between the parts that must be deterministic and the parts that genuinely need judgment." — [04:57:32 | 1:45:24 PM]

> "The model steers; it never drives." — [05:03:09 | 1:51:01 PM]

> "That is why we designed for about 95 percent of model decisions in a workflow never needing a frontier model, and the flash tier can run on hardware you control." — [05:03:41 | 1:51:32 PM]

## Session narrative

The speaker opened this extra lunch talk with a short self-introduction and a framing question: how do you build workflows that are both reliable enough for regulators and intelligent enough for the real world? He grounded the question in his company's business - a wealth management roll-up that acquires running traditional firms and maximizes their throughput and revenue with AI. Wealth management is regulated, and that is where they build with AI in production. He then listed the four facts that shape these workflows - complexity that needs runtime strategies, sensitive data, severe consequences for policy violations, and a demand for deterministic execution - and noted they all push the architecture in the same direction: minimal, deliberate use of LLM intelligence.

The middle of the talk made the problem concrete with one sentence from a wealth advisor: fill out the IRS W-9 for Mr. Harper. He walked through what a human assistant actually does with it. The assistant finds the form, finds three Harper households in the system of record, and calls the advisor to resolve the ambiguity. Filling the form turns out to be a small program: taxpayer identity, tax classification, exactly one box on line 3A, which name goes on which line, SSN or EIN but never both, taken from a verified document rather than memory. Then the system of record turns out to be missing three values, so an email thread starts, the task waits on the client for days, follow-ups loop, e-signature is chased, and the trail of how each value was obtained is written back. Existing automation fails both ways: a fixed flowchart breaks at the first "which Harper", and an agent that improvises through the task is exactly what a compliance team cannot sign off on.

The core of the talk was the workflow engine his team built in response. A planner model call does translation only, emitting a typed semantic graph grounded in the words of the request. A compiler that never calls a model turns the graph into an execution DAG in eleven deterministic stages, or fails closed, with three possible verdicts: valid, needs clarification, or refused. The plan is immutable and pinned by its hash. The compiler checks the plan against a grammar of 42 typed action contracts, with about 40 ways to fail closed, and the same contract digest is pinned in the engine, backend, and UI so all three agree on what an action means. On the compiled W-9 plan, he showed the gates in action: a person approves the plan itself, drafting is a model call, sending is an action gate where nothing leaves the firm until a person approves that exact email, reply waits are nodes with a 72-hour default, and approvals are tied to a hash of the exact payload and rechecked right before sending. Partial replies stay blocked until a person confirms the judgment; follow-ups run as new child plans, at most five rounds, and the approved parent never changes. A state machine runs the plan, every side effect gets a life cycle ending in "outcome unknown" and manual review when the world does not answer cleanly, and there are no automatic retries.

He closed on model routing and the path to private inference. Outside the planner, the judgments left for the model are small and typed - is this reply complete, does this document match, which field is which - so a fast flash-tier model handles them; in an illustrative run of 20 decisions, 19 went to the flash tier and one to the frontier. The design target is about 95 percent of model decisions never needing a frontier model, and the flash tier can run on hardware you control. Because every judgment is typed and logged, and provisional ones are confirmed or rejected by a person, each frontier decision produces eval-grade training data that can post-train the flash tier - so the frontier share shrinks release by release, and compliance risk falls as an engineering roadmap rather than a promise. His final instruction to the audience: do not ask whether your system should have more agency or less; ask where the boundary is. Let determinism govern control flow, evidence, and side effects; let intelligence handle interpretation and judgment, at typed points you can inspect, and use every logged judgment to need less of it next time.

## Speaker details

- **Karthic Rao** — CTO, Perpetual. (identified from session) Perpetual is an AI-native wealth platform for independent RIA firms that also acts as a buyer and long-term capital partner for the firms it serves; the speaker described this wealth management roll-up model in the talk. Before Perpetual, he worked on data infrastructure at MinIO, including the Iceberg-compatible implementation for AIStor. He is a long-time open-source contributor to the Caddy web server, creator of IncredibleDevHQ, and is based in Bengaluru, India.
  - Identification note: the transcript's opening line renders him as "Kartik, CTO at Perplexity" and the closing line as "Karthik, CTO at Perpetual" (ASR variants). The speaker record resolves this from outside sources: his name is Karthic Rao and the company is Perpetual; "Perplexity" is a mishearing.
  - Links from the speaker record's sources: [LinkedIn](https://in.linkedin.com/in/hackintoshrao), [GitHub](https://github.com/hackintoshrao), [Perpetual](https://investperpetual.com).

## Full timestamped transcript

```
[04:50:30 | 1:38:22 PM] Hello, I'm Kartik, CTO at Perplexity.
[04:50:35 | 1:38:27 PM] In this presentation, I'll talk about building workflows that are both reliable and intelligent for finance, wealth, and insurance.
[04:50:51 | 1:38:43 PM] In regulated domains, workflows must be reliable enough to meet regulatory standards while still being intelligent enough to handle the real world in fields such as finance and wealth management.
[04:51:01 | 1:38:52 PM] This presents both a technical and a compliance issue.
[04:51:04 | 1:38:56 PM] Reliability and intelligence are not opposites.
[04:51:06 | 1:38:57 PM] It is up to you where you draw the boundary between them, and that is the point of this talk: deciding where that boundary lies.
[04:51:13 | 1:39:05 PM] For us, it's not merely a thought experiment, but a question that surfaces serious consequences.
[04:51:18 | 1:39:10 PM] For Perplexity, it's a wealth management roll-up.
[04:51:21 | 1:39:12 PM] We acquire running traditional wealth management firms, and we maximize their throughput and revenue with the help of AI.
[04:51:28 | 1:39:20 PM] Wealth management is a regulated industry, and that is where we build with AI in production.
[04:51:34 | 1:39:26 PM] Everything in this talk is grounded in building for those constraints.
[04:51:38 | 1:39:30 PM] Workflows in finance and wealth management come with four facts, and each of them pushes the architecture in the same direction.
[04:51:45 | 1:39:37 PM] First, they're complex, and they need runtime strategies as the process unfolds.
[04:51:50 | 1:39:42 PM] You can't script every path in advance.
[04:51:52 | 1:39:44 PM] Second, the data is sensitive, so you need a path to move these workflows entirely onto privately hosted models.
[04:51:59 | 1:39:51 PM] Third, in a highly regulated industry, a policy violation isn't a bug report; it has severe consequences.
[04:52:06 | 1:39:58 PM] So, fourth, execution has to be highly reliable and deterministic.
[04:52:11 | 1:40:03 PM] Inject intelligence only where runtime judgment is genuinely required, and minimize reliance on LLMs everywhere else.
[04:52:20 | 1:40:12 PM] AI is spreading through regulated industries, but there's still no consensus on an architecture that gives you high reliability with the least use of LLM intelligence.
[04:52:29 | 1:40:21 PM] Meanwhile, most of what developers hear from the big labs is how to burn more tokens.
[04:52:34 | 1:40:26 PM] But in a regulated industry, token maxing is the wrong goal.
[04:52:38 | 1:40:30 PM] These tasks are close to main.
[04:52:40 | 1:40:31 PM] You can lay them out in advance and build them into a massive state machine, and that machine needs only a sprinkle of intelligence to navigate it.
[04:52:47 | 1:40:39 PM] Most steps just follow the next edge.
[04:52:49 | 1:40:41 PM] Only at a few judgment points does the model pick a branch.
[04:52:53 | 1:40:45 PM] So the intelligent way to build is to use intelligence minimally and on purpose.
[04:53:01 | 1:40:53 PM] Let's make this concrete with a real wealth management workflow.
[04:53:05 | 1:40:57 PM] A wealth advisor turns to their assistant and says one sentence: Fill out the IRS W-9 for Mr.
[04:53:11 | 1:41:02 PM] Harper to a person.
[04:53:12 | 1:41:03 PM] That's a simple instruction.
[04:53:13 | 1:41:05 PM] Watch what it actually triggers when a human being executes it.
[04:53:17 | 1:41:09 PM] The task has complexities that go beyond what meets the eye.
[04:53:21 | 1:41:13 PM] First, the assistant finds Form W-9 from the firm's records or from the IRS website.
[04:53:26 | 1:41:18 PM] Then they look for Mr.
[04:53:28 | 1:41:19 PM] Harper in the system of record and find three Harper households.
[04:53:31 | 1:41:23 PM] So they call the advisor, Which Harper do you mean?
[04:53:34 | 1:41:26 PM] Only once that ambiguity is resolved do they move on to the form.
[04:53:38 | 1:41:30 PM] A lookup, an ambiguity, and a human in the loop, all in the first minute of a one-line task.
[04:53:49 | 1:41:41 PM] Filling a form sounds like data entry.
[04:53:51 | 1:41:43 PM] It isn't.
[04:53:52 | 1:41:44 PM] Every form is a small program.
[04:53:56 | 1:41:48 PM] A W-9 first decides who the taxpayer is, the person or the owner if it's a disregarded entity.
[04:54:02 | 1:41:54 PM] A foreign person stops right here because they need a W-8 instead.
[04:54:07 | 1:41:59 PM] Then how they are taxed.
[04:54:08 | 1:42:00 PM] Exactly one box on line 3A, and an LLC adds its letter.
[04:54:13 | 1:42:05 PM] That decides which name goes on line 1 and which on line 2, then whose number, an SSN or an EIN.
[04:54:21 | 1:42:13 PM] Never both.
[04:54:22 | 1:42:13 PM] Taken from a verified document, never from memory.
[04:54:25 | 1:42:17 PM] Exemption codes apply only to some entities and never to an S corporation.
[04:54:30 | 1:42:22 PM] And finally, who signs under penalties of perjury.
[04:54:33 | 1:42:25 PM] Each answer changes the next question, and the people involved only ever see three kinds of gates: a question, a document to collect, or a signature.
[04:54:43 | 1:42:35 PM] Now they start filling the form and realize the system of record is missing three of the values it needs.
[04:54:50 | 1:42:42 PM] They check the documents on file and the system of record again, still missing, so they start an email thread with the client asking for exactly those three values.
[04:55:00 | 1:42:52 PM] The task now depends on someone outside the firm on their timeline.
[04:55:05 | 1:42:57 PM] And now the workflow waits.
[04:55:07 | 1:42:58 PM] The request is with the client and all three values are still missing.
[04:55:10 | 1:43:02 PM] If the client doesn't reply within two days, the assistant follows up and brings it to the advisor at the daily standup.
[04:55:16 | 1:43:08 PM] If the client replies with only two of the three values, they follow up again for the missing one.
[04:55:21 | 1:43:13 PM] When all three arrive, they complete the form and write the new information back to the system of record, including the trail of how they obtained those values.
[04:55:36 | 1:43:28 PM] In this industry, how you know a value matters as much as the value itself.
[04:55:49 | 1:43:41 PM] Once the form is filled, it goes out for e-signature.
[04:55:52 | 1:43:44 PM] If the client doesn't sign within a day or two, the assistant nudges them again.
[04:55:57 | 1:43:49 PM] Once it's signed, they file it for the client, send the acknowledgement, and update the advisor at the next day standup.
[04:56:03 | 1:43:55 PM] One sentence from the advisor became a process that runs for days, crosses several systems, waits on two people, and loops back on itself more than once.
[04:56:13 | 1:44:05 PM] Look at what's inside that one sentence: ambiguity to resolve, data to gather, approvals, waits measured in days, follow-up loops, and an evidence trail at the end.
[04:56:43 | 1:44:35 PM] Workflow automation tools exist, but they rarely handle this real-world complexity and ambiguity.
[04:56:49 | 1:44:41 PM] A fixed flowchart breaks at the first which-harper, and the lack of a native system of record with an integration, and an agent that improvises its way through is exactly what a compliance team can't sign off on.
[04:57:01 | 1:44:53 PM] One breaks on ambiguity, the other can't be signed off.
[04:57:04 | 1:44:56 PM] Neither handles what's inside that sentence.
[04:57:07 | 1:44:59 PM] So what do we do about it?
[04:57:10 | 1:45:02 PM] The fashionable framing is more agency and better models.
[04:57:14 | 1:45:06 PM] Given agent the whole task and wait for the next model to make it reliable.
[04:57:19 | 1:45:11 PM] The reflexive answer, especially inside regulated firms, is the opposite: less agency, more rules.
[04:57:26 | 1:45:17 PM] Lock it down and hardcode every path.
[04:57:29 | 1:45:21 PM] Both are the wrong axis.
[04:57:32 | 1:45:24 PM] In regulated verticals, reliability comes from where you place the boundary between the two, between the parts that must be deterministic and the parts that genuinely need judgment.
[04:57:42 | 1:45:34 PM] Here's the principle: determinism governs controlled flow, evidence, and side effects.
[04:57:48 | 1:45:40 PM] What runs next, what we know, and how we know it, and anything that changes the world, like a record written, an email sent, or a form filed.
[04:58:02 | 1:45:54 PM] Intelligence provides interpretation and judgment: reading an ambiguous instruction, deciding which harper, understanding a client's reply.
[04:58:12 | 1:46:04 PM] The model answers a typed question, and the deterministic system decides what to do with the answer, and the interplay is recursive.
[04:58:20 | 1:46:12 PM] A judgment can open a new, smaller plan that's compiled, gated, and deterministic again.
[04:58:26 | 1:46:18 PM] You'll see that in a moment with follow-ups.
[04:58:28 | 1:46:20 PM] The boundary between the two is the design.
[04:58:31 | 1:46:23 PM] Here's how that works in the workflow engine we've built.
[04:58:36 | 1:46:28 PM] The request goes to a planner.
[04:58:44 | 1:46:36 PM] That is a model call, and its only job is translation.
[04:58:48 | 1:46:40 PM] It emits a typed semantic graph of intents, entities, facts, artifacts, events, and constraints, each grounded in the words of the request with any ambiguities it found.
[04:58:59 | 1:46:51 PM] Every node points back to the words it came from.
[04:59:03 | 1:46:55 PM] That graph goes to a compiler that never calls a model.
[04:59:06 | 1:46:58 PM] In eleven deterministic stages, it turns the graph into an execution DAG or it fails closed.
[04:59:12 | 1:47:04 PM] There are only three verdicts: valid, needs clarification, or refused.
[04:59:20 | 1:47:12 PM] Which Harper comes back as a question, not a guess.
[04:59:23 | 1:47:15 PM] The plan is compiled, immutable, and pinned by its hash.
[04:59:34 | 1:47:26 PM] The model translates.
[04:59:36 | 1:47:28 PM] The plan is compiled.
[04:59:37 | 1:47:29 PM] The compiler checks the plan against a grammar, the vocabulary of what the firm is allowed to do.
[04:59:43 | 1:47:35 PM] Forty-two typed action contracts across forms, documents, email, e-signature, calendar, and human steps.
[04:59:51 | 1:47:43 PM] Each action the planner asks for has to match a contract.
[04:59:55 | 1:47:47 PM] Here.
[05:00:00 | 1:47:52 PM] Here, Formfill finds its forms contract and logs in.
[05:00:04 | 1:47:55 PM] If the planner asks for an action that isn't in the grammar or wires one up wrong, the compiler refuses.
[05:00:11 | 1:48:03 PM] There are about forty ways to fail closed, from a cycle in the graph to an unsupported action, and the same contract digest is pinned in the engine, the backend, and the UI, so all three agree on what an action means.
[05:00:25 | 1:48:16 PM] That is what a closed domain buys you.
[05:00:27 | 1:48:18 PM] The model can only ask for things the firm already knows how to do safely.
[05:00:31 | 1:48:22 PM] Here is a compiled plan for a W-9 chase.
[05:00:34 | 1:48:26 PM] Send the client the form, wait for it to come back, check it, and file it.
[05:00:39 | 1:48:31 PM] Before anything runs, a person approves the plan itself.
[05:00:42 | 1:48:34 PM] Find the form, prepare it for the client to fill, render the PDF, and draft the email.
[05:00:48 | 1:48:40 PM] Drafting is a model call, so it is violet.
[05:00:55 | 1:48:47 PM] Sending is an action gate.
[05:00:57 | 1:48:49 PM] Nothing leaves the firm until a person approves that exact email.
[05:01:01 | 1:48:52 PM] Then the plan waits for a reply, and a judge steps in to read it.
[05:01:06 | 1:48:58 PM] The returned form is verified.
[05:01:09 | 1:49:00 PM] If it matches, it's archived behind another gate.
[05:01:12 | 1:49:04 PM] If it doesn't, the plan follows up.
[05:01:14 | 1:49:06 PM] Now look at the dashed steps.
[05:01:18 | 1:49:10 PM] Rendering the PDF, attaching it, judging the reply.
[05:01:22 | 1:49:14 PM] The planner never asked for them.
[05:01:24 | 1:49:16 PM] The grammar added them because the contracts require them.
[05:01:28 | 1:49:20 PM] In the story, waiting, approvals, and follow-ups were most of the work.
[05:01:33 | 1:49:25 PM] Here, they are nodes in the plan, not prompts.
[05:01:36 | 1:49:27 PM] A reply wait defaults to 72 hours, and an explicit deadline can be anything from a minute to 30 days.
[05:01:44 | 1:49:35 PM] When it passes, a rule decides what happens, not a model.
[05:01:48 | 1:49:39 PM] One approval covers the plan, and every external action, like sending an email or a signature request, has its own gate.
[05:01:56 | 1:49:47 PM] The approval is tied to a hash of the exact payload and is checked again right before sending.
[05:02:02 | 1:49:53 PM] When a client replies with only part of what we asked, the reply judge marks it partial.
[05:02:07 | 1:49:59 PM] That judgment is provisional.
[05:02:09 | 1:50:01 PM] The step stays blocked until a person confirms it.
[05:02:12 | 1:50:04 PM] A person confirms it, and the step unblocks.
[05:02:15 | 1:50:07 PM] Then the follow-up runs as a new child plan.
[05:02:18 | 1:50:09 PM] The approved parent is never changed, and there are at most five rounds.
[05:02:28 | 1:50:20 PM] Once a plan is approved, a state machine runs it.
[05:02:32 | 1:50:23 PM] It picks every step and records every result.
[05:02:35 | 1:50:26 PM] When a step needs judgment, it makes one fixed schema model call: compose an email, judge a reply, spot missing values, extract fields, verify a document.
[05:02:46 | 1:50:37 PM] The answer comes back typed, and the state machine decides what to do with it.
[05:02:50 | 1:50:42 PM] Side effects get a life cycle of their own: prepared, dispatching, succeeded, or, when the world doesn't answer cleanly, outcome unknown and manual review.
[05:03:01 | 1:50:52 PM] There are no automatic retries.
[05:03:03 | 1:50:54 PM] A chat message can approve a step or answer a question.
[05:03:07 | 1:50:58 PM] It can't change an already approved plan.
[05:03:09 | 1:51:01 PM] The model steers; it never drives.
[05:03:17 | 1:51:08 PM] Now look at what is left for the model to do.
[05:03:20 | 1:51:11 PM] Outside the planner, the judgments are small and typed.
[05:03:24 | 1:51:15 PM] Is this reply complete?
[05:03:25 | 1:51:17 PM] Does this document match?
[05:03:27 | 1:51:19 PM] Which field is which?
[05:03:28 | 1:51:20 PM] They don't need frontier intelligence.
[05:03:30 | 1:51:22 PM] A fast small model, the flash tier, can handle them.
[05:03:34 | 1:51:26 PM] In this illustrative run of 20 decisions, 19 go to the flash tier and one goes to the frontier.
[05:03:41 | 1:51:32 PM] That is why we designed for about 95 percent of model decisions in a workflow never needing a frontier model, and the flash tier can run on hardware you control.
[05:03:52 | 1:51:43 PM] Only the genuinely hard cases go to a frontier model.
[05:03:56 | 1:51:48 PM] And the 5 percent is not a permanent tax, because every judgment is typed and logged, and the provisional ones are confirmed or rejected by a person.
[05:04:06 | 1:51:58 PM] Each frontier decision produces eval-grade distribution real training data by construction.
[05:04:13 | 1:52:05 PM] That data can post-train the flash tier.
[05:04:17 | 1:52:08 PM] Logging and evals exist today.
[05:04:19 | 1:52:11 PM] The training loop is next.
[05:04:21 | 1:52:12 PM] So the frontier share shrinks, release over release, until even the hard cases run locally.
[05:04:26 | 1:52:18 PM] Remember the requirement we started with, because data is sensitive, you need a path to move workflows entirely to privately hosted LLMs.
[05:04:43 | 1:52:34 PM] So can this design really get there?
[05:04:45 | 1:52:37 PM] Take one typed call from the Harper Bourbonine plan.
[05:04:49 | 1:52:40 PM] Every model call is small, typed, and checked against a schema.
[05:04:53 | 1:52:44 PM] So pointing it at a privately hosted model is a configuration change, not a rewrite.
[05:04:58 | 1:52:50 PM] One line changes, and the same answer comes back.
[05:05:02 | 1:52:53 PM] Every other call has that same small typed shape, so the same change applies to almost all of them.
[05:05:09 | 1:53:00 PM] That is how about 95 percent local inference becomes viable, as an architectural consequence, not a policy promise.
[05:05:16 | 1:53:07 PM] That is the path that sensitive data demands, and compliance risk goes down as an engineering roadmap, release by release.
[05:05:25 | 1:53:16 PM] So if you remember one thing, don't ask whether your system should have more agency or less.
[05:05:30 | 1:53:22 PM] Ask where the boundary is.
[05:05:33 | 1:53:24 PM] Let determinism govern control flow, evidence, and side effects.
[05:05:37 | 1:53:29 PM] Let intelligence handle interpretation and judgment.
[05:05:41 | 1:53:32 PM] At typed points, you can inspect and use every judgment you log to need less of it next time.
[05:05:47 | 1:53:39 PM] Ask where the boundary is.
[05:05:48 | 1:53:40 PM] Thank you.
[05:05:50 | 1:53:41 PM] I'm Karthik, CTO at Perpetual.
[05:05:53 | 1:53:44 PM] If you're building AI into regulated work, I'd love to compare notes.
```
