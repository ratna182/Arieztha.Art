import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { pageMetadata } from "@/lib/seo";
import { YASIN_SERVICE } from "@/lib/services";

export function generateMetadata(): Metadata {
  return pageMetadata({
    title: YASIN_SERVICE.metaTitle,
    description: YASIN_SERVICE.metaDescription,
    path: YASIN_SERVICE.slug,
  });
}

export default function CetakYasinPage() {
  return <ServiceTemplate data={YASIN_SERVICE} />;
}
