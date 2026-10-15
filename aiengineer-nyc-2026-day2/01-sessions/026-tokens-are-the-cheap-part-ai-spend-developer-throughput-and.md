---
session_id: "026"
title: "Tokens Are the Cheap Part: AI spend, developer throughput, and cost per merged PR"
agenda_title: null
speakers: ["Steve Jamison"]
start_wall: "1:24:40 PM ET"
end_wall: "1:42:06 PM ET"
video_start: "04:44:04"
video_end: "05:01:30"
video_url: "https://www.youtube.com/watch?v=jiUC6IUMdvc&t=17044s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: ["ai-spend", "cost-per-merged-pr", "developer-throughput", "intelligence-costs", "jellyfish-research", "diminishing-returns", "off-agenda"]
confidence: "high"
---

# Tokens Are the Cheap Part: AI spend, developer throughput, and cost per merged PR

> Jellyfish research on the industry's largest engineering-workflow-plus-AI-telemetry dataset shows AI is only about 2.5% of the cost of a merged PR, so token bills are still cheap relative to salary - track cost per merged PR, not the token bill.

## TL;DR
- AI spend is up 60x from this time last year, and merged PRs per engineer are up 43% over the same horizon. Those two numbers alone cannot tell you if the trade is good.
- Jellyfish pools developer salary and AI spend into one "intelligence cost" bucket per PR. As of August 2026 data, AI is about 2.5% of that cost and salary is 97.5%.
- The dollar cost of a merged PR fell 26% over the last year, even with the 60x AI cost increase included. 83% of the companies studied improved.
- The heaviest AI-spend quintile gained the most: 67% throughput growth and a 32% cost-per-PR drop, versus roughly 40% and 25% for the other four-fifths.
- Quality signals stayed calm: revert rates did not worsen beyond noise, and throughput gains are not coming from smaller PRs - lines of code per PR are rising.
- Heading into budget season, bring cost per PR to the table next to the AI bill and throughput. "The bill tells you what you spent. Cost per PR tells you whether it worked."

## Key lessons
1. Frame AI as part of the cost of producing each PR, not as side overhead. Jellyfish calls this the "intelligence costs of a PR": engineer salary plus AI spend in one bucket. As of the August 2026 data, AI is about 2.5% of that cost and salary is the other 97.5%.
2. Use cost per merged PR - not PRs created - as the decision metric, because review time is factored in and quality gates have been cleared. It fell 26% in dollars over the last year despite the 60x rise in AI costs, and 83% of companies studied showed a drop.
3. Token spend ranges are enormous across companies. Ranked in quintiles, the lightest group spends about 60 million tokens per dev per month (0.3% of PR cost is AI), while the heaviest fifth spends about 2.5 billion tokens per dev per month (8.5% of PR cost) - two orders of magnitude apart.
4. Within the observed range, more spend kept paying. The heaviest fifth saw merged-PR throughput gains of 67% and a 32% cost-per-PR decrease over the year; the bottom four-fifths saw about 40% and about 25%. Cost-per-PR change is driven largely by throughput, not by AI spend.
5. Returns diminish but do not vanish. On the tokens-versus-cost-per-PR curve, small early spend buys steep gains and the slope then flattens; still, the top 10% of company months by token usage spend 8x the tokens of the median and achieve a 25% lower cost per PR.
6. Individual-level data mirrors company-level data. Comparing each developer's heavy agent-skill weeks with their own low-use weeks: about 2x token spend, 27% more merged PRs, and each PR costs about 18% less once salary and tokens are counted together.
7. Check quality proxies before trusting the gains. Revert rates (merged PRs that undo an earlier PR) dropped slightly for every group, though the deltas sit just below the noise in the data - no evidence of improvement, but also no worrying signs of rampant quality issues. And throughput is demonstrably not driven by smaller PRs: AI is increasing lines of code per PR.
8. Track three things monthly: total intelligence cost per PR (human plus artificial), the AI bill, and PR throughput - with reverts and quality metrics beside them as a counterweight, because "we don't need AI slop mucking up the gears." Watch for runaway jobs, but do not let the AI spend per PR be your driving metric.

