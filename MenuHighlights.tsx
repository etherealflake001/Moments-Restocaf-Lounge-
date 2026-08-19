"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { menuHighlights } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function MenuHighlights() {
  return (
    <section className="bg-panel py-28 md:py-36">
      <div className="container-px mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-4">From the menu</p>
          <h2 className="font-display text-3xl text-cream sm:text-4xl md:text-5xl">
            A few favourites
          </h2>
        </motion.div>

        <ul className="divide-y divide-sand/15">
          {menuHighlights.map((item, i) => (
            <motion.li
              key={item.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
              className="flex items-baseline justify-between gap-6 py-6"
            >
              <div>
                <h3 className="font-display text-xl text-cream md:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-1 max-w-md text-sm text-sand">{item.desc}</p>
              </div>
              <span className="shrink-0 font-display text-lg text-gold">
                {item.price}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border border-sand/40 px-8 py-3 font-body text-sm uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
