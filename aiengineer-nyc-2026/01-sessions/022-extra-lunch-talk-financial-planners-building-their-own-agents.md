---
session_id: "022"
title: "We Let Our Financial Planners Write the Agents"
agenda_title: null
speakers: ["Matt Ragone"]
start_wall: "12:14:52 PM ET"
end_wall: "12:23:41 PM ET"
video_start: "03:27:00"
video_end: "03:35:49"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=12420s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: ["claude-skills", "no-code-agents", "financial-planning", "domain-experts", "human-in-the-loop", "skills-governance"]
confidence: "high"
---

# We Let Our Financial Planners Write the Agents

> A certified financial planner at Range explains how non-coding planners wrote the Claude skills they use daily, and gives a five-step method (pick, teach, pack, test, ship) for getting domain experts to author their own agents.

Provenance note: this talk was delivered as an extra lunch talk during the 12:14 PM block and does not appear in the official main-stage agenda for October 13. The title above is the talk's official title from the speaker's session record (listed there at an 11:30am-11:48am program slot); the manifest's descriptive title was "Extra lunch talk: financial planners building their own agents — a five-step method for expert-written Claude skills (Range)".

## TL;DR

- Matt Ragone is a certified financial planner at Range, not an engineer, and the financial planners themselves wrote the agent skills they use every day — none of them write code.
- The real planner constraint is not typing speed; it is that a planner can only be in one place at a time. Agents now draft cash flow analyses and insurance reviews while the planner is on a call with a different client.
- The agent never sends anything to a client. A planner reviews every single recommendation before the client sees it — the review step is not optional in their regulated business.
- The method is five steps that require no code: pick, teach, pack, test, ship. A skill is the firm's way of doing one specific piece of work, written down so an agent can follow it.
- Six months in, Range has 24 skills company-wide, 17 of them in planning. Adoption spread to sales, product, and marketing with no mandate — people saw the planners' work and built their own.
- The bottleneck has moved: whether a model can draft a cash flow analysis is settled. What is not settled is who writes down how your firm does the work, who tests it, and who owns it.

## Key lessons

1. Pick the boring weekly workflow, not the flashy one. Choose work you repeat every week, with low complexity but high manual effort, where you already know what good looks like and can spot a bad draft at a glance. At Range that meant cash flow analysis and insurance reviews. As Ragone put it: "If you can't judge the output quickly, you can't test it and you can't trust it."
2. Teach the agent by narrating judgment, not steps. Walk through several real, previously delivered client cases start to finish and say out loud why you open each document, what you look for, and what would make you stop and ask a question. "That narration is the whole game" — the steps are easy to write down, the judgment is what makes it your firm's work instead of generic advice.
3. Pack the skill as questions and limits, not just steps. Define the questions the agent must ask before it starts (what it needs to know, what it should confirm with you instead of guessing) and the limits it must respect (in their world: it never sends anything to a client — it drafts, a planner decides). Steps alone produce something that just runs on its own; questions plus limits produce something you can trust.
4. Test on five to ten real runs before anyone else sees it. Every run exposes an edge case, a missing question, or a spot where the agent sounded confident and was wrong. Fix, save, and run again — that is far less work than cleaning up after handing a half-baked skill to 15, 20, or 100 people.
5. Ship with an owner and a reviewer, and the reviewer is not the author. The owner keeps the skill current because processes and tax rules change — "a skill that was right in March can be wrong by December." Peer review carries over naturally from planning: "Same as a plan, you don't grade your own work."
6. Two conditions made agents useful at all: the agent must work where the work lives (inside the workflow, not a separate chat window you copy and paste into), and it must know how Range does the work — what they look at first, what they always flag, how they phrase a recommendation — not how financial planning works in general, which the model already knows.
7. Let the subject-matter expert build their own skill. Once planners, marketers, and salespeople authored skills for their own niches, the skills got much more specific: the person who knows insurance best builds the insurance skill; the person who knows tax law builds the tax one. All 24 skills are written and maintained by planners, marketers, and salespeople, not developers.
8. The bottleneck has moved from model capability to authorship and governance. Whether a model can draft a cash flow analysis is settled. The open questions are who writes down how your firm does it, who tests it before it ships, and who owns it once 15 other people depend on it.

## Notable quotes

> "If I'm on a call with a client, I'm not building someone else's plan." — [03:28:43 | 12:16:34 PM]

> "The agent doesn't send anything." — [03:29:22 | 12:17:13 PM]

> "That narration is the whole game." — [03:31:53 | 12:19:44 PM]

> "Whether a model can draft a cash flow analysis, that question's already been settled." — [03:35:12 | 12:23:04 PM]

## Session narrative

