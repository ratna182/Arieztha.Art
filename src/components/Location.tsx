"use client";

import { m, useReducedMotion } from "motion/react";
import { BUSINESS, GOOGLE_PLACE_ID } from "@/lib/data";
import { DURATION, EASE, revealItemX } from "@/lib/motion";
import WaButton from "@/components/WaButton";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=place_id:${GOOGLE_PLACE_ID}&output=embed`;

export default function Location() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="lokasi" className="bg-white py-section sm:py-section-lg dark:bg-night-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <m.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.3 }}
            variants={reduceMotion ? undefined : revealItemX}
          >
            <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
              Percetakan Bekasi di Pondok Melati
            </h2>
            <p className="mt-stack-sm max-w-xl text-neutral-600 dark:text-neutral-300">
              Kunjungi toko kami di Jatirahayu — mudah dijangkau dari seluruh
              area Bekasi dan sekitarnya.
            </p>
            <div className="mt-8 space-y-5 text-neutral-700 dark:text-neutral-300">
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">Alamat</span>
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">Jam buka</span>
                <span>{BUSINESS.hours}</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">WhatsApp</span>
                <span>{BUSINESS.whatsappDisplay}</span>
              </div>
            </div>

            <div className="mt-10">
              <WaButton className="px-6 py-3.5 text-base">
                Pesan via WhatsApp
              </WaButton>
            </div>
          </m.div>

          <m.div
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: DURATION.reveal, ease: EASE }}
            className="overflow-hidden rounded-2xl border border-sky-100 shadow-md dark:border-white/10"
          >
            <iframe
              src={MAP_EMBED_SRC}
              title="Peta lokasi Arieztha.Art Percetakan Yasin"
              loading="lazy"
              className="h-72 w-full sm:h-96"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
