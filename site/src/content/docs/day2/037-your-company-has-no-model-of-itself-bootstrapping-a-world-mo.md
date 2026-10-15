---
title: "Your Company Has No Model of Itself: Bootstrapping a World Model from
  Slack, Decks and Meetings"
description: Day 2 · Oct 14. Citadel Securities' Joao Wenzel argues that the one
  person who "seems to know everything" is a company's only world model, and
  shows the state-estimator loop (update, age, observe, grade, correct) his team
  uses to bootstrap one from decks, Slack, meetings, code changes, and agent
  traces — a job RAG cannot do.
sidebar:
  order: 37
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

Citadel Securities' Joao Wenzel argues that the one person who "seems to know everything" is a company's only world model, and shows the state-estimator loop (update, age, observe, grade, correct) his team uses to bootstrap one from decks, Slack, meetings, code changes, and agent traces — a job RAG cannot do.

## TL;DR
- The real state of a company sits in its exhaust: meeting notes, Slack, code changes, and agent session traces. The tidy, self-reported decks and status reports are only half the picture.
- Treat the company model as a state estimator borrowed from robotics, not a knowledge graph. Beliefs decay with time, fresh evidence collapses them, and each sensor has its own trust level.
- RAG fails the status question. Asked "is this project on track?" as of March 16th, a model retrieved two Slack messages and some slides and said "Yep, it's green" — and missed the context.
- The loop is update, age, observe, grade, correct. Agents run at every stage at Citadel Securities, but code and people decide how records update.
- Three years of records yield numbers: half of delivery dates change within two months, 90% of those changes slip later, flagged-green statuses were twice as likely to turn yellow or red, and a specialist-agent workflow more than doubled insightful updates versus one-model YOLO processing.
- The system steers leadership conversations by starting where the deck and the evidence disagree, produces a weekly "stuck and quiet" read for managers, and seeds a context layer every agent can rely on.

## Key lessons
1. Model the company as a state estimator, not a knowledge graph. Trust in a belief decays the longer it has gone without supporting evidence, and a new deck, Slack thread, or meeting notes collapses the uncertainty into a dated update [06:41:54 - 06:42:27].
2. Two ways in, and both are flawed. Top-down sources (decks, strategy docs, status reports) are tidy but opinion-infused, producing "watermelon projects" that are green on the outside and red on the inside. Bottom-up sources (Slack, meeting notes, code changes, session traces) are noisy but close to the truth. The model is where they meet [06:41:03 - 06:41:45].
3. Parse slides by synthesis, not by one method. Unpacking the PowerPoint XML raises "what is the hex code for green?", while a screenshot sent to a vision model leaves "Claude trying to squint" at a 31 versus an 81. Take both the XML and the vision-model output to get the true picture [06:43:08 - 06:43:50].
4. Build a longitudinal, append-only audit layer. Projects change names spontaneously; a renamed project was inferred to be Project Northstar from who was involved and the continuity of its goals. Do not touch previous months — heal feed-forward so later evals rest on clean history [06:44:10 - 06:47:35].
5. Every fact has a half-life. Across three years of collected records, on average half of delivery dates changed within two months, and 90% of those changes moved to a date later than first proposed. Stamp each claim with a date so the agent can apply recency bias [06:48:00 - 06:48:37].
6. Do not YOLO the corpus at one model. A single pass by Claude or another model over everything lost attention to detail; a workflow of specialist agents that break down collateral and review each other more than doubled the number of insightful project updates [06:49:04 - 06:49:48].
7. Backtest predictions against future labels. Snapshot the world model as of a past date (for example February), then compare agent flags with what actually happened: statuses that were green but flagged were twice as likely to turn yellow or red [06:50:13 - 06:50:36].
8. Treat a dead sensor as missing signal, not zero. A quiet Slack channel is like a speedometer that cuts out on the highway — you are not going zero. Track when you last polled each sensor and when it was last OK, and decide what to do when the two diverge [06:53:23 - 06:54:08].

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=23922&rel=0" title="Your Company Has No Model of Itself: Bootstrapping a World Model from Slack, Decks and Meetings" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Joao Wenzel &middot; 3:19:18 PM ET–3:38:08 PM ET &middot; talk &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=23922s" rel="noopener">Watch on YouTube from 06:38:42</a></p>

