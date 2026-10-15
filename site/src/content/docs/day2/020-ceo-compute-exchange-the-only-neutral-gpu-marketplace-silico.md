---
title: CEO, Compute Exchange
description: Day 2 · Oct 14. Carmen Li, CEO of both Compute Exchange and Silicon
  Data, argues for a neutral GPU exchange that owns no hardware, verifies both
  sides of every trade, and publishes the term-structure curves and residual
  values that now feed CME futures, NVIDIA's investor deck, and bank appraisals.
sidebar:
  order: 20
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

Carmen Li, CEO of both Compute Exchange and Silicon Data, argues for a neutral GPU exchange that owns no hardware, verifies both sides of every trade, and publishes the term-structure curves and residual values that now feed CME futures, NVIDIA's investor deck, and bank appraisals.

## TL;DR
- Compute Exchange calls itself the world's only neutral GPU marketplace. It owns no GPUs by design, so it has no conflict of interest with buyers or providers, and it never holds the customer relationship hostage.
- Scale today: over 100 verified providers, over 80,000 GPUs in supply, all regions ex-China, a 24-hour turnaround commitment, and over a billion RFQs per month ranging from one node to 20,000 nodes.
- The exchange trades reserved contracts (minimum one node, one month, up to three to five years), forward GPU contracts, token forwards with fixed SLAs and quantization, and a secondary server market where some used servers trade above MSRP.
- Verification separates it from brokers: existing capacity gets UID, inventory, and performance checks (NVIDIA DGX, Inferentia, MLPerf); forward capacity gets purchase-order and permit review; buyers get KYB/KYC.
- Silicon Data, "the Bloomberg for compute," supplies the indices CME will use to settle H100 neocloud on-demand and B200 futures within weeks. It is the only data provider cited in NVIDIA's September investor-day deck.
- The implied forward curve flipped from last year's downward slope into contango. Market consensus expects prices to rise over the next 36 months. On residual values, H100 prices went up and B200 trades above MSRP; A100 still beats five-year straight-line depreciation.

## Key lessons
1. Neutrality comes from owning nothing. Li compares an exchange owning GPUs to Nasdaq owning stocks: it would let her cherry-pick clients and hold relationships. Compute Exchange owns no GPUs, treats each transaction individually, and introduces buyers and providers directly on the platform.
2. Proliferation creates the exchange use case. With over 300 neocloud providers globally, calling 300 salespeople does not work when you need reserved compute within 48 hours. The exchange is the efficiency layer, the way NYSE and Nasdaq are for stocks: you may not get the best price, but you know liquidity, clearing, and settlement are there.
3. Know exactly what is traded. Reserved GPU contracts start at one node for one month and run to three, four, or five years. There is no on-demand. Token forwards are the newer instrument: a reserved bare-metal cluster plus a dedicated token deployment with guaranteed SLAs, fixed quantization and precision, aimed at on-demand token API price volatility. A secondary server market, born last year from people pinging Li with 20,000 idle H100s, now runs vibrant and sometimes trades above MSRP, like used cars during COVID.
4. Verify both sides of the trade. For existing reserved capacity, the exchange verifies UIDs, inventories, and performance using NVIDIA DGX, Inferentia, and MLPerf benchmarks. For forward capacity (say GPUs starting January 1st, 2027), it reviews purchase orders and permits. On the demand side, it runs KYB and KYC so providers know the client can pay at the scheduled rate.
5. The RFQ flow routes with transparency. A request for 3,300 B200s in US East from January 1st routes to the three providers with matching inventory. Each responds through the platform with pricing, specs, and SLAs, and existing servers get benchmarked. Price is not the only indicator; the buyer decides from full transparency. Overbuy protection: sell excess quantity or duration back to Compute Exchange.
6. The term structure turned contango. Last year's curve (the yellow line) sloped down: longer contracts meant cheaper per-GPU pricing. This year the whole curve shifted up, went contango, then flattened, meaning smaller long-term discounts and a market consensus, via implied forward rates computed with treasury-futures methodology, that prices rise over the next 36 months. Li's point: GPUs behave like every commodity with clear term-structure risk, which futures hedge well.
7. Hedge the financing tail with block trades. An operator with servers on the balance sheet, five to six years of financing obligations, and reserve contracts for only three years is exposed in years four through six. Swaps and block trading around the index, treated as a floating rate, hedge that tail, and some trades hedge even the first three years against reserve-contract default.
8. Residual values beat straight-line depreciation. Silicon Data discounts cash flows off its term structure (transparent assumptions on utilization and cost) to value A100, H100, and B200 servers globally. A100 depreciates but sits above the five-year straight-line accounting curve; H100 "is going bananas" with prices up; B200 went above MSRP. NVIDIA's September investor-day deck cited Silicon Data as its only data provider, and a few banks use it as the appraisal source for GPU servers on their balance sheets.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=13187&rel=0" title="CEO, Compute Exchange" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Carmen Li &middot; 12:20:23 PM ET–12:38:20 PM ET &middot; talk &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=13187s" rel="noopener">Watch on YouTube from 03:39:47</a></p>

