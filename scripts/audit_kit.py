#!/usr/bin/env python3
"""Offline source/asset integrity check; does not perform deployment."""
from pathlib import Path
import json, hashlib
ROOT=Path(__file__).resolve().parents[1]
assert (ROOT/'AI_START_HERE.md').exists()
assert (ROOT/'content/site-content.json').exists()
data=json.loads((ROOT/'content/site-content.json').read_text(encoding='utf8'))
assert len(data['chapters']) >= 10
slides=sorted((ROOT/'reference-private/tfolio-slides').glob('slide-*.png'))
assert len(slides)==17, f"Expected 17 slides, got {len(slides)}"
one_slides=sorted((ROOT/'reference-private/hongson-one-deck').glob('frame-*.jpg'))
assert len(one_slides)==27, f"Expected 27 presentation/evidence images, got {len(one_slides)}"
assert (ROOT/'reference-private/report/HONGSON_THE_ONE_Report_2569.pdf').exists()
for f in ['hongson-the-one.webp','hongson-tfolio.webp']:
    assert (ROOT/'public/hongson-assets/logos'/f).exists()
print('PASS: source kit complete (17 T-Folio slides, 27 ONE presentation/evidence frames, report, logos, content, workflow)')
for p in [ROOT/'reference-private/report/HONGSON_THE_ONE_Report_2569.pdf', ROOT/'public/hongson-assets/logos/hongson-the-one.webp']:
    print(p.relative_to(ROOT), p.stat().st_size, hashlib.sha256(p.read_bytes()).hexdigest()[:16])
