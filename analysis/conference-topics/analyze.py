#!/usr/bin/env python3
"""Reproduce the corpus analysis. See requirements.txt and methodology.json."""
from pathlib import Path
from collections import Counter, defaultdict
import re, json, math, csv, hashlib, itertools, warnings, sys, platform
import numpy as np
import yaml
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer, ENGLISH_STOP_WORDS
from sklearn.decomposition import NMF, TruncatedSVD
from sklearn.preprocessing import normalize
from scipy.optimize import linear_sum_assignment
from scipy.stats import spearmanr
import networkx as nx
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

ROOT=Path(__file__).resolve().parents[2]
OUT=Path(__file__).resolve().parent
BASE='https://aie-nyc-2026.vercel.app'
SOURCES=[(1,'aiengineer-nyc-2026','sessions'),(2,'aiengineer-nyc-2026-day2','day2')]
EXCLUDE={(1,'047'):'Q&A overlaps the preceding keynote',(2,'001'):'Welcome remarks, classified as a keynote in the source',(2,'022'):'Duplicate Intuit recording; retain record 023'}
TYPES={'keynote','talk','fireside','panel','qna'}
TOKEN=re.compile(r"[a-z]+(?:'[a-z]+)?",re.I)
ALIASES={'agents':'agent','agentic':'agent','models':'model','llms':'llm','gpus':'gpu','tokens':'token','workflows':'workflow','evaluations':'evaluation','evals':'evaluation','eval':'evaluation','evaluating':'evaluation','evaluate':'evaluation','evaluated':'evaluation','datasets':'dataset','benchmarks':'benchmark','systems':'system','tools':'tool','companies':'company','humans':'human','customers':'customer','users':'user','documents':'document','permissions':'permission','skills':'skill','costs':'cost','tasks':'task','traces':'trace','transactions':'transaction','applications':'application','servers':'server','sources':'source','prices':'price','contracts':'contract','clusters':'cluster','stocks':'stock','policies':'policy','controls':'control','processes':'process','developers':'developer','engineers':'engineer','environments':'environment','tests':'test','testing':'test','training':'training','trained':'training','train':'training'}
FILLER=set('does doing did done good sure quite yeah yes okay ok actually basically literally really obviously exactly probably maybe kind sorta gonna wanna right just like know think thing things sort lot lots want wants wanted going gonna got getting get make makes made making able say says said saying lets let need needs needed using use uses used look looks looking see seen way ways bit little stuff pretty today tomorrow yesterday thank thanks welcome morning afternoon talk talks talking gonna dont thats theres gonna ve ll re didn doesn isn won couldn wouldn shouldnt'.split())
STOP=set(ENGLISH_STOP_WORDS)|FILLER
# These ubiquitous domain terms remain in the frequency table; excluding them
# only from latent discovery prevents every component becoming "AI agent model".
DISCOVERY_STOP=STOP|set('ai agent model llm people company work working new time different jack york example examples thing build building use user going really'.split())

def tokens(s):
 normalized=[]
 contractions={"can't":"can","won't":"will","don't":"do","doesn't":"does","isn't":"is","aren't":"are","didn't":"did","wasn't":"was","weren't":"were","couldn't":"could","wouldn't":"would","shouldn't":"should","i'm":"i"}
 for word in TOKEN.findall(s.lower().replace('’',"'")):
  word=contractions.get(word,word)
  word=re.sub(r"'(?:s|re|ve|ll|d)$",'',word)
  normalized.append(ALIASES.get(word,word))
 return normalized
def content_tokens(s,discovery=False):
 stop=DISCOVERY_STOP if discovery else STOP
 return [w for w in tokens(s) if w not in stop and len(w)>2]
def seconds(s):return sum(int(v)*60**i for i,v in enumerate(str(s).split(':')[::-1]))
def write_json(name,data):(OUT/name).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
def csv_out(name,rows):
 if not rows:return
 with (OUT/name).open('w',newline='') as f:
  writer=csv.DictWriter(f,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)

