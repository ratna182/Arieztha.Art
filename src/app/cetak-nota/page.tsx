import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { pageMetadata } from "@/lib/seo";
import { NOTA_SERVICE } from "@/lib/services";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: NOTA_SERVICE.metaTitle,
    description: NOTA_SERVICE.metaDescription,
    path: NOTA_SERVICE.slug,
  });
}

export default function CetakNotaPage() {
  return <ServiceTemplate data={NOTA_SERVICE} />;
}
