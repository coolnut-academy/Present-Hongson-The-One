# Design system — Cyberpunk Education / Cinematic Editorial

This isn't "generic AI cyberpunk with green glowing card grids". References: high-end product campaigns, technical journals, precise science museums. The webpage's best effect must come from model lighting, deliberate camera motion, meaningful content and typography.

## Foundation colors (suggested, tune by eye)
- Void: `#050A0E` black-blue / charcoal; Base: `#0A1117`; Elevated: `#101B23`.
- Headline: `#F5FAF8`; Secondary: `#A3B5B3` (maintain accessible contrast).
- Emerald Signal: `#00D6A3`; Cyan Data: `#52CFE5`; Muted Violet: `#9673E6` (only special accent).
- Hairline/stroke: `rgba(153,203,192,.18)`; use gradients sparingly and locally.
- Lighting: low-key dark studio, subtle volumetric haze as compositing/3D asset, not large CSS blurry neon patches.

## Typography
- Thai: `IBM Plex Sans Thai` (or `Noto Sans Thai` if rendering issues). Latin: `Geist` or `Inter`.
- Headline on desktop: approx 72–110px using `clamp`, mobile 42–64px; Thai headlines with proper line-height ~1.12–1.3, controlled wraps; body 16–19px.
- Use bold but disciplined hierarchy. Short precise labels. Large empty space to build momentum.
- Never rely on giant decorative words covering the UI image; do not cram too many words in one viewport.

## Icons
**Lucide React only** (or hand-designed SVG for schematic diagrams; no icon packs, emojis, 3D icon stickers). Default stroke 1.5–1.75, sizes 18/20/24, coherent icon names. Do not use brand logos as Lucide icons.

## Component grammar
Navigation is subtle (wordmark/logo, section progress, chapters/menu, Explore/Present). Avoid generic cards for every capability; use editorial columns, evidence gallery, product device shots, technical diagram only when warranted. Interaction affordances must be obvious.

## Scene materials
Physical objects: anodized black metal, smoked glass, realistic reflections, translucent optical layers. Use GLB/glTF + compressed textures where warranted. T-Folio product UI should be *real screenshot* on a clear UI surface; do not generate fantasy dashboards to replace evidence. Keep authentic logo legible (source is a raster PNG, not an editable 3D mesh).

## Style exclusions
No emoji iconography; no fake futuristic HUD clutter; no endless repeating green borders; no generic AI students in every scene; no auto-generated watermarked imagery; no illegible English microtext; no fake quantified impact. Avoid excessive bloom that washes out the source logo.
