---
session_id: "028"
title: "No universal schema: just-in-time ontologies, model priors, and Pareto surfing"
agenda_title: null
speakers: ["Hrishi Olickel"]
start_wall: "1:16:49 PM ET"
end_wall: "1:38:04 PM ET"
video_start: "04:28:57"
video_end: "04:50:12"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=16137s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: [just-in-time-ontologies, model-priors, pareto-surfing, entity-resolution, data-pipelines, decision-models, llm-errors]
confidence: "high"
---

# No universal schema: just-in-time ontologies, model priors, and Pareto surfing

> Southbridge AI co-founder Hrishi Olickel argues that no universal schema exists — only four schemas that align solely at decision time — so build just-in-time ontologies, split intelligence into three pipeline roles, and let self-optimizing "Pareto surfing" pipelines drive an Ohio campaign-finance entity-resolution job from a projected $10,000 to $795.

## TL;DR
- There is no universal schema. Source, storage, and decision schemas — plus the model's own prior — can only be known together at the moment a decision is made, so merge contexts just-in-time instead of pre-building an enterprise ontology.
- Intelligence plays three separate roles in data work: designing pipelines (slow, heavy models like Opus or O1), working inside pipelines (cheap, fast, repeatable workers), and self-optimizing "hill climbers or surfers" that tune cost, speed, and accuracy at once.
- A statewide Ohio campaign-finance entity-resolution job finished at $795 against a pre-set $800 budget, versus about $10,000 expected before the decision model Jev launched; every one of Ohio's 203,317 cases now carries a label of what the answer rests on and how far it was checked.
- An agent (the transcript's "4A", running on Astra and later Opus) found most approaches on its own over 10 days: over a dozen architectures, more than 4,000 hang runs, 90,000 calls to Jev, and roughly 6 billion tokens.
- Model priors are becoming the largest error class in data work (an underscore mismatch silently reclassified 15,658 in-kind contributions; dropped negative signs turned 784,000 net into 5.3 million dollars of debt). Cross-model prior intersection — Jev and Luna agreed on 194 of 200 families with zero shared errors — shrinks that surface.
- Self-optimizing systems need four things: a stable deployment surface, bounded experiments, encoded know-how, and a defined failure surface to iterate against.

## Key lessons
1. Count four schemas, not one: the source schema (whatever the origin can capture, including the recorder's patience), the storage schema (what can physically be written down), the decision schema (why the data is needed — comfort mapping, weather migration, or equipment siting each need different facts), and the model's prior (the fourth, recent addition). You never know all four at once except at decision time. This is why "customer" means whoever pays to billing, whoever calls to support, and whoever we are on the hook for to compliance.
2. Build the ontology just-in-time. Migration failures are usually blamed on lack of buy-in, and that is real, but the primary blocker is that no super-schema exists. Do the transformation merge — the recording context joined to the decision context — when the decision space is known, and label each ontology with its receipts so it can be reused by the next job.
3. Keep the three roles of intelligence separate. Pipeline designers want slower models with "heavier, thicker tokens" that digest documentation and predict outcomes (Opus, O1); in-pipeline workers should be cheaper, faster, specialized, and repeatable "with knowable defects"; surfers self-optimize a first run. Coding agents mash all three into one context window. He likens healthy systems to a leafcutter ant colony running on four worker sizes.
4. Fix priors by rewriting questions, not models or thresholds. When Jev missed nine household links by confidently answering no, the team rewrote the household question to state "what counts as enough evidence" — Jev went from no on all 13 development questions to yes, without touching the model.
5. Use cross-model prior intersection as a cheap error filter. On 200 held-out Ohio families, Jev and Luna agreed on 194, and none of the shared answers was wrong; every error sat in the six disagreement cases. Models from different families and pedigrees disagree more, except models distilled within the same company.
6. Expect species-wide priors. In one benchmark, four different model families produced the same total down to the cent because they all shared a sign convention the answer key did not. Past that point you cannot ensemble your way out: list the known priors, watch for them, and apply specific fixes. (The transcript's concrete misses: 15,658 in-kind contributions counted as ordinary money after an `in_kind` vs `In-kind` spelling mismatch; 99.4% of transaction dates empty because the model tried four date formats when the file used a fifth; loan signs dropped as "redundant".)
7. Do not produce numbers you cannot defend. At his last job the only real option for A/B testing with 50 users was "to not produce a number at all, because the moment a number exists, it argues for a result." Interactive agents always give you a confident answer, so a "moment in chat can be a prod nightmare forever."
8. Self-optimization has four prerequisites and six stages. Prerequisites: a stable deployment surface (Southbridge's open-source Hankwave harness over fast-moving agent runtimes), a way to bound experiments (cost, time, and access as resources), know-how expressed token-efficiently, and a failure surface — the hardest to encode. Stages: spec and split the job (about 800,000 rows into 200,000 typed cases), define the failure surface before starting, run minimal bounded pilots, move checks into rigs between "codons" (bounded work segments), validate and sequence the codons, then deploy to production where pipelines mature. Pareto surfing happens in the middle: swap models for faster, cheaper options, compare against known intermediates, and tighten success requirements each round.

## Notable quotes
> "I believe we've solved the final bottleneck in transformation." — [04:29:56 | 1:17:48 PM]

> "There is no concept of a customer that's divorced from the question that you want to answer." — [04:33:57 | 1:21:48 PM]

> "So the only real option was to not produce a number at all, because the moment a number exists, it argues for a result." — [04:37:16 | 1:25:07 PM]

> "The whole statewide job came to $795 on an $800 budget that was set ahead of time." — [04:41:40 | 1:29:32 PM]

## Session narrative
This pre-recorded extra lunch talk played in the lunch-talk block of the main-stage livestream, between the Railway internal-tools talk and the Perplexity CTO session. Hrishi Olickel opens with a DuckDB article asking whether we lost a decade chasing distributed architectures that presumed compute and storage were slow and expensive. His thesis: capability defines architecture in every era, tooling lags behind, and all of today's data infrastructure assumes transformation is expensive. With judgment now "accessible on tap all along the Pareto frontier," he claims the final bottleneck in transformation is solved and we sit on the verge of a paradigm shift. As a hook he previews the numbers: an entity-resolution pipeline over Ohio campaign-finance records, projected at $10,000, delivered final ground truth for every donor case ten days after a new model launched, for under $800.

The core argument attacks the enterprise "mind map" tarpit. Olickel admits he pitched a single universal schema himself when he founded Southbridge two years ago, and now says he was wrong: migrations fail not primarily from lack of buy-in but because there are actually four schemas — source, storage, decision, and the model's prior — and they can never all be known at once except when the decision is being made. He illustrates with a temperature-writing thought experiment (your phone, desk sensor, or watch; what you can physically write down; whether the purpose is comfort mapping, weather migration, or equipment siting) and with "customer," whose meaning changes per department. Merging recording context with decision context takes discernment, and doing that merge just-in-time — when the decision space is known — is his definition of a just-in-time ontology. He then grounds the talk in Southbridge's practice: "obsessives who embed intelligence into pipelines," three work regimes (write once/run once, write many/run once, write many/run many — the third is bread and butter), two years of progress from taming early 3.5-turbo-class models on healthcare and mining research to the open-source Hankwave harness operating at terabyte scale. A story from his last job (maritime, thousands of vessels) makes the discernment point: with only 50 users, the right move was to refuse to produce an A/B number at all, whereas today's interactive agents always answer confidently, so mistakes accumulate.

The middle section separates the three roles intelligence plays in pipelines — designer, worker, and "hill climber or surfer" — and notes that decision models like Jev fit naturally as workers at the bottom of large workloads. The Ohio case study carries the detail: three architectures tested on a development set (a cheap reasoning model alone did as well as Fable for about 2% of cost; Jev missed nine household links by confidently saying no until the question was rewritten to define sufficient evidence), then over a dozen statewide qualification rounds that fixed definitions of committee, filer, and shared address. All 203,317 cases ended with a label of what each answer rests on. Checking cost about four times doing ($545 on second opinions, disagreement settling, and audit versus $128 for first answers), the whole job cost $795 against the pre-set $800 budget versus $10,000 expected before Jev, and the next state's audit budget should be near zero. Their agent "4A," running on Astra and later Opus, found most approaches incrementally on its own: ten days, over a dozen architectures, more than 4,000 hang runs, 90,000 calls to Jev, roughly 6 billion tokens, with every iteration a version-controlled hang that was easy to revert, debug, and critique, and the learnings written back into a library of agentic patterns (including a new "checking ladder").

The closing sections cover model priors — with the underscore/hyphen miss that reclassified 15,658 in-kind contributions, the date-format miss that emptied 99.4% of transaction dates while row and dollar totals still matched, and the sign-dropping runs that turned 784,000 net into 5.3 million dollars of debt "validated by multiple models" — and the remedy ladder: human intuition is really prior intersection, cross-model agreement between different model families shrinks the error surface to a persistent species-wide class, and the remainder must be listed and specifically patched. He ends with the four missing ingredients for native self-optimization (stable deployment surface, bounded experiments, know-how, failure surface), the six-stage process ending in production pipelines that "slowly mature" by surfing the cost/speed/accuracy frontier, and an apology: there is no universal ontology and never was, but that makes every schema valid as long as you label it and preserve its context. Transcription caveats: the auto-transcript renders several proper nouns inconsistently — "Jev," "Jeff," and "Dev" are the same decision model (Jev); "Hankwave"/"Hankweave" are one harness; "SoftRidge" is Southbridge — and the closing line says "at Perplexity, we're working as hard as we can," which conflicts with the speaker's Southbridge role and is most plausibly a misstatement or caption artifact, since the next block on stream was the Perplexity CTO talk.

## Speaker details
**Hrishi Olickel** - Founder & CEO, Southbridge AI. Southbridge AI is a San Francisco and Singapore company building data agents and what Olickel calls the stack for "Data AGI": turning messy, long-tail data such as health records, financial filings, and decades of sensor readings into usable form. He previously spent about five years as co-founder and CTO of Greywing (YC W21), a maritime software company where his team built SeaGPT, an early maritime AI agent, and helped tens of thousands of stranded seafarers return home during Covid. He co-authored Oyente (ACM CCS 2016), a symbolic-execution tool that flagged more than $62M in exploitable Ethereum smart contracts, was named to Forbes 30 Under 30 Asia 2023 in Enterprise Technology, did research at Yale-NUS College, and writes about LLMs, RAG, and agents on his blog. In this session he self-identifies as having founded Southbridge two years ago and refers to his "last job" in maritime data.

Links: [LinkedIn](https://sg.linkedin.com/in/hrishioa) | [Twitter/X](https://x.com/hrishioa) | [Website](https://olickel.com)

## Full timestamped transcript
```
[04:28:57 | 1:16:49 PM] So I really love this article from Hannes at DuckDB, where he asks if we lost a decade chasing distributed architectures that presumed compute and storage were slow and expensive.
[04:29:31 | 1:17:22 PM] Capability in every era, though, defines architecture and tooling, and the tooling lags behind consistently.
[04:29:37 | 1:17:29 PM] We first made compute cheaper than storage, and then we gave it to everybody, and then we made it faster.
[04:29:43 | 1:17:35 PM] And every single time, architectures undergo this massive change.
[04:29:47 | 1:17:39 PM] All of our data infrastructure today is built on the idea that transformation is expensive.
[04:29:53 | 1:17:45 PM] What if that wasn't true anymore?
[04:29:56 | 1:17:48 PM] I believe we've solved the final bottleneck in transformation.
[04:30:00 | 1:17:52 PM] General intelligence or judgment.
[04:30:02 | 1:17:54 PM] And we've made it accessible on tap all along the Pareto frontier, which puts us right on the verge of a paradigm shift.
[04:30:10 | 1:18:01 PM] So in this talk, we're going to cover why single ontologies always fail, the three roles models play in pipelines, intersecting model priors for better results, and Pareto surfing, how today's models can tune a workload for cost, speed, and accuracy all at the same time.
[04:30:28 | 1:18:19 PM] Here's a quick example.
[04:30:29 | 1:18:21 PM] When Jeff launched, we already had an entity resolution pipeline running, working out Ohio's campaign finance records and whether they belong to the same person, company, or committee.
[04:30:40 | 1:18:32 PM] It was projected to cost about $10,000.
[04:30:43 | 1:18:34 PM] Our systems took that new model, worked out where it fit, tested over a dozen approaches, and integrated it.
[04:30:50 | 1:18:41 PM] Ten days after that first call, we had final ground truth for every donor case in Ohio under $800.
[04:30:57 | 1:18:49 PM] That is the power of Pareto surfing and just-in-time transformations.
[04:31:02 | 1:18:54 PM] So let's get into it.
[04:31:06 | 1:18:57 PM] Ontologies are the enterprise version of mind maps.
[04:31:11 | 1:19:02 PM] It's this tarpit that sucks us all in, including me.
[04:31:15 | 1:19:07 PM] I talked about a single universal schema when I founded Southbridge two years ago.
[04:31:20 | 1:19:12 PM] The popular conception, and it's not wrong, it's just a small part of the picture, is that migrations in ontologies fail because of a lack of buy-in and there are abandoned halfway through, that organizations and people never switch over.
[04:31:34 | 1:19:25 PM] All of that is true, 100%.
[04:31:36 | 1:19:27 PM] But buy-in isn't the primary reason.
[04:31:39 | 1:19:30 PM] Say if you could integrate and migrate all of your information into a single superschema in the blink of an eye.
[04:31:46 | 1:19:37 PM] You still have to contend with the truth that there is no super schema.
[04:31:50 | 1:19:42 PM] There actually are four schemas.
[04:31:53 | 1:19:44 PM] The first one belongs to the source, wherever the information comes from.
[04:31:57 | 1:19:49 PM] Let's take temperature as an example.
[04:31:59 | 1:19:50 PM] Say I ask you to write down the temperature.
[04:32:02 | 1:19:53 PM] The source schema is whatever you have access to.
[04:32:05 | 1:19:56 PM] Your phone gives you your region's temperature, sensor on your desk, which is less accurate but is more local, or your watch.
[04:32:11 | 1:20:02 PM] But even your patience in following through on my request is part of that source schema.
[04:32:16 | 1:20:08 PM] The second one is the storage schema.
[04:32:19 | 1:20:11 PM] There's only so much you can write down.
[04:32:22 | 1:20:14 PM] You can't write down the firmware of the device you're using.
[04:32:25 | 1:20:17 PM] You can't even write the time down to the second because you couldn't finish writing all of that inside of a second.
[04:32:31 | 1:20:23 PM] This is the schema imposed on you by storage.
[04:32:34 | 1:20:25 PM] The third one belongs to the decision.
[04:32:36 | 1:20:28 PM] Why do I need you to write the temperature down?
[04:32:40 | 1:20:31 PM] Maybe I'm figuring out what makes you comfortable, in which case I need temperatures from you spread throughout the day, and I need to make sure that it's you that's doing the measurement.
[04:32:48 | 1:20:40 PM] Maybe I'm building weather migration maps, in which case I don't care who does the measuring, but I care a lot about your exact location, the time, the device you used, and whether that's changed.
[04:32:59 | 1:20:50 PM] Or maybe I'm deciding whether to install sensitive equipment and where, and you yourself become this variable that I need to cancel out.
[04:33:08 | 1:20:59 PM] There's a fourth one, though, which we'll get to when we talk about priors.
[04:33:12 | 1:21:03 PM] It's this recent addition.
[04:33:13 | 1:21:05 PM] The true problem is that you will never know all four schemas at the same time except at the moment that the decision is being made.
[04:33:21 | 1:21:13 PM] In almost every enterprise and every home, most of the data being recorded has little idea what it's going to be used for.
[04:33:29 | 1:21:21 PM] Take a customer, the first box in every ontology.
[04:33:32 | 1:21:24 PM] To billing, a customer is whoever pays.
[04:33:35 | 1:21:26 PM] To support, it's whoever calls.
[04:33:37 | 1:21:28 PM] To compliance, it's whoever we're on the hook for.
[04:33:40 | 1:21:31 PM] And the only time you know is when the decision is known.
[04:33:43 | 1:21:35 PM] Should we refund this order?
[04:33:45 | 1:21:36 PM] Can we extend this account more credit?
[04:33:47 | 1:21:38 PM] Suddenly, what you need to know, how and to what degree, becomes extremely clear.
[04:33:52 | 1:21:43 PM] This is why I was wrong.
[04:33:55 | 1:21:46 PM] There is no universal schema.
[04:33:57 | 1:21:48 PM] There is no concept of a customer that's divorced from the question that you want to answer.
[04:34:03 | 1:21:54 PM] And pulling these schemas together is the process of transformation, of making information actually useful, taking the context that it was recorded in and merging it with the context of the decision.
[04:34:14 | 1:22:06 PM] And that takes discernment.
[04:34:16 | 1:22:07 PM] Doing that merge when the decision space is known instead of ahead of time is what I mean by a just-in-time ontology.
[04:34:23 | 1:22:15 PM] So we'll come back to discernment with a story from my last job, where most of my job was to make sure that certain numbers just did not exist ever.
[04:34:34 | 1:22:26 PM] Before that, a little bit about me and us.
[04:34:38 | 1:22:29 PM] We are best described as obsessives.
[04:34:40 | 1:22:32 PM] Obsessives who embed intelligence into pipelines.
[04:34:43 | 1:22:34 PM] Pipelines that can scale, that can run over and over again to take work truly off our hands, and pipelines that can mature in cost, performance, and speed all on their own.
[04:34:54 | 1:22:45 PM] And most of the work we do in data breaks into three regimes.
[04:34:58 | 1:22:50 PM] The first is write once, run once.
[04:35:00 | 1:22:52 PM] If you do any kind of development, think of these as monster-scale, immediately invoked functions.
[04:35:06 | 1:22:57 PM] They're built for something single-use, like joining a dataset, mining information, or answering one specific question, and then they get torn down.
[04:35:15 | 1:23:06 PM] The second is write many, run once, where lots of smaller and larger workloads are built for one large common goal.
[04:35:23 | 1:23:15 PM] The closest thing you might know is, like, large migrations.
[04:35:27 | 1:23:19 PM] Years of records moved out of systems nobody fully remembers, lots of workloads built for one move and verified individually at source, checked against the others because all of it only happens once.
[04:35:38 | 1:23:29 PM] The third, though, and this is bread and butter, is the most common, is write many, run many.
[04:35:43 | 1:23:35 PM] These are repeatable pipelines that are built and maintained over time as we add more information in.
[04:35:49 | 1:23:41 PM] And at SoftRidge, we've moved so much work off the main thread and into these repeatable systems, from benchmark design, tracking, coding, to making subtitles for movies that we want to watch.
[04:36:00 | 1:23:52 PM] Almost everything we do in the modern world is a transformation of data, or it's bottlenecked by how hard it is to transform data.
[04:36:08 | 1:24:00 PM] And in all of these cases, our job is simple: make sure people can rely on the results.
[04:36:13 | 1:24:04 PM] In just two years, we've gone from figuring out how to make early 3.
[04:36:17 | 1:24:09 PM] 5 turbo-level models reliable on things like healthcare, aging, mining research, to building Hankwave, our open-source harness for data work, and then using that to get models to work together at terabyte scale.
[04:36:30 | 1:24:22 PM] Today, we have systems that can self-optimize.
[04:36:33 | 1:24:24 PM] You give them the problem, a way to fail safely, a place to work, and they find the shape of the solution.
[04:36:39 | 1:24:31 PM] They pick the right models, they run the pilots, they scale up, and they Pareto-serve their way to the best option they can find.
[04:36:49 | 1:24:41 PM] So, story.
[04:36:50 | 1:24:41 PM] At my last job, the question we heard most often was, Can we make this decision data-led?
[04:36:58 | 1:24:49 PM] And sometimes that was the right question when we had thousands of vessels on the platform.
[04:37:02 | 1:24:54 PM] The problem is that we also asked it when we only had 50 users.
[04:37:06 | 1:24:58 PM] And if you know statistics, you can explain really well why A/B testing 50 users is a bad idea.
[04:37:12 | 1:25:03 PM] Not because you're not going to get a result, but because you will.
[04:37:16 | 1:25:07 PM] So the only real option was to not produce a number at all, because the moment a number exists, it argues for a result.
[04:37:25 | 1:25:17 PM] Today, though, it is worse.
[04:37:27 | 1:25:19 PM] Interactive agents will always give you an answer.
[04:37:30 | 1:25:22 PM] They'll give it to you quickly.
[04:37:32 | 1:25:23 PM] You ask for a transformation, whatever, and you get a confident yes, sir.
[04:37:36 | 1:25:27 PM] What this means is mistakes add up quickly.
[04:37:38 | 1:25:30 PM] Moment in chat can be a prod nightmare forever, just waiting to be discovered.
[04:37:43 | 1:25:35 PM] The primary reason that this happens is that intelligence, as it relates to data work today, occupies three separate roles that coding agents kind of mash into one context window.
[04:37:54 | 1:25:46 PM] Let's pull those apart, because it'll help a lot when we get to decision models, because they fit into exactly one of these three.
[04:38:01 | 1:25:53 PM] The first one is building and designing the pipeline, which is breaking down the problem, writing the early specs, authorizing spend.
[04:38:08 | 1:26:00 PM] The second one, and this is usually confused with the first and given to the same models, is working inside the pipeline, actually doing the work, reading the PDF, writing to databases, checking results.
[04:38:20 | 1:26:11 PM] Before we get to the third one, I want to make it clear that these two roles pull in very different directions.
[04:38:26 | 1:26:18 PM] The first one wants slower models with heavier, thicker tokens, models that can think more, walk around a problem and see the angles, digest documentation, understand how these pipelines get built, and predict how something will do before it even starts, like Opus or O1.
[04:38:43 | 1:26:35 PM] The models you want inside pipelines, though, are the opposite.
[04:38:47 | 1:26:39 PM] You want them cheaper, faster, specialized, good at following instructions, repeatable workers with knowable defects.
[04:38:54 | 1:26:45 PM] You see the same thing in nature.
[04:38:56 | 1:26:48 PM] A leafcutter ant colony, for example, runs on four different sizes of worker: small, medium, high, ex-high.
[04:39:02 | 1:26:54 PM] As you watch any system that you design, review, or hear about, listen for what slots and where in this layer cake.
[04:39:09 | 1:27:01 PM] It makes a big difference.
[04:39:12 | 1:27:03 PM] Because we had this distinction, bringing in Jev in this newly exploding class of decision models was very easy, because they're workers.
[04:39:19 | 1:27:11 PM] They're built for quick contact with information, and they're deployed at the bottom end of large workloads.
[04:39:26 | 1:27:17 PM] So, third category, though.
[04:39:27 | 1:27:19 PM] This is something we call the hill climbers or surfers, models that can take a first run and self-optimize.
[04:39:34 | 1:27:26 PM] Given the right knowledge, instructions, and an incredibly stable surface to stand on, they can try new things, vary budgets to limit cost exposure, debug quickly, take notes, surf their way not just to the right solution, but the optimal one.
[04:39:50 | 1:27:41 PM] We call that Pareto surfing, and we'll cover it at the end.
[04:39:53 | 1:27:45 PM] But first, let's talk about our experience with Jev.
[04:39:56 | 1:27:47 PM] Jev launched on a Tuesday when we were deep into an entity resolution.
[04:40:01 | 1:27:53 PM] Entity resolution pipeline.
[04:40:03 | 1:27:54 PM] We were working on donors in Ohio's campaign finance, and at this point, a lot of people have seen this chart.
[04:40:09 | 1:28:00 PM] We talked about the results before and adapted some of the ongoing work to the dataset, so you can download it for yourself, prompts and everything.
[04:40:17 | 1:28:08 PM] What we didn't talk about is everything behind that one arrow and what happened when we ran the same idea on the whole state.
[04:40:24 | 1:28:16 PM] Here are all of the architectures we tried.
[04:40:26 | 1:28:18 PM] We started with three designs on a small development set: a cheap reasoning model on its own, Jev with a reasoning model for anything it wasn't sure about, and a reasoning model proposing answers with Jev checking them.
[04:40:39 | 1:28:31 PM] On about 200 held-out families, the cheap reasoning model on its own did as well as Fable for about 2% of the cost.
[04:40:47 | 1:28:39 PM] Jev first got the core answers right, but it missed nine household links because it had confidently said no to every one of them.
[04:40:56 | 1:28:47 PM] So we rewrote the questions without touching the models or the thresholds.
[04:41:00 | 1:28:51 PM] The household question now said what counts as enough evidence, and Jev went from no on all 13 development questions to yes.
[04:41:06 | 1:28:58 PM] And as we scaled it statewide, we ran over a dozen rounds of such qualification.
[04:41:11 | 1:29:03 PM] Each round fixed a definition: what a committee is, what a filer means, when two people live at one address, what does that mean.
[04:41:18 | 1:29:10 PM] Every one of Ohio's 203,317 cases now has a label that says what the answer rests on and how far it was checked.
[04:41:28 | 1:29:20 PM] This is the hierarchy we discovered for this specific problem.
[04:41:32 | 1:29:24 PM] And here's everything we learned about putting decision models into pipelines.
[04:41:36 | 1:29:27 PM] I'll leave this up so you can screenshot it.
[04:41:39 | 1:29:30 PM] But here's where the money went.
[04:41:40 | 1:29:32 PM] The whole statewide job came to $795 on an $800 budget that was set ahead of time.
[04:41:47 | 1:29:38 PM] Checking cost about four times as much as doing, 5.
[04:41:50 | 1:29:41 PM] 45 on second opinions, settling disagreements, and the audit against 128 for first answers.
[04:41:57 | 1:29:49 PM] And before Dev, we expected this work to cost about $10,000.
[04:42:01 | 1:29:52 PM] And now that the pipeline is built and verified, we expect the audit budget for the next state to be close to zero.
[04:42:07 | 1:29:58 PM] The most amazing thing is that our agent, 4A, running on Astra and then later on Opus, found most of these approaches incrementally on its own by building the system, running it, debugging it, and trying new things.
[04:42:22 | 1:30:13 PM] It ran for 10 days, tried over a dozen architectures.
[04:42:25 | 1:30:17 PM] Its hangs ran for more than 4,000 times alongside 90,000 calls to Dev, tried practically every model on the Pareto frontier, and the models inside those runs went through roughly 6 billion tokens.
[04:42:38 | 1:30:30 PM] And once all of that was done, we wrote what we learned back into our library of agentic patterns.
[04:42:44 | 1:30:35 PM] This work leaned on these existing ones, and we're adding new tested ones like the checking ladder.
[04:42:50 | 1:30:42 PM] This is, to me, the value of taking work off the main thread for humans and for agents, because every single one of these iterations was a version-controlled hang.
[04:43:00 | 1:30:52 PM] They were easy to revert, understand, debug, and critique.
[04:43:05 | 1:30:56 PM] So can models do this natively now?
[04:43:08 | 1:30:59 PM] Not quite.
[04:43:09 | 1:31:00 PM] They're missing four things, which we'll go over.
[04:43:12 | 1:31:03 PM] And there's something that doesn't go away, though, as models get bigger and more capable: the prior.
[04:43:18 | 1:31:09 PM] Just like humans, models bring their own priors, their beliefs about what should be in the world to every task.
[04:43:25 | 1:31:17 PM] This is that fourth schema that I mentioned before, the one the model brings with it.
[04:43:31 | 1:31:22 PM] Bigger models, in a strange way, are worse at this sometimes.
[04:43:35 | 1:31:26 PM] They hold on to their beliefs and argue for them even more vehemently.
[04:43:39 | 1:31:30 PM] Here's a few that we ran into.
[04:43:41 | 1:31:32 PM] One pipeline looked for in-kind spelled with an underscore.
[04:43:45 | 1:31:36 PM] The file spelled it with a capital I and a hyphen.
[04:43:48 | 1:31:40 PM] So the model counted 15,658 in-kind contributions as ordinary money, didn't double-check.
[04:43:55 | 1:31:47 PM] The loan repayments also disappeared the same way.
[04:43:58 | 1:31:50 PM] Another one tried four date formats when the file used to fifth.
[04:44:03 | 1:31:55 PM] 99.
[04:44:03 | 1:31:55 PM] 4% of the transaction dates then came out empty, and every row count and dollar so matched, so the agent moved on.
[04:44:12 | 1:32:03 PM] Several runs noticed that loan amounts were negative, decided that the sign was redundant, and stored the absolute value.
[04:44:19 | 1:32:11 PM] A net of 784,000 became 5.
[04:44:22 | 1:32:13 PM] 3 million dollars of debt in the end, validated by multiple models.
[04:44:28 | 1:32:20 PM] And this is quickly becoming the largest class of error I see across companies in data work as models take over.
[04:44:34 | 1:32:25 PM] Sometimes you can solve this just by not vibing, by checking results and applying human intuition.
[04:44:39 | 1:32:30 PM] And what you're actually doing there when you do this is interesting.
[04:44:43 | 1:32:34 PM] You're intersecting your priors with the models.
[04:44:46 | 1:32:38 PM] In that first example, any human would catch missing in-kind contributions if they knew campaign finance or think to check.
[04:44:54 | 1:32:45 PM] That's how we found it.
[04:44:55 | 1:32:46 PM] But humans, speaking as a human on this particular task, are expensive.
[04:44:59 | 1:32:50 PM] They are slow.
[04:45:00 | 1:32:51 PM] They pause timelines.
[04:45:01 | 1:32:53 PM] They're even more non-deterministic than models, and they hate interruptions.
[04:45:06 | 1:32:57 PM] But it turns out you can also get really far with cross-model prior intersection.
[04:45:11 | 1:33:02 PM] On our 200 held-out families, Jev and Luna agreed on 194, and none of those shared answers was wrong.
[04:45:19 | 1:33:10 PM] Every error sat in the six families where they disagreed.
[04:45:23 | 1:33:14 PM] Models from different families, different pedigrees, tend to disagree more and have different priors than models in the same group, for example.
[04:45:30 | 1:33:21 PM] The exception, I'm not going to say who, are models that are distilled outside the same company.
[04:45:36 | 1:33:28 PM] So with that kind of work, you can shrink the surface quite a bit and the errors along with it down to a much smaller but persistent class of problems that apply to LLMs as a species.
[04:45:48 | 1:33:39 PM] So in one benchmark, four different model families produced the same total down to the cent because they all shared a signed convention that the answer key didn't.
[04:45:56 | 1:33:47 PM] And once you get that far, the only way forward is to list them, look out for them, and apply specific solutions.
[04:46:03 | 1:33:55 PM] So going back, what are the four things we're missing to be able to self-optimize?
[04:46:09 | 1:34:00 PM] Number one is a stable deployment surface.
[04:46:13 | 1:34:04 PM] We use Hankweave for this, a harness that takes the fast-moving surface of agent runtimes like Claude Code and Py, and then exposes a consistent, well-tested login API interface with checkpointing, rollback, budget enforcement, everything built in, something you can build on.
[04:46:28 | 1:34:20 PM] But other things fit this description.
[04:46:31 | 1:34:22 PM] To be fair, for headless data work, Hankweave, I would say, is still the oldest, most stable, and the most open.
[04:46:36 | 1:34:28 PM] I'll leave the skill up if you'd like to try it.
[04:46:39 | 1:34:31 PM] Number two is some way to bound your experiments.
[04:46:42 | 1:34:34 PM] You can't test unless you can control cost, time, and access as resources.
[04:46:48 | 1:34:39 PM] The third one is know-how and methodology.
[04:46:51 | 1:34:43 PM] We found that this new class of models can take everything we've learned from two years of deployments: agentic patterns, debugging techniques, prompting, and apply it to complex problems.
[04:47:01 | 1:34:52 PM] With the right abstraction layer, you can express it very token efficiently, and the models can implement it.
[04:47:07 | 1:34:58 PM] The fourth and the most important one is a failure surface.
[04:47:10 | 1:35:02 PM] Our community said, Give me a place to stand and I will move the earth.
[04:47:14 | 1:35:06 PM] And in our case, we haven't met a problem or a constraint that we couldn't iterate ourselves to solving, given a stable stack to build on and a failure surface to iterate against.
[04:47:25 | 1:35:16 PM] That last one has been the hardest to put into words and into tooling and instructions that helps models get there.
[04:47:31 | 1:35:23 PM] The current best models are still only barely good at this, sparks of intelligence, so to speak.
[04:47:37 | 1:35:29 PM] The whole process, though, involves going through six stages.
[04:47:40 | 1:35:32 PM] First, we spec the job and we split it.
[04:47:42 | 1:35:34 PM] For Jeff, that means splitting some 800,000 rows into 200,000 smaller specialized cases, and each of those cases into typed questions: what kind of donor, one donor, you know, different, different questions that needed to get answered.
[04:47:56 | 1:35:48 PM] Then we decide the failure surface.
[04:47:58 | 1:35:50 PM] In this case, we ran good models on a small slice of the data, with some of it being manually checked, to set a baseline that we can fail against.
[04:48:06 | 1:35:58 PM] In other cases, we've set automated failure systems, we've set schema checks, we've also covered behavior as a thing that we can measure against.
[04:48:15 | 1:36:07 PM] But it's very important to have to define a failure surface before you ever start.
[04:48:21 | 1:36:12 PM] But now comes the fun part.
[04:48:22 | 1:36:13 PM] We run minimal bounded pilots to test architecture, and once something starts working, we move those checks into rigs, code that runs between bounded work segments that we call codons.
[04:48:34 | 1:36:25 PM] These codons are then reused, looped independently, validated, and placed in sequence.
[04:48:41 | 1:36:32 PM] Finally, working pipelines get deployed to production, where they can slowly mature.
[04:48:46 | 1:36:37 PM] And that middle part is where the surfing happens.
[04:48:49 | 1:36:41 PM] We find an architecture that gives a solid result, we use it as a baseline, then we swap models and some other parts for faster, cheaper options, compare against known intermediates, tighten the requirements for success each time, moving closer and closer to the ideal, and you just watch the frontier move.
[04:49:06 | 1:36:57 PM] Being able to break a complex problem into pieces means each piece can move to its own best position, as Adam Smith would say.
[04:49:15 | 1:37:06 PM] In a system like this, ontologies exist as intermediates between intelligence and result, which makes them easier to reuse.
[04:49:23 | 1:37:14 PM] That's the other half of what I mean by just-in-time ontologies.
[04:49:26 | 1:37:18 PM] It's built when the job needs it, kept with its receipts, and reused when the next job needs the same thing.
[04:49:34 | 1:37:25 PM] And once you have those, you can make these things cheaper.
[04:49:37 | 1:37:28 PM] You can run them in parallel across datasets to scale up.
[04:49:41 | 1:37:32 PM] I close with an apology, right, that the answer is there is no ontology.
[04:49:46 | 1:37:37 PM] Not a universal one, at least.
[04:49:48 | 1:37:39 PM] There never was one.
[04:49:49 | 1:37:41 PM] The good news is that this makes every ontology and schema valid, as long as you can label and preserve the context around it.
[04:49:56 | 1:37:48 PM] And if we can harness this cheap intelligence that's starting to percolate through the world around us,
[04:50:01 | 1:37:53 PM] Around us, we're rapidly approaching a future where any information in any format is made as useful as it can be.
[04:50:07 | 1:37:59 PM] And at Perplexity, we're working as hard as we can to make that future a reality.
[04:50:12 | 1:38:04 PM] Thank you.
```
