"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { BUSINESS } from "@/lib/data";
import { heroContainer, heroItem } from "@/lib/motion";
import WaButton from "@/components/WaButton";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-sky-900 sm:aspect-[21/9] md:aspect-[3/1]">
        <Image
          src="/cover-aris.webp"
          alt="Hasil cetak Arieztha.Art Percetakan Yasin Bekasi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/40 to-sky-900/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <m.div
          variants={heroContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="-mt-24 rounded-2xl border border-white/10 bg-white/95 p-6 shadow-xl backdrop-blur sm:-mt-28 sm:p-10 md:-mt-32 lg:p-12 dark:bg-night-900/95"
        >
          <m.h1
            variants={heroItem}
            className="pb-1 font-display text-hero font-bold text-sky-800 dark:text-sky-100"
          >
            Percetakan & Sablon Segala Kebutuhan,{" "}
            <span className="italic text-sky-500 dark:text-sky-300">Sejak {BUSINESS.since}</span>
          </m.h1>

          <m.p
            variants={heroItem}
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

          <m.div variants={heroItem} className="mt-6 sm:mt-8">
            <WaButton className="px-6 py-3.5 text-base">
              Pesan via WhatsApp
            </WaButton>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
