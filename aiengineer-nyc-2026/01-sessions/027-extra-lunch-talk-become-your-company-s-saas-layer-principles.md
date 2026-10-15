---
session_id: "027"
title: "Become your company's SaaS layer — principles for building polished internal tools with agents (Railway)"
agenda_title: null
speakers: ["Unnamed Railway engineer"]
start_wall: "1:03:22 PM ET"
end_wall: "1:16:40 PM ET"
video_start: "04:15:30"
video_end: "04:28:48"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=15330s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "talk"
tags: [internal-tools, saas-replacement, agents, product-polish, agent-skills, verification, ux-patterns, railway]
confidence: "high"
---

# Become your company's SaaS layer — principles for building polished internal tools with agents (Railway)

> A Railway engineer who replaced his company's marketing SaaS with one agent-built internal tool explains the product-polish patterns agents never add on their own, packaging opinions as agent skills, and the end-to-end verification loop that closes the gap between one-shot software and tools people actually love.

## TL;DR
- "SaaS is dead" misses one point: there is a big gap between software an agent one-shots and polished software you use every day.
- The speaker replaced Railway's marketing SaaS with one all-in-one internal tool — CMS, email, social publishing, media, mini CRM, tasks, launch planning, calendar, comments, real-time editing — built entirely with agents and running on Railway.
- Agents can build polish, but only when asked: auto-save, optimistic updates, undo, archiving, URL state, and infinite scroll are patterns they skip by default.
- Point the agent at existing pages as references so you "define what good looks like once" and reuse it, and package opinions as agent skills.
- Verification is the most important step: tell the agent to test the feature end to end by actually running it — computer use made this practical.

## Key lessons
1. The gap is polish, not capability. Working one-shot software differs from daily-use software in dozens of small flows. You notice this only when you try to replicate an experience you love as a user.
2. Tech stacks matter less than a structured codebase. With solid abstractions, the agent follows existing patterns instead of reinventing them, so new features come out consistent with the old ones. His go-to choices: TanStack libraries for the web, and Payload for anything content-related ("solid experience, great abstraction").
3. Ask explicitly for auto-save. Make it a non-blocking background save while typing, and prevent the browser tab from closing on unsaved changes. Real-time collaboration is the next step up — his agent added it, "700 million tokens later".
4. Prefer optimistic updates, undo, and archiving over spinners, confirm dialogs, and deletes. Show the success state immediately and sync in the background; roll back on failure. For deletes, remove the item at once but allow a few seconds to undo. Offer archive/unarchive so users never delete just to hide something. Do not apply optimistic updates blindly — some operations still need a spinner.
5. Persist state in the URL. Filters and sort conditions held in the URL make any view trivially shareable with a teammate. Add infinite scroll so users never click "load more" or "next page".
6. Use existing pages as references. Tell the agent to match an existing page's UI, data fetching, and structure. Success rate is higher and the app stays internally consistent — though sometimes the model ignores the reference ("I don't know if models, like, get dumber sometimes").
7. Package opinions as agent skills. He reached for three while building Railway's internal tooling: one design-engineering skill for UI, typography, layouts, and error messages; one for animations; and the Railway agent skills so the agent can deploy everything (buckets, databases, the app, the real-time server) to Railway itself.
8. Verification is the most important step. "Build passed, test passed" often still means a broken experience. With a verification loop — the agent builds, tries it, fails, fixes, keeps going — the difference is "night and day". Computer use made this reliable; he now ends every feature request by telling the agent to verify it end to end by actually running the infrastructure.

## Notable quotes
- "And for me, there's one missing piece that rarely gets mentioned, and it's the fact that there's a gap, a big gap, between working software that got one-shotted and software I would actually use, software that sparks joy, that is polished, that feels good." [04:15:43 | 1:03:34 PM]
- "It was like, I don't know, asking about it, reviewing how it would work, and then once that's done, just 700 million tokens later and I had real-time." [04:21:30 | 1:09:22 PM]
- "And that made it possible for me to essentially define what good looks like once." [04:25:21 | 1:13:13 PM]
- "And I hope that you too can become your company's SaaS layer." [04:28:45 | 1:16:36 PM]

## Session narrative
This was a pre-recorded extra lunch talk played on the main-stage livestream during the lunch block, between the GPU side-channel security talk and the Southbridge "just-in-time ontologies" talk. The speaker, an engineer at Railway whose name is never stated on stream, opens by taking on the "SaaS is dead" meme: it is not even a hot take anymore, but everyone skips one missing piece — the big gap between working software that got one-shotted and software that is polished enough to use every day.

