import Image from "next/image";
import { BUSINESS, NAV_LINKS } from "@/lib/data";
import WaButton from "@/components/WaButton";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-section sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-arieztha-art.webp"
                alt="Logo Arieztha.Art Percetakan Yasin Bekasi"
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
            <p className="mt-5 max-w-md text-sm leading-relaxed text-sky-200">
              Percetakan {BUSINESS.name} melayani cetak buku yasin, undangan,
              stempel, mug custom, dan berbagai kebutuhan cetak lain di Bekasi
              dengan hasil berkualitas dan harga terjangkau.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sky-100 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
              Kontak
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-100">
              <li>{BUSINESS.address}</li>
              <li>{BUSINESS.hours}</li>
              <li>WhatsApp: {BUSINESS.whatsappDisplay}</li>
            </ul>
            <WaButton className="mt-5 min-h-11 px-5 py-2.5 text-sm">
              Hubungi Kami
            </WaButton>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-sky-300">
          <p>
            © {new Date().getFullYear()} {BUSINESS.fullName} ·{" "}
            <a href="#top" className="text-sky-100 transition-colors hover:text-white">
              Kembali ke atas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
