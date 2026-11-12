# Mobile performance, a11y and failure modes

## Core user complaint to fix
Prior prototype's mobile scroll felt almost stationary. **Do not simply shrink desktop.** Mobile needs a separate directed camera storyboard and meaningful changes in visible object scale/orientation/depth tied to each swipe. Test real iOS Safari where possible.

## Technical constraints
- Prioritize stable frame pacing; target 60 FPS on capable phones, gracefully scale to 30 FPS on weak phones. Do not guarantee FPS without measurement.
- DPR dynamic cap (e.g. 1–1.5 initially on mobile), reducing on measured slowdown; use on-demand rendering if scenes allow.
- Optimize geometry, material complexity, shadow count, particle count, texture sizes, batch draw calls, preload near the chapter.
- Compress models/textures (glTF/GLB, meshopt/Draco, KTX2 when supported) if benefits justify loader size; fallback always works.
- Avoid giant 4K texture loading and heavy postprocessing blooms on mobile. Keep full-screen bloom subtle and optional.
- No horizontal overflow, no fixed overlays obscuring buttons, use `100svh`/`100dvh` appropriately, respect safe area.
- ScrollTrigger pinning can be affected by iOS browser chrome/resizes: handle refresh, resizing and orientation changes, consider sticky Canvas; avoid body scroll lock.
- Honor `(prefers-reduced-motion: reduce)` and accessible skip animation/scroll to content.
- Touch target >=44px, semantic HTML headings, meaningful alt for product imagery, sufficient contrast, keyboard accessible nav.
- Content readable if canvas disabled, slow network, JavaScript lag; user can still understand the showcase.

## Measurable testing matrix
- iPhone-like: 390×844, 360×800 (touch simulation), portrait.
- iPad portrait: 768×1024.
- Desktop: 1440×900 and 1920×1080.
- Desktop keyboard; Android Chrome emulation; iOS Safari if device available.
- Test forward scroll, reverse, rapid gestures, orientation change, navigation jump, reload at section anchor, reduced motion, no-WebGL fallback.

## Diagnostics
- Record browser console errors (zero allowed), network 404s (zero), visible frame hitching, layout shifts, hydration/runtime issues.
- Use `window.devicePixelRatio` and browser performance panels for evidence; do not fabricate Lighthouse or FPS scores.
- Set indicative asset budgets, refine after testing: initial critical download ideally < 4MB and deferred 3D segments; large assets stream per scene.
