import Image from "next/image";
import { BUSINESS } from "@/lib/data";
import WaButton from "@/components/WaButton";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-section sm:px-6">
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

          <WaButton className="min-h-11 px-5 py-2.5 text-sm">
            Hubungi Kami
          </WaButton>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-sky-300">
          {BUSINESS.address}
        </div>
      </div>
    </footer>
  );
}
