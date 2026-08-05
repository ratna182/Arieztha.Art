"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { m, useReducedMotion, useScroll, useSpring } from "motion/react";
import { BUSINESS, NAV_LINKS } from "@/lib/data";
import { DURATION, EASE } from "@/lib/motion";
import WaButton from "@/components/WaButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
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

  const overHero = !scrolled;

  return (
    <m.header
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: DURATION.medium, ease: EASE }}
      className={`sticky top-0 z-50 transition-colors duration-300 ease-premium ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-sky-100 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-night-950/95"
      }`}
    >
      <m.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-sky-500 dark:bg-sky-400"
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
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
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ease-premium ${
                overHero
                  ? "text-sky-50/90 hover:text-white"
                  : "text-neutral-600 hover:text-sky-600 dark:text-neutral-300 dark:hover:text-sky-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle overlay={overHero} />
          <WaButton className="min-h-11 px-4 py-2 text-sm sm:px-5">
            <span className="hidden sm:inline">Pesan Sekarang</span>
          </WaButton>
        </div>
      </div>
    </m.header>
  );
}
