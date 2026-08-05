import type { Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.2,
  medium: 0.35,
  reveal: 0.6,
  heroLine: 0.7,
} as const;

export const HERO_DELAYS = {
  line1: 0.15,
  line2: 0.28,
  sub: 0.5,
  meta: 0.68,
  cta: 0.85,
} as const;

export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION.reveal, ease: EASE } },
};
