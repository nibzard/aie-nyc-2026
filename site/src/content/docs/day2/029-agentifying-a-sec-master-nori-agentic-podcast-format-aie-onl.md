---
title: Agentifying a SEC Master
description: Day 2 · Oct 14. Nori Agentic's CEO Amol Kapoor and CTO Clifford
  Ressel, joined on screen by their agent Jiro, explain in a podcast-format
  online-track talk how cloud agents can maintain a securities master whose
  every cell change today sends a person hunting for provenance in Google Drive,
  email, and contract PDFs.
sidebar:
  order: 29
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

Nori Agentic's CEO Amol Kapoor and CTO Clifford Ressel, joined on screen by their agent Jiro, explain in a podcast-format online-track talk how cloud agents can maintain a securities master whose every cell change today sends a person hunting for provenance in Google Drive, email, and contract PDFs.

## TL;DR
- This is a pre-recorded AIE online-track talk in a podcast format. Amol Kapoor (CEO) and Clifford Ressel (CTO) of Nori Agentic riff with each other while their agent Jiro draws on screen between them.
- The talk defines both core terms for a mixed audience: a cloud agent is a model run in a loop with tools, placed in a cloud process; a sec master is the master database of every security an asset manager trades.
- The use case is a large New York City asset manager. Any changed cell in its sec master triggers a manual provenance hunt through contracts, Google Drive, and email.
- Private assets (data centers, GPU clusters, airplanes) have no pricing APIs and are mostly not fungible, so the work scales linearly with the number of assets.
- The core argument: build assistive agents with rich human interaction. "Software factories" that push for 100% autonomy fail, because sometimes a human just needs to hit the merge button.

## Key lessons
1. The on-stage agent definition: "an LLM or a model that you run in a loop and give access to tools" [05:04:48]. A cloud agent moves that loop into a cloud process with tools that do not exist on your laptop or phone [05:05:01].
2. A sec master is the master table of the tradable universe. It is "the left side of almost every join" [05:08:09]. Reporting, audits, and pricing models are all downstream of a clean sec master.
3. The abstraction hides accidental complexity, like date-time libraries hide time zones [05:08:45]. Tickers are not one-to-one with companies: Google Class A and B shares differ across exchanges and countries [05:09:47].
4. Public assets get most identifiers from two centralizing forces: regulation and the exchanges where they trade [05:10:31]. A small firm can lean on Bloomberg IDBB Global identifiers, also called FIGIs [05:11:23].
5. Private asset work scales linearly with asset count because each asset is unique: "There's no API that you can hit to be like, give me the price of this data center" [05:14:29]. The price lives in a contract somewhere.
6. The current workflow is manual and split across skills. "You literally have a guy going through a Google Drive or going through somebody's emails to find a PDF of a contract" [05:18:00]. No single person spans both the Python/Snowflake/Spark pipelines and the finance semantics [05:16:45].
7. Sec master teams already hold the process knowledge: they know the owner of each bad cell and the escalation path, such as "we talk to Jerry" [05:19:51]. That purpose is encoded in people, not in code or spreadsheets [05:20:26].
8. The common failure pattern is the inflexible "software factory" that runs agents to 100% with no intervention path [05:20:51]. Agents are most valuable for their malleability and mid-task correctability; "Sometimes you need a human just to be able to hit the merge button" [05:21:37].

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=18138&rel=0" title="Agentifying a SEC Master" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Amol Kapoor, Clifford Ressel, Jiro &middot; 1:42:54 PM ET–2:02:56 PM ET &middot; talk &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=18138s" rel="noopener">Watch on YouTube from 05:02:18</a></p>

## Notable quotes
> "So cloud agent, the most succinct definition, I think, for just agent to start: an LLM or a model that you run in a loop and give access to tools." [05:04:48 | 1:45:23 PM]

> "So the sec master, for most analysis that you're going to run, it's going to be the left side of almost every join." [05:08:09 | 1:48:44 PM]

> "You literally have a guy going through a Google Drive or going through somebody's emails to find a PDF of a contract to make sure that the data is correct." [05:18:00 | 1:58:36 PM]

> "Sometimes you need a human just to be able to hit the merge button." [05:21:37 | 2:02:12 PM]

## Session narrative
The talk opens as a pre-recorded session on the AIE online track, and Amol Kapoor immediately plays with the format. He jokes that nobody in the audience made the trip to the room, then explains why he "dragged Cliff along": a podcast format gives him someone to riff with, and it gives their agent Jiro a seat on screen between them, drawing and describing concepts. The two founders introduce themselves as complementary opposites. Amol has done AI/ML for about 12 years and knows no finance; Cliff built a data platform for a startup hedge fund before staff software engineering work. That split frames the whole talk for a dual audience: finance people who do not know AI, and AI engineers who do not know finance.

The first half builds shared definitions. Cliff defines an agent as a model in a loop with tools, and a cloud agent as that loop placed in a cloud process with tools that do not exist on a laptop. The two then spend far more time on the sec master, which they call an operational primitive: a table in Snowflake or Databricks that anchors every downstream process at an asset manager. Their date-time library analogy carries the argument for engineers who underestimate it. Public equities illustrate the identifier mess, from Google's share classes to duplicate tickers across exchanges, and FIGI identifiers show how public data leans on centralizing forces. The last three years pushed asset managers into private assets such as data centers, GPU clusters, and airplanes, which are mostly not fungible, increasingly securitized, and priced inside contracts rather than markets.