docs=[]; sentences=[]; fingerprints={}; excluded=[]
for day,folder,directory in SOURCES:
 masterpath=ROOT/folder/'00-original/transcript-raw/transcript-master.json'
 raw=masterpath.read_bytes();fingerprints[str(masterpath.relative_to(ROOT))]=hashlib.sha256(raw).hexdigest()
 master=json.loads(raw)['sentences']
 for f in sorted((ROOT/folder/'01-sessions').glob('[0-9][0-9][0-9]-*.md')):
  raw=f.read_text();meta=yaml.safe_load(raw.split('---',2)[1]);id=str(meta['session_id']).zfill(3)
  if meta['session_type'] not in TYPES:continue
  if (day,id) in EXCLUDE:excluded.append({'day':day,'id':id,'reason':EXCLUDE[day,id]});continue
  start,end=seconds(meta['video_start']),seconds(meta['video_end'])
  doc={'key':f'{day}:{id}','day':day,'id':id,'title':meta['title'],'speakers':meta['speakers'],'url':BASE+f'/{directory}/{f.stem}/','video':meta['video_url'].split('&t=')[0],'start':start,'end':end,'partial':(day,id) in {(1,'030'),(2,'042')}}
  seen=set();lines=[]
  for s in master:
   if not start<=s['t_start']<end:continue
   text=s['text'].strip();key=(round(s['t_start'],3),text)
   if key in seen or not text:continue
   seen.add(key);lines.append(text)
   sentences.append({'doc':doc['key'],'day':day,'text':text,'t':round(s['t_start'],3),'url':doc['video']+'&t='+str(int(s['t_start']))+'s'})
  doc['text']=' '.join(lines);doc['words']=len(tokens(doc['text']));doc['sentence_count']=len(lines)
  if not lines:raise ValueError('No master text for '+doc['key'])
  docs.append(doc)
D=len(docs); assert D==47 and len({d['key'] for d in docs})==D
bykey={d['key']:d for d in docs}
# Preserve only counts and source-linked evidence in exported data, not another
# full copy of the source transcript.
frequencies=Counter();df=Counter();day_counts={1:Counter(),2:Counter()};day_words=Counter()
for d in docs:
 t=content_tokens(d['text']);c=Counter(t);frequencies.update(c);df.update(set(t));day_counts[d['day']].update(c);day_words[d['day']]+=d['words']
lexical=[]
for term,n in frequencies.most_common(100):
 lexical.append({'term':term,'mentions':n,'talks':df[term],'talk_share':round(df[term]/D,4),'day1_per_10000_words':round(day_counts[1][term]/day_words[1]*10000,2),'day2_per_10000_words':round(day_counts[2][term]/day_words[2]*10000,2)})
csv_out('word-frequency.csv',lexical)
# Two- and three-word phrases: include adjacency before stop-word filtering.
phrase_vectorizer=CountVectorizer(ngram_range=(2,3),min_df=3,preprocessor=lambda s:' '.join(tokens(s)),token_pattern=r'(?u)\b[a-zA-Z][a-zA-Z]+\b')
phraseX=phrase_vectorizer.fit_transform([d['text'].lower() for d in docs]);phrase_names=phrase_vectorizer.get_feature_names_out();phrase_counts=np.asarray(phraseX.sum(axis=0)).ravel();phrase_df=np.asarray((phraseX>0).sum(axis=0)).ravel()
phrases=[]
for i in np.argsort(-phrase_counts):
 terms=phrase_names[i].split()
 if any(t in STOP for t in terms) or phrase_names[i] in {'new york','et cetera','years ago','ai engineer','real world'}:continue
 phrases.append({'phrase':phrase_names[i],'mentions':int(phrase_counts[i]),'talks':int(phrase_df[i])})
 if len(phrases)==60:break
