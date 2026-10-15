import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { coverage, detail, matrix, comparison, related, escape } from '../src/components/topic-view.ts';
const data=JSON.parse(readFileSync(new URL('../src/data/topics.json',import.meta.url)));
const base={topic:'cost',day:'all',view:'coverage',session:'',all:false,query:'',sort:'coverage',rate:'pooled'};
test('Coverage denominators and matching lists agree for every topic and day',()=>{
 for(const c of data.concepts) for(const day of ['all','1','2']){
  const state={...base,topic:c.id,day};
  const n=c.matches.filter(m=>day==='all'||data.sessions.find(s=>s.key===m.key).day===Number(day)).length;
  const expected=day==='all'?c.talks:day==='1'?c.day1_talks:c.day2_talks;
  assert.equal(n,expected);
  assert.ok(detail(data,state).includes(`All ${expected} matching talks`));
 }
});
test('The matrix counts each captured talk once and uses matching segment counts',()=>{
 for(const day of ['all','1','2']){
  const html=matrix(data,{...base,day});
  assert.equal((html.match(/<th scope="row">/g)||[]).length,day==='all'?47:day==='1'?23:24);
  assert.match(html,/<caption>/);
  assert.match(html,/scope="col"/);
 }
});
test('An inspected session shows its own exact passage and timestamp',()=>{
 const c=data.concepts.find(c=>c.id==='cost'),m=c.matches.find(m=>m.key==='1:036');
 const html=detail(data,{...base,session:m.key});
 assert.ok(html.includes(escape(m.excerpt.text)));
 assert.ok(html.includes(`&amp;t=${m.excerpt.seconds}s`));
 assert.equal((html.match(/class="transcript-match"/g)||[]).length,1);
});
test('Search reveals specialized topics and has an empty state',()=>{
 assert.match(coverage(data,{...base,query:'privacy'}),/data-topic="privacy"/);
 assert.match(coverage(data,{...base,query:'absent-topic'}),/No topics match/);
});
test('Normalization controls use the corresponding rate series',()=>{
 assert.match(comparison(data,base),/45\.3/);
 assert.match(comparison(data,{...base,rate:'equal'}),/51\.5/);
});
test('Related concepts retain association limits and supporting talk counts',()=>{
 assert.match(related(data,{...base,topic:'compute'}),/association, not cause/);
 assert.match(related(data,{...base,topic:'compute'}),/data-topic="gpu"/);
 for(const edge of data.network.edges) {
  const a=data.concepts.find(c=>c.concept===edge.source),b=data.concepts.find(c=>c.concept===edge.target);
  assert.ok(edge.talks<=Math.min(a.talks,b.talks));
 }
});
test('Transcript content cannot inject HTML into a panel',()=>{
 assert.equal(escape('<img onerror="x">'), '&lt;img onerror=&quot;x&quot;&gt;');
 const changed=structuredClone(data),c=changed.concepts.find(c=>c.id==='cost');
 c.matches[0].excerpt.text='<script>alert(1)</script>';
 const html=detail(changed,{...base,session:c.matches[0].key});
 assert.ok(!html.includes('<script>'));
 assert.ok(html.includes('&lt;script&gt;'));
});
