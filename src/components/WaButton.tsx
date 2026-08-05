"use client";

import { m, useReducedMotion } from "motion/react";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { DURATION, EASE } from "@/lib/motion";
import { WhatsAppIcon } from "@/components/Icon";

const REST_SHADOW = "0 4px 14px -2px rgba(37, 211, 102, 0.35)";
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
      initial={{ boxShadow: REST_SHADOW }}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.02, boxShadow: HOVER_SHADOW }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: DURATION.fast, ease: EASE }}
      className={
        "inline-flex items-center gap-2.5 rounded-full bg-wa font-semibold text-white " +
        className
      }
    >
      <WhatsAppIcon className="h-6 w-6" />
      {children}
    </m.a>
  );
}
