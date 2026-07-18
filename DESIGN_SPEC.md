# Portfolio Design Specification

Source inspected in the user's open Chrome/Figma tab on 2026-07-18:
`Personal website | Portfolio (Community)` — Design page, desktop and mobile frames.

## Artboards and responsive behavior

- Desktop reference: 1440 px wide, 6457 px tall.
- Mobile reference: iPhone 14/15 Pro Max proportion.
- Desktop content is centered in a roughly 1180–1200 px container.
- Mobile changes every multi-column area to one column, keeps the orange accent, and uses a compact menu.
- Section rhythm is generous: approximately 96–120 px vertical padding on desktop and 64–80 px on mobile.

## Visual system

- Page background: near-black `#121212`.
- Raised surfaces: charcoal `#191919` to `#202020`.
- Primary text: warm white `#F5F3EF`.
- Secondary text: muted gray near `#9B9892`.
- Accent: vivid orange near `#FF6A00`.
- Borders: subtle white at 8–12% opacity.
- Typography: bold geometric sans-serif headlines, compact uppercase labels with tracking, neutral sans-serif body copy.
- Headings use tight line-height and large scale; orange is used selectively, never for full paragraphs.
- Decorative language: thin outlines, orange rings, oversized outline words, and diagonal orange stripe bands between major sections.

## Page anatomy

1. **Header** — monogram, five anchor links, orange CTA on desktop, menu button on mobile.
2. **Hero** — role statement and CTAs, monochrome portrait treatment, then experience/project/client metrics.
3. **Services** — centered heading and six dark cards in a 3 × 2 desktop grid.
4. **About** — portrait, biography and CTA, then five circular skill meters.
5. **Portfolio** — category pills and six visual project cards in a 3-column desktop grid.
6. **Contact** — contact details paired with a dark input form.
7. **Footer** — monogram, positioning statement, anchor links, and copyright.

## Interaction rules

- Navigation and CTAs scroll to real sections.
- Mobile menu reports its expanded state accessibly.
- Portfolio filters update the visible cards and `aria-pressed`.
- Native form validation is retained. The static build does not claim to send data until an endpoint is configured.
- Hover and focus states use orange; motion is disabled for visitors who prefer reduced motion.

## Implementation checklist

- [x] Desktop and mobile layouts
- [x] Figma-derived colors, spacing, cards, and decorative treatment
- [x] Correct UTF-8 punctuation and arrow characters
- [x] Working mobile navigation
- [x] Working accessible portfolio filters
- [x] Honest static contact-form state
- [x] Visible keyboard focus and skip link
- [ ] Replace portrait placeholders with the owner's licensed portrait files
- [x] Use supplied Spa System and Finance App screenshots in the correct project cards
- [x] Generate portfolio, architecture, team-workspace, and travel artwork for the remaining cards
- [x] Add MatAble CRM, Land & Home Investment, MediLab Hospital Management, and AL MAALI Tailoring ERP as real projects
- [x] Add a Business Systems filter for ERP, CRM, finance, healthcare, spa, and investment work
- [ ] Replace project contact links with final case-study destinations
- [ ] Add final social URLs, email, CV file, and contact-form endpoint

## Asset policy

The Figma file displays portrait and project imagery, but those source assets are not committed to this repository. The implementation uses deliberate monochrome and abstract placeholders instead of copying inaccessible imagery. Replace them through the clearly named HTML elements when final assets are available.
