"use client";

import { m, useReducedMotion } from "motion/react";
import { HIGHLIGHTS, waLink } from "@/lib/data";
import { revealContainer, revealItem } from "@/lib/motion";
import Icon from "@/components/Icon";

export default function Highlights() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-section sm:py-section-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-display text-sky-800">
          Layanan Unggulan Kami
        </h2>
        <p className="mt-stack-sm max-w-2xl text-neutral-600">
          Kebutuhan cetak yang paling sering dipesan pelanggan kami.
        </p>

        <m.div
          variants={revealContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-stack grid grid-cols-2 gap-grid sm:gap-grid-lg lg:grid-cols-4"
        >
          {HIGHLIGHTS.map((item) => (
            <m.a
              key={item.id}
              variants={revealItem}
              href={waLink(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-gradient-to-br from-sky-50 to-white p-card shadow-sm shadow-sky-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100 sm:p-card-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Icon name={item.icon} className="h-6 w-6" weight="duotone" />
              </span>
              <h3 className="mt-4 font-display text-subheading font-semibold text-sky-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sky-600">
                Tanya harga
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </m.a>
          ))}
        </m.div>
      </div>
    </section>
  );
}
