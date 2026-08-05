"use client";

import { BUSINESS } from "@/lib/data";
import Icon from "@/components/Icon";
import WaButton from "@/components/WaButton";

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
    <section className="bg-white py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-heading text-sky-800">
              Kenapa Pilih Kami
            </h2>
            <p className="mt-stack-sm max-w-xl text-neutral-600">
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
            <div className="mt-6">
              <WaButton className="px-6 py-3.5 text-base">
                Chat sekarang
              </WaButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-grid sm:gap-grid-lg">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-sky-100 bg-sky-50/50 p-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                  <Icon name={r.icon} className="h-6 w-6" weight="duotone" />
                </span>
                <h3 className="mt-4 font-display text-subheading font-semibold text-sky-800">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

