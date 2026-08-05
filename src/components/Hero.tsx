"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BUSINESS } from "@/lib/data";
import { DURATION, EASE, HERO_DELAYS } from "@/lib/motion";
import WaButton from "@/components/WaButton";

function MaskedLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <m.span
        initial={reduceMotion ? false : { y: "110%" }}
        animate={reduceMotion ? undefined : { y: 0 }}
        transition={{ delay, duration: DURATION.heroLine, ease: EASE }}
        className="block will-change-transform"
      >
        {children}
      </m.span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="top" className="relative">
      <div
        ref={bannerRef}
        className="relative aspect-[16/9] w-full overflow-hidden bg-sky-900 sm:aspect-[21/9] md:aspect-[3/1]"
      >
        <m.div
          style={reduceMotion ? undefined : { y: parallaxY }}
          className="absolute inset-x-0 -inset-y-10"
        >
          <Image
            src="/cover-aris.webp"
            alt="Hasil cetak Arieztha.Art Percetakan Yasin Bekasi"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </m.div>
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/40 to-sky-900/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-24 rounded-2xl border border-white/10 bg-white/95 p-6 shadow-xl backdrop-blur sm:-mt-28 sm:p-10 md:-mt-32 lg:p-12 dark:bg-night-900/95">
          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: HERO_DELAYS.eyebrow, duration: 0.45, ease: EASE }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300"
          >
            Percetakan · Sablon · Kustom
          </m.p>

          <h1 className="mt-3 font-display text-hero font-bold text-sky-800 dark:text-sky-100">
            <MaskedLine delay={HERO_DELAYS.line1}>
              Percetakan &amp; Sablon
            </MaskedLine>
            <MaskedLine delay={HERO_DELAYS.line2}>
              Segala Kebutuhan,
            </MaskedLine>
            <MaskedLine delay={HERO_DELAYS.line3}>
              <span className="italic text-sky-500 dark:text-sky-300">
                Sejak {BUSINESS.since}
              </span>
            </MaskedLine>
          </h1>

          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: HERO_DELAYS.meta, duration: 0.55, ease: EASE }}
            className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-600 sm:mt-5 sm:text-base dark:text-neutral-300"
          >
            <span className="font-semibold text-sky-600 dark:text-sky-300">
              ★ {BUSINESS.rating} ({BUSINESS.reviewCount} review)
            </span>
            <span aria-hidden="true">·</span>
            <span>Terpercaya sejak 2010</span>
            <span aria-hidden="true">·</span>
            <span>Buka 24 jam</span>
          </m.p>

          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.95 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: HERO_DELAYS.cta, duration: 0.55, ease: EASE }}
            className="mt-6 sm:mt-8"
          >
            <WaButton className="px-6 py-3.5 text-base">
              Pesan via WhatsApp
            </WaButton>
          </m.div>
        </div>
      </div>
    </section>
  );
}
