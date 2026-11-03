import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import WaButton from "@/components/WaButton";
import {
  BUSINESS,
  GOOGLE_REVIEW_URL,
  MAPS_PLACE_URL,
  SERVICE_AREA_LABEL,
} from "@/lib/business";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/schema";
import type { ServiceData } from "@/lib/services";

export default function ServiceTemplate({ data }: { data: ServiceData }) {
  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: data.breadcrumb, path: data.slug },
  ];

  return (
    <main id="main" className="bg-white dark:bg-night-950">
      <section className="relative overflow-hidden bg-sky-900 pb-16 pt-10 text-white sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.28),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={crumbs} />

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            {data.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {data.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-100 sm:text-lg">
            {data.intro}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sky-100">
            <li>
              <span className="font-semibold text-white">
                ★ {BUSINESS.rating.toFixed(1)}
              </span>{" "}
              ({BUSINESS.reviewCount} ulasan Google)
            </li>
            <li>{BUSINESS.hours}</li>
            <li>{BUSINESS.landmark}</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WaButton
              message={data.whatsappMessage}
              className="px-6 py-3.5 text-base"
            >
              Konsultasi via WhatsApp
            </WaButton>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="text-sm font-semibold text-sky-100 underline underline-offset-4 transition-colors hover:text-white"
            >
              Telepon {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-14 dark:bg-night-900 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100 sm:text-3xl">
            Pilihan varian {data.breadcrumb.toLowerCase()}
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
            {data.variantNote}
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-sky-100 bg-white dark:border-white/10 dark:bg-night-950">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Varian {data.breadcrumb.toLowerCase()} di {BUSINESS.fullName}
              </caption>
              <thead>
                <tr className="bg-sky-100/70 dark:bg-white/5">
                  {data.variantColumns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 font-semibold text-sky-800 dark:text-sky-100"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.variants.map((row) => (
                  <tr
                    key={row.join("-")}
                    className="border-t border-sky-100 dark:border-white/10"
                  >
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-4 py-3 align-top ${
                          index === 0
                            ? "font-medium text-sky-800 dark:text-sky-100"
                            : "text-neutral-600 dark:text-neutral-300"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
            Harga dan estimasi pasti dikonfirmasi setelah jumlah serta
            spesifikasi pesanan diterima.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100 sm:text-3xl">
                Yang perlu disiapkan sebelum pesan
              </h2>
              <ul className="mt-5 space-y-3 text-neutral-700 dark:text-neutral-300">
                {data.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700 dark:bg-white/10 dark:text-sky-200"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                Toko kami berada di {BUSINESS.street}, {BUSINESS.kelurahan},{" "}
                {BUSINESS.kecamatan}, {BUSINESS.city}. Buka {BUSINESS.hoursShort}.
                Anda bisa datang langsung atau mulai dari WhatsApp.
              </p>
              <div className="mt-6">
                <WaButton
                  message={data.whatsappMessage}
                  className="px-5 py-3 text-sm"
                >
                  Tanya stok dan estimasi
                </WaButton>
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-sky-100 bg-sky-50 dark:border-white/10 dark:bg-night-900">
              <Image
                src="/hasil-cetak-percetakan-bekasi.webp"
                alt="Contoh hasil cetak Arieztha.Art Percetakan Yasin Bekasi"
                width={912}
                height={1083}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                Contoh hasil produksi Arieztha.Art. Stok foto asli dapat
                dilihat langsung di toko.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-14 dark:bg-night-900 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100 sm:text-3xl">
            Proses pemesanan
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.process.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-sky-100 bg-white p-5 dark:border-white/10 dark:bg-night-950"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-semibold text-sky-800 dark:text-sky-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {data.sections.map((section) => (
            <article key={section.heading} className="mt-10 first:mt-0">
              <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700 dark:text-neutral-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sky-900 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Melayani {SERVICE_AREA_LABEL}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-sky-100">
            Toko Arieztha.Art berada di Jatirahayu, Pondok Melati. Pelanggan
            datang dari berbagai bagian Kota Bekasi dan sekitarnya. Untuk
            pengiriman ke luar area, silakan hubungi WhatsApp agar bisa
            dibicarakan sesuai lokasi dan jumlah pesanan.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Jatirahayu", "Pondok Melati", "Pondok Gede", "Kota Bekasi"].map(
              (area) => (
                <li
                  key={area}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-sky-100"
                >
                  {area}
                </li>
              ),
            )}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <WaButton
              message={data.whatsappMessage}
              className="px-5 py-3 text-sm"
            >
              Pesan lewat WhatsApp
            </WaButton>
            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-sky-100 underline underline-offset-4 hover:text-white"
            >
              Lihat lokasi di Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-sky-800 dark:text-sky-100 sm:text-3xl">
            Pertanyaan yang sering diajukan
          </h2>
          <div className="mt-8 divide-y divide-sky-100 rounded-2xl border border-sky-100 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-night-950">
            {data.faqs.map((faq) => (
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
        </div>
      </section>

      <section className="bg-sky-50 pb-16 dark:bg-night-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-sky-800 dark:text-sky-100">
            Layanan terkait
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {data.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm font-medium text-sky-800 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-night-950 dark:text-sky-100"
                >
                  {item.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-300">
            Sudah pernah memesan?{" "}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 underline underline-offset-2 dark:text-sky-300"
            >
              Bagikan ulasan Anda di Google Maps
            </a>
            .
          </p>
        </div>
      </section>

      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema(data)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(data.faqs)} />
    </main>
  );
}