He then shows what that looks like in practice. He replaced a set of SaaS providers Railway used for marketing with a single all-in-one internal tool: content management for the website, changelog, and blog; email sending; simultaneous posting to all social platforms; media management; a mini CRM for external creators; task tracking; launch planning; a calendar; comments; and real-time editing — all built with agents and running on Railway, with everything auto-deploying. He dates his breakthrough to the release of GPT-6. In a light interlude he notes he recorded the talk not from his office but from a bench in Edinburgh, Scotland — "definitely a 10 out of 10 bench" — and adds a disclaimer that the landscape changes fast and the recording is from October 2026.

The core of the talk is his list of principles. First, tech stacks do not matter much as long as the codebase is properly structured with solid abstractions, because the agent then follows existing patterns instead of inventing new ones; his defaults are TanStack for the web and Payload for content, after deliberately comparing CMSs rather than building one from scratch. Second, a set of UX patterns agents never implement unless explicitly asked: auto-save (non-blocking, with tab-close protection and eventually real-time collaboration, which cost roughly 700 million tokens), optimistic updates with rollback, undo-able delayed deletes, archive/unarchive, URL-persisted state for shareable views, and infinite scroll. He extends this with the practice of pointing the agent at existing pages as references, which lets him define what good looks like once and reuse it, while admitting models sometimes ignore the reference.

He closes with two organizational principles: package opinions as agent skills — he used two design-engineering skills plus the Railway agent skills that let the agent deploy buckets, databases, the app, and the real-time server — and above all, verification. Agents report "build passed, test passed" while the experience stays broken, so he now ends every request by telling the agent to verify the feature end to end by actually running the infrastructure, something computer use finally made reliable. His sign-off lands the theme: with these pieces you get internal tools that are quick to build, consistent, and polished — and you, too, can become your company's SaaS layer.

## Speaker details
**Name not stated** (identified from session) - Engineer, Railway. He builds Railway's internal marketing tooling and replaced the company's marketing SaaS providers with a single agent-built tool. He recorded this talk outdoors on a bench in Edinburgh, Scotland in fall 2026 (October). No speaker record exists in the index and no name is spoken in the transcript or announcements around it; the talk is a pre-recording, so no on-stage introduction occurred.

