---
session_id: "005"
title: "Trusting Agents in Policy-Driven Workflows"
agenda_title: "Trusting Agents in Policy-Driven Workflows -- Evan Kormos (Coinbase)"
speakers: ["Evan Kormos"]
start_wall: "9:32:03 AM ET"
end_wall: "9:49:55 AM ET"
video_start: "00:51:27"
video_end: "01:09:19"
video_url: "https://www.youtube.com/watch?v=jiUC6IUMdvc&t=3087s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "keynote"
tags: ["policies-as-code", "agent-workflows", "dag-dcg", "llm-evaluations", "human-in-the-loop", "autonomy", "financial-services"]
confidence: "high"
---

# Trusting Agents in Policy-Driven Workflows

> Coinbase engineering manager Evan Kormos maps policy-driven workflows as deterministic DAGs on the outside, lets agents loop adaptively inside each node, and turns autonomy on only when measured evaluation quality clears a policy threshold.

## TL;DR
- Write policy down as "the original institutional intent, or the original system prompt" using "must, may, and should" language, and separate the build state from the constantly running system.
- Represent processes as directed acyclic graphs (DAGs, Apache Airflow style) so agents can run independent reviews in parallel while the required gates stay in place; inside each node, model work as a directed cyclic graph (DCG) loop managed with LangChain LangGraph.
- Design exception flows instead of every edge case, and watch volume shift to new bottlenecks as agents speed each step up; operational metrics on the whole process matter more than the workflow authoring tool.
- Agents are probabilistic, so exact output comparison fails. Build representative data sets, run evaluations in repeated series as a statistical analysis, and pair them with traces as runtime logs.
- Grow autonomy by hill climb: supervised review on day one, sampling once measured confidence reaches a policy threshold, then exception-only human handling. Keep decision nodes human-driven.

## Key lessons
1. Treat policy as code and as the source of truth. Policy sets "the rules for how work gets done within the organization, and including especially risk and compliance" [00:52:41 | 9:33:17 AM]. Kormos reframes it: "Think of policy as the original institutional intent, or the original system prompt" [00:52:56 | 9:33:31 AM], written with normative language "like must, may, and should" [00:53:09 | 9:33:45 AM].
2. Separate the build state from the run state. You define or change policy at rare moments, but the system "is constantly running and it's constantly moving and changing" [00:53:37 | 9:34:12 AM]. Everything in the run state must still stay "roughly bound by the policy" [00:54:02 | 9:34:38 AM] even as it evolves with product-driven changes.
3. Place agents as an operational model that cuts across people, process, and technology [00:54:33 | 9:35:08 AM]. They work with people, execute parts of the process themselves, and use and are made up of technology. The talk narrows to where agents meet process: what work you give them, what boundaries you set, and how you build trust in their outputs [00:54:48 | 9:35:23 AM].
4. Use DAGs to add parallel capacity while keeping controls. Work that "used to cost too much or be too complex to coordinate" in parallel is now affordable: "we can run independent reviews alongside each other, bring the results together, but keep the required checks in place" [00:55:50 | 9:36:25 AM]. Apache Airflow represents workflows as DAGs in Python [00:56:15 | 9:36:51 AM]; example processes include commercial lending, listing a token on the exchange in a specific region, and regulated software delivery [00:56:35-00:56:59].
5. Model the inside of each node as a DCG loop. In the code review example, steps run, the work is checked, and feedback is applied "until the work is good enough to pass" [00:58:15 | 9:38:50 AM]. LangChain LangGraph manages the state of these directed cyclic graphs [00:58:38 | 9:39:13 AM]; people and agents work together in the inner flow, wrapped in a policy boundary on the outer flow [00:59:06 | 9:39:42 AM].
6. Design exception flows, not every edge case, so work does not get stuck [00:59:16 | 9:39:52 AM]. Monitor failures such as shipped code that "gets canceled or doesn't meet security standards" [00:59:26 | 9:40:02 AM]. Volume shifts across the flow once agents join (faster reviews force faster design and security scans), so operational visibility of process metrics is "much more important than the authoring and the building of your workflow tool" [01:00:19 | 9:40:54 AM].
7. Quality starts with inputs and lives or dies on the check. "Higher quality inputs will result in better outputs at a lower compute cost" [01:01:16 | 9:41:51 AM]; inject the DAG state into the agent's context so it knows where it fits into the bigger picture [01:02:04 | 9:42:39 AM]. The check must define what good looks like, and "The loop is really only as trustworthy as the check" [01:02:52 | 9:43:27 AM].
8. Replace unit-test exactness with statistical evaluation, then climb the autonomy hill. Agents are probabilistic: "the same request can produce different answers" and "More than one answer may be acceptable" [01:03:51-01:03:58]. So build representative data sets, "run these evaluations in repeated series" as a statistical analysis [01:04:17 | 9:44:53 AM], and combine them with traces as runtime logs [01:04:34 | 9:45:10 AM]. Screen nodes with four questions (checkable against policy, bounded loop, traceable, human fallback) [01:05:34-01:05:44]; keep the decision node human-driven [01:06:10 | 9:46:46 AM]; and turn autonomy on gradually: supervised, then sampling at a policy confidence threshold, then exception-only human work [01:06:30-01:07:27].

