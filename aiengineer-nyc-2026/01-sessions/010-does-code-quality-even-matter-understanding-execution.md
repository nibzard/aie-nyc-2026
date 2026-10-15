---
session_id: "010"
title: "Does Code Quality Even Matter?"
agenda_title: "Does Code Quality Even Matter?"
speakers: ["Max Kanat-Alexander"]
start_wall: "9:57:34 AM ET"
end_wall: "10:14:28 AM ET"
video_start: "01:09:42"
video_end: "01:26:36"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=4182s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "keynote"
tags: [code-quality, durable-software, disposable-software, ai-coding-agents, engineering-rigor, software-structure, cost-of-rigor]
confidence: "high"
---

# Does Code Quality Even Matter?

> The author of Code Simplicity reduces all software success to understanding and execution, splits software into durable versus disposable, and answers the title directly: quality matters for durable software, not for disposable software — and rigor does not have to be expensive.

## TL;DR
- All software success depends on exactly two factors: understanding the system and executing on that understanding. Every code-quality practice — tests, debuggers, observability, evals — exists only to serve those two.
- Code exists to give software an understandable structure. Every modification carries two risks: it introduces a problem, or it makes future changes harder. Both risks are failures of understanding, and they compound non-linearly.
- AI coding tools create a new dominant category: disposable software. It has minimal consequences of failure, few dependencies, no change management, and near-zero cost of replacement and maintenance. For it, code quality does not matter.
- Durable software is not going away. Its absolute amount will grow, and it stays the most important software in the world. For it, engineering rigor matters greatly.
- You can deliberately make software more disposable: isolated environments, enforced independence, redundancy behind vibe-coded tools, and tight scope limits.
- The cheaper you make rigor — through standardization, in-workflow tooling, easy testing, and maximum lint strictness — the less it matters where your software sits on the durable-to-disposable scale, because you can afford to be wrong.

## Key lessons
1. Reduce every software goal to two factors: understanding and executing on that understanding. This holds for aligning a model, scaling a system, or driving adoption. Debuggers, observability, evals, and tests all exist to improve one of those two — nothing else.
2. The two most important understandings for a software engineer are: what the actual behavior of the system is (not what the documentation says), and how to correctly and safely modify that behavior.
3. The whole reason code exists is structure. A Hello World program and a raw instruction list print the same output, but only structured code has a recognizable identity you can understand at scale. Readability and testability were always proxies for understandable structure.
4. Every postmortem he has ever read reduces to two understanding failures: the system was too hard to understand (configuration, emergent properties), or a change made it harder to understand. These two risks feed each other and compound non-linearly over time, until every change to a system causes a problem — the state of giant 100-500 million line mainframe codebases.
5. Classify software with four factors: consequences of failure, dependencies and change management, cost of replacement, and cost of maintenance. All low means disposable software (a one-off party planner, a personal calculator — write it, use it, throw it away). All high means durable software.
6. Err toward durable: experienced engineers know all four factors usually turn out higher than expected. But you can also engineer disposability on purpose — deploy to isolated environments with no customer data or personally identifiable information, forbid inbound production API calls, keep an old durable clunky backup system behind vibe-coded frontends, and limit scope to one user or one task.
7. Reducing the cost of rigor is its own discipline, separate from rigor itself. Standardization removes possibilities (no PHP means no PHP linters, practices, or security holes to manage). In-workflow tooling runs without the programmer choosing it, so rigor feels free. Test infrastructure should make every test fast and deterministic without deep testing expertise — and coding agents can now write the in-memory fake services that test owners always wanted. Maximum lint strictness from day one avoids hundred-thousand-line cleanup changes later in a million-line codebase.
8. The framework converts "it depends" into answers: does code quality matter for disposable software? No. For durable software? Yes. And does it have to be expensive? No.

## Notable quotes
- "Everything we have ever done in the field of code quality is exclusively and only for these two things." [01:12:11 | 10:00:02 AM]
- "I can reduce every postmortem I have ever read for any incident to these two factors in one way or another." [01:16:02 | 10:03:53 AM]
- "This category has always existed, but it's about to become a hundred thousand times more common than any other form of software." [01:17:23 | 10:05:15 AM]
- "In the future, we will apply engineering rigor to the degree of disposability of the software." [01:19:34 | 10:07:26 AM]

