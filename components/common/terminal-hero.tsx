"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

interface TerminalHeroProps {
  text: string;
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

export function TerminalHero({ text }: TerminalHeroProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (reducedMotion) return;

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTypedText(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, TYPE_SPEED_MS);

    return () => clearInterval(id);
  }, [text, reducedMotion]);

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
