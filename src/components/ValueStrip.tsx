"use client";

import { m, useReducedMotion } from "motion/react";
import { revealContainer, revealItem } from "@/lib/motion";

const PROMISES = [
  "Kualitas Terbaik di Setiap Lembar Cetakan.",
  "Cetak Tajam, Harga Pas, Bisnis Puas.",
  "Mitra Terpercaya Kebutuhan Promosi Anda.",
];

export default function ValueStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-sky-900 py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <m.div
          variants={revealContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10"
        >
          {PROMISES.map((text) => (
            <m.p
              key={text}
              variants={revealItem}
              className="font-display text-subheading font-semibold leading-relaxed text-white sm:px-8"
            >
              {text}
            </m.p>
          ))}
        </m.div>
      </div>
    </section>
  );
}
