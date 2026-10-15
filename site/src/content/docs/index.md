---
title: What to take from both days. What to try next.
description: "An engineering field guide to AI Engineer NYC 2026: compare
  approaches across both days, understand their limits, and choose experiments
  for your workload."
template: splash
hero:
  title: What to take from both days. What to try next.
  tagline: An engineering field guide to AI Engineer NYC 2026, October 13–14.
    Compare approaches across both days, understand their limits, and choose an
    experiment for your workload.
  actions:
    - text: Find your field guide
      link: "#find-a-lesson-for-what-you-are-building"
      icon: right-arrow
    - text: Browse both days
      link: /sessions-index/
      variant: secondary
---

<p class="digest-kicker">Engineering field guide · October 13–14, 2026 · New York</p>
<p class="digest-navigation"><a href="#practical-takeaways-for-ai-engineers">Jump to practical takeaways ↓</a></p>

<section class="learning-loop" aria-labelledby="learning-loop-heading"><p class="card-label">The lessons, connected · Both days</p><h2 id="learning-loop-heading">From model output to useful work</h2><p class="learning-loop-intro">Define the task. Give the agent context and controlled tools. Verify the work, then use what you learn to improve the next run.</p><figure><svg xmlns="http://www.w3.org/2000/svg" class="loop-svg learning-loop-wide" viewBox="0 0 1100 600" role="group" aria-labelledby="loop-title-wide loop-desc-wide"><title id="loop-title-wide">From model output to useful work</title><desc id="loop-desc-wide">A real task moves through relevant context, an agent with tools, and verification to an accepted, useful result. Permissions, isolation, and policy constrain execution. Failures and corrections improve context, skills, and evaluations for the next run. Measure cost per accepted result, latency, and human review time. Each stage links to a field guide.</desc><defs><pattern id="loop-grid-wide" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#7186ce" stroke-opacity=".12"/></pattern><marker id="loop-arrow-wide" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse"><path d="M1 1L6 4L1 7" fill="none" stroke="#92a5ee" stroke-width="1.5"/></marker><marker id="loop-return-wide" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="#6de2e1" stroke-width="1.5"/></marker></defs><style>.learning-loop-wide text{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.learning-loop-wide a{text-decoration:none}.learning-loop-wide a:hover .node,.learning-loop-wide a:focus .node{stroke:#b9c8ff;stroke-width:3;fill:#202e57}.learning-loop-wide a:focus{outline:none}.learning-loop-wide a:focus-visible{outline:2px solid #b9c8ff;outline-offset:4px}.learning-loop-wide .line{fill:none;stroke:#92a5ee;stroke-width:2;marker-end:url(#loop-arrow-wide)}.learning-loop-wide .return{fill:none;stroke:#6de2e1;stroke-width:2;marker-end:url(#loop-return-wide)}.learning-loop-wide .node{fill:#131e3d;stroke:#5366ad;stroke-width:1.2}.learning-loop-wide .title{fill:#f0f4ff;font-size:18px;font-weight:650}.learning-loop-wide .small{fill:#b8c7eb;font-size:14px}.learning-loop-wide .number{fill:#9cadff;font-size:12px;letter-spacing:2px;font-weight:650}.learning-loop-wide .feedback{fill:#6de2e1}.learning-loop-wide .outcome{fill:#c5f7bf}</style><rect width="1100" height="600" rx="16" fill="#0b1229"/><rect width="1100" height="600" rx="16" fill="url(#loop-grid-wide)"/>
    <text x="32" y="48" class="number">AI ENGINEER NYC 2026 · BOTH DAYS</text><text x="32" y="90" class="title" style="font-size:30px">From model output to useful work</text>
    <a href="/guides/agent-security/" aria-label="Permissions and isolation: read the security guide"><rect x="452" y="140" width="398" height="236" rx="18" fill="#14203b" fill-opacity=".5" stroke="#7186ce" stroke-opacity=".75" stroke-dasharray="5 5"/><text class="small" x="470" y="171">Permissions + isolation</text></a>
    <a href="/guides/workflows-and-trust/" aria-label="Policy checks: read the workflows and trust guide"><text class="small" x="470" y="361">Enforce policy in code</text></a>
    <a href="/guides/evaluation/" aria-label="Real task: read the related field guide"><rect class="node" x="32" y="212" width="180" height="124" rx="12"/><text class="number" x="48" y="240">01</text><text class="title " x="48" y="272">Real task</text><text class="small" x="48" y="299">Define success first</text></a><a href="/guides/company-context/" aria-label="Context: read the related field guide"><rect class="node" x="246" y="212" width="180" height="124" rx="12"/><text class="number" x="262" y="240">02</text><text class="title " x="262" y="272">Context</text><text class="small" x="262" y="299">Relevant · current</text><text class="small" x="262" y="319">Linked to sources</text></a><a href="/guides/agent-systems/" aria-label="Agent + tools: read the related field guide"><rect class="node" x="460" y="212" width="180" height="124" rx="12"/><text class="number" x="476" y="240">03</text><text class="title " x="476" y="272">Agent + tools</text><text class="small" x="476" y="299">State · recovery</text></a><a href="/guides/evaluation/" aria-label="Verify work: read the related field guide"><rect class="node" x="674" y="212" width="180" height="124" rx="12"/><text class="number" x="690" y="240">04</text><text class="title " x="690" y="272">Verify work</text><text class="small" x="690" y="299">Facts · behavior</text><text class="small" x="690" y="319">Quality · sources</text></a><a href="/guides/coding-and-product-value/" aria-label="Useful result: read the related field guide"><rect class="node" x="888" y="212" width="180" height="124" rx="12"/><text class="number" x="904" y="240">05</text><text class="title outcome" x="904" y="272">Useful result</text><text class="small" x="904" y="299">Accepted · usable</text></a>
    <path class="line" d="M212 274h26"/><path class="line" d="M426 274h26"/><path class="line" d="M640 274h26"/><path class="line" d="M854 274h26"/>
    <path class="return" d="M764 336v134h-64"/><text class="small feedback" x="786" y="420">Failures + corrections</text>
    <a href="/guides/agent-systems/" aria-label="Improve context, skills, and evaluations: read the agent systems guide"><rect class="node" x="388" y="418" width="306" height="106" rx="12"/><text class="number feedback" x="408" y="446">LEARN FROM THE RUN</text><text class="title" x="408" y="475">Improve the next run</text><text class="small" x="408" y="500">Context · skills · evaluations</text></a>
    <path class="return" d="M388 470h-52V342"/>
    <a href="/guides/compute-economics/" aria-label="Cost per accepted result: read the compute economics guide"><rect x="32" y="548" width="1036" height="32" rx="6" fill="#172940" stroke="#426a7e"/><text class="small" x="50" y="569">MEASURE THE OUTCOME</text><text class="small" x="302" y="569">Cost per accepted result · latency · human review time</text></a></svg><svg xmlns="http://www.w3.org/2000/svg" class="loop-svg learning-loop-mobile" viewBox="0 0 390 1160" role="group" aria-labelledby="loop-title-mobile loop-desc-mobile"><title id="loop-title-mobile">From model output to useful work</title><desc id="loop-desc-mobile">A real task moves through relevant context, an agent with tools, and verification to an accepted, useful result. Permissions, isolation, and policy constrain execution. Failures and corrections improve context, skills, and evaluations for the next run. Measure cost per accepted result, latency, and human review time. Each stage links to a field guide.</desc><defs><pattern id="loop-grid-mobile" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#7186ce" stroke-opacity=".12"/></pattern><marker id="loop-arrow-mobile" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse"><path d="M1 1L6 4L1 7" fill="none" stroke="#92a5ee" stroke-width="1.5"/></marker><marker id="loop-return-mobile" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="#6de2e1" stroke-width="1.5"/></marker></defs><style>.learning-loop-mobile text{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.learning-loop-mobile a{text-decoration:none}.learning-loop-mobile a:hover .node,.learning-loop-mobile a:focus .node{stroke:#b9c8ff;stroke-width:3;fill:#202e57}.learning-loop-mobile a:focus{outline:none}.learning-loop-mobile a:focus-visible{outline:2px solid #b9c8ff;outline-offset:4px}.learning-loop-mobile .line{fill:none;stroke:#92a5ee;stroke-width:2;marker-end:url(#loop-arrow-mobile)}.learning-loop-mobile .return{fill:none;stroke:#6de2e1;stroke-width:2;marker-end:url(#loop-return-mobile)}.learning-loop-mobile .node{fill:#131e3d;stroke:#5366ad;stroke-width:1.2}.learning-loop-mobile .title{fill:#f0f4ff;font-size:18px;font-weight:650}.learning-loop-mobile .small{fill:#b8c7eb;font-size:14px}.learning-loop-mobile .number{fill:#9cadff;font-size:12px;letter-spacing:2px;font-weight:650}.learning-loop-mobile .feedback{fill:#6de2e1}.learning-loop-mobile .outcome{fill:#c5f7bf}</style><rect width="390" height="1160" rx="16" fill="#0b1229"/><rect width="390" height="1160" rx="16" fill="url(#loop-grid-mobile)"/>
    <text x="24" y="38" class="number">FROM MODEL OUTPUT TO USEFUL WORK</text>
    <a href="/guides/evaluation/" aria-label="Real task: read the related field guide"><rect class="node" x="24" y="72" width="258" height="124" rx="12"/><text class="number" x="40" y="100">01</text><text class="title " x="40" y="132">Real task</text><text class="small" x="40" y="159">Define success first</text></a><a href="/guides/company-context/" aria-label="Context: read the related field guide"><rect class="node" x="24" y="232" width="258" height="124" rx="12"/><text class="number" x="40" y="260">02</text><text class="title " x="40" y="292">Context</text><text class="small" x="40" y="319">Relevant · current</text><text class="small" x="40" y="339">Linked to sources</text></a><a href="/guides/agent-systems/" aria-label="Agent + tools: read the related field guide"><rect class="node" x="24" y="392" width="258" height="124" rx="12"/><text class="number" x="40" y="420">03</text><text class="title " x="40" y="452">Agent + tools</text><text class="small" x="40" y="479">State · recovery</text></a><a href="/guides/evaluation/" aria-label="Verify work: read the related field guide"><rect class="node" x="24" y="552" width="258" height="124" rx="12"/><text class="number" x="40" y="580">04</text><text class="title " x="40" y="612">Verify work</text><text class="small" x="40" y="639">Facts · behavior</text><text class="small" x="40" y="659">Quality · sources</text></a><a href="/guides/coding-and-product-value/" aria-label="Useful result: read the related field guide"><rect class="node" x="24" y="712" width="258" height="124" rx="12"/><text class="number" x="40" y="740">05</text><text class="title outcome" x="40" y="772">Useful result</text><text class="small" x="40" y="799">Accepted · usable</text></a>
    <path class="line" d="M153 196v30"/><path class="line" d="M153 356v30"/><path class="line" d="M153 516v30"/><path class="line" d="M153 676v30"/>
    <path d="M14 380h278v294H14" fill="none" stroke="#7186ce" stroke-dasharray="5 5" stroke-opacity=".7"/>
    <a href="/guides/agent-security/" aria-label="Permissions and isolation: read the security guide"><text class="small" x="24" y="366">Permissions + isolation</text></a>
    <a href="/guides/workflows-and-trust/" aria-label="Policy checks: read the workflows and trust guide"><text class="small" x="24" y="702">Policy in code</text></a>
    <path class="return" d="M282 614h48V958h-42"/>
    <text class="small feedback" x="310" y="835" transform="rotate(-90 310 835)">Failures + corrections</text>
    <a href="/guides/agent-systems/" aria-label="Improve context, skills, and evaluations: read the agent systems guide"><rect class="node" x="24" y="904" width="258" height="106" rx="12"/><text class="number feedback" x="40" y="932">LEARN FROM THE RUN</text><text class="title" x="40" y="961">Improve the next run</text><text class="small" x="40" y="986">Context · skills · evaluations</text></a>
    <path class="return" d="M282 958h86V294h-80"/>
    <a href="/guides/compute-economics/" aria-label="Cost per accepted result: read the compute economics guide"><rect x="24" y="1046" width="342" height="88" rx="10" fill="#172940" stroke="#426a7e"/><text class="number feedback" x="40" y="1071">MEASURE THE OUTCOME</text><text class="small" x="40" y="1096">Cost per accepted result</text><text class="small" x="40" y="1117">Latency + human review time</text></a></svg><figcaption>Our synthesis of both days. Follow a stage to read the evidence and try an experiment. The arrows describe an engineering process, not measured correlations.</figcaption></figure><p class="learning-loop-links"><a href="/topics/">Explore the supporting topics →</a><a href="/learning-loop.svg" download="aie-nyc-2026-learning-loop.svg">Download the diagram (SVG) ↓</a></p></section>