Ragone opened by setting up the unusual vantage point of the talk: he is a certified financial planner at Range, an all-in-one wealth management company, who spends his days with clients on cash flow, taxes, insurance, retirement, and estate matters, and who also leads AI adoption for the planning team. Most agent talks, he noted, come from the people who built the platform — this one comes from the side that receives it. He framed the talk as a build guide, and stressed the regulatory context: the output is financial advice to real clients, so the review step is not optional. "So this isn't a vendor pitch. It's a method, and it's what actually worked for us."

He then traced the adoption arc. Range started where everyone starts: AI as a chatbot that polished client messages, saving a few minutes while he still did all the work manually. The change that mattered came from identifying the real constraint — a planner can only be in one place at a time, so writing faster fixes nothing. What fixes it is work that happens while the planner is elsewhere. He described a day now: he is on a call with one client while an agent drafts a full cash flow or insurance analysis for another; when the call ends, he opens the draft, fully reviews it, adjusts it, and sends the recommendations — the agent never sends anything. Two conditions made this possible: the agent works where the work lives rather than in a separate chat window, and it knows how Range does planning rather than planning in general. That combination is what a skill is — the firm's way of doing one specific piece of work, written down so an agent can follow it.

The core of the talk was the five-step method for building a skill, none of it requiring code. Step one, pick: choose a weekly, low-complexity but high-manual-workflow you can judge at a glance — for Range, cash flow analysis and insurance reviews — not the flashiest or most complex work. Step two, teach: walk through several real delivered cases and narrate the judgment out loud, because the judgment is what makes it the firm's work instead of generic advice. Step three, pack: a skill is more than a list of steps; it must encode the questions the agent asks before starting and the limits it respects, above all that it never sends anything to a client. Step four, test: run it five or ten times on real cases, fixing edge cases, missing questions, and confident-but-wrong outputs each time — the step everyone wants to skip. Step five, ship with an owner who keeps it current and a reviewer who is not the author, since nobody grades their own work.

He closed with results and a forward frame. Six months in, Range has 24 skills across the company, 17 of them in planning, and the practice spread to sales, product, and marketing with no memo — people saw the planners' work and built their own agents. Skills became far more specific once domain experts authored them, and peer review of skills emerged naturally from the existing habit of reviewing each other's plans. The reason this matters now, he argued, is that the bottleneck has moved: model capability for drafting a cash flow analysis is settled, while authorship, testing, and ownership of the firm's method are not — exactly the questions anyone pushing agents past the engineering org is about to hit. He acknowledged there is not much field data on this yet, offered Range's experience as one data point, and signed off with his contact, matt@range.com.

## Speaker details

**Matt Ragone** — Financial Planner, Range. Matt Ragone is a certified financial planner (CFP and CRPC designations) at Range, a fintech startup that aims to make working with a financial advisor more accessible. He is based in the New York City metropolitan area, studied at Fairfield University, and worked in wealth management at Merrill Lynch before joining Range. He leads AI adoption for the planning team, and he and his colleagues built the AI agent skills used in their planning workflow without writing code — the subject of this talk. LinkedIn: https://www.linkedin.com/in/matthew-ragone-cfp%C2%AE-crpc%E2%84%A2-a56a85106/. Note: the transcript's closing line renders his surname as "Matt Ragon" (a transcription artifact); the speaker record confirms "Ragone."

## Full timestamped transcript

