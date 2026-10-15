---
title: Building an enterprise agent ecosystem with MCP (gateway, servers,
  monitoring, memory, evals, PII trimmer, context optimizer)
description: "Day 2 · Oct 14. A recorded, off-agenda talk in which a senior
  staff engineer from Intuit Credit Karma shows how to move AI agents from
  experiment to enterprise: an MCP gateway with JWT auth and Redis sessions,
  security-reviewed FastMCP servers, OpenTelemetry-based monitoring, LangGraph
  with human-in-the-loop, memory, eval tables, a PI…"
sidebar:
  order: 23
  hidden: false
pagefind: true
prev: false
next: false
---

<p class="session-context"><span class="day-badge">Day 2 · Oct 14</span> <a href="/day2/">Day 2 digest</a> · <a href="/sessions-index/?day=2">More from this day</a></p>

A recorded, off-agenda talk in which a senior staff engineer from Intuit Credit Karma shows how to move AI agents from experiment to enterprise: an MCP gateway with JWT auth and Redis sessions, security-reviewed FastMCP servers, OpenTelemetry-based monitoring, LangGraph with human-in-the-loop, memory, eval tables, a PII trimmer, and a context optimizer that cut tokens 70-78%.

## TL;DR
- Agents fail in production because foundation controls are missing: no auth gateway, no governed tools on MCP servers, no tracking, no memory management.
- An internal dev portal scaffolds every agent repository with five frameworks (LangGraph agent, memory, tracking-eval, PII blocking, context optimizer) and provisions workload identity, memory DB, tracking tables, and secret management.
- Every tool call routes through a central MCP gateway: Redis session state, JWT access tokens, namespace-based routing (for example Artifactory/MCP or GitHub/MCP) to security-reviewed MCP servers. Direct endpoint access is forbidden.
- Monitoring runs on OpenTelemetry with traces in Tempo, metrics in Prometheus, aggregate views in Grafana, and operation logs in ELK, Loki, or CloudWatch.
- Demos showed the context optimizer cutting a 24,000-token Artifactory query to 2,400 tokens (about 90%); typical savings are 70-78%.
- This was a recorded playback shown during the 12:40pm-2:05pm networking break. It is not on the official agenda. The closer "Thank you so much for watching this video" confirms the recording.

## Key lessons
1. Diagnose failure first: agents fail in production because foundation controls are missing. The speaker lists the gaps: no gateway to authenticate agents and route them to MCP servers, MCP servers without the right tools, no tracking and evaluation of query quality, and no memory management for long, multi-day interactions.
2. Build an enterprise framework, not just an agent. An internal dev portal takes the agent use case, framework (LangGraph or LangChain), and language (Python or TypeScript), then generates a repository that bundles the agent framework plus memory, tracking-eval, context optimizer, and PII blocking frameworks, so all developers use consistent, centralized frameworks across the company.
3. The dev portal also provisions production resources: workload identity, memory DB, tracking and eval tables, and agent secret management. The Kubernetes-to-service-account (K8s-to-GSA) binding is created before deployment, so the agent knows its identity when the orchestrator deploys it to a namespace.
4. Centralize authentication in an MCP gateway. The flow: first query triggers a one-time auth request; the gateway saves session state in Redis and returns a JWT access token; the client then calls a namespace path such as Artifactory/MCP or GitHub/MCP with the bearer JWT; the gateway unwraps the token, attaches the user token, and forwards to the right MCP server, which returns only the data the user is scoped to see. "There should not be direct access provided on any endpoints."
5. In air-gapped environments, build your own MCP servers with the FastMCP wrapper. Every tool defined in an MCP server must pass review by the internal security team, and filters and field limits must block data that should never reach the LLM.
6. Monitor the whole path. Operation logs (for example, "show me all last 401s in my last 10 minutes", or token refresh failures) go to ELK, Loki, or CloudWatch. Traces and metrics flow through OpenTelemetry: traces to Tempo (which tool was slow, whether the call came from an agent or IDE, exact errors), metrics to Prometheus (P95 latency per tool, auth-rejection spikes), all visualized in Grafana.
7. Use a LangGraph agent with interpret, classify, plan, and policy nodes. Classification separates read operations from write, delete, and sensitive ones. Read-only operations execute and record to audit logs. Write and sensitive operations go through human-in-the-loop (HITL) approval; both approval and rejection are saved to the audit log.
8. Persist memory and evals from day one. Memory uses threads, run IDs, and per-node checkpoints: SQLite for local development, Cloud Spanner in production on GCP (with equivalents on Azure and AWS). Agent-level tracking uses six tables (job tracking, quality checks, eval scores, quality metrics, tool invocations, agent trajectory), with eight quality checks per run and a 0-to-1 eval score per run. With 100 agents you get 100 tracking projects you can later aggregate into executive dashboards to show ROI. The PII trimmer blocks and redacts any secret whose severity score is above about 90% before it reaches the LLM, memory DB, or traces. The context optimizer selects payload by token limit, re-ranks relevance, dedupes, and compresses: a 24,000-token Artifactory query dropped to 2,400 tokens (about 90% saving), a Slackbot query dropped to about 1,500, and typical savings are 70-78%.

## Watch this session

