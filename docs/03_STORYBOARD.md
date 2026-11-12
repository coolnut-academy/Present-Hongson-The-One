# Scroll cinematic storyboard — 12 scenes (editable, not 12 separate pages)

Global behavior: One continuous narrative with a single `three.js` scene / Canvas or a carefully managed small number; use GSAP ScrollTrigger timelines with scrubbing and responsive camera tracks. Content text is HTML overlay, not a texture within WebGL. Chapters should be independently navigable via nav/URL hashes. Favor deliberate, legible compositions; avoid perpetual idle spins.

| # | Scene | What audience learns | Cinematic motion | Source |
|---|---|---|---|---|
| 00 | DIGITAL GENESIS | Brand, problem statement | Dim particles organize into actual HONGSON THE ONE logo on an elegant 3D mechanical/data core; slow cinematic reveal | C, A p1, D frames 01 & 26 |
| 01 | THE PROBLEM | Fragmented workflows and duplicated information | Dispersed real interfaces/abstract files approach each other; not cartoon garbage flying everywhere | A p8, B slide02 |
| 02 | ONE DIGITAL ECOSYSTEM | What is Super App | Data-core expands into four restrained orbital layers | A pp8–9 |
| 03 | WORK / LEARN / CREATE / SHARE | Four pillars | Scroll travels camera between four distinct 3D story locations; one central anchor | A pp8–9 |
| 04 | PEOPLE & ACCESS | Teacher, student, administration modes; App Center | Connected nodes change viewpoint into app entry portal; real screenshots (sanitize) | A pp9,22, D frame 22 |
| 05 | ENTER T-FOLIO | Flagship web app | Dramatic macro transition to authentic T-Folio logo, then real screen displayed on 3D glass plane | B 01/04/12–17 |
| 06 | T-FOLIO / 4R | Record, Review, Retrieve, Report | Evidence layers **physically separate**, 4 stages orbit and then merge into one file | A p22 |
| 07 | PRODUCT TOUR | Teacher workflow and real dashboard screens | Screen stack shifts with camera dolly, distinct smooth step changes, not flashing galleries | B 05, 12–17 |
| 08 | APPROVAL & GOVERNANCE | Admin + approval, RBAC, reporting | 3D flow path tracing Teacher→Deputy→Director→Completed; Revision branch | B 06–08 |
| 09 | HONGSON METAVERSE | Local identity and learning | Scene transforms into abstract Mae Hong Son topographic landscape / digital museum; authentic local references | A pp11, 26–29 |
| 10 | EVIDENCE & HUMAN IMPACT | Scoped study results + learning | Deliberate numeric transitions (12.85→16.37, 32 units, 485 sample) with "Metaverse only" disclaimer | A pp4,29 |
| 11 | FUTURE & CALL TO ACTION | HIS and ecosystem's direction, real portal link | Information reassembles into the ONE emblem, ambient light settles, clean CTA | A pp10,34 |

## Camera choreography
- Scroll progress (`0..1`) moves camera target and object transforms; primary content must respond visibly every ~1–2 viewport heights on phone.
- Desktop camera: broader horizontal movement, scene depth, partial rotations; Mobile camera: closer portrait framing, taller line-of-sight, substantially larger motions, adjusted object sizes and negative space for captions.
- Beat pattern within each scene: reveal (20%), meaningful motion (55%), settle + reading hold (25%). Avoid scrolling 3 full screens before anything moves.
- Make scroll smooth via native scrolling + GSAP scrub; Lenis only if tested and truly improves. On iOS native touch inertia should remain natural.
- Crossfades/particle bursts are accents, not every scene transition. Real exploded assembly should have visible 3D parallax and actual z-depth.
- Build from one **shippable hero vertical slice** first; test on a real phone before producing all chapters.

## Presentation mode
- Toggle between Explore (natural scroll) and Presentation.
- Presentation mode has next/previous chapters, progress 01/12, keyboard arrows/PageDown/PageUp, fullscreen optional, and optional presenter notes with source citations.
- Changing chapter should drive the **same** GSAP timeline/camera logic as scroll, not a separate simplified animation. Deep link to chapter via hash.
- Optional voiceover toggle can be provided only when a recording exists, never autoplay audio.

## Mobile design constraint
- Avoid a huge pinned scene with tiny motion. If pinning, keep pin durations short; allow user to exit naturally. If ScrollTrigger pin is unreliable in iOS Safari, choose sticky canvas + document scrolling with `useScroll`-like progress calculations.
- Responsive typography and safe-area padding; test 360×800, 390×844, 768×1024.
