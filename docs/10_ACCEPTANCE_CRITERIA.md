# Definition of done — must verify

**A. Content accuracy**
- [ ] Super App and T-Folio identities distinguished.
- [ ] All 4 pillars and 4R clearly explained.
- [ ] Slides 01–17 read and represented in product story.
- [ ] T-Folio teacher/admin/approval flows correctly depicted.
- [ ] Metaverse statistics explicitly scoped to Metaverse and labeled reported, not universal or causal.
- [ ] HIS 20-teacher activity is described as a goal/plan when evidence is not conclusive.
- [ ] Clear evidence/sources panel for headline facts.

**B. Real cinematic interaction**
- [ ] Hero includes visible real WebGL object movement (not just CSS perspective).
- [ ] At least TWO independently staged meaningful 3D chapters: ecosystem separation and T-Folio exploded workflow.
- [ ] Scroll advances and reverses corresponding 3D transforms, reproducibly and smoothly.
- [ ] Mobile scroll noticeably changes scene (camera/scale/depth/assembly) within first two swipes.
- [ ] Desktop + mobile motion narratives both designed; no simple layout squeeze.
- [ ] Presentation mode controls same scene state as Explore mode.

**C. Product polish**
- [ ] Authentic logos, clean black + emerald/cyan palette, Thai typography, Lucide only.
- [ ] Real T-Folio UI rather than fake AI dashboard.
- [ ] Hierarchy, spacing, animation rhythm meet premium product standards.
- [ ] Reduced motion / no WebGL / low performance fallbacks legible.

**D. Testing / release**
- [ ] `npm ci` (or initial `npm install`), `typecheck`, `lint`, `build` all pass.
- [ ] Browser smoke tests confirm controls and no 404s/errors on 390×844 and 1440×900.
- [ ] No source-private materials in `dist`, tracked git files or network paths.
- [ ] `.github/workflows/deploy-pages.yml` builds `dist` and deploys to GH Pages.
- [ ] Live URL actually verified if access permits; do not claim success otherwise.
- [ ] `progress.md` includes verifiable evidence and known limitations.
