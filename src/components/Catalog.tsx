"use client";

import { useState } from "react";
import { m } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { CATALOG, waLink } from "@/lib/data";
import { EASE, revealContainerFast, revealContainerFastInstant, revealItemRow, revealItemRowInstant } from "@/lib/motion";
import Icon from "@/components/Icon";
import { WhatsAppIcon } from "@/components/Icon";

export default function Catalog() {
  const [open, setOpen] = useState<string | null>("buku-yasin");
  const reduceMotion = useReducedMotion();

  return (
    <section id="catalog" className="bg-sky-50 py-section sm:py-section-lg dark:bg-night-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
          Cetak Apa Saja, Kapan Saja, Langsung dari Handphone Anda
        </h2>
        <p className="mt-stack-sm max-w-2xl text-neutral-600 dark:text-neutral-300">
          Dari cetak undangan, spanduk, hingga ID card custom — semua kebutuhan
          cetak di Bekasi bisa dipesan online tanpa harus keluar rumah.
        </p>

        <m.div
          variants={reduceMotion ? revealContainerFastInstant : revealContainerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-stack grid gap-3"
        >
          {CATALOG.map((cat) => {
            const isOpen = open === cat.id;
            return (
              <m.div
                key={cat.id}
                variants={reduceMotion ? revealItemRowInstant : revealItemRow}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white dark:border-white/10 dark:bg-night-950"
              >
                <h3 className="font-display text-base font-semibold text-sky-800 sm:text-lg dark:text-sky-100">
                  <button
                    onClick={() => setOpen(isOpen ? null : cat.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150 ease-premium hover:bg-sky-100/60 sm:px-6 dark:hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-white/10 dark:text-sky-300">
                        <Icon name={cat.icon} className="h-5 w-5" weight="duotone" />
                      </span>
                      {cat.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-sky-400 transition-transform duration-[350ms] ease-premium dark:text-sky-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <Icon name="chevronDown" className="h-5 w-5" weight="bold" />
                    </span>
                  </button>
                </h3>

                <div
                  className={`grid ${
                    reduceMotion
                      ? ""
                      : "transition-[grid-template-rows] duration-[350ms] ease-premium"
                  } ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <m.div
                      initial={false}
                      animate={{ opacity: isOpen ? 1 : 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { delay: isOpen ? 0.1 : 0, duration: 0.3, ease: EASE }
                      }
                    >
                      <div className="flex flex-wrap gap-chip border-t border-sky-50 px-5 py-5 sm:px-6 dark:border-white/10">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full bg-sky-50 px-3.5 py-2 text-sm text-sky-800 dark:bg-white/10 dark:text-sky-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="px-5 pb-5 sm:px-6">
                        <a
                          href={waLink(cat.message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-wa/40 bg-wa/5 px-4 py-2 text-sm font-medium text-wa-800 transition-colors hover:bg-wa-600 hover:text-white"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          Tanya soal {cat.title}
                        </a>
                      </div>
                    </m.div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
