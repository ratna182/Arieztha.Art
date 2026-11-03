"use client";

import { m } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { BUSINESS, GOOGLE_REVIEW_URL, MAPS_PLACE_URL } from "@/lib/data";
import { DURATION, EASE, revealItemX, revealItemXInstant } from "@/lib/motion";
import WaButton from "@/components/WaButton";
import MapEmbed from "@/components/MapEmbed";

export default function Location() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="lokasi"
      className="bg-white py-section sm:py-section-lg dark:bg-night-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reduceMotion ? revealItemXInstant : revealItemX}
          >
            <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
              Percetakan di Jatirahayu, Bekasi
            </h2>
            <p className="mt-stack-sm max-w-xl text-neutral-600 dark:text-neutral-300">
              Toko kami berada di Jl. Raya Hankam, {BUSINESS.landmark}. Mudah
              dijangkau dari Pondok Melati, Pondok Gede, dan area Kota Bekasi
              lainnya.
            </p>
            <div className="mt-8 space-y-5 text-neutral-700 dark:text-neutral-300">
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">
                  Alamat
                </span>
                <span>{BUSINESS.addressLine}</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">
                  Jam buka
                </span>
                <span>{BUSINESS.hours}</span>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">
                  Telepon
                </span>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="underline underline-offset-2 hover:text-sky-600 dark:hover:text-sky-300"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 font-medium text-sky-600 dark:text-sky-300">
                  WhatsApp
                </span>
                <a
                  href={BUSINESS.whatsappProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-sky-600 dark:hover:text-sky-300"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <WaButton className="px-6 py-3.5 text-base">
                Pesan via WhatsApp
              </WaButton>
              <a
                href={MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-sky-700 underline underline-offset-4 dark:text-sky-300"
              >
                Lihat di Google Maps
              </a>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-sky-700 underline underline-offset-4 dark:text-sky-300"
              >
                Beri ulasan
              </a>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: DURATION.reveal, ease: EASE }
            }
          >
            <MapEmbed />
          </m.div>
        </div>
      </div>
    </section>
  );
}