## Full timestamped transcript
```
[04:15:31 | 1:03:22 PM] People have been saying that SaaS is dead for a while now.
[04:15:33 | 1:03:25 PM] It's not even a hot take at this point.
[04:15:35 | 1:03:27 PM] Why pay someone to build and maintain the tools you use when you could just do it yourself?
[04:15:40 | 1:03:32 PM] Just ask your agent to do it.
[04:15:43 | 1:03:34 PM] And for me, there's one missing piece that rarely gets mentioned, and it's the fact that there's a gap, a big gap, between working software that got one-shotted and software I would actually use, software that sparks joy, that is polished, that feels good.
[04:15:57 | 1:03:49 PM] And I actually went on a journey to replace a bunch of SaaS providers we were using internally at Railway for marketing purposes, and I just built an all-in-one tool that we use.
[04:16:06 | 1:03:57 PM] The tool allows us to manage content for the Railway website, changelog, blog.
[04:16:10 | 1:04:01 PM] We can use it to send emails, post on all of our social platforms at the same time, manage the website's media.
[04:16:16 | 1:04:08 PM] There's even a mini CRM so that when we're working with, like, external creators, we can keep track of that.
[04:16:22 | 1:04:13 PM] There is task tracking, launch planning, because, you know, you want to coordinate multiple things and when they'll go out.
[04:16:28 | 1:04:19 PM] There's a calendar, and at the same time, there's, like, comments, real-time editing, and it's all built using agents.
[04:16:35 | 1:04:27 PM] I would say I felt the breakthrough when GPT-6 came out, and all of this is running on Railway.
[04:16:43 | 1:04:34 PM] Everything just auto-deploys, and let me essentially now walk you through the principles I use to actually make sure that when I want to add a feature, it's, you know, actually polished and matches the rest of the app, and at the same time, the principles that you can pull from and apply when building tools of your own.
[04:17:03 | 1:04:55 PM] So instead of doing my talk from my boring office, I decided to switch things up and do it outside.
[04:17:08 | 1:05:00 PM] It is absolutely beautiful.
[04:17:10 | 1:05:01 PM] Right now I'm in Edinburgh, Scotland, and it's just unreal.
[04:17:14 | 1:05:05 PM] Like, I'm on a bench outside, and this is my view.
[04:17:18 | 1:05:09 PM] Definitely a 10 out of 10 bench.
[04:17:21 | 1:05:13 PM] Now, this type of talk for me feels a little bit different than what I'm used to because I essentially will walk you through the journey of me building our own internal tools and the opinions I've developed.
[04:17:34 | 1:05:25 PM] But I also understand that the landscape changes very, very quickly.
[04:17:39 | 1:05:30 PM] So, like, anything I say might change completely in, like, the span of months.
[04:17:44 | 1:05:36 PM] Who knows?
[04:17:45 | 1:05:36 PM] So I don't know.
[04:17:47 | 1:05:38 PM] Consider this my disclaimer.
[04:17:49 | 1:05:40 PM] Like, but the time of recording is fall 2026.
[04:17:53 | 1:05:45 PM] It's October, and yeah.
[04:17:55 | 1:05:47 PM] So anyway, with that out of the way, let's talk about the first point, which is tech stacks don't matter.
[04:18:02 | 1:05:54 PM] Now, a lot of people say that it doesn't matter what programming language you use, what framework you use.
[04:18:08 | 1:05:59 PM] You can just ask your agent to build you anything and they'll just be able to do it.
[04:18:12 | 1:06:03 PM] And while I agree to some extent, what I found is when you're building a tool that you will actually use, when you give the agent a proper codebase with solid abstractions, what ends up happening is whenever you're working, let's say, on a new feature, you end up with a much more consistent result that is similar to what you've already built before.
[04:18:34 | 1:06:25 PM] And the reason is, like, it's very simple.
[04:18:37 | 1:06:29 PM] The agent doesn't need to reinvent the same, like, wheel every time it tries to add a new feature, or it doesn't need to introduce new patterns.
[04:18:46 | 1:06:37 PM] It will just essentially follow existing patterns.
[04:18:48 | 1:06:39 PM] And when it comes to, like, what you choose, I feel like it kind of doesn't really matter as long as you have a codebase that is properly structured.
[04:18:58 | 1:06:49 PM] But, like, my go-to choice today is, one, TanStack libraries for anything when building on the web.
[04:19:04 | 1:06:56 PM] And if you're building anything content-related, I would say definitely go with Payload.
[04:19:10 | 1:07:01 PM] Solid experience, great abstraction.
[04:19:11 | 1:07:02 PM] I went down, like, a big rabbit hole of, like, comparing CMSs at some point because I don't believe that I should build it from scratch, even though I can.
[04:19:20 | 1:07:12 PM] But again, who knows?
[04:19:22 | 1:07:13 PM] Maybe the future will change.
[04:19:24 | 1:07:15 PM] But yeah, and that's kind of like the main first item that I kind of ran into.
[04:19:31 | 1:07:23 PM] When you use, like, a lot of SaaS products out there that you actually love, that you use every day, when you're a user, there's, like, a lot of things you don't notice.
[04:19:43 | 1:07:35 PM] But when you actually try to, like, replicate an experience, you quickly find out how much care and thought goes into different flows.
[04:19:51 | 1:07:42 PM] So, like, something as simple as, oh, I want to be able to send an email or to publish something.
[04:19:59 | 1:07:50 PM] You can easily do it.
[04:20:02 | 1:07:53 PM] We do it by having like a good old, you know, just like server-side rendered app with like forms that you submit.
[04:20:09 | 1:08:00 PM] But if you try to build something that is going to be used every day that you will reach for a lot, you're like, oh, it shouldn't feel that way.
[04:20:18 | 1:08:10 PM] And there are kind of like a bunch of patterns that I found that agents don't typically do unless you explicitly ask them to.
[04:20:26 | 1:08:18 PM] And this is my list.
[04:20:28 | 1:08:19 PM] So we'll go through them one by one.
[04:20:30 | 1:08:21 PM] And the first one is like auto-save.
[04:20:32 | 1:08:23 PM] I found that if, like, let's say I'm building some form of document editor, auto-save is kind of like a table stakes feature.
[04:20:40 | 1:08:31 PM] So rather than manually clicking save to save things, you just ask it to automatically save progress in the background and to make sure that it's like a non-blocking action so that you can, let's say, as you're typing, you're able to type and then it just automatically saves.
[04:21:00 | 1:08:51 PM] And one other kind of like step further that you could do is to also prevent the browser tab from closing if there are unsaved changes.
[04:21:10 | 1:09:02 PM] So it's kind of like these two layers that kind of guarantee that whatever it is that you're working on is just not going to be lost.
[04:21:18 | 1:09:10 PM] Now, you can also go a step further and to add like real-time collaboration so that you can have like concurrent edits.
[04:21:26 | 1:09:18 PM] And again, my agent didn't struggle at all with adding the feature.
[04:21:30 | 1:09:22 PM] It was like, I don't know, asking about it, reviewing how it would work, and then once that's done, just 700 million tokens later and I had real-time.
[04:21:41 | 1:09:33 PM] So I would say in general, this is the first thing that I find agents just don't do well from a product experience perspective.
[04:21:49 | 1:09:41 PM] Another pattern I found that agents completely forget to implement is optimistic updates.
[04:21:54 | 1:09:45 PM] So rather than showing your users a bunch of loading spinner whenever they're taking any action, you essentially show them the success state optimistically, and in the background you're going to sync whatever change they made.
[04:22:06 | 1:09:58 PM] Now, if the sync or the operation fails for whatever reason, you just roll it back and then tell them like, oh, the operation didn't work.
[04:22:14 | 1:10:05 PM] Now, of course, you shouldn't blindly have optimistic updates for everything.
[04:22:18 | 1:10:10 PM] There are some scenarios where you want to show the user a loading spinner and you're going to wait to check that everything worked properly.
[04:22:26 | 1:10:17 PM] But in general, Having optimistic updates makes the overall experience feel significantly faster, much snappier, and it will just feel much more instant.
[04:22:36 | 1:10:28 PM] So pretty sure you can just ask your agent, like, Hey, I would like to implement optimistic updates where it makes sense.
[04:22:43 | 1:10:34 PM] Let's come up with a plan, and it will tell you all the areas where it makes sense to do.
[04:22:46 | 1:10:38 PM] Again, it's like, it's not difficult for the agent to build it.
[04:22:49 | 1:10:41 PM] You just need to ask and know exactly what to ask for.
[04:22:53 | 1:10:44 PM] Now, an extension of optimistic updates, in my opinion, is giving users the ability to undo certain actions.
[04:22:59 | 1:10:50 PM] Now, for example, if you ask your agent to implement the ability to delete records, what it will typically do is it will give you a delete button.
[04:23:08 | 1:10:59 PM] You click it, might show a confirmation dialog, you hit confirm, and then it will actually do the deletion.
[04:23:14 | 1:11:05 PM] But a much nicer experience is actually allowing the user to undo that action.
[04:23:19 | 1:11:11 PM] So they hit delete, you immediately remove the item they want to delete from the UI, but you tell them, like, Hey.
[04:23:25 | 1:11:17 PM] You have like a couple of seconds where you could change your mind.
[04:23:29 | 1:11:21 PM] And if they don't do anything, that means you actually want to delete the thing, then you actually implement the operation.
[04:23:37 | 1:11:28 PM] Otherwise, if they hit undo, you just bring back the change.
[04:23:40 | 1:11:32 PM] So it's kind of like you do the operation in the background as well.
[04:23:44 | 1:11:36 PM] It's just kind of a delayed action, which kind of ties into the next point, which is archiving.
[04:23:50 | 1:11:42 PM] You should tell your agent you want the ability to archive records and be able to unarchive them, because sometimes you want to hide something from the UI completely or, let's say, from search results, and archiving will be the way to do it.
[04:24:04 | 1:11:56 PM] And you shouldn't force your user to be like, well, if you don't want to see this, you have to delete it.
[04:24:09 | 1:12:00 PM] Any much better experience is just the ability to archive records.
[04:24:12 | 1:12:04 PM] So I think it is a pattern that should definitely exist.
[04:24:17 | 1:12:08 PM] Another big one for me is URL state.
[04:24:18 | 1:12:10 PM] You should ask your agent to persist state in the URL whenever it makes sense, of course.
[04:24:22 | 1:12:14 PM] And it's so useful because whenever you have, let's say, a list of records and you want the ability to filter or sort them, and you just have a bunch of like conditions, maintaining these things in the URL makes it trivial for you to give them to someone else.
[04:24:38 | 1:12:30 PM] And then, let's say, another team member is just going to be able to see exactly what you want them to see.
[04:24:43 | 1:12:35 PM] Now, another small detail that agents don't implement out of the box is infinite scroll.
[04:24:47 | 1:12:38 PM] I don't want to be clicking on load more over and over and over, or like a next page button.
[04:24:53 | 1:12:44 PM] As I scroll, I should just get the data.
[04:24:55 | 1:12:47 PM] I shouldn't need to click next page, and then in the end, I'll just see that, oh, I've reached the end.
[04:25:00 | 1:12:52 PM] It's a very minor thing, but also when you use something every day, I think it makes a huge difference.
[04:25:06 | 1:12:57 PM] Now, another pattern I found that made the output significantly better is telling the agent explicitly to use existing pages as references when it comes to the UI, the data fetching and how it works, and how the thing is overall structured.
[04:25:21 | 1:13:13 PM] And that made it possible for me to essentially define what good looks like once.
[04:25:26 | 1:13:17 PM] And then just reuse it for more features.
[04:25:30 | 1:13:21 PM] Now, to be completely honest, sometimes even when you tell the agent like, hey, use page X as a reference, sometimes it just doesn't follow it.
[04:25:39 | 1:13:30 PM] I don't know if models, like, get dumber sometimes, but sometimes it does happen.
[04:25:43 | 1:13:35 PM] But overall, I would say that my success rate is higher whenever I tell the agent to, like, well, use an existing page as a reference, because you also just end up with a more consistent experience.
[04:25:54 | 1:13:46 PM] So, like, as you're using your app, you're like, oh, this just matches the other part of the app if they both share, like, the same concept.
[04:26:02 | 1:13:54 PM] So, like, if two parts of the app are essentially lists of records that you can create, update, and delete and, like, list, well, both of these parts should be pretty much identical.
[04:26:15 | 1:14:06 PM] This list kind of brings me to my next point, which is whenever we have opinions about something, they should be packaged as agent skills.
[04:26:20 | 1:14:12 PM] And then this way, your agent, whenever it's building something, it will actually follow those skills pretty closely.
[04:26:27 | 1:14:19 PM] And as I was building all of our internal tooling, I found myself reaching for three agent skills.
[04:26:32 | 1:14:24 PM] Two of them are related to design engineering.
[04:26:34 | 1:14:26 PM] So one made it easier to have better UI, better typography, better layouts, as well as, like, better error messages in general.
[04:26:43 | 1:14:34 PM] And the second one was a set of design engineering skills that made it easier to just have better animations and other things like that.
[04:26:49 | 1:14:41 PM] And then last but not least is the Railway agent skills, of course.
[04:26:53 | 1:14:44 PM] So, like, everything that I built for us internally at Railway runs on Railway, of course.
[04:26:59 | 1:14:51 PM] Like, everything.
[04:27:00 | 1:14:52 PM] So, like, buckets, databases, the app itself, the real-time server, everything.
[04:27:05 | 1:14:57 PM] And for the agent to effectively work with Railway and be able to deploy everything, you just give it the Railway agent skills, and it was just able to do it.
[04:27:14 | 1:15:05 PM] And yeah, so, like, once you have all of your agent skills and everything, in my opinion, the final step, and I think this is the most important step, is verification.
[04:27:25 | 1:15:16 PM] So the agents typically, whenever you ask it to build something, it's going to be like, okay, I implemented the feature, build passed, test passed, all good, right?
[04:27:33 | 1:15:25 PM] But what I found is when you actually try out what happens, you sometimes end up with just like a very broken experience.
[04:27:41 | 1:15:33 PM] So once you have like a verification loop in place, it's like a night and day difference because the agent, you can literally see it be like, okay, I built this thing, I tried it, it failed, I'm going to fix it, and it just keeps going.
[04:27:55 | 1:15:46 PM] And then in the end it's like, okay, I fully tested it.
[04:27:57 | 1:15:49 PM] And I felt this breakthrough with computer use once it got really, really good.
[04:28:02 | 1:15:54 PM] And now every time I want to add a new feature, I literally just in the end say, well, you should verify that the feature works end to end and use it by actually running infrastructure end to test things end to end.
[04:28:17 | 1:16:08 PM] And the agents are very capable of doing this.
[04:28:19 | 1:16:11 PM] You just have to tell them.
[04:28:21 | 1:16:12 PM] And once you have all of those pieces, I would say you will end up with solid internal tools that you can build quickly, that work properly and work in a consistent way.
[04:28:31 | 1:16:23 PM] And that's it.
[04:28:32 | 1:16:24 PM] This was my list of principles that I use whenever I'm building any internal tools.
[04:28:35 | 1:16:27 PM] Hope you found them useful.
[04:28:36 | 1:16:28 PM] But more importantly, that you're inspired to build your own internal tools that feel good, that are polished, and spark joy.
[04:28:45 | 1:16:36 PM] And I hope that you too can become your company's SaaS layer.
[04:28:49 | 1:16:40 PM] And with that, thank you so much for watching, and I'll see you in the next one.
```