## Notable quotes
- "[03:40:19 | 12:20:55 PM] Our company, Compute Exchange, the world's actually the only neutral marketplaces for GPU procurement."
- "[03:41:52 | 12:22:28 PM] But at the same time, when you need compute in the next 48 hours on reserved contracts, the easiest way is go to an exchange and then go to the verified compute resources, just like go to Nasdaq, NYSE to buy stocks, right?"
- "[03:52:28 | 12:33:04 PM] So I'm founder CEO for Silicon Data, which is the Bloomberg for compute."
- "[03:54:39 | 12:35:14 PM] I want to point this out, the term structure, is this shows you that GPU behaves just like every commodity, have a very clear term structure risks, which data futures are excellent hedging."

## Session narrative
Carmen Li opened with a self-deprecating mix-up, wishing the room a "Happy Thursday" before an audience member corrected her that it was Wednesday ("Oh, sorry, I'm clearly ahead of everybody here"). She introduced herself as CEO of both Compute Exchange and Silicon Data, and praised the previous Jump Trading session for covering the ecosystem, the financials, and the spot market traders and hedgers. That set up her thesis: the GPU market has proliferated past the point where bilateral deals work, and it needs an exchange.

The core argument ran on a stock-market analogy. You can call brokers and banks to buy Tesla, or transact through an app at NYSE or Nasdaq. The exchange does not promise the best price; it promises efficiency, liquidity, and settlement. Compute now has over 300 neoclouds, token factories, and API routers, so "do you want to call 300 salespeople?" Her answer is a neutral platform that owns no GPUs by design, verifies both sides, and covers reserved compute, forward contracts, token packages, and a secondary server market. She backed it with numbers: 100+ verified providers, 80,000+ GPUs in supply, all regions ex-China, 24-hour turnaround, a billion RFQs a month from one node to 20,000 nodes. Mid-talk she gave her own context: four or five years as an energy options market maker at DRW Trading in Chicago, where WTI (physically delivered) and Brent (cash-settled) taught her the distinction she is now importing. Compute Exchange, she said, is "creating the WTI" — everything in its forward markets is a precursor to physically delivered futures.

The live demo walked the platform: free signup, browsable inventory listings, provider chat, and an RFQ builder with filters for vendor type, GPU model, deployment type, GPU count, interconnect, CPU platform, storage, software stacks, and regions. She traced the routing mechanics — three providers matched for a 3,300-B200 US East request — and stressed that the exchange scores customers and providers, never holds relationships, and will hand out provider awards (APAC, Europe, US, most responsive) at an end-of-year celebration.

She closed on Silicon Data, "the Bloomberg for compute," which she founded and which supplies the indices CME will use to settle H100 neocloud on-demand rate and B200 futures within weeks. Charts showed last year's downward-sloping curve shifting up into contango and flattening, implied forward rates pointing to higher prices over 36 months, and residual values where A100 beats straight-line depreciation, H100 prices rose ("just like secondary cars during COVID time"), and B200 sits above MSRP. NVIDIA's September investor-day deck cited Silicon Data as its only data provider, and banks use it to appraise GPU servers on balance sheets. Out of time, she signed off with her contacts: email at compute exchange and Silicon Data (rendered "cli" by the transcriber), and Twitter handle Carmen LI.