csv_out('phrases.csv',phrases)
# Explicit, overlapping term families. They are lexical proxies, not hidden
# semantic labels or a claim that every mention endorses a topic.
PATTERNS={
 'Evaluation':r'\b(?:evals?|evaluat\w*|benchmarks?)\b',
 'Security':r'\b(?:secur\w*|sandbox\w*|prompt injection|attacks?|vulnerabilit\w*|exfiltrat\w*)\b',
 'Authorization':r'\b(?:authori[sz]\w*|permissions?|credentials?|identit\w*|oauth|tokens? exchange|access controls?)\b',
 'Verification':r'\b(?:verif\w*|citations?|provenance|source.check\w*)\b',
 'Trust':r'\b(?:trust\w*|confiden\w*|reliab\w*)\b',
 'Human review':r'\b(?:human.in.the.loop|human (?:review|approval|oversight)|approvals?|reviewers?|human judgment)\b',
 'Observability':r'\b(?:observabil\w*|telemetry|traces?|tracing|monitor\w*|audit\w*|logs?|logging)\b',
 'Memory':r'\bmemor(?:y|ies)\b',
 'Context':r'\bcontext\w*\b',
 'Retrieval':r'\b(?:retriev\w*|search\w*|rag|vector\w*|embeddings?)\b',
 'Workflow':r'\b(?:workflows?|orchestrat\w*|dag|dags|deterministic|processes)\b',
 'Software and coding':r'\b(?:cod(?:e|es|ing|ebase)|pull requests?|merged pr|software|developers?)\b',
 'Skills':r'\bskills?\b',
 'GPU':r'\b(?:gpus?|b200\w*|h100\w*|cuda|nvidia|nvlink|mig)\b',
 'Compute':r'\b(?:compute|computing|clusters?|data centers?|datacenters?|capacity)\b',
 'Cost':r'\b(?:cost\w*|prices?|pricing|spend\w*|budgets?|expensive|cheaper?|dollars?)\b',
 'Latency':r'\b(?:latenc\w*|throughput|tokens per second|time to first token|requests per second)\b',
 'Training':r'\b(?:train\w*|fine.tun\w*|finetun\w*|post.train\w*|reinforcement learning)\b',
 'Simulation':r'\b(?:simulat\w*|world models?|next.frame|pixels?|robot\w*|video models?)\b',
 'Business value':r'\b(?:roi|return on investment|business value|value case|productivity|lead time|throughput|cost per (?:merged|accepted)|revenues?)\b',
 'Deployment':r'\b(?:deploy\w*|production|ship(?:ping|ped)?)\b',
 'Privacy':r'\b(?:privacy|pii|sensitive data|sensitive information|tenant\w*|data protection)\b',
 'Inference':r'\b(?:inferen\w*|serving|quantiz\w*|kv.cache|prefill|decode\w*)\b',
 'Finance':r'\b(?:financ\w*|invest\w*|banks?|banking|trades?|trading|portfolios?|fraud|accounting|transactions?)\b',
}
patterns={k:re.compile(v,re.I) for k,v in PATTERNS.items()}
concept_stats=[];hits={};doc_sentence_hits={}
for concept,pattern in patterns.items():
 ds=[];rates={};count=0;day_hits={1:[],2:[]};day_rates={1:[],2:[]};day_count=Counter();sentence_hits=Counter()
 for s in sentences:
  if pattern.search(s['text']):sentence_hits[s['doc']]+=1
 doc_sentence_hits[concept]=sentence_hits
 for d in docs:
  matches=len(pattern.findall(d['text']));count+=matches;day_count[d['day']]+=matches;day_rates[d['day']].append(matches/d['words']*10000)
  # Coverage requires two distinct transcript segments to limit incidental names.
  present=sentence_hits[d['key']]>=2
  if present:ds.append(d['key'])
  day_hits[d['day']].append(present)
 hits[concept]=set(ds)
 perday={day:day_count[day]/day_words[day]*10000 for day in [1,2]}
 # Talk-level bootstrap, not token-level pseudo-replication.
 rng=np.random.default_rng(42);diffs=[]
 for _ in range(1500):
  samples={day:rng.integers(0,len(day_hits[day]),len(day_hits[day])) for day in [1,2]}
  means={day:np.mean(np.array(day_hits[day])[samples[day]]) for day in [1,2]}
  diffs.append(float(means[2]-means[1]))
 ci=np.quantile(diffs,[.025,.975])
 concept_stats.append({'concept':concept,'mentions':count,'talks':len(ds),'coverage':round(len(ds)/D,4),'day1_talks':sum(day_hits[1]),'day2_talks':sum(day_hits[2]),'day1_coverage':round(np.mean(day_hits[1]),4),'day2_coverage':round(np.mean(day_hits[2]),4),'day1_per_10000_words':round(perday[1],2),'day2_per_10000_words':round(perday[2],2),'day1_mean_talk_rate':round(float(np.mean(day_rates[1])),2),'day2_mean_talk_rate':round(float(np.mean(day_rates[2])),2),'day_shift_pp':round((np.mean(day_hits[2])-np.mean(day_hits[1]))*100,2),'shift_ci_low_pp':round(ci[0]*100,2),'shift_ci_high_pp':round(ci[1]*100,2)})
