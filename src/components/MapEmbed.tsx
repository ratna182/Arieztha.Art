"use client";

import { useState } from "react";
import { BUSINESS, GEO, MAPS_PLACE_URL } from "@/lib/business";

const EMBED_SRC = `https://maps.google.com/maps?q=${GEO.latitude},${GEO.longitude}(${encodeURIComponent(
  BUSINESS.fullName,
)})&hl=id&z=17&output=embed&iwloc=near`;

export default function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-sky-100 bg-sky-50 shadow-md dark:border-white/10 dark:bg-night-900 ${className}`}
    >
      {loaded ? (
        <iframe
          src={EMBED_SRC}
          title={`Peta lokasi ${BUSINESS.fullName}`}
          loading="lazy"
          className="h-72 w-full sm:h-96"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-72 flex-col items-center justify-center gap-4 px-6 text-center sm:h-96">
          <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Peta Google Maps dimuat hanya saat Anda memilih, agar halaman tetap
            ringan.
          </p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Tampilkan peta
          </button>
          <a
            href={MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-sky-700 underline underline-offset-2 dark:text-sky-300"
          >
            Buka di Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