```
[03:27:01 | 12:14:52 PM] Hi, everyone.
[03:27:02 | 12:14:53 PM] I'm Matt Ragone, and I'm a financial planner at Range.
[03:27:04 | 12:14:56 PM] I want to show you how our financial planners ended up writing the agents that we use every day.
[03:27:10 | 12:15:02 PM] And none of us, the financial planners for that matter, write code.
[03:27:15 | 12:15:06 PM] This is the build guide, how we did it step by step so you can take it back to your own teams, companies, etc.
[03:27:22 | 12:15:14 PM] So a quick bit about me, because it matters for how you'll hear this talk.
[03:27:27 | 12:15:19 PM] I'm not an engineer.
[03:27:28 | 12:15:20 PM] I'm a certified financial planner, and I spend my days with clients talking about cash flow, taxes, insurance, retirement, estate, you name it.
[03:27:37 | 12:15:29 PM] I also lead the AI adoption for the planning team at Range, which is an all-in-one wealth management company.
[03:27:45 | 12:15:37 PM] Most agent talks you'll hear come from the people who built the platform.
[03:27:50 | 12:15:42 PM] This talk comes from someone on the other side, the people you hand the platform to.
[03:27:55 | 12:15:47 PM] We work in a regulated business.
[03:27:57 | 12:15:48 PM] The output is financial advice to real clients, and the review step is not optional.
[03:28:04 | 12:15:55 PM] So this isn't a vendor pitch.
[03:28:06 | 12:15:57 PM] It's a method, and it's what actually worked for us.
[03:28:11 | 12:16:02 PM] We started where everyone starts: AI as a chatbot.
[03:28:14 | 12:16:06 PM] I'd write a client message, paste it in, and ask it to make it a little clearer or friendlier.
[03:28:20 | 12:16:11 PM] And that was useful.
[03:28:21 | 12:16:12 PM] It saved me a few minutes here and there, but I was still doing all of the work manually.
[03:28:26 | 12:16:18 PM] I was just doing it a little bit faster.
[03:28:29 | 12:16:21 PM] The change that actually mattered came later.
[03:28:33 | 12:16:25 PM] Here's what we figured out.
[03:28:35 | 12:16:26 PM] A planner's constraint was never typing speed, for example.
[03:28:39 | 12:16:31 PM] It's that we can only be in one place at a time.
[03:28:43 | 12:16:34 PM] If I'm on a call with a client, I'm not building someone else's plan.
[03:28:48 | 12:16:39 PM] Writing faster doesn't fix that problem.
[03:28:50 | 12:16:42 PM] What fixes it is work that happens while I'm somewhere else.
[03:28:54 | 12:16:46 PM] So here's what a day looks like now.
[03:28:57 | 12:16:49 PM] I'm on a call with one client.
[03:29:00 | 12:16:51 PM] At the same time, an agent is drafting a full cash flow analysis or an insurance analysis for a different client.
[03:29:08 | 12:17:00 PM] When the call ends, I open that draft, I fully review it, adjust what needs to be adjusted, and send the client their recommendations.
[03:29:17 | 12:17:08 PM] I want to be really clear about that last step.
[03:29:19 | 12:17:11 PM] The agent doesn't send anything.
[03:29:22 | 12:17:13 PM] A planner reviews every single recommendation before a client sees it.
[03:29:28 | 12:17:19 PM] What changed is that the first draft no longer needs me sitting in front of it.
[03:29:34 | 12:17:26 PM] Getting there took a lot more than a good prompt, however.
[03:29:37 | 12:17:29 PM] Two things had to be true.
[03:29:39 | 12:17:31 PM] First, the agent has to work where the work lives, not in a separate chat window I'm copying and pasting it into.
[03:29:48 | 12:17:39 PM] Second, it has to know how we do it, not how financial planning works in general.
[03:29:53 | 12:17:45 PM] The model already knows that, but the agent needs to know how Range does it, what we look at first.
[03:30:00 | 12:17:51 PM] Look at first what we always flag, how we phrase a specific recommendation.
[03:30:05 | 12:17:56 PM] That combination is what a skill is, our firm's way of doing one specific piece of work written down so an agent can follow it.
[03:30:16 | 12:18:07 PM] The bulk of this talk is how you build one.
[03:30:20 | 12:18:12 PM] Five steps: pick, teach, pack, test, and then ship.
[03:30:26 | 12:18:17 PM] None of them require writing code.
[03:30:28 | 12:18:20 PM] Every one of them requires knowing the work really well, which is exactly why the people doing the work should also be the ones building it.
[03:30:39 | 12:18:31 PM] Step one: pick a workflow you repeat.
[03:30:42 | 12:18:34 PM] Your initial instinct is to go for the flashiest work, whatever's taking the most amount of time and the most complex.
[03:30:49 | 12:18:40 PM] Don't.
[03:30:50 | 12:18:41 PM] Pick something you do every week where you already know what good looks like, where you can spot a bad draft at a glance.
[03:30:57 | 12:18:49 PM] Additionally, we recommend choosing some of the least complex workflows to start, but some that require the most manual work.
[03:31:06 | 12:18:57 PM] For us, that meant things like cash flow analysis and insurance reviews.
[03:31:11 | 12:19:03 PM] Just for us here at Range, that required the most manual work.
[03:31:15 | 12:19:07 PM] And if you can't judge the output quickly, you can't test it and you can't trust it.
[03:31:21 | 12:19:12 PM] So look for two things: you do it often and you know how to judge it.
[03:31:27 | 12:19:19 PM] Step two: show it several real cases for previous plans you've delivered.
[03:31:33 | 12:19:24 PM] Take several actual client cases and walk through the work start to finish.
[03:31:38 | 12:19:30 PM] And as you do it, narrate your judgment out loud, not just, Next I open the pasteup, why you're opening it.
[03:31:46 | 12:19:37 PM] What you're looking for.
[03:31:48 | 12:19:39 PM] What would make you stop and ask a question?
[03:31:50 | 12:19:42 PM] That narration is the whole game.
[03:31:53 | 12:19:44 PM] The steps are easy to write down.
[03:31:55 | 12:19:46 PM] The judgment is what makes it your firm's work instead of generic advice.
[03:32:03 | 12:19:54 PM] Step three: pack it into a skill.
[03:32:05 | 12:19:56 PM] A skill isn't just a list of steps.
[03:32:08 | 12:20:00 PM] Two things matter most: the questions it must ask before it starts.
[03:32:13 | 12:20:04 PM] What does it need to know?
[03:32:15 | 12:20:06 PM] What should it confirm with me instead of simply guessing?
[03:32:18 | 12:20:09 PM] And the limits it must respect.
[03:32:21 | 12:20:12 PM] What it never does on its own.
[03:32:23 | 12:20:14 PM] In our world, the big one is that it never sends anything to a client.
[03:32:27 | 12:20:19 PM] It drafts, and then a planner decides if it gets sent or needs to be adjusted.
[03:32:33 | 12:20:24 PM] If you only write the steps, you get something that simply just runs on its own.
[03:32:38 | 12:20:29 PM] If you write the questions and set the limits, you can get something you can trust.
[03:32:42 | 12:20:34 PM] Think of a skill as a recipe.
[03:32:45 | 12:20:36 PM] Once Claude knows how to do the skill, it will repeat your process on command.
[03:32:51 | 12:20:42 PM] Step number four: run it five or ten times on real cases before anyone else sees it.
[03:32:58 | 12:20:50 PM] This is the step everyone wants to skip.
[03:33:01 | 12:20:52 PM] Every run teaches you something the skill didn't know yet.
[03:33:04 | 12:20:55 PM] An edge case, a question it should have asked, a spot where it sounded confident and was wrong.
[03:33:09 | 12:21:01 PM] You need to fix it, save the skill, and run it again and again and again.
[03:33:16 | 12:21:07 PM] Five to ten runs sounds like a lot, but it's a lot less work than cleaning up after you hand a half-baked skill to 15, 20, 100 people in your team.
[03:33:27 | 12:21:19 PM] Step five: ship it with an owner and a reviewer.
[03:33:31 | 12:21:23 PM] The owner keeps it current.
[03:33:34 | 12:21:25 PM] Our processes change, tax rules change, and a skill that was right in March can be wrong by December.
[03:33:41 | 12:21:32 PM] The reviewer checks it before the team relies on it, and it's someone other than the author.
[03:33:47 | 12:21:39 PM] Same as a plan, you don't grade your own work.
[03:33:50 | 12:21:42 PM] Once other people depend on a skill, somebody has to be accountable for it.
[03:33:55 | 12:21:47 PM] That's the difference between a clever personal shortcut and something a team can build on.
[03:34:02 | 12:21:53 PM] So where are we at currently?
[03:34:04 | 12:21:56 PM] Six months in, we have 24 skills across the company, and 17 of them are in planning.
[03:34:10 | 12:22:02 PM] And here's the part I didn't expect.
[03:34:12 | 12:22:04 PM] It spread to sales, product, marketing, all without a mandate.
[03:34:17 | 12:22:08 PM] Nobody sent a memo.
[03:34:18 | 12:22:10 PM] People saw what the planners were doing and started building their own agents.
[03:34:24 | 12:22:15 PM] Every one of those skills was written and is maintained by planners, marketers, and salespeople, not developers or engineers.
[03:34:33 | 12:22:24 PM] A couple of things changed once subject matter experts started building for their own niche.
[03:34:39 | 12:22:31 PM] The skills got a lot more specific.
[03:34:42 | 12:22:33 PM] The person who knows insurance, for example, best builds the insurance skill.
[03:34:46 | 12:22:38 PM] The person who best knows tax, tax code, tax law should be building the tax one.
[03:34:52 | 12:22:44 PM] And a review came naturally.
[03:34:54 | 12:22:46 PM] We already review each other's plans, and that's just how planning works.
[03:34:58 | 12:22:50 PM] So now we review each other's skills in that same way.
[03:35:02 | 12:22:54 PM] It's the same habit, just a new thing to review.
[03:35:07 | 12:22:59 PM] So why does this matter right now?
[03:35:10 | 12:23:01 PM] Because the bottleneck has moved.
[03:35:12 | 12:23:04 PM] Whether a model can draft a cash flow analysis, that question's already been settled.
[03:35:17 | 12:23:08 PM] It can.
[03:35:18 | 12:23:09 PM] What's not settled: who writes down how your firm does it, who tests it before it ships, who owns it once 15 other people depend on it.
[03:35:27 | 12:23:19 PM] If you're being asked to push agents out past the engineering org, you're about to hit these exact questions.
[03:35:35 | 12:23:26 PM] There isn't much field data on this yet, but this is how we've done it here at Range.
[03:35:42 | 12:23:34 PM] So that's it.
[03:35:43 | 12:23:35 PM] Thank you so much for listening to this talk.
[03:35:45 | 12:23:36 PM] I'm Matt Ragon from Range, and you can reach me at matt@range.
[03:35:49 | 12:23:41 PM] com.
[03:35:50 | 12:23:41 PM] Have a great day.
```
