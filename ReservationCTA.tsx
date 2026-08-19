"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden bg-wine py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        className="container-px relative mx-auto max-w-2xl text-center"
      >
        <h2 className="font-display text-3xl text-cream sm:text-4xl md:text-5xl">
          Let&rsquo;s save you a seat
        </h2>
        <p className="mx-auto mt-4 max-w-md text-cream/80">
          Whether it&rsquo;s brunch or a late lounge evening, we&rsquo;ll
          have the table ready.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-body text-sm uppercase tracking-widest text-espresso transition-transform hover:scale-105"
        >
          Reserve a table
        </Link>
      </motion.div>
    </section>
  );
}
