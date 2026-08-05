import Image from "next/image";
import { BUSINESS, waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-ariezta.webp"
            alt="Logo Arieztha.Art Percetakan Yasin"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg font-semibold text-sky-800">
            Arieztha.Art
          </span>
        </a>

        <a
          href={waLink(WA_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pesan sekarang via WhatsApp"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] sm:px-5"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="hidden xs:inline sm:inline">Pesan Sekarang</span>
        </a>
      </div>
    </header>
  );
}
