import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import WaButton from "@/components/WaButton";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { BUSINESS, MAPS_PLACE_URL } from "@/lib/business";

const CRUMBS = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/tentang" },
];

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "Tentang Arieztha.Art Percetakan Bekasi",
    description:
      "Arieztha.Art Percetakan Yasin melayani cetak Yasin, kwitansi, dan nota custom di Jatirahayu, Kota Bekasi sejak 2010. Buka setiap hari 07.00–21.00.",
    path: "/tentang",
  });
}

export default function TentangPage() {
  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <PageIntro
        eyebrow="Tentang kami"
        title="Percetakan Yasin dan Dokumen Usaha di Bekasi"
        description="Arieztha.Art adalah percetakan di Jatirahayu, Pondok Melati, Kota Bekasi. Kami mengerjakan buku Yasin custom, kwitansi, nota, stempel, undangan, dan kebutuhan cetak lain."
        crumbs={CRUMBS}
      >
        <WaButton className="px-6 py-3.5 text-base">Kenali layanan kami</WaButton>
      </PageIntro>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
            Melayani pelanggan Bekasi sejak 2010
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Arieztha.Art Percetakan Yasin berdiri di Jatirahayu dan telah
              melayani pelanggan di Kota Bekasi dan sekitarnya sejak 2010.
              Pekerjaan awal banyak berkaitan dengan dokumen usaha seperti nota
              dan kwitansi, lalu berkembang ke buku Yasin custom untuk acara
              tahlilan dan haul.
            </p>
            <p>
              Sampai sekarang, cara kerja kami tetap sederhana: pelanggan
              menyampaikan kebutuhan melalui WhatsApp atau datang langsung,
              lalu kami bantu menyiapkan desain dan mengecek hasilnya sebelum
              dicetak.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
            Yang kami kerjakan
          </h2>
          <ul className="mt-5 grid gap-3 text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
            <li className="rounded-xl border border-sky-100 px-4 py-3 dark:border-white/10">
              Buku Yasin custom soft cover dan hard cover
            </li>
            <li className="rounded-xl border border-sky-100 px-4 py-3 dark:border-white/10">
              Kwitansi dengan logo, nomor seri, 2 ply dan 3 ply
            </li>
            <li className="rounded-xl border border-sky-100 px-4 py-3 dark:border-white/10">
              Nota NCR dan nota kontan untuk usaha
            </li>
            <li className="rounded-xl border border-sky-100 px-4 py-3 dark:border-white/10">
              Stempel, undangan, kartu nama, ID card, dan mug
            </li>
          </ul>

          <h2 className="mt-12 font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
            Prinsip kerja
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
            <p>
              Kami berusaha memberi estimasi yang jujur, bukan janji yang tidak
              bisa ditepati. Untuk pesanan dengan tanggal acara, sampaikan lebih
              awal agar waktu pengecekan dan produksi cukup.
            </p>
            <p>
              Untuk buku Yasin, kami memahami bahwa pesanan sering berkaitan
              dengan keluarga yang sedang berduka. Karena itu, komunikasi
              dilakukan dengan tenang dan tanpa desakan. Anda dapat mengecek
              desain sebelum produksi dimulai.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-sky-50 p-5 text-sm leading-relaxed text-neutral-700 dark:bg-white/5 dark:text-neutral-300">
            <p>
              Penilaian pelanggan di Google Maps saat ini{" "}
              <strong>{BUSINESS.rating.toFixed(1)}</strong> dari{" "}
              <strong>{BUSINESS.reviewCount} ulasan</strong>. Toko buka{" "}
              {BUSINESS.hoursShort} di {BUSINESS.addressLine}.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WaButton className="px-5 py-3 text-sm">Hubungi kami</WaButton>
            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-sky-700 underline underline-offset-4 dark:text-sky-300"
            >
              Lihat lokasi di Google Maps
            </a>
            <Link
              href="/portofolio"
              className="inline-flex items-center text-sm font-semibold text-sky-700 underline underline-offset-4 dark:text-sky-300"
            >
              Lihat portofolio
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
    </main>
  );
}
