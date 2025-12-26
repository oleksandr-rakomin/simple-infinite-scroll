# Simple infinite scroll

### Low Complexity — ~5 hours

- Implement the base `InfiniteScroll` component (Next.js + `next/image`)
- Duplicate items list for seamless loop (`[...list, ...list]`)
- Add basic layout styles (`overflow-hidden`, horizontal flex, spacing via `gap-x-*`)
- Add stable keys for cloned items (`key={`${item.id}-${idx}`}`)
- Accessibility basics:
  - Hide cloned items from assistive tech (`aria-hidden` on clones)
  - Ensure meaningful `alt` text for each logo (or empty alt if decorative)

---

### Medium Complexity — ~10 hours

- Motion accessibility:
  - Respect `prefers-reduced-motion` (e.g., `motion-reduce:animate-none` + CSS fallback)
- Better UX polish:
  - Pause animation on hover (and optionally `focus-within` for future interactive content)
  - Add optional section label/heading for screen readers (`aria-label` / `aria-labelledby`)
- Styling hardening:
  - Use container-based spacing (`gap`) only (avoid per-item margins)
  - Add `will-change: transform` to reduce jitter on some devices
- Props improvements:
  - Control duration/speed via prop (e.g., `durationMs` or CSS var)
  - Allow optional sizing (`itemSize`) and background overrides

---

### High Complexity — ~22 hours

- Robust, production-ready marquee behavior:
  - Dynamic duration based on content width (consistent perceived speed)
  - Handle edge cases (very short lists, single logo, mixed image sizes/aspect ratios)
  - Support multiple rows / directions / reverse mode
- Advanced accessibility:
  - Clear semantics depending on intent (decorative vs “partners” list)
  - Ensure no duplicate announcements across assistive tech + browsers
- Performance + quality:
  - Avoid unnecessary DOM duplication where feasible
  - Image optimization strategy (priority/lazy, sizes strategy, remote domains config)
  - Cross-browser testing (Safari/iOS), reduced-motion testing, basic unit/e2e checks
