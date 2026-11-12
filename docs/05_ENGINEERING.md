# Engineering architecture and deployment

## Required stack
- Vite + React + TypeScript, ESM and modern browser build.
- Three.js + `@react-three/fiber` + `@react-three/drei` for interactive 3D and instancing; avoid hand-coded DOM fake 3D as the primary animation.
- GSAP + ScrollTrigger (responsive `matchMedia`/timeline scrubbing) for motion and camera state; use `useGSAP` with proper teardown if `@gsap/react` installed.
- Lucide React for icons; Tailwind optional (prefer a deliberate visual system, not utility class soup).
- GitHub Actions → GitHub Pages (`dist` static output), no backend and no secrets.
- Fonts: modern Thai-first; self-hosted optimized fonts if license permits, else reliable CSS fallbacks. Never include copied binary font files from unsupported sources.

## Layout architecture (suggestion)
```
src/
  app/App.tsx
  components/Nav.tsx, PresentationControls.tsx, ChapterShell.tsx
  scenes/SceneCanvas.tsx, DigitalCore.tsx, TfolioExploded.tsx
  motion/useScrollChoreography.ts
  content/data.ts
  styles/tokens.css, global.css
  utils/basePath.ts, perf.ts
public/
  hongson-assets/logos/
  hongson-assets/screenshots/        # only reviewed/redacted exports
  models/                          # user-created or open-licensed GLB files
```

## Animation architecture
- Consolidate animation in one timeline keyed by chapter progress; avoid creating new ScrollTriggers on every render.
- If R3F frame updates read GSAP values, update meshes/camera by references on the render loop and invalidate appropriately. No per-frame React state re-render.
- Avoid multiple WebGL canvases and expensive postprocessing chains on mobile. Use Drei instances for repeated meshes/particles.
- Load 3D components on demand; keep poster/HTML content visible while assets load.
- When WebGL missing, display readable HTML + 2D editorial motion, not a black blank screen.

## Asset URLs on GitHub Pages
Never hardcode `/assets/foo.glb` for a repository site served under `/REPO/`. Use Vite `import.meta.env.BASE_URL` for public assets, e.g. `${import.meta.env.BASE_URL}models/core.glb` or imported assets from `src`. Choose `base` dynamically via VITE_BASE_PATH supplied by workflow. Do not use BrowserRouter with history fallback unless you implement GitHub Pages SPA fallback; anchor sections or HashRouter are safer.

## GitHub Pages workflow
`/.github/workflows/deploy-pages.yml` already provided. It:
1. checks out, sets up Node, installs via `npm ci`, builds Vite,
2. auto-detects repository name for base path,
3. uploads `dist` using Pages artifact action,
4. deploys via Pages action.

Agent must create/package-lock.json via npm install, and verify Settings → Pages → Source = GitHub Actions. Ensure repo is public or account is eligible for private Pages. Workflow has no secrets and does not require a PAT.

## Deployment URLs
- Standard repo: `https://USERNAME.github.io/REPO/` with base `/REPO/`.
- User/org Pages repo (`USERNAME.github.io`): URL root with base `/`.
- Custom domain, if requested and owner verifies DNS: base `/`, public `CNAME` with exact domain, GitHub Pages settings. Do NOT automatically hijack `hongson.one`; prefer separate `showcase.hongson.one` only with explicit approval.

## Useful docs
- `https://vite.dev/guide/static-deploy`
- `https://docs.github.com/en/pages`
- `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
- `https://r3f.docs.pmnd.rs/`