<div class="day-overviews" aria-label="Explore the two livestream days"><article class="day-overview"><p class="card-label">Day 1 · Oct 13</p><p>Agent systems, evaluation, and the foundations for putting AI to work.</p><p class="day-count">24 session summaries</p><p><a href="/day1/">Read the digest →</a> <a href="/sessions-index/?day=1">Browse sessions →</a></p></article>
<article class="day-overview"><p class="card-label">Day 2 · Oct 14</p><p>Trust, verification, compute economics, and what makes agent work valuable.</p><p class="day-count">24 session summaries</p><p><a href="/day2/">Read the digest →</a> <a href="/sessions-index/?day=2">Browse sessions →</a></p></article></div>

## Find a lesson for what you are building

Each guide compares approaches from both days, explains where the evidence stops, and suggests an experiment you can measure.

<div class="reading-grid">
<article class="reading-card">
<p class="card-label">01 / Evaluation</p>
<h3>Test the work and the way it gets done</h3>
<p>Day 1 builds benchmarks from real tasks. Day 2 adds behavior specs and regression tests for decisions inside long agent runs.</p>
<p class="guide-entry"><a href="/guides/evaluation/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/"><span class="source-day">Day 1</span> Bridgewater <span aria-hidden="true">→</span></a><a href="/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/"><span class="source-day">Day 1</span> Vals AI <span aria-hidden="true">→</span></a><a href="/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/"><span class="source-day">Day 2</span> Basis <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">02 / Agent systems</p>
<h3>Build an agent that can keep improving</h3>
<p>Connect traces, memory, triggers, and recovery. Then use that feedback to improve the model as well as its runtime context.</p>
<p class="guide-entry"><a href="/guides/agent-systems/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/"><span class="source-day">Day 1</span> Arize AI <span aria-hidden="true">→</span></a><a href="/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/"><span class="source-day">Day 2</span> Google DeepMind <span aria-hidden="true">→</span></a><a href="/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/"><span class="source-day">Day 2</span> Prime Intellect <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">03 / Security</p>
<h3>Put controls outside the agent</h3>
<p>Pair task-scoped permissions with deterministic checks. Day 2 adds incident evidence for isolation, network limits, and short-lived identities.</p>
<p class="guide-entry"><a href="/guides/agent-security/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/"><span class="source-day">Day 1</span> Keycard <span aria-hidden="true">→</span></a><a href="/sessions/008-balancing-acceleration-and-safety-for-ai-agents/"><span class="source-day">Day 1</span> Two Sigma <span aria-hidden="true">→</span></a><a href="/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/"><span class="source-day">Day 2</span> Bloomberg <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">04 / Compute economics</p>
<h3>Buy useful output, not just GPU hours</h3>
<p>Start with Revolut’s serving results. Compare operator performance and understand how compute contracts affect access and cost.</p>
<p class="guide-entry"><a href="/guides/compute-economics/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/"><span class="source-day">Day 1</span> Revolut <span aria-hidden="true">→</span></a><a href="/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/"><span class="source-day">Day 2</span> SemiAnalysis <span aria-hidden="true">→</span></a><a href="/day2/016-how-compute-markets-work-supercomputing-as-a-service-credit/"><span class="source-day">Day 2</span> SF Compute <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">05 / Workflows and trust</p>
<h3>Let the model plan. Make code enforce.</h3>
<p>Keep approvals, execution rules, arithmetic, and source checks explicit. Compare typed plans, policy-driven loops, and verified citations.</p>
<p class="guide-entry"><a href="/guides/workflows-and-trust/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/"><span class="source-day">Day 1</span> Perpetual <span aria-hidden="true">→</span></a><a href="/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/"><span class="source-day">Day 2</span> Coinbase <span aria-hidden="true">→</span></a><a href="/day2/033-why-wall-street-still-doesn-t-trust-ai-kepler-verification-d/"><span class="source-day">Day 2</span> Kepler <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">06 / Company context</p>
<h3>Give agents context they can trust</h3>
<p>Day 1 tackles changing schemas and expert knowledge. Day 2 adds dated company facts and a shared gateway for tools, memory, and monitoring.</p>
<p class="guide-entry"><a href="/guides/company-context/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/"><span class="source-day">Day 1</span> Southbridge <span aria-hidden="true">→</span></a><a href="/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/"><span class="source-day">Day 2</span> Citadel Securities <span aria-hidden="true">→</span></a><a href="/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/"><span class="source-day">Day 2</span> Intuit Credit Karma <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">07 / Coding and product value</p>
<h3>Measure what actually reaches the user</h3>
<p>Connect code quality and product polish to delivery cost. Day 2 brings cost per merged pull request and accessibility requirements for coding agents.</p>
<p class="guide-entry"><a href="/guides/coding-and-product-value/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/010-does-code-quality-even-matter-understanding-execution/"><span class="source-day">Day 1</span> Capital One <span aria-hidden="true">→</span></a><a href="/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/"><span class="source-day">Day 1</span> Railway <span aria-hidden="true">→</span></a><a href="/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/"><span class="source-day">Day 2</span> Jellyfish <span aria-hidden="true">→</span></a><a href="/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/"><span class="source-day">Day 2</span> CAIS <span aria-hidden="true">→</span></a></div>
</article>

