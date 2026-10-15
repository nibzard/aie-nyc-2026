export type TopicData = typeof import('../data/topics.json').default;
export type TopicState = { topic: string; day: string; view: string; session: string; all: boolean; query: string; sort: string; rate: string };
export const escape = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const e = escape;
export function current(data: TopicData, state: TopicState) { return data.concepts.find(c => c.id === state.topic) || data.concepts.find(c => c.concept === 'Cost')!; }
export function selectedMatches(data: TopicData, state: TopicState) { return current(data, state).matches.filter(m => state.day === 'all' || data.sessions.find(s => s.key === m.key)!.day === Number(state.day)); }
export const total = (state: TopicState) => state.day === '1' ? 23 : state.day === '2' ? 24 : 47;
export function coverage(data: TopicData, state: TopicState) {
  const selected = current(data, state);
  const concepts = data.concepts.filter(c => (state.all || state.query || c.primary || c.id === selected.id) && c.concept.toLowerCase().includes(state.query.toLowerCase()));
  const count = (c: typeof selected) => state.day === '1' ? c.day1_talks : state.day === '2' ? c.day2_talks : c.talks;
  concepts.sort((a,b) => state.sort === 'name' ? a.concept.localeCompare(b.concept) : count(b)-count(a) || a.concept.localeCompare(b.concept));
  return concepts.map(c => `<button type="button" class="topic-bar" data-topic="${c.id}" aria-pressed="${c.id === selected.id}"><span>${e(c.concept)}</span><strong>${count(c)}<span class="sr-only"> of ${total(state)} talks</span></strong><span class="topic-track" aria-hidden="true"><span style="width:${count(c)/total(state)*100}%"></span></span></button>`).join('') || '<p>No topics match. Try a broader term.</p>';
}
function source(data: TopicData, key: string, seconds: number) {
  const s = data.sessions.find(s => s.key === key)!;
  return `https://www.youtube.com/watch?v=${s.day === 1 ? 'akEqiXFo3GM' : 'jiUC6IUMdvc'}&amp;t=${seconds}s`;
}
export function detail(data: TopicData, state: TopicState) {
  const c = current(data,state), matches = selectedMatches(data,state), count = matches.length;
  const s = (key: string) => data.sessions.find(s => s.key === key)!;
  const claims = data.claims.filter(r => r.concept === c.concept && (state.day === 'all' || s(r.session).day === Number(state.day)));
  const focus = matches.find(m => m.key === state.session);
  // Show both days when available. The full list remains below the examples.
  const examples = focus ? [focus] : [matches.find(m => s(m.key).day === 1), matches.find(m => s(m.key).day === 2)].filter(Boolean) as typeof matches;
  return `<p class="explorer-eyebrow">${state.day === 'all' ? 'Both days' : `Day ${state.day}`} · ${count} of ${total(state)} talks</p>
  <h2 id="selected-topic">${e(c.concept)}</h2>
  <p>Matches in at least two transcript segments per talk. This measures coverage, not importance or agreement.</p>
  <a class="topic-guide-link" href="/guides/${c.guide}/">Read the related field guide →</a>
  ${claims.length ? `<h3>Reviewed excerpts</h3><p class="explorer-note">Labels describe these passages. Results remain speaker-reported.</p>${claims.map(r => `<article class="claim-card"><span class="claim-label">${e(r.label)}</span><h4>${e(r.title)}</h4><blockquote>${e(r.text)}</blockquote><p>${e(r.context)}</p><p class="explorer-source">Day ${s(r.session).day} · ${e(s(r.session).speakers.join(', '))}<br><a href="${s(r.session).url}">Session notes</a> · <a href="${source(data,r.session,r.seconds)}">Watch this passage ↗</a></p></article>`).join('')}` : ''}
  <h3 id="topic-evidence">Transcript matches</h3><p class="explorer-note">These automatic matches show why a talk is counted. Read the context before interpreting a match.</p>
  ${examples.map(m => `<article class="transcript-match"><p class="explorer-eyebrow">Day ${s(m.key).day}${s(m.key).partial ? ' · Partial recording' : ''}</p><h4>${e(s(m.key).title)}</h4><blockquote>${e(m.excerpt.text)}</blockquote><p><a href="${source(data,m.key,m.excerpt.seconds)}">Watch this passage ↗</a> · <a href="${s(m.key).url}">Session notes</a></p></article>`).join('') || '<p>No talks meet the coverage rule for this day.</p>'}
  ${focus ? '<button type="button" data-clear-session>Show examples from both available days</button>' : ''}
  <details class="matched-sessions" ${focus ? 'open' : ''}><summary>All ${count} matching talks</summary><ul>${matches.map(m => `<li><a href="${s(m.key).url}">${e(s(m.key).title)}</a><span>Day ${s(m.key).day} · ${m.segments} matching segments${s(m.key).partial ? ' · Partial recording' : ''}</span><button type="button" data-session="${m.key}">Show passage<span class="sr-only"> from ${e(s(m.key).title)}</span></button></li>`).join('')}</ul></details>
  <details class="topic-definition"><summary>What counts as ${e(c.concept.toLowerCase())}?</summary><p>Categories overlap. Broad terms can have different meanings in different talks. A match does not establish the talk’s main subject.</p><p>Exact matching rule (case-insensitive regular expression):</p><code>${e(c.pattern)}</code></details>`;
}
export function matrix(data: TopicData, state: TopicState) {
  const columns = data.concepts.filter(c => c.primary || c.id === state.topic);
  const sessions = data.sessions.filter(s => state.day === 'all' || s.day === Number(state.day));
  return `<table><caption>Session map · ${sessions.length} talks. Numbers count matching transcript segments. Choose a number to inspect its source.</caption><thead><tr><th scope="col">Session</th>${columns.map(c => `<th scope="col" ${c.id === state.topic ? 'class="selected-column"' : ''}>${e(c.concept)}</th>`).join('')}</tr></thead><tbody>${sessions.map(s => `<tr><th scope="row"><span>Day ${s.day}${s.partial ? ' · Partial' : ''}</span><a href="${s.url}">${e(s.title)}</a></th>${columns.map(c => { const m=c.matches.find(m => m.key === s.key); return `<td ${c.id === state.topic ? 'class="selected-column"' : ''}>${m ? `<button type="button" data-topic="${c.id}" data-session="${s.key}" aria-label="${e(c.concept)}: ${m.segments} matching segments in ${e(s.title)}, Day ${s.day}">${m.segments}</button>` : '<span aria-label="Below the two-segment threshold">—</span>'}</td>`; }).join('')}</tr>`).join('')}</tbody></table>`;
}
export function comparison(data: TopicData, state: TopicState) {
  const c = current(data,state);
  const rates = state.rate === 'equal' ? [c.day1_mean_talk_rate,c.day2_mean_talk_rate] : [c.day1_per_10000_words,c.day2_per_10000_words];
  const max = Math.max(...rates,1);
  return `<h3>${e(c.concept)} across the two days</h3><p class="explorer-note">Both days stay visible here. The day filter controls the coverage list and source sessions above.</p><div class="comparison-rows">${rates.map((r,i) => `<div><span>Day ${i+1}</span><span class="comparison-track"><span style="width:${r/max*100}%"></span></span><strong>${r.toFixed(1)}</strong></div>`).join('')}</div><p>Matches per 10,000 words · ${state.rate === 'equal' ? 'Each talk has equal weight. Calculate each talk’s rate, then average the rates for the day.' : 'Pool all words in each day. Longer talks contribute more words.'}</p><p class="explorer-note">Breadth: Day 1 matches ${c.day1_talks} of 23 talks; Day 2 matches ${c.day2_talks} of 24. Rates count all matches, including talks below the coverage threshold. This is a descriptive comparison of two captured streams.</p>`;
}
export function related(data: TopicData, state: TopicState) {
  const c = current(data,state);
  const edges = data.network.edges.filter(r => r.source === c.concept || r.target === c.concept).sort((a,b) => b.npmi-a.npmi);
  if (!edges.length) return `<p>No related concepts pass the current evidence thresholds for ${e(c.concept)}. This does not make the topic unimportant.</p>`;
  // A selected-topic graph avoids the unreadable full-network hairball.
  const graphEdges = edges.slice(0,8), height = Math.max(180, graphEdges.length*50+30), mid=height/2;
  return `<p>Across both days: concepts that recur near <strong>${e(c.concept)}</strong>. Connections show association, not cause, agreement, or priority.</p><svg class="topic-network" viewBox="0 0 640 ${height}" role="img" aria-label="${e(c.concept)} connects to ${graphEdges.map(r => e(r.source === c.concept ? r.target : r.source)).join(', ')}. Shared talk counts are listed below.">${graphEdges.map((r,i) => `<line x1="180" y1="${mid}" x2="410" y2="${30+i*50}" stroke="currentColor" stroke-width="${1+r.npmi*5}" opacity=".4"/><circle cx="410" cy="${30+i*50}" r="5" fill="currentColor"/><text x="425" y="${35+i*50}" fill="currentColor">${e(r.source === c.concept ? r.target : r.source)}</text>`).join('')}<circle cx="180" cy="${mid}" r="8" fill="currentColor"/><text x="165" y="${mid-18}" text-anchor="end" fill="currentColor">${e(c.concept)}</text></svg><ul class="related-list">${edges.map(r => { const name=r.source === c.concept ? r.target:r.source, other=data.concepts.find(c => c.concept === name)!; return `<li><button type="button" data-topic="${other.id}">${e(name)}</button><span>${r.talks} talks with nearby matches · ${r.windows} text windows</span></li>`; }).join('')}</ul><p class="explorer-note">A connection requires at least eight shared text windows and four talks. Each text window contains about 150 words. Strength uses normalized pointwise mutual information (minimum 0.08). Both topics must meet the coverage rule in each supporting talk. The drawing shows up to eight connections; the list includes all qualifying connections.</p>`;
}
