"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import {
  BUSINESS,
  GOOGLE_REVIEW_URL,
  MAPS_PLACE_URL,
} from "@/lib/data";
import {
  revealContainerFast,
  revealContainerFastInstant,
  revealItemLight,
  revealItemLightInstant,
} from "@/lib/motion";
import WaButton from "@/components/WaButton";

const SERVICE_LINKS = [
  { label: "Cetak Yasin Custom", href: "/cetak-yasin" },
  { label: "Cetak Kwitansi Custom", href: "/cetak-kwitansi" },
  { label: "Cetak Nota NCR", href: "/cetak-nota" },
];

const INFO_LINKS = [
  { label: "Portofolio", href: "/portofolio" },
  { label: "Cara Pesan", href: "/cara-pesan" },
  { label: "FAQ", href: "/faq" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-section sm:px-6">
        <m.div
          variants={reduceMotion ? revealContainerFastInstant : revealContainerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <m.div
            variants={reduceMotion ? revealItemLightInstant : revealItemLight}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-arieztha-art.webp"
                alt="Logo Arieztha.Art Percetakan Yasin Bekasi"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-white object-contain"
              />
              <span>
                <span className="block font-display text-lg font-semibold text-white">
                  {BUSINESS.fullName}
                </span>
                <span className="block text-sm text-sky-300">
                  Sejak {BUSINESS.since} · {BUSINESS.hoursShort}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-sky-200">
              Percetakan {BUSINESS.name} di Jatirahayu, Kota Bekasi. Melayani
              cetak buku Yasin, kwitansi, nota, stempel, undangan, dan kebutuhan
              cetak lain dengan konsultasi langsung via WhatsApp.
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-sky-100">
              {BUSINESS.addressLine}
            </address>
          </m.div>

          <m.div variants={reduceMotion ? revealItemLightInstant : revealItemLight}>
            <nav aria-label="Layanan">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                Layanan
              </p>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sky-100 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Informasi" className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                Informasi
              </p>
              <ul className="mt-4 space-y-2.5">
                {INFO_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sky-100 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </m.div>

          <m.div variants={reduceMotion ? revealItemLightInstant : revealItemLight}>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              Kontak
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-100">
              <li>
                <a
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
                >
                  <span aria-hidden="true">📍</span>
                  {BUSINESS.landmark}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
                >
                  Telepon: {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
                >
                  WhatsApp: {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>{BUSINESS.hours}</li>
              <li>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
                >
                  Lihat ulasan di Google Maps
                </a>
              </li>
            </ul>
            <WaButton className="mt-5 min-h-11 px-5 py-2.5 text-sm">
              Hubungi Kami
            </WaButton>
          </m.div>
        </m.div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-sky-300">
          <p>
            © {new Date().getFullYear()} {BUSINESS.fullName} ·{" "}
            <Link
              href="/kontak"
              className="text-sky-100 underline underline-offset-2 decoration-sky-300 transition-colors hover:text-white"
            >
              Kontak
            </Link>{" "}
            ·{" "}
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
