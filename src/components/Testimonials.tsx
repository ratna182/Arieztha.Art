"use client";

import { m, useReducedMotion } from "motion/react";
import { BUSINESS, TESTIMONIALS } from "@/lib/data";
import { DURATION, EASE, revealContainerSlow, revealItemLight } from "@/lib/motion";
import CountUp from "@/components/CountUp";

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="testimoni" className="bg-sky-50 py-section sm:py-section-lg dark:bg-night-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <m.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.3 }}
          variants={reduceMotion ? undefined : revealItemLight}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
              Kata Mereka
            </h2>
            <p className="mt-stack-sm text-neutral-600 dark:text-neutral-300">
              Sebagian review dari Google Reviews kami.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl bg-white px-4 py-3 text-right shadow-sm dark:bg-night-950">
            <div className="font-display text-2xl font-bold text-sky-600 dark:text-sky-300">
              <CountUp to={BUSINESS.rating} decimals={1} />
            </div>
            <div className="flex items-center justify-end gap-0.5" aria-label="Rating 5 dari 5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} />
              ))}
            </div>
            <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              <CountUp to={BUSINESS.reviewCount} /> review Google
            </div>
          </div>
        </m.div>

        <m.div
          variants={reduceMotion ? undefined : revealContainerSlow}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-stack grid gap-grid sm:gap-grid-lg md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <m.figure
              key={t.name}
              variants={reduceMotion ? undefined : revealItemLight}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              transition={{ duration: DURATION.fast, ease: EASE }}
              className="group relative flex flex-col rounded-2xl border border-sky-100 bg-white p-card shadow-sm sm:p-card-lg dark:border-white/10 dark:bg-night-950 dark:shadow-black/20 will-change-transform"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-lg shadow-sky-100 transition-opacity duration-300 ease-premium group-hover:opacity-100 dark:shadow-black/40"
              />
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 leading-relaxed text-neutral-700 dark:text-neutral-300">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-sky-50 pt-4 dark:border-white/10">
                <div className="font-semibold text-sky-800 dark:text-sky-100">{t.name}</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{t.role}</div>
              </figcaption>
            </m.figure>
          ))}
        </m.div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-400" aria-hidden="true">
      <path d="M12 2l2.9 6.26 6.6.8-4.9 4.65 1.3 6.62L12 17.4l-5.9 2.93 1.3-6.62L2.5 9.06l6.6-.8L12 2z" />
    </svg>
  );
}
