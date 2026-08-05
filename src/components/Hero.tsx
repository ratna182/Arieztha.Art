"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BUSINESS, waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icon";

export default function Hero() {
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="-mt-24 rounded-2xl border border-white/10 bg-white/95 p-6 shadow-xl backdrop-blur sm:-mt-28 sm:p-10 md:-mt-32 lg:p-12"
        >
          <h1 className="pb-1 font-display text-hero font-bold text-sky-800">
            Percetakan & Sablon Segala Kebutuhan,{" "}
            <span className="italic text-sky-500">Sejak {BUSINESS.since}</span>
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-600 sm:mt-5 sm:text-base">
            <span className="font-semibold text-sky-600">
              ★ {BUSINESS.rating} ({BUSINESS.reviewCount} review)
            </span>
            <span aria-hidden="true">·</span>
            <span>Terpercaya sejak 2010</span>
            <span aria-hidden="true">·</span>
            <span>Buka 24 jam</span>
          </p>

          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-wa/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:mt-8"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Pesan via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
