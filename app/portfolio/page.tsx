"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SiteShell from "../components/SiteShell";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".hero__eyebrow, .hero__title-line, .hero__copy, .hero__actions", {
        y: 28,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.12,
      })
      .from(".hero__portrait", { scale: 0.94, autoAlpha: 0, duration: 1.3 }, "-=0.8");
  }, { scope: heroRef });

  return (
    <SiteShell current={0}>
      <section className="hero signal-page" id="top" ref={heroRef} aria-labelledby="hero-title">
        <figure className="hero__portrait">
          <Image
            src="/images/shlok-portrait.webp"
            alt="Shlok, wearing glasses and a white shirt"
            fill
            priority
            sizes="(max-width: 800px) 82vw, 58vw"
          />
          <figcaption>SHLOK · NEW DELHI</figcaption>
        </figure>
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            <i className="status-dot" /> A student of how things come together
          </p>
          <h1 id="hero-title">
            <span className="hero__title-line">Work in</span>
            <span className="hero__title-line hero__title-line--indent">
              progress<span className="lime">.</span>
            </span>
          </h1>
          <p className="hero__copy">
            I’m Shlok — learning by building, and building to understand. I work on
            the frontend and explore how ideas become useful products.
          </p>
          <div className="hero__actions">
            <a className="text-link" href="/about">Enter the story <span>↓</span></a>
            <span className="hero__location">AI & DATA SCIENCE · NEW DELHI</span>
          </div>
        </div>
        <div className="hero__footer">
          <span>01 / 05</span>
          <span>SCROLL TO FOLLOW THE THREAD</span>
          <span>A LIVING DOCUMENT</span>
        </div>
      </section>
    </SiteShell>
  );
}
