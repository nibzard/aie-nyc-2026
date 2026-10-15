---
session_id: "014"
title: "Not All GPU's Are Deployed The Same"
agenda_title: "Not All GPU's Are Deployed The Same -- Oliver Kennon (SemiAnalysis)"
speakers: ["Oliver Kennon"]
start_wall: "11:05:43 AM ET"
end_wall: "11:23:11 AM ET"
video_start: "02:25:07"
video_end: "02:42:35"
video_url: "https://www.youtube.com/watch?v=jiUC6IUMdvc&t=8707s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: [gpu-economics, compute-markets, cost-curves, inference-performance, clustermax, compute-futures, semianalysis]
confidence: "high"
---

# Not All GPU's Are Deployed The Same

> A SemiAnalysis research analyst argues that identical GPUs deliver very different amounts of useful intelligence depending on who operates them, so compute buyers, benchmarks, and futures markets must grade the operator, not just the chip.

## TL;DR
- The core claim: "A GPU falls to the level of the operator." Buying hardware buys potential. Operating capability decides how much useful work the hardware delivers.
- Measured example: two B200 serving stacks ran the same model at the same P50 target of 100 output tokens per second. At P90, one stack produced about 200 generated tokens per second and the other about 300. Same chip, roughly 50% more output.
- GPU hours measure input, not output. Price per acceptable token is today's practical proxy. The North Star metric is price per successfully completed task at required quality.
- ClusterMax 3.0 from SemiAnalysis rates operating capability on a couple hundred managed GPU clusters across provisioning, reliability, monitoring, and security. Ratings apply to managed clusters, not bare metal.
- Cost-curve position is relative to competitors. Scarcity can hide the differences for the "two to three years" of tight supply, so build the cost advantage while capital is available.
- For compute futures, rating the operator is an essential building block. A rental price hedge offsets rental price changes only. It does not fix a failed deployment.

## Key lessons
1. Separate input from output. GPU hours are an input; intelligence is the output. The eventual North Star metric is "price per successfully completed task at the required quality." Today, price per token is the practical proxy for comparable workloads, and it sits much closer to delivered output than the often quoted GPU dollar-per-hour price, which is a cost.
2. The operator is a multiplier on hardware and electricity. In the public InferenceX calculator example (semianalysis.com), both deployments used B200 GPUs serving the same model with roughly 8,000 input tokens and 1,000 output tokens, at a P50 target of 100 output tokens per second per user. At P90, one serving stack reached about 200 generated tokens per second and the other about 300. The difference came from software, settings, and the number of requests running: all operator choices.
3. That spread flows straight into buyer economics. Assuming the same hourly bill for both deployments and both meeting requirements, roughly 1.5x the output means rental spend per acceptable token is proportionally lower. The same hour buys more usable output.
4. Useful intelligence must do the job you hired it to do: good enough quality, fast enough, available when needed, and inside agreed access boundaries. In published security work, SemiAnalysis found monitoring access that exposed another customer's logs and metrics. The GPUs were fast and the service "still failed horrifically." In most cases the operator owns that responsibility, including testing updates on the customer's workload, checking responses under load, keeping a rollback path, and maintaining the system after deployment.
5. ClusterMax, now on version 3.0, assesses operating capability on managed GPU clusters (a couple hundred and growing; ClusterMax 4.0 is recruiting). It looks at provisioning, reliability, monitoring, and security, using hands-on testing, documentation, and customer feedback to see how the service runs when a machine fails, not just on a good day. Tiers are relative to peers, and pricing and availability also factor in. A managed rating does not automatically cover bare metal or every product a provider sells.
6. Count the full cost, then divide by usable output. The inference producer's cost includes rent (or amortized equipment plus running costs) plus software, staff, and services. Better operations spread that spending over more acceptable responses, which lowers cost per acceptable token. The advantage must be re-earned every day as software and workloads change; a repeatable operating process is what supports a lasting cost advantage.
7. Your position on the cost curve is relative, and scarcity obscures it. In the speaker's hypothetical (cost units he likes to imagine as bars of gold), your full cost per successful task falls from 10 to 8 while your competitor's figure moves through 6 and 12, and you can still end up as the more expensive producer (the digits as transcribed appear flipped; the point is that relative position can flip even while you improve). With demand outstripping supply for a foreseen "two to three years," producers with very different costs all find customers. Every commodity in history has had supply and demand swings, so build the operating and cost advantage "when the sun is shining," before prices come under pressure.
8. A credible compute futures market needs grades that define comparable compute services and benchmarks that summarize real rental prices. An advertised offer and a completed trade are not the same thing, and service scope, contract terms, and sampling shape the reference. A rental hedge offsets rental price changes only: it does not fix a failed deployment or ensure the customer pays, and charging more than the index does not by itself make a bad hedge. What matters is whether changes in the reference track changes in your rent.

