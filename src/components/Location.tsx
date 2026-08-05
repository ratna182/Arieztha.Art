"use client";

import { BUSINESS } from "@/lib/data";
import WaButton from "@/components/WaButton";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Arieztha.Art Percetakan Yasin, Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati, Kota Bekasi") +
  "&output=embed";

export default function Location() {
  return (
    <section className="bg-white py-section sm:py-section-lg dark:bg-night-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-heading text-sky-800 dark:text-sky-100">
              Kunjungi Kami
            </h2>
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
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-100 shadow-md dark:border-white/10">
            <iframe
              src={MAP_EMBED_SRC}
              title="Peta lokasi Arieztha.Art Percetakan Yasin"
              loading="lazy"
              className="h-72 w-full sm:h-96"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
