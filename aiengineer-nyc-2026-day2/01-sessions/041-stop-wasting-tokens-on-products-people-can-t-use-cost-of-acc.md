---
session_id: "041"
title: "Stop Wasting Tokens on Products People Can’t Use"
agenda_title: "Stop Wasting Tokens on Products People Can’t Use -- Jemima Abu (CAIS)"
speakers: [Jemima Abu]
start_wall: "4:07:06 PM ET"
end_wall: "4:17:07 PM ET"
video_start: "07:26:30"
video_end: "07:36:31"
video_url: "https://www.youtube.com/watch?v=jiUC6IUMdvc&t=26790s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: [accessibility, ai-agents, vibe-coding, cost-of-ownership, front-end-engineering, inclusive-design]
confidence: "high"
---

# Stop Wasting Tokens on Products People Can’t Use

> Jemima Abu (CAIS) argues that letting AI agents ship inaccessible products wastes tokens, time, and money — her experiment saw a 58% cost reduction and one-third the build time when the agent ran with an accessibility skill.

## TL;DR
- WebAIM's study found 96% of homepages of the top one million websites have some form of accessibility issue.
- Abu ran the same prompt ("implement this design from Figma") twice against her work codebase: with her accessibility skill, the agent cut cost by 58% and finished in a third of the time.
- Unguided agents absorb a codebase's "works-for-me" bias and default to verbose code, reinventing semantic HTML elements in custom JavaScript.
- Accessibility must be baked in from the start — like blueberries in a muffin — not pasted on as ARIA labels after the build.
- Inaccessible products carry business and legal cost: lost customers and Americans with Disabilities Act fines and lawsuits.
- Her recipe: define platform accessibility requirements, audit the existing codebase, build a reusable design system, and enforce a mandatory accessibility skill.

## Key lessons
1. A one-off experiment on her work codebase ran the same plain prompt — "implement this design from Figma" — twice: once with no accessibility skill, once with a skill she wrote. With the skill the agent cost 58% less and finished in a third of the time [07:27:57 | 4:08:32 PM]. She flags the caveat herself: it was one run in an unconstrained environment, "so it cannot serve as empirical data that proves the fact" [07:28:18 | 4:08:54 PM].
2. Human bias becomes AI bias. A codebase built with a developer "works-for-me" mindset teaches the agent that accessibility was never a constraint, so the more agent-generated code you add, the more inaccessible the codebase becomes [07:30:16 | 4:10:51 PM] through [07:30:52 | 4:11:27 PM].
3. AI defaults to verbose code. Asked to "build a simple accordion component," an agent will not check whether an existing semantic element already provides the behavior; it rebuilds from scratch, which demands more testing and more feature replication of native functionality [07:31:00 | 4:11:35 PM] through [07:31:36 | 4:12:11 PM].
4. Accessibility has to be designed in, not retrofitted. The blueberry muffin analogy: a plain muffin with blueberries shoved on top is not a blueberry muffin; a finished website with ARIA labels shoved in is not accessible [07:31:46 | 4:12:21 PM] through [07:32:09 | 4:12:44 PM]. Waiting until the end forces regressive testing and rewrites of far more code [07:32:29 | 4:13:04 PM].
5. "None of our users rely on assistive technologies" is a self-fulfilling prophecy: people who use assistive technologies cannot use the site, so they never arrive. She compares it to a business with no door — no one can enter [07:32:47 | 4:13:22 PM] through [07:33:12 | 4:13:47 PM].
6. There are legal repercussions in the United States: the Americans with Disabilities Act requires public-facing products to be usable by people with disabilities, on pain of fines and lawsuits [07:33:15 | 4:13:50 PM].
7. The four-step recipe for accessible agent output: define accessibility requirements for your platform; audit the existing codebase and fix pre-existing issues before the agent copies them as best behavior; implement a reusable design system or component library; enforce a mandatory accessibility skill [07:34:06 | 4:14:41 PM] through [07:35:03 | 4:15:38 PM]. She recommends a skill that steers agents toward the newest HTML and CSS instead of custom JavaScript [07:35:15 | 4:15:50 PM].
8. A lightweight accessibility skill for vibe coding sets the bare minimum: semantic HTML wherever possible, ARIA only when semantic HTML cannot express the behavior, keyboard operability for every mouse-operable element, proper labels readable by screen readers, and an agent-run audit against those steps before the code runs — with manual testing still required because no single tool makes a site fully accessible [07:35:38 | 4:16:13 PM] through [07:36:00 | 4:16:35 PM].

