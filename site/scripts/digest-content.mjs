// Editorial synthesis. References use [day, session ID, label] so each link
// resolves against the source records during sync.
export const topics = [
  {
    label: 'Evaluation', title: 'Test the work and the way it gets done',
    text: 'Day 1 builds benchmarks from real tasks. Day 2 adds behavior specs and regression tests for decisions inside long agent runs.',
    refs: [[1, '003', 'Bridgewater'], [1, '033', 'Vals AI'], [2, '047', 'Basis']],
  },
  {
    label: 'Agent systems', title: 'Build an agent that can keep improving',
    text: 'Connect traces, memory, triggers, and recovery. Then use that feedback to improve the model as well as its runtime context.',
    refs: [[1, '013', 'Arize AI'], [2, '035', 'Google DeepMind'], [2, '039', 'Prime Intellect']],
  },
  {
    label: 'Security', title: 'Put controls outside the agent',
    text: 'Pair task-scoped permissions with deterministic checks. Day 2 adds incident evidence for isolation, network limits, and short-lived identities.',
    refs: [[1, '023', 'Keycard'], [1, '008', 'Two Sigma'], [2, '010', 'Bloomberg']],
  },
  {
    label: 'Compute economics', title: 'Buy useful output, not just GPU hours',
    text: 'Start with Revolut’s serving results. Compare operator performance and understand how compute contracts affect access and cost.',
    refs: [[1, '036', 'Revolut'], [2, '014', 'SemiAnalysis'], [2, '016', 'SF Compute']],
  },
  {
    label: 'Workflows and trust', title: 'Let the model plan. Make code enforce.',
    text: 'Keep approvals, execution rules, arithmetic, and source checks explicit. Compare typed plans, policy-driven loops, and verified citations.',
    refs: [[1, '029', 'Perpetual'], [2, '005', 'Coinbase'], [2, '033', 'Kepler']],
  },
  {
    label: 'Company context', title: 'Give agents context they can trust',
    text: 'Day 1 tackles changing schemas and expert knowledge. Day 2 adds dated company facts and a shared gateway for tools, memory, and monitoring.',
    refs: [[1, '028', 'Southbridge'], [2, '037', 'Citadel Securities'], [2, '023', 'Intuit Credit Karma']],
  },
  {
    label: 'Coding and product value', title: 'Measure what actually reaches the user',
    text: 'Connect code quality and product polish to delivery cost. Day 2 brings cost per merged pull request and accessibility requirements for coding agents.',
    refs: [[1, '010', 'Capital One'], [1, '027', 'Railway'], [2, '026', 'Jellyfish'], [2, '041', 'CAIS']],
  },
  {
    label: 'World models', title: 'Explore agents that act beyond text',
    text: 'Compare General Intuition’s action-labeled game data with Runway’s video simulation approach. Keep shipped demonstrations separate from future promises.',
    refs: [[1, '046', 'General Intuition'], [2, '049', 'Runway']],
  },
];

export const takeaways = [
  {
    title: 'Build a test set from your own work.',
    text: 'Start with real questions, past tasks, and known failures. Keep the examples as regression tests when you change models or agent context.',
    refs: [[1, '003', 'Bridgewater'], [2, '031', 'Blackstone / Norm.ai']],
  },
  {
    title: 'Check the decisions inside long agent runs.',
    text: 'Define expected behavior before changing prompts or tools. Review traces against that spec and replay from the decision that went wrong.',
    refs: [[1, '018', 'Arca'], [2, '047', 'Basis']],
  },
  {
    title: 'Enforce permissions on every tool call.',
    text: 'Use task-scoped access, explicit budgets, and checks outside the model. Bloomberg’s incidents extend Day 1’s authorization lesson to network access and tenant isolation.',
    refs: [[1, '023', 'Keycard'], [2, '010', 'Bloomberg']],
  },
  {
    title: 'Keep credentials and audit records outside the agent’s control.',
    text: 'Use a proxy for approved access. Protect the rules the agent must follow, and remove credentials when the run ends.',
    refs: [[1, '031', 'Modal'], [2, '035', 'Google DeepMind']],
  },
  {
    title: 'Separate model judgment from execution rules.',
    text: 'Use the model where interpretation is needed. Keep approvals, required gates, and failure handling in code. Increase autonomy only when repeated evaluations justify it.',
    refs: [[1, '029', 'Perpetual'], [2, '005', 'Coinbase']],
  },
  {
    title: 'Keep source facts separate from generated explanations.',
    text: 'Adapt schemas to the task, but preserve source identifiers. Retrieve and calculate numbers with code. Refuse unsupported facts instead of relying on a final citation check.',
    refs: [[1, '028', 'Southbridge'], [2, '033', 'Kepler']],
  },
  {
    title: 'Compare cost at the quality and latency you need.',
    text: 'Measure useful output under your workload before buying capacity. Serving software and operator choices change what the same hardware delivers.',
    refs: [[1, '036', 'Revolut'], [2, '014', 'SemiAnalysis']],
  },
  {
    title: 'Test a smaller specialist before using a frontier model everywhere.',
    text: 'Use task evaluations to route work. Day 1 shows why model rankings vary by task; Day 2 shows Ramp post-training a specialist beneath a frontier orchestrator.',
    refs: [[1, '033', 'Vals AI'], [2, '002', 'Ramp']],
  },
  {
    title: 'Capture expert judgment and track when facts change.',
    text: 'Have experts explain decisions when they write skills. Date the facts those skills use, preserve their history, and treat missing updates as missing evidence.',
    refs: [[1, '022', 'Range'], [2, '037', 'Citadel Securities']],
  },
  {
    title: 'Turn production traces into the next improvement.',
    text: 'Trace the agents building and running your system. Use failures and human feedback to curate evaluations. Test routing or training changes against those examples.',
    refs: [[1, '013', 'Arize AI'], [2, '039', 'Prime Intellect']],
  },
  {
    title: 'Measure delivered value, not code volume or token spend alone.',
    text: 'Set a baseline for the workflow you want to improve. Track accepted work and total delivery cost. More generated code does not prove more useful output.',
    refs: [[1, '038', 'Sid Pednekar'], [2, '026', 'Jellyfish'], [2, '004', 'Sonar']],
  },
  {
    title: 'Give coding agents product requirements before they build.',
    text: 'Specify save behavior, undo, keyboard access, and semantic HTML. Check the result in a running product. CAIS’s reported cost saving is one experiment, not a general benchmark.',
    refs: [[1, '027', 'Railway'], [2, '041', 'CAIS']],
  },
];

