"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { NAV_LINKS } from "@/lib/data";
import { DURATION, EASE } from "@/lib/motion";
import WaButton from "@/components/WaButton";
import ThemeToggle from "@/components/ThemeToggle";
import Icon from "@/components/Icon";

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { label: "Cara Pesan", href: "/cara-pesan" },
  { label: "FAQ", href: "/faq" },
  { label: "Tentang", href: "/tentang" },
];

export default function Header() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const overHero = pathname === "/" && !scrolled && !menuOpen;
  const solid = !overHero;

  return (
    <m.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: DURATION.medium, ease: EASE }
      }
      className={`sticky top-0 z-50 transition-colors duration-300 ease-premium ${
        solid
          ? "border-b border-sky-100 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-night-950/95"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <m.div
        aria-hidden="true"
        style={reduceMotion ? { scaleX: 0 } : { scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-sky-500 will-change-transform dark:bg-sky-400"
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-arieztha-art.webp"
            alt="Logo Arieztha.Art Percetakan Yasin Bekasi"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full bg-white object-contain"
          />
          <span
            className={`font-display text-lg font-semibold transition-colors duration-300 ease-premium ${
              overHero ? "text-white" : "text-sky-800 dark:text-sky-100"
            }`}
          >
            Arieztha.Art
          </span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-6 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-300 ease-premium ${
                  overHero
                    ? "text-sky-50/90 hover:text-white"
                    : active
                      ? "text-sky-700 dark:text-sky-300"
                      : "text-neutral-600 hover:text-sky-600 dark:text-neutral-300 dark:hover:text-sky-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle overlay={overHero} />
          <WaButton
            className="min-h-11 px-4 py-2 text-sm sm:px-5"
            ariaLabel="Pesan via WhatsApp"
          >
            <span className="hidden sm:inline">Pesan Sekarang</span>
            <span className="sm:hidden">Pesan</span>
          </WaButton>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              overHero
                ? "text-sky-50 hover:bg-white/10"
                : "text-sky-700 hover:bg-sky-50 dark:text-sky-200 dark:hover:bg-white/10"
            }`}
          >
            <Icon
              name={menuOpen ? "close" : "menu"}
              className="h-5 w-5"
              weight="regular"
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-sky-100 bg-white px-4 pb-5 pt-2 lg:hidden dark:border-white/10 dark:bg-night-950"
        >
          <nav aria-label="Navigasi seluler">
            <ul className="space-y-1">
              {MOBILE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      pathname === link.href
                        ? "bg-sky-50 text-sky-700 dark:bg-white/10 dark:text-sky-200"
                        : "text-neutral-700 hover:bg-sky-50 dark:text-neutral-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </m.header>
  );
}