<article class="reading-card">
<p class="card-label">08 / World models</p>
<h3>Explore agents that act beyond text</h3>
<p>Compare General Intuition’s action-labeled game data with Runway’s video simulation approach. Keep shipped demonstrations separate from future promises.</p>
<p class="guide-entry"><a href="/guides/world-models/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links"><a href="/sessions/046-frontier-models-for-acting-in-space-and-time-pixels-to-actio/"><span class="source-day">Day 1</span> General Intuition <span aria-hidden="true">→</span></a><a href="/day2/049-everything-will-be-simulated-runway-video-models-next-frame/"><span class="source-day">Day 2</span> Runway <span aria-hidden="true">→</span></a></div>
</article></div>

<div class="explorer-teaser"><strong>Follow a topic across both days.</strong><p>Explore 47 distinct talks. See where cost, security, evaluation, and other topics recur. Compare the days and check timestamped source passages.</p><a href="/topics/">Explore topics and their evidence →</a></div>

<div class="official-library-note"><strong>Want to study an individual talk?</strong><p>The <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">official talk library ↗</a> has detailed reading editions, slides, and searchable transcripts for October 13. Our guides connect the engineering lessons across both days. Matching session notes link directly to the official editions.</p></div>

## Practical takeaways for AI engineers

Twelve actions drawn from both days. Follow the paired sessions to compare the evidence and trade-offs.

