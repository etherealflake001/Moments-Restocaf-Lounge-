"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BokehGlow from "./BokehGlow";
import { brand } from "@/lib/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-espresso">
      <BokehGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-px relative z-10 mx-auto max-w-4xl text-center pt-20"
      >
        <motion.p variants={rise} className="eyebrow mb-6">
          {brand.eyebrow}
        </motion.p>

        <motion.h1
          variants={rise}
          className="font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          Good food.
          <br />
          <span className="italic font-light text-gold">Better moments.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          className="mx-auto mt-8 max-w-xl text-base text-sand md:text-lg"
        >
          {brand.description}
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-gold px-8 py-3 font-body text-sm uppercase tracking-widest text-espresso transition-transform hover:scale-105"
          >
            Reserve a table
          </Link>
          <Link
            href="/menu"
            className="rounded-full border border-sand/40 px-8 py-3 font-body text-sm uppercase tracking-widest text-cream transition-colors hover:border-gold hover:text-gold"
          >
            View menu
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-sand"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-sand/40 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