## Figures

![A circular world-model loop with a fact half-life inset.](/figures/company-world-model.svg)

The company as a state estimator, with the fact half-life inset.

## Notable quotes
- "That person is a company's world model, essentially." [06:39:28 | 3:20:03 PM]
- "They're green on the outside and red on the inside." [06:41:25 | 3:22:00 PM]
- "Your company has no model of itself." [06:44:56 | 3:25:31 PM]
- "The reality is every fact has a half-life." [06:48:00 | 3:28:36 PM]

## Session narrative
Wenzel opens with a thought experiment. Think of the person at your company who has been through 17 reorgs, knows all the gossip and politics, and always predicts what the big strategic moves will produce. "That person is a company's world model, essentially." The problem is that this person does not scale, and nobody writes down what they say. He introduces himself as being with Citadel Securities (the ASR transcript renders his self-introduction as "I'm Juan Wenzel with Citadel Securities"; he signs off as "I'm João"). The firm builds its own technology down to the silicon, over two-thirds of its employees write code, and he describes it as "completely AI-pilled." Leadership then asked the question behind the talk: the harnesses produce high-quality code, but can they help define and refine the strategy of the company? He borrows a Tim Urban visual: strategy reduces to three questions — where do we stand right now, what is going to happen next, and how did we get here. Answering any of them requires a rich profile of the company, so the talk becomes one about engineering an institutional memory layer.

The core argument splits company data into two flows. Top-down collateral (decks, strategy docs, meeting and status reports) is tidy, but people infuse it with opinions, which produces "watermelon projects": green on the outside, red on the inside. Bottom-up exhaust (meeting notes, Slack, code changes, session traces with your favorite harness) is noisy but close to the truth, and "the model is where they meet." Because evidence is partial or wrong, Wenzel imports the state estimator from robotics. A belief gets fuzzier the longer it goes without supporting evidence, until a deck, thread, or meeting notes collapses it into an update. Three things matter for each update: how long since the last signal, whether the source is still trustworthy, and whether it broadly agrees with other sensors. The plan is a five-stage loop — update, age, observe, grade, correct — and at Citadel Securities agents sit at every stage, but code and people decide how records update. He rebuts the obvious objection, "why not just RAG," with an example: asked whether a project is on track as of March 16th, a model happily picks up a couple of Slack messages and some slides and says "Yep, it's green," missing the context.

The middle of the talk is a build log with concrete numbers. Getting data out of a slide is deceptive: unpacking the PowerPoint XML leads to "what is the hex code for green?", while a copy-pasted screenshot at a vision model leaves "Claude trying to squint" at a 31 versus an 81, so the elegant answer synthesizes both. The team has folded monthly status decks into longitudinal records for three years. That history lets the system infer that a spontaneously renamed project is Project Northstar, flag a green deck cell as yellow because a comment mentions an outstanding dependency, and quantify slippage: on average half of delivery dates change within two months, and 90% of those changes land later than first proposed. A single-model YOLO pass over the whole corpus lost attention to detail, so the team engineered a workflow of specialist agents that review each other — and insightful project updates more than doubled. Backtests against future labels show flagged-green statuses were twice as likely to turn yellow or red. Feedback design closes the loop: meet users in the app, Slack, or email they already use, and ask about rules rather than facts, because a rule lets the agent fix every output it covers, now and into the future.

The close turns to bottom-up sources and their gotchas. PRs show what changed; opt-in agent traces show "how the sausage was made." A quiet Slack channel is not zero activity, just as a speedometer that cuts out on the highway does not mean the car stopped — the team learned to track when a sensor was last polled and when it was last OK. Uses today include steering leadership conversations by starting where the deck and the evidence disagree, a weekly read for managers on what is stuck and what went quiet, and a shared context layer every agent can rely on, with the client franchise as the next extension. Wenzel names two open problems: mapping one client's four records across four systems with no canonical identifier, and capturing stakeholder signal by stakes and model confidence — apply automatically when the model is sure and stakes are low, wait for more evidence when the model is unsure, and choose who and when to ask carefully when stakes are high. He restates the loop and three take-homes: think of the model as a state estimator, grade it against what happens next, and start collecting now. He signs off as João and offers to take questions outside.