## Notable quotes
"And I'm going to be talking to you about the cost of accessibility in AI, or as I like to call it, stop wasting tokens on building products that people can't use." [07:26:31 | 4:07:06 PM]

"We see that not only was it cheaper, but it also took a third of the time to finish the prompt while using the accessibility skill." [07:28:07 | 4:08:43 PM]

"If you have a fully built website and then once it's done, you start shoving in ARIA labels in different places, that is not an accessible website." [07:32:02 | 4:12:37 PM]

"It's not that your users don't rely on assistive technologies, it's that people with assistive technologies cannot use your website in the first place, so they just never go to it." [07:32:57 | 4:13:32 PM]

## Session narrative
Jemima Abu walked on with no host introduction, straight after the applause for the Prime Intellect talk, and opened directly with her thesis: the cost of accessibility in AI, "or as I like to call it, stop wasting tokens on building products that people can't use" [07:26:31]. She defined accessibility as the quality of being usable by anyone regardless of disability, which makes an inaccessible product inherently useless, and tied it to the vibe-coding era: "It's all very well and good to vibe code five different apps in one day, but if people can't use those apps, then is there really any point?" [07:27:08]. She grounded the problem with WebAIM's finding that 96% of homepages of the top one million websites have some accessibility issue, and rejected the usual "it takes too long" excuse — arguing that with AI writing most of the code, accessibility got easier, and it is inaccessible products that now cost more time and money.

The core evidence was her experiment on her work codebase. She gave an agent one plain prompt with no guidelines — "implement this design from Figma" — and ran it twice: once without any accessibility skill, once with a skill she had written. With the skill the agent was faster, showed a 58% reduction in cost, and finished the prompt in a third of the time [07:27:57, 07:28:07]. She was scrupulous about the limitation — a one-off, unconstrained run that "cannot serve as empirical data" — then used it to introduce herself mid-talk: Jerima Abu (as the ASR renders it), product engineer at "K" (CAIS), Google Dev Expert, Microsoft MVP, and certified professional in accessibility core competencies [07:28:36-07:28:42].

She then explained the mechanism. An agent is "super intelligent" but "just three years old" and impressionable — tell it enough times the sky is red and it will accept that [07:29:11]. Her analogy was the Netflix show Old Enough, where toddlers succeed at first errands because parents prepare every step beforehand; agents need the same skills and guidance. Without it, two failure modes follow: human bias becomes AI bias as the agent absorbs a "works-for-me" codebase, and AI defaults to verbose code, reinventing semantic elements like accordions in custom JavaScript that then need heavy testing. Her blueberry muffin analogy made the design point — blueberries must be baked in from the start — and she widened responsibility from developers to everyone from business idea to design to QA, noting that late accessibility forces regressive testing and rewrites. She closed the argument with business and legal stakes: the assistive-technology claim is a self-fulfilling prophecy (a business with no door gets no customers), and the Americans with Disabilities Act exposes public-facing products to fines and lawsuits — leavened by her joke that at least you get "this really cute sticker on Microsoft Teams, so, you know, weigh your options" [07:33:28].

The final section gave the recipe: define accessibility requirements per platform; audit the existing codebase and fix pre-existing issues before the agent copies them; implement a reusable design system or component library; and enforce a mandatory accessibility skill, such as the one she likes that pushes agents to the newest HTML and CSS over custom JavaScript. For vibe coding on small codebases she offered a lightweight skill — semantic HTML first, ARIA only when needed, keyboard operability, proper labels, and a pre-run audit — plus the honest caveat that manual testing is still required. She ended with "build things to be accessible," thanked the audience, and invited them to reach out online at Jemima Abu on LinkedIn, Twitter, or GitHub. Note on scheduling: the agenda listed this as an 11:30am breakout in the McCarthy Room (Riverside Suite); the main-stage stream aired it here at about 4:07 PM ET, which is why this record carries the Simons Room livestream stage rather than the agenda room.

## Speaker details
**Jemima Abu** - Senior Product Engineer, CAIS. Self-taught front-end developer, Google Developer Expert, Microsoft MVP, and Certified Professional in Accessibility Core Competencies. She is passionate about diversity in technology and accessibility in web development. Links: [LinkedIn](https://www.linkedin.com/in/jemimaabu/), [Twitter](https://twitter.com/jemimaabu/), [Website](https://www.caisgroup.com/). (The transcript's ASR renders her name "Jerima Abu" / "Jemima Ambu" and her employer as "K"; the agenda and speaker record confirm Jemima Abu at CAIS. She self-identifies in the session as a product engineer at an alternative investment platform.)

## Full timestamped transcript
```
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
```
