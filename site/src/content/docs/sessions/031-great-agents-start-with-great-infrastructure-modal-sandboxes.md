---
title: Great Agents Start with Great Infrastructure
description: Day 1 · Oct 13. Modal CTO Akshat Bubna shows what agents actually
  need from infrastructure — sandboxes holding multiple containers and sidecars,
  shared volumes, snapshots, path-level network control, and agent-facing
  observability — backing workloads like Hebbia's agent-per-spreadsheet-cell at
  up to 10,000 sandboxes per second.
sidebar:
  order: 31
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 1 · Oct 13</span> <a href="/day1/">Day 1 digest</a> · <a href="/sessions-index/?day=1">More from this day</a></p>

Modal CTO Akshat Bubna shows what agents actually need from infrastructure — sandboxes holding multiple containers and sidecars, shared volumes, snapshots, path-level network control, and agent-facing observability — backing workloads like Hebbia's agent-per-spreadsheet-cell at up to 10,000 sandboxes per second.

<p class="official-reading"><a href="https://aie-nyc-2026-talks.swyxio.workers.dev/talks/akshat-bubna-agent-infrastructure">Read the official edition ↗</a><span> A detailed reading edition with a searchable transcript.</span></p>

## TL;DR
- Modal's sandbox primitive has outgrown the one-sandbox-one-container model: a sandbox now runs multiple containers, including a sidecar proxy, so the agent harness (brains) stays isolated from where tool calls execute (hands).
- Real customer workloads set the bar: Hebbia backs every spreadsheet cell with its own agent, Ramp Inspect pushes almost every PR at Ramp, and Basis agents persist state for days while waiting on an accountant.
- Security has moved past domain allow lists — users want path-level control (specific Datadog or GitHub paths), hidden credential injection, and custom proxy sidecars with their own rules.
- Scale numbers from production: 20 million snapshots a week, 8 petabytes processed a day, almost 2.6 million volumes created a week, and one personal-assistant workload needing 10,000 sandboxes per second that are interactive in under a second.
- Bubna's advice: do not vibe-code a sandbox platform — reliability, security, and scale at this level require purpose-built infrastructure and multi-cloud CPU aggregation.
- The pets-to-cattle analogy is evolving again, into "an ocean of microbes" (analogy credited to Swyx): harnesses that spin up, snapshot, and discard dynamic environments on demand.