concept_stats.sort(key=lambda x:-x['talks']);csv_out('concepts.csv',concept_stats);write_json('concept-definitions.json',PATTERNS)
# Disjoint windows of approximately 150 words, reset at every session boundary.
windows=[]
for d in docs:
 group=[s for s in sentences if s['doc']==d['key']];current=[];length=0
 for s in group:
  current.append(s);length+=len(tokens(s['text']))
  if length>=150:
   windows.append({'doc':d['key'],'day':d['day'],'text':' '.join(v['text'] for v in current),'url':current[0]['url']});current=[];length=0
 if length>=45:windows.append({'doc':d['key'],'day':d['day'],'text':' '.join(v['text'] for v in current),'url':current[0]['url']})
for w in windows:w['concepts']={name for name,p in patterns.items() if w['doc'] in hits[name] and p.search(w['text'])}
N=len(windows);marginal=Counter();pairs=Counter();pair_docs=defaultdict(set)
for w in windows:
 marginal.update(w['concepts'])
 for a,b in itertools.combinations(sorted(w['concepts']),2):pairs[a,b]+=1;pair_docs[a,b].add(w['doc'])
edges=[]
for (a,b),count in pairs.items():
 p=count/N;pa=marginal[a]/N;pb=marginal[b]/N;lift=p/(pa*pb);npmi=math.log(lift)/(-math.log(p))
 if count>=8 and len(pair_docs[a,b])>=4 and npmi>0:
  edges.append({'source':a,'target':b,'windows':count,'talks':len(pair_docs[a,b]),'lift':round(lift,4),'npmi':round(npmi,4)})
edges.sort(key=lambda x:-x['npmi']);csv_out('network-edges.csv',edges)
G=nx.Graph();G.add_nodes_from(patterns)
for e in edges:
 if e['npmi']>=.08:G.add_edge(e['source'],e['target'],weight=e['npmi'],distance=1/e['npmi'])
communities=list(nx.community.louvain_communities(G,weight='weight',seed=42));community={c:i for i,group in enumerate(communities) for c in group};central=nx.betweenness_centrality(G,weight='distance',normalized=True)
# Cutoff sensitivity: community assignments and bridges depend on thresholds.
network_sensitivity=[]
for cutoff in [.05,.08,.12,.16]:
 h=nx.Graph();h.add_nodes_from(patterns)
 for e in edges:
  if e['npmi']>=cutoff:h.add_edge(e['source'],e['target'],weight=e['npmi'],distance=1/e['npmi'])
 c=nx.betweenness_centrality(h,weight='distance');network_sensitivity.append({'cutoff':cutoff,'edges':h.number_of_edges(),'top_bridges':sorted(c,key=c.get,reverse=True)[:5]})
