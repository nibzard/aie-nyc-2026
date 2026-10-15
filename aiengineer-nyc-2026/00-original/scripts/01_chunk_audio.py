#!/usr/bin/env python3
"""Cut the 8h livestream audio into ~10 min chunks at silence boundaries.

Outputs 16 kHz mono Opus-in-OGG files plus a manifest JSON with exact
start/end times for every chunk. Chunk boundaries land on detected silences
so words are not cut mid-utterance.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

SRC = Path("/home/agent/ainy26/aiengineer-nyc-2026/00-original/media/akEqiXFo3GM-audio-hls.m4a")
OUT_DIR = Path("/home/agent/ainy26/aiengineer-nyc-2026/00-original/chunks")
OUT_DIR.mkdir(parents=True, exist_ok=True)
TARGET_LEN = 600.0   # seconds per chunk
WINDOW = 90.0        # search window around target boundary for a silence
SIL_DB = "-35dB"
SIL_DUR = "0.35"

def duration_of(path: Path) -> float:
    out = subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", str(path)])
    return float(out.strip())

def detect_silences(path: Path):
    """Return sorted list of silence midpoint times (seconds)."""
    proc = subprocess.run(
        ["ffmpeg", "-i", str(path), "-af",
         f"silencedetect=noise={SIL_DB}:d={SIL_DUR}", "-f", "null", "-"],
        capture_output=True, text=True)
    log = proc.stderr
    starts = [float(m) for m in re.findall(r"silence_start: ([\d.]+)", log)]
    ends = [float(m) for m in re.findall(r"silence_end: ([\d.]+)", log)]
    # midpoint of each silence region
    return [(s + e) / 2.0 for s, e in zip(starts, ends)]

def main():
    total = duration_of(SRC)
    print(f"total duration: {total:.2f}s", flush=True)
    silences = detect_silences(SRC)
    print(f"detected {len(silences)} silences", flush=True)

    # pick boundaries
    boundaries = [0.0]
    n_chunks_est = int(total // TARGET_LEN) + 1
    for i in range(1, n_chunks_est):
        target = i * TARGET_LEN
        if target >= total - 60:
            break
        lo, hi = target - WINDOW, target + WINDOW
        candidates = [s for s in silences if lo <= s <= hi]
        if candidates:
            # silence closest to target
            cut = min(candidates, key=lambda s: abs(s - target))
        else:
            cut = target
        # keep chunks within a sane length band and strictly increasing
        if cut - boundaries[-1] < 300.0:
            continue
        boundaries.append(round(cut, 3))
    boundaries.append(round(total, 3))

    manifest = {"source": str(SRC), "total_duration": total,
                "target_len": TARGET_LEN, "chunks": []}
    for idx in range(len(boundaries) - 1):
        start, end = boundaries[idx], boundaries[idx + 1]
        dur = end - start
        name = f"chunk_{idx:03d}"
        ogg = OUT_DIR / f"{name}.ogg"
        if not ogg.exists():
            subprocess.run([
                "ffmpeg", "-y", "-v", "error",
                "-ss", str(start), "-t", str(dur), "-i", str(SRC),
                "-ac", "1", "-ar", "16000",
                "-c:a", "libopus", "-b:a", "32k",
                str(ogg)], check=True)
        size = ogg.stat().st_size
        manifest["chunks"].append({
            "index": idx, "name": name, "file": str(ogg),
            "start": round(start, 3), "end": round(end, 3),
            "duration": round(dur, 3), "bytes": size})
        print(f"{name}: {start:9.2f} -> {end:9.2f}  ({dur:7.2f}s, {size} B)",
              flush=True)

    with open(OUT_DIR / "manifest.json", "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"wrote manifest with {len(manifest['chunks'])} chunks", flush=True)

if __name__ == "__main__":
    sys.exit(main())