- **Build a test set from your own work.** Start with real questions, past tasks, and known failures. Keep the examples as regression tests when you change models or agent context.

  [Bridgewater · Day 1](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) · [Blackstone / Norm.ai · Day 2](/day2/031-built-to-scale-future-proofing-your-technology-roadmap-black/)

- **Check the decisions inside long agent runs.** Define expected behavior before changing prompts or tools. Review traces against that spec and replay from the decision that went wrong.

  [Arca · Day 1](/sessions/018-inside-arca-s-long-horizon-agents-that-run-the-business/) · [Basis · Day 2](/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/)

- **Enforce permissions on every tool call.** Use task-scoped access, explicit budgets, and checks outside the model. Bloomberg’s incidents extend Day 1’s authorization lesson to network access and tenant isolation.

  [Keycard · Day 1](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Bloomberg · Day 2](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/)

- **Keep credentials and audit records outside the agent’s control.** Use a proxy for approved access. Protect the rules the agent must follow, and remove credentials when the run ends.

  [Modal · Day 1](/sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes/) · [Google DeepMind · Day 2](/day2/035-coding-an-autonomous-wall-street-co-worker-with-gemini-manag/)

- **Separate model judgment from execution rules.** Use the model where interpretation is needed. Keep approvals, required gates, and failure handling in code. Increase autonomy only when repeated evaluations justify it.

  [Perpetual · Day 1](/sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina/) · [Coinbase · Day 2](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/)

