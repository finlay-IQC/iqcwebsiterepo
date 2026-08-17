"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Subtle fade-in for section headers: 200ms, 8px translate, fires once.
 *
 * No animation library — one shared, rAF-throttled scroll listener across every
 * instance. A rect check is used rather than IntersectionObserver on purpose:
 * a fast flick-scroll can carry an element from below the viewport to above it
 * between two observer samples, which leaves the heading permanently invisible.
 * A rect check catches those elements because their top is simply above the
 * threshold by the time the next scroll event lands.
 *
 * Users with prefers-reduced-motion (and anyone without JS, via the <noscript>
 * override in the root layout) get the content immediately and statically.
 */

const pending = new Set<HTMLElement>();
let listening = false;

function reveal(el: HTMLElement) {
  el.dataset.visible = "true";
  pending.delete(el);
}

/**
 * Runs straight off the scroll event rather than inside requestAnimationFrame:
 * rAF callbacks are starved when the page isn't painting, which would leave
 * headings stuck at opacity 0. Scroll events are already coalesced by the
 * browser and this reads at most a handful of rects, shrinking to none.
 */
function check() {
  // Trigger just before the element is fully in view. Anything already level
  // with or above the viewport (negative top) is revealed immediately.
  const threshold = window.innerHeight * 0.92;
  pending.forEach((el) => {
    if (el.getBoundingClientRect().top < threshold) reveal(el);
  });
  if (pending.size === 0) stopListening();
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check, { passive: true });
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", check);
  window.removeEventListener("resize", check);
}

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      reveal(el);
      return;
    }

    pending.add(el);
    startListening();
    // Covers whatever is on screen at mount (including a restored scroll
    // position or a deep link) without waiting for the first scroll event.
    check();

    return () => {
      pending.delete(el);
      if (pending.size === 0) stopListening();
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
