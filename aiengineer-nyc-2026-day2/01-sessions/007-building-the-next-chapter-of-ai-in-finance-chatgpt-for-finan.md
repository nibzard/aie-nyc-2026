---
session_id: "007"
title: "Building the Next Chapter of AI in Finance"
agenda_title: "Building the Next Chapter of AI in Finance -- Joseph Kim (OpenAI)"
speakers: ["Joseph Kim"]
start_wall: "9:50:08 AM ET"
end_wall: "10:09:24 AM ET"
video_start: "01:09:32"
video_end: "01:28:48"
video_url: "https://www.youtube.com/watch?v=jiUC6IUMdvc&t=4172s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "keynote"
tags: [chatgpt, financial-services, openai, product-demo, capability-overhang, model-trends, agents]
confidence: "high"
---

# Building the Next Chapter of AI in Finance

> Joseph Kim, head of ChatGPT for financial services at OpenAI, presents the month-old product built with Morgan Stanley and Evercore, frames it as a way to close the "capability overhang", and predicts models will outperform the best human experts on financial judgment tasks by 2027.

## TL;DR
- ChatGPT for financial services launched one month before this talk. It is a tailored version of ChatGPT Work for investment banking and equity research, built with design partners Morgan Stanley and Evercore around financial data, a finance-built interface, and the firm's format.
- The product closes the "capability overhang": the gap between what models can do and the value people get at work. Product experience, not model releases, drove OpenAI's internal inflection, when the February Codex desktop app pushed finance, legal, and recruiting from near-zero to about 90% of AI output in Codex by June 2026.
- The stack is public. The team built the product with the same ChatGPT plugin platform available to US developers: MCP tools and connectors with citation metadata, Skills plus shared artifact tools for Excel and PowerPoint, and native plugin onboarding. Kim predicts multiple $1 billion businesses built as ChatGPT plugins.
- Model progress follows steady trends across three drivers (scaling compute, algorithms, unhobbling). He expects models to outperform leading human experts on a growing range of hard tasks by end of 2027. Each task crosses a "threshold of usefulness", so progress feels sudden even when the trend is steady.
- Three bets for 2027: people will rarely use Excel and PowerPoint to make models or pitch decks; AI financial analysts will feel like human coworkers; models will beat the best humans at forecasting earnings and developing investment ideas.

## Key lessons
1. **Product facts.** ChatGPT for financial services is a tailored version of ChatGPT Work, launched one month before the talk, aimed first at investment banking and equity research. OpenAI built it with design partners Morgan Stanley and Evercore around three areas: financial data, an interface built for finance (source inspection, financial charts, control of sources), and the firm's format (firm-specific templates).
2. **The capability overhang.** The product exists to close the gap between what the model is capable of and the value people actually get. Closing that gap takes the right data, the right tools, and an experience that fits the way people already work. A capable model alone is not enough.
3. **Product experience can outweigh model releases.** Inside OpenAI, finance, legal, and recruiting went from almost no Codex-generated AI output at the start of 2026 to a share around 90% by June. The inflection in February and March traced to the Codex desktop app release, not a new model. The product made existing capability usable outside engineering.
4. **Own the data layer.** Existing MCP connectors for financial data had problems with latency, errors, and search quality. OpenAI licensed the data directly (financial statements, earnings transcripts, market and private company data), built its own hosting and search indexes on the same infrastructure as its web index, and kept MCP as the model's access path. Self-hosting also allows post-training on those datasets.
5. **MCP and skills versus post-training.** MCP and skills are like handing an instruction manual to a junior analyst. Post-training makes the model like a senior analyst who has worked with the data for over two decades and knows its quirks. MCP gives access and instructions; post-training builds familiarity.
6. **The stack is public.** The product was built with the same ChatGPT plugin platform available to US developers: MCP tools and connectors for data, citation metadata in MCP apps for source inspection, MCP apps for interactive financial charts, Skills plus shared artifact tools for Excel models and PowerPoint decks, and native plugin onboarding. Kim expects "multiple $1 billion businesses built simply as ChatGPT plugins".
7. **The threshold phenomenon.** Every task has a threshold of usefulness: the point where a model is reliable enough that review time is smaller than time saved. Below the threshold, capability gains feel like no progress. Above it, adoption feels sudden. Builders should ask which capabilities they underappreciate today, and design the interface, controls, and approvals for the moment those capabilities cross the threshold.
8. **Finance roadmap and three bets.** A "rising tide" of general capability (transfer from math, coding, reasoning) plus "waves" of finance-specific post-training, led by Kim's team, target general financial reasoning, Excel models, and PowerPoint output over the next three months. The goal is to match the best human experts on judgment tasks such as earnings forecasting and investment evaluation sometime in 2027. The next "unhobbling" is persistent agents that hold goals and context and work in the background. Three bets for 2027: Excel and PowerPoint will rarely be used for models and decks; AI financial analysts will feel like coworkers that remember preferences and own assignments; models will outperform the best human experts at forecasting earnings and developing investment ideas.