## Key lessons
1. **Sandboxes are no longer one-to-one with containers.** Modal sandboxes now run multiple containers or microVMs each. The architecture this enables: the harness (the agent loop that calls the model API, runs tool calls, and loops) is separated from the container where tool calls actually execute, for security and isolation, with a sidecar container in the same sandbox.
2. **Shared storage is how agents collaborate.** With Modal Volumes you choose the striping — for example, every row of the agent spreadsheet shares one volume so agents in that row can collaborate — and you share storage between the main container and the sidecar. Bubna also cites agents sharing file systems with their sub-agents and with humans, and agents saving memory via background tasks ("now called dreaming"), all of which reduces to files needing performance, consistency, and devex you can reason about.
3. **Long-horizon agents need snapshot-and-rehydrate, not always-on state.** Basis is the example: documents arrive, the agent starts work, then waits days for an accountant's response. Usage per sandbox is inconsistent, so you snapshot the sandbox, release the resources, and reliably get them back when the sandbox needs them — paying only for the duration.
4. **Domain allow lists are not enough for agent egress control.** Users want control down to specific paths on services like Datadog or GitHub, reasoning about specific operations. The emerging pattern is a user-written lightweight proxy sidecar with custom rules, which Ramp uses successfully. Credentials should be injected so the agent cannot see them and exfiltrate them later ("to a German forum or something").
5. **Expose observability to the agents themselves.** When a training run fails, the agent should read the failure logs, reason about what happened, and retry with different parameters; while training runs, it should watch metrics, GPU utilization, and budget. Since agents now drive most of the compute, Modal spends significant time surfacing this data for agent consumption, not just human dashboards.
6. **Do not vibe-code a sandbox platform.** Three reasons given: reliability (tail events and feedback loops when systems break are hard to reason about even with AI), security (someone must continually reason about security boundaries as everything evolves fast), and scale (Modal's blog post on scaling to millions of sandboxes involves deep systems engineering).
7. **The scale numbers define the infrastructure bar.** 20 million snapshots a week, 8 petabytes of data processed a day, almost 2.6 million volumes created a week. One personal-assistant customer workload requires creating 10,000 sandboxes a second, running almost a million sandboxes that live only two or three minutes, and each must be interactive in less than a second.
8. **You cannot get this scale from a single cloud.** The world is crunched on CPUs, not just GPUs, so Modal aggregates cloud capacity across a bunch of hyperscalers and neoclouds so users get CPU capacity worldwide when they need it.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/akEqiXFo3GM?start=18543&rel=0" title="Great Agents Start with Great Infrastructure" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Akshat Bubna &middot; 1:56:55 PM ET–2:11:19 PM ET &middot; talk &middot; <a href="https://www.youtube.com/watch?v=akEqiXFo3GM&amp;t=18543s" rel="noopener">Watch on YouTube from 05:09:03</a></p>

## Figures

![Three panels showing sandbox eras.](/figures/pets-cattle-microbes.svg)

The sandbox eras, ending in the ocean of microbes.

## Notable quotes
- [05:10:10 | 1:58:01 PM] You have a spreadsheet, and you can run a query where literally every cell is backed by a different agent.
- [05:18:20 | 2:06:12 PM] I don't think you should vibe code a sandbox platform.
- [05:21:04 | 2:08:55 PM] And what this is leading to is a lot of separation of the brains, which is the harness, from the hands, which is the sandbox or the runtime where stuff is running.
- [05:22:42 | 2:10:34 PM] One analogy here is it kind of looks like an ocean of microbes, of all these organisms that are self-evolving and working with each other.

## Session narrative
Bubna opens by pitching to the "finance adjacent" audience: what if every cell in a spreadsheet were backed by an agent? He sketches the analyst use case — running a complex analysis on every portfolio company, which used to take days of connecting data sources and running Python per company — and reveals that Modal customer Hebbia has already built exactly this in production. Every cell in a Hebbia spreadsheet query runs a different agent, which immediately raises the engineering questions the talk answers: how do you isolate untrusted code, how do agents share state, and how do you spin up and tear down thousands of agents per query?

The core of the talk is a tour of the primitives this workload demands. Sandboxes have evolved past one-to-one with containers: they now hold multiple containers plus a sidecar, separating the harness (model calls and the agent loop) from tool execution. Shared volumes let agents collaborate — striped per spreadsheet row if you like — and also carry agent memory and background "dreaming" tasks. Long-horizon agents (Basis waiting days on an accountant) need snapshots so you only pay while the sandbox is live. Agents also increasingly offload compute into sandboxes, preprocessing on CPUs or spinning up GPUs for scientific models. Security requirements have sharpened beyond domain allow lists to per-path control on services like Datadog and GitHub, hidden credential injection, and user-written proxy sidecars — a pattern Ramp uses. Observability closes the loop, and Bubna emphasizes it must be agent-readable: a failed training run should let the agent read logs, adjust parameters, and iterate.

He then interjects the commercial argument: Modal is a from-scratch platform of AI primitives — its own file systems, scheduling, and runtime for inference, sandboxes, training, functions, and batch. Given that, why not have an AI agent ("Astra") build your agent platform? His answer is a flat no — do not vibe code a sandbox platform — for reliability, security, and scale reasons, backed by production numbers: 20 million snapshots a week, 8 petabytes a day, 2.6 million volumes a week, and a personal-assistant workload creating 10,000 sandboxes a second, running nearly a million at once, each interactive in under a second. Scale also forces multi-cloud: CPU capacity is crunched worldwide, so Modal aggregates capacity across hyperscalers and neoclouds.

The close reframes the pets-cattle metaphor. Services were once bespoke pets, then homogeneous cattle under containerization and Kubernetes — which is where most agent deployers are today. But because models are now good at reasoning about dynamic environments, snapshotting them, and working across many of them, the destination is "an ocean of microbes" (analogy credited to Swyx): harnesses separating brains from hands, spinning environments up and down on demand. Bubna's thesis lands where the title promised: great primitives let your agents do more, and Modal wants to be those primitives.

## Speaker details
**Akshat Bubna** - CTO, Modal. Co-founder and CTO of Modal, a code-first cloud platform for AI and data workloads, which he started with Erik Bernhardsson in 2021. Before Modal he was an early engineer at Scale AI and worked at D.E. Shaw and at database and fintech startups. He studied computer science and mathematics at MIT, and is a competitive programmer with gold and bronze medals at the International Olympiad in Informatics — his 2014 gold was the first for a competitor from India.
Links: [LinkedIn](https://www.linkedin.com/in/akshat-bubna-188885103) | [X/Twitter](https://x.com/akshat_b)

## Full timestamped transcript
```
[05:09:04 | 1:56:55 PM] Hey everyone, I'm Akshat, CTO of Modal, and I'm going to talk about a really need from their infrastructure.
[05:09:14 | 1:57:06 PM] So I'm told this audience is very finance adjacent, so I thought I'd talk about what if every cell in a spreadsheet could be backed by an agent.
[05:09:28 | 1:57:20 PM] And imagine you're a financial analyst at a fund.
[05:09:36 | 1:57:28 PM] You want to run a complex analysis on every company in your portfolio.
[05:09:42 | 1:57:34 PM] Normally in the past, this would take days.
[05:09:46 | 1:57:38 PM] You'd have to connect every portfolio company, look at their data sources, run some Python for each of them.
[05:09:54 | 1:57:46 PM] And now obviously with agents, this should be much easier.
[05:09:59 | 1:57:51 PM] Well, actually, one of our customers, Hebbia, built something that's exactly this.
[05:10:06 | 1:57:57 PM] You can go in right now in their product.
[05:10:10 | 1:58:01 PM] You have a spreadsheet, and you can run a query where literally every cell is backed by a different agent.
[05:10:21 | 1:58:12 PM] And I wanted to talk about what does building this really look like?
[05:10:27 | 1:58:19 PM] Well, first, every agent is backed by a modal sandbox.
[05:10:34 | 1:58:26 PM] So a sandbox is a secure environment for running untrusted code.
[05:10:42 | 1:58:34 PM] And it used to be that every sandbox was one-to-one with a container or microVM.
[05:10:50 | 1:58:41 PM] That's actually no longer the case.
[05:10:52 | 1:58:43 PM] Today, actually, Modal has this feature where you can run multiple containers or microVMs inside a sandbox.
[05:11:00 | 1:58:52 PM] And you actually need to do that for doing something like this, where in this architecture, you run the harness.
[05:11:08 | 1:59:00 PM] The harness is the agent loop that does things like running the, calling the model API for inference, running the tool calls, and then looping over it.
[05:11:19 | 1:59:11 PM] You want to separate that from the place where the tool calls actually run for security and isolation and a bunch of other things.
[05:11:27 | 1:59:19 PM] So you have the sandbox that's running multiple containers, including a sidecar.
[05:11:33 | 1:59:25 PM] You also want shared storage because you want your agents to be able to talk to each other.
[05:11:39 | 1:59:30 PM] And it's up to you how you stripe it.
[05:11:41 | 1:59:33 PM] Like maybe you have every row gets the same volume, and agents in that row in the spreadsheet can collaborate.
[05:11:50 | 1:59:42 PM] And you also want to share storage between your main container and the sidecar for some cases.
[05:11:55 | 1:59:46 PM] And finally, you need all of this to spin up really, really fast because your spreadsheet can have lots of cells.
[05:12:02 | 1:59:53 PM] If someone runs a query, you want to launch thousands of agents, and then you want to spin them back down when it's over.
[05:12:09 | 2:00:01 PM] So before I talk more about that, I just wanted to take a quick aside to talk about what is Modal.
[05:12:17 | 2:00:08 PM] Modal is a platform of primitives that is built for AI applications.
[05:12:23 | 2:00:14 PM] So we've basically built this platform from scratch.
[05:12:27 | 2:00:18 PM] We've built our own file systems, the scheduling, and the runtime to give you really great performance and DevEx for use cases like inference, including LLM inference, sandboxes, training, and functions, running a lot of batch processing and whatnot.
[05:12:43 | 2:00:35 PM] And today in particular, I'm going to talk about sandboxes, what this primitive is, and how it's evolving.
[05:12:49 | 2:00:40 PM] So if you want to build something like this, or even further, and we'll talk more about what that means, what are the primitives you need for that?
[05:12:57 | 2:00:49 PM] So the first thing is, if you're building an agent, you need a workspace.
[05:13:01 | 2:00:53 PM] And I have some examples from some of our current customers.
[05:13:05 | 2:00:57 PM] You might have heard of Ramp Inspect.
[05:13:07 | 2:00:59 PM] Ramp Inspect is Ramp's internal coding agent that I think at this point pushes almost every single PR at Ramp.
[05:13:17 | 2:01:08 PM] And if you're building a coding agent, you need your repo, your GitHub repo.
[05:13:22 | 2:01:14 PM] You need your dependencies.
[05:13:24 | 2:01:16 PM] You need your dev services, all in the same workspace for each agent.
[05:13:32 | 2:01:23 PM] Another example is Basis.
[05:13:35 | 2:01:27 PM] What it looks like is your documents might arrive, your agent is then triggered to work on them, but then it's waiting for a response from the accountant, and you don't know how long this could take.
[05:13:47 | 2:01:38 PM] It could take many days.
[05:13:49 | 2:01:41 PM] When you want to persist this state over time memory, your usage is going to change.
[05:13:56 | 2:01:47 PM] And in the second chart, you can see usage per sandbox, and there's definitely some consistent trends, but it's all over the place.
[05:14:04 | 2:01:56 PM] So if you were provisioning this, it doesn't make sense, and then reliably get them when the sandbox needs them, and only pay for them for that duration.
[05:14:16 | 2:02:07 PM] The other interesting emerging thing is agents need a lot more cloud science, where pre-process some data on CPUs, or spin up GPUs for running pre-process some data on CPUs, or spin up GPUs for running a scientific model, it will offload that to a model sandbox.
[05:14:42 | 2:02:34 PM] And we're seeing this show up RSI about what happens when you give an agent sandboxes to hill climb.
[05:14:51 | 2:02:43 PM] The next emerging thing is agents are collaborating a lot more, and that means that you share a file system with your sub-agent.
[05:15:03 | 2:02:55 PM] You share file system.
[05:15:05 | 2:02:57 PM] The next emerging thing is agents are collaborating a lot more, and that means that you share a file systems and files with your human, where you're all collaborating on the same thing.
[05:15:20 | 2:03:11 PM] And this needs file systems that are fast, have consistency, and devex you can reason about, something we're working on with Modal Volumes.
[05:15:31 | 2:03:22 PM] Related thing is we're seeing a lot more self-improvement.
[05:15:35 | 2:03:26 PM] So agents will save and update memory.
[05:15:37 | 2:03:29 PM] They'll run background tasks, which is now called dreaming, to update this memory over time.
[05:15:44 | 2:03:35 PM] And actually, this also just looks like files in a file system.
[05:15:48 | 2:03:39 PM] But again, you want really great performance from this file system.
[05:15:56 | 2:03:48 PM] And the scary thing about agents is they can mess up, and they don't really know when they might leak your sensitive data to a German forum or something.
[05:16:10 | 2:04:02 PM] So you need to have a lot of control over what they can and cannot do.
[05:16:14 | 2:04:06 PM] And you need things like controlling what IPs can even talk to the agent, how do you authenticate it, what domains can it talk to, and also if you're using credentials for talking to services, basically you want to inject them in a way that the agent cannot actually see them and then exfiltrate them somewhere later.
[05:16:38 | 2:04:29 PM] And the interesting evolution of this is we've realized that domain-related allow lists are actually not enough.
[05:16:46 | 2:04:38 PM] A lot of our users actually want very specific control over even, like, what paths can I talk to on, let's say, Datadog or GitHub.
[05:16:56 | 2:04:47 PM] Like maybe I want to reason about specific operations that the agent is doing.
[05:17:00 | 2:04:52 PM] And going back to sidecars, we've seen this emerging as a pattern where users actually write their own lightweight proxy that has custom rules about what exactly it can do, and Ramp is another example of a company that's been using this successfully.
[05:17:19 | 2:05:11 PM] And the final underrated thing is it's really important to have really great observability.
[05:17:25 | 2:05:16 PM] So going back to the example of auto research and an agent doing a lot of training, what happens when the training run fails?
[05:17:33 | 2:05:25 PM] You want your agent to be able to easily look at the logs of the failure, reason about what happened, and do another iteration with a different set of parameters.
[05:17:44 | 2:05:36 PM] And while training is running, you want it to be able to look at the metrics.
[05:17:48 | 2:05:39 PM] You want to look at GPU utilization and make sure it's not stalled.
[05:17:51 | 2:05:42 PM] Maybe you want to look at the budget and make sure you're not spending too much in your sandbox.
[05:17:57 | 2:05:49 PM] And obviously all of this is really important for humans, but as agents are driving a lot more compute, we're spending a lot of time exposing all of this to the agents themselves so they can reason about all of this.
[05:18:10 | 2:06:02 PM] All right, I think we know what we need.
[05:18:14 | 2:06:05 PM] Why don't we have Astra build us an agent platform?
[05:18:19 | 2:06:10 PM] Well, I don't think it's a good idea.
[05:18:20 | 2:06:12 PM] I don't think you should vibe code a sandbox platform.
[05:18:24 | 2:06:15 PM] And there's three main reasons for that.
[05:18:26 | 2:06:17 PM] Number one is reliability.
[05:18:27 | 2:06:19 PM] I think we're all painfully aware how hard it is to get right.
[05:18:33 | 2:06:24 PM] Certain websites we use every day keep going down.
[05:18:37 | 2:06:29 PM] And the reason for that is even with AI, it's actually really hard to reason about the feedback loop of, like, what happens in the case of this tail event when the system breaks.
[05:18:49 | 2:06:40 PM] And this is why you need to be very careful when building systems.
[05:18:52 | 2:06:44 PM] Security is another one.
[05:18:54 | 2:06:45 PM] You could vibe code a sandbox platform, but who is going to do all the work to, like, continually reason about the security boundaries and make sure it's defensible in an age when everything is...
[05:19:06 | 2:06:58 PM] Evolving very fast.
[05:19:09 | 2:07:01 PM] And finally, scale.
[05:19:11 | 2:07:02 PM] We have a blog post about how we scale to millions of sandboxes, which involves a lot of very interesting engineering design and reasoning about systems.
[05:19:20 | 2:07:11 PM] And this is, again, something that you kind of don't want to leave up to a vibe-coded platform, because when you get to scale, you want it to work.
[05:19:30 | 2:07:21 PM] And on that point, we're actually seeing massive scale for a lot of things I mentioned.
[05:19:35 | 2:07:27 PM] So, for example, for the snapshots I mentioned, it's growing quite fast.
[05:19:40 | 2:07:31 PM] We're seeing 20 million snapshots a week.
[05:19:43 | 2:07:35 PM] We're processing about 8 petabytes of data a day for each of these snapshots.
[05:19:51 | 2:07:42 PM] And our users are creating almost 2.
[05:19:54 | 2:07:45 PM] 6 million volumes a week, and all of this is growing super fast.
[05:19:59 | 2:07:51 PM] And just to take a
[05:20:01 | 2:07:52 PM] To take a customer workload for a personal assistant, you need to create 10,000 sandboxes a second.
[05:20:08 | 2:07:59 PM] You need to run almost a million sandboxes.
[05:20:12 | 2:08:03 PM] And they're not going to last very long.
[05:20:14 | 2:08:05 PM] They'll just last for like two or three minutes.
[05:20:16 | 2:08:08 PM] But when they come up, you want them to be interactive in less than a second.
[05:20:21 | 2:08:12 PM] That's what this workload really demands.
[05:20:26 | 2:08:17 PM] And the other interesting thing on scale is you actually cannot get all this scale from a single cloud platform.
[05:20:33 | 2:08:25 PM] The world is actually getting crunched on CPUs as well, not just GPUs.
[05:20:37 | 2:08:29 PM] So one thing we spend a lot of time doing is actually aggregating cloud capacity from a bunch of hyperscalers and neoclouds.
[05:20:45 | 2:08:36 PM] So our users have access to CPU capacity across the world when they need it, but we cannot rely on one cloud provider to do that.
[05:20:53 | 2:08:45 PM] Okay, so where is all this going?
[05:20:56 | 2:08:47 PM] I hinted at this earlier, but the harnesses are really good at making use of dynamic environments.
[05:21:04 | 2:08:55 PM] And what this is leading to is a lot of separation of the brains, which is the harness, from the hands, which is the sandbox or the runtime where stuff is running.
[05:21:15 | 2:09:07 PM] And what this means, I have an example here, is the harnesses are going to be able to spin up environments based on what they need right now.
[05:21:26 | 2:09:18 PM] They're good at snapshotting them and keeping them around as artifacts that they need later, and again adjusting all of this as necessary.
[05:21:36 | 2:09:28 PM] So I think this points at an interesting evolution of the pets to cattle analogy we're all familiar with.
[05:21:46 | 2:09:37 PM] To recap.
[05:21:47 | 2:09:38 PM] In the olden days, people thought of services like pets.
[05:21:52 | 2:09:43 PM] Each one was bespoke.
[05:21:53 | 2:09:44 PM] You had to manage it.
[05:21:55 | 2:09:46 PM] You had to reason about this individual deployment specifically.
[05:22:00 | 2:09:51 PM] And then over time, with containerization and Kubernetes, people started to think about it as homogeneous templates of these servers are all the same.
[05:22:12 | 2:10:04 PM] You can scale them up and down.
[05:22:14 | 2:10:05 PM] If one of them fails, it's not an issue because our system can heal from that.
[05:22:19 | 2:10:10 PM] And I think this is where a lot of people deploying agents are today.
[05:22:23 | 2:10:14 PM] They're kind of using these homogeneous environments and scaling up these agents.
[05:22:27 | 2:10:18 PM] But I think that's really limiting because the models are so good at reasoning about dynamic environments, snapshotting, creating lots of environments when needed and working across them.
[05:22:38 | 2:10:30 PM] So what does the new world look like?
[05:22:42 | 2:10:34 PM] One analogy here is it kind of looks like an ocean of microbes, of all these organisms that are self-evolving and working with each other.
[05:22:52 | 2:10:43 PM] And credit to Swyx for the analogy here.
[05:22:56 | 2:10:47 PM] But one thing I'm really excited about is as you give agents these really rock-solid primitives for compute and storage and networking, they will be able to actually do a lot more by doing the stuff I talked about, like spinning up lots of environments, working with each other, and being very dynamic.
[05:23:16 | 2:11:07 PM] So yeah, I and us at Modal really think that great primitives let your agents do more.
[05:23:24 | 2:11:15 PM] And yeah, if you're interested in talking about this more, reach out to us.
[05:23:27 | 2:11:19 PM] Thank you.
```
