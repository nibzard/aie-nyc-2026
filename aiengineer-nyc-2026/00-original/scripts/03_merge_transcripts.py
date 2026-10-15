#!/usr/bin/env python3
"""Merge gpt-transcribe text with whisper-1 timestamps into a master transcript.

For every chunk:
- whisper segments are expanded to per-word times (linear interpolation
  inside each segment);
- gpt-transcribe words are aligned to whisper words with difflib
  SequenceMatcher on normalized word sequences;
- unmatched gpt words are interpolated between the closest matched words.

Outputs:
- transcript-master.json : sentences with video-relative and wall-clock times
- transcript-master.md   : human-readable timestamped transcript
"""
import difflib
import json
import re
import unicodedata
from pathlib import Path

BASE = Path("/home/agent/ainy26/aiengineer-nyc-2026/00-original")
CHUNKS = BASE / "chunks"
RAW = BASE / "transcript-raw"
OUT_DIR = BASE / "transcript-raw"
STREAM_EPOCH = 1791895672  # 2026-10-13 12:47:52 UTC = 08:47:52 ET, t=0

WORD_RE = re.compile(r"[A-Za-z0-9']+")

def norm_word(w: str) -> str:
    w = unicodedata.normalize("NFKD", w).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9']", "", w.lower())

def tokenize_with_spans(text: str):
    """Return list of (norm, raw, char_start, char_end)."""
    out = []
    for m in WORD_RE.finditer(text):
        out.append((norm_word(m.group()), m.group(), m.start(), m.end()))
    return out

def whisper_word_times(segments):
    """Expand whisper segments into (norm, time) pairs."""
    words = []
    for seg in segments:
        text = seg.get("text", "")
        toks = tokenize_with_spans(text)
        n = len(toks)
        if n == 0:
            continue
        dur = (seg["end"] - seg["start"]) / n
        for i, tok in enumerate(toks):
            if tok[0]:
                words.append((tok[0], seg["start"] + dur * i))
    return words

def align_chunk(gpt_text: str, segments, chunk_dur: float):
    """Return list of (char_start, char_end, time) for gpt words."""
    gpt_toks = tokenize_with_spans(gpt_text)
    wh_words = whisper_word_times(segments)
    g_norm = [t[0] for t in gpt_toks]
    w_norm = [w[0] for w in wh_words]
    times = [None] * len(gpt_toks)

    if wh_words:
        sm = difflib.SequenceMatcher(None, g_norm, w_norm, autojunk=False)
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag == "equal":
                span = i2 - i1
                for k in range(span):
                    times[i1 + k] = wh_words[j1 + k][1]
        # fill unmatched gpt words by interpolation
        last_known_t, last_idx = 0.0, -1
        next_known_t, next_idx = None, None
        for i in range(len(gpt_toks)):
            if times[i] is not None:
                # interpolate any gap before this known word
                if last_idx >= 0 and i - last_idx > 1:
                    for k in range(last_idx + 1, i):
                        frac = (k - last_idx) / (i - last_idx)
                        times[k] = last_known_t + (times[i] - last_known_t) * frac
                last_known_t, last_idx = times[i], i
        # trailing unmatched words: extend from last known
        if last_idx >= 0:
            for i in range(last_idx + 1, len(gpt_toks)):
                times[i] = last_known_t
        # leading unmatched words
        first_known = next((i for i, t in enumerate(times) if t is not None), None)
        if first_known is not None and first_known > 0:
            for i in range(first_known):
                times[i] = times[first_known]
    else:
        # no whisper words at all: linear spread over the chunk
        n = max(1, len(gpt_toks) - 1)
        for i in range(len(gpt_toks)):
            times[i] = chunk_dur * i / n if gpt_toks else 0.0

    return [(gpt_toks[i][2], gpt_toks[i][3], times[i]) for i in range(len(gpt_toks))]

SENT_RE = re.compile(r'[^.!?…]+[.!?…]+["\')\]]*|[^.!?…]+$')

def sentences_with_times(gpt_text: str, word_spans):
    """Split into sentences; each sentence gets start/end word times."""
    if not gpt_text.strip():
        return []
    out = []
    for m in SENT_RE.finditer(gpt_text):
        s, e = m.start(), m.end()
        if not gpt_text[s:e].strip():
            continue
        times = [t for (cs, ce, t) in word_spans if cs >= s and ce <= e + 1]
        if not times:
            # sentence may have no captured words (e.g. only symbols)
            continue
        out.append({"start": min(times), "end": max(times),
                    "text": gpt_text[s:e].strip()})
    return out

def fmt_hms(t: float) -> str:
    t = int(round(t))
    return f"{t // 3600:02d}:{(t % 3600) // 60:02d}:{t % 60:02d}"

def fmt_wall(t: float) -> str:
    import datetime
    et = datetime.timezone(datetime.timedelta(hours=-4))
    dt = datetime.datetime.fromtimestamp(STREAM_EPOCH + t, et)
    return dt.strftime("%I:%M:%S %p").lstrip("0")

def main():
    manifest = json.loads((CHUNKS / "manifest.json").read_text())
    all_sentences = []
    per_chunk_meta = []
    for c in manifest["chunks"]:
        gpt_path = RAW / f"{c['name']}.gpt.json"
        whs_path = RAW / f"{c['name']}.whisper.json"
        if not gpt_path.exists() or not whs_path.exists():
            per_chunk_meta.append({**c, "status": "missing-raw"})
            continue
        gpt_text = json.loads(gpt_path.read_text()).get("text", "")
        segments = json.loads(whs_path.read_text()).get("segments", [])
        word_spans = align_chunk(gpt_text, segments, c["duration"])
        sents = sentences_with_times(gpt_text, word_spans)
        for s in sents:
            s["t_start"] = round(c["start"] + s.pop("start"), 3)
            s["t_end"] = round(c["start"] + s.pop("end"), 3)
            all_sentences.append(s)
        per_chunk_meta.append({**c, "status": "ok",
                               "gpt_chars": len(gpt_text),
                               "whisper_segments": len(segments)})
        print(f"{c['name']}: {len(sents)} sentences", flush=True)

    all_sentences.sort(key=lambda s: s["t_start"])
    master = {
        "video_id": "akEqiXFo3GM",
        "stream_epoch_utc": STREAM_EPOCH,
        "stream_start_wall_et": "2026-10-13 08:47:52 ET",
        "models": {"text": "gpt-transcribe (gpt-transcribe-api-ev3)",
                   "timing": "whisper-1 verbose_json segment timestamps"},
        "sentence_count": len(all_sentences),
        "chunks": per_chunk_meta,
        "sentences": all_sentences,
    }
    (OUT_DIR / "transcript-master.json").write_text(json.dumps(master, indent=1))

    lines = [
        "# AI Engineer NYC 2026 livestream — master transcript",
        "",
        "- Video: https://www.youtube.com/watch?v=akEqiXFo3GM (8h 05m 50s)",
        "- Stream start: 2026-10-13 08:47:52 ET (t=0)",
        "- Text: OpenAI `gpt-transcribe`; timing: OpenAI `whisper-1` segment timestamps",
        "- Timestamps: `[video time | wall clock ET]`",
        "",
    ]
    for s in all_sentences:
        lines.append(f"[{fmt_hms(s['t_start'])} | {fmt_wall(s['t_start'])}] {s['text']}")
    (OUT_DIR / "transcript-master.md").write_text("\n".join(lines) + "\n")
    print(f"wrote master with {len(all_sentences)} sentences", flush=True)

if __name__ == "__main__":
    main()
