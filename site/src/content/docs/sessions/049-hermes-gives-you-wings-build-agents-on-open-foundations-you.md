---
title: "Hermes gives you wings: Build on open foundations."
description: Day 1 · Oct 13. Nous Research CEO Dillon Rolnick argues that
  commoditized models leave frontier labs two ways to recoup their
  trillion-dollar bets — trap business users at the agent layer or "build God"
  and aim it at lucrative problems like finance — so companies should build
  agents on open foundations they own, such as the MIT-licens…
sidebar:
  order: 49
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 1 · Oct 13</span> <a href="/day1/">Day 1 digest</a> · <a href="/sessions-index/?day=1">More from this day</a></p>

Nous Research CEO Dillon Rolnick argues that commoditized models leave frontier labs two ways to recoup their trillion-dollar bets — trap business users at the agent layer or "build God" and aim it at lucrative problems like finance — so companies should build agents on open foundations they own, such as the MIT-licensed Hermes Agent.

<p class="official-reading"><a href="https://aie-nyc-2026-talks.swyxio.workers.dev/talks/dillon-rolnick-hermes">Read the official edition ↗</a><span> A detailed reading edition with a searchable transcript.</span></p>

## TL;DR
- Labs have spent hundreds of billions of dollars training models (trillions industry-wide), yet models are commoditizing: average token cost falls, total token spend surges, serving infrastructure cost stays flat, and model-layer margins narrow.
- Rolnick sees two ways labs recoup the investment: compete at a different layer of the stack (the agent layer, embedded in businesses where stickiness means margin) or "build God" faster than anyone else and point it at the most lucrative problems, starting with financial markets.
- If roughly 70% of a workforce's output is agentic in two to three years, whoever controls that layer holds asymmetric leverage — Rolnick warns an outside controller could organize it "into a strike."
- Proprietary software no longer moats: Nous pointed the Hermes agent at xAI's Grok bots interface and reproduced it in a weekend, shipping it open source. Tomorrow's moats are network effects, reputation, and reliability.
- Agents are like operating systems and frameworks, not chatbots: the new application combines determinism (code, data sources) with non-determinism (judgment, reasoning), so build it on foundations you own with models you can swap.
- Hermes Agent is claimed to be the most used and downloaded open source agent in the world; Nous wants it to become the standard and to sell support, safety, and scalability around it.

## Key lessons
1. Model-layer economics are compressing. Rolnick cites charts circulating on Twitter that week: the average cost of a token goes down while total spend on tokens surges, and the infrastructure cost of serving tokens stays flat — so margin that used to sit in a very performant model narrows as baseline intelligence becomes widely available. Practitioners already behave this way, switching among Astra, Fable, Opus, and Kimi "without too much regard for who's on the back end."
2. Labs have two obvious recoup strategies: move to a different layer of the stack (down to infrastructure or up to the user), or "build God, and you build God faster than anyone else, and you monetize God." In the God scenario, labs point the system at the most lucrative problems and solve them directly rather than selling model access at falling margins.
3. Finance is the stated target. Labs "think that markets are solvable problems" and see the financial industry as a tractable — "perhaps not even a very hard" — problem. Today they lack context and know-how, so they partner: they hire investment banking analysts and partner with some of the biggest firms on the globe, but Rolnick predicts they will "eventually go to the source" because that is where the money is.
4. Stickiness means margin, and businesses are the customer that matters. Consumers are "fickle and terrible customers," while businesses spend heavily on tokens for economically productive use cases. Getting ingrained in a business makes you hard to remove — and if 70% of workforce output (his conservative estimate for two to three years out) is organized by someone with adverse incentives, it "can be organized into a strike."
5. Foundation choices harden, so choose now. Vice presidents, executives, and engineers deciding what to build on will accumulate know-how, processes, and systems around that choice — it "sop[s] up the intelligence of the organization itself." His directive: "do not build on quicksand foundations. Build on open foundations. Build on Hermes Agent."
6. The proprietary-software moat is gone. The marginal cost to reproduce software has plummeted: after xAI released Grok bots, Nous reproduced the interface in a weekend with the Hermes agent and released it as an open-source feature. Anything can be reverse engineered by motivated open-source builders pointing agents at closed software.
7. Distillation is a framing war. Models can fairly easily teach another model to be nearly as smart, and advantage lies in data quality and scale rather than architecture — so labs labeled the teaching process "distillation," labeled illicit distillation "theft," and trained models to refuse to assist training other models, calling that "safety." Rolnick argues it cannot be called copyright infringement, implicitly noting the irony for labs that trained on "every living human being's written or creative work."
8. Agents are operating systems, and you should not try to be an intelligence company. Echoing the earlier financial-firm talk, the new application combines data sources, routine code, people's opinions, and judgment — determinism plus non-determinism. Build towers of functionality on primitives you own, swap models in and out, and when the state of the art shifts, inherit it rather than rebuild and maintain it. Hermes Agent can be run however and wherever you want and modified as you see fit — "if you're not having fun anymore, you can take your ball and you can go home."

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/akEqiXFo3GM?start=28071&rel=0" title="Hermes gives you wings: Build on open foundations." loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Dillon Rolnick &middot; 4:35:43 PM ET–4:51:18 PM ET &middot; keynote &middot; <a href="https://www.youtube.com/watch?v=akEqiXFo3GM&amp;t=28071s" rel="noopener">Watch on YouTube from 07:47:51</a></p>

