"use client";

import { motion } from "motion/react";
import { HIGHLIGHTS, waLink } from "@/lib/data";
import Icon from "@/components/Icon";

export default function Highlights() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-sky-800 sm:text-3xl">
          Layanan Unggulan Kami
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Kebutuhan cetak yang paling sering dipesan pelanggan kami.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <motion.a
              key={item.id}
              href={waLink(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100 sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <Icon name={item.icon} className="h-6 w-6" weight="duotone" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-sky-800 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-600">
                Tanya harga
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