## Session narrative
The record opens with the MC hand-off (which shares its start boundary with the previous segment): Max Kanat-Alexander is introduced as principal software engineer at Capital One and author of Code Simplicity, here to explain "the missing principles around code quality." He starts a few minutes after his 9:54 AM agenda slot, taking the stage at about 9:58 AM. He opens with a joke about picking "a nice, uncontroversial topic that nobody has any opinions about," mocks the shallowness of social-media takes on the question, and dismisses the senior engineer's universal answer — "It depends" — as unhelpful. His stated goal is a framework that lets everyone reason about the question instead of trading slogans.

The core argument: everything you want to accomplish with software depends on two factors alone, understanding and executing on that understanding. He grounds this in the toolchain — debuggers, observability, evals, and tests all exist for one of those two purposes and nothing else. For engineers, the two key understandings are the actual behavior of the system and how to safely modify it. He illustrates with a map of the Chromium codebase: nobody can describe Chromium's behavior as a whole, but anyone can describe a component such as its URL parser, because code exists to provide understandable structure. Every modification carries two categories of risk — introducing a problem, and making future changes harder — and both are failures of understanding that compound non-linearly. He claims every incident postmortem he has ever read reduces to these two factors.

The AI turn avoids the "future models will fix it" debate. Instead, he argues models are creating a new category that is "about to become a hundred thousand times more common than any other form of software": disposable software, defined by four low factors (consequences of failure, dependencies, change management, cost of replacement and maintenance). When replacement costs hours and failure costs nothing, quality stops mattering. He is explicit that durable software is not going away — it stays the most important software, and its absolute amount will grow because AI coding tools make durable software easier to build — and that the biggest confusion on social media is conflating the two categories. The new move he proposes is to engineer disposability deliberately, through isolated environments, enforced independence, redundancy (an old clunky backup system behind vibe-coded frontends), and scope limits. He calls this a whole new discipline of software engineering.

He closes by attacking the cost of rigor rather than rigor itself: standardization eliminates possibilities, in-workflow tooling makes checks feel free, test infrastructure should make fast deterministic tests the default (coding agents can now write the in-memory fakes he always wanted from service owners), and maximum lint strictness from the start prevents massive cleanup changes later. With about five minutes left on the timer, he converts the framework into direct answers: quality does not matter for disposable software, matters greatly for durable software, and does not have to be expensive. He thanks the audience and leaves the stage at about 10:14 AM, followed by applause and transition.

## Speaker details
**Max Kanat-Alexander** - Principal Software Engineer, Capital One. Max is the Technical Lead for AI-Assisted Software Development at Capital One. He was previously Chief Architect of the Bugzilla Project, Tech Lead for Code Health at Google, and a Technical Lead for Developer Productivity and Happiness at LinkedIn. He is the author of the books Code Simplicity and Understanding Software, and he published Google's code review guidelines and the LinkedIn Developer Productivity and Happiness Framework. He says he spends about 5 hours a day talking to his best friends Claude and Codex.