export const themes = [
  {
    title: 'Capability needs a system around it',
    text: 'Day 1 shows agents taking on whole workflows at Arca. Day 2 asks how those workflows earn trust: Coinbase ties autonomy to measured quality, and Basis checks behavior throughout the run. The shared lesson is to design the process, the checks, and the fallback together.',
    refs: [[1, '018', 'Arca'], [2, '005', 'Coinbase'], [2, '047', 'Basis']],
  },
  {
    title: 'Safety is an engineering boundary',
    text: 'Keycard and Two Sigma make the case for scoped actions and proportional review. Bloomberg’s Day 2 incidents show why prompts and a sandbox alone are insufficient. Identity, network access, and enforcement must remain outside the model’s discretion.',
    refs: [[1, '023', 'Keycard'], [1, '008', 'Two Sigma'], [2, '010', 'Bloomberg']],
  },
  {
    title: 'The denominator matters more than the token price',
    text: 'Revolut measures serving cost and latency. SemiAnalysis measures acceptable output from the same hardware. Jellyfish measures the full cost of a merged pull request. Together, they shift the question from cheap inputs to useful work delivered at the required quality.',
    refs: [[1, '036', 'Revolut'], [2, '014', 'SemiAnalysis'], [2, '026', 'Jellyfish']],
  },
  {
    title: 'Institutional context is both an asset and a maintenance job',
    text: 'Bridgewater builds a governed document corpus; Range captures planners’ judgment in skills. Citadel Securities adds a missing dimension on Day 2: facts become stale. Useful context needs dates, source evidence, and a way to revise beliefs without rewriting history.',
    refs: [[1, '003', 'Bridgewater'], [1, '022', 'Range'], [2, '037', 'Citadel Securities']],
  },
  {
    title: 'Improvement moves from one response to the whole loop',
    text: 'Arize turns telemetry into fixes. Ramp tests specialist models beneath its orchestrators. Prime Intellect proposes learning from the organization’s own traces and feedback. These are different stages of the same loop: observe failures, create tests, change the system, and measure again.',
    refs: [[1, '013', 'Arize AI'], [2, '002', 'Ramp'], [2, '039', 'Prime Intellect']],
  },
];

export const overlooked = [
  { title: 'Audit a tool call end to end', text: 'Compare Keycard’s permission demo with Intuit Credit Karma’s gateway, monitoring, and context optimizer.', refs: [[1, '023', 'Keycard'], [2, '023', 'Intuit Credit Karma']] },
  { title: 'Make agent-built products usable', text: 'Pair Railway’s product polish checklist with CAIS’s accessibility requirements for coding agents.', refs: [[1, '027', 'Railway'], [2, '041', 'CAIS']] },
  { title: 'Test the less obvious security boundary', text: 'Day 1’s shared-GPU timing talk expands the threat model. Day 2’s Bloomberg talk brings concrete failures across tools, networks, and tenants.', refs: [[1, '025', 'Stealthium'], [2, '010', 'Bloomberg']] },
  { title: 'Justify the next agent project', text: 'Compare Day 1’s workflow redesign argument with Day 2’s value case and cost-per-delivery research.', refs: [[1, '038', 'Sid Pednekar'], [2, '024', 'Michele Grant'], [2, '026', 'Jellyfish']] },
];

export const quotes = [
  { day: 1, id: '013', speaker: 'Aparna Dhinakaran, Arize AI', text: "It's about how do you build the loop to write that feature.", seconds: 5393 },
  { day: 2, id: '005', speaker: 'Evan Kormos, Coinbase', text: 'The loop is really only as trustworthy as the check.', seconds: 3772 },
  { day: 1, id: '049', speaker: 'Dillon Rolnick, Nous Research', text: 'Skynet was, after all, a closed source company.', seconds: 28578 },
  { day: 2, id: '037', speaker: 'Joao Wenzel, Citadel Securities', text: 'The reality is every fact has a half-life.', seconds: 24480 },
];
