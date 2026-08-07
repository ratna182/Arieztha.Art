"use client";

import { m } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { HIGHLIGHTS, waLink } from "@/lib/data";
import { DURATION, EASE, revealContainer, revealContainerInstant, revealItem, revealItemInstant } from "@/lib/motion";
import Icon from "@/components/Icon";

export default function Highlights() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-section sm:py-section-lg dark:bg-night-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-display text-sky-800 dark:text-sky-100">
          Wujudkan Ide Kreatif Menjadi Hasil Cetak Nyata
        </h2>
        <p className="mt-stack-sm max-w-2xl text-neutral-600 dark:text-neutral-300">
          Kebutuhan cetak yang paling sering dipesan pelanggan kami.
        </p>

        <m.div
          variants={reduceMotion ? revealContainerInstant : revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-stack grid grid-cols-2 gap-grid sm:gap-grid-lg lg:grid-cols-4"
        >
          {HIGHLIGHTS.map((item) => (
            <m.a
              key={item.id}
              variants={reduceMotion ? revealItemInstant : revealItem}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ duration: DURATION.fast, ease: EASE }}
              href={waLink(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-sky-50/50 p-card shadow-sm shadow-sky-100 sm:p-card-lg dark:border dark:border-white/10 dark:bg-night-900 dark:shadow-black/20 will-change-transform"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-lg shadow-sky-100 transition-opacity duration-300 ease-premium group-hover:opacity-100 dark:shadow-black/40"
              />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-transform duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:rotate-2 dark:bg-white/10 dark:text-sky-300">
                <Icon name={item.icon} className="h-7 w-7" weight="duotone" />
              </span>
              <h3 className="mt-4 font-display text-subheading font-semibold text-sky-800 dark:text-sky-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sky-600 dark:text-sky-300">
                Tanya harga
                <span aria-hidden="true" className="transition-transform duration-200 ease-premium group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </m.a>
          ))}
        </m.div>
      </div>
    </section>
  );
}
