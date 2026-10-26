"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Locomotive Scroll v5 uses Lenis while preserving native scrolling. Keeping it
 * on the GSAP ticker gives ScrollTrigger and the smooth-scroll interpolation a
 * single animation clock.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let scroll: { destroy: () => void } | undefined;

    const initialize = async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      if (cancelled) return;

      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.085,
          smoothWheel: true,
        },
        scrollCallback: () => ScrollTrigger.update(),
        initCustomTicker: (render) => gsap.ticker.add(render),
        destroyCustomTicker: (render) => gsap.ticker.remove(render),
      });
    };

    void initialize();
    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return null;
}
