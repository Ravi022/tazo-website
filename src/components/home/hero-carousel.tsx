"use client";

import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Children, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

const ROTATION_MS = 9_000;

function subscribeReducedMotion(onChange: () => void) {
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  motion.addEventListener("change", onChange);
  return () => motion.removeEventListener("change", onChange);
}

function reducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function visibleSnapshot() {
  return !document.hidden;
}

type HeroCarouselProps = {
  names: readonly string[];
  children: ReactNode;
};

export function HeroCarousel({ names, children }: HeroCarouselProps) {
  const slides = Children.toArray(children);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, reducedMotionSnapshot, () => true);
  const visible = useSyncExternalStore(subscribeVisibility, visibleSnapshot, () => true);
  const [active, setActive] = useState(0);
  const [manualPlaying, setManualPlaying] = useState<boolean | null>(null);
  const [trackedMotion, setTrackedMotion] = useState(reducedMotion);
  const [hovered, setHovered] = useState(false);

  if (trackedMotion !== reducedMotion) {
    setTrackedMotion(reducedMotion);
    if (reducedMotion) setManualPlaying(false);
  }

  const playing = manualPlaying ?? !reducedMotion;

  useEffect(() => {
    if (!playing || hovered || !visible) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, [playing, hovered, visible, slides.length]);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(async () => {
      const images = Array.from(document.querySelectorAll<HTMLImageElement>(".campaign-hero-image"));

      for (const image of images.slice(1)) {
        if (cancelled) return;
        image.loading = "eager";
        try {
          await image.decode();
        } catch {
          // The native image remains available if decode fails.
        }
      }
    }, 500);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  function select(index: number) {
    setManualPlaying(false);
    setActive((index + slides.length) % slides.length);
  }

  return (
    <section
      className="hero-rotation product-rotation"
      aria-roledescription="carousel"
      aria-label="TAZO highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.closest("[data-rotation-control]")) setManualPlaying(false);
      }}
    >
      <div className="rotation-panels" aria-live={playing ? "off" : "polite"}>
        {slides.map((slide, index) => (
          <div
            key={names[index]}
            id={`hero-slide-${index}`}
            className="rotation-panel"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${names[index]}`}
            hidden={active !== index}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="rotation-controls wrap">
        <div className="rotation-selectors" role="group" aria-label="Choose a hero slide">
          {names.map((name, index) => (
            <button
              key={name}
              type="button"
              aria-label={`Show slide ${index + 1}: ${name}`}
              aria-pressed={active === index}
              aria-controls={`hero-slide-${index}`}
              onClick={() => select(index)}
            >
              <span>0{index + 1}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
        <div className="rotation-buttons">
          <span className="rotation-count">
            0{active + 1} / {String(slides.length).padStart(2, "0")}
          </span>
          <button type="button" aria-label="Previous slide" onClick={() => select(active - 1)}>
            <ArrowLeft size={17} />
          </button>
          <button
            type="button"
            data-rotation-control
            aria-label={playing ? "Pause automatic rotation" : "Start automatic rotation"}
            aria-pressed={playing}
            onClick={() => setManualPlaying(!playing)}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button type="button" aria-label="Next slide" onClick={() => select(active + 1)}>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
