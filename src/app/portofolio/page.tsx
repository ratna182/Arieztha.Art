import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import WaButton from "@/components/WaButton";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { BUSINESS, MAPS_PLACE_URL } from "@/lib/business";

const CRUMBS = [
  { name: "Beranda", path: "/" },
  { name: "Portofolio", path: "/portofolio" },
];

const CATEGORIES = [
  {
    title: "Buku Yasin custom",
    description:
      "Soft cover dan hard cover dengan cover foto serta nama almarhum/almarhumah.",
    href: "/cetak-yasin",
  },
  {
    title: "Kwitansi custom",
    description:
      "Kwitansi dengan logo, nomor seri, serta pilihan 2 ply dan 3 ply.",
    href: "/cetak-kwitansi",
  },
  {
    title: "Nota NCR",
    description:
      "Nota kontan dan nota transaksi harian untuk toko dan usaha jasa.",
    href: "/cetak-nota",
  },
  {
    title: "Stempel dan undangan",
    description:
      "Stempel karet, plat nama, undangan, dan kebutuhan cetak acara lainnya.",
    href: "/cara-pesan",
  },
];

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "Portofolio Cetak Yasin & Nota Bekasi | Arieztha.Art",
    description:
      "Lihat contoh hasil cetak Arieztha.Art di Bekasi: buku Yasin custom, kwitansi, nota, stempel, dan undangan. Datang ke toko atau minta foto terbaru via WhatsApp.",
    path: "/portofolio",
  });
}

export default function PortofolioPage() {
  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <PageIntro
        eyebrow="Contoh hasil produksi"
        title="Portofolio Percetakan di Bekasi"
        description="Setiap pesanan dikerjakan sesuai spesifikasi pelanggan. Berikut contoh hasil cetak yang terdokumentasi di toko kami."
        crumbs={CRUMBS}
      >
        <WaButton
          message="Halo Arieztha.Art, saya mau lihat contoh hasil cetak Yasin/nota/kwitansi."
          className="px-6 py-3.5 text-base"
        >
          Minta foto contoh terbaru
        </WaButton>
      </PageIntro>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <figure className="overflow-hidden rounded-2xl border border-sky-100 bg-sky-50 dark:border-white/10 dark:bg-night-900">
            <Image
              src="/hasil-cetak-percetakan-bekasi.webp"
              alt="Contoh hasil cetak Arieztha.Art Percetakan Yasin Bekasi"
              width={912}
              height={1083}
              sizes="(max-width: 896px) 100vw, 896px"
              className="h-auto w-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-neutral-600 dark:text-neutral-300">
              Contoh hasil cetak Arieztha.Art. Untuk melihat bahan, jilid, dan
              contoh lain secara langsung, silakan datang ke toko di{" "}
              {BUSINESS.landmark}.
            </figcaption>
          </figure>

          <h2 className="mt-12 font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
            Jenis pekerjaan yang kami layani
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {CATEGORIES.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="rounded-2xl border border-sky-100 bg-white p-5 transition-colors hover:border-sky-300 dark:border-white/10 dark:bg-night-950"
              >
                <h3 className="font-semibold text-sky-800 dark:text-sky-100">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {category.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-sky-600 dark:text-sky-300">
                  Lihat detail →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            Punya contoh sendiri yang ingin ditiru? Kirimkan fotonya melalui
            WhatsApp. Kami akan menyampaikan apakah bahan dan ukurannya tersedia
            sebelum Anda memesan.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <WaButton className="px-5 py-3 text-sm">
              Tanya contoh dan bahan
            </WaButton>
            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-sky-700 underline underline-offset-4 dark:text-sky-300"
            >
              Lihat lokasi toko
            </a>
          </div>
        </div>
      </section>

      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
    </main>
  );
}
