#!/usr/bin/env python3
"""Extract a frame every 120 s and OCR on-screen text (full frame + bottom third).

Produces frames/*.jpg and frames-ocr.tsv (t, ocr_full, ocr_bottom) for
cross-checking session boundaries against the agenda.
"""
import csv
import re
import subprocess
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

VIDEO = Path("/home/agent/ainy26/aiengineer-nyc-2026/00-original/media/akEqiXFo3GM-video-1080p60-hls.mp4")
FRAMES = Path("/home/agent/ainy26/aiengineer-nyc-2026/00-original/frames")
FRAMES.mkdir(parents=True, exist_ok=True)
STEP = 120
DUR = 29150

def extract(t: int):
    jpg = FRAMES / f"f_{t:05d}.jpg"
    full = FRAMES / f"f_{t:05d}_full.png"
    bot = FRAMES / f"f_{t:05d}_bot.png"
    if not jpg.exists():
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", str(t), "-i", str(VIDEO),
                        "-frames:v", "1", "-vf", "scale=960:-1", "-q:v", "4", str(jpg)],
                       check=True)
    # full-frame grayscale for OCR
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", str(t), "-i", str(VIDEO),
                    "-frames:v", "1", "-vf", "scale=1280:-1,format=gray",
                    str(full)], check=True)
    # bottom third, upscaled 2x for better OCR of lower-thirds
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", str(t), "-i", str(VIDEO),
                    "-frames:v", "1",
                    "-vf", "crop=iw:ih/3:0:2*ih/3,scale=iw*2:ih*2,format=gray",
                    str(bot)], check=True)
    ocr_full = subprocess.run(["tesseract", str(full), "stdout", "--psm", "6"],
                              capture_output=True, text=True).stdout
    ocr_bot = subprocess.run(["tesseract", str(bot), "stdout", "--psm", "6"],
                             capture_output=True, text=True).stdout
    full.unlink(missing_ok=True)
    bot.unlink(missing_ok=True)
    clean = lambda s: re.sub(r"\s+", " ", s).strip()
    return t, clean(ocr_full), clean(ocr_bot)

def main():
    times = list(range(0, DUR, STEP))
    rows = []
    with ThreadPoolExecutor(max_workers=6) as pool:
        for t, of, ob in pool.map(extract, times):
            rows.append((t, of, ob))
            print(f"{t}s done", flush=True)
    rows.sort()
    with open(FRAMES / "frames-ocr.tsv", "w", newline="") as f:
        w = csv.writer(f, delimiter="\t", quoting=csv.QUOTE_MINIMAL)
        w.writerow(["t_seconds", "ocr_full", "ocr_bottom"])
        w.writerows(rows)
    print("wrote", FRAMES / "frames-ocr.tsv")

if __name__ == "__main__":
    main()