## Notable quotes
- [02:25:31 | 11:06:07 AM] A GPU falls to the level of the operator.
- [02:29:09 | 11:09:45 AM] Same chip, same target interactivity, about 50% more output.
- [02:35:53 | 11:16:28 AM] Getting better does not automatically move you ahead.
- [02:39:51 | 11:20:27 AM] Rating the operator is an essential building block for building a credible compute futures market.

## Session narrative
The talk opened cold after the 10:56-11:06am networking break, with no host introduction captured on the stream. The first transcribed line at 02:25:08 is the tail of the spoken title ("GPUs are deployed the same"; the transcriber dropped the opening "Not all," which the speaker repeats in full about 20 seconds later). Oliver Kennon of SemiAnalysis introduced himself, joked that time and attention are the most valuable things anyone has, "unless, of course, you're an early-stage investor in OpenAI or Anthropic," and stated the thesis of the session: not all GPUs are deployed the same, and a GPU falls to the level of the operator. He framed the question he intended to answer: who can produce the intelligence you need at the lowest cost?

The core argument used a commodity-market crash course. In a commodity market, producers compete to deliver comparable output, and a cost curve lines them up by what they spend to deliver the same usable work. For this market, intelligence is the economic output. He walked through the measured example from SemiAnalysis's public InferenceX calculator: two B200 deployments serving the same model with roughly 8,000 input and 1,000 output tokens at a P50 target of 100 output tokens per second, where P90 testing showed one serving stack at about 200 generated tokens per second and the other at about 300. The gap came down to software, settings, and concurrency, all operator choices, and it meant the buyer's spend per acceptable token was proportionally lower on the faster stack at the same hourly bill. He then broadened "useful intelligence" beyond speed: the output must be good enough, fast enough, available, and secure. He cited published SemiAnalysis security work that found monitoring access exposing another customer's logs and metrics, a case where the GPUs were "really, really fast" and the service "still failed horrifically," and stressed that in most cases the operator owns ongoing security and production duties such as testing updates, checking responses under load, and keeping a rollback path.

The middle of the talk moved from measurement to assessment and economics. He introduced SemiAnalysis ClusterMax, now on version 3.0, which rates operating capability on a couple hundred managed GPU clusters across provisioning, reliability, monitoring, and security, using hands-on testing, documentation, and customer feedback, with tiers relative to peers; he was careful to note that these ratings apply to managed clusters and translate poorly to bare metal, and he invited providers to reach out for ClusterMax 4.0. He then separated the rental price the GPU provider earns from the inference producer's full cost (rent plus software, staff, and services, or amortized equipment plus running costs for an owner), and defined cost per acceptable token: count all spending to deliver the service over a period, divide by the output customers can actually use. The relative-position section was the emotional peak: in his hypothetical cost units ("I like to imagine bars of gold"), a producer can improve and still lose its spot on the curve when competitors improve faster, and today's scarcity, with demand outstripping supply for a foreseen two to three years, makes it easy to ignore that. He closed the section with historical perspective ("Every commodity in the history of humanity has had swings in supply and demand"), a self-deprecating aside that unless you are "a total AI maxi, which some of us are," the cycle will turn, and advice for leveraged businesses to build cost advantage while capital is available.