## Speaker details
**Joao Wenzel** - COO, Citadel Securities. Joao Fiadeiro Wenzel is COO at Citadel Securities, responsible for deploying agentic AI firm-wide. In this session he described Citadel Securities as a firm that builds its own technology down to the silicon, where over two-thirds of employees write code. (The ASR transcript renders his self-introduction as "I'm Juan Wenzel with Citadel Securities"; he closes with "I'm João.")

- LinkedIn: https://www.linkedin.com/in/jfiadeiro
- Twitter: https://twitter.com/jay_wooow
- Website: https://citadelsecurities.com

## Full timestamped transcript
```text
[06:38:43 | 3:19:18 PM] Okay.
[06:38:44 | 3:19:19 PM] Pleasure to be here.
[06:38:55 | 3:19:30 PM] Another round of applause for everyone at AI Engineering.
[06:39:04 | 3:19:39 PM] This has been a really, really exceptional conference so far.
[06:39:07 | 3:19:43 PM] Thank you.
[06:39:10 | 3:19:45 PM] All right.
[06:39:14 | 3:19:49 PM] So I want to begin by asking you to think about that person in your company who just seems to know everything.
[06:39:20 | 3:19:55 PM] They've been through 17 reorgs, they know all the gossip, all the politics, and somehow they always seem to predict what's going to come out of these, like, big strategic moves.
[06:39:28 | 3:20:03 PM] That person is a company's world model, essentially.
[06:39:31 | 3:20:07 PM] And the problem is that they don't scale, and nobody really writes down what they say.
[06:39:37 | 3:20:12 PM] I'm Juan Wenzel with Citadel Securities, and I'm going to talk a little bit about how we try to approximate that with an agentic system.
[06:39:46 | 3:20:21 PM] So a little bit about Citadel Securities.
[06:39:48 | 3:20:23 PM] We build our own technology down to the silicon.
[06:39:51 | 3:20:26 PM] At this point, over two-thirds of our employees write code.
[06:39:56 | 3:20:31 PM] So naturally, we are completely AI-pilled, and agents already help us with a lot of things at the organization.
[06:40:02 | 3:20:37 PM] So naturally, leadership
[06:40:02 | 3:20:37 PM] Leadership started asking questions about strategy.
[06:40:05 | 3:20:40 PM] These harnesses are really good at producing high-quality code, but can they actually help define and refine the strategy of our company?
[06:40:14 | 3:20:50 PM] So this is one of my favorite visuals.
[06:40:17 | 3:20:52 PM] I've borrowed from Tim Urban.
[06:40:18 | 3:20:54 PM] Strategy really comes down to three questions, right?
[06:40:21 | 3:20:56 PM] Where do we stand right now?
[06:40:23 | 3:20:59 PM] What's going to happen next?
[06:40:25 | 3:21:00 PM] And how did we get here?
[06:40:27 | 3:21:03 PM] And to answer any of those questions, an agent has to have a really rich profile of the company that it's operating in.
[06:40:35 | 3:21:10 PM] So this is broadly a talk about engineering an institutional memory layer.
[06:40:41 | 3:21:17 PM] Let's call it that.
[06:40:43 | 3:21:19 PM] The agents need to have information about relationships, right?
[06:40:46 | 3:21:22 PM] Two teams that used to work together but no longer talk because there was a reorg, or a project story and why it was re-scoped several times, or the politics, right?
[06:40:58 | 3:21:33 PM] Like who's in the room, what are they saying, and what are they not saying?
[06:41:03 | 3:21:38 PM] There's two ways in, right?
[06:41:04 | 3:21:40 PM] There's top down and there's bottom up.
[06:41:07 | 3:21:42 PM] Top down, you have the decks, you have your strategy docs, your meeting and status reports, and they're tidy and they're pretty clean.
[06:41:15 | 3:21:51 PM] But there's a unique human twist.
[06:41:17 | 3:21:53 PM] People generally like to infuse their thoughts and opinions into these things, sometimes by design.
[06:41:21 | 3:21:57 PM] So you end up with what, you know, things I call watermelon projects, right?
[06:41:25 | 3:22:00 PM] They're green on the outside and red on the inside.
[06:41:28 | 3:22:04 PM] Then you have, on the bottom, you have the really noisy stuff, which has a surprising amount of signal, but it's hard to uncover, right?
[06:41:36 | 3:22:12 PM] You have meeting notes and you have Slack and code changes and even your session traces with your favorite harness.
[06:41:43 | 3:22:19 PM] And the model is where they meet.
[06:41:45 | 3:22:21 PM] The evidence is synthesized at that level.
[06:41:49 | 3:22:24 PM] Now, the evidence piece sometimes is problematic because it's either partial or wrong.
[06:41:54 | 3:22:29 PM] But it turns out that in robotics, you actually have the solution for this, and it's called a state estimator, right?
[06:42:00 | 3:22:35 PM] What you do is you have some sort of belief about something you care about, and the longer it's been since you've seen or observed evidence that supports it, the less you trust it, right?
[06:42:12 | 3:22:48 PM] The fuzzier it gets until you have a deck or some thread or some meeting notes that sort of collapses that, and you now have new evidence, right?
[06:42:23 | 3:22:58 PM] And now you're more certain of it, and therefore you produce the update.
[06:42:27 | 3:23:03 PM] And the things that I care about when producing an update, or that the agent should care about, there's three things.
[06:42:33 | 3:23:09 PM] There's how long has it been since some signal has been received?
[06:42:38 | 3:23:13 PM] There's where that signal come from, and is it still trustworthy?
[06:42:42 | 3:23:18 PM] And then does it broadly agree with other sensors, right?
[06:42:45 | 3:23:21 PM] There's a lot of parallels here with self-driving, for example, that I'll come back to.
[06:42:50 | 3:23:26 PM] So let's start at the top, right?
[06:42:51 | 3:23:27 PM] Like a very simple example is something like a slide that is produced already by someone in BizOps, and they produce a monthly status deck.
[06:43:01 | 3:23:36 PM] And the question is, how do you get data out of this slide, right?
[06:43:04 | 3:23:40 PM] Many of you, I'm sure, have tried that.
[06:43:06 | 3:23:42 PM] It's deceptive, actually, right?
[06:43:08 | 3:23:44 PM] Because let's say you try to parse the file, right?
[06:43:11 | 3:23:46 PM] Like you unpack the PowerPoint file and you get an XML, and all of a sudden you get into this really interesting conceptual question: what is green, right?
[06:43:19 | 3:23:54 PM] What is the hex code for green?
[06:43:21 | 3:23:57 PM] And things break down when it comes to this type of script.
[06:43:25 | 3:24:01 PM] Then the solution is to say, well, I'm just going to take a screenshot of it and throw it at a vision model.
[06:43:29 | 3:24:05 PM] But at that point, even if it's pretty high res, you're dealing with someone who copy-pasted a screenshot back into a presentation, and essentially you have Claude trying to squint and trying to figure out if it's a 31 or an 81.
[06:43:43 | 3:24:18 PM] And so the theme of the talk really is about elegance comes from just synthesizing things and adding more information.
[06:43:50 | 3:24:26 PM] And in this example, it's very basic, but you get the true picture by taking both the XML and the output of a vision model.
[06:43:59 | 3:24:34 PM] Now, that's pretty basic, right?
[06:44:01 | 3:24:36 PM] But the issue is that you want to establish some continuity over time, right?
[06:44:05 | 3:24:40 PM] Like this collateral that your company accrues is very much sort of always building up.
[06:44:10 | 3:24:46 PM] And so, in this particular example, you have a project that just spontaneously changed names back in March.
[06:44:17 | 3:24:53 PM] And so, you know, you have to establish that sort of longitudinal traceable audit layer as you create this shared context layer about the sort of institutional memory of your company.
[06:44:29 | 3:25:05 PM] And the irony, there's two things.
[06:44:31 | 3:25:06 PM] The irony here is that even if you do this really well, you're still missing half the picture, right?
[06:44:36 | 3:25:11 PM] You're looking at a deck and your Slack says otherwise because that was five days ago.
[06:44:41 | 3:25:16 PM] And now you have someone on Slack saying, Hey, by the way, I think we're on track for this.
[06:44:45 | 3:25:20 PM] But then someone replies with a picture of a dashboard and it's no longer the case.
[06:44:48 | 3:25:24 PM] So things just start breaking down.
[06:44:51 | 3:25:26 PM] And so we need to do a better job of, like, integrating all these things, right?
[06:44:56 | 3:25:31 PM] Your company has no model of itself.
[06:44:59 | 3:25:35 PM] So I'm proposing just a brief plan here, right?
[06:45:02 | 3:25:38 PM] The idea is you take the three things that I described earlier about the state estimator.
[06:45:06 | 3:25:42 PM] You have the update, age, and observe stages, and then you have grade.
[06:45:12 | 3:25:48 PM] The grade stage is basically comparing what you observed versus what you expected.
[06:45:17 | 3:25:53 PM] And then the correct stage is basically a way for people to allow the system to get new feedback and steer the behavior of the system, right?
[06:45:27 | 3:26:03 PM] At Citadel Securities, the system that we've built has agents at every part of this particular loop, right?
[06:45:34 | 3:26:10 PM] But the key thing is that the model is proposing these changes, and then you have code and people deciding how the records are updated.
[06:45:42 | 3:26:17 PM] And of course, you're probably asking yourself, like, why not just RAG, right?
[06:45:45 | 3:26:20 PM] Like, probably RAG would do the trick.
[06:45:47 | 3:26:22 PM] And in fact, it really doesn't, right?
[06:45:49 | 3:26:24 PM] Like, in this example, I asked, Hey, what's the status of this project?
[06:45:52 | 3:26:28 PM] Is it on track?
[06:45:53 | 3:26:29 PM] And as of March 16th, some model would happily pick up a couple of Slack messages and some slides and say, Yep, it's green.
[06:46:01 | 3:26:37 PM] But it's missing a lot of the context, right?
[06:46:03 | 3:26:39 PM] It's not enough.
[06:46:05 | 3:26:41 PM] So here's how we start building this world model.
[06:46:08 | 3:26:44 PM] The first stage is about updating information consistently and robustly.
[06:46:13 | 3:26:48 PM] In this simple example, where I'm taking some slides and some decks, we are basically just looking at, you know, every month, you know, a new month comes around, we take last month's record and this month's slide, and you try to construct a sort of longitudinal record, right?
[06:46:29 | 3:27:05 PM] And we've been doing this now for three years, right?
[06:46:32 | 3:27:07 PM] We have a pretty large historical database of these records that now allow us to construct this robust so-called institutional or enterprise world model.
[06:46:42 | 3:27:17 PM] You start with the basics, right?
[06:46:43 | 3:27:19 PM] Like, you know, sometimes these models struggle with the most basic things, but they're normal, right?
[06:46:49 | 3:27:25 PM] The actual name of a particular project changed spontaneously, but by actually looking at that historical set of records, it can see and infer that it actually refers to Project Northstar by virtue of who was involved, by virtue of some continuity in the types of goals, those kinds of things.
[06:47:07 | 3:27:43 PM] But more interestingly, what you want to do is you have the agentic system try to discriminate between what's being reported and actual evidence for what it's saying.
[06:47:17 | 3:27:52 PM] So you look at some status deck, for example, and here it's identifying that while it is green on the deck, in fact it should be highlighted as a yellow and should be flagged as such because there's a comment someone left talking about how there's a dependency still outstanding.
[06:47:32 | 3:28:07 PM] The main thing here is that you don't touch previous months, right?
[06:47:35 | 3:28:11 PM] You just sort of heal in this sort of feed-forward mechanism.
[06:47:39 | 3:28:14 PM] And what that allows you to do is to actually do some robust evals down the line, right?
[06:47:46 | 3:28:21 PM] So here's what the actual update step writes.
[06:47:48 | 3:28:24 PM] You know, very simple.
[06:47:49 | 3:28:25 PM] This is what it was reported.
[06:47:51 | 3:28:26 PM] This is how, you know, the evidence—this is where the evidence points, and this is why.
[06:47:56 | 3:28:32 PM] And then you fold in the second component, age.
[06:48:00 | 3:28:36 PM] The reality is every fact has a half-life.
[06:48:02 | 3:28:38 PM] We've all seen, you know, you go back at some slides and you see that the go-live date for a particular project keeps slipping.
[06:48:10 | 3:28:46 PM] It was Q2 in January, then it was Q3, now it's October, right?
[06:48:15 | 3:28:50 PM] And you actually observe this, right, by actually collecting all this data, you can have some pretty interesting beginnings of analytical insights.
[06:48:22 | 3:28:58 PM] For example, in the last three years, you look at these delivery dates and on average, half the delivery dates change within two months, and 90% of those change into a date that is after what was originally proposed, right?
[06:48:35 | 3:29:10 PM] So far, so good.
[06:48:36 | 3:29:11 PM] Pretty basic.
[06:48:37 | 3:29:12 PM] But what this forces you to do is then introduce this notion of, like, a date that is associated to a particular claim so that the agent can introduce some sort of recency bias when you ask about the status of a particular project, person, or the corporate intent, let's say.
[06:48:57 | 3:29:32 PM] Then the observe section.
[06:48:58 | 3:29:33 PM] The observe section here, I'm going to pretty quickly gloss over it, but just kind of give you something very tactical.
[06:49:04 | 3:29:40 PM] In the beginning, I was pretty seductive to just basically say, well, let's just YOLO this.
[06:49:09 | 3:29:44 PM] Let's have Claude or some other model take a look at the entire corpus of things and let's see what it does.
[06:49:15 | 3:29:51 PM] And as it turns out, it's pretty clear that a lot of information is lost, right?
[06:49:21 | 3:29:57 PM] It loses some attention to detail.
[06:49:24 | 3:29:59 PM] And so what ultimately we had to do was engineer a simple agentic workflow where you have a series of specialists break down the collateral of these assets, look for specific things, be reviewed by other agents, and so on.
[06:49:39 | 3:30:14 PM] And what you see here on the right-hand side is that actually the amount of insightful updates to a particular project more than doubled after doing this.
[06:49:48 | 3:30:23 PM] So I guess the takeaway here is be intentional about how you build these workflows and don't just assume that a YOLO method is going to work out.
[06:49:56 | 3:30:32 PM] But now you get, I think, to the really interesting stuff, right?
[06:49:58 | 3:30:34 PM] A world model should
[06:50:04 | 3:30:39 PM] The model should tell you what happens next, what project is about to slip, or which green turns red the next month.
[06:50:13 | 3:30:49 PM] And it turns out that you can actually do this, right?
[06:50:16 | 3:30:52 PM] Because you can look back and establish a snapshot as of some sort of past date and essentially run a backtest.
[06:50:22 | 3:30:58 PM] So, for example, if we take a snapshot as of February, we can look at the future labels that came after that and see and compare what the agent said was going to slip or flagged versus what actually happened.
[06:50:30 | 3:31:05 PM] And you can see that as the agent analyzes all this information, that for statuses that were green but flagged, they were twice as likely to actually turn yellow or red.
[06:50:36 | 3:31:12 PM] And so, again, this is encouraging because we were starting to see some beginning of the inability to say, well, it's not predictive of exactly what's going to go wrong, but at least it should tell you what to look at.
[06:50:48 | 3:31:24 PM] So, you know, you have 18 different cases where you have a verdict from an agent that's flagged, but what about those where you don't?
[06:50:54 | 3:31:29 PM] And this is where some product intuition comes in.
[06:50:58 | 3:31:33 PM] First of all, how would you incorporate a very elegant sort of loop where you include an actual user, a stakeholder, a human?
[06:51:04 | 3:31:39 PM] And what do you ask them, and where do you meet them, right?
[06:51:08 | 3:31:43 PM] I put a non-trivial amount of work into finding out how best to actually capture this information.
[06:51:13 | 3:31:48 PM] It's meeting the users where they are, whether it's the app they're using or Slack or email, whatever.
[06:51:19 | 3:31:54 PM] And the closer you can get to them, and the simpler you can make that feedback collection mechanism, the more scalable and robust the process is going to be.
[06:51:25 | 3:32:00 PM] It also matters what you ask, right?
[06:51:26 | 3:32:02 PM] You want to understand whether, like, you're asking a fact, which only fixes one output, or if you're asking about a rule.
[06:51:34 | 3:32:09 PM] And once that agent understands that pattern, it does a much better job of fixing every output it covers, both now and into the future.
[06:51:42 | 3:32:17 PM] So we have this notion now of our record containing not just an element of what was inferred by the agent, but more importantly confirmed after someone actually provided that signal.
[06:51:58 | 3:32:33 PM] Okay, so now bottom up, right?
[06:52:00 | 3:32:36 PM] You have meetings with, you know, really strong signal, what people say out loud.
[06:52:05 | 3:32:40 PM] You have your Slack.
[06:52:06 | 3:32:42 PM] You obviously, it's constant, it's noisy, it's very close to the truth.
[06:52:10 | 3:32:46 PM] Code changes describe what shipped.
[06:52:12 | 3:32:48 PM] And then, of course, the agent sessions, which is how the sausage was made.
[06:52:16 | 3:32:52 PM] And I think I encourage you all to explore all of these disparate data sources to kind of build such a model up.
[06:52:22 | 3:32:58 PM] With Slack, it's relatively simple, right?
[06:52:24 | 3:32:59 PM] Like you're just looking at every thread and trying to understand, based on attachments and participants and content, the claims that you want the agent to record or update.
[06:52:34 | 3:33:10 PM] When was this?
[06:52:35 | 3:33:11 PM] Who was responsible, or who does this relate to?
[06:52:39 | 3:33:14 PM] What project?
[06:52:39 | 3:33:15 PM] What is the sort of link to the evidence, and so on.
[06:52:45 | 3:33:20 PM] With PRs, of course, it shows you what changed, and it's a really nice way to see how a project is evolving.
[06:52:52 | 3:33:27 PM] But when it comes to the actual, like, subtleties of how projects are sort of run and deployed, it's really interesting to look at the actual traces, you know, for users and engineers who opt into that, right?
[06:53:06 | 3:33:41 PM] Like you understand how the ask was, how evolved over time, test failures or, you know, particular decisions from the developer, those kinds of things.
[06:53:17 | 3:33:53 PM] Ultimately, these culminate in a pull request, but the synthesis of these things, I think, makes a big difference.
[06:53:23 | 3:33:59 PM] The other gotcha I just want to share is to just be mindful of how you think about the validity of signal coming from different so-called sensors.
[06:53:31 | 3:34:06 PM] If you're driving down a highway, for example, and your speedometer just, you know, just— Ghost just disappears.
[06:53:36 | 3:34:12 PM] It doesn't mean you're now going at zero miles an hour, right?
[06:53:40 | 3:34:16 PM] It's just like a faulty signal.
[06:53:42 | 3:34:18 PM] So, for example, here we ran into a couple of issues sometimes when the bottom-up approach, you had some semblance of a claim saying, Hey, this particular channel, this thing is going quiet.
[06:53:52 | 3:34:27 PM] What's going on?
[06:53:53 | 3:34:28 PM] But in reality, you know, we were treating it as a zero when really it shouldn't have been.
[06:53:57 | 3:34:33 PM] And so we sort of iterated over time to understand how to incorporate when we last tried to get information from that sensor, when it was last okay, and what do you do when these diverge?
[06:54:08 | 3:34:44 PM] So now, if you look at the actual record that we constructed, the agents are going to be much more effective in understanding the true state of the world, right?
[06:54:19 | 3:34:54 PM] It's not green, right?
[06:54:20 | 3:34:56 PM] It's the go-live slipped twice, the evidence is yellow, people are talking about failing tests.
[06:54:25 | 3:35:01 PM] It's going to be tricky.
[06:54:27 | 3:35:02 PM] So what do we use this for, right?
[06:54:30 | 3:35:05 PM] We use it to steer leadership conversations.
[06:54:32 | 3:35:08 PM] Instead of, you know, circulating a deck to everyone and forcing everyone to just go through some slides everyone glosses over, you start with the stuff that actually, you know, matters.
[06:54:42 | 3:35:17 PM] You start where the deck and the evidence disagree.
[06:54:44 | 3:35:20 PM] You also produce a weekly read for managers and leaders on what's stuck and what went quiet.
[06:54:49 | 3:35:25 PM] But I think also, most importantly, you have the sort of beginning of a context layer that every agent can rely on.
[06:54:55 | 3:35:31 PM] And we're using this pattern and constructing it so that it's extendable to other different use cases, right?
[06:55:01 | 3:35:36 PM] In our client franchise, for example, we're curious about how we can build similar models to help serve our clients.
[06:55:07 | 3:35:42 PM] You know, we have some client and we want to understand who holds what, what are they interested in, how can we anticipate their needs as best as possible by folding in information from all sorts of disparate internal and external sources.
[06:55:21 | 3:35:56 PM] So a couple of things that are difficult to do, just to kind of maybe we can chat outside about your solutions.
[06:55:27 | 3:36:03 PM] I'd be very curious to hear, are when you have a lot of, you know, for example, one client with four records and four different systems with no canonical identifier, how do you go about mapping those in a very elegant way?
[06:55:40 | 3:36:15 PM] That's one thing that I don't think we have a clear answer to.
[06:55:44 | 3:36:19 PM] The second thing is how can we be most effective at capturing signal from stakeholders and users?
[06:55:49 | 3:36:25 PM] Where the model is sure and the stakes are pretty low, you should just apply it automatically.
[06:55:55 | 3:36:30 PM] When those stakes are low, but the model isn't sure, just wait for more evidence.
[06:56:01 | 3:36:36 PM] But if the stakes are high, it really matters, like who you ask, when you ask it, and kind of the whole mechanism there.
[06:56:09 | 3:36:44 PM] So here's the loop again.
[06:56:11 | 3:36:47 PM] Update, age, observe, grade, and correct.
[06:56:14 | 3:36:49 PM] And three things I want you to take home.
[06:56:18 | 3:36:53 PM] The model that your company has, you should think about it as a state estimator, right?
[06:56:24 | 3:36:59 PM] Don't assume that just like indexing everything and cataloging everything is enough, because by definition, these things are extremely nuanced.
[06:56:33 | 3:37:08 PM] And this intrinsic information that lives almost between the lines is hard for even the best state-of-the-art models to capture.
[06:56:40 | 3:37:15 PM] Grade it against what happens next, right?
[06:56:42 | 3:37:17 PM] So be intentional and think through how you can integrate and implement evals from the get-go, and think about an elegant solution that allows your models and your agents and your stakeholders to kind of play nice together.
[06:56:58 | 3:37:33 PM] So your company can have a model of itself.
[06:57:01 | 3:37:36 PM] I encourage you to start collecting now if you're not collecting already.
[06:57:05 | 3:37:40 PM] And certainly if you have, if you're at a bigger company and like me, you had the, I mean, fortune or misfortune of dealing with thousands of decks, definitely something you should start thinking about, because I've definitely seen material improvements in how these agents are able to reconstruct that sort of corporate memory and apply it in all sorts of daily tasks without sort of being all confused about things.
[06:57:29 | 3:38:04 PM] Okay.
[06:57:29 | 3:38:04 PM] Thank you very much.
[06:57:29 | 3:38:05 PM] I'm João, and I'll be outside for any questions if you want.
[06:57:32 | 3:38:08 PM] Cheers.
```
