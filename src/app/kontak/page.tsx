import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import WaButton from "@/components/WaButton";
import MapEmbed from "@/components/MapEmbed";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import {
  BUSINESS,
  GOOGLE_REVIEW_URL,
  MAPS_PLACE_URL,
} from "@/lib/business";

const CRUMBS = [
  { name: "Beranda", path: "/" },
  { name: "Kontak", path: "/kontak" },
];

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "Kontak & Lokasi Percetakan Bekasi | Arieztha.Art",
    description:
      "Alamat Arieztha.Art: Jl. Raya Hankam No.72, Jatirahayu, Pondok Melati, Kota Bekasi. Buka setiap hari 07.00–21.00. Telepon, WhatsApp, dan petunjuk arah.",
    path: "/kontak",
  });
}

export default function KontakPage() {
  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <PageIntro
        eyebrow="Kontak dan lokasi"
        title="Hubungi Arieztha.Art di Bekasi"
        description="Datang langsung ke toko atau hubungi kami lebih dulu. Kami membalas WhatsApp pada jam operasional, setiap hari 07.00–21.00 WIB."
        crumbs={CRUMBS}
      >
        <div className="flex flex-wrap gap-4">
          <WaButton className="px-6 py-3.5 text-base">
            Chat WhatsApp
          </WaButton>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex min-h-11 items-center rounded-full border border-sky-200 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Telepon {BUSINESS.phoneDisplay}
          </a>
        </div>
      </PageIntro>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
                Alamat toko
              </h2>
              <address className="mt-4 not-italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                <strong className="text-sky-800 dark:text-sky-100">
                  {BUSINESS.fullName}
                </strong>
                <br />
                {BUSINESS.street}
                <br />
                {BUSINESS.kelurahan}, {BUSINESS.kecamatan}
                <br />
                {BUSINESS.city}, {BUSINESS.province} {BUSINESS.postalCode}
              </address>

              <dl className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300">
                <div>
                  <dt className="font-medium text-sky-700 dark:text-sky-300">
                    Jam buka
                  </dt>
                  <dd>{BUSINESS.hours}</dd>
                </div>
                <div>
                  <dt className="font-medium text-sky-700 dark:text-sky-300">
                    Telepon
                  </dt>
                  <dd>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="underline underline-offset-2"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-sky-700 dark:text-sky-300">
                    WhatsApp
                  </dt>
                  <dd>
                    <a
                      href={BUSINESS.whatsappProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-sky-700 dark:text-sky-300">
                    Patokan lokasi
                  </dt>
                  <dd>{BUSINESS.landmark}. Berada di Jl. Raya Hankam.</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
                >
                  Petunjuk arah
                </a>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-sky-200 px-5 py-2.5 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50 dark:border-white/20 dark:text-sky-200 dark:hover:bg-white/10"
                >
                  Beri ulasan di Google
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
                Peta lokasi
              </h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                Peta dimuat hanya saat Anda memilih, agar halaman tetap ringan.
              </p>
              <MapEmbed className="mt-4" />
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-sky-50 p-5 text-sm leading-relaxed text-neutral-700 dark:bg-white/5 dark:text-neutral-300">
            <p>
              Sebelum datang, Anda bisa menghubungi kami untuk memastikan bahan
              atau contoh yang ingin dilihat tersedia. Untuk pesanan Yasin
              dengan tanggal acara, sebaiknya hubungi lebih awal agar waktu
              pengerjaan lebih longgar.
            </p>
          </div>
        </div>
      </section>

      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema(CRUMBS)} />
    </main>
  );
}
