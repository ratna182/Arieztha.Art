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

export const revealContainerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const revealContainerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const revealItemLight: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const revealItemUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const revealItemRow: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.medium, ease: EASE } },
};

export const revealItemX: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const revealItemZoom: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: DURATION.reveal, ease: EASE } },
};

function instant(variants: Variants): Variants {
  const out: Variants = {};
  for (const [key, value] of Object.entries(variants)) {
    if (value && typeof value === "object" && "transition" in value) {
      const { transition, ...target } = value;
      out[key] = {
        ...target,
        transition: transition
          ? { ...transition, duration: 0, staggerChildren: 0 }
          : { duration: 0, staggerChildren: 0 },
      };
    } else {
      out[key] = value;
    }
  }
  return out;
}

export const revealContainerInstant = instant(revealContainer);
export const revealContainerFastInstant = instant(revealContainerFast);
export const revealContainerSlowInstant = instant(revealContainerSlow);
export const revealItemInstant = instant(revealItem);
export const revealItemLightInstant = instant(revealItemLight);
export const revealItemUpInstant = instant(revealItemUp);
export const revealItemRowInstant = instant(revealItemRow);
export const revealItemXInstant = instant(revealItemX);
export const revealItemZoomInstant = instant(revealItemZoom);