## Notable quotes
- "Think of policy as the original institutional intent, or the original system prompt." [00:52:56 | 9:33:31 AM]
- "The loop is really only as trustworthy as the check." [01:02:52 | 9:43:27 AM]
- "We need to run these evaluations in repeated series, and this is a statistical analysis, right, where we actually look at the outputs in volume and not just as a direct comparison." [01:04:17 | 9:44:53 AM]
- "And the recipe really is to keep it deterministic on the outside and make it adaptive on the inside." [01:08:01 | 9:48:36 AM]

## Session narrative
An unidentified host voiceover opened the slot with the framing question "Where should AI agents take control, and when should humans stay in charge?" and introduced Evan Kormos, engineering manager at Coinbase [00:51:28-00:51:36]. Kormos opened with his credentials: 20 years delivering and designing software, the last 15 in enterprise financial services, now "a player coach at Coinbase" [00:52:10-00:52:19]. He warned the audience that the talk starts with policy, which is "pretty boring," and asked them to stick with him.

The core argument built a layered model. Policy comes first: the written rules for how work gets done, especially risk and compliance, expressed with must, may, and should, and treated as the original system prompt. He separated this build state from the run state of the constantly changing system. He then placed agents inside the classic people-process-technology model as an operational model cutting across all three, and narrowed the focus to where agents meet process. Workflows became directed acyclic graphs, with Apache Airflow named as the open source example, applied to commercial lending, token listing on an exchange, and regulated software delivery — the example he stayed with, because agent adoption in software delivery is ahead of other business areas. Inside each node he drew a loop, a directed cyclic graph managed with LangChain LangGraph, illustrated by the code review cycle that iterates on feedback until the work is good enough to pass. He wrapped the discussion with exception flows that monitor rather than over-design, and observed that volume shifts across the flow as agents speed steps up, which makes process-level metrics and operational visibility more important than the workflow authoring tool itself.

The second half tackled why the loop is hard: variability of inputs and outputs. He argued that higher quality inputs yield better outputs at lower compute cost, and suggested injecting the DAG state into the agent context. The check — deciding whether work is good enough to move forward — is the hard part, and the loop is only as trustworthy as the check. Because agents are probabilistic and several answers may be acceptable, exact output comparison fails; his prescription was representative data sets, evaluations run in repeated series as statistical analysis, and traces as runtime logs, forming a confidence mechanism that complements traditional unit tests. Returning to lending (KYC and financials in parallel, then credit memo, risk review, documentation, decision), he gave a node-screening checklist — checkable against policy, bounded loop, traceable, human fallback — kept the final decision human-driven, and described the autonomy hill climb: supervised on day one, sampling once measured confidence reaches a policy threshold, then exception-only human involvement.

He closed with four takeaways: DAG and DCG with the recipe "keep it deterministic on the outside and make it adaptive on the inside"; quality through evaluation, so trust is "not a feeling about a model" but research and statistics; quality as a team sport owned by AI engineers with MLOps behind the scenes; and agents accelerating across the operating model. After pointing to references on the final slide, he ended at [01:09:19 | 9:49:55 AM] with "This concludes my presentation. Thank you very much."

