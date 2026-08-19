"use client";

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
          {/* Placeholder — replace with a real interior/plating photo */}
          <div className="flex h-full w-full items-center justify-center border border-sand/10 font-body text-xs uppercase tracking-widest text-sand/50">
            Photo placeholder
          </div>
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
            <br />a lounge by night.
          </h2>
          <p className="mt-6 max-w-md text-sand">
            Placeholder copy — replace with Moments&rsquo; real story: how it
            started, what the space feels like, and what makes a visit
            different at 9am versus 9pm. Two or three short paragraphs work
            best here.
          </p>
          <p className="mt-4 max-w-md text-sand">
            Second paragraph placeholder — mention the food philosophy,
            local ingredients, or the team behind the kitchen and bar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
