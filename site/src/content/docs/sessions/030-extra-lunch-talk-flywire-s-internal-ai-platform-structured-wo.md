---
title: "Extra lunch talk: Flywire's internal AI platform — structured workflow
  automation (Orbit on the Victoria PaaS)"
description: Two Flywire engineers open their lunch talk on structured agentic
  workflow automation — Flywire's compliance context, the Victoria PaaS, and the
  Orbit platform — before the captured livestream audio cuts off after less than
  three minutes.
sidebar:
  order: 30
  hidden: false
pagefind: true
prev: false
next: false
---

Two Flywire engineers open their lunch talk on structured agentic workflow automation — Flywire's compliance context, the Victoria PaaS, and the Orbit platform — before the captured livestream audio cuts off after less than three minutes.

## TL;DR
- Edu and Javi represent Flywire's AI platform experience team. Their mission is practical agentic infrastructure that empowers software engineers while following established engineering standards and practices.
- Flywire processes complex global payments for over 5,000 clients in more than 240 countries. Regulatory compliance (PCI DSS, SOC 2) is a core requirement, not an add-on. Sensitive context cannot go to third-party services without strict governance and architectural boundaries.
- Flywire has around 400 software engineers across Java, Ruby, Go, Python, .NET, and PHP. Almost everything runs on Victoria, Flywire's internal platform as a service on GitLab and AWS.
- The talk reached its first product reveal — Orbit, described as "our on-call killer" — an internal platform whose workflows other AI services and tools can start directly, including Claude in Slack.
- Only about 2 minutes 43 seconds of this talk exists in the livestream record. The audio fragments and ends mid-explanation ("Sorry, I'm good." at 1:56:50 PM), and the stream moves to the next talk at 1:56:55 PM.

## Key lessons
1. **Frame the platform mission around engineering standards.** Edu stated the team's mission as building "practical agentic infrastructure that empowers our software engineers while following our established engineering standards and practices" — AI adoption inside Flywire is bound to existing process, not exempt from it.
2. **Structured workflows, not free agents, deliver enterprise value.** The stated thesis of the talk is that "structure workflow automation delivers real enterprise value, ensuring control, safety, and reliability across our development process."
3. **Compliance constraints shape the architecture.** Because Flywire processes high-value international transactions, PCI DSS and SOC 2 apply. Customer data, personal identification, and payment details "must remain completely safe," so the team "cannot simply take sensitive context and pass it to third-party services without strict governance and architectural boundaries." Data boundaries come before model choice.
4. **Size the org before designing the platform.** Flywire runs about 400 software engineers globally, with diverse stacks: Java, Ruby, Go, Python, .NET, and PHP. A platform approach must span that polyglot reality.
5. **Put the AI layer on the existing PaaS.** "Almost everything we build and run is deployed on Victoria, our internal platform as a service that operates on top of GitLab and AWS infrastructure." Orbit rides the same foundation rather than a separate AI stack.
6. **Make workflows the integration point for other AI tools.** Orbit — introduced as "our on-call killer" — is built so that "the other AI services and tools we use across Flywire can start workflows directly." Example given: an engineer asks Claude in Slack, and Orbit starts workflows directly.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/akEqiXFo3GM?start=18379&rel=0" title="Extra lunch talk: Flywire's internal AI platform — structured workflow automation (Orbit on the Victoria PaaS)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Edu, Javi &middot; 1:54:11 PM ET-1:56:54 PM ET &middot; talk &middot;  <a href="https://www.youtube.com/watch?v=akEqiXFo3GM&amp;t=18379s" rel="noopener">Watch on YouTube from 05:06:19</a></p>

## Notable quotes
- "My name is Edu, and alongside Javi, we represent the AI platform experience team at Flywire." [05:06:22 | 1:54:13 PM]
- "Because we process high-value international transactions, regulatory compliance, privacy, and security are not optional add-ons." [05:07:13 | 1:55:04 PM]
- "We cannot simply take sensitive context and pass it to third-party services without strict governance and architectural boundaries." [05:07:37 | 1:55:29 PM]
- "This brings us to Orbit, our on-call killer." [05:08:12 | 1:56:04 PM]

## Session narrative
This extra lunch talk (not on the official agenda) opened at 1:54 PM with Edu introducing himself and co-presenter Javi as the AI platform experience team at Flywire. Edu set the mission in one sentence: build practical agentic infrastructure that empowers Flywire's software engineers while following the company's established engineering standards and practices. He then named the talk's thesis — structured workflow automation that delivers real enterprise value with control, safety, and reliability across the development process — and promised deep technical details of the AI platform after some essential company context.

