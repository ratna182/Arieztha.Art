"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATALOG, waLink } from "@/lib/data";
import Icon from "@/components/Icon";
import { WhatsAppIcon } from "@/components/Icon";

export default function Catalog() {
  const [open, setOpen] = useState<string | null>("buku-yasin");

  return (
    <section className="bg-sky-50 py-section sm:py-section-lg">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-heading text-sky-800">
          Katalog Lengkap
        </h2>
        <p className="mt-stack-sm max-w-2xl text-neutral-600">
          30+ produk cetak, dikelompokkan per kategori. Klik untuk lihat daftar produknya.
        </p>

        <div className="mt-stack grid gap-3">
          {CATALOG.map((cat, i) => {
            const isOpen = open === cat.id;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sky-50 sm:px-6"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                      <Icon name={cat.icon} className="h-5 w-5" weight="duotone" />
                    </span>
                    <span className="font-display text-base font-semibold text-sky-800 sm:text-lg">
                      {cat.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-sky-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <Icon name="plus" className="h-6 w-6" weight="bold" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-chip border-t border-sky-50 px-5 py-5 sm:px-6">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3.5 py-2 text-sm text-sky-800"
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
                          className="inline-flex items-center gap-2 rounded-full border border-wa/40 bg-wa/5 px-4 py-2 text-sm font-medium text-[#128C4A] transition-colors hover:bg-wa hover:text-white"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          Tanya soal {cat.title}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
