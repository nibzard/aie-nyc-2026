---
title: "AI in Practice: An Inside Look at Apollo's Approach"
description: Day 2 · Oct 14. Rowspace co-founder Michael Manapat interviews Jack
  McDonald, COO of Apollo's Redding Ridge Capital, about turning AI from a
  nice-to-have into mission-critical infrastructure for structured credit and
  CLO management.
sidebar:
  order: 45
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

Rowspace co-founder Michael Manapat interviews Jack McDonald, COO of Apollo's Redding Ridge Capital, about turning AI from a nice-to-have into mission-critical infrastructure for structured credit and CLO management.

## TL;DR
- Fireside chat closing the final keynote block: Michael Manapat (Rowspace) interviews Jack McDonald (Principal at Apollo, COO of Redding Ridge Capital, a captive structured credit and CLO manager with about $50 billion in assets).
- Two concrete wins: CLO portfolio construction mock portfolios (200-400 credit names) went from 2-3 days in Excel to minutes at 80-90% completion; a weekly warehouse trade-rec report that took 2-3 people many hours now regenerates in about a minute with humans only QA-checking.
- Why not just Claude or ChatGPT: general LLMs run on general information, not the firm's own data. Redding's approach is to own the data and put a trusted platform on top of it.
- Trust came from embedding: the Rowspace team sits with the desk daily to find the "golden source of truth" when one data point can come from 20 different sources.
- Jack's read on the industry: institutional finance is "very early"; research aggregation is lower value-add today, and some junior-support functions will shrink over time.
- Close: advice to builders (spend boots-on-the-ground time inside extremely complex firms) plus a hiring plug for Rowspace and Apollo Technology.

## Key lessons
1. Quantify the before and after. A CLO portfolio manager built Excel mock portfolios of 200 to 400 single credit names from indenture documents; that took two to three days before Rowspace. Today the same portfolio comes together in minutes at 80-90% completion, and the PM spends judgment only on the last 10% "to make it theirs."
2. Automate the rec work, keep the QA. The weekly warehouse purchase trade rec meant literally going into bank accounts to check where trades settled, then emailing a recap to management. The same report now drops into Rowspace, regenerates in about a minute, and the team only checks it daily. It used to take many hours a week from two to three individuals.
3. General LLMs and proprietary data are different problems. Jack: Claude, ChatGPT, and the other LLMs are beneficial, but they work off general information and "none of your own actual data." They suit research and getting up to speed fast, not running the desk.
4. Trust is built by resolving sources, not by model choice. One piece of data can come from 20 different sources and only one is right. The Rowspace team sat with portfolio management and finance to learn the calculations, override wrong sources, and validate outputs against the trade order management system, performance systems, and Bloomberg pricing.
5. Culture set the adoption curve. Apollo saw itself as the leader in alternative asset management, kept a flat and open culture, and chose to rebuild in an AI-native way with a platform rather than point solutions. Michael notes this stance predates Claude Code, back when Cursor was still in the tab-completion era.
6. Finance is early, and the first value is mundane. In the asset management, investment banking, and bank institutional world, Jack still thinks "it's very early." The near-term value is routine-task automation that frees capacity; he expects less junior support over time for functions like research aggregation.
7. AI can be durable competitive advantage, not just commodity. Properly adapted and utilized, AI makes a firm more competitive because active investing comes down to process and information at your fingertips. That edge exists today in actively traded markets and is still evolving in private markets, where Apollo is trying to push ahead.
8. Build for nuance, on site. Things that look novel or strange inside a complex firm are usually there for a reason. Jack credits Rowspace being ahead of its roadmap to Michael's team sitting with his team "pretty much every single day" to learn the workflows.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=28190&rel=0" title="AI in Practice: An Inside Look at Apollo's Approach" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Michael Manapat, Jack McDonald &middot; 4:30:26 PM ET–4:49:52 PM ET &middot; fireside &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=28190s" rel="noopener">Watch on YouTube from 07:49:50</a></p>

