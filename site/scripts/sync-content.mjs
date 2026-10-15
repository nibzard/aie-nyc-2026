#!/usr/bin/env node
// Regenerate the site from both livestream pipelines. Run: npm run sync.
// Generated content stays on disk so Vercel can build without pipeline output.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync, copyFileSync } from 'node:fs';
import { parse as parseYaml, stringify as toYaml } from 'yaml';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { topics, takeaways, themes, overlooked, quotes } from './digest-content.mjs';
import { comparisons } from './field-guide-content.mjs';
import { officialLibrary, officialReading } from './official-talks.mjs';
import { learningLoop, learningLoopSvg } from './learning-loop.mjs';
import { figureIntro, figureGroups } from './figures-content.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DOCS = path.join(ROOT, 'src/content/docs');
writeFileSync(path.join(ROOT, 'public/learning-loop.svg'), learningLoopSvg);
// The figure library lives at the repo root and is served from public/figures.
mkdirSync(path.join(ROOT, 'public/figures'), { recursive: true });
for (const file of readdirSync(path.resolve(ROOT, '..', 'figures')).filter((file) => file.endsWith('.svg'))) {
  copyFileSync(path.resolve(ROOT, '..', 'figures', file), path.join(ROOT, 'public/figures', file));
}
execFileSync('python3', [path.join(ROOT, 'scripts/package-topics.py')], { stdio: 'inherit' });
const days = [
  { number: 1, date: 'October 13, 2026', shortDate: 'Oct 13', source: 'aiengineer-nyc-2026', directory: 'sessions', video: 'akEqiXFo3GM', focus: 'Agent systems, evaluation, and the foundations for putting AI to work.' },
  { number: 2, date: 'October 14, 2026', shortDate: 'Oct 14', source: 'aiengineer-nyc-2026-day2', directory: 'day2', video: 'jiUC6IUMdvc', focus: 'Trust, verification, compute economics, and what makes agent work valuable.' },
].map((day) => ({ ...day, root: path.resolve(ROOT, '..', day.source), sessions: [] }));
const readingTypes = new Set(['keynote', 'talk', 'panel', 'fireside', 'qna']);

