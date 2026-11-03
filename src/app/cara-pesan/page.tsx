import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import WaButton from "@/components/WaButton";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { BUSINESS, WA_DEFAULT_MESSAGE } from "@/lib/business";

const CRUMBS = [
  { name: "Beranda", path: "/" },
  { name: "Cara Pesan", path: "/cara-pesan" },
];

const STEPS = [
  {
    title: "Hubungi WhatsApp",
    description:
      "Sampaikan layanan yang Anda butuhkan: buku Yasin, kwitansi, nota, atau cetak lainnya.",
  },
  {
    title: "Kirim spesifikasi",
    description:
      "Sebutkan jumlah, ukuran, bahan, dan tanggal kebutuhan. Lampirkan foto, logo, atau contoh desain bila ada.",
  },
  {
    title: "Konfirmasi desain dan biaya",
    description:
      "Kami kirimkan rancangan serta rincian biaya. Perbaikan dilakukan sebelum produksi dimulai.",
  },
  {
    title: "Produksi",
    description:
      "Setelah disetujui, pesanan masuk proses produksi sesuai antrean dan estimasi yang disepakati.",
  },
  {
    title: "Ambil atau kirim",
    description:
      "Pesanan dapat diambil di toko atau dikirim sesuai kesepakatan. Untuk pengiriman, alamat dan biaya dikonfirmasi lebih dulu.",
  },
];

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "Cara Pesan Cetak di Bekasi | Arieztha.Art",
    description:
      "Panduan memesan cetak Yasin, kwitansi, dan nota di Arieztha.Art Bekasi. Kirim spesifikasi via WhatsApp, cek desain, lalu produksi. Buka 07.00–21.00.",
    path: "/cara-pesan",
  });
}

export default function CaraPesanPage() {
  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <PageIntro
        eyebrow="Panduan pemesanan"
        title="Cara Pesan Cetak di Arieztha.Art"
        description="Prosesnya sederhana: mulai dari WhatsApp, kirim spesifikasi, lalu konfirmasi desain sebelum produksi. Tidak perlu membuat akun atau mengisi formulir panjang."
        crumbs={CRUMBS}
      >
        <WaButton
          message={WA_DEFAULT_MESSAGE}
          className="px-6 py-3.5 text-base"
        >
          Mulai via WhatsApp
        </WaButton>
      </PageIntro>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
            Lima langkah pemesanan
          </h2>
          <ol className="mt-8 space-y-4">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-sky-100 bg-white p-5 dark:border-white/10 dark:bg-night-900"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-sky-800 dark:text-sky-100">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
            Yang sebaiknya disiapkan
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
            <li>Jumlah pesanan dan perkiraan tanggal dibutuhkan.</li>
            <li>Foto atau logo dengan resolusi terbaik, bukan hasil tangkapan layar.</li>
            <li>Teks yang akan dicetak, sudah diperiksa ejaannya.</li>
            <li>Contoh desain lama bila ingin mempertahankan identitas yang sama.</li>
          </ul>

          <div className="mt-8 rounded-2xl bg-sky-50 p-5 text-sm leading-relaxed text-neutral-700 dark:bg-white/5 dark:text-neutral-300">
            <p>
              Toko buka {BUSINESS.hoursShort} di {BUSINESS.street},{" "}
              {BUSINESS.kelurahan}, {BUSINESS.kecamatan}, {BUSINESS.city}.
              Untuk pesanan mendesak, sampaikan tanggal acara lebih awal agar
              antrean produksi bisa diperkirakan dengan jujur.
            </p>
            <p className="mt-3">
              Belum yakin harus mulai dari mana?{" "}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="font-semibold text-sky-700 underline underline-offset-2 dark:text-sky-300"
              >
                Telepon {BUSINESS.phoneDisplay}
              </a>{" "}
              atau lihat{" "}
              <Link
                href="/faq"
                className="font-semibold text-sky-700 underline underline-offset-2 dark:text-sky-300"
              >
                pertanyaan yang sering diajukan
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WaButton className="px-5 py-3 text-sm">
              Kirim spesifikasi sekarang
            </WaButton>
            <Link
              href="/cetak-yasin"
              className="inline-flex items-center text-sm font-semibold text-sky-700 underline underline-offset-4 dark:text-sky-300"
            >
              Lihat layanan cetak Yasin
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
    </main>
  );
}
