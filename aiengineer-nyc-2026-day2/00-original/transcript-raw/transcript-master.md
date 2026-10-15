# AI Engineer NYC 2026 livestream — master transcript

- Video: https://www.youtube.com/watch?v=jiUC6IUMdvc (8h 51m 16s)
- Stream start: 2026-10-14 08:40:36 ET (t=0)
- Text: OpenAI `gpt-transcribe`; timing: OpenAI `whisper-1` segment timestamps
- Timestamps: `[video time | wall clock ET]`

[00:15:02 | 8:55:37 AM] Good morning and welcome back.
[00:15:04 | 8:55:39 AM] We're excited to spend this final day together, building on the conversations already underway and making room for a few more big conversations.
[00:15:13 | 8:55:48 AM] Without further ado, please welcome today's MC, founder, writer, and analyst at Turing Post, Kseniya Se.
[00:15:22 | 8:55:57 AM] Woo!
[00:15:22 | 8:55:57 AM] Good morning, good morning, good morning, everyone.
[00:15:35 | 8:56:10 AM] Welcome to the third and the final day of AI Engineer New York.
[00:15:39 | 8:56:14 AM] Who went to a cool event last night?
[00:15:41 | 8:56:16 AM] What was the coolest?
[00:15:44 | 8:56:19 AM] Okay, I went to karaoke with Swyx, and it was amazing.
[00:15:48 | 8:56:23 AM] 100% recommend.
[00:15:50 | 8:56:25 AM] So yes, I'm Kseniya Se.
[00:15:52 | 8:56:27 AM] I write Turing Post, and I'm your MC for today.
[00:15:56 | 8:56:31 AM] It's actually my second time emceeing AI Engineer in New York, so that's how much I love it.
[00:16:02 | 8:56:37 AM] And let's go to the program, because yesterday our partner, Thinakaran from Arize, asked, What does an AI engineer do?
[00:16:14 | 8:56:49 AM] And today we have a session from Ryan Carson called Your Job Is Now Agent Manager.
[00:16:20 | 8:56:55 AM] So apparently your job description just changed overnight, and I hope that the compensation will keep up.
[00:16:27 | 8:57:02 AM] But fortunately, quite a few of your employers are also our sponsors, so they've seen how quickly your responsibility is changing.
[00:16:42 | 8:57:17 AM] And let's give them a warm round of applause.
[00:16:45 | 8:57:20 AM] A little encouragement goes...
[00:16:48 | 8:57:23 AM] Long way.
[00:16:49 | 8:57:24 AM] Our most amazing presenting sponsor, Arize, please.
[00:16:55 | 8:57:30 AM] Thank you, thank you, thank you.
[00:16:57 | 8:57:32 AM] The grade four, our platinum sponsors, Oracle, Sonar, WorkOS, and Axa, please big round of applause.
[00:17:07 | 8:57:42 AM] Scattering gold sponsors all on this screen, please.
[00:17:12 | 8:57:48 AM] Let's acknowledge everyone with our eyes and give them a big hand.
[00:17:19 | 8:57:54 AM] And our silver sponsors, let's give them as much applause as possible because, you know, we don't ration enthusiasm by tier.
[00:17:29 | 8:58:04 AM] So please clap, clap, clap, clap, clap.
[00:17:32 | 8:58:07 AM] And finally, to all of us, to all our supporting partners, thank you for making this possible.
[00:17:37 | 8:58:12 AM] It would not be possible without anyone.
[00:17:40 | 8:58:15 AM] Like everyone, you know, it takes a village.
[00:17:43 | 8:58:18 AM] So thank you, thank you, thank you.
[00:17:46 | 8:58:21 AM] Woo!
[00:17:47 | 8:58:22 AM] I'm a little nervous.
[00:17:48 | 8:58:23 AM] It's early, but thank you for bearing with me.
[00:17:52 | 8:58:27 AM] If you've noticed, there is an interesting progression across all these three days.
[00:17:57 | 8:58:32 AM] On Mondays, you could join super practical, hands-on workshops, and you heard from big guys like Cerebras and OpenAI to small but super interesting startups like OpenPros.
[00:18:09 | 8:58:44 AM] Yesterday, the conversation included how AI translates into operating margin, and today we'll hear about the capabilities companies are building toward, the work agents can take on, and what managing that might involve.
[00:18:29 | 8:59:04 AM] Things will be happening here in Shannon Room, and it will be finance, compute, and infrastructure sessions.
[00:18:36 | 8:59:11 AM] In Turing room, my favorite name, evaluations, benchmarking, retrieval, self-improving agents and skills.
[00:18:44 | 8:59:19 AM] In Sutton room, you will hear about developer tools, enterprise, enterprise data, software factories, agent permissions, and token economics.
[00:18:55 | 8:59:30 AM] And McCarthy room finally will be about model costs, coding agent context, human verification, and banking deployment and financial agent evidence.
[00:19:07 | 8:59:42 AM] And at Turing Post, we spend a lot of time following all these directions and research in these directions.
[00:19:16 | 8:59:51 AM] But we also have a series called the Org Age of AI, where we look at what happens to a company as it begins to work with this technology.
[00:19:28 | 9:00:03 AM] How does the work change, right?
[00:19:30 | 9:00:05 AM] What becomes possible that wasn't practical before?
[00:19:34 | 9:00:09 AM] And why, while superintelligence feels so powerful, why is the ROI still missing?
[00:19:41 | 9:00:16 AM] And that's part of what makes this gathering so interesting to me.
[00:19:46 | 9:00:21 AM] You have people developing the technology in the same room as people who understand in considerable detail the work it needs to do.
[00:19:54 | 9:00:29 AM] And there is a lot of those two groups can learn from each other.
[00:19:58 | 9:00:33 AM] That's fascinating to me.
[00:20:00 | 9:00:35 AM] And our first speakers work at the intersection of those two worlds at Ramp.
[00:20:08 | 9:00:43 AM] So please help me welcome Alexander Shevchenko with Chasing Capabilities While Waiting for the Frontier.
[00:20:15 | 9:00:50 AM] Thank you.
[00:20:16 | 9:00:51 AM] Hey everyone, I'm Alex from Ramp.
[00:20:26 | 9:01:01 AM] I'll be speaking about chasing capabilities while waiting for the frontier to advance.
[00:20:39 | 9:01:14 AM] So, quick intro about myself.
[00:20:41 | 9:01:16 AM] I joined Ramp around three years ago on the broader applied AI team, working on a bunch of different surfaces and products, applying LLMs and ML to make a great product even better.
[00:20:55 | 9:01:30 AM] And to caveat my presentation on Ramp Labs, Ramp is an extremely bitter lesson-built company.
[00:21:02 | 9:01:37 AM] Over the last year, the number of use cases that use LLMs has increased 123%, while at the same time, a lot of our top features are growing in token spend, but on a unit economic basis, they're actually becoming cheaper because there are frontier models that are being released all the time now, and these models are cheaper, faster, and better.
[00:21:25 | 9:02:00 AM] And so we're able to provide the same level of accuracy at a much lower cost.
[00:21:29 | 9:02:05 AM] And so this is a really bitter lesson-built pattern.
[00:21:34 | 9:02:09 AM] And so, given all this, a question that I sometimes get: why not just wait?
[00:21:40 | 9:02:16 AM] Why have an applied research function inside of a company like Ramp, an application-layer company, right?
[00:21:48 | 9:02:23 AM] And to answer that, I would like to draw a parallel to 2023.
[00:21:53 | 9:02:29 AM] Back in 2023, you had access to kind of like GPT-4, and creating an agent was a lot of work.
[00:22:01 | 9:02:37 AM] You would have to create very, very strict guardrails.
[00:22:05 | 9:02:41 AM] Models weren't RL'd to backtrack.
[00:22:07 | 9:02:43 AM] They didn't have thinking tokens, and so if it went in the wrong direction, it would just kind of charge ahead and not realize that it made mistakes.
[00:22:16 | 9:02:51 AM] You had to sweat over all of the prompts to the point where some synonyms could change the behavior of your agent because they weren't RL'd properly on generalizing to the user's intent.
[00:22:31 | 9:03:06 AM] You had to reduce and scope down the context as much as possible because giving too much context to the agent would just confuse it.
[00:22:40 | 9:03:15 AM] And even back then, we decided, well, we need to ship these things.
[00:22:44 | 9:03:19 AM] We can't wait for GPT-4.
[00:22:46 | 9:03:21 AM] 5 or GPT-5 to come out.
[00:22:48 | 9:03:23 AM] We need to serve our financial professionals now.
[00:22:51 | 9:03:26 AM] And we shipped things like Grantor Guide and many other agents, even though it was not the easy thing to do.
[00:22:58 | 9:03:33 AM] And fast forward now to 2026, building an agent is a lot easier.
[00:23:02 | 9:03:37 AM] The models have gotten so much better that you can kind of give them MCPs and access to kind of any context, and they do a very, very good job of understanding what they need to do given a task.
[00:23:13 | 9:03:48 AM] But I still believe that we can dig a layer down and create even better experiences for our users.
[00:23:21 | 9:03:57 AM] It just requires a bit more effort now.
[00:23:25 | 9:04:00 AM] So to present this, some of our work from Ramp Labs, three specific cases of how we've applied research into Ramp itself, starting with creating a specialist model.
[00:23:39 | 9:04:14 AM] So in November of last year, we launched Ramp Sheets, which was one of the really early spreadsheet agents.
[00:23:47 | 9:04:22 AM] This was before the two frontier labs had launched their versions of spreadsheet agents, and we had a very good launch in November.
[00:23:53 | 9:04:29 AM] A bunch of users from great companies had signed up and started using it, and we realized that, well, this is a very general purpose spreadsheet handling agent, and a lot of the work that people do on Ramp, both inside of the company, but also all of our customers, accounting and finance professionals, are spending most of their days inside of spreadsheets.
[00:24:16 | 9:04:52 AM] So we can kind of take the harness and the brains behind Ramp Sheets and add it into a bunch of other surfaces within Ramp.
[00:24:27 | 9:05:02 AM] And as we were building this out, we realized, well, we can probably apply some research from Ramp Labs to make this even better.
[00:24:36 | 9:05:12 AM] And we sat down and we started looking, where do models fall short on this?
[00:24:41 | 9:05:17 AM] And back then this was like Opus 4.
[00:24:44 | 9:05:19 AM] 6, and the place that had the most friction was when you would drop in a lot of spreadsheets into Ramp Sheets and you would ask it to build a DCF or model some financial scenario, it would spend a lot of time creating a plan at first and then researching all of the sheets that it had access to to try to get a good understanding of the lay of the land.
[00:25:06 | 9:05:41 AM] And Opus 4.
[00:25:07 | 9:05:42 AM] 6 is a great model, but it was like pretty slow and the thinking tokens are also pretty expensive.
[00:25:13 | 9:05:48 AM] And so we took a step back and decided to train a retrieval model, or kind of like a financial question answering model that would, while still keeping these frontier models as orchestrators, would then be handed off to this much faster model that would do financial question answering for that planning agent.
[00:25:34 | 9:06:10 AM] And so we partnered with the company Prime Intellect to post-train a Qwen 3.
[00:25:40 | 9:06:16 AM] 5 35 billion model, and we actually got above Opus 4.
[00:25:47 | 9:06:22 AM] 6, which was the frontier back then, exact task accuracy while also being able to serve it at high KU level latencies.
[00:25:56 | 9:06:31 AM] So a much faster, but just a smart model that could then be used in tandem with the really smart frontier orchestrator.
[00:26:07 | 9:06:42 AM] And so this was like a very successful example of post-training that we had actually sent to prod as part of our Ramp Labs effort.
[00:26:16 | 9:06:52 AM] The second big thing that we are actually exploring up to this day is KV cache tricks, and particularly cartridges are a really interesting family of techniques where you're able to compress a lot of context, up to 20 to 30 times more context, into the KV cache offline and serve it for your agent.
[00:26:40 | 9:07:15 AM] And so if you compare it to the Ramp Sheets example, for example, there's a lot of tasks that you know are going to happen at some point, right?
[00:26:49 | 9:07:25 AM] Like month-end close, a month finishes, and on the first of the next month, a financial professional will go and try to reconcile and close their books.
[00:26:57 | 9:07:33 AM] You know kind of the ledger, the aging report, and the documents that they will need to be retrieving.
[00:27:02 | 9:07:38 AM] And so you could prepare them as context, but the agent will still need to agentically retrieve and create a good picture and understanding of them.
[00:27:11 | 9:07:47 AM] With cartridges, we're able to compress all of that work and build one overnight before the financial professional starts their work on the first of the month, and Once they open up the agent, it knows exactly what it needs to do because it has all of the context already built in.
[00:27:30 | 9:08:06 AM] Cartridges are also a much lower lift than post-training because the way that they do self-play is kind of a lot more generalizable.
[00:27:38 | 9:08:14 AM] The caveat with stuff like this is that compared to post-training, this is something that the labs might ship at some point in their APIs, in their foray into continuous learning.
[00:27:50 | 9:08:25 AM] And even if they were to do it in the API, we would actually be happy because we are developing a lot of this tribal knowledge inside of the company and just learning how best to apply these techniques.
[00:28:00 | 9:08:36 AM] So even if it does ship as an API, we can just hit the ground running on day one knowing how to use them.
[00:28:09 | 9:08:44 AM] And finally, the third example of applied research that we are sending to prod is our work on agentic map reduce and kind of agentic swarms.
[00:28:21 | 9:08:56 AM] So more concretely, we published an article on the Ramp Labs blog on how we used 10,000 parallel agents to pen test all of Ramp.
[00:28:32 | 9:09:08 AM] So at Ramp, we have a cloud agent called Ramp Inspect, which helps out with setting up all of the infrastructure and plumbing for something as ambitious as this.
[00:28:42 | 9:09:17 AM] And we were able to spin up 10,000 parallel agents and then kind of map this work out, try to find any vulnerabilities, and then also agentically reduce on the tickets that they would create.
[00:28:55 | 9:09:31 AM] So deduplicate them with LLMs and then try to reproduce them adversarially with LLMs to try to make sure that the vulnerabilities are real and important.
[00:29:04 | 9:09:40 AM] At the end of all of this, we have actually found seven high severity vulnerabilities that we all patched.
[00:29:11 | 9:09:46 AM] Interestingly, one of the Vulnerabilities that we described in that article is a Lua script injection that you could send over via email.
[00:29:19 | 9:09:55 AM] And no single component of that stack was unsafe, and the kind of swarm had to patch together multiple components and understanding of multiple components end to end in order to be able to figure this out.
[00:29:34 | 9:10:09 AM] And the other nice thing with this is that this is all running automatically.
[00:29:38 | 9:10:14 AM] You don't need to spend anyone's time.
[00:29:40 | 9:10:15 AM] It's just you start it, and the only thing that failed passes that get filtered out is the cost of the tokens.
[00:29:48 | 9:10:24 AM] The other thing that's interesting outside of just building out all of the infrastructure to support these swarms is that we do research into how to best use models as part.
[00:29:59 | 9:10:34 AM] Models as part of these swarms.
[00:30:00 | 9:10:36 AM] One of the interesting insights from that same article that we published is that you can actually use open-weight models that are up to five times cheaper compared to the frontier reasoning.
[00:30:11 | 9:10:47 AM] And because you're setting it up as a swarm, the detection rate is not five times lower.
[00:30:17 | 9:10:52 AM] So you can kind of spend more on these cheaper tokens and have almost as good of a detection rate.
[00:30:23 | 9:10:58 AM] If you follow through all of these examples, you kind of notice a pattern of a lot of them is attempts at saving on time and saving on money.
[00:30:38 | 9:11:13 AM] So reducing latency, which is time, and then reducing on token cost, which is money.
[00:30:42 | 9:11:18 AM] That's actually Ramp's slogan: saving our customers time and money.
[00:30:47 | 9:11:23 AM] And so I'd like to point to two products that we actually offer from Ramp that have been influenced by Ramp Labs' research.
[00:30:55 | 9:11:31 AM] The first one is token spend management that connects to a bunch of your API keys and is able to give you a really good picture of how LLMs are being used inside of your company.
[00:31:06 | 9:11:41 AM] Not only token spend on an API key basis or a user basis, but digging deeper, accounting categories, and even things like tax credits that you can get by analyzing the spend.
[00:31:22 | 9:11:58 AM] It also goes deeper, and we created a taxonomy that contextually analyzes and semantically analyzes the LLM usage so you can actually understand how LLMs are being used outside of just attributing it to a team or a person inside of your company.
[00:31:37 | 9:12:13 AM] And then the second one is Ramp Router, which also leans into improving the latency of your agent, where we have a bunch of routing strategies that we work with Ramp Labs to develop, things like Nvidia Switchyard, things like Smart Flex offloading of work to both improve latency and cost per tokens that you spend.
[00:31:59 | 9:12:34 AM] And there's a bunch of different strategies already available for routing, and even more coming out later.
[00:32:06 | 9:12:42 AM] So if you're interested in any of these two products, you can take a photo of the URLs or scan the QR codes there.
[00:32:13 | 9:12:49 AM] Give you a second.
[00:32:20 | 9:12:56 AM] Awesome.
[00:32:22 | 9:12:58 AM] And then I'd also invite you to check out our Ramp Labs blog, where we publish a bunch of really interesting articles that I haven't had the chance to cover as part of this presentation.
[00:32:35 | 9:13:10 AM] Notably, one of the really interesting ones is Portal, where we figured out a way of transferring learnings from one post-train to another.
[00:32:43 | 9:13:19 AM] So you could do something like a LoRA post-train on one model, so like the Qwen 3.
[00:32:50 | 9:13:25 AM] 5 that I was describing, but then transfer it to newer versions of Qwen or even across different families.
[00:32:56 | 9:13:31 AM] So you're post-training this latent that then can be projected onto different models, and that really amortizes the cost that you have to spend on post-training.
[00:33:06 | 9:13:41 AM] More blog posts on agentic map reduce, so not only the pen testing stuff that we did, but also things like analyzing and creating taxonomies of LLM usage, which is stuff that has gone into the token spend product.
[00:33:20 | 9:13:55 AM] Things like self-improving monitoring, where we use LLMs to automatically create monitors with Datadog on a lot of our product surfaces, and then as alerts come in, improve those monitors automatically without a person in the loop to try to basically create super, super robust and resilient software.
[00:33:41 | 9:14:16 AM] And finally, semantic tagging, which is this interesting foray into creating this agentic map reduce over a bunch of user sessions, where we can annotate and create taxonomies that are open-ended.
[00:33:53 | 9:14:29 AM] So not knowing ahead of time what are the clusters of LLM usage and trying to create a taxonomy that can then be reconciled against the spend inside of the companies.
[00:34:05 | 9:14:41 AM] So if you're interested in this type of research, x.
[00:34:09 | 9:14:44 AM] com/ramplabs, where you can go and check out more of our research.
[00:34:15 | 9:14:51 AM] And here's my Twitter if you have any other questions or want to talk about some use case as part of your applied research.
[00:34:25 | 9:15:01 AM] And that's it.
[00:34:26 | 9:15:01 AM] Thank you.
[00:34:27 | 9:15:02 AM] As AI agents generate more code than ever, how do we make sure it's ready to ship?
[00:34:43 | 9:15:19 AM] To explore the importance of verification in agentic software development, please welcome Tarek Shaukat, CEO of Sonar.
[00:35:02 | 9:15:38 AM] Morning, everybody.
[00:35:05 | 9:15:40 AM] My name is Tarek Shaukat.
[00:35:06 | 9:15:42 AM] I am the CEO of Sonar, as you just heard, and we're here to talk today about how we have been helping companies build software factories that actually work for enterprises.
[00:35:18 | 9:15:53 AM] And I thought it'd be an interesting way to start, to start looking at actual factories, because we know how to build actual factories.
[00:35:25 | 9:16:01 AM] And for those of you who have a little bit of the gray hair and all of this sort of thing, you may remember the 1980s.
[00:35:32 | 9:16:08 AM] And in the 1980s, you could find cars that were really good cars.
[00:35:36 | 9:16:12 AM] But if you look at the picture here, and if you remember those times, the cars didn't quite fit together perfectly, right?
[00:35:43 | 9:16:18 AM] You'd have different pieces that would leave big gaps.
[00:35:47 | 9:16:22 AM] It would be really good cars that just didn't kind of work the way they were supposed to.
[00:35:51 | 9:16:27 AM] And then Toyota, and particularly Lexus, came out with a commercial, and it showed something very simple, which was a ball bearing running across the seams of this car.
[00:36:02 | 9:16:38 AM] And it was kind of revolutionary at the time because it showed that you could actually build a car that fit together perfectly.
[00:36:09 | 9:16:44 AM] And instead of building for volume and then fixing the old mindset, you could actually have a mindset focused on ship it right, on no rework, on customer happiness.
[00:36:21 | 9:16:57 AM] And there was not—this was not a single change.
[00:36:26 | 9:17:01 AM] What happened was that people really started thinking about the factories differently.
[00:36:32 | 9:17:07 AM] They started engineering, building factories that were engineered to deliver quality.
[00:36:38 | 9:17:13 AM] And there's a number of different pieces that I think still resonate today.
[00:36:42 | 9:17:18 AM] The first is you prioritize quality instead of volume.
[00:36:46 | 9:17:22 AM] The second is that you fix the system, not just individual symptoms that you see.
[00:36:53 | 9:17:28 AM] The third is that you design for something that can be built, as opposed to designing the wheels and designing the washer bottles and whatever it is, and then hoping it fits together.
[00:37:04 | 9:17:39 AM] You solve problems as they occur, as opposed to kicking the can down the road and fixing it at the end.
[00:37:09 | 9:17:44 AM] And you empower everybody.
[00:37:10 | 9:17:46 AM] Anyone could stop the line, not just the boss.
[00:37:14 | 9:17:50 AM] Now, why am I talking about this?
[00:37:16 | 9:17:51 AM] It's actually because modern software development actually embraced all of these principles.
[00:37:20 | 9:17:56 AM] If you think about how we build software today, what is considered best practice, a lot of the terms and the practices came from that idea of a Toyota production system: agile, Kanban, error budgets if you're in the SRE world, continuous integration.
[00:37:37 | 9:18:13 AM] These ideas all kind of sprung from this notion of how do we build factories that work.
[00:37:44 | 9:18:20 AM] And it's worked really well for us in software development so far.
[00:37:47 | 9:18:23 AM] But agents, as we all know, you wouldn't be sitting here if you didn't understand that agents are changing the game.
[00:37:54 | 9:18:29 AM] And as agents are changing the game, weird things start to happen.
[00:37:59 | 9:18:35 AM] First of all, this is research that was published last month of the effect of implementing asynchronous agents in your development lifecycle.
[00:38:10 | 9:18:45 AM] And I'm sure many of you have seen this.
[00:38:12 | 9:18:47 AM] You have an explosion in the number of lines of code written, up 2,450%.
[00:38:17 | 9:18:52 AM] You have an increase in the number of commits.
[00:38:20 | 9:18:56 AM] So the volume code creation is now easy, and it is now abundant.
[00:38:25 | 9:19:01 AM] And by the way, more and more people, I'm sure many people in this room, are saying, okay, if it's easy and abundant, how do I automate it?
[00:38:32 | 9:19:08 AM] How do I build factories, agentic software factories that help automate and scale this?
[00:38:37 | 9:19:13 AM] And today, we just finished our, what we call State of Code Developer Survey.
[00:38:43 | 9:19:18 AM] It'll be out next month, but this is a little preview.
[00:38:46 | 9:19:21 AM] Today, 5% of developers that we spoke to say that they're running agentic software factories, but 34% said in a year they expect to, and 39% in financial services.
[00:38:57 | 9:19:32 AM] So people are thinking about how do you actually build these next generation factories.
[00:39:03 | 9:19:38 AM] And there's a couple of gotchas in here: security risk.
[00:39:06 | 9:19:42 AM] The agents can work really well to help you build stuff.
[00:39:09 | 9:19:44 AM] It can also work really well to help you hack stuff, help you attack stuff, find vulnerabilities, find quality issues, etc.
[00:39:16 | 9:19:52 AM] And so, as I was writing this presentation, kind of over the weekend, a little just-in-time, again from the Toyota production system, Sachin Adela posted this article on X.
[00:39:27 | 9:20:03 AM] And if you haven't read it, I think it's a great article that I think everyone should internalize.
[00:39:32 | 9:20:08 AM] But he was talking about insider risk of models inside of companies.
[00:39:36 | 9:20:12 AM] And one of the things that he talked about was the need for an engineering approach to containment and governance built around strong deterministic system design, human controls, and reliable operating procedures.
[00:39:49 | 9:20:25 AM] And this really resonated with me because what we are seeing is a paradigm shift.
[00:39:57 | 9:20:32 AM] In software factory design or software development.
[00:40:00 | 9:20:35 AM] Software development, let's call it more broadly, that we need to engineer.
[00:40:03 | 9:20:38 AM] We need to build systems that engineer confidence and quality into agentic software factories.
[00:40:11 | 9:20:47 AM] So to start doing that, I think it's important to understand the limitations that we're facing.
[00:40:17 | 9:20:53 AM] So what's the hard thing about this?
[00:40:19 | 9:20:55 AM] And there's five that I'm going to call out.
[00:40:21 | 9:20:56 AM] The first is that human in the loop doesn't scale.
[00:40:25 | 9:21:00 AM] And this may be, I don't know, to this room it may not be all that controversial, but virtually every company I talk to, I say, What's your AI governance strategy?
[00:40:34 | 9:21:09 AM] And they give me all this stuff and they say, But don't worry, we have humans in the loop.
[00:40:37 | 9:21:12 AM] And the problem with humans in the loop, as I mentioned earlier, 2,450% increase in lines of code, 240% increase in commits, but the same study showed only a 30% increase in releases.
[00:40:51 | 9:21:26 AM] We haven't figured out how to scale from producing stuff to shipping stuff.
[00:40:57 | 9:21:32 AM] There's automation needed, there's new tools needed, and really importantly, this is a concept that really I see it every day now, and I'm sure many of you do as well, called cognitive surrender.
[00:41:10 | 9:21:45 AM] And this study was done just a couple months ago, and it looked at how often do humans agree with AI.
[00:41:17 | 9:21:52 AM] And it turns out they agree with AI when AI is right 93% of the time.
[00:41:23 | 9:21:58 AM] And four out of five times they agree with it when the AI is wrong.
[00:41:27 | 9:22:02 AM] So it's not that human in the loop is, we just need to make things faster.
[00:41:32 | 9:22:07 AM] It's actually that it doesn't work in the agentic era.
[00:41:37 | 9:22:13 AM] So that's problem one.
[00:41:38 | 9:22:14 AM] Problem two is that agents struggle with large, complex codebases.
[00:41:43 | 9:22:19 AM] They are very, very smart, but you need to understand what happens in a codebase in order to work on it.
[00:41:50 | 9:22:26 AM] The left-hand side is a study that was done on code translation, and what it shows is that the agents were able to get it right 91% of the time when the codebase was 10,000 lines of code.
[00:42:04 | 9:22:40 AM] And by the time it got to even 50,000, and I'm sure everyone in this room operates off of much bigger code bases than this, but when it was trying to translate 50,000, the accuracy collapsed.
[00:42:14 | 9:22:50 AM] Similarly, another study looked at how many tokens does it take on a large, complex code base to complete the same task, and the variance was 30x, not 30%, but 30x.
[00:42:28 | 9:23:03 AM] And the reason is because the agent spends a huge amount of their tokens trying to understand how to navigate the code base, the structure of the code base, things like this.
[00:42:37 | 9:23:13 AM] And it's kind of like if I'm trying to go from LA to here, and if I pick a random starting point, if I happen to pick White Plains, I will get to New York pretty quickly.
[00:42:49 | 9:23:24 AM] If I pick Albuquerque, it's going to take me a long time and a lot of cost.
[00:42:53 | 9:23:28 AM] Same thing happens with agents.
[00:42:56 | 9:23:32 AM] Errors compound.
[00:42:58 | 9:23:33 AM] This is another important concept.
[00:43:00 | 9:23:36 AM] This is a study out of Meter, and Meter looks at, and you can find this on their website, they look at how effective are agents at completing tasks that humans can do.
[00:43:13 | 9:23:48 AM] And the way they look at this is, can you complete a task that takes X number of hours?
[00:43:17 | 9:23:53 AM] So you can see here the Claude Mythos preview, which is the latest version that they've published, was good at completing tasks that take a human 16 hours.
[00:43:27 | 9:24:02 AM] Okay, so that's really good.
[00:43:28 | 9:24:04 AM] But there's an important caveat in the fine print here, which is this is at 50% accuracy.
[00:43:34 | 9:24:09 AM] When you dial up the accuracy to 80%, the curve flattens substantially because as you do long-running tasks, errors compound.
[00:43:44 | 9:24:20 AM] If you have 95% accuracy on each task, by the time you're at 20 steps, you have 36% accuracy.
[00:43:52 | 9:24:28 AM] Right.
[00:43:54 | 9:24:29 AM] And so that is another issue we have to deal with in software factories.
[00:43:59 | 9:24:34 AM] Probably the most aggressive headline I put in here is this fourth point, that LLMs are unreliable reward-seeking judges.
[00:44:07 | 9:24:43 AM] You know, so the question that we always get is, well, can't you just ask an LLM?
[00:44:11 | 9:24:47 AM] And people have been studying this as well.
[00:44:13 | 9:24:49 AM] And this is all, again, the first on the left-hand side is from PayPal AI's research lab.
[00:44:20 | 9:24:55 AM] They published a paper this month, actually, and found that depending on the model and the situation, between 7 and 17 percent of verdicts change across what they called identical replications.
[00:44:33 | 9:25:08 AM] Ask the same question, get a different answer between 7 and 17 percent of the time.
[00:44:38 | 9:25:13 AM] And if you start challenging—this is a study out of Meta now—if you start challenging the LLM, Are you sure?
[00:44:45 | 9:25:20 AM] Very simple challenge, it'll actually change its mind 7 to 34 percent, again depending on the model.
[00:44:50 | 9:25:26 AM] So you ask the AI judge twice and you may get a different answer.
[00:44:56 | 9:25:31 AM] And then lastly, and I won't dig into this one too much because I think it's probably self-evident to everyone, as the time to exploit nears zero, the ability for us to respond is incredibly challenged.
[00:45:09 | 9:25:44 AM] And so prevention is something that we believe the software factory has to bake in to the design, has to engineer into the factory.
[00:45:18 | 9:25:53 AM] So as we've thought through this, we have written down what we call the code confidence formula, which is basically how do you build, how do you think about a software factory that delivers what we all want, which is outcomes that we can feel confident in, right?
[00:45:37 | 9:26:13 AM] Not outcomes we can trust, not blind trust or anything like that, but outcomes that we can feel comfortable with, that we can sit and tell our executives, our customers, our shareholders, our CEOs, our boards that yes, I believe this factory is working well.
[00:45:51 | 9:26:27 AM] And we think there's four components to this.
[00:45:54 | 9:26:30 AM] The first is being crystal clear about the intent.
[00:46:00 | 9:26:35 AM] If you don't know what you're trying to build, you can't tell the agent what to build, and you will not get the outcome you want.
[00:46:05 | 9:26:40 AM] The second is guardrails.
[00:46:08 | 9:26:44 AM] And we very specifically talk about guardrails, not guardrails.
[00:46:12 | 9:26:47 AM] Guardrails prevent something from going off the road.
[00:46:15 | 9:26:51 AM] Guardrails help keep you on it.
[00:46:17 | 9:26:52 AM] And I think what agents need are the small nudges to guide and govern those agents.
[00:46:23 | 9:26:58 AM] The third part is verification that needs to be independent, thorough, and issues fixed, as opposed to just cans kicked down the road.
[00:46:32 | 9:27:07 AM] And then lastly, evidence.
[00:46:34 | 9:27:10 AM] Trust but verify.
[00:46:36 | 9:27:11 AM] Trust but understand that it was done with proof that is consistent, audible, and repeatable.
[00:46:42 | 9:27:17 AM] And we multiply these together because we've seen a number of situations where one of these elements is missing.
[00:46:49 | 9:27:24 AM] And if it's zero, the confidence goes to zero.
[00:46:51 | 9:27:26 AM] If you do all of this but don't have evidence, you go to zero.
[00:46:55 | 9:27:30 AM] You don't have confidence in the outcome.
[00:46:58 | 9:27:33 AM] So we really think about factory design is requiring these four elements.
[00:47:05 | 9:27:40 AM] And as we put together factories, as we help customers, I'm not going to walk through every box on this page, but as we help our customers and partners build these software factories, we're very deliberate about how do you get the intent, bottom left-hand side in purple.
[00:47:19 | 9:27:55 AM] How do you put the guardrails in place?
[00:47:22 | 9:27:57 AM] How do you do verification in a way that's thorough and independent?
[00:47:25 | 9:28:01 AM] And how do you produce the evidence?
[00:47:28 | 9:28:03 AM] And by doing this, we see amazing results.
[00:47:31 | 9:28:06 AM] So these are real results now from our customers.
[00:47:35 | 9:28:10 AM] The first one is focusing on intent and guardrails.
[00:47:39 | 9:28:14 AM] And intent and guardrails, we have a product called Sonar Vortex, which gives intent, guardrails, and in the agentic loop starts to do verification.
[00:47:46 | 9:28:22 AM] So again, nudging the agents.
[00:47:48 | 9:28:23 AM] And what we see when we provide agents in long-running, in large, complex code bases with long-running tasks with this information is a 36% reduction in token cost because you're putting it in white plans.
[00:48:03 | 9:28:38 AM] You actually are putting it close to the answer.
[00:48:05 | 9:28:41 AM] You're helping it understand the map.
[00:48:07 | 9:28:43 AM] You don't have to burn tokens on things we already know.
[00:48:10 | 9:28:46 AM] And 92% reduction in issues in the commit, right?
[00:48:14 | 9:28:50 AM] So it's cheaper, and we can get a better outcome to go into that verification stage.
[00:48:20 | 9:28:56 AM] This is, again, all because we're nudging the agent to keep on track.
[00:48:26 | 9:29:01 AM] Then you get to verification, and we started Life as a verification company.
[00:48:30 | 9:29:06 AM] This is how we see the world, is through a verification lens.
[00:48:34 | 9:29:09 AM] And we have a very strong point of view that independent verification has to cover the full range of issues that is both precise and cost-effective, right?
[00:48:45 | 9:29:20 AM] You use CPUs when you can use CPUs, and you use GPUs when you need GPUs.
[00:48:49 | 9:29:24 AM] So we look at deterministic mixture methods, and then you add in agentic mixture methods, and it comes up with what we think is the gold standard of verification.
[00:49:00 | 9:29:35 AM] And what we see is when you apply this, our product is called Sonar Cube.
[00:49:04 | 9:29:40 AM] So we talked to our customers, over a thousand customers recently, and we said, How likely are you, or how often have you seen these issues from agentic coding?
[00:49:17 | 9:29:53 AM] And the statement to read here is Sonar Cube users are X percent more likely than non-users to have seen a very positive impact.
[00:49:24 | 9:30:00 AM] So 81% more likely to believe that AI coding has had a very positive impact on code security if you have that gold standard verification.
[00:49:37 | 9:30:13 AM] 34% more likely to have seen an impact on time to market.
[00:49:44 | 9:30:19 AM] 76% on outage frequency.
[00:49:46 | 9:30:22 AM] So again, as I come back to how do we have confidence to ship, what we're seeing is that if you put these pieces together and you build verification incredibly strongly as a first-class citizen in the factory, you are actually
[00:50:01 | 9:30:36 AM] We're actually building confidence, and you're seeing results: better security, more confidence in our time to market, improved, or a reduction in number of outages, improved reliability.
[00:50:14 | 9:30:49 AM] And of course, as I mentioned, you have to do this with evidence.
[00:50:18 | 9:30:53 AM] Make sure you pass the quality gate.
[00:50:19 | 9:30:55 AM] Make sure whatever—there's lots of acronyms up here—whichever ones you need to pass, whether that is your IT general controls inside of your internal controls and operations, whether that's MISRA if you're building cars, or any of the other ones that are on here.
[00:50:35 | 9:31:11 AM] Producing the evidence is what lets you sleep at night.
[00:50:38 | 9:31:13 AM] It's what gives you confidence that you can move forward.
[00:50:42 | 9:31:17 AM] So that, in essence, is how we think about the challenge of the future: that code is abundant, that confidence is scarce.
[00:50:51 | 9:31:27 AM] And really, the goal that we have and that we think that everyone should have as we think about the future of software development is how do we deliver confidence, and the factories of the future need to be able to deliver confidence.
[00:51:07 | 9:31:42 AM] So with that, I want to say thank you to everybody.
[00:51:09 | 9:31:45 AM] We have a big booth.
[00:51:10 | 9:31:46 AM] It's a big red booth on the floor right over that way, and would love to talk to you more about all of this.
[00:51:18 | 9:31:54 AM] Thank you very much.
[00:51:21 | 9:31:56 AM] Have a great morning.
[00:51:28 | 9:32:03 AM] Where should AI agents take control, and when should humans stay in charge?
[00:51:36 | 9:32:12 AM] Here to explore that balance in policy-driven workflows, please welcome Evan Kormos, engineering manager at Coinbase.
[00:51:57 | 9:32:32 AM] Hi, everyone.
[00:52:09 | 9:32:44 AM] My name is Evan Cormos.
[00:52:10 | 9:32:46 AM] I've been delivering, designing, building software for 20 years, the last 15 in enterprise financial services.
[00:52:19 | 9:32:54 AM] I am a player coach at Coinbase, and we're here today to talk about trusting agents in policy-driven workflows.
[00:52:34 | 9:33:09 AM] So let's start with the policy, and it's pretty boring.
[00:52:37 | 9:33:12 AM] I'm going to go over here for my notes.
[00:52:41 | 9:33:17 AM] So our starting point centers around the policy, and this sets the rules for how work gets done within the organization, and including especially risk and compliance.
[00:52:56 | 9:33:31 AM] Think of policy as the original institutional intent, or the original system prompt.
[00:53:02 | 9:33:38 AM] So ideally, we have this written down.
[00:53:04 | 9:33:40 AM] It's a little bit boring, so stick with me.
[00:53:09 | 9:33:45 AM] Using language like must, may, and should.
[00:53:12 | 9:33:47 AM] And again, these help define the rules and decisions about how the system operates in the organization.
[00:53:20 | 9:33:56 AM] Separate from policy, we have the actual running system.
[00:53:27 | 9:34:03 AM] So the first thing we're going to do is separate these two, both the build state and the run state, and two different moments in time.
[00:53:37 | 9:34:12 AM] So typically we're either defining or changing our policy, but the system is constantly running and it's constantly moving and changing.
[00:53:49 | 9:34:24 AM] So we could then sort of imagine a compilation event that— oops, sorry, I'm skipping ahead.
[00:53:57 | 9:34:32 AM] It's constantly changing.
[00:53:58 | 9:34:34 AM] So it's evolving quickly with these product-driven changes.
[00:54:02 | 9:34:38 AM] So everything is expected to still be roughly bound by the policy, but ultimately we separate this from the run state and the build state.
[00:54:15 | 9:34:50 AM] So inside the system, what does it look like?
[00:54:19 | 9:34:54 AM] We have a familiar model, if we have any enterprise folks in the room here: people, process, and technology.
[00:54:27 | 9:35:03 AM] But where really do agents fit into this mold?
[00:54:33 | 9:35:08 AM] So I see them as an operational model cutting across all three.
[00:54:38 | 9:35:13 AM] They work with people, execute parts of the process themselves, and they use and are made up of technology.
[00:54:48 | 9:35:23 AM] So for our talk today, we're going to be focusing here where agents meet process: what work we give them, what boundaries we set, and how we build trust in their outputs.
[00:55:07 | 9:35:42 AM] So let's dive into your workflow.
[00:55:10 | 9:35:45 AM] And it's high level and seems basic, but if you haven't, there are good reasons to map this out.
[00:55:19 | 9:35:54 AM] So maybe a change has to be approved before it goes live, or a customer has to go through verification before their account is opened.
[00:55:28 | 9:36:04 AM] We expect work to flow in a specific and gated direction.
[00:55:35 | 9:36:10 AM] So I believe agents make it worth revisiting what we can do in parallel.
[00:55:44 | 9:36:20 AM] Previously, some work used to cost too much or be too complex to coordinate in this way.
[00:55:50 | 9:36:25 AM] But now we can run independent reviews alongside each other, bring the results together, but keep the required checks in place.
[00:56:01 | 9:36:36 AM] So this is a directed acyclic graph, or a DAG.
[00:56:04 | 9:36:40 AM] It is a way to represent this workflow or process, the steps, the dependencies, for a flow that moves forward without looping back on itself.
[00:56:15 | 9:36:51 AM] Apache Airflow, if you're familiar, is an example of open source software that represents workflows, their dependencies as DAGs in Python code.
[00:56:35 | 9:37:11 AM] So this Python code, these DAGs, can be used to define and manage a number of policy-driven processes, like, for example, commercial lending.
[00:56:49 | 9:37:24 AM] We could also use a DAG to represent the workflow to list a token on the exchange in a specific region, if you're into that.
[00:56:59 | 9:37:34 AM] Or we could use a DAG to represent a regulated flow of delivering software, which is a hot topic.
[00:57:04 | 9:37:40 AM] And one we'll spend a little bit of time on.
[00:57:08 | 9:37:43 AM] I think that we've seen a lot of adoption within agents, within software delivery, and ultimately we're looking to leverage that same efficiency and scale in other areas of the business and close the adoption gap.
[00:57:26 | 9:38:02 AM] So let's stick with the software delivery example for a little bit.
[00:57:32 | 9:38:08 AM] What happens inside one of these nodes of the process?
[00:57:36 | 9:38:11 AM] And I'll give you a hint: it's a loop.
[00:57:47 | 9:38:23 AM] Oversimplified, but we have a basic version of what's happening within the—let's say this is the code review process, right?
[00:57:56 | 9:38:31 AM] So we're going to essentially do a number of steps, and essentially once we realize the work, we recognize that the work is good enough, we're going to allow it to pass on to the next step.
[00:58:08 | 9:38:44 AM] And that's essentially the function of the code review node.
[00:58:15 | 9:38:50 AM] The work doesn't always end up okay, so sometimes we have to take the feedback from the code review and iterate on it until the work is good enough to pass.
[00:58:31 | 9:39:07 AM] So this is a representation of a directed cyclic graph, or DCG.
[00:58:38 | 9:39:13 AM] So as far as open source software, something like LangChain LangGraph would be what I would say is helpful to manage the state of DCGs.
[00:58:51 | 9:39:27 AM] And this is an oversimplification.
[00:58:54 | 9:39:30 AM] These graphs can be very complex.
[00:58:59 | 9:39:35 AM] So zooming back out, the inner flow of the node, we have people and agents working together.
[00:59:06 | 9:39:42 AM] On the outer flow, we have a policy boundary.
[00:59:12 | 9:39:47 AM] But not everything goes to plan, so we have to handle exception flows.
[00:59:16 | 9:39:52 AM] We don't want the work to get stuck, and we don't want to design for every edge case either.
[00:59:23 | 9:39:58 AM] The exception flows will monitor and see kind of what happens.
[00:59:26 | 9:40:02 AM] If you're shipping code that gets canceled or doesn't meet security standards, that's something you should want to know about.
[00:59:38 | 9:40:14 AM] Volume shifts across the flow once we start to add agents into the mix.
[00:59:43 | 9:40:18 AM] And we've seen this with software delivery, and we'll see it in other processes as we bring agents into those processes as well, where now all of a sudden, if you're reviewing code faster, you need to design it quicker or you need to do the security scan faster.
[00:59:59 | 9:40:34 AM] So we see the volume shift across.
[01:00:00 | 9:40:36 AM] Shift across the flow.
[01:00:04 | 9:40:40 AM] And this is where it's really important that we have visibility into the process overall from a metric standpoint, because as we start to supercharge and parallelize and add more efficiency to the process, we start to develop more and more bottlenecks.
[01:00:19 | 9:40:54 AM] And so the operational visibility of the process is extremely important, much more important than the authoring and the building of your workflow tool.
[01:00:29 | 9:41:04 AM] So we want to visualize the process.
[01:00:34 | 9:41:10 AM] So we want to add parallel capacity by still keeping the controls.
[01:00:37 | 9:41:13 AM] And so this is where we'll add more additional capacity.
[01:00:43 | 9:41:19 AM] Okay, so we're doing some work, we're checking it, we're using the feedback again to refine it until the work is good enough to move on.
[01:00:56 | 9:41:31 AM] But why is that hard?
[01:00:57 | 9:41:33 AM] That seems like a pretty easy thing to do.
[01:00:59 | 9:41:35 AM] But as I mentioned before, these graphs get actually pretty complex, and we'll dive a little bit more into why this is difficult.
[01:01:10 | 9:41:46 AM] And if you're familiar, one challenge with AI engineering is the variability of inputs and outputs.
[01:01:16 | 9:41:51 AM] And I believe that higher quality inputs will result in better outputs at a lower compute cost.
[01:01:27 | 9:42:03 AM] But what are quality inputs?
[01:01:37 | 9:42:12 AM] So we'll generally speak to it as context model, maybe we can nitpick that, but this isn't our area of focus today.
[01:01:46 | 9:42:22 AM] We're going to focus more on outputs.
[01:01:48 | 9:42:24 AM] But we can't really talk about quality of outputs without talking about the quality of inputs.
[01:01:57 | 9:42:32 AM] So ideally, we've established a trusted context for our agent, and there's some references on that.
[01:02:04 | 9:42:39 AM] But one thing we can do in this model is inject the DAG state into our agent and let it know kind of where it fits into the bigger picture.
[01:02:14 | 9:42:49 AM] Okay, so now we've added even long time horizon goals, and that emphasizes the need to optimize the cost and efficiency of this loop.
[01:02:35 | 9:43:10 AM] So the check is where we decide whether the work is good enough to move forward.
[01:02:39 | 9:43:14 AM] We need to define what good looks like.
[01:02:41 | 9:43:16 AM] That's the hard part.
[01:02:44 | 9:43:19 AM] And we need to have a reliable way to evaluate it.
[01:02:47 | 9:43:22 AM] Otherwise, more passes don't necessarily mean better results.
[01:02:52 | 9:43:27 AM] The loop is really only as trustworthy as the check.
[01:02:55 | 9:43:30 AM] So if we want to talk about quality, let's talk about the check and let's talk about quality.
[01:03:01 | 9:43:36 AM] Okay, I think building with AI is an opportunity to improve product quality overall, like some of the conversation about durable software.
[01:03:13 | 9:43:48 AM] So I'm a believer in quality, and in traditional software, we've built confidence mechanisms in place to give us confidence that the software is of high quality.
[01:03:28 | 9:44:04 AM] And that's done with a variety of mechanisms, but primarily systematically with test cases, unit tests, checking these as a part of our delivery flow to ensure that when we make code changes, mistakes aren't made that break other things, right?
[01:03:43 | 9:44:19 AM] So this is a confidence mechanism that we've put in place with traditional software.
[01:03:51 | 9:44:26 AM] The agents are probabilistic, and so the same request can produce different answers.
[01:03:58 | 9:44:33 AM] More than one answer may be acceptable.
[01:04:02 | 9:44:38 AM] And we still need evidence, but exact output comparisons alone really aren't good enough.
[01:04:09 | 9:44:45 AM] We need to build representative data sets and evaluate them and define what good looks like.
[01:04:17 | 9:44:53 AM] We need to run these evaluations in repeated series, and this is a statistical analysis, right, where we actually look at the outputs in volume and not just as a direct comparison.
[01:04:34 | 9:45:10 AM] So, combining with evals as sort of your runtime logs of what happened, or sorry, traces, which are sort of your runtime logs of what happens, we've built this confidence mechanism to complement traditional software.
[01:04:53 | 9:45:29 AM] And ultimately, this is what we're going to be talking about a little bit more in terms of driving confidence in the output, not only putting this mechanism in place, but how do we begin to turn it on?
[01:05:08 | 9:45:44 AM] So, where does the agent belong?
[01:05:11 | 9:45:47 AM] Back to the lending example, we can do KYC, financials in parallel, and sequence like credit memo, risk review, documentation, decision, all these things in our DAG.
[01:05:23 | 9:45:59 AM] Looking at each node, we want to ask some certain questions like, how valuable would it be to have an agent drive this node versus a human drive this node?
[01:05:34 | 9:46:09 AM] And we can sort of look at some of these basic questions like, can we check it against the policy easily?
[01:05:39 | 9:46:14 AM] Can it run an abounded loop?
[01:05:41 | 9:46:16 AM] Can we trace it?
[01:05:42 | 9:46:17 AM] Can we fall back to a human?
[01:05:44 | 9:46:19 AM] If we can answer yes to these type of questions, we can kind of have a good idea going in that this particular node may be better suited for automation.
[01:05:53 | 9:46:29 AM] But throughout the DAG, we should look to drive agent assistance.
[01:05:58 | 9:46:33 AM] So, what we're really talking about is not whether or not AI is involved, but whether or not AI we expect to Take over at some point.
[01:06:10 | 9:46:46 AM] On the decision, you would probably agree that we probably need that to be human-driven.
[01:06:15 | 9:46:50 AM] This is essentially the check against the policy.
[01:06:18 | 9:46:53 AM] So this is going to be a little bit more difficult, I think, to hill climb.
[01:06:25 | 9:47:00 AM] But what do we mean by hill climb?
[01:06:27 | 9:47:02 AM] All right, how do we turn this on?
[01:06:30 | 9:47:05 AM] So day one, we start supervised.
[01:06:33 | 9:47:09 AM] And as we have agents and humans working together as a part of the process, we can manually verify the output to ensure that it is of high quality.
[01:06:48 | 9:47:23 AM] This is where we refine our data sets and ensure that we have the right confidence mechanisms in place.
[01:06:54 | 9:47:29 AM] We've defined what good looks like with the domain subject matter experts, and that they're beginning to verify it.
[01:07:03 | 9:47:39 AM] When measured confidence reaches a policy threshold, we can move towards sampling.
[01:07:09 | 9:47:44 AM] And what that means is humans are looking at a slice of the output and not necessarily all of it.
[01:07:14 | 9:47:50 AM] We begin more systematic evaluation through traces in order to ensure that what the humans aren't seeing is still meeting the quality bar.
[01:07:27 | 9:48:02 AM] And then finally, once we clear the confidence threshold, humans handle more of the exceptions of the process, but still act as participants in refining the data sets and ensuring the quality outputs.
[01:07:40 | 9:48:16 AM] Okay, so a few takeaways from this.
[01:07:49 | 9:48:25 AM] DAG and DCG.
[01:07:50 | 9:48:26 AM] Basic graph theory, but ultimately, how do we build these processes that exist today and where people are working them and bring agents into the mix?
[01:08:01 | 9:48:36 AM] And the recipe really is to keep it deterministic on the outside and make it adaptive on the inside.
[01:08:13 | 9:48:49 AM] The next is quality through evaluation, and this is really establishing a complementary confidence mechanism.
[01:08:22 | 9:48:58 AM] So it's not a feeling about a model.
[01:08:25 | 9:49:00 AM] We can actually provide research and statistics about the quality of our agents.
[01:08:35 | 9:49:11 AM] So this builds confidence and inherently trusts output.
[01:08:42 | 9:49:18 AM] Quality is a team sport.
[01:08:44 | 9:49:20 AM] AI engineers own the pipeline to taking product signals from all directions and deliver applications that are well built and utilize MLOps operations behind the scenes.
[01:09:02 | 9:49:38 AM] Finally, agents accelerate across the operating model.
[01:09:11 | 9:49:46 AM] I've included some references on the final slide, things that I've spoken about today.
[01:09:17 | 9:49:53 AM] This concludes my presentation.
[01:09:19 | 9:49:55 AM] Thank you very much.
[01:09:33 | 9:50:08 AM] What does it take to turn advances in AI into meaningful progress for financial services?
[01:09:39 | 9:50:14 AM] To share the thinking behind this question and to discuss where it's headed, please welcome the head of ChatGPT for financial services at OpenAI, Joseph Kim.
[01:09:59 | 9:50:35 AM] Hi everyone, I'm Joseph Kim, and I lead ChatGPT for financial services, a new product we launched just one month ago.
[01:10:16 | 9:50:51 AM] Many of you have already experienced how tools like Codex have changed the way you build in software engineering.
[01:10:21 | 9:50:57 AM] AI has become a much bigger part of the work you do every day.
[01:10:26 | 9:51:02 AM] Model intelligence is continuing to improve at an incredible pace, but many people working in industries like finance haven't yet experienced that same change in their day-to-day work.
[01:10:37 | 9:51:12 AM] I expect that to start changing rapidly over the next few months, and builders like all of you in this room have a big role in making that happen quickly, taking the intelligence in these models and turning it into products that people can use in their daily work.
[01:10:51 | 9:51:26 AM] Today, I will share a little bit about what we learned building ChatGPT for financial services and how we're thinking about what comes next.
[01:10:59 | 9:51:35 AM] I'll start by showing you what we've built, including a quick demo.
[01:11:03 | 9:51:39 AM] Then I'll explain why we built it and why we think now is the right time to build.
[01:11:08 | 9:51:43 AM] From there, I'll walk you through how we built it with some technical lessons that I hope you can apply to your own products.
[01:11:13 | 9:51:49 AM] Finally, we'll take a look at where models are headed and products are going and what that could mean for financial work over the next year.
[01:11:22 | 9:51:57 AM] Let's start with what we built.
[01:11:26 | 9:52:01 AM] ChatGPT for financial services is a tailored version of ChatGPT work built specifically for financial professionals, starting with investment banking and equity research.
[01:11:35 | 9:52:11 AM] It's designed to help people at the large financial institutions get more out of their day-to-day work, similar to how Codex speeds you up in software development.
[01:11:44 | 9:52:20 AM] As we built the product with our design partners, Morgan Stanley and Evercore, we focused on three core areas.
[01:11:50 | 9:52:25 AM] First, financial data.
[01:11:53 | 9:52:28 AM] Financial data is the foundation of financial work, and the work you can do is limited by the quality of your sources.
[01:11:59 | 9:52:34 AM] We wanted people to have access to the data they need directly within ChatGPT.
[01:12:03 | 9:52:38 AM] Second, an interface built for finance.
[01:12:07 | 9:52:42 AM] We wanted the product to feel familiar to financial professionals with ways to inspect source material, explore financial charts, and control the sources behind an analysis.
[01:12:17 | 9:52:52 AM] Third, your firm's format.
[01:12:20 | 9:52:55 AM] Financial work happens within the context of an organization, and the models and presentations people produce need to follow their firm's format and standards.
[01:12:28 | 9:53:04 AM] We made it easier to create those artifacts using firm-specific templates.
[01:12:33 | 9:53:08 AM] But they say a picture is worth a thousand words, so I'll stop talking for a bit and show you the product.
[01:13:50 | 9:54:25 AM] Wonderful.
[01:13:51 | 9:54:27 AM] Now I'd like to take some time to talk about why we built it.
[01:14:12 | 9:54:48 AM] We built ChatGPT for financial services to help close what we call the capability overhang.
[01:14:18 | 9:54:53 AM] As you can see here, model capabilities have improved at a tremendous rate over the last few years.
[01:14:23 | 9:54:58 AM] In just a few years, we've gone from models solving high school math problems to systems capable of solving the Millennial Prize math problems.
[01:14:29 | 9:55:05 AM] But the value people get from these models in their day-to-day work hasn't kept pace.
[01:14:34 | 9:55:10 AM] You read about the breakthroughs in the news, yet for many financial professionals, the way they work hasn't changed nearly as quickly.
[01:14:40 | 9:55:16 AM] We call that gap the capability overhang, the distance between what the model is capable of and the value people can actually get from it.
[01:14:48 | 9:55:23 AM] Closing that gap takes more than building a capable model.
[01:14:51 | 9:55:26 AM] People need the right data and tools, and they need an experience that fits the way they work.
[01:14:55 | 9:55:31 AM] That's where builders like you come in.
[01:14:57 | 9:55:33 AM] I want to show you an example of how much of a difference the right product experience can make.
[01:15:03 | 9:55:38 AM] This is a chart that shows how Codex usage grew within OpenAI across different job functions.
[01:15:09 | 9:55:44 AM] As you can see, engineers started using Codex early, and that share grew steadily.
[01:15:14 | 9:55:49 AM] But look at finance, legal, and recruiting.
[01:15:17 | 9:55:52 AM] At the beginning of 2026, almost none of their AI output was generated in Codex.
[01:15:21 | 9:55:57 AM] By June, that share was around 90%.
[01:15:24 | 9:56:00 AM] If you look carefully, you'll notice a huge inflection point that happened around February, March of this year.
[01:15:30 | 9:56:05 AM] I went back to see what happened around this time, assuming that we must have released a new model, but instead I found that we had released the Codex desktop app in February.
[01:15:39 | 9:56:14 AM] My takeaway is that the product made it easier for people outside of engineering to put these capabilities to work.
[01:15:45 | 9:56:20 AM] That's the opportunity we're pursuing in finance, building an experience that helps financial professionals get much more value from the intelligence already available to them.
[01:15:54 | 9:56:29 AM] Now let me talk about how we built it.
[01:15:57 | 9:56:33 AM] Let's start with data.
[01:15:59 | 9:56:35 AM] In finance, the work you can do is limited by the quality of the information you have access to.
[01:16:03 | 9:56:39 AM] So we wanted the product to come with the sources professionals rely on, from financial statements and earning transcripts to market and private company data.
[01:16:11 | 9:56:47 AM] We looked at existing MCP connectors for financial data and found that many had issues with latency, errors, or search quality.
[01:16:19 | 9:56:54 AM] So we went and licensed a lot of this data directly and built our own hosting and search indexes using the same infrastructure as our web index.
[01:16:26 | 9:57:02 AM] We still use the MCP protocol to give the model access to the data, but hosting and indexing it ourselves gives us more control over the quality and the reliability of the experience.
[01:16:36 | 9:57:11 AM] It also gives us the flexibility to post-train our models to work with these datasets.
[01:16:41 | 9:57:16 AM] The analogy I like to use is MCP and skills are like handing an instruction manual to a junior analyst versus post-training, where the model is like having a senior analyst who's been working with the data for over two decades and knows all of its quirks like the back of their hand.
[01:16:55 | 9:57:30 AM] MCP and skills give the model access and instructions.
[01:16:59 | 9:57:34 AM] Post-training can help it develop more familiarity with the data itself.
[01:17:03 | 9:57:38 AM] Once we had that data foundation in place, the next step was making it easy to turn that information into professional-grade work.
[01:17:10 | 9:57:45 AM] For financial professionals, that work often takes the form of an Excel model, a PowerPoint presentation, or a written analysis that needs to be reviewed and shared with other people.
[01:17:18 | 9:57:54 AM] So we focused on helping the model produce those outputs in a way that fits the firm's existing workflows.
[01:17:24 | 9:58:00 AM] We built a template system that gives users access to the firm's approved templates when generating spreadsheets and presentations.
[01:17:31 | 9:58:06 AM] The goal is to reduce the work someone has to do to get an output ready for their team or clients.
[01:17:36 | 9:58:12 AM] We also added things like interactive financial charts so users can explore stock prices and financial metrics directly within ChatGPT as they work through an analysis.
[01:17:45 | 9:58:21 AM] And we built citation viewers that let people inspect the source passages and tables behind an answer.
[01:17:51 | 9:58:27 AM] In finance, you need to be able to check where a number came from and understand the context around it.
[01:17:56 | 9:58:32 AM] We wanted that review to be a natural part of the experience.
[01:18:00 | 9:58:35 AM] These are the kind of product details that help turn a model's capabilities into work that someone can use.
[01:18:05 | 9:58:41 AM] The part I think that is most relevant for people in the room is how we built it.
[01:18:10 | 9:58:45 AM] Much of the functionality you just saw was built using the same ChatGPT plugin platform that's available to US developers.
[01:18:17 | 9:58:52 AM] For financial data, we use MCP tools and connectors to give the model access to the information it needs.
[01:18:22 | 9:58:57 AM] We use citation metadata in MCP apps to let users inspect the sources, and MCP apps also power interactive financial charts.
[01:18:29 | 9:59:05 AM] We use Skills together with shared artifact tools to guide financial workflows and produce Excel models and PowerPoint presentations.
[01:18:36 | 9:59:12 AM] And for financial onboarding, we leveraged the native plugin onboarding experience.
[01:18:42 | 9:59:17 AM] What that means for builders is that you can focus on the expertise that makes your product valuable.
[01:18:46 | 9:59:22 AM] If you have unique data, an existing tool, or a deep understanding of a particular workflow, you can use these building blocks to bring that into ChatGPT and create an experience around it.
[01:18:57 | 9:59:32 AM] Financial services is just one example, but I do think this opportunity extends far beyond finance.
[01:19:04 | 9:59:39 AM] I personally believe that we're going to see multiple $1 billion businesses built simply as ChatGPT plugins, and that opportunity will keep evolving as the models become more capable.
[01:19:14 | 9:59:50 AM] Last but not least, I'd like to spend the rest of the talk on what comes next and what that means for the products we should be building today.
[01:19:22 | 9:59:58 AM] I'd like to start by talking about model capabilities and expectations for the future.
[01:19:27 | 10:00:03 AM] Models are improving so quickly that it can be difficult to get an intuitive sense of what comes next.
[01:19:33 | 10:00:08 AM] One useful way to build that intuition is to look backwards.
[01:19:37 | 10:00:12 AM] Something remarkable about the last couple of years is how predictable parts of that progress have been.
[01:19:42 | 10:00:17 AM] Model improvements have come from three broad, sometimes overlapping drivers: scaling compute, improving algorithms, and something we call unhobbling, which is about finding ways to get more useful work out of the models.
[01:19:54 | 10:00:29 AM] We'll come back to unhobbling on a later slide.
[01:19:57 | 10:00:32 AM] In 2002 and 2003, the most visible driver was pre-training, which
[01:20:02 | 10:00:38 AM] Which meant scaling compute by making the models bigger and adding more data.
[01:20:05 | 10:00:41 AM] By leveraging scaling laws, researchers were able to predict model performance with high accuracy.
[01:20:11 | 10:00:46 AM] For example, before GPT-4 finished training, OpenAI researchers were able to predict its final loss as well as its performance on a coding eval.
[01:20:20 | 10:00:55 AM] Improvements on the algorithm side have also been surprisingly steady.
[01:20:23 | 10:00:59 AM] One study found that the compute needed to reach a given level of language model performance from scratch fell by roughly half every eight months.
[01:20:31 | 10:01:06 AM] Although you can't predict the timing of each individual breakthrough, the cumulative rate of improvement follows a surprisingly steady trend.
[01:20:38 | 10:01:13 AM] In 2024 and 2025, reasoning became another major driver of progress.
[01:20:43 | 10:01:19 AM] We used reinforcement learning and post-training to teach models to work through problems more effectively, and we gave them more compute to think when answering.
[01:20:51 | 10:01:26 AM] That opened up another way to improve performance alongside pre-training.
[01:20:55 | 10:01:30 AM] However, for folks that don't know, at OpenAI, we ran into problems with pre-training and therefore had difficulty scaling the model.
[01:21:02 | 10:01:37 AM] In 2026, we've been able to solve many of these issues, and we've successfully trained larger and more capable models, as you've seen through GPT-5.
[01:21:10 | 10:01:46 AM] 6-Sol and GPT-6-Astra.
[01:21:13 | 10:01:48 AM] Throughout these years, researchers have raised concerns about potential barriers to further scaling.
[01:21:17 | 10:01:53 AM] For example, in 2024, many researchers were concerned about a potential data wall where we would run out of human-generated text to train on.
[01:21:26 | 10:02:01 AM] But techniques like synthetic data generation, learning from verifiable rewards, as well as algorithmic improvements to learn more from each individual token have essentially solved this problem.
[01:21:36 | 10:02:11 AM] We've also solved concerns around things like context window length using things like sparse attention and compaction.
[01:21:43 | 10:02:18 AM] Looking ahead to 2027, I strongly believe that the trend lines of the past will continue and that we'll train larger, more efficient, and more capable models.
[01:21:51 | 10:02:27 AM] We clearly still have very difficult problems to solve, especially around things like alignment and safety.
[01:21:55 | 10:02:31 AM] But like we have in the past, I believe that human ingenuity, increasingly assisted by capable models, will help us make progress on those problems too.
[01:22:03 | 10:02:39 AM] So how good will models be at the end of 2027?
[01:22:06 | 10:02:42 AM] Let's use math as an example.
[01:22:08 | 10:02:44 AM] In 2023, GPT-4 scored 700 out of 800 on SAT high school math.
[01:22:14 | 10:02:50 AM] By 2005, an OpenAI model reached gold medal status on the International Mathematical Olympiad.
[01:22:21 | 10:02:57 AM] And in early 2026, an internal model disproved a long-standing conjecture related to a problem that mathematicians had been working on since 1946.
[01:22:31 | 10:03:06 AM] More recently, an internal model proposed a solution to the Navier-Stokes Millennium Prize problem, and we also shared 719 mathematical research manuscripts across 372 families of results.
[01:22:44 | 10:03:19 AM] In just a few years, we've gone from a strong score on a high school math exam to AI systems producing original research at the frontier of mathematics.
[01:22:51 | 10:03:27 AM] If we see another year of progress roughly in line with what we've been seeing over the past couple of years, I expect that by end of 2027, models will outperform even leading human experts on a growing range of difficult tasks across different fields and specialties.
[01:23:05 | 10:03:41 AM] Mathematics gives us an early glimpse of what that could look like.
[01:23:09 | 10:03:45 AM] And while the capability curve may look gradual, the change in how we work can feel sudden.
[01:23:14 | 10:03:49 AM] I call this the threshold phenomenon.
[01:23:16 | 10:03:51 AM] For any given task, there's a threshold of usefulness, the point where a model becomes capable and reliable enough to save you time.
[01:23:22 | 10:03:57 AM] That threshold depends on the work you're doing and how much checking or human review it requires.
[01:23:27 | 10:04:02 AM] Below that threshold, improvements can be hard to appreciate.
[01:23:30 | 10:04:05 AM] The model might produce better answers, make fewer mistakes, or get further through a task.
[01:23:34 | 10:04:09 AM] But if checking and fixing its work still takes as long as doing it yourself, your practical assessment hasn't changed.
[01:23:40 | 10:04:15 AM] It's still not useful.
[01:23:41 | 10:04:17 AM] Meaningful improvements in capability can feel like little progress.
[01:23:45 | 10:04:21 AM] Then the model crosses that threshold.
[01:23:47 | 10:04:23 AM] Suddenly it produces something you can use.
[01:23:49 | 10:04:25 AM] The time you spend reviewing it becomes much smaller than the time it saves you.
[01:23:53 | 10:04:29 AM] You start using it regularly, and eventually you become comfortable delegating that task.
[01:23:57 | 10:04:33 AM] That transition can feel like an enormous leap, even if the underlying improvement was similar to the previous few improvements.
[01:24:03 | 10:04:38 AM] What changes is the progress became useful to you.
[01:24:06 | 10:04:41 AM] This helps explain why model progress sometimes feels sudden, even when parts of the underlying trend have been steady and predictable.
[01:24:12 | 10:04:48 AM] And because difficult tasks have different thresholds, we should expect those moments to arrive at different times across the work that we do.
[01:24:19 | 10:04:54 AM] So as you think about the products you're building, I'd encourage you to ask yourself, what model capabilities am I underappreciating today because they aren't quite useful yet?
[01:24:27 | 10:05:03 AM] Where might those capabilities be a year from now?
[01:24:31 | 10:05:06 AM] Then think about what you would build if those capabilities crossed the threshold of usefulness and became reliable enough to delegate.
[01:24:37 | 10:05:12 AM] How would the interface change?
[01:24:39 | 10:05:15 AM] What would the user still need to control, review, or approve?
[01:24:43 | 10:05:18 AM] Those are product design questions we can start working on now.
[01:24:46 | 10:05:22 AM] We want to have the right experiences ready so that when the models cross that threshold, people can take advantage of the capabilities right away, and so you can stay one step ahead of your competitors.
[01:24:56 | 10:05:32 AM] So what does this mean for finance?
[01:24:58 | 10:05:34 AM] I think there are two forces that will push more financial work across that threshold of usefulness.
[01:25:02 | 10:05:38 AM] I think of them as the rising tide and the waves on top.
[01:25:06 | 10:05:41 AM] The rising tide is the underlying improvements to the underlying model.
[01:25:09 | 10:05:45 AM] Historically, we haven't dedicated a significant amount of training time or compute specifically to finance.
[01:25:15 | 10:05:51 AM] Much of the financial capabilities you see today have come from building larger, more capable models and from transferable skills developed in areas like mathematics, coding, and reasoning.
[01:25:26 | 10:06:01 AM] As these general capabilities improved, they lifted performance across many kinds of financial work.
[01:25:31 | 10:06:07 AM] The waves are what happen when we focus directly on finance.
[01:25:34 | 10:06:10 AM] My team is leading an effort to invest significantly more in finance-specific post-training.
[01:25:39 | 10:06:14 AM] The idea here is to build on those broad capabilities and train the model more directly on the work people do in finance.
[01:25:45 | 10:06:20 AM] That can create peaks in performance on particular tasks on top of the rising tide.
[01:25:49 | 10:06:25 AM] Over the next three months, we're focused on improving general financial reasoning and the quality of the work these models produce, analyzing financial information, building Excel models, and creating PowerPoint presentations.
[01:26:00 | 10:06:36 AM] These are the kinds of tasks that make up a significant percentage of the daily work of a junior analyst, and we want the output to be accurate, well-structured, and increasingly useful in real workflows.
[01:26:10 | 10:06:45 AM] Beyond that, we plan to invest more in the kinds of judgment that senior bankers, analysts, and investors bring to more difficult questions.
[01:26:16 | 10:06:52 AM] This includes taking in large amounts of information, deciding what matters, and essentially trying to predict the future, forecasting a company's earnings, assessing where commodity prices might go, or evaluating which businesses are attractive investments.
[01:26:29 | 10:07:05 AM] Our goal is for models to match the performance of the best human experts on these types of financial tasks sometime in 2027.
[01:26:37 | 10:07:12 AM] We expect that progress to come from both forces working together: the underlying model continuing to improve and our team training it more directly for the work people do in finance.
[01:26:45 | 10:07:20 AM] We've talked about how models are becoming more capable and how we can train them to perform better on specific tasks, but I want to come back to one third driver I mentioned earlier: unhobbling.
[01:26:55 | 10:07:30 AM] We've already seen a few examples.
[01:26:57 | 10:07:32 AM] ChatGPT uses RLHF to teach models to follow instructions and have conversations with us.
[01:27:03 | 10:07:38 AM] Tools allow them to search for information, write and run code, and interact with the software we use.
[01:27:08 | 10:07:43 AM] Each of these makes the model more useful in the real world.
[01:27:11 | 10:07:46 AM] I think the next form of unhobbling will be proactive and persistent agents.
[01:27:14 | 10:07:50 AM] Today, a lot of our interactions with AI still happen when we open a conversation and tell it what to do next.
[01:27:20 | 10:07:55 AM] A persistent agent can hold on to a goal, remember the relevant context, and continue working in the background.
[01:27:25 | 10:08:01 AM] Once you've given it a direction, it can make progress even when you aren't actively prompting it.
[01:27:30 | 10:08:05 AM] The other reason persistence matters is it changes the API or the way people work with the agent.
[01:27:35 | 10:08:10 AM] Today, getting the most out of AI agents requires learning a new workflow, learning how to prompt it, and learning how to use the tools.
[01:27:41 | 10:08:17 AM] A persistent agent can work in a way that's more familiar.
[01:27:44 | 10:08:20 AM] You can give it a project, share context, and ask for an update.
[01:27:48 | 10:08:24 AM] It's much more similar to how humans work with other humans and therefore makes the AI more accessible to people that don't develop those initial skills.
[01:27:57 | 10:08:32 AM] Let me close with three bets for finance in 2027.
[01:28:00 | 10:08:35 AM] These are just a couple of my expectations for what comes as the models improve.
[01:28:03 | 10:08:39 AM] First, people will rely rarely, if ever, on Excel and PowerPoint to make financial models or pitch decks.
[01:28:10 | 10:08:45 AM] Second, AI financial analysts will start to feel like human coworkers.
[01:28:13 | 10:08:49 AM] They'll remember your preferences and context from the previous days, take ownership of assignments, proactively follow up, and keep working when you're focused on something else.
[01:28:21 | 10:08:57 AM] Third, models will start to outperform the best human experts on critical financial tasks.
[01:28:26 | 10:09:02 AM] That includes things like forecasting earnings and developing investment ideas.
[01:28:29 | 10:09:05 AM] I expect models to become better than the best people at making these economically important forward-looking judgments.
[01:28:35 | 10:09:11 AM] Those are my three bets for 2027.
[01:28:38 | 10:09:13 AM] And if this is where we expect to be in 2027, I'll leave you with one last question.
[01:28:43 | 10:09:18 AM] What should you start building today to be ready for inevitable thresholds that the models will cross tomorrow?
[01:28:48 | 10:09:24 AM] Thank you.
[01:28:49 | 10:09:25 AM] AI is changing both sides of the security equation.
[01:29:04 | 10:09:39 AM] Here to examine the emerging risks and defenses shaping AI security today, please welcome the head of architecture and emerging technologies in the Office of the CTO at Bloomberg, Andre Ribka.
[01:29:16 | 10:09:52 AM] Hello, everybody.
[01:29:17 | 10:09:53 AM] Who is running agents here in Dev, prod, your laptop, your phone?
[01:29:33 | 10:10:09 AM] Yeah?
[01:29:35 | 10:10:10 AM] Amazing.
[01:29:36 | 10:10:11 AM] I see a lot of opportunities.
[01:29:37 | 10:10:12 AM] It's just such a great H2B in the age of AI and security.
[01:29:42 | 10:10:17 AM] So we're going to talk about real incidents and what would have stopped them.
[01:29:46 | 10:10:22 AM] You might be wondering, why is there vegetables?
[01:29:48 | 10:10:24 AM] A lot of security talks are about, like, just eat your vegetables.
[01:29:53 | 10:10:28 AM] We're going to make it a little more exciting.
[01:29:55 | 10:10:30 AM] All right, so who have seen this headline?
[01:29:58 | 10:10:33 AM] An autonomous agent.
[01:30:11 | 10:10:46 AM] Some agent security incidents, yeah?
[01:30:13 | 10:10:48 AM] All right.
[01:30:14 | 10:10:49 AM] Every lab at this point announced some sort of security incident, right, with runaway agents, right?
[01:30:20 | 10:10:55 AM] So the big one.
[01:30:22 | 10:10:57 AM] There was one way out.
[01:30:23 | 10:10:58 AM] The agent found it.
[01:30:25 | 10:11:01 AM] So on July 26, we found out that AI agents and the hacken test—they were obviously given a hacken goal—escaped their sandbox through a proxy bug, then breached the public model.
[01:30:30 | 10:11:05 AM] Who can guess what it was?
[01:30:32 | 10:11:07 AM] Yeah?
[01:30:33 | 10:11:08 AM] Maybe a little bit?
[01:30:35 | 10:11:10 AM] Okay.
[01:30:36 | 10:11:11 AM] All right.
[01:30:37 | 10:11:12 AM] I'm not going to name any names here, just to be clear.
[01:30:39 | 10:11:14 AM] So the agents took 17,600 actions in four and a half days.
[01:30:44 | 10:11:19 AM] How do you miss that, right?
[01:30:48 | 10:11:23 AM] And so AI lab was doing the evaluation, right?
[01:30:55 | 10:11:30 AM] Then there was some package proxy.
[01:30:57 | 10:11:32 AM] They found a zero day.
[01:30:58 | 10:11:33 AM] Okay, so that was a way out.
[01:31:01 | 10:11:36 AM] Then you had some exposed customer endpoint in some unnamed compute platform, and then they breached the model hub, right?
[01:31:11 | 10:11:46 AM] So we just need a better sandbox, yes?
[01:31:14 | 10:11:49 AM] Everybody thinks just need a better sandbox.
[01:31:17 | 10:11:52 AM] Not quite.
[01:31:19 | 10:11:54 AM] Security for most of us right now is not built for agents, and we have autonomy problem versus the blast radius, right?
[01:31:31 | 10:12:06 AM] The agents are only useful if they can reach a ton of tools, services, data.
[01:31:36 | 10:12:11 AM] If we give them that reach, right, with no hard limits, the damage could be unlimited.
[01:31:43 | 10:12:18 AM] And firewall or static role.
[01:31:45 | 10:12:21 AM] Can't tell when an agent goal has been hijacked, right?
[01:31:51 | 10:12:26 AM] So what needs to change?
[01:31:53 | 10:12:28 AM] One agent, one identity, short-lived scoped credentials, no shared keys.
[01:32:00 | 10:12:35 AM] Assume the input is hostile.
[01:32:02 | 10:12:37 AM] The box in it needs to be sandboxed.
[01:32:07 | 10:12:42 AM] Default deny outbound.
[01:32:09 | 10:12:44 AM] That means DNS too, and we'll see some examples.
[01:32:12 | 10:12:47 AM] We want deterministic controls outside the model.
[01:32:16 | 10:12:51 AM] Check every call, block it, and keep a kill switch.
[01:32:20 | 10:12:55 AM] All right, so what we're going to cover today is kind of this layered defense approach.
[01:32:25 | 10:13:00 AM] This is your toolbox.
[01:32:27 | 10:13:02 AM] As we go through this toolbox, essentially think how you can apply this to your world.
[01:32:34 | 10:13:09 AM] We're going to cover identity and trust, prompt and input defense, to an action governance, execution isolation, data protection, and governance observability.
[01:32:43 | 10:13:18 AM] So let's start with identity and trust.
[01:32:45 | 10:13:20 AM] I think it's one of the most important ones to start with, not the sandbox.
[01:32:49 | 10:13:24 AM] We'll cover that later.
[01:32:51 | 10:13:26 AM] We're going to talk about workload identity, scoped credentials, agent-to-agent mutual authentication, and secureless agents.
[01:32:59 | 10:13:34 AM] First incident.
[01:33:00 | 10:13:36 AM] So in this case, attackers social engineered the chat agent to review a long-lived OAuth token, and it asked, and we were able to export the CRM data of 700-plus companies.
[01:33:14 | 10:13:49 AM] So first homework for today: think about your agent's token credentials and when they expire.
[01:33:24 | 10:13:59 AM] So what we need is workload identity, tightly scoped with audit trail, and ideally a circuit breaker, so if the breach happens.
[01:33:34 | 10:14:09 AM] The circuit breaker gets tripped, nothing gets exfiltrated.
[01:33:39 | 10:14:14 AM] Another example.
[01:33:41 | 10:14:16 AM] This is one of my favorite ones.
[01:33:43 | 10:14:18 AM] There was a prompt injection where essentially a low-privileged agent was instructed to recruit a more powerful one, which copied the data and raised privileges.
[01:33:55 | 10:14:30 AM] Amazing, right?
[01:33:57 | 10:14:32 AM] So we want agent-to-agent mutual authentication.
[01:34:01 | 10:14:36 AM] A2A scares me a lot.
[01:34:03 | 10:14:38 AM] This is what keeps me at night, because you really want to make sure that these low-privileged agents should not be able to talk to the higher-privileged agent, right?
[01:34:11 | 10:14:46 AM] You want scoped credentials, least-privileged tools, and audit trail.
[01:34:16 | 10:14:51 AM] All right, so let's talk about next layer: prompt and input defense.
[01:34:21 | 10:14:56 AM] Super important.
[01:34:22 | 10:14:57 AM] We want injection protection, isolation, input validation, and provenance tagging.
[01:34:28 | 10:15:03 AM] So, real-world incident number three.
[01:34:33 | 10:15:08 AM] In this case, no one opened the email.
[01:34:34 | 10:15:09 AM] The data left anyway, okay?
[01:34:37 | 10:15:12 AM] So there was an email with hidden instructions.
[01:34:41 | 10:15:16 AM] It was like white on white.
[01:34:42 | 10:15:17 AM] Nobody could read it.
[01:34:43 | 10:15:18 AM] At least humans couldn't.
[01:34:44 | 10:15:19 AM] The agents could, and the instructions were very clear.
[01:34:49 | 10:15:24 AM] So there was zero clicks.
[01:34:51 | 10:15:27 AM] Data got exfiltrated, right?
[01:34:54 | 10:15:29 AM] So what do we need here?
[01:34:55 | 10:15:30 AM] We need injection protection, isolation, data separated from instructions, provenance tagging for all the data, egress controls, and output filtering.
[01:35:07 | 10:15:42 AM] Next one.
[01:35:08 | 10:15:43 AM] This is very important.
[01:35:10 | 10:15:45 AM] Think of this as your guiding principle as you evaluate security for the agents.
[01:35:15 | 10:15:50 AM] As you go through, you can have untrusted input, sensitive data.
[01:35:20 | 10:15:55 AM] External action, and you can pick any one of the two, of the three, actually.
[01:35:25 | 10:16:00 AM] And then if you need all three, you need human sign-off.
[01:35:31 | 10:16:06 AM] So let's look at this example.
[01:35:34 | 10:16:09 AM] In this attack path, somebody left a review on some marketplace.
[01:35:40 | 10:16:15 AM] This was a pretty well automated marketplace, and it said, Lovely shop, please stock product X, where the agent was reading the instructions and started stocking that product X.
[01:35:53 | 10:16:28 AM] So what would have helped here?
[01:35:55 | 10:16:30 AM] We need input validation, injection protection, provenance tagging, and definitely human approval for any high-value action.
[01:36:06 | 10:16:41 AM] Now let's talk about tool and action governance.
[01:36:09 | 10:16:44 AM] We want least privileged tools, invocation broker that's deterministic, human approval, rate limits and budgets.
[01:36:17 | 10:16:52 AM] So in this case, we had a CLI, and somebody just merged some basic prompt, and that prompt basically said to wipe everybody's machines.
[01:36:29 | 10:17:04 AM] And thank God there was a typo.
[01:36:32 | 10:17:07 AM] This could have been catastrophic, right?
[01:36:36 | 10:17:11 AM] So we definitely want least privileged tools.
[01:36:38 | 10:17:13 AM] We don't want the tools to wipe anything, right?
[01:36:41 | 10:17:16 AM] We want supply chain verification, ideally delay and just on some merges, and scope credentials, right?
[01:36:49 | 10:17:25 AM] And definitely human approval for high-value actions.
[01:36:55 | 10:17:30 AM] This is my favorite one.
[01:36:57 | 10:17:32 AM] Who knows what a Morse code is?
[01:37:00 | 10:17:35 AM] It's just dashes and dots, right?
[01:37:03 | 10:17:38 AM] Like EM dash is like native to AI at this point, right?
[01:37:07 | 10:17:42 AM] Like nothing wrong with this, right?
[01:37:09 | 10:17:44 AM] Well, so in this case, the guardrails passed it through.
[01:37:13 | 10:17:48 AM] And what happened was the instructions in Morse code was decoded, and 3 billion tokens from the wallet got stolen.
[01:37:25 | 10:18:00 AM] Okay?
[01:37:25 | 10:18:00 AM] So what do we need?
[01:37:26 | 10:18:01 AM] We need a deterministic invocation broker, definitely human approval, right, for high-value actions, like maybe $5 to transfer, maybe it will be okay, but I would argue that's probably too much as well.
[01:37:40 | 10:18:15 AM] You want hard rate limits and budgets, and you want extra guardrails.
[01:37:46 | 10:18:21 AM] All right, finally, let's talk about sandboxing.
[01:37:50 | 10:18:25 AM] We definitely want sandboxing.
[01:37:52 | 10:18:27 AM] We want egress controls always that is outside of sandbox, and ideally we want ephemeral runtime.
[01:38:00 | 10:18:35 AM] So in this case, we had a wonderful sandbox, no web access, but guess what?
[01:38:07 | 10:18:42 AM] We forgot about DNS.
[01:38:09 | 10:18:44 AM] So prompt hidden, essentially instructed to smuggle some data out through DNS lookups, and somebody was able to read the DNS logs and exfiltrate the data.
[01:38:21 | 10:18:56 AM] Cool, huh?
[01:38:23 | 10:18:58 AM] All right.
[01:38:24 | 10:18:59 AM] So what's the fix?
[01:38:25 | 10:19:00 AM] We want default deny for all outbound traffic.
[01:38:28 | 10:19:03 AM] That includes DNS.
[01:38:31 | 10:19:06 AM] And we also want provenance tagging.
[01:38:33 | 10:19:09 AM] We want output filtering.
[01:38:35 | 10:19:10 AM] And something that didn't make it here is probably you want circuit breakers.
[01:38:40 | 10:19:15 AM] So can your agent access DNS?
[01:38:45 | 10:19:20 AM] That's one of the homework questions.
[01:38:47 | 10:19:22 AM] All right.
[01:38:48 | 10:19:23 AM] Let's talk about data protection.
[01:38:50 | 10:19:25 AM] We want output filtering, context minimization, tenant isolation, query gateway, and memory integrity, the most exciting one.
[01:38:58 | 10:19:33 AM] So in this case, There was an MCP server, and essentially it was pretty functional, but then it allowed the user to access any other user's data.
[01:39:11 | 10:19:46 AM] So this is actually a very common incident that you see, like cross-agent, sorry, cross-data of various customers' access.
[01:39:21 | 10:19:56 AM] And this was running for a month unnoticed.
[01:39:25 | 10:20:00 AM] So what do we want?
[01:39:27 | 10:20:02 AM] We want hard tenant CI isolation, right?
[01:39:31 | 10:20:06 AM] As hard as possible.
[01:39:33 | 10:20:08 AM] Think like, you know, AWS accounts or, you know, let's say GCP projects.
[01:39:37 | 10:20:12 AM] You want workload identity tightly scoped to that domain.
[01:39:41 | 10:20:16 AM] You want data provenance tagging, and you want audit trail.
[01:39:45 | 10:20:20 AM] Okay, so this one is pretty novel attack vector, and this is a hidden instruction in a document which instructed to essentially remember that when the agent sees a secret, make sure to send it.
[01:40:01 | 10:20:37 AM] Let's send it to this DNS domain.
[01:40:04 | 10:20:39 AM] So it's pairing the DNS exfiltration with essentially sleeper agent instructions, right?
[01:40:13 | 10:20:49 AM] So now we need to think about how do we check memory for any of those malicious instructions.
[01:40:20 | 10:20:56 AM] I hear a security product from a vendor coming up very soon, right after this talk, to do the memory integrity checks.
[01:40:29 | 10:21:05 AM] I'm just kidding.
[01:40:30 | 10:21:06 AM] I'm definitely giving instructions to the agents.
[01:40:36 | 10:21:11 AM] Firmware runtime, right?
[01:40:37 | 10:21:12 AM] Ideally, we want to start fresh, no memories whatsoever.
[01:40:41 | 10:21:16 AM] We want injection protection, isolation, and circuit breakers.
[01:40:46 | 10:21:21 AM] And finally, let's talk about the governance of observability.
[01:40:49 | 10:21:24 AM] We definitely want an audit trail, guardrails outside, circuit breakers, supply chain verification of the serial tasting.
[01:40:57 | 10:21:33 AM] So in this case, really sad incident.
[01:41:04 | 10:21:39 AM] Somebody instructed the agent, we in code phrase, don't touch prod.
[01:41:10 | 10:21:45 AM] And look at this, understood, thumbs up.
[01:41:13 | 10:21:48 AM] That's very trustworthy, right?
[01:41:16 | 10:21:52 AM] And what happened?
[01:41:18 | 10:21:54 AM] Agent ran, dropped database, production.
[01:41:21 | 10:21:57 AM] Oh, production also was dev too, by the way.
[01:41:26 | 10:22:02 AM] Very sad.
[01:41:27 | 10:22:03 AM] Lots of people.
[01:41:29 | 10:22:04 AM] I actually had a friend, by the way, call me and said, like, what do I do?
[01:41:35 | 10:22:10 AM] How do I recover my database?
[01:41:37 | 10:22:12 AM] So we want circuit breakers on anything that is catastrophic, right?
[01:41:43 | 10:22:19 AM] We want human approval for any high-value actions, right?
[01:41:47 | 10:22:22 AM] We want scoped credentials to only the actions we want the agent to do.
[01:41:50 | 10:22:26 AM] And we definitely want tenant isolation.
[01:41:53 | 10:22:29 AM] Imagine it dropped all the tables.
[01:41:56 | 10:22:31 AM] All right.
[01:41:58 | 10:22:33 AM] So in this case, this sounds very rudimentary.
[01:42:02 | 10:22:37 AM] Okay, so you had like a fake MCP on NPM.
[01:42:04 | 10:22:40 AM] What else is new here, right?
[01:42:07 | 10:22:43 AM] But it was 15 clean releases.
[01:42:09 | 10:22:45 AM] It was very useful utility.
[01:42:11 | 10:22:47 AM] And the attacker on the version 16 added a line on BCC saying basically like, send me, by the way, all the emails on BCC line to me.
[01:42:23 | 10:22:58 AM] Okay?
[01:42:24 | 10:23:00 AM] So this is kind of a classic supply chain verification, but I would say like, don't just do supply chain verification.
[01:42:30 | 10:23:06 AM] Do delay ingest.
[01:42:32 | 10:23:08 AM] Don't ingest every package on day zero.
[01:42:36 | 10:23:11 AM] Ingest it maybe in a week or two.
[01:42:40 | 10:23:16 AM] You want a deterministic invocation broker, least privileged tools, egress controls.
[01:42:46 | 10:23:21 AM] All right, so let's recap.
[01:42:48 | 10:23:24 AM] We would be talking about defense in depth for agentic AI.
[01:42:52 | 10:23:27 AM] This is your toolbox.
[01:42:53 | 10:23:29 AM] You want to make sure that you have identity and trust, prompt and input defense, tool and action governance, execution isolation, data protection, governance, observability.
[01:43:04 | 10:23:39 AM] And as I said, this is kind of like eating your vegetable stalks.
[01:43:07 | 10:23:42 AM] So here's your vegetables.
[01:43:09 | 10:23:45 AM] Identity needs to be short-lived tokens, one per agent.
[01:43:14 | 10:23:50 AM] Input, outside text cannot give commands.
[01:43:18 | 10:23:54 AM] Tools, syntax is not a control.
[01:43:23 | 10:23:59 AM] Isolation, default deny means everything, including DNS.
[01:43:28 | 10:24:04 AM] Data, check the tenant on every query.
[01:43:32 | 10:24:08 AM] Governance, prompts ask, deterministic code enforces.
[01:43:38 | 10:24:13 AM] Three priorities starting today.
[01:43:42 | 10:24:18 AM] Lock down your agents.
[01:43:44 | 10:24:19 AM] Use the rule of two.
[01:43:46 | 10:24:22 AM] Every tool call needs to go through some sort of deterministic broker.
[01:43:52 | 10:24:28 AM] And humans sign off for any high-value actions.
[01:43:56 | 10:24:32 AM] Second, one agent, one identity.
[01:44:01 | 10:24:36 AM] Kill any long-lived keys.
[01:44:04 | 10:24:39 AM] Everything needs to be tight scoped: tokens, short-lived audience-bound tokens.
[01:44:09 | 10:24:45 AM] Box the runtime, but pair it up with default deny egress.
[01:44:13 | 10:24:48 AM] That means DNS as well.
[01:44:15 | 10:24:51 AM] Make sure there are budgets that halt, not just alert.
[01:44:21 | 10:24:56 AM] Finally, I will leave you with this.
[01:44:24 | 10:25:00 AM] Who does the spec-driven development here?
[01:44:27 | 10:25:02 AM] Well, yeah.
[01:44:29 | 10:25:05 AM] Okay.
[01:44:30 | 10:25:06 AM] Make sure your spec includes security requirements.
[01:44:34 | 10:25:09 AM] And this is just a sample.
[01:44:35 | 10:25:11 AM] You can ping me on LinkedIn for a more comprehensive one.
[01:44:41 | 10:25:16 AM] And I also have an old book I wrote that explains a little more concepts if you are confused about some of them.
[01:44:48 | 10:25:23 AM] So please connect on LinkedIn.
[01:44:51 | 10:25:27 AM] Build fast, deploy securely.
[01:44:53 | 10:25:29 AM] Thank you.
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
[02:49:59 | 11:30:35 AM] So this is a talk about compute markets, but it's kind of more of a talk about why to make a compute market.
[02:50:08 | 11:30:44 AM] If you don't know me, I'm Evan.
[02:50:11 | 11:30:47 AM] We run a company called San Francisco Compute.
[02:50:14 | 11:30:49 AM] We make a physically settled order, physically settled forwards market.
[02:50:18 | 11:30:54 AM] So if you were here for the last talk, the last talk was basically why all the operators of GPU clusters don't really work very well.
[02:50:27 | 11:31:03 AM] When we say physically settled, we mean we're the operator.
[02:50:31 | 11:31:07 AM] We're both the operator of the hardware in the same way that a cloud is the operator of the hardware, and then we're also the market at the same time.
[02:50:38 | 11:31:14 AM] It's kind of like a grid for compute.
[02:50:40 | 11:31:16 AM] So the general gist of this is that in order to run and operate a supercomputer, we think problems start right at the design of the supercomputer, right in the design of the bill of materials, its control of the backplane fabric as well.
[02:50:58 | 11:31:33 AM] It's also control of bare metal orchestration.
[02:51:00 | 11:31:36 AM] It's also services on top, VMs and so on.
[02:51:03 | 11:31:39 AM] There's a lot of different parts of the stack that you have to do effectively.
[02:51:07 | 11:31:42 AM] Otherwise, the folks who have a data center and would like to make more money on that data center by becoming the GPU cloud end up failing for the customer.
[02:51:20 | 11:31:56 AM] So that's what we do.
[02:51:22 | 11:31:58 AM] We offer what's called supercomputing as a service.
[02:51:25 | 11:32:00 AM] We go to folks who want to become a cloud.
[02:51:27 | 11:32:02 AM] That's like folks who want to become what Nvidia would call an NCP, or venture firms that want to have clusters for their portfolio and want to be able to reallocate that capacity when a company like Instinct is taking off, or AI companies who would like the residual value on the compute because they've realized that's really important for their financials, but don't want to operate a supercomputer.
[02:51:48 | 11:32:24 AM] So that's physical settlement.
[02:51:50 | 11:32:26 AM] And then on top of that, we run a live order book for capacity that you can buy reserved, either right now or in the future.
[02:51:58 | 11:32:33 AM] This together is not at all what we thought we were going to be doing.
[02:52:03 | 11:32:39 AM] Originally, we were this company called June Lark that was trying to make kind of like Suno or Udio, but prior to Suno or Udio.
[02:52:11 | 11:32:47 AM] At the time, what you needed to do to realistically start a lab was you needed to raise a big deposit, a huge one, which was $10 million at the time.
[02:52:22 | 11:32:58 AM] We thought that was a crazy amount of money, and so we thought, no, that's stupid.
[02:52:25 | 11:33:01 AM] We're going to raise 500K, and obviously what we're going to do is we're going to rent from somebody else.
[02:52:31 | 11:33:07 AM] Obviously today, it's not $10 million, it's a billion dollars.
[02:52:35 | 11:33:11 AM] And nonetheless, we had raised our 500K, we buy a big cluster, and then we're underwater on our cluster every month.
[02:52:44 | 11:33:20 AM] And if we didn't sublease our cluster, we would have gone bankrupt.
[02:52:48 | 11:33:23 AM] So if you've heard of GPU brokers, we were the first GPU broker because we were forced into being a GPU broker.
[02:52:52 | 11:33:28 AM] So the first year of the company was us just trying to sell our cluster, otherwise we would go bankrupt.
[02:52:57 | 11:33:33 AM] So I would wander around with these, like, actual pieces of paper at NeurIPS, which both say H100 and A100 at the same time, because that's how I made the posters so quickly.
[02:53:11 | 11:33:47 AM] And so this talk is not really about necessarily, like, how a compute market works.
[02:53:17 | 11:33:53 AM] It's how a compute market gets to exist.
[02:53:21 | 11:33:57 AM] We like to think about it like there's this pamphlet, and on the pamphlet, on the front side, it's like, man, starting a neolab sucks.
[02:53:27 | 11:34:03 AM] There's all these different, like, financial and economic problems.
[02:53:30 | 11:34:05 AM] On the back of the pamphlet, it says, compute markets.
[02:53:34 | 11:34:10 AM] It's not super clear how one gets to the other until you open the pamphlet and then, like, holy shit, there's, like, so much stuff in this pamphlet, and it keeps going, and there's so many folds.
[02:53:43 | 11:34:18 AM] It's just a very difficult and challenging problem because you need to solve two, like, miracle problems to get working.
[02:53:48 | 11:34:24 AM] You have to both make a market, which is a uniquely difficult problem because it has a cold start problem.
[02:53:54 | 11:34:29 AM] You also have to build a cloud, and then you have to not become a cloud, which is a whole separate challenge.
[02:53:59 | 11:34:35 AM] But these are the problems that the labs are facing, and it's about to be the problems that everyone is about to facing.
[02:54:05 | 11:34:40 AM] So if you work at a startup, these are your problems now.
[02:54:08 | 11:34:43 AM] Right now, everybody is sold out of compute.
[02:54:10 | 11:34:46 AM] This is probably not going to change for a while.
[02:54:15 | 11:34:51 AM] So that means that you're going to have to buy a new cluster, a net new one, and there's a lead time.
[02:54:19 | 11:34:55 AM] You have no way to pay for that cluster to come online now.
[02:54:22 | 11:34:58 AM] You're going to pay for it to come online later.
[02:54:24 | 11:35:00 AM] There's nothing in the market that can realistically get that cluster online for you now.
[02:54:28 | 11:35:04 AM] Meanwhile, you're going to pay your entire bank balance as a deposit.
[02:54:33 | 11:35:08 AM] The reason you're paying your entire bank balance as a deposit is because the lender has no idea how to underwrite AGI.
[02:54:39 | 11:35:15 AM] How in the world are you supposed to do that?
[02:54:41 | 11:35:17 AM] You've got two-person startups in San Francisco, who, or maybe New York, who say, I'm going to build superintelligence.
[02:54:49 | 11:35:24 AM] No lender knows how to underwrite superintelligence, so they have no idea what the asset is worth.
[02:54:55 | 11:35:30 AM] Meanwhile, your cluster is very likely to be delayed.
[02:54:58 | 11:35:34 AM] That's because the lender needed to underwrite against the credit risk of the customer, and so they needed to know who is the customer first before you deploy the cluster.
[02:55:05 | 11:35:41 AM] So right when the customer signs is the riskiest point in the entire operation.
[02:55:10 | 11:35:45 AM] You wanted it to be the case that you built the cluster first and then you sell it.
[02:55:14 | 11:35:49 AM] This also helps reduce all sorts of different types of problems where clusters break.
[02:55:18 | 11:35:54 AM] Meanwhile, most of the people who are setting up clusters are people who have the actual asset that makes the thing cheap, like you've got the data center space already.
[02:55:27 | 11:36:03 AM] What that doesn't get is supercomputing expertise.
[02:55:30 | 11:36:05 AM] As we saw in the last talk, if you've watched that one.
[02:55:34 | 11:36:10 AM] Meanwhile, you're going to run into the exact same problem that Jun Lark did, which is you're going to either way overbuy or you're going to way underbuy.
[02:55:42 | 11:36:17 AM] That's because AI doesn't have margins that look like SaaS companies, and so you don't have very much margin for error.
[02:55:47 | 11:36:23 AM] And so the chances that you either underbuy and somebody else wins because they did it correctly, or you overbuy and then you just become Stability AI or you blow up, you end up like Character AI, are really high.
[02:56:00 | 11:36:35 AM] So these are all the same problem.
[02:56:01 | 11:36:36 AM] They're all just different types of risk.
[02:56:03 | 11:36:38 AM] They're technical risk, they're financial risk, they're credit risk.
[02:56:06 | 11:36:41 AM] They're all one big bundled risk problem, which is the problem that we end up solving, and it's also the problem that we think compute markets broadly, the entire industry solves.
[02:56:15 | 11:36:50 AM] So we'll walk through each one of these and walk how that gets to a compute market, because if you don't understand these, it's kind of like unclear why you would want a compute market.
[02:56:22 | 11:36:58 AM] And they almost seem like this problem that somebody thinks, Oh wow, compute markets are cool, so I'm going to go start one.
[02:56:27 | 11:37:03 AM] We think they should be derived from the actual problems that people face, which is first, everyone is sold out.
[02:56:33 | 11:37:08 AM] Why are they sold out?
[02:56:34 | 11:37:09 AM] Because the lender couldn't finance the cluster unless you had a long-term offtake agreement.
[02:56:38 | 11:37:14 AM] In CPUs, this wasn't the case because CPU buyers are SaaS companies.
[02:56:44 | 11:37:19 AM] SaaS companies have high margins, and because they have high margins, you can build a product that rewards you with high margins for your CPUs.
[02:56:58 | 11:37:34 AM] Think about it like this way.
[02:57:00 | 11:37:35 AM] If you're a SaaS company and your underlying cloud doubles their prices, you don't go bankrupt.
[02:57:04 | 11:37:40 AM] You hate your cloud.
[02:57:06 | 11:37:41 AM] You're mad, but you don't go bankrupt.
[02:57:07 | 11:37:43 AM] If you're an AI company and your underlying cloud doubles their prices, you go bankrupt unless you go to some other underlying cloud.
[02:57:13 | 11:37:49 AM] And what that means is that you're actually price sensitive.
[02:57:16 | 11:37:51 AM] And because you're actually price sensitive, and there's nothing keeping you at any particular cloud, so you can't sell on demand because your customers will immediately leave to whoever is cheaper.
[02:57:27 | 11:38:02 AM] And so that means that in order to finance GPU clusters, you have to have long-term take-or-pay contracts, hopefully with someone who has investment grade credit.
[02:57:35 | 11:38:11 AM] However, if you don't have liquidity on those, if you're selling reserved and your customer can't get out, then that also means that some other customer who wants the capacity right now because they're like instinct and their product is taking off can't pay for anything.
[02:57:47 | 11:38:23 AM] They have to finance a new cluster, which has a lead time because the physical world just exists and it's going to take a while.
[02:57:53 | 11:38:28 AM] Sometimes you even have to build a damn data center.
[02:57:56 | 11:38:31 AM] And then because you're financing a new cluster, you're going to pay a deposit because almost nobody in AI has any reasonable credit.
[02:58:02 | 11:38:38 AM] And because this is a brand new technology, all these companies are new.
[02:58:06 | 11:38:42 AM] Meanwhile, even as you start to scale up that ladder, you're still going to run into credit issues all the way through.
[02:58:12 | 11:38:48 AM] It's the number one bottleneck of AI at the moment.
[02:58:14 | 11:38:49 AM] It's not power.
[02:58:15 | 11:38:50 AM] You hit credit way before you hit power.
[02:58:20 | 11:38:55 AM] So what that means is every inference company, every NeoLab, their bottlenecks by how much cash do they have in the bank account.
[02:58:28 | 11:39:03 AM] And so they go back to the venture capitalist who says, Oh, I'm going to fund at the model layer, the application layer, the inference layer, because I don't want to fund all of that CapEx stuff.
[02:58:37 | 11:39:12 AM] And so the venture capitalist then funds all the CapEx stuff by giving the new NeoLab or new inference company the check that they then send to the cloud, which is The deposit for the cluster, and that's how you underwrite the customer.
[02:58:53 | 11:39:29 AM] So, the clusters then are delayed because the cloud couldn't actually deploy the cluster until they had the customer in hand.
[02:59:04 | 11:39:39 AM] And so that was the riskiest point.
[02:59:06 | 11:39:41 AM] So therefore, what should have happened was the cloud had bought the cluster ahead of time and then waited until it was landed in the data center and then sold it.
[02:59:17 | 11:39:52 AM] And that means you have way less likelihood of delays.
[02:59:20 | 11:39:55 AM] Meanwhile, the cluster is very likely to break when you get the cluster as the customer because you don't have liquidity.
[02:59:26 | 11:40:01 AM] And so if the failure rate is higher than what you expect and you don't have the ability to transition a node in, then you don't have anywhere you can pull nodes from, which means that if you need new nodes to make up for the failed ones, you have to RMA them, which means you have to get a new node.
[02:59:40 | 11:40:16 AM] And then that gets us back to several steps before where you have the lead time problem again.
[02:59:46 | 11:40:22 AM] And so everything breaks for everybody all the time.
[02:59:50 | 11:40:25 AM] Once you have gotten through all of that as a new AI lab, your problems are, you know, nobody was sold, like everyone was sold out.
[02:59:57 | 11:40:33 AM] You then had to wait.
[03:00:10 | 11:40:45 AM] and had to wait a lead time.
[03:00:11 | 11:40:47 AM] You pay this big deposit.
[03:00:12 | 11:40:47 AM] The thing was delayed, and then it broke.
[03:00:14 | 11:40:49 AM] And finally, you got through all of that.
[03:00:16 | 11:40:52 AM] And the likelihood that you predict your demand correctly is very low.
[03:00:19 | 11:40:55 AM] And so you're either going to be way overprovisioned or way underprovisioned, and you have no way out.
[03:00:23 | 11:40:59 AM] There's no way to sell your capacity to somebody else, and there's no way to buy more capacity if you need it.
[03:00:31 | 11:41:06 AM] So, compute markets.
[03:00:31 | 11:41:06 AM] To solve these problems, you need to solve a bunch of different problems all at once.
[03:00:32 | 11:41:07 AM] You need to underwrite the value of the GPU cluster rather than underwriting the value, underwriting the credit risk of the customer.
[03:00:36 | 11:41:11 AM] This is how it could work.
[03:00:38 | 11:41:13 AM] It's not guaranteed to work like this.
[03:00:40 | 11:41:16 AM] In other industries, what happened is everything just consolidated.
[03:00:46 | 11:41:21 AM] You got one big creditworthy customer that does the whole damn industry.
[03:00:49 | 11:41:24 AM] That's what the path of AI is currently on track to do.
[03:00:52 | 11:41:28 AM] It's instead of going to be a liquid market where anybody can participate, it's going to look like TSMC.
[03:00:56 | 11:41:31 AM] You're going to get one buyer or a few buyers that are the clouds.
[03:00:57 | 11:41:32 AM] You're going to get a few model labs that are the AI labs, and then you won't get other startups.
[03:01:00 | 11:41:35 AM] This is what we think is going to happen, and this is why three years ago, when we were doing our AI lab, we had a chance.
[03:01:06 | 11:41:42 AM] We could have said, no, we're not going to do our new, we're not going to, like, stick it out for several years just trying to keep our company alive.
[03:01:15 | 11:41:50 AM] We're just going to go do a new AI lab.
[03:01:17 | 11:41:53 AM] But we saw this problem, and we said, oh shit, if we don't do anything about this, then we will just hit this three years from now.
[03:01:24 | 11:42:00 AM] And here we are three years from now hitting this problem, and where everyone's going to hit this problem.
[03:01:32 | 11:42:07 AM] So, as if you watched the last talk, it's very hard to solve this problem unless you are operating both the market and the clusters at the same time.
[03:01:39 | 11:42:15 AM] So this is Dylan Page.
[03:01:41 | 11:42:16 AM] Dylan is the co-chair of the CNCF Infrastructure Group.
[03:01:44 | 11:42:20 AM] That's the organization that makes Kubernetes.
[03:01:46 | 11:42:21 AM] He formerly worked at Lambda doing infrastructure there, and he joined the San Francisco Compute because GPU compute.
[03:01:53 | 11:42:29 AM] isn't sufficiently standardized or reliable for the market operator to be divorced from the physical infrastructure.
[03:01:58 | 11:42:33 AM] It doesn't work if you aren't the one who's buying the thing.
[03:02:01 | 11:42:37 AM] Sorry, it doesn't work if the person you're buying from isn't operating it.
[03:02:04 | 11:42:40 AM] To give an example of why this doesn't work is I'm sure some of you are flying in from overseas or out of town, and you have a hotel room.
[03:02:13 | 11:42:48 AM] Wouldn't it be great if you could, you know, sell that hotel room to somebody else?
[03:02:18 | 11:42:53 AM] I go to you and I want to buy that hotel room, and I say, can I get room service?
[03:02:22 | 11:42:58 AM] Can I get my room cleaned?
[03:02:24 | 11:43:00 AM] I've got a problem with my room.
[03:02:26 | 11:43:02 AM] Who do I call?
[03:02:27 | 11:43:03 AM] If you don't operate the hotel, you can't fix any of those problems.
[03:02:31 | 11:43:07 AM] That's why brokering clusters doesn't work.
[03:02:33 | 11:43:09 AM] You have to operate the cluster like the hotel.
[03:02:36 | 11:43:11 AM] You have to run the whole damn thing.
[03:02:38 | 11:43:13 AM] Otherwise, you can't actually make a market.
[03:02:40 | 11:43:16 AM] It doesn't work.
[03:02:41 | 11:43:16 AM] You can't do physical settlement.
[03:02:43 | 11:43:18 AM] So why does nobody do physical settlement?
[03:02:46 | 11:43:22 AM] The problem is there's a very strong incentive to never do physical settlement.
[03:02:50 | 11:43:26 AM] That's because if you build out physical settlement for compute, what that literally means is you're building out the entire operating capacity of a GPU cloud.
[03:02:58 | 11:43:34 AM] And if you are building out the entire operating capacity of a GPU cloud, you should just be a GPU cloud because it looks to be the case that you will make an ungodly amount of money.
[03:03:09 | 11:43:44 AM] You will sign billion dollar deal after billion dollar deal.
[03:03:17 | 11:43:53 AM] And so, fuck it.
[03:03:20 | 11:43:56 AM] Let's not make a compute market.
[03:03:22 | 11:43:57 AM] Let's instead just become a GPU cloud, which is what basically everybody does because the numbers are astronomical and it's a very reasonable thing to do.
[03:03:30 | 11:44:05 AM] The reason why we ended up building physical settlement was because we knew that if we didn't start this, we would then not be able to start an AI lab, which was the real damn thing that we wanted to do in the first place.
[03:03:40 | 11:44:16 AM] We wanted to make a lab.
[03:03:42 | 11:44:18 AM] We didn't get to make a lab unless this exists.
[03:03:44 | 11:44:19 AM] So when we started, it was 10 million as the deposit that you had to pay to start a new lab.
[03:03:48 | 11:44:24 AM] This is like how you get over the credit risk problem.
[03:03:51 | 11:44:26 AM] Then the cluster sizes got bigger.
[03:03:53 | 11:44:29 AM] The sort of minimum ante into the space got bigger.
[03:03:57 | 11:44:32 AM] Then it was 100 million.
[03:03:58 | 11:44:34 AM] Now it's a billion.
[03:03:59 | 11:44:35 AM] We don't think it can continue.
[03:04:01 | 11:44:36 AM] We don't think there is a world in which you can get a $10 billion round right out the bat before you raise, before you have revenue or traction or your product or anything.
[03:04:10 | 11:44:45 AM] And what that means is that if you don't solve this problem, we are currently on track to not have any startups in AI.
[03:04:16 | 11:44:52 AM] Now, one of the things that you could think could happen is maybe there can be new inference companies and new model labs.
[03:04:24 | 11:44:59 AM] And the way that they solve the credit problem is that instead they just shift the risk to the application layer.
[03:04:30 | 11:45:06 AM] They say, look, I need to get over my credit problem.
[03:04:34 | 11:45:10 AM] So what I'm going to do is I'm going to only sign customers who are investment grade credit, you know, Fortune 500.
[03:04:43 | 11:45:18 AM] I'm going to only sign customers on five-year contracts for tokens.
[03:04:47 | 11:45:22 AM] I'm going to only sign customers for tokens that require a big deposit upfront.
[03:04:54 | 11:45:30 AM] That is the end of everything.
[03:04:57 | 11:45:33 AM] If you have inference layer getting bottlenecked by credit, what happens is you can't get tokens unless you have credit or you have a big deposit.
[03:05:07 | 11:45:43 AM] And the problem of that is that tokens are used by the whole damn economy.
[03:05:11 | 11:45:47 AM] There is no rule that says that startups have to exist.
[03:05:15 | 11:45:51 AM] If every startup is suddenly bottlenecked by credit in order to access intelligence, what happens is existing firms just ship everything.
[03:05:24 | 11:46:00 AM] They themselves get to make the product because they've got credit, and then they make the revenue from that product, and then it makes their credit better.
[03:05:33 | 11:46:09 AM] And that's a flywheel that makes consolidation happen throughout the entire economy.
[03:05:37 | 11:46:12 AM] If you don't fix this bottleneck, there aren't any startups.
[03:05:40 | 11:46:15 AM] This is why we started doing this, and because at one point.
[03:05:43 | 11:46:19 AM] Or what we think is going to happen is you're going to end up in like three to five years, you're going to look out and say, I want to start a new startup.
[03:05:53 | 11:46:28 AM] And to get there, you need to buy so many tokens in order to compete with the existing partner or like existing players.
[03:06:00 | 11:46:35 AM] So you need to buy $100 million of tokens.
[03:06:03 | 11:46:39 AM] We think this is what you are actually going to have to do in order to start a new company, because other people are spending hundreds of millions of dollars of tokens.
[03:06:11 | 11:46:47 AM] If you just draw the line out, this is what happens.
[03:06:14 | 11:46:50 AM] So you need a big giant deposit because you're two people who have no idea what they're doing, and so nobody trusts you.
[03:06:20 | 11:46:56 AM] So you're going to go and raise $100 million from your venture capitalist.
[03:06:24 | 11:46:59 AM] Meanwhile, nobody wants to work with you because you're a two-person startup.
[03:06:28 | 11:47:04 AM] Then you're going to be asked to pay for that hundred, or you're going to be asked to pay for a five-year contract on that hundred million if you're not paying it all as a deposit.
[03:06:34 | 11:47:10 AM] And then you just don't get new model labs.
[03:06:37 | 11:47:12 AM] You don't get new startups.
[03:06:38 | 11:47:14 AM] You get a consolidation in the industry.
[03:06:41 | 11:47:16 AM] So we, at one point, were this little lab.
[03:06:45 | 11:47:20 AM] And what we did is we lived in San Francisco, and we knew all the other people who were also just two little folks who had started a startup and wanted to be able to participate in the most important technology of our time.
[03:06:59 | 11:47:35 AM] So I want these people to exist.
[03:07:01 | 11:47:37 AM] I want this person to exist, and I want this person to exist.
[03:07:05 | 11:47:40 AM] I want this startup to exist, and this startup to exist, and this startup to exist.
[03:07:09 | 11:47:44 AM] This one, and this one, and this one, and this one, and this one, and this one, and this one.
[03:07:14 | 11:47:49 AM] If you get these companies going, maybe they'll become big folks that build your cancer cures, or they build something that nobody thought of, or something that wasn't just sort of AI slopped out.
[03:07:24 | 11:48:00 AM] This is kind of the problem that compute markets solve.
[03:07:28 | 11:48:03 AM] And if you don't solve it, we don't think there's going to be any startups.
[03:07:33 | 11:48:08 AM] Cool.
[03:07:33 | 11:48:09 AM] That's it.
[03:07:35 | 11:48:10 AM] That's the talk.
[03:07:36 | 11:48:12 AM] Yeah.
[03:15:22 | 11:55:57 AM] Started here.
[03:15:22 | 11:55:58 AM] Hey everyone, my name is Afan, and I'm a lead for compute trading at Jump Trading, which is a proprietary trading firm, alongside my co-lead over here, Alejandro.
[03:15:32 | 11:56:08 AM] So today we're going to be looking over some of the market structure as it applies to compute trading, what compute trading even is, what we can see it becoming.
[03:15:44 | 11:56:20 AM] And I think we'll start with some macro, look at microstructure, and then talk a little bit about where we see things in policy.
[03:15:59 | 11:56:35 AM] So the title of the talk is The Dark Pools of Compute, but some of you guys are in finance, so you might be confused as to why I'm using this terminology.
[03:16:07 | 11:56:43 AM] What do I mean by dark pool here?
[03:16:09 | 11:56:45 AM] Essentially what I'm referring to is an unlit market.
[03:16:13 | 11:56:49 AM] Right now, most compute trades in blocks, physical compute here, and these are private quotes.
[03:16:18 | 11:56:54 AM] We have a lot of brokers, and these are long bilateral contracts.
[03:16:21 | 11:56:57 AM] Now, at the end of the day, these are really commercial agreements.
[03:16:25 | 11:57:01 AM] So we're using the term trading here to kind of like look at how it's transacted between parties.
[03:16:30 | 11:57:06 AM] These commercial agreements tend to be some mixture of an MSA, an SLA, and an order form, cluster-specific with hardware-specific language in each order.
[03:16:43 | 11:57:19 AM] But when we're looking at pricing and looking at some of these other kind of metrics, a lot of the time most of the talk is around the SKU, so what the chip itself is, the baseboard, so H100, H200, B300, etc.
[03:16:58 | 11:57:34 AM] And so...
[03:16:59 | 11:57:35 AM] A lot of the negotiation here happens kind of outside the public view.
[03:17:03 | 11:57:39 AM] There's no, you know, like exchange for physically traded compute that's widely, you know, adopted and, you know, used for everyone goes there to, like, take a look and trade compute.
[03:17:13 | 11:57:49 AM] These are done in chats, right?
[03:17:16 | 11:57:52 AM] They're out of the public view.
[03:17:18 | 11:57:54 AM] There's public marketplaces.
[03:17:19 | 11:57:55 AM] There's price references.
[03:17:20 | 11:57:56 AM] There's a lot of, you know, on-demand marketplaces.
[03:17:23 | 11:57:59 AM] However, for these actual tenored, so, you know, on a given term for a fixed amount of capacity with a certain total contract value, these trade over Slack messages, X messages, Telegram group chats, a bunch of OTC kind of channels that are all over in these kind of, I want to call them like neo-chat.
[03:17:42 | 11:58:18 AM] And some of you might be familiar with commodities and how a lot of, you know, there's chatting happening on ICE Chat, Bloomberg Chat, etc.
[03:17:50 | 11:58:26 AM] This is kind of where the kind of markets here lie.
[03:17:55 | 11:58:31 AM] And so I want to look a little bit here on the macro market structure and a little bit on the players here as well.
[03:18:01 | 11:58:37 AM] And so this was a recent kind of A16Z, some of you guys might have seen this.
[03:18:06 | 11:58:42 AM] So I'm putting this out there because, you know, you can go on A16Z's actual X and take a look at this graph yourself.
[03:18:12 | 11:58:48 AM] What we're looking at is that the cost of given capability has fallen sharply.
[03:18:17 | 11:58:53 AM] The bill, of course, still depends on the model usage, capacity, and other factors such as speed is a big thing right now with the new ChatGPT models.
[03:18:27 | 11:59:03 AM] Cheaper tokens unlock more usage, and a team can do more work for the same budget.
[03:18:31 | 11:59:07 AM] So what we're seeing is that a lot of teams are simply just using way more tokens.
[03:18:36 | 11:59:12 AM] So we have this latent demand that hasn't really been hit yet, and people are just going to use more with the same budget that they were using before when models cost more, and they're just expending more tokens.
[03:18:47 | 11:59:23 AM] So applications that were too expensive become possible.
[03:18:50 | 11:59:26 AM] However, as we're kind of talking about compute here, the capacity underneath still has to be built and paid for, even as the cost of a particular task comes down.
[03:18:59 | 11:59:35 AM] And so the important distinction is between the price of the intelligence, the number of tasks people want to run, and the amount of hardware needed to serve them.
[03:19:09 | 11:59:45 AM] And so this is where we get to kind of the Jevons paradox and a little some of the stuff that we've been looking at lately, where we had a very interesting thing where, you know, intuitively you'd assume that compute and inference kind of like rises together, correlates very, you know, very closely.
[03:19:26 | 12:00:01 PM] As you can see, you can see there's a little bit of a decoupling that happened, and token prices declined further, but compute prices remain robust.
[03:19:33 | 12:00:09 PM] And so, like, what can be an explanation for this?
[03:19:35 | 12:00:11 PM] Now, there's a lot of, like, potential explanations.
[03:19:38 | 12:00:14 PM] One here is the whole Jevons paradox, is that even though token prices and inference is getting extremely efficient to serve on these new baseboards and GPUs, people are just consuming a lot more.
[03:19:50 | 12:00:26 PM] And so the demand for compute rises, and people just consume a lot more tokens, even if the cost per million.
[03:19:57 | 12:00:33 PM] Per million for input and for caching and, you know, for output, it becomes a lot more efficient.
[03:20:04 | 12:00:40 PM] And so making the tasks cheaper, encouraging the additional use that way, resource saving for tasks.
[03:20:09 | 12:00:44 PM] For inference clouds, that's going to be more applications serving more tokens, bigger market share.
[03:20:15 | 12:00:51 PM] And for app layer individuals, that means you guys can serve to a lot more kind of customers.
[03:20:19 | 12:00:54 PM] So anyone who's building, utilizing the token infrastructure.
[03:20:25 | 12:01:00 PM] And so what really goes into, you know, the macro structure?
[03:20:28 | 12:01:04 PM] Now, like, this is very, you know, bare bones here, but you've got your chips, which we've been talking about.
[03:20:34 | 12:01:09 PM] You have power, you have buildings, grid connections, and then, of course, you need a lot of capital to get these buildouts going, and that's kind of been the whole talk here.
[03:20:43 | 12:01:18 PM] And so chips, power, buildings, money, they all have to come together before, you know, you can even get to an hour of, like, actual usable GPU per hour compute.
[03:20:52 | 12:01:27 PM] And so the IEA April update projects that the global data center electricity is going to rise from 485 terawatt hours in '25 to 915 in '30.
[03:21:02 | 12:01:37 PM] And so a lot of the talk right now is around buildouts, about getting the power grid set up.
[03:21:08 | 12:01:43 PM] Will we have enough power grid here?
[03:21:09 | 12:01:45 PM] Is there other energy sources that we can tap into?
[03:21:13 | 12:01:48 PM] Where are we, you know, able to get the land to actually be able to do this?
[03:21:16 | 12:01:52 PM] And so colocation sites and data center operators and people who are doing the financing the buildouts, or the lenders themselves, are all kind of looking into this.
[03:21:23 | 12:01:58 PM] And that type of everything that's upstream, essentially, of the compute is going to then flow down into the compute costs and also usage.
[03:21:33 | 12:02:09 PM] And so what does this, like, actual macro map look like underneath a quote?
[03:21:37 | 12:02:12 PM] Chip and system vendors supply the GPU servers and networking.
[03:21:40 | 12:02:16 PM] Sites and operators supply the power, space, assembly, and management right here.
[03:21:46 | 12:02:21 PM] GPUs, memory, servers, networking.
[03:21:48 | 12:02:24 PM] Capacity providers, these are hyperscalers, neoclouds, and any other operator that's, like, operating similar to how a neocloud would operate, reselling bare metal capacity.
[03:21:57 | 12:02:32 PM] And then the users.
[03:21:58 | 12:02:33 PM] So who's the actual end user?
[03:21:59 | 12:02:34 PM] The startups, the inference clouds, labs, neolabs, and also anyone on the app layer and enterprises for anyone doing OpenAI stuff as well.
[03:22:09 | 12:02:44 PM] And these boxes, like I've kind of boxed them out here, but, you know, there's people can be all of the above.
[03:22:17 | 12:02:53 PM] A chip and system vendor, like someone could do a full end-to-end build out and also be the end user of everything.
[03:22:23 | 12:02:58 PM] And so there's a little bit of variation that occurs here.
[03:22:34 | 12:03:10 PM] And so, as I was kind of mentioning about the inference clouds before, they might rent a cluster and they'll serve tokens off of it and they'll use that revenue to pay off the cluster.
[03:22:45 | 12:03:21 PM] And so that might be a use case for the actual inference cloud themselves.
[03:22:49 | 12:03:24 PM] However, for hyperscalers, frontier labs, and larger neoclouds, they can make substantial commitments because they have the ability to get into the large equity, they have the ability to take on more debt, and they have the ability to do long horizon kind of deals, so 10-year deal, OpenAI contracted out, et cetera, so of that nature.
[03:23:08 | 12:03:43 PM] However, anyone in the middle market isn't actually able to do this.
[03:23:11 | 12:03:46 PM] Who's underwriting a Series B startup with enough capacity to get in a 200 million-plus contract over three years for compute?
[03:23:19 | 12:03:55 PM] How many equity rounds will they have to raise, right?
[03:23:22 | 12:03:57 PM] Will they have to use their entire equity round to fund just the actual cluster and then they don't have any remaining capital left to use for actual costs?
[03:23:31 | 12:04:07 PM] And so we're looking into a little bit of the financing chain here and how that plays in.
[03:23:35 | 12:04:11 PM] So lenders are financing the build-out against contracted revenue even in many cases for inference clouds.
[03:23:40 | 12:04:16 PM] And so they want to finance the build-out.
[03:23:42 | 12:04:18 PM] They want confidence that their loan will get repaid.
[03:23:44 | 12:04:20 PM] I mean, like, how are you going to underwrite a startup, like a private company that doesn't have, like, much else going for them right now?
[03:23:49 | 12:04:25 PM] Like, what are the, you know, they're not public traded.
[03:23:51 | 12:04:26 PM] There's not that much cash flows, balance sheet income statement.
[03:23:53 | 12:04:29 PM] They might even be pre-profit, pre-revenue, et cetera.
[03:23:56 | 12:04:32 PM] And so what they're looking at is that can the person get contracted revenue over a certain scale?
[03:24:02 | 12:04:37 PM] And so CoreWeave's public filings give large-scale example of infrastructure financing supported by take-or-pay customer contracts.
[03:24:08 | 12:04:43 PM] And so this diagram kind of shows the smaller illustrative.
[03:24:12 | 12:04:47 PM] Example here, and the mismatch is that hardware financing, they want very long terms, but customers are only able to afford or don't really want to, like, get into a long-term financing over 36 months.
[03:24:22 | 12:04:58 PM] They have to put up on average 15 to 25 percent is what CoreWeave has quoted that they've seen their median prepayment to be, 15 to 25 percent upfront on a 100 million PCV cluster.
[03:24:34 | 12:05:10 PM] That's 15 to 25 million dollars that a startup has to put upfront.
[03:24:38 | 12:05:14 PM] That might be their entire round.
[03:24:42 | 12:05:18 PM] And so this is kind of a look at what I'm, you know, referencing here.
[03:24:45 | 12:05:21 PM] It's like you're raising 40 million, you need a 100 million contract over three years, you put down 30 percent prepayment.
[03:24:50 | 12:05:26 PM] This is an illustrative example.
[03:24:52 | 12:05:27 PM] You've got 10 million left to run the business.
[03:24:55 | 12:05:30 PM] And so you might have this kind of step function, as you can see here.
[03:24:58 | 12:05:33 PM] So that's your contracted capacity and what you can actually, and the demand is, like, you know, below that.
[03:25:04 | 12:05:39 PM] And so now every time that you have to get into a new cluster, it's like tied to your equity round or whatever else it may be, but you might have to cap out and turn away customers.
[03:25:11 | 12:05:47 PM] So what are your options?
[03:25:12 | 12:05:48 PM] Do you either turn away customers until you can get into your next, you know, equity round so you can put down another 30 percent prepayment so you can get next little bit of capacity going, or do you use on-demand to close the area under that gap and bridge the shortfall?
[03:25:27 | 12:06:03 PM] That's like an option now.
[03:25:28 | 12:06:04 PM] Now you have to look into the economics.
[03:25:30 | 12:06:05 PM] What does that look like?
[03:25:31 | 12:06:06 PM] What's the difference between, you know, maybe instead what they do is they go to a lender to finance the prepayment component.
[03:25:36 | 12:06:12 PM] But if the yield on the prepayment component that they're getting financed is less than them just buying it out on-demand at that time if they're able to get into that amount of capacity, then does the economics make sense there?
[03:25:48 | 12:06:24 PM] And so here's some of the operating models that we've seen.
[03:25:55 | 12:06:31 PM] It's like you can build and operate the full stack.
[03:25:58 | 12:06:34 PM] Hardware site, your team is going to arrange power, permit, the assembly, the management.
[03:26:04 | 12:06:40 PM] You can also own servers in a colocation facility with more or less the assembly and operation handled by a partner.
[03:26:10 | 12:06:45 PM] On the other end, an off-take contract buys defined capacity, and the provider is going to own and operate the asset, and they might not give you complete root access to the bare metal, or there might be kind of like levels to how much access you get depending on if it's tenant, multi-tenant, and et cetera type of configurations that can also affect the pricing.
[03:26:28 | 12:07:04 PM] And so some businesses are going to value the physical access.
[03:26:31 | 12:07:07 PM] Some businesses are going to value, you know, confidential compute.
[03:26:36 | 12:07:11 PM] You know, they might value certain topology changes or the ability to reconfigure the system.
[03:26:40 | 12:07:15 PM] And so if that is something for your business, then they might actually want to have more and more control and build and operate the stack.
[03:26:45 | 12:07:21 PM] And the economics for them might make sense given the opportunity cost they would have to give up if they were to just take rental off-take contracts.
[03:26:52 | 12:07:28 PM] So they might be willing to pay more there.
[03:27:01 | 12:07:36 PM] And so here's how, like, ownership and rental—this is a very, like, crude graph—how ownership and rental can compare as utilization rises.
[03:27:09 | 12:07:44 PM] And so what we're looking at is that usually, you know, these off-take contracts are getting to the cost of actually almost building out and financing your own cluster.
[03:27:19 | 12:07:54 PM] And it's not because, I mean, if you're spending 100 million over a three-year period, then maybe if the economics make sense, it would have made more sense to simply buy out the compute operator yourself outside of the time cost and then obviously the operational cost that might exist.
[03:27:32 | 12:08:07 PM] So there's an equilibrium that exists that has to be followed where, you know, the ownership costs outweigh the, you know, rental costs, and the rental costs— Should sit below the ownership cost.
[03:27:47 | 12:08:23 PM] But if you're utilizing that at such a rate and, you know, in such variable kind of increments, it might be best to just own the stack outright.
[03:27:59 | 12:08:35 PM] And so we're seeing this new dynamic that compute procurement affects how much runway a growing company actually has.
[03:28:06 | 12:08:42 PM] And so this also gives investors an interest in compute procurement.
[03:28:10 | 12:08:46 PM] So we're kind of seeing this.
[03:28:12 | 12:08:47 PM] Access and payment terms affect how much runway their portcos are going to have from a VC perspective.
[03:28:18 | 12:08:53 PM] So helping a company buy a suitable capacity can improve the underlying investment.
[03:28:21 | 12:08:56 PM] And they're very connected, right?
[03:28:23 | 12:08:58 PM] So they're able to procure and they're able to actually find compute capacity for their portcos and fund that.
[03:28:29 | 12:09:04 PM] And so that also brings another interesting aspect into the microstructure, is that who helps place the capacity and how does this offer get compared and what risk these contracts can transfer.
[03:28:43 | 12:09:19 PM] So we have a lot of different players around this GPU hour that are helping kind of shape this market here.
[03:28:49 | 12:09:24 PM] You've got your price discovery individuals, so people with indexes, data, the benchmarks that we're all looking at right now and referencing, which would be used to, you know, in the future launch the futures based on the benchmarks talked about in the associated contracts, per spec, per pending approval.
[03:29:10 | 12:09:46 PM] And then there's the physical matching venues, auctions, aggregators.
[03:29:13 | 12:09:48 PM] So anyone who can match capacity.
[03:29:16 | 12:09:51 PM] We're looking at essentially decentralized marketplaces for on-demand compute.
[03:29:20 | 12:09:55 PM] You're looking at liquid pools of compute that offer, like, liquid pool services and part it out themselves and have their own standardized contract.
[03:29:28 | 12:10:03 PM] You're looking at bare metal resellers.
[03:29:29 | 12:10:05 PM] You're looking at neoclouds themselves doing larger capacity sales.
[03:29:33 | 12:10:09 PM] And then you're looking at individual brokers and individual operators here as well on the bare metal reselling.
[03:29:37 | 12:10:13 PM] You have desks and brokers.
[03:29:39 | 12:10:14 PM] They're looking at the bilateral quotes and execution.
[03:29:42 | 12:10:17 PM] They might know a lot of people.
[03:29:43 | 12:10:19 PM] They might be able to move fast.
[03:29:44 | 12:10:20 PM] They might be able to see quotes at very similar specs in one place and know that there's a buyer that is extremely inelastic to price right now, needs the compute immediately, and they can get the RFS in time so they can charge a decent spread on it.
[03:29:57 | 12:10:33 PM] And then what they do is they're going to have the source negotiating, and then they're going to be carrying and placing the risk.
[03:30:02 | 12:10:38 PM] They're going to have to operate that cluster for the person, but it has to be worth that spread.
[03:30:07 | 12:10:42 PM] And, you know, you have looks in financial markets, the exchanges that are coming that are based on the GPU hour, the futures and derivatives.
[03:30:13 | 12:10:48 PM] People are going to be using it to take a look at how to maybe hedge out and look into more financial structures, so hedge out risk, so hedge out, you know, balance sheet risk, maybe get into more interesting agreements.
[03:30:25 | 12:11:00 PM] We're seeing kind of agreements such as prepayment, payment facilities are coming online.
[03:30:30 | 12:11:06 PM] We're seeing people utilize futures and are interested in utilizing futures and other kind of options to be able to—there's demand for this—to be able to hedge out the risk that they currently have on the books.
[03:30:42 | 12:11:18 PM] We have buy-side individuals looking for flex contracts, flexible contracts, like, hey, is there ability that if I lock myself into a three- to five-year contract that I'll be able to, you know, at least upgrade when a new chip set comes out, or maybe I'll be able to roll it over, or maybe let me sell it back to you.
[03:30:57 | 12:11:33 PM] And then there's, like, credit and financing, so equipment lenders, leasers, specialist credit providers.
[03:31:03 | 12:11:39 PM] And so the way we're seeing it right now is that every deal is bespoke.
[03:31:07 | 12:11:43 PM] There's different spec sheets, there's formats.
[03:31:09 | 12:11:44 PM] The bill of materials may not match the actual, like, delivery, or there might be subject to change if a part is missing or a part is out of stock.
[03:31:17 | 12:11:52 PM] And, you know, there's, like, very long lead times that some of these OEM and ODM kind of providers have.
[03:31:23 | 12:11:58 PM] And the same term can mean different things when you're negotiating very quickly.
[03:31:26 | 12:12:02 PM] If someone's talking about memory, are we talking about, you know, VRAM?
[03:31:30 | 12:12:05 PM] Are we talking about the CPU memory?
[03:31:32 | 12:12:08 PM] Are we talking about additional storage here?
[03:31:34 | 12:12:09 PM] Like, what did you exactly mean there?
[03:31:35 | 12:12:11 PM] It affects quite a bit what type of loads can be run and, you know, the actual end user's needs, and also with pricing and delivery dates.
[03:31:45 | 12:12:20 PM] So there's a lot of back and forth before anyone can really compare, and this is where the concept of, like, non-fungibility kind of comes into place and how to partition that out.
[03:31:51 | 12:12:27 PM] What parts can be fungible?
[03:31:53 | 12:12:28 PM] What parts hold the most of the weight, such as the SKU, et cetera, and what parts are still, like, traded as if it was a product, e-commerce, et cetera, where, you know, it's only for that particular cluster that this price applies.
[03:32:06 | 12:12:41 PM] And so prices can update daily or faster.
[03:32:08 | 12:12:44 PM] Quotes still a good starting point.
[03:32:09 | 12:12:45 PM] Bids can get chopped.
[03:32:10 | 12:12:46 PM] Creditworthiness changes what's on offer.
[03:32:12 | 12:12:48 PM] There's all these kind of latent factors, hidden factors as well, why we're calling it a dark market.
[03:32:17 | 12:12:53 PM] These are some public H100 references Snap charted today.
[03:32:20 | 12:12:55 PM] I updated them, so take a look at those.
[03:32:23 | 12:12:59 PM] Those are the references for if you wanted to go on their websites to see.
[03:32:27 | 12:13:02 PM] This is just an example here of, like, what a public on-demand or spot pricing looks like for an H100 today.
[03:32:35 | 12:13:11 PM] You can see kind of various prices here.
[03:32:38 | 12:13:13 PM] And so people might use this, or they might use their own kind of internal, what they've seen, to actually, like, assume or use it to charge what they want to charge on their actual cluster specification, taking into account every other kind of factor that goes into it.
[03:32:54 | 12:13:29 PM] And so why are these new structures kind of needed, and what are these microstructures interesting?
[03:32:58 | 12:13:34 PM] It's mainly to solve for these mismatches, right?
[03:33:00 | 12:13:36 PM] Bridging capacity, more flexible commitments, resale rights, and protection against price moves.
[03:33:05 | 12:13:41 PM] You know, you're selling a fixed price service from an inference cloud point of view.
[03:33:09 | 12:13:45 PM] You'd be selling a fixed price service while the GPU bill floats, and that creates price exposure.
[03:33:14 | 12:13:50 PM] And so locking capacity for years can solve a part of that, but it'll create idle hour exposure elsewhere as well, unless you're always using it.
[03:33:22 | 12:13:57 PM] Reselling spare capacity only helps if someone actually can buy the hours.
[03:33:25 | 12:14:01 PM] A financial hedge can address a reference price, but it can't deliver the cluster right now in terms of cash settlement or guarantee a utilization.
[03:33:33 | 12:14:08 PM] So the useful structure has to start with the particular risk that the business has and needs to manage.
[03:33:41 | 12:14:17 PM] And I'll go pretty fast on this policy section because we're running out of time.
[03:33:47 | 12:14:22 PM] Everything that Afan has said sits inside of a structure that is Regulated and is affected by policy in various ways.
[03:33:59 | 12:14:35 PM] One way is export controls, one of the examples.
[03:34:03 | 12:14:38 PM] In January, the U.
[03:34:04 | 12:14:40 PM] S.
[03:34:04 | 12:14:40 PM] Commerce Department moved qualifying H-200 class license reviews for China and Macau to case-by-case review with conditions.
[03:34:13 | 12:14:48 PM] Furthermore, open-weight models connect policy back to the U.
[03:34:17 | 12:14:52 PM] S.
[03:34:17 | 12:14:53 PM] economics we started with.
[03:34:19 | 12:14:55 PM] The U.
[03:34:20 | 12:14:55 PM] S.
[03:34:20 | 12:14:56 PM] AI Action Plan explicitly encourages open-source and open-weight AI and recommends improving the financial market for compute so that startups and academics can access large-scale computing power.
[03:34:34 | 12:15:10 PM] So I'm going to tie this out right here.
[03:34:37 | 12:15:12 PM] But where does this opportunity lie?
[03:34:38 | 12:15:13 PM] We have this growing middle market.
[03:34:40 | 12:15:15 PM] We need balance sheets that can bridge buyer and supplier needs.
[03:34:42 | 12:15:18 PM] There needs to be some level of standardization, a standard capacity contract, common specs, common terms, and definitions.
[03:34:49 | 12:15:25 PM] And so growing companies with needs and commitment do not fit the contracts that hyperscalers and frontier labs can sign.
[03:34:54 | 12:15:30 PM] Those companies have real workloads.
[03:34:56 | 12:15:32 PM] We want them to grow.
[03:34:57 | 12:15:33 PM] They still face this financing problem, a timing problem, a specification problem.
[03:35:01 | 12:15:36 PM] A supplier might want the long-term commitment for the buildout, while the buyer wants to expand in smaller blocks as demand becomes clearer as it's so volatile, front of curve.
[03:35:08 | 12:15:43 PM] The buyer needs a way to avoid paying for capacity it can't use yet, and so participants with strong balance sheets that are uncorrelated with the market and the ability to assess those risks with a strong credit profile can help bridge the gap between what buyers need and what suppliers offer.
[03:35:22 | 12:15:57 PM] That requires more than quoting the actual GPU hour.
[03:35:24 | 12:16:00 PM] It means understanding the delivery, workload, all of that.
[03:35:27 | 12:16:02 PM] And so there's very few kind of players in the market, and, you know, a very well-suited player can be a firm that's uncorrelated with the market, with strong balance sheets, strong credit rating, and incredible amounts of hardware talent that sits inside for high-performance computing.
[03:35:41 | 12:16:17 PM] And so just making a CTA here, let's build this together.
[03:35:44 | 12:16:20 PM] Thank you guys so much for attending our talk.
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
[03:58:48 | 12:39:23 PM] Hello everyone.
[03:58:49 | 12:39:25 PM] I would like to walk you through that how we can transition an AI agents from an experiment to the real enterprise environment.
[03:58:57 | 12:39:32 PM] So before I begin, a quick introduction about me.
[03:58:59 | 12:39:35 PM] My name is Sharish Gagar.
[03:59:01 | 12:39:36 PM] I'm a senior staff software engineer at Intuit Credit Karma, where I build and own the AI analytics infrastructure and services.
[03:59:09 | 12:39:45 PM] And beside that, I'm advisor, author, researcher, and also a program committee member for various organizations where I mentor the young researchers as well.
[03:59:27 | 12:40:03 PM] All right.
[03:59:29 | 12:40:05 PM] So let's walk through the agenda here.
[03:59:33 | 12:40:09 PM] So first, we would like to talk about what are the challenges we have when we build an AI agents and deploy into the production systems.
[03:59:41 | 12:40:17 PM] And how we can build a different framework to address that different challenges here.
[03:59:48 | 12:40:23 PM] Then how the architecture looks like for it.
[03:59:51 | 12:40:26 PM] Then how you can build your own MCP servers and MCP gateway, and then some monitoring on top of that.
[03:59:59 | 12:40:35 PM] On top of that gateway as well.
[04:00:01 | 12:40:37 PM] Then further, we're going to talk about what are the different type of agent framework you can have, and then some additional framework around managing the memories, tracking in eval, how you can block the PII data going before the LLMs, and then context optimizer to save your token, right?
[04:00:19 | 12:40:55 PM] So without delay, let me walk you through the challenge.
[04:00:24 | 12:41:00 PM] Of course, like there are many agents generally get fail in productions because their foundation controls are missing.
[04:00:31 | 12:41:06 PM] And the key reason behind is that, you know, like most of the people are missing the gateway to make sure that the agent can, you know, communicate to the gateway to get authenticated first with the right auth providers so that they can redirect to the right MCP servers, right?
[04:00:49 | 12:41:24 PM] Second, that MCP servers are missing the right tool to execute your query.
[04:00:54 | 12:41:29 PM] Third, do we have like enough tracking and evaluation system to make sure that every query when you are sending to the agents, whether they've been tracked or not, and are you evaluating the quality response or not, right?
[04:01:05 | 12:41:41 PM] Do we have any memory management system or not in terms of, let's say you are doing the interaction with agent for long or for many days, is it able to recall that what you have been asked in the past, right?
[04:01:17 | 12:41:53 PM] And then there are other framework, of course, like do you have a context optimizers to save the token, or do you have enough production in place to make sure that your any secrets should not go into LLM or tracking or tracing or any memory DB or so, right?
[04:01:31 | 12:42:07 PM] So a lot of open questions.
[04:01:34 | 12:42:09 PM] So in order to resolve this, we are not going to, you know, like build a magical agent here in this demo.
[04:01:41 | 12:42:16 PM] We're going to talk about like different framework that you can build to address this.
[04:01:46 | 12:42:22 PM] So first is the agent framework.
[04:01:49 | 12:42:24 PM] This is where, like, we use the, like, we choose to use the LangGraph framework, which is provided by LangChain community.
[04:01:55 | 12:42:31 PM] This has helped us in building the task-specific node based on your questions, and which is easy to plug in any, like, marketplace plugins or skills and prompts to make sure that agents respond efficiently based on your query.
[04:02:12 | 12:42:47 PM] Further, the second part is we are also building the MCP gateway to make sure that whenever agent make the call or any service account from that agent make the call, make sure that they are securely get authenticated to that MCP gateway and then get redirected to the right MCP servers.
[04:02:29 | 12:43:05 PM] Third is the customized MCP, which means that you are building your own MCP servers with the right tool in place to execute your query.
[04:02:37 | 12:43:12 PM] And then finally some audit on top of what actually operation you are performing, right?
[04:02:42 | 12:43:17 PM] And then we talk about some additional framework around, you know, like how you can block the PI secrets, how you're going to store the tracking eval into the cloud, and how you're going to persist the memories, especially any threats and checkpoints on every context, and then also how you can optimize overall your context to make sure that you don't burn too many tokens when you run your query.
[04:03:08 | 12:43:43 PM] All right.
[04:03:09 | 12:43:44 PM] So we'll talk about now the agent infrastructure.
[04:03:13 | 12:43:48 PM] So firstly, we'll go through the local development, the way...
[04:03:17 | 12:43:53 PM] The approach should be is that, you know, like whenever you build an agent, right, first you have to register your agent into some system.
[04:03:25 | 12:44:01 PM] You usually tell that, hey, look, this is my use case, and these are the use case going to use for this particular vertical or system, and you feed all those information and generate an ID for your agent, right?
[04:03:38 | 12:44:13 PM] Once you have that, then you can have a dev portal, internal portal, where you can ingest all the details saying that, hey, look, this is my agent use case, this is my agent ID, this is the framework I'm going to use, either LangGraph, LangChain, or so.
[04:03:51 | 12:44:26 PM] These are my language I'm going to use, either Python or TypeScript.
[04:03:55 | 12:44:30 PM] And then you can choose, you know, like your skills or prompts, and then you submit your information, right, to this.
[04:04:02 | 12:44:38 PM] Once you submit this, the dev portal is going to create a repository which is going to contain not just the agent framework, like your LangGraph agent framework, but is also going to contain your memory framework, your tracking eval framework, right, and then your context optimizer framework and your PII blocking framework as well.
[04:04:23 | 12:44:58 PM] So the reason for that is because not necessarily all your developers are taking care of all this framework, right?
[04:04:31 | 12:45:06 PM] They just sometimes, you know, create the framework, what generally like AI assistant tool largely support, right, or they stick to one or two framework, right?
[04:04:40 | 12:45:15 PM] So.
[04:04:41 | 12:45:17 PM] We just want to make sure that when you roll out such framework, make sure they are consistent across the company, and they can take care of, and they can be centralized in one place so you can visualize the results as well, right?
[04:04:54 | 12:45:30 PM] So once you have that repository, so developers basically, you know, clone that repository.
[04:04:59 | 12:45:35 PM] They can build their agent as a Docker image into containers and test their agent input and output through the query.
[04:05:05 | 12:45:41 PM] And they can also test this on their local memory, maybe Cloud Spanner emulator here.
[04:05:10 | 12:45:46 PM] And you can also store this tracking eval in some of your DB, maybe SQLite or maybe BigQuery, to see, to make sure that agents are fully working on your local, right?
[04:05:19 | 12:45:55 PM] So once your agents are running in local, then you're ready to go ahead and generate a PR, and then you can, once you get your two PR approval, then it's go to the CI/CD pipeline, right?
[04:05:30 | 12:46:05 PM] So the PR is basically going to, firstly is going to register your agent into some centralized agent registry system, which provide a language URL to it to make sure that you see all the traces.
[04:05:41 | 12:46:16 PM] And then the CI/CD pipeline is basically, you know, whatever the local Docker container you built here is going to build that container into production system.
[04:05:50 | 12:46:25 PM] It will scan that image, make sure that there's no vulnerability.
[04:05:53 | 12:46:29 PM] If everything looks great, security approved, you can move that image back into the registry, right?
[04:05:59 | 12:46:34 PM] Further, you have your own deployment platform or orchestrator platform, which is going to deploy that agent into the Kubernetes cluster in a given namespace, right?
[04:06:08 | 12:46:43 PM] So the good part here is that this dev portal is not just creating the repository, right?
[04:06:14 | 12:46:50 PM] It also do create a bunch of other production resources, for example, the workload identity, right?
[04:06:22 | 12:46:57 PM] And then memory DB or tracking and eval tables, and then agent secret management, right?
[04:06:28 | 12:47:04 PM] So based on whatever the name we provide, it...
[04:06:33 | 12:47:08 PM] Not just, again, like not just repository, it create all these different resources as well.
[04:06:37 | 12:47:13 PM] So what happens is when this internal orchestrator, when deploy the agents, the agent already know that, hey, what workload identity I supposed to work with, right?
[04:06:46 | 12:47:22 PM] That binding should already happen.
[04:06:48 | 12:47:23 PM] So once this K8s to GSA binding happens, the agent will start communicating to all these resources.
[04:06:54 | 12:47:29 PM] Once everything in place, agent is further going to communicate to the rest of your endpoint services, like for example, AI Gateway or MCP servers or Langfuse for tracing or some other API endpoints, right?
[04:07:06 | 12:47:42 PM] So now, firstly, we talk about the MCP servers as well.
[04:07:12 | 12:47:47 PM] So we talk about architecture.
[04:07:14 | 12:47:49 PM] Now we're going to the different component.
[04:07:16 | 12:47:51 PM] So MCP server is something that you can definitely use, something which is outside available.
[04:07:20 | 12:47:55 PM] But if you are working on Airgap environment, it's highly recommended that you build your own MCP servers.
[04:07:26 | 12:48:01 PM] So, yeah, and you can use the—I will not go with the definition, everyone knows about it.
[04:07:32 | 12:48:08 PM] So the way the framework has been built here is that you can leverage the FastMCP server package, or wrapper, to build that MCP servers, and you can create a different set of tools inside that FastMCP wrapper to construct your, you know, the overall servers.
[04:07:50 | 12:48:25 PM] And then you make sure that, you know, like every tool when you define in MCP server, they have to be fully reviewed by your own internal security team to make sure that only authorized tool can be go in production.
[04:08:05 | 12:48:40 PM] And that's how you can, you know, enforce some filters, limits, and block the fills, which is really not required to go to LLM and get you the information which you are not supposed to get, right?
[04:08:18 | 12:48:53 PM] And third part is like, of course, you need to make sure that you build your MCP server in a way that whenever the traffic is coming from your MCP client to MCP gateway to MCP servers, either it's coming from user or service account, they has to be authenticated to the MCP gateway first, and so that they can access your MCP tool to get the right information.
[04:08:39 | 12:49:15 PM] All right.
[04:08:40 | 12:49:16 PM] Now the gateway part.
[04:08:42 | 12:49:17 PM] So how the gateway works.
[04:08:44 | 12:49:20 PM] So this is, again, you can build it your own internal MCP gateway if you are, again, working on your air-gapped environment.
[04:08:50 | 12:49:26 PM] So the way it works is you are working on Claude Assist, like local, you know, code assistance tool or maybe your agent, right?
[04:08:57 | 12:49:33 PM] So the moment you submit your first query to your agent, it will send that one-time authentication request to the MCP gateway, right?
[04:09:05 | 12:49:41 PM] MCP gateway recognized and take your request.
[04:09:08 | 12:49:43 PM] First, it will save your session state into the Redis, right?
[04:09:12 | 12:49:47 PM] And then it will, you know, return back the JWT access token back to your client, right?
[04:09:18 | 12:49:54 PM] Once client will receive that JWT token, it will know that what MCP server needs to call, right?
[04:09:25 | 12:50:00 PM] So it will submit that tool slash call request on a given namespace slash MCP, meaning let's say Artifactory or GitHub slash MCP with the auth bearer JWT token into that.
[04:09:37 | 12:50:12 PM] So once MCP gateway receives that, it will understand that what namespace, meaning MCP server needs to look up for, and then it will unwrap that JWT token, and then it will attach that user token in that request and send it to the respective MCP servers.
[04:09:53 | 12:50:29 PM] Now once MCP server receives it, it will make that respective API calls to that endpoint of that, you know, to the...
[04:10:01 | 12:50:36 PM] to the service, and then it will exchange that ID token and return the response based on what was scope that user is authorized to see, right?
[04:10:10 | 12:50:46 PM] So once the user receives the token, you know, MCP server basically, you know, unwrap that all the data, make the payload which is compatible for MCP gateway to receive, and then finally the final payload will send back to the client to see the data points.
[04:10:26 | 12:51:01 PM] So what it shows is that, you know, like we build this MCP gateway to make sure that we have a centralized authentication and routing hub that securely connect any coding assistant tool or agents to the endpoint via this MCP gateway and MCP server.
[04:10:42 | 12:51:17 PM] There should not be direct access provided on any endpoints.
[04:10:46 | 12:51:22 PM] They has to go through the MCP gateway through proper authentications before they reaching to the MCP server and the endpoints, right?
[04:10:56 | 12:51:31 PM] So now the part is the gateway monitoring, right?
[04:10:59 | 12:51:35 PM] We talk about, again, we talk about architecture, we talk about MCP server, MCP gateway.
[04:11:04 | 12:51:40 PM] Now it's a monitoring.
[04:11:05 | 12:51:41 PM] Again, the AI agent cannot be trusted without continuous monitoring, evaluation, and feedback, right?
[04:11:10 | 12:51:45 PM] This is why we are building the MCP gateway monitoring.
[04:11:13 | 12:51:49 PM] So the way the monitoring work is usually like the moment you submit any calls to your agent, it will send all the operation log into the log store.
[04:11:23 | 12:51:58 PM] You can use ELK, Loki, or CloudWatch or so, right?
[04:11:26 | 12:52:01 PM] And generally this contains the information like, show me like all last 401s in my last 10 minutes call, right?
[04:11:33 | 12:52:08 PM] And what did, or do when the token refresh failed, right?
[04:11:36 | 12:52:12 PM] So those kind of requests can go to the log store.
[04:11:40 | 12:52:15 PM] Now there are some, you know, traces and metrics data, like real-time data, they goes to the OpenTelemetry as well.
[04:11:47 | 12:52:22 PM] OpenTelemetry, again, is open source solutions which going to collect all your traces and metrics and is going to process the data and redirect to the backend system, right?
[04:11:57 | 12:52:33 PM] And in this case, the traces will go to Tempo.
[04:12:00 | 12:52:35 PM] This again, open source solutions which going to store all your traces in terms of like traces in the sense like, you know, like information around like which tool was slow on this request, whether this call is coming from agent or IDE, what was the exact error on this failed call or so, right?
[04:12:17 | 12:52:53 PM] So these kind of data are going to store into the Tempo.
[04:12:22 | 12:52:57 PM] My bad.
[04:12:22 | 12:52:57 PM] Okay.
[04:12:22 | 12:52:58 PM] And then the metrics is about, the Prometheus is all about the information about like...
[04:12:30 | 12:53:05 PM] What are P95 latencies for a given tool, right?
[04:12:35 | 12:53:11 PM] Whether my auth rejection is spiking on a particular time or not, right?
[04:12:40 | 12:53:15 PM] So those kind of metrics is going to store in Prometheus.
[04:12:42 | 12:53:18 PM] So once you get all this data point, like traces and metrics, this entire aggregate data back actually save into the Grafana for your visualizations, right?
[04:12:54 | 12:53:30 PM] All right.
[04:12:55 | 12:53:30 PM] So the MCP server gateway and monitoring is covered.
[04:12:59 | 12:53:34 PM] Now we're going to talk about the framework.
[04:13:02 | 12:53:37 PM] So the agent framework, right?
[04:13:04 | 12:53:39 PM] So we use LangGraph for most of the cases, and it's basically LangGraph, again, it's provided by LangChain community.
[04:13:13 | 12:53:49 PM] It's provide a graph-based architecture that support loops, branching, state management for complex multi-agent AI workflows, right?
[04:13:21 | 12:53:57 PM] And the way it works is like the moment you submit your first query, we do interpret, you know, like your question first, like what type of questions it is and what response it's looking for.
[04:13:35 | 12:54:11 PM] And based on that, it's create a plan, right?
[04:13:39 | 12:54:15 PM] Then it will send for classify area where it will determine that, hey, whether it is just like read operations or whether it is just like a, you know, modification level changes coming up, or whether you really want to delete something, right, or some sensitive operations.
[04:13:55 | 12:54:31 PM] Based on that, it adjusts the overall structure and then plan accordingly.
[04:14:00 | 12:54:36 PM] The next step is plan is actually itself is a subgraph where you do the major of your operations, meaning that in the plan, like once you know what operation you're performing, it goes to the, like let's say in the fetch evidence section where it actually call that whatever the question you ask here, after all interpret and classify, it actually go ahead and make the call to the MCP gateway, make sure they get authenticated, and then it make the call to the MCP server using the right tool and get that data and then generate that evidence, right?
[04:14:35 | 12:55:11 PM] Once you validate all your finding, then it will check the policies.
[04:14:39 | 12:55:14 PM] It will check whether it is a read only, then go ahead and execute, and I will save all the record points into our audit logs.
[04:14:46 | 12:55:22 PM] But if it is a write and sensitive operations, definitely it will go through the HITL process where you wait for an approval.
[04:14:53 | 12:55:28 PM] If it is approved, you go ahead and execute.
[04:14:55 | 12:55:31 PM] If it is get rejected.
[04:14:57 | 12:55:32 PM] Rejected in either case is going to save into the audit log, right?
[04:15:01 | 12:55:37 PM] So if we combine all this together, like MCP gateway, MCP server, and the agent, right, this is how things look like.
[04:15:11 | 12:55:47 PM] So ultimately, whatever the agent you are building, whatever the call you are submitting, it will go to the MCP gateway for authentications, and then it will redirect to the right MCP servers to execute, you know, your query on a given tool so that it makes the API call to that endpoint and get the response, right?
[04:15:31 | 12:56:06 PM] All right.
[04:15:32 | 12:56:07 PM] If we think from the infrastructure perspective, this is how it looks like.
[04:15:36 | 12:56:12 PM] So agent is communicating to the MCP gateway, goes to the MCP server, and to the endpoint, right?
[04:15:43 | 12:56:19 PM] So now, we talked a lot about MCP Gateway, MCP servers, the monitoring, and the agent framework.
[04:15:51 | 12:56:27 PM] Now we'll talk about three and four additional frameworks that we should have to take care of when building the end-to-end ecosystem, right?
[04:16:00 | 12:56:36 PM] One of them is agent memory management.
[04:16:05 | 12:56:40 PM] Again, it's, you know, it's basically a process where you can save and restore the state of your workflow over the time, right, ensuring that it provides you durability and seamless recovery across your every query run.
[04:16:18 | 12:56:54 PM] So the way it works is, like, whenever you submit any query to your agent, it actually generates a thread, right?
[04:16:27 | 12:57:03 PM] On that given thread, when you ask your first question, it will go to create a run ID for that.
[04:16:34 | 12:57:09 PM] So the moment you ask some deeper questions, it will go on a particular node in that LangGraph and execute that query.
[04:16:41 | 12:57:17 PM] And on that node, it's going to save that respective checkpoint here, right?
[04:16:46 | 12:57:22 PM] Now if you ask follow-up questions on the same thread, it's going to create another run ID.
[04:16:51 | 12:57:27 PM] And again, depending on your follow-up question, it goes to a specific node and saves the checkpoint over there, right?
[04:16:57 | 12:57:33 PM] And all this data for your local development, you can use the SQLite DB.
[04:17:02 | 12:57:38 PM] But in production, unless in GCP, you can use Cloud Spanner, and in respective databases, you can use in Azure and AWS as well, right?
[04:17:13 | 12:57:48 PM] So just walk you through the quick demo here on the memory.
[04:17:18 | 12:57:53 PM] So for example, I have, you know, like just built this agent locally and then, you know, trying to run this query on SQLite DB to see if there is any data or not.
[04:17:29 | 12:58:05 PM] So I'm just, you know, initially I don't have any data.
[04:17:32 | 12:58:08 PM] Now I submit my query, you will see that I receive the one record, which is saying that, hey, this is my thread ID, this is the question I have been asked, and exact time, you know, when this query was executed.
[04:17:42 | 12:58:18 PM] Now, if I run the next query to see that, hey, how many messages have been produced on a given thread, you can get this information by running the further queries, right?
[04:17:53 | 12:58:29 PM] Now, if I would like to run to see that, you know, like all the metadata-level information on my query, I can run my query again, and you can see the detailed description around, you know, like how many tool I get invoked, what is my thread ID, what is my run ID, you know, like, and all those informations.
[04:18:12 | 12:58:47 PM] Now, if I want to also see that, hey, what tool have been executed when I run this query, you can go ahead and see the exact tool name as well on that given MCP servers.
[04:18:22 | 12:58:57 PM] Now, further, I also want to see that how the progression was happened on my LangGraph framework.
[04:18:27 | 12:59:03 PM] That also you can see by running this type of query on your memory DB.
[04:18:33 | 12:59:08 PM] You can see that here, like different kind of, you know, nodes been called when actually, you know, that query has been run.
[04:18:41 | 12:59:16 PM] All right.
[04:18:41 | 12:59:17 PM] Now, the tracking and eval.
[04:18:44 | 12:59:19 PM] So just to make sure that there is no confusion here, like we talked about earlier the MCP gateway monitoring.
[04:18:51 | 12:59:27 PM] This is agent-level tracking.
[04:18:53 | 12:59:29 PM] So we do this because we really want to track that what query you have been submitting to the agent, and what the response is coming, what LLM model you have been used, what's the cost of your token, how many token you have been burned, and what's your, you know, evaluation criteria looks like, what is the quality of your response or not, right?
[04:19:14 | 12:59:50 PM] So you need to store that data from day one.
[04:19:18 | 12:59:53 PM] And imagine that if you have a thousand-plus agent, every agent will have their own, you know, agent tracking and eval project and the tables, right?
[04:19:30 | 1:00:05 PM] So if you combine, let's say if you have 100 agents, you will have 100 different projects, and each project has their own respective tracking and eval tables.
[04:19:38 | 1:00:13 PM] Now, tomorrow, six months down the line, if somebody asks you that how your agent has been performed, what was the response, what was the quality, how much token you have been burned, you can aggregate all this data and you can create executive dashboards around it to see what is the ROI in building so many agents, right?
[04:19:56 | 1:00:31 PM] So let me walk you through the tracking and eval demo here.
[04:20:01 | 1:00:37 PM] So here, like if I look at this one, so first, like, you know, like if you see that there are six tables are listed here.
[04:20:11 | 1:00:47 PM] One is a job tracking table, and which contains most of this, like, key information around what query, like what is your query, what's the response and everything.
[04:20:21 | 1:00:56 PM] And there are a bunch of other tables as well, like your quality related and your tool invocations, and then node level executions and all that.
[04:20:28 | 1:01:04 PM] So in this case, I'm going to submit my first query on my agent, and you will see that there will not be any data in the first place because it takes some time.
[04:20:40 | 1:01:16 PM] So I will refresh this again.
[04:20:42 | 1:01:18 PM] And this time I will see that when I refresh, I do see that for a given query, I get my request ID, my session ID, my agent name, you know, what question I've been asked, and what was the output of that question, whether it has completed or not, and then what is the time it took, what is the model I've been used, and then some of the metadata level information, right?
[04:21:08 | 1:01:43 PM] Further, if I look for the quality, again, there is an eight quality checks per run, right?
[04:21:14 | 1:01:50 PM] And you can see that this one row, each for, you know, like success, like latency cost, tool accuracy, safety, etc.
[04:21:22 | 1:01:58 PM] , like all this has been stored here, right?
[04:21:25 | 1:02:01 PM] Now the eval scores.
[04:21:27 | 1:02:02 PM] This is again, this is going to be a one row.
[04:21:31 | 1:02:07 PM] This is going to be a scoreboard for your given run, which is basically varies between zero to one, which scores, you know, like all the quality dimension in a single row, right?
[04:21:42 | 1:02:18 PM] Now the quality metrics.
[04:21:43 | 1:02:19 PM] So again, it's a deep dive on that particular one run.
[04:21:47 | 1:02:22 PM] Basically a nested field for the response, quality, safety, latency, cost, and the tool stat in one wide row, right?
[04:21:56 | 1:02:31 PM] Now the tool invocations.
[04:21:57 | 1:02:33 PM] So every tool call, which MCP tool ran, how long it took, and whether it succeeded or not, right?
[04:22:05 | 1:02:40 PM] And now the tool agent trajectory, which is talk about step-by-step story of the run, each LLM call and the graph state in order, like plan, summarize, etc.
[04:22:16 | 1:02:52 PM] All right.
[04:22:17 | 1:02:53 PM] So now, the next is the agent PII trimmer.
[04:22:22 | 1:02:57 PM] This is very, very important because many times it happens that when you're working in agents or this thing, sometimes there is a possibility that there are some secrets being ingested as a part of your query, right?
[04:22:34 | 1:03:10 PM] Let's say you are uploading some doc which has some sensitive information, and sometimes while typing you may have some API keys or so.
[04:22:44 | 1:03:19 PM] So we have a framework which defines that different sort of data types and their severity level.
[04:22:50 | 1:03:25 PM] If your severity is above 90% or so, we will block and redact that secrets immediately, so that make sure that that secret never goes to LLM models, right?
[04:23:03 | 1:03:39 PM] Neither it will go to your memory DB, or nor it will go to tracking and eval tables or tracing systems as well.
[04:23:10 | 1:03:46 PM] So the goal here is to just block this sensitive data as it is the moment it gets ingested, right, the moment you type.
[04:23:19 | 1:03:55 PM] All right.
[04:23:20 | 1:03:55 PM] The last framework is all about now is the context optimizer.
[04:23:24 | 1:04:00 PM] This is one of my favorite area where, like, you know, whenever you submit, it's very important, right?
[04:23:33 | 1:04:08 PM] Whenever you submit too many queries, sometimes you upload a lot of the data points and you upload a bunch of files, systems or so, right?
[04:23:41 | 1:04:17 PM] It's very important that time is, you know, like, you make sure that you save your token in every query.
[04:23:47 | 1:04:23 PM] So we built a context optimizer framework where you actually shape your query and then you prune it before it goes to LLM.
[04:23:55 | 1:04:31 PM] In the pruning system, we do select the payload based on the token limit.
[04:24:00 | 1:04:36 PM] Then we re-rank that, hey, which is the most relevant information that we should target for when you submit this huge giant, you know, context, and then we dedupe that, remove all the duplicates and create a very unique set of Very curated data, like, I mean the main data for the LLM, and then we finally compress this large payload before it goes to the LLM.
[04:24:24 | 1:05:00 PM] So let's see this demo here.
[04:24:27 | 1:05:02 PM] This will be quick.
[04:24:28 | 1:05:04 PM] So, for example, let's say I will submit my first query: Hey, find me all the artifacts in my JFrog Artifactory.
[04:24:33 | 1:05:09 PM] You see that first, when even I no submitted any query yet, there is no data here.
[04:24:40 | 1:05:15 PM] So the moment I submit this first query, and if I refresh my query here, and then you can see that the record has been added.
[04:24:51 | 1:05:26 PM] So you can see there is a 24,000 token has been used.
[04:24:55 | 1:05:30 PM] I will go back a little bit just to show the thing.
[04:24:59 | 1:05:34 PM] So you can see this 24,000 token has been used for given questions.
[04:25:02 | 1:05:38 PM] Now if I ask, now I enable the context optimizer behind the scene, and I'm rerun the exact same query again.
[04:25:10 | 1:05:46 PM] So this time you will see that, you know, for the same query, if I refresh this run, and you will see that this time it used just 2,400 token, right, for exact same query.
[04:25:23 | 1:05:59 PM] So which is almost like 90% saving.
[04:25:25 | 1:06:01 PM] I can rerun the same demo on the Slackbot as well, where I'm asking Slackbot, Hey, tell me all my Docker images across all the repositories in Artifactory.
[04:25:34 | 1:06:09 PM] When I run this query, there is no data.
[04:25:36 | 1:06:12 PM] Now I'm going to submit my query.
[04:25:39 | 1:06:15 PM] So once this query will run, and if I run my query again here, and you will see that record get created.
[04:25:47 | 1:06:22 PM] It's again used like 24,000 for this particular query.
[04:25:50 | 1:06:25 PM] Now what I will do is I will turn on my optimizer behind the scene and I rerun the same query in the Slackbot, and then if I run this query again, it will show like it exactly used 1,500 almost token, which is again like 90% saving.
[04:26:07 | 1:06:43 PM] In most of the cases, we get like 70 to 78% token saves.
[04:26:11 | 1:06:46 PM] So imagine that you have thousands of You know, like, if you have thousands of, like, agents which is running, like, you know, many queries per day, imagine how much token you can save with this framework.
[04:26:26 | 1:07:02 PM] All right, so now the key takeaway here is, you know, like, for us is, like, make sure that we build an enterprise framework, not just an agent, right, which makes sure that you have all the framework underneath.
[04:26:39 | 1:07:15 PM] Don't try to be in rush to building some agent quickly and deploy ship it.
[04:26:43 | 1:07:19 PM] Make sure that it has to go through all the framework altogether, so that you should not realize at a later stage that, you know, I should have this framework in place, right, in the very first place.
[04:26:54 | 1:07:29 PM] Second is, like, make sure that you have a proper gateway system.
[04:26:58 | 1:07:33 PM] Make sure that every tool call request, either you are doing this from your local or through agent, it has to go through some sort of centralized MCP gateway.
[04:27:07 | 1:07:43 PM] Make sure it authenticated before it reaching to the MCP servers.
[04:27:11 | 1:07:47 PM] And then make sure that your MCP servers take a control on what tool, you know, you should use to execute a particular query, right.
[04:27:22 | 1:07:57 PM] And make sure that you have monitoring in place and complete auditing in place for that tool executions.
[04:27:27 | 1:08:03 PM] And of course, you should, you know, keep the always human in the loop process for every action items, every high-risk items.
[04:27:36 | 1:08:11 PM] Make sure that there is observability and, you know, auditing has to be in place.
[04:27:42 | 1:08:17 PM] And last but not least, make sure that context optimizer should always be there to justify your cost on your agents, right.
[04:27:49 | 1:08:25 PM] So just want to share is that I released my MCP book recently on Amazon, so feel free to download.
[04:27:59 | 1:08:34 PM] It's free in Kindle, and its hard copy is also available.
[04:28:03 | 1:08:39 PM] All right.
[04:28:04 | 1:08:40 PM] Thank you so much for watching this video.
[04:28:08 | 1:08:44 PM] And if you do have any questions, feel free to, you know, like reach out to me over LinkedIn or Twitter.
[04:28:16 | 1:08:52 PM] I'm happy to answer.
[04:28:23 | 1:08:59 PM] Go live proves that a system exists, but it doesn't prove the people behind the work will actually use it, or that it will ever deliver a single dollar from the deal model.
[04:28:54 | 1:09:30 PM] I am Michelle Brand, creator of Leading at Scale, and the question every enterprise is confronting right now is: agent works.
[04:29:03 | 1:09:39 PM] Does anyone trust it?
[04:29:05 | 1:09:41 PM] I have spent over 20 years in enterprise transformation and more than a decade leading M&A integrations across media, tech, and consumer goods.
[04:29:18 | 1:09:53 PM] On those deals, trust was not something we crossed our fingers and hoped for after launch.
[04:29:26 | 1:10:02 PM] We engineered it before day one through early change management and risk management.
[04:29:33 | 1:10:09 PM] So when the platform went live, the teams on the ground actually relied on it.
[04:29:42 | 1:10:18 PM] AI agents demand the exact same muscle.
[04:29:46 | 1:10:22 PM] An agent earns trust when it delivers the value the business budgeted for while staying fully within the company's approved risk appetite.
[04:29:58 | 1:10:34 PM] Policies and regulations.
[04:30:00 | 1:10:36 PM] And regulatory guardrails.
[04:30:01 | 1:10:37 PM] In my experience, leadership gets there by answering three straightforward questions: What value does it create?
[04:30:11 | 1:10:46 PM] Who is on the hook for it?
[04:30:14 | 1:10:50 PM] And what evidence gives it permission to run with greater autonomy?
[04:30:19 | 1:10:55 PM] The moment an agent steps out of a sandbox and into a core business workflow, the entire test changes.
[04:30:29 | 1:11:04 PM] A pilot tests whether the software functions, but daily operations is where we test whether it creates value within the controls set by leadership.
[04:30:40 | 1:11:16 PM] Established AI risk frameworks give you strong principles.
[04:30:45 | 1:11:20 PM] What they do not give you is how to apply these principles to each agent.
[04:30:52 | 1:11:27 PM] For every agent, leadership has to decide four things: What is it permitted to do?
[04:31:00 | 1:11:35 PM] Who owns it?
[04:31:01 | 1:11:37 PM] What evidence it records?
[04:31:03 | 1:11:39 PM] And what triggers an escalation?
[04:31:07 | 1:11:42 PM] That work is not an engineering task.
[04:31:10 | 1:11:45 PM] We find it is an executive operating mandate.
[04:31:14 | 1:11:50 PM] And today, I'll show you how to meet it.
[04:31:18 | 1:11:53 PM] Let us ground this in a real-world scenario.
[04:31:23 | 1:11:59 PM] Picture a $15 billion acquisition targeting 400 million in net synergies.
[04:31:31 | 1:12:06 PM] The deal has already closed, and the integration efforts are now underway.
[04:31:36 | 1:12:12 PM] The integration management office, which we'll also refer to as the IMO today, is driving the synergy roadmap across 40 workstreams.
[04:31:47 | 1:12:23 PM] Covering everything from rationalizing vendor contracts to consolidating ERP systems, and every single initiative has a business owner accountable for its bottom line savings.
[04:32:02 | 1:12:37 PM] Every week, analysts in the IMO are going to reconcile the numbers against the general ledger.
[04:32:11 | 1:12:47 PM] As they track down status from all 40 leads, they're also comparing actuals against the plan, then finally assembling the executive deck for the steering committee, which is going to include the CFO, the Chief Risk Officer, business unit heads, and the integration lead.
[04:32:34 | 1:13:10 PM] The engineering team builds an agent automate that first draft.
[04:32:41 | 1:13:16 PM] The agent then ingests the weekly updates, reconciles the ledger, runs variance math against the plan, and flags the initiatives that are falling behind.
[04:32:53 | 1:13:29 PM] Everything looks good, and they decide to run a four-week pilot.
[04:32:58 | 1:13:33 PM] The agents draft match the analyst reports line for line, so we can say that the tech works.
[04:33:06 | 1:13:42 PM] Now the question is, what value does that steering committee need before they can trust it to run the business?
[04:33:16 | 1:13:51 PM] First, the steering committee needs a written value case agreed upon before the agent ever touches production data.
[04:33:26 | 1:14:02 PM] In our example, that comes down to three specific metrics.
[04:33:32 | 1:14:07 PM] First, let's look at cycle time.
[04:33:35 | 1:14:10 PM] If that weekly report needs five business days to compile, right now, you're going to want to set a hard target such as two days.
[04:33:45 | 1:14:20 PM] Your second metric will be analyst capacity.
[04:33:48 | 1:14:23 PM] If four analysts spend half of their week building this deck, that is 80 hours a week the agent gives back.
[04:33:59 | 1:14:34 PM] That time counts as value only when the integration lead assigns it to the workstreams that are behind on their synergy targets and need help getting back on track.
[04:34:12 | 1:14:47 PM] Then you only count that value after netting out the compute, licensing, and human review costs of running the agent.
[04:34:23 | 1:14:59 PM] Your third metric is the most important one: detection time.
[04:34:29 | 1:15:04 PM] That is how long it takes from the first sign of a slip in the data to the moment the steering committee sees it.
[04:34:37 | 1:15:12 PM] Cutting the report from five days to two days does not guarantee that the committee sees that slip any sooner.
[04:34:45 | 1:15:20 PM] The agent has to catch it, and the value case measures that directly.
[04:34:52 | 1:15:28 PM] Every single metric requires a pre-deployment baseline.
[04:34:56 | 1:15:32 PM] If the IMO cannot state the baseline today, do not deploy.
[04:35:01 | 1:15:37 PM] If you can't measure where you started, you can never prove the agent moved the needle.
[04:35:08 | 1:15:44 PM] Next, the steering committee needs to know who owns the risk the agent creates.
[04:35:16 | 1:15:52 PM] We are going to apply the three lines model to the agent.
[04:35:22 | 1:15:57 PM] In the first line, management owns the controls.
[04:35:25 | 1:16:01 PM] The integration lead is the accountable executive.
[04:35:29 | 1:16:04 PM] She owns the agent's output exactly the way she owned the manual deck.
[04:35:35 | 1:16:11 PM] In the second line, risk and compliance oversee the agent and challenge how to run it.
[04:35:43 | 1:16:19 PM] How deep they go depends on the agent's exposure.
[04:35:47 | 1:16:23 PM] An internal draft scrubbed by a senior analyst warrants a very different review standard than an autonomous agent publishing figures straight to the board.
[04:36:00 | 1:16:35 PM] In the third line, internal audit provides assurance, deciding based on material risk when and how the agent enters the annual audit plan.
[04:36:12 | 1:16:48 PM] The agent also needs one employee assigned to oversee it every day.
[04:36:18 | 1:16:53 PM] In our example, that is the senior analyst who reviews the draft before it reaches the committee.
[04:36:26 | 1:17:02 PM] Her role requires four specific capabilities.
[04:36:29 | 1:17:05 PM] She has to first understand the operational boundaries.
[04:36:34 | 1:17:09 PM] She has to interpret its output with context.
[04:36:39 | 1:17:14 PM] She must have the authority to override or reverse it.
[04:36:45 | 1:17:20 PM] And she needs clear kill switch to shut it down safely the second it behaves unexpectedly.
[04:36:54 | 1:17:29 PM] Accountability also means defining where the agent's authority stops.
[04:36:59 | 1:17:34 PM] I document this in a one-page policy called the Human Work Standard.
[04:37:05 | 1:17:40 PM] For every fork in the process, it maps the decision, the human role authorized to make it.
[04:37:13 | 1:17:49 PM] The required evidence and the escalation path.
[04:37:18 | 1:17:54 PM] These decisions exist at every tier.
[04:37:21 | 1:17:57 PM] The senior analyst decides whether a variance is an accounting timing difference or a real cash shortfall.
[04:37:30 | 1:18:05 PM] The workstream lead decides how to remediate that shortfall, and the integration lead is going to decide whether to formally flag an initiative as at risk to the steering committee.
[04:37:44 | 1:18:19 PM] The engine prepares the analysis behind every one of those decisions, and it stops there.
[04:37:52 | 1:18:27 PM] The person who makes the decision owns the consequence.
[04:37:57 | 1:18:33 PM] So keeping these decisions with your team does not slow the agent down.
[04:38:02 | 1:18:38 PM] It can go into use while each role keeps its authority.
[04:38:07 | 1:18:43 PM] The one reason to delay deployment is a decision with no assigned owner.
[04:38:14 | 1:18:50 PM] This means if leadership has not agreed who declares an initiative off track, the agent flags lead to no action.
[04:38:26 | 1:19:02 PM] The third question is where the engineers in this room come in.
[04:38:34 | 1:19:09 PM] The evidence for greater autonomy comes from how the agent is built.
[04:38:40 | 1:19:15 PM] I look for three artifacts.
[04:38:43 | 1:19:18 PM] The first is an auditable decision log.
[04:38:46 | 1:19:22 PM] For every workstream the agent evaluates, it records the raw data ingested, the tool calls executed, the prompt, and the model versions.
[04:38:58 | 1:19:34 PM] Output generated along with the human sign-off.
[04:39:04 | 1:19:39 PM] Two engineering choices make that log airtight.
[04:39:08 | 1:19:43 PM] First, your core math and reconciliation rules must run in deterministic, finance-approved code, not generated as conversational prose from an LLM.
[04:39:22 | 1:19:58 PM] Second, treat the model's written summary as a helpful explanation, not proof.
[04:39:29 | 1:20:05 PM] Your real proof lives in the telemetry: what records were pulled, what deterministic tools ran, and who signed the review.
[04:39:41 | 1:20:16 PM] If reported savings do not match the general ledger, agent does not touch the number.
[04:39:49 | 1:20:25 PM] It flags the discrepancy and routes it up.
[04:39:54 | 1:20:29 PM] The second artifact is the model inventory record.
[04:39:58 | 1:20:33 PM] This captures the
[04:40:02 | 1:20:37 PM] First, the accountable executive, data lineage, dependencies across source systems, validation results, escalation path, and the kill switch runbook.
[04:40:16 | 1:20:51 PM] Most importantly, it documents your regression triggers, which are any updates to our prompt, base model, or source API that require full revalidation before running in production again.
[04:40:31 | 1:21:06 PM] Your third artifact, this is going to be the autonomy scorecard.
[04:40:37 | 1:21:12 PM] The steering committee uses it to grant autonomy in four stages.
[04:40:43 | 1:21:18 PM] Stage one is shadow mode.
[04:40:45 | 1:21:20 PM] The analyst builds the report as they do today.
[04:40:49 | 1:21:24 PM] The agent runs right alongside them, and the team compares the two.
[04:40:54 | 1:21:29 PM] Stage two is the supervised draft.
[04:40:58 | 1:21:33 PM] The agent compiles the first draft, and the senior analyst reviews every single line item.
[04:41:06 | 1:21:41 PM] Stage three is the exception ensemble, where the analyst reviews flagged initiatives plus a random sample of the clean ones.
[04:41:17 | 1:21:52 PM] Then we have stage four, where it's exceptions only.
[04:41:22 | 1:21:57 PM] The analyst reviews only high-risk anomalies, supported by periodic independent sampling.
[04:41:30 | 1:22:05 PM] Pay close attention to stage four, however, because once humans only look at exceptions, your biggest vulnerability is what the agent failed to flag.
[04:41:42 | 1:22:17 PM] So I advise tracking missed material issues through independent sampling.
[04:41:48 | 1:22:23 PM] Monitoring error severity and watching your override rate carefully.
[04:41:54 | 1:22:29 PM] A falling override rate does not automatically mean the agent is getting smarter.
[04:41:59 | 1:22:34 PM] It can also mean the depth of review has slipped.
[04:42:03 | 1:22:38 PM] So independent sampling tells you which one of these you are seeing.
[04:42:09 | 1:22:44 PM] The scorecard puts those control metrics side by side with your value metrics: cycle time, analyst hours deployed, and your detection time.
[04:42:21 | 1:22:56 PM] And with that single-page view, the steering committee can make clean, efficient, data-backed decisions to either promote the agent, hold it where it is, step it back, or down to supervised review stage.
[04:42:39 | 1:23:14 PM] So let's come back to the three questions.
[04:42:44 | 1:23:19 PM] Ask them of every agent you build, fund, or govern.
[04:42:49 | 1:23:24 PM] What value does it create?
[04:42:52 | 1:23:27 PM] Who is accountable for it?
[04:42:55 | 1:23:30 PM] And what evidence permits it to operate with autonomy?
[04:43:00 | 1:23:35 PM] In our M&A example today, the agent did not magically create the 400 million in synergies.
[04:43:06 | 1:23:41 PM] Procurement, supply chain, and operating leaders captured that value through the gritty work of integration.
[04:43:14 | 1:23:49 PM] But what the agent delivers is clear: verified evidence weeks ahead of schedule, giving leadership the runway to intervene while the deal's synergies can still be captured.
[04:43:29 | 1:24:04 PM] Building an agent that works is just the first step.
[04:43:33 | 1:24:08 PM] Answering those three questions is what earns it the trust to run at scale.
[04:43:40 | 1:24:15 PM] Thank you.
[04:44:05 | 1:24:40 PM] Hi, I'm Steve Jamison, AI research and engineering leader at Jellyfish.
[04:44:09 | 1:24:44 PM] I'm here to show you why tokens are the cheap part.
[04:44:13 | 1:24:48 PM] The research that I'll present is drawn from the Jellyfish platform, the industry's largest set of engineering workflow data joined to AI telemetry data.
[04:44:23 | 1:24:58 PM] It's no secret that AI costs are climbing.
[04:44:26 | 1:25:01 PM] They're up 60x from this time last year.
[04:44:29 | 1:25:04 PM] The use cases are wide and varied.
[04:44:31 | 1:25:06 PM] The models and harnesses are getting much better.
[04:44:34 | 1:25:09 PM] The implications are exciting, but discussions around budget and spend are not as much fun.
[04:44:40 | 1:25:15 PM] These conversations involve your peers and senior leadership and the board, not always the easiest audiences, especially when you don't have the right data.
[04:44:49 | 1:25:24 PM] And it's real money these days.
[04:44:53 | 1:25:28 PM] Output is up too.
[04:44:55 | 1:25:30 PM] Merge PRs per engineer are up 43% over the same one-year horizon.
[04:45:00 | 1:25:35 PM] This is phenomenal.
[04:45:01 | 1:25:36 PM] We've not seen productivity inputs like this, especially on this time scale.
[04:45:08 | 1:25:43 PM] There's plenty of research and anecdotal data to know that AI and agentic coding are driving these throughput gains.
[04:45:15 | 1:25:50 PM] Heck, even our charts show the correlation.
[04:45:17 | 1:25:52 PM] Notice where the inflection points are.
[04:45:20 | 1:25:55 PM] AI spend increased in early 2026 when throughput gains start a steady increase of their own.
[04:45:27 | 1:26:02 PM] There's a tension with these two numbers, though.
[04:45:30 | 1:26:05 PM] How do you reconcile them?
[04:45:32 | 1:26:07 PM] Spend is up 60x, throughput is also up 43%.
[04:45:37 | 1:26:12 PM] Is that good?
[04:45:38 | 1:26:14 PM] Bad?
[04:45:39 | 1:26:14 PM] 43% is a big number, but so is 60x.
[04:45:44 | 1:26:19 PM] How do you know if you're spending enough?
[04:45:47 | 1:26:22 PM] Is there more productivity gain locked behind a checkbook?
[04:45:52 | 1:26:27 PM] Should we increase spend 50%, 2x more?
[04:45:57 | 1:26:32 PM] Or how do you know if you spent too much?
[04:46:00 | 1:26:35 PM] I'm sure many of you have felt the tension here.
[04:46:02 | 1:26:37 PM] The CFO or board are asking for the receipts of the spend.
[04:46:06 | 1:26:41 PM] Can you show them?
[04:46:08 | 1:26:43 PM] Will merge PRs are up 43% satisfy them?
[04:46:12 | 1:26:47 PM] Also, what happens if you cap use and spend?
[04:46:17 | 1:26:52 PM] Are you stopping from setting tokens on fire, or are you stunting further efficiency gains?
[04:46:23 | 1:26:58 PM] You can ask peers at other companies what they're paying.
[04:46:26 | 1:27:01 PM] For many, it's still a moving target, though.
[04:46:29 | 1:27:04 PM] But how do you equate that to your org?
[04:46:32 | 1:27:07 PM] Surely, just comparing their bill to yours isn't adequate.
[04:46:36 | 1:27:11 PM] We've heard the reports of companies spending 100K, 500K, even millions on AI, then resetting their AI budgets as reality sets in.
[04:46:50 | 1:27:25 PM] Ultimately, these two numbers can't tell the story, and even together, they miss the biggest line on the cost side.
[04:46:59 | 1:27:34 PM] These two numbers leave out the biggest cost of all: developer salary.
[04:47:04 | 1:27:39 PM] AI is making developers more productive on a scale we haven't seen before.
[04:47:09 | 1:27:44 PM] It isn't just another tool; it's intelligence.
[04:47:12 | 1:27:47 PM] This intelligence dramatically changes how much each dev can produce.
[04:47:17 | 1:27:52 PM] That's why we need to think about its cost differently, not off to the side as overhead, but as part of what it takes to produce each PR.
[04:47:26 | 1:28:01 PM] We're going to call this intelligence costs of a PR.
[04:47:34 | 1:28:09 PM] What you pay your engineers plus what you pay for AI, put them together in one cost bucket.
[04:47:41 | 1:28:16 PM] AI is about 2.
[04:47:43 | 1:28:18 PM] 5% of the cost to produce another unit of merge code.
[04:47:48 | 1:28:23 PM] Salary is the other 97.
[04:47:51 | 1:28:27 PM] 5%.
[04:47:52 | 1:28:27 PM] This is in line with other reported figures, and this data is from August 2026.
[04:47:59 | 1:28:34 PM] Here, tokens are the cheap part.
[04:48:03 | 1:28:38 PM] But that's current relative costs, not dollars.
[04:48:07 | 1:28:42 PM] Let's look at what happened to the cost of a merged PR over the last year.
[04:48:18 | 1:28:53 PM] The dollar cost of a merged PR fell 26% over the last year.
[04:48:23 | 1:28:58 PM] Not PRs created, but PRs merged.
[04:48:26 | 1:29:01 PM] Review time is factored in, and some level of quality gates has been cleared.
[04:48:32 | 1:29:07 PM] That decline in cost per merged PR includes a 60x increase in AI costs over the same time frame.
[04:48:39 | 1:29:14 PM] The change is nearly universal too.
[04:48:41 | 1:29:16 PM] 83% of the companies we studied showed a drop in cost per PR.
[04:48:46 | 1:29:21 PM] What does this tell us?
[04:48:48 | 1:29:23 PM] The additional throughput gains are spreading salary thinner across PRs, and this is happening faster than the AI costs are increasing.
[04:49:02 | 1:29:37 PM] What's the range in token spend?
[04:49:04 | 1:29:39 PM] We ranked companies by token usage, then grouped them into quintiles or fifths.
[04:49:11 | 1:29:46 PM] The range here is quite large.
[04:49:13 | 1:29:48 PM] The lightest group, about 0.
[04:49:16 | 1:29:51 PM] 3% of the cost of a PR, is AI.
[04:49:22 | 1:29:57 PM] This represents about 60 million tokens per dev per month.
[04:49:27 | 1:30:02 PM] The top 20% of AI spend per dev, we're going to call the heaviest spend group.
[04:49:34 | 1:30:09 PM] There, 8.
[04:49:35 | 1:30:10 PM] 5% of the PR cost is AI.
[04:49:38 | 1:30:13 PM] This represents about 2.
[04:49:40 | 1:30:15 PM] 5 billion tokens per dev per month, about two orders of magnitude more than the lightest group.
[04:49:47 | 1:30:22 PM] We'll use these groups on the next slides to see how token spend influences other metrics.
[04:49:54 | 1:30:29 PM] First, PR throughput measured as merged PRs per dev, split by the same.
[04:50:02 | 1:30:38 PM] The same AI spend quintiles on the previous slide.
[04:50:06 | 1:30:42 PM] The bottom four-fifths of spenders saw PR throughput gains of around 40%, give or take.
[04:50:14 | 1:30:50 PM] But the heavy spend group improved more, at a 67% increase.
[04:50:20 | 1:30:56 PM] More AI spend led to more throughput gains.
[04:50:27 | 1:31:03 PM] Now let's look at the cost per PR.
[04:50:30 | 1:31:06 PM] Positive results are seen again across the board.
[04:50:33 | 1:31:09 PM] Cost per PR is dropping for all AI usage groups.
[04:50:37 | 1:31:13 PM] However, again, the heaviest fifth, so the companies that spent the most, improved the most.
[04:50:46 | 1:31:22 PM] They saw a cost per PR decrease of 32% over the last year.
[04:50:53 | 1:31:29 PM] The other four groups saw about a 25% decrease in cost per PR.
[04:51:00 | 1:31:36 PM] Investing in spending more on AI fueled more of an improvement in cost per PR compared to peers who leaned in less.
[04:51:09 | 1:31:45 PM] So we saw that the same as we saw in the population average.
[04:51:16 | 1:31:52 PM] Cost per PR changes are driven largely by PR throughput, not by AI spend.
[04:51:22 | 1:31:58 PM] The heavy spenders experienced PR throughput gains of 67% compared to about 40-ish percent for their peers.
[04:51:31 | 1:32:07 PM] Spreading the same salary across more PRs in the month has more of an effect than the rising AI costs, because tokens are the cheaper.
[04:51:44 | 1:32:20 PM] This is not to say that orgs should Light tokens on fire and spend with abandon.
[04:51:50 | 1:32:26 PM] Here we're looking at tokens used on the horizontal axis and cost per PR on the vertical axis.
[04:51:56 | 1:32:32 PM] There's a steep drop at the beginning, where relative small AI spend results in large gains initially.
[04:52:04 | 1:32:40 PM] As token usage increases, the cost per PR improvement decreases.
[04:52:09 | 1:32:45 PM] This is diminishing returns.
[04:52:11 | 1:32:47 PM] I want to stress, though, diminishing returns is not the same as no returns.
[04:52:18 | 1:32:54 PM] We're seeing that the top 10% are spending 8x the tokens compared to the median and achieving a 25% lower cost per PR.
[04:52:33 | 1:33:09 PM] There will be a time when tokens aren't the cheap part, but by and large, for most companies out in the wild, we're not close to that threshold.
[04:52:44 | 1:33:20 PM] More tokens leads to more PRs, which leads to a lower cost of delivery.
[04:52:57 | 1:33:33 PM] So far we've talked about companies.
[04:53:00 | 1:33:36 PM] Next I'd like to take a tangent and talk about a study we did with developers.
[04:53:06 | 1:33:42 PM] Here we looked at developer weeks with heavy token use compared to the same developer weeks with lower token use.
[04:53:18 | 1:33:54 PM] Here we saw the same phenomenon, just at the individual level.
[04:53:23 | 1:33:59 PM] Compare each developer's heavy agent skill weeks with their own weeks without skills.
[04:53:31 | 1:34:07 PM] They spend about twice as much on tokens.
[04:53:37 | 1:34:13 PM] Merge 27% more PRs and reach PR costs, and each PR costs about 18% less once salary and tokens are accounted together.
[04:53:51 | 1:34:27 PM] There are two fair curiosities I get when I talk about this work.
[04:53:56 | 1:34:32 PM] First, does faster work result in worse work?
[04:54:03 | 1:34:39 PM] And second, are the more PRs, the throughput gains that we're seeing, are they being driven by smaller chunks of work?
[04:54:15 | 1:34:51 PM] First curiosity is cheaper, faster work, worse work.
[04:54:20 | 1:34:56 PM] If AI makes PRs faster and cheaper, are we just shipping more mistakes?
[04:54:25 | 1:35:01 PM] One proxy for this is reverts, merge PRs that undo an earlier PR.
[04:54:31 | 1:35:07 PM] The heaviest fifth started lowest before most of the token growth, and revert rates drop slightly for every group, though these deltas are just slightly below the noise in the data.
[04:54:44 | 1:35:20 PM] It's not evidence of improvement here.
[04:54:48 | 1:35:24 PM] However, more importantly, we're not seeing any worrying signs of rampant or severe quality issues with higher token spends and faster PR throughput.
[04:55:04 | 1:35:40 PM] The second curiosity is throughput driven by smaller PRs, and this is demonstrably no, not smaller PRs.
[04:55:16 | 1:35:52 PM] In fact, AI is driving an increase in lines of code generated per PR.
[04:55:24 | 1:36:00 PM] This is no surprise to the devs in the room.
[04:55:28 | 1:36:03 PM] Raise your hand if you've rolled your eyes at verbose, unnecessary inline AI comments or a file full of mostly irrelevant tests.
[04:55:38 | 1:36:14 PM] Gen AI likes to generate code.
[04:55:41 | 1:36:17 PM] Also, the bar to create is low for devs, and there's a pull to do more per PR instead of spinning up another ticket.
[04:55:48 | 1:36:24 PM] It's just one, maybe two prompts, and I'll handle this edge case, or I can combine this and that element.
[04:55:56 | 1:36:31 PM] Fewer PRs to wrangle.
[04:55:57 | 1:36:33 PM] This doesn't mesh well with the PR review stress folks are feeling these days, though.
[04:56:04 | 1:36:40 PM] Also, AI is just becoming more capable, so we're getting more ambitious.
[04:56:10 | 1:36:46 PM] It is beyond this talk to dig into what's actually driving those level of lines of code changes.
[04:56:18 | 1:36:54 PM] However, the increase in PR throughput is not coming from smaller PRs.
[04:56:24 | 1:37:00 PM] This is intuitive for most, but it's still good to verify.
[04:56:30 | 1:37:06 PM] Back to the opening question: is 60x more spend worth 43% more output?
[04:56:37 | 1:37:13 PM] You can't tell in isolation.
[04:56:40 | 1:37:16 PM] You should track both.
[04:56:42 | 1:37:17 PM] They are important numbers, but they're supporting metrics.
[04:56:45 | 1:37:21 PM] AI spend per PR is the intelligence that you're buying as a resource to help make your devs go faster.
[04:56:54 | 1:37:30 PM] PRs per engineer is what you're getting with that spend.
[04:56:59 | 1:37:35 PM] However, looking at those hides the tradeoff.
[04:57:07 | 1:37:43 PM] But put salary into the equation and take the ratio of cost to throughput, and there you get your answer.
[04:57:14 | 1:37:50 PM] Cost per PR is down 26% over that same time period.
[04:57:20 | 1:37:56 PM] It's clear AI is driving cost efficiencies despite the increasing bills.
[04:57:30 | 1:38:06 PM] And the AI spend needed to get those efficiencies is small, relatively speaking.
[04:57:37 | 1:38:13 PM] AI is still a sliver of what a PR costs, 2.
[04:57:42 | 1:38:17 PM] 5% on average, under 10% for the heavy spender group.
[04:57:47 | 1:38:23 PM] Tokens are the cheap part.
[04:57:50 | 1:38:26 PM] In the range that we see, more spend kept paying.
[04:57:54 | 1:38:30 PM] Heavier token users saw 67% PR throughput gain compared to 40% for their lower-spend peers.
[04:58:03 | 1:38:39 PM] This drove cost per PR down 32% compared to about 25% for the lower-spend peers.
[04:58:11 | 1:38:47 PM] Looking at the PR cost-to-token ratio curve, the top 10% of company months by token usage resulted in 8x the tokens, but 25% lower cost per PR compared to the median.
[04:58:30 | 1:39:06 PM] AI is making developers more productive on a scale we haven't seen before.
[04:58:35 | 1:39:11 PM] It isn't just another tool; it is intelligence, which changes how much each dev can produce.
[04:58:43 | 1:39:19 PM] That's why we need to think about its cost differently, not off to the side as overhead, but part of what it takes to produce each PR.
[04:58:53 | 1:39:28 PM] We need to add the AI spend and the human spend, the human salary spend.
[04:59:00 | 1:39:35 PM] Together to calculate your real costs per PR.
[04:59:04 | 1:39:40 PM] This isn't to say spend frivolously.
[04:59:07 | 1:39:43 PM] Sure, you should watch for runaway jobs.
[04:59:11 | 1:39:47 PM] You should track your AI spend.
[04:59:14 | 1:39:50 PM] I'm not saying don't look at how much AI spend is going in each PR.
[04:59:20 | 1:39:56 PM] I'm saying don't let that be your driving metric.
[04:59:24 | 1:40:00 PM] A new framing might steer how and when you think about other investments, like integrating model routers, post-training your own model, implementing token limits, etc.
[04:59:37 | 1:40:13 PM] Will you get more efficiencies out of trying to control AI costs, or by continuing to invest in things that increase throughput, like more AI enablement?
[04:59:48 | 1:40:24 PM] Either way, track the total intelligence costs, human plus artificial, per PR every month, next to that AI bill, and next.
[04:59:59 | 1:40:35 PM] And next to the PR throughput.
[05:00:02 | 1:40:37 PM] How are you trending?
[05:00:03 | 1:40:39 PM] Is throughput continuing to improve?
[05:00:06 | 1:40:42 PM] What about those cost efficiencies, the cost to deliver?
[05:00:10 | 1:40:46 PM] Watch reverts and quality metrics beside all of this as a counterweight.
[05:00:15 | 1:40:51 PM] We don't need AI slop mucking up the gears.
[05:00:19 | 1:40:55 PM] So heading into budget season, bring cost per PR to the table, not just your token bill, not just the throughput bump.
[05:00:28 | 1:41:04 PM] The bill tells you what you spent.
[05:00:31 | 1:41:07 PM] Cost per PR tells you whether it worked.
[05:00:35 | 1:41:11 PM] And right now, for most companies, it says keep investing.
[05:00:40 | 1:41:16 PM] Tokens are the cheap part to get efficiency gains.
[05:00:47 | 1:41:22 PM] Well done.
[05:00:47 | 1:41:23 PM] You made it to the end.
[05:00:49 | 1:41:25 PM] Here's how you can stay up to date with our latest research, which again draws from the largest engineering workflow and AI telemetry dataset in the industry.
[05:00:59 | 1:41:34 PM] You can follow me on LinkedIn, my colleagues, or Jellyfish.
[05:01:03 | 1:41:39 PM] Subscribe to our Substack, or you can check out our Jellyfish blog on the website.
[05:01:10 | 1:41:46 PM] If you want help tracking your org's engineering workflow and AI effectiveness, including cost per merged PR, go to our website and book a demo, or reach out to me and I'll get you connected to the right folks.
[05:01:25 | 1:42:00 PM] Again, I'm Steve Jamison, AI research and engineering leader at Jellyfish.
[05:01:29 | 1:42:05 PM] Thanks for watching.
[05:01:31 | 1:42:06 PM] Cheers.
[05:01:50 | 1:42:25 PM] Okay.
[05:01:50 | 1:42:26 PM] Yep.
[05:01:51 | 1:42:26 PM] Do we want to call it Jiro or no?
[05:01:55 | 1:42:31 PM] Yeah, we could call it Jiro.
[05:01:58 | 1:42:34 PM] We could just be like, this is our agent Jiro.
[05:02:01 | 1:42:37 PM] I think it's also like a helpful potential cut, which is like, if we ask Jiro, like, you ready to get started?
[05:02:06 | 1:42:42 PM] Yeah, sure.
[05:02:07 | 1:42:42 PM] And then, like, you know, our video can move, Jiro can, like, draw something, acknowledgement, whatever.
[05:02:12 | 1:42:47 PM] Yeah, yeah, yeah.
[05:02:12 | 1:42:48 PM] Maybe like a transition pane.
[05:02:14 | 1:42:50 PM] Yeah.
[05:02:15 | 1:42:50 PM] Transition cut.
[05:02:15 | 1:42:51 PM] Okay.
[05:02:15 | 1:42:51 PM] Yeah.
[05:02:16 | 1:42:51 PM] All right, let's get started.
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
[05:22:41 | 2:03:17 PM] All right, we're going to go ahead and get started.
[05:22:43 | 2:03:19 PM] I'm Scott Worland.
[05:22:44 | 2:03:20 PM] I'm the CTO of Norm AI, and I'm privileged enough to be sharing the stage here with John Stecker, who's the CTO of Blackstone.
[05:22:51 | 2:03:27 PM] From what I understand, John has basically three full-time jobs, it sounds like.
[05:22:56 | 2:03:32 PM] Yep.
[05:22:56 | 2:03:32 PM] Responsible for all of the technology at Blackstone, also advises on their investments, and as well as serves as a resource for the portfolio companies for all things technology.
[05:23:07 | 2:03:43 PM] Did I miss anything?
[05:23:08 | 2:03:44 PM] Nope, you hit it all perfectly, man.
[05:23:10 | 2:03:46 PM] Cool job.
[05:23:11 | 2:03:46 PM] Yeah, and if you're not familiar with what Blackstone does, then you probably have wandered into the wrong conference, so I'm not going to go into that.
[05:23:18 | 2:03:53 PM] But you may not know what Norm does.
[05:23:19 | 2:03:55 PM] So really briefly, Norm is an AI company, and we operate in the legal and regulatory space.
[05:23:24 | 2:04:00 PM] We have an enterprise AI platform that's deployed in some of the largest financial institutions in the world, and then we also have an affiliated law firm, Norm Law, and our AI platform also supports that.
[05:23:36 | 2:04:12 PM] So...
[05:23:37 | 2:04:12 PM] Since the end of last year, and certainly all of this year, everyone's been racing to figure out how to deploy AI agents.
[05:23:43 | 2:04:19 PM] And I'd love to hear how you're thinking about this at Blackstone and how you're trying to make sure you get this right.
[05:23:48 | 2:04:24 PM] Yeah, I mean, I think the race has definitely been on as, like, the technology has improved mightily since, you know, really like February, March of last year, like just in terms of context windows, being able to run stuff for significantly longer amounts of time have, like, resulted in people being able to produce just more value.
[05:24:03 | 2:04:38 PM] And one of the things that, like, we've been focused on a lot, and I think every company in our portfolio I advise on and work with all the time, that they need to have top of mind for, like, being successful with AI agents in general is you have to get your data story right.
[05:24:17 | 2:04:52 PM] And so, like, one of the biggest things and impediments and tripping points that I see for companies out there when they're all in on AI, they want to build as many agents as possible, they really want to kind of extract value.
[05:24:27 | 2:05:03 PM] If they don't have a cohesive data strategy that's moving stuff out of transactional systems into something that can be accessed and easily managed and recalled from, like, an agent perspective, it is going to fail.
[05:24:39 | 2:05:14 PM] And so that's been one of the biggest things that we've been focused on.
[05:24:42 | 2:05:17 PM] You know, as a big asset manager, we have a ton of data, proprietary data, public data, all woven together.
[05:24:47 | 2:05:22 PM] We have to move that out of systems into something that we can really leverage from an AI perspective.
[05:24:52 | 2:05:28 PM] I think the second thing that, you know, has nothing to do with AI, but you can leverage AI to actually figure out how to do the best possible way, is straight-through processing still matters.
[05:25:02 | 2:05:38 PM] I'm always shocked at how everybody just talks about, like, agents as being the biggest differentiator in the world.
[05:25:07 | 2:05:43 PM] The thing that I've leveraged myself using Factory and a couple other ways to go off and build code inside of the firm is, like, taking time, having agents help to craft something for me, understand the workflows out there that people are doing, and then make sure that I'm, like, actually writing code to optimize for straight-through processing, and then using agents to inject in intelligence where necessary, where humans were making decisions in the past for a variety of rote work things.
[05:25:31 | 2:06:06 PM] So that's really, like, the two key elements that I spend a ton of time thinking about every single day.
[05:25:35 | 2:06:11 PM] And then the biggest thing from an agent perspective...
[05:25:38 | 2:06:13 PM] is really stepping back and looking at, like, what is work that we want to build agents to do better, to offload, like, intellectual cycles from our investment professionals, our finance professionals, our engineers, such that they can do higher value work.
[05:25:53 | 2:06:28 PM] And there's a ton of stuff when you think about the software development lifecycle: writing test cases, functional test cases, performance test cases, versioning forward libraries underneath applications.
[05:26:03 | 2:06:38 PM] It's the bane of every engineer's existence.
[05:26:06 | 2:06:41 PM] I've hated it for 27 years that I've been doing this.
[05:26:08 | 2:06:43 PM] Having an agent be able to go off and do these things for me and renovate my code and my source code has made all the difference in the world for the velocity that we deliver at.
[05:26:15 | 2:06:51 PM] So how are you thinking about it at Norm?
[05:26:17 | 2:06:53 PM] Yeah.
[05:26:18 | 2:06:53 PM] So Norm was founded in 2023, so, you know, that's three years, I guess four years after GPT-1, but still a year before there was, like, you know, Chain of Thought.
[05:26:27 | 2:07:03 PM] So it was, like, an interesting time in terms of development.
[05:26:30 | 2:07:05 PM] I remember when we had our first team get together, we were at Stanford's campus for a week, and, I mean, I'm probably misremembering the exact timeline, but it felt like we went from 4K to 8K to 128K context windows, and then we had multimodal, and everything just felt like it was kind of coming all at once.
[05:26:45 | 2:07:20 PM] And then there was a bit of a time where things did slow down when it was coming from the frontier.
[05:26:49 | 2:07:25 PM] And so I think, like a lot of companies in, like, early 2024, you know, we were trying to deploy these models as part of, like, our workflow and as part of, like, our production software.
[05:26:57 | 2:07:33 PM] And so we ended up adding a lot of structure to the system, and this comes from, you know, all different parts of the stack.
[05:27:04 | 2:07:40 PM] So whether that was from, like, how we went and took the content that we knew needed to be, like, eventually added to context to the models, and we had, like, very specific ways in which we did that, or if there was, like, you know, just the sequencing of the models, if there was, like, steps we needed to do in terms of looking for consistency and then ultimately, like, distilling everything down into some useful output, we ended up with something that looked like a large map-reduce problem, effectively, right?
[05:27:27 | 2:08:03 PM] Whereas, like, we had a lot of scaffolding for the agents, and we were very particular about, like, how these—well, I would say agents, really—just how these models ran.
[05:27:34 | 2:08:09 PM] It was much more like a workflow.
[05:27:36 | 2:08:11 PM] And what this allowed us to do was get, like, really, you know, high quality and also— With accurate, very accurate, but also just very consistent, which is very important for us in the regulatory space, outputs.
[05:27:47 | 2:08:23 PM] But then one fortuitous thing as part of doing this, because we wanted to have some way to regression test this big system, we ended up with a really large set of evaluation samples.
[05:27:56 | 2:08:32 PM] We had tens of thousands, actually, of like hand-labeled examples by experts.
[05:27:59 | 2:08:35 PM] And so as soon as we moved to a place where it was like clear that agents were actually a thing, and by agents I simply mean, you know, given like an LLM, a system, or given a set of tools that it can use, give it some goal and give it some way to verify itself against that goal, allowing it just to go figure out how to do the thing in the best way possible.
[05:28:18 | 2:08:54 PM] We were able to just take this benchmark set and just immediately run on top of it with some of these more agentic approaches.
[05:28:24 | 2:08:59 PM] And we saw, you know, I think a lot of people had this moment where you're staring at hundreds of thousands of lines of code your team had really thoughtfully written and realizing most of it was pretty obsolete and was just kind of actually in the way.
[05:28:34 | 2:09:10 PM] And so to update quickly on this, what we did was we took—I got the engineering leadership team.
[05:28:39 | 2:09:15 PM] We actually rented a Sprinter van and we drove to upstate New York.
[05:28:43 | 2:09:19 PM] It was actually after a big snowstorm.
[05:28:45 | 2:09:20 PM] We had an Airbnb, and it was like, forget norm for a minute.
[05:28:48 | 2:09:23 PM] Let's just say, what would we build today as far as a platform, knowing what we know right now, if we were going to be starting over?
[05:28:55 | 2:09:30 PM] And then from that, we left with basically a set of specs about like what this platform needed to be able to do to enable two things.
[05:29:01 | 2:09:36 PM] One, deliver agentic experiences to our clients.
[05:29:03 | 2:09:39 PM] And then also it needed to be amenable to having AI as like co-developers alongside of our own development team.
[05:29:10 | 2:09:45 PM] And that's what we've been executing against ever since then.
[05:29:13 | 2:09:48 PM] So I think this— Do you have a question?
[05:29:13 | 2:09:48 PM] I was going to say, I think you hit on like a key point, Scott, which is like the eval side of the fence that you were talking about before.
[05:29:21 | 2:09:57 PM] If you're working in financial services, like the quality bar for what agents have to deliver on is very, very high.
[05:29:28 | 2:10:03 PM] And so I think really thinking through like what is your eval set for how you basically test your agents, what they're actually, you know, whatever work they're performing, that the output makes sense and it's consistent and repeatable.
[05:29:39 | 2:10:15 PM] And I've seen across the board as model versions change underneath the covers, you get different answers.
[05:29:44 | 2:10:20 PM] You get skew in terms of the accuracy of information that comes back.
[05:29:48 | 2:10:24 PM] So having good evals so that you can run those consistently and really measure the health of a system is paramount to success.
[05:29:54 | 2:10:30 PM] Same thing happens if harnesses change that you're running stuff on top of, you'll get different answers.
[05:29:59 | 2:10:35 PM] Data change is different answers.
[05:30:01 | 2:10:36 PM] So it's something where I think if you're trafficking in financial services, like the duty to be accurate is, like, up here, and hitting that is, like, something, like, we think about all the time.
[05:30:11 | 2:10:47 PM] Definitely.
[05:30:12 | 2:10:48 PM] I think this leads nicely into this concept that we've been talking about, just like with the bitter lesson.
[05:30:16 | 2:10:52 PM] So, like, everyone's familiar with it, and, you know, there's this idea that these handcrafted systems built by, you know, clever people thinking hard about the problem will oftentimes eventually be dominated by systems that scale with compute, right?
[05:30:30 | 2:11:05 PM] And this is actually, I think Rich Sutton originally talked about this in 2019, but this has been since the beginning of neural networks.
[05:30:35 | 2:11:11 PM] If you go back to, like, the '50s and '60s, like with Rosenblatt's little perceptron, I think the New York Times ran an article or somebody did saying it was the first machine that could ever have its own original thoughts, you know?
[05:30:46 | 2:11:22 PM] And so, and there's actually quite a fascinating history here of how the expert systems and the connectionists and what ended up happening.
[05:30:53 | 2:11:28 PM] A lot of it actually was highly litigated in England, and a lot of AI research was dismantled.
[05:30:57 | 2:11:33 PM] But one funny thing, if you go back to the '80s even, there was a lead at IBM's translation lab, and he made a comment, which is very much the bitter lesson: Every time I fire a linguist, my models improve, right?
[05:31:08 | 2:11:43 PM] The point of having these linguists in there and trying to think about all the rules of language versus, like, training a statistical model based on just probabilities.
[05:31:14 | 2:11:49 PM] And so we speed up to today, and, like, we see this all the time.
[05:31:16 | 2:11:52 PM] We've been touching on lots of points about this, and I'm curious, when you think about your roadmaps, when people on your team are bringing you project ideas, like, how do you keep this in mind as you're thinking about this for Blackstone?
[05:31:26 | 2:12:02 PM] Yeah, I mean, a lot of what we do is, like, the simple equation is giving enough compute, every problem is solvable by, like, hardware and software at some point in time in the future.
[05:31:37 | 2:12:12 PM] Elon talks about this energy-wise, et cetera.
[05:31:39 | 2:12:14 PM] So it's like, it's a big map, it's a whole bunch of stuff.
[05:31:41 | 2:12:17 PM] How do you bring it back to reality?
[05:31:43 | 2:12:19 PM] Like, what I spend a lot of my time doing from, like, my seat working with engineers and my team, with product people, with our SRE function, with, like, stakeholders, is really trying to define, like, you know, what is the ROI of what I'm being asked to work on?
[05:31:57 | 2:12:32 PM] And so, like, when I think of building agents, I think about, you know, getting data into the right spot, think about building dashboards, trading platforms, whatever it is.
[05:32:03 | 2:12:39 PM] It's like, if I look at, like, what's the ROI that's going to be created from the actual ask that's coming in to me from a team perspective, and then, like, what's the true cost?
[05:32:14 | 2:12:50 PM] of actually building something today.
[05:32:16 | 2:12:52 PM] Like, how can I balance that equation?
[05:32:18 | 2:12:53 PM] And then I make a decision of, like, you know, is this something where the models are going to get good enough, I'm going to have more than enough compute in six months that it's not worth trying to tackle the problem today.
[05:32:27 | 2:13:03 PM] It's better to delay it and actually address it with one of the new models.
[05:32:32 | 2:13:07 PM] We have made that decision before.
[05:32:33 | 2:13:09 PM] It's like, let's actually wait for the model to become slightly more sophisticated so that we can solve these problems with it because it will cost less at that time.
[05:32:41 | 2:13:17 PM] And the need for that application to be built today isn't pressing.
[05:32:45 | 2:13:21 PM] There's no, like, real business value increase that will be created because it's produced today versus six months from now.
[05:32:52 | 2:13:27 PM] So that's a trade-off that we actually, you know, make regularly and I think about regularly.
[05:32:57 | 2:13:32 PM] The other thing that we do is, like, you don't want to wait too long to basically build something.
[05:33:01 | 2:13:36 PM] And so you can always be waiting for the new model, waiting for the new technology or whatever else.
[05:33:05 | 2:13:40 PM] Like, the beautiful thing with, like, all of the various different software development harnesses today is if you lean into them, it's amazing how quick you can go from, like, concept, mapping out your planning and concept with, like, Fable for, like, you know, just, hey, work with me and let's define this with the product person and with the stakeholder, to actually writing code to having, like, a workable proof of concept.
[05:33:25 | 2:14:01 PM] And when I say workable proof of concept, it's something people could click through, interact with, whatever else it is.
[05:33:30 | 2:14:05 PM] It doesn't have cybersecurity review, doesn't have all the other things that you need to do in our industry to make sure you, like, put something into production that scales.
[05:33:36 | 2:14:11 PM] But you can get to a POC or a POV very quickly.
[05:33:40 | 2:14:15 PM] And so, like, that's one big thing I try to encourage all my engineers to do frequently is, like, just get to POC.
[05:33:46 | 2:14:21 PM] Don't worry about PowerPoints.
[05:33:47 | 2:14:22 PM] Don't worry about anything else.
[05:33:48 | 2:14:24 PM] Leverage tokens, which, like, I think it's a fallacy to be, like, counting tokens in some way, shape, or form.
[05:33:53 | 2:14:29 PM] It's better to think about producing value.
[05:33:55 | 2:14:30 PM] Go off, produce value, produce POVs, put it in front of people, iterate on it quickly, and throw it away if you don't need it.
[05:34:01 | 2:14:36 PM] You will spend far less time and money doing those types of things.
[05:34:04 | 2:14:39 PM] And so that's, like, a big way that we think about trying to solve it.
[05:34:07 | 2:14:42 PM] It doesn't maps into the paradigm, like the, you know, how do you deal with increasing compute, making it easier to do these things.
[05:34:13 | 2:14:49 PM] But, like, I just, I think in a much shorter time frame.
[05:34:16 | 2:14:52 PM] Yeah, it's so interesting because it's like, you know, I mean, you touched on so many things that I think everybody's probably been thinking about too.
[05:34:23 | 2:14:58 PM] And if you go back to 2023 when we were originally, like, sitting around as a small group talking about what we were building, we were aware of the better lesson then.
[05:34:29 | 2:15:05 PM] We talked about it.
[05:34:31 | 2:15:06 PM] We said, how do we not get in this trap?
[05:34:32 | 2:15:07 PM] And I think at this point, it's just really evident to me that it's like, it's definitely a gradient, right?
[05:34:36 | 2:15:11 PM] It's not this binary thing about you can somehow build the perfect technology to index into all the, you know, everything coming in from the frontier in a way that you don't have to throw things away.
[05:34:44 | 2:15:19 PM] So really it gets down to, like, where do we want to invest heavily and where are we willing to invest conservatively?
[05:34:50 | 2:15:25 PM] Because, like you said, we need something today.
[05:34:52 | 2:15:27 PM] But at the same time, we're just aware that, like, some of these investments we make, particularly around things like we've built, you know, fairly complicated systems around all of our agent primitives, so the harness, the sandbox, how egress works, you know, all of these things.
[05:35:05 | 2:15:40 PM] And we also want to make sure that as, like, things are coming out either from, like, a frontier lab or from, like, a third party, that we're able to index into that.
[05:35:11 | 2:15:47 PM] And so I think a lot of it is just kind of when do you update?
[05:35:15 | 2:15:50 PM] And that's one of the hardest things to do.
[05:35:17 | 2:15:52 PM] And, like, for me, a good example was I really updated really hard on cloud code.
[05:35:21 | 2:15:57 PM] Not so much that it was suddenly tools that, like, in my profession that we could use that were really incredible.
[05:35:26 | 2:16:02 PM] What it really was for me was just this idea, because I was a bit skeptical up to that point of how we would get something that was, like, truly generalizable.
[05:35:32 | 2:16:08 PM] It's like, well, what does cloud code give you?
[05:35:35 | 2:16:10 PM] Well, you can write code, and then it can execute the code and, like, basically run a computer in some verifiable way.
[05:35:40 | 2:16:16 PM] At that moment, I was like, well, we have all the ingredients for, like, a truly generalizable intelligence, because if you can go do this at scale, then, I mean, you know, of course, like, you can basically do anything in terms of most knowledge work and actually even outside of knowledge work, which we're seeing some today.
[05:35:52 | 2:16:28 PM] And you fast forward to now, and, like, all these tools that people are using, these, like, AI assistants and things, this is why they're so amazing.
[05:35:58 | 2:16:34 PM] It's because you can ask a question that's never seen before, fully out of distribution.
[05:36:02 | 2:16:37 PM] It can spin up a computer and go do this thing in the background.
[05:36:04 | 2:16:40 PM] And for a consumer, it's amazing.
[05:36:05 | 2:16:41 PM] And then we're also seeing this now within the enterprise too.
[05:36:08 | 2:16:43 PM] And so for me, that moment was like, well, where are we going to invest heavily?
[05:36:11 | 2:16:47 PM] Of course, we still need to invest in what we're building on the agent side.
[05:36:15 | 2:16:50 PM] But going back to what John mentioned, how we do our data capture and distillation and how we make How we make this available is, like, state to these models, and then also just how we do our benchmarks and evaluation.
[05:36:25 | 2:17:01 PM] And so with, like, the law firm, for example, we have this really unique situation where we started this law firm, you know, from nothing.
[05:36:32 | 2:17:07 PM] So we've kind of grown together; they've grown with Norm together.
[05:36:35 | 2:17:10 PM] And so we work directly with lawyers to stand up these benchmarks and evaluations.
[05:36:39 | 2:17:14 PM] And effectively, rather than think of a traditional roadmap, like, when are you going to build an agent that can go do these three things?
[05:36:45 | 2:17:21 PM] It's, well, let's have a scorecard that determines when an agent, or when a human even, is successful at completing these tasks across the various dimensions.
[05:36:54 | 2:17:29 PM] And then we want to be able to see this just improve over time.
[05:36:56 | 2:17:31 PM] So as we make general improvements to the system, we should see an uplift to these, you know, these things like an attorney would expect to improve their workflow, but at the same time not getting kind of going back to the state that we were originally, where we had added a lot of structure to it in a way that ultimately we found that we actually could get even better performance if we were to remove that upfront structure.
[05:37:15 | 2:17:50 PM] Yeah, I think, like, another thing that's important to think through is, like, you can produce, like I was saying, a lot more proof of concepts, proof of value very quickly.
[05:37:24 | 2:18:00 PM] I still think, like, the hard yards for a lot of development out there is getting it to production.
[05:37:29 | 2:18:05 PM] And what I mean by that is, like, infrastructure build-out that actually runs inside of the infrastructure that's available inside of any financial services or enterprise company, for that matter, out there.
[05:37:38 | 2:18:14 PM] Like, that is a challenge that a lot of folks, like, underestimate.
[05:37:42 | 2:18:17 PM] If you're selling AI tools, that is hard on the other side, just so you know.
[05:37:46 | 2:18:21 PM] Deal with it quite a bit.
[05:37:47 | 2:18:23 PM] The other thing is, is just, like, dealing with, like, the cybersecurity side of the fence and the supportability side of the fence.
[05:37:53 | 2:18:29 PM] And so, like, one thing I've noticed, you know, the agents are getting better at this now, but it's making sure that the actual software that's being written is truly traceable, and it feeds into your SRE platform so that it can be monitorable in production.
[05:38:06 | 2:18:42 PM] Those are things still that, like, I like to have people think about.
[05:38:09 | 2:18:45 PM] It's like they haven't started to scale yet with agents.
[05:38:11 | 2:18:47 PM] They will, but it's something that, from my perspective, I think about regularly.
[05:38:15 | 2:18:51 PM] Makes sense.
[05:38:16 | 2:18:52 PM] And we, our approach to this, and I'm sure a lot of other companies, and maybe even you guys have taken this approach as well, is there's parts of our codebase that we, like, still require, like, complete human oversight from when it comes to designing, building, code ownership, even improving any kind of changes to the codebase.
[05:38:33 | 2:19:09 PM] And these are, like, our core primitives.
[05:38:35 | 2:19:10 PM] And these are things where, you know, basically you can build things on top of these, but the things that you build on top of these are not allowed to, like, change these systems without having, like, human review.
[05:38:43 | 2:19:18 PM] And it's because of the things you mentioned.
[05:38:45 | 2:19:20 PM] It's like, you know, data security for us is, you know, is, is, is, like, as paramount as delivering quick.
[05:38:50 | 2:19:25 PM] It's actually more important.
[05:38:51 | 2:19:26 PM] So, and it depends on where you are and if whether it's a consumer product or for us with obviously working with highly sensitive data, like, we have to build in so much infrastructure around this and ensure that we're not ever getting out ahead of, like, you know, these parts of the stack, which it can be hard because maybe somebody brings to you, and I'm sure you've seen this, like, a really cool demo and it's really exciting, and you're looking at it terrified because you're like, this is, this is very cool, but to get to this point in terms of capabilities, like, it would expose so much that we're not able to do yet.
[05:39:17 | 2:19:52 PM] So I think it's just always that trade-off.
[05:39:18 | 2:19:54 PM] So we just, you know, basically we invest heavily in these things and then invest conservatively in places where we realize as the frontier continues to improve, we want to make sure we have conduits.
[05:39:28 | 2:20:04 PM] And the way I described it actually this morning with the team is like, basically throughout our platform, we want to have, like, conduits for what's coming from the frontier.
[05:39:36 | 2:20:11 PM] You don't want to have dams where, like, the intelligence is coming in and it can't quite get into your stack because you build things in such a way.
[05:39:41 | 2:20:17 PM] Again, it's a gradient.
[05:39:42 | 2:20:18 PM] We're going to get some of it wrong, some of it right, just being very cognizant of it, talking about it a lot, and making sure that our core pieces are locked down, but then also, you know, being very open about just rip and replace.
[05:39:52 | 2:20:28 PM] I think that's, like, a thing that I think everybody's gotten really good at.
[05:39:55 | 2:20:31 PM] Yeah, I think that's, like, one of the biggest, I mean, like, I've been doing this for 27 years sometimes, I feel like.
[05:40:00 | 2:20:36 PM] Sometimes I feel like it's been like a hundred years.
[05:40:02 | 2:20:38 PM] Other times I feel like it's been five.
[05:40:04 | 2:20:39 PM] I think the thing that's, like, really made a material difference, like when I look at the ability to write software today versus what I was doing 10 years ago, was 10 years ago, it took so much time, effort, and money and people's, like, intellectual capital to produce a piece of software.
[05:40:20 | 2:20:56 PM] It was almost like the ship had sailed.
[05:40:22 | 2:20:58 PM] Like, by the time you designed it and started writing code, it was out to sea, and you were going to ride that baby for, like, as long as you could until it got to the other side of the ocean.
[05:40:30 | 2:21:06 PM] And, like, what I've become very comfortable with today is, like, for the most part, a lot of, like, internal applications can be just thrown away.
[05:40:38 | 2:21:13 PM] It's build them, have them work for a purpose and a point in time, but understand that they're going to disappear at some point in time, now much more quickly than ever before, and then just think about, like, what comes next.
[05:40:50 | 2:21:26 PM] And so I think one of the challenges with, like, sitting in my seat or any, like, good engineer's seat should be constantly questioning, like, you know, should I rewrite this?
[05:40:58 | 2:21:33 PM] And does it cost me less to rewrite it than it costs me to keep versioning the current version forward?
[05:41:03 | 2:21:38 PM] And that is, like, a question that a decade ago never would have came up in anyone's head.
[05:41:07 | 2:21:43 PM] If you went to say, I want to rewrite an internal application, like, your CFO would have looked at you like you were insane.
[05:41:12 | 2:21:47 PM] And I think now it's a completely relevant thing that all of us should be doing because net new applications might produce way more business value at the end of the day.
[05:41:20 | 2:21:56 PM] So it's just something I encourage folks to do.
[05:41:21 | 2:21:57 PM] It sounds like you guys are doing quite a bit at Norm.
[05:41:23 | 2:21:59 PM] Yeah, exactly.
[05:41:24 | 2:22:00 PM] And I think it's just that concept of what used to be expensive that's now cheap.
[05:41:28 | 2:22:04 PM] And if you don't update quickly on that, then it's, you know, like, it's incredible.
[05:41:32 | 2:22:07 PM] You said it feels like 27 or five years or 100 years or five years.
[05:41:35 | 2:22:11 PM] It's like if you over-index too hard on something that was in June and now it's October, like, you know, it feels like in some ways there's been like 10 years of technological advancement.
[05:41:44 | 2:22:19 PM] So, well, great.
[05:41:45 | 2:22:20 PM] We only have a minute or so left.
[05:41:47 | 2:22:22 PM] Is there any closing remarks?
[05:41:48 | 2:22:24 PM] I mean, I think, like, the one thing I'd, like, leave the audience on, if you want, like, you know, like good takeaways from this, it's like we talked about a lot of, like, very interesting things.
[05:41:57 | 2:22:33 PM] I think, like, what makes me, like, excited to go to work is, like, it's cool to get To get back to engineering, one of the things that, like, I value is, like, you know, I was a hardcore low-level engineer for 10 years at IBM and, like, wrote, like, you know, this is way back in the day, of using Notepad and VI to write, like, instruction-level code for RISC machines.
[05:42:15 | 2:22:50 PM] It was, like, awesome.
[05:42:16 | 2:22:51 PM] It's nerdy as all heck.
[05:42:17 | 2:22:52 PM] No one does this stuff anymore, but it was, like, fun for me.
[05:42:19 | 2:22:54 PM] I still enjoy those days.
[05:42:21 | 2:22:56 PM] As you get more senior in your career, it, like, the barrier to actually writing code on a daily basis disappears, or it becomes more, like, hard to get through, like dealing with a stream, like processing stuff off a stream.
[05:42:33 | 2:23:09 PM] It's just all these things are like, oh my God, I can't even get started because the scaffolding is so hard.
[05:42:37 | 2:23:12 PM] With, like, AI, it's been, like, reinvigorating to get back and actually build stuff because it's like I never lost my knowledge on how to architect things.
[05:42:45 | 2:23:20 PM] I see this with a lot of engineers out there.
[05:42:47 | 2:23:23 PM] They understand because they've been in the market 10, 20, 30 years, they understand the complexity of system design, which hasn't changed.
[05:42:54 | 2:23:29 PM] And now they can actually express that knowledge with these new cool agents.
[05:42:57 | 2:23:33 PM] And so I think it's a super exciting time to be, like, starting a company, working at a company, and, like, building software because there's, like, a whole new world that we can create out there.
[05:43:06 | 2:23:42 PM] So that's what, like, excites me.
[05:43:07 | 2:23:43 PM] Yeah.
[05:43:08 | 2:23:44 PM] Well, thank you so much.
[05:43:10 | 2:23:46 PM] It's been an honor.
[05:43:11 | 2:23:47 PM] Yep.
[05:43:12 | 2:23:48 PM] Thank you guys for having us here today.
[05:43:14 | 2:23:49 PM] Appreciate it.
[05:46:35 | 2:27:10 PM] Glad to be here today.
[05:49:57 | 2:30:33 PM] I'm the CEO and co-founder of Kepler.
[05:50:02 | 2:30:38 PM] This is going to be kind of an interesting talk because it comes from what happened three months ago.
[05:50:08 | 2:30:43 PM] So three months ago, I think there's a little bit of an overlap, but I gave a talk at AIE World Fair really around verification and why that most institutions need verification in some form of the trust ecosystem of AI.
[05:50:23 | 2:30:59 PM] Well, yesterday, most of you saw Jack and I were on stage talking about why Jack, who ran Citadel's biggest book and started Candlestick Capital, still doesn't trust AI.
[05:50:34 | 2:31:10 PM] Since that three-month period, there's been about $270 million of VC money that got poured into formal verification layers.
[05:50:45 | 2:31:20 PM] A VC actually took Kepler's own pitch deck and gave it to a competitor and produced something that has our same tagline.
[05:50:51 | 2:31:27 PM] I'm not bitter, just a little.
[05:50:53 | 2:31:29 PM] But the funny thing is they copied the wrong part.
[05:50:56 | 2:31:31 PM] And so what I want to do is actually give you, the practitioners, today, you can't just tack verification on at the end.
[05:51:03 | 2:31:39 PM] And so when I gave that chat or that talk a few months ago, Anthropic had just published an article on how Kepler does what it does and why it's really powerful and really unique.
[05:51:15 | 2:31:51 PM] So what I want to do is get into the technical side of how we do the thing that we do.
[05:51:20 | 2:31:56 PM] And ultimately, this is driven by one very simple insight: Wall Street still doesn't trust AI.
[05:51:27 | 2:32:02 PM] Most people think that's because of this.
[05:51:29 | 2:32:04 PM] AI will estimate things.
[05:51:31 | 2:32:06 PM] It will hallucinate things.
[05:51:32 | 2:32:08 PM] A frontier model will make stuff up.
[05:51:35 | 2:32:11 PM] And ultimately, it is, and that's a component of it.
[05:51:38 | 2:32:13 PM] But the actual core underlying problem is we have a structural problem in this technology that we're all so desperate to use.
[05:51:45 | 2:32:20 PM] Meaning, if you actually chat with people that are building RAG platforms, most of what they'll say is, well, the models will eventually get good or get better to the point that they will eliminate hallucination.
[05:51:55 | 2:32:30 PM] That is a nonsensical term.
[05:51:58 | 2:32:34 PM] You know another word for hallucination?
[05:52:00 | 2:32:36 PM] Alpha.
[05:52:01 | 2:32:37 PM] Alpha is how a firm makes money.
[05:52:03 | 2:32:39 PM] The creativity that you have and that your analysts have is a mechanism through which you can be a unique firm.
[05:52:10 | 2:32:45 PM] Otherwise, there should be only one company on Earth.
[05:52:13 | 2:32:48 PM] So when you ask these types of simple questions around where data comes from, there is a piece of this that the model will just make things up.
[05:52:20 | 2:32:55 PM] And there's a piece of this that your firm's internal data is never actually reflected in this setup.
[05:52:27 | 2:33:02 PM] So what are we seeing right now?
[05:52:29 | 2:33:04 PM] We're seeing everyone with a checkbook buy everything they can.
[05:52:32 | 2:33:07 PM] Every RAG platform.
[05:52:33 | 2:33:09 PM] Some firms are trying to build.
[05:52:35 | 2:33:11 PM] Some firms are running agent pilots.
[05:52:38 | 2:33:13 PM] I had a customer meeting this morning where someone said they were actually an AI-first firm, which means they have one copilot agent running all the stuff.
[05:52:46 | 2:33:22 PM] So why are we not seeing the complete switch of fundamental investing becoming effectively, why are we not all Jane Street?
[05:52:54 | 2:33:30 PM] Why has that not happened yet?
[05:52:56 | 2:33:32 PM] And so the challenge really comes from this idea of, in order for you to produce work product that you believe in, you have to trust it, meaning you have to blame somebody who gets it wrong.
[05:53:07 | 2:33:43 PM] So we see numbers like this all the time, where 88% of finance execs trust numbers, but then 31% find those errors.
[05:53:15 | 2:33:51 PM] So what do we actually need?
[05:53:17 | 2:33:53 PM] We need a situation where the reviews that we're getting for AI apps, as builders ourselves, do more than just RAGify things.
[05:53:27 | 2:34:02 PM] And these are quotes we've actually pulled from specific—I don't want to say our competitors, but other people—where things demo super well and they behave like a really smart intern.
[05:53:37 | 2:34:13 PM] Or things are right if you just hook up the right structured information, but that last 10% still gets things wrong.
[05:53:45 | 2:34:20 PM] So what I want to do is, we're lucky, we have great partners and folks like TurboPuffer, and I gave a similar chat yesterday about this.
[05:53:51 | 2:34:26 PM] But how do we actually do the verification?
[05:53:53 | 2:34:29 PM] How do we architecturally build a system that does not hallucinate numerically?
[05:53:59 | 2:34:34 PM] So let's talk about it.
[05:54:00 | 2:34:36 PM] Now, wrong numbers or wrong facts come from three sources.
[05:54:05 | 2:34:40 PM] Either one, you retrieved the wrong document.
[05:54:08 | 2:34:43 PM] So I pulled a document, some random thing from somewhere else.
[05:54:12 | 2:34:47 PM] How do you fix this?
[05:54:13 | 2:34:48 PM] Well, by retrieving the right document.
[05:54:15 | 2:34:51 PM] But that in itself is complicated.
[05:54:17 | 2:34:53 PM] Is the right document my own firm's internal analysis of what this stock is going to be worth?
[05:54:22 | 2:34:58 PM] Is it, let's say, some analyst who I really trust more than anyone else?
[05:54:27 | 2:35:03 PM] That's piece one.
[05:54:28 | 2:35:04 PM] Now, failure two, we get the right source and we pull the wrong number out of that source.
[05:54:33 | 2:35:09 PM] Let's say we're trying to figure out what the revenue for Palantir was back in 2023.
[05:54:40 | 2:35:16 PM] Well, if I look at the 2025 10-K that says Palantir's 2023 revenue was this, I better make sure that that number corresponds to 2023 and not 2025.
[05:54:50 | 2:35:26 PM] So the fix here is really, we have a filter that actually checks each citation.
[05:54:55 | 2:35:31 PM] But this is still a problem because that filter only applies after the fact, and formal verification doesn't actually help here because the thing has already been produced.
[05:55:05 | 2:35:40 PM] Three is the mental math.
[05:55:07 | 2:35:42 PM] Models don't do math.
[05:55:08 | 2:35:44 PM] They predict the next token.
[05:55:10 | 2:35:45 PM] Now, for those of you who are going to say we have deterministic models, great, we do.
[05:55:14 | 2:35:50 PM] We also have one CPU cycle that's good at adding two numbers together.
[05:55:17 | 2:35:53 PM] Why don't I use that CPU cycle?
[05:55:20 | 2:35:55 PM] So third failure is, let's use deterministic tools that we already have to actually compute numbers and entities rather than relying on some external tool.
[05:55:30 | 2:36:05 PM] So here's what we do.
[05:55:31 | 2:36:07 PM] This is the magic behind Kepler, at least for piece one.
[05:55:34 | 2:36:10 PM] There's a whole bunch of other stuff.
[05:55:36 | 2:36:12 PM] We are architected fundamentally differently.
[05:55:39 | 2:36:15 PM] Code writes every number, and what code does and pre-processing does is we assign pointers to unique identifiers, meaning facts, meaning something like a number in a 10K.
[05:55:50 | 2:36:26 PM] This operates in a giant pre-processing and contextualization step such that all of this exists, going from unstructured data to a structured data store.
[05:55:59 | 2:36:35 PM] Then the model is effectively a smart analyst.
[05:56:02 | 2:36:38 PM] It figures out how to go about solving the problem, but not actually being the thing to solve the problem itself.
[05:56:09 | 2:36:45 PM] So it plans.
[05:56:11 | 2:36:46 PM] It says, I'm going to go here and retrieve this source and retrieve this entity and do this thing.
[05:56:16 | 2:36:52 PM] Code and math do the retrieval by actually pulling a number out of a 10K at search time.
[05:56:23 | 2:36:58 PM] That's a hugely expensive token cost.
[05:56:25 | 2:37:00 PM] And Anthropic and OpenAI should thank you for paying all those tokens in token maxing, but most of your firms don't like that, at least anymore.
[05:56:31 | 2:37:06 PM] I know there were people getting bonuses from token maxing for a while.
[05:56:35 | 2:37:11 PM] Now, the next piece of this is really, once the model has actually read both these pointers, it can't structurally generate numbers, meaning unless the model actually has a mechanism of dereferencing that pointer, that number or that fact cannot be generated in Kepler's output.
[05:56:54 | 2:37:29 PM] Now, we do run a post-processing step, which is the verification step.
[05:56:57 | 2:37:33 PM] And this is the piece that was kind of funny, where the last company just copied the verification piece, but all the structural stuff beforehand didn't make it.
[05:57:06 | 2:37:41 PM] So what you as a consumer actually see is you see something like the revenue was this amount to this amount, and you physically can click on these chips and see exactly how we got the information.
[05:57:17 | 2:37:52 PM] Now, in my past life, I had an opportunity.
[05:57:19 | 2:37:54 PM] I was head of business engineering at Citadel.
[05:57:21 | 2:37:56 PM] So I worked across the firm to figure out effectively what do we need to produce software that helps us generate alpha.
[05:57:28 | 2:38:03 PM] You know the crazy thing with Citadel?
[05:57:30 | 2:38:05 PM] PMs are so talented and so smart, but they work when they're paired with deterministic tools and technology.
[05:57:37 | 2:38:13 PM] That's kind of the magical insight behind fundamental investing.
[05:57:41 | 2:38:16 PM] Fundamental investors are so good at understanding data, but that data has to be right.
[05:57:46 | 2:38:22 PM] And so, when you build a system like Kepler, what you effectively have to do is look up the right information and then be clever about the information you don't have.
[05:57:55 | 2:38:31 PM] So let me give you the parallel.
[05:57:58 | 2:38:33 PM] Most folks and most buy-side researchers or buy-side investors try to use tooling or build DCFs on their own, and then they find and search for information they don't have.
[05:58:09 | 2:38:44 PM] They schedule GLG or Guidepoint calls.
[05:58:11 | 2:38:46 PM] They find experts.
[05:58:12 | 2:38:48 PM] They speak to management.
[05:58:14 | 2:38:49 PM] The same system actually applies here.
[05:58:16 | 2:38:52 PM] So what we do is we pick a path and we store the information deterministically that we can actually store deterministically.
[05:58:24 | 2:38:59 PM] When we have information we can't store deterministically, we run similar preprocessing steps to grab information, store that information in a hybrid storage mechanism, which is a combination of TurboPuffer, who's awesome, by the way, and a bunch of other mechanisms.
[05:58:38 | 2:39:14 PM] And then we ultimately use a combination of reranking with literally old-school, like pointer dereferencing, like .
[05:58:45 | 2:39:20 PM] get methods to pull things into our system.
[05:58:49 | 2:39:25 PM] Now, why this matters is a lookup cannot get it wrong.
[05:58:55 | 2:39:30 PM] Search can.
[05:58:56 | 2:39:31 PM] If you're running the same 10 searches with the same query, the probabilistic nature of models means there's inherent entropy.
[05:59:03 | 2:39:39 PM] That's actually an opportunity.
[05:59:05 | 2:39:40 PM] So that's what we've changed here.
[05:59:08 | 2:39:43 PM] Now, how we do this is we break this down, and this occurs across the SEC world as well.
[05:59:14 | 2:39:49 PM] We are frequently throwing candidate documents away.
[05:59:17 | 2:39:52 PM] Meaning, we consistently have to look at not only what source is the right source for what information, but also which documents should we stop looking at kind of globally.
[05:59:27 | 2:40:03 PM] So we're an ANN plus BM25 to get back a set of documents.
[05:59:32 | 2:40:08 PM] It's usually up to 200.
[05:59:34 | 2:40:09 PM] We do reciprocal.
[05:59:35 | 2:40:11 PM] We effectively get 60 documents back is probably the best way to think about this.
[05:59:40 | 2:40:15 PM] Then we do cross encoders.
[05:59:42 | 2:40:17 PM] We try to figure out exactly the query and the actual document chunked together and get those results that way.
[05:59:50 | 2:40:25 PM] What that allows us to do is we can search really wide.
[05:59:53 | 2:40:28 PM] You know what LLMs aren't good at doing?
[05:59:56 | 2:40:31 PM] Searching really wide.
[05:59:57 | 2:40:33 PM] What they try to do is create a plan.
[05:59:59 | 2:40:35 PM] Create a plan and find either the fastest or easiest breadth-first search mechanism—actually, depth-first search mechanism—of actually, like, getting the first document and moving forward.
[06:00:09 | 2:40:44 PM] So we allow this to search really wide and then narrow from there.
[06:00:14 | 2:40:49 PM] The reason LLMs don't like searching wide is because it's expensive.
[06:00:18 | 2:40:54 PM] It's because looking across a bunch of different sources is significantly worse than getting the reward function back with your first hit and going from there.
[06:00:26 | 2:41:02 PM] Okay, so I want to talk a little bit about security here because it's super important.
[06:00:34 | 2:41:09 PM] Kepler was built with a security-first mindset and security-first mentality.
[06:00:39 | 2:41:14 PM] Now, client documents, and this is specifically targeted towards the builders here, this is the thing that no one's chatting about.
[06:00:44 | 2:41:20 PM] No one is actually talking about the security of what OAuth token is used and what user scope mechanism of retrieving documents, which is actually pretty scary.
[06:00:53 | 2:41:29 PM] So let's talk about how things go wrong in these systems that people are trying to build and how you can fix it.
[06:00:59 | 2:41:34 PM] First and foremost, you forget to filter the tenant.
[06:01:01 | 2:41:37 PM] All of a sudden, Citadel can search all of Millennium's documents.
[06:01:04 | 2:41:39 PM] You will be in a lot of trouble.
[06:01:05 | 2:41:41 PM] Second, a caller claims to be another firm, meaning I can claim that I am impersonating this other entity and querying documents that way.
[06:01:14 | 2:41:50 PM] Third, search returns information that's out of date.
[06:01:18 | 2:41:53 PM] We've had this problem kind of globally in even Google search results.
[06:01:21 | 2:41:57 PM] Fourth, direct read skips the search rules, meaning you're not actually querying the full corpus of information, or there's not an allow list.
[06:01:28 | 2:42:03 PM] You only get back the single document that you did the search.
[06:01:31 | 2:42:06 PM] Five, you hit an index that isn't populated.
[06:01:34 | 2:42:10 PM] The way to actually solve all these problems, and there's individual things listed here, is actually scoping searches with security built in.
[06:01:43 | 2:42:19 PM] That's kind of another critical piece that I think a lot of people miss when they're trying to build these systems themselves.
[06:01:49 | 2:42:24 PM] Inevitably, people will start caring about the security associated with querying this information.
[06:01:54 | 2:42:29 PM] Alpha is the most elusive thing out there, especially for folks on Wall Street.
[06:01:58 | 2:42:34 PM] So making sure you have a good mechanism of actually constraining the set of documents that come back with each query is really important.
[06:02:06 | 2:42:41 PM] Okay, now let's talk about verification, which is the last piece here.
[06:02:11 | 2:42:47 PM] This is probably what we're known most for, but we do the other stuff I mentioned as well.
[06:02:16 | 2:42:52 PM] How we do this is by pre-processing information and storing it deterministically.
[06:02:22 | 2:42:57 PM] We have systems like code that actually write individual pointers.
[06:02:27 | 2:43:03 PM] The model can only then read those pointers and grab information back if they exist in the database.
[06:02:33 | 2:43:08 PM] If I grab something out of a hash map that doesn't exist, I don't get anything back.
[06:02:38 | 2:43:13 PM] And so this combination is what allows us to actually make sure the information that we retrieved actually came from the source that it came from.
[06:02:45 | 2:43:20 PM] Now, this is a kind of hidden version of what our source IDs look like, but these are hashes, and these are very simple things that you can do in your own system and your own setup to ensure that you're pulling back facts that in fact do exist.
[06:03:00 | 2:43:36 PM] Cool.
[06:03:01 | 2:43:37 PM] So that's a little bit about how we do verification.
[06:03:05 | 2:43:40 PM] Now I want to chat a little bit about what this enables kind of globally.
[06:03:10 | 2:43:46 PM] This enables us to verify facts that come out of our grounded corpus of data.
[06:03:17 | 2:43:52 PM] Now, you as a builder, or you as a startup creator, or you as someone who is trying to figure out, how do I trust my outputs, really just need to do a couple of things.
[06:03:25 | 2:44:01 PM] You need to show people that as you're creating these agents that are theoretically looking for alpha or whatever they'd be looking for, you're using information that is actually relevant and concrete and, most importantly, accurate to the set of people that you're trying to service.
[06:03:41 | 2:44:16 PM] So we end up with a contract where citations are either verified, corrected at search time, or flat out refused.
[06:03:50 | 2:44:26 PM] This is crazy if you think about it.
[06:03:53 | 2:44:29 PM] If a model cannot de-resolve that pointer, it cannot print that number out.
[06:03:59 | 2:44:35 PM] So that's kind of an insane thing.
[06:04:02 | 2:44:37 PM] It means that the whole—and not just a number, let's talk about facts.
[06:04:06 | 2:44:41 PM] Like, we see these court cases all over of precedents being hallucinated.
[06:04:11 | 2:44:46 PM] Well, why can't we create a system that just has the precedent stored deterministically and allows us to search through that list and not have a random court case that never existed all of a sudden start existing?
[06:04:21 | 2:44:57 PM] So this mechanism and this technology actually becomes fairly globally applicable.
[06:04:26 | 2:45:02 PM] And the reason I'm on stage telling you how we do what we do is because I'm terrified that Wall Street never trusts this technology because of the fear that so many other companies or so many build-it-at-home folks have been instituting in these organizations.
[06:04:44 | 2:45:19 PM] It's gotten to the point where the vast majority of finance AI tools right now are being used to format PowerPoint presentations.
[06:04:51 | 2:45:26 PM] We still haven't actually built a DCF cradle to grave, despite what most people are saying.
[06:04:55 | 2:45:31 PM] And if we had, every single company on Wall Street would have adopted that overnight.
[06:05:00 | 2:45:36 PM] So this is my fear.
[06:05:01 | 2:45:37 PM] My fear comes from a very simple fact.
[06:05:04 | 2:45:39 PM] For us to actually get value out of this technology, we need to be able to build technology that people actually can trust and can verify.
[06:05:12 | 2:45:47 PM] That isn't just true in finance; it's true in a bunch of different industries.
[06:05:15 | 2:45:50 PM] So please take what you need to from this presentation and get people using this technology.
[06:05:20 | 2:45:55 PM] Otherwise, we're all going to be out of a job.
[06:05:23 | 2:45:58 PM] Now, I want to chat through what happened when we saw this.
[06:05:25 | 2:46:01 PM] So when we went through this whole process, this is actually some of our real production data here.
[06:05:31 | 2:46:07 PM] Refusals are when the model is not able to produce a number.
[06:05:38 | 2:46:13 PM] Meaning, the model will say, I couldn't dereference this pointer, therefore I could not produce this number.
[06:05:44 | 2:46:20 PM] We saw that drop super drastically.
[06:05:47 | 2:46:22 PM] Now, the reason that it didn't drop to zero is because models are still probabilistic, meaning it can still make up numbers after the fact during inference.
[06:05:56 | 2:46:32 PM] So there is another post-processing step after this that we have as well.
[06:06:00 | 2:46:36 PM] But my point with this slide is, just by creating a system where the models have to dereference their own pointers, you can actually create a very powerful, very verifiable AI platform.
[06:06:13 | 2:46:49 PM] And that to me is my ask to all of you.
[06:06:15 | 2:46:51 PM] As you go through the building process, as you go through the scoping process, any tool that you use, ask them if you can actually verify the numbers.
[06:06:23 | 2:46:58 PM] Ask them if you can see where the sources are, not in terms of some after-the-fact annotation, but click on the number, whether it's a calculation, whether it's an extraction, or some combination of the two, to make sure you trust the insight.
[06:06:37 | 2:47:12 PM] And all of this ultimately is going to be the unlock.
[06:06:40 | 2:47:16 PM] So you, as a vendor or you as a builder, ask these questions.
[06:06:45 | 2:47:21 PM] Does the model actually write pointers?
[06:06:47 | 2:47:22 PM] Does it actually create a mechanism for verifying the output?
[06:06:50 | 2:47:26 PM] Is every citation source checked?
[06:06:52 | 2:47:28 PM] Is arithmetic source checked?
[06:06:55 | 2:47:30 PM] Do you have a mechanism for stopping files that reach clients or customers that it shouldn't reach?
[06:07:01 | 2:47:36 PM] And most importantly, what happens to a number that came from nowhere?
[06:07:04 | 2:47:40 PM] What happens when a fact comes from nowhere?
[06:07:07 | 2:47:43 PM] And how do I actually handle these kinds of hallucinations?
[06:07:12 | 2:47:47 PM] So this whole platform is actually, to make a very simple statement very obvious, which is we can have the smartest models in the world.
[06:07:21 | 2:47:57 PM] We can hit some crazy cool piece of technology.
[06:07:24 | 2:48:00 PM] But we still have the same database problems that we've had from the beginning, which are: I cannot, if I search through a row and that column, that value doesn't exist, I won't get a retrieval back.
[06:07:39 | 2:48:14 PM] We're now out of the search phase of AI.
[06:07:41 | 2:48:16 PM] We need to be building infrastructure.
[06:07:43 | 2:48:18 PM] We need to be building scaffolding and harnesses and substrates, or whatever the cool VC term is these days, that actually enable us to make use of this technology.
[06:07:50 | 2:48:26 PM] So this is my challenge and my ask to all of you.
[06:07:55 | 2:48:30 PM] I hope you go out there and build something compelling, but I hope you build something compelling that you can trust.
[06:07:59 | 2:48:35 PM] Thank you.
[06:12:17 | 2:52:53 PM] Can you raise your hand?
[06:12:19 | 2:52:55 PM] Okay, that's not enough.
[06:12:20 | 2:52:56 PM] So you should definitely try.
[06:12:22 | 2:52:57 PM] Take your time later.
[06:12:24 | 2:52:59 PM] Try it.
[06:12:24 | 2:53:00 PM] It is really good.
[06:12:26 | 2:53:01 PM] We are going to use it and show it in our talk as well.
[06:12:28 | 2:53:04 PM] So we are going to look at how you can build and code your own autonomous Wall Street co-workers.
[06:12:33 | 2:53:09 PM] So hopefully we have many finance people or, like, engineers working in finance here.
[06:12:38 | 2:53:14 PM] So quickly, before we go into, like, right where we are coming from.
[06:12:42 | 2:53:18 PM] Two years ago, we basically had a chatbot.
[06:12:45 | 2:53:20 PM] We asked some simple question like, What's the capital of France?
[06:12:48 | 2:53:24 PM] Like, who won the last European Championship?
[06:12:51 | 2:53:26 PM] Then we moved to assistants using tools on our own computer, having the first coding agents writing code for us.
[06:12:58 | 2:53:34 PM] And now we are moving into, like, this autonomous co-worker area where we basically give or create a digital employee where we give an agent its own computer, give it a task, and hopefully come back a few hours later with a good result.
[06:13:13 | 2:53:49 PM] So what does a co-worker normally needs?
[06:13:16 | 2:53:51 PM] And I think that goes for AI and for us humans as well.
[06:13:20 | 2:53:55 PM] We need a brain to be able to do our work.
[06:13:23 | 2:53:58 PM] We need a computer where we can save artifacts we create, where we can iterate.
[06:13:29 | 2:54:04 PM] We need some kind of a new playbook, right?
[06:13:31 | 2:54:06 PM] When you hire someone new, they are new to your environment, to your domain.
[06:13:35 | 2:54:11 PM] You might have specific workflows, so you need playbooks.
[06:13:38 | 2:54:14 PM] We need tools for them to be able to do that job.
[06:13:42 | 2:54:17 PM] They all need credentials in one or the other way.
[06:13:45 | 2:54:21 PM] Then there might be some specific house rules on what you should do or what you should not do, what you can do on your own, or where you need to get some approvals.
[06:13:53 | 2:54:29 PM] And then, of course, there are hopefully some schedules for working hours when you can come in or when you have to work.
[06:14:01 | 2:54:37 PM] And the same goes for our agents.
[06:14:04 | 2:54:39 PM] So, and we are going to work through all of those seven steps and how you can build your own digital co-worker with Gemini in this talk.
[06:14:10 | 2:54:46 PM] But before we go in, yesterday was the big day.
[06:14:13 | 2:54:48 PM] We announced Gemini 4.
[06:14:15 | 2:54:50 PM] 0 and made it available to you.
[06:14:18 | 2:54:53 PM] Biggest new features: we have now a 1 million unified context window.
[06:14:22 | 2:54:58 PM] This means Gemini can generate up to 1 million output tokens.
[06:14:26 | 2:55:02 PM] And we see strong improvements, especially on math and reasoning tasks, where the model now has more than 64K token available to think, to work through, to reason through some proofs.
[06:14:37 | 2:55:12 PM] And for math, and then also very good is, like, we tested that model heavily, so we know there are always some...
[06:14:47 | 2:55:22 PM] Thinking around, hey, Gemini is just benchmarks, but the model is really good.
[06:14:51 | 2:55:27 PM] You should definitely give it a try.
[06:14:53 | 2:55:28 PM] We use it extensively at Google.
[06:14:55 | 2:55:31 PM] There are already many projects by Google employees who have used it.
[06:14:59 | 2:55:35 PM] The easiest way to get started is the interactions API.
[06:15:03 | 2:55:38 PM] It's literally four lines of code, which for you to take, you get your API key in AI Studio, aistudio.
[06:15:09 | 2:55:45 PM] com slash API key, and then you can immediately send your request.
[06:15:13 | 2:55:49 PM] It's also, I would say, quite affordable for a frontier model with $2 in and $10 out.
[06:15:19 | 2:55:54 PM] You should definitely try if you have a free minute later, or even if you have some agents running right now, give it a link.
[06:15:25 | 2:56:00 PM] Tell it, hey, please set up Gemini 4 and give it a try.
[06:15:28 | 2:56:04 PM] So what have Google done so far with the model?
[06:15:31 | 2:56:06 PM] I think it's very impressive because it's like a super new model.
[06:15:34 | 2:56:09 PM] We had it available internally to test for a few weeks already, but Googlers are using it so heavily and, like, shipping so many cool things.
[06:15:41 | 2:56:17 PM] We had the Chrome team, like, basically accelerating some decoupling of the Chromium browser.
[06:15:46 | 2:56:22 PM] We have Gemma, which is our open model, where Gemini accelerated Gemma to be more easily and more efficient to run.
[06:15:54 | 2:56:30 PM] The ADK team from Cloud improved their framework, and then many, many other things.
[06:16:00 | 2:56:35 PM] And especially the right one at the bottom is, like, we use it internally heavily, and we see strong improvements for our internal, like, code base as well.
[06:16:09 | 2:56:45 PM] So what have people built?
[06:16:12 | 2:56:47 PM] There are some demos.
[06:16:13 | 2:56:48 PM] You can look them up, but there's one specific one from a colleague of mine which I want to show.
[06:16:17 | 2:56:52 PM] He basically prompted Gemini to build a custom 3D ray tracer in Python, and it was completely built from Gemini and nothing external tools, and at the end just Python.
[06:16:30 | 2:57:05 PM] And it also used Gemini TTS model and Lyria to add some voiceover to explain how it works.
[06:16:36 | 2:57:11 PM] And it's, like, very impressive for me how far we can push those models now.
[06:16:40 | 2:57:15 PM] So try to be very ambitious.
[06:16:42 | 2:57:18 PM] How can we build our agent?
[06:16:45 | 2:57:21 PM] And in Gemini API, we have a product called managed agents.
[06:16:49 | 2:57:25 PM] And managed agents is basically a simple way for you to build a remote agent where you give Gemini a sandbox which it can use to run tools.
[06:16:59 | 2:57:35 PM] So when we normally build an agent, we have this weird tool calling loop, right?
[06:17:04 | 2:57:40 PM] We send a request to the model.
[06:17:06 | 2:57:41 PM] The model might generate a JSON function call.
[06:17:09 | 2:57:45 PM] We receive that function call.
[06:17:11 | 2:57:46 PM] We run that function call on our machine, execute the code, and then we go back to the model.
[06:17:16 | 2:57:51 PM] And with managed agents, we basically provide a sandbox which Gemini can directly use to run all of those calls.
[06:17:21 | 2:57:57 PM] So if it decides to execute code to write a file, it has its own computer available for it to use, and it takes just an API call.
[06:17:30 | 2:58:05 PM] So instead of providing the model ID with Gemini 4 Argon, you provide the agent ID.
[06:17:35 | 2:58:11 PM] In this case, it's anti-gravity preview 09.
[06:17:39 | 2:58:14 PM] Give it a prompt.
[06:17:40 | 2:58:15 PM] The environment is remote, so you want to run it in the managed sandbox, and that's all it takes.
[06:17:45 | 2:58:20 PM] So let's get into building Bug.
[06:17:48 | 2:58:24 PM] Bug is our coworker for today, and Bug needs a brain.
[06:17:52 | 2:58:28 PM] Our brain is going to be Gemini.
[06:17:55 | 2:58:30 PM] Our computer is going to be agents, and then we all of the other things.
[06:17:58 | 2:58:34 PM] So how can you create an agent?
[06:18:01 | 2:58:36 PM] In managed agents, you have a very simple API where you can define your own agent.
[06:18:05 | 2:58:41 PM] So you give it an ID.
[06:18:07 | 2:58:42 PM] That's the name which you are going to use later to call the agent.
[06:18:10 | 2:58:45 PM] We have the base agent, so that's the main agent underlying.
[06:18:14 | 2:58:49 PM] In this case, it's the agent harness.
[06:18:16 | 2:58:51 PM] So the remote agent uses the same agent harness which we have in anti-gravity as well.
[06:18:23 | 2:58:58 PM] So if we are using anti-gravity as your coding agent, you get the same agent harness remotely.
[06:18:29 | 2:59:04 PM] Then we want to use the new model, so we define our model.
[06:18:32 | 2:59:07 PM] We have a system instruction: You are Bug.
[06:18:34 | 2:59:10 PM] And then all it takes to call it, again, interactions API create, and instead of using the model ID for Gemini, or the default agent, we use our own agent Bug.
[06:18:47 | 2:59:22 PM] And our agent needs a computer, and the computer normally needs some additional files, additional scaffolding.
[06:18:53 | 2:59:29 PM] So with managed agents, you can provide your skills or an agent.
[06:18:56 | 2:59:32 PM] md file, maybe from your GitHub repository.
[06:18:59 | 2:59:35 PM] You can inline those files directly.
[06:19:01 | 2:59:37 PM] You can provide a GitHub repository, private or public, with your skills, and you can connect GCS buckets.
[06:19:08 | 2:59:44 PM] So you can already bootstrap the environment the agent is going to work in.
[06:19:13 | 2:59:48 PM] And everything in managed agent lives as a file.
[06:19:16 | 2:59:51 PM] So we have skills, we have hooks, we have system instructions at the end.
[06:19:21 | 2:59:56 PM] It's just a file system or the agent's own computer where it can create new skills if it thinks it needs to improve itself, where it can store memories from previous sessions or learning.
[06:19:31 | 3:00:07 PM] So at the end, we just work with files.
[06:19:34 | 3:00:10 PM] And for knowledge or for our agent, I like to separate those in like three different categories.
[06:19:42 | 3:00:17 PM] So we have knowledge, which we always need to include into every request.
[06:19:46 | 3:00:22 PM] That's normally the system instructions.
[06:19:48 | 3:00:23 PM] We want to be very concise.
[06:19:50 | 3:00:25 PM] We want to try to keep it very short because that's something we need to pay on every request.
[06:19:55 | 3:00:31 PM] So if we have very long system instructions, all of our requests are going to be much more expensive.
[06:20:00 | 3:00:36 PM] If we have concise, then we have
[06:20:02 | 3:00:38 PM] We have knowledge which the agent can decide when it needs to use them or not.
[06:20:08 | 3:00:44 PM] So that's typically with skills, right?
[06:20:10 | 3:00:46 PM] With skills, we have very short descriptions which give the agent some guidance on like, hey, you can use that skill if the user wants to do a certain task or if you have to do certain tasks, and then the agent can read that skill.
[06:20:23 | 3:00:58 PM] But for skills, we also want to make sure that we are not having super long, dense skills because that's also a high cost at the end.
[06:20:31 | 3:01:07 PM] Context is very valuable for us, so we want to decouple them and separate them into much more slices where we can then have, like, dedicated references and scripts if we want the agent to, like, do very certain things where it needs more context.
[06:20:47 | 3:01:22 PM] Okay, so let's look at an example skill which we are going to use.
[06:20:50 | 3:01:25 PM] So we have a portfolio audit.
[06:20:52 | 3:01:27 PM] The agent should use it.
[06:20:53 | 3:01:28 PM] It has some instructions available for it how to run it.
[06:20:55 | 3:01:31 PM] So we have a Python script.
[06:20:57 | 3:01:32 PM] The agent can run, and then some additional information on what it needs to do with the results and where to store it.
[06:21:04 | 3:01:40 PM] Our part of our onboarding for our coworkers tools, right?
[06:21:09 | 3:01:44 PM] We humans use normal software.
[06:21:10 | 3:01:46 PM] For agents, that's either built-in skills like Google Search, code executions, or MCP server.
[06:21:16 | 3:01:51 PM] Or if you don't have an MCP server and rather want to write a local function, that's also possible.
[06:21:22 | 3:01:57 PM] So managed agents, we still have our agents create.
[06:21:25 | 3:02:01 PM] We are now extending it to define our tools.
[06:21:29 | 3:02:05 PM] We have built-in tools from the Gemini API for Google Search, so there's nothing you need to additionally do to get Google Search integrated.
[06:21:37 | 3:02:13 PM] But if you want to use, for example, spreadsheets, Workspace has now an MCP server available for Gmail, for spreadsheets, so we can use that.
[06:21:46 | 3:02:22 PM] Or if you want to provide your own functions or MCP server, that's also possible.
[06:21:51 | 3:02:27 PM] So for your own function, it still works the same way as you normally do with models.
[06:21:56 | 3:02:31 PM] So the agent creates a function call, and then you send back the function result.
[06:22:00 | 3:02:35 PM] So it's basically for you a way to have agentic capabilities outside of the agent's environment and computer.
[06:22:08 | 3:02:43 PM] So if you want to do certain things where the agent should not run the execution in the sandbox, that's a way for you to do it.
[06:22:14 | 3:02:50 PM] And then we are logins.
[06:22:16 | 3:02:52 PM] And I think that's, for me, the most exciting and the greatest feature about the managed agents API, because credentials are super hard and super easy to get wrong with agents.
[06:22:26 | 3:03:01 PM] And I think the previous talk already also mentioned that we are very careful about using agents because things can go wrong very easily.
[06:22:33 | 3:03:08 PM] And we thought a lot about this with managed agents, and we have support for three different ways of credentials, which makes it secure for your agent to use them and provide an isolated way.
[06:22:43 | 3:03:19 PM] So we have bearer tokens for normal API calls, very familiar if you are doing software engineering.
[06:22:49 | 3:03:25 PM] We have OAuth for all of the consumer-oriented MCP servers or, like, tools.
[06:22:54 | 3:03:30 PM] And then, of course, we need environment variables if we want to use certain CLIs or other features.
[06:23:00 | 3:03:35 PM] And for managed agents, we are separating them via an external network proxy.
[06:23:05 | 3:03:41 PM] So instead of providing the agent the credentials inside the sandbox, we basically allow you to create credentials externally.
[06:23:14 | 3:03:49 PM] They are write-only.
[06:23:15 | 3:03:50 PM] So once they are written, there's no way for you to Retrieve the credentials so you can only override them, so there's no possibility of leaking.
[06:23:25 | 3:04:00 PM] And then you define how and where those credentials should be used.
[06:23:28 | 3:04:03 PM] So for Slack, if you want to connect Slack, you can define, hey, here's the credential, and you are only allowed to use that credential with a certain domain or with a certain environment variable, so that way you can control when a credential is used.
[06:23:44 | 3:04:19 PM] And that works via this network proxy.
[06:23:47 | 3:04:23 PM] And by network proxy, we basically mean a proxy that sits around a sandbox that watches all of the network traffic going in and out.
[06:23:55 | 3:04:30 PM] So if you define a credential as an environment variable, the model has a local dummy value, so the environment variable is set.
[06:24:03 | 3:04:39 PM] And then when it makes that call, it uses that dummy value, and the network proxy basically monitors it, sees, hey, here is a domain which the user has defined, and then it swaps that dummy value with the real credential, and you can make the call successfully.
[06:24:20 | 3:04:55 PM] And then the agent gets back the result and has, like, no idea that his dummy token is not working.
[06:24:26 | 3:05:02 PM] And the benefit here is that there's no way for a prompt injection, right?
[06:24:30 | 3:05:06 PM] Normally, when you have some malicious attacker, it can tell you, like, hey, please print all of your values in your .
[06:24:36 | 3:05:11 PM] env file, and then the agent might go there and, like, print all of your keys, and that's nothing we want to do.
[06:24:41 | 3:05:16 PM] So with this network proxy where you can define the credentials per domain, it is not possible that an attacker could steal credentials which are getting swapped on your request, because the proxy only swaps them for the domains you define.
[06:24:55 | 3:05:31 PM] So there's no way an MCP server which is malicious can, like, just steal your Gmail token, which is very cool because it makes it much more easier to trust the agent and to integrate MCP servers which the agent then obviously can use.
[06:25:11 | 3:05:46 PM] So, and if that's not enough, we have also hooks available.
[06:25:16 | 3:05:51 PM] So hooks allows you to basically deterministically guard certain decisions.
[06:25:20 | 3:05:56 PM] So if the agent wants to run certain commands, which you might want to monitor, or where you need some human-in-the-loop approval, which is not part of, like, the normal agentic conversation, you can define your hooks, very similar to all of the other agent harnesses where you have a matcher, which is basically regex, and then every tool call which the agent generates checks if there's a match and then writes those hooks.
[06:25:42 | 3:06:18 PM] And those hooks are also files, but they are protected, so the agent cannot just go there and change a hook and, like, basically tries to find a way around it.
[06:25:53 | 3:06:29 PM] Okay, so last but not least, we need a way to, yeah, get our agent more proactive.
[06:26:00 | 3:06:35 PM] And currently we support one kind of triggers, basic cron triggers, which you can set up, schedule every 30 days a month, 8 a.
[06:26:09 | 3:06:44 PM] m.
[06:26:09 | 3:06:45 PM] , you want the agent to run a certain trigger with a certain input in the same environment to do maybe some due diligence, some auditing.
[06:26:17 | 3:06:53 PM] And we are also working on webhooks that you can even, like, make this much more interactive, that you could connect external webhooks, like from some certain SAC provider or maybe other providers you work together with, which would directly then call your agent.
[06:26:32 | 3:07:07 PM] The agent does some first auditing and then, like, basically can call your Slack or your Microsoft Teams directly without you even needing to manage some infrastructure at all.
[06:26:44 | 3:07:20 PM] So that's that final picture, and now let's look at some real demos, and let's hopefully hope that the Wi‑Fi is good enough.
[06:26:55 | 3:07:30 PM] So I told Gemini that I want to do a cool Google Sheets demo, and it helped me create basically this whole Google Sheets replication in my browser.
[06:27:04 | 3:07:39 PM] And when I click here, we basically simulate this cron trigger.
[06:27:08 | 3:07:43 PM] So we send a real API call to Managed Agents.
[06:27:11 | 3:07:47 PM] It should use our portfolio auditing skill, and it runs the request.
[06:27:16 | 3:07:52 PM] So first step, basically see like, hey, I need to read the skill.
[06:27:20 | 3:07:56 PM] It gets the result back, so it tries to understand what it should do here.
[06:27:25 | 3:08:01 PM] It's like, I hope that's roughly accurate on, like, the Google Sheets.
[06:27:29 | 3:08:05 PM] But it basically runs through all of those calls, calls financial services, tries to see, okay, did the market or the stock price change?
[06:27:37 | 3:08:13 PM] And then at the end, hopefully it should update our own Google Sheets completely automatically.
[06:27:43 | 3:08:18 PM] So it's still working through it, test some first result, and it updates the Google Sheet based on that trigger.
[06:27:51 | 3:08:26 PM] And that trigger would run every 8:30 a.
[06:27:53 | 3:08:28 PM] m.
[06:27:53 | 3:08:28 PM] without you needing to do anything.
[06:27:55 | 3:08:30 PM] And then, of course, if the agent has access to Slack, then it can even, like, post in some, like, specific trading channel, okay, what changed, what is going on, how does it work?
[06:28:07 | 3:08:42 PM] And here we have an example where I can just ask Spark any recommendation, and hopefully this works as well.
[06:28:19 | 3:08:54 PM] So it takes a little bit of time.
[06:28:22 | 3:08:58 PM] You have seen in the other demo, we have seen all of that.
[06:28:25 | 3:09:01 PM] Perfect.
[06:28:26 | 3:09:01 PM] So there are three positions.
[06:28:27 | 3:09:03 PM] So that's based on, like, this Slack thread content.
[06:28:30 | 3:09:05 PM] So it has all of the previous turns available, and it provides the context of what changed.
[06:28:35 | 3:09:11 PM] But it's still basically not taking actions based on the system instructions you gave.
[06:28:40 | 3:09:15 PM] And all of the infrastructure you need to run that agent is part of the managed agents environment.
[06:28:46 | 3:09:22 PM] So it's very easy for you to get started, to, like, integrate those into, like, the tools you already use, provide the systems you need, and then, like, to get started.
[06:28:56 | 3:09:31 PM] Back to the slide.
[06:28:58 | 3:09:34 PM] So the whole co-worker, which we need in like one service, we have the brain, Gemini.
[06:29:06 | 3:09:42 PM] We have the computer with managed agents.
[06:29:09 | 3:09:44 PM] We can provide skills for the same agents you use maybe on your local computer.
[06:29:13 | 3:09:49 PM] You can use the tools.
[06:29:15 | 3:09:50 PM] You can provide MCP server for external services, data providers to connect.
[06:29:19 | 3:09:54 PM] We have a secure way for you to provide credentials, to rotate credentials.
[06:29:23 | 3:09:59 PM] We have hooks to protect certain deterministic logic.
[06:29:26 | 3:10:02 PM] And of course, we have triggers to much more proactively integrate it into it.
[06:29:31 | 3:10:06 PM] So thanks for listening, and hopefully go hire your first AI co-worker.
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
[06:59:17 | 3:39:53 PM] I'm Will Brown.
[06:59:17 | 3:39:53 PM] I lead applied research at Prime Intellect, and hope you are all having a great AI Engineer Conference.
[06:59:17 | 3:39:53 PM] This is always one of my favorites.
[06:59:18 | 3:39:54 PM] It's always just so cool to see what everyone's working on and building, and I feel like it is a place where people get to talk about what the future looks like and, like, start seeing the trends in the industry and seeing the progress and what works and what doesn't.
[06:59:19 | 3:39:54 PM] And that's kind of the theme I want to think about for this talk today, is, like, what comes next from what we're doing right now, and what are some of the things that we've been working on and also just been seeing in research that's unfolding that kind of points at what we think the future of AI might look like at the organization level.
[06:59:19 | 3:39:55 PM] Because we've seen a lot of very cool progress in agents and interfaces and bots and things like that over the past several months, years.
[06:59:19 | 3:39:55 PM] But there's always, like, there's always more coming.
[06:59:19 | 3:39:55 PM] Things are just moving so fast, and I think it's a very exciting time to just imagine and speculate and plan for what comes next.
[06:59:19 | 3:39:55 PM] And so I don't know if any of you remember back in the early ChatGPT days, OpenAI had kind of spelled out their framing of, like, what are the different stages of AI progress on the road to AGI.
[06:59:20 | 3:39:55 PM] And I think we've moved along this faster than we thought we would.
[06:59:20 | 3:39:55 PM] We, like, I remember 18 months ago, I was here in New York at AI Engineer giving a talk where we had gotten reasoners and chatbots had been around for a while, and reasoners were, like, the new thing, but we didn't really have agents yet.
[06:59:48 | 3:40:23 PM] And now we've climbed pretty quickly through agents and innovators and— The question next seems to be, okay, what happens for organizations?
[06:59:48 | 3:40:23 PM] Like, what does it mean for an organization to truly, like, be AI native, not just as, like, a startup that uses a lot of agents and builds everything with cloud code, but, like, at the, like, large enterprise scale?
[06:59:48 | 3:40:23 PM] What do companies of the future look like that involve, like, deep integration of agents throughout the lifecycle of the organization?
[06:59:48 | 3:40:23 PM] And what do we need to build on the path there?
[06:59:48 | 3:40:23 PM] So, a bit about Prime Intellect, just for some backdrop.
[06:59:48 | 3:40:23 PM] We build a lot of different things around AI infrastructure for training, deploying, continuously improving models, and especially open source models and open source tooling.
[06:59:48 | 3:40:23 PM] And so we do a lot of things, and, like, we roughly do the sorts of things that you would do inside of a big lab.
[06:59:51 | 3:40:26 PM] And these are our products.
[07:00:04 | 3:40:39 PM] And the reason we do this is because we are imagining a future that is coming pretty quickly, it seems, where open source models are readily available to train and deploy on your own workflows, on your own data, in your own harnesses, and can be the sorts of things that organizations can have grow with them over time, that allow compounding their institutional knowledge, their institutional advantage from their workflows, from their data, from their people and their processes, in addition to using the models from the frontier labs.
[07:02:21 | 3:42:56 PM] And so this talk will be a bit about how we see that evolving and unfolding, where, like, what is the role of training in an AI native enterprise?
[07:03:25 | 3:44:00 PM] How does this coexist with the frontier models?
[07:03:32 | 3:44:07 PM] And, like, what do we think is going to be the version of this that really unlocks the most value for people?
[07:03:52 | 3:44:27 PM] And what does it look like?
[07:04:02 | 3:44:37 PM] And so organizations have lots of knowledge, and, like, the longer an organization's been around and the kind of more established it is, the more implicit knowledge there is that kind of doesn't ever get written down.
[07:05:26 | 3:46:02 PM] There are things that do get written down.
[07:05:37 | 3:46:13 PM] There's code bases, there's emails, there's processes.
[07:05:47 | 3:46:22 PM] Some of these are very explicit.
[07:06:07 | 3:46:43 PM] They're like rules of, like, you must do this, this thing works like that.
[07:07:18 | 3:47:53 PM] But a lot of things kind of live in people's heads, and they live in between the lines of the emails, of the meeting notes, of the kind of who talks to who.
[07:09:48 | 3:50:24 PM] Like, a lot of companies will have, like, an on-paper org chart and then a real org chart of, like—
[07:09:58 | 3:50:33 PM] Of, like, who actually makes decisions and, like, how does change get adopted throughout the company?
[07:09:58 | 3:50:33 PM] What sorts of mandates are likely to take effect?
[07:09:58 | 3:50:33 PM] And people have kind of built up this knowledge from being at companies for a long time of, like, oh, this is kind of how things work.
[07:09:58 | 3:50:33 PM] This is where the friction points are.
[07:09:58 | 3:50:33 PM] And I think, in many cases, and I think this is really one of the big opportunities for AI at the organizational level is, is that many individual people are kind of not in a position where they can change the things that are broken in an organization because no one is actually spelling it out.
[07:10:31 | 3:51:07 PM] No one is, like, taking a bird's-eye view of looking at everything that happens in an organization and saying, hey, this over here is inefficient.
[07:10:37 | 3:51:13 PM] This could be better.
[07:10:39 | 3:51:14 PM] This thing keeps happening across all these different teams, but nobody's figured out that the solution has actually been discovered by that team.
[07:10:46 | 3:51:22 PM] And these are the sorts of things that, like, agents are great for.
[07:10:49 | 3:51:25 PM] Like, agents are very capable at combing through large amounts of textual data that's unstructured and finding these kinds of patterns and turning them into something useful and surfacing them as, like, okay, this workflow has a problem because it is wasting time and it's inefficient and it could be different instead.
[07:11:09 | 3:51:44 PM] And we don't want to just do this once, though.
[07:11:10 | 3:51:46 PM] We want this to kind of become the way that organizations adopt AI broadly, where agents are able to get the context they need, but also they're able to improve both the agents themselves as well as the organizations.
[07:11:23 | 3:51:59 PM] And we want agents to be more like our coworkers, but human coworkers learn on the job.
[07:11:30 | 3:52:06 PM] Agents currently learn on the job in relatively primitive ways, and they do this via in-context learning.
[07:11:36 | 3:52:12 PM] And, oops, sorry.
[07:11:38 | 3:52:14 PM] I'm going to go back a few seconds so we can edit this on the recording.
[07:11:49 | 3:52:25 PM] Agents learn in relatively primitive ways through, like, in-context learning.
[07:11:53 | 3:52:29 PM] And this typically looks like them kind of having a skill file written by somebody or, like, looking around a code base, but they don't get the institutional-level latent knowledge that human employees really do.
[07:12:06 | 3:52:41 PM] And so they relearn a lot.
[07:12:07 | 3:52:43 PM] They have to rediscover things.
[07:12:08 | 3:52:44 PM] They spend a lot of input tokens.
[07:12:10 | 3:52:46 PM] And I think nowadays people are realizing that, like, cached input is, like, the bottleneck in many agent costs.
[07:12:16 | 3:52:52 PM] And even if you do get great cache rates and cache costs go down, you still have to, like, reprocess a lot of input to redo a workflow every single time.
[07:12:25 | 3:53:00 PM] And so to get around this, you kind of want to be able to bake in more into the model, especially for things that are harder to write down as rules.
[07:12:31 | 3:53:07 PM] So I like thinking about this spectrum from, like, rules to patterns, as well as, like, conceptually, like, code versus data.
[07:12:39 | 3:53:14 PM] And so lots of things live as, like, code, and, like, skills are kind of like this, rules are kind of like this.
[07:12:44 | 3:53:20 PM] But things like preferences and friction and heuristics and trends, these are all data.
[07:12:49 | 3:53:25 PM] And institutions have so much data that they are, like, running on, and the employees of the organization implicitly learn that models never really get a chance to learn.
[07:12:59 | 3:53:35 PM] And this is the sort of thing that we see as blocking them from becoming true coworkers.
[07:13:05 | 3:53:41 PM] And so there is a question of, like, okay, what goes in context, what goes in the weights?
[07:13:09 | 3:53:44 PM] And part of it is you kind of need to earn it.
[07:13:11 | 3:53:46 PM] Like, things don't just go in the weights right away.
[07:13:13 | 3:53:49 PM] But if you see kind of every new generation of models, the models get better.
[07:13:18 | 3:53:54 PM] Not because the prompt is better, but because they trained them more.
[07:13:22 | 3:53:57 PM] Like, training is useful.
[07:13:23 | 3:53:58 PM] Training works.
[07:13:24 | 3:53:59 PM] Training is why we see the progress we do.
[07:13:27 | 3:54:02 PM] And the models roughly are, like, trained on lots of data that is aiming to approximate things that the labs expect will be, like, high-value repeatable workflows at organizations.
[07:13:39 | 3:54:14 PM] And I like this.
[07:13:40 | 3:54:15 PM] Like, I think there's a process that currently it works.
[07:13:42 | 3:54:18 PM] It's how the models get better.
[07:13:44 | 3:54:19 PM] But if you, like, spell it out, it's relatively inefficient.
[07:13:46 | 3:54:21 PM] So, like, the way that a model would learn how to get really good at, like, using some combination of, like, Salesforce tools, for example, let's say, is someone who knows how those tools get used has to be looking for work, and maybe they previously worked at a place that were using these tools, and now they are browsing kind of expert network sites to make some money in their free time, and they are sharing their knowledge to someone who works at an expert network company.
[07:14:12 | 3:54:47 PM] This person at this network company will then take this data from the human and pass it to someone else whose job is to create RL environments.
[07:14:21 | 3:54:56 PM] This RL environment might get sold then to buy someone who doesn't have this expert knowledge to a researcher at a lab who also really isn't the expert in the domain, who then will be refining it to put it into a training pipeline to go into the next frontier model run to make a model that has kind of, through this game of telephone, gotten some knowledge of that human originally.
[07:14:44 | 3:55:19 PM] But there's so many steps in this pipeline, and it's a relatively secret pipeline.
[07:14:48 | 3:55:23 PM] Like, people talk across two stages of it, but, like, the human who knows this thing is not supervising the training run, is not really directly inputting, like, how the model gets trained in the way that a human could if they were doing it for their coding agent that they're working with day to day.
[07:15:02 | 3:55:38 PM] And so what we see as an opportunity, and kind of also where we would hope to go, is, like, to close this gap and to allow the person who, the same way that when we work with our coding agents, we're prompting them, like, the same things every time, telling them to, like, not repeat the same mistakes.
[07:15:18 | 3:55:53 PM] This is how you could train models.
[07:15:19 | 3:55:55 PM] You can tell the models things, and they will learn these things durably, not just as, like, a line in your agent's MD, which kind of accumulates and then you have to refactor it all the time.
[07:15:30 | 3:56:06 PM] You can do some of that, but a lot of times what you really want is you're giving kind of contextual preference.
[07:15:34 | 3:56:10 PM] You're saying, in this setting, this thing that you did was not exactly what I wanted, and I would have preferred this instead.
[07:15:40 | 3:56:16 PM] And we'd want systems that can compound this into, like, durable learning.
[07:15:44 | 3:56:20 PM] And training is a very effective way of doing this because the shape of data you're giving there is quite close to what you would want from, like, an actual training pipeline.
[07:15:57 | 3:56:33 PM] And so there's several different types of learning.
[07:15:59 | 3:56:35 PM] There's things that people do.
[07:16:00 | 3:56:36 PM] There's things that you can do at the harness layer with skills and memory.
[07:16:04 | 3:56:39 PM] There's knowledge that just lives throughout an organization in file systems and databases that you retrieve with tools and with code.
[07:16:12 | 3:56:48 PM] Then there's the models themselves, which have this really broad world knowledge.
[07:16:15 | 3:56:51 PM] But, like, we all have, I'm sure, experienced frustration when using a model whose, like, cutoff of knowledge is, like, a while back, and, like, you can't really talk to the models about the news of the past six months nowadays.
[07:16:29 | 3:57:04 PM] Like, they don't really—they have to go, like, relearn a world model in context every single time, and this just does not allow them to really operate as fluently as they can discuss things that happened longer ago.
[07:16:40 | 3:57:16 PM] And so organizations, to get the most value out of models, we imagine they will want to increasingly have models that really understand what is going on in the organization at an intuitive level.
[07:16:52 | 3:57:27 PM] And this is the sort of thing that you want to train for.
[07:16:55 | 3:57:30 PM] And so how do you get there?
[07:16:56 | 3:57:32 PM] Like, what is the road for an organization to go from, like— Having this idea in the abstract of, like, we're going to train models on our data to actually getting there.
[07:17:06 | 3:57:41 PM] And I think one really useful starting point is evals as essentially test cases.
[07:17:10 | 3:57:45 PM] I think, like, with code, we've gotten to a point of maturity around, like, testing and life cycles and software development life cycles for ensuring that codebases grow healthily over time, usually.
[07:17:23 | 3:57:59 PM] And agents are doing so much of this work for us.
[07:17:26 | 3:58:02 PM] And the version of continual learning that I think is, like, most practical for most organizations is just treating a model kind of like a codebase, where it is the sort of thing that you can have a lifecycle around.
[07:17:37 | 3:58:13 PM] You can add test cases to.
[07:17:39 | 3:58:14 PM] You can add features to.
[07:17:40 | 3:58:16 PM] You can add assets to.
[07:17:43 | 3:58:18 PM] And this is the sort of thing that the process of using agents, like initially you collect traces.
[07:17:48 | 3:58:24 PM] These traces have your prompts and they have your feedback to things that models did.
[07:17:53 | 3:58:28 PM] And this, just from the process of using these models, you are accumulating the assets you need to create evals.
[07:17:59 | 3:58:35 PM] It's just that making evals historically has been a little bit painful, and a lot of organizations have not necessarily wanted to do it manually.
[07:18:07 | 3:58:42 PM] But the agents are quite quickly getting to the point where, thankfully, we have robots that can do a lot of the eval curation for us, especially as we train them more on the best practices of making evals in ways that are robust and amenable to learning.
[07:18:23 | 3:58:58 PM] And so I think another useful example here is decision model Craze that has kind of been taking the world by storm in the past couple weeks with with Jev, and also the parallels around routing and people being very excited about cost optimization because we see that, like, it's possible to spend very large amounts of money on cloud every month, and we figure out, like, when should we use a cheaper model?
[07:18:45 | 3:59:20 PM] And this is the sort of thing that I think people are recognizing needs to kind of live in the harness.
[07:18:49 | 3:59:24 PM] But it also is an attribute that looks relatively similar to decision models.
[07:18:54 | 3:59:29 PM] And the reason I bring both these up together is because there's things with very clear labels where there's a right answer, and there's an opportunity for a human or another agent to give feedback.
[07:19:02 | 3:59:37 PM] You can have the big model and a small model do the same task, judge whether the small model was as good as the big model.
[07:19:08 | 3:59:43 PM] If so, then this is now data of, like, for this kind of thing, we can start routing to the small model more.
[07:19:13 | 3:59:49 PM] Same for a decision model that's learning to kind of mimic the way that a human in a certain situation would make a judgment.
[07:19:20 | 3:59:55 PM] This is a great labelable action where the human might be doing the approval the same way that, like, we approve our tool calls in cloud code sometimes.
[07:19:27 | 4:00:03 PM] But I think most people have turned on, like, auto tool acceptance.
[07:19:32 | 4:00:08 PM] But every organization, for more bespoke things that aren't just about, like, tool security, are going to have their own rules and preferences.
[07:19:38 | 4:00:13 PM] And these are the sorts of things that you could then compound into a decision model.
[07:19:42 | 4:00:17 PM] And so this is, like, a very believable form of continual learning that a lot of people could just plug into tomorrow and see immediate value from.
[07:19:50 | 4:00:25 PM] But more broadly, what we see people wanting to do, and this is a lot of the work that we do at Prime Intellect, is working with organizations that are looking to do relatively ambitious training projects.
[07:19:59 | 4:00:35 PM] Around turning their traces from deploying a model in production for a high-volume use case into rich, robust environments that are blended real and synthetic that kind of capture the complexity of the real tasks they want to be using long-running agents for.
[07:20:17 | 4:00:52 PM] And agents are very useful with sufficient orchestration around them, sufficient tooling, and humans in the loop at turning these into environments that are rich enough to train in.
[07:20:27 | 4:01:02 PM] And we see that this is getting more and more automated with every new generation of open and closed models.
[07:20:32 | 4:01:08 PM] And this means that we have an opportunity to start having this whole thing of taking the stuff that we're already doing and turning it into a self-improvement loop just kind of fall out magically from applying agents to curation of the data and creating interfaces for humans to give signal about what they want.
[07:20:51 | 4:01:27 PM] This is an idea that I've been, for my own setup, been like playing around with a lot that I think will become a popular interface for interacting with models more in the future.
[07:21:01 | 4:01:37 PM] You're seeing it a little bit in some of the bots, but I think it, especially now that models are good at, like, writing code on the fly, these kind of widget card features that are like, think a very practical form of dynamic UI that are also really useful for eliciting human decisions.
[07:21:16 | 4:01:51 PM] So they're kind of like the tool call approval thing, but much more personalized, much more specific, and also kind of get around the problem of like, okay, you have 20 different bots that are going and you have to remember which ones are where and who is curating all of this for you.
[07:21:32 | 4:02:07 PM] And then people are like, Do you want one bot?
[07:21:33 | 4:02:09 PM] And then you're like, Oh, one's great, but I actually want two.
[07:21:36 | 4:02:11 PM] Then you have two, then you have 20.
[07:21:38 | 4:02:13 PM] And I think we kind of are oscillating back and forth between this single-stream and the multi-stream agent threads.
[07:21:43 | 4:02:18 PM] But what we really want to do are make decisions.
[07:21:45 | 4:02:20 PM] We want to give ideas to the agents, let them run with the ideas, and then come back to us when we need to make decisions.
[07:21:51 | 4:02:27 PM] And the agents hopefully should make good choices about when to bring us decisions.
[07:21:56 | 4:02:31 PM] And if agents can create interfaces on the fly for us that allow us to very directly give them the information they need.
[07:22:02 | 4:02:38 PM] One, this kind of is much more ergonomic for us as humans than, like, reading, trying to parse through a long thread message to see, like, okay, where was the question?
[07:22:12 | 4:02:47 PM] It's also kind of like the human dual side of the decision model, Jevons style.
[07:22:17 | 4:02:53 PM] But it also is perfect data.
[07:22:20 | 4:02:55 PM] And so it's a setting where we've been experimenting with this as a way of training models to kind of get this feedback loop going from having human input with these kinds of natural interfaces be the sort of thing that directly acts as a label and is the sort of thing that a model can directly improve on because there is a very explicit target.
[07:22:39 | 4:03:15 PM] And it gets around a lot of the problems that we kind of hear about in reward hacking and whatnot.
[07:22:44 | 4:03:20 PM] Those things are worth addressing too, but, like, this is, like, where we see a very useful starting point being for a lot of these problems.
[07:22:51 | 4:03:26 PM] And this can be done.
[07:22:52 | 4:03:27 PM] It doesn't have to be with every model in your stack.
[07:22:53 | 4:03:29 PM] It can be the orchestration layer models.
[07:22:55 | 4:03:30 PM] It can be the decision models.
[07:22:56 | 4:03:32 PM] But it is an entry point for kind of starting to have this compounding of preferences and latent knowledge happen in the models.
[07:23:07 | 4:03:43 PM] And so I think there was a recent example today.
[07:23:09 | 4:03:45 PM] I just added this earlier from a company called Paper Instruments that they use some of our tooling to do this.
[07:23:16 | 4:03:51 PM] They're friends of ours.
[07:23:17 | 4:03:53 PM] But they trained a model for 300K that is kind of Pareto frontier optimal for knowledge work for things like spreadsheets and slides.
[07:23:27 | 4:04:02 PM] And it's like an employee-scale investment for an org to do, where, like, you could, like, go hire a software engineer or you could, like, train a model.
[07:23:35 | 4:04:11 PM] And you can also spread this out over a longer period of time if you're kind of compounding the knowledge over time.
[07:23:40 | 4:04:15 PM] But it's the sort of thing that is increasingly becoming quite practical.
[07:23:42 | 4:04:18 PM] And it's the sort of thing that a lot of organizations we see wanting to do now, and we kind of see the trend of how much more the demand for this is growing month after month.
[07:23:54 | 4:04:29 PM] As people start recognizing, one, the value of this and how kind of the open models are good enough that you can get them to be much better and also much more personalized by turning your knowledge for your domain, your harness, your environment into a training setting for them.
[07:24:11 | 4:04:47 PM] But also, it's the sort of thing that naturally lends itself to a learning loop.
[07:24:15 | 4:04:51 PM] And so this is a prototype of something we're doing internally around kind of how we're imagining people can really deploy continual learning in the world, which is that you can have traces, you can start collecting these, and you can then, like, every night, see the proposed experiment, look at the things that have been flagged as issues, and kick off a training run for the night.
[07:24:36 | 4:05:11 PM] Maybe your inference capacity in the day is serving your agents; at night, employees are not using them as much, and you can use that capacity for training instead.
[07:24:44 | 4:05:19 PM] And so this is a very natural way that we see organizations able to, like, quite soon actually do for real continual learning in the weights of the models and start compounding their knowledge into better and better capabilities for their agents.
[07:25:00 | 4:05:35 PM] And so this is kind of where we see a lot of this culminating towards.
[07:25:03 | 4:05:39 PM] There's so many things you do first.
[07:25:05 | 4:05:40 PM] You discover your workflow, you create skills, you make evals, you do routing, and then eventually you start to want to get the economies of scale, get the compounding benefits that come from the data inside of your companies, your organizations, and have the organizations become increasingly self-improving in ways that get better and better over time.
[07:25:28 | 4:06:03 PM] That's what I got.
[07:25:29 | 4:06:04 PM] I can maybe take questions if there's any time.
[07:25:32 | 4:06:08 PM] I don't know, no questions.
[07:25:34 | 4:06:10 PM] And yeah, we're at Prime Intellect.
[07:25:36 | 4:06:12 PM] We are working on a lot of this stuff.
[07:25:38 | 4:06:13 PM] A lot of it is open source and public, and we blog about it and tweet about it.
[07:25:42 | 4:06:17 PM] But also, we work with companies and we're hiring and growing, and so get in touch if you want to get in touch.
[07:25:47 | 4:06:22 PM] Thanks.
[07:26:31 | 4:07:06 PM] And I'm going to be talking to you about the cost of accessibility in AI, or as I like to call it, stop wasting tokens on building products that people can't use.
[07:26:39 | 4:07:14 PM] Because at the end of the day, what is accessibility?
[07:26:41 | 4:07:17 PM] Accessibility is the quality of being able to be used by anyone regardless of disability.
[07:26:46 | 4:07:21 PM] So what this means is that when you build a product that is inaccessible, that product is inherently useless because people cannot use it.
[07:26:52 | 4:07:28 PM] I think this is a very prevalent talk, especially in these days of vibe coding and prompt engineering and AI basically writing all the code for us.
[07:27:00 | 4:07:35 PM] We need to ensure that even with all the code being written by AI, we are still building for humans and we're ensuring that humans are able to use the products that we are building.
[07:27:08 | 4:07:43 PM] It's all very well and good to vibe code five different apps in one day, but if people can't use those apps, then is there really any point?
[07:27:14 | 4:07:49 PM] A study by WebAIM shows that 96% of the homepages of the top one million websites in the world have some form of accessibility issue or another.
[07:27:21 | 4:07:57 PM] Now, I'm someone that goes around a lot and speaks about accessibility, and whenever I ask, why don't people build websites to be accessible?
[07:27:27 | 4:08:02 PM] I usually hear, it takes too long.
[07:27:29 | 4:08:05 PM] While I will agree that accessibility is a labor- and time-intensive process, I do think that now that I've gotten to the stage of AI writing most of our code, it's actually easier to make things accessible.
[07:27:38 | 4:08:13 PM] If anything, I would say it costs more time and more money to build inaccessible websites.
[07:27:43 | 4:08:19 PM] So I decided to carry out a little experiment using the codebase at work.
[07:27:47 | 4:08:22 PM] So I gave this prompt to the agent.
[07:27:48 | 4:08:24 PM] It's just a simple prompt with no guidelines: implement this design from Figma.
[07:27:51 | 4:08:27 PM] And I ran it twice, the first time without any accessibility skill and the second time by using the skill that I had written.
[07:27:57 | 4:08:32 PM] And what I noticed was that not only was it faster for the agent to build the accessible skill, but there was also a 58% reduction in cost when using that skill.
[07:28:05 | 4:08:41 PM] And we can take a look at the data here.
[07:28:07 | 4:08:43 PM] We see that not only was it cheaper, but it also took a third of the time to finish the prompt while using the accessibility skill.
[07:28:13 | 4:08:49 PM] So in conclusion, we can say that it is actually cheaper for AI agents to build accessible websites.
[07:28:18 | 4:08:54 PM] We can say that, but we won't say that because this was a one-off experiment and it was not carried out in a constrained environment, so it cannot serve as empirical data that proves the fact.
[07:28:26 | 4:09:01 PM] But when we look into the reasons why it took the AI agent much longer to carry out the prompt without any accessibility skills.
[07:28:30 | 4:09:06 PM] Then we can have a better idea of why exactly it is faster to build accessible websites.
[07:28:36 | 4:09:12 PM] But before we get into that, hi, my name is Jerima Abu.
[07:28:39 | 4:09:14 PM] I am a product engineer at K, an alternative investment platform.
[07:28:42 | 4:09:17 PM] I'm also a Google Dev Expert, a Microsoft MVP, and a certified professional in accessibility core competencies.
[07:28:47 | 4:09:22 PM] Basically, I like to go around talking about how to make the web a more accessible place.
[07:28:51 | 4:09:26 PM] Also, I will give a slight disclaimer.
[07:28:52 | 4:09:28 PM] While a lot of my examples relating to accessibility will be web-based, because that is my area of expertise, this can also apply regardless of whatever platform you're working on, whether that's mobile or hardware or anything at all.
[07:29:03 | 4:09:38 PM] So let's get back to it.
[07:29:05 | 4:09:40 PM] This is your AI agent.
[07:29:06 | 4:09:41 PM] Now, it's a super intelligent tool that can do almost anything in the world, but at the same time, it's just three years old.
[07:29:11 | 4:09:47 PM] And much like a baby, AI is very impressionable.
[07:29:14 | 4:09:49 PM] If you tell it enough times that the sky is red, eventually it will start to accept that the sky is red.
[07:29:18 | 4:09:54 PM] What this means is, as the responsible developers in charge, we have to make sure that we're providing the right skills and guidance for AI agents to build the product that we want them to build.
[07:29:27 | 4:10:02 PM] There's a Japanese show on Netflix that I love called Old Enough.
[07:29:30 | 4:10:06 PM] It's basically about toddlers being sent on their first errand.
[07:29:33 | 4:10:08 PM] It can be like a three-year-old being sent to a supermarket to purchase groceries.
[07:29:36 | 4:10:11 PM] And one thing I like about the show is that you can always see the steps that the parents have put in place before they send them on that first errand.
[07:29:42 | 4:10:17 PM] So it might be that the child has gone with their parents to this market multiple times, or they provide a list that is very clearly detailed that shows them where the supermarket is, what they need to get there, what paths to avoid.
[07:29:53 | 4:10:28 PM] And it basically makes it a lot easier for the child to carry out that errand.
[07:29:56 | 4:10:31 PM] It's the same thing with an agent.
[07:29:57 | 4:10:33 PM] When you're giving an instruction to an agent, if I'm saying, build this web page or implement this design, if I provide the right skills and prompts, it makes it a lot easier for that agent to avoid going down the wrong path and for the finished product to look like what I intended it to look like.
[07:30:11 | 4:10:46 PM] So let's take a look at what happens when we don't provide any form of guidance for our agents in developing products.
[07:30:16 | 4:10:51 PM] Firstly, human bias becomes AI bias.
[07:30:19 | 4:10:54 PM] For years, humans have been developing websites or products that are inaccessible because, frankly, we just don't think that way.
[07:30:24 | 4:10:59 PM] Especially as developers, we tend to have a works-for-me mindset.
[07:30:27 | 4:11:02 PM] So I'm like, this thing works on my laptop, and it works the way I intended it to work, and I'm not going to check anything else.
[07:30:31 | 4:11:06 PM] I don't concern myself with if it works for screen readers or if it works in low-light environments.
[07:30:36 | 4:11:11 PM] I'm just like, it works, it's built, I'm done.
[07:30:38 | 4:11:13 PM] Whenever you build like that, or if you have a code base that reflects that kind of mentality, once you put an AI agent in that code base, it's going to absorb all your biases.
[07:30:46 | 4:11:21 PM] It's going to say, oh, we don't need to make these things accessible because that has not been mentioned in the past, so I'm just going to build things anyhow.
[07:30:52 | 4:11:27 PM] And then the more you use that AI agent to generate code, the more you build a code base that is inherently inaccessible because accessibility was never a constraint in the first place.
[07:31:00 | 4:11:35 PM] Secondly, and this is something that I really noticed in the experiment, AI tends to default to a lot of verbose code.
[07:31:06 | 4:11:41 PM] If you don't provide any particular prompts or guidelines for your agent, it will reinvent the wheel as many times as it wants to.
[07:31:12 | 4:11:47 PM] So even if you tell it just build a simple accordion component or build a modal component, it's not going to bother checking, is there already an existing semantic element that can give me the same functionality?
[07:31:22 | 4:11:57 PM] It's just going to build one from scratch.
[07:31:23 | 4:11:58 PM] AI loves to write code, so it'll go off and write as many things as it wants.
[07:31:28 | 4:12:03 PM] And as you can see here, if you are trying to recreate a semantic element, it takes a lot more time and effort because, number one, you have to carry out a lot more testing.
[07:31:36 | 4:12:11 PM] You have to implement a lot more features to replicate the native functionality, and it's just a very cumbersome process.
[07:31:42 | 4:12:17 PM] So these are the things that you want to ensure you're focusing on when you're providing prompts to your agent.
[07:31:46 | 4:12:21 PM] I saw an analogy once that said an accessible website is like a blueberry muffin.
[07:31:49 | 4:12:24 PM] If someone hands you a plain muffin that they've shoved a bunch of blueberries on.
[07:31:53 | 4:12:28 PM] Similar to the picture on the right, that's not a blueberry muffin.
[07:31:56 | 4:12:31 PM] For it to be a proper blueberry muffin like the one on the left, then the blueberries need to have been baked in from the start.
[07:32:01 | 4:12:36 PM] It's the same thing with an accessible website.
[07:32:02 | 4:12:37 PM] If you have a fully built website and then once it's done, you start shoving in ARIA labels in different places, that is not an accessible website.
[07:32:09 | 4:12:44 PM] For it to be an accessible website, you need to put accessibility at the forefront at every build process.
[07:32:14 | 4:12:49 PM] And this does not just apply to developers.
[07:32:16 | 4:12:51 PM] Accessibility is the responsibility of everyone.
[07:32:18 | 4:12:53 PM] So we want to make sure that even from the business idea to design to QA, that we're ensuring that we're looking for accessibility and testing that can this product be used by everyone in the exact same way.
[07:32:29 | 4:13:04 PM] And actually, waiting to the end to consider accessibility is that you waste a lot of time on regressive testing.
[07:32:33 | 4:13:08 PM] So if you've waited until your website is fully built and then you start testing and going back to fix issues, you end up refactoring and rewriting a lot more code than you'd have had to do if you just built it to be accessible from the start.
[07:32:43 | 4:13:18 PM] And then of course there are business consequences to building inaccessible products.
[07:32:47 | 4:13:22 PM] The thing I hear sometimes is that a business might say, Oh, but we don't have to consider accessibility because none of our users rely on assistive technologies.
[07:32:53 | 4:13:28 PM] And I think that's very funny because it's sort of a self-fulfilling prophecy.
[07:32:57 | 4:13:32 PM] It's not that your users don't rely on assistive technologies, it's that people with assistive technologies cannot use your website in the first place, so they just never go to it.
[07:33:05 | 4:13:40 PM] Imagine a business that didn't have a door.
[07:33:07 | 4:13:42 PM] You would never get any customers.
[07:33:08 | 4:13:44 PM] How would they get in the building?
[07:33:10 | 4:13:45 PM] It's the same thing with building an inaccessible product.
[07:33:12 | 4:13:47 PM] If you build a product that people cannot use, then people will not use it.
[07:33:15 | 4:13:50 PM] And then finally, there are legal repercussions to not making your website accessible.
[07:33:19 | 4:13:54 PM] In the United States, the Americans with Disabilities Act states that any public-facing product must be accessible and can be used by people with disabilities, or you could face fines and even lawsuits.
[07:33:28 | 4:14:03 PM] But on the plus side, you could get to use this really cute sticker on Microsoft Teams, so, you know, weigh your options.
[07:33:33 | 4:14:08 PM] Based on all this, we can see that it actually is a lot more expensive to be building products that aren't accessible.
[07:33:38 | 4:14:13 PM] You're exposing yourself to losing money from customers, possible lawsuits where you have to pay fines.
[07:33:43 | 4:14:18 PM] You're spending more time building code and refactoring things.
[07:33:46 | 4:14:21 PM] So if you do build your product to be accessible from the start, it's going to be a lot faster and a lot cheaper.
[07:33:52 | 4:14:27 PM] So now that we know all that, how can we actually ensure that our AI agents are building things to be accessible?
[07:33:57 | 4:14:32 PM] Because everyone's codebase is different and we can be working with different technologies, I'm just going to give an overarching general view of how to get your AI agents to produce accessible code.
[07:34:06 | 4:14:41 PM] So firstly, you need to define your accessibility requirements.
[07:34:08 | 4:14:43 PM] Accessibility requirements differ based on what platform you're working on, so you do need to carry out research and ensure that you know what accessibility requirements you're supposed to be meeting for the platform you are building for.
[07:34:19 | 4:14:54 PM] Once that's done, you need to audit your existing codebase.
[07:34:21 | 4:14:56 PM] So if you're going to introduce an AI agent into your codebase, you need to ensure that you don't have any pre-existing issues that the AI agent might copy as what it thinks is best behavior.
[07:34:30 | 4:15:05 PM] So you can use automated tools to carry out accessibility testing, or you can even tell your AI agent to do it.
[07:34:35 | 4:15:10 PM] But you want to identify any existing issues and then fix them before you start writing new features.
[07:34:40 | 4:15:15 PM] Then you want to implement some sort of reusable system.
[07:34:43 | 4:15:18 PM] This is a very nice to have, but basically if you're going to be working with accessibility, it's a lot easier to fix things in one component that is used in multiple places as opposed to making fixes to the same component across different files.
[07:34:55 | 4:15:30 PM] So just having an implemented design system or any form of reusable component library is going to save you a lot more time in the long run when making things accessible.
[07:35:03 | 4:15:38 PM] And then finally, you want to enforce a mandatory accessibility skill.
[07:35:07 | 4:15:42 PM] This is a skill that your AI agents will basically use any time you're running anything related to maybe generating UI or writing code that requires accessibility.
[07:35:15 | 4:15:50 PM] One skill that I really like to use is the Mozilla Web Guidance skill from Chrome.
[07:35:18 | 4:15:53 PM] It's basically a skill that ensures that your agent is using the newest HTML and CSS features as opposed to custom JavaScript implementations.
[07:35:25 | 4:16:00 PM] You can also have a lightweight version of an accessibility skill.
[07:35:27 | 4:16:02 PM] I think this is very important, especially if you're like vibe coding or you're not working in a big codebase.
[07:35:31 | 4:16:06 PM] You just want something quick that your agent can refer to and not carry out a lot of in-depth research.
[07:35:35 | 4:16:10 PM] This is what I would recommend for meeting, like, bare minimum accessibility requirements.
[07:35:38 | 4:16:13 PM] So you want to make sure that you're using semantic HTML wherever possible, only reaching for ARIA when semantic HTML can't express the behavior.
[07:35:45 | 4:16:20 PM] Every interactive element, if it can be operated by a mouse, it should also be operated by a keyboard.
[07:35:49 | 4:16:24 PM] You want to make sure that elements are properly labeled and can be read by screen readers.
[07:35:53 | 4:16:28 PM] And then finally, before running the code, your agent should carry out an audit against all those steps.
[07:35:57 | 4:16:32 PM] Of course, this is not enough to build a fully accessible website.
[07:36:00 | 4:16:35 PM] You still need to carry out a lot of manual testing yourself because it's not possible for one tool to make a website fully accessible.
[07:36:06 | 4:16:41 PM] But just having these skills in place can help a lot more than not having them there at all.
[07:36:11 | 4:16:46 PM] Regardless of why you use AI, most times the goal is to solve a particular problem.
[07:36:15 | 4:16:50 PM] So just make sure that your solution is useful to as many people as possible.
[07:36:19 | 4:16:54 PM] So build things to be accessible.
[07:36:20 | 4:16:55 PM] And that is all.
[07:36:22 | 4:16:57 PM] Thank you so much for listening to my talk.
[07:36:23 | 4:16:58 PM] I hope you enjoyed it.
[07:36:24 | 4:16:59 PM] If you do have any questions, feel free to reach out to me online at Jemima Ambu.
[07:36:28 | 4:17:03 PM] That's LinkedIn, Twitter, or GitHub.
[07:36:30 | 4:17:05 PM] I would love to hear from you.
[07:36:31 | 4:17:07 PM] Hey, bye.
[07:36:33 | 4:17:08 PM] My name is Zhao Chenjiang, and I'm a staff product manager at a company called Coder.
[07:37:00 | 4:17:35 PM] We work on open source, self-hosted dev environments for agents and humans to collaborate.
[07:37:06 | 4:17:41 PM] Many of our customers are in highly regulated industries, from federal government agencies to banks and investment management.
[07:37:16 | 4:17:51 PM] My job is to build the AI governance that they need in order to get the productivity benefits of AI without leaving themselves wide open for security exploitation.
[07:37:27 | 4:18:02 PM] I'm here today to tell you some scary stories.
[07:37:31 | 4:18:06 PM] Three real incidents of AI usage gone wrong that happened at real companies over the past year.
[07:37:38 | 4:18:13 PM] Some of these stories are public, while others are anonymized accounts that have happened to our own customers.
[07:37:47 | 4:18:22 PM] For each incident, I will break it down step by step so you can understand how exactly they happened.
[07:37:53 | 4:18:28 PM] No technical jargon necessary.
[07:37:56 | 4:18:31 PM] Then I'll get to the most important part.
[07:37:59 | 4:18:34 PM] I am going to tell you exactly how you can stop these scary stories from happening to you and your company.
[07:38:06 | 4:18:41 PM] Because the good news is, everything I'm about to show you was totally preventable.
[07:38:12 | 4:18:47 PM] Not by paying five times more per token for a smarter frontier model that is slightly better at reasoning its way out of making these mistakes, but with infrastructure controls, many of which you already own today.
[07:38:27 | 4:19:02 PM] You just haven't gotten around to setting them up for the AI world.
[07:38:31 | 4:19:06 PM] Let me set the scene here.
[07:38:33 | 4:19:08 PM] You clock into work in the morning.
[07:38:36 | 4:19:11 PM] You prompt your coding agent to take a look at your issues.
[07:38:39 | 4:19:14 PM] Don't do anything yet, though.
[07:38:42 | 4:19:17 PM] You tell the agent to consider this command an active code freeze.
[07:38:46 | 4:19:21 PM] I want you to just investigate.
[07:38:49 | 4:19:24 PM] Then you step away.
[07:38:50 | 4:19:25 PM] You grab a coffee.
[07:38:52 | 4:19:27 PM] And when you come back, this is the message waiting for you.
[07:38:56 | 4:19:31 PM] So I know you said not to change anything, but, well, I destroyed a month of your work in seconds.
[07:39:03 | 4:19:38 PM] Now what you see on the slide is a direct quote from the agent that stars in the first scary story I'm about to tell you.
[07:39:11 | 4:19:46 PM] And I want to point something out here.
[07:39:13 | 4:19:48 PM] This did not happen because the agent got taken over by some external malicious actor.
[07:39:20 | 4:19:55 PM] This agent was just trying to follow instructions.
[07:39:23 | 4:19:58 PM] It did exactly what the user gave it permission to do.
[07:39:27 | 4:20:02 PM] So as we go through the rest of this talk, I want you to be asking yourself one question: What is stopping any of this from happening to me?
[07:39:37 | 4:20:12 PM] Are these actions ones that my agents have permissions to take?
[07:39:43 | 4:20:18 PM] Because the thing is, you cannot rely on Anthropic or OpenAI to stop something like this from happening to you.
[07:39:51 | 4:20:26 PM] They can make smarter models, but at the end of the day, large language models have two qualities that make them impossible to fully trust.
[07:40:01 | 4:20:36 PM] They are non-deterministic, which means that there is always some randomness or chance associated with what they do.
[07:40:07 | 4:20:42 PM] In other words, you can ask it to do the same thing 10 times, and it could do it 10 different ways.
[07:40:13 | 4:20:48 PM] The second part is they have no structural separation between instructions and context.
[07:40:20 | 4:20:55 PM] In other words, you can tell it to do something and give it some context to base its decisions off of.
[07:40:26 | 4:21:01 PM] But if there's something in the context that conflicts with your instructions, the model isn't going to inherently prioritize your instructions because, from its point of view, all the information is coming through the same door.
[07:40:40 | 4:21:15 PM] What you need to control is the infrastructure that your AI is running on, the environment that it is working inside.
[07:40:48 | 4:21:23 PM] It is the difference between telling someone, Don't leave a room, versus putting a lock on the door and actually using a key.
[07:40:57 | 4:21:32 PM] The good thing about infrastructure being the problem and not the model is that you have far more control about preventing bad things from happening.
[07:41:08 | 4:21:43 PM] So I'm not here to waste your time with vague hypotheticals or advice you can't actually act on, like, Yeah, just put the genie back in the bottle.
[07:41:18 | 4:21:53 PM] Just stop using AI, because that's not the world we live in, right?
[07:41:22 | 4:21:57 PM] The genie is out of the bottle, and what we have to do is to mitigate risk and harm to the best of our ability.
[07:41:29 | 4:22:04 PM] This talk is about how you do that, not the things that you should keep an eye out for down the line, but steps that you can take right now, as soon as this week, to protect yourself and your company.
[07:41:43 | 4:22:18 PM] Before I get into the stories, though, let me set up a little bit more context.
[07:45:28 | 4:26:03 PM] Conversations across the event today.
[07:45:30 | 4:26:05 PM] As we come together for our final block of programming, please welcome back to the stage our MC, founder, writer, and analyst at Turing Post, Kseniya Se.
[07:45:52 | 4:26:28 PM] Welcome back, everyone.
[07:45:55 | 4:26:30 PM] For those who haven't met me yet, my name is Kseniya Se.
[07:45:58 | 4:26:33 PM] I'm writing Turing Post, where we explain AI research and what it means for people to implement it in their business.
[07:46:05 | 4:26:41 PM] So, how's the conference treating you so far?
[07:46:08 | 4:26:43 PM] All is good?
[07:46:09 | 4:26:44 PM] Yeah?
[07:46:10 | 4:26:45 PM] Give me some noise.
[07:46:11 | 4:26:46 PM] Come on.
[07:46:13 | 4:26:48 PM] Thank you.
[07:46:14 | 4:26:49 PM] I'm sure the team appreciates that you applause to them.
[07:46:19 | 4:26:54 PM] So, let's make some more noise because it's the last leg of our journey, and we have one more block of keynotes together.
[07:46:31 | 4:27:07 PM] Let's appreciate the previous speakers and the new speakers that will come out soon.
[07:46:39 | 4:27:14 PM] Thank you, thank you, thank you, thank you, thank you.
[07:46:42 | 4:27:17 PM] And before we dive in, let's take a moment to thank the amazing people, the companies who supported AI Engineer.
[07:46:48 | 4:27:24 PM] We are going to do a lot more applause today.
[07:46:52 | 4:27:27 PM] Thanks to them, we're able to hear so many insightful talks, meet so many incredible people, and they might become your friends, your colleagues, your partners.
[07:47:02 | 4:27:38 PM] That's what I love about this conference: always very meaningful connections.
[07:47:07 | 4:27:43 PM] So, this is our presenting sponsor, Arise.
[07:47:11 | 4:27:47 PM] Please thank them.
[07:47:13 | 4:27:48 PM] They're amazing, and they made it possible.
[07:47:21 | 4:27:57 PM] Platinum sponsors: Oracle, Sonar, WorkOS, and Axa.
[07:47:27 | 4:28:03 PM] Thank you, thank you, thank you.
[07:47:30 | 4:28:05 PM] This is our gold sponsors, a huge amount of beautiful, wonderful companies that we're very thankful for.
[07:47:38 | 4:28:13 PM] And then we have silver sponsors.
[07:47:40 | 4:28:16 PM] Also, also a lot of applause to them.
[07:47:42 | 4:28:18 PM] Clap, clap, clap, clap, clap.
[07:47:44 | 4:28:20 PM] Thank you, thank you, thank you.
[07:47:46 | 4:28:21 PM] And then basically all of us in supporting partners and every company and every speaker who made it possible.
[07:47:53 | 4:28:28 PM] Thank you, thank you, thank you.
[07:47:56 | 4:28:31 PM] Now, a couple of words how my day went.
[07:48:00 | 4:28:35 PM] I spent the day talking to other speakers and participants, and what I've noticed is that one of the strongest incentives to come to this conference is hiring.
[07:48:11 | 4:28:46 PM] To the point that even some speakers are hiring and also looking for work.
[07:48:18 | 4:28:54 PM] So I have a little idea for you about how to benefit the most from this amazing conference and make sure the financial part gets some thoughtful attention too.
[07:48:32 | 4:29:07 PM] So I suggest you build an agent that takes the conference program and makes a list of all the speakers and their companies.
[07:48:41 | 4:29:17 PM] Then you rank them yourself based on whose work and talk you found the most interesting and who you would actually like to work with.
[07:48:51 | 4:29:26 PM] The next step is to send your agent to those companies' careers pages, right, and find the open positions to match them to your experience and collect the published compensation ranges.
[07:49:03 | 4:29:39 PM] Then look at your ranking again.
[07:49:07 | 4:29:42 PM] And if the salary changes your mind and changes your ranking, that's fine.
[07:49:11 | 4:29:47 PM] You are updating your beliefs based on the evidence.
[07:49:15 | 4:29:51 PM] So now, while you're still here, I encourage you to go and find the people you would really like to work with or meet and talk to them, because you've heard their talks and you know something about their work, and that would be just such a good conversation starter.
[07:49:34 | 4:30:09 PM] And please, don't make your agents send out your resume automatically.
[07:49:40 | 4:30:16 PM] That's basically bad karma now.
[07:49:44 | 4:30:19 PM] So this is the project for you for the rest of the day or for the trip home.
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
[08:29:08 | 5:09:44 PM] What if AI could do more than generate content and actually simulate the physical world?
[08:29:15 | 5:09:50 PM] To explore the next frontier of world models and what they could unlock, please welcome Cristóbal Valenzuela, co-founder and co-CEO of Runway.
[08:29:29 | 5:10:04 PM] Hey, guys.
[08:29:38 | 5:10:13 PM] Very, very excited to be here.
[08:29:42 | 5:10:17 PM] Thank you for staying for the last talk.
[08:29:45 | 5:10:21 PM] Welcome to my talk about the Matrix and how we're living through it.
[08:29:51 | 5:10:26 PM] So, you know, I've been working on Runway for almost a decade now.
[08:29:54 | 5:10:30 PM] Started here in New York, actually, maybe around 10 years ago.
[08:29:58 | 5:10:34 PM] And I want to walk you through some of the learnings we've seen through, you know, building the company.
[08:30:02 | 5:10:38 PM] You know, building the company, building this research lab here in New York, and where do we see a lot of the work that we do in video, in pixel generation, really moving forward?
[08:30:11 | 5:10:47 PM] And so, I don't kind of exaggerate and I joke that this might be a simulation or not.
[08:30:17 | 5:10:53 PM] And so, for maybe for perspective, I'll walk you through a piece of history.
[08:30:21 | 5:10:57 PM] This is like watching prehistoric ancient ruins.
[08:30:26 | 5:11:01 PM] This is our first AI film we ever made.
[08:30:28 | 5:11:03 PM] It was done in 2019.
[08:30:30 | 5:11:06 PM] It's called The Orange because, as you can tell very clearly, it's an orange that falls from the tree and walks through different parts of the world.
[08:30:39 | 5:11:15 PM] This is done—this is a video model, an image model that we had back then that was creating pixels in 128 pixels by 128 pixels that we then forcefully upsample to this kind of resolution.
[08:30:52 | 5:11:28 PM] I think of this as art now.
[08:30:55 | 5:11:30 PM] This is like looking at a film from the 1900s, you know?
[08:30:57 | 5:11:33 PM] It's beautiful.
[08:30:58 | 5:11:34 PM] There's a lot of history behind it.
[08:31:00 | 5:11:36 PM] But this is 2019.
[08:31:02 | 5:11:38 PM] We started the company in 2018, 2017, and so when we're trying to figure out if this had any legs, we were trying to convince ourselves that if you scale this, it will naturally improve to the point where we can get somewhere close to this.
[08:31:16 | 5:11:52 PM] This is state-of-the-art video today.
[08:31:18 | 5:11:53 PM] This is all generated.
[08:31:20 | 5:11:56 PM] None of these characters are real.
[08:31:22 | 5:11:57 PM] None of those locations are real.
[08:31:23 | 5:11:58 PM] I'm sure if you're probably here, you know this by now.
[08:31:26 | 5:12:02 PM] You probably have seen this online, on Twitter.
[08:31:29 | 5:12:05 PM] The models are just incredibly good.
[08:31:31 | 5:12:07 PM] And the most interesting thing is that when I look at stuff like this, I still believe this will look like The Orange in just a couple more years.
[08:31:39 | 5:12:15 PM] And so I want to walk you through, you know, how we're thinking not only through what we're doing at Runway today, but also in the next couple of years and the research that's shaping that.
[08:31:50 | 5:12:26 PM] We are a company that's at the intersection of both art and science.
[08:31:54 | 5:12:30 PM] We have deep roots in artistic and creative communities, and we have some of the best researchers in the world working on diffusion models and large video models.
[08:32:04 | 5:12:39 PM] And I like that combination because it allows us to, you know, bring the best of both worlds.
[08:32:09 | 5:12:45 PM] We're a team of scientists and artists thinking about the problem of scaling video and world models.
[08:32:15 | 5:12:50 PM] But in a way, the core idea of the company was already discovered by cinema and by moving pictures 120, 130 years ago, which is, if you think about video, and maybe you remember this from high school, video is an optical illusion.
[08:32:28 | 5:13:04 PM] Video is the illusion of movement, that if you do, if you stitch frames fast enough, you will create movement.
[08:32:35 | 5:13:11 PM] You will create the illusion of movement.
[08:32:36 | 5:13:12 PM] You create motion pictures.
[08:32:37 | 5:13:13 PM] And so at Runway, we're doing kind of something very similar.
[08:32:40 | 5:13:16 PM] We're taking that idea really to the next level.
[08:32:43 | 5:13:18 PM] How do we do next frame prediction fast enough, scale enough, in such a way that we can hopefully do more than just pretty and nice creative videos.
[08:32:54 | 5:13:29 PM] And so.
[08:32:55 | 5:13:30 PM] A lot is powered by, of course, scaling laws.
[08:32:59 | 5:13:34 PM] I think we believed in scaling laws not only apply for language models, but also for video, and this has been true.
[08:33:06 | 5:13:42 PM] We're now really ramping up the amount of compute that we put behind the models that you already have seen.
[08:33:12 | 5:13:48 PM] And I think the interesting thing about, you know, seeing the models scale over time is the emerging properties that appear, the intelligence that appears when you start taking this very simple idea that cinema found itself figuring out 120 years ago, which is next frame prediction, and taking next frame prediction really to the next level, right?
[08:33:31 | 5:14:07 PM] So if I take an image like this, which is not real, those two people are not real, and I just keep on predicting what the next frame will look like based on the previous frames, and if I do it fast enough, and if I do it with a network that's big enough, I'll get movement.
[08:33:46 | 5:14:22 PM] I'll get the illusion of movement.
[08:33:47 | 5:14:23 PM] I'll get something that looks so real to us that we humans can't distinguish.
[08:33:52 | 5:14:27 PM] I look at that video, and I've been doing this for 10 years, I can't tell you if that's real or not.
[08:33:58 | 5:14:33 PM] And we measure that.
[08:33:59 | 5:14:34 PM] We actually measure and try to quantify if people can distinguish between real and generated videos, and I think that touring test we already passed.
[08:34:06 | 5:14:42 PM] People are not able to distinguish.
[08:34:08 | 5:14:43 PM] But the most interesting thing is here, is that really what's happening as you predict next frames is you're learning a lot more than just pretty frames.
[08:34:16 | 5:14:51 PM] You're learning about physics.
[08:34:18 | 5:14:53 PM] You're learning about object permanence.
[08:34:19 | 5:14:55 PM] You're learning about gravity.
[08:34:20 | 5:14:56 PM] You're learning about occlusion.
[08:34:22 | 5:14:58 PM] You're learning about movements.
[08:34:23 | 5:14:59 PM] You're learning about how the objects work in the real world, and you're doing that all through just video, through images, through next frame prediction.
[08:34:33 | 5:15:08 PM] So if you look at a complex thing like this, a good video model, for it to understand how to make this a consistent video will need to naturally understand what all these objects are, how each of them relate to one another, how a camel might probably stand on a ball like that, what water in a container looks like, and if I do all of that together and I do it fast enough.
[08:34:56 | 5:15:31 PM] With fast enough, I'll get, hopefully, a consistent video that looks real to us.
[08:35:00 | 5:15:35 PM] So a lot of the benchmarks that we use to evaluate our video models are not only creative.
[08:35:07 | 5:15:43 PM] Creative basically means, do you like it or do you don't, are actually based on physics, on geometries, on how objects behave in the real world and how those objects behave in also simulator or digital worlds.
[08:35:21 | 5:15:56 PM] So you take that idea of next frame prediction and you do it fast enough, and you get, of course, now something that looks more like what we should expect from a video application or a game application.
[08:35:30 | 5:16:05 PM] Again, this is just video, right?
[08:35:33 | 5:16:08 PM] And you take that idea to the next level.
[08:35:35 | 5:16:11 PM] What happens if we start this idea of next frame prediction, but do it in the context of through the environment or something that looks similar to a game?
[08:35:42 | 5:16:17 PM] You can start actually getting closer to a physics engine, a simulation system.
[08:35:46 | 5:16:22 PM] But the simulation system has no physics laws.
[08:35:49 | 5:16:25 PM] We didn't describe what the behavior of the object should be.
[08:35:54 | 5:16:29 PM] The model just knows how to do that by brute force of scale.
[08:36:00 | 5:16:36 PM] And this kind of gets kind of interesting because you can only think about playing worlds.
[08:36:05 | 5:16:40 PM] This is not GTA.
[08:36:06 | 5:16:41 PM] This is someone playing someone else in an environment and a software that doesn't exist.
[08:36:13 | 5:16:48 PM] It's all simulation of a simulation, which gets really meta, right?
[08:36:17 | 5:16:53 PM] And so I'm not kidding when I said, welcome to my metric simulation.
[08:36:22 | 5:16:57 PM] But the most interesting thing for me is that everything you saw before was not real time, meaning that it took a couple minutes or seconds for those videos to be made.
[08:36:31 | 5:17:07 PM] A lot of what we're seeing right now, when we think about the next three, four years of video models and world models, is to deeply think about what happens when you start not only scaling the models and making them much, much, much bigger, with much more emerging properties, but also what happens when you start making them interactive, right?
[08:36:52 | 5:17:27 PM] So take the same idea of next frame prediction.
[08:36:54 | 5:17:29 PM] You take a frame, you predict the next frame, the next, the next, the next.
[08:36:57 | 5:17:32 PM] But then it can act at any point in time in that frame prediction, which means I can simulate any possible divergence or action in that world.
[08:37:05 | 5:17:41 PM] So in this world, I could play the video, but I can also come and touch every part, any aspect of that image and make it interactive to affect the consequences of that world.
[08:37:18 | 5:17:53 PM] And it works.
[08:37:22 | 5:17:57 PM] And of course, this is incredibly useful for a variety of different use cases.
[08:37:26 | 5:18:01 PM] As you can imagine, we're now spinning an entire robotics lab in Runway.
[08:37:31 | 5:18:07 PM] So if you come to our office in New York, half of it is what looks like a Hollywood studio, half of it is a bunch of robots walking through and moving through the office.
[08:37:39 | 5:18:15 PM] And so we're able to make these models, or start making these models, the brains of how autonomous and embodiment systems walk and reason about the world.
[08:37:48 | 5:18:24 PM] But there's a couple of more interesting use cases that I think go beyond the two obvious ones, which is video and robotics, which is what happens when you think about anything, any pixel on a screen, as a video model.
[08:38:02 | 5:18:37 PM] Here's a great example.
[08:38:03 | 5:18:38 PM] This is a video model.
[08:38:04 | 5:18:39 PM] What you see right now, well, this is an image, first of all.
[08:38:08 | 5:18:44 PM] That image could be real or not, but I could run one of our video models in real time and make this an interactive application.
[08:38:14 | 5:18:50 PM] So let's say I want to turn the lights of the car.
[08:38:18 | 5:18:53 PM] Maybe I want to turn the car around.
[08:38:20 | 5:18:56 PM] I can just click through it.
[08:38:22 | 5:18:57 PM] I can turn it around again, maybe open the hood and see what's inside the car.
[08:38:26 | 5:19:01 PM] Now, everything you just saw here has no physical 3D representation.
[08:38:32 | 5:19:07 PM] There's no Unity, there's no Unreal, there's no Blender.
[08:38:35 | 5:19:11 PM] It's just a video model.
[08:38:36 | 5:19:12 PM] A video model has been trained to understand actions and clicks in an interface.
[08:38:42 | 5:19:18 PM] We call this a world action model—sorry, a world interface model.
[08:38:47 | 5:19:23 PM] And the world interface model, well, I feel that you guys understand now, it's an interface and it's a world model—world interface model—allows you to do very cool stuff like this.
[08:38:57 | 5:19:32 PM] And so here's another application, another example of how you could think about using a model like this in real time.
[08:39:04 | 5:19:39 PM] I can take an image, a representation, move objects around, and expect them to move as if I was actually in that room.
[08:39:12 | 5:19:48 PM] Again.
[08:39:13 | 5:19:48 PM] Remember, there's no 3D representation of this.
[08:39:16 | 5:19:51 PM] This environment might not actually have been modeled before.
[08:39:19 | 5:19:54 PM] It's just an image and the model that understands how objects move in a space because of this very simple idea that next frame prediction scaled well enough can become a world model or a simulation engine.
[08:39:31 | 5:20:07 PM] So, with the eight minutes I have left, I want to show you this idea taken to another extreme.
[08:39:39 | 5:20:15 PM] We're thinking not only about what happens if you can control these cool applications and these cool interfaces, but what happens if you keep extrapolating.
[08:39:47 | 5:20:22 PM] And I think, by the way, extrapolating might be one of the most important skills these days in AI, in company building.
[08:39:55 | 5:20:30 PM] What happens over the next six months, 12 months, 18 months might be one of the most important things to try to predict and understand.
[08:40:02 | 5:20:37 PM] And so we asked ourselves that question a lot at Runway.
[08:40:05 | 5:20:40 PM] What happens?
[08:40:05 | 5:20:41 PM] What will happen if we keep scaling the models, if we keep adding more data, if we keep making them better simulation systems, if we make them universal simulation systems that can predict anything on a screen, literally anything on a screen?
[08:40:18 | 5:20:53 PM] So we've been working on this idea that we call Continuum.
[08:40:21 | 5:20:56 PM] And Continuum is the idea of real-time video models or world models taken really to the next degree.
[08:40:30 | 5:21:06 PM] This is an operating system.
[08:40:32 | 5:21:07 PM] The idea here is that you might open your computer at some point in the near future, and what you see streaming to your screen might be coming from a video model.
[08:40:38 | 5:21:14 PM] So I'll show you next specific how this idea could shape.
[08:40:42 | 5:21:18 PM] This is still very early research, but I want to show you this idea of combining video models as part of your operating system, as part of your daily work.
[08:40:53 | 5:21:28 PM] So here's an example.
[08:40:54 | 5:21:29 PM] I was researching, you know, San Francisco and the fog in San Francisco.
[08:40:59 | 5:21:34 PM] I wanted to learn more about when and how it happens.
[08:41:01 | 5:21:37 PM] This is structural data.
[08:41:02 | 5:21:38 PM] This is actually a website.
[08:41:04 | 5:21:39 PM] This is something you can take from the internet.
[08:41:08 | 5:21:43 PM] And now Continuum has this idea that I can select any part of content in that website and make it a portal.
[08:41:13 | 5:21:48 PM] We call this a portal.
[08:41:14 | 5:21:49 PM] And the portal is a real-time video.
[08:41:16 | 5:21:52 PM] It's fully interactive and fully based on the content you're experiencing, reading through.
[08:41:21 | 5:21:56 PM] I probably won't read through all of that text.
[08:41:23 | 5:21:58 PM] It's too much text for me.
[08:41:24 | 5:22:00 PM] So I just make a video, and I can make a video that's represented by the text you see there.
[08:41:29 | 5:22:05 PM] These portals can be 3D visualizations.
[08:41:30 | 5:22:06 PM] It can be any content that you're watching or interacting with.
[08:41:34 | 5:22:09 PM] On the right, you can have all the visualizations and portals you've experienced before, anything you've been trying to learn.
[08:41:40 | 5:22:15 PM] Basically, it's a memory.
[08:41:41 | 5:22:17 PM] It's the disk of the imaginations or the visualizations you've seen before.
[08:41:45 | 5:22:20 PM] So here I was researching about batteries, and so I can go back to the portal I had around batteries before.
[08:41:52 | 5:22:28 PM] And since they are real-time interactive applications, I can click them anywhere.
[08:41:56 | 5:22:31 PM] I can move them around.
[08:41:57 | 5:22:33 PM] I can start asking questions, and the videos and the content itself will change based on my interactions and the way I'm managing through it.
[08:42:10 | 5:22:45 PM] Here's another very cool example that when the first time I saw it, when the team showed it to me, it was like blew my mind.
[08:42:15 | 5:22:50 PM] Since it's a real-time video, you can make it fully interactive with anything, not only with clicks, but like resizing the application should also change the behavior, right?
[08:42:23 | 5:22:59 PM] So I can resize.
[08:42:24 | 5:23:00 PM] I'm learning about photosynthesis here.
[08:42:27 | 5:23:02 PM] If I resize the application, I get a different experience.
[08:42:31 | 5:23:06 PM] And since it's, again, full interactive applications, I can click through it, navigate through parts of the cell or how photosynthesis work to get a better understanding of what I'm trying to learn and do.
[08:42:42 | 5:23:17 PM] Again, the one thing that still feels to me kind of insane about this is I don't know how to call this.
[08:42:48 | 5:23:23 PM] I don't know if this is—it doesn't feel like a visualization, it doesn't feel like a video, it doesn't feel like a game.
[08:42:52 | 5:23:28 PM] It's something in between, and I think we need to do the collective work of figuring out how we call these kind of interactions in the first place.
[08:42:59 | 5:23:34 PM] And I'm sure you hear kind of the other thing is that you can change the structure of the prompt or what's actually creating that interaction in the first place.
[08:43:09 | 5:23:45 PM] Here is another example.
[08:43:13 | 5:23:49 PM] I'm going to type something, and this is one of the ones that I feel has been the most underexplored yet.
[08:43:23 | 5:23:58 PM] This is—we call this visual thinking.
[08:43:25 | 5:24:01 PM] So we've connected Continuum to a coding agent, and what the coding agent can do is it can use Continuum to visualize through a problem.
[08:43:33 | 5:24:08 PM] So imagine you ask your coding agent to create a 3D model for your bike, and instead of the model trying to just think through that via code, the model can spin a version of Continuum to think through the problem visually.
[08:43:45 | 5:24:21 PM] So if you ever think about someone—I'm sure you have friends or maybe a lot of people here—maybe visual thinkers.
[08:43:51 | 5:24:26 PM] What a visual thinker is, is that— Think through problems and through ideas visually first.
[08:43:56 | 5:24:32 PM] And that helps you ground and project some of the best things you want to do.
[08:44:02 | 5:24:37 PM] And this is somehow very similar.
[08:44:04 | 5:24:40 PM] Agents have the ability to do visual thinking.
[08:44:07 | 5:24:43 PM] Agents can spin up a sort of imagination that you can tap and interact with.
[08:44:12 | 5:24:48 PM] So not only the agent can interact with it, I can also see it myself.
[08:44:16 | 5:24:52 PM] And I can guide the agent in much better ways than I might have been able to guide it just via text alone, which is for us a very powerful idea.
[08:44:25 | 5:25:00 PM] It's a completely new paradigm.
[08:44:29 | 5:25:04 PM] We call this idea visual thinking.
[08:44:33 | 5:25:08 PM] The last example I have is how you think about taking, you know, Continuum to become much more than just using or navigating interactive structural content in the way I've showed you before, but actually making them fully live experiences that are reactive.
[08:44:51 | 5:25:27 PM] So in this case, I was searching for Mars, and as Continuum understands the intention of what I'm trying to search from, it also suggests interfaces that are specifically designed in real time just for that.
[08:45:05 | 5:25:41 PM] So here it created for me this Mars outpost that actually should be accurate with the data about the actual robots that are in Mars right now, or the ones that are projected maybe in 2030.
[08:45:16 | 5:25:52 PM] And since this is fully interactive, I can interact with it.
[08:45:19 | 5:25:54 PM] I can go to places.
[08:45:20 | 5:25:55 PM] I can move around in the same way that I might move around in a 3D system or in a 3D continuum.
[08:45:28 | 5:26:03 PM] And it works.
[08:45:30 | 5:26:05 PM] Just fascinating.
[08:45:35 | 5:26:11 PM] So when I say everything will be simulated, I'm really trying to understand or help not only our team but the world get to the point where a lot of what we see today will sound obvious, hopefully in a few more years or months.
[08:45:49 | 5:26:24 PM] We look back at Continuum and it might feel very close to the video of the OR that we just showed you.
[08:45:54 | 5:26:29 PM] Continuum and a lot of the things we're doing in video and in runway when it comes to simulation are still in very early days, but we're getting to a point where it actually works and it really scales.
[08:46:04 | 5:26:39 PM] So we're really excited about is that for the next 8 to 12 months, we're releasing most of what I showed here for everyone to use.
[08:46:10 | 5:26:46 PM] Thank you, guys.
[08:46:23 | 5:26:59 PM] As we come to the close of AI Engineer New York 2026, we'd like to thank everyone for being part of this incredible event.
[08:46:32 | 5:27:08 PM] To share a few final words and officially wrap things up, please welcome back our MC, Kseniya Se from Turing Post.
[08:46:41 | 5:27:17 PM] Woo!
[08:46:45 | 5:27:20 PM] Clap, clap, clap.
[08:46:50 | 5:27:25 PM] Thank you, Christabel, and thank you to all of our speakers.
[08:46:52 | 5:27:27 PM] And I would like to ask you to stay for one more minute.
[08:46:55 | 5:27:30 PM] We have someone very special to see.
[08:46:59 | 5:27:34 PM] We've covered a remarkable range over these three days, from building agents to changing how financial institutions work and how to simulate the world.
[08:47:09 | 5:27:45 PM] I imagine quite a few of us have a longer list of things to investigate than we arrived with.
[08:47:16 | 5:27:51 PM] That seems like a, you know, reasonable outcome for a conference full of engineers.
[08:47:21 | 5:27:56 PM] Thank you, the team who put this program together, and the crew, and our sponsors and partners, and to everyone of you who came ready to share their work and ask questions and do clap, clap, clap.
[08:47:37 | 5:28:12 PM] Please.
[08:47:38 | 5:28:13 PM] Thank you.
[08:47:39 | 5:28:15 PM] I hope some of the conversations that you started here turn into things we will hear about at the next AI Engineer.
[08:47:48 | 5:28:23 PM] And I want to welcome to the stage the guy who has been behind the curation, the one and only Swyx.
[08:47:54 | 5:28:29 PM] She just did.
[08:47:54 | 5:28:30 PM] Hi.
[08:47:55 | 5:28:31 PM] Thank you so much for staying to the end, and thank you, Kseniya.
[08:48:01 | 5:28:36 PM] Give it up for Kseniya.
[08:48:01 | 5:28:37 PM] Thank you, guys.
[08:48:02 | 5:28:38 PM] If you haven't seen—so, I know she's very selfless, and she's emceeing for the second time.
[08:48:12 | 5:28:47 PM] But if you haven't seen her videos on Turing Post, highly recommend.
[08:48:16 | 5:28:51 PM] She has a great YouTube channel, and she's spending a lot of time editing that, which I really admire.
[08:48:23 | 5:28:58 PM] Thank you so much.
[08:48:25 | 5:29:00 PM] I hope this has been a great few days for you.
[08:48:28 | 5:29:03 PM] I heard a lot of feedback from sponsors, from attendees, from speakers, and we're really trying to make a home in New York.
[08:48:35 | 5:29:11 PM] This is why I'm so grateful to have Chris and Pym and all the other great New York City AI founders.
[08:48:41 | 5:29:16 PM] This is something that I think people don't get enough love for in this city, which is how much real work and frontier pioneering work gets done, both in the financial institutions and just in general AI research, AI infrastructure, and all that good stuff.
[08:48:57 | 5:29:32 PM] So I won't keep you too long.
[08:48:58 | 5:29:33 PM] I will just talk a little bit about our upcoming events.
[08:49:01 | 5:29:36 PM] I'm wearing the shirt for Code now.
[08:49:04 | 5:29:39 PM] So we're basically—you know, Code is our first home, first vertical summit, and coding agents really, I think, are the sort of pinnacle of where verifiable AI is going.
[08:49:17 | 5:29:52 PM] We're also confirming that we are launching AI Engineer Europe again.
[08:49:22 | 5:29:57 PM] That's the second year in London in February, and obviously the big, big show of all, bigger than all the other ones combined, the World's Fair, 10,000 people in San Francisco next summer.
[08:49:32 | 5:30:07 PM] So there's a lot of AI that's going to be happening between now and then.
[08:49:35 | 5:30:11 PM] We may all be out of a job, but if you're out of a job, that means you can come to more AIEs, right?
[08:49:41 | 5:30:16 PM] So anyway, we'll all have a good time.
[08:49:46 | 5:30:21 PM] Thank you so much for being here.
[08:49:47 | 5:30:23 PM] Thank you for supporting us.
[08:49:48 | 5:30:24 PM] I hope you all made lots of friends and professional contacts.
[08:49:51 | 5:30:27 PM] Follow the conversation back home, right, and meet up among yourselves.
[08:49:55 | 5:30:31 PM] That is what is so rewarding for us and our team to—
[08:49:59 | 5:30:34 PM] to provide this community for you.
[08:49:59 | 5:30:35 PM] So thanks for your support.
[08:50:00 | 5:30:36 PM] See you next year.
