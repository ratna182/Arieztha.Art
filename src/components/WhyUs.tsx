"use client";

import { motion } from "motion/react";
import { BUSINESS, TESTIMONIALS, waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import Icon, { WhatsAppIcon } from "@/components/Icon";

const REASONS = [
  {
    title: "Rating 5.0",
    description: `${BUSINESS.reviewCount} review Google dari pelanggan nyata.`,
    icon: "star",
  },
  {
    title: "Buka 24 Jam",
    description: "Melayani kapan pun, termasuk kebutuhan cetak mendadak.",
    icon: "clock",
  },
  {
    title: "Sejak 2010",
    description: `Sudah ${new Date().getFullYear() - BUSINESS.since}+ tahun melayani Bekasi.`,
    icon: "calendar",
  },
  {
    title: "Custom Desain",
    description: "Desain sesuai permintaan untuk semua produk cetak.",
    icon: "palette",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-heading text-sky-800">
              Kenapa Pilih Kami
            </h2>
            <p className="mt-3 max-w-xl text-neutral-600">
              Percetakan full-service dengan pengalaman sejak 2010 — dipercaya
              ratusan pelanggan di Bekasi.
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-600">
              <span className="font-semibold text-sky-600">
                ★ {BUSINESS.rating.toFixed(1)} ({BUSINESS.reviewCount} review)
              </span>
              <span aria-hidden="true">·</span>
              <span>Sejak {BUSINESS.since}</span>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS.hours}</span>
            </p>
            <a
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-wa/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Chat sekarang
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Icon name={r.icon} className="h-6 w-6" weight="duotone" />
                </span>
                <h3 className="mt-3 font-display text-subheading font-semibold text-sky-800">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

