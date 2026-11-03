import type { Metadata } from "next";
import { BUSINESS, SITE_URL, SITE_NAME } from "@/lib/business";

const DEFAULT_TITLE = "Cetak Yasin & Nota Bekasi | Arieztha.Art";
const DEFAULT_DESCRIPTION =
  "Percetakan Yasin, nota, dan kwitansi custom di Jatirahayu, Bekasi. Buka setiap hari 07.00–21.00. Konsultasi desain via WhatsApp.";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: BUSINESS.fullName,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  formatDetection: {
    telephone: false,
  },
  category: "business",
};

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: path,
      siteName: BUSINESS.fullName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const notFoundMetadata: Metadata = {
  title: { absolute: "Halaman Tidak Ditemukan | Arieztha.Art" },
  robots: { index: false, follow: false },
};
