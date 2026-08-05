import Image from "next/image";
import { BUSINESS, waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-ariezta.webp"
              alt="Logo Arieztha.Art"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-white object-contain"
            />
            <div>
              <div className="font-display text-lg font-semibold text-white">
                {BUSINESS.fullName}
              </div>
              <div className="text-sm text-sky-300">
                Sejak {BUSINESS.since} · Buka 24 jam
              </div>
            </div>
          </div>

          <a
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi via WhatsApp"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hubungi Kami
          </a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-sky-300">
          {BUSINESS.address}
        </div>
      </div>
    </footer>
  );
}
