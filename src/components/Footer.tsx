"use client";

import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { BUSINESS, MAPS_URL, NAV_LINKS } from "@/lib/data";
import { revealContainerFast, revealItemLight } from "@/lib/motion";
import WaButton from "@/components/WaButton";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-section sm:px-6">
        <m.div
          variants={reduceMotion ? undefined : revealContainerFast}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <m.div variants={reduceMotion ? undefined : revealItemLight} className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-arieztha-art.webp"
                alt="Logo Arieztha.Art Percetakan Yasin Bekasi"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-white object-contain"
              />
              <div>
                <div className="font-display text-lg font-semibold text-white">
                  {BUSINESS.fullName}
                </div>
                <div className="text-sm text-sky-300">
                  Sejak {BUSINESS.since} · Buka 24 jam
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-sky-200">
              Percetakan {BUSINESS.name} melayani cetak buku yasin, undangan,
              stempel, mug custom, dan berbagai kebutuhan cetak lain di Bekasi
              dengan hasil berkualitas dan harga terjangkau.
            </p>
          </m.div>

          <m.div variants={reduceMotion ? undefined : revealItemLight}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sky-100 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div variants={reduceMotion ? undefined : revealItemLight}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              Kontak
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-100">
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 text-sky-100 underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-sky-300"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {BUSINESS.address}
                </a>
              </li>
              <li>{BUSINESS.hours}</li>
              <li>WhatsApp: {BUSINESS.whatsappDisplay}</li>
            </ul>
            <WaButton className="mt-5 min-h-11 px-5 py-2.5 text-sm">
              Hubungi Kami
            </WaButton>
          </m.div>
        </m.div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-sky-300">
          <p>
            © {new Date().getFullYear()} {BUSINESS.fullName} ·{" "}
            <a
              href="#top"
              className="text-sky-100 underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
            >
              Kembali ke atas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
