# Conference topic analysis

The research uses the timed master transcripts for the two main-stage feeds.
It excludes overlapping catalog entries and standalone announcements.
The public explorer covers 47 distinct talks and 24 overlapping term families.

## Reproduce the research

Use Python 3.14 with the versions in `requirements.txt`:

1. Create a virtual environment with `python3 -m venv /tmp/aie-corpus-analysis-venv`.
2. Install dependencies with `/tmp/aie-corpus-analysis-venv/bin/python3 -m pip install -r analysis/conference-topics/requirements.txt`.
3. Run `/tmp/aie-corpus-analysis-venv/bin/python3 analysis/conference-topics/analyze.py` from the repository root.
4. Run `/tmp/aie-corpus-analysis-venv/bin/python3 analysis/conference-topics/render.py` to rebuild the local research report.
5. Run `npm run sync` from `site/` to validate and package the public data.
6. Run `npm run test:topics` and `npm run build` from `site/`.

The current research environment already exists at the path above.
Vercel builds from the packaged data. It does not need Python or the source corpus.

## Public presentation

The homepage keeps the eight editorial field guides first. `/topics/` adds:

- Talk coverage with day filters, topic search, and source passages.
- A session-by-topic table with passage selection.
- Word-normalized and equal-talk comparisons between days.
- A selected-topic graph with supporting talk counts.
- Eight reviewed excerpts with claim labels, context, and source links.
- Word and phrase counts, matching rules, and data downloads.

Coverage requires a term family to match at least two distinct transcript segments.
Rates include every match. These two measures answer different questions.
Categories overlap and do not establish importance, agreement, or a talk's main subject.

The graph uses nearby matches in disjoint windows of about 150 words.
It requires eight shared windows, four talks, and normalized pointwise mutual
information of at least 0.08. Both concepts must meet the coverage rule in each
supporting talk. A connection does not establish cause or agreement.

General sentiment scoring and latent topic discovery remain research diagnostics.
They do not become public stance scores or definitive topic labels.
The sentiment review is a diagnostic sample, not an accuracy estimate.

Reviewed claims are curated in `site/scripts/package-topics.py`.
The script checks exact excerpt text, boundaries, source hashes, and coverage.
`sync-content.mjs` also checks current session metadata against the research export.
When the corpus changes, rerun the analysis and review these excerpts again.
The Flywire and Coder talks have partial recordings; their limits remain visible.
