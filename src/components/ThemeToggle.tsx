"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Icon from "@/components/Icon";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sky-600 transition-colors hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-white/10"
    >
      <Icon name={isDark ? "sun" : "moon"} className="h-5 w-5" weight="regular" />
    </button>
  );
}
