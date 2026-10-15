#!/usr/bin/env node
// Regenerates src/content/docs from the aiengineer-nyc-2026 pipeline output.
// Run from site/: npm run sync
//
// The generated files are committed so the site builds standalone on Vercel.
// Re-run this after the pipeline writes new or changed session records.

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from 'node:fs';
import { parse as parseYaml, stringify as toYaml } from 'yaml';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.resolve(ROOT, '..', 'aiengineer-nyc-2026');
const DOCS = path.resolve(ROOT, 'src', 'content', 'docs');

const VOD_URL = 'https://www.youtube.com/watch?v=akEqiXFo3GM';

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function splitFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { data: parseYaml(m[1]) ?? {}, body: m[2] } : { data: {}, body: raw };
}

// Starlight renders its own title from frontmatter, so drop the body H1.
function stripH1(body) {
  return body.replace(/^\s*#[^\n]*\r?\n/, '');
}

// Lift the leading blockquote out of the body; it becomes the page description.
function takeBlockquote(body) {
  const m = body.match(/^\s*((?:>[^\n]*\r?\n)+)\r?\n?/);
  if (!m) return { quote: '', body };
  const quote = m[1]
    .split(/\r?\n/)
    .map((line) => line.replace(/^>\s?/, ''))
    .join(' ')
    .trim();
  return { quote, body: body.slice(m[0].length) };
}

function truncateSentences(text, max = 320) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('.'));
  return (stop > 80 ? cut.slice(0, stop + 1) : cut).trim();
}