The final section connected the framework to market structure: grades describe what a compute service's buyers can expect, rental price benchmarks summarize GPU-hour prices within a defined market (an advertised offer is not a completed trade), and compute futures need both plus a credible benchmark to hedge rental price risk. He summarized full circle: the producer who wins is the one that can repeatedly meet your requirements at the lowest full cost per successfully completed task, and operating capability affects both sides of that equation. He closed with the TLDR ("A GPU falls to the level of the operator"), a pitch to help build a better informed compute market, partnership and hiring calls to action (sales@semianalysis.com), and his own email rendered by the transcriber as "kenan at semianalysis.com, K-E-N-N-O-N," confirming the spelling of his surname before thanking the audience and wishing them a fantastic rest of the day.

## Speaker details
**Oliver Kennon** - Research Analyst, Core Research, SemiAnalysis. New York-based analyst covering GPU economics, compute markets, and AI infrastructure finance. He co-authored the SemiAnalysis report "Nvidia's Backstop Universe - Heads I Win, Tails Who Loses?" on the $11T AI buildout and the limits of Nvidia's balance sheet, and studied at Colby College. LinkedIn: https://www.linkedin.com/in/oliver-kennon-870360206

Note on the name: the automatic transcript renders his self-introduction as "My name is Oliver Kennan" [02:25:14 | 11:05:50 AM], an ASR misspelling. In his closing he spells the address "K-E-N-N-O-N" [02:42:32 | 11:23:08 AM], so "Kennon" is correct.