function esc(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return match ? { data: parseYaml(match[1]) ?? {}, body: match[2] } : { data: {}, body: raw };
}
function stripH1(body) { return body.replace(/^\s*#[^\n]*\r?\n/, ''); }
function takeBlockquote(body) {
  const match = body.match(/^\s*((?:>[^\n]*\r?\n)+)\r?\n?/);
  if (!match) return { quote: '', body };
  return { quote: match[1].split(/\r?\n/).map((line) => line.replace(/^>\s?/, '')).join(' ').trim(), body: body.slice(match[0].length) };
}
function truncateSentences(text, max = 320) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
  return (stop > 80 ? cut.slice(0, stop + 1) : `${cut.trimEnd()}…`).trim();
}
function rewriteLinks(md, day) {
  const indexRoutes = {
    'day-summary': `day${day.number}`,
    'sessions-index': `day${day.number}-sessions`,
    speakers: day.number === 1 ? 'speakers' : 'speakers-day2',
    tags: day.number === 1 ? 'tags' : 'tags-day2',
  };
  return md
    .replace(/\]\((?:\.\.\/)+figures\/([^)\s]+\.svg)\)/g, '](/figures/$1)')
    .replace(/\]\(\.\.\/01-sessions\/([0-9]{3}-[^)\s#]+)\.md(#[^)]*)?\)/g, `](/${day.directory}/$1/$2)`)
    .replace(/\]\(\.\.\/02-index\/([^)\s#]+)\.md(#[^)]*)?\)/g, (_, file, hash = '') => `](/${indexRoutes[file] ?? file}/${hash})`)
    .replace(/\[([^\]]+)\]\((?:\.\.\/00-original\/[^)]+|speaker-data\/?|sessions-metadata\.json)\)/g, '$1');
}
function page(frontmatter, body) { return `---\n${toYaml(frontmatter).trimEnd()}\n---\n\n${body.trim()}\n`; }
function write(file, frontmatter, body) { writeFileSync(path.join(DOCS, file), page(frontmatter, body)); }
function videoUrl(day, seconds) { return `https://www.youtube.com/watch?v=${day.video}${seconds === undefined ? '' : `&t=${seconds}s`}`; }
function ytEmbed(url, title) {
  if (!url) return '';
  const parsed = new URL(url);
  const video = parsed.searchParams.get('v');
  if (!video) return '';
  const start = parseInt((parsed.searchParams.get('t') ?? '0').replace(/s$/, ''), 10) || 0;
  return `<div class="yt-embed">\n<iframe src="https://www.youtube-nocookie.com/embed/${esc(video)}?start=${start}&rel=0" title="${esc(title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>`;
}

// Read both days first. Each session keeps its original route and a day key.
for (const day of days) {
  const source = path.join(day.root, '01-sessions');
  const output = path.join(DOCS, day.directory);
  rmSync(output, { recursive: true, force: true });
  mkdirSync(output, { recursive: true });
  for (const file of readdirSync(source).filter((file) => /^\d{3}-.*\.md$/.test(file)).sort()) {
    const { data, body: raw } = splitFrontmatter(readFileSync(path.join(source, file), 'utf8'));
    const { quote, body } = takeBlockquote(stripH1(raw));
    const id = String(data.session_id).padStart(3, '0');
    // The Day 2 source calls its welcome a keynote and catalogs the Intuit
    // recording twice. Keep all records, but list that talk once for readers.
    const isReading = readingTypes.has(data.session_type) && !(day.number === 2 && ['001', '022'].includes(id));
    const description = truncateSentences(quote || `${data.title} — Day ${day.number} of AI Engineer NYC 2026.`);
    day.sessions.push({ ...data, session_id: id, file, quote, body, description, isReading, official: officialReading(day.number, id), href: `/${day.directory}/${file.replace(/\.md$/, '')}/` });
  }
  const raw = splitFrontmatter(readFileSync(path.join(day.root, '02-index/day-summary.md'), 'utf8')).body;
  day.sections = new Map([...raw.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map((match) => [match[1], match[2].trim()]));
}
function getSession(dayNumber, id) {
  const day = days.find((day) => day.number === dayNumber);
  const session = day?.sessions.find((session) => session.session_id === id);
  if (!session) throw new Error(`Missing session: Day ${dayNumber}, ${id}`);
  return { day, session };
}
// Talk boundaries and metadata also affect the analysis, even when transcript text is unchanged.
const topicData = JSON.parse(readFileSync(path.join(ROOT, 'src/data/topics.json'), 'utf8'));
const seconds = (value) => String(value).split(':').reduce((sum, part) => sum * 60 + Number(part), 0);
for (const talk of topicData.sessions) {
  const { session } = getSession(talk.day, talk.id);
  if (session.title !== talk.title || JSON.stringify(session.speakers) !== JSON.stringify(talk.speakers)
    || seconds(session.video_start) !== talk.start || seconds(session.video_end) !== talk.end || session.href !== talk.url) {
    throw new Error(`Topic analysis metadata is stale for ${talk.key}. Rerun analysis/conference-topics/analyze.py.`);
  }
}
function sessionLink(dayNumber, id) { return getSession(dayNumber, id).session.href; }
function sourceLinks(refs) { return refs.map(([day, id, label]) => `[${label} · Day ${day}](${sessionLink(day, id)})`).join(' · '); }
function section(day, title) {
  const body = day.sections.get(title);
  if (!body) throw new Error(`Missing Day ${day.number} section: ${title}`);
  return rewriteLinks(body, day).replace(/\[(\d{3})\]/g, (match, id) => {
    const session = day.sessions.find((session) => session.session_id === id);
    return session ? `[${session.title}]` : match;
  });
}
function footer() {
  return `<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">All session summaries →</a> · <a href="/day1/">Day 1 digest</a> · <a href="/day2/">Day 2 digest</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a> · <a href="${officialLibrary}">Official talk library ↗</a></p><p>Unofficial notes from the October 13–14 main-stage livestreams. Figures and results are reported by speakers. Check the linked sessions for evidence, scope, and recording limits.</p></div>`;
}

for (const day of days) {
  for (const session of day.sessions) {
    const chips = [session.speakers?.join(', '), session.start_wall && session.end_wall ? `${session.start_wall}–${session.end_wall}` : '', session.session_type?.replace(/-/g, ' ')].filter(Boolean).map(esc);
    const watch = session.video_url ? `<a href="${esc(session.video_url)}" rel="noopener">Watch on YouTube from ${esc(session.video_start ?? 'start')}</a>` : '';
    const media = `## Watch this session\n\n${ytEmbed(session.video_url, session.title)}\n\n<p class="session-meta">${[...chips, watch].filter(Boolean).join(' &middot; ')}</p>`;
    const notes = rewriteLinks(session.body, day);
    const boundary = notes.search(/^## (?!TL;DR|Key lessons)/m);
    const content = boundary >= 0 ? `${notes.slice(0, boundary)}${media}\n\n${notes.slice(boundary)}` : `${notes}\n\n${media}`;
    const duplicate = day.number === 2 && session.session_id === '022'
      ? `This is an alternate catalog record of the same Intuit Credit Karma recording. [Read the main session summary](${sessionLink(2, '023')}).\n\n` : '';
    const context = `<p class="session-context"><span class="day-badge">Day ${day.number} · ${day.shortDate}</span> <a href="/day${day.number}/">Day ${day.number} digest</a> · <a href="/sessions-index/?day=${day.number}">More from this day</a></p>`;
    const reading = session.official ? `<p class="official-reading"><a href="${esc(session.official)}">Read the official edition ↗</a><span> A detailed reading edition with a searchable transcript.</span></p>\n\n` : '';
    write(`${day.directory}/${session.file}`, {
      title: session.title, description: `Day ${day.number} · ${day.shortDate}. ${session.description}`,
      sidebar: { order: Number(session.session_id), hidden: !session.isReading }, pagefind: session.isReading, prev: false, next: false,
    }, `${context}\n\n${duplicate}${session.quote ? `${session.quote}\n\n` : ''}${reading}${content}`);
  }
  console.log(`Day ${day.number}: ${day.sessions.length} records, ${day.sessions.filter((session) => session.isReading).length} session summaries`);
}

// Shared learning sections must keep evidence from both recording days.
for (const item of [...topics, ...takeaways, ...themes, ...overlooked]) {
  if (!days.every((day) => item.refs.some(([number]) => number === day.number))) {
    throw new Error(`Missing a day in shared lesson: ${item.title}`);
  }
}

// Guides add comparisons and proposed experiments to the source summaries.
const guideDirectory = path.join(DOCS, 'guides');
mkdirSync(guideDirectory, { recursive: true });
for (const [index, topic] of topics.entries()) {
  const guide = comparisons[topic.label];
  if (!guide) throw new Error(`Missing comparison: ${topic.label}`);
  const readings = topic.refs.map(([number, id, label]) => {
    const { day, session } = getSession(number, id);
    const official = session.official ? ` · [Official reading edition](${session.official})` : '';
    return `- **${label} · Day ${number}.** [Our session notes](${session.href})${official} · [Source video](${session.video_url || videoUrl(day)})`;
  }).join('\n');
  write(`guides/${guide.slug}.md`, {
    title: topic.title,
    description: `${guide.question} Compare sessions from both days of AI Engineer NYC 2026, check the limits, and try a small experiment.`,
    sidebar: { label: topic.label, order: index }, prev: false, next: false,
  }, `<p class="digest-kicker">Engineering field guide · ${esc(topic.label)} · Both days</p>

**${guide.question}**

${topic.text}

[All topic guides](/#find-a-lesson-for-what-you-are-building) · [Practical takeaways](/#practical-takeaways-for-ai-engineers)

## Where the approaches meet

${guide.shared}

## How the approaches differ

| Session | Approach |
| --- | --- |
${guide.differences.map(([label, difference]) => `| ${label} | ${difference} |`).join('\n')}

${sourceLinks(topic.refs)}

## Where the evidence stops

${guide.limit}

## Try this on your workload

${guide.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

### Measure the result

${guide.measure}

## Read the source sessions

${readings}

The comparison and experiment are our editorial synthesis. They are not a reported benchmark or the speakers’ prescribed procedure.

${footer()}`);
}
const topicCards = topics.map((topic, i) => {
  const guide = comparisons[topic.label];
  return `
<article class="reading-card">
<p class="card-label">${String(i + 1).padStart(2, '0')} / ${esc(topic.label)}</p>
<h3>${esc(topic.title)}</h3>
<p>${esc(topic.text)}</p>
<p class="guide-entry"><a href="/guides/${guide.slug}/">Compare approaches and try an experiment <span aria-hidden="true">→</span></a></p>
<div class="card-links">${topic.refs.map(([day, id, label]) => `<a href="${sessionLink(day, id)}"><span class="source-day">Day ${day}</span> ${esc(label)} <span aria-hidden="true">→</span></a>`).join('')}</div>
</article>`;
}).join('\n');
const dayCards = days.map((day) => `<article class="day-overview"><p class="card-label">Day ${day.number} · ${day.shortDate}</p><p>${esc(day.focus)}</p><p class="day-count">${day.sessions.filter((session) => session.isReading).length} session summaries</p><p><a href="/day${day.number}/">Read the digest →</a> <a href="/sessions-index/?day=${day.number}">Browse sessions →</a></p></article>`).join('\n');
const practical = takeaways.map((item) => `- **${item.title}** ${item.text}\n\n  ${sourceLinks(item.refs)}`).join('\n\n');
const combinedThemes = themes.map((item) => `### ${item.title}\n\n${item.text}\n\n${sourceLinks(item.refs)}`).join('\n\n');
const missed = overlooked.map((item) => `- **${item.title}.** ${item.text}\n\n  ${sourceLinks(item.refs)}`).join('\n\n');
const quoteBlocks = quotes.map((quote) => {
  const { day, session } = getSession(quote.day, quote.id);
  // These are source quotations, not generated paraphrases.
  if (!session.body.includes(quote.text)) throw new Error(`Quote not found in Day ${quote.day} session ${quote.id}: ${quote.text}`);
  return `> “${quote.text}”\n\n${quote.speaker} · Day ${quote.day} · [Session summary](${session.href}) · [Watch the moment](${videoUrl(day, quote.seconds)})`;
}).join('\n\n');
write('index.md', {
  title: 'What to take from both days. What to try next.',
  description: 'An engineering field guide to AI Engineer NYC 2026: compare approaches across both days, understand their limits, and choose experiments for your workload.',
  template: 'splash',
  hero: {
    title: 'What to take from both days. What to try next.',
    tagline: 'An engineering field guide to AI Engineer NYC 2026, October 13–14. Compare approaches across both days, understand their limits, and choose an experiment for your workload.',
    actions: [
      { text: 'Find your field guide', link: '#find-a-lesson-for-what-you-are-building', icon: 'right-arrow' },
      { text: 'Browse both days', link: '/sessions-index/', variant: 'secondary' },
    ],
  },
}, `<p class="digest-kicker">Engineering field guide · October 13–14, 2026 · New York</p>
<p class="digest-navigation"><a href="#practical-takeaways-for-ai-engineers">Jump to practical takeaways ↓</a></p>

${learningLoop}

<div class="day-overviews" aria-label="Explore the two livestream days">${dayCards}</div>

## Find a lesson for what you are building

Each guide compares approaches from both days, explains where the evidence stops, and suggests an experiment you can measure.

<div class="reading-grid">${topicCards}</div>

<div class="explorer-teaser"><strong>Follow a topic across both days.</strong><p>Explore 47 distinct talks. See where cost, security, evaluation, and other topics recur. Compare the days and check timestamped source passages.</p><a href="/topics/">Explore topics and their evidence →</a></div>

<div class="official-library-note"><strong>Want to study an individual talk?</strong><p>The <a href="${officialLibrary}">official talk library ↗</a> has detailed reading editions, slides, and searchable transcripts for October 13. Our guides connect the engineering lessons across both days. Matching session notes link directly to the official editions.</p></div>

## Practical takeaways for AI engineers

Twelve actions drawn from both days. Follow the paired sessions to compare the evidence and trade-offs.

${practical}

## What the two days add up to

${combinedThemes}

## Useful talks beyond the main agenda

Both streams carried recorded talks during scheduled breaks. Start with these connections; the day digests link the rest.

${missed}

## Voices from both days

${quoteBlocks}

${footer()}`);

// Each day gets the same reader-first structure; chronology stays in reference notes.
for (const day of days) {
  const sibling = day.number === 1 ? 2 : 1;
  write(`day${day.number}.md`, {
    title: `Day ${day.number} digest · ${day.shortDate}`,
    description: `Day ${day.number} of AI Engineer NYC 2026, ${day.date}. ${day.focus}`,
  }, `<p class="digest-kicker">Day ${day.number} · ${day.date} · Main-stage livestream</p>
${day.focus}

[Lessons from both days](/) · [Day ${sibling} digest](/day${sibling}/) · [Day ${day.number} session summaries](/sessions-index/?day=${day.number})

## Practical takeaways for AI engineers

${section(day, 'Practical takeaways for AI engineers')}

## Five themes of the day

${section(day, 'Five themes of the day')}

## Talks you might have missed

${section(day, 'What only stream viewers saw')}

## The most quotable moments

${section(day, 'The most quotable moments')}

## Watch or browse the day

[Watch the Day ${day.number} recording](${videoUrl(day)}) · [Agenda and stream notes](/stream-notes/#day-${day.number}) · [All Day ${day.number} summaries](/day${day.number}-sessions/)

${footer()}`);
}

function sessionCard(session, day) {
  return `<article class="session-card"><p class="session-day">Day ${day.number} · ${day.shortDate}</p><h2><a href="${session.href}">${esc(session.title)}</a></h2><p class="session-meta">${esc(session.speakers?.join(', '))}</p><p>${esc(session.description)}</p><p class="session-reading-links"><a class="read-session" href="${session.href}">Read our notes <span aria-hidden="true">→</span></a>${session.official ? ` <a href="${session.official}">Official reading edition ↗</a>` : ''}</p></article>`;
}
function archive(day) {
  return `<details>\n<summary>Day ${day.number} stream archive: announcements, breaks, and alternate records</summary>\n\n${day.sessions.filter((session) => !session.isReading).map((session) => `- [${session.title}](${session.href})`).join('\n')}\n\n</details>`;
}
write('topics.mdx', {
  title: 'Explore the topics. Check the evidence.',
  description: 'Explore 24 topic families across 47 talks from both days of AI Engineer NYC 2026. Compare coverage, inspect source passages, and find related concepts.',
  tableOfContents: false, prev: false, next: false,
}, `import TopicExplorer from '../../components/TopicExplorer.astro';

<TopicExplorer />`);

// A compiled component provides accessible day filters and local text search.
rmSync(path.join(DOCS, 'sessions-index.md'), { force: true });
const browsable = days.flatMap((day) => day.sessions.filter((session) => session.isReading).map((session) => ({
  day: day.number, date: day.shortDate, title: session.title, speakers: session.speakers?.join(', ') ?? '', description: session.description, href: session.href, official: session.official,
})));
write('sessions-index.mdx', {
  title: 'Session summaries · Both days', description: 'Find sessions from October 13 and 14. Filter by livestream day or search titles, speakers, and summaries.', tableOfContents: false,
}, `import SessionBrowser from '../../components/SessionBrowser.astro';

Browse our notes from both livestream days. Matching Day 1 sessions also link to their official reading editions.

[Explore topic coverage](/topics/) · [Find a lesson by topic](/#find-a-lesson-for-what-you-are-building) · [Day 1 digest](/day1/) · [Day 2 digest](/day2/)

<SessionBrowser sessions={${JSON.stringify(browsable)}} />

${days.map(archive).join('\n\n')}

The Intuit Credit Karma recording has two source records. It appears once in the session list; both records remain in the archive.`);
for (const day of days) {
  write(`day${day.number}-sessions.md`, { title: `Day ${day.number} session summaries`, description: `Talks, keynotes, and panels from ${day.date}.`, tableOfContents: false }, `
[Browse both days](/sessions-index/) · [Day ${day.number} digest](/day${day.number}/) · [Filter and search this day](/sessions-index/?day=${day.number})

<div class="session-list">${day.sessions.filter((session) => session.isReading).map((session) => sessionCard(session, day)).join('\n')}</div>

${archive(day)}`);
}

// Combined people and topic indexes retain the existing Day 2 URLs.
for (const [file, title] of [['speakers.md', 'Speakers'], ['tags.md', 'Tags']]) {
  const bodies = days.map((day) => {
    const raw = splitFrontmatter(readFileSync(path.join(day.root, '02-index', file), 'utf8')).body;
    return { day, body: rewriteLinks(takeBlockquote(stripH1(raw)).body, day) };
  });
  write(file, { title: `${title} · Both days`, description: `${title} across the October 13–14 livestreams of AI Engineer NYC 2026.` }, `Browse [Day 1](#day-1) or [Day 2](#day-2).\n\n${bodies.map(({ day, body }) => `## Day ${day.number}\n\n${body.replace(/^## /gm, '### ')}`).join('\n\n')}`);
  const second = bodies[1];
  write(file.replace('.md', '-day2.md'), { title: `Day 2 ${title.toLowerCase()}`, description: `${title} from the October 14 livestream.` }, `[${title} from both days](/${file.replace('.md', '')}/) · [Day 2 digest](/day2/)\n\n${second.body}`);
}
// The figure library page serves the redrawn SVGs alongside their source sessions.
const figureCount = figureGroups.reduce((sum, group) => sum + group.figures.length, 0);
const figureSections = figureGroups.map((group) => `## ${group.heading}\n\n${group.figures.map((figure) => {
  const sources = figure.refs.map(([number, id]) => {
    const { session } = getSession(number, id);
    return `[${session.title}](${session.href})`;
  }).join(' · ');
  const svg = readFileSync(path.join(ROOT, 'public/figures', figure.file), 'utf8');
  const description = svg.match(/<desc\b[^>]*>([\s\S]*?)<\/desc>/)?.[1];
  const dimensions = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
  if (!description || !dimensions) throw new Error(`Missing figure description or dimensions: ${figure.file}`);
  return `### ${figure.title}\n\n<figure class="library-figure">
<a class="figure-preview" href="/figures/${figure.file}" aria-label="${esc(`Open full-size figure: ${figure.title}`)}"><img src="/figures/${figure.file}" alt="${esc(figure.alt)}" width="${dimensions[1]}" height="${dimensions[2]}" loading="lazy" decoding="async" /></a>
<figcaption>${esc(figure.blurb)}</figcaption>
<a class="figure-full-size" href="/figures/${figure.file}" aria-label="${esc(`Open full-size figure: ${figure.title}`)}">Open full-size figure →</a>
<details class="figure-description"><summary>Read the figure description</summary><p>${description}</p></details>
</figure>\n\nDrawn from ${sources}.`;
}).join('\n\n')}`).join('\n\n');
write('figures.md', {
  title: 'Figure library',
  description: `${figureCount} redrawn figures from both days of AI Engineer NYC 2026: concept diagrams and data charts, each traced to its source session.`,
  prev: false, next: false,
}, `<p class="digest-kicker">Reference · ${figureCount} figures · Both days</p>

${figureIntro}

[All session summaries](/sessions-index/) · [Day 1 digest](/day1/) · [Day 2 digest](/day2/)

${figureSections}

${footer()}`);

write('stream-notes.md', { title: 'Agenda and stream notes · Both days', description: 'Chronology and recording limits for the October 13 and 14 main-stage livestreams.' }, `
These notes describe the recordings. For engineering lessons, start with the [two-day digest](/).

[Day 1](#day-1) · [Day 2](#day-2)

${days.map((day) => `## Day ${day.number}\n\n${day.date} · [Day ${day.number} digest](/day${day.number}/) · [Source video](${videoUrl(day)})\n\n### The day in one table\n\n${section(day, 'The day in one table')}\n\n### Divergences from the published agenda\n\n${section(day, 'Divergences from the published agenda')}`).join('\n\n')}`);

writeFileSync(path.join(DOCS, 'about.md'), readFileSync(path.join(ROOT, 'scripts/templates/about.md'), 'utf8'));

// Validate generated Markdown routes, including source links and day mappings.
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : /\.mdx?$/.test(entry.name) ? [full] : [];
  });
}
const errors = [];
for (const file of walk(DOCS)) {
  const body = readFileSync(file, 'utf8').replace(/^---[\s\S]*?---/, '');
  for (const match of body.matchAll(/\]\(([^)]+)\)|\bhref="([^"]+)"/g)) {
    const target = match[1] ?? match[2];
    if (/^(?:https?:|mailto:|#)/.test(target)) continue;
    if (!target.startsWith('/')) { errors.push(`${path.relative(DOCS, file)} -> unresolved relative link: ${target}`); continue; }
    const pathname = new URL(target, 'https://aie-nyc-2026.vercel.app').pathname;
    const route = pathname === '/' ? 'index' : decodeURIComponent(pathname).replace(/^\/|\/$/g, '');
    if (existsSync(path.join(ROOT, 'public', route))) continue;
    if (!['.md', '.mdx'].some((extension) => existsSync(path.join(DOCS, route + extension)))) errors.push(`${path.relative(DOCS, file)} -> missing route: ${target}`);
  }
}
if (errors.length) {
  for (const error of errors) console.error(error);
  process.exitCode = 1;
} else console.log('Generated routes and source links: clean');
