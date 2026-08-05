"use client";

import { m, useReducedMotion } from "motion/react";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { DURATION, EASE } from "@/lib/motion";
import { WhatsAppIcon } from "@/components/Icon";

const HOVER_SHADOW = "0 12px 28px -6px rgba(37, 211, 102, 0.5)";

export default function WaButton({
  message = WA_DEFAULT_MESSAGE,
  className = "",
  children,
}: {
  message?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <m.a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: DURATION.fast, ease: EASE }}
      className={
        "group relative inline-flex items-center gap-2.5 rounded-full bg-wa font-semibold text-white shadow-[0_4px_14px_-2px_rgba(37,211,102,0.35)] will-change-transform " +
        className
      }
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-[0_12px_28px_-6px_rgba(37,211,102,0.5)] transition-opacity duration-200 ease-premium group-hover:opacity-100"
      />
      <span className="relative inline-flex items-center gap-2.5">
        <WhatsAppIcon className="h-6 w-6" />
        {children}
      </span>
    </m.a>
  );
}
