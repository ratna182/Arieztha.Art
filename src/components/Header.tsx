import Image from "next/image";
import { BUSINESS } from "@/lib/data";
import WaButton from "@/components/WaButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-night-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo-ariezta.webp"
            alt="Logo Arieztha.Art Percetakan Yasin"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg font-semibold text-sky-800 dark:text-sky-100">
            Arieztha.Art
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <WaButton className="min-h-11 px-4 py-2 text-sm sm:px-5">
            <span className="hidden sm:inline">Pesan Sekarang</span>
          </WaButton>
        </div>
      </div>
    </header>
  );
}
