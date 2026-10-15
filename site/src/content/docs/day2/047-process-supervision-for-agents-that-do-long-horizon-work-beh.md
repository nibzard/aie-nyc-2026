---
title: Process Supervision for Agents That Do Long-Horizon Work
description: Day 2 · Oct 14. Basis co-founder Mitchell Troyanovsky argues that
  agents only earn end-to-end production use when they are simple and reliable,
  and shows three tools — behavior specs, forking, and simulations — that
  supervise the process of long-horizon work, not just the outcome.
sidebar:
  order: 47
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

Basis co-founder Mitchell Troyanovsky argues that agents only earn end-to-end production use when they are simple and reliable, and shows three tools — behavior specs, forking, and simulations — that supervise the process of long-horizon work, not just the outcome.

## TL;DR
- Individual productivity with coding agents (Cursor, Codex, Claude Code) may be up 100x, yet average firms show no such gain. Troyanovsky blames two gaps in "coding-style agent products": a competency gap (complexity is outsourced to the user) and a process gap (each user decides how the work gets done).
- Firms already trust non-deterministic workers — people — because process flows from leadership down. Agents need the same: be opinionated, do things one consistent way, and prefer reliability over occasional brilliance.
- Behavior specs are short intent documents ("a product spec for the agent era") that double as a rubric over unlabeled trajectories, scaling supervision signal far beyond what ground-truth outcome evals can cover.
- Forking a trajectory at the moment of a bad decision lets you ask the agent "why'd you do that?" and test context edits; simulations (a coding agent's sub-agent impersonating your production agent) are the cheap, fast version he used for over a year before Basis built forking.
- Close: simple agents diffuse, reliable agents are trusted, and opinions generate the signal that closes the loop toward self-improving agents in production.

## Key lessons
1. Two gaps block firm-level productivity gains from agents: the competency gap — agents "outsource the complexity to the user," who must manage skills, memories, and theory of mind over the agent — and the process gap, where the way work is done is customized by each individual user instead of coming "from senior leadership down" [08:13:33-08:15:02].
2. Reliability, not perfection, is the bar for production agents. "It's okay if you can't do something, but you should be consistently able to not do something, and then you get better, just like a person does" [08:16:24]. An agent that is an expert one day and misses something basic the next is not reliable.
3. Being opinionated means choosing one way to do each task. Reading a PDF has "literally infinite possibilities" — a VLM, Python plus an open-source OCR library, an OCR-specific provider, OCR with a VLM check, or "a hundred VLMs and take the best of N." Saying "agent extract PDF" without an opinion "might get good outcomes, but they're not going to be reliable" — not because the process was bad, but because it was not opinionated [08:16:46-08:17:31].
4. Opinions often come from expertise before evals, and encode trade-offs. A tax agent that reads the primary source before answering is more likely accurate; an agent that photographs its PowerPoint before returning has fewer formatting issues — but that screenshot adds latency, so if mistakes happen one in a hundred times you may skip it [08:17:42-08:18:41].
5. Outcome evals cannot cover long-horizon production: you might have a hundred or a thousand cases, but production brings "hundreds of thousands of situations," and the number of decisions in a trajectory "grow[s] exponentially" as long-horizon ability increases. You cannot prove every trajectory correct, but you can check whether the intended behavior occurred and infer generalization from that [08:19:09-08:20:10].
6. A behavior is never just the system prompt. It is "a combination of the system prompt, your progressive disclosures, potentially tool descriptions, obviously the training of the model." His build tip: treat everything in the agent's runtime context "as runtime training data" — the word "prompt" trivializes it, and you should "care about every single token" [08:20:50-08:21:40].
7. Behavior specs capture only the most important opinions (putting in everything duplicates state), align the team, and then act as a rubric on any trajectory without ground truth: did a situation where the behavior applies arise, and did the agent exhibit it? This "scale[s] the amount of signal that you get on your trajectories far larger than trying to increase the amount of outcome-based evals, ground truths, and rubrics" [08:21:55-08:23:05].
8. Forking and simulations turn signal into fixes. Fork right before (or after) the decision that violated the spec, ask the agent why, or edit the context and see if behavior improves — with outcome evals you are stuck asking "why?" across "a thousand inference calls in your five-hour-long agent trajectory run." Simulations — a coding agent builds a sub-agent that "pretends to be your production agent" (tell it not to cheat, give it the system prompt and skills) — are worse but "much cheaper, much faster"; he did this "for literally a year, year and a half plus" before Basis built forking internally [08:23:20-08:26:15].

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=29357&rel=0" title="Process Supervision for Agents That Do Long-Horizon Work" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Mitchell Troyanovsky &middot; 4:49:53 PM ET–5:09:32 PM ET &middot; keynote &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=29357s" rel="noopener">Watch on YouTube from 08:09:17</a></p>

## Notable quotes
- "It's okay if you can't do something, but you should be consistently able to not do something, and then you get better, just like a person does." [08:16:24 | 4:56:59 PM]
- "And one tip, by the way, I have for when you think about building production agents is really think of the context the agent is going to see as it's working as runtime training data" [08:21:11 | 5:01:47 PM]
- "You can kind of think of this a little bit as like a product spec for the agent era." [08:22:14 | 5:02:49 PM]
- "The way you get to simple and reliable is you develop opinions on how the agent behaves, and then opinions allow you to build that additional signal that helps you start to close the loop so that you can achieve self-improving agents in production." [08:28:42 | 5:09:18 PM]

## Session narrative
A stage voiceover set the theme — "When AI agents tackle complex tasks, the final answer is only part of the story" — and welcomed Mitchell Troyanovsky, co-founder of Basis, the New York City company building agents trusted "end-to-end by accounting firms across the country." He opened with a puzzle aimed at the room: everyone using Cursor, Codex, or Claude Code has raised personal productivity maybe 100x, yet the average enterprise has seen nothing close. His answer reached for an analogy from the slide behind him — an accounting firm's org chart. The head of a firm has "literally no idea" what the people at the bottom do day to day, yet trusts the work, because process (down to "use the approved software to extract the data") generalizes to good outcomes even with non-deterministic workers. Humans already work with non-deterministic systems, he noted — "those systems are normally their coworkers, not their computers."

The core argument diagnosed "coding-style agent products" as failing on two axes: a competency gap, because they outsource complexity to users who must hold theory of mind over the agent, which "the wide majority of knowledge workers" cannot do; and a process gap, because per-user customization of how work gets done "goes entirely against the way that organizations scale." The remedy is agents that are simple ("you shouldn't even have to know it's an agent") and reliable, which requires being opinionated. He made this concrete with PDF extraction — a VLM, Python with open-source OCR, OCR vendors, best-of-N with a hundred VLMs — and with opinions drawn from expertise (tax agents should read the primary source; PowerPoint agents should screenshot their output), including latency trade-offs. He then attacked the eval math: a hundred or a thousand outcome evals cannot cover hundreds of thousands of production situations as trajectories lengthen, so you supervise the process instead.

The middle of the talk delivered the three tools of the title. First, behavior specs: written intent captured before context is updated — "a product spec for the agent era" — holding only the most important opinions, then reused as a rubric over any trajectory (did the relevant situation arise, did the agent exhibit the behavior), which scales supervision signal far faster than ground-truth evals. His worked example was a bank-reconciliation behavior: when a mistake appears, explain the difference rather than posting a plug entry — the specific choice is subjective, but customers must never get "one way one time and another way the other time." He also stressed that a behavior is the whole context — system prompt, progressive disclosures, tool descriptions, model training — and advised treating that context "as runtime training data." Second, forking: like the fork icon in the Claude Code and Codex web apps, but hard to rebuild in the cloud with database and environment state; forked at the offending decision, a trajectory tells you why it failed a behavior eval. Third, simulations, his favorite: have a coding agent build a sub-agent that pretends to be the production agent, tell it not to cheat, and replay situations to iterate on context cheaply — a technique he used for a year and a half before Basis built forking internally. (The official agenda adds that Basis partnered with Braintrust to publish behavior specs as an open standard, though this was not stated on stage.)

He closed by tying supervision back to trust with a PR-review lens: reviewers weigh blast radius against perceived competence, and "this idea is true with humans working with agents, just like it is with humans working with humans." Anticipating the objection that constrained agents might find a "better way" — his move-37 allusion, "Nobody wants their agent to move 37 their tax return" — he argued that reliability at scale, not genius, is what grows output. The exit line summarized the whole thesis: simple agents diffuse, reliable agents are trusted, and opinions build the signal that closes the loop toward self-improving agents in production.

## Speaker details
**Mitchell Troyanovsky** - Co-Founder, Basis.
Mitchell Troyanovsky is the co-founder of Basis, an agentic AI company recently valued at $1.15 billion and backed by BTV, Khosla, Accel and GV. Mitch is building the first long-horizon agents capable of independently executing complex, end-to-end financial workflows — like partnership tax returns — for hours or even days at a time. He introduced himself on stage as "one of the two co-founders of Basis," based in New York City.

Links: [LinkedIn](https://www.linkedin.com/in/mitchelltroyanovsky/) | [Twitter/X](https://x.com/mitch_troy) | [Website](https://www.getbasis.ai/)

## Full timestamped transcript
Boundary note: line 1 is the tail of the previous session's close, included because the segment's transcript file starts at the host intro's immediate predecessor.

```
[08:09:16 | 4:49:52 PM] Thank you, guys.
[08:09:17 | 4:49:53 PM] When AI agents tackle complex tasks, the final answer is only part of the story.
[08:09:33 | 4:50:09 PM] To explore how we can evaluate the decisions they make along the way, please welcome Mitchell Troyanovsky, co-founder of Basis.
[08:09:44 | 4:50:19 PM] Hello, hello.
[08:09:47 | 4:50:22 PM] Hello, New York.
[08:10:02 | 4:50:37 PM] I'm Mitch.
[08:10:04 | 4:50:39 PM] I'm one of the two co-founders of Basis.
[08:10:07 | 4:50:42 PM] We are based right here in New York City, and the thing that we focus on is how can we get agents to do production-scale work reliably enough so that we are trusted and used end-to-end by accounting firms across the country.
[08:10:26 | 4:51:02 PM] So a lot of our research really focuses on this.
[08:10:29 | 4:51:04 PM] How can you get these agents to do real work in the real economy?
[08:10:33 | 4:51:08 PM] So I wanted to start with a question, which is, if you're at this conference, honestly, if you're watching this talk, you probably increased your own productivity a lot.
[08:10:46 | 4:51:21 PM] You're using CoWork or Codex or Claude Code, whatever it is.
[08:10:50 | 4:51:25 PM] And yet, if you go look at the average company, the average enterprise, the average firm, their productivity hasn't gone up 10x, 100x.
[08:11:02 | 4:51:37 PM] I know my productivity has gone up maybe 100x, but if I were working inside of a company, it wouldn't be anywhere near that order of magnitude.
[08:11:10 | 4:51:45 PM] And so why is that?
[08:11:13 | 4:51:49 PM] At Basis, one of the things we have is that humans are already used to working with non-deterministic systems.
[08:11:20 | 4:51:55 PM] It's just those systems are normally their coworkers, not their computers.
[08:11:24 | 4:51:59 PM] And so I actually think to answer this question, it's useful to maybe look at the existing way we organize intelligent systems, which are companies.
[08:11:33 | 4:52:08 PM] So how do organizations scale their own productivity, right?
[08:11:40 | 4:52:15 PM] Organizations need to trust that the people doing the work at every level are doing it in a way that is going to produce good outputs consistently at scale, right?
[08:11:51 | 4:52:27 PM] If you look at this image here, here I'm showing an accounting firm, but this could honestly be any company, traditional company.
[08:11:58 | 4:52:34 PM] The person who is the head of the firm.
[08:12:01 | 4:52:37 PM] They have literally no idea about the exact day-to-day of the people at the very bottom.
[08:12:07 | 4:52:42 PM] And yet somehow they trust the work is going to be done.
[08:12:10 | 4:52:46 PM] How does that happen?
[08:12:13 | 4:52:48 PM] It doesn't happen through deterministic systems, right?
[08:12:16 | 4:52:51 PM] People are not deterministic.
[08:12:17 | 4:52:53 PM] They're intelligent entities.
[08:12:19 | 4:52:55 PM] And instead, there are processes that are put in place.
[08:12:23 | 4:52:58 PM] And those processes, if we believe the people who put them in place think that those processes will generalize to good outcomes, then they can be comfortable that even though the people executing the processes are not deterministic, you will generally get to good outcomes if you follow the process.
[08:12:40 | 4:53:16 PM] This is true, by the way, even in the smallest steps.
[08:12:42 | 4:53:18 PM] So in this example, earlier I was showing the process of maybe doing the monthly accounting work for a client at an accounting firm.
[08:12:49 | 4:53:25 PM] But even within that process, say you wanted to see, how do I reconcile the cash?
[08:12:55 | 4:53:30 PM] Well, I need to get the bank data.
[08:12:58 | 4:53:33 PM] And even that has a process.
[08:13:00 | 4:53:36 PM] The process could be really basic.
[08:13:02 | 4:53:37 PM] It could just be use the approved software to extract the data.
[08:13:05 | 4:53:41 PM] But there's still some process that is put in place.
[08:13:08 | 4:53:44 PM] You wouldn't expect the firm to just let anyone Google, extract PDF and then just use whatever they want to go extract it, because now you wouldn't have process.
[08:13:21 | 4:53:56 PM] Now let's talk about agents.
[08:13:25 | 4:54:00 PM] As I said earlier, everyone already has CoWork, ChatGPT, Codex, Claude Code, but where is that productivity?
[08:13:33 | 4:54:09 PM] Our opinion is there are two main problems that come with what I'll call coding-style agent products, where you're working with an agent and you just tell it to go and do something.
[08:13:44 | 4:54:19 PM] The first problem is that there is a competency gap.
[08:13:48 | 4:54:23 PM] Because agents, as you think of them as you think of them today, they outsource the complexity to the user.
[08:13:55 | 4:54:30 PM] Right?
[08:13:55 | 4:54:31 PM] If I'm the user, I now have to manage my skill and memories and think about how to, when I should use the agent.
[08:14:06 | 4:54:41 PM] I have to have, like, theory of mind over it.
[08:14:08 | 4:54:43 PM] This is really hard.
[08:14:10 | 4:54:45 PM] And for those who are here, maybe you guys find it easy, but I promise, for the wide majority of knowledge workers, they have no idea how to do any of this.
[08:14:21 | 4:54:56 PM] And there's a second problem, which is there is a process gap.
[08:14:24 | 4:55:00 PM] Right?
[08:14:25 | 4:55:00 PM] If you are saying, Hey, user, here's your agent.
[08:14:28 | 4:55:04 PM] Do what you want.
[08:14:30 | 4:55:06 PM] Well, now suddenly the way the work is being done is essentially up to whoever the user is to customize the way the agent is behaving, which goes entirely against the way that organizations scale.
[08:14:43 | 4:55:18 PM] The process should be coming from senior leadership down, not from any individual employee deciding how they're going to do their job.
[08:14:51 | 4:55:27 PM] Right?
[08:14:52 | 4:55:27 PM] If you, going back to my example, if every employee just made up their own way of extracting data, you know, even back in 2018, that wouldn't be a good outcome.
[08:15:02 | 4:55:37 PM] And so we believe strongly that the key to building production agents that actually do work end to end is solving these two problems.
[08:15:09 | 4:55:44 PM] You have to solve the competency gap by making it simple.
[08:15:13 | 4:55:49 PM] To the user, you shouldn't even have to know it's an agent, or you probably know, but you don't have to really feel it.
[08:15:20 | 4:55:55 PM] It should be as simple as just working with a coworker.
[08:15:23 | 4:55:58 PM] You just tell it what you want it to do, and all the things you expect to work should work.
[08:15:27 | 4:56:03 PM] And the second is the process gap.
[08:15:28 | 4:56:04 PM] You need agents to be reliable, not having a stroke of genius one day and forgetting something the other day.
[08:15:35 | 4:56:11 PM] It's not about being perfect.
[08:15:39 | 4:56:14 PM] Humans are not perfect, right?
[08:15:41 | 4:56:16 PM] Nobody is looking for perfect.
[08:15:42 | 4:56:18 PM] What you're looking for is reliability and consistency and trustworthiness.
[08:15:48 | 4:56:24 PM] So what does that actually look like?
[08:15:52 | 4:56:27 PM] We think that to be simple and reliable, where you know you don't have to think about what to do, the agent can just do it for you without the user knowing the internals.
[08:16:04 | 4:56:39 PM] To do it the same way consistently, you have to be opinionated.
[08:16:11 | 4:56:46 PM] Just to show you actually one slide back here, I want to point out that getting it right isn't actually the main task, because again, humans are imperfect themselves.
[08:16:21 | 4:56:57 PM] The point is to do it in a similar way.
[08:16:24 | 4:56:59 PM] It's okay if you can't do something, but you should be consistently able to not do something, and then you get better, just like a person does.
[08:16:31 | 4:57:07 PM] If you suddenly one day are an expert at something, and then you miss something very basic that would be expected, now you're not reliable.
[08:16:38 | 4:57:13 PM] So you have to be opinionated.
[08:16:42 | 4:57:18 PM] What's an example of an opinion?
[08:16:46 | 4:57:21 PM] Let's say we have an agent and we need to go and read a PDF.
[08:16:50 | 4:57:25 PM] So in this case, what is the best way to read a PDF?
[08:16:53 | 4:57:29 PM] There's many ways.
[08:16:54 | 4:57:30 PM] You can throw it into a VLM.
[08:16:56 | 4:57:31 PM] You can go write some Python code and use an open source OCR library.
[08:17:00 | 4:57:35 PM] You can work with one of the many OCR-specific model providers.
[08:17:04 | 4:57:40 PM] You could do an OCR, and then you could have the VLM check its work.
[08:17:09 | 4:57:44 PM] You could have five VLMs check its work.
[08:17:10 | 4:57:46 PM] You could do a hundred VLMs and take the best of N.
[08:17:13 | 4:57:49 PM] There's literally infinite possibilities here.
[08:17:16 | 4:57:51 PM] And so if you just said, agent extract PDF, you might get good outcomes, but they're not going to be reliable.
[08:17:25 | 4:58:00 PM] Right, not because the process it did was bad, but because the process it did was not opinionated.
[08:17:31 | 4:58:06 PM] So, the way we develop opinions is you use initial intuition, right?
[08:17:42 | 4:58:18 PM] Some things you know what the opinions are from expertise.
[08:17:44 | 4:58:20 PM] For example, if I'm trying to get an agent to do tax work well, I know that if the agent goes and reads the primary source before returning to the user, it is more likely to be accurate.
[08:17:58 | 4:58:34 PM] I don't need a set of evals to tell me that.
[08:18:00 | 4:58:36 PM] I don't need to divine that from first principles.
[08:18:03 | 4:58:39 PM] We know that, right?
[08:18:05 | 4:58:41 PM] I know that if I have an agent make a PowerPoint, if it takes a picture of the PowerPoint before it returns to the user, it is less likely to have a formatting issue.
[08:18:13 | 4:58:49 PM] That is obvious.
[08:18:16 | 4:58:51 PM] And so there are lots of different ways to develop opinions.
[08:18:19 | 4:58:54 PM] And one of the key points here I'll just make before I move on to talking about how to use the opinions is that opinions are not just about accuracy, right?
[08:18:26 | 4:59:01 PM] We just talked about the example of taking a picture of a PowerPoint.
[08:18:28 | 4:59:04 PM] Well, that adds latency, right?
[08:18:31 | 4:59:07 PM] You may not want that.
[08:18:32 | 4:59:08 PM] Maybe the agent only makes formatting mistakes one out of a hundred times, and you're okay with that.
[08:18:38 | 4:59:13 PM] And so therefore you don't have it take a picture of the PowerPoint.
[08:18:41 | 4:59:17 PM] The point isn't exactly what the opinion is, and this talk we're going to focus not on how to develop opinions, but why opinions matter, and then how to leverage those opinions as you scale in production.
[08:18:53 | 4:59:29 PM] So, say you have a bunch of outcome-based evals.
[08:19:00 | 4:59:36 PM] And when I say outcome-based evals, I mean what we traditionally think of as evals.
[08:19:05 | 4:59:40 PM] It has a right answer.
[08:19:06 | 4:59:42 PM] We have some rubric.
[08:19:07 | 4:59:43 PM] We're trying to judge what the agent did.
[08:19:09 | 4:59:45 PM] How do you know that the evals generalize to production?
[08:19:13 | 4:59:49 PM] Right, you might have a thousand cases or a hundred cases, but in production, if you're doing real work, you're going to have hundreds of thousands of situations.
[08:19:21 | 4:59:56 PM] And that's only going to increase as the trajectories get much longer, because the amount of decisions that are made in a trajectory just grow exponentially as the long horizon abilities of agents increase.
[08:19:38 | 5:00:14 PM] And so, I can't prove, if you look at all these distribution of trajectories, you can't prove every one of them is correct.
[08:19:46 | 5:00:21 PM] You don't have a ground truth for every trajectory.
[08:19:49 | 5:00:24 PM] But you can potentially look at the trajectories to decide if the behavior, the opinion that you have, is actually happening.
[08:19:57 | 5:00:33 PM] And you can then infer that if it's actually happening.
[08:20:00 | 5:00:36 PM] Actually happening, it's more likely to generalize to production.
[08:20:00 | 5:00:36 PM] It's not perfect.
[08:20:05 | 5:00:40 PM] You don't know for sure, but at least you are having an opinion.
[08:20:10 | 5:00:46 PM] Let's run through a real example.
[08:20:12 | 5:00:48 PM] So let's say that I, for a behavior, this is an accounting example where if there is a mistake in the bank reconciliation, I don't want the agent to, like, post an entry to make it tie.
[08:20:32 | 5:01:08 PM] I want it to sort of explain the difference instead of putting a plug.
[08:20:36 | 5:01:12 PM] Again, this is subjective.
[08:20:38 | 5:01:13 PM] You might want the other way.
[08:20:40 | 5:01:15 PM] But what you don't want is a customer getting one way one time and another way the other time.
[08:20:45 | 5:01:20 PM] And so what would you do?
[08:20:46 | 5:01:21 PM] Well, first, let's understand what governs the behavior, right?
[08:20:50 | 5:01:26 PM] The behavior is not just you write the two sentences into your system prompt and it just works.
[08:20:55 | 5:01:30 PM] That might work for very simple, narrow agents, but when you're building these big agent systems, the behavior is actually a combination of the system prompt, your progressive disclosures, potentially tool descriptions, obviously the training of the model.
[08:21:08 | 5:01:44 PM] There's a lot of things that govern the behavior.
[08:21:11 | 5:01:47 PM] And one tip, by the way, I have for when you think about building production agents is really think of the context the agent is going to see as it's working as runtime training data.
[08:21:22 | 5:01:57 PM] The word prompt, I think, trivializes it a bit, right?
[08:21:24 | 5:02:00 PM] At the end of the day, this is the data that the agent is being trained on at runtime, not literally trained on, but effectively trained on.
[08:21:32 | 5:02:07 PM] And so you want to care about every single token and understand how that data causes the agent to behave in certain ways.
[08:21:40 | 5:02:15 PM] So when you're putting behaviors into production, it might be very difficult for one behavior to put it in exactly one, you know, paragraph that you know exactly because, again, the behavior is all of the data at once, not just one thing.
[08:21:55 | 5:02:31 PM] And one of the things that we developed at Basis was this concept of a behavior spec.
[08:22:03 | 5:02:38 PM] And the idea of a behavior spec is essentially saying, before we update the context or write the context, what do we actually want?
[08:22:13 | 5:02:48 PM] What is our intent?
[08:22:14 | 5:02:49 PM] You can kind of think of this a little bit as like a product spec for the agent era.
[08:22:19 | 5:02:54 PM] And you shouldn't be writing every detail down.
[08:22:21 | 5:02:56 PM] You should be taking the most important opinions and putting it, because if you put everything, you'll be duplicating a lot of states.
[08:22:26 | 5:03:01 PM] So you define the ones that matter the most.
[08:22:29 | 5:03:05 PM] And then you can use them as a way to align your team from a spec perspective.
[08:22:36 | 5:03:11 PM] But then you can also use them as a rubric.
[08:22:38 | 5:03:14 PM] And you can say, in this particular trajectory, whether that is in any trajectory that doesn't have a ground truth, did the agent get into a situation in which this behavior was relevant?
[08:22:50 | 5:03:25 PM] And then if so, did it actually exhibit the behavior?
[08:22:55 | 5:03:30 PM] And this way, you can scale the amount of signal that you get on your trajectories far larger than trying to increase the amount of outcome-based evals, ground truths, and rubrics that you have.
[08:23:05 | 5:03:41 PM] Those are really important, but you cannot scale those anywhere near as fast as you can scale the ability to supervise what the behaviors of the agent are.
[08:23:16 | 5:03:51 PM] Let's just take a quick example here.
[08:23:20 | 5:03:55 PM] This is actually the second concept, which is called forking, which we can combine here with behavior specs to think about.
[08:23:27 | 5:04:03 PM] Forking, if you've ever used Cloud Code or Codex, the web apps, there's this little fork icon under each message, where you can essentially create a copy of the agent using the same thing, which works really well on your local computer.
[08:23:40 | 5:04:16 PM] It's hard to build a system that does this in the cloud perfectly with.
[08:23:44 | 5:04:19 PM] Recreating the database environment and recreating the prompts, all the different environments.
[08:23:51 | 5:04:26 PM] But forking is another tool that we use to check the behavior.
[08:23:54 | 5:04:29 PM] So a flow that you can imagine is saying, we had a trajectory, could be in an eval set, it could be in testing or in production, and it failed the behavior eval.
[08:24:06 | 5:04:42 PM] And now you're trying to understand why.
[08:24:08 | 5:04:44 PM] Why did it fail the behavior eval?
[08:24:11 | 5:04:47 PM] Why did it not exhibit the behavior?
[08:24:12 | 5:04:48 PM] And then you can go into the trajectory, go right before the point in which the agent made the decision that was in contrast to the behavior, assuming again your behavior is good and it's actually producing signal.
[08:24:24 | 5:05:00 PM] And then you can fork it.
[08:24:27 | 5:05:03 PM] And when you fork it, you can ask the agent, or you would fork it right after it made the decision, you could ask it, why'd you do that?
[08:24:36 | 5:05:11 PM] Or you can go and update the context of the agent and see if that improves the behavior.
[08:24:42 | 5:05:17 PM] And so with forking, you can start to actually take the signal and start to figure out, okay, how can we then improve the harness to now leverage the signal?
[08:24:52 | 5:05:28 PM] Versus if you're just looking at signal from an outcome-based eval, you can't do that anywhere near as easily because it failed the outcome.
[08:24:59 | 5:05:35 PM] How do you know why?
[08:25:01 | 5:05:36 PM] You have potentially a thousand inference calls in your five-hour-long agent trajectory run.
[08:25:06 | 5:05:42 PM] And then we have the last tool that I like to talk about.
[08:25:09 | 5:05:44 PM] This is actually my favorite, which is called simulations.
[08:25:13 | 5:05:48 PM] It's going to sound silly, but I promise it's very effective, which is that you can, when working with coding agents, ask the coding agent to make a sub-agent that pretends to be your production agent.
[08:25:25 | 5:06:01 PM] And you have to tell it to not cheat, and you give it the system prompt and the skills, and you render everything perfectly.
[08:25:30 | 5:06:06 PM] And what you can do is you can ask it what it would do in some scenario.
[08:25:33 | 5:06:09 PM] You can give it the situation and see if you can recreate the situation that you saw in your eval or in production.
[08:25:38 | 5:06:14 PM] And if you can recreate it, now you can tweak your context to see if the sub-agent would change its behavior based on your tweaks.
[08:25:46 | 5:06:22 PM] And the reason to do this, it's obviously far worse than forking, but you do this because this is much cheaper, much faster, and allows you as an agent builder to really easily iterate on ideas without needing to go through the expensive process of actually forking an entire environment.
[08:26:04 | 5:06:39 PM] And you can do this today without building anything.
[08:26:06 | 5:06:42 PM] I did this for literally a year, year and a half plus before we built forking into our internal systems.
[08:26:15 | 5:06:51 PM] And the main idea here is understanding that if you look at the distribution from earlier, you're trying to understand, is the agent generalizing to that distribution?
[08:26:28 | 5:07:04 PM] And so you don't know purely based on the outcome evals.
[08:26:30 | 5:07:06 PM] You can try to choose the best outcome evals that represent the curve, but you don't really know.
[08:26:35 | 5:07:11 PM] And so supervising the process through some of these methods gives you some additional signal in order to understand if it's generalizing properly.
[08:26:45 | 5:07:20 PM] And what's really cool is as you start to get more signal, you can actually start to close the loop.
[08:26:53 | 5:07:29 PM] And an opinion is what lets you do that, right?
[08:26:55 | 5:07:31 PM] If you don't have opinions about your system, you're not going to be able to develop that signal.
[08:27:00 | 5:07:35 PM] And now if we go back to the firm, we talked about supervision.
[08:27:05 | 5:07:41 PM] We talked about how the agent, if user opinionated, can be more reliable and actually can be simpler.
[08:27:13 | 5:07:49 PM] What that means is the agent, maybe it starts doing something narrow, but because people will work with it, they see that it's easy to use and they see that it's reliable.
[08:27:23 | 5:07:58 PM] As it gets better and better, they will trust it more.
[08:27:25 | 5:08:01 PM] It's just like a coworker.
[08:27:26 | 5:08:02 PM] You have a coworker day one.
[08:27:29 | 5:08:05 PM] Imagine someone sends you a PR.
[08:27:32 | 5:08:07 PM] You're not gonna, if it's, you're looking at two axes whenever someone sends you a PR, it's these two axes.
[08:27:37 | 5:08:12 PM] What's the blast radius of the PR?
[08:27:38 | 5:08:14 PM] And what is your perception of how competent that person is?
[08:27:42 | 5:08:17 PM] Right?
[08:27:43 | 5:08:18 PM] If the least competent person at your company is sending you a PR that's editing a core service, you're going to look at it.
[08:27:50 | 5:08:25 PM] If the most competent person is sending you a PR that's editing an internal document, you may not look at it as much.
[08:27:56 | 5:08:32 PM] And so this idea is true with humans working with agents, just like it is with humans working with humans.
[08:28:02 | 5:08:38 PM] And I think I just want to make one last point to close here, which is that one of the things that people say when they hear this is, Well, wait a second.
[08:28:09 | 5:08:45 PM] If you let the agents just do what they want, won't they find a better way?
[08:28:13 | 5:08:49 PM] Won't they move 37 your work?
[08:28:15 | 5:08:51 PM] And the answer is, they might.
[08:28:18 | 5:08:53 PM] But that's not how you scale GDP and scale output.
[08:28:22 | 5:08:58 PM] Nobody wants their agent to move 37 their tax return.
[08:28:27 | 5:09:02 PM] They want it done reliably, at scale, in a way that they can trust and in a way that their people know how to work with.
[08:28:34 | 5:09:10 PM] And so the thing I will leave you with is, for agents to diffuse, they need to be simple.
[08:28:39 | 5:09:15 PM] For teams to trust them, they need to be reliable.
[08:28:42 | 5:09:18 PM] The way you get to simple and reliable is you develop opinions on how the agent behaves, and then opinions allow you to build that additional signal that helps you start to close the loop so that you can achieve self-improving agents in production.
[08:28:56 | 5:09:32 PM] Thank you very much.
```
