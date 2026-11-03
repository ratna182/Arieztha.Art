import {
  BUSINESS,
  GEO,
  MAPS_PLACE_URL,
  SERVICE_AREAS,
  SERVICE_AREA_LABEL,
  SITE_URL,
  SITE_NAME,
  waLink,
  WA_DEFAULT_MESSAGE,
} from "@/lib/business";
import { SERVICES, type ServiceData, type ServiceFaq } from "@/lib/services";

export type JsonLdObject = Record<string, unknown>;
export type JsonLdValue = JsonLdObject | JsonLdObject[];

const BUSINESS_ID = `${SITE_URL}/#business`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const AREA_SERVED = SERVICE_AREAS.map((name) => ({
  "@type": "AdministrativeArea",
  name,
}));

export const localBusinessSchema: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store"],
  "@id": BUSINESS_ID,
  name: BUSINESS.fullName,
  alternateName: BUSINESS.name,
  url: SITE_URL,
  description:
    "Percetakan Yasin, nota, kwitansi, stempel, dan kebutuhan cetak lain di Jatirahayu, Kota Bekasi. Melayani pesanan custom dengan konsultasi via WhatsApp.",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/icon.png`,
  telephone: BUSINESS.phone,
  hasMap: MAPS_PLACE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.province,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: BUSINESS.opens,
    closes: BUSINESS.closes,
  },
  areaServed: AREA_SERVED,
  sameAs: [MAPS_PLACE_URL, BUSINESS.whatsappProfileUrl],
  makesOffer: [
    ...SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.h1,
        url: `${SITE_URL}${service.slug}`,
      },
    })),
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cetak stempel, undangan, dan kebutuhan cetak lain",
        url: `${SITE_URL}/portofolio`,
      },
    },
  ],
};

export const organizationSchema: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: BUSINESS.fullName,
  alternateName: BUSINESS.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  sameAs: [MAPS_PLACE_URL, BUSINESS.whatsappProfileUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: BUSINESS.phone,
    availableLanguage: ["id"],
    areaServed: "ID",
  },
};

export const websiteSchema: JsonLdObject = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "id-ID",
  publisher: { "@id": ORGANIZATION_ID },
};

export function serviceSchema(service: ServiceData): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${service.slug}/#service`,
    name: service.h1,
    description: service.metaDescription,
    serviceType: service.h1,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
    url: `${SITE_URL}${service.slug}`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: waLink(service.whatsappMessage),
      servicePhone: BUSINESS.phone,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: ServiceFaq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const contactAction = waLink(WA_DEFAULT_MESSAGE);
