"use client";

import { useEffect, useState } from "react";

export function useLowEnd(): boolean {
  const [lowEnd, setLowEnd] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const hc = navigator.hardwareConcurrency;
    const lowCores = typeof hc === "number" && hc > 0 && hc <= 4;

    const conn = (
      navigator as Navigator & {
        connection?: { effectiveType?: string };
      }
    ).connection?.effectiveType;
    const slowNet = conn === "slow-2g" || conn === "2g";

    setLowEnd(reduced || lowCores || slowNet);
  }, []);

  return lowEnd;
}
