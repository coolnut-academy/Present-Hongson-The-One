# HONGSON THE ONE — START HERE

**Purpose:** Build a production-quality, dark cyberpunk, cinematic scroll-driven **presentation website** for HONGSON THE ONE (a Thai secondary school's Super App ecosystem), with HONGSON T-Folio as its flagship product, and deploy it to **GitHub Pages**.

**THIS IS A PROJECT HANDOFF KIT, NOT THE FINISHED WEBSITE.** It contains verified reference material, logos, a 49-page report PDF, 17 T-Folio slides, 27 HONGSON THE ONE presentation/evidence images, editorial copy, design + motion constraints, a deployment workflow and the full build prompt. The coding agent must implement the website.

## Start order (mandatory)
1. Read `AGENTS.md`, `PROMPT_FOR_AGENT_TH.md` and all docs under `docs/`.
2. Review `content/site-content.json`, the logos in `public/hongson-assets/logos/`, and `reference-private/tfolio-slides/` (17 slides), plus the separate `reference-private/hongson-one-deck/` (27 images). Inspect selected pages of the report PDF.
3. Inspect existing repository before creating/replacing project files. If it has a project, integrate safely. If empty, initialize Vite + React + TypeScript.
4. Write and maintain root `plan.md`, `implement_plan.md`, `progress.md` during work.
5. Implement a complete cinematic site with **actual R3F/Three.js 3D + GSAP ScrollTrigger**, optimized for touch/mobile. Add a meaningful fallback for reduced motion and weak WebGL.
6. Run quality gates, fix errors, and push/deploy to GitHub Pages **if repository permission and authentication permit**. Never claim deployment without verifying the live URL.

## What to tell the coding agent
Copy the full text of `PROMPT_FOR_AGENT_TH.md` as your first instruction, or use the shorter prompt provided in the ChatGPT answer.

## Folder map
- `docs/` — authoritative brief, source provenance, scene design, performance, security, deployment, and acceptance criteria.
- `content/site-content.json` — structured, sourced public claims and chapter metadata; not a complete content management system.
- `public/hongson-assets/logos/` — real optimized product logos safe to use in website UI.
- `reference-private/` — 49-page report + 17 original T-Folio slide PNGs + 27 HONGSON THE ONE deck/evidence JPEGs + original logos. **LOCAL-ONLY RESEARCH; excluded by nested .gitignore.** May contain photos/names/screenshots; must NOT be uploaded wholesale to a public repo or put under `public/`.
- `.github/workflows/deploy-pages.yml` — working structure for automated build/deploy once coding agent creates the Vite app and lockfile.
- `templates/vite.config.ts` — base-path handling example for GitHub Pages.
- `scripts/` — basic source integrity/asset checks.

## Deployment boundaries
GitHub Pages serves static files only. No secrets, server-side credentials, private APIs, or unprotected student/teacher records. The website is a public presentation site, **not** the production HONGSON THE ONE Super App. Do not overwrite the existing `hongson.one` service.

## Visual direction
Black graphite / emerald / restrained cyan-violet, high-end product cinematography, bold typography, legible Thai, Lucide icons **only**, real UI imagery, no fake achievements, no random glowing generic dashboards, no emoji icons. The real HONGSON logos should remain authentic, not be replaced by invented branding.

**Thai setup guide:** `SETUP_TH.md`.
