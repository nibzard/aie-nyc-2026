---
session_id: "012"
title: "Towards Autonomous Analysts in Finance"
agenda_title: "Towards Autonomous Analysts in Finance -- Yijia Liang (Compound AI)"
speakers: ["Yijia Liang"]
start_wall: "10:40:32 AM ET"
end_wall: "10:56:06 AM ET"
video_start: "01:59:56"
video_end: "02:15:30"
video_url: "https://www.youtube.com/watch?v=jiUC6IUMdvc&t=7196s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: ["autonomous-agents", "finance", "buy-side", "multiplayer-agents", "office-engine", "long-running-agents", "context-at-scale"]
confidence: "high"
---

# Towards Autonomous Analysts in Finance

> A former Coatue VP and Compound AI co-founder explains how Compound rebuilt Excel, PowerPoint, and Word from scratch with coding agents so multiplayer, long-running agents can move buy-side finance work from copilot to autopilot.

## TL;DR
- Personal agents took off in the last three months for three reasons: reliable background agents, proactivity, and integrations. None of that transfers directly to institutional finance, where a "simple task" means turning a 15,000-file data room into IC models, slides, and memos.
- Compound rebuilt Office from scratch because off-the-shelf options failed: 1.5 trillion input-output tokens and over 8 million lines of code, including an Excel engine of 800,000 lines of Rust built on the open-source IronCalc, benchmarked against Office as the oracle with pixel-perfect Rust renderers.
- Multiplayer matters: every Compound agent ships with a built-in email inbox because finance workflows run through Outlook, with per-thread read/write authentication (NDA privacy) and deliberately added latency so the agent feels like a human teammate.
- Context at scale is solved two ways: agent swarms that read files via grep instead of vector DB indexing for breadth, and the native Excel engine's richer APIs for depth (30 MB workbooks, two million formulas) at lower cost than code generation.
- The talk closes with a copilot-versus-autopilot map: spreading comps is delegation-ready today; drafting a 50-page IC presentation off the cuff is still copilot territory.

## Key lessons
1. Frame the gap by analogy. Personal agents work because of reliable background agents, proactivity, and integrations (email, Drive, calendar). The finance analog of booking a restaurant is going from a data room to fully prepared IC materials, compressing a four-week process into a few days.
2. Single-player agent workflows break in finance. People who deploy Claude or ChatGPT inside institutions work in plugins and web apps, then shuttle files through email and Teams for feedback. Compound's answer is to put every person who matters on a deal onto the same thread, talking to one agent that shares everyone's context.
3. Agent email is a design problem, not an integration problem. Beyond authenticating that everyone on a thread has read/write access (deals are always under NDA), you must add latency on purpose: multiple people emailing in quick succession should not trigger multiple acknowledgment spams, because the goal is a human-like teammate.
4. Off-the-shelf Office automation did not survive evaluation. Desktop Excel/PowerPoint/Word plugins, VM-based computer use, and engines like OpenPyXL all failed, so Compound pointed agents at one objective function, "recreate Office in full fidelity," and let loops run: 1.5 trillion input-output tokens and over 8 million lines of code.
5. Build parity by using Office itself as the oracle. The team started from IronCalc for Excel, benchmarked against real files from online corpora and internal sets, and landed an 800,000-line Rust replica that recalculates 20 MB workbooks 4x faster than desktop Excel, which is bound to one CPU.
6. Owning the editor owns the quality loop. With a native engine you control the write, render, check, and fix loop; OpenPyXL offers no renderer to check formatting, and Microsoft's own interface, in the speaker's words, provides "admittedly very little."
7. Handle context breadth with swarms, depth with the engine. For a 15,000-file data room, coding agents that read files through grep or similar methods beat vector DB indexing, and each finding is grounded in citations to the source document. For a 30 MB workbook, the engine lays out content in a model-readable format instead of printing context through generated code, which is faster and cheaper.
8. Map what is autopilot versus copilot. Spreading comps is already delegation-ready (the ChatGPT finance products mentioned earlier in the day cover it); a 50-page IC deck built the way you want is not. The speaker's analogy: finance today is where coding was when OpenAI 4.5 launched last December and developers started to "truly vibe it," trusting outputs when checks and tests are sufficient.

