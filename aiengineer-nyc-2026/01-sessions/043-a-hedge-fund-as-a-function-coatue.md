---
session_id: "043"
title: "A Hedge Fund as a Function"
agenda_title: "A Hedge Fund as a Function"
speakers: ["Frank Long"]
start_wall: "4:02:12 PM ET"
end_wall: "4:16:26 PM ET"
video_start: "07:14:20"
video_end: "07:28:34"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=26060s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "keynote"
tags: [ai-investing, agent-architecture, hedge-fund, evaluation, hyperparameter-tuning, human-in-the-loop, coatue]
confidence: "high"
---

# A Hedge Fund as a Function

> Coatue Head of AI Frank Long models a hedge fund as a function that compresses external and internal context into one tuple — selection, size, timing — and decomposes it into evaluable steps, each run by the best of four runner types: code, statistics, LLMs, or people.

## TL;DR
- A hedge fund is a function. It takes external context (news, prices, filings) and internal context (positions, risk limits, case-study history). It returns one tuple: selection, size, timing. The portfolio is a time series of that tuple.
- Agents cannot beat humans on information the humans can see but the agents cannot. Frank demands API parity: every pixel on a human screen must be reachable by an agent through an API.
- Break the function into chained steps — gather, analyze, decide. Give each step the best runner: deterministic code, classical statistics or ML, LLMs, or people. Optimize for absolute quality, not for the share of steps automated.
- Every design choice is a hyperparameter: chunking, image handling, control-flow order, model size, thinking effort, harness, skills, hooks. With roughly 10 hyperparameters and 20 valid values per node, the search space is effectively infinite.
- Evaluation is the North Star. Compartmentalize the problem into units you can evaluate, then hill climb. Without that measure, you are only changing settings at random.
- The same shape — a state machine that reads the world and makes coherent decisions — applies to policy, nonprofits, drug discovery, and corporate strategy.

## Key lessons
1. Frame the firm as a single function with a crisp signature. Inputs: external context (news, prices, filings) and internal context (current positions, liquidity and risk requirements per name, past case studies and history with sectors, stocks, and management teams). Output: one tuple — selection, size, timing. The product is a time series of this tuple that constructs the portfolio.
2. Give agents API parity with human screens. Frank's analogy: hire the greatest investors alive, then give them a computer with logins to only 25% of your services. Their intelligence is immaterial without tools. News, prices, and filings must arrive via API, not via drag-and-drop or copy-paste.
3. Decompose before you build. You cannot jam all inputs into a context window and get three magic numbers. Split the function into gather (collect, filter relevant from irrelevant), analyze (form a view for public and private markets), and decide (emit the three-parameter decision object). Each step's output is the next step's input, so you can build and tune each one alone.
4. Pick the best runner per step from four types. Deterministic code is fast, cheap, and reliable — use it for a price-to-earnings ratio under 15. Classical statistics and ML model more complex relationships, such as a fitted regression line for a pattern. LLMs and agents are state of the art for summarization — no set of if statements will beat them. People remain the best runner where judgment and real-world navigation matter, such as meeting a company's management team. Frank cites the new Unitary robots but still sends a person to that meeting.
5. Treat pipeline design as hyperparameters. For the Korean-news case study alone: how to chunk articles, whether to pass images as images or convert them to text, translate versus extract versus summarize, and the control-flow order (collect then translate then check quotes, or dedupe then filter then pull external figures, or note-first confirmatory search, or a trained red team). Within the LLM bucket you also tune model size (big, medium, small), thinking effort (X high, high, medium), the harness, which skills load with the harness, and which hooks load with the skills.
6. Most steps are multi-runner. Reality is combinatorics across the four buckets: deterministic code plus LLM plus statistical method, or a human with LLM support using a deterministic system to search and pull information.
7. Hill climb against an evaluation North Star. The way to break the problem down is to compartmentalize it into pieces you can understand and evaluate. Without that measure, you are just fidgeting — swapping an LLM for an ML system here, an if statement there, with no signal of improvement.
8. The data foundation is cultural, not only technical. Coatue has filed every note about every trade, every decision made or not made, and what went well or badly, for decades. That recorded history, plus a rigorous culture and strong data-science systems, is what positioned the firm to expose everything to AI. Frank's estimate of the real graph: massively complex, with at least 10 hyperparameters and at least 20 valid values per node, so the search space is basically infinite — and the great challenge is laying it out so people can absorb it both technically and organizationally.

