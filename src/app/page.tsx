import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ValueStrip from "@/components/ValueStrip";
import Catalog from "@/components/Catalog";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: "Cetak Yasin & Nota Bekasi | Arieztha.Art",
    description:
      "Percetakan Yasin, nota, dan kwitansi custom di Jatirahayu, Bekasi. Buka setiap hari 07.00–21.00. Konsultasi desain via WhatsApp.",
    path: "/",
  });
}

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-white dark:bg-night-950">
      <Hero />
      <Highlights />
      <ValueStrip />
      <Catalog />
      <WhyUs />
      <Testimonials />
      <Location />
      <JsonLd data={[localBusinessSchema, websiteSchema, organizationSchema]} />
    </main>
  );
}
