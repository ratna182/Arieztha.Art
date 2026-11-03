import type { MetadataRoute } from "next";
import { LAST_CONTENT_UPDATE, SITE_URL } from "@/lib/business";
import { SERVICES } from "@/lib/services";

const lastModified = new Date(LAST_CONTENT_UPDATE);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/portofolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/cara-pesan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/tentang`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/kontak`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
