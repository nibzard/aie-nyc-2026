# CLAUDE.md

This directory holds event-livestream processing work.

For any task that turns a recorded stream into session documents (download,
transcribe, cut into sessions, summarize, index), follow
`livestream-to-session-docs-playbook.md` from step one. Reuse the pipeline
scripts in `aiengineer-nyc-2026/00-original/scripts/` as templates.

Completed reference runs: `aiengineer-nyc-2026/` (day one, Oct 13, 53
session records) and `aiengineer-nyc-2026-day2/` (day two, Oct 14, 54
session records). Their `README.md` files document the output layout.

## Published site

`site/` holds the Astro Starlight site that publishes the session records
for both days. It is live at <https://aie-nyc-2026.vercel.app> (Vercel
project `aie-nyc-2026`). Site content is generated, not hand-edited:

1. Run `npm run sync` in `site/`. The script `scripts/sync-content.mjs`
   reads both pipeline roots and writes `src/content/docs/` (day one under
   `sessions/`, day two under `day2/`). It exits with an error if a
   relative link does not resolve.
2. Keep the generated files on disk. Vercel builds standalone with
   `astro build` only and has no access to the pipeline output.
3. Deploy with `vercel deploy --prod --yes` from `site/`.

`astro.config.mjs` sets the `site` URL for the sitemap. Update it if the
domain changes. When a new day's records exist, add a matching section to
the sync script and the sidebar in `astro.config.mjs` before you redeploy.
