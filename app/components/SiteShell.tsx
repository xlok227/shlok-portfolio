"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, useScroll } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SmoothScroll from "./SmoothScroll";

const chapters = [
  { href: "/portfolio", title: "The signal" },
  { href: "/about", title: "The foundation" },
  { href: "/setu", title: "The workshop" },
  { href: "/horizon", title: "The horizon" },
  { href: "/connect", title: "The connection" },
];

type SiteShellProps = {
  children: ReactNode;
  current: number;
};

export default function SiteShell({ children, current }: SiteShellProps) {
  const pageRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const previousMenuState = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const chapter = chapters[current];
  const nextChapter = chapters[(current + 1) % chapters.length];

  useEffect(() => {
    if (menuOpen) {
      firstMenuLinkRef.current?.focus();
    } else if (previousMenuState.current) {
      menuButtonRef.current?.focus();
    }
    previousMenuState.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const revealTargets = gsap.utils.toArray<HTMLElement>("[data-page-reveal]", pageRef.current);
    if (revealTargets.length === 0) return;
    gsap.from(revealTargets, {
      y: 24,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, { scope: pageRef, dependencies: [current], revertOnUpdate: true });

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <header className="topbar">
        <a className="topbar__name" href="/portfolio" aria-label="Shlok, portfolio home">
          Shlok<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/about" aria-current={current === 1 ? "page" : undefined}>About</a>
          <a href="/setu" aria-current={current === 2 ? "page" : undefined}>Setu</a>
          <a href="/connect" aria-current={current === 4 ? "page" : undefined}>
            Connect <span>↗</span>
          </a>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="story-menu"
            id="story-menu"
            aria-label="Chapter menu"
            initial={{ opacity: 0, clipPath: "inset(100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="story-menu__top">
              <span>CHAPTER INDEX · 01—05</span>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close chapter menu">
                Close <span>×</span>
              </button>
            </div>
            <div className="story-menu__links">
              {chapters.map((item, index) => (
                <motion.a
                  key={item.href}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  href={item.href}
                  aria-current={current === index ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 + index * 0.07 }}
                >
                  <span>0{index + 1}</span>
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">↗</span>
                </motion.a>
              ))}
            </div>
            <span className="story-menu__note">A LIVING DOCUMENT · SHLOK · NEW DELHI</span>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="page-shell" ref={pageRef}>
        {children}
      </main>

      <motion.div className="story-dock" role="group" aria-label="Portfolio navigation controls">
        <motion.div className="story-dock__progress" style={{ scaleX: scrollYProgress }} />
        <span className="story-dock__identity">
          0{current + 1} / 05 <i /> {chapter.title.toUpperCase()}
        </span>
        <a className="story-dock__enter" href={nextChapter.href}>
          NEXT CHAPTER <span>↓</span>
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className="story-dock__menu"
          aria-expanded={menuOpen}
          aria-controls="story-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE" : "MENU"} <span>{menuOpen ? "×" : "＋"}</span>
        </button>
      </motion.div>
    </MotionConfig>
  );
}
