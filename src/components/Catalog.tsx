"use client";

import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { CATALOG, waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";
import Icon from "@/components/Icon";
import { WhatsAppIcon } from "@/components/Icon";

export default function Catalog() {
  const [open, setOpen] = useState<string | null>("buku-yasin");
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-sky-50 py-section sm:py-section-lg dark:bg-night-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
          Katalog Lengkap
        </h2>
        <p className="mt-stack-sm max-w-2xl text-neutral-600 dark:text-neutral-300">
          30+ produk cetak, dikelompokkan per kategori. Klik untuk lihat daftar produknya.
        </p>

        <div className="mt-stack grid gap-3">
          {CATALOG.map((cat) => {
            const isOpen = open === cat.id;
            return (
              <div
                key={cat.id}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white dark:border-white/10 dark:bg-night-950"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sky-50 sm:px-6 dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-white/10 dark:text-sky-300">
                      <Icon name={cat.icon} className="h-5 w-5" weight="duotone" />
                    </span>
                    <span className="font-display text-base font-semibold text-sky-800 sm:text-lg dark:text-sky-100">
                      {cat.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-sky-400 transition-transform duration-300 dark:text-sky-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <Icon name="plus" className="h-6 w-6" weight="bold" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.35, ease: EASE }
                      }
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-chip border-t border-sky-50 px-5 py-5 sm:px-6 dark:border-white/10">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3.5 py-2 text-sm text-sky-800 dark:border-white/10 dark:bg-white/10 dark:text-sky-100"
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
                          className="inline-flex items-center gap-2 rounded-full border border-wa/40 bg-wa/5 px-4 py-2 text-sm font-medium text-wa-700 transition-colors hover:bg-wa hover:text-white"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          Tanya soal {cat.title}
                        </a>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