The second half grounds the problem in a live engagement with a big asset manager in New York City. The firm built a new sec master fed by internal and external sources, both quantitative and unstructured. The lowest barrier to adoption is tying out each cell change to upstream evidence. Today, every changed cell sends a person to trace the lineage. That person must bridge two opposite representations: spreadsheets show data without logic, while pipelines show logic without data. For private assets there is no API to call, so the hunt ends in Google Drive, somebody's email, and a contract PDF that may be a draft instead of the notarized version.

The pair close by dissecting why this is hard. On the business side, knowing what good looks like is a search problem: when have you seen enough evidence? The client already knows its workflow, cell owners, and escalation paths, so agents must assist that process rather than replace it. On the technical side, they name the failure pattern of the past year or two: inflexible "software factories" that chase 100% autonomy with no intervention path. Amol counters that real cloud agent infrastructure should feel seamless, like talking to an agent running on your own machine. The recording then cuts off mid-transition, as the speakers turn to "the second part that's difficult, which is, you know, from the technical side" — a pre-recorded online-track video ending with no outro.

## Speaker details
**Amol Kapoor** - CEO, Nori Agentic. He has worked in AI and machine learning for about 12 years, including as a researcher at Google Research on graph neural networks, computer vision, 3D reconstruction, and robotics. He studied at Columbia University, co-founded the visual-filesystem company SOOT as its CTO, and organizes Agentics, a New York AI community event series. Links: [LinkedIn](https://www.linkedin.com/in/amolkapoor), [Twitter](https://twitter.com/theahura_), [Website](https://amolkapoor.com/). In this session he introduces himself: "My name is Amol. I am the CEO of a company called Nori Agentic" [05:03:40].

**Clifford Ressel** - Co-founder and CTO, Nori Agentic. He works on the future of coding agents, including nori-cli, a Rust-based CLI for running coding agents across models and providers, and nori-skillsets for portable, reusable agent skills. He studied computer science and linguistics at Carnegie Mellon University. Links: [LinkedIn](https://www.linkedin.com/in/cliffordressel), [Twitter](https://x.com/CSRessel), [GitHub](https://github.com/CSRessel). In this session he introduces himself: "I'm Cliff. I'm the CTO at Nori Agentic. We've been working on dev tooling AI agents, this form factor, for almost two years now" [05:03:55].

**Jiro** - AI agent, Nori Agentic (on-screen co-presenter). Jiro ran on screen between the two founders, drawing diagrams and describing concepts while they explained how to use agents to build a securities master. Nori Agentic hosts a public "jiro.bot" repository in its GitHub organization. No personal links. (identified from session)

## Full timestamped transcript
```
[05:02:19 | 1:42:54 PM] Thanks, guys, for coming to listen to a talk on the AIE online track.
[05:02:22 | 1:42:58 PM] I guess coming to listen is not quite right because obviously you guys are not in the room with us.
[05:02:27 | 1:43:03 PM] Making the long long trip.
[05:02:28 | 1:43:04 PM] Yeah, making the long long trip.
[05:02:30 | 1:43:05 PM] Yeah, yeah, yeah, yeah.
[05:02:30 | 1:43:05 PM] The arduous journey to...
[05:02:31 | 1:43:07 PM] com.
[05:02:32 | 1:43:07 PM] Whenever we do these kinds of talks, we always want to play around with the format a little bit.
[05:02:35 | 1:43:11 PM] You know, I'm not a huge fan of just standing in front of a loom and doing slides late at night in my room.
[05:02:40 | 1:43:16 PM] So I dragged Cliff along to do something a little bit different.
[05:02:42 | 1:43:18 PM] We wanted to do this in a little bit of a podcast format, and part of that is just because it's nice to have multiple people to, like, riff with and bounce ideas off of, but also because we wanted to find a way to include Jiro, our agent.
[05:02:53 | 1:43:28 PM] So obviously, you know, on our side, Jiro is not quite in the room with us.
[05:02:57 | 1:43:33 PM] He's kind of living on this computer.
[05:02:59 | 1:43:34 PM] But when you guys are watching this on YouTube, hopefully you'll have all three of us present.
[05:03:03 | 1:43:38 PM] You'll have me and Cliff talking, and then Jiro will be sort of in the middle drawing things out and describing things.
[05:03:09 | 1:43:44 PM] Jiro, please wave hi for the viewers.
[05:03:11 | 1:43:46 PM] Yeah, Jiro, please wave hi for the viewers.
[05:03:14 | 1:43:49 PM] So this talk is all about agentifying a sec master.
[05:03:17 | 1:43:53 PM] This is part of AIE New York, which of course is very, very focused on the finance and, like, AI in finance in 2026.
[05:03:25 | 1:44:01 PM] And so I think before we really dive in, maybe it makes sense for just us to briefly introduce ourselves.
[05:03:32 | 1:44:07 PM] And then we probably want to just give some definitions even, like what is a sec master?
[05:03:35 | 1:44:11 PM] What is a cloud agent?
[05:03:36 | 1:44:12 PM] How do you, like, use agents to do any of these things?
[05:03:39 | 1:44:14 PM] So I'll go first.
[05:03:40 | 1:44:15 PM] My name is Amol.
[05:03:41 | 1:44:16 PM] I am the CEO of a company called Nori Agentic.
[05:03:43 | 1:44:19 PM] And as you might have guessed, we spend a lot of time thinking about cloud agents and how we can put agents in the cloud to solve problems both in finance and kind of all in a bunch of different industries.
[05:03:54 | 1:44:30 PM] And yeah, Cliff.
[05:03:55 | 1:44:31 PM] I'm Cliff.
[05:03:55 | 1:44:31 PM] I'm the CTO at Nori Agentic.
[05:03:57 | 1:44:33 PM] We've been working on dev tooling AI agents, this form factor, for almost two years now.
[05:04:02 | 1:44:38 PM] Yeah.
[05:04:03 | 1:44:38 PM] And before that, I was working on data engineering and building out a new data platform for a startup hedge fund.
[05:04:08 | 1:44:43 PM] And before that, staff software engineering.
[05:04:09 | 1:44:45 PM] And there's kind of a through line in all those things with data engineering, dev tools, some amount of cloud infra, some amount of web apps.
[05:04:16 | 1:44:52 PM] Yeah, it's kind of funny, actually.
[05:04:17 | 1:44:52 PM] This is almost like a perfect talk for you.
[05:04:18 | 1:44:54 PM] Like, I'm sort of the odd person out.
[05:04:20 | 1:44:55 PM] Like, my background is in ML, so I've been doing the AI/ML thing for like 12 years, but, like, I don't know anything about finance.
[05:04:25 | 1:45:01 PM] Like, you know all the finance stuff.
[05:04:27 | 1:45:02 PM] So it's kind of an interesting conversation, right?
[05:04:29 | 1:45:05 PM] Because we have two potentially very different audiences in the room.
[05:04:32 | 1:45:08 PM] You have the finance folks who maybe don't know anything about AI, and you have the AI engineer folks who maybe don't know anything about finance.
[05:04:38 | 1:45:14 PM] So maybe it makes sense to even just get started with some definitions, like what is a cloud agent and what is a sec master before we can even dive into how these things fit together.
[05:04:48 | 1:45:23 PM] Yes.
[05:04:48 | 1:45:23 PM] So cloud agent, the most succinct definition, I think, for just agent to start: an LLM or a model that you run in a loop and give access to tools.
[05:04:58 | 1:45:33 PM] And so it can take some action that you hopefully find useful.
[05:05:01 | 1:45:37 PM] Specifically cloud agents, you take that whole form factor, usually the code that is calling the model in a loop, and you put it in some cloud process and you give it access to tools that don't exist on your laptop or your phone or wherever else.
[05:05:14 | 1:45:50 PM] And now that whole entity, that hopeful, useful primitive, runs in the cloud, hopefully taking action with either your company's data and processes or your own needs.
[05:05:24 | 1:45:59 PM] And I mean, so much of the important data now lives in the cloud.
[05:05:27 | 1:46:03 PM] So, like, in some sense, it actually is like a very natural home for all of that to even run.
[05:05:31 | 1:46:07 PM] Yeah, I think there's a certain historicity of, I think, when we saw local agents take off, right, with the Claude Code moment last year, right, and before that with earlier agent primitives, right.
[05:05:43 | 1:46:18 PM] I think it's almost like a quirk of history that it became local first, yeah, just to start.
[05:05:48 | 1:46:23 PM] And in the long run, we're going to see it take a lot longer for actual on-edge devices to deliver value.
[05:05:55 | 1:46:30 PM] So that's cloud agents, you know, agents that run in the cloud that you can basically do things with asynchronously and talk through across a bunch of different platforms.
[05:06:02 | 1:46:38 PM] What about a sec master?
[05:06:04 | 1:46:39 PM] Yes.
[05:06:04 | 1:46:40 PM] Now, we probably want to spend more time here because I think that this is a lot harder.
[05:06:08 | 1:46:43 PM] You know, it's harder for the average, I think, person who is not in finance to understand what a sec master is compared to the other way around.
[05:06:13 | 1:46:49 PM] And I think that people in finance have heard a lot more about agents than the other way.
[05:06:16 | 1:46:52 PM] Yeah, yeah, yeah.
[05:06:17 | 1:46:52 PM] Software engineers have heard about a sec master.
[05:06:18 | 1:46:54 PM] Yeah.
[05:06:19 | 1:46:54 PM] I certainly felt that way several years ago, kind of jumping into that field to bring data engineering expertise to help a startup hedge fund begin trading.
[05:06:27 | 1:47:03 PM] So, I mean, trading, I think, is the place to start.
[05:06:30 | 1:47:06 PM] So you have, in theory, a tradable universe of assets that are core to your business as an asset manager, many different types of asset managers.
[05:06:38 | 1:47:13 PM] We don't even need to go there right now.
[05:06:40 | 1:47:16 PM] Right.
[05:06:40 | 1:47:16 PM] But for your business to operate, you need some master database of all the securities that are in that tradable universe.
[05:06:46 | 1:47:21 PM] Yeah, yeah.
[05:06:46 | 1:47:22 PM] And so it's basically just like a table.
[05:06:48 | 1:47:24 PM] Like for the engineering side, you can kind of think of this as a table that lives in Snowflake or, you know, Databricks or something like that.
[05:06:54 | 1:47:29 PM] But in practice, it's actually like a really, really important operational primitive.
[05:06:58 | 1:47:33 PM] Yeah, and I think it's— If you just give the rote definition of identifiers and assets and instruments, and you start to explain the difference between, okay, you have, you know, instruments, and some of them are securitized, and there will be different asset classes, and okay, that seems like most of it.
[05:07:14 | 1:47:50 PM] Yeah.
[05:07:15 | 1:47:50 PM] And then actually, actually, building the thing, going inside the primitive, there's a lot of complexity, a lot of accidental complexity.
[05:07:22 | 1:47:58 PM] And once you get a centralized representation, it makes all the downstream processes very, very easy.
[05:07:27 | 1:48:03 PM] Yeah.
[05:07:27 | 1:48:03 PM] And that's why almost every asset manager has one.
[05:07:30 | 1:48:06 PM] Yeah.
[05:07:31 | 1:48:06 PM] But actually munging all that data together, and every time you bump into a new asset class or a new ID format, a new upstream source of data, you actually have new needs that you need to abstract inside the security master.
[05:07:41 | 1:48:17 PM] I mean, I tend to think of it almost like an operational primitive, where you just have all of this data, all these different data sources and all these different data consumers, and if you don't have something in the middle that basically ensures that the right data is getting to the right places, it's impossible to otherwise guarantee in a distributed way that you're going to have clean data, that you're going to be able to report the right things, that your audits are correct, that your pricing models are correct.
[05:08:04 | 1:48:39 PM] Like all of that stuff essentially is downstream of having a good, clean sec master.
[05:08:09 | 1:48:44 PM] Yeah.
[05:08:09 | 1:48:44 PM] So the sec master, for most analysis that you're going to run, it's going to be the left side of almost every join.
[05:08:15 | 1:48:51 PM] Yeah.
[05:08:16 | 1:48:51 PM] It's going to be the starting point for a lot of the analysis that you do.
[05:08:18 | 1:48:54 PM] Yeah.
[05:08:19 | 1:48:54 PM] And that drives some of the biggest processes at any asset manager.
[05:08:22 | 1:48:57 PM] Right.
[05:08:22 | 1:48:58 PM] And that could be everything from your reporting requirements to looking at historical performance to understanding your— I mean, some of this is just regulatory.
[05:08:31 | 1:49:07 PM] Like you literally have to have some sort of a record of what assets you have.
[05:08:34 | 1:49:10 PM] Yeah, exactly.
[05:08:35 | 1:49:11 PM] Yeah.
[05:08:36 | 1:49:11 PM] I think it's very easy as software engineers for us to jump over some of the accidental complexity that gets encapsulated within an abstraction.
[05:08:45 | 1:49:20 PM] Sure.
[05:08:45 | 1:49:21 PM] And so the comparison I've been thinking about when we've explained this to other engineers on our team and talking with our customers, it's like date-time libraries.
[05:08:54 | 1:49:29 PM] Yeah.
[05:08:54 | 1:49:29 PM] It's very, it's very easy for engineers to think, Oh, it's a date-time library.
[05:08:58 | 1:49:33 PM] Yeah, you're just tracking the time.
[05:08:59 | 1:49:34 PM] How hard could it be?
[05:09:00 | 1:49:36 PM] And then you realize, like, time zones are a thing, and, like, people track things differently, and it's all sorts of pain.
[05:09:06 | 1:49:41 PM] Yeah.
[05:09:06 | 1:49:42 PM] Everything from the localization to how people see the same representation to actually moving something between different time zones and daylight savings actually hits at different points in different countries.
[05:09:16 | 1:49:51 PM] Yeah.
[05:09:16 | 1:49:52 PM] So just like the briefest snapshot of all the accidental complexity that you hide inside the perimeter of the sec master.
[05:09:24 | 1:50:00 PM] Yeah.
[05:09:24 | 1:50:00 PM] I think, like, the easiest place to start, just so people grasp this, is publicly traded equities.
[05:09:29 | 1:50:05 PM] Yeah, like a Google or an Apple stock or something like that.
[05:09:32 | 1:50:07 PM] You go to the exchange, you buy Google, something like that.
[05:09:34 | 1:50:10 PM] Yeah, and this is by far the easiest asset class to even handle.
[05:09:38 | 1:50:13 PM] And already you just mentioned one of the first quirks, which is Google, that's not even one-to-one between tickers and companies.
[05:09:44 | 1:50:19 PM] Yeah, what do you mean by Google?
[05:09:45 | 1:50:21 PM] Like, are you buying Alphabet stock?
[05:09:47 | 1:50:22 PM] Are you buying Google stock?
[05:09:47 | 1:50:23 PM] There's actually two completely— Yeah, and there's Google Class A and B, and they are different on different exchanges, and they're different in different countries.
[05:09:53 | 1:50:29 PM] So tickers aren't unique.
[05:09:54 | 1:50:30 PM] They're not one-to-one with the actual entities.
[05:09:57 | 1:50:32 PM] Right.
[05:09:57 | 1:50:32 PM] And then on different exchanges, you can actually have the same—
[05:10:01 | 1:50:36 PM] stock listed across potentially, you know, a different exchange in, you know, the EU might have actually different listings of the same underlying shares.
[05:10:10 | 1:50:46 PM] So you got this rat's nest of data, basically, and it's really, really hard to untangle.
[05:10:15 | 1:50:50 PM] And you have to basically have a team of people who are doing this, like, pretty labor-intensive role of keeping this all clean.
[05:10:21 | 1:50:56 PM] Yeah.
[05:10:21 | 1:50:57 PM] And so a lot of it's kind of architecting how the sec masters should work for the area or particular asset classes that your business will be investing in.
[05:10:30 | 1:51:06 PM] Yeah.
[05:10:31 | 1:51:06 PM] I think that, especially in the publicly traded world, oftentimes most of the structure to the data comes from the moments where that data encounters different centralizing forces.
[05:10:42 | 1:51:17 PM] Sure.
[05:10:42 | 1:51:18 PM] So the two biggest examples are the regulatory constraints and the actual exchanges where it's traded, right?
[05:10:48 | 1:51:24 PM] So kind of point of sale, point of exchange.
[05:10:52 | 1:51:27 PM] And those two have the effect of creating most of the identifiers that you care about in the publicly traded world.
[05:10:56 | 1:51:32 PM] So if those are the assets that you're interested in, you have to make sure that you have those identifiers, you have to make sure they're aligned, you have to make sure you have them somewhere recorded in your company, because anytime anybody wants to do anything with those assets, they have to reference them back to those things.
[05:11:10 | 1:51:45 PM] Yeah.
[05:11:10 | 1:51:46 PM] And at first it can be relatively easy because you're dealing with a particular asset class.
[05:11:14 | 1:51:49 PM] You're dealing with one intersection of different centralizing structures.
[05:11:19 | 1:51:55 PM] You can just be like, I'm just going to use Bloomberg's IDs for everything and not worry about it.
[05:11:23 | 1:51:58 PM] Yeah.
[05:11:23 | 1:51:59 PM] So you have Bloomberg's IDBB Globals as, like, a column in the source data that you're going to get from them.
[05:11:28 | 1:52:03 PM] And these are called FIGIs sometimes because of a previous acronym.
[05:11:32 | 1:52:08 PM] It's called FIGI, F-I-G-G-I?
[05:11:34 | 1:52:10 PM] Yeah, it's like Financial Instrument Global Identifier.
[05:11:37 | 1:52:12 PM] Okay.
[05:11:37 | 1:52:12 PM] But they, I don't know if it's officially renamed.
[05:11:40 | 1:52:15 PM] Sure, yeah, sure, whatever.
[05:11:41 | 1:52:16 PM] It's a little bit easier to say than IDBB Global.
[05:11:43 | 1:52:18 PM] Yeah.
[05:11:43 | 1:52:19 PM] And so from that, that's going to answer a lot of your problems.
[05:11:46 | 1:52:22 PM] Yeah.
[05:11:46 | 1:52:22 PM] The moment you get a little bit bigger, then it starts to get a little bit messy.
[05:11:49 | 1:52:25 PM] Once there's a little bit more complexity.
[05:11:51 | 1:52:26 PM] Yeah.
[05:11:51 | 1:52:27 PM] Or you're not dealing with things that are understood in the Bloomberg universe of assets.
[05:11:55 | 1:52:31 PM] And so actually one of the things that I think is really interesting is the last three years, I think, has seen a massive growth for asset managers in assets that are not of this sort of, like, standardized, globalized, public...
[05:12:07 | 1:52:43 PM] Entities, right?
[05:12:08 | 1:52:43 PM] Like Google and Apple, in some sense, are pretty well understood.
[05:12:10 | 1:52:46 PM] But so many people are now investing in, like, data centers and, like, clusters of GPUs.
[05:12:14 | 1:52:50 PM] And if you're just, like, buying a data center from somebody or buying, like, shares of a data center, that's not something that trades on a liquid market.
[05:12:21 | 1:52:56 PM] And so you have to, like, track that in some other way.
[05:12:24 | 1:52:59 PM] Yeah.
[05:12:24 | 1:53:00 PM] So, I mean, this is not my area of expertise, but the data centers are a very interesting one because I think it touches on multiple different areas of privately traded instruments, right?
[05:12:35 | 1:53:10 PM] So you might have actual real estate that's involved in where do we build this data center.
[05:12:40 | 1:53:15 PM] The actual land, yeah.
[05:12:41 | 1:53:16 PM] And then from there, there might be a privately owned company that does issue equity.
[05:12:46 | 1:53:21 PM] Yep.
[05:12:46 | 1:53:21 PM] Maybe it's held by a publicly traded company, right?
[05:12:50 | 1:53:25 PM] Maybe there's some publicly traded bonds issued to fund some part of this, or maybe there's private credit that's taken on to fund the construction.
[05:12:57 | 1:53:32 PM] I mean, increasingly the GPUs itself feel like an asset class.
[05:13:00 | 1:53:35 PM] Yeah, and there actually are efforts right now to securitize GPUs, GPU clusters.
[05:13:04 | 1:53:40 PM] Yeah, sure.
[05:13:05 | 1:53:40 PM] Well, I mean, because, you know, another private asset that's a very interesting niche is airplanes.
[05:13:09 | 1:53:45 PM] Sure.
[05:13:10 | 1:53:45 PM] So one reason why kind of the entry costs for the airline business are low is because— Oh, low.
[05:13:15 | 1:53:51 PM] Okay.
[05:13:15 | 1:53:51 PM] Low.
[05:13:16 | 1:53:51 PM] The entry costs are so low is because it holds collateral against itself when you're leasing the plane.
[05:13:20 | 1:53:55 PM] Oh, interesting.
[05:13:20 | 1:53:56 PM] You could lose the plane.
[05:13:21 | 1:53:57 PM] Yeah.
[05:13:22 | 1:53:57 PM] Well, so it kind of gets to most private assets—this is actually a helpful distinction—most private assets are not very fungible.
[05:13:29 | 1:54:04 PM] Yeah, sure.
[05:13:29 | 1:54:05 PM] Yeah, that's kind of a hallmark of the problem that we're going to come back to.
[05:13:32 | 1:54:08 PM] There are some of these private assets that actually are weirdly fungible, like airplanes or GPUs.
[05:13:37 | 1:54:12 PM] Yeah.
[05:13:37 | 1:54:13 PM] So it might be worth even diving into then the specifics, right?
[05:13:41 | 1:54:17 PM] So what does it mean to identify a securities master?
[05:13:44 | 1:54:19 PM] And I think it can be helpful to even ground this in a particular example, which is, you know, we're working very closely with one of these big asset managers in New York City.
[05:13:51 | 1:54:27 PM] One of the benefits of being in New York, New York local.
[05:13:54 | 1:54:29 PM] Like, let's talk through a little bit of, like, what problems that they are running into, and then how are they using agents to solve that problem.
[05:14:01 | 1:54:36 PM] Yeah, so a lot of this is that last distinction we hit on for private assets.
[05:14:07 | 1:54:42 PM] And the first important distinction here is that the amount of data and the amount of work related to each asset does, it scales linearly with the number of assets because they're unique.
[05:14:20 | 1:54:55 PM] Yeah.
[05:14:20 | 1:54:56 PM] So each private asset, it's not like you can, like, easily write software that will, like, handle a group of these private assets because each one is different.
[05:14:28 | 1:55:04 PM] Yeah, oftentimes.
[05:14:29 | 1:55:04 PM] There's no API that you can hit to be like, give me the price of this data center.
[05:14:33 | 1:55:08 PM] Like, the price lives in a contract somewhere.
[05:14:35 | 1:55:10 PM] Yeah.
[05:14:35 | 1:55:10 PM] And if you are part of a business like a VC where the number of these different assets already scales linearly to the amount of time put in, so the number of different checks that you write is already very related to the number of different person-hours spent with those potential investments.
[05:14:52 | 1:55:27 PM] It's extremely manual.
[05:14:53 | 1:55:28 PM] It's very manual, and it might be, you know, that might be scalable because it's already, you know, the source data is proportional to the person-hours, and then the downstream effects then cost proportional person-hours.
[05:15:03 | 1:55:38 PM] But then once you start looking at everything from real estate to private credit and the different ways that these assets can be packaged, that ends up being its own whole new way that the scale of the data increases.
[05:15:15 | 1:55:50 PM] Yeah.
[05:15:16 | 1:55:51 PM] So you have this, like, exponentially increasing complexity.
[05:15:20 | 1:55:56 PM] How does that then impact, like, let's dive into this kind of specific use case.
[05:15:24 | 1:55:59 PM] So we're working with this asset manager.
[05:15:25 | 1:56:01 PM] Like, what are the things that they are trying to do, and then where do agents come in?
[05:15:29 | 1:56:05 PM] Yeah.
[05:15:29 | 1:56:05 PM] So they're already seeing a process where they've created a new sec master.
[05:15:33 | 1:56:09 PM] Yep.
[05:15:33 | 1:56:09 PM] And they have both internal and external sources.
[05:15:36 | 1:56:12 PM] Yep.
[05:15:37 | 1:56:12 PM] Many of these are quantitative, but some of them are actually related to different documents and other unstructured sources of data.
[05:15:45 | 1:56:21 PM] And they have data pipelines that are mapping that.
[05:15:48 | 1:56:24 PM] And just the lowest barrier for adoption is accurately being able to tie out individual changes to upstream pieces of evidence.
[05:15:58 | 1:56:33 PM] Yeah.
[05:15:58 | 1:56:34 PM] Yeah.
[05:15:59 | 1:56:34 PM] Just for a couple hundred columns or a couple hundred rows with even fewer than that columns is already a very labor-intensive process, and they manage a lot more than a couple hundred.
[05:16:10 | 1:56:45 PM] Yeah, yeah, yeah, yeah.
[05:16:11 | 1:56:47 PM] So just to give, like, a kind of layman's view of this, right?
[05:16:14 | 1:56:50 PM] Like, any time an asset, any time one of these rows in this table changes, there's a guy, like somebody who gets called up, who basically has to then go and figure out why that change happened, right?
[05:16:25 | 1:57:01 PM] Yeah.
[05:16:26 | 1:57:01 PM] So basically be able to look at any cell in the table and look at the lineage for what produced that.
[05:16:31 | 1:57:07 PM] Not every row; it's every cell.
[05:16:33 | 1:57:08 PM] Every cell.
[05:16:33 | 1:57:09 PM] Yeah, yeah, yeah.
[05:16:34 | 1:57:09 PM] So every row slash column.
[05:16:36 | 1:57:11 PM] Yeah.
[05:16:36 | 1:57:11 PM] And so it's extremely labor-intensive.
[05:16:39 | 1:57:14 PM] Like, any time anything changes for any of these columns and rows, there's a person who basically has to go and find the provenance for that data.
[05:16:45 | 1:57:21 PM] And yeah, and I can't undersell the trickiness raised by the intersection of both software and finance here.
[05:16:52 | 1:57:28 PM] Sure.
[05:16:53 | 1:57:28 PM] Because that person is not going to both be able to perfectly understand all the Python data munging and data flows, whether that's like some notebooks that run in Snowflake all the way down to, like, the build-your-own, we have our own Lakehouse and we're running our own Apache Spark jobs.
[05:17:06 | 1:57:42 PM] Right.
[05:17:06 | 1:57:42 PM] You know, if they are a finance expert, you know, someone who's conducted a lot of operational work in back office for finance managers, they don't have that software engineering.
[05:17:15 | 1:57:50 PM] I mean, a lot of those people are really savvy, actually, with how they can use Python to solve problems on their machine, with different CSVs or tie-outs or exports from Excel.
[05:17:23 | 1:57:58 PM] But being able to look at the repo and understand, you know, it's interesting, like spreadsheets and software are kind of opposite views of the same process.
[05:17:33 | 1:58:09 PM] Yeah, yeah.
[05:17:33 | 1:58:09 PM] Where it's like with a spreadsheet, you see the data and you don't see the logic, and then with a software...
[05:17:40 | 1:58:15 PM] You know, all these data pipelines, you see the process and the logic, but you don't see the data.
[05:17:44 | 1:58:20 PM] Yeah.
[05:17:44 | 1:58:20 PM] And so there's completely different representations.
[05:17:45 | 1:58:21 PM] And then the flip side of it, you have the software engineer who has implemented the data pipelines, and they don't have the financial knowledge.
[05:17:51 | 1:58:27 PM] They don't know what it looks like for something to be incorrect in this particular cell that's now causing problems for an investment professional who needs to look at the data and have it be correct.
[05:17:59 | 1:58:35 PM] Right, right, right.
[05:18:00 | 1:58:36 PM] So you have this process that right now, any time a cell changes, and for private data, you know, it's not even like you can go hit an API.
[05:18:07 | 1:58:43 PM] You literally have a guy going through a Google Drive or going through somebody's emails to find a PDF of a contract to make sure that the data is correct.
[05:18:14 | 1:58:50 PM] Yeah.
[05:18:14 | 1:58:50 PM] Is this the most up-to-date version?
[05:18:16 | 1:58:52 PM] Is this the latest notarized version of the contract and not some draft that was sent back and forth?
[05:18:22 | 1:58:57 PM] Is the actual information I need here, or is there a more recent update?
[05:18:26 | 1:59:01 PM] Right.
[05:18:27 | 1:59:02 PM] And so I just feel like, in those terms, right, it's just so obvious that cloud agents would solve this problem.
[05:18:33 | 1:59:08 PM] Yeah, yeah.
[05:18:33 | 1:59:09 PM] Or maybe, you know, ameliorate the problem.
[05:18:36 | 1:59:11 PM] Yeah, solve is a tough word.
[05:18:37 | 1:59:13 PM] Yeah.
[05:18:37 | 1:59:13 PM] So I think this kind of gets to, I think, the most interesting part of the problem, which is why is this hard?
[05:18:44 | 1:59:20 PM] Yeah.
[05:18:45 | 1:59:20 PM] We, as software engineers, as software professionals, we see agents solving accidental complexity every single day.
[05:18:50 | 1:59:26 PM] Yes.
[05:18:50 | 1:59:26 PM] So I think it's helpful to just deep dive: why is this hard, both from a technical perspective and a business perspective?
[05:18:56 | 1:59:32 PM] Yeah.
[05:18:57 | 1:59:32 PM] And to your point about there's someone who needs to go look for this, right?
[05:19:03 | 1:59:38 PM] Being able to know what good looks like, what correct looks like, that's more of a business question.
[05:19:09 | 1:59:44 PM] Sure.
[05:19:09 | 1:59:45 PM] Or it can also be a search problem where, you know, when have you seen enough?
[05:19:14 | 1:59:50 PM] When do you have all of the evidence?
[05:19:16 | 1:59:51 PM] It's tough to prove.
[05:19:17 | 1:59:52 PM] It's going to be different for different companies in different situations.
[05:19:20 | 1:59:55 PM] Yeah, for different assets even.
[05:19:21 | 1:59:57 PM] Exactly.
[05:19:22 | 1:59:57 PM] And, yeah, I mean, one of the reasons why this particular instance, this particular project is— A good fit is because they've already actually thought very hard about what does that workflow look like?
[05:19:32 | 2:00:08 PM] What does it look like to reconcile inconsistencies or any changes with the data?
[05:19:37 | 2:00:13 PM] What would they want that back office function to actually look at step by step, and when would they want them to escalate an inconsistency they're seeing up to a data owner or to a financial?
[05:19:48 | 2:00:24 PM] SecMasters already have this sort of process in place.
[05:19:51 | 2:00:27 PM] Like if there's an error somewhere, they already know, okay, there's an error in this cell.
[05:19:55 | 2:00:31 PM] We know who is going to be owner of that cell.
[05:19:58 | 2:00:33 PM] Yeah, it could be everything from there is an investment professional whose book or
[05:20:04 | 2:00:40 PM] Or whose investments are related to this particular number.
[05:20:09 | 2:00:44 PM] It could be actually, you know, when this particular data source doesn't look correct, we talk to Jerry.
[05:20:16 | 2:00:51 PM] Sure.
[05:20:16 | 2:00:51 PM] Because he was the one who talked to them on the initial extracts of data that they sent over.
[05:20:21 | 2:00:57 PM] Yep.
[05:20:22 | 2:00:57 PM] So this, I think, is like the first of the problems of just, like, why this is hard.
[05:20:26 | 2:01:01 PM] Yeah.
[05:20:26 | 2:01:01 PM] There's knowledge that's not encoded in either the code or the spreadsheets or kind of a lot of the purpose behind the tasks.
[05:20:33 | 2:01:09 PM] The tasks are very encoded at your company, but the purpose behind those tasks is often not, and that lives with all of the people who are making up those different functions.
[05:20:42 | 2:01:17 PM] Yeah.
[05:20:42 | 2:01:18 PM] Which I think also gets to the second part of why this is difficult.
[05:20:46 | 2:01:21 PM] In order to properly assist them, you need to make assistive technologies.
[05:20:51 | 2:01:27 PM] Yeah.
[05:20:51 | 2:01:27 PM] And I think that this is a common failure pattern we've seen, especially on the software side of the market for the past year or two.
[05:20:57 | 2:01:33 PM] There's so many people who, like, want the agents to take everything to 100%.
[05:21:00 | 2:01:36 PM] Yeah.
[05:21:00 | 2:01:36 PM] And so they create these software factories, software factories, quote unquote, that are really inflexible.
[05:21:07 | 2:01:42 PM] You know, they spin up some process where it's like, Oh, I tag this agent and it'll, like, run in EC2, and then there's no thought put into, well, what if you need to intervene?
[05:21:17 | 2:01:52 PM] What if you need the agent to be able to do something else?
[05:21:19 | 2:01:55 PM] What if you need to respond?
[05:21:20 | 2:01:56 PM] There's got to be this, like, very rich human interaction pattern.
[05:21:23 | 2:01:58 PM] And if your thought process is, I'm just going to have this thing run autonomously and try and do the whole thing to 100%, well, you're going to fail.
[05:21:32 | 2:02:07 PM] Yeah.
[05:21:32 | 2:02:07 PM] Because there's actually, like, so much depth that, like, a human needs to—even if it's just accountability.
[05:21:37 | 2:02:12 PM] Yeah.
[05:21:37 | 2:02:12 PM] Sometimes you need a human just to be able to hit the merge button.
[05:21:41 | 2:02:16 PM] Yeah.
[05:21:41 | 2:02:16 PM] And it's kind of funny that people are shooting for that particular target when that's one of the biggest benefits of agents, is their malleability and the ability to— Correct them.
[05:21:51 | 2:02:27 PM] I mean, I think it makes mid-task.
[05:21:53 | 2:02:29 PM] I think a big part of it is, and this is kind of the thing about cloud agents, I think a lot of people think, oh, a cloud agent is just something that we can just have an endpoint and then kick off a task.
[05:22:02 | 2:02:38 PM] But actually, the real cloud agent infrastructure is when it feels seamless.
[05:22:06 | 2:02:42 PM] It feels so seamless to be able to talk to it in the cloud as if it was running on your computer or on your phone or you were just talking to it, you know, over a voice call.
[05:22:14 | 2:02:50 PM] Yeah, and that's the level of depth and product area that most people just don't want to do because it's hard.
[05:22:19 | 2:02:55 PM] It's hard to build that.
[05:22:20 | 2:02:56 PM] Yeah, I think that's the second part that's difficult, which is, you know, from the technical side.
```