## Notable quotes
- [01:14:40 | 9:55:16 AM] "We call that gap the capability overhang, the distance between what the model is capable of and the value people can actually get from it."
- [01:15:30 | 9:56:05 AM] "I went back to see what happened around this time, assuming that we must have released a new model, but instead I found that we had released the Codex desktop app in February."
- [01:16:41 | 9:57:16 AM] "The analogy I like to use is MCP and skills are like handing an instruction manual to a junior analyst versus post-training, where the model is like having a senior analyst who's been working with the data for over two decades and knows all of its quirks like the back of their hand."
- [01:19:04 | 9:59:39 AM] "I personally believe that we're going to see multiple $1 billion businesses built simply as ChatGPT plugins, and that opportunity will keep evolving as the models become more capable."

## Session narrative
An unidentified host voiceover opened the slot at 01:09:33 with the agenda's framing question: what does it take to turn advances in AI into meaningful progress for financial services? Joseph Kim took the stage at 01:09:59 and introduced himself as the leader of ChatGPT for financial services, a product OpenAI launched one month earlier. He set a four-part plan for the talk: what they built (with a demo), why they built it, how they built it, and what comes next. He told the builder audience that finance has not yet felt the change that Codex brought to software engineering, and that builders in the room would drive the change over the next few months.

The product is a tailored version of ChatGPT Work for investment banking and equity research, built with design partners Morgan Stanley and Evercore around three areas: financial data, an interface built for finance, and the firm's format. At 01:12:33 he said he would "stop talking for a bit and show you the product", and the transcript holds about 77 seconds of silence while he demoed it live, resuming with "Wonderful." at 01:13:50. The "why" section introduced the capability overhang, the gap between model capability and realized value. His evidence was a chart of Codex usage inside OpenAI: finance, legal, and recruiting went from almost no Codex output at the start of 2026 to about 90% by June, and the February-March inflection traced to the Codex desktop app release rather than a new model.

The "how" section centered on data. Because existing MCP connectors had latency, error, and search-quality problems, OpenAI licensed financial data directly and built its own hosting and search indexes on the same infrastructure as its web index, while keeping MCP as the access protocol so it could also post-train the models on those datasets. He contrasted MCP and skills (an instruction manual for a junior analyst) with post-training (a senior analyst with two decades of familiarity with the data). On the output side, the team built a template system for firm-approved spreadsheets and presentations, interactive financial charts, and citation viewers, because in finance you must check where a number came from. He then revealed that almost all of this ran on the same ChatGPT plugin platform available to US developers, and closed the section with his prediction of multiple $1 billion businesses built as ChatGPT plugins.

The final section looked forward. Model progress has come from three drivers: scaling compute, improving algorithms, and "unhobbling". He cited the predictability of these trends: OpenAI researchers predicted GPT-4's final loss and coding eval performance before training finished, and one study found the compute needed for a given performance level halves roughly every eight months. Past scaling fears, such as the data wall and context length, were solved with synthetic data, verifiable rewards, sparse attention, and compaction; after pre-training scaling trouble, 2026 brought GPT-5, GPT-6 Sol, and GPT-6 Astra (the transcript renders some year numbers oddly, for example "In 2002 and 2003" for the pre-training era and "By 2005" for the International Mathematical Olympiad gold medal). Math shows the trajectory: from 700 of 800 on SAT high school math in 2023 to a disproof of a 1946-era conjecture in early 2026, a proposed Navier-Stokes Millennium Prize solution, and 719 research manuscripts across 372 families of results. He expects models to outperform leading human experts on a growing range of tasks by end of 2027, explained the threshold phenomenon, and urged builders to design for capabilities before they cross the threshold. For finance, he described the rising tide of general capability plus waves of finance-specific post-training, with expert-level judgment tasks as the 2027 goal and persistent agents as the next unhobbling. He closed with three bets for 2027 and one question: what should you start building today to be ready for thresholds the models will cross tomorrow? The talk ended with "Thank you." at 10:09:24 AM ET.

## Speaker details
**Joseph Kim** - Head of ChatGPT for Financial Services, OpenAI. Product Lead for ChatGPT for Financial Services, the finance-industry version of ChatGPT launched in September 2026 and shaped with partners including Morgan Stanley and Evercore. He is a Member of Technical Staff at OpenAI, based in San Francisco, and holds a B.S. in Electrical and Computer Engineering and Computer Science from Carnegie Mellon University. LinkedIn (from the speaker record's sources): https://www.linkedin.com/in/yckimjoseph

Note: an unidentified host voiceover introduces the session at 01:09:33 to 01:09:49 and is not counted as a session speaker.

## Full timestamped transcript
```
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
```