## Notable quotes
- "Every single thing that a human can see in pixels on the screen, an agent in your building should be able to see via API." [07:16:17 | 4:04:08 PM]
- "There is no glory in automating things for the sake of automating things." [07:23:46 | 4:11:37 PM]
- "And if you don't have a North Star to hill climb against, you're just kind of, you're just fidgeting around." [07:27:00 | 4:14:51 PM]
- "And last year when I joined Coatue, the bet that I wanted to make was, I think that agents will have an even bigger impact in investing than they did at coding." [07:15:06 | 4:02:57 PM]

## Session narrative
The MC hands off at [07:14:20] by introducing "our next talk, which is with Frank Long, the head of AI at Kotu" — the automatic transcription renders Coatue as "Kotu" here and "Co2" later. Frank opens with a career bet in the style of his firm: he joined Coatue the year before because he believes agents will have an even bigger impact on investing than they had on coding. He calls it a big statement, given that the whole audience exists because of AI's effect on coding, and says he believes it strongly. The talk is his framework for realizing that impact.

The core abstraction comes next: a hedge fund as a function that takes two parameters — context external and context internal — and returns one tuple: selection, size, timing. The product is a time series of that tuple. On inputs, his philosophy is blunt: "We use our screens, we look at stuff, we do work," and everything a human sees in pixels should reach agents via API. He illustrates with the greatest-investors-without-logins analogy, then walks through external context (news, prices, filings) and internal context (positions, liquidity and risk requirements, case-study history). He credits Coatue's decade-plus of data science systems and a culture that filed every note on every decision — no credit to himself, he notes — as the foundation that made AI exposure possible.

The middle of the talk is a case study: interpreting Korean-language news, chosen because Asian and Korean media moved markets in a year when semiconductors and AI were the dominant theme, and Coatue's staff largely does not speak Korean. He enumerates the sub-steps — collect through MCP, CLI, or licensed feeds; chunking choices; images as images versus images as text; filtration of immaterial items such as NBA coverage among Korean readers; translate, extract, or summarize; cross-reference against internal notes and meeting recordings — and frames every knob as a hyperparameter. Then he introduces the runner taxonomy: code, statistics, LLMs, and people, each with a concrete example, and the discipline that follows from it: maximize absolute quality per piece, because there is no glory in automating for automation's sake. He shows that even control flow is a search space — several valid orderings of the same steps — and that most real steps are multi-runner combinations. When he sketches the true Coatue graph, he jokes that the dense slide is his screensaver, then estimates at least 10 hyperparameters with at least 20 valid values per node, making the search space effectively infinite. The only defense is compartmentalization you can evaluate and hill climb against.

He closes by lifting the frame above investing: the real object is a state machine that takes information from the world and understands it well enough to make coherent decisions, with the same problem shape in policy, nonprofits, drug discovery, and corporate strategy. He says forums like this one matter because people from different spaces converge on the same problem. He offers to keep talking in the hallway, points to his socials, and ends at [07:28:31]. Timing note: the agenda listed this keynote at 4:30pm–4:48pm, but the livestream ran it early, from 4:02pm to 4:16pm ET; the wall times above follow the video.

## Speaker details
**Frank Long** — Head of AI, Coatue. He is also a Partner on the investment staff at Coatue Management, the New York-based technology investment firm, where he covers the AI stack "from tokens down to electrons" (applications through infrastructure). He joined Coatue in January 2026 from Goldman Sachs, where he worked at the Goldman Sachs Global Institute on AI and the intersection of emerging technology and geopolitics, and where he was named to the Managing Director class of 2025. At Coatue he co-authored the July 2026 piece "Agents Are the New Users of CPUs," which argues that AI agents are inverting the GPU-to-CPU demand ratio. He is based in New York, studied at The University of Texas at Austin, and posts on X as @fyxlong.

