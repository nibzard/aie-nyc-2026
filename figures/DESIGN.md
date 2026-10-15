# Figure design spec

Shared spec for every SVG in this library. Read before drawing. The palette
and mark rules come from a validated reference palette; do not invent colors.

## Medium and canvas

- One self-contained SVG file per figure. No scripts, no external references,
  no embedded raster images, no external fonts.
- Default `viewBox="0 0 960 540"`. Tall figures may use `960 720`. Never wider
  than 960.
- Every figure sits on its own card: a rounded rect (`rx="12"`,
  `fill="#fcfcfb"`, `stroke="rgba(11,11,11,0.10)"`, `stroke-width="1"`)
  covering the full canvas. The card is the figure's own light surface, so it
  reads correctly on light and dark pages alike.
- Outer padding: at least 40px between card edge and content.
- Root element: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="..."
  role="img" aria-labelledby="title desc">` with `<title id="title">` and
  `<desc id="desc">` as the first children. IDs must be unique per file.

## Type

- Family everywhere: `font-family="system-ui, -apple-system, 'Segoe UI', sans-serif"`.
- Kicker: 11px, uppercase, letter-spacing 0.08em, fill `#52514e`.
  Examples: `CONCEPT — SECURITY`, `DATA — SURVEY`, `CONCEPT — ARCHITECTURE`.
- Title: 20px, weight 600, fill `#0b0b0b`, sentence case.
- Subtitle: 13px, fill `#52514e`, at most two lines.
- Body and diagram labels: 12-13px, fill `#0b0b0b` or `#52514e`.
- Axis ticks and minor annotations: 11-12px, fill `#52514e`.
- Source line, bottom left of the card: 11px, fill `#52514e`. Format:
  `Source: <Speaker> (<Org>), "<Talk title>", AI Engineer NYC 2026, day <n>.`
- Text stays text (`<text>`/`<tspan>`), never converted to paths. Keep labels
  short enough to fit: assume about 0.6em average character width and leave
  8px padding on both sides of any text inside a shape. Wrap with `<tspan>`
  lines at 1.4em line height instead of shrinking font size below 11px.

## Color

Categorical slots, in fixed assignment order (slot 1 first):

| Slot | Hue | Hex |
|---|---|---|
| 1 | blue | `#2a78d6` |
| 2 | orange | `#eb6834` |
| 3 | aqua | `#1baf7a` |
| 4 | yellow | `#eda100` |
| 5 | magenta | `#e87ba4` |
| 6 | green | `#008300` |
| 7 | violet | `#4a3aa7` |
| 8 | red | `#e34948` |

Ordinal ramp (funnels, tiers, ordered stages), blue, light surface:
`#86b6ef`, `#5598e7`, `#2a78d6`, `#1c5cab`, `#104281` (steps 250-650).

Status colors, reserved for good or bad states only, never as a series
color: good `#0ca30c`, warning `#fab219`, serious `#ec835a`,
critical `#d03b3b`. Pair any status color with a label, never color alone.

Ink and chrome: primary `#0b0b0b`, secondary `#52514e`, muted chrome `#898781`,
gridline `#e1e0d9`, baseline `#c3c2b7`, surface `#fcfcfb`.

Rules:

- Assign categorical hues in the fixed slot order above, never cycled and
  never recolored by rank. One series means one color (slot 1) and no legend.
- Three categorical slots maximum on any figure that shows marks of
  mixed positions (Venn regions, scatter); the first three slots are the
  validated all-pairs set.
- Small text uses secondary ink (`#52514e`) for readable contrast on the light card.
  Muted chrome is reserved for non-text marks.
- Text never wears a series color. Text uses ink tokens only; identity comes
  from a colored mark beside the text. The only exception is text inside a
  colored fill, which picks white or ink by the fill's luminance.
- Large filled areas use the series hue at 8-12% opacity (a wash). Saturated
  fills are for small marks, lines, and accents only.
- Emphasis pattern: to highlight one item, draw the others in a desaturated
  blue-gray (`#9ec5f4` at 45% opacity or `#c3c2b7`) and the highlight in its
  full slot color.

## Marks

- Bars: 24px thick or less, 4px rounded corners on the data end only, square
  at the baseline. Round to exact values from the source record.
- Lines: 2px, round caps and joins. Markers: 8px minimum diameter with a 2px
  ring in the surface color.
- A 2px gap in the surface color separates touching fills (stacked segments,
  adjacent bars, Venn overlaps where labels sit).
- Gridlines and axes: 1px solid hairlines in `#e1e0d9` (grid) or `#c3c2b7`
  (baseline). Never dashed; dashed is reserved for "removed" or "forbidden"
  semantics in concept diagrams, used at most once per figure.
- Label selectively: the endpoint, the extreme, or the item the story is
  about. Never a value on every mark. A legend is present for two or more
  series; a single series carries no legend.
- One axis only. Never two y-scales on one plot. If two measures differ in
  scale, split into panels with their own axes.

## Content fidelity

- Every number, name, and quote must come verbatim from the cited session
  record. Grep the record for each number before drawing it.
- Keep the record's hedges: if the record says "about 37%", the figure says
  "about 37%" or "~37%".
- If a brief lists a number the record does not contain, drop it or replace
  it with what the record says, and note the change in your report.
- Attribute honestly: if a comparison does not isolate a cause, do not draw
  it as if it does; add the record's caveat as a footnote line.

## Diagram conventions (concept figures)

- Boxes: `rx="8"`, fill white (`#ffffff`) or a series wash, 1px stroke in
  `#c3c2b7` or the series color at full saturation for emphasis.
- Arrows: 1.5-2px stroke, `#52514e`, small solid arrowheads. Bidirectional
  flows get arrowheads on both ends.
- The one idea the figure teaches goes in the title; the subtitle carries the
  speaker's framing in their words where possible.
- Diagrams may use at most one dashed connector, meaning "blocked" or
  "removed".

## Validation (run before reporting done)

1. `python3 -c "import xml.etree.ElementTree as ET; ET.parse('<file>')"`
   for each SVG written.
2. Confirm the file contains no `href="http` and no `<script` and no
   `<image`.
3. Confirm the root has `viewBox` and `<title>`/`<desc>` children.
4. Re-read the figure against the anti-pattern list: no dual axis, no pie
   for close values, no number on every mark, no clipped labels, no value
   ramp on nominal categories, no status color as a series color.
