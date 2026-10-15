// Figure library entries. Each figure is redrawn from the cited session
// records; numbers and quotes stay verbatim from those records.
export const figureIntro = 'Every figure below is redrawn from the session records of the October 13–14 main-stage livestreams. Numbers, names, and quotes are verbatim from the cited talks, including their hedges. Where a record gives no numbers, the figure carries the claim as text instead of invented bars.';

export const figureGroups = [
  {
    heading: 'Concept diagrams',
    figures: [
      {
        file: 'lethal-trifecta.svg',
        title: 'The lethal trifecta',
        alt: 'Venn diagram of untrusted content exposure, private-data access, and external communication. All three together require human sign-off.',
        blurb: 'Three attack surfaces that are manageable in pairs and lethal together, with day two’s rule of two.',
        refs: [[1, '023'], [2, '010']],
      },
      {
        file: 'per-tool-call-token-exchange.svg',
        title: 'Authorize per tool call, not per agent',
        alt: 'Sequence diagram: a sandboxed agent requests a per-tool-call ephemeral token from a token exchange and calls the tool; audit logs stay outside the agent’s control.',
        blurb: 'Ephemeral, task-scoped tokens that expire within minutes, replacing the stored long-lived OAuth token.',
        refs: [[1, '020'], [1, '023'], [2, '010']],
      },
      {
        file: 'gpu-timing-side-channel.svg',
        title: 'What a GPU co-tenant can learn from timing alone',
        alt: 'A GPU split into two MIG partitions, a victim LLM tenant and an attacker tenant, with timing leaks through the shared memory barrier and NVLink.',
        blurb: 'MIG and NVLink side channels that identified model architecture and decode speed without reading memory.',
        refs: [[1, '025']],
      },
      {
        file: 'hedge-fund-as-a-function.svg',
        title: 'A hedge fund as a function',
        alt: 'Function diagram: external and internal context flow in; one tuple of selection, size, and timing flows out; each decomposed step runs on code, statistics, LLMs, or people.',
        blurb: 'The whole firm compressed into one tuple, with every step run by the best of four runner types.',
        refs: [[1, '043']],
      },
      {
        file: 'deterministic-outside-adaptive-inside.svg',
        title: 'Deterministic outside, adaptive inside',
        alt: 'A deterministic workflow DAG with one node expanded to show an adaptive agent loop inside it.',
        blurb: 'A fixed policy DAG shell with agent loops confined inside nodes, from two talks that converged on the same architecture.',
        refs: [[2, '005'], [1, '029']],
      },
      {
        file: 'five-layer-agent-foundation.svg',
        title: 'The five-layer agent foundation',
        alt: 'A five-layer stack: connectors, skills, identity and permissions, approval, and evals.',
        blurb: 'Anthropic’s stack for shipping agents in regulated firms, walked through on a trade-break agent.',
        refs: [[1, '006']],
      },
      {
        file: 'build-the-loop-not-the-feature.svg',
        title: 'Build the loop, not the feature',
        alt: 'Two panels: a linear feature pipeline that ends, and an always-on agent loop cycling through trigger, sandbox, sweep, fix, memory, and teardown.',
        blurb: 'The AI engineer’s job as an always-on loop that writes and maintains the feature.',
        refs: [[1, '013']],
      },
      {
        file: 'two-readers-of-the-corpus.svg',
        title: 'Two readers of the corpus',
        alt: 'A split comparison: humans read about 300 words per minute; agents read about 30,000.',
        blurb: 'Humans and agents need opposite things from search: precision against volume.',
        refs: [[1, '003']],
      },
      {
        file: 'pets-cattle-microbes.svg',
        title: 'Pets, cattle, microbes',
        alt: 'Three panels showing sandbox eras: pets, cattle, and an ocean of microbes.',
        blurb: 'Sandbox infrastructure eras, ending in swarms measured at 10,000 sandboxes per second.',
        refs: [[1, '031']],
      },
      {
        file: 'autonomy-hill-climb.svg',
        title: 'Autonomy is hill-climbed, not granted',
        alt: 'A four-step staircase from shadow mode to exceptions only, climbing an axis of measured eval quality.',
        blurb: 'A four-stage autonomy staircase gated on measured eval quality, with the guardrails that keep it auditable.',
        refs: [[2, '024'], [2, '005']],
      },
      {
        file: 'company-world-model.svg',
        title: 'Your company has no model of itself',
        alt: 'A circular loop of update, age, observe, grade, and correct, fed by top-down decks and bottom-up exhaust, with a fact half-life decay inset.',
        blurb: 'The company rebuilt as a state estimator, because every fact has a half-life.',
        refs: [[2, '037']],
      },
      {
        file: 'compute-becomes-a-market.svg',
        title: 'Compute becomes a market',
        alt: 'A supply chain from chips through power and credit to contracts, with credit marked as the binding constraint.',
        blurb: 'GPU economics rebuilt as a credit and market-design problem, from chips to contango futures.',
        refs: [[2, '016'], [2, '018'], [2, '020']],
      },
    ],
  },
  {
    heading: 'Data charts',
    figures: [
      {
        file: 'code-abundant-confidence-scarce.svg',
        title: 'Code is abundant, confidence is scarce',
        alt: 'Bar chart: lines of code up 2,450 percent, commits up 240 percent, releases up 30 percent.',
        blurb: 'Agent-written code exploded while releases barely moved; the gap is the review problem.',
        refs: [[2, '004']],
      },
      {
        file: 'compounding-error-curve.svg',
        title: 'Per-step accuracy compounds down',
        alt: 'Line chart: 95 percent per-step accuracy decaying to about 36 percent by step 20.',
        blurb: 'Why long agent chains fail: 95 percent per step is about 36 percent by step 20.',
        refs: [[2, '004']],
      },
      {
        file: 'where-the-money-goes.svg',
        title: 'Where the money goes',
        alt: 'Two panels: AI is 2.5 percent of a merged pull request’s cost; self-hosted tokens at 30 cents per million.',
        blurb: 'Salary, not tokens, is the cost of a merged pull request; and what self-hosting did to the token bill.',
        refs: [[2, '026'], [1, '036']],
      },
      {
        file: 'gpu-level-of-operator.svg',
        title: 'A GPU falls to the level of the operator',
        alt: 'Two bars: about 200 versus about 300 tokens per second at P90 from the same B200.',
        blurb: 'Two identical B200 stacks, one operator gap: about 50 percent more output from the same chip.',
        refs: [[2, '014']],
      },
      {
        file: 'small-model-wins.svg',
        title: 'Right-sizing beats intuition',
        alt: 'Three panels: 2.50 versus 11 dollars per task; 795 dollars actual against 10,000 projected; and a 35-billion-parameter specialist beating a frontier model.',
        blurb: 'Right-sized specialists and replayed work history beat intuition on cost, three talks in a row.',
        refs: [[1, '033'], [1, '028'], [2, '002']],
      },
      {
        file: 'diffusion-gap.svg',
        title: 'The diffusion gap',
        alt: 'An adoption ladder funnel from 90 percent LLM rollout down to 5 percent non-engineering agents, beside capability and EBIT statistics.',
        blurb: 'Capability doubling every four months against an adoption ladder that falls off at agents.',
        refs: [[1, '042'], [1, '006'], [1, '038']],
      },
      {
        file: 'adoption-funnel.svg',
        title: 'From 6 billion users to 5,000 frontier users',
        alt: 'A four-band funnel from 6 billion LLM users to about 5,000 frontier users, sized by log scale.',
        blurb: 'The usage pyramid behind the frontier: touched, casual, professional, frontier.',
        refs: [[1, '013']],
      },
    ],
  },
];