## Notable quotes
- "So we've— Look to companies like Rho Space to partner with to come in and actually sit with our teams, work with us, and understand the actual calculations and information that we're looking to and what's actually the golden source of truth, and then continuing to enhance the AI engines to understand that and repeat that and just make us that much more efficient." [07:53:31 | 4:34:07 PM]
- "And then that allows these PMs to kind of build something to call it 80, 90% completion, and then kind of use their judgment and their thought to further refine that portfolio, that last 10%, to make it theirs." [07:55:15 | 4:35:51 PM]
- "Yeah, I would say Claude and the OpenAIs of the world and, like, the ChatGPTs, all the LLMs are very beneficial, but it's all general information that that's being worked off of and none of your own actual data." [07:57:43 | 4:38:19 PM]
- "I can't even predict if my team's going to use Codex or Claude Code next week, so I won't ask you about five years in the future." [08:05:51 | 4:46:27 PM]

## Session narrative
The MC voiceover opens the slot at [07:49:51]: "Now let's hear how AI is being put to work at Apollo." Michael Manapat introduces himself and Rowspace, an agentic platform that uses AI agents to do the work of data engineering for financial services partners. The agents reconcile fragmented data across systems so portfolio managers and traders can decide faster and more accurately. Jack McDonald then introduces himself: a principal at Apollo and COO of Redding Ridge Capital, a fully separate captive structured credit and CLO manager with about $50 billion in assets. He has been at Apollo since 2020, across the financial institutions group, the asset-backed group, and now Redding.

Michael frames the core question: there is a wide gap between AI as a nice-to-have and AI as mission critical. Jack describes the data environment that makes the gap real. Redding Ridge gets thousands of data points daily across thousand-name loan pools. The information is private and fragmented across documents, unlike public equities or public fixed income. He then gives two concrete examples. On portfolio construction, CLOs are test-specific and rules-based, with waterfalls buried in indenture documents. A PM used to spend two to three days building Excel mock portfolios of 200 to 400 credit names; Rowspace now pulls real-time data from doc libraries, trade and compliance systems, and pricing to build the portfolio in minutes. On warehouse purchase activity, a weekly trade rec done by hand across bank statements now regenerates in about a minute, and the team only QAs it.

The middle of the chat turns to trust. Michael asks the question many people ask: why not just plug this into Claude or ChatGPT? Jack answers that general LLMs work off general information, not the firm's own data, so they suit research rather than trading decisions. Confidence comes from owning the data and from the Rowspace team being "boots on the ground": Michael sits with the desk daily, because one data point may come from 20 sources and only one is right. On firm culture, Jack says Apollo prides itself on leading change, and Michael observes Apollo was "AI-pilled" before Claude Code existed, insisting on an AI-native platform rather than point solutions. A light moment follows when both men blank on the second half of a question and laugh it off.

The close widens to the industry. Jack calls institutional finance "very early" on AI, with today's value in quick research aggregation and routine-task automation, and predicts less junior support over time for some functions. Asked whether AI is a commodity or durable edge, he argues properly used AI is competitive advantage through process and accurate information, especially in private markets where that information layer is still evolving. Michael asks for a five-year prediction, then defuses it himself: he cannot even predict whether his team will use Codex or Claude Code next week. Jack shares what he wants instead: full confidence in the numbers sent to more than 400 global investors, and a workforce whose first thought is technology. His advice to builders is to spend time on the ground inside extremely complex firms. Michael ends with a shameless plug: Rowspace and Apollo Technology are both hiring people who want to apply AI to finance.

## Speaker details
**Michael Manapat** - Co-Founder and CEO, Rowspace. Rowspace is an AI platform that acts as an intelligence layer on top of financial firms' proprietary data, helping investment firms make faster decisions. Before Rowspace, Manapat was Head of Engineering at Notion and led applied machine learning at Stripe, including ML-based fraud detection, and he began his career as a software engineer at Google. He met Rowspace co-founder Yibo Ling in graduate school at MIT. Links: [LinkedIn](https://www.linkedin.com/in/mlmanapat/) | [Website](https://www.rowspace.ai/)