## Notable quotes
- [02:01:26 | 10:42:01 AM] "But all the factors that make personal agents work so well doesn't really translate to institutional finance today."
- [02:05:56 | 10:46:31 AM] "And with coding agents dramatically improving and bringing the cost of software down, we decided to just build our own office from scratch."
- [02:07:22 | 10:47:57 AM] "We needed one-for-one parity because at the end of the day, these firms only trust what they can download and what they can send."
- [02:15:05 | 10:55:41 AM] "I strongly believe we're at an inflection point in the adoption curve, and that people are slowly becoming more ambitious and they're moving away from copilots to autopilots."

## Session narrative
The slot begins cold. Per the boundary verification, no host introduction was captured: the previous transcript sentence is 15 minutes earlier, and the recording opens about 30 seconds into the speaker's introduction, mid-sentence at "Think cloudy. Cloud agents that Devin or Factory might do for coding agents, but tailoring that for buy-side institutions." The speaker then grounds himself in the work: he was an analyst in a previous life, a vice president at Coatue (rendered "Co2" by the transcription) for about three years in late-stage private software investments, and he left to build tools that replace his old job. Two show-of-hands questions set up the problem: many in the room had used a personal agent (transcribed as "user instinct"; the product name "Instinct" appears later) in the last day, but almost nobody knows a finance analyst who fully delegates work to AI.

The core argument asks why personal agents took off in the last three months and gives three answers: reliable background agents, proactivity, and integrations. Each fails to map onto institutional finance. A restaurant booking becomes a data room turned into IC models, slides, and memos. A managing director does not want a rogue agent burning tokens without soliciting input. The context is not email and calendar; it is a 15,000-file data room and petabytes of unstructured SharePoint and Box data from the firm's 40-year history. Compound's response has three prongs: multiplayer agents embedded in the app, reliable long-running parallel task execution, and context management. The multiplayer section is the most concrete: every agent comes with a built-in inbox because most institutional workflows run through Outlook with chains of 20 or more emails. Designing email for agents requires authentication of everyone on the thread (privacy, NDAs) and purposeful latency so the agent behaves like a teammate rather than a reply bot.

The middle of the talk is the build story. The team evaluated desktop plugins, computer use on virtual machines, and off-the-shelf engines including OpenPyXL; none met the bar, so they ran agents in many loops against the objective of recreating Office in full fidelity: 1.5 trillion input-output tokens and over 8 million lines of code. Excel started from the open-source IronCalc and ended as an 800,000-line Rust engine, benchmarked on real files with Office as the oracle and Rust renderers for pixel-perfect output, available to try at getcompound.ai. Performance follows: headless engines recalculate 20 MB Excels 4x faster and run parallel tasks, while owning the editor enables the product experience the speaker demonstrated on his own slide deck, built in Compound through dropped-in comments encoding his consulting-firm slide standards, so a team of five can finish a 100-page deck in an afternoon instead of weeks of group revision. Ownership also unlocks the write, render, check, fix loop that OpenPyXL and Microsoft's interfaces cannot support. The demo hits a live hiccup at 02:11:40: the speaker pauses about a minute for a Cursor update, resuming at 02:12:40.

The close widens the lens to context and to the industry. For breadth, agent swarms with grep-style file reading replace vector DB indexing and return findings grounded in citations; for depth, the native engine processes 30 MB, two-million-formula workbooks faster and cheaper than generated code. The point of all this context is to let humans spend their time imparting judgment on the deal, not checking whether numbers tie or worrying whether the VP will yell about formatting. The talk ends with a copilot-versus-autopilot mapping: spreading comps is delegation-ready with current tools, while long-horizon tasks like a 50-page IC presentation remain copilot work. The speaker compares finance today to coding when OpenAI 4.5 launched last December and people started trusting agents with bigger tasks, declares an inflection point from copilots to autopilots, and invites firms and engineers to reach out.

