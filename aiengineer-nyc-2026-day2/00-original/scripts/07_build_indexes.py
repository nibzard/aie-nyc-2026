#!/usr/bin/env python3
"""Build the index files from session files + speaker data.

Reads:  01-sessions/*.md (frontmatter), 02-index/speaker-data/*.json,
        00-original/session-timeline.json, 00-original/sessions-manifest.json
Writes: 02-index/sessions-index.md, 02-index/speakers.md, 02-index/tags.md
"""
import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

ROOT = Path("/home/agent/ainy26/aiengineer-nyc-2026-day2")
SESS = ROOT / "01-sessions"
SPK = ROOT / "02-index/speaker-data"
IDX = ROOT / "02-index"

def parse_fm(path: Path):
    text = path.read_text()
    if not text.startswith("---"):
        return {}, text
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    if not m:
        return {}, text
    fm = {}
    for line in m.group(1).splitlines():
        mm = re.match(r"^([a-z_]+):\s*(.*)$", line)
        if mm:
            fm[mm.group(1)] = mm.group(2).strip().strip('"')
    return fm, m.group(2)

def parse_list(fm_val):
    if not fm_val:
        return []
    return [x.strip().strip('"') for x in fm_val.strip("[]").split(",") if x.strip()]

def main():
    files = sorted(SESS.glob("0*.md"))
    rows = []
    for f in files:
        fm, body = parse_fm(f)
        rows.append({
            "file": f.name,
            "session_id": fm.get("session_id", ""),
            "title": fm.get("title", f.stem),
            "speakers": parse_list(fm.get("speakers", "")),
            "start_wall": fm.get("start_wall", ""),
            "end_wall": fm.get("end_wall", ""),
            "video_start": fm.get("video_start", ""),
            "video_end": fm.get("video_end", ""),
            "session_type": fm.get("session_type", ""),
            "tags": parse_list(fm.get("tags", "")),
            "confidence": fm.get("confidence", ""),
            "video_url": fm.get("video_url", ""),
            # first blockquote line = one-liner
            "one_liner": next((l[2:].strip() for l in body.splitlines()
                               if l.startswith("> ")), ""),
        })
    print(f"parsed {len(rows)} session files")

    # sessions index
    lines = [
        "# Session index - AI Engineer NYC 2026, Oct 14 livestream (day two)",
        "",
        "All times ET on 2026-10-14. Video timestamps point into the",
        "[8h51m16s VOD](https://www.youtube.com/watch?v=jiUC6IUMdvc).",
        "",
        "| # | Wall clock | Video | Type | Title | Speakers | Tags |",
        "|---|---|---|---|---|---|---|",
    ]
    for r in rows:
        tags = " ".join(f"`{t}`" for t in r["tags"][:5])
        title = f"[{r['title']}](../01-sessions/{r['file']})"
        lines.append(f"| {r['session_id']} | {r['start_wall']}–{r['end_wall']} | "
                     f"{r['video_start']} | {r['session_type']} | {title} | "
                     f"{', '.join(r['speakers'])} | {tags} |")
    lines += ["", f"{len(rows)} records." ]
    (IDX / "sessions-index.md").write_text("\n".join(lines) + "\n")

    # tags index
    by_tag = defaultdict(list)
    for r in rows:
        for t in r["tags"]:
            by_tag[t].append(r)
    tlines = ["# Tag index", ""]
    for t in sorted(by_tag):
        rs = by_tag[t]
        tlines.append(f"## `{t}` ({len(rs)})")
        tlines.append("")
        for r in rs:
            tlines.append(f"- [{r['title']}](../01-sessions/{r['file']}) — {r['start_wall']}")
        tlines.append("")
    (IDX / "tags.md").write_text("\n".join(tlines))

    # speakers index
    slines = ["# Speakers on the stream", "",
              "Compiled from official event data and web research;",
              "full records in [speaker-data/](speaker-data/).", ""]
    spoken = defaultdict(list)
    for r in rows:
        for s in r["speakers"]:
            spoken[s].append(r)
    for name in sorted(spoken, key=str.lower):
        slug = re.sub(r"[^a-z0-9]+", "-", unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode().lower()).strip("-")
        rec_path = SPK / f"{slug}.json"
        role = company = ""
        if rec_path.exists():
            d = json.loads(rec_path.read_text())
            role, company = d.get("role", ""), d.get("company", "")
        rs = spoken[name]
        tlist = "; ".join(f"[{r['title'][:48]}](../01-sessions/{r['file']})" for r in rs)
        slines.append(f"## {name}")
        slines.append("")
        slines.append(f"- **Role:** {role or 'unknown'}{', ' + company if company else ''}")
        sess_links = []
        for r in rs:
            sess_links.append(f"[{r['title'][:60]}](../01-sessions/{r['file']})")
        slines.append(f"- **On stream:** {'; '.join(sess_links)}")
        slines.append("")
    (IDX / "speakers.md").write_text("\n".join(slines))
    print("wrote sessions-index.md, tags.md, speakers.md")

    # machine-readable metadata for the day summary agent
    meta = [dict(r) for r in rows]
    (IDX / "sessions-metadata.json").write_text(json.dumps(meta, indent=1))

if __name__ == "__main__":
    main()