Links: [LinkedIn](https://linkedin.com/in/mkanat) | [Twitter/X](https://x.com/mkanat) | [Website](https://www.codesimplicity.com/)

## Full timestamped transcript
```
[01:09:42 | 9:57:34 AM] Here to help us understand the missing principles around code quality.
[01:10:01 | 9:57:52 AM] Quality and finding a path through competing viewpoints.
[01:10:04 | 9:57:56 AM] Please welcome Max Kanat-Alexander, principal software engineer at Capital One and author of Code Simplicity.
[01:10:15 | 9:58:07 AM] All right.
[01:10:34 | 9:58:26 AM] So today I figured I'd just pick a nice, uncontroversial topic that nobody has any opinions about, right?
[01:10:41 | 9:58:33 AM] Nobody's said anything on this about social media, you know.
[01:10:45 | 9:58:37 AM] And of course, every take about this on social media is, like, really deeply nuanced, you know.
[01:10:51 | 9:58:42 AM] Like, people have lots of, like, depth and, like, you know, really big thoughts.
[01:10:55 | 9:58:46 AM] You know, maybe there's a little bit more to it than, like, yes or no.
[01:10:59 | 9:58:50 AM] And, you know, of course, if you ever ask a senior engineer a question, we always have the same answer to every question.
[01:11:04 | 9:58:56 AM] Every senior engineer's favorite answer to every question, which is, It depends.
[01:11:10 | 9:59:02 AM] Now, that's not a very helpful answer, though, frankly, because what does it depend on?
[01:11:17 | 9:59:08 AM] So let's start with this.
[01:11:19 | 9:59:11 AM] Why did code quality ever matter in the first place?
[01:11:22 | 9:59:13 AM] Like, I see a lot of people be like, Well, it made me feel good.
[01:11:25 | 9:59:16 AM] That's not really a sufficient justification.
[01:11:27 | 9:59:18 AM] So let's see if we can inject some nuance into this conversation and help everybody at least be able to have a basis for reasoning about it while we're discussing it.
[01:11:35 | 9:59:26 AM] So let's see if we can make a framework here, and that's what we're going to try to do with this talk.
[01:11:38 | 9:59:30 AM] Okay.
[01:11:39 | 9:59:31 AM] So we're going to start off with everything you want to ever accomplish with a piece of software depends on two factors and two factors alone, and that is understanding and executing on that understanding, whether that's aligning a model, scaling a system, driving adoption, anything.
[01:11:54 | 9:59:45 AM] All software success is determined by these two factors.
[01:11:58 | 9:59:49 AM] This is why we have things like debuggers and observability and evals and even tests.
[01:12:02 | 9:59:54 AM] All those things actually are there to improve your understanding or ability to execute on that understanding.
[01:12:06 | 9:59:58 AM] People think that they're there for other reasons, but fundamentally they're there for that reason.
[01:12:11 | 10:00:02 AM] Everything we have ever done in the field of code quality is exclusively and only for these two things.
[01:12:18 | 10:00:10 AM] It's not for anything else.
[01:12:20 | 10:00:11 AM] It doesn't have something to do with correctness or something else.
[01:12:22 | 10:00:13 AM] It has to do only with these two things.
[01:12:24 | 10:00:15 AM] Now, there's two understandings that are the most important to have if you're going to be a software engineer.
[01:12:29 | 10:00:21 AM] There are other understandings to have about software if you're going to be a product, if you're going to be in sales.
[01:12:33 | 10:00:25 AM] But if you're a software engineer, there's the two that are the most important.
[01:12:36 | 10:00:27 AM] And the first is, what is the behavior of the system, like the concretely, not what does a doc say the behavior of the system is, but what is the actual behavior of the system?
[01:12:45 | 10:00:36 AM] And the second one is, how do I correctly and safely modify that behavior?
[01:12:51 | 10:00:43 AM] Okay.
[01:12:52 | 10:00:43 AM] On a very small system, if you want to understand what the system does, I just tell you what it does.
[01:12:59 | 10:00:50 AM] It prints hello world.
[01:13:00 | 10:00:51 AM] You say, I want it to say hi world.
[01:13:01 | 10:00:53 AM] I say, okay, I will make it say hi world now.
[01:13:04 | 10:00:56 AM] There's very little to understand about it other than purely what it does.
[01:13:08 | 10:01:00 AM] And that's all of the understanding that you need.
[01:13:11 | 10:01:02 AM] However, any real software system is enormously complex.
[01:13:15 | 10:01:06 AM] This is a real map of the code base of Chromium, which is the open source project behind Chrome.
[01:13:23 | 10:01:15 AM] And if you think about all of the different ways that these components can interact, they have essentially infinite possible behaviors.
[01:13:31 | 10:01:23 AM] Like, I could not describe to you in words the behavior of Chromium as a whole, as a system.
[01:13:39 | 10:01:30 AM] However, what I can describe to you, and as we all know, everybody's been a software engineer for a while, I can describe to you components of the system.
[01:13:47 | 10:01:38 AM] I can successfully describe to you how a component of the system behaves.
[01:13:52 | 10:01:43 AM] So this is the URL parser, the actual functions and stuff for the URL parser of Chromium.
[01:13:56 | 10:01:48 AM] It figures out all the different parts of the URL.
[01:14:00 | 10:01:51 AM] And This is the whole reason that code exists.
[01:14:06 | 10:01:57 AM] The whole reason that we have code at all in the first place is for structure.
[01:14:13 | 10:02:04 AM] Because, what do I mean by that?
[01:14:15 | 10:02:06 AM] Okay.
[01:14:16 | 10:02:07 AM] So both of these two things on the left and on the right will print Hello World if run on a Linux machine.
[01:14:23 | 10:02:14 AM] However, on the left, you can see that it is Hello World.
[01:14:27 | 10:02:18 AM] It has the identity and structure of Hello World.
[01:14:31 | 10:02:23 AM] On the right, you just see a series of instructions with no particular identity, recognizable or understandable identity.
[01:14:38 | 10:02:29 AM] It's not a component.
[01:14:39 | 10:02:30 AM] It's just a bunch of instructions.
[01:14:40 | 10:02:32 AM] While that's understandable there, if that was millions or billions of lines of that, it would be much harder to grok.
[01:14:47 | 10:02:38 AM] In the past, we've talked about things like readability or testability or things that seemed like human concepts about code.
[01:14:54 | 10:02:46 AM] But what actually mattered the most always was that the system had some sort of understandable structure.
[01:15:00 | 10:02:52 AM] So it's the structure that actually matters.
[01:15:04 | 10:02:55 AM] And when this matters the most is when you want to modify the system, the second understanding that we talked about.
[01:15:13 | 10:03:04 AM] All modifications to a system carry two categories of risk.
[01:15:16 | 10:03:08 AM] The first is that you will introduce some sort of problem.
[01:15:18 | 10:03:10 AM] And a problem isn't just a bug.
[01:15:20 | 10:03:12 AM] It's anything bad that could happen.
[01:15:22 | 10:03:14 AM] Like your project could take much longer than you expect.
[01:15:26 | 10:03:17 AM] It could not behave in the way that you wanted it to for your users.
[01:15:28 | 10:03:20 AM] The project could fail because you have budget overruns.
[01:15:31 | 10:03:23 AM] Any kind of problem could happen from just you trying to go through the process of making this change.
[01:15:36 | 10:03:28 AM] And the second is you could make it harder to make future changes.
[01:15:41 | 10:03:32 AM] In particular, what that means is you could make it more likely to have future problems.
[01:15:44 | 10:03:35 AM] You could increase future risk of the system.
[01:15:47 | 10:03:38 AM] These two things are caused by problems with understanding.
[01:15:53 | 10:03:44 AM] So the first has to do with the difficulty of understanding the system in the first place, and the second is you make the system harder to understand.
[01:16:02 | 10:03:53 AM] I can reduce every postmortem I have ever read for any incident to these two factors in one way or another.
[01:16:10 | 10:04:02 AM] The production configuration was too hard to understand.
[01:16:12 | 10:04:04 AM] Somebody made something impossible to understand.
[01:16:14 | 10:04:05 AM] There were emergent properties of the system that were impossible to understand.
[01:16:18 | 10:04:09 AM] Whatever.
[01:16:18 | 10:04:10 AM] Point two feeds into point one in a vicious cycle that compounds in a non-linear fashion.
[01:16:27 | 10:04:19 AM] So the difficulty of understanding does not grow linearly; it compounds over time.
[01:16:33 | 10:04:25 AM] You will eventually reach a point, and all systems eventually tend to reach this point, where every modification involves some sort of problem.
[01:16:45 | 10:04:36 AM] And, you know, some systems get to the point where, like, you can't modify them at—like, if you think of, like, you know, some of, like, your giant 100 million, 500 million line mainframe codebases, then everything, every change is some sort of problem.
[01:16:57 | 10:04:49 AM] You know, you'll see it in organizational issues.
[01:16:59 | 10:04:50 AM] You'll see it all over the place.
[01:17:00 | 10:04:51 AM] You'll see it in timelines, whatever.
[01:17:03 | 10:04:54 AM] And look, there's a lot of arguments about maybe future models will fix this.
[01:17:06 | 10:04:58 AM] Look, maybe they will.
[01:17:08 | 10:04:59 AM] Maybe future models will have infinite ability to deal with complexity somehow.
[01:17:11 | 10:05:03 AM] But we don't have to discuss that today, because I think models are doing something else really interesting right now.
[01:17:18 | 10:05:09 AM] They are creating a new kind of software, a new category of software.
[01:17:23 | 10:05:15 AM] This category has always existed, but it's about to become a hundred thousand times more common than any other form of software.
[01:17:33 | 10:05:24 AM] And that is disposable software.
[01:17:37 | 10:05:28 AM] So what is that?
[01:17:38 | 10:05:30 AM] Okay, so imagine a world in which the consequences of failure for your system are very minimal or non-existent.
[01:17:47 | 10:05:38 AM] Imagine that there's very few people that depend on it, and almost no other systems depend on that piece of software.
[01:17:53 | 10:05:45 AM] Change management, very minimal, non-existent.
[01:17:57 | 10:05:48 AM] Imagine that the cost of replacement went to near zero.
[01:18:00 | 10:05:52 AM] You could replace the whole thing in hours or days, and it had basically no cost of maintenance.
[01:18:06 | 10:05:58 AM] In that world, code quality does not matter, because all of those things we are trying to prevent about the compounding risks over time don't exist.
[01:18:21 | 10:06:12 AM] Traditionally, we've always built durable software.
[01:18:26 | 10:06:17 AM] You know, it lives for years.
[01:18:27 | 10:06:18 AM] It's depended on by millions or thousands of people.
[01:18:29 | 10:06:21 AM] There's huge consequences of failure, potentially business catastrophic consequences of failure, and it requires enormous maintenance.
[01:18:37 | 10:06:28 AM] Most of the software engineers in the world spend most of their time maintaining these giant durable systems.
[01:18:43 | 10:06:34 AM] I expect this to continue to exist.
[01:18:46 | 10:06:37 AM] So this is one of the areas where I think sometimes the conversation goes a little astray, okay?
[01:18:51 | 10:06:43 AM] Durable systems will continue to probably be the most important systems in the world, and there will be probably more of them.
[01:19:01 | 10:06:52 AM] But the most numerous systems will be disposable software.
[01:19:07 | 10:06:59 AM] They will be replaceable in hours.
[01:19:09 | 10:07:00 AM] They will be depended on by a few, or change management just won't matter.
[01:19:12 | 10:07:04 AM] And look, if it doesn't work, well, give everybody agents.
[01:19:15 | 10:07:07 AM] They'll make a version of it themselves.
[01:19:18 | 10:07:09 AM] You know, maintenance will be unimportant or nearly free.
[01:19:20 | 10:07:12 AM] Don't like the calculator on your OS?
[01:19:22 | 10:07:14 AM] Make your own.
[01:19:24 | 10:07:15 AM] Want to plan a party for your kids?
[01:19:26 | 10:07:18 AM] Write a party planner software just for that one party.
[01:19:30 | 10:07:22 AM] Throw it away.
[01:19:31 | 10:07:23 AM] Code quality doesn't matter.
[01:19:33 | 10:07:25 AM] Nobody cares.
[01:19:34 | 10:07:26 AM] In the future, we will apply engineering rigor to the degree of disposability of the software.
[01:19:41 | 10:07:33 AM] On the left, nothing.
[01:19:44 | 10:07:35 AM] None of our practices of engineering rigor matter at all.
[01:19:47 | 10:07:38 AM] On the right, all the practices of engineering that we have built up over the last many decades matter greatly.
[01:19:53 | 10:07:45 AM] We can determine where you are on this scale by those four factors that I have been talking about.
[01:19:59 | 10:07:51 AM] About consequences, cost of replacement, dependencies, and cost of maintenance.
[01:20:03 | 10:07:55 AM] If they're all low, it's disposable software.
[01:20:05 | 10:07:57 AM] If they're all high, it's durable software.
[01:20:08 | 10:07:59 AM] And look, any person who's written software for a long time knows you should err on the side of it being durable.
[01:20:13 | 10:08:04 AM] You should err on these all being higher than you expect them to be.
[01:20:17 | 10:08:09 AM] But there's also a new thing you can do in the world.
[01:20:22 | 10:08:14 AM] You can make software more disposable.
[01:20:26 | 10:08:17 AM] So, like, what does that involve?
[01:20:28 | 10:08:20 AM] Well, come up with better isolated environments, right?
[01:20:31 | 10:08:23 AM] So, hey, you can only deploy to this environment that has access to only your data.
[01:20:35 | 10:08:27 AM] No customer data, no personally identifiable information, whatever.
[01:20:40 | 10:08:31 AM] You can enforce independence.
[01:20:42 | 10:08:33 AM] You can say, okay, no inbound API calls from other production systems are allowed to this system in this environment, right?
[01:20:49 | 10:08:40 AM] And so everything deployed to that environment is disposable.
[01:20:52 | 10:08:43 AM] Redundancy.
[01:20:53 | 10:08:44 AM] You can have an old, clunky backup system that is, like, hard to use.
[01:20:57 | 10:08:48 AM] And then, like, look, if people want to vibe code their own, like, more efficient frontends, you let them vibe code their own more efficient frontends because there is an old, durable, clunky backup system that they can use if their, you know, crappy little vibe-coded thing fails.
[01:21:09 | 10:09:01 AM] Which it will fail, right?
[01:21:10 | 10:09:02 AM] That's fine.
[01:21:11 | 10:09:03 AM] But it doesn't matter if it fails.
[01:21:13 | 10:09:05 AM] And you can limit scope, just like I talked about, right?
[01:21:15 | 10:09:07 AM] It's just a calculator for this one person.
[01:21:18 | 10:09:09 AM] It just plans this one party.
[01:21:20 | 10:09:12 AM] There's so much more we could do here and talk about ways of increasing disposability.
[01:21:26 | 10:09:18 AM] In fact, I think this is a whole new discipline of software engineering, not to think about how we improve the rigor of durable systems, but how do we take our systems and how do we encourage disposability or allow more disposability, allow people to throw these things away.
[01:21:44 | 10:09:35 AM] Interesting thought.
[01:21:45 | 10:09:36 AM] Now, I want to reemphasize that durable software engineering is not going away because this is the biggest confusion that I see on social media today.
[01:21:55 | 10:09:46 AM] In fact, I believe the absolute amount of durable software in the world will increase because AI coding tools make it easier and easier to make more durable software.
[01:22:06 | 10:09:58 AM] And another important thing to understand is that disposable and durable are not black and white.
[01:22:12 | 10:10:04 AM] There's a spectrum, like I showed before, but that spectrum, what changes across the spectrum is how much effort you're going to put into engineering rigor, okay?
[01:22:22 | 10:10:13 AM] And that's both immediate effort and effort over time, just like we've always talked about for software.
[01:22:27 | 10:10:19 AM] However, what you want to do, and I think what you want to care about the most, is reducing the cost of effort, reducing the cost of rigor.
[01:22:37 | 10:10:29 AM] Like, if rigor is cheaper, if it's the easier and easier you make it to be rigor, the less you have to worry about where you are on the scale.
[01:22:46 | 10:10:37 AM] So this is another approach you can take.
[01:22:49 | 10:10:40 AM] If you change your mind, it's much easier to, like, you're like, Oh, I thought this was going to be disposable and now it needs to be durable.
[01:22:55 | 10:10:47 AM] The cheaper you make it to make it durable, the easier it is to change your mind or to be wrong because you're never going to be 100% right all the time on that estimate.
[01:23:05 | 10:10:56 AM] So that involves a different set of practices that are not engineering rigor themselves, but that are about how to decrease the cost of engineering rigor.
[01:23:15 | 10:11:07 AM] Now, I could talk about this for hours.
[01:23:17 | 10:11:08 AM] I have spent a tremendous amount of my career doing this.
[01:23:20 | 10:11:11 AM] I don't have 10 hours.
[01:23:21 | 10:11:13 AM] I have about five minutes left on that timer.
[01:23:23 | 10:11:15 AM] So I'll talk about what I can, okay?
[01:23:28 | 10:11:19 AM] Let's talk about standardization.
[01:23:30 | 10:11:21 AM] Why do we do standardization?
[01:23:31 | 10:11:22 AM] People are like, Well, I don't know, because the boss said so.
[01:23:34 | 10:11:26 AM] Well, no, we do standardization because it removes possibilities.
[01:23:39 | 10:11:31 AM] If you don't have any PHP in your system, you don't have to figure out what are all the linters for PHP, what are all the practices, what are all the security holes I have to fix.
[01:23:49 | 10:11:40 AM] You just eliminate possibilities through standardization, and it just reduces the cost of rigor.
[01:23:55 | 10:11:46 AM] Same thing with, like, frameworks.
[01:23:56 | 10:11:47 AM] Like, why don't you want to have every front-end framework or every back-end framework in existence?
[01:24:01 | 10:11:52 AM] Because it makes rigor more expensive.
[01:24:02 | 10:11:54 AM] Like, yes, rigor is still possible.
[01:24:03 | 10:11:55 AM] Yes, you could still have the agent code up all your tools, but you have to do it every single time.
[01:24:07 | 10:11:59 AM] You know, protocols.
[01:24:09 | 10:12:00 AM] Why do you want to have standardized RPC protocols?
[01:24:12 | 10:12:03 AM] All the same thing.
[01:24:13 | 10:12:05 AM] Standards are all for this reason.
[01:24:16 | 10:12:07 AM] Okay?
[01:24:16 | 10:12:08 AM] What I call in-workflow tooling.
[01:24:17 | 10:12:09 AM] So in-workflow tooling is tooling that just occurs.
[01:24:20 | 10:12:11 AM] The programmer doesn't have to choose to run it.
[01:24:21 | 10:12:13 AM] They don't have to understand how it runs.
[01:24:23 | 10:12:15 AM] It just happens.
[01:24:24 | 10:12:16 AM] If it's there, it feels and seems free, and it is reliable.
[01:24:30 | 10:12:21 AM] Reliability is very, very important.
[01:24:31 | 10:12:22 AM] Like, it doesn't have a ton of false positives.
[01:24:33 | 10:12:25 AM] It's fast.
[01:24:34 | 10:12:25 AM] It just happens.
[01:24:35 | 10:12:26 AM] And the more that's true, like, you can apply it to your disposable software too.
[01:24:38 | 10:12:29 AM] If it's free and fast, who cares?
[01:24:42 | 10:12:34 AM] Making testing easier.
[01:24:43 | 10:12:35 AM] So this is not just about, like, hey, how do we do better testing?
[01:24:46 | 10:12:38 AM] Look, how do you make it so that nobody has to think about how to do better testing?
[01:24:51 | 10:12:42 AM] How do you make it so that every test is fast and deterministic without anybody having to be a deep expert in testing?
[01:24:58 | 10:12:50 AM] There's a ton of work that you have to put into test infrastructure to make that possible.
[01:25:03 | 10:12:55 AM] For example, you know, one of the great dreams that I've always had as a test owner is that everybody would provide in-memory fake versions of their services, and I could just run those in-memory fake versions of their services.
[01:25:14 | 10:13:05 AM] Guess what?
[01:25:15 | 10:13:06 AM] The coding agent can do that.
[01:25:16 | 10:13:07 AM] So you can just do that now, right?
[01:25:17 | 10:13:09 AM] But you have to choose to do it and make it available to everybody.
[01:25:21 | 10:13:13 AM] And another thing is, look, maximum strictness.
[01:25:24 | 10:13:16 AM] You just turn the strictness up everywhere.
[01:25:26 | 10:13:17 AM] You set all your lint rules to maximum.
[01:25:28 | 10:13:20 AM] You never compromise on anything, and it just eliminates—it's very similar to standardization.
[01:25:33 | 10:13:25 AM] It eliminates a ton of conversations.
[01:25:35 | 10:13:27 AM] Sometimes the linter is wrong.
[01:25:36 | 10:13:28 AM] Like, as long as the false positive rate is relatively low and it doesn't have catastrophic consequences, it doesn't matter, because all of a sudden there's a bunch of future lint errors or future issues that you don't have to deal with.
[01:25:46 | 10:13:37 AM] Like, ask anybody who's been like, Oh, I suddenly want to turn on my linter in this million-line codebase, and they're like, Oh wow, now here's my hundred-thousand-line change that I need to make, right?
[01:25:55 | 10:13:46 AM] Much easier to just do that up front and have it on for everybody.
[01:25:57 | 10:13:49 AM] Now, look.
[01:25:58 | 10:13:49 AM] Like I said, I could literally stand here and talk to you about this straight for 10 hours.
[01:26:03 | 10:13:54 AM] There is much, much more you can do here.
[01:26:05 | 10:13:57 AM] This is just a few areas, but also a whole area of software engineering discipline that you can apply on the other axes.
[01:26:11 | 10:14:03 AM] So this lets us now answer our question, not just it depends, but yes or no.
[01:26:18 | 10:14:10 AM] So does code quality even matter for disposable software?
[01:26:25 | 10:14:16 AM] No.
[01:26:26 | 10:14:17 AM] For durable software?
[01:26:28 | 10:14:19 AM] Yes.
[01:26:28 | 10:14:20 AM] And we get to answer a third and even more interesting question, which is, does it have to be expensive?
[01:26:34 | 10:14:26 AM] No.
[01:26:36 | 10:14:28 AM] Thank you very much.
```
