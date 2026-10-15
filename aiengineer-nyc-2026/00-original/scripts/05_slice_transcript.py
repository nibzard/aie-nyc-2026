#!/usr/bin/env python3
"""Slice the master transcript into overlapping window files for analysis.

Each slice file contains:
- window header (t range, wall clock)
- OCR on-screen text lines within the window (cross-check evidence)
- transcript sentences in the window (60 s overlap on each side)

Also emits a compact agenda reference file used by workflow agents.
"""
import csv
import json
from pathlib import Path

BASE = Path("/home/agent/ainy26/aiengineer-nyc-2026/00-original")
SLICES = BASE / "slices"
SLICES.mkdir(exist_ok=True)
WINDOW = 1820   # ~30 min
OVERLAP = 60
STREAM_EPOCH = 1791895672

def fmt_hms(t):
    t = int(round(t))
    return f"{t//3600:02d}:{(t%3600)//60:02d}:{t%60:02d}"

def fmt_wall(t):
    import datetime
    et = datetime.timezone(datetime.timedelta(hours=-4))
    return datetime.datetime.fromtimestamp(STREAM_EPOCH + t, et).strftime("%I:%M:%S %p").lstrip("0")

def main():
    master = json.loads((BASE / "transcript-raw/transcript-master.json").read_text())
    sents = master["sentences"]
    total = master["chunks"][-1]["end"]

    ocr = {}
    ocr_file = BASE / "frames/frames-ocr.tsv"
    if ocr_file.exists():
        with open(ocr_file, newline="") as f:
            for row in csv.DictReader(f, delimiter="\t"):
                t = int(row["t_seconds"])
                txt = " | ".join(x for x in (row["ocr_full"], row["ocr_bottom"]) if x)
                if txt:
                    ocr.setdefault(t, txt)

    n_windows = (int(total) + WINDOW - 1) // WINDOW
    for w in range(n_windows):
        t0, t1 = w * WINDOW, min(total, (w + 1) * WINDOW)
        lo, hi = t0 - OVERLAP, t1 + OVERLAP
        lines = [
            f"# transcript slice {w:02d}",
            f"window: t={t0}..{t1} ({fmt_hms(t0)}..{fmt_hms(t1)} video time; "
            f"{fmt_wall(t0)}..{fmt_wall(t1)} ET)",
            f"(60 s overlap on each side is included; treat content near the "
            f"edges as shared with neighboring slices)",
            "",
            "## on-screen OCR text (frame every 120 s, full frame | bottom third)",
            "",
        ]
        for t in sorted(ocr):
            if t0 - 130 <= t <= t1 + 130:
                lines.append(f"- t={t} ({fmt_wall(t)}): {ocr[t][:400]}")
        lines += ["", "## transcript", ""]
        for s in sents:
            if lo <= s["t_start"] <= hi:
                lines.append(f"[{fmt_hms(s['t_start'])}] {s['text']}")
        out = SLICES / f"slice_{w:02d}.txt"
        out.write_text("\n".join(lines) + "\n")
        print(f"{out.name}: {t0}..{t1}, {len(lines)} lines")

    # compact agenda reference
    agenda = json.loads((BASE / "agenda/agenda-2026-10-13.json").read_text())
    aref = ["# agenda reference (2026-10-13), t = video seconds (t=0 == 08:47:52 ET)", ""]
    for it in agenda["items"]:
        names = []
        for p in it["speakers"]:
            if isinstance(p, dict):
                names.append(f"{p['name']} ({p.get('company') or '?'})")
            else:
                names.append(str(p))
        spk = ", ".join(names) or "(none listed)"
        note = f"  NOTE: {it['note']}" if it.get("note") else ""
        aref.append(
            f"- t={it['t']:>5}-{it['t_end']:>5} {it['wall']}-{it['wall_end']} ET "
            f"[{it['type']}] {it['title']} -- {spk}{note}")
    (SLICES / "agenda-reference.txt").write_text("\n".join(aref) + "\n")
    print("wrote agenda-reference.txt")

if __name__ == "__main__":
    main()
