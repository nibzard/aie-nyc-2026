#!/usr/bin/env python3
"""Given the session timeline JSON, cut per-session transcript files.

Reads:  00-original/session-timeline.json (from workflow 1)
Writes: 00-original/sessions-transcripts/<order>-<slug>.txt
        one file per content segment, with video + wall-clock timestamps.
"""
import json
import re
import sys
from datetime import datetime, timedelta
from pathlib import Path

BASE = Path("/home/agent/ainy26/aiengineer-nyc-2026-day2/00-original")
EPOCH_ET = datetime(2026, 10, 14, 8, 40, 36)

def fmt_hms(t):
    t = int(round(t))
    return f"{t//3600:02d}:{(t%3600)//60:02d}:{t%60:02d}"

def fmt_wall(t):
    dt = EPOCH_ET + timedelta(seconds=t)
    return dt.strftime("%I:%M:%S %p").lstrip("0")

def slugify(s, maxlen=60):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:maxlen].rstrip("-") or "untitled"

def main():
    timeline_path = BASE / "session-timeline.json"
    if not timeline_path.exists():
        print("session-timeline.json not found", file=sys.stderr)
        sys.exit(1)
    tl = json.loads(timeline_path.read_text())
    master = json.loads((BASE / "transcript-raw/transcript-master.json").read_text())
    sents = master["sentences"]
    outdir = BASE / "sessions-transcripts"
    outdir.mkdir(exist_ok=True)
    manifest = []
    for seg in tl["segments"]:
        order = int(seg["order"])
        name = f"{order:03d}-{slugify(seg['title'])}"
        lines = []
        for s in sents:
            if seg["t_start"] - 1 <= s["t_start"] <= seg["t_end"] + 1:
                lines.append(f"[{fmt_hms(s['t_start'])} | {fmt_wall(s['t_start'])}] {s['text']}")
        body = "\n".join(lines)
        (outdir / f"{name}.txt").write_text(body + "\n")
        manifest.append({
            "order": order, "slug": name, "title": seg["title"],
            "kind": seg.get("kind", ""), "agenda_match": seg.get("agenda_match"),
            "speakers": seg.get("speakers", []),
            "t_start": seg["t_start"], "t_end": seg["t_end"],
            "wall_start": fmt_wall(seg["t_start"]), "wall_end": fmt_wall(seg["t_end"]),
            "video_start": fmt_hms(seg["t_start"]), "video_end": fmt_hms(seg["t_end"]),
            "confidence": seg.get("confidence", ""), "notes": seg.get("notes", ""),
            "transcript_file": str((outdir / f"{name}.txt")),
            "transcript_lines": len(lines),
            "word_count": sum(len(l.split()) for l in lines) - 3 * len(lines),
        })
        print(f"{name}: {len(lines)} lines")
    (BASE / "sessions-manifest.json").write_text(json.dumps(manifest, indent=1))
    print("wrote sessions-manifest.json with", len(manifest), "segments")

if __name__ == "__main__":
    main()
