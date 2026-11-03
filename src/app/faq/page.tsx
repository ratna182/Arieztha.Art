import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import WaButton from "@/components/WaButton";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { BUSINESS } from "@/lib/business";
import type { ServiceFaq } from "@/lib/services";

const CRUMBS = [
  { name: "Beranda", path: "/" },
  { name: "FAQ", path: "/faq" },
];

const FAQS: ServiceFaq[] = [
  {
    question: "Di mana lokasi Arieztha.Art?",
    answer: `Toko berada di ${BUSINESS.addressLine}, ${BUSINESS.landmark}. Buka ${BUSINESS.hoursShort}.`,
  },
  {
    question: "Apakah bisa pesan tanpa datang ke toko?",
    answer:
      "Bisa. Pemesanan dapat dimulai melalui WhatsApp dengan mengirim spesifikasi, foto, atau logo. Konfirmasi desain juga dilakukan lewat chat sebelum produksi.",
  },
  {
    question: "Berapa lama proses cetak buku Yasin?",
    answer:
      "Waktu pengerjaan bergantung pada jumlah pesanan dan antrean. Sampaikan tanggal acara lebih awal agar estimasi bisa diberikan dengan lebih akurat.",
  },
  {
    question: "Apakah harga cetak Yasin bisa lebih murah untuk jumlah banyak?",
    answer:
      "Biaya dihitung berdasarkan jumlah, jenis cover, dan desain. Untuk pesanan dalam jumlah banyak, sampaikan jumlah perkiraan melalui WhatsApp agar penawaran bisa disesuaikan.",
  },
  {
    question: "Apa beda nota 2 ply dan 3 ply?",
    answer:
      "Nota 2 ply menghasilkan dua lembar per set, biasanya untuk arsip penjual dan pembeli. Nota 3 ply menambah satu lembar untuk arsip lain, misalnya bagian keuangan.",
  },
  {
    question: "Apakah kwitansi bisa memakai nomor seri?",
    answer:
      "Bisa. Nomor seri dapat disiapkan berurutan sesuai kebutuhan pencatatan. Sampaikan rentang nomor yang diinginkan saat pemesanan.",
  },
  {
    question: "Bisakah cover Yasin memakai foto almarhum/almarhumah?",
    answer:
      "Bisa. Kirimkan foto dengan kualitas terbaik agar hasil cetak tetap jelas. Kami bantu menata foto, nama, dan keterangan lain sebelum produksi.",
  },
  {
    question: "Apakah melayani pengiriman ke luar Bekasi?",
    answer:
      "Pengiriman dapat dibicarakan sesuai lokasi dan jumlah pesanan. Hubungi WhatsApp untuk memastikan metode dan biaya pengiriman yang tersedia.",
  },
  {
    question: "Metode pembayaran apa yang tersedia?",
    answer:
      "Silakan konfirmasi metode pembayaran melalui WhatsApp saat pemesanan agar informasinya sesuai dengan jenis dan nilai pesanan.",
  },
  {
    question: "Apakah bisa cetak selain Yasin, kwitansi, dan nota?",
    answer:
      "Bisa. Kami juga melayani stempel, undangan, kartu nama, ID card, mug custom, spanduk, dan kebutuhan cetak lain. Sampaikan kebutuhan Anda melalui WhatsApp.",
  },
];

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "FAQ Cetak Yasin, Nota & Kwitansi | Arieztha.Art",
    description:
      "Pertanyaan umum tentang cetak Yasin, nota, dan kwitansi di Arieztha.Art Bekasi: lokasi, waktu pengerjaan, jumlah ply, nomor seri, dan pengiriman.",
    path: "/faq",
  });
}

export default function FaqPage() {
  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <PageIntro
        eyebrow="Pertanyaan umum"
        title="FAQ Cetak Yasin, Nota, dan Kwitansi"
        description="Jawaban singkat untuk pertanyaan yang paling sering masuk. Jika yang Anda cari belum ada di sini, kirim pertanyaannya melalui WhatsApp."
        crumbs={CRUMBS}
      >
        <WaButton className="px-6 py-3.5 text-base">Tanya via WhatsApp</WaButton>
      </PageIntro>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="divide-y divide-sky-100 rounded-2xl border border-sky-100 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-night-900">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-sky-800 marker:content-none dark:text-sky-100">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-sky-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-sky-50 p-5 text-sm leading-relaxed text-neutral-700 dark:bg-white/5 dark:text-neutral-300">
            <p>
              Masih ada pertanyaan? Lihat juga{" "}
              <Link
                href="/cara-pesan"
                className="font-semibold text-sky-700 underline underline-offset-2 dark:text-sky-300"
              >
                panduan cara pesan
              </Link>{" "}
              atau langsung hubungi kami di {BUSINESS.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>

      <JsonLd data={[localBusinessSchema, breadcrumbSchema(CRUMBS), faqSchema(FAQS)]} />
    </main>
  );
}