## Notable quotes
- "Or two, you build God, and you build God faster than anyone else, and you monetize God." [07:50:40 | 4:40:32 PM]
- "I implore you, do not build on quicksand foundations." [07:54:43 | 4:42:39 PM]
- "Skynet was, after all, a closed source company." [07:56:18 | 4:44:09 PM]
- "The moats of yesterday were in proprietary IP. The moats of tomorrow are in network effects, reputation, and reliability." [07:57:24 | 4:45:16 PM] and [07:57:27 | 4:45:19 PM]
- "Hermes Agent today is the most used and downloaded open source agent in the world." [08:02:18 | 4:50:09 PM]

## Session narrative
The MC introduced the closing keynote of day one as "our final talk of the day," welcoming "the CEO of Noose Research, Dylan Rolnick" (the automatic transcription's spelling; the official agenda lists Dillon Rolnick of Nous Research). A schedule quirk is worth recording: the published agenda placed this keynote at 5:06pm-5:24pm with a note that it starts after the stream end, but the day ran early and the talk was delivered live around 4:35 PM ET on the main-stage livestream. After a slow start on stage ("Oh, there we go"), Rolnick framed the talk around one question: how does a lab make back an enormous infrastructure and research bet when individual labs have spent hundreds of billions and the industry perhaps trillions?

The core argument was economic. Models have begun to commoditize — practitioners switch among Astra, Fable, Opus, and Kimi without regard for the back end, and token-price charts show cost per token falling while total spend surges and serving costs stay flat. With model-layer margin narrowing, Rolnick laid out two recoup strategies: compete at a different layer of the stack, or "build God" and monetize it. The agent layer is where the fight has shifted, because stickiness means margin and businesses — unlike fickle consumers — spend real money on tokens for productive use cases. He sketched the threat starkly: if 70% of a workforce's output is agentic in two to three years and organized by someone with adverse incentives, it can be "organized into a strike." The God strategy, meanwhile, points frontier systems at the most lucrative problems; labs view markets as solvable and finance as tractable, so they hire investment-banking analysts and partner with the biggest firms — and will eventually "go to the source." The stakes, he said, are "meaningful deca percentages of the Earth's economy," which is why he told the room: do not build on quicksand foundations; build on open foundations; build on Hermes Agent.

Then came the pivot: "So why am I standing here?" Nous Research, he said, was built "primarily for moral and philosophical reasons" to combat a trend toward centralized control of the world's most important technology — built by "nerds who love science fiction," with the punchline that "Skynet was, after all, a closed source company." Technically, he argued, there is no longer a strong moat in proprietary software: when xAI shipped Grok bots, Nous pointed the Hermes agent at it and reproduced the interface in a weekend, releasing it open source. He tied this to the model layer, where models teach other models to be nearly as smart and advantage sits in data quality and scale — which is why, he argued, labs renamed teaching "distillation," illicit distillation "theft," and refusals to help train other models "safety."

The close reframed agents themselves. Agents are like operating systems and frameworks, not chatbots; treating yours as a personal assistant leaves you "on the surface." Referencing an earlier presentation about a financial firm's investment decisions, he described the new application as a combination of determinism and non-determinism — data sources, routine code, people's opinions, judgment — and urged companies to build on foundations they own, swap models freely, and not spend their lives being intelligence companies: "when the state of the art changes... you should inherit that, not rebuild it." The pitch landed on Hermes Agent: runnable however and wherever you want, modifiable, exitable ("take your ball and go home"), with the moat in reputation rather than entrapment. Claiming Hermes Agent is the most used and downloaded open source agent in the world — orders of magnitude ahead of closed competitors — he said he wants to build a standard, with open-source gravity carrying users downhill to Nous, which sells support, safety, and scalability. His send-off: somebody is going to earn back the trillion-dollar investments — "Make sure that it's you. Make sure that you are in control of your own destiny. You can have your cake and eat it too."

## Speaker details
**Dillon Rolnick** - CEO, Nous Research. Rolnick leads the New York-based open-source AI lab behind the Hermes model family and the MIT-licensed Hermes agent, and came to Nous from a quantitative trading background after studying at Vanderbilt University. He led the company's $90 million Series B at a $1.5 billion valuation announced in October 2026, writing that Nous is "building for everyone to own their intelligence, and we're doing it in the open." No public LinkedIn, Twitter, or website links were present in the speaker record. The session transcript's automatic spelling ("Dylan Rolnick," "Noose Research") differs from the official agenda name; the official spelling is used throughout this record. (Talk self-introduction: "I'm Dylan Rolnick. I'm the CEO of Noose Research, and today we're going to talk about building on foundations and platforms that you can actually own.")

## Full timestamped transcript
```
[07:47:50 | 4:35:42 PM] Have a good one.
[07:47:51 | 4:35:43 PM] Ladies and gentlemen, for our final talk of the day, please welcome to the stage the CEO of Noose Research, Dylan Rolnick.
[07:48:21 | 4:36:12 PM] Hey, everyone.
[07:48:33 | 4:36:24 PM] I'm Dylan Rolnick.
[07:48:34 | 4:36:25 PM] I'm the CEO of Noose Research, and today we're going to talk about building on foundations and platforms that you can actually own.
[07:48:43 | 4:36:35 PM] Oh, there we go.
[07:48:47 | 4:36:39 PM] All right.
[07:48:49 | 4:36:41 PM] How do you make back a cent-to-billion-dollar infrastructure and research bet?
[07:48:59 | 4:36:50 PM] Labs individually have spent hundreds of billions of dollars training and building ever more sophisticated intelligent systems, and the industry as a whole has spent trillions, perhaps.
[07:49:17 | 4:37:09 PM] The problem is, though, that the models have begun to commoditize.
[07:49:23 | 4:37:15 PM] You guys in this room, who are hopefully practitioners of AI, have known this intuitively.
[07:49:29 | 4:37:20 PM] You switch among models readily.
[07:49:31 | 4:37:22 PM] You switch between Astra, Fable, Opus, Kimi, whatever it may be.
[07:49:36 | 4:37:27 PM] Without too much regard for who's on the back end or what it may be, you want to try the new model.
[07:49:42 | 4:37:34 PM] We've seen this in data too.
[07:49:44 | 4:37:35 PM] There was some charts going around Twitter this week showing the average cost of a token going down while the total spent on tokens surges, and the infrastructure costs associated with serving those tokens has stayed flat, meaning
[07:50:01 | 4:37:52 PM] Where there used to be margin in a very, very performant model, it's now starting to narrow as we see competition and, you know, a baseline level of intelligence be available to people.
[07:50:14 | 4:38:06 PM] Okay, so if the models are starting to commoditize and you've spent hundreds of billions, trillions of dollars on them, you need to make that back, and you need to find a different way to do it.
[07:50:28 | 4:38:19 PM] And in my opinion, there are two pretty obvious ways to do it.
[07:50:33 | 4:38:24 PM] One, you find a different layer of the stack to compete at.
[07:50:36 | 4:38:27 PM] You go down to the infrastructure or you go up to the user.
[07:50:40 | 4:38:32 PM] Or two, you build God, and you build God faster than anyone else, and you monetize God.
[07:50:48 | 4:38:40 PM] If you're in front of the user, you have an opportunity for stickiness.
[07:50:52 | 4:38:43 PM] Stickiness means margin.
[07:50:54 | 4:38:45 PM] This is why the fight has largely shifted to the agent layer lately.
[07:50:57 | 4:38:49 PM] We started talking, I heard somebody previously talk about 5% of, you know, a workforce engaging in agents.
[07:51:04 | 4:38:55 PM] This is becoming more and more the zeitgeist of where the AI battle is taking place.
[07:51:10 | 4:39:01 PM] Consumers, though, are fickle and they're terrible customers.
[07:51:15 | 4:39:07 PM] Businesses, on the other hand, spend tons of money on tokens, and they have economically productive use cases for those tokens.
[07:51:24 | 4:39:15 PM] So if you're going to be competing at the user layer and you're going to be bringing this fight somewhere else, you're going to be bringing it to businesses.
[07:51:33 | 4:39:24 PM] The best thing to do is to get ingrained in a business because when you're in a business, it's hard to take you out, right?
[07:51:38 | 4:39:30 PM] And if you think about your business two, three years into the future, how much of your workforce, as measured by its output, is agentic, 70% conservatively, probably more.
[07:51:55 | 4:39:46 PM] And if 70% of your workforce is organized by somebody else who may or may not have adverse incentives to you, they can be organized into a strike.
[07:52:04 | 4:39:55 PM] And so what you would do if you had to make back a trillion-dollar investment was you would embed, you would use your asymmetric leverage, and you would change the rules of the game.
[07:52:16 | 4:40:07 PM] Or, like I said, you would build God.
[07:52:21 | 4:40:13 PM] If you succeed at building God, what you would do is you would point God at the most lucrative problems in the world.
[07:52:31 | 4:40:23 PM] The best shot at earning it back is not to sell it for an ever-decreasing margin to others to solve these hard and lucrative problems.
[07:52:38 | 4:40:30 PM] The best shot is to solve them yourselves.
[07:52:40 | 4:40:32 PM] Labs think that markets are solvable problems, and that's exactly how they view the financial industry, as a problem to be solved, and a tractable problem at that, perhaps not even a very hard one.
[07:53:08 | 4:40:59 PM] Right now, though, they know, at least the smart ones know, that they don't have enough context, know-how, or experience in the financial industry to be able to do that themselves.
[07:53:17 | 4:41:09 PM] So they will partner.
[07:53:19 | 4:41:10 PM] They hire investment banking analysts.
[07:53:20 | 4:41:12 PM] They partner with some of the biggest firms on the globe, and they start to build their foundation here.
[07:53:30 | 4:41:22 PM] My belief is that they will eventually go to the source because, like I said, that's where the money is, and we're trying to make back a trillion dollars.
[07:53:38 | 4:41:30 PM] And so you might say, this is nothing new.
[07:53:42 | 4:41:34 PM] We have always been trying to trap people into these games and change the margin.
[07:53:46 | 4:41:37 PM] And once we have you and you're stuck, we are able to raise the prices.
[07:53:50 | 4:41:41 PM] But the difference is that the stakes are much higher.
[07:53:52 | 4:41:44 PM] We're talking about meaningful deca percentages of the Earth's economy.
[07:53:59 | 4:41:51 PM] And you in this room need AI.
[07:54:06 | 4:41:57 PM] Everybody has seen what they can do, what these models can do, what agentic systems can do, and there's no going back.
[07:54:13 | 4:42:04 PM] People in this room who are making decisions, vice presidents and executives and engineers about what they're building on, are going to have to make decisions now about where they grow roots around these tools and processes that will affect the future of these businesses.
[07:54:32 | 4:42:24 PM] And whatever you pick, you'll start to harden.
[07:54:36 | 4:42:27 PM] You'll gain know-how.
[07:54:37 | 4:42:28 PM] It'll sop up the intelligence of the organization itself.
[07:54:40 | 4:42:32 PM] You will start to build processes and systems around it.
[07:54:43 | 4:42:34 PM] I implore you, do not build on quicksand foundations.
[07:54:48 | 4:42:39 PM] Build on open foundations.
[07:54:51 | 4:42:42 PM] Build on Hermes Agent.
[07:54:55 | 4:42:46 PM] So I just spent a fair amount of time convincing you, hopefully, that the highest expected value move in AI right now is to either trap you and jack up the prices or replace you directly.
[07:55:09 | 4:43:00 PM] So why am I standing here?
[07:55:13 | 4:43:05 PM] We view the world very differently.
[07:55:16 | 4:43:07 PM] And the first thing I hope you guys will learn about me and about Noose Research is that we built this company primarily for moral and philosophical reasons.
[07:55:26 | 4:43:18 PM] And a lot of times in business, morality and incentives don't always align.
[07:55:30 | 4:43:22 PM] And when that happens, it's probably easiest to change your morality.
[07:55:35 | 4:43:26 PM] But we think the world is changing and we think it's different.
[07:55:37 | 4:43:29 PM] And for that reason, we think that the best course of action is one in which we are both aligned.
[07:55:46 | 4:43:38 PM] When we built the company originally, we built it to combat a seemingly inexorable trend towards centralization and centralized control of perhaps the world's most important technology and most important invention.
[07:55:58 | 4:43:50 PM] Nus research was built by and staffed by nerds, nerds who love science fiction.
[07:56:04 | 4:43:55 PM] And we've all seen what happens when a centralized entity gets control of godlike intelligence and uses that for exploitation.
[07:56:12 | 4:44:04 PM] Skynet was, after all, a closed source company.
[07:56:18 | 4:44:09 PM] The next thing that you need to know is that there's no longer really a strong moat in proprietary software.
[07:56:25 | 4:44:16 PM] The marginal cost to reproduce a piece of software has plummeted.
[07:56:30 | 4:44:21 PM] A few months ago, xAI released Grok bots, and we saw that and we thought, wow, that's an intuitive user interface.
[07:56:37 | 4:44:28 PM] That's really nice.
[07:56:39 | 4:44:30 PM] So we pointed Hermes agent at it and we reproduced it in a weekend and released it as a feature within Hermes agent, open source, of course.
[07:56:48 | 4:44:40 PM] And the game has changed.
[07:56:50 | 4:44:42 PM] It used to be that software was difficult to produce and it took coordinated teams of engineers long hours to pilfer open source and take libraries and combine them together into proprietary pieces of software and then sell that software as SaaS.
[07:57:06 | 4:44:57 PM] But now the opposite is true.
[07:57:08 | 4:45:00 PM] Anything can be reverse engineered, and there are many, many motivated open source builders pointing their agents at these different.
[07:57:16 | 4:45:07 PM] Softwares.
[07:57:18 | 4:45:09 PM] If the closed competitors do manage to make interesting features, open source will have it not long afterwards.
[07:57:24 | 4:45:16 PM] The moats of yesterday were in proprietary IP.
[07:57:27 | 4:45:19 PM] The moats of tomorrow are in network effects, reputation, and reliability.
[07:57:34 | 4:45:25 PM] What's funny is that in a lot of ways, the labs have always seemed to underestimate their own tools, or perhaps they are underestimating the users of those tools and their genius and their motivation.
[07:57:46 | 4:45:38 PM] This happened and is happening on the model side, and we'll talk about why that's important.
[07:57:52 | 4:45:43 PM] But it turns out that models can fairly easily teach another model to be, you know, nearly as smart as the original model.
[07:58:01 | 4:45:53 PM] And the advantage in a model is very rarely in the architecture or some novel system that was created in a proprietary way for that model.
[07:58:10 | 4:46:01 PM] In fact, it's usually in the quality of the data and the scale.
[07:58:16 | 4:46:07 PM] And, sorry.
[07:58:21 | 4:46:13 PM] The model companies started to realize that the, you know, scale was catching up and that you could create these things with supplementary quality data by teaching one model from another.
[07:58:51 | 4:46:43 PM] So they labeled the teaching process distillation, and they labeled illicit distillation theft.
[07:58:58 | 4:46:50 PM] You cannot call that copyright infringement because copyright infringement would imply that you somehow took every living human being's written or creative work and then trained on top of it.
[07:59:09 | 4:47:01 PM] They also labeled the process of.
[07:59:13 | 4:47:05 PM] They also trained the models to not assist in the process of training other models, and they labeled that safety.
[07:59:27 | 4:47:19 PM] The next thing that you need to know about agents and about the new world is that agents are like operating systems, and they're like frameworks, and they're a lot more like those than they are like chatbots.
[07:59:39 | 4:47:31 PM] And so if you continue to think about your agent as merely a personal assistant, you will forever live on the surface of what it means to engage in agentic systems.
[07:59:49 | 4:47:40 PM] And so what do I mean by that?
[07:59:52 | 4:47:44 PM] If you guys were here a little bit earlier, there was a presentation about a financial firm and
[08:00:06 | 4:47:58 PM] firm and how they think about AI and these different inputs that go into ultimately what becomes an investment decision.
[08:00:11 | 4:48:02 PM] Agents are really at their heart a system that combines determinism and non-determinism.
[08:00:18 | 4:48:09 PM] If you remember from that talk, there are data sources, there are routine code, there are people's opinions, and there's judgment.
[08:00:25 | 4:48:16 PM] And all these things come together to create what is the new application.
[08:00:25 | 4:48:17 PM] The new application is no longer necessary that it is deterministic and solid and cold hard code.
[08:00:30 | 4:48:21 PM] It can inject intelligence, reasoning, judgment, all of these things together to combine to create the new application.
[08:00:39 | 4:48:30 PM] And so, as you at your company think about building these new applications, you should be building these systems on foundations that you own.
[08:00:52 | 4:48:43 PM] You should be able to swap in and out the models that you want.
[08:00:54 | 4:48:45 PM] You should be creating ever more sophisticated towers of functionality on top of these core primitives of determinism, non-determinism, code, data sources, judgment, reasoning, intellect.
[08:01:12 | 4:49:03 PM] But you should not be spending your entire lives being intelligence companies.
[08:01:19 | 4:49:10 PM] What has made you successful this far?
[08:01:21 | 4:49:12 PM] Most of you are most likely not agent companies.
[08:01:23 | 4:49:14 PM] Most of you are not likely AI companies.
[08:01:26 | 4:49:17 PM] You should be focused on the things that you do well.
[08:01:29 | 4:49:20 PM] And when the state of the art changes and it evolves and what it means to be an agentic system starts to shift, you should inherit that, not rebuild it and maintain it.
[08:01:39 | 4:49:30 PM] Remember, these are tools that should make you better.
[08:01:41 | 4:49:32 PM] They are not drop-ins to replace you.
[08:01:43 | 4:49:34 PM] Do you know how much energy it takes to create a human?
[08:01:49 | 4:49:40 PM] And the beauty of the Hermes agent proposition is that you can run it however you want, wherever you want.
[08:01:55 | 4:49:47 PM] Modify it as you see fit.
[08:01:57 | 4:49:48 PM] If you're not having fun anymore, you can take your ball and you can go home.
[08:02:01 | 4:49:52 PM] The moat has changed.
[08:02:03 | 4:49:54 PM] The moat is no longer entrapping you.
[08:02:05 | 4:49:56 PM] The moat is in reputation.
[08:02:08 | 4:49:59 PM] And that's what Hermes Agent offers you.
[08:02:11 | 4:50:02 PM] And so, what do I want out of all of this?
[08:02:15 | 4:50:06 PM] Well, I want to build a standard.
[08:02:18 | 4:50:09 PM] Hermes Agent today is the most used and downloaded open source agent in the world.
[08:02:23 | 4:50:14 PM] It is orders of magnitude more downloaded than some of its closed competitors.
[08:02:28 | 4:50:19 PM] And I want everybody to be able to build on these open foundations.
[08:02:33 | 4:50:24 PM] Because as long as one of us, us, is willing to open source these tools and these agentic systems, water will continue to flow downhill.
[08:02:42 | 4:50:33 PM] And I want to be downhill so that I can work with you to provide support, safety, scalability to go along with the world's best open agent.
[08:02:50 | 4:50:41 PM] I've seen where this goes, and we've seen where the moats will lie: network effects, reliability, and reputation.
[08:02:59 | 4:50:50 PM] People are going to continue to solve hard problems with agentic systems.
[08:03:04 | 4:50:55 PM] People are going to solve lucrative problems with agentic systems.
[08:03:08 | 4:50:59 PM] Somebody is going to earn back the trillion-dollar investments that we've made.
[08:03:12 | 4:51:03 PM] Make sure that it's you.
[08:03:14 | 4:51:05 PM] Make sure that you are in control of your own destiny.
[08:03:17 | 4:51:08 PM] You can have your cake and eat it too.
[08:03:19 | 4:51:10 PM] You can have state-of-the-art features and reliability without sacrificing your autonomy.
[08:03:23 | 4:51:14 PM] Build on something you own.
[08:03:25 | 4:51:16 PM] Build with us.
[08:03:26 | 4:51:17 PM] Thank you.
```
