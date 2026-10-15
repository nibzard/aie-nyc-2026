"""Validate research exports against the source and package a standalone explorer."""
import csv
import hashlib
import json
import re
from pathlib import Path

SITE = Path(__file__).resolve().parents[1]
ROOT = SITE.parent
RESEARCH = ROOT / 'analysis/conference-topics'

def read(name):
    return json.loads((RESEARCH / name).read_text())

def save(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n')

results = read('results.json')
method = read('methodology.json')
sessions = read('sessions.json')
by_key = {s['key']: s for s in sessions}
masters = {}
for day, (file, fingerprint) in enumerate(method['sources'].items(), 1):
    raw = (ROOT / file).read_bytes()
    if hashlib.sha256(raw).hexdigest() != fingerprint:
        raise ValueError('Topic analysis is stale. Run analysis/conference-topics/analyze.py in its analysis environment.')
    masters[day] = json.loads(raw)['sentences']
assert len(sessions) == 47
assert [sum(s['day'] == d for s in sessions) for d in (1, 2)] == [23, 24]

# Keep the same boundaries, whitespace, and duplicate rule as the research script.
passages = {}
for s in sessions:
    seen = set()
    rows = []
    for row in masters[s['day']]:
        text = row['text'].strip()
        key = (round(row['t_start'], 3), text)
        if s['start'] <= row['t_start'] < s['end'] and text and key not in seen:
            rows.append({'text': text, 'seconds': int(row['t_start'])})
            seen.add(key)
    assert len(rows) == s['sentence_count'], s['key']
    passages[s['key']] = rows
    s['url'] = '/' + s['url'].split('.vercel.app/', 1)[1]

# These labels describe reviewed excerpts, not an automatically inferred stance.
reviews = [
 ('Evaluation', '1:033', 20285, 'Implementation guidance', 'Design evaluations around the work users need.', 'The speaker contrasts useful work with benchmarks that models can game.'),
 ('Security', '1:023', 13480, 'Constraint', 'A sandbox does not grant task-scoped authorization.', 'This passage describes the boundary of process isolation. It does not claim that sandboxes are useless.'),
 ('Cost', '1:036', 22149, 'Reported result', 'Revolut reports a lower invoice for its self-hosted workload.', 'The next segment names Anthropic and OpenAI as the comparison. This is a speaker-reported invoice result, not a total-cost benchmark. Hardware, staffing, and workload equivalence are not established here.'),
 ('Verification', '1:013', 5968, 'Implementation guidance', 'Align an evaluator with human judgments before release.', 'The speaker describes the team’s own evaluator checks. Agreement with these examples does not prove correctness on every workload.'),
 ('Cost', '2:026', 17932, 'Implementation guidance', 'Include human spend when measuring the cost of a pull request.', 'The next segment completes the point: calculate the real cost per pull request. This is a measurement recommendation.'),
 ('Cost', '2:014', 8812, 'Constraint', 'Compare token prices only with workload and quality in view.', 'The speaker calls token price a practical proxy. The preceding passage says price per successful task is the goal and is difficult to standardize.'),
 ('Compute', '2:039', 26675, 'Future plan', 'Reuse spare capacity for training outside working hours.', 'The preceding passage calls the system an internal prototype. This passage proposes a possible capacity schedule; it does not report a measured saving.'),
 ('Trust', '2:004', 3000, 'Reported result', 'Sonar reports improvements in confidence and reliability.', 'The passage states qualitative results. It does not supply effect sizes or establish that another team would see the same results.'),
]
claims = []
for concept, key, seconds, label, title, context in reviews:
    matches = [r for r in passages[key] if abs(r['seconds'] - seconds) <= 1 and len(r['text']) > 65]
    assert len(matches) == 1, (key, seconds)
    row = matches[0]
    claims.append({'concept': concept, 'session': key, 'label': label, 'title': title, 'context': context, **row})
save(SITE / 'scripts/reviewed-topic-claims.json', claims)

# Map lexical families to the existing editorial guides. This is a reading aid.
guides = {
 'Evaluation':'evaluation', 'Verification':'evaluation',
 'Security':'agent-security', 'Authorization':'agent-security', 'Privacy':'agent-security',
 'Compute':'compute-economics', 'GPU':'compute-economics', 'Inference':'compute-economics', 'Cost':'compute-economics', 'Latency':'compute-economics',
 'Trust':'workflows-and-trust', 'Human review':'workflows-and-trust', 'Workflow':'workflows-and-trust',
 'Context':'company-context', 'Memory':'company-context', 'Retrieval':'company-context', 'Finance':'company-context',
 'Software and coding':'coding-and-product-value', 'Business value':'coding-and-product-value',
 'Simulation':'world-models', 'Training':'agent-systems', 'Deployment':'agent-systems', 'Observability':'agent-systems', 'Skills':'agent-systems',
}
primary = ['Evaluation','Security','Authorization','Verification','Trust','Human review','Observability','Context','Workflow','Software and coding','Compute','Cost','Business value','Simulation']
definitions = read('concept-definitions.json')
matched = read('concept-sessions.json')
evidence = read('concept-evidence.json')
concepts = []
for c in results['concepts']:
    name = c['concept']
    pattern = re.compile(definitions[name], re.I)
    counts = {key: sum(bool(pattern.search(r['text'])) for r in rows) for key, rows in passages.items()}
    expected = {key for key, count in counts.items() if count >= 2}
    assert expected == {m['key'] for m in matched[name]}, name
    assert len(expected) == c['talks'], name
    matches = []
    for m in matched[name]:
        assert counts[m['key']] == m['segments']
        rows = [r for r in passages[m['key']] if pattern.search(r['text'])]
        candidates = [r for r in rows if 12 <= len(r['text'].split()) <= 70] or rows
        sample = max(candidates, key=lambda r: (len(pattern.findall(r['text'])), -len(r['text'])))
        # Prefer a research example where available, but validate it exactly.
        example = next((e for e in evidence[name] if e['session'] == m['key']), None)
        if example:
            sample = next(r for r in rows if r['text'] == example['text'])
        matches.append({'key': m['key'], 'mentions': m['mentions'], 'segments': m['segments'], 'excerpt': sample})
    concepts.append({**c, 'id': name.lower().replace(' ', '-'), 'guide': guides[name], 'primary': name in primary, 'pattern': definitions[name], 'matches': matches})
network = read('network.json')
for edge in network['edges']:
    a, b = edge['source'], edge['target']
    shared = {m['key'] for m in matched[a]} & {m['key'] for m in matched[b]}
    assert edge['talks'] <= len(shared)
public_method = {k: method[k] for k in ['sources','talks','by_day','words','segments','windows','excluded_overlapping_or_noncontent_records','partial_recordings','normalization','coverage','network','scope','reproducible_seed']}
public_method['claim_labels'] = 'Eight excerpts reviewed in transcript context. Labels describe the excerpt, not the whole talk. Speaker results are not independently verified.'
data = {'schema': 1, 'corpus': public_method, 'sessions': sessions, 'concepts': concepts, 'network': network, 'claims': claims, 'lexical': results['lexical'], 'phrases': results['phrases']}
save(SITE / 'src/data/topics.json', data)
save(SITE / 'public/data/topics/explorer.json', data)
save(SITE / 'public/data/topics/methodology.json', public_method)
for source, target in [('concepts.csv','coverage.csv'), ('word-frequency.csv','words.csv')]:
    (SITE / 'public/data/topics' / target).write_bytes((RESEARCH / source).read_bytes())
print(f'Topic data: {len(concepts)} families, {len(sessions)} talks, {len(claims)} reviewed excerpts; source hashes and coverage verified')
