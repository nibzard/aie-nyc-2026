#!/usr/bin/env python3
"""Transcribe every chunk with two OpenAI models in parallel.

- gpt-transcribe  (latest, best text; no timestamps)  -> chunk_NNN.gpt.json
- whisper-1       (segment timestamps)                -> chunk_NNN.whisper.json

Resumable: existing output files are skipped. Retries 429/5xx with backoff.
"""
import json
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import requests

CHUNKS = Path("/home/agent/ainy26/aiengineer-nyc-2026-day2/00-original/chunks")
OUT = Path("/home/agent/ainy26/aiengineer-nyc-2026-day2/00-original/transcript-raw")
OUT.mkdir(parents=True, exist_ok=True)
API = "https://api.openai.com/v1/audio/transcriptions"
KEY = os.environ["OPENAI_API_KEY"]
WORKERS = 4

def transcribe(chunk_file: Path, model: str, extra: dict, out_path: Path):
    for attempt in range(6):
        try:
            with open(chunk_file, "rb") as f:
                files = {"file": (chunk_file.name, f, "audio/ogg")}
                data = {"model": model, "response_format": "json"}
                data.update(extra)
                r = requests.post(API, headers={"Authorization": f"Bearer {KEY}"},
                                  files=files, data=data, timeout=900)
            if r.status_code == 200:
                out_path.write_text(r.text)
                return model, chunk_file.stem, "ok"
            if r.status_code in (429, 500, 502, 503, 504, 529):
                wait = min(120, 2 ** attempt * 5)
                print(f"{chunk_file.stem} {model}: HTTP {r.status_code}, "
                      f"retry in {wait}s", flush=True)
                time.sleep(wait)
                continue
            return model, chunk_file.stem, f"HTTP {r.status_code}: {r.text[:200]}"
        except Exception as e:  # noqa: BLE001
            wait = min(120, 2 ** attempt * 5)
            print(f"{chunk_file.stem} {model}: {e}, retry in {wait}s", flush=True)
            time.sleep(wait)
    return model, chunk_file.stem, "FAILED after retries"

def main():
    manifest = json.loads((CHUNKS / "manifest.json").read_text())
    jobs = []
    for c in manifest["chunks"]:
        cf = Path(c["file"])
        gpt_out = OUT / f"{c['name']}.gpt.json"
        whs_out = OUT / f"{c['name']}.whisper.json"
        if not gpt_out.exists():
            jobs.append((cf, "gpt-transcribe", {"prompt": "This is a recording of a live AI engineering conference in New York about AI agents, finance, and software. Transcribe exactly what is said."}, gpt_out))
        if not whs_out.exists():
            jobs.append((cf, "whisper-1", {"response_format": "verbose_json",
                                           "timestamp_granularities[]": "segment",
                                           "prompt": "This is a recording of a live AI engineering conference in New York about AI agents, finance, and software."}, whs_out))
    print(f"{len(jobs)} jobs to run", flush=True)
    if not jobs:
        return
    fails = []
    with ThreadPoolExecutor(max_workers=WORKERS) as pool:
        futs = {pool.submit(transcribe, *job): job for job in jobs}
        done = 0
        for fut in as_completed(futs):
            model, stem, status = fut.result()
            done += 1
            print(f"[{done}/{len(jobs)}] {stem} {model}: {status}", flush=True)
            if status != "ok":
                fails.append((stem, model, status))
    if fails:
        print("FAILURES:", json.dumps(fails, indent=2), flush=True)
        sys.exit(1)
    print("all done", flush=True)

if __name__ == "__main__":
    main()