- **Keep source facts separate from generated explanations.** Adapt schemas to the task, but preserve source identifiers. Retrieve and calculate numbers with code. Refuse unsupported facts instead of relying on a final citation check.

  [Southbridge · Day 1](/sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies/) · [Kepler · Day 2](/day2/033-why-wall-street-still-doesn-t-trust-ai-kepler-verification-d/)

- **Compare cost at the quality and latency you need.** Measure useful output under your workload before buying capacity. Serving software and operator choices change what the same hardware delivers.

  [Revolut · Day 1](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) · [SemiAnalysis · Day 2](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/)

- **Test a smaller specialist before using a frontier model everywhere.** Use task evaluations to route work. Day 1 shows why model rankings vary by task; Day 2 shows Ramp post-training a specialist beneath a frontier orchestrator.

  [Vals AI · Day 1](/sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance/) · [Ramp · Day 2](/day2/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app/)

- **Capture expert judgment and track when facts change.** Have experts explain decisions when they write skills. Date the facts those skills use, preserve their history, and treat missing updates as missing evidence.

  [Range · Day 1](/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/) · [Citadel Securities · Day 2](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/)

- **Turn production traces into the next improvement.** Trace the agents building and running your system. Use failures and human feedback to curate evaluations. Test routing or training changes against those examples.

  [Arize AI · Day 1](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) · [Prime Intellect · Day 2](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/)

