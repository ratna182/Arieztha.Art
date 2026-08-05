"use client";

import { motion } from "motion/react";
import { BUSINESS, waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icon";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Arieztha.Art Percetakan Yasin, Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati, Kota Bekasi") +
  "&output=embed";

export default function Location() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-sky-800 sm:text-3xl">
              Kunjungi Kami
            </h2>
            <div className="mt-6 space-y-4 text-neutral-700">
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600">Alamat</span>
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600">Jam buka</span>
                <span>{BUSINESS.hours}</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600">WhatsApp</span>
                <span>{BUSINESS.whatsappDisplay}</span>
              </div>
            </div>

            <a
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-wa/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Pesan via WhatsApp
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-sky-100 shadow-lg"
          >
            <iframe
              src={MAP_EMBED_SRC}
              title="Peta lokasi Arieztha.Art Percetakan Yasin"
              loading="lazy"
              className="h-72 w-full sm:h-96"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
