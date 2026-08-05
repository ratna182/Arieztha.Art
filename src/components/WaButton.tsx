"use client";

import { motion, useReducedMotion } from "motion/react";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/data";
import { WhatsAppIcon } from "@/components/Icon";

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
    <motion.a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={
        "inline-flex items-center gap-2.5 rounded-full bg-wa font-semibold text-white shadow-lg shadow-wa/30 " +
        className
      }
    >
      <WhatsAppIcon className="h-6 w-6" />
      {children}
    </motion.a>
  );
}