nodes=[{'id':c,'talks':len(hits[c]),'windows':marginal[c],'community':community[c],'betweenness':round(central[c],4)} for c in patterns]
write_json('network.json',{'nodes':nodes,'edges':[e for e in edges if e['npmi']>=.08],'communities':[sorted(c) for c in communities],'sensitivity':network_sensitivity})
# Unsupervised latent topics: no current website tags, titles, or guide labels.
vectorizer=TfidfVectorizer(analyzer=lambda s:content_tokens(s,True),min_df=3,max_df=.85,sublinear_tf=True,max_features=4500)
X=vectorizer.fit_transform([d['text'] for d in docs]);terms=vectorizer.get_feature_names_out()
fits={};models=[]
for k in [6,8,10]:
 runs=[]
 for seed in [17,42,73]:
  nmf=NMF(n_components=k,init='nndsvdar',random_state=seed,max_iter=2500,alpha_W=0,alpha_H=0,l1_ratio=0)
  W=nmf.fit_transform(X);H=nmf.components_
  assert np.all(H.sum(axis=1)>0) and np.all(W.sum(axis=1)>0), 'Degenerate topic model'
  runs.append((nmf,W,H))
 H0=normalize(runs[0][2]);stability=[]
 for _,_,H in runs[1:]:
  sim=H0@normalize(H).T;rr,cc=linear_sum_assignment(-sim);stability.append(float(sim[rr,cc].mean()))
 fit={'k':k,'relative_reconstruction_error':float(runs[0][0].reconstruction_err_/np.linalg.norm(X.toarray())),'seed_stability_cosine':float(np.mean(stability)),'iterations':[run[0].n_iter_ for run in runs],'terms':[[terms[i] for i in np.argsort(-h)[:12]] for h in runs[0][2]]};models.append(fit);fits[k]=runs[0]
# Six is a broad reporting resolution, not a claim of maximum stability. Finer models are exported
# for inspection; partial talks can form misleading components at k=8.
SELECTED_K=6
nmf,W,H=fits[SELECTED_K];Wshare=W/(W.sum(axis=1,keepdims=True)+1e-12);latent=[]
for i,h in enumerate(H):
 topdocs=np.argsort(-W[:,i])[:5]
 latent.append({'id':i,'terms':[terms[j] for j in np.argsort(-h)[:12]],'top_sessions':[{'key':docs[j]['key'],'title':docs[j]['title'],'url':docs[j]['url'],'weight':round(float(Wshare[j,i]),4)} for j in topdocs],'day1_equal_talk_weight':round(float(Wshare[[i for i,d in enumerate(docs) if d['day']==1],i].mean()),4),'day2_equal_talk_weight':round(float(Wshare[[i for i,d in enumerate(docs) if d['day']==2],i].mean()),4)})
keep=[i for i,d in enumerate(docs) if not d['partial']]
partial_model=NMF(n_components=SELECTED_K,init='nndsvdar',random_state=17,max_iter=2500)
partial_model.fit(X[keep]);sim=normalize(H)@normalize(partial_model.components_).T
rr,cc=linear_sum_assignment(-sim)
partial_sensitivity={'excluded':[d['key'] for d in docs if d['partial']],'component_similarity':round(float(sim[rr,cc].mean()),4),'terms':[[terms[i] for i in np.argsort(-row)[:10]] for row in partial_model.components_]}
write_json('partial-recording-sensitivity.json',partial_sensitivity)
coverage_sensitivity=[]
for threshold in [1,2,3,5]:
 counts={concept:sum(doc_sentence_hits[concept][d['key']]>=threshold for d in docs) for concept in patterns}
 coverage_sensitivity.append({'minimum_segments':threshold,'top_ten':sorted(counts,key=counts.get,reverse=True)[:10],'counts':counts})
write_json('coverage-sensitivity.json',coverage_sensitivity)
write_json('latent-topics.json',{'models':models,'reported_k':SELECTED_K,'topics':latent})
# Latent semantic analysis for cross-day reading recommendations.
svd=TruncatedSVD(n_components=16,random_state=42);embedding=normalize(svd.fit_transform(X));similarity=embedding@embedding.T
matches=[]
for i,d in enumerate(docs):
 for j in range(i+1,D):
  if d['day']==docs[j]['day']:continue
  matches.append({'first':d['key'],'first_title':d['title'],'first_url':d['url'],'second':docs[j]['key'],'second_title':docs[j]['title'],'second_url':docs[j]['url'],'cosine':round(float(similarity[i,j]),4)})
