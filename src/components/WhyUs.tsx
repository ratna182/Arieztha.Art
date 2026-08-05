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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-sky-800 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Kenapa Pilih Kami
            </h2>
            <p className="mt-3 text-sky-100">
              Kepercayaan dari ratusan pelanggan adalah alasan terbaik untuk mulai
              berlangganan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-700 text-sky-100">
                  <Icon name={r.icon} className="h-6 w-6" weight="duotone" />
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm text-sky-100/90">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

