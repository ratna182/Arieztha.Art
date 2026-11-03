import Link from "next/link";
import WaButton from "@/components/WaButton";
import { notFoundMetadata } from "@/lib/seo";

export const metadata = notFoundMetadata;

const LINKS = [
  { label: "Cetak Buku Yasin", href: "/cetak-yasin" },
  { label: "Cetak Kwitansi", href: "/cetak-kwitansi" },
  { label: "Cetak Nota NCR", href: "/cetak-nota" },
  { label: "Kontak dan Lokasi", href: "/kontak" },
];

export default function NotFound() {
  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-sky-800 dark:text-sky-100 sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          Alamat yang Anda buka tidak tersedia. Mungkin halaman sudah dipindah
          atau tautannya berubah. Silakan pilih layanan di bawah ini.
        </p>

        <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm font-medium text-sky-800 transition-colors hover:border-sky-300 dark:border-white/10 dark:bg-night-900 dark:text-sky-100"
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <WaButton className="px-5 py-3 text-sm">Tanya via WhatsApp</WaButton>
        </div>
      </section>
    </main>
  );
}
