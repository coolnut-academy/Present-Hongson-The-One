# IMPLEMENTATION PLAN — maintained by coding agent

## Phase 0 — Audit
- [x] Repo inspected: Vite + React + TypeScript initialized, git remote `origin` verified.
- [x] Read primary PDF/report (49 pages), 17 T-Folio slide PNGs, and 27 HONGSON THE ONE presentation deck images.
- [x] Reviewed branded authentic logo variants (`hongson-the-one.webp`, `hongson-tfolio.webp`).
- [x] Verified safe public assets; sanitized and generated WebP UI screenshots with privacy masks; excluded `reference-private/` via `.gitignore`.

## Phase 1 — Application foundation
- [x] Initialized Vite React TS, package-lock.json created and committed.
- [x] Established design system (Cyberpunk education tokens: Void, Emerald, Cyan, Violet, IBM Plex Sans Thai, Geist/Inter).
- [x] Confirmed Vite base path handling (`VITE_BASE_PATH` / `./`) and static public assets in `dist/`.

## Phase 2 — Cinematic vertical slice
- [x] Rendered WebGL 3D Canvas via React Three Fiber + Drei + Three.js.
- [x] Designed distinct Mobile portrait camera tracks vs Desktop tracks in `CameraRig.tsx`.
- [x] Implemented scroll scrubbing and GSAP ScrollTrigger orchestration for bidirectional navigation.

## Phase 3 — Narrative & Scenes
- [x] Implemented all 12 narrative chapters from Storyboard:
  - 00 Digital Genesis (Hero, Data Core)
  - 01 The Problem (Pain points, fragmented tools)
  - 02 One Digital Ecosystem (Super App architecture)
  - 03 4 Pillars (WORK, LEARN, CREATE, SHARE)
  - 04 People & Access (Teacher Creator, Student Maker, Admin Audit)
  - 05 Enter T-Folio (Flagship WebApp reveal)
  - 06 T-Folio 4R Exploded (Record, Review, Retrieve, Report layered 3D depth)
  - 07 Product Tour (6-step teacher workflow & real sanitized UI tabs)
  - 08 Governance & Approval (Multi-tier pipeline & 6 admin modules)
  - 09 Hongson Metaverse (Roblox 7-district cultural museum & beacons)
  - 10 Evidence & Impact (Scoped Metaverse metrics with strict provenance label)
  - 11 The Next Horizon (HIS Sandbox plans, CTA to hongson.one)
- [x] Built Presentation Mode controls (Next/Prev, Step indicator, Keyboard navigation, Presenter Notes).
- [x] Built Evidence & Provenance Drawer with detailed citations and provenance badges (Observed, Reported, Planned, Expected).

## Phase 4 — Productionization
- [x] Tested responsive layouts (Mobile 390x844, Desktop 1440x900).
- [x] Optimized chunk splitting (three-vendor, gsap-vendor, ui-vendor).
- [x] Added 2D ambient fallback for devices with no WebGL or `prefers-reduced-motion`.
- [x] Verified `npm run typecheck` (0 errors) and `npm run build` (0 errors).

## Phase 5 — Deployment
- [ ] Browser smoke test verification via browser subagent.
- [ ] Commit all changes to git branch `main`.
- [ ] Push to remote `coolnut-academy/Present-Hongson-The-One`.
- [ ] Verify GitHub Actions workflow and GitHub Pages deployment.
