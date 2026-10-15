# Figures

Illustration library for the AI Engineer NYC 2026 session records. Every
figure is a self-contained SVG on its own light card, so it renders the same
on light and dark pages. Shared palette, type, and mark rules are in
[DESIGN.md](DESIGN.md).

The library is published: `site/scripts/sync-content.mjs` copies every SVG
into `site/public/figures/`, the matching session records embed them in a
`## Figures` section, and the site serves a gallery at
`/figures/` (<https://aie-nyc-2026.vercel.app/figures/>).

Rules of the library:

- Every number, name, and quote is verbatim from the cited session record,
  including the record's hedges ("about", "reported", "demonstrated").
- Where a record gives no numbers, the figure carries the claim as text
  instead of invented bars.
- Each figure's source line names the speaker, talk, and day.

## Concept diagrams

| Figure | What it shows | Source session(s) |
|---|---|---|
| [lethal-trifecta.svg](lethal-trifecta.svg) | The three attack surfaces that are lethal together; the rule of two | Day 1 [023](../aiengineer-nyc-2026/01-sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped.md), day 2 [010](../aiengineer-nyc-2026-day2/01-sessions/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses.md) |
| [per-tool-call-token-exchange.svg](per-tool-call-token-exchange.svg) | Per-tool-call ephemeral tokens versus stored long-lived OAuth | Day 1 [020](../aiengineer-nyc-2026/01-sessions/020-intent-based-auth-panel-runtime-authorization-for-agents.md), [023](../aiengineer-nyc-2026/01-sessions/023-extra-lunch-talk-your-agent-is-a-lethal-trifecta-task-scoped.md), day 2 [010](../aiengineer-nyc-2026-day2/01-sessions/010-security-in-the-age-of-ai-recent-attacks-incidents-defenses.md) |
| [gpu-timing-side-channel.svg](gpu-timing-side-channel.svg) | What a GPU co-tenant learns from MIG and NVLink timing alone | Day 1 [025](../aiengineer-nyc-2026/01-sessions/025-extra-lunch-talk-what-a-gpu-co-tenant-can-learn-about-your.md) |
| [hedge-fund-as-a-function.svg](hedge-fund-as-a-function.svg) | The firm as a function returning one tuple; four runner types per step | Day 1 [043](../aiengineer-nyc-2026/01-sessions/043-a-hedge-fund-as-a-function-coatue.md) |
| [deterministic-outside-adaptive-inside.svg](deterministic-outside-adaptive-inside.svg) | Deterministic DAG shell, adaptive agent loops inside nodes | Day 2 [005](../aiengineer-nyc-2026-day2/01-sessions/005-trusting-agents-in-policy-driven-workflows-policies-as-code.md), day 1 [029](../aiengineer-nyc-2026/01-sessions/029-extra-lunch-talk-reliable-and-intelligent-workflows-for-fina.md) |
| [five-layer-agent-foundation.svg](five-layer-agent-foundation.svg) | Anthropic's stack: connectors, skills, identity, approval, evals | Day 1 [006](../aiengineer-nyc-2026/01-sessions/006-anthropic-accelerating-frontier-ai-in-financial-services.md) |
| [build-the-loop-not-the-feature.svg](build-the-loop-not-the-feature.svg) | The always-on agent loop versus the linear feature pipeline | Day 1 [013](../aiengineer-nyc-2026/01-sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature.md) |
| [two-readers-of-the-corpus.svg](two-readers-of-the-corpus.svg) | Humans at 300 words per minute; agents at 30,000 | Day 1 [003](../aiengineer-nyc-2026/01-sessions/003-vault-making-unstructured-data-work-for-investing-bridgewater.md) |
| [pets-cattle-microbes.svg](pets-cattle-microbes.svg) | Sandbox eras: pets, cattle, an ocean of microbes | Day 1 [031](../aiengineer-nyc-2026/01-sessions/031-great-agents-start-with-great-infrastructure-modal-sandboxes.md) |
| [autonomy-hill-climb.svg](autonomy-hill-climb.svg) | Four-stage autonomy staircase gated on measured eval quality | Day 2 [024](../aiengineer-nyc-2026-day2/01-sessions/024-the-agent-works-does-anyone-trust-it-michele-grant-value-cas.md), [005](../aiengineer-nyc-2026-day2/01-sessions/005-trusting-agents-in-policy-driven-workflows-policies-as-code.md) |
| [company-world-model.svg](company-world-model.svg) | The company as a state estimator; facts with half-lives | Day 2 [037](../aiengineer-nyc-2026-day2/01-sessions/037-your-company-has-no-model-of-itself-bootstrapping-a-world-mo.md) |
| [compute-becomes-a-market.svg](compute-becomes-a-market.svg) | Chips to contracts; credit as the binding constraint | Day 2 [016](../aiengineer-nyc-2026-day2/01-sessions/016-how-compute-markets-work-supercomputing-as-a-service-credit.md), [018](../aiengineer-nyc-2026-day2/01-sessions/018-the-dark-pools-of-compute-unlit-otc-compute-markets-jevons-p.md), [020](../aiengineer-nyc-2026-day2/01-sessions/020-ceo-compute-exchange-the-only-neutral-gpu-marketplace-silico.md) |

## Data charts

| Figure | What it shows | Source session(s) |
|---|---|---|
| [code-abundant-confidence-scarce.svg](code-abundant-confidence-scarce.svg) | Agent code up 2,450%; releases up only 30% | Day 2 [004](../aiengineer-nyc-2026-day2/01-sessions/004-the-machine-that-changed-the-world-vai-engineering-confidenc.md) |
| [compounding-error-curve.svg](compounding-error-curve.svg) | 95% per-step accuracy decays to about 36% by step 20 | Day 2 [004](../aiengineer-nyc-2026-day2/01-sessions/004-the-machine-that-changed-the-world-vai-engineering-confidenc.md) |
| [where-the-money-goes.svg](where-the-money-goes.svg) | AI is 2.5% of a merged PR's cost; self-hosted tokens at $0.30 per million | Day 2 [026](../aiengineer-nyc-2026-day2/01-sessions/026-tokens-are-the-cheap-part-ai-spend-developer-throughput-and.md), day 1 [036](../aiengineer-nyc-2026/01-sessions/036-shipping-like-a-startup-regulated-like-a-bank-self-hosting.md) |
| [gpu-level-of-operator.svg](gpu-level-of-operator.svg) | Same B200, two operators: about 200 versus about 300 tokens per second at P90 | Day 2 [014](../aiengineer-nyc-2026-day2/01-sessions/014-not-all-gpu-s-are-deployed-the-same-cost-curves-for-intellig.md) |
| [small-model-wins.svg](small-model-wins.svg) | Right-sizing: $2.50 versus $11 per task; $795 versus $10,000; the 35B specialist | Day 1 [033](../aiengineer-nyc-2026/01-sessions/033-beyond-the-model-card-the-jagged-frontier-of-ai-in-finance.md), [028](../aiengineer-nyc-2026/01-sessions/028-extra-lunch-talk-no-universal-schema-just-in-time-ontologies.md), day 2 [002](../aiengineer-nyc-2026-day2/01-sessions/002-chasing-capabilities-while-waiting-for-the-frontier-ramp-app.md) |
| [diffusion-gap.svg](diffusion-gap.svg) | The adoption ladder (90/60/50/5) against capability and EBIT stats | Day 1 [042](../aiengineer-nyc-2026/01-sessions/042-mc-resumes-sponsor-acknowledgments-conference-reflections.md), [006](../aiengineer-nyc-2026/01-sessions/006-anthropic-accelerating-frontier-ai-in-financial-services.md), [038](../aiengineer-nyc-2026/01-sessions/038-everyone-has-ai-who-has-the-advantage-three-pillars-design.md) |
| [adoption-funnel.svg](adoption-funnel.svg) | From 6 billion LLM users to about 5,000 frontier users | Day 1 [013](../aiengineer-nyc-2026/01-sessions/013-what-does-an-ai-engineer-do-build-the-loop-not-the-feature.md) |

## Using the figures

Embed in markdown, for example:

```markdown
![The lethal trifecta](../figures/lethal-trifecta.svg)
```

To re-render PNG previews for review:

```bash
python3 -m venv /tmp/svgvenv && /tmp/svgvenv/bin/pip install cairosvg
/tmp/svgvenv/bin/python -c "import cairosvg, glob; \
  [cairosvg.svg2png(url=f, write_to='/tmp/' + f.split('/')[-1] + '.png') \
   for f in glob.glob('*.svg')]"
```
