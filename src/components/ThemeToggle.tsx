"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "@/components/Icon";

export default function ThemeToggle({ overlay = false }: { overlay?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ease-premium ${
        overlay
          ? "text-sky-50 hover:bg-white/10 dark:text-sky-50 dark:hover:bg-white/10"
          : "text-sky-600 hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-white/10"
      }`}
    >
      <Icon name={isDark ? "sun" : "moon"} className="h-5 w-5" weight="regular" />
    </button>
  );
}
