import type { Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.2,
  medium: 0.35,
  reveal: 0.6,
  heroLine: 0.7,
} as const;

export const HERO_DELAYS = {
  eyebrow: 0.05,
  line1: 0.25,
  line2: 0.37,
  line3: 0.52,
  meta: 0.75,
  cta: 0.95,
} as const;

export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION.reveal, ease: EASE } },
};
