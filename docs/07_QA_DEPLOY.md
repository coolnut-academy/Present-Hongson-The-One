# Release and deployment checklist

## Before writing
- [ ] `git status`, existing files, remote and default branch inspected.
- [ ] README/AGENTS/specs and all 17 T-Folio slides read.
- [ ] Private sources kept out of Git and `public`.
- [ ] A 1-chapter vertical-slice proof of real 3D scrub implemented and tested on a mobile viewport.

## Build and content
- [ ] Project uses Vite React TS and package-lock.json committed.
- [ ] `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build` pass (create scripts if needed).
- [ ] No missing or external hotlinked private images.
- [ ] All public numbers scoped and labelled.
- [ ] No personal identifiable data exposed in screenshots.
- [ ] All lucide-react icons render; no emojis/placeholder broken glyphs.
- [ ] Presentation mode forward/back and progress work.
- [ ] Explore mode scrub really moves the camera/meshes on mobile.
- [ ] WebGL fallback and reduced motion work.
- [ ] No horizontal overflow, 404, or console errors on target sizes.

## GitHub Pages
- [ ] `VITE_BASE_PATH` computed correctly for repo site vs user site vs custom domain.
- [ ] Set GitHub Settings → Pages → Source = GitHub Actions.
- [ ] Never commit `reference-private` or raw snapshots with student/teacher personal data.
- [ ] GitHub Actions `deploy-pages.yml` green.
- [ ] Visit published URL and check image paths, code chunks, scroll and 3D.
- [ ] Capture final desktop and mobile screenshots.
- [ ] Update `progress.md` with build/test results, commit SHA, workflow run URL and verified live URL.

## If credentials/remote are unavailable
Finish local app, run tests and commit if appropriate. Explain **exact missing blocker** (e.g. repository URL/auth or Pages settings) and supply precise commands. Do not claim successfully deployed.