- **Measure delivered value, not code volume or token spend alone.** Set a baseline for the workflow you want to improve. Track accepted work and total delivery cost. More generated code does not prove more useful output.

  [Sid Pednekar · Day 1](/sessions/038-everyone-has-ai-who-has-the-advantage-three-pillars-design/) · [Jellyfish · Day 2](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/) · [Sonar · Day 2](/day2/004-the-machine-that-changed-the-world-vai-engineering-confidenc/)

- **Give coding agents product requirements before they build.** Specify save behavior, undo, keyboard access, and semantic HTML. Check the result in a running product. CAIS’s reported cost saving is one experiment, not a general benchmark.

  [Railway · Day 1](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/) · [CAIS · Day 2](/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/)

## What the two days add up to

### Capability needs a system around it

Day 1 shows agents taking on whole workflows at Arca. Day 2 asks how those workflows earn trust: Coinbase ties autonomy to measured quality, and Basis checks behavior throughout the run. The shared lesson is to design the process, the checks, and the fallback together.

[Arca · Day 1](/sessions/018-inside-arca-s-long-horizon-agents-that-run-the-business/) · [Coinbase · Day 2](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/) · [Basis · Day 2](/day2/047-process-supervision-for-agents-that-do-long-horizon-work-beh/)

### Safety is an engineering boundary

Keycard and Two Sigma make the case for scoped actions and proportional review. Bloomberg’s Day 2 incidents show why prompts and a sandbox alone are insufficient. Identity, network access, and enforcement must remain outside the model’s discretion.

[Keycard · Day 1](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Two Sigma · Day 1](/sessions/008-balancing-acceleration-and-safety-for-ai-agents/) · [Bloomberg · Day 2](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/)

