"use client";

import { motion } from "motion/react";
import { BUSINESS, TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-sky-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-sky-800 sm:text-3xl">
              Kata Mereka
            </h2>
            <p className="mt-2 text-neutral-600">
              Sebagian review dari Google Reviews kami.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl bg-white px-4 py-3 text-right shadow-sm">
            <div className="font-display text-2xl font-bold text-sky-600">
              {BUSINESS.rating.toFixed(1)}
            </div>
            <div className="flex items-center justify-end gap-0.5" aria-label="Rating 5 dari 5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} />
              ))}
            </div>
            <div className="mt-1 text-xs text-neutral-500">
              {BUSINESS.reviewCount} review Google
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 leading-relaxed text-neutral-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 border-t border-sky-50 pt-4">
                <div className="font-semibold text-sky-800">{t.name}</div>
                <div className="text-sm text-neutral-500">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
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