Links: [LinkedIn](https://www.linkedin.com/in/franklong1) | [X/Twitter](https://x.com/fyxlong)

In the session he introduced himself this way: "I work at Coatue, which is a technology investment firm across public and private markets," and "last year when I joined Coatue" — both consistent with the speaker record.

## Full timestamped transcript
```
[07:14:20 | 4:02:11 PM] With that, I would love to introduce you to our next talk, which is with Frank Long, the head of AI at Kotu.
[07:14:28 | 4:02:19 PM] He's going to be talking about a hedge fund as a function.
[07:14:30 | 4:02:22 PM] Let's welcome Frank.
[07:14:48 | 4:02:39 PM] Exciting to be here.
[07:14:49 | 4:02:40 PM] My name is Frank.
[07:14:50 | 4:02:41 PM] I work at Coatue, which is a technology investment firm across public and private markets.
[07:14:54 | 4:02:46 PM] So in our business, what you really need to do is be able to take high conviction bets on big themes and watch those play out.
[07:15:03 | 4:02:55 PM] I think, honestly, a career is the same way.
[07:15:06 | 4:02:57 PM] And last year when I joined Coatue, the bet that I wanted to make was, I think that agents will have an even bigger impact in investing than they did at coding.
[07:15:15 | 4:03:06 PM] I know that's a big statement.
[07:15:16 | 4:03:08 PM] We're all here because of the transformative impact that AI has had in coding, but I really believe it strongly.
[07:15:23 | 4:03:14 PM] And today I want to talk a little bit about the framework that we use to actually realize that impact.
[07:15:29 | 4:03:20 PM] So at a high level, you can think about a hedge fund as a function that takes in two parameters, context external and context internal, and spits out one tuple: selection, size, timing.
[07:15:43 | 4:03:35 PM] What stock, how much, when, right?
[07:15:48 | 4:03:39 PM] And I think this is a good framework to actually ground our work, which is we're trying to solve this compression problem of how do you take all the information in the world and spit out this one simple tuple.
[07:16:01 | 4:03:52 PM] And the product that we provide is essentially a time series of this tuple that constructs a portfolio.
[07:16:08 | 4:03:59 PM] So let's start from the top, which is the inputs.
[07:16:11 | 4:04:02 PM] Very simple philosophy.
[07:16:13 | 4:04:04 PM] We use our screens, we look at stuff, we do work.
[07:16:17 | 4:04:08 PM] Every single thing that a human can see in pixels on the screen, an agent in your building should be able to see via API.
[07:16:23 | 4:04:15 PM] The analogy I use is imagine you brought the smartest people ever, the greatest investors alive, and you brought them into your company, but you gave them a computer without logins to 75% of your services.
[07:16:36 | 4:04:28 PM] It's almost immaterial how smart this system is if it doesn't have the tools to actually action that.
[07:16:42 | 4:04:34 PM] So the two parts: external context, right?
[07:16:45 | 4:04:37 PM] No surprises here.
[07:16:46 | 4:04:38 PM] Think the news, prices, filings.
[07:16:49 | 4:04:41 PM] All of that should be easily accessible and not via dragging and dropping, copy and pasting, like directly via API.
[07:17:00 | 4:04:51 PM] Internal context is just as important, right?
[07:17:04 | 4:04:55 PM] So this is your own firm situation.
[07:17:06 | 4:04:57 PM] So that might be our current positions, potential liquidity and risk requirements we have around certain names, and past case studies or, you know, history with a certain sector or stock or management team.
[07:17:20 | 4:05:11 PM] That stuff's all super important.
[07:17:22 | 4:05:13 PM] So this is the foundation, and I think, no credit to me, Kotu has been an amazing leader on this for over a decade.
[07:17:29 | 4:05:20 PM] It's both technological and cultural.
[07:17:31 | 4:05:23 PM] We have an amazing data science team, amazing, amazing processes, amazing, amazing systems that bring all this in.
[07:17:37 | 4:05:29 PM] And just as importantly, we have a culture that is super, super rigorous and built from the ground up to capture all this insight.
[07:17:45 | 4:05:36 PM] For decades, we filed every single note about every single trade, about every single decision we made or didn't make, about what went well and what didn't go well, and that's poised us to expose us to AI.
[07:17:57 | 4:05:49 PM] So if you think about it, I probably can't just take all of those things, jam them into a context window, and get my magic three numbers and go home, right?
[07:18:08 | 4:05:59 PM] It can't be that easy.
[07:18:09 | 4:06:01 PM] You probably have to break down this function a bit further, right?
[07:18:14 | 4:06:06 PM] So maybe the first step is I take in that external and internal context and I gather it, right?
[07:18:21 | 4:06:13 PM] I want to gather it.
[07:18:22 | 4:06:14 PM] I want to filter out what's relevant and not relevant.
[07:18:25 | 4:06:16 PM] Okay, well, I pulled some news articles about the NBA.
[07:18:28 | 4:06:20 PM] That probably isn't material to stocks, but oh, well, this is actually related to some local permitting that might actually impact data centers, like.
[07:18:37 | 4:06:28 PM] There's a lot of nuance in this gather step.
[07:18:41 | 4:06:32 PM] Then you'll see probably the next step is I need to analyze that information and form a view, right?
[07:18:46 | 4:06:37 PM] I actually need to think about what that means for the markets, public and private.
[07:18:53 | 4:06:45 PM] And then I need to take that view and turn it into a decision.
[07:18:57 | 4:06:48 PM] A decision object has these three parameters, right?
[07:19:01 | 4:06:52 PM] These three sort of subpieces.
[07:19:03 | 4:06:55 PM] So you can see every single step has an input and an output, and the input for the subsequent step is the output that the previous function generated.
[07:19:14 | 4:07:06 PM] I think as an engineer, this is a way for me to conceptualize the problem in a way that makes a lot of sense.
[07:19:21 | 4:07:12 PM] But even this, it really can't be as simple as writing three functions, right?
[07:19:27 | 4:07:18 PM] So let's just, to really appreciate the scope and understand the full complexity of the problem, let's look into the first step, a tiny subpiece of a tiny subpiece of just gathering information, and let's do a case study on interpreting the news, right?
[07:19:45 | 4:07:37 PM] So it's probably no secret to you guys that, you know, news from Asia and Korean media outlets has been super important this year because semis, AI have been a huge, huge theme in the market.
[07:19:59 | 4:07:51 PM] Huge theme.
[07:19:59 | 4:07:51 PM] And I think this is an area where AI is poised to have a lot of impact, is reading Korean language news better than our completely non-Korean-speaking staff, right?
[07:19:59 | 4:07:51 PM] Huge theme.
[07:20:13 | 4:08:04 PM] I think I have a good thesis that this might be a good use case.
[07:20:15 | 4:08:07 PM] So you can imagine the first step is I have articles.
[07:20:21 | 4:08:13 PM] I need to collect the articles, right?
[07:20:23 | 4:08:15 PM] So this could be an MCP.
[07:20:25 | 4:08:17 PM] This could be a CLI.
[07:20:27 | 4:08:19 PM] License the data feeds, clean the data feeds.
[07:20:29 | 4:08:21 PM] There's actually a lot of ways to do this, and a lot of dimensions of freedom for how you can even just write this simple piece.
[07:20:36 | 4:08:28 PM] How do I chunk it when I pass it to the LLM?
[07:20:39 | 4:08:31 PM] Do I want to pull the images as images?
[07:20:42 | 4:08:34 PM] Do I want to pull the images and then turn the images into text?
[07:20:46 | 4:08:38 PM] There's actually a lot of knobs here, and I almost think about those knobs as like hyperparameters in a traditional machine learning system, right?
[07:20:54 | 4:08:46 PM] I think about each of these knobs as something for me to tune and optimize against.
[07:20:59 | 4:08:51 PM] Obviously, filtration.
[07:21:02 | 4:08:53 PM] We talked about it.
[07:21:03 | 4:08:54 PM] There are probably Korean NBA fans, right?
[07:21:07 | 4:08:58 PM] There's probably a bunch of stuff that's not necessarily material to the names and themes and stocks in our portfolio that really, really matter, right?
[07:21:17 | 4:09:09 PM] So I want to make sure that I filter those out.
[07:21:22 | 4:09:14 PM] There's this like translate slash extract slash should I summarize?
[07:21:26 | 4:09:17 PM] Should I extract this into some sort of structured form?
[07:21:30 | 4:09:21 PM] Again, so, so many ways to do this, so many ways to experiment how to expose information to the model.
[07:21:35 | 4:09:27 PM] And one of the reasons this is hard is it keeps changing.
[07:21:40 | 4:09:31 PM] And obviously checking.
[07:21:41 | 4:09:33 PM] Checking like our own internal notes, our own internal views, potential conversations we've had, meeting recordings against these things.
[07:21:49 | 4:09:40 PM] We actually need to cross-reference those things.
[07:21:52 | 4:09:44 PM] Actually, the idea of pulling information from disparate sources and cross-referencing them, that's super powerful.
[07:21:59 | 4:09:50 PM] So you'll see on the right here, I have code, LLM, LLM, code, person.
[07:22:04 | 4:09:56 PM] There's many, many ways to run these functions.
[07:22:06 | 4:09:58 PM] I think about, oh yeah, and finally update, potentially we update our views.
[07:22:14 | 4:10:05 PM] So there's many ways to run these functions.
[07:22:16 | 4:10:08 PM] I think of each line as having a runner, and the most obvious one is code.
[07:22:23 | 4:10:15 PM] Code is very good.
[07:22:24 | 4:10:16 PM] It's fast, it's cheap, it's reliable.
[07:22:27 | 4:10:19 PM] So for something like, if the price to earnings ratio is less than 15, I should just use deterministic code for that.
[07:22:36 | 4:10:28 PM] Runner number two is statistics, classical machine learning, and you can imagine fitting a line to a regression for a specific pattern.
[07:22:46 | 4:10:37 PM] This is very powerful because you can model much more complex relationships than just pure deterministic code, right?
[07:22:53 | 4:10:45 PM] And for even more complex relationships, the reason we're all here, LLMs, AI agents, that's another type of runner, right?
[07:23:00 | 4:10:52 PM] So for something like summarization, that's the state of the art, right?
[07:23:05 | 4:10:56 PM] It's probably totally impossible to build a bunch of if statements that can summarize better than a modern LLM.
[07:23:13 | 4:11:05 PM] And of course, people.
[07:23:15 | 4:11:07 PM] People are important runners in the system, right?
[07:23:18 | 4:11:09 PM] So imagine a function meeting the management team of a company.
[07:23:22 | 4:11:14 PM] I probably don't want to send, I mean, I like the new Unitary robots, but I probably don't want to send an LLM or an AI agent in to do that.
[07:23:29 | 4:11:20 PM] I probably don't want to send an if statement into that meeting.
[07:23:31 | 4:11:23 PM] I think there's many cases where because of judgment and the ability to navigate the real world and all of these things, a person is the best runner for a given piece of the function.
[07:23:43 | 4:11:34 PM] And I think this is like a super, super important point.
[07:23:46 | 4:11:37 PM] There is no glory in automating things for the sake of automating things.
[07:23:50 | 4:11:42 PM] The goal is not to take as many things and make them LLM as possible for us.
[07:23:54 | 4:11:46 PM] The goal is, for any given piece of this function, what can I do to maximize absolute quality?
[07:24:04 | 4:11:56 PM] And if you actually think about the function, it probably looks something like this.
[07:24:08 | 4:12:00 PM] It's probably not just a linear statement of a bunch of different things.
[07:24:12 | 4:12:03 PM] There's probably all kinds of branching logic and all kinds of ways to actually fork this.
[07:24:16 | 4:12:08 PM] So maybe I want to collect the information and then translate it.
[07:24:20 | 4:12:11 PM] And my main goal is to extract quotes and check those against sources to make sure that these are actually things that people said, and that's my approach.
[07:24:27 | 4:12:19 PM] But that might be totally wrong.
[07:24:29 | 4:12:20 PM] Maybe actually what I want to do is I want to dedupe, and then I want to filter, and then I want to pull external figures.
[07:24:34 | 4:12:26 PM] Or maybe I want to do something totally different.
[07:24:37 | 4:12:28 PM] I actually want to—I'm passing in a note first, and I actually just want to find other confirmatory data points.
[07:24:42 | 4:12:33 PM] Or maybe I'm training a red team.
[07:24:44 | 4:12:36 PM] There's a million different ways to configure this.
[07:24:46 | 4:12:38 PM] So yet again, more hyperparameters within the control flow, right?
[07:24:53 | 4:12:45 PM] So, so many ways to think about just this very simple problem: appending, filtering, summarizing, aggregating the news for LLMs.
[07:25:02 | 4:12:54 PM] And each of these boxes probably has an optimal runner, right?
[07:25:10 | 4:13:01 PM] So the optimal runner might be deterministic code for collection, right?
[07:25:15 | 4:13:07 PM] I'm pulling last 24 hours for a given source.
[07:25:20 | 4:13:11 PM] That's deterministic code.
[07:25:22 | 4:13:13 PM] Filtration, decision models maybe.
[07:25:25 | 4:13:17 PM] LLMs.
[07:25:26 | 4:13:17 PM] Statistical methods.
[07:25:28 | 4:13:19 PM] A combination, right?
[07:25:30 | 4:13:22 PM] So this probably understates the complexity.
[07:25:32 | 4:13:24 PM] The reality is most things are multi-runner.
[07:25:35 | 4:13:26 PM] Most things have deterministic code plus LLM plus statistical method, or a human with LLM in conjunction.
[07:25:42 | 4:13:33 PM] The reality is it's probably combinatorics between my four buckets, and there's even more buckets than that, because within the LLM category, I can tune the model.
[07:25:53 | 4:13:44 PM] I can choose big model, small model, medium model.
[07:25:56 | 4:13:47 PM] I can tune thinking effort: X high, high, medium.
[07:25:59 | 4:13:51 PM] I can tune harness.
[07:26:01 | 4:13:52 PM] I can choose the harness.
[07:26:02 | 4:13:53 PM] I can choose which skills load with the harness.
[07:26:03 | 4:13:55 PM] I can choose which hooks load with the skills.
[07:26:06 | 4:13:57 PM] So yet again, more hyperparameters within my search space.
[07:26:09 | 4:14:00 PM] I have an absolutely enormous amount of hyperparameters within my search space.
[07:26:13 | 4:14:04 PM] And this is just for this one tiny problem, right, of just filtering the news.
[07:26:17 | 4:14:08 PM] So the way to think about breaking down these problems is, what can I actually compartmentalize in a way that we can understand and evaluate?
[07:26:27 | 4:14:18 PM] Because that's what I'm hill climbing against, right?
[07:26:29 | 4:14:21 PM] Otherwise, I'm just tuning these things.
[07:26:30 | 4:14:22 PM] I'm, okay, well, that should actually be a machine learning system instead of an LLM.
[07:26:35 | 4:14:26 PM] That should be a little model that we train.
[07:26:36 | 4:14:28 PM] Oh no, that actually shouldn't be a model at all.
[07:26:38 | 4:14:30 PM] That should be an if statement.
[07:26:40 | 4:14:32 PM] Or, oh man, LLMs are really, really bad at translating that to portfolio impact.
[07:26:44 | 4:14:36 PM] It should really be a human on that step, but they're using a deterministic system to help them search and pull the information.
[07:26:51 | 4:14:42 PM] It could be all different things, right?
[07:26:53 | 4:14:45 PM] And if you don't have a North Star to hill climb against, you're just kind of, you're just fidgeting around.
[07:27:00 | 4:14:51 PM] And I think I cannot convey enough that this is just one tiny thing we do.
[07:27:05 | 4:14:57 PM] Imagine every single data source that we pull in, there's probably more than just three transformations to get them to the intermediate output.
[07:27:12 | 4:15:04 PM] So the actual graph of Co2 and funds like Co2, it actually probably looks—oh, not like this.
[07:27:20 | 4:15:12 PM] This is my screensaver.
[07:27:23 | 4:15:15 PM] The actual graph probably looks something like this, right?
[07:27:27 | 4:15:18 PM] It's probably massively complex.
[07:27:28 | 4:15:20 PM] In each of those nodes, we just talked about at least 10 hyperparameters with at least 20 different valid values for them.
[07:27:37 | 4:15:29 PM] So the search space is basically infinite.
[07:27:40 | 4:15:31 PM] And figuring out how to actually lay this out in a way that you can comprehend, both from a technical perspective, but also absorb culturally, organizationally, that is the great challenge of applying AI and investing.
[07:27:54 | 4:15:46 PM] And beyond investing.
[07:27:55 | 4:15:47 PM] What we're really talking about is creating a state machine that can take information from the world and understand it well enough to make coherent decisions.
[07:28:06 | 4:15:57 PM] There's use cases for this far and above wider than just investment firms, in policy, in nonprofits, in drug discovery, in corporate strategy.
[07:28:17 | 4:16:09 PM] I think one of the most exciting things for me about being in forums like this is talking to other people in different spaces with different problems that kind of congeal on the same problem space.
[07:28:28 | 4:16:19 PM] I'd love to keep talking about this.
[07:28:29 | 4:16:20 PM] I'll hang out in the hallway afterwards.
[07:28:31 | 4:16:22 PM] Here are my socials, and thank you everyone for your time.
```