That context took most of the captured segment. Flywire processes "the world's most complex payments" across education, healthcare, travel, and business services, serving over 5,000 clients in more than 240 countries. High-value international transactions make PCI DSS and SOC 2 core requirements, which means personal identification and payment details must stay inside strict governance and architectural boundaries — the constraint that drives the platform's design. Edu then sized the engineering organization: about 400 software engineers globally, across Java, Ruby, Go, Python, .NET, and PHP, with almost everything deployed on Victoria, Flywire's internal platform as a service built on GitLab and AWS.

The talk reached its first product reveal about two minutes in: Orbit, "our on-call killer," an internal platform that eliminates daily on-call work and lets other AI services and tools across Flywire start workflows directly — for example, an engineer asking Claude in Slack. At that point the captured record breaks down. The final transcription lines fragment mid-sentence ("Victoria, it starts and shares the main request with scorecards, measures how."), ending with an apparent on-stage stumble or restart — "Sorry, I'm good." at [05:08:58 | 1:56:50 PM] — before the stream cut to the next talk (Modal) at 1:56:55 PM. Only 2 minutes 43 seconds of this talk exists in the livestream record; the announced "deep technical details" of Orbit never appear in the captured audio. Per the speaker records, the same pair discussed the full platform on the AI Engineer show podcast episode "Agents in Orbit: Workflows, Not Autopilot" (YAML-defined workflows on the Claude Agents SDK, with LLM steps isolated by network, tool, skill, and MCP access rules).

## Speaker details
**Edu (Eduardo Simón Picón)** — Senior Software Engineer, AI Platform Experience Team, Flywire. Based in Valencia, Spain. Edu has about seven years of full-stack experience: React and TypeScript frontends, Ruby and TypeScript backends, AWS infrastructure, and DevSecOps. Before the AI platform work, he built foundational components of Flywire's public API that power partner payment processing. Links: [LinkedIn](https://www.linkedin.com/in/eduardo-simon), [Website](https://edusimon.dev), [GitHub](https://github.com/eduardosimon)

**Javi (Javier Casal)** — Senior Software Engineer, AI Platform Experience Team, Flywire. Based in Valencia, Spain. Javi works on the AI Platform Experience Team, which builds Orbit, Flywire's internal platform for structured agentic workflow automation running on the Victoria PaaS. He studied at Universidad Politécnica de Valencia. Links: [LinkedIn](https://es.linkedin.com/in/jacarui), [GitHub](https://github.com/jacarui)

## Full timestamped transcript
```
[05:06:20 | 1:54:11 PM] Hello everyone, and welcome.
[05:06:22 | 1:54:13 PM] My name is Edu, and alongside Javi, we represent the AI platform experience team at Flywire.
[05:06:27 | 1:54:19 PM] Our core mission is to build practical agentic infrastructure that empowers our software engineers while following our established engineering standards and practices.
[05:06:37 | 1:54:28 PM] Today, we'll share how structure workflow automation delivers real enterprise value, ensuring control, safety, and reliability across our development process.
[05:06:48 | 1:54:40 PM] Before we dive into the deep technical details of our AI platform, let us give you some essential context about Flywire.
[05:06:56 | 1:54:48 PM] Flywire is built to process the world's most complex payments across global industries like education, healthcare, travel, and business services.
[05:07:06 | 1:54:57 PM] Today, we serve over 5,000 clients across more than 240 countries around the world.
[05:07:13 | 1:55:04 PM] Because we process high-value international transactions, regulatory compliance, privacy, and security are not optional add-ons.
[05:07:21 | 1:55:12 PM] They are core requirements of our business.
[05:07:24 | 1:55:15 PM] We operate under strict compliance frameworks like PCI, DSS, and SOC 2.
[05:07:30 | 1:55:22 PM] This means that customer data, personal identification, and payment details must remain completely safe.
[05:07:37 | 1:55:29 PM] We cannot simply take sensitive context and pass it to third-party services without strict governance and architectural boundaries.
[05:07:45 | 1:55:36 PM] To give you an idea of our engineering organization, we have around 400 software engineers distributed globally.
[05:07:53 | 1:55:45 PM] Across our teams, we maintain diverse technology stacks, including Java, Ruby, Go, Python, .
[05:08:01 | 1:55:52 PM] NET, and PHP.
[05:08:03 | 1:55:54 PM] Almost everything we build and run is deployed on Victoria, our internal platform as a service that operates on top of GitLab and AWS infrastructure.
[05:08:12 | 1:56:04 PM] This brings us to Orbit, our on-call killer.
[05:08:15 | 1:56:07 PM] Orbit is an internal platform that eliminates daily engineering is call only work every day.
[05:08:22 | 1:56:13 PM] It also keeps the codebase that the other AI services and tools we use across Flywire can start workflows directly.
[05:08:28 | 1:56:20 PM] For example, an engineer will be able to ask Claude in Slack use cases, send messages, can start workflows directly.
[05:08:38 | 1:56:30 PM] Victoria, it starts and shares the main request with scorecards, measures how.
[05:08:58 | 1:56:50 PM] Sorry, I'm good.
```