## Speaker details
**Carmen Li** - CEO, Compute Exchange; founder and CEO, Silicon Data. She aims to make AI compute markets transparent, efficient, and financially sophisticated. She founded Silicon Data in 2024 for real-time GPU pricing indexes, benchmarks, and risk management tools, and became CEO of Compute Exchange, the neutral GPU procurement marketplace, in 2025. Earlier she held leadership roles in enterprise data alliances at Bloomberg LP and is a Harvard Business School alumna. In this session she added that she started her career as an energy options market maker at DRW Trading in Chicago for four or five years, and gave her Twitter handle as Carmen LI.

Links: [LinkedIn](https://www.linkedin.com/in/carmenrli)

## Full timestamped transcript
```
[03:39:47 | 12:20:23 PM] Happy Thursday.
[03:39:48 | 12:20:24 PM] I like how full this room is.
[03:39:52 | 12:20:28 PM] It's Wednesday.
[03:39:53 | 12:20:29 PM] It's Wednesday?
[03:39:54 | 12:20:30 PM] Oh, sorry, I'm clearly ahead of everybody here.
[03:39:59 | 12:20:35 PM] Happy Wednesday.
[03:40:00 | 12:20:35 PM] My name is
[03:40:00 | 12:20:36 PM] My name is Carmen Li.
[03:40:02 | 12:20:38 PM] I'm the CEO for Compute Exchange as well as Silicon Data.
[03:40:06 | 12:20:42 PM] I love the, you know, the previous session.
[03:40:09 | 12:20:44 PM] We talked a lot about the whole ecosystem, the financials and the spot market traders and the hedgers.
[03:40:17 | 12:20:52 PM] So what we're sitting in is really cool.
[03:40:19 | 12:20:55 PM] Our company, Compute Exchange, the world's actually the only neutral marketplaces for GPU procurement.
[03:40:27 | 12:21:02 PM] We started in 2024 when there were, I don't know, five neoclouds, three hyperscalers.
[03:40:34 | 12:21:10 PM] Essentially, we sort of foresee, interestingly enough, the proliferation of the GPU ecosystem.
[03:40:41 | 12:21:16 PM] So you think about stock market today, right?
[03:40:45 | 12:21:20 PM] When you try to buy and sell stocks, you can call brokers.
[03:40:48 | 12:21:23 PM] Obviously, you can call a few banks to say, Hey, I want to buy and sell X amount of Tesla or X SpaceX, right?
[03:40:56 | 12:21:31 PM] And you can do that, or you can transact through your app at NYSE or Nasdaq.
[03:41:02 | 12:21:37 PM] Doesn't mean you get the best price at NYSE or Nasdaq just because it's more efficient.
[03:41:07 | 12:21:42 PM] And you know the liquidity will be there.
[03:41:09 | 12:21:44 PM] You know the trade will be settled, it will be cleared.
[03:41:11 | 12:21:46 PM] You can get what you're looking for at the prices you're looking for in a very efficient manner, right?
[03:41:17 | 12:21:52 PM] For capital markets and resource allocation, it's about efficiency.
[03:41:22 | 12:21:57 PM] So in compute world, obviously now we have a huge proliferation, which is great.
[03:41:27 | 12:22:03 PM] We have over 300 neocloud providers globally.
[03:41:30 | 12:22:05 PM] We have a lot of token factories.
[03:41:32 | 12:22:08 PM] We have a lot of API routers, which is all good for end customers.
[03:41:38 | 12:22:13 PM] But at the same time, introduce a very interesting variable is how do we make transaction efficient, right?
[03:41:45 | 12:22:20 PM] Do you want to call 300 salespeople?
[03:41:47 | 12:22:22 PM] I mean, it's great to make friends, right?
[03:41:49 | 12:22:25 PM] You want to talk to them on a regular basis.
[03:41:51 | 12:22:27 PM] They know a lot of things.
[03:41:52 | 12:22:28 PM] But at the same time, when you need compute in the next 48 hours on reserved contracts, the easiest way is go to an exchange and then go to the verified compute resources, just like go to Nasdaq, NYSE to buy stocks, right?
[03:42:06 | 12:22:42 PM] So it's one of the things compute does extremely well is we have this neutral platform.
[03:42:13 | 12:22:48 PM] And by design, we do not own GPUs.
[03:42:17 | 12:22:52 PM] Once we start owning GPUs, that would translate to, just like Nasdaq owning stocks, translate to I have a conflict of interest with you and with the providers.
[03:42:26 | 12:23:01 PM] I could cherry-pick clients, right?
[03:42:29 | 12:23:04 PM] I could hold relationships, because Compute Exchange does not own anything by design.
[03:42:34 | 12:23:10 PM] We work really well with our providers globally.
[03:42:39 | 12:23:15 PM] And one very important thing is, we treat every single transaction individually, meaning we want to find you as a customer the most suited compute resources.
[03:42:52 | 12:23:28 PM] And we focus on reserved compute, forward contracts, as well as token packages.
[03:42:58 | 12:23:33 PM] So give you some high level.
[03:43:04 | 12:23:39 PM] So today, we have over 100 verified providers and over 80,000 GPU in supply.
[03:43:12 | 12:23:48 PM] We cover all regions, obviously ex-China.
[03:43:17 | 12:23:53 PM] Our commitment is 24-hour turnaround.
[03:43:20 | 12:23:56 PM] The difference between us and other so-called brokers is we do verify GPUs.
[03:43:26 | 12:24:01 PM] If it's existing reserved capacity, meaning things are actually in a functional stage, we'll verify the UIDs, the inventories, the performances.
[03:43:36 | 12:24:12 PM] We run the NVIDIA DGX, Inferentia, MLPerf, make sure you get resources you're promised to get.
[03:43:44 | 12:24:19 PM] So we're the middle sort of trusted platform.
[03:43:47 | 12:24:23 PM] So if it's forward capacity, let's say you need GPUs starting Jan 1st, 2027, we actually look through the purchase orders, all the permits they get, make sure, you know, we help you do the due diligence level.
[03:44:01 | 12:24:37 PM] And on the flip side, right, if you're a new cloud, your concern is there's a zillion clients looking for compute.
[03:44:07 | 12:24:43 PM] How do you know who has the ability to pay at a scheduled rate?
[03:44:12 | 12:24:47 PM] That's where Compute Exchange comes in.
[03:44:13 | 12:24:49 PM] We do KYB, KYC of the clients.
[03:44:16 | 12:24:52 PM] Obviously, you want to make sure your client is the client you think they who they are.
[03:44:21 | 12:24:56 PM] So we step in and do that kind of verification, just like any exchange would do.
[03:44:25 | 12:25:01 PM] And everything we do in the forward markets is actually the precursor to physically delivered futures.
[03:44:32 | 12:25:08 PM] I'll also give you some context who I am, what I do.
[03:44:35 | 12:25:10 PM] Sorry, I probably should say that.
[03:44:36 | 12:25:12 PM] I started my career as energy option market maker at DRW Trading in Chicago.
[03:44:42 | 12:25:17 PM] So I did that for four or five years.
[03:44:43 | 12:25:19 PM] So as an energy market maker, everything is very intuitive.
[03:44:47 | 12:25:23 PM] You have double TI, you have Brent, right?
[03:44:50 | 12:25:26 PM] WTI is a physically delivered commodity contracts.
[03:44:53 | 12:25:29 PM] Brent is cash settled.
[03:44:55 | 12:25:31 PM] They also have very distinct use cases.
[03:44:58 | 12:25:34 PM] If you're looking for hedging in the financial sense, right, your price volatility, your cost volatility, you go to Brent.
[03:45:06 | 12:25:42 PM] You're looking physically procure resources, use WTI.
[03:45:10 | 12:25:46 PM] So we're creating the WTI at Compute Exchange.
[03:45:17 | 12:25:53 PM] So the ways to buy compute through Compute Exchange right now, you can get reserve contracts, you can get forward contracts on both GPU and token.
[03:45:26 | 12:26:02 PM] Let me explain.
[03:45:27 | 12:26:03 PM] The forward contracts on GPU is very reasonable, right?
[03:45:30 | 12:26:06 PM] You want something starting in the future, nothing available right now.
[03:45:34 | 12:26:09 PM] So that's something we're doing on a regular basis.
[03:45:36 | 12:26:12 PM] Token forward, I think, can be a newer-ish concept.
[03:45:40 | 12:26:15 PM] Basically, you can think about as a dedicated deployment, on-premise deployment, right?
[03:45:46 | 12:26:21 PM] Similarly, you reserve a bare metal GPU clusters, you reserve a cluster, but you have dedicated token deployment on top of that.
[03:45:54 | 12:26:29 PM] So you get guaranteed SLAs, some of that particular models.
[03:45:59 | 12:26:35 PM] You get quantization, precision, everything is fixed for you for a period of time.
[03:46:04 | 12:26:40 PM] So we try to solve the on-demand token API volatility pricing problem here.
[03:46:12 | 12:26:47 PM] The third is we have a huge market, open hardware market.
[03:46:15 | 12:26:51 PM] It's really interesting.
[03:46:16 | 12:26:52 PM] The secondary server transactions started last year when people just pinging me, say, Hey Carmen, I have like 20,000 H100 sitting x data center.
[03:46:27 | 12:27:02 PM] Can you take it away from me?
[03:46:29 | 12:27:04 PM] So I was like, I don't know.
[03:46:30 | 12:27:06 PM] I can't store in my home, obviously.
[03:46:32 | 12:27:08 PM] So we started having the marketplace for secondary server sales.
[03:46:36 | 12:27:12 PM] This has been a very vibrant market for the past, I would say, 12 months.
[03:46:41 | 12:27:17 PM] We cover, again, all servers, even V200.
[03:46:45 | 12:27:20 PM] You see secondary transaction is happening, sometimes trading above MSRP, right?
[03:46:51 | 12:27:26 PM] Can't make sense.
[03:46:52 | 12:27:27 PM] Think about like COVID times when secondary cars trading above, right?
[03:46:55 | 12:27:31 PM] It's a brand new car price.
[03:46:58 | 12:27:33 PM] So we cover the three major layers of compute.
[03:47:04 | 12:27:39 PM] So reserved GPU, obviously, I think the previous speaker covered extremely well.
[03:47:09 | 12:27:45 PM] What's the terms?
[03:47:10 | 12:27:46 PM] The minimum we do is one node starting at one month, and then we can go all the way to three, four, five years, right?
[03:47:17 | 12:27:52 PM] It all depends on the availability, the providers, but you get a chance to state your preferences.
[03:47:24 | 12:27:59 PM] We don't do on-demand.
[03:47:27 | 12:28:03 PM] And another thing really works really well for compute exchanges, we do provide flexibility.
[03:47:33 | 12:28:09 PM] Let's say if you overcommit in terms of quantity or duration, you can sell it back to Compute Exchange, right?
[03:47:39 | 12:28:15 PM] So that's something we commit to do, so you don't have to worry too much if you overbought.
[03:47:44 | 12:28:20 PM] All right, segment live.
[03:47:49 | 12:28:25 PM] So I will actually do a quick demo later.
[03:47:52 | 12:28:27 PM] So we have a lot of listings, marketplace listings.
[03:47:54 | 12:28:30 PM] You can browse and chat with the providers and figure out the best delivery mechanisms.
[03:47:59 | 12:28:35 PM] You can also RFQ.
[03:48:01 | 12:28:36 PM] If you don't see anything you liked, we actually seeing over a billion RFQs every month.
[03:48:08 | 12:28:44 PM] Sounds big, but we all know full compute is not that huge, right?
[03:48:12 | 12:28:48 PM] But still, you see the activities, which I love, is we see a big range of RFQ requests, from one node all the way to 20,000 nodes.
[03:48:24 | 12:29:00 PM] So our clients are, you know, all different shapes and forms, different use cases, which is great.
[03:48:30 | 12:29:05 PM] Yeah, so you set timing, submit, and we route it.
[03:48:34 | 12:29:10 PM] So behind the scene, we have inventory tracking.
[03:48:39 | 12:29:15 PM] So with over 100 providers globally, we know who has what, roughly when, right, the forward capacity.
[03:48:44 | 12:29:20 PM] And then let's say you submit a request saying that, hey, I need 3,300 GPUs, B200, US East, starting Jan 1st.
[03:48:53 | 12:29:28 PM] We say, you know, we have three providers.
[03:48:55 | 12:29:31 PM] We think they have those.
[03:48:56 | 12:29:32 PM] We'll route it to the three.
[03:48:58 | 12:29:33 PM] They will respond to you through the platforms, and give you a rubric spec: pricing, specs, SLAs.
[03:49:05 | 12:29:41 PM] We benchmark them if it's existing servers, and then it's your choice, right?
[03:49:10 | 12:29:45 PM] Price is not the only indicator.
[03:49:12 | 12:29:47 PM] We believe give you as much transparency as we can, and then you will make a decision.
[03:49:19 | 12:29:54 PM] So everything in one place.
[03:49:20 | 12:29:56 PM] Again, it's rubrics pinging back.
[03:49:22 | 12:29:57 PM] You will see everything, and we introduce you to each other.
[03:49:25 | 12:30:00 PM] We never hold relationships, right?
[03:49:27 | 12:30:02 PM] We'll make sure you know who you're dealing with.
[03:49:30 | 12:30:06 PM] So buy tomorrow's compute, today's price.
[03:49:32 | 12:30:08 PM] So it's a physically procured platform.
[03:49:37 | 12:30:12 PM] This is the used refurbished GPUs.
[03:49:41 | 12:30:16 PM] So again, we have extremely exciting ecosystem participants in this secondary GPU sales.
[03:49:49 | 12:30:25 PM] We cover from full NIOs to B200, AMD, everything.
[03:49:57 | 12:30:32 PM] Evenjoy is.
[03:49:58 | 12:30:34 PM] Humanity is live, and we do connect with you through all different channels, Slack, email, chat, however you want to do this.
[03:50:06 | 12:30:42 PM] We track end to end.
[03:50:08 | 12:30:43 PM] We actually have a score in for everybody.
[03:50:11 | 12:30:46 PM] We score you, our customers.
[03:50:13 | 12:30:48 PM] We score our providers.
[03:50:15 | 12:30:50 PM] You can't see it quite yet, but, you know, it will be really fun.
[03:50:18 | 12:30:53 PM] We're gonna have end of year celebration for our providers.
[03:50:22 | 12:30:58 PM] We're gonna give out the best provider in APAC, best provider in Europe, best provider in US, most responsive providers.
[03:50:28 | 12:31:04 PM] So we're gonna have a lot of provider awards coming up.
[03:50:32 | 12:31:08 PM] Stay tuned.
[03:50:33 | 12:31:09 PM] Verify network.
[03:50:34 | 12:31:10 PM] So everything is, you know, verified, which is negotiates the exchange.
[03:50:42 | 12:31:17 PM] So we help in terms of be the middleman.
[03:50:45 | 12:31:20 PM] Sometimes things are not very clear.
[03:50:47 | 12:31:22 PM] We try to make sure people understand what's the best practices we have seen in the ecosystem.
[03:50:55 | 12:31:30 PM] I'm gonna quickly show you guys the platform.
[03:50:59 | 12:31:34 PM] I think that's more fun.
[03:51:05 | 12:31:41 PM] Here.
[03:51:10 | 12:31:46 PM] So this is the platform.
[03:51:12 | 12:31:47 PM] You can see a bunch of available inventories.
[03:51:14 | 12:31:49 PM] By the way, anyone can sign up.
[03:51:15 | 12:31:51 PM] It's completely free.
[03:51:16 | 12:31:52 PM] There's no downside using us.
[03:51:18 | 12:31:54 PM] You don't have to buy.
[03:51:19 | 12:31:55 PM] You can browse.
[03:51:20 | 12:31:56 PM] You can request for quote if you're interested in something we don't have.
[03:51:25 | 12:32:00 PM] You can start with your vendor type.
[03:51:27 | 12:32:02 PM] Again, we're agnostic of GPUs.
[03:51:29 | 12:32:05 PM] You can select your model.
[03:51:30 | 12:32:06 PM] You can select your deployment type.
[03:51:33 | 12:32:08 PM] You can select number of GPUs.
[03:51:35 | 12:32:11 PM] You can select your compute interconnect preferences, CPU platforms, storages, everything you need, and then some optional items with system software stacks, regions.
[03:51:46 | 12:32:22 PM] Obviously, we encourage you to select multiple regions if you're open to that.
[03:51:50 | 12:32:26 PM] You can add head nodes, tell us your use cases, anything you want, and then submit RFQ.
[03:51:57 | 12:32:32 PM] So these have been extremely robust, and we, you know, obviously we want to make sure if you have any feedback, let us know.
[03:52:05 | 12:32:41 PM] So I'm going to pause on Compute Change side.
[03:52:09 | 12:32:44 PM] I think I have some time left, which I'd love to show you some of the numbers we see in terms of term structure.
[03:52:17 | 12:32:52 PM] Also, context: I'm CEO for Compute Change.
[03:52:20 | 12:32:56 PM] I'm also CEO for another company called Silicon Data.
[03:52:23 | 12:32:59 PM] So I'm founder CEO for Silicon Data, which is the Bloomberg for compute.
[03:52:28 | 12:33:04 PM] So we provide indices for CME to settle their futures on, which will be happening in a few weeks.
[03:52:35 | 12:33:10 PM] I'm very excited about this.
[03:52:37 | 12:33:12 PM] So the ones going to start trading at CME will be the H100 Neo Cloud on-demand rate, as well as B200 prices.
[03:52:48 | 12:33:23 PM] What I want to show you is implied forward curve.
[03:52:51 | 12:33:27 PM] So as I said, Compute Change, we do a lot of forward capacities.
[03:52:55 | 12:33:31 PM] So essentially, a lot of longer-term contracts is going to be very critical.
[03:52:59 | 12:33:35 PM] You think about even in your cloud or your consumers.
[03:53:03 | 12:33:39 PM] Let me just make it larger.
[03:53:06 | 12:33:42 PM] So the yellow line was last year, right?
[03:53:09 | 12:33:45 PM] The x horizontal line is the duration, and the dollar amount is the Y-axis.
[03:53:16 | 12:33:51 PM] So last year was complete downward-sloping curve from the yellow line, right?
[03:53:20 | 12:33:56 PM] Meaning the longer-term contract you signed, the cheaper it was per GPU power.
[03:53:26 | 12:34:02 PM] And this year, starting early this year, the whole curve shifted up and became contango.
[03:53:31 | 12:34:07 PM] You see the red line, right?
[03:53:33 | 12:34:09 PM] So translate to people not getting enough discount for longer-term contract implies that people assume the price is going to rise down the line.
[03:53:44 | 12:34:19 PM] And now you see the price, the whole term keeps shifting up, but got flattened, right?
[03:53:49 | 12:34:24 PM] So meaning people will now either get penalized or get, you know, awarded by signing long-term contract.
[03:53:56 | 12:34:31 PM] This is reserve contract we observe.
[03:53:58 | 12:34:34 PM] And if you look at implied forward rates, this is the implied forward rates, right?
[03:54:03 | 12:34:38 PM] Because we don't have a future trading, so this is calculated based on our term structure, and we use similar methodology as treasury futures curve.
[03:54:12 | 12:34:48 PM] So you can see market consensus view is the price could go up in the future, next 36 months.
[03:54:20 | 12:34:55 PM] Again, market consensus doesn't mean it's right.
[03:54:24 | 12:35:00 PM] If you look at B200, again, last year was contango, and this year the whole curve shifted up.
[03:54:30 | 12:35:06 PM] Every single term is more expensive, and it's got flattened, right?
[03:54:35 | 12:35:10 PM] Implied forward rates, similarly, people think the price is going to go up.
[03:54:39 | 12:35:14 PM] I want to point this out, the term structure, is this shows you that GPU behaves just like every commodity, have a very clear term structure risks, which data futures are excellent hedging.
[03:54:53 | 12:35:29 PM] So we have seen a lot of block trading happening around the term structure.
[03:54:57 | 12:35:33 PM] So you think about this, right?
[03:54:59 | 12:35:34 PM] If you have servers on your balance sheet, you have financing obligation for the next five, six years, and you have reserve contracts for first three, then you're exposed essentially year four, five, or six, right?
[03:55:12 | 12:35:48 PM] So you want to hedge that risk out by entering, you know, a swap or block trading.
[03:55:18 | 12:35:54 PM] So those are things.
[03:55:19 | 12:35:55 PM] Or there are trades happening even for the first three years, which you have reserve contracts on.
[03:55:25 | 12:36:01 PM] What if the reserve contract defaulted, right?
[03:55:29 | 12:36:05 PM] What's your guarantee from some other players?
[03:55:33 | 12:36:09 PM] So we saw block trading happening around indices, treated as a floating rate.
[03:55:42 | 12:36:18 PM] This chart actually is being used differently by Nvidia team.
[03:55:51 | 12:36:27 PM] Nvidia's latest September investor day deck, they said us with only data provider actually cited in their deck.
[03:56:01 | 12:36:36 PM] This is very interesting.
[03:56:02 | 12:36:37 PM] Second data becomes the appraisal for a few banks when they have GPU servers on their balance sheet.
[03:56:09 | 12:36:44 PM] This, everything you see here, forward-looking view, right?
[03:56:12 | 12:36:48 PM] So discounted cash flow.
[03:56:15 | 12:36:50 PM] So as I said, we have a term structure.
[03:56:16 | 12:36:52 PM] So assume A100s, right?
[03:56:19 | 12:36:54 PM] A100s have been around for six years.
[03:56:21 | 12:36:56 PM] If today you sign a three-year long lease on A100s and you have a rate, if you discount the cash back to time zero, you have how much the asset is worth, right?
[03:56:33 | 12:37:08 PM] Obviously, there's a lot of things baked in: utilization rate, what is your cost, a bunch of assumptions which we're pretty transparent about.
[03:56:42 | 12:37:18 PM] We actually calculated the residual value for normalized value, obviously, across all A100, H100, B200 servers globally.
[03:56:51 | 12:37:26 PM] And then we'll compare that with the straight-line depreciation, which is everybody using the five-year depreciation.
[03:56:57 | 12:37:33 PM] What's interesting, you see A100, right?
[03:56:59 | 12:37:34 PM] Even though it is downward sloping, you know, means things are depreciating, but it's above the accounting depreciation curve, straight line.
[03:57:08 | 12:37:43 PM] And H100, obviously, is going bananas now.
[03:57:12 | 12:37:48 PM] The price actually went up.
[03:57:14 | 12:37:50 PM] My analogy would be just like secondary cars during COVID time.
[03:57:19 | 12:37:54 PM] The price went up, right?
[03:57:21 | 12:37:56 PM] And B200 obviously went above the MSRP at this point.
[03:57:26 | 12:38:01 PM] So this gives you some view about what's going on on the residual value side.
[03:57:30 | 12:38:06 PM] I think I'm out of time, but, you know, feel free to grab me, Carmen, CLI at computeengine.
[03:57:36 | 12:38:12 PM] com, CLI seconddata.
[03:57:38 | 12:38:13 PM] com.
[03:57:39 | 12:38:14 PM] Feel free to grab me on Twitter, Carmen Lee.
[03:57:41 | 12:38:17 PM] My Twitter handle is just Carmen LI.
[03:57:44 | 12:38:19 PM] That's it.
```
