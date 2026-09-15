"use client";

import { useEffect, useRef } from "react";
import { animate, m, useInView, useMotionValue, useTransform } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { DURATION, EASE } from "@/lib/motion";
import { useLowEnd } from "@/lib/useCapability";

export default function CountUp({
  to,
  decimals = 0,
}: {
  to: number;
  decimals?: number;
}) {
  const reduceMotion = useReducedMotion();
  const lowEnd = useLowEnd();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  // Keep the correct SSR value visible if the observer never fires.
  const count = useMotionValue(to);
  const text = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion || lowEnd) {
      count.set(to);
      return;
    }
    count.set(0);
    const controls = animate(count, to, { duration: DURATION.reveal, ease: EASE });
    return () => controls.stop();
  }, [inView, reduceMotion, lowEnd, count, to]);

  return <m.span ref={ref}>{text}</m.span>;
}