<div class="yt-embed">
<iframe src="https://www.youtube-nocookie.com/embed/jiUC6IUMdvc?start=14328&rel=0" title="Building an enterprise agent ecosystem with MCP (gateway, servers, monitoring, memory, evals, PII trimmer, context optimizer)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p class="session-meta">Harisha P C &middot; 12:39:24 PM ET–1:08:53 PM ET &middot; talk &middot; <a href="https://www.youtube.com/watch?v=jiUC6IUMdvc&amp;t=14328s" rel="noopener">Watch on YouTube from 03:58:48</a></p>

## Notable quotes
- "I would like to walk you through that how we can transition an AI agents from an experiment to the real enterprise environment." [03:58:49 | 12:39:25 PM]
- "Again, the AI agent cannot be trusted without continuous monitoring, evaluation, and feedback, right?" [04:11:05 | 12:51:41 PM]
- "So which is almost like 90% saving." [04:25:23 | 1:05:59 PM]
- "Don't try to be in rush to building some agent quickly and deploy ship it." [04:26:39 | 1:07:15 PM]

## Session narrative
The talk starts cold at [03:58:48 | 12:39:23 PM] with "Hello everyone" after a 63-second silence. No host introduces the speaker; the previous agenda talk ended about a minute earlier. The speaker introduces himself, though the automatic transcript garbles his name as "Sharish Gagar". Boundary verification, cross-checked against the Amazon book plug at the end of the talk, identifies him as Harisha P C, a senior staff software engineer at Intuit Credit Karma, where he builds and owns AI analytics infrastructure and services. He also calls himself an advisor, author, researcher, and program committee member who mentors young researchers. He then states his agenda: production challenges, frameworks, architecture, MCP servers, an MCP gateway, gateway monitoring, agent framework types, and additional frameworks for memory, tracking and evals, PII blocking, and a context optimizer to save tokens.

The core argument follows: agents fail in production because foundation controls are missing. He answers with an agent infrastructure built around an internal dev portal. You register the agent with its use case and get an ID, then declare the framework (LangGraph or LangChain) and language (Python or TypeScript) in the portal. The portal creates a repository that bundles five frameworks, so developers cannot skip memory, tracking-eval, context optimization, or PII blocking. Developers clone the repo, build a Docker image, and test locally against a Cloud Spanner emulator, with tracking-eval in SQLite or BigQuery. After two PR approvals, CI/CD registers the agent in a central registry with a tracing URL, scans the image for vulnerabilities, and an orchestrator deploys it to a Kubernetes namespace. The portal also provisions workload identity, memory DB, tracking tables, and secret management, so the K8s-to-GSA binding exists before the agent runs.

The middle of the talk covers the MCP components. In air-gapped environments you build your own MCP servers with the FastMCP wrapper, and internal security must review every tool before it ships. The gateway walkthrough follows a single query end to end: one-time authentication, session state saved in Redis, a JWT access token returned, then a tool call on a namespace path (Artifactory/MCP or GitHub/MCP) with the bearer JWT. The gateway unwraps the JWT, attaches the user token, and forwards to the right server, which scopes the response to what the user may see. No client reaches any endpoint directly. Monitoring closes the loop with logs in ELK, Loki, or CloudWatch, traces and metrics collected by OpenTelemetry into Tempo and Prometheus, and Grafana dashboards for the aggregate view.

The last part demonstrates the supporting frameworks. The LangGraph agent interprets the question, classifies the operation (read, write, delete, sensitive), plans, fetches evidence through the gateway, then checks policy: read-only operations execute and write to audit logs, while write and sensitive operations wait for human approval. The memory demo queries SQLite and shows thread IDs, run IDs, checkpoints, invoked tools, and node progression. The tracking demo shows six tables, including eight quality checks per run and a 0-to-1 eval score. The PII trimmer blocks secrets above about 90% severity the moment they are typed. The context optimizer demo runs the same Artifactory query twice: 24,000 tokens fall to 2,400 (about 90%), and a Slackbot query falls from 24,000 to about 1,500 tokens; typical savings are 70-78%. He closes with takeaways: build an enterprise framework rather than rushing an agent out, force every call through the gateway, control tools on the MCP servers, monitor and audit everything, keep humans in the loop for high-risk actions, and always run the context optimizer to justify agent cost. He then plugs his MCP book, free on Kindle, and ends with "Thank you so much for watching this video", which confirms this was a recorded playback. The segment ran during the official 12:40pm-2:05pm networking break and appears nowhere on the published agenda.

## Speaker details
**Harisha P C** - Senior Staff Software Engineer, Intuit Credit Karma (identified from session). He builds and owns AI analytics infrastructure and services at Intuit Credit Karma, per his self-introduction. He is also an independent AI researcher, author, and Lead Generative AI Engineer based in Bengaluru, India, working on agentic AI frameworks, quantum AI, neuro-symbolic systems, and large language models. He is the author of "The Agentic Enterprise with MCP" (2026), which he promoted at the end of this talk as free on Kindle, and the founder of Rish AI Labs; he serves as advisor, reviewer, and program committee member for research organizations and mentors young researchers. Note: the automatic transcript garbles his spoken name as "Sharish Gagar"; the manifest boundary verification matched his closing book plug to Harisha P C on Amazon. The speaker record lists no LinkedIn, Twitter, or website links.

## Full timestamped transcript
```
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
```
