import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { pageMetadata } from "@/lib/seo";
import { KWITANSI_SERVICE } from "@/lib/services";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: KWITANSI_SERVICE.metaTitle,
    description: KWITANSI_SERVICE.metaDescription,
    path: KWITANSI_SERVICE.slug,
  });
}

export default function CetakKwitansiPage() {
  return <ServiceTemplate data={KWITANSI_SERVICE} />;
}