## Speaker details
**Yijia Liang** - Co-Founder, Compound AI. He was previously a Vice President at Coatue, where he focused on early and growth stage software investments; before that he was a research analyst on the YC Continuity team and a consultant in Bain's Private Equity Group. In the session itself he describes spending three years as a VP in late-stage private software investing and leaving to build tools that replace his old analyst job.

Links: [LinkedIn](https://www.linkedin.com/in/yijia-liang/) | [Twitter](https://x.com/yijialiang) | [Website](https://getcompound.ai/)

## Full timestamped transcript
```
[01:59:56 | 10:40:31 AM] Think cloudy.
[01:59:57 | 10:40:33 AM] Cloud agents that Devin or Factory might do for coding agents, but tailoring that for buy-side institutions.
[02:00:04 | 10:40:40 AM] I was previously an analyst in a previous life.
[02:00:06 | 10:40:42 AM] I was a vice president at Co2 for about three years, specializing in late-stage private software investments.
[02:00:12 | 10:40:47 AM] Spent way too much time in Excel, PowerPoint, and late nights doing that type of work, and so decided to split and start building tools to replace my old job.
[02:00:22 | 10:40:57 AM] Quick show of hands, how many people in here have used user instinct in the last day?
[02:00:26 | 10:41:01 AM] All right, I expected more hands, but maybe people are too shy to raise them.
[02:00:32 | 10:41:07 AM] And how many people know an analyst in finance that fully delegates their work to AI, like fully hands-off running it autonomously?
[02:00:40 | 10:41:15 AM] All right, one, but a lot fewer.
[02:00:44 | 10:41:19 AM] I think if you think about the question, why did personal agents take off within the last three months?
[02:00:49 | 10:41:24 AM] Internally, we came up with three main answers.
[02:00:52 | 10:41:28 AM] The first, reliable background agents.
[02:00:54 | 10:41:30 AM] You can delegate a task, book a restaurant, book a flight, and it'll do it reliably now.
[02:01:00 | 10:41:35 AM] Computer use agents have gotten sophisticated.
[02:01:02 | 10:41:38 AM] The models themselves have gotten better.
[02:01:06 | 10:41:41 AM] The second is proactivity.
[02:01:07 | 10:41:43 AM] It'll do things without you asking.
[02:01:09 | 10:41:44 AM] It's part of that magical experience when Instinct wakes you up saying it's your wife's anniversary.
[02:01:13 | 10:41:49 AM] Go buy some flowers, or better yet, I already bought the flowers for you.
[02:01:17 | 10:41:53 AM] And finally, integrations.
[02:01:19 | 10:41:54 AM] It's connected to the systems of context that matter most for you: email, Drive, calendar.
[02:01:26 | 10:42:01 AM] But all the factors that make personal agents work so well doesn't really translate to institutional finance today.
[02:01:34 | 10:42:09 AM] If we think about background tasks, something as simple as booking a restaurant reservation, the analog equivalent in buy-side finance might be, how do you go from a data room to a fully prepared set of IC models, slides, and memos?
[02:01:48 | 10:42:24 AM] Taking a process that would normally take four weeks, multiple rounds of iteration and review, and compressing that to a few days.
[02:01:57 | 10:42:32 AM] If we think about proactivity, your managing director doesn't really want agent rogue running around doing a bunch of things and burning tokens without them providing and soliciting input.
[02:02:07 | 10:42:42 AM] And then finally, if you think about the context that matters, it's not just email, it's not just calendar.
[02:02:13 | 10:42:48 AM] It could be a data room with 15,000 files.
[02:02:16 | 10:42:52 AM] It could be SharePoint, Box with petabytes of unstructured data the firm has collected in its 40-year history.
[02:02:21 | 10:42:57 AM] So how do you deal with these problems?
[02:02:24 | 10:43:00 AM] So the purpose of today's talk is to discuss a bit more about how we at Compound have approached the problem of solving long-running agents in finance.
[02:02:33 | 10:43:08 AM] On one hand, it's creating a real teammate that collaborates with you in the deal team.
[02:02:38 | 10:43:14 AM] So that's multiplayer, embedding that into the app.
[02:02:41 | 10:43:17 AM] On the other hand, it's solving for how can you run long tasks in parallel in the background, reliably execute them.
[02:02:49 | 10:43:25 AM] And so for that, we actually rebuilt Office from scratch.
[02:02:53 | 10:43:28 AM] And then finally, it's how do you manage the context of everything, everything we just discussed, petabytes of data in SharePoint inbox.
[02:02:59 | 10:43:35 AM] And we'll talk a little bit about how we've designed a solution for that.
[02:03:04 | 10:43:39 AM] So the first question we have to ask, I think, is why does multiplayer actually matter for finance?
[02:03:08 | 10:43:44 AM] If you look at the anatomy on a deal team, right, the type of tasks that matter for long-running type of workflows, for example, going from a data room into all the sorts of materials that make its way in front of an investment committee, it doesn't work for the single-player siloed workflows.
[02:03:24 | 10:44:00 AM] Today, for people who have deployed Claude or ChatGPT in their institutions, it's all single-player.
[02:03:31 | 10:44:07 AM] People working in a plugin, people working in the web app, producing outputs.
[02:03:36 | 10:44:12 AM] But invariably, those people need to collaborate with their team.
[02:03:39 | 10:44:15 AM] And what does that look like?
[02:03:40 | 10:44:16 AM] It means downloading the file, uploading it into email, uploading it into Teams, asking for feedback.
[02:03:46 | 10:44:22 AM] I think the right way to approach this, and this is the way we've thought about at Compound, is how do you get every person who matters on a deal onto the same thread?
[02:03:54 | 10:44:29 AM] How can they all talk to the same agent so that one agent can share the context of everyone who matters for any particular workstream?
[02:04:02 | 10:44:38 AM] When we thought about how do we actually bring multiplayer into a familiar context, we looked again towards personal agents.
[02:04:09 | 10:44:45 AM] Why did they work so well?
[02:04:10 | 10:44:46 AM] Well, you can easily text one in iMessage, or you can text one in WhatsApp.
[02:04:15 | 10:44:50 AM] So for agents at Compound, every single one you create comes with a built-in inbox.
[02:04:19 | 10:44:55 AM] Because ultimately, at the end of the day, for institutional finance, most workflows run through Outlook.
[02:04:24 | 10:44:59 AM] You'll have chains of emails, 20 or more running.
[02:04:27 | 10:45:02 AM] You want an agent to be part of every single one of those conversations.
[02:04:32 | 10:45:08 AM] Designing email for agents is actually non-trivial.
[02:04:35 | 10:45:11 AM] It's not just as simple as hooking it up with an email inbox.
[02:04:39 | 10:45:14 AM] It requires, A, authenticating, making sure everyone part of that thread has read and write access to that agent.
[02:04:45 | 10:45:21 AM] Ultimately, at these financial firms, privacy is incredibly important.
[02:04:49 | 10:45:24 AM] You're always under NDA no matter what deal you look at, and so you want to make sure everyone on that thread can actually talk to the agent.
[02:04:55 | 10:45:31 AM] But then beyond authentication, you also have to think about how do you design a real human-like experience?
[02:05:00 | 10:45:35 AM] Because after all, we're trying to create a real teammate.
[02:05:02 | 10:45:38 AM] If multiple people email in the same thread in quick succession, you don't want multiple acknowledgments spamming that group.
[02:05:09 | 10:45:45 AM] You actually want to bake in some more latency to make it feel more human.
[02:05:13 | 10:45:48 AM] And so there are other design decisions when thinking about how to create real email agents for enterprise finance.
[02:05:20 | 10:45:55 AM] But multiplayer aside, we realized even after you solicit the input of everyone who matters, if you wanted to scale up the number of tasks and run them all in parallel, existing off-the-shelf solutions simply don't cut it.
[02:05:32 | 10:46:07 AM] We evaluated a lot: the desktop plugins of Excel, PowerPoint, and Word.
[02:05:37 | 10:46:12 AM] We evaluated computer use using virtual machines to try to scale up the number of agents that could work in Excel, PowerPoint, and Word natively.
[02:05:44 | 10:46:20 AM] And we also evaluated a ton of off-the-shelf engines, whether those are open-source packages like OpenPyXL or commercial engines that are available for purchase.
[02:05:53 | 10:46:28 AM] None of them really cut it for what we were trying to look at.
[02:05:56 | 10:46:31 AM] And with coding agents dramatically improving and bringing the cost of software down, we decided to just build our own office from scratch.
[02:06:05 | 10:46:40 AM] And like a great AI engineer would, we ran agents in many loops, spent 1.
[02:06:09 | 10:46:45 AM] 5 trillion input-output tokens and over 8 million lines of code to rewrite Office from scratch.
[02:06:15 | 10:46:50 AM] And I'll walk through a little bit of how we approached it, but it's as simple as pointing agents at an objective function, which is recreate Office in full fidelity and then letting it run.
[02:06:26 | 10:47:01 AM] So take Excel as an example.
[02:06:29 | 10:47:04 AM] We started with an open-source solution called IronCalc.
[02:06:31 | 10:47:07 AM] We decided, okay, how can you recreate this perfectly for Excel, use Office as an oracle, and just run loops, benchmarking it on real files from both real-world corpus that we grabbed online and also ones that internally we created.
[02:06:45 | 10:47:21 AM] And 800,000 lines of Rust later, we had a performant, much more performant compared to Excel, one-for-one replica of the product.
[02:06:55 | 10:47:30 AM] With this, we're actually able to do that for not only Excel, but also PowerPoint and Word, right?
[02:07:00 | 10:47:36 AM] So we ran loops across every single one of these products, and we have faithful recreations.
[02:07:04 | 10:47:40 AM] You can try it for yourself today at getcompound.
[02:07:07 | 10:47:43 AM] ai.
[02:07:08 | 10:47:43 AM] And it's the same method: loop agents against Office as a judge, using Rust renderers to make sure that the rendering of these products was pixel perfect.
[02:07:18 | 10:47:53 AM] So what you see in Compound is what you see when you download to Office.
[02:07:22 | 10:47:57 AM] We needed one-for-one parity because at the end of the day, these firms only trust what they can download and what they can send.
[02:07:30 | 10:48:05 AM] Now, let's talk about performance.
[02:07:32 | 10:48:07 AM] Why is a headless engine so much better compared to using a VM or using desktop Excel?
[02:07:37 | 10:48:12 AM] Well, for one, desktop Excel or PowerPoint or Word is bound to that CPU.
[02:07:42 | 10:48:18 AM] With headless engines, you can do tasks in parallel much, much faster.
[02:07:46 | 10:48:22 AM] You can build out a complex model in a much shorter amount of time.
[02:07:50 | 10:48:25 AM] You can recalculate 20 megabyte Excels 4x faster.
[02:07:54 | 10:48:29 AM] So every single piece of work an analyst would expect an agent to do, because again, their expectation is quality of a human at much lower speed and much lower cost.
[02:08:03 | 10:48:39 AM] You have to have a headless engine to do this.
[02:08:06 | 10:48:42 AM] If you tried to scale this up with Excel and PowerPoint, I think you'd be going down the wrong path.
[02:08:13 | 10:48:48 AM] But it's not just about performance.
[02:08:15 | 10:48:50 AM] Owning the editor actually allows you to create a much richer product experience that allows you to work and collaborate with agents asynchronously much better than you can with other products.
[02:08:24 | 10:49:00 AM] So this entire slide deck you're seeing today, I built in Compound just by dropping in comments.
[02:08:31 | 10:49:06 AM] I had it create a first draft, and then as you can see here on the UI, I dropped in comments for every single piece of formatting.
[02:08:37 | 10:49:12 AM] For my consulting days, for my K2 days, all the learnings I had on what makes a great slide, I imparted with the agent.
[02:08:44 | 10:49:19 AM] This can also work for multiplayer.
[02:08:45 | 10:49:21 AM] You can have multiple people part of the same team using the same multiplayer infrastructure we set up, dropping in comments.
[02:08:51 | 10:49:27 AM] So for a team of five, you can rip through a 100-page deck in an afternoon rather than sitting in a room revising it for multiple weeks.
[02:08:59 | 10:49:35 AM] Finally, with respect to building your own engine, it also allows us to run iterative checking loops much more as well.
[02:09:06 | 10:49:42 AM] So if you have a task that, for example, is writing a complex model, it might take a few hours.
[02:09:13 | 10:49:48 AM] But how can we make that faster?
[02:09:14 | 10:49:50 AM] How can we make it more accurate?
[02:09:16 | 10:49:51 AM] If you're using, for example, an OpenPyXL code library, there's no renderer you can use to check formatting.
[02:09:21 | 10:49:56 AM] You're just guessing and hoping that the model writes the right thing, and maybe you do some parsing to see a cell is a particular color or has a particular font.
[02:09:29 | 10:50:04 AM] If you try to use Microsoft's own interface, you're going to be limited by what Microsoft provides you, which is admittedly very little.
[02:09:36 | 10:50:12 AM] So with an own engine, you actually own the write, render, check, and fix loop.
[02:09:41 | 10:50:16 AM] So you can rapidly iterate on the output for the user.
[02:09:47 | 10:50:22 AM] So the last thing I sort of want to discuss today, beyond multiplayer and building our own office, is how to deal with the context that these firms have.
[02:09:57 | 10:50:33 AM] For firms on the buy side, they deal with situations where
[02:10:08 | 10:50:43 AM] Situations where it crosses both breadth and depth of data.
[02:10:11 | 10:50:46 AM] You may have situations where you have a data room over 15,000 files, and then files in that data room might be well over 20 megabytes.
[02:10:19 | 10:50:54 AM] People in finance complain all the time, Hey, I have an Excel model that's 30 megabytes.
[02:10:23 | 10:50:58 AM] It takes five minutes to recalculate because we have two million formulas and five sensitivity tables that need to recalculate every single time.
[02:10:29 | 10:51:04 AM] So how do you deal with this?
[02:10:31 | 10:51:06 AM] Well, for breadth, I think, again, we take a look at a page out of the coding book and apply agent swarms to the large number of files.
[02:10:37 | 10:51:12 AM] No longer do you have to index everything in a vector DB unless it's for a very specific use case.
[02:10:39 | 10:51:14 AM] It's actually much preferable to use coding agents to read files, either through grep or through some other methodology, and then have a lead agent slice the contents of the file directory and then have swarms of agents come back to you with insights.
[02:10:41 | 10:51:16 AM] And then you iterate that in a loop until you're satisfied with the output required.
[02:10:44 | 10:51:19 AM] Furthermore, through this process, you're actually able to ground every single finding in citations in the source document, so that you know exactly what you show on the screen is linked to some number that the analyst can trust.
[02:11:06 | 10:51:41 AM] If we think about the depth of data, right, take that 30 megabyte workbook.
[02:11:12 | 10:51:47 AM] How can you actually process this more accurately?
[02:11:14 | 10:51:49 AM] In today's world, if you were to just use ChatGPT or Claude off the shelf to process that 30 megabyte model, it would write code.
[02:11:16 | 10:51:51 AM] It would use open source packages like OpenPyXL.
[02:11:18 | 10:51:53 AM] It would be expensive and slow because it's printing out every single piece of context about that model in code for the model to read.
[02:11:20 | 10:51:55 AM] But because we've developed our own engine for Excel, we're actually not only more accurate, but a lot faster and cheaper because the engine processes it and then lays it out in a very easy to read and easy to process format for the model.
[02:11:21 | 10:51:57 AM] This means we can expose a much richer set of APIs and a much richer set of tools for the agent to work over.
[02:11:22 | 10:51:57 AM] And that allows us to process these models in a much faster manner.
[02:11:22 | 10:51:57 AM] So if we sort of take a step back and think about, okay, what is all of this context built for?
[02:11:25 | 10:52:00 AM] At the end of the day, what we want to do is prevent people from spending time finding files, from reminding the model this is how to do things.
[02:11:27 | 10:52:03 AM] Instead, they should be focused on imparting their judgment on the deal process.
[02:11:27 | 10:52:03 AM] They should be focused on tailoring, training agents and deploying them on every part of the deal flow.
[02:11:28 | 10:52:03 AM] And so it goes from the bottom level, connected sources, off-the-shelf connectors to SharePoint or Outlook, to the cited findings grounded in the sources that matter, and then finally embedding in the preferences, company knowledge that matters.
[02:11:29 | 10:52:05 AM] How do you do a model?
[02:11:31 | 10:52:07 AM] How should it look?
[02:11:33 | 10:52:08 AM] Which differs by every single firm, so that for humans, they spend most of their time imparting judgment.
[02:11:35 | 10:52:10 AM] They spend most of the time thinking about, is this actually a good deal?
[02:11:36 | 10:52:12 AM] Not, did all the numbers tie?
[02:11:37 | 10:52:12 AM] Does the model look right?
[02:11:37 | 10:52:12 AM] Will my VP yell at me because it looks a different way?
[02:11:40 | 10:52:15 AM] So, Cursor needs to update.
[02:12:40 | 10:53:16 AM] If we take a step back and think about the type of tasks that currently are on autopilot versus what are on Copilot, I would say there's already several finance tasks you can do pretty well with off-the-shelf tools: spreading comps.
[02:13:16 | 10:53:52 AM] As the ChatGPT head of finance mentioned earlier, they have now their own products for this.
[02:13:22 | 10:53:57 AM] But I think there are a lot of longer-running tasks that are not capable with existing solutions.
[02:13:26 | 10:54:01 AM] How do you draft a 50-page IC presentation off the cuff?
[02:13:30 | 10:54:05 AM] How do you get agents to build out a model exactly the way you want it?
[02:13:35 | 10:54:10 AM] For a private equity professional or a hedge fund professional, I think those are tasks that, with off-the-shelf tools, still exist as sort of within the copilot realm.
[02:13:45 | 10:54:20 AM] People want to be embedded deeply in that process without letting go.
[02:13:50 | 10:54:25 AM] But with some of the tools we've built today, I think we're able to expand the aperture for which autopilot can take over in finance firms.
[02:13:57 | 10:54:33 AM] So rather than just using tools embedded in Excel as plugins, hand-holding along the way, you can start delegating.
[02:14:05 | 10:54:40 AM] You can start becoming more ambitious about what AI is capable of.
[02:14:09 | 10:54:44 AM] If I think about where we are today in the world of finance, it very much reminds me of when OpenAI 4.
[02:14:14 | 10:54:50 AM] 5 launched last December, where people stopped using code as a simple copilot to generate the next file or the next line of code, but they started delegating far more ambitious tasks.
[02:14:26 | 10:55:02 AM] They started realizing, maybe I can just truly vibe it.
[02:14:30 | 10:55:05 AM] If I have sufficient checks, if I have sufficient tests, maybe I can just trust all the code it writes.
[02:14:36 | 10:55:12 AM] I think with some of the tooling we've built today, along with what we're planning in the future, these are the type of problems you have to solve before you get to that point for finance.
[02:14:46 | 10:55:21 AM] How can analysts, how can the entire deal team become more ambitious with AI?
[02:14:50 | 10:55:26 AM] How can they just drop in a data room and decide, okay, I'm going to trust every single one of the outputs, and then let's do that tenfold so we can see more deals, so we can expand the aperture of what matters.
[02:15:01 | 10:55:37 AM] So to conclude, enterprise agents are certainly coming to finance.
[02:15:05 | 10:55:41 AM] I strongly believe we're at an inflection point in the adoption curve, and that people are slowly becoming more ambitious and they're moving away from copilots to autopilots.
[02:15:13 | 10:55:49 AM] And so this was sort of how we've approached it here at Compound.
[02:15:17 | 10:55:53 AM] If you work at a firm and you're interested in deploying our agents to drive more of your deal work, please reach out.
[02:15:23 | 10:55:58 AM] Or if you're an engineer and you're curious about talking about our approach and sharing ideas, please either reach out online or I'll be around if you want to find me.
[02:15:30 | 10:56:05 AM] Thanks so much.
```
