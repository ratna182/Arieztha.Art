"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  m,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { DURATION, EASE } from "@/lib/motion";

export default function CountUp({
  to,
  decimals = 0,
}: {
  to: number;
  decimals?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      count.set(to);
      return;
    }
    const controls = animate(count, to, { duration: DURATION.reveal, ease: EASE });
    return () => controls.stop();
  }, [inView, reduceMotion, count, to]);

  return <m.span ref={ref}>{text}</m.span>;
}
