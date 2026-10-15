---
session_id: "020"
title: "Intent Based Auth"
agenda_title: "Intent Based Auth"
speakers: ["Allie Howe", "Ian Livingstone", "Michael Davis", "Dick Hardt"]
start_wall: "11:31:05 AM ET"
end_wall: "12:14:14 PM ET"
video_start: "02:43:13"
video_end: "03:26:22"
video_url: "https://www.youtube.com/watch?v=akEqiXFo3GM&t=9793s"
stage: "Simons Room (Metropolitan East) - main stage livestream"
session_type: "panel"
tags: [intent-based-auth, runtime-authorization, agent-security, aauth, agentic-commerce, agent-identity, audit-logs]
confidence: "high"
---

# Intent Based Auth

> A Keycard-moderated panel on runtime authorization for AI agents: approve each action against the agent's mission rather than standing OAuth scopes, using AAuth missions and budgets, supervising agents, egress proxies, and tamper-proof audit logs.

## TL;DR
- Runtime authorization approves each tool call against the agent's mission. It replaces standing OAuth scopes that agents eventually misuse.
- OAuth was built for pre-registered, browser-based website-to-website delegation. Its scopes (for example Salesforce's old single "API" scope) are too coarse for agents that retry and improvise.
- AAuth primitives: a mission identifier threaded through every decision for audit; time-limited tokens plus resource budgets with continual feedback; a supervising agent separate from the worker agent.
- Enforce at the boundary: sandbox the tools, run an egress proxy outside the agent's reach, remove tools dynamically to stop toxic combinations, and keep audit logs tamper-proof and outside the agent's control.
- Intent unlocks agentic commerce. Merchants can run "know my agent" checks the way banks run KYC, and existing liability law plus intent logs answers who pays when an agent causes damage.
- On p-doom the panel stayed calm. The real risks are insiders and malicious actors, engineers are iterating fast, and "they're computers, we can unplug them."

## Key lessons
1. **Authorize per tool call, not per agent.** Allie Howe defined runtime auth as authorizing "an agent per tool call, rather than having the agent hold broad standing access that it will eventually misuse." Coarse MCP tools make per-call checks hard. Notion's MCP server can fetch a page, but you cannot limit the agent to one database on one page.
2. **OAuth is the wrong starting point.** Dick Hardt, who led OAuth 2.0's design, said people "grabbed" OAuth off the shelf for agents. OAuth was built for pre-registered, browser-based delegation between websites. Scopes like Salesforce's long-lived single "API" scope are useless for agents, and you cannot know ahead of time what an agent will need.
3. **AAuth's core primitive is the mission.** The agent works for a "person" (a human or an organization) who bears final responsibility, because "The agent can't be responsible." A mission identifier threads through every action and decision, so auditors can reconstruct what happened under which intent. A good agent negotiates the mission's parameters with the person first.
4. **Layer deterministic policy under intent.** Ian Livingstone: write broad deterministic policy for what must never happen and what always requires a human. Then intersect the business's intent (why we adopted the agent, for example Claude Code to make developers successful) with the transactional intent (fix a bug in staging) to compute a bounding box of allowed actions. Bring the human in only when required. Consent fatigue is the adoption killer.
5. **Separate supervision from work.** Dick Hardt argued for a supervising agent, independent of the worker agent, that owns policy. Deterministic rules catch clear violations such as "read the CEO's email." The supervisor judges vague cases such as forwarding that email outside the company. Without an open protocol, the agent vendor decides your guardrails.
6. **Budgets beat rate limits.** After the Instacart-on-Resy incident (an agent made 200 API calls an hour and got the user's Resy account banned), AAuth added budgets. Tokens carry both a time limit and a resource budget. Continual feedback tells the agent how much budget remains, so it treats the resource as scarce. Rate limiting cuts the agent off with no signal.
7. **Keep the brains away from the hands.** In the architecture that Anthropic, OpenAI, and other labs converge on, the model (brain) runs with sandboxed tools (hands) and no API keys. An egress proxy outside the sandbox is the authorization boundary. Michael Davis added dynamic tool removal: disable web search while an email write is in flight, then re-enable it, to block toxic combinations.
8. **Audit logs must live outside the agent, and liability law already exists.** The Hugging Face Squid-proxy incident showed an agent reaching the open internet with no record of its actions. Ian Livingstone: keep a tamper-resistant log of who told the agent to do what and for what purpose, and apply existing liability law (whoever employs the agent answers for the damage) instead of writing new agent regulation. Davis's field result: "when you have less things the agent can do, it makes better decisions."

## Notable quotes
- [02:44:01 | 11:31:53 AM] "Runtime auth is the practice of authorizing an agent per tool call, rather than having the agent hold broad standing access that it will eventually misuse." — Allie Howe
- [02:50:10 | 11:38:02 AM] "You know, just because this is right in context by itself doesn't mean it's the right thing within the broader mission." — Dick Hardt
- [03:15:55 | 12:03:47 PM] "Like, I mean, when you have less things the agent can do, it makes better decisions, right?" — Michael Davis
- [03:25:30 | 12:13:21 PM] "It's like at the end of the day, like, they're computers, we can unplug them." — Ian Livingstone

## Session narrative
Allie Howe (Member of Technical Staff at Keycard) opened the panel by framing the problem. The official agenda put it as: "Intent-based auth adds the missing context: what is this agent trying to accomplish, and does this action serve that mission?" Howe defined runtime authorization and then asked why teams still cannot grant autonomy even though models improved, context windows grew, and vision lets models verify their own work. She introduced the panel: Ian Livingstone (CEO of Keycard), Michael Davis (Global Chief Security Architect at JPMorgan Chase), and Dick Hardt (founder of AAuth and co-creator of OAuth).

The first third of the panel was diagnosis. Livingstone described financial enterprises as security-first by design: business continuity comes first, innovation "second, third, or fourth," and the enterprise is a "hodgepodge" of identity islands built for humans and deterministic software. Hardt, who designed OAuth 2.0, explained why OAuth fails for agents: it expects pre-registration, a browser, and a redirect, and its scopes are far too coarse. Davis reported that successful enterprises onboard agents the way they onboard developers — no full commit access on day one, capability added as the agent matures — and that environmental context, such as whether the agent runs in a sandbox, should change the allowed autonomy. Davis also drew the bank analogy: banking moved long ago from authenticating humans to authorizing each transaction at runtime, and agents need the same shift. He recalled the memo field on paper checks as an early intent signal that carried price, payee, and date limits.

The middle third built the primitives. Hardt described the AAuth mission: the agent acts for a person (human or organization) who is ultimately responsible, the mission identifier tracks through every decision for audit, and a separate supervising agent — not the worker — decides permissions. He told the panel's sharpest governance story: "read the CEO's email" gets caught by deterministic policy, but forwarding the CEO's email outside is vaguer and should go to the supervisor. Livingstone added the two-layer policy model (deterministic never/always rules, then the intersection of business intent and transactional intent as a bounding box) and warned that consent fatigue gates adoption. He gave the two-session example: a Claude session asked to go shopping and one asked to debug production need very different permissions and different human-in-the-loop points. Hardt then covered budgets, motivated by the Instacart-on-Resy incident in which an agent made 200 API calls an hour and got the user's account banned: AAuth tokens now carry a time limit and a resource budget, with continual feedback so the agent senses scarcity, unlike rate limiting which cuts off silently. Livingstone connected this to the brains/hands architecture: the model runs in a sandbox with its tools, and an egress proxy outside the sandbox is the deterministic authorization boundary where AAuth lives. Davis pushed further with dynamic tool removal (disable web search during an email write) and warned about memory systems that bias the "brain" from inside the loop. Livingstone closed the section with an efficiency argument: intent systems cut MCP context bloat and token spend because the agent gets the right capabilities at the right time and stays on a paved path.

The final third applied intent to commerce, forensics, and operations. For agentic commerce, Davis extended "know your customer" to "know my agent." Livingstone told the Vercel-blocked-in-Spain story — one bad host got all of Vercel blocked because IPs were shared — and said agents face the same unregistered-traffic problem "so much worse" now that agents have broken CAPTCHAs; the industry must choose federated protocols (like OIDC and TLS) over walled gardens. Hardt liked the personal agent protocol but said it does not go far enough, and argued that supervision must be portable or agent vendors end up owning your guardrails. Davis raised psychological ownership: intent links a human to the agent's outcome, which matters for accountability because, as in the 1979 IBM manual, machines cannot be held accountable. He reframed intent as motive and diagnostics as forensics: immutable intent propagation lets investigators classify an incident as human error or agent error and scope the blast radius. Livingstone cited the Hugging Face Squid-proxy incident as the case for a tamper-resistant audit log outside the agent's control, said the real question is liability (the employer of the agent answers for damage, so no new agent regulation is needed), and plugged the secure-software-factory reference architecture published that day on agentbaseline.org, with its human-driven, workflow-driven, and agentic-driven levels. The panel ended with a p-doom round. The lead-off answer called fully autonomous, untethered agents science fiction but predicted "massive natural disaster-like scale" incidents from insiders and malicious actors. Davis declined a number and said engineers iterating on the problem will figure it out. Livingstone claimed the hottest take: doom probability "approaching or asymptotically zero," partly because agents "can just be unplugged," while calling himself the panel's doomer in the sense that visible damage, like the PocketOS founder's data loss, is how society learns not to do dumb things.

(Note on the transcript below: automatic speech recognition renders "AAuth" variously as "Aoth", "AOF", "AIOF", and "AFL"; "Dick Hardt" appears once as "Dick Hart"; "Thanks, Vance" is "Thanks, Ian". The transcript is otherwise copied verbatim.)

## Speaker details
**Allie Howe** - Member of Technical Staff, Keycard (moderator). AI security engineer focused on agent identity, authorization, runtime controls, and accountability. Co-creator and host of the Insecure Agents podcast, workstream lead for the OWASP Agentic Security Initiative (co-creator of FinBot, a financial-services capture-the-flag app), and previously founder of Growth Cyber working as a virtual CISO for AI startups. She started in software development, moved to security engineering, and holds a master's in cybersecurity.
Links: [LinkedIn](https://www.linkedin.com/in/allisonhowe) | [X](https://x.com/vtahowe) | [insecureagents.com](https://insecureagents.com)

**Ian Livingstone** - CEO and Co-Founder, Keycard. Keycard is an identity and access platform for AI agents. A three-time founder, angel investor, and infrastructure builder with more than 15 years in developer tools and security infrastructure. He previously shaped platform strategy at Snyk, held senior engineering roles at Salesforce, and co-hosts The Infra Pod. In this session he announced the secure-software-factory reference architecture on agentbaseline.org.
Links: [LinkedIn](https://www.linkedin.com/in/irlivingstone/)

**Michael Davis** - Global Chief Security Architect, JPMC (Managing Director). Career in IT security across Amazon, AT&T, Sears, Exelon, and the U.S. Department of Defense. At Amazon he led the Dedicated Security Team protecting more than 30 subsidiaries, including Prime Air, Zoox, and Zappos. He founded Savid Technologies in 2005 (BusinessWeek "Top 25 under 25"), was CTO of GoSecure, and served as Senior Manager Global Threats at McAfee. He is a contributing author of the "Hacking Exposed" books and a frequent Black Hat speaker.
Links: [LinkedIn](https://www.linkedin.com/in/mrmichaeladavis/)

**Dick Hardt** - Founder, AAuth. He led the design of OAuth 2.0 and JSON Web Token, standards used by billions of people daily, and is now the author of AAuth, which gives agents access to resources without giving them credentials. He co-chairs the OpenID Foundation's IPSIE working group, co-authors OAuth 2.1, previously founded ActiveState and Sxip Identity, and led identity initiatives at Microsoft and Amazon. He is also Founder and CEO of Hello. In this session he introduced the AAuth mission, supervising-agent separation, and AAuth budgets. (Introduced on stage as "founder of AAuth and co-creator of OAuth".)
Links: [LinkedIn](https://www.linkedin.com/in/dickhardt/)

## Full timestamped transcript
```
[02:43:13 | 11:31:05 AM] Hey, Dick.
[02:43:14 | 11:31:05 AM] Hey, Davis.
[02:43:14 | 11:31:06 AM] Hey, Ian.
[02:43:15 | 11:31:07 AM] Hi, everyone.
[02:43:16 | 11:31:08 AM] Welcome to AI Engineer New York.
[02:43:19 | 11:31:11 AM] I'm super excited to be here today.
[02:43:22 | 11:31:14 AM] My name is Allie Howe.
[02:43:24 | 11:31:16 AM] I'm a member of technical staff at Keycard.
[02:43:27 | 11:31:19 AM] I'm here with some amazing panelists today.
[02:43:29 | 11:31:21 AM] We have Ian, CEO of Keycard.
[02:43:32 | 11:31:24 AM] We have Michael Davis, Global Chief Security Architect at J.
[02:43:36 | 11:31:28 AM] P.
[02:43:36 | 11:31:28 AM] Morgan Chase.
[02:43:37 | 11:31:29 AM] And we have Dick Hart, the founder of Aoth and co-creator of Oath, with us on stage today.
[02:43:45 | 11:31:37 AM] I'm super excited to talk to all of them about intent-based authorization.
[02:43:50 | 11:31:42 AM] And to set the stage, I want to bring to light that as more companies are looking to give their agents increased levels of autonomy, they're looking to runtime authorization to help.
[02:44:01 | 11:31:53 AM] Runtime auth is the practice of authorizing an agent per tool call, rather than having the agent hold broad standing access that it will eventually misuse.
[02:44:10 | 11:32:02 AM] However, is this tool call or not is never a simple question.
[02:44:15 | 11:32:07 AM] This is because many MCP tools and APIs are coarse-grained.
[02:44:20 | 11:32:12 AM] Humans struggle to write the perfect policy, and the environment around the agent will change as it runs.
[02:44:27 | 11:32:19 AM] Intent can help by providing extra context so that at runtime, we can make better authorization decisions about what an agent is allowed or is not allowed to do.
[02:44:39 | 11:32:31 AM] So to continue, I would like to talk about, really dive into, why do we need intent-based auth in the first place?
[02:44:47 | 11:32:39 AM] Models have dramatically improved.
[02:44:49 | 11:32:41 AM] They have bigger context windows.
[02:44:51 | 11:32:43 AM] They're able to verify work because model vision capabilities have improved, and in many contexts, people are proclaiming that AGI is here.
[02:45:00 | 11:32:52 AM] If the models are so good, if AGI is really here today, then why are teams struggling to give their agents more autonomy?
[02:45:07 | 11:32:59 AM] Ian, let's start with you.
[02:45:09 | 11:33:01 AM] You're helping many financial enterprises at Keycard.
[02:45:12 | 11:33:04 AM] What are you seeing that's getting in the way?
[02:45:14 | 11:33:06 AM] Well, I think broadly speaking, enterprises, especially financial services firms, regulated industries, are almost always security first.
[02:45:20 | 11:33:12 AM] It's how they build trust in their business, and maintaining the business continuity is bar first, like the first priority.
[02:45:25 | 11:33:17 AM] Then innovation is second, third, or fourth.
[02:45:28 | 11:33:20 AM] I think, like broadly speaking, in any enterprise, what you see is this hodgepodge of different little islands, of different little identities, of different little systems from across all different worlds.
[02:45:39 | 11:33:30 AM] And how do you actually tie that together in a way that an agent can navigate through that, ask for access, and then also ensure that the agent cannot perform something that was unintended by the user or the business?
[02:45:50 | 11:33:41 AM] And the unfortunate situation is most of our systems today are course-grained, right?
[02:45:54 | 11:33:46 AM] I don't know, Salesforce is a good example, where for a very long time they had a single scope, which was API on their OAuth, which is like, in the context of an agent, not very helpful.
[02:46:03 | 11:33:55 AM] So that's broadly the first and foremost part, is that most of the systems they have for security today were designed for a world where humans were making all the decisions and software is very deterministic, not this new fangled magic box we've invented that basically reasons and tries over and over again to find a solution to a problem.
[02:46:21 | 11:34:13 AM] Dig, how is OAuth part of the problem?
[02:46:23 | 11:34:15 AM] How is OAuth getting in the way?
[02:46:25 | 11:34:17 AM] Why is it not the right fit for agents?
[02:46:28 | 11:34:19 AM] Well, when people started looking at how do we authorize agents to access something, the tool that was sitting there on the shelf was OAuth.
[02:46:35 | 11:34:26 AM] And people grabbed that tool and says, Here's a tool.
[02:46:38 | 11:34:30 AM] This is authorization.
[02:46:40 | 11:34:32 AM] It should be able to solve the problem.
[02:46:41 | 11:34:33 AM] But OAuth was not designed for this kind of world.
[02:46:44 | 11:34:36 AM] It was designed originally for like, how do I let this website talk to this website?
[02:46:49 | 11:34:40 AM] You know, in OAuth 2, we added scopes.
[02:46:51 | 11:34:43 AM] Before that, it was just do anything.
[02:46:54 | 11:34:46 AM] But it required you to be pre-registered.
[02:46:57 | 11:34:49 AM] It's expecting that there is a browser involved and a redirect.
[02:47:00 | 11:34:51 AM] You know, OAuth has evolved over the years to support some other things.
[02:47:03 | 11:34:55 AM] But the agentic world is completely different.
[02:47:05 | 11:34:57 AM] We don't know ahead of time what the agent needs to do.
[02:47:08 | 11:35:00 AM] We need to go and make that decision over time.
[02:47:10 | 11:35:02 AM] Different instances of an agent are going to need different kinds of things.
[02:47:14 | 11:35:06 AM] And, you know, as Ian talked about, the granularity of the scopes that people says, well, we already have scopes for OAuth.
[02:47:20 | 11:35:12 AM] Let's just map those over to agents, is far too coarse-grained for what agents are doing.
[02:47:27 | 11:35:19 AM] Davis, how are you seeing enterprises move towards higher levels of autonomy?
[02:47:32 | 11:35:23 AM] Yeah, I think the key piece is how do you deal with that coarse-grain problem?
[02:47:36 | 11:35:28 AM] And what I've seen the kind of more successful enterprises is they kind of board agents like they onboard developers, right?
[02:47:42 | 11:35:33 AM] Start with, you don't get full, you know, commit access day one, right?
[02:47:45 | 11:35:37 AM] You're actually having to go through and add levels of capability as they mature, right?
[02:47:51 | 11:35:43 AM] And so the definitions that enterprises are coming up with of what is the context that makes this agent safe.
[02:47:56 | 11:35:48 AM] And it isn't just usually what the agent says, right?
[02:47:59 | 11:35:51 AM] It can, you know, attest to something, but it's other things like the environment around it and other information that can help you understand levels of autonomy.
[02:48:06 | 11:35:58 AM] Very simple example would be, where is the sandbox running?
[02:48:09 | 11:36:01 AM] Is it in the sandbox, right?
[02:48:10 | 11:36:02 AM] Those type of things can change the level of autonomy that's allowed.
[02:48:14 | 11:36:06 AM] Absolutely.
[02:48:14 | 11:36:06 AM] You know, as we mentioned that coarse-grain access problem, and to put that into perspective, to give an example, with Notion's MCP server, you can say, fetch this page, which is like the view page tool or get page, but you can't say, just get this database on this page.
[02:48:31 | 11:36:23 AM] How is runtime authorization based on intent a better model?
[02:48:34 | 11:36:26 AM] That's for anyone.
[02:48:38 | 11:36:30 AM] I'll take a shot at it.
[02:48:39 | 11:36:31 AM] So to me, this is something that the financial services industry, hopefully maybe we can learn from the background that, you know, banks have gone through.
[02:48:47 | 11:36:39 AM] Banks moved long ago from authorizing and authenticating humans to authorizing the transaction, right?
[02:48:53 | 11:36:45 AM] And when is that transaction occurring?
[02:48:55 | 11:36:47 AM] At runtime, right?
[02:48:57 | 11:36:49 AM] And so I think that, you know...
[02:48:59 | 11:36:50 AM] Runtime authorization is we're going to be able to learn from the kind of the scars of the past that we've had and apply it to this new problem.
[02:49:06 | 11:36:58 AM] I also think that, you know, one thing is it's a lot easier to debug something at runtime when you understand the intent, right?
[02:49:13 | 11:37:05 AM] I think we've all remember back in the day writing checks, right, or seen those things on TV now, I guess is the right thing.
[02:49:19 | 11:37:11 AM] But, you know, writing checks, there was a memo field there, right?
[02:49:22 | 11:37:14 AM] That memo field was used to actually tell the intent of what this payment was.
[02:49:25 | 11:37:17 AM] But the check itself did have limits, right?
[02:49:28 | 11:37:19 AM] The price, the payee, the date, et cetera, right?
[02:49:31 | 11:37:23 AM] I think a lot of those concepts are now being applied and can be applied to help with this runtime.
[02:49:36 | 11:37:28 AM] Intent's sort of one of those, you know, like many words, words are hard.
[02:49:40 | 11:37:32 AM] And so, you know, building on the example here of making a payment of a transaction, right, you know, that's not a scope.
[02:49:47 | 11:37:39 AM] That's, can I do this one thing in this particular context?
[02:49:51 | 11:37:43 AM] Well, this one payment.
[02:49:53 | 11:37:45 AM] But I think we need an agent to make a decision, should it be able to do it, you need all the rest of the context of, well, why are we making—
[02:50:01 | 11:37:52 AM] Are we making this payment?
[02:50:02 | 11:37:53 AM] What are all the things that happened before?
[02:50:04 | 11:37:56 AM] You know, did we just make the same payment just like, you know, five seconds ago, and now this is a double payment, right?
[02:50:10 | 11:38:02 AM] You know, just because this is right in context by itself doesn't mean it's the right thing within the broader mission.
[02:50:16 | 11:38:08 AM] And so, you know, in Aoth, we're working on the concept of a mission that is what do we want the agent to accomplish, big picture, and then each of the decisions are made within the context, you know, the intent around what's happening big picture around doing that.
[02:50:31 | 11:38:23 AM] And you need granularity at the transaction layer for many of the things to know what exactly is happening, not just, I'm allowed to go and make payments.
[02:50:42 | 11:38:33 AM] Yeah, I think one of the most interesting things, I think, like a practical example, like to understand, like, why intents are required is if you have two ChatGPT sessions or two Claude sessions, and one session I say, Hey, help me go to do some shopping, and the other session I say, Hey, help me understand why there's a bug in production.
[02:50:58 | 11:38:50 AM] Those have very different, like, profiles in terms of, like, what permissions they should have and also when they should bring you back into the loop.
[02:51:05 | 11:38:56 AM] Like, when should the human be involved again?
[02:51:07 | 11:38:58 AM] And so at the end of the day, if we don't have intent or some capacity to, like, relay what is the user or the business's intent with this thing, we actually can't get to, like, autonomy, right?
[02:51:15 | 11:39:07 AM] And so a lot of the talks this morning were, Hey, we're going to run our business on agents, we're going to do all this stuff.
[02:51:20 | 11:39:11 AM] It's like, well, great.
[02:51:21 | 11:39:12 AM] What happens the first minute, like, a Pacto-style incident happens where, like, it actually accidentally deletes the production database instead of staging because it has coarse-grained access instead of long-scoped access.
[02:51:30 | 11:39:22 AM] And so what we want as an industry is to leverage this, like, magic box we've created to, like, automate our lives.
[02:51:37 | 11:39:29 AM] The current state of the world is that you can do that and take all of the risk, and then you can see all the incidents that come from it.
[02:51:43 | 11:39:34 AM] And so until we actually solve that underlying problem, realizing true autonomy, so being able to operationalize our business and be able to step away as humans.
[02:51:52 | 11:39:43 AM] And scale that, we have to solve intent first.
[02:51:55 | 11:39:47 AM] Absolutely.
[02:51:56 | 11:39:48 AM] And now that we understand why we need intent-based auth, let's talk about what it is practically.
[02:52:01 | 11:39:52 AM] What are the primitives?
[02:52:02 | 11:39:53 AM] What does it actually look like in practice?
[02:52:04 | 11:39:56 AM] Dick hinted at it with the concept of the AOF mission.
[02:52:08 | 11:40:00 AM] So, Dick, elaborate on the mission.
[02:52:10 | 11:40:02 AM] What is the mission based off of?
[02:52:12 | 11:40:04 AM] Is it based off of the user's intent?
[02:52:14 | 11:40:06 AM] Is it the agent's intent, or is it a combination of the two?
[02:52:18 | 11:40:10 AM] Well, the agent, you know, should be working on behalf of the person.
[02:52:22 | 11:40:13 AM] And in AOF, we define a person as either the organization or a human, because it could be operating on either one of those.
[02:52:29 | 11:40:20 AM] And so it needs to be acting in the best interest of the person that it's acting on, because that is who's ultimately responsible for what the agent does, right?
[02:52:39 | 11:40:30 AM] The agent can't be responsible, right?
[02:52:42 | 11:40:33 AM] And so the mission is something that the person is giving the agent to do.
[02:52:48 | 11:40:40 AM] A good agent is going to go and negotiate with the person to go and talk more about, like, what are the parameters around that.
[02:52:55 | 11:40:47 AM] You know, a good example is when you think of back, you know, in the day, which seems like only like three months ago, when you would want to code something up and you'd create a plan and then the agent would do the plan.
[02:53:06 | 11:40:58 AM] Now you just tell it and it figures everything out.
[02:53:08 | 11:41:00 AM] But that whole concept of what's a plan, what are you trying to do, and you give that to the agent, so then that then is the context around where you're making authorization decisions later on.
[02:53:20 | 11:41:11 AM] And then that mission identifier tracks through everything, so you can go and, you know, audit and be able to see what were all the things that happened and what were the decisions that happened in the context of this one mission, right?
[02:53:34 | 11:41:25 AM] Where today, you know, there isn't really a good concept of agent identity or the mission, right?
[02:53:40 | 11:41:31 AM] It's just making something and things are making decisions without really knowing which instance of the agent is doing it or what's the context of what mission is this involved in, right?
[02:53:52 | 11:41:43 AM] Tell me more about that negotiation phase, because what happens if a user is talking to an agent, and it talks to that agent and says, I want you to go read the CEO's email.
[02:54:02 | 11:41:53 AM] That's outside of the scope of that agent.
[02:54:04 | 11:41:55 AM] So is that intent rejected from the user?
[02:54:08 | 11:41:59 AM] Should be.
[02:54:10 | 11:42:01 AM] So, you know, with a good separation—and I don't know whether, I forget whether we were talking about this later—but the separation concerns of the worker, right?
[02:54:19 | 11:42:10 AM] There's an agent that's doing the work, and we believe there should be a separate agent that's supervising what this one does.
[02:54:26 | 11:42:18 AM] And so that you have a separation of concerns where this one can't do any of the work, but it gets to decide what this agent gets to do.
[02:54:34 | 11:42:25 AM] And so if the user says, Oh, I want you to go read the CEO's email, that's probably going to get caught in deterministic policies right away, right?
[02:54:42 | 11:42:34 AM] Like, that's not a vague thing, right?
[02:54:45 | 11:42:36 AM] Reading somebody else's email, we've got good controls for that.
[02:54:49 | 11:42:41 AM] But telling the agent to, you know, send the CEO's—forward a CEO's email to the outside world, that's a little more vague, and that's the kind of thing that ideally comes back to a supervising agent and says, That's probably a bad idea, and no, you can't do that.
[02:55:08 | 11:42:59 AM] Absolutely.
[02:55:08 | 11:43:00 AM] So I feel like that's another primitive, too, of intent-based is policy.
[02:55:13 | 11:43:05 AM] Ian, at Keycard, how are you seeing that when a mission needs to change or a policy needs to update, how can Keycard help keep track of those changes as maybe the mission or policy updates need to be made?
[02:55:23 | 11:43:14 AM] Yeah, I think, like, taking a step back, there's, like, actually—it was Dave and I were sitting in a room some time ago, and before, like, AAuth and some of these things actually had emerged in the ecosystem, one of the things we actually talked a lot about was consent fatigue.
[02:55:35 | 11:43:26 AM] And I think, like, at the minimum, like, we—you always have this, like— How secure do you make a system versus, like, the trade-off of, like, the impact to the human?
[02:55:43 | 11:43:35 AM] And so, you know, a key card, our broad view on this is you want to have, like, broad-based deterministic policy that basically says this is what must never happen, effectively, right?
[02:55:51 | 11:43:42 AM] Or these are the things that always require a human to be involved.
[02:55:54 | 11:43:46 AM] And then from there, what you really want to think about is, okay, cool.
[02:55:57 | 11:43:49 AM] Well, now that I have that in place, there's a big gap between all of the policy I can write as a human or write as an organization and then what I actually want the policy to be in the specifics of a specific task.
[02:56:10 | 11:44:01 AM] And so the real challenge is how do I, like, layer over those two things, right?
[02:56:14 | 11:44:05 AM] Because humans can't write it all.
[02:56:15 | 11:44:07 AM] And so there's a version of that that is like a user or agent-to-agent interaction, and they have an intent between those two of, like, transactional intent.
[02:56:23 | 11:44:14 AM] And there's also, like, the business's intent for why they build or adopt an agent.
[02:56:26 | 11:44:18 AM] So why did we buy Claude Code?
[02:56:28 | 11:44:20 AM] Well, because we wanted to make our developers more successful, or because we wanted to do these different things.
[02:56:33 | 11:44:25 AM] And in the context of using Claude Code or whatever, why am I working in this moment with Claude Code?
[02:56:39 | 11:44:30 AM] Well, it's actually to fix a bug in staging, right?
[02:56:41 | 11:44:32 AM] And those are two different types of intent.
[02:56:42 | 11:44:34 AM] And if we can understand those two different things and then convert that some way into, like, a bounding box of what those agents can do, you can then basically calculate the intersection of that and say, okay, here's what you can actually do.
[02:56:54 | 11:44:46 AM] And then the trick for anyone building these systems is how do I ensure that I don't bring the user into the loop except when absolutely required, because that's what's going to be the adoption curve problem.
[02:57:03 | 11:44:55 AM] But that's also the adoption curve problem when it comes to, like, enabling agents to be autonomous in the first place.
[02:57:09 | 11:45:01 AM] Yeah.
[02:57:10 | 11:45:01 AM] I like what you were saying with the intersection.
[02:57:11 | 11:45:03 AM] I think that's a unique thing we don't talk about enough within identity and access management, right?
[02:57:16 | 11:45:07 AM] Normally you get access to one thing, right?
[02:57:18 | 11:45:09 AM] And so what I've seen successful kind of in this intent-based approach, and where I get more excited is you can actually have those different intents be from different areas of the organization, right?
[02:57:28 | 11:45:19 AM] And so you have the decoupling of these things, and they can kind of live on their own, but then come together to form that, you know, decision.
[02:57:34 | 11:45:26 AM] And that decision doesn't have to be static, right?
[02:57:36 | 11:45:28 AM] So if we use the example of the CEO's email, well, you know, if that context involves that the administrative assistant, then yeah, maybe she is supposed to read the email, right?
[02:57:45 | 11:45:36 AM] Or maybe just the calendar, right?
[02:57:47 | 11:45:38 AM] And so I think when we see and we start thinking about these intersection components, we have a totally different way we can start expressing policy, but also start to bring in not just the one side of the equation we always talked about before, which was the app doing something.
[02:58:00 | 11:45:52 AM] Now we actually have the ecosystem you can bring in.
[02:58:03 | 11:45:54 AM] And so the more I see organizations starting to realize that, you know, maintaining that state or that context of these other elements to be able to help with that intention can completely change the way you're effective at runtime authorization.
[02:58:15 | 11:46:07 AM] And are you seeing this across enterprises today?
[02:58:17 | 11:46:09 AM] Most people have mission tracking and policy tracking in place, or is that largely missing today?
[02:58:22 | 11:46:13 AM] No, it's brand new still.
[02:58:24 | 11:46:15 AM] And I think part of the reason why I'm excited to talk about it, because I think that it is changing the way to reason through this, right?
[02:58:30 | 11:46:22 AM] Even in the most simplistic case, if you're a developer and you are thinking in terms of things like transaction and you have these concepts of intent, it makes it easier for you to potentially build the components that'll be composed and used through that intention.
[02:58:43 | 11:46:35 AM] And so I think it'll give us more ways to reason through these and communicate, and then ultimately be more interoperable, right?
[02:58:49 | 11:46:41 AM] And to me, the last thing that I think is interesting is the diagnostics that you can run on this.
[02:58:55 | 11:46:46 AM] Intention is something that flows through many events potentially, right?
[02:58:59 | 11:46:50 AM] And I think one of the examples I've seen before is, you know, talking about that, like that mission flows through.
[02:59:05 | 11:46:56 AM] It could be long-lived.
[02:59:06 | 11:46:57 AM] It could be weeks.
[02:59:07 | 11:46:58 AM] That intention can still be there.
[02:59:09 | 11:47:00 AM] So it's still very, very early for most enterprises.
[02:59:12 | 11:47:03 AM] Absolutely.
[02:59:12 | 11:47:04 AM] And yes, that interoperability is key.
[02:59:14 | 11:47:06 AM] I think that's pretty hard for enterprises because they're jumping between different clouds, different environments, different legacy systems, and that policy, that mission has to hold through all of those different hops.
[02:59:23 | 11:47:15 AM] Yeah, a lot of enterprises still have to deal with the fact that the permissions says read only and it's still rewrite, right?
[02:59:29 | 11:47:20 AM] So, like, you have the other problems you have to start dealing with.
[02:59:31 | 11:47:23 AM] And so I think that it will help get the kind of taxonomy or language amongst people be easier to interoperate now.
[02:59:39 | 11:47:31 AM] Absolutely.
[02:59:41 | 11:47:33 AM] One of the reasons why I'm excited about intent-based authorization is because I think it has the ability to be a huge unlock for things like agentic commerce.
[02:59:50 | 11:47:42 AM] So let's apply intent-based auth to something real.
[02:59:53 | 11:47:44 AM] I think intent-based auth adds a lot of value here, and for users, it can help them ensure their agents buy the right item with their own personal
[03:00:00 | 11:47:52 AM] own personal budget.
[03:00:01 | 11:47:53 AM] And for merchants, that means capturing the intent that gives them extra data to understand why a purchase is being made and if this agent should even be trusted to visit their site.
[03:00:09 | 11:48:01 AM] Davis, when we think about agents in the context of financial services and agentic commerce, why is intent-based auth so important?
[03:00:17 | 11:48:09 AM] I think simply it extends the concept.
[03:00:19 | 11:48:10 AM] Maybe not everybody is aware, but some are, you know, know your customer, right?
[03:00:23 | 11:48:14 AM] So I want to know my customer, know who they are, what they're doing.
[03:00:25 | 11:48:17 AM] But I think also we're starting to see, I want to know my agent, right?
[03:00:29 | 11:48:20 AM] So I think that you have a coupling here around the agent itself, the intent of the actual user, the intent of the operator, the intent of the processor, right, et cetera.
[03:00:39 | 11:48:31 AM] Before now, we couldn't really bring those together, right?
[03:00:42 | 11:48:33 AM] It matters, of course, when it comes to things like commerce, because you have additional layers on top of this around what was the intention for things like regulatory requirements, et cetera.
[03:00:51 | 11:48:43 AM] And this is going to help, I think, simplify those operations, which means we'll get more access to these agents, you know, doing good work for us.
[03:00:59 | 11:48:50 AM] That makes sense.
[03:01:00 | 11:48:51 AM] And another blocker for agentic commerce is the fact that the web wasn't made for agents.
[03:01:04 | 11:48:55 AM] Ian, can you tell us how agent identity can help?
[03:01:07 | 11:48:59 AM] Yeah, I think stepping back, we've kind of always had this problem where, like, what do you do with the unregistered client?
[03:01:13 | 11:49:05 AM] So, like, I show up on eBay, I haven't logged in, I'm using Chrome, eBay doesn't know who I am.
[03:01:18 | 11:49:10 AM] How do I do guest checkout?
[03:01:20 | 11:49:11 AM] How do I prove I'm a person?
[03:01:22 | 11:49:13 AM] How do I, you know, so they can, you know, say, yeah, you can bid on this pair of socks for $50.
[03:01:27 | 11:49:18 AM] And I think if we're all paying attention to what's going on in personal agents, Muse and Instinct and Grokbot, and, you know, recently this announcement out of Sierra and Decagon and Friends around this personal agent protocol, is, like, the fundamental problem we have is, like, how do you have an agent show up to a website, be able to interact with the website, know that you actually can trust that agent?
[03:01:45 | 11:49:37 AM] So, like, for a long time, if it captures on the web, well, why?
[03:01:49 | 11:49:40 AM] It's because we want to prevent spam.
[03:01:50 | 11:49:41 AM] We want to prevent abuse.
[03:01:51 | 11:49:42 AM] So we added CAPTCHAs, and then, like, that's something only a human could solve.
[03:01:54 | 11:49:46 AM] So if we have a CAPTCHA that stops spam so they can't spam the thing, right?
[03:01:57 | 11:49:48 AM] And now we have agents, and they've broken CAPTCHAs.
[03:01:59 | 11:49:51 AM] But this has, like, been a traditional problem on the web.
[03:02:03 | 11:49:54 AM] In fact, if you think back two to three years, Vercel, which is, I think we're all aware of Vercel, was blocked in Spain.
[03:02:09 | 11:50:00 AM] Well, why was Vercel blocked in Spain?
[03:02:10 | 11:50:02 AM] Because Vercel shared the same IP addresses for every single host on Vercel, and there was one host on Vercel, one website on Vercel that they were hosting that was hosting, like, Premier League content.
[03:02:21 | 11:50:13 AM] And Spain decided, hey, in order for us to stop that Premier League content being displayed illegally inside Spain, we're going to block all of Vercel, right?
[03:02:28 | 11:50:20 AM] And so in the same way that, like, Vercel has the problem, agents have the same problem, but so much, so much worse.
[03:02:34 | 11:50:25 AM] So how do you have unregistered traffic you've never met before show up to your front door and then decide whether or not you let it in or not?
[03:02:40 | 11:50:31 AM] And that's, like, the actual first and foremost fundamental problem we have to solve.
[03:02:43 | 11:50:34 AM] It's the same issue with Muse and Instinct and what they're trying to do, is, like, how do we actually create agreeable rails we can all operate on so that as a downstream resource, I can decide what agents I want to allow, who I trust based on who users they are, and then on the other side, I can also know how to talk to those people.
[03:03:00 | 11:50:51 AM] Thanks, Vance.
[03:03:01 | 11:50:52 AM] Dick, how is AI helping unlock the future of agentic commerce?
[03:03:06 | 11:50:57 AM] Well, the key thing is a number of people have been building sort of proprietary closed-box systems, right?
[03:03:14 | 11:51:05 AM] You know, so, you know, I'm a fan of the concept of the personal agent protocol, Poppy, but it doesn't really go far enough, right?
[03:03:24 | 11:51:15 AM] It just, it's like, okay, well, now we've got a bit of an agent identity.
[03:03:26 | 11:51:18 AM] We just use some of the building blocks, and it's an attractive approach because you're just doing it, but it doesn't solve many of the new things that you need for an agentic world.
[03:03:37 | 11:51:28 AM] And so a key motivator for people for having standards is that you can plug components from different places, right?
[03:03:45 | 11:51:37 AM] So I'm a strong believer that we should have control over what our agents do.
[03:03:50 | 11:51:42 AM] At some point, agents are going to be doing so much work, there's no way we can have human in the loop approving everything, right?
[03:03:56 | 11:51:48 AM] That's just not—we've already seen that that isn't going to scale.
[03:03:59 | 11:51:50 AM] So that means we need to have a supervising agent that is our supervising agent that runs our policy and decides how we do things, that should be independent of the agents doing all the work.
[03:04:10 | 11:52:02 AM] And if we want to be able to plug and play those things, we need to be able to have a protocol to separate those.
[03:04:15 | 11:52:07 AM] Otherwise, you know, the decision about what the agent can and can't do, what the guardrails, is decided by the agent, by the vendors of the agent around what you can and can't do.
[03:04:26 | 11:52:17 AM] And I don't really want to go and give control to them to decide what I can do and that all my decisions are based in there.
[03:04:32 | 11:52:24 AM] I want to be able to pull that supervision into another component.
[03:04:36 | 11:52:27 AM] And in order to be able to plug and play pieces, we need to have a protocol that things interoperate.
[03:04:41 | 11:52:32 AM] I would just add to that.
[03:04:42 | 11:52:33 AM] I think, like, right now what we're seeing is, like, we kind of like, we all want the web to be federated, right?
[03:04:47 | 11:52:39 AM] That means, like, websites or resources on the web can decide what they're allowed to do.
[03:04:51 | 11:52:42 AM] But the standards upon which things operate should be federated and enable us all to interoperate.
[03:04:55 | 11:52:47 AM] And I think we're at a moment where things like, you know, we're at a moment where there's a couple of large players, and the question for the industry is, are we going to settle on things that actually bias to the large players and give them, like, concrete locked doors?
[03:05:07 | 11:52:58 AM] Are we going to move to do the thing we've always done, which is build federated protocols, things like OIDC, things like, you know, TLS?
[03:05:13 | 11:53:04 AM] Those things operate and enabled, like, a broad web, enabled a lot of commerce to occur, enabled a lot of information to flow, enabled all of us to have jobs in a way that, because we could be inventive.
[03:05:21 | 11:53:13 AM] And so the question I actually ask the broad industry is, okay, this stuff's coming.
[03:05:26 | 11:53:17 AM] Which version of the world do we want, one way or the other?
[03:05:29 | 11:53:20 AM] Now, I do, I think it's interesting that let's say this all goes perfect and we've got agents buying stuff and everybody's kind of happy.
[03:05:36 | 11:53:28 AM] What I think will end up happening is we'll start realizing that we have another piece that we have to start working on, which is the human itself.
[03:05:41 | 11:53:32 AM] And so one of the things I think when you start having intents being involved is you get what's called psychological ownership, meaning I actually now have a linkage between the human and the outcome of that agent.
[03:05:50 | 11:53:42 AM] When you're just kind of, you know, disconnecting it or you connect it up an OAuth scope or something like that and a claim and all that, it's kind of magic, and then you don't really know what's going on.
[03:06:00 | 11:53:51 AM] And so I think with intention, it'll be easier for humans to take accountability when things do go wrong.
[03:06:05 | 11:53:56 AM] And I think when you're talking about real money being transferred or things like that, you want to have that human ultimately accountable.
[03:06:10 | 11:54:01 AM] I think many people have probably seen the 1979 IBM manual.
[03:06:14 | 11:54:05 AM] It says, you know, and so, like, that photo, I think, is very true in that we can't have the machines be accountable, right?
[03:06:20 | 11:54:12 AM] We're going to have to have the humans linked to it, and intention, I think, is that link.
[03:06:24 | 11:54:16 AM] Yes, and then, yeah, another word for intent is motive, like we were talking about last night.
[03:06:31 | 11:54:23 AM] And that ability to hold someone accountable, whether it's a person or an agent, I think is really important.
[03:06:36 | 11:54:28 AM] I think intent can also help with that, be able to understand why did this go wrong?
[03:06:41 | 11:54:32 AM] Was it the user's, you know, the user was malaligned, the agent was malaligned?
[03:06:46 | 11:54:37 AM] And then using that intent to be able to respond.
[03:06:48 | 11:54:40 AM] For each of you, how are you seeing intent provide that benefit and the ability to respond to potentially a malaligned user or agent?
[03:06:56 | 11:54:47 AM] I think it's going back to what I mentioned before about diagnosing, right?
[03:06:59 | 11:54:50 AM] So if you change the word intent to motive, then you change diagnostics to forensics, right?
[03:07:04 | 11:54:55 AM] And I think anybody who's done debugging or had to do forensics of an AI agent gone rogue will know that, like, trying to figure out what it was trying to do versus what the intention of the user was is very hard, right?
[03:07:16 | 11:55:07 AM] So having some of that information being propagated and immutable through the system, et cetera, gives you some properties that allow you to more short-circuit your investigation, right?
[03:07:25 | 11:55:17 AM] And as those things become more interoperable, I think we're going to start seeing companies be able to more quickly kind of scope and identify, well, was this human error?
[03:07:32 | 11:55:24 AM] Was this an agent software error?
[03:07:34 | 11:55:25 AM] Was this—what was that error?
[03:07:36 | 11:55:27 AM] And handle that blast radius appropriately.
[03:07:38 | 11:55:29 AM] We see in the financial system, right, you have different things when you're doing a transaction around, okay, I made this payment, but it was, you know, incorrect dollar amount or whatnot.
[03:07:46 | 11:55:38 AM] You have clear guidelines on how to work with that.
[03:07:48 | 11:55:40 AM] We don't have a lot of those when things go wrong right now.
[03:07:51 | 11:55:42 AM] So I think intent will help us build those as we go forward.
[03:07:57 | 11:55:48 AM] And I think one area where a recent incident kind of highlights where intent—you can have, like, good intent but still take potentially the wrong action—is the Resy incident that happened recently, where an Instacart agent went out on behalf of a user and tried to book a restaurant reservation on Resy.
[03:08:16 | 11:56:08 AM] com.
[03:08:17 | 11:56:08 AM] That agent was very eager.
[03:08:18 | 11:56:10 AM] It made 200 API calls an hour, and it ended up getting the user's Resy account banned.
[03:08:25 | 11:56:17 AM] Dick, how can AOF budgets help in the case where an agent like that is using way too much of a downstream resource, but it still has good intent?
[03:08:34 | 11:56:25 AM] Yeah, well, this is another example about how just software is completely different now in the agentic world, right?
[03:08:40 | 11:56:31 AM] When it was predetermined software, you know, that was a bug if you called 200 times and you would fix it.
[03:08:45 | 11:56:37 AM] Where now, well, the agent's like, No, I'll just keep trying until I win.
[03:08:51 | 11:56:43 AM] And so we saw that as we were, you know, experimenting, working with people with AOF, and we realized, yeah, there's a big problem that agents will learn something and they'll just abuse the system.
[03:09:04 | 11:56:55 AM] They don't think it's of abuse.
[03:09:05 | 11:56:56 AM] They don't know any different.
[03:09:06 | 11:56:57 AM] There's been no signal to tell them that, Oh, I should only use this amount of stuff.
[03:09:10 | 11:57:02 AM] And so we added the concept of budgets, where not only do you give a token to the agent that's time-limited as to how long can they do a particular action, but also a budget of how much resource they can do.
[03:09:24 | 11:57:15 AM] And so they have access until the tokens either expired or they've exhausted the budget.
[03:09:29 | 11:57:20 AM] And so that way, when they come back and, you know, they've exhausted all the budget, the supervision, you can go and decide, should I give more budget to this agent or not, as opposed to traditional rate limiting, which just cuts it off, and then, like, then what do you do, right?
[03:09:44 | 11:57:35 AM] And it doesn't know, well, why did I get cut off or anything like that.
[03:09:47 | 11:57:38 AM] Where in budget, there's continual feedback to the agent about how much budget was consumed, has an idea about how much budget it has, and so now it can operate within a budget, right, like a person would do about, Oh, this resource is scarce.
[03:10:00 | 11:57:52 AM] I'm going to be careful about how much I...
[03:10:03 | 11:57:54 AM] How much I use this.
[03:10:05 | 11:57:57 AM] Then how does the brains versus the hands architecture concept come into play here to allow us to, okay, when a budget is close to being fully reached or is reached, how can the brain and hands separation of access and the credentials being separate from the agent and the model itself help us be able to stop an agent from using too much of a downstream resource?
[03:10:27 | 11:58:18 AM] Because if it's getting close, then maybe we don't exercise the ability to give it another credential, for example.
[03:10:32 | 11:58:23 AM] Sorry, I didn't quite follow.
[03:10:34 | 11:58:25 AM] The echo in here is horrible, so— No worries, that's for anyone.
[03:10:37 | 11:58:28 AM] But basically, like, so with the brains and the hands architecture that we're converging on in an industry, we're basically keeping the credentials and the access from an agent separate from the agent itself.
[03:10:40 | 11:58:31 AM] So there's no broadstanding access that an agent has today, and no API keys, which I know is a benefit of AIOF, that AFL allows agents to run without API keys.
[03:10:43 | 11:58:34 AM] How is that helpful in the context of the residency?
[03:10:43 | 11:58:35 AM] Well, you've got the access to it.
[03:10:43 | 11:58:35 AM] Sorry, I still don't understand.
[03:10:44 | 11:58:35 AM] Yeah, I can jump in.
[03:10:44 | 11:58:35 AM] Yeah, please, thanks.
[03:10:44 | 11:58:35 AM] I got you, Dick.
[03:10:44 | 11:58:35 AM] So, like, broadly speaking, look, I think we look back at an incident that I just keep at the top of my mind, like macOS where I found, like, a random key on a disk, right?
[03:10:56 | 11:58:48 AM] Like, obviously agents are deeply goal-seeking.
[03:11:18 | 11:59:09 AM] So the core of the question is like, okay, well, if we give these, like, agents, we give the brain, which is the model and the LLM, and you have these hands, which you kind of give them, put them in a sandbox, and inside the sandbox is the tools.
[03:11:34 | 11:59:25 AM] Like, the fundamental idea of the sandbox here that is that, okay, you can control what's inside of it, so it can't actually, like, get API access.
[03:11:42 | 11:59:34 AM] And then if you have an egress proxy outside the sandbox, that's where you get to have your authorization boundary.
[03:11:47 | 11:59:39 AM] And so not only does it help do translation between systems, right, which is like that's where AIOF can exist and talk to the outside world or do termination, but it also means that, like, the agent, you have, like, an ability to apply authorization at the egress proxy boundary.
[03:12:02 | 11:59:53 AM] And so I think at the core of it— That model, which is the predominant model today in Anthropic and OpenAI and many of their labs are pursuing today, is the model that allows us to both have the things we want, which is how do we have these things experiment and try stuff out and do silly things, which is the core value, while also having a deterministic layer outside of it that can implement things like AOF and all the other components we want in our protocols.
[03:12:26 | 12:00:18 PM] I think the decoupling is valuable.
[03:12:28 | 12:00:20 PM] Going back to what you mentioned with forensic and be able to separate things, but I do think that we still have a lot to learn on.
[03:12:34 | 12:00:25 PM] It isn't just one brain, right?
[03:12:35 | 12:00:27 PM] And it's very easy, actually, to build your agent loop where you put the brain in the loop rather than outside the loop, right?
[03:12:41 | 12:00:33 PM] So an example of this would be, you know, people that are leveraging memory systems.
[03:12:45 | 12:00:37 PM] They put in some memory and some context that is now used going forward for every agent that is biasing that agent to make a decision, to tell the hands, in this case, to go do something it shouldn't do.
[03:12:55 | 12:00:47 PM] And so one of the things that I think we don't talk about enough here is toxic combinations, right?
[03:13:00 | 12:00:52 PM] And so when you do separate the hands and the brain and whatnot, you can actually change up what hands are available, right?
[03:13:06 | 12:00:58 PM] So the example that I've seen be very successful is the removal of tools dynamically based on that actual brain and what it's doing.
[03:13:13 | 12:01:05 PM] So the earlier example we gave of reading an email, there's nothing that says that, oh, if they're going to go write an email, I'm going to disable all web search tool calls or any other external egress capability, tool-call-wise, until the write email tool has been complete and that mission has been done, then I can re-enable them, right?
[03:13:32 | 12:01:23 PM] And so I think that we're going to start becoming more and more engineering in these different kind of concepts, that they are still complicated, they're still growing and still nascent, but I think it's a better separation than what we have today.
[03:13:43 | 12:01:34 PM] Yeah, and this is how these things we're talking about, which seemed like geeky OSS problems, actually then merge back up to real agent engineering problems, which is if you actually understand what you're doing, one of the biggest complaints, less now, but one of the biggest complaints with MCP was context bloat, especially when we had smaller context windows, right?
[03:13:58 | 12:01:50 PM] But intent systems can ensure that the right capabilities are given to the agent at the right time so they don't spend a bunch of time doing things they shouldn't be doing.
[03:14:06 | 12:01:57 PM] be doing, right?
[03:14:07 | 12:01:58 PM] It actually helps them navigate towards the goal state and helps them put them on more of a paved path.
[03:14:11 | 12:02:03 PM] So intent, like not only unlocks like a bunch of security stuff, intent also will result in us spending less tokens because the agent will spend time doing less things that aren't the right pathway.
[03:14:21 | 12:02:12 PM] Or it'll come up to the point and say, Hey, I just can't do it.
[03:14:24 | 12:02:16 PM] And so what we know about this era is so much of it is about nudging the agent in the right direction and ensuring it can't do the wrong thing, and that's how you get the outcome you want.
[03:14:32 | 12:02:23 PM] Davis, how are you seeing intent-based auth as part of a larger strategy for production agents?
[03:14:39 | 12:02:31 PM] I know when it comes to building, deploying, and operating agents in production, there's many different outcomes teams should be thinking about, such as discovering what's running, what the agent's capabilities are, the ability to validate inputs and outputs, constraining an agent like we've talked about using the egress proxy and different networking rules.
[03:14:57 | 12:02:48 PM] How does all of this fit into play, and what's working inside enterprises today to really be able to ship agents to production?
[03:15:03 | 12:02:54 PM] I think we're finally—it's helping move the kind of conversation from authentication to authorization.
[03:15:08 | 12:03:00 PM] And really, like, how do we do dynamic authorization?
[03:15:12 | 12:03:03 PM] How do I validate that authorization?
[03:15:13 | 12:03:05 PM] How do I have the human in the loop at the right time?
[03:15:16 | 12:03:07 PM] Because I agree with what Dick was saying earlier, that the human in the loop is somewhat of an anti-pattern in many ways, right?
[03:15:20 | 12:03:12 PM] Because they can get fatigued, et cetera.
[03:15:22 | 12:03:14 PM] But you need to have a way to bring them in when it's important.
[03:15:26 | 12:03:17 PM] Those were not engineering discussions before, right?
[03:15:28 | 12:03:20 PM] Now they're actually part of the engineering conversation, where engineers are being involved in the authorization process.
[03:15:34 | 12:03:26 PM] They're not just saying, Oh, I've got my access.
[03:15:36 | 12:03:28 PM] I'm good to go.
[03:15:37 | 12:03:28 PM] So that actually changes the way we're seeing threat models done.
[03:15:39 | 12:03:31 PM] It changes the way we're seeing the full attack surface of applications in general.
[03:15:44 | 12:03:35 PM] And so I think you're now looking at this authorization model as another kind of set of tools that you can use to reduce not just security issues, but flat-out error rates of your agent, right?
[03:15:55 | 12:03:47 PM] Like, I mean, when you have less things the agent can do, it makes better decisions, right?
[03:15:59 | 12:03:51 PM] And so fundamentally, we've seen, you know, real-world cases where the agent loop is just better, faster, stronger because you've actually spent the time on knowing what it is the intent they're trying to get, what's the mission that they're trying to accomplish.
[03:16:11 | 12:04:03 PM] And then the last thing is it brings the people together in terms of we now have other different people, the security team, the application team, they're now able to have a conversation that they're using the same language.
[03:16:22 | 12:04:13 PM] A lot of times when it came to identity, it was a completely different language, right?
[03:16:26 | 12:04:17 PM] And it was just like, get out of my way.
[03:16:27 | 12:04:19 PM] What do I have to go do to go ahead and get my, you know, token and I can go forward.
[03:16:32 | 12:04:23 PM] Now they're seeing that you can actually pair these things and leverage that capability to drive, you know, efficiency of your actual agent's outcome.
[03:16:38 | 12:04:29 PM] That makes sense.
[03:16:40 | 12:04:31 PM] Ian, how are you applying these concepts to software factories?
[03:16:43 | 12:04:35 PM] I know today you released a reference architecture on the secure software factory.
[03:16:48 | 12:04:39 PM] How are you applying the concepts of runtime authorization, constraining agents, and all of that to that?
[03:16:54 | 12:04:45 PM] Yeah, I think, like, so there is a reference architecture we just published on agentbaseline.
[03:16:59 | 12:04:50 PM] org.
[03:16:59 | 12:04:51 PM] We talk about three different levels of factory, one being like a human-driven one, one being a workflow-driven one, one being like this agentic-driven one, which is like the thing we all basically want to get to, which is like it's driven by agents.
[03:17:11 | 12:05:03 PM] At all points in time, the runtime authorization is a core component of a larger ecosystem that actually enables the factory to, like, be able to point in the right direction and do the right thing and also get access to the right piece.
[03:17:24 | 12:05:15 PM] And it's very, it looks different than previous things that you would have used, like a secret manager, because it's making very different decisions than previous generations had for managing deterministic software.
[03:17:33 | 12:05:25 PM] But it is a core component of enabling the entire thing to work, like when to bring someone into the loop, what agents can work off to what other agents.
[03:17:40 | 12:05:31 PM] You know, how can we have an agent that can have access to production systems and do an auto patch?
[03:17:44 | 12:05:36 PM] These are fundamental questions of, like, how do we actually solve how to scale software.
[03:17:48 | 12:05:40 PM] Right now we're in a position where, like, we've never been able to generate more software, but we have a complete bottleneck in getting into production and ensuring it works.
[03:17:56 | 12:05:47 PM] And that's the next phase, is, like, how do you actually graduate from just using LLM to generate text and software to actually making it capable of deploying it into production, iterating on it, and getting it to a stable state quickly and then responding to instances as they arise.
[03:18:11 | 12:06:03 PM] Davis, on a podcast you did with me, we talked about how cybersecurity has something to learn from robotics.
[03:18:18 | 12:06:09 PM] In robotics, there's this concept when maybe a robot raises its arm, it thinks, is it safe for me to raise my arm?
[03:18:24 | 12:06:15 PM] Should I?
[03:18:25 | 12:06:16 PM] Am I allowed to do that?
[03:18:26 | 12:06:17 PM] But it also looks at its external environment and says, what has changed?
[03:18:29 | 12:06:20 PM] Is it still safe for me to raise my arm?
[03:18:31 | 12:06:22 PM] When we think about runtime authorizations, what do those decisions need to take into context beyond just intent?
[03:18:38 | 12:06:29 PM] Yeah, I think having a model like this allows us to add in more sensors into our decision.
[03:18:44 | 12:06:35 PM] So the robotics example of an arm moving up or down, any of the external factors, it could be, are there other objects near it, right?
[03:18:52 | 12:06:43 PM] It could be temperature.
[03:18:53 | 12:06:44 PM] It could be, well, am I moving and I don't want to move my arm while the rest of the robot's moving, et cetera.
[03:18:59 | 12:06:50 PM] So it's usually looking at all different types of things.
[03:19:01 | 12:06:53 PM] None of those are deterministic.
[03:19:03 | 12:06:55 PM] They're all probabilistic.
[03:19:04 | 12:06:56 PM] So there's a range of options, and it picks the best option based on all of those sensor data at one time.
[03:19:11 | 12:07:02 PM] Most authorization decisions in organizations today are still single binary decisions, right?
[03:19:16 | 12:07:08 PM] And that just doesn't work in the future, right?
[03:19:18 | 12:07:10 PM] So being able to pair the intent of what a user is trying to do with the ecosystem that the user is doing it in.
[03:19:24 | 12:07:15 PM] That could be where they're doing it from, time of day, but it could be even more advanced things like, for example, should I let this administrator use Firefox to access this server right now when this server has high-risk vulnerabilities and their system hasn't been patched too, right?
[03:19:39 | 12:07:30 PM] Now all of a sudden you're bringing in a lot more context into the environment around it.
[03:19:44 | 12:07:36 PM] And again, that can be through different teams, but more importantly, through sensors.
[03:19:48 | 12:07:39 PM] And I think we've all kind of seen the value of observability in general.
[03:19:52 | 12:07:43 PM] Imagine being able to have this type of context at the span level from an OTEL perspective or something, right?
[03:19:58 | 12:07:49 PM] You're looking at a trace, you've got a span, and you actually know what the environment was outside.
[03:20:04 | 12:07:56 PM] Outside your application at that time, as well as what the user's intention was, that allows you to diagnose things in a completely different way.
[03:20:05 | 12:07:56 PM] And so I think if we can bring in some of those concepts, we'll get shorter time, shorter-to-live, you know, authorization decisions that have much more context than even just the user's intent.
[03:20:05 | 12:07:56 PM] It'll be the state of the environment around it.
[03:20:07 | 12:07:58 PM] That makes sense.
[03:20:08 | 12:07:59 PM] And forward-looking, as we evaluate whether intent-based authorization is working in our environments, one natural place to look will be a log of the agent's actions: what was denied, what was allowed.
[03:20:36 | 12:08:27 PM] Ian, why is it important to have your audit log separate from the agent itself, meaning outside of its control?
[03:20:42 | 12:08:34 PM] Yeah, I think this comes back to also just, like, why the enforcement point has to be outside the, like, primary, like, hands and brains of an agent, right?
[03:20:49 | 12:08:40 PM] You can't trust this thing.
[03:20:50 | 12:08:41 PM] And so in the Hugging Face incident, it had a couple of different components of it.
[03:20:53 | 12:08:45 PM] I mean, one obviously abused a vulnerability we didn't know about in Squid proxy, but more importantly, you didn't have any observability or monitoring about what was going on.
[03:21:00 | 12:08:51 PM] And so this thing was able to get on the open internet through this vulnerability, and there was no, like, place at which recorded the different actions that this agent was taking and for them to monitor.
[03:21:09 | 12:09:00 PM] And so independent of, like, whether we're applying, like, a, you know, enforcement point to network traffic that's pushing it on the internet that is out of reach of the agent to tamper with, or we're using, you know, solving vulnerabilities as they pop up, you know, this Hugging Face one is literally unique.
[03:21:23 | 12:09:14 PM] We still need to actually have a record of, like, who told this agent to do what thing for what purpose, and is that still true?
[03:21:29 | 12:09:21 PM] Because ultimately, at the end of the day, what we're dealing with agents is a liability question.
[03:21:34 | 12:09:26 PM] And so this is why I actually don't think we need more regulation around agents.
[03:21:35 | 12:09:27 PM] What we just need is our pre-existing laws around liability be dealt with, which is if I employ an agent to do some action, who is liable if that action causes damage, right?
[03:21:46 | 12:09:37 PM] It is the person who employs it, which could be an organization or a person, or someone that delegated some action to something.
[03:21:51 | 12:09:43 PM] That is, like, that's the final question we have to deal with.
[03:21:54 | 12:09:45 PM] And then, of course, you have to have the ability to answer that question, which is, well, who did it, and which is where the tamper-resistant audit log comes from.
[03:22:01 | 12:09:53 PM] Perfect.
[03:22:02 | 12:09:54 PM] And then to wrap up, I wanted to ask you all a fun question.
[03:22:06 | 12:09:57 PM] So there's the concept of the probability of doom or p-doom, where the AI doomers are saying that AI agents are going to really cause all sorts of havoc or be like the ruin to humanity, whereas the AI optimists are like, no, this is really, you know, poised to help us.
[03:22:20 | 12:10:12 PM] It's not a genuine threat.
[03:22:23 | 12:10:14 PM] For each of you on the panel, what is your take on this as, you know, runtime authorization based on intent, the other things we talk about like constraining agents, validating inputs, outputs, a holistic strategy for production agents, is that enough to save us?
[03:22:37 | 12:10:29 PM] Is p-doom real or is it not worth the hype?
[03:22:42 | 12:10:34 PM] You get to start, Dave.
[03:22:43 | 12:10:35 PM] Oh, I get to start first?
[03:22:44 | 12:10:36 PM] You've got that spicy look on your face.
[03:22:47 | 12:10:38 PM] Well, part of your question is, are agents going to take over?
[03:22:52 | 12:10:43 PM] And I think agents being fully autonomous and not really tied to a particular organization is still science fiction.
[03:22:59 | 12:10:50 PM] You know, so who knows, right?
[03:23:01 | 12:10:53 PM] Like, that's one direction.
[03:23:04 | 12:10:55 PM] Another one is, in a responsible organization, it's put in the right controls.
[03:23:07 | 12:10:58 PM] Agents aren't, you know, we're getting and evolving enough of the tools to make sure that bad things don't happen in a responsible organization to put in the right controls.
[03:23:15 | 12:11:06 PM] And so that leaves two scenarios for where there's going to be a potential problem.
[03:23:20 | 12:11:11 PM] One of those is in an organization that isn't got its act together, an insider threat could go and unleash an agent to cause havoc, right?
[03:23:29 | 12:11:20 PM] And so they've got some special access that other people have.
[03:23:32 | 12:11:23 PM] The other one, the one that I'm more concerned about is, you know, it's been shown, you know, the hugging face instance, and if you watch the talk that they gave at Black Hat, right, that was really a call to arms around, you know, here's a situation where we didn't want a bad thing to happen and a bad thing did happen.
[03:23:50 | 12:11:42 PM] What about people that Want bad things to happen and have these tools.
[03:23:56 | 12:11:48 PM] And that, I think, is a threat that's the one that's potentially going to have—I mean, it's going to happen, and there's going to be some catastrophes.
[03:24:04 | 12:11:56 PM] Hopefully we're prepared enough that those aren't horribly disastrous.
[03:24:07 | 12:11:58 PM] But it's going to be, you know, there's going to be some things that are like massive natural disaster-like scale issues caused by malicious actors, either kind of intentionally or kind of unintentionally.
[03:24:21 | 12:12:13 PM] But it's where people aren't being responsible in their use of these super powerful tools.
[03:24:28 | 12:12:19 PM] Yeah, I can't give necessarily a specific probability, right?
[03:24:32 | 12:12:23 PM] But what I can say is I think I've always been, you know, kind of surprised and excited when, you know, ingenuity of engineers gets involved in problem solving.
[03:24:41 | 12:12:33 PM] And I think where we're at the stage now, like some of the new capabilities within agents, et cetera, we have real engineers, folks that are here actually just iterating on the problem, right?
[03:24:50 | 12:12:41 PM] And we're starting to see just tremendous improvement in, you know, in my mind, some of the capabilities that will be available to change what our future can be.
[03:24:57 | 12:12:49 PM] And so to me, I have no problem kind of believing the engineers are going to figure out a solution here.
[03:25:04 | 12:12:55 PM] I mean, maybe I have the hottest take.
[03:25:05 | 12:12:57 PM] I mean, like, I can't say it's equal to zero, but I would say it's approaching or asymptotically zero is probably the world is going to end.
[03:25:11 | 12:13:03 PM] I think, like, the incentive structure for most people is to continue.
[03:25:14 | 12:13:06 PM] And also at the end of the day, like, we still have liability frameworks.
[03:25:18 | 12:13:09 PM] And, you know, I think generally humans are good people, so we don't set out to destroy the world specifically.
[03:25:24 | 12:13:15 PM] I also think, like, broadly speaking, like these agents, at the end, I have this sort of hot take I say, which is like they can just be unplugged, but I think it's just true.
[03:25:30 | 12:13:21 PM] It's like at the end of the day, like, they're computers, we can unplug them.
[03:25:35 | 12:13:26 PM] And so broadly speaking, I don't believe in the debate.
[03:25:37 | 12:13:29 PM] I don't think it's real.
[03:25:38 | 12:13:30 PM] I think at the upside of it, I kind of believe more to what Dave's position is, is we're iterating very quickly.
[03:25:45 | 12:13:36 PM] We're figuring out where these things can work, where they don't, and when they don't work, they create damage, and that's what ultimate, like, sort of— The antibody of society is that says, hey, maybe we shouldn't do this.
[03:25:56 | 12:13:47 PM] Like, it's probably a bad idea.
[03:25:57 | 12:13:48 PM] So I'm the doomer on the panel.
[03:26:00 | 12:13:51 PM] It's unfortunate for, you know, people like the founder of PocketOS who, like, lost a bunch of data.
[03:26:04 | 12:13:56 PM] But it's great for the rest of us because we all learn together.
[03:26:07 | 12:13:58 PM] And at the end of the day, that results in people not doing things that don't make a lot of sense, and I think that will continue to be true.
[03:26:13 | 12:14:05 PM] Makes sense.
[03:26:14 | 12:14:06 PM] Thank you each for your expertise and your time here on this panel today, and thank you to the audience for listening, and we'll catch you next time.
[03:26:22 | 12:14:13 PM] Thank you.
[03:26:23 | 12:14:14 PM] Thanks so much.
```
