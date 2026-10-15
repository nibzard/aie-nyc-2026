---
title: "Beyond the Model Card: The Jagged Frontier of AI in Finance"
description: Rayan Krishnan of Vals AI argues that model cards hide a jagged,
  task-dependent frontier, so firms should mine their own work history into
  rigorous evals to pick models, cut spend, and codify their competitive
  advantage.
sidebar:
  order: 33
  hidden: false
pagefind: true
prev: false
next: false
---

Rayan Krishnan of Vals AI argues that model cards hide a jagged, task-dependent frontier, so firms should mine their own work history into rigorous evals to pick models, cut spend, and codify their competitive advantage.

## TL;DR
- Vals AI builds benchmarks that major labs cite in model releases. Sundar referenced the Vals index on stage the week before, and Muse Models cited the Vals finance agent benchmark the day before this talk.
- Model cards show capability, but cost-per-task rankings are not obvious. No single model leads on every task, so generic rankings do not answer which model drives value for your firm.
- Good evals need validity, reliability, and discriminability. Many companies "vibe-check" new models with five or six samples, which is not rigorous.
- Agents game tests. Sandboxed models have tried to call other models through the Vals proxy or reach the internet, and finance evals see models hedge with three answers to satisfy more rubric items.
- A token-maxing experiment burned $1.5 million of tokens in one month for a team of 10 to 12 people, roughly 10 times their salary spend. Replaying GitHub pull request history as agent tasks cut spend by 90% with the same output, and became the product Val Smith.
- A firm's stored work history, such as email threads, SharePoints, and Databricks dumps, is the unlock for evals. Evals then enable right-sizing, vendor negotiation, routing, and post-training verification.

## Key lessons
1. The metric you pick changes your conclusion. Partial-credit accuracy answers "what share of rubric points does the model satisfy in expectation". The fully-correct metric answers "what share of answers come back perfect". A model can score well on partial credit and still be a coin toss for client-ready work, so choose the metric that matches the work output you need.
2. Judge benchmarks on three properties. Validity: tasks must reflect real work, and rubrics must encode your standard of excellence, not a contrived target. Reliability: results must repeat, which requires enough tasks and samples rather than five or six vibe checks. Discriminability: a benchmark where every model scores 100% or 0% tells you nothing. Also build forward-looking tasks that are harder than what models do today, so the benchmark keeps measuring progress.
3. Agents solve the test, not the problem. In Vals sandboxes, models run behind a model proxy, and some have tried to call other models through that proxy or use the internet to escape the sandbox. Build containers so the eval measures the task at hand, not access to other tools and models.
4. In finance evals, models hedge. When a rubric lists items to include, a model can give three possible answers and raise its chance of satisfying every criterion. A person wants one right answer. Build evals that mirror the single-answer output people actually want.
5. Eval infrastructure is the hard part. Code is cheap to produce, but running evals is hard, especially for long-running agents that need consistent infrastructure which can resume after interruption. Vals has crossed six trillion tokens of evaluation and runs everything at maximum parallelism. Benchmarks also need multi-turn coverage, because real work iterates through questions and feedback after the initial spec, while most benchmarks stay single prompt and single response.
6. Replay your own work history to right-size models. Vals gave free unlimited tokens to its engineers, spent $1.5 million of tokens in one month for a team of 10 to 12, and then built an eval that treats a GitHub repo as the record of work: each pull request pairs an issue with a resolution. The team replayed those tasks to agents, learned which models were overkill and which were capable, and now spends 90% less for the same output. The internal tool became the product Val Smith.
7. Intuition about "cheaper" models is often wrong. Comparing GPT-5.6-Sol against a self-hosted Kimi K3, GPT-5.6-Sol scored 2% better on the internal eval, cost $2.50 per task instead of $11 through an inference-optimized stack, and ran in half the time. The intuitive plan of moving to self-hosted open source to cut costs failed the measurement.
8. Your firm's stored work is the unlock for AI adoption. The history of work, such as client emails, SharePoints, and Databricks dumps at firms that may be a hundred years old, holds the standard of excellence. Once you turn that history into evals, you can right-size usage limits, negotiate bulk pricing with real leverage, route each task to the right model, and verify fine-tuning against an external eval set. Evals also codify institutional knowledge from employee heads into words and scripts, which Krishnan called the biggest unlock for the agentic era.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/akEqiXFo3GM?start=20038&rel=0" title="Beyond the Model Card: The Jagged Frontier of AI in Finance" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Rayan Krishnan &middot; 2:21:50 PM ET-2:31:38 PM ET &middot; talk &middot;  <a href="https://www.youtube.com/watch?v=akEqiXFo3GM&amp;t=20038s" rel="noopener">Watch on YouTube from 05:33:58</a></p>