## Notable quotes
> "I'm here to show you why tokens are the cheap part." [04:44:09 | 1:24:44 PM]

> "These two numbers leave out the biggest cost of all: developer salary." [04:46:59 | 1:27:34 PM]

> "I want to stress, though, diminishing returns is not the same as no returns." [04:52:11 | 1:32:47 PM]

> "The bill tells you what you spent." [05:00:28 | 1:41:04 PM]
> "Cost per PR tells you whether it worked." [05:00:31 | 1:41:07 PM]

## Session narrative
This talk was a pre-recorded, direct-to-camera presentation played on the main-stage livestream during the 12:40-2:05pm networking break; it appears on no agenda. Steve Jamison introduces himself at 04:44:05 with no host hand-off: "Hi, I'm Steve Jamison, AI research and engineering leader at Jellyfish." He states the thesis immediately - "I'm here to show you why tokens are the cheap part" - and grounds the research in the Jellyfish platform, "the industry's largest set of engineering workflow data joined to AI telemetry data."

He opens with the tension every engineering leader now faces. AI costs are up 60x from this time last year, while merged PRs per engineer are up 43% over the same one-year horizon. Jellyfish's own charts show the correlation: AI spend inflected upward in early 2026 and throughput gains began a steady climb of their own. But he argues the two headline numbers cannot answer the questions that matter - is 60x spend worth 43% output, should spend rise 2x more, does capping use stop waste or stunt gains - because they omit the biggest line on the cost side: developer salary.

The core argument introduces the "intelligence costs of a PR": what you pay engineers plus what you pay for AI, in one bucket. On August 2026 data, AI is about 2.5% of that cost and salary is 97.5%, which is in line with other reported figures. The payoff metric is the dollar cost per merged PR - review time factored in, quality gates cleared - which fell 26% over the last year while including the 60x AI cost increase, with 83% of studied companies improving. He then walks through a quintile split by token usage: the lightest fifth runs about 60 million tokens per dev per month (AI at 0.3% of PR cost) and the heaviest fifth about 2.5 billion (8.5% of PR cost). The heavy spenders gained the most - 67% throughput growth and a 32% cost-per-PR drop, against roughly 40% and 25% for the rest - because spreading the same salary across more PRs beats the rising token bill. A tokens-versus-cost-per-PR curve shows diminishing returns, but the top 10% still spend 8x the median's tokens and land 25% lower cost per PR, leading to the talk's most-quotable caveat: "diminishing returns is not the same as no returns."

A tangent repeats the analysis at the individual level: each developer's heavy agent-skill weeks versus their own low-use weeks show about 2x token spend, 27% more merged PRs, and 18% lower cost per PR. He then addresses the two objections he always gets. On quality, reverts - merged PRs that undo an earlier PR - dropped slightly for every group, though the deltas sit just below the noise, so there is no evidence of improvement and no sign of rampant quality problems. On PR size, the throughput gains are demonstrably not from smaller PRs; AI is driving an increase in lines of code per PR, helped by the low bar to create and a pull to do more per PR instead of spinning up another ticket. The close returns to the opening question with practical guidance: track AI spend per PR and PRs per engineer as supporting metrics, put salary into the equation, and judge with cost per PR - watching reverts as a counterweight - then bring cost per PR, not just the token bill, into budget season. The pre-recorded format is confirmed by the sign-off: "Well done. You made it to the end," plugs for his LinkedIn, the Jellyfish Substack and blog, a book-a-demo offer, and a closing "Again, I'm Steve Jamison... Thanks for watching. Cheers."

## Speaker details
**Steve Jamison** - AI Research & Engineering Leader, Jellyfish. Steve Jamison, PhD, leads analysis for the Jellyfish AI Engineering Trends dataset, which spans tens of millions of pull requests, studying AI spend, developer throughput, and cost per merged pull request. Based in the Greater Boston area, he combines 10+ years of academic research and engineering training with startup data science, analytics, and engineering leadership experience.

Links: [LinkedIn](https://www.linkedin.com/in/stevetjamison)

## Full timestamped transcript
```
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
```