**Jack McDonald** - Principal at Apollo Global Management, COO of Redding Ridge. McDonald is a Principal at Apollo Global Management based in New York; he studied at Wofford College. At the session he described Redding Ridge Capital as Apollo's captive structured credit and CLO manager running about $50 billion in assets, where he has worked since 2020 after roles in Apollo's financial institutions group and asset-backed group. Links: [LinkedIn](https://www.linkedin.com/in/jackmcdonald96)

Note on the transcript: the ASR renders "Rowspace" variously as "Rope Space", "Rho Space", "RoSpace", and "Roastbase", and "rec" as "rec"/"wreck". The official spelling is Rowspace. "Clap, clap, clap" and "No shares" at [07:50:11]-[07:50:12] are applause noise, not speech.

## Full timestamped transcript
```
[07:49:51 | 4:30:26 PM] Now let's hear how AI is being put to work at Apollo.
[07:49:56 | 4:30:32 PM] Please help me welcome Michael Manapat, co-founder of Rowspace, and Jack McDonald, principal at Apollo Global Management and COO of Redding Ridge, for AI in practice: an inside look.
[07:50:09 | 4:30:45 PM] Inside look at Apollo's approach.
[07:50:11 | 4:30:47 PM] Clap, clap, clap.
[07:50:12 | 4:30:48 PM] No shares.
[07:50:12 | 4:30:48 PM] It's great to be here.
[07:50:31 | 4:31:07 PM] I'm Michael Manapat.
[07:50:32 | 4:31:08 PM] I'm a co-founder of Rope Space, and Rope Space is an agentic platform that uses AI to help financial services partners like Apollo deal with messy, fragmented data.
[07:50:45 | 4:31:20 PM] We essentially use agents to do the work of data engineering, to rec information or reconcile data from across a variety of systems so that portfolio managers, traders, and so forth can make decisions faster and more accurately.
[07:50:59 | 4:31:35 PM] I'm joined here with Jack McDonald, who is Chief Operating Officer of Redding Ridge, one of Apollo's credit units.
[07:51:05 | 4:31:41 PM] And maybe to kick it off, Jack, I'd love to hear a little bit about you and what your business does.
[07:51:11 | 4:31:46 PM] Yeah, thank you, Michael.
[07:51:13 | 4:31:48 PM] I'm Jack McDonald.
[07:51:14 | 4:31:49 PM] I am a principal at Apollo and COO of Redding Ridge Capital, which is our structured credit and CLO manager that is captive to Apollo.
[07:51:24 | 4:31:59 PM] We're a separate, fully separate entity operating company that manages about 50 billion in assets, and all across kind of the structured credit ecosystem, primarily CLOs.
[07:51:36 | 4:32:11 PM] I've been at Apollo since 2020, where various different hats throughout my time there across our financial institutions group, our asset-backed group, and now currently at Redding.
[07:51:48 | 4:32:24 PM] So yeah, happy to be here.
[07:51:51 | 4:32:26 PM] Awesome.
[07:51:52 | 4:32:27 PM] So something that we've noticed in talking to a huge number of financial firms is that there's a pretty wide gap between when AI is nice to have and when AI can actually become mission critical to a business.
[07:52:05 | 4:32:41 PM] And I think in Apollo's case, we're seeing that AI can really be transformative in how the firm operates.
[07:52:12 | 4:32:48 PM] I'd love to hear some examples from you on the kinds of work your part of the business was doing, what made it complex, and what you're seeing now with AI.
[07:52:22 | 4:32:58 PM] Yeah.
[07:52:23 | 4:32:59 PM] So at Apollo and specifically Redding Ridge, you know, we manage many different fund entities, investments.
[07:52:30 | 4:33:05 PM] We're getting thousands and thousands of data points on a, like, daily basis coming in across all of our investments.
[07:52:37 | 4:33:13 PM] We manage probably, you know, thousand-name loan pools and have credits across multiple different businesses that we're assessing on a daily basis and investing in.
[07:52:45 | 4:33:21 PM] CLO management is very active and it's traded in a broadly syndicated loan market.
[07:52:51 | 4:33:27 PM] So having all that information at your fingertips is very, very important.
[07:52:55 | 4:33:31 PM] So at Apollo, what we're doing, and at Redding specifically, is trying to enhance and ensure that all of our data and our data quality is accurate, consistent, and in a format that we can utilize and make us much more practical and thoughtful when we're making decisions in a much fast-paced environment.
[07:53:18 | 4:33:53 PM] So all of this information is privatized and is not very, what I'll say, widely in the marketplace like how public equities or public fixed income trades.
[07:53:28 | 4:34:04 PM] It's very fragmented in various documents.
[07:53:31 | 4:34:07 PM] So we've— Look to companies like Rho Space to partner with to come in and actually sit with our teams, work with us, and understand the actual calculations and information that we're looking to and what's actually the golden source of truth, and then continuing to enhance the AI engines to understand that and repeat that and just make us that much more efficient.
[07:53:54 | 4:34:30 PM] I think we have a bunch of engineers in the audience, and we've spoken a lot, just you and I, on fire drills that the firm does that used to take a team working a week, if not more.
[07:54:08 | 4:34:43 PM] Can you make it concrete for us and maybe walk us through an example of something that was painful, time-consuming, hard to do before that now you can do more easily with Rho Space and AI?
[07:54:19 | 4:34:54 PM] Yeah, happy to.
[07:54:20 | 4:34:55 PM] And I'll give kind of two examples that I like to look to.
[07:54:24 | 4:35:00 PM] The first being is just on the portfolio construction side.
[07:54:27 | 4:35:03 PM] So CLOs are very test-specific.
[07:54:31 | 4:35:06 PM] They're very rules-based.
[07:54:32 | 4:35:07 PM] They have like a very specific waterfall of where money flows.
[07:54:36 | 4:35:12 PM] So those all live in deep indenture documents and multiple different legal agreements that—so sitting from like a portfolio manager's perspective in portfolio construction, they are reviewing those documents, building Excel-based models, and building mock portfolios, with, call it anywhere from 200 to 400 single credit names, to create a portfolio, which would typically take a PM before kind of adopting Rho Space anywhere from two to three days in a manual Excel.
[07:55:06 | 4:35:41 PM] Today, we're able to kind of get the latest and greatest information that's real-time, create a portfolio that would take somebody days to now do it in the matter of minutes.
[07:55:15 | 4:35:51 PM] And then that allows these PMs to kind of build something to call it 80, 90% completion, and then kind of use their judgment and their thought to further refine that portfolio, that last 10%, to make it theirs.
[07:55:29 | 4:36:05 PM] That's one of the most tangible examples that's kind of pulling in various forms of data and, you know, information from across multiple different things, whether it's in doc libraries, you know, our trade and compliance systems, and real-time pricing and stuff like that.
[07:55:47 | 4:36:23 PM] The other one that I think I would look to is our— Kind of like warehouse purchase activity.
[07:55:53 | 4:36:29 PM] So how we run our business operates with having a bunch of bank financing, and we can go out and buy loans in the fixed income market at any given point.
[07:56:03 | 4:36:38 PM] Historically, we would kind of do a trade rec and trade activity on a weekly basis that would go around of, here's your sale purchase activity from the week, here's what we bought, here's what we sold.
[07:56:14 | 4:36:49 PM] And it was very manual.
[07:56:15 | 4:36:51 PM] We were going into various, like literally going into bank accounts to understand statements, where things actually settled.
[07:56:23 | 4:36:58 PM] And it was an individual team that was going and wrecking that out and then sending a reported email to the management team to say, here's the recap.
[07:56:31 | 4:37:07 PM] Today, what we're doing now is we've been able to take that exact same report, drop it into Rho space from a visualization perspective.
[07:56:40 | 4:37:15 PM] That report was then created and now repeatable in the span of a minute.
[07:56:45 | 4:37:20 PM] And now all of that is automated.
[07:56:47 | 4:37:23 PM] And then from our team's perspective, we are just QAing that and checking it each day to make sure that that looks right.
[07:56:53 | 4:37:29 PM] And now it's a much more rinse and routine type process, which historically has taken many hours of the week for two to three individuals on our team to actually wreck that out.
[07:57:03 | 4:37:38 PM] Yeah, I love both of those examples.
[07:57:06 | 4:37:41 PM] So, you know, you aren't just reading the output of a chatbot to be informed.
[07:57:10 | 4:37:46 PM] I think your team are making trading decisions, portfolio management decisions.
[07:57:14 | 4:37:50 PM] So accuracy and quality are high.
[07:57:17 | 4:37:52 PM] This is a two-part question.
[07:57:19 | 4:37:54 PM] I think a lot of people will ask us, or ask generally, why can't you just plug this stuff into Claude or ChatGPT and see what happens?
[07:57:27 | 4:38:03 PM] And for someone like you, how does your team get the confidence in a product like Rowspace or other AI tools to say, we are going to make business decisions on this, make trades, build portfolios, all of that?
[07:57:41 | 4:38:17 PM] How do you get to that level of trust?
[07:57:43 | 4:38:19 PM] Yeah, I would say Claude and the OpenAIs of the world and, like, the ChatGPTs, all the LLMs are very beneficial, but it's all general information that that's being worked off of and none of your own actual data.
[07:57:57 | 4:38:33 PM] So it's great for research or kind of building new ideas or getting up to speed on some type of product or investment quite quickly.
[07:58:07 | 4:38:43 PM] Where Rowspace is different and what we've kind of taken our approach to this, the AI build-out at Redding has been around owning our own data and having some type of platform and technology that sits on top of that that we know is to be true.
[07:58:23 | 4:38:58 PM] So the Rowspace team, which has been much different from what we've seen from other technology companies that we've worked with, is they're boots on the ground.
[07:58:32 | 4:39:07 PM] So, like, Michael sits with our team on a daily basis, learning and understanding our information flow, because for one piece of data that might come from 20 different sources and there's only one that's actually right.
[07:58:46 | 4:39:22 PM] So the Rowspace team is spending the time with our portfolio management team, with our finance teams, to understand the calculations, understand what data is actually correct, and override other sources of information and kind of aggregate that.
[07:59:00 | 4:39:35 PM] So to that end, we're able to kind of have trust in the system and You know, appreciate that.
[07:59:06 | 4:39:41 PM] Okay, we've had our team go in and validate that this information is correct and we can rely on it.
[07:59:11 | 4:39:47 PM] And it's coming from all of our, whether it's our trade order management system, whether it's from our performance system, whether it's from Bloomberg or any pricing index that we're pulling in, and know that it's accurate.
[07:59:22 | 4:39:58 PM] Whereas in a lot of other, you know, call it systems throughout even our own company, it's very fragmented and we have to kind of lift one piece of information from over here and bring it back over here and kind of pull that together manually.
[07:59:35 | 4:40:10 PM] Whereas Roastbase is now just automating that all for us.
[07:59:38 | 4:40:13 PM] Glad to hear that.
[07:59:40 | 4:40:16 PM] Need to talk about the firm at a higher level.
[07:59:43 | 4:40:19 PM] It seemed to me for a long time, even early last year before cloud code became a thing, when Cursor was still in the tab completion era, that Apollo was among the most AI-pilled of the kind of firms we spoke to.
[07:59:58 | 4:40:34 PM] And that was everything from
[08:00:00 | 4:40:35 PM] From the firm's view on how to invest in an AI world, but operationally, we began talking to you a long time ago, and you were in the we must rebuild the firm in an AI-native way, must have a platform, not point solutions.
[08:00:15 | 4:40:50 PM] So I'm just curious, where did that come from, and what is it about Apollo's culture that made you so AI-pilled even before things took off?
[08:00:25 | 4:41:00 PM] Yeah.
[08:00:25 | 4:41:01 PM] So Apollo has always prided itself in being kind of the leader of the alternative asset management space and the financial services industry broadly.
[08:00:36 | 4:41:12 PM] We pride ourselves in being very innovative and being at the forefront of all things change and what that looks like.
[08:00:42 | 4:41:18 PM] So I think from the onset and the way our management team approaches how we operate is always being up to skill and enhancing our team's capabilities and being able to be nimble and adapt to where the market's going.
[08:00:55 | 4:41:31 PM] I think we appreciated that the AI world is here, and we need to adapt and adopt it, not discredit it or not utilize it.
[08:01:05 | 4:41:40 PM] So we've been very forward and open-minded about adopting new technologies and bringing those into our workflows and how we can be more efficient and free up capacity for people to be more thoughtful and think and replace manual processes.
[08:01:17 | 4:41:53 PM] So I think at the core of its level, we've always been a very innovative firm that's very flat and open culture to be open to those types of change.
[08:01:28 | 4:42:03 PM] And then I'm blanking on the second part of your question.
[08:01:32 | 4:42:08 PM] Sorry.
[08:01:32 | 4:42:08 PM] Oh, I guess so am I.
[08:01:36 | 4:42:12 PM] Well, maybe we could keep on going.
[08:01:41 | 4:42:16 PM] So I think one thing that we've been thinking about is software engineering that has completely changed as a discipline.
[08:01:49 | 4:42:24 PM] Like, the world is completely different if you are a technology company like RoSpace, and maybe arguably law and customer service are almost there.
[08:02:00 | 4:42:35 PM] Where do you think finance is on the spectrum of AI is here, it's made a difference, or we haven't even, you know, got into the bottom of the first inning?
[08:02:09 | 4:42:44 PM] And what do you think is too broad question to answer?
[08:02:11 | 4:42:47 PM] Remember the second part.
[08:02:12 | 4:42:48 PM] If we're early on, what's necessary to really change the shape of finance with AI?
[08:02:17 | 4:42:52 PM] Yeah, I think that's a great question.
[08:02:19 | 4:42:54 PM] So I think finance broadly, these banks and large organizations are massive.
[08:02:23 | 4:42:59 PM] They have a lot of, you know, back-end, what I'll call middle back office support, and I think there's a lot of room to grow and enhance there.
[08:02:32 | 4:43:07 PM] I think probably, as you appreciate now of working with us, that we are extremely complicated and have a lot of complexity in everything that we do.
[08:02:40 | 4:43:16 PM] So it's not really straightforward.
[08:02:43 | 4:43:18 PM] I think in finance broadly, especially in, call it the asset management, investment banking, the bank institutional world, I still think it's very early.
[08:02:53 | 4:43:29 PM] I think there's some value for some of the, like, you know, model creation or getting up to speed on some company quite quickly and pulling and aggregating that type of research.
[08:03:05 | 4:43:41 PM] But I think that's— Lower value add, at least of where we stand today, and that's going to evolve.
[08:03:11 | 4:43:46 PM] I think, like, you know, there's probably a need where there's less junior support over time for certain functions like that.
[08:03:18 | 4:43:53 PM] But I think from where we are today and what we see from, at least my perspective at Redding, I think we're just trying to adopt this technology and make it, you know, as efficient as possible for, you know, routine tasks that frees up capacity for, you know, other projects because we kind of have, like, endless things to do and enhance at our company, and that's just giving us a lot more flexibility to adopt that.
[08:03:42 | 4:44:17 PM] Yeah, yeah.
[08:03:44 | 4:44:19 PM] So maybe, on that note, I'm curious: there's a world in which AI just becomes something that helps speed up tasks, saves you on OpEx, things like that.
[08:03:54 | 4:44:29 PM] And maybe in the same way, no given firm now has an advantage because they use Excel.
[08:03:59 | 4:44:35 PM] Everyone uses Excel, and it's just a productivity tool.
[08:04:03 | 4:44:38 PM] There's also a world in which AI actually materially makes a competitive advantage or helps reify Apollo's lead in structuring and creative deals and so forth.
[08:04:14 | 4:44:50 PM] Do you have a take on whether AI is going to be just a useful but a general commodity, or it's going to be something that can actually structurally make a business more competitive in a durable way?
[08:04:27 | 4:45:03 PM] I think if it's— Adapted and utilized properly, it will make you more competitive.
[08:04:33 | 4:45:09 PM] I think at its core, and especially around asset management and investing-type companies that are in the actively traded markets, like, it comes down to your process and the information at your fingertips.
[08:04:44 | 4:45:19 PM] So knowing that you have a strong process in place to go out and execute, and knowing your available liquidity or, you know, where things are pricing and what the value is at any given point is crucial.
[08:04:55 | 4:45:30 PM] So that just gives you, you know, more competitive edge.
[08:04:57 | 4:45:33 PM] And I think, like, that exists today in the, you know, actively traded markets, but in the private markets, it's evolving, which we've kind of been at the forefront of trying to move on the broader Apollo machine.
[08:05:10 | 4:45:46 PM] And I think having that will just turn into a competitive advantage over time, where firms will be able to get further ahead as they're, you know, having access to better information.
[08:05:23 | 4:45:58 PM] They know, their teams know that it's accurate and, like, stuff is not misaligned, because the last thing we want to do is, you know, do something or make a decision that was misinformed or had misinformation, and then that streamlines down the chain to both the enterprise and to the, you know, our investor base at the end of the day.
[08:05:41 | 4:46:16 PM] Yeah, that makes sense.
[08:05:43 | 4:46:18 PM] So I wanted to ask you what your prediction was for what Apollo would be like when we're talking five years, observing all the change.
[08:05:50 | 4:46:25 PM] I think that's unfair.
[08:05:51 | 4:46:27 PM] I can't even predict if my team's going to use Codex or Claude Code next week, so I won't ask you about five years in the future.
[08:05:58 | 4:46:34 PM] But I'm curious for you personally, what are you hoping to see in terms of your job, team, how AI use at Apollo evolves?
[08:06:07 | 4:46:43 PM] What conditions have to hold for the technology to actually be truly valuable?
[08:06:12 | 4:46:48 PM] How are you thinking about things over the next few months?
[08:06:16 | 4:46:52 PM] Yeah, I think it comes back to some of the stuff I touched on before of just, one, having just full confidence in any type of information that's flowing out at the end of the day to our investor base that's accurate, correct, and we don't have to spend hours manually checking that to make sure that that's validated, and having the confidence that we're sharing no issues or mistakes, because we do have just a wide investor base, over 400 global investors.
[08:06:45 | 4:47:21 PM] I would also say being much more tech-enabled in mindset.
[08:06:50 | 4:47:25 PM] I think our team has not lacked that to date, but it's kind of been an afterthought around the use of technology.
[08:06:56 | 4:47:32 PM] And I think the more that we can develop and enhance these tools that make routine tasks more efficient, it frees up capacity to add more thought or think more creatively around why does this process exist and how does it work today, and how can we actually enhance that, or should we change that, or should we bring in a new type of technology and adopt that going forward?
[08:07:19 | 4:47:55 PM] And our team has not lacked that to date, but it's kind of been a secondary thought where I think ideally our workforce is positioned to think about that more on a go-forward basis, and that's kind of their primary thought as they're tackling different problems, specifically at Redding Ridge day to day and kind of scaling our organization.
[08:07:38 | 4:48:14 PM] I think we have time for one more.
[08:07:40 | 4:48:16 PM] I think one of my learnings from working with you has just been how unimaginably complex and creative the work is, and how it takes a lot of effort, both human and AI, to get things to work.
[08:07:50 | 4:48:25 PM] A lot of people in this room who either want to work on the technology side of AI in finance, or perhaps finance side, is there anything that you would mention to them from a, here's something that you should know or keep in mind when trying to apply AI to domains like yours?
[08:08:05 | 4:48:40 PM] Yeah, I would say it comes down to we are extremely complex organizations, and it's not as straightforward.
[08:08:11 | 4:48:47 PM] And typically things might look a little bit novel or strange and out of place, but it's probably actually there for a reason or structured in a specific way.
[08:08:21 | 4:48:56 PM] I'm sure as you guys have come in, you appreciate that we're super nuanced and complicated.
[08:08:26 | 4:49:01 PM] So spending the time and really putting boots on the ground to sit with whatever team or front office professional that you're working to build a tool for or enhance is time well spent.
[08:08:38 | 4:49:14 PM] And I think the success and, you know, where we are today with the RoSpace product and kind of being ahead of our roadmap and expectations has been, you know, due to the fact that Michael and the team have spent ample time sitting on the ground with our team, like pretty much every single day and, you know, understanding our workflows, which I think is crucial.
[08:08:57 | 4:49:33 PM] Awesome.
[08:08:59 | 4:49:34 PM] Well, I guess last thing I'll say is that, shameless plug, both RoSpace and Apollo Technology are hiring people who want to apply AI to finance, so please reach out to either of us if you are interested.
[08:09:11 | 4:49:47 PM] Jack, thanks so much, and great chatting.
[08:09:15 | 4:49:51 PM] This is great.
[08:09:16 | 4:49:52 PM] Thank you, guys.
```