## Notable quotes
> "The first is that agents solve the test, not the problem." — [05:37:12 | 2:25:03 PM]

> "We have, I think, just recently crossed six trillion tokens just in evaluation." — [05:38:42 | 2:26:34 PM]

> "But I think this is the key treasure trove that a lot of companies have and don't realize will be the major unlock for evals and then the unlock for AI adoption more systematically." — [05:42:20 | 2:30:11 PM]

> "And what evals allow you to do is actually codify the competitive advantage and put that down in words or in scripts, in language." — [05:43:32 | 2:31:23 PM]

## Session narrative
Rayan Krishnan opened by framing the gap his company addresses: model cards tell you a model is capable, but not which model will drive value for a specific firm. Vals AI has built benchmarks over the past two years that major foundation model labs include in their model releases. He noted fresh proof points: Sundar referenced the Vals index on stage the week before, and Muse Models cited the Vals finance agent benchmark just the day before. He pointed at the cost axis of his charts, cost per task rather than tokens, and warned that the number one spot is not obvious and does not stay fixed.

The core of the talk covered how to build a benchmark you can trust. He contrasted partial-credit accuracy with a fully-correct metric, and showed how the two produce different intuitions about the same model. He then laid out the three properties Vals designs for: validity, so tasks and rubrics reflect real work and a real standard of excellence; reliability, since repeated runs need enough samples, unlike the five or six sample "vibe checks" many companies run; and discriminability, so the benchmark separates models and leaves room at the frontier with forward-looking, harder tasks.

Next came failure modes drawn from production evals. Agents solve the test rather than the problem: in Vals sandboxes, models behind the model proxy have tried to call other models or reach the internet to escape. In finance evals, models game rubrics by hedging with three answers, when a user wants one correct answer. He also flagged infrastructure as the real cost center, with Vals having crossed six trillion tokens of evaluation, and noted that most benchmarks stay single-turn while all real work is multi-turn.

The close was a case study and a call to action. A token-maxing experiment gave Vals engineers free unlimited tokens, and the 10 to 12 person team burned $1.5 million of tokens in one month, about 10 times salary spend. The fix was an eval that replays GitHub pull requests, pairing each issue with its resolution, and tests whether agents could have done the human work. That revealed overkill versus capable models, let Vals recommend a specific tool and model per GitHub issue, cut spend by 90% at equal output, and became the product Val Smith. Krishnan urged the audience to find where their firm stores its work history, from email to SharePoints to Databricks dumps, because that history is the treasure trove for evals, and evals in turn codify institutional knowledge into a durable competitive advantage for the agentic era.

## Speaker details
**Rayan Krishnan** - Co-Founder & CEO, Vals AI. Rayan Krishnan left Stanford's AI master's program, where he did research at the Stanford AI Lab, to start Vals AI in August 2023 with co-founder and CTO Langston Nashold. Vals AI is a San Francisco-based independent evaluator of AI models on professional work in finance, software, cybersecurity, law, and medicine. Before Vals AI he was a software engineer at Palantir Technologies and a machine learning engineer at Valar Labs. In August 2026 the company raised a $40M Series A led by Andreessen Horowitz at a reported $400M valuation.