matches.sort(key=lambda x:-x['cosine']);csv_out('cross-day-similarity.csv',matches[:50])
# General-purpose sentiment: a diagnostic baseline, not speaker or audience opinion.
analyzer=SentimentIntensityAnalyzer();scored=[]
for s in sentences:
 if len(tokens(s['text']))<8:continue
 score=analyzer.polarity_scores(s['text'])['compound'];label='positive' if score>=.05 else 'negative' if score<=-.05 else 'neutral'
 scored.append({**s,'score':score,'label':label})
sentiment=[]
for day in [1,2]:
 sub=[s for s in scored if s['day']==day];counts=Counter(s['label'] for s in sub)
 sentiment.append({'day':day,'segments':len(sub),'positive_share':round(counts['positive']/len(sub),4),'neutral_share':round(counts['neutral']/len(sub),4),'negative_share':round(counts['negative']/len(sub),4),'mean_compound':round(float(np.mean([s['score'] for s in sub])),4),'strong_positive_share':round(sum(s['score']>=.5 for s in sub)/len(sub),4),'strong_negative_share':round(sum(s['score']<=-.5 for s in sub)/len(sub),4)})
# Deterministic balanced sample for manual review: high-valence and random cases.
rng=np.random.default_rng(42);audit=[]
for day in [1,2]:
 for label in ['positive','negative','neutral']:
  sub=[s for s in scored if s['day']==day and s['label']==label];order=sorted(sub,key=lambda s:abs(s['score']),reverse=True)
  chosen=order[:3]+[sub[i] for i in rng.choice(len(sub),size=3,replace=False)]
  for s in chosen:audit.append({'day':day,'session':s['doc'],'score':s['score'],'baseline_label':label,'text':s['text'],'source':s['url']})
csv_out('sentiment-audit.csv',audit);frames={
 'Reported results':r'\b(?:percent|\d+%|measured|measurement|benchmark|we found|we saw|we observed|results? (?:show|showed)|in production)\b',
 'Constraints and caution':r'\b(?:but|however|cannot|can.t|risk|failure|fail|unless|constraint|limitations?|trade.off|not (?:enough|always|necessarily))\b',
 'Implementation guidance':r'\b(?:you (?:should|need to|have to|can)|make sure|we recommend|the fix|you want to|best practice)\b',
 'Future intent':r'\b(?:we (?:will|plan|intend|expect)|next (?:year|month)|going to (?:build|release|launch)|in the future|within .* months)\b',
}
frame_counts=[]
for name,pattern in frames.items():
 regex=re.compile(pattern,re.I)
 for day in [1,2]:
  sub=[s for s in scored if s['day']==day]
  frame_counts.append({'frame':name,'day':day,'segments':sum(bool(regex.search(s['text'])) for s in sub),'total_eligible_segments':len(sub),'share':round(sum(bool(regex.search(s['text'])) for s in sub)/len(sub),4)})
write_json('framing-cues.json',{'warning':'Overlapping regex cue flags, not validated evidence classification. Examples of results language are not proof; future/constraint flags miss implicit meaning. Use only to propose manual labels.','patterns':frames,'counts':frame_counts})
write_json('sentiment.json',{'baseline':'VADER, transcript segments with at least 8 words; thresholds ±0.05; strong-valence sensitivity ±0.5','by_day':sentiment,'warning':'Measures lexical valence of a transcript segment, not sentiment toward AI or audience sentiment. No reliable stance labels are inferred.'})
# Equal-session rate estimates for day comparisons, to check long-talk dominance.
normalized=[]
for term in [x['term'] for x in lexical[:40]]:
 r={day:[Counter(content_tokens(d['text']))[term]/d['words']*10000 for d in docs if d['day']==day] for day in [1,2]}
 normalized.append({'term':term,'day1_mean_talk_rate':round(float(np.mean(r[1])),2),'day2_mean_talk_rate':round(float(np.mean(r[2])),2)})
