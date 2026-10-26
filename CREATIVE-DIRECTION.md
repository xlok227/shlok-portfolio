# Creative direction — Shlok’s personal portfolio

## Central concept

**The work in progress** frames the portfolio as a record of learning through making. The line “Learning by building, and building to understand” is proposed site copy drawn from the supplied biography, not an asserted personal credo. The project should feel like an open notebook that has been composed with care: technical, warm, and still in motion.

## Rationale and reference notes

The identity combines oversized editorial typography, restrained grain, concise conversational copy, and a persistent chapter dock across five linked pages. A separate vinyl-inspired prologue is the landing page; activating its entry link opens the Signal chapter and portfolio. The record is an original CSS illustration and does not imply supplied audio. The visual language is original: Shlok’s supplied portrait establishes the Signal page, while a shader-lit sphere on the Horizon page echoes the Setu skills diagram and horizon forms. The motif links learning, skills, and opportunity without pretending to show the Setu product.

Two26 Studio was accessible. Its short, human copy and compact work presentation informed the tone and the direct project section. Ascension by Pegassi was accessible. Its dark, grainy atmosphere, oversized type, monochrome palette, and persistent player/menu informed the opening mood and interactive chapter dock; the layout, content, and visual assets remain original. Mild Sugar Design was not accessible in this research pass; the warm character, orange accents, and 3D-like presentation described in the supplied brief are treated as design hypotheses, not verified observations.

## Visual system

- **Carbon `#111311`:** primary background.
- **Warm ivory `#F4F0E8`:** primary text.
- **Electric lime `#B8F36B`:** active links, small emphasis, and diagram highlights.
- **Muted amber `#C88B5E`:** limited warmth in the vinyl introduction.
- **Stone `#92948A`:** secondary text and annotations.
- **Deep olive charcoal `#171A16` / `#20241E`:** project panel and tonal section shift.
- **Typography:** Space Grotesk for display, Inter for body, IBM Plex Mono for labels. Next.js `next/font` serves the fonts locally with `display: swap`.
- **Composition:** generous margins, long-form reading widths, thin dividers, asymmetrical hero, restrained section tints. No logos, icon library, generic gradient cards, or decorative stock imagery.

## Illustration and imagery

The landing page uses an original CSS vinyl illustration with concentric grooves, a label, and a tonearm. It rotates continuously; licensed user-provided music loops only after the visitor presses the audio button. Reduced-motion preferences disable decorative motion, and browser autoplay is not used. The Signal page uses Shlok’s supplied portrait, optimized as WebP and treated with a grayscale editorial crop. The Horizon page uses one original Three.js centerpiece: a gently displaced GLSL sphere, two orbiting rings, and a sparse field of points. Its shader and pointer response stay restrained, and a CSS fallback keeps the composition intact if WebGL is unavailable. The Setu section uses an original conceptual diagram marked as such, not a fabricated interface. No real project screenshots were supplied, so none are simulated. Add authentic screenshots only after they are provided or can be verified from the repository.

## Narrative chapters

0. **The introduction (`/`):** a vinyl-inspired visual introduces Shlok; the record rotates continuously and licensed music can be started or paused by the visitor.
1. **The Signal (`/portfolio`):** name, current identity, a concise invitation, and the supplied portrait. It opens immediately without a loading screen after the introduction.
2. **The Foundation (`/about`):** current degree and expected graduation, programming and frontend toolkit, E-Cell membership, and interests in product development and collaboration. Technologies are plain text and grouped by use rather than presented as proficiency scores.
3. **The Workshop (`/setu`):** Setu’s stated problem and intended approach, the supplied technology list, and Smart India Hackathon 2026 participation. The implementation, specific contribution, decisions, and outcomes remain unclaimed until verified.
4. **The Horizon (`/horizon`):** confirmed interests in frontend, practical AI, product thinking, and collaboration, expressed as areas to explore rather than a fixed career plan. The GLSL sphere provides the page’s visual anchor.
5. **The Connection (`/connect`):** the portfolio’s stated purpose and direct links to GitHub and LinkedIn; no hiring pitch or invented contact details.

## Motion storyboard

- **Opening:** a short GSAP timeline brings in the eyebrow, heading lines, supporting copy, actions, and portrait with small opacity/position changes. A fixed progress dock offers a direct route into the story and opens an animated chapter menu.
- **Vinyl introduction:** the record rotates continuously; a separate, clear link enters the portfolio.
- **Horizon motif:** the Three.js sphere rotates slowly with subtle pointer parallax; the GLSL shader adds restrained surface movement and light.
- **Chapter entrances:** GSAP ScrollTrigger reveals selected content once as it enters view; Locomotive Scroll v5 adds restrained Lenis interpolation while preserving normal page movement. Framer Motion is limited to the Setu heading and small technology interactions.
- **Horizon and diagrams:** static CSS/SVG geometry remains legible without motion.
- **Reduced motion:** `prefers-reduced-motion` skips the GSAP sequence and reduces CSS motion. Focus styles and link access do not depend on hover.

## Technical architecture

- Next.js App Router with React and strict TypeScript.
- Sass in one shared global stylesheet for the five linked pages.
- GSAP and ScrollTrigger, scoped through `@gsap/react`, for the entrance timeline and scroll reveals; Framer Motion handles a few small component interactions.
- Locomotive Scroll v5 (Lenis) shares GSAP's ticker for scroll interpolation and exits early for reduced-motion preferences.
- Three.js with a lightweight custom GLSL material for the single interactive 3D centerpiece.
- Next font optimization for Inter, Space Grotesk, and IBM Plex Mono.
- No backend, database, or CMS: the current content does not justify them. The project diagram remains lightweight SVG/CSS and the page prerenders statically.

## Performance and accessibility constraints

Keep the document useful before animation and when WebGL is unavailable. Preserve normal page movement, semantic landmarks and headings, meaningful link text, keyboard focus indicators, readable contrast, responsive type and layout, and reduced-motion handling. Avoid scroll hijacking, pinning sections, heavy shader work, and pointer-only interactions. Revisit contrast and device performance if richer imagery is added.

## Missing information and assets

- Setu repository content, working screenshots, and any live/demo URL.
- Shlok’s specific Setu responsibilities, implemented features, technical choices, challenges, iteration history, and verifiable outcomes.
- A confirmed reflection or lesson from building Setu.
- Authentic Setu screenshots or other project images, if they become available.
- A preferred public email address, only if one should appear on the site.
- More detail on E-Cell and Smart India Hackathon participation if the portfolio should explain either beyond the supplied statements.

## Verified facts, creative proposals, and unknowns

**Supplied personal facts used:** Shlok’s B.Tech in AI and Data Science at Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi, expected 2030; listed programming and web technologies; Setu’s stated purpose and technology list; Smart India Hackathon 2026 participation; E-Cell membership; GitHub and LinkedIn URLs; the goal of documenting work and building meaningful connections.

**Verified during research:** the GitHub profile page loaded and displayed one public repository named `boileplate-html`; the supplied Setu repository URL returned not found in the browser research tool. Two26 Studio and Ascension were accessible; Mild Sugar Design was not. No claims about the unavailable repository or page are presented as inspected facts.

**Creative proposals:** the wording “work in progress,” the evolving-form metaphor, chapter names, visual system, and motion behavior are art direction for the site. They are not presented as personal history or confirmed personal beliefs.

**Unconfirmed details intentionally omitted:** Setu’s delivered implementation, Shlok’s exact contribution and results, project lessons, long-term career ambitions, public email, testimonials, metrics, and project screenshots.
