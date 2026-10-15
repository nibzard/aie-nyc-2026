AI Engineer NYC transcript analysis — 2026-10-15

Open report.html in a browser. It is a standalone local research preview.
The HTML embeds its interactive data and uses three local PNG figures.
It does not change or publish the live website.

Outputs
- report.html: findings, interactive topic bars, source excerpts, day filters,
  equal-talk rate option, session-by-topic matrix, optional network, and proposal.
- topic-overview.png: lexical counts and talk coverage.
- day-comparison.png: word-normalized term-family rates by day.
- concept-network.png: a static, stricter-threshold association graph.
- methodology.json: scope, normalization, exclusions, source hashes, and caveats.
- concepts.csv, word-frequency.csv, phrases.csv: inspectable measured counts.
- concept-definitions.json: the explicit overlapping concept dictionaries.
- concept-evidence.json, concept-sessions.json: source-linked matches.
- network.json, network-edges.csv: associations and threshold sensitivity.
- latent-topics.json: exploratory models at six, eight, and ten components.
- partial-recording-sensitivity.json: model fit without two incomplete talks.
- coverage-sensitivity.json: alternative presence thresholds.
- cross-day-similarity.csv: latent-vocabulary matches for editorial review.
- sentiment.json: a general-purpose sentiment baseline, not stance toward AI.
- sentiment-audit.csv: the deterministic sample of 36 diagnostic cases.
- sentiment-review.csv: analyst notes on those cases; not a labeled benchmark.
- framing-cues.json: overlapping regex flags for a proposed future review layer.

Reproduce
Use an isolated Python 3.14 environment with requirements.txt installed.
Run these scripts from their location in this repository:

  python3 analysis/conference-topics/analyze.py
  python3 analysis/conference-topics/render.py

Both scripts write only inside analysis/conference-topics/. They read the two
existing transcript masters and session metadata. They do not call a model API.
The manual sentiment-review.csv records analyst interpretation and is retained
separately from the automatic analysis. Check it again if the source changes.

Interpretation
The 47 recordings are 23 Day 1 talks and 24 Day 2 talks. The overlapping Q&A
record is excluded, while its text remains once in the parent keynote. The
Intuit duplicate and welcome are excluded. Both incomplete talks remain in
lexical counts. This is main-stage-feed coverage, not every event room.

Talk presence requires two distinct matching transcript segments. Categories
overlap and are lexical proxies. A mention is not a declaration of importance,
agreement, sentiment target, or the main subject of an entire talk. Network
edges also require both concepts to pass that talk-presence threshold.