csv_out('equal-talk-rates.csv',normalized)
# Examples for each concept link the count to the spoken passage.
evidence={}
for concept in patterns:
 candidates=[s for s in sentences if patterns[concept].search(s['text']) and 12<=len(tokens(s['text']))<=65]
 evidence[concept]=[]
 used=set()
 for s in sorted(candidates,key=lambda s:-len(patterns[concept].findall(s['text']))):
  if s['doc'] in used:continue
  used.add(s['doc']);evidence[concept].append({'session':s['doc'],'day':s['day'],'title':bykey[s['doc']]['title'],'text':s['text'],'source':s['url'],'notes':bykey[s['doc']]['url']})
  if len(used)==6:break
write_json('concept-evidence.json',evidence)
concept_sessions={name:[{'key':d['key'],'day':d['day'],'title':d['title'],'url':d['url'],'mentions':len(patterns[name].findall(d['text'])),'segments':doc_sentence_hits[name][d['key']]} for d in docs if d['key'] in hits[name]] for name in patterns}
write_json('concept-sessions.json',concept_sessions)
metadata={'sources':fingerprints,'talks':D,'by_day':{str(day):{'talks':sum(d['day']==day for d in docs),'words':day_words[day],'segments':sum(s['day']==day for s in sentences)} for day in [1,2]},'words':sum(d['words'] for d in docs),'segments':len(sentences),'windows':N,'excluded_overlapping_or_noncontent_records':excluded,'partial_recordings':[{'key':d['key'],'title':d['title']} for d in docs if d['partial']],'normalization':ALIASES,'partial_topic_sensitivity':partial_sensitivity,'coverage_threshold_sensitivity':coverage_sensitivity,'lexical_stopwords':sorted(STOP),'topic_stopwords':sorted(DISCOVERY_STOP),'network':'Undirected positive normalized pointwise mutual information, disjoint ~150-word windows; >=8 co-windows and >=4 talks; display cutoff .08. Co-occurrence is not causation, sequence, or agreement.','coverage':'A term family appears in at least two distinct transcript segments per talk. Categories overlap. The network also requires both concepts to meet this talk-level coverage rule.','topics':'Exploratory non-negative matrix factorization at k=6,8,10, three seeds. Report k=6 as a broad view. k=8 has higher seed stability here but also a weak component led by a partial recording. This is not a true topic count; partial talks can create weak components at higher k.','similarity':'16-dimensional latent semantic analysis on unigram TF-IDF, cosine similarity. Suggestions require editorial review.','sentiment':'General-purpose VADER on transcript segments of >=8 words. Threshold ±.05 and sensitivity ±.5. No audio, audience reaction, or target-specific stance.','reproducible_seed':42,'python':platform.python_version(),'scope':'Clip boundaries can retain brief introductions within talks. The two captured main-stage feeds and recorded inserts; not the full multi-room event. Master ASR text, not written summaries or speaker bios. Names and numerical claims can contain transcription errors.'}
write_json('methodology.json',metadata)
write_json('sessions.json',[{k:v for k,v in d.items() if k not in ['text','video']} for d in docs])
write_json('results.json',{'corpus':metadata,'lexical':lexical,'phrases':phrases,'concepts':concept_stats,'latent_topics':latent,'network':{'nodes':nodes,'edges':[e for e in edges if e['npmi']>=.08],'sensitivity':network_sensitivity},'similarity':matches[:20],'sentiment':sentiment,'topic_model_diagnostics':models})
print(json.dumps({'corpus':{k:metadata[k] for k in ['talks','by_day','words','segments','windows']},'top_words':lexical[:15],'top_concepts':concept_stats[:12],'latent_topics':latent,'top_edges':edges[:15],'communities':[sorted(c) for c in communities],'network_sensitivity':network_sensitivity,'cross_day':matches[:8],'sentiment':sentiment,'model_diagnostics':[{'k':m['k'],'error':m['relative_reconstruction_error'],'stability':m['seed_stability_cosine']} for m in models]},ensure_ascii=False,indent=2))
