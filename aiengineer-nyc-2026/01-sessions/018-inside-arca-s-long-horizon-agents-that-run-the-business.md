---
session_id: "018"
title: "Inside Arca’s long-horizon agents that run the business"
agenda_title: "Inside Arca’s long-horizon agents that run the business"
speakers: ["Aman Singh"]
start_wall: "11:07:46 AM ET"
end_wall: "11:21:13 AM ET"
video_start: "02:19:54"
video_end: "02:33:21"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=8394s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: ["long-horizon-agents", "ai-native-company", "wealth-management", "signals-engine", "agent-memory", "human-in-the-loop", "financial-services"]
confidence: "high"
---

# Inside Arca’s long-horizon agents that run the business

> Arca, an "AI native" wealth-management services firm, gives agents four primitives (signals, operational context, a harness with persistent memory, and human collaboration) so they own 10-day client goals end to end — and the firm steers the business by steering its agents.

## TL;DR
- Arca is an "AI native services firm" (financial planning, tax planning, asset management, investment advice) where "agents run the business," not copilots in a corner: "they execute the decisions that shape the outcomes."
- Financial-services work is long horizon, not long running: one client goal spans about 10 days, stop-start, with many actors, decision points, and handoffs. The demo case is client Jane's $100,000 tax bill due April 15th.
- Agents got four primitives: external-world signals, operational context, a harness with tools/guardrails plus long-horizon persistent memory, and the ability to collaborate with and pull in people.
- A signals engine lets agents "watch the world so people don't have to": agents register interest ("let me know when Jane responds", "let me know when that ACH lands"), signals route agent-to-agent, agents self-wake on a schedule, and human actions in the product (rescheduling a calendar event, marking a task complete) are signals too.
- Six months of hardening followed: close context gaps, sharpen task precision (right person, right time), split state (future work lives in agent memory, doable-now work becomes a task), standardize firm work into agent state, and turn colleagues' reasoning into evals.
- The payoff: agents have "done, like, 90% of the work" before a person acts, "agents prompt people more than people are prompting agents," and a new business goal ("Proactivity" — every January prepare each client's tax situation and reach out first) ships as an agent goal. "You know you've built one when you can steer your business by steering your agents."

## Key lessons
1. Separate "long horizon" from "long running." In financial services, the work is not "agents grinding tokens for like hours or days on end." It is one client goal that spans 10 days, very stop-start, with many actors, decision points, and handoffs before the goal lands.
2. Know the baseline workflow you are replacing. For Jane's $100,000 tax bill: the advisor does statement analysis for the tax-optimal way to raise cash, the trader liquidates assets, assets take days to settle, ops triggers the ACH, and the ACH itself takes days to land. Run this at scale for many clients and the firm's time on this work grows exponentially.
3. Give agents the whole outcome, not tasks. Because Arca is "the firm" — an applied AI company running a services business, not a SaaS vendor — agents own the long-horizon outcome end to end, with signals from the external world, operational context on what the industry does, a harness of tools and guardrails with persistent memory, and the ability to collaborate with people. Humans come out of the critical path.
4. Deep client memory carries constraints across months. The agents know "let's never touch Jane's Apple position because she said that in a call like eight months ago," and a sandbox handles the financial computation. Singh's aside: harnesses are coalescing on a standard shape, so the differentiated work is what happens outside the harness.
5. Make plans live in agent-built "spaces." A plan "cannot be executed without people," so agents build a space that holds the plan, where multiple people chat with the agent, approve the plan, and get pulled in exactly when execution needs a person.
6. Build a signals engine that covers both worlds. Agents register interest in anything ("let me know when Jane responds," "let me know when that ACH lands"); the system routes signals to interested agents; agents wake themselves on a schedule when a signal never lands. Human work in the product — adding information learned in person, rescheduling a calendar event, marking a task complete — is also a signal that wakes an agent. Agents notify other agents (the space updates from $100,000 to $80,000 needed), and an agent reading operational context pulls in the trader at the right time with a task.
7. Harden the loop deliberately. Over six months Arca closed context gaps so agents are fully aware, worked on task precision (right person, right time), split state ("work that needs to be tracked for the future is tracked in the agent's memory," while "work that is doable now becomes a task"), standardized how work happens in the firm and operationalized that context into agent state, and collected colleagues' rich reasoning as evals.
8. Treat "agents prompt people more than people are prompting agents" as the AI-native test. When people log in they see tasks agents prepared after reading the email and the document and doing "like, 90% of the work." A new business goal — "Proactivity": every January, prepare each client's tax situation and proactively reach out before anyone even asks — is added to the agents' goal set, and January analyses plus one-click approval emails for every client follow. Jane should never have had to send that email in the first place.

## Notable quotes
- "But what we mean by AI native is that agents run our business." — [02:21:14 | 11:09:05 AM]
- "So we let our agents watch the world so people don't have to, right?" — [02:26:29 | 11:14:20 AM]
- "So building this system lets us get to a point where at Arca, agents prompt people more than people are prompting agents, which lets our agents drive the work that our firm does." — [02:31:08 | 11:19:00 AM]
- "In an AI-native company, you know you've built one when you can steer your business by steering your agents." — [02:32:56 | 11:20:48 AM]

## Session narrative
Aman Singh, who leads AI at Arca, took the stage after the changeover from the Wells Fargo talk. Speech ran 11:07:46 to 11:21:13 am ET, inside the agenda's 11:05 to 11:23 am slot. He introduced Arca as an "AI native services firm" that provides financial planning, tax planning, asset management, and investment advice. Clients range from technology executives who "amassed a lot of wealth and need a real plan to retire early" to "that family in New Hampshire that made their first million dollars." By AI native he did not mean a copilot in a corner. He meant agents that "execute the decisions that shape the outcomes" for clients.

The core framing was the difference between long running and long horizon work. Financial-services work is one client goal spanning 10 days, stop-start, with many actors and handoffs. His running example: client Jane owes $100,000 in taxes on April 15th. The advisor analyzes statements for the tax-optimal way to raise the cash. The trader liquidates assets. Assets take days to settle. Ops triggers the ACH, which takes days to land. Scaled across many clients, firm time on this work grows exponentially. Arca's answer flows from what it is: "We are the firm," an applied AI company running a services business, not a SaaS vendor. So agents own the whole long-horizon outcome end to end.

The middle of the talk followed the journey of Jane's email. Background agents continuously evaluate signals: phone calls, incoming documents, meetings, custodian events, market movement. The harness gives agents the knowledge of what to do; deep client memory keeps constraints such as "let's never touch Jane's Apple position because she said that in a call like eight months ago"; a sandbox runs the financial computation. Harnesses are coalescing on a standard shape, Singh argued, so the interesting part is outside the harness. There, agents build a space around the plan. Multiple people can chat with the agent there, approve the plan, and get pulled in when a person must execute. To avoid humans babysitting the goal for days, agents "watch the world so people don't have to": they register interest ("let me know when Jane responds," "let me know when that ACH lands"), the signal system routes signals to interested agents, and agents wake themselves on a schedule if a signal never lands.

The messy real world got its own beat. Jane never replies to the email; the team meets her in person and learns something that affects the plan. Adding that information in the product UI is itself a signal that wakes an agent, as are rescheduling a calendar event and marking a task complete. The system is therefore aware of both the external and the internal world. Agents also talk to each other: one background agent notifies another, and the space updates to "we just need $80,000 instead of the $100,000." An agent reading operational context pulls in the person who trades the assets, who receives a task. Singh summarized the design as the primitives people use at work: stay aware (signal system), know what to do next (operational context), do the work (harness), and hold state over long horizons (persistent memory that brings in the right people at the right time). He acknowledged "a lot of emergent complexity": hundreds of signals at any point, tasks landing on plates, background agents communicating.

The close answered "why do this." Over the last six months Arca closed context gaps, worked on task precision, split future-tracked work (agent memory) from doable-now work (tasks), standardized how work happens in the firm and operationalized that context into agent state, and turned colleagues' rich reasoning into evals. The result: when people log in, they see tasks prepared by agents that have already read the email, looked at the document, and done "like, 90% of the work." Agents prompt people more than people prompt agents. He reframed Jane's original email as a failure, because the firm should have been proactive. The new goal, "Proactivity" — every January, prepare each client's tax situation and reach out before anyone asks — simply joins the agents' goal set, and January analyses plus one-click approval emails for every client follow. That is the difference between a company that uses AI tools and one that is AI-native: you can steer the business by steering the agents. Singh closed by saying Arca is hiring and invited listeners to the website.

## Speaker details
**Aman Singh** - Lead AI Engineer, Arca. Founding member of the technical staff on Arca's AI engineering team (joined November 2025); leads the company's AI work, including the long-horizon agents that run core business operations. Before Arca, he worked at Stripe, where he helped establish Stripe's AI agent framework that powers all agents company-wide. He studied at The Ohio State University and is based in New York. (In this session he introduced himself as "I lead AI at Arca"; the manifest listed him as "Head of AI," while the official agenda and speaker record both say Lead AI Engineer.)

Links: [LinkedIn](https://linkedin.com/in/amanps) | [Website](https://arcawealth.ai)

## Full timestamped transcript
```text
[02:19:54 | 11:07:46 AM] All right.
[02:19:57 | 11:07:49 AM] Good morning, everybody.
[02:20:03 | 11:07:55 AM] Thank you for joining us today.
[02:20:19 | 11:08:11 AM] It is such an honor to be sharing this stage with so many great speakers.
[02:20:24 | 11:08:15 AM] So yeah, let's get right into it.
[02:20:26 | 11:08:17 AM] My name is Aman.
[02:20:27 | 11:08:18 AM] I lead AI at Arca, and today I'm going to talk to you about Arca's long horizon agents that run our business.
[02:20:36 | 11:08:28 AM] Arca is an AI native services firm.
[02:20:40 | 11:08:31 AM] We provide our clients with financial services like financial planning, tax planning, asset management, investment advice, and we serve a range of clients.
[02:20:50 | 11:08:42 AM] Some of them are like technology executives that have amassed a lot of wealth and need a real plan to retire early, but also that family in New Hampshire that made their first million dollars and want to buy that house finally.
[02:21:07 | 11:08:59 AM] I said we were AI native.
[02:21:09 | 11:09:01 AM] There's lots of definitions of this term these days, very overused.
[02:21:14 | 11:09:05 AM] But what we mean by AI native is that agents run our business.
[02:21:21 | 11:09:12 AM] Not that they assist the business from some co-pilot corner.
[02:21:25 | 11:09:17 AM] They execute the decisions that shape the outcomes that our business has for our clients.
[02:21:33 | 11:09:24 AM] Work in this industry, it's interesting to know what it looks like.
[02:21:36 | 11:09:28 AM] In financial services, the work is more long horizon and less long running.
[02:21:42 | 11:09:33 AM] And what I mean by that is this is less agents grinding tokens for like hours or days on end, right?
[02:21:49 | 11:09:41 AM] This is more one client goal that spans 10 days.
[02:21:54 | 11:09:45 AM] It's very stop-start.
[02:21:55 | 11:09:47 AM] There's many actors in between, many decision points, many handoffs, and ultimately that goal lands like 10 days later.
[02:22:04 | 11:09:55 AM] That is the kind of work that we are working on.
[02:22:07 | 11:09:59 AM] And so here's an example.
[02:22:09 | 11:10:01 AM] Jane's our client, fairly wealthy, but has a big tax bill—oh—has a big tax bill in April 15th, right?
[02:22:20 | 11:10:11 AM] So we're going to help Jane figure out what is the most tax-optimal way for this cash to be raised to pay the tax bill.
[02:22:30 | 11:10:21 AM] So there's the advisor that will do all of the statement analysis and the analysis of how to make this tax optimal.
[02:22:37 | 11:10:28 AM] There's the trader that would actually liquidate the assets.
[02:22:42 | 11:10:34 AM] The assets themselves will take like days to settle, and then the ops people will come in and kind of like trigger the ACH.
[02:22:48 | 11:10:39 AM] That will itself take days to land.
[02:22:50 | 11:10:42 AM] So this is kind of the work I'm talking about in this industry, which takes days to settle.
[02:22:57 | 11:10:49 AM] And of course, if you do this at scale for several, several clients, the amount of time our firm takes to do this sort of work exponentially, right?
[02:23:05 | 11:10:56 AM] So at Arca, we took a different approach.
[02:23:09 | 11:11:01 AM] It's helpful to know that Arca is not a SaaS company.
[02:23:14 | 11:11:05 AM] We are not selling software to other businesses, to other firms.
[02:23:17 | 11:11:09 AM] We are the firm.
[02:23:19 | 11:11:11 AM] We're an applied AI company that happens to be running a services business in this industry.
[02:23:24 | 11:11:16 AM] And so the approach we took was, all right, we're going to have agents own this whole long-horizon outcome end to end.
[02:23:32 | 11:11:24 AM] And for that, we gave them a couple of key components.
[02:23:35 | 11:11:26 AM] I'll give you a sneak peek of.
[02:23:37 | 11:11:28 AM] We gave them signals from the external world that keeps them really aware of what is happening.
[02:23:42 | 11:11:33 AM] So that email will be read by agents.
[02:23:45 | 11:11:36 AM] We give them all of our operational context on what to do about that email.
[02:23:48 | 11:11:40 AM] What does this industry do with this situation of taxes, right?
[02:23:52 | 11:11:43 AM] We give them our harness.
[02:23:54 | 11:11:45 AM] That gives them all of the tools and the guardrails, and more importantly, persistence of memory over the kind of long horizon period to carry that work out.
[02:24:05 | 11:11:56 AM] And of course, we gave them the ability to collaborate with people.
[02:24:10 | 11:12:02 AM] So that work with agents compresses a lot because all we did was we took humans out of the critical path of this work.
[02:24:20 | 11:12:12 AM] Nobody has to babysit this goal over days.
[02:24:25 | 11:12:16 AM] Agents are on it.
[02:24:26 | 11:12:17 AM] In this talk, I'd love to describe to you how we actually do that.
[02:24:31 | 11:12:23 AM] Let's follow the journey of this email.
[02:24:35 | 11:12:26 AM] Jane owes $100,000 for taxes.
[02:24:37 | 11:12:29 AM] This email, much like many other signals in our platform, will be read by background agents.
[02:24:46 | 11:12:38 AM] So there's like phone calls our firm is making, there's documents that are coming in, there's meetings being had, there's events coming in from our custodian, there's market movement that's happening.
[02:24:55 | 11:12:47 AM] These are all signals that our background agents are continuously evaluating to progress work.
[02:25:02 | 11:12:53 AM] So this email is one of those signals.
[02:25:04 | 11:12:55 AM] And when the signal is ingested by agents, they actually get to the work, right?
[02:25:09 | 11:13:00 AM] We have a harness that gives them the knowledge to know what to do about the situation.
[02:25:13 | 11:13:04 AM] They have deep client memory, so they know, hey, let's never touch Jane's Apple position because she said that in a call like eight months ago, right?
[02:25:22 | 11:13:14 AM] We of course have a sandbox for all of the financial computation that needs to happen for this analysis.
[02:25:28 | 11:13:19 AM] But largely, I think harnesses today are coalescing on a standard shape.
[02:25:32 | 11:13:23 AM] So it's more interesting what happens outside of this harness.
[02:25:39 | 11:13:30 AM] So after they've done the work, they produce this plan.
[02:25:42 | 11:13:33 AM] This plan by itself cannot be executed without people.
[02:25:45 | 11:13:37 AM] So in our product, we build a space, agents build a space where they put out this plan and there's, you can chat with the agent to like kind of know what's happening with the plan.
[02:25:55 | 11:13:46 AM] There's multiple people that can be chatting with the agent.
[02:25:59 | 11:13:50 AM] And more importantly, this space is where also they pull people in when they need people to execute some work.
[02:26:05 | 11:13:56 AM] So here in this case, we would approve the plan and the email out to Jane.
[02:26:11 | 11:14:02 AM] And then there's this whole dance of, has Jane replied?
[02:26:15 | 11:14:06 AM] What does her answer mean for the plan that we had, right?
[02:26:19 | 11:14:10 AM] And then all of these other questions that will have to be answered throughout this whole like long horizon work.
[02:26:24 | 11:14:15 AM] At Arca, we were like, of course we're not going to have people babysitting it.
[02:26:29 | 11:14:20 AM] So we let our agents watch the world so people don't have to, right?
[02:26:33 | 11:14:24 AM] So we give them tools to be able to register interest in anything happening in our world.
[02:26:39 | 11:14:30 AM] So they're able to say, let me know when Jane responds.
[02:26:42 | 11:14:34 AM] Let me know when that ACH lands, right?
[02:26:45 | 11:14:37 AM] And this is powered by our signal system in the background where agents are routing signals to agents that are interested in it.
[02:26:55 | 11:14:46 AM] And of course, if the signal never lands, agents can like wake themselves up on a schedule as well to keep track of work.
[02:27:05 | 11:14:57 AM] But then of course, the real world is very messy, right?
[02:27:10 | 11:15:01 AM] People are waiting for that email, but Jane never responds to that email.
[02:27:15 | 11:15:07 AM] Say we meet her in person and we learn some information that affects the plan.
[02:27:20 | 11:15:12 AM] So the person goes in and they add this information into our UI.
[02:27:25 | 11:15:16 AM] But this act of adding information or doing work in our UI is also a signal that will wake up an agent.
[02:27:33 | 11:15:24 AM] In fact, when people work in our product, when they reschedule a calendar event, you know, that's a signal.
[02:27:40 | 11:15:31 AM] When they mark a task complete, that is a signal.
[02:27:43 | 11:15:35 AM] So this system lets us be both aware of everything happening in the external world and the internal world as work is progressing so our agents can participate in work.
[02:27:56 | 11:15:48 AM] And of course, agents are communicating with each other as well.
[02:28:00 | 11:15:51 AM] So this signal read by a background agent, we let it notify another agent about this so that it can update the space to say, hey, we just need $80,000 instead of the $100,000.
[02:28:11 | 11:16:02 AM] So the work has changed because of these signals.
[02:28:15 | 11:16:07 AM] And the last piece of the story is that agents are able to pull in the right people at the right time.
[02:28:20 | 11:16:12 AM] So the agent on the left has read operational context to be like, okay, the next step here is to pull in the person that trades these assets.
[02:28:30 | 11:16:22 AM] And so that person now gets a task and gets pulled in to participate in this long horizon work.
[02:28:38 | 11:16:29 AM] What we've done overall, if you take a step back, is we've given our agents the primitives for driving longer horizon work.
[02:28:45 | 11:16:37 AM] What do people do at work, right?
[02:28:47 | 11:16:39 AM] They need to stay aware of what is happening.
[02:28:49 | 11:16:40 AM] So we've built this very intense signal system for our agents to be aware.
[02:28:53 | 11:16:45 AM] They need to know what to do next.
[02:28:55 | 11:16:47 AM] So we've given them all of this operational context.
[02:28:58 | 11:16:49 AM] They need to do the work.
[02:28:59 | 11:16:50 AM] So it's our harness that lets them actually perform the work and keep track of it, right?
[02:29:03 | 11:16:54 AM] It's long persistence memory systems that hold the state and bring in the right people at the right time.
[02:29:14 | 11:17:06 AM] This is a pretty simple idea on the face of it, but there's a lot of emergent complexity.
[02:29:20 | 11:17:11 AM] You can imagine at any point there's hundreds of these signals coming in, and tasks are being added on people's plates, they're being pulled in, background agents are communicating with each other, right?
[02:29:33 | 11:17:24 AM] So over the last six months, we've been working on getting this system to be really good.
[02:29:38 | 11:17:29 AM] We've been closing all of our context gaps so that agents are fully aware.
[02:29:43 | 11:17:34 AM] We have been working on the precision of tasks, so pulling in the right person at the right time.
[02:29:49 | 11:17:40 AM] Work that needs to be tracked for the future is tracked in the agent's memory.
[02:29:53 | 11:17:44 AM] Work that is doable now becomes a task, right?
[02:29:56 | 11:17:47 AM] So we've been working on our ability to hold state over long horizons as well.
[02:30:01 | 11:17:53 AM] And because we are the firm and not just a SaaS company, we've been changing and standardizing how work happens in the firm in the first place, and operationalizing that context into our agent state.
[02:30:15 | 11:18:06 AM] And because these are our colleagues that use our product, we collect rich reasoning from them that become evals for our system to improve.
[02:30:25 | 11:18:16 AM] So, I guess there's a question to be asked here, like, why do this, right?
[02:30:29 | 11:18:21 AM] What does this unlock?
[02:30:32 | 11:18:23 AM] What is the takeaway here, right?
[02:30:33 | 11:18:25 AM] For us, this is our whole thesis, is that we want our platform to be so AI-native that agents drive the business.
[02:30:44 | 11:18:35 AM] Agents run the business.
[02:30:45 | 11:18:37 AM] They are making the decisions that shape our outcomes.
[02:30:49 | 11:18:41 AM] And so at Arca, when people log in, right, they see a list of tasks that have been prepared for them by agents.
[02:30:57 | 11:18:49 AM] They've already read that email.
[02:30:59 | 11:18:50 AM] They've, like, looked at the document that came in.
[02:31:01 | 11:18:53 AM] They've done, like, 90% of the work, and they're pulling you in just when it's time for you to act.
[02:31:08 | 11:19:00 AM] So building this system lets us get to a point where at Arca, agents prompt people more than people are prompting agents, which lets our agents drive the work that our firm does.
[02:31:23 | 11:19:14 AM] And because agents are driving the work the firm does, agents can drive the business.
[02:31:29 | 11:19:20 AM] Let me give you an example.
[02:31:30 | 11:19:21 AM] Remember that email that Jane sent us?
[02:31:32 | 11:19:24 AM] This is a bit of a failure, right?
[02:31:34 | 11:19:25 AM] Because we should have just been proactive about this in the first place, right?
[02:31:38 | 11:19:30 AM] So Jane should never have to send this email.
[02:31:41 | 11:19:32 AM] So say at, you know, our AI-native business, we take on this new goal.
[02:31:46 | 11:19:38 AM] Our new goal is— Proactivity.
[02:31:51 | 11:19:42 AM] Every January, prepare each client's tax situation and proactively reach out to them before anyone even asks.
[02:31:59 | 11:19:50 AM] This is a new business goal for our business to drive.
[02:32:01 | 11:19:53 AM] And in an AI-native firm, all we have to do is make this goal part of our agent's set of goals.
[02:32:10 | 11:20:02 AM] And because they have the primitives to be able to drive work through people for the business, they start driving this goal.
[02:32:18 | 11:20:09 AM] And just like that, you have these analyses being done in January and these one-click approval emails with the full plan for every client showing up on our users' plates.
[02:32:32 | 11:20:24 AM] And because they're aligned with the goal of proactivity, they can one-click approve and drive the business towards this new outcome.
[02:32:42 | 11:20:34 AM] So this is sort of, I think, the key difference between a company that uses AI tools versus a company that is AI-native.
[02:32:56 | 11:20:48 AM] In an AI-native company, you know you've built one when you can steer your business by steering your agents.
[02:33:04 | 11:20:56 AM] And that is our ambition at Arca, and we're hiring.
[02:33:13 | 11:21:04 AM] So please check out our website.
[02:33:15 | 11:21:07 AM] Please reach out to me if this is something that you're interested in working on, these sorts of problems.
[02:33:20 | 11:21:11 AM] And thank you for listening.
```