### The denominator matters more than the token price

Revolut measures serving cost and latency. SemiAnalysis measures acceptable output from the same hardware. Jellyfish measures the full cost of a merged pull request. Together, they shift the question from cheap inputs to useful work delivered at the required quality.

[Revolut · Day 1](/sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting/) · [SemiAnalysis · Day 2](/day2/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig/) · [Jellyfish · Day 2](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/)

### Institutional context is both an asset and a maintenance job

Bridgewater builds a governed document corpus; Range captures planners’ judgment in skills. Citadel Securities adds a missing dimension on Day 2: facts become stale. Useful context needs dates, source evidence, and a way to revise beliefs without rewriting history.

[Bridgewater · Day 1](/sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater/) · [Range · Day 1](/sessions/022-extra-lunch-talk-financial-planners-building-their-own-agents/) · [Citadel Securities · Day 2](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/)

### Improvement moves from one response to the whole loop

Arize turns telemetry into fixes. Ramp tests specialist models beneath its orchestrators. Prime Intellect proposes learning from the organization’s own traces and feedback. These are different stages of the same loop: observe failures, create tests, change the system, and measure again.

[Arize AI · Day 1](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) · [Ramp · Day 2](/day2/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app/) · [Prime Intellect · Day 2](/day2/039-self-improving-organizations-ai-native-enterprises-open-sour/)

## Useful talks beyond the main agenda

Both streams carried recorded talks during scheduled breaks. Start with these connections; the day digests link the rest.

- **Audit a tool call end to end.** Compare Keycard’s permission demo with Intuit Credit Karma’s gateway, monitoring, and context optimizer.

  [Keycard · Day 1](/sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped/) · [Intuit Credit Karma · Day 2](/day2/023-building-an-enterprise-agent-ecosystem-with-mcp-gateway-serv/)

- **Make agent-built products usable.** Pair Railway’s product polish checklist with CAIS’s accessibility requirements for coding agents.

  [Railway · Day 1](/sessions/027-extra-lunch-talk-become-your-company-s-saas-layer-principles/) · [CAIS · Day 2](/day2/041-stop-wasting-tokens-on-products-people-can-t-use-cost-of-acc/)

- **Test the less obvious security boundary.** Day 1’s shared-GPU timing talk expands the threat model. Day 2’s Bloomberg talk brings concrete failures across tools, networks, and tenants.

  [Stealthium · Day 1](/sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your/) · [Bloomberg · Day 2](/day2/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses/)

- **Justify the next agent project.** Compare Day 1’s workflow redesign argument with Day 2’s value case and cost-per-delivery research.

  [Sid Pednekar · Day 1](/sessions/038-everyone-has-ai-who-has-the-advantage-three-pillars-design/) · [Michele Grant · Day 2](/day2/024-the-agent-works-does-anyone-trust-it-michele-grant-value-cas/) · [Jellyfish · Day 2](/day2/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and/)

## Voices from both days

> “It's about how do you build the loop to write that feature.”

Aparna Dhinakaran, Arize AI · Day 1 · [Session summary](/sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature/) · [Watch the moment](https://www.youtube.com/watch?v=akEqiXFo3GM&t=5393s)

> “The loop is really only as trustworthy as the check.”

Evan Kormos, Coinbase · Day 2 · [Session summary](/day2/005-trusting-agents-in-policy-driven-workflows-policies-as-code/) · [Watch the moment](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=3772s)

> “Skynet was, after all, a closed source company.”

Dillon Rolnick, Nous Research · Day 1 · [Session summary](/sessions/049-hermes-gives-you-wings-build-agents-on-open-foundations-you/) · [Watch the moment](https://www.youtube.com/watch?v=akEqiXFo3GM&t=28578s)

> “The reality is every fact has a half-life.”

Joao Wenzel, Citadel Securities · Day 2 · [Session summary](/day2/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo/) · [Watch the moment](https://www.youtube.com/watch?v=jiUC6IUMdvc&t=24480s)

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="https://aie-nyc-2026-talks.swyxio.workers.dev">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>
