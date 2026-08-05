"use client";

import { BUSINESS } from "@/lib/data";
import { m, useReducedMotion } from "motion/react";
import { revealContainer, revealItemUp, revealItemX } from "@/lib/motion";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import WaButton from "@/components/WaButton";

const REASONS = [
  {
    label: "Rating",
    value: BUSINESS.rating,
    decimals: 1,
    description: `${BUSINESS.reviewCount} review Google dari pelanggan nyata.`,
    icon: "star",
  },
  {
    label: "Buka",
    value: 24,
    suffix: " Jam",
    description: "Melayani kapan pun, termasuk kebutuhan cetak mendadak.",
    icon: "clock",
  },
  {
    label: "Sejak",
    value: 2010,
    description: `Sudah ${new Date().getFullYear() - BUSINESS.since}+ tahun melayani Bekasi.`,
    icon: "calendar",
  },
  {
    label: "Custom Desain",
    description: "Desain sesuai permintaan untuk semua produk cetak.",
    icon: "palette",
  },
];

export default function WhyUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="keunggulan" className="bg-white py-section sm:py-section-lg dark:bg-night-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <m.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.3 }}
            variants={reduceMotion ? undefined : revealItemX}
          >
            <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
              Kenapa Pilih Kami
            </h2>
            <p className="mt-stack-sm max-w-xl text-neutral-600 dark:text-neutral-300">
              Percetakan full-service dengan pengalaman sejak 2010 — dipercaya
              ratusan pelanggan di Bekasi.
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="font-semibold text-sky-600 dark:text-sky-300">
                ★ {BUSINESS.rating.toFixed(1)} ({BUSINESS.reviewCount} review)
              </span>
              <span aria-hidden="true">·</span>
              <span>Sejak {BUSINESS.since}</span>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS.hours}</span>
            </p>
            <div className="mt-6">
              <WaButton className="px-6 py-3.5 text-base">
                Chat sekarang
              </WaButton>
            </div>
          </m.div>

          <m.div
            variants={reduceMotion ? undefined : revealContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-grid sm:gap-grid-lg"
          >
            {REASONS.map((r) => (
              <m.div
                key={r.label}
                variants={reduceMotion ? undefined : revealItemUp}
                className="rounded-2xl border border-sky-100 bg-sky-50/50 p-card dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-white/10 dark:text-sky-300">
                  <Icon name={r.icon} className="h-6 w-6" weight="duotone" />
                </span>
                <h3 className="mt-4 font-display text-subheading font-semibold text-sky-800 dark:text-sky-100">
                  {r.label}
                  {r.value !== undefined && (
                    <>
                      {" "}
                      <CountUp to={r.value} decimals={r.decimals ?? 0} />
                    </>
                  )}
                  {r.suffix ?? ""}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{r.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