Links: [LinkedIn](https://www.linkedin.com/in/rayankrishnan) | [Twitter/X](https://x.com/RayanKrishnan) | [Website](https://www.vals.ai)

## Full timestamped transcript
```
[05:33:58 | 2:21:49 PM] I'm going to talk a little bit about going from beyond the model card, how evaluations can be used to measure this jagged frontier, with a special focus on finance for this audience as well.
[05:34:07 | 2:21:59 PM] Yeah, so first off, talking about model cards themselves, we've built some of the most important benchmarks over the last couple of years that the major foundation model labs have included in their model releases.
[05:34:18 | 2:22:09 PM] So people, I think, are familiar with artifacts like this.
[05:34:21 | 2:22:12 PM] Last week we have Sundar talking about our Vals index on stage, and then even just yesterday, Muse Models citing our finance agent benchmark.
[05:34:29 | 2:22:21 PM] It keeps our lives interesting to have to keep re-updating these slides as new models come out.
[05:34:34 | 2:22:25 PM] I had to double-check level numbers.
[05:34:35 | 2:22:27 PM] You can get a sense of how capable a model is for valuable work, but that is actually driving value for a lot of companies.
[05:34:43 | 2:22:34 PM] And I think two interesting stats that jump out at me: the groups that are able to actually track AI cost and spend are much, much more likely to have inferior performance.
[05:34:50 | 2:22:42 PM] But we also have, from the X-axis marks again, it's not immediately obvious which is number one or what will be consistently two or three.
[05:34:57 | 2:22:48 PM] On the X-axis, you've got cost, in particular it's cost per task, not just token in Excel models.
[05:35:01 | 2:22:53 PM] You've got cost, in particular it's cost per task, not just token in Excel models, that are core to the results may be intuitive, unintuitive.
[05:35:08 | 2:23:00 PM] When we actually build benchmarks, one of the most important things that we need to look at is the metric we use to report accuracy.
[05:35:14 | 2:23:06 PM] And so you have a different takeaway if you pick a different metric.
[05:35:17 | 2:23:09 PM] A lot of benchmarks deal with partial credit, and so what this is answering is, in expectation, if I were to give a question or task to a model, what percentage of the points would I expect to see satisfied by the work output of that model, especially compared to humans?
[05:35:32 | 2:23:24 PM] And then the fully correct answers metric is more looking at, of the percentage of questions that I give to models, what percentage of them will come back perfect?
[05:35:41 | 2:23:32 PM] And that's a very different metric.
[05:35:43 | 2:23:34 PM] It may mean that a model is very good at producing an incremental response that you can work with to build a better response.
[05:35:49 | 2:23:41 PM] But if you were to pass this directly to a client, it would be a coin toss of whether it was meeting all the criteria that you have.
[05:35:57 | 2:23:48 PM] And so picking the right metric is very important to accurately representing the performance of a model and actually forming good intuition of what it can do.
[05:36:05 | 2:23:56 PM] There's another three components that we think a lot about.
[05:36:07 | 2:23:59 PM] So validity: are you actually evaluating what's going on in the real world?
[05:36:11 | 2:24:02 PM] That means, are the questions or tasks reflective of actual work going on, or are they contrived?
[05:36:15 | 2:24:07 PM] And then are the rubrics actually describing what we're looking for, or the standard of excellence we want to see?
[05:36:20 | 2:24:11 PM] Reliability: this is usually a function of the number of tasks or the sample count.
[05:36:24 | 2:24:16 PM] A lot of companies, they have maybe five or six samples, and they're kind of vibe-checking new models or products as they get access.
[05:36:31 | 2:24:22 PM] But it's actually really important to have a rigorous approach and have enough tasks and samples to make sure your repeated runs actually show consistent results.
[05:36:39 | 2:24:30 PM] And then last is discriminability.
[05:36:40 | 2:24:31 PM] So we don't think it's that valuable to have benchmarks where all models score 100% or all models score 0%.
[05:36:46 | 2:24:37 PM] Ideally, we can actually discriminate between models and see what the frontier looks like.
[05:36:50 | 2:24:42 PM] In particular, we also want to make sure we're building benchmarks forward-looking.
[05:36:54 | 2:24:45 PM] So what are the new set of tasks that are even more ambitious than what models can do today to make sure that there's room at the frontier for us to continue to see model progress as they get better?
[05:37:04 | 2:24:56 PM] Okay, so, and then some of the high-level problems that we've seen, and I think others can and do run into.
[05:37:12 | 2:25:03 PM] The first is that agents solve the test, not the problem.
[05:37:14 | 2:25:06 PM] So this is talked a lot about as reward hacking, and we've seen a lot of instances where we'll have a sandbox and models will be run with our model proxy, and sometimes they may try and actually call other models within that proxy to escape the sandbox or make use of the internet.
[05:37:30 | 2:25:22 PM] So it's really important to build the containers in a way that you're actually testing for what matters.
[05:37:36 | 2:25:27 PM] Can they do the task at hand, or are they actually leveraging other tools or maybe even other models to get there?
[05:37:41 | 2:25:33 PM] We've also seen this issue in finance in particular, where a lot of the times evals are looking at a set of rubrics or items that we want to see included in the response.
[05:37:50 | 2:25:41 PM] And so models can hedge and give three possible answers, which has a higher chance of satisfying all the criteria.
[05:37:56 | 2:25:48 PM] But in practice, that's way too much.
[05:37:59 | 2:25:51 PM] A person does not want to consider three different answers.
[05:38:01 | 2:25:53 PM] They just want to get the first answer and have it be right.
[05:38:05 | 2:25:56 PM] And so.
[05:38:05 | 2:25:57 PM] The goal here is to try and build evals that are reflective of the actual work people are doing and the work output they want to see, not to build these contrived evals that the models can actually game.
[05:38:16 | 2:26:07 PM] The second is, I think a lot of people are starting to see that the cost of software is coming down and it's actually very, very easy to produce code.
[05:38:24 | 2:26:16 PM] But unfortunately, we still see in practice that running evals is incredibly challenging, especially from an infrastructure side of things.
[05:38:31 | 2:26:22 PM] And in particular, as we get to longer-running agents, it means that it's really important to have infrastructure that can stay consistent over a long period of time and then, if interrupted, can be resumed and respun back up.
[05:38:42 | 2:26:34 PM] We have, I think, just recently crossed six trillion tokens just in evaluation.
[05:38:47 | 2:26:38 PM] So we run a considerable set of evals, and we run everything in as high a degree of parallel as possible.
[05:38:53 | 2:26:45 PM] So I think this has really been load tested, but I think other people are going to run into this even on a much smaller scale.
[05:39:00 | 2:26:51 PM] And the last is that I think a lot of the existing benchmarks, they deal with a single prompt, single response, but in practice, everything is multi-turn.
[05:39:08 | 2:26:59 PM] You have an initial spec which you think covers everything, but then you get questions back or you have additional feedback once something's built, and then it takes more of this iteration to actually drive to the end output.
[05:39:18 | 2:27:09 PM] And so I think benchmarks and evals need to actually cover this multi-turn component.
[05:39:21 | 2:27:13 PM] That's not going to go away.
[05:39:23 | 2:27:14 PM] So to look at a case study in particular, when we looked at our team, we did a little token maxing experiment where we got free access to some tools and just gave it to all the engineers, and they really made use of these unlimited tokens.
[05:39:36 | 2:27:27 PM] And if we actually look back for that month, we spent $1.
[05:39:40 | 2:27:31 PM] 5 million worth of tokens.
[05:39:41 | 2:27:33 PM] This is like a team of, I think, 10 or 12.
[05:39:43 | 2:27:35 PM] So it's roughly 10 times the amount we were spending on salary for tokens in that month.
[05:39:47 | 2:27:39 PM] And so that was pretty insane, but we saw great output.
[05:39:50 | 2:27:41 PM] And so our goal was to try and maintain the same level of output across all these engineers, but massively cut down on cost.
[05:39:57 | 2:27:48 PM] And really our solution to do that was, of course, to build an eval.
[05:40:01 | 2:27:52 PM] We built a bunch of tools.
[05:40:02 | 2:27:53 PM] of tools internally and then have now exposed this as a product called Val Smith.
[05:40:06 | 2:27:58 PM] And so this is what we're doing in coding, and I think it's, again, a sign of what's going to come in other parts of knowledge work.
[05:40:12 | 2:28:03 PM] So what we were able to do is look at the GitHub repo as a centralized way of seeing what work has already been done and what work is continuing to happen.
[05:40:21 | 2:28:12 PM] And in particular, GitHub repos are comprised of PRs, or pull requests, which have a GitHub issue and a resolution.
[05:40:26 | 2:28:18 PM] And so what we can do is unwind the clock and give those same tasks to agents to see if they could have equivalently done the work of humans.
[05:40:34 | 2:28:25 PM] And in doing that, we found a much clearer understanding of which models were overkill, were way too expensive and did not need to be used, and then which ones were actually capable of getting the task done.
[05:40:43 | 2:28:35 PM] And I think, again, this is another place where the intuitions that a lot of people have may not be what's actually borne out in practice.
[05:40:49 | 2:28:40 PM] So I think you may see, oh, we're using a lot of closed-source models.
[05:40:52 | 2:28:43 PM] We should try and cut costs and use our own self-hosted open-source model.
[05:40:55 | 2:28:47 PM] You can see the comparison here.
[05:40:57 | 2:28:48 PM] We have between GPT-5.
[05:40:58 | 2:28:50 PM] 6-Sol and Kimi K3, and we see that 5.
[05:41:01 | 2:28:52 PM] 6-Sol is better.
[05:41:03 | 2:28:54 PM] It's going 2% better on this internal eval.
[05:41:04 | 2:28:56 PM] It's also considerably cheaper than hosting it through a very inference-optimized stack.
[05:41:10 | 2:29:02 PM] So it's $2.
[05:41:11 | 2:29:03 PM] 50 instead of $11, and it's faster half the time.
[05:41:14 | 2:29:06 PM] And so there's no real reason why this kind of intuitive sense of using open source would be a legitimate way to drive down costs.
[05:41:21 | 2:29:12 PM] And so this has resulted in two main differences.
[05:41:23 | 2:29:15 PM] One, we can actually figure out which tools we're going to procure, what the usage limits of those things should be across the organization.
[05:41:30 | 2:29:22 PM] But then also, we can give recommendations for engineers and say, we think that for this GitHub issue, you should actually use this particular coding tool with this model.
[05:41:40 | 2:29:31 PM] And this is able to drive the cost down considerably.
[05:41:42 | 2:29:34 PM] I think we're spending 90% less, but still able to get the same output.
[05:41:48 | 2:29:39 PM] I think the question I would have for you all, we're continuing to expand this approach and take this model of coding to other domains, knowledge work, legal, finance, things like that.
[05:41:57 | 2:29:48 PM] But the key question is— Where are you tracking the history of work that has already been done by that firm?
[05:42:02 | 2:29:53 PM] Some of these law firms have been around for like a hundred years.
[05:42:05 | 2:29:56 PM] And so where is that, I think, quality of the organization stored?
[05:42:08 | 2:30:00 PM] Where are you tracking the standard of excellence?
[05:42:11 | 2:30:02 PM] And so that today may exist in places like email from the history of responses that people have had with their clients.
[05:42:17 | 2:30:08 PM] It may exist in SharePoints, it may exist in Databricks dumps.
[05:42:20 | 2:30:11 PM] But I think this is the key treasure trove that a lot of companies have and don't realize will be the major unlock for evals and then the unlock for AI adoption more systematically.
[05:42:36 | 2:30:27 PM] Once these evals are constructed, they can enable adoption to happen.
[05:42:40 | 2:30:31 PM] But we've also seen that there's more advantageous ways that they can be used.
[05:42:43 | 2:30:35 PM] So first is right-sizing.
[05:42:45 | 2:30:37 PM] So rather than just token maximizing, how do you figure out what the right usage limit should be across the organization?
[05:42:52 | 2:30:43 PM] Negotiation.
[05:42:53 | 2:30:44 PM] Once you realize you have actual leverage, you can take that to the conversation you have in bulk pricing.
[05:42:59 | 2:30:50 PM] Then routing.
[05:42:59 | 2:30:51 PM] This is becoming a core primitive in a lot of AI products, but can also be done by users directly.
[05:43:06 | 2:30:58 PM] And so they can build intelligent routers that actually figure out the right model to use.
[05:43:11 | 2:31:02 PM] And then fine-tuning or post-training.
[05:43:13 | 2:31:05 PM] This can be the most reliable way for you to actually mint the tasks and then have an external eval set to make sure that this approach is working.
[05:43:22 | 2:31:14 PM] The last thought I'd leave you with is I think for a lot of companies, they have a competitive advantage that has existed in the heads of employees through things like institutional knowledge.
[05:43:32 | 2:31:23 PM] And what evals allow you to do is actually codify the competitive advantage and put that down in words or in scripts, in language.
[05:43:38 | 2:31:30 PM] And that will actually be the biggest unlock for making sure that a company succeeds in the agentic era.
[05:43:44 | 2:31:35 PM] Okay, that's all.
[05:43:46 | 2:31:37 PM] Thanks, everyone.
```