// Rewrite pipeline-relative links to site-absolute URLs.
function rewriteLinks(md) {
  return md
    .replace(/\]\(\.\.\/01-sessions\/([0-9]{3}-[^)\s#]+)\.md\)/g, '](/sessions/$1/)')
    .replace(/\]\(\.\.\/02-index\/([^)\s#]+)\.md\)/g, '](/$1/)')
    .replace(
      /\[([^\]]+)\]\((?:\.\.\/00-original\/[^)]+|speaker-data\/?|sessions-metadata\.json)\)/g,
      '$1',
    );
}

function ytEmbed(url, title) {
  if (!url) return '';
  let v = '';
  let start = 0;
  try {
    const u = new URL(url);
    v = u.searchParams.get('v') ?? '';
    start = parseInt(String(u.searchParams.get('t') ?? '0').replace(/s$/, ''), 10) || 0;
  } catch {
    return '';
  }
  if (!v) return '';
  return [
    '<div class="yt-embed">',
    `<iframe src="https://www.youtube-nocookie.com/embed/${v}?start=${start}&rel=0" title="${esc(title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    '</div>',
  ].join('\n');
}

function page(fm, body) {
  return `---\n${toYaml(fm).trimEnd()}\n---\n\n${body.trim()}\n`;
}

// --- Sessions --------------------------------------------------------------

const sessionsSrc = path.join(SRC, '01-sessions');
const sessionsOut = path.join(DOCS, 'sessions');
rmSync(sessionsOut, { recursive: true, force: true });
mkdirSync(sessionsOut, { recursive: true });

const sessions = [];
const readingTypes = new Set(['keynote', 'talk', 'panel', 'fireside', 'qna']);
let sessionCount = 0;
for (const file of readdirSync(sessionsSrc)
  .filter((f) => /^\d{3}-.*\.md$/.test(f))
  .sort()) {
  const { data, body: raw } = splitFrontmatter(readFileSync(path.join(sessionsSrc, file), 'utf8'));
  const { quote, body: noQuote } = takeBlockquote(stripH1(raw));
  const description = truncateSentences(
    quote || `${data.title} - session ${data.session_id} of the AI Engineer NYC 2026 day-one livestream.`,
  );

  const chips = [];
  if (Array.isArray(data.speakers) && data.speakers.length) chips.push(esc(data.speakers.join(', ')));
  if (data.start_wall && data.end_wall) chips.push(esc(`${data.start_wall}-${data.end_wall}`));
  if (data.session_type) chips.push(esc(String(data.session_type).replace(/-/g, ' ')));

  const watch = data.video_url
    ? ` <a href="${esc(data.video_url)}" rel="noopener">Watch on YouTube from ${esc(data.video_start ?? 'start')}</a>`
    : '';

  const head = [
    ytEmbed(data.video_url, data.title),
    chips.length || watch
      ? `<p class="session-meta">${chips.join(' &middot; ')}${chips.length && watch ? ' &middot; ' : ''}${watch}</p>`
      : '',
  ]
    .filter(Boolean)
    .join('\n\n');

  const isReading = readingTypes.has(data.session_type);
  sessions.push({ ...data, file, description, isReading });
  const order = Number(data.session_id);
  const fm = {
    title: data.title,
    description,
    sidebar: { order: Number.isFinite(order) ? order : sessionCount, hidden: !isReading },
    pagefind: isReading,
    prev: false,
    next: false,
  };
  const notes = rewriteLinks(noQuote);
  const media = `## Watch this session\n\n${head}`;
  const boundary = notes.search(/^## (?!TL;DR|Key lessons)/m);
  const content = boundary >= 0
    ? `${notes.slice(0, boundary)}${media}\n\n${notes.slice(boundary)}`
    : `${notes}\n\n${media}`;
  writeFileSync(path.join(sessionsOut, file), page(fm, `${quote ? `${quote}\n\n` : ''}${content}`));
  sessionCount++;
}
console.log(`sessions: ${sessionCount}`);

// --- Index pages ------------------------------------------------------------

// Keep editorial structure here so sync never restores the agenda-first layout.
const rawSummary = splitFrontmatter(readFileSync(path.join(SRC, '02-index/day-summary.md'), 'utf8')).body;
const summarySections = new Map(
  [...rawSummary.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)]
    .map((match) => [match[1], match[2].trim()]),
);
function section(title) {
  if (!summarySections.has(title)) throw new Error(`Missing digest section: ${title}`);
  const names = {
    '003': 'Bridgewater', '008': 'Two Sigma', '013': 'Arize AI',
    '020': 'Authorization panel', '022': 'Range', '023': 'Keycard',
    '025': 'Stealthium', '027': 'Railway', '029': 'Perpetual',
    '031': 'Modal', '033': 'Vals AI', '036': 'Revolut',
  };
  return rewriteLinks(summarySections.get(title)).replace(/\[(\d{3})\]/g, (match, id) => `[${names[id] || id}]`);
}
function sessionLink(id) {
  const session = sessions.find((s) => s.session_id === id);
  if (!session) throw new Error(`Missing linked session: ${id}`);
  return `/sessions/${session.file.replace(/\.md$/, '')}/`;
}

const routes = [
  ['Evaluation', 'Turn past work into better evaluations', 'Build a small benchmark from real tasks. Use it to compare quality and cost before choosing a model.', 'Bridgewater', '003', 'Vals AI', '033'],
  ['Agent systems', 'Build the loop around your agent', 'Connect traces, evaluations, memory, and recovery. See how teams run agents beyond a single request.', 'Arize AI', '013', 'Arca', '018'],
  ['Security', 'Give each tool call a clear boundary', 'Scope access to the task. Keep credentials, approval rules, and audit logs outside the agent.', 'Keycard', '023', 'Authorization panel', '020'],
  ['Inference costs', 'Measure before you buy more compute', 'Compare serving choices and model routing. Revolut shares its self-hosting costs and tuning results.', 'Revolut', '036', 'Modal', '031'],
  ['Workflows', 'Make execution predictable', 'Separate model judgment from deterministic steps. Learn from typed plans and task decomposition.', 'Perpetual', '029', 'Coatue', '043'],
  ['Domain knowledge', 'Put expert judgment into the system', 'Learn how planners write agent skills and how data pipelines adapt schemas to the task.', 'Range', '022', 'Southbridge', '028'],
];
const cards = routes.map(([label, title, text, first, firstId, second, secondId], i) => `
<article class="reading-card">
  <p class="card-label">${String(i + 1).padStart(2, '0')} / ${label}</p>
  <h3>${title}</h3>
  <p>${text}</p>
  <p class="card-links"><a href="${sessionLink(firstId)}">${first} <span aria-hidden="true">→</span></a><a href="${sessionLink(secondId)}">${second} <span aria-hidden="true">→</span></a></p>
</article>`).join('\n');

const home = `
<p class="digest-kicker">October 13, 2026 · New York · Day one</p>
<p class="digest-navigation"><a href="/sessions-index/">Browse session summaries →</a></p>

## Find a lesson for what you are building

Start with a topic. Each link opens a session summary, key lessons, and a timestamped transcript.

<div class="reading-grid">${cards}</div>

## Practical takeaways for AI engineers

${section('Practical takeaways for AI engineers')}

## Five themes of the day

${section('Five themes of the day')}

## Talks you might have missed

${section('What only stream viewers saw')}

## The most quotable moments

${section('The most quotable moments')}

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/sessions-index/">Browse session summaries →</a> · <a href="/day2/">Day-two digest →</a> · <a href="/stream-notes/">Agenda and stream notes</a> · <a href="/about/">About these notes</a></p><p>Unofficial notes from the day-one main-stage livestream. Figures and results are reported by speakers. Use the linked sessions to check context.</p></div>
`;
writeFileSync(path.join(DOCS, 'index.md'), page({
  title: 'The engineering lessons. Without the eight-hour replay.',
  description: 'AI Engineer NYC 2026, distilled for AI engineers: practical lessons on evaluation, agent systems, security, workflows, and inference costs.',
  template: 'splash',
  hero: {
    title: 'The engineering lessons. Without the eight-hour replay.',
    tagline: 'AI Engineer NYC 2026, distilled for engineers building with AI. Read the takeaways, follow the sessions, and find ideas you can use.',
    actions: [
      { text: 'Find your topic', link: '#find-a-lesson-for-what-you-are-building', icon: 'right-arrow' },
      { text: 'Read practical takeaways', link: '#practical-takeaways-for-ai-engineers', variant: 'secondary' },
    ],
  },
}, home));

writeFileSync(path.join(DOCS, 'stream-notes.md'), page({
  title: 'Agenda and stream notes',
  description: 'A chronological overview and differences between the published agenda and the recorded stream.',
}, `The agenda is a reference for the recording. For engineering lessons, start with the [day-one digest](/).\n\n## The day in one table\n\n${section('The day in one table')}\n\n## Divergences from the published agenda\n\n${section('Divergences from the published agenda')}`));

const talkCards = sessions.filter((s) => s.isReading).map((s) => `
<article class="session-card">
<h2><a href="${sessionLink(s.session_id)}">${esc(s.title)}</a></h2>
<p class="session-meta">${esc(s.speakers?.join(', '))} · ${esc(s.session_type === 'qna' ? 'Questions and answers' : s.session_type)}</p>
<p>${esc(s.description)}</p>
<a class="read-session" href="${sessionLink(s.session_id)}">Read the summary <span aria-hidden="true">→</span></a>
</article>`).join('\n');
const archive = sessions.filter((s) => !s.isReading).map((s) => `- [${s.title}](${sessionLink(s.session_id)})`).join('\n');
writeFileSync(path.join(DOCS, 'sessions-index.md'), page({
  title: 'Session summaries',
  description: 'Browse talks, keynotes, and panels with summaries, key lessons, and links to the recording.',
  tableOfContents: false,
}, `Find a talk worth your time. Each session starts with a summary and key lessons.\n\nLooking for a specific problem? [Browse the topic paths](/#find-a-lesson-for-what-you-are-building).\n\n<div class="session-list">${talkCards}</div>\n\n<details>\n<summary>Stream archive: announcements, breaks, and transitions</summary>\n\n${archive}\n\n</details>`));

for (const [file, title] of [['speakers.md', 'Speakers'], ['tags.md', 'Tags']]) {
  const { body: raw } = splitFrontmatter(readFileSync(path.join(SRC, '02-index', file), 'utf8'));
  const { quote, body } = takeBlockquote(stripH1(raw));
  writeFileSync(path.join(DOCS, file), page({ title, description: truncateSentences(quote || title, 280) }, rewriteLinks(body)));
}
console.log('index pages: digest, summaries, stream notes, speakers, tags');

// --- Day two ----------------------------------------------------------------

const SRC2 = path.resolve(ROOT, '..', 'aiengineer-nyc-2026-day2');
const sessionsOut2 = path.join(DOCS, 'day2');
rmSync(sessionsOut2, { recursive: true, force: true });
mkdirSync(sessionsOut2, { recursive: true });

function rewriteLinksDay2(md) {
  return rewriteLinks(md).replace(/\]\(\/sessions\//g, '](/day2/');
}

const sessions2 = [];
let session2Count = 0;
for (const file of readdirSync(path.join(SRC2, '01-sessions'))
  .filter((f) => /^\d{3}-.*\.md$/.test(f))
  .sort()) {
  const { data, body: raw } = splitFrontmatter(readFileSync(path.join(SRC2, '01-sessions', file), 'utf8'));
  const { quote, body: noQuote } = takeBlockquote(stripH1(raw));
  const description = truncateSentences(
    quote || `${data.title} - session ${data.session_id} of the AI Engineer NYC 2026 day-two livestream.`,
  );
  const isReading = readingTypes.has(data.session_type);
  sessions2.push({ ...data, file, description, isReading });
  const order = Number(data.session_id);
  const fm2 = {
    title: data.title,
    description,
    sidebar: { order: Number.isFinite(order) ? order : session2Count, hidden: !isReading },
    pagefind: isReading,
    prev: false,
    next: false,
  };
  const chips2 = [];
  if (Array.isArray(data.speakers) && data.speakers.length) chips2.push(esc(data.speakers.join(', ')));
  if (data.start_wall && data.end_wall) chips2.push(esc(`${data.start_wall}-${data.end_wall}`));
  if (data.session_type) chips2.push(esc(String(data.session_type).replace(/-/g, ' ')));
  const watch2 = data.video_url
    ? ` <a href="${esc(data.video_url)}" rel="noopener">Watch on YouTube from ${esc(data.video_start ?? 'start')}</a>`
    : '';
  const head2 = [
    ytEmbed(data.video_url, data.title),
    chips2.length || watch2
      ? `<p class="session-meta">${chips2.join(' &middot; ')}${chips2.length && watch2 ? ' &middot; ' : ''}${watch2}</p>`
      : '',
  ].filter(Boolean).join('\n\n');
  const notes2 = rewriteLinksDay2(noQuote);
  const media2 = `## Watch this session\n\n${head2}`;
  const boundary2 = notes2.search(/^## (?!TL;DR|Key lessons)/m);
  const content2 = boundary2 >= 0
    ? `${notes2.slice(0, boundary2)}${media2}\n\n${notes2.slice(boundary2)}`
    : `${notes2}\n\n${media2}`;
  writeFileSync(
    path.join(sessionsOut2, file),
    page(fm2, `${quote ? `${quote}\n\n` : ''}${content2}`),
  );
  session2Count++;
}
console.log(`day-two sessions: ${session2Count}`);

const rawSummary2 = splitFrontmatter(readFileSync(path.join(SRC2, '02-index/day-summary.md'), 'utf8')).body;
const summarySections2 = new Map(
  [...rawSummary2.matchAll(/^## ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)]
    .map((match) => [match[1], match[2].trim()]),
);
function shortLabel(id) {
  const s = sessions2.find((x) => x.session_id === id);
  if (!s) return id;
  if (Array.isArray(s.speakers) && s.speakers.length) return s.speakers[0];
  return String(s.title).split(/[:—-]/)[0].trim();
}
function section2(title) {
  if (!summarySections2.has(title)) throw new Error(`Missing day-two digest section: ${title}`);
  return rewriteLinksDay2(summarySections2.get(title)).replace(/\[(\d{3})\]/g, (m, id) => `[${shortLabel(id)}]`);
}
function session2Link(id) {
  const session = sessions2.find((s) => s.session_id === id);
  if (!session) throw new Error(`Missing linked day-two session: ${id}`);
  return `/day2/${session.file.replace(/\.md$/, '')}/`;
}

const home2 = `
<p class="digest-kicker">October 14, 2026 · New York · Day two</p>
<p class="digest-navigation"><a href="/day2-sessions/">Browse day-two session summaries →</a></p>

## The day in one table

${section2('The day in one table')}

## Five themes of the day

${section2('Five themes of the day')}

## The most quotable moments

${section2('The most quotable moments')}

## Practical takeaways for AI engineers

${section2('Practical takeaways for AI engineers')}

## Talks you might have missed

${section2('What only stream viewers saw')}

## Divergences from the published agenda

${section2('Divergences from the published agenda')}

<div class="digest-footer"><strong>Keep exploring</strong><p><a href="/day2-sessions/">Browse day-two session summaries →</a> · <a href="/day2-speakers/">Day-two speakers</a> · <a href="/">Day-one digest →</a></p><p>Unofficial notes from the day-two main-stage livestream. Figures and results are reported by speakers. Use the linked sessions to check context.</p></div>
`;
writeFileSync(path.join(DOCS, 'day2.md'), page({
  title: 'Day two digest',
  description: 'AI Engineer NYC 2026 day two, October 14: trust, security, compute markets, and finance as the first production customer for agents.',
}, home2));

const talkCards2 = sessions2.filter((s) => s.isReading).map((s) => `
<article class="session-card">
<h2><a href="${session2Link(s.session_id)}">${esc(s.title)}</a></h2>
<p class="session-meta">${esc(s.speakers?.join(', '))} · ${esc(s.session_type === 'qna' ? 'Questions and answers' : s.session_type)}</p>
<p>${esc(s.description)}</p>
<a class="read-session" href="${session2Link(s.session_id)}">Read the summary <span aria-hidden="true">→</span></a>
</article>`).join('\n');
const archive2 = sessions2.filter((s) => !s.isReading).map((s) => `- [${s.title}](${session2Link(s.session_id)})`).join('\n');
writeFileSync(path.join(DOCS, 'day2-sessions.md'), page({
  title: 'Day two session summaries',
  description: 'Browse day-two talks, keynotes, and panels with summaries, key lessons, and links to the recording.',
  tableOfContents: false,
}, `Find a day-two talk worth your time. Each session starts with a summary and key lessons.\n\nBack to the [day-two digest](/day2/) or the [day-one digest](/).\n\n<div class="session-list">${talkCards2}</div>\n\n<details>\n<summary>Day-two stream archive: announcements, breaks, and transitions</summary>\n\n${archive2}\n\n</details>`));

for (const [file, title] of [['speakers.md', 'Day two speakers'], ['tags.md', 'Day two tags']]) {
  const { body: raw } = splitFrontmatter(readFileSync(path.join(SRC2, '02-index', file), 'utf8'));
  const { quote, body } = takeBlockquote(stripH1(raw));
  writeFileSync(path.join(DOCS, file.replace('.md', '') + '-day2.md'), page({ title, description: truncateSentences(quote || title, 280) }, rewriteLinksDay2(body)));
}
console.log('day-two index pages: digest, summaries, speakers, tags');

// --- Report unresolved relative links ---------------------------------------

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

const leftovers = [];
for (const file of walk(DOCS)) {
  const text = readFileSync(file, 'utf8');
  const body = text.replace(/^---[\s\S]*?---/, '');
  for (const m of body.matchAll(/\]\(([^)]+)\)/g)) {
    const target = m[1];
    if (target.startsWith('http') || target.startsWith('#') || target.startsWith('/')) continue;
    leftovers.push(`${path.relative(DOCS, file)} -> ${target}`);
  }
}
if (leftovers.length) {
  console.warn('unresolved relative links:');
  for (const l of leftovers) console.warn(`  ${l}`);
  process.exitCode = 1;
} else {
  console.log('link check: clean');
}
