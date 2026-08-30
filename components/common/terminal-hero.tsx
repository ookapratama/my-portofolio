"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

interface TerminalHeroProps {
  text: string;
  /** Delay before typing starts, in ms. Sync this with any wrapping fade-in
   * animation's delay — otherwise typing finishes before it's even visible. */
  startDelayMs?: number;
}

const TYPE_SPEED_MS = 55;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};

  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function TerminalHero({ text, startDelayMs = 0 }: TerminalHeroProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[TerminalHero] prefers-reduced-motion:", reducedMotion);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      setTypedText("");
      intervalId = setInterval(() => {
        i += 1;
        setTypedText(text.slice(0, i));
        if (i >= text.length && intervalId) clearInterval(intervalId);
      }, TYPE_SPEED_MS);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, reducedMotion, startDelayMs]);

  const displayed = reducedMotion ? text : typedText;

  return (
    <span className="inline-flex flex-col items-center gap-1 font-mono">
      <span className="text-xs font-normal tracking-wide text-muted-foreground sm:text-sm">
        $ whoami
      </span>
      <span>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">
          {displayed}
          <motion.span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.1em] bg-current"
            animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: 1,
                    times: [0, 0.5, 0.5, 1],
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          />
        </span>
      </span>
    </span>
  );
}
