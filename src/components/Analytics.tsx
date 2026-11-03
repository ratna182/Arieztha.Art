"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Gtag = (command: string, ...args: unknown[]) => void;

function getGtag(): Gtag | undefined {
  return (window as unknown as { gtag?: Gtag }).gtag;
}

function eventNameFor(href: string): string | null {
  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("google.com/maps") || href.includes("maps.google.com")) {
    return "maps_click";
  }
  return null;
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const name = eventNameFor(anchor.href);
      if (!name) return;

      const gtag = getGtag();
      if (!gtag) return;

      gtag("event", name, {
        link_text: anchor.textContent?.trim().slice(0, 80) ?? "",
        link_url: anchor.href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { send_page_view: true });`}
      </Script>
    </>
  );
}