## Speaker details
**Evan Kormos** - Engineering Manager, Coinbase. He leads teams managing full stack delivery and service management, with a focus on bringing AI agents into policy-governed automation in commercial Web3 products including Token Listings and the Coinbase Developer Platform. His background spans enterprise transformation, retail and commercial banking, and most recently digital assets and AI, which he draws on for a systems-thinking view of using software to maximize business value. In this session he self-identified as having delivered and designed software for 20 years, the last 15 in enterprise financial services, and as "a player coach at Coinbase" (the transcript renders his surname as "Evan Cormos"; the official agenda spelling is Kormos).

Links: [LinkedIn](https://www.linkedin.com/in/evankormos/) | [Website](https://www.coinbase.com/)

## Full timestamped transcript
```
[00:51:28 | 9:32:03 AM] Where should AI agents take control, and when should humans stay in charge?
[00:51:36 | 9:32:12 AM] Here to explore that balance in policy-driven workflows, please welcome Evan Kormos, engineering manager at Coinbase.
[00:51:57 | 9:32:32 AM] Hi, everyone.
[00:52:09 | 9:32:44 AM] My name is Evan Cormos.
[00:52:10 | 9:32:46 AM] I've been delivering, designing, building software for 20 years, the last 15 in enterprise financial services.
[00:52:19 | 9:32:54 AM] I am a player coach at Coinbase, and we're here today to talk about trusting agents in policy-driven workflows.
[00:52:34 | 9:33:09 AM] So let's start with the policy, and it's pretty boring.
[00:52:37 | 9:33:12 AM] I'm going to go over here for my notes.
[00:52:41 | 9:33:17 AM] So our starting point centers around the policy, and this sets the rules for how work gets done within the organization, and including especially risk and compliance.
[00:52:56 | 9:33:31 AM] Think of policy as the original institutional intent, or the original system prompt.
[00:53:02 | 9:33:38 AM] So ideally, we have this written down.
[00:53:04 | 9:33:40 AM] It's a little bit boring, so stick with me.
[00:53:09 | 9:33:45 AM] Using language like must, may, and should.
[00:53:12 | 9:33:47 AM] And again, these help define the rules and decisions about how the system operates in the organization.
[00:53:20 | 9:33:56 AM] Separate from policy, we have the actual running system.
[00:53:27 | 9:34:03 AM] So the first thing we're going to do is separate these two, both the build state and the run state, and two different moments in time.
[00:53:37 | 9:34:12 AM] So typically we're either defining or changing our policy, but the system is constantly running and it's constantly moving and changing.
[00:53:49 | 9:34:24 AM] So we could then sort of imagine a compilation event that— oops, sorry, I'm skipping ahead.
[00:53:57 | 9:34:32 AM] It's constantly changing.
[00:53:58 | 9:34:34 AM] So it's evolving quickly with these product-driven changes.
[00:54:02 | 9:34:38 AM] So everything is expected to still be roughly bound by the policy, but ultimately we separate this from the run state and the build state.
[00:54:15 | 9:34:50 AM] So inside the system, what does it look like?
[00:54:19 | 9:34:54 AM] We have a familiar model, if we have any enterprise folks in the room here: people, process, and technology.
[00:54:27 | 9:35:03 AM] But where really do agents fit into this mold?
[00:54:33 | 9:35:08 AM] So I see them as an operational model cutting across all three.
[00:54:38 | 9:35:13 AM] They work with people, execute parts of the process themselves, and they use and are made up of technology.
[00:54:48 | 9:35:23 AM] So for our talk today, we're going to be focusing here where agents meet process: what work we give them, what boundaries we set, and how we build trust in their outputs.
[00:55:07 | 9:35:42 AM] So let's dive into your workflow.
[00:55:10 | 9:35:45 AM] And it's high level and seems basic, but if you haven't, there are good reasons to map this out.
[00:55:19 | 9:35:54 AM] So maybe a change has to be approved before it goes live, or a customer has to go through verification before their account is opened.
[00:55:28 | 9:36:04 AM] We expect work to flow in a specific and gated direction.
[00:55:35 | 9:36:10 AM] So I believe agents make it worth revisiting what we can do in parallel.
[00:55:44 | 9:36:20 AM] Previously, some work used to cost too much or be too complex to coordinate in this way.
[00:55:50 | 9:36:25 AM] But now we can run independent reviews alongside each other, bring the results together, but keep the required checks in place.
[00:56:01 | 9:36:36 AM] So this is a directed acyclic graph, or a DAG.
[00:56:04 | 9:36:40 AM] It is a way to represent this workflow or process, the steps, the dependencies, for a flow that moves forward without looping back on itself.
[00:56:15 | 9:36:51 AM] Apache Airflow, if you're familiar, is an example of open source software that represents workflows, their dependencies as DAGs in Python code.
[00:56:35 | 9:37:11 AM] So this Python code, these DAGs, can be used to define and manage a number of policy-driven processes, like, for example, commercial lending.
[00:56:49 | 9:37:24 AM] We could also use a DAG to represent the workflow to list a token on the exchange in a specific region, if you're into that.
[00:56:59 | 9:37:34 AM] Or we could use a DAG to represent a regulated flow of delivering software, which is a hot topic.
[00:57:04 | 9:37:40 AM] And one we'll spend a little bit of time on.
[00:57:08 | 9:37:43 AM] I think that we've seen a lot of adoption within agents, within software delivery, and ultimately we're looking to leverage that same efficiency and scale in other areas of the business and close the adoption gap.
[00:57:26 | 9:38:02 AM] So let's stick with the software delivery example for a little bit.
[00:57:32 | 9:38:08 AM] What happens inside one of these nodes of the process?
[00:57:36 | 9:38:11 AM] And I'll give you a hint: it's a loop.
[00:57:47 | 9:38:23 AM] Oversimplified, but we have a basic version of what's happening within the—let's say this is the code review process, right?
[00:57:56 | 9:38:31 AM] So we're going to essentially do a number of steps, and essentially once we realize the work, we recognize that the work is good enough, we're going to allow it to pass on to the next step.
[00:58:08 | 9:38:44 AM] And that's essentially the function of the code review node.
[00:58:15 | 9:38:50 AM] The work doesn't always end up okay, so sometimes we have to take the feedback from the code review and iterate on it until the work is good enough to pass.
[00:58:31 | 9:39:07 AM] So this is a representation of a directed cyclic graph, or DCG.
[00:58:38 | 9:39:13 AM] So as far as open source software, something like LangChain LangGraph would be what I would say is helpful to manage the state of DCGs.
[00:58:51 | 9:39:27 AM] And this is an oversimplification.
[00:58:54 | 9:39:30 AM] These graphs can be very complex.
[00:58:59 | 9:39:35 AM] So zooming back out, the inner flow of the node, we have people and agents working together.
[00:59:06 | 9:39:42 AM] On the outer flow, we have a policy boundary.
[00:59:12 | 9:39:47 AM] But not everything goes to plan, so we have to handle exception flows.
[00:59:16 | 9:39:52 AM] We don't want the work to get stuck, and we don't want to design for every edge case either.
[00:59:23 | 9:39:58 AM] The exception flows will monitor and see kind of what happens.
[00:59:26 | 9:40:02 AM] If you're shipping code that gets canceled or doesn't meet security standards, that's something you should want to know about.
[00:59:38 | 9:40:14 AM] Volume shifts across the flow once we start to add agents into the mix.
[00:59:43 | 9:40:18 AM] And we've seen this with software delivery, and we'll see it in other processes as we bring agents into those processes as well, where now all of a sudden, if you're reviewing code faster, you need to design it quicker or you need to do the security scan faster.
[00:59:59 | 9:40:34 AM] So we see the volume shift across.
[01:00:00 | 9:40:36 AM] Shift across the flow.
[01:00:04 | 9:40:40 AM] And this is where it's really important that we have visibility into the process overall from a metric standpoint, because as we start to supercharge and parallelize and add more efficiency to the process, we start to develop more and more bottlenecks.
[01:00:19 | 9:40:54 AM] And so the operational visibility of the process is extremely important, much more important than the authoring and the building of your workflow tool.
[01:00:29 | 9:41:04 AM] So we want to visualize the process.
[01:00:34 | 9:41:10 AM] So we want to add parallel capacity by still keeping the controls.
[01:00:37 | 9:41:13 AM] And so this is where we'll add more additional capacity.
[01:00:43 | 9:41:19 AM] Okay, so we're doing some work, we're checking it, we're using the feedback again to refine it until the work is good enough to move on.
[01:00:56 | 9:41:31 AM] But why is that hard?
[01:00:57 | 9:41:33 AM] That seems like a pretty easy thing to do.
[01:00:59 | 9:41:35 AM] But as I mentioned before, these graphs get actually pretty complex, and we'll dive a little bit more into why this is difficult.
[01:01:10 | 9:41:46 AM] And if you're familiar, one challenge with AI engineering is the variability of inputs and outputs.
[01:01:16 | 9:41:51 AM] And I believe that higher quality inputs will result in better outputs at a lower compute cost.
[01:01:27 | 9:42:03 AM] But what are quality inputs?
[01:01:37 | 9:42:12 AM] So we'll generally speak to it as context model, maybe we can nitpick that, but this isn't our area of focus today.
[01:01:46 | 9:42:22 AM] We're going to focus more on outputs.
[01:01:48 | 9:42:24 AM] But we can't really talk about quality of outputs without talking about the quality of inputs.
[01:01:57 | 9:42:32 AM] So ideally, we've established a trusted context for our agent, and there's some references on that.
[01:02:04 | 9:42:39 AM] But one thing we can do in this model is inject the DAG state into our agent and let it know kind of where it fits into the bigger picture.
[01:02:14 | 9:42:49 AM] Okay, so now we've added even long time horizon goals, and that emphasizes the need to optimize the cost and efficiency of this loop.
[01:02:35 | 9:43:10 AM] So the check is where we decide whether the work is good enough to move forward.
[01:02:39 | 9:43:14 AM] We need to define what good looks like.
[01:02:41 | 9:43:16 AM] That's the hard part.
[01:02:44 | 9:43:19 AM] And we need to have a reliable way to evaluate it.
[01:02:47 | 9:43:22 AM] Otherwise, more passes don't necessarily mean better results.
[01:02:52 | 9:43:27 AM] The loop is really only as trustworthy as the check.
[01:02:55 | 9:43:30 AM] So if we want to talk about quality, let's talk about the check and let's talk about quality.
[01:03:01 | 9:43:36 AM] Okay, I think building with AI is an opportunity to improve product quality overall, like some of the conversation about durable software.
[01:03:13 | 9:43:48 AM] So I'm a believer in quality, and in traditional software, we've built confidence mechanisms in place to give us confidence that the software is of high quality.
[01:03:28 | 9:44:04 AM] And that's done with a variety of mechanisms, but primarily systematically with test cases, unit tests, checking these as a part of our delivery flow to ensure that when we make code changes, mistakes aren't made that break other things, right?
[01:03:43 | 9:44:19 AM] So this is a confidence mechanism that we've put in place with traditional software.
[01:03:51 | 9:44:26 AM] The agents are probabilistic, and so the same request can produce different answers.
[01:03:58 | 9:44:33 AM] More than one answer may be acceptable.
[01:04:02 | 9:44:38 AM] And we still need evidence, but exact output comparisons alone really aren't good enough.
[01:04:09 | 9:44:45 AM] We need to build representative data sets and evaluate them and define what good looks like.
[01:04:17 | 9:44:53 AM] We need to run these evaluations in repeated series, and this is a statistical analysis, right, where we actually look at the outputs in volume and not just as a direct comparison.
[01:04:34 | 9:45:10 AM] So, combining with evals as sort of your runtime logs of what happened, or sorry, traces, which are sort of your runtime logs of what happens, we've built this confidence mechanism to complement traditional software.
[01:04:53 | 9:45:29 AM] And ultimately, this is what we're going to be talking about a little bit more in terms of driving confidence in the output, not only putting this mechanism in place, but how do we begin to turn it on?
[01:05:08 | 9:45:44 AM] So, where does the agent belong?
[01:05:11 | 9:45:47 AM] Back to the lending example, we can do KYC, financials in parallel, and sequence like credit memo, risk review, documentation, decision, all these things in our DAG.
[01:05:23 | 9:45:59 AM] Looking at each node, we want to ask some certain questions like, how valuable would it be to have an agent drive this node versus a human drive this node?
[01:05:34 | 9:46:09 AM] And we can sort of look at some of these basic questions like, can we check it against the policy easily?
[01:05:39 | 9:46:14 AM] Can it run an abounded loop?
[01:05:41 | 9:46:16 AM] Can we trace it?
[01:05:42 | 9:46:17 AM] Can we fall back to a human?
[01:05:44 | 9:46:19 AM] If we can answer yes to these type of questions, we can kind of have a good idea going in that this particular node may be better suited for automation.
[01:05:53 | 9:46:29 AM] But throughout the DAG, we should look to drive agent assistance.
[01:05:58 | 9:46:33 AM] So, what we're really talking about is not whether or not AI is involved, but whether or not AI we expect to Take over at some point.
[01:06:10 | 9:46:46 AM] On the decision, you would probably agree that we probably need that to be human-driven.
[01:06:15 | 9:46:50 AM] This is essentially the check against the policy.
[01:06:18 | 9:46:53 AM] So this is going to be a little bit more difficult, I think, to hill climb.
[01:06:25 | 9:47:00 AM] But what do we mean by hill climb?
[01:06:27 | 9:47:02 AM] All right, how do we turn this on?
[01:06:30 | 9:47:05 AM] So day one, we start supervised.
[01:06:33 | 9:47:09 AM] And as we have agents and humans working together as a part of the process, we can manually verify the output to ensure that it is of high quality.
[01:06:48 | 9:47:23 AM] This is where we refine our data sets and ensure that we have the right confidence mechanisms in place.
[01:06:54 | 9:47:29 AM] We've defined what good looks like with the domain subject matter experts, and that they're beginning to verify it.
[01:07:03 | 9:47:39 AM] When measured confidence reaches a policy threshold, we can move towards sampling.
[01:07:09 | 9:47:44 AM] And what that means is humans are looking at a slice of the output and not necessarily all of it.
[01:07:14 | 9:47:50 AM] We begin more systematic evaluation through traces in order to ensure that what the humans aren't seeing is still meeting the quality bar.
[01:07:27 | 9:48:02 AM] And then finally, once we clear the confidence threshold, humans handle more of the exceptions of the process, but still act as participants in refining the data sets and ensuring the quality outputs.
[01:07:40 | 9:48:16 AM] Okay, so a few takeaways from this.
[01:07:49 | 9:48:25 AM] DAG and DCG.
[01:07:50 | 9:48:26 AM] Basic graph theory, but ultimately, how do we build these processes that exist today and where people are working them and bring agents into the mix?
[01:08:01 | 9:48:36 AM] And the recipe really is to keep it deterministic on the outside and make it adaptive on the inside.
[01:08:13 | 9:48:49 AM] The next is quality through evaluation, and this is really establishing a complementary confidence mechanism.
[01:08:22 | 9:48:58 AM] So it's not a feeling about a model.
[01:08:25 | 9:49:00 AM] We can actually provide research and statistics about the quality of our agents.
[01:08:35 | 9:49:11 AM] So this builds confidence and inherently trusts output.
[01:08:42 | 9:49:18 AM] Quality is a team sport.
[01:08:44 | 9:49:20 AM] AI engineers own the pipeline to taking product signals from all directions and deliver applications that are well built and utilize MLOps operations behind the scenes.
[01:09:02 | 9:49:38 AM] Finally, agents accelerate across the operating model.
[01:09:11 | 9:49:46 AM] I've included some references on the final slide, things that I've spoken about today.
[01:09:17 | 9:49:53 AM] This concludes my presentation.
[01:09:19 | 9:49:55 AM] Thank you very much.
```
