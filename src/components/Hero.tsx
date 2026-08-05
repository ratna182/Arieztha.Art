"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BUSINESS } from "@/lib/data";
import { DURATION, EASE, HERO_DELAYS } from "@/lib/motion";
import { useLowEnd } from "@/lib/useCapability";
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
  const lowEnd = useLowEnd();
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const useLightMotion = reduceMotion || lowEnd;

  return (
    <section id="top" className="relative">
      <div
        ref={bannerRef}
        className="relative min-h-[560px] w-full overflow-hidden bg-sky-900 sm:min-h-[620px] lg:min-h-[640px]"
      >
        <m.div
          style={useLightMotion ? undefined : { y: parallaxY }}
          initial={useLightMotion ? false : { scale: 1.06 }}
          animate={useLightMotion ? undefined : { scale: 1 }}
          transition={
            useLightMotion
              ? undefined
              : { duration: DURATION.heroLine, ease: EASE }
          }
          className="absolute inset-x-0 -inset-y-10"
        >
          <Image
            src="/hasil-cetak-percetakan-bekasi.webp"
            alt="Percetakan Buku Yasin custom di Bekasi — hasil cetak dan sablon Arieztha.Art Percetakan Yasin"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </m.div>

        <div className="hero-overlay absolute inset-0" />
        <div className="hero-nav-fade pointer-events-none absolute inset-x-0 top-0 h-12 sm:h-14" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
            <h1 className="font-display text-hero font-bold text-white drop-shadow-[0_2px_10px_rgba(2,4,32,0.55)]">
              <MaskedLine delay={HERO_DELAYS.line1}>
                Percetakan Express
              </MaskedLine>
              <MaskedLine delay={HERO_DELAYS.line2}>
                <span className="italic text-emerald-300">Sejak {BUSINESS.since}</span>
              </MaskedLine>
            </h1>

            <m.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: HERO_DELAYS.sub, duration: 0.55, ease: EASE }}
              className="mt-4 max-w-xl text-lead text-sky-50 sm:mt-5"
            >
              Solusi Cetak Cepat, Mudah, dan Berkualitas untuk Bisnis Anda.
            </m.p>

            <m.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: HERO_DELAYS.meta, duration: 0.55, ease: EASE }}
              className="mt-3 flex flex-wrap items-center gap-2 text-sm text-sky-100/90"
            >
              <span className="font-semibold text-white">
                ★ {BUSINESS.rating} ({BUSINESS.reviewCount} review)
              </span>
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
      </div>
    </section>
  );
}
