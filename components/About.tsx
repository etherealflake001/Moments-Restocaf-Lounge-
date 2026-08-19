"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="story" className="bg-espresso py-28 md:py-36">
      <div className="container-px mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-panel"
        >
          <Image
            src="/images/gallery-biggie-burger.jpg"
            alt="The Biggie Burger, with the lounge interior in the background"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-4">Our story</p>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            A café by day,
            <br />a rooftop by night.
          </h2>
          <p className="mt-6 max-w-md text-sand">
            Spread across two floors on Summit Road in Asaba, Moments opens
            as a café at 7:45am for coffee, breakfast and lunch, then
            shifts up to the rooftop lounge from 4pm Wednesday through
            Sunday — grills, Afro-fusion plates and cocktails under the
            evening lights.
          </p>
          <p className="mt-4 max-w-md text-sand">
            Placeholder — this is the space to add the real founding
            story: how Moments started, who&rsquo;s behind the kitchen and
            bar, and what &ldquo;where time pauses and memories stay&rdquo;
            means to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