## Full timestamped transcript
```
[02:25:08 | 11:05:43 AM] GPUs are deployed the same.
[02:25:11 | 11:05:47 AM] Thank you, everyone, for taking the time to be here today.
[02:25:14 | 11:05:50 AM] My name is Oliver Kennan.
[02:25:16 | 11:05:51 AM] I am a research analyst at SemiAnalysis.
[02:25:18 | 11:05:54 AM] Time and attention are the most valuable things any of us have, unless, of course, you're an early-stage investor in OpenAI or Anthropic.
[02:25:26 | 11:06:02 AM] With that, let's get into it.
[02:25:29 | 11:06:05 AM] Not all GPUs are deployed the same.
[02:25:31 | 11:06:07 AM] A GPU falls to the level of the operator.
[02:25:33 | 11:06:09 AM] Buying hardware gives you potential.
[02:25:35 | 11:06:11 AM] Operating capability is what determines how much useful work you actually are able to deliver.
[02:25:42 | 11:06:18 AM] That leads us to the question I will attempt to answer with all of you today: who can produce the intelligence you need at the lowest cost?
[02:25:50 | 11:06:25 AM] Cost matters.
[02:25:51 | 11:06:27 AM] In today's presentation, I want to show you guys why and how operating capability changes that cost and why it matters in the commodity market that is compute.
[02:26:01 | 11:06:37 AM] What matters in a commodity market?
[02:26:06 | 11:06:42 AM] A lot of tech investors or technologists may not be familiar with this framework, so a little crash course.
[02:26:13 | 11:06:49 AM] In a commodity market, producers compete to deliver comparable output.
[02:26:17 | 11:06:53 AM] A lower production cost gives more room to compete when prices fall.
[02:26:21 | 11:06:57 AM] That's what a cost curve shows: producers lined up by what they spend to deliver the same usable work.
[02:26:28 | 11:07:04 AM] If two producers earn the same price, the one spending less to deliver the work gets to keep more of it.
[02:26:34 | 11:07:10 AM] Pretty simple, right?
[02:26:37 | 11:07:13 AM] For us, intelligence is the economic output we care about.
[02:26:42 | 11:07:18 AM] Eventually, our North Star metric will be price per successfully completed task at the required quality.
[02:26:48 | 11:07:24 AM] Unfortunately, we're not quite there yet.
[02:26:50 | 11:07:25 AM] That's a pretty hard thing to standardize.
[02:26:52 | 11:07:28 AM] Today, price per token is a useful practical proxy, especially for comparable workloads and quality requirements, and gets us closer to delivered output, much closer than the often quoted, all you finance bros out here will have heard this, GPU dollar per hour price, or as we view it, a cost.
[02:27:15 | 11:07:51 AM] We view GPU hours as a measure of input, not output, the cost versus price distinction.
[02:27:22 | 11:07:58 AM] Customer prices are different from the producer's cost of doing the work.
[02:27:29 | 11:08:05 AM] GPU hours are the input.
[02:27:31 | 11:08:07 AM] Intelligence is the output.
[02:27:33 | 11:08:09 AM] On this slide, we can visualize the inputs needed to create useful intelligence.
[02:27:38 | 11:08:14 AM] We start with hardware and electricity, GPUs for this presentation.
[02:27:44 | 11:08:20 AM] Software and operations can be thought of as a multiplier on those first two inputs, with the end product being useful intelligence.
[02:27:54 | 11:08:30 AM] The operator is who chooses and implements the software that serves the model and keeps requests moving through the system.
[02:28:01 | 11:08:37 AM] The machines might be available, but you still need someone to make them deliver responses customers can actually use.
[02:28:09 | 11:08:45 AM] What matters is how much useful work you get and whether it meets your requirements for the specified task.
[02:28:15 | 11:08:51 AM] The conversion can differ with the same kind of chip.
[02:28:18 | 11:08:54 AM] Let's look at that in the measured example.
[02:28:22 | 11:08:58 AM] Here's a concrete example from our InfenceX public InfenceX calculator.
[02:28:26 | 11:09:02 AM] You guys can all check it out, semianalysis.
[02:28:29 | 11:09:05 AM] com.
[02:28:30 | 11:09:06 AM] Both estimates use B200 GPUs serving the same model with roughly 8,000 input tokens and 1,000 output tokens, a pretty standard ratio.
[02:28:40 | 11:09:16 AM] The P50 target is 100 output tokens per second for each user.
[02:28:45 | 11:09:21 AM] The serving stack is the software handling the model's responses.
[02:28:49 | 11:09:25 AM] In the P90 scenario, one of these stacks gives about 200 generated output tokens per second, while the other one gives about 300.
[02:28:57 | 11:09:33 AM] That's a big difference and comes down to software, settings, and number of requests running, all choices made by the operator.
[02:29:09 | 11:09:45 AM] Same chip, same target interactivity, about 50% more output.
[02:29:13 | 11:09:48 AM] That's a lot.
[02:29:14 | 11:09:50 AM] So what does that mean for the buyer's bill?
[02:29:21 | 11:09:57 AM] What does that intelligence actually cost the customer?
[02:29:24 | 11:10:00 AM] For this example, let's assume the hourly bill is the same for both deployments and both meet your requirements.
[02:29:31 | 11:10:07 AM] At roughly one and a half times the output, your rental spend per acceptable token is proportionally lower.
[02:29:37 | 11:10:13 AM] That is to say, the hour buys you more usable and useful output.
[02:29:43 | 11:10:19 AM] What counts as useful intelligence?
[02:29:46 | 11:10:22 AM] Useful intelligence has to do the job you hired it to do.
[02:29:50 | 11:10:25 AM] Pretty simple, right?
[02:29:50 | 11:10:26 AM] The answer needs to be good enough for the task, arrive quickly enough, and be available when you need it.
[02:29:57 | 11:10:33 AM] Your information also needs to stay within the access boundaries you've agreed upon, AKA, it needs to be secure.
[02:29:57 | 11:10:33 AM] This is an overlooked requirement that is not captured in a chip's performance metrics, but it is essential for a chip to be usable and useful.
[02:30:15 | 11:10:51 AM] In our published security work, we found monitoring access that exposed another customer's logs and metrics.
[02:30:21 | 11:10:57 AM] This is a case, and an unfortunately common one at that, where the GPUs were fast, in the case I'm referencing, really, really fast, which makes the whole thing sadder, and the service still failed horrifically.
[02:30:35 | 11:11:10 AM] Ensuring cluster security takes ongoing work, just as delivering the promised performance does.
[02:30:42 | 11:11:18 AM] In most cases, it is the operator that owns that responsibility.
[02:30:48 | 11:11:24 AM] Someone has to make the system work in production.
[02:30:51 | 11:11:27 AM] Suppose a faster serving update becomes available.
[02:30:54 | 11:11:30 AM] Someone has to test it on the customer's workload, check whether the output still meets the requirements, and then decide when, where, and how to deploy it.
[02:31:03 | 11:11:39 AM] That means checking the actual responses, testing it under load, and keeping a way to return to previous version if the update causes problems once it's deployed.
[02:31:14 | 11:11:49 AM] Once it is deployed, someone has to maintain it and respond when issues come up.
[02:31:20 | 11:11:56 AM] That work may sit with your provider, your own team, or both.
[02:31:25 | 11:12:01 AM] Irregardless, you need to know who's responsible and whether they can actually do it.
[02:31:33 | 11:12:09 AM] So how do we assess the operator?
[02:31:36 | 11:12:11 AM] Semi Analysis ClusterMax, we're on version 3.
[02:31:39 | 11:12:14 AM] 0 at this point, assesses operating capability on managed GPU clusters, couple hundred growing.
[02:31:47 | 11:12:22 AM] Please reach out if you want to be on ClusterMax 4.
[02:31:49 | 11:12:25 AM] 0.
[02:31:49 | 11:12:25 AM] We look at provisioning, reliability, monitoring, and security.
[02:31:54 | 11:12:30 AM] Hands-on testing, documentation, and customers' feedback help us understand how the service runs, not just on a good day, but also when a machine fails.
[02:32:05 | 11:12:41 AM] I want to take the chance to reiterate that ClusterMax ratings apply to managed clusters, different from bare metal, very different.
[02:32:14 | 11:12:49 AM] With bare metal, more operating work usually sits with the customer.
[02:32:17 | 11:12:53 AM] Applying a managed service rating there does not automatically cover every product a provider sells.
[02:32:24 | 11:12:59 AM] The tiers are relative to peers.
[02:32:25 | 11:13:01 AM] A little bit of a tongue twister.
[02:32:28 | 11:13:04 AM] I nailed it.
[02:32:29 | 11:13:05 AM] Pretty happy with that.
[02:32:31 | 11:13:06 AM] And pricing and availability are also important factors in this assessment.
[02:32:35 | 11:13:10 AM] These are metrics that do not directly measure token output, but are incredibly important.
[02:32:41 | 11:13:17 AM] Obviously, very important.
[02:32:44 | 11:13:20 AM] Assessment helps us understand who can deliver.
[02:32:46 | 11:13:21 AM] Now we can move on to the next question.
[02:32:48 | 11:13:23 AM] What does it actually cost to produce useful intelligence?
[02:32:51 | 11:13:26 AM] Let's start with the compute bill and other costs that producers still has to cover.
[02:32:57 | 11:13:33 AM] Rental price and production costs are different.
[02:33:00 | 11:13:35 AM] In our example, the GPU provider rents out hours, the inference producer buys those hours and sells responses.
[02:33:08 | 11:13:44 AM] The rental bill is revenue to the provider and an input cost to the inference producer.
[02:33:13 | 11:13:48 AM] The GPU owner pays for the equipment, power, space, and support.
[02:33:17 | 11:13:53 AM] The inference producer's full cost includes rent plus whatever software, staff, and other services it pays for beyond that rental.
[02:33:25 | 11:14:00 AM] If the inference producer owns its equipment instead, we spread the equipment investment over its working life and add running costs.
[02:33:32 | 11:14:08 AM] What the producer charges and what it spends are separate numbers.
[02:33:36 | 11:14:11 AM] To understand the cost of useful intelligence, we need to know how much useful work the spending actually produces.
[02:33:42 | 11:14:18 AM] Better operations lowers that cost of useful intelligence.
[02:33:46 | 11:14:21 AM] The B200 comparison showed why the amount of output matters.
[02:33:50 | 11:14:26 AM] More acceptable responses from the same paid hours can spread the inference producer's rental expense over more useful work.
[02:33:57 | 11:14:33 AM] For a producer that owns its GPUs, the same logic spreads the equipment investment and running costs over more output.
[02:34:03 | 11:14:39 AM] Count all the spending needed to deliver the service over the same period, then divide by the output customers can actually use.
[02:34:13 | 11:14:48 AM] That gives us cost per acceptable token for a comparable workload.
[02:34:19 | 11:14:55 AM] Better operations also require investment.
[02:34:23 | 11:14:58 AM] Testing and update, deploying it safely, and keeping it working take people and money.
[02:34:30 | 11:15:05 AM] The extra output has to justify the extra spending.
[02:34:34 | 11:15:09 AM] This advantage can persist when a team repeats that work as software and workloads change, but one good benchmark doesn't establish it.
[02:34:42 | 11:15:17 AM] You have to earn it every single day.
[02:34:45 | 11:15:20 AM] Each new workload still needs checking, but a repeatable operating process, from what we've observed, can support a lasting cost advantage and a price advantage too.
[02:34:56 | 11:15:31 AM] Even if you do keep improving, though, your competitors are not sitting still.
[02:35:01 | 11:15:37 AM] Your position on the cost curve is relative.
[02:35:04 | 11:15:40 AM] This slide, out of all the slides, should make clear the importance of the commodity framework in all of this.
[02:35:10 | 11:15:46 AM] Your position on the cost curve depends on what your competitors can deliver, not just yourself.
[02:35:15 | 11:15:50 AM] It's a relative measure.
[02:35:17 | 11:15:52 AM] Here's a simple hypothetical.
[02:35:18 | 11:15:54 AM] We're comparing the same task, the same required quality, using made-up cost units.
[02:35:24 | 11:16:00 AM] I like to imagine bars of gold.
[02:35:26 | 11:16:02 AM] Your full cost per successful task falls from 10 to 8.
[02:35:31 | 11:16:06 AM] In the same period, your competitors falls from 6 to 12.
[02:35:37 | 11:16:12 AM] You improved.
[02:35:38 | 11:16:13 AM] That's awesome.
[02:35:39 | 11:16:14 AM] But both of you did.
[02:35:40 | 11:16:15 AM] And in this example, you started as the cheaper producer and ended as the more expensive one.
[02:35:45 | 11:16:21 AM] That gives the competitor more room to lower its selling price, provided customers find the two services equally acceptable.
[02:35:53 | 11:16:28 AM] Getting better does not automatically move you ahead.
[02:35:56 | 11:16:32 AM] Applying the commodity framework makes you realize that you have to compare your cost per useful work on a relative basis.
[02:36:02 | 11:16:38 AM] Comparing your own product with what your competitors can deliver.
[02:36:07 | 11:16:42 AM] That comparison can be easy to overlook in moments like today, where demand far outstrips supply and will for the foreseeable future.
[02:36:14 | 11:16:50 AM] Two to three years.
[02:36:19 | 11:16:55 AM] Visibility, good.
[02:36:22 | 11:16:57 AM] Scarcity can obscure those differences.
[02:36:24 | 11:16:59 AM] When demand is strong and supply is constrained, producers with very different costs can find customers.
[02:36:30 | 11:17:05 AM] Strong revenue can make those differences feel less urgent.
[02:36:33 | 11:17:08 AM] If you're a CEO, why would you focus on your precious time and energy and money shoring up your spot on the cost curve when you can be building a massive new data center?
[02:36:43 | 11:17:18 AM] In moments like this, it's important to step back and have a little perspective, take a little historical perspective.
[02:36:49 | 11:17:25 AM] Every commodity in the history of humanity has had swings in supply and demand.
[02:36:53 | 11:17:28 AM] Just because we don't see when that will be yet does not mean that this cycle will be any different.
[02:36:57 | 11:17:32 AM] Unless you're a total AI maxi, which some of us are, so I'm very open to being wrong.
[02:37:03 | 11:17:39 AM] I'm wrong every day.
[02:37:06 | 11:17:41 AM] But I would say if you're a business with leverage, you need to be especially conscientious of this.
[02:37:11 | 11:17:47 AM] Being proactive with building your cost advantage might not be as sexy as making your top line bigger, but it matters deeply if you want to survive through a business cycle.
[02:37:22 | 11:17:57 AM] That's why you want to build your operating capability and cost advantage while you have the opportunity, when the sun is shining, when you can raise capital.
[02:37:31 | 11:18:07 AM] They matter even more when customers have more choices to make and prices come under pressure.
[02:37:36 | 11:18:12 AM] So how do we make clear what the buyer actually gets?
[02:37:42 | 11:18:17 AM] Comparable compute needs clear grades.
[02:37:44 | 11:18:20 AM] Now let's look at the compute that an intelligence producer is buying.
[02:37:48 | 11:18:24 AM] We've already seen that the same chip can deliver different results depending on how it's operated.
[02:37:54 | 11:18:29 AM] And two offers for B200 GPU hours can include different services and leave different operating jobs with the customer.
[02:38:01 | 11:18:37 AM] A commodity framework needs a way to describe these differences so buyers know which services they can treat as comparable.
[02:38:08 | 11:18:44 AM] That's the job of a grade.
[02:38:12 | 11:18:47 AM] The grade describes a particular compute service and what its buyers can expect.
[02:38:16 | 11:18:52 AM] It doesn't make intelligence interchangeable across every task.
[02:38:20 | 11:18:56 AM] Once we've defined that service, we can ask what its rental price tells us.
[02:38:27 | 11:19:02 AM] What does a rental price benchmark measure?
[02:38:30 | 11:19:05 AM] A rental price benchmark summarizes the price of GPU hours within its defined market.
[02:38:35 | 11:19:11 AM] It isn't the producer's production cost or a measure of intelligence delivered.
[02:38:40 | 11:19:16 AM] We need to know where those prices come from, and advertised offer and a completed trade are not the same thing.
[02:38:47 | 11:19:23 AM] Service scope, contract terms, whose prices are sampled, and how they're combined all shape that reference point.
[02:38:57 | 11:19:32 AM] Operating quality can influence those prices without the index measuring it separately.
[02:39:01 | 11:19:37 AM] Running a rental reference doesn't tell you how much useful work your deployment will produce.
[02:39:06 | 11:19:41 AM] To use it as a hedge, you need to understand how it tracks the rent you actually pay or earn.
[02:39:13 | 11:19:49 AM] What can compute futures hedge?
[02:39:16 | 11:19:51 AM] There's been a lot of excitement lately about compute futures.
[02:39:19 | 11:19:54 AM] For all of you that don't know, a futures contract sets a standardized term for future delivery or cash settlement.
[02:39:25 | 11:20:01 AM] Cash settlement depends on a price reference.
[02:39:28 | 11:20:03 AM] Buyers and sellers both face uncertainty about rental prices.
[02:39:31 | 11:20:07 AM] Think back to the serving stacks and the monitoring failure.
[02:39:35 | 11:20:11 AM] Assessing who runs the system helps describe the service buyers get.
[02:39:39 | 11:20:15 AM] That helps us define grade so buyers know which compute services are comparable.
[02:39:44 | 11:20:19 AM] The benchmark then needs to track the rent they actually pay or earn.
[02:39:48 | 11:20:24 AM] That's why I make this argument.
[02:39:51 | 11:20:27 AM] Rating the operator is an essential building block for building a credible compute futures market.
[02:39:57 | 11:20:32 AM] A rating informs that work.
[02:39:58 | 11:20:34 AM] It doesn't by itself define a futures grade.
[02:40:00 | 11:20:36 AM] futures grade, establish a sound benchmark, or create enough trading to buy and sell easily.
[02:40:06 | 11:20:42 AM] It also doesn't necessarily make a hedge effective.
[02:40:09 | 11:20:45 AM] A rental price hedge can help offset rental price changes.
[02:40:13 | 11:20:48 AM] It does not fix a failed deployment or ensure that your customer pays.
[02:40:19 | 11:20:55 AM] Charging more than the index does not by itself make it a bad hedge.
[02:40:24 | 11:20:59 AM] What matters is whether changes in the reference track changes in your rent.
[02:40:27 | 11:21:03 AM] Unexpected changes in that relationship leave real price risk.
[02:40:32 | 11:21:08 AM] Those tools can help you understand what you're buying and manage the rental price risk.
[02:40:37 | 11:21:12 AM] For an intelligence producer, rent is one part of the cost.
[02:40:40 | 11:21:16 AM] The operator still has to turn that compute into work that the customer can actually use.
[02:40:47 | 11:21:22 AM] This brings us full circle.
[02:40:54 | 11:21:29 AM] So a GPU falls to the level of the operator.
[02:40:57 | 11:21:33 AM] So who can produce the intelligence you need at the lowest cost?
[02:41:02 | 11:21:38 AM] The producer who can repeatedly meet your requirements at the lowest full cost per successfully completed task.
[02:41:09 | 11:21:45 AM] Count everything spent to deliver the service, then divide by the output that the customer can actually use.
[02:41:15 | 11:21:51 AM] Operating capability affects both sides of that equation: what you spend and how much more useful work you can deliver.
[02:41:22 | 11:21:58 AM] Also, your position depends on that of your competitors.
[02:41:25 | 11:22:01 AM] You can improve and still fall behind if your competitors improve faster than you.
[02:41:31 | 11:22:06 AM] That's why understanding the operator matters through the cycle, not just at one point in time, especially when customers have more choices and prices come under more pressure.
[02:41:42 | 11:22:17 AM] In conclusion, if you just walked in and want the TLDR, this is it.
[02:41:45 | 11:22:21 AM] A GPU falls to the level of the operator.
[02:41:50 | 11:22:26 AM] Help build a better informed compute market.
[02:41:52 | 11:22:27 AM] Ladies and gentlemen, thank you so much for your time today.
[02:41:55 | 11:22:30 AM] At Semi Analysis, we know that markets do not become informed and efficient on their own.
[02:41:59 | 11:22:35 AM] We seek to be an active, engaged partner in that work.
[02:42:03 | 11:22:38 AM] It takes two to tango, though.
[02:42:05 | 11:22:41 AM] Ideally more than two, actually.
[02:42:08 | 11:22:43 AM] If you'd like to partner with us, contribute, or join the team, we would love to hear from you.
[02:42:13 | 11:22:49 AM] We are always hiring great people.
[02:42:15 | 11:22:50 AM] Please reach out.
[02:42:17 | 11:22:53 AM] If this resonated, please go ahead and email sales at semianalysis.
[02:42:22 | 11:22:58 AM] com for partnership opportunities.
[02:42:24 | 11:23:00 AM] And if you're interested in potentially joining the team, my email is kenan at semianalysis.
[02:42:32 | 11:23:08 AM] com, K-E-N-N-O-N.
[02:42:33 | 11:23:08 AM] Thank you all for listening, and have a fantastic rest of your day.
```
