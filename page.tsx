"use client";

import { motion } from "framer-motion";
import { fullMenu } from "@/lib/content";

export default function MenuPage() {
  return (
    <main className="bg-espresso pb-28 pt-40">
      <div className="container-px mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="eyebrow mb-4">The full menu</p>
          <h1 className="font-display text-4xl text-cream sm:text-5xl">
            What we serve
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sand">
            Placeholder menu — replace every section below with Moments&rsquo;
            real dishes, drinks and prices.
          </p>
        </motion.div>

        <div className="space-y-20">
          {fullMenu.map((section) => (
            <div key={section.category}>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                className="mb-8 font-display text-2xl text-gold md:text-3xl"
              >
                {section.category}
              </motion.h2>
              <ul className="divide-y divide-sand/15">
                {section.items.map((item, i) => (
                  <motion.li
                    key={item.name + i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <div>
                      <h3 className="font-display text-lg text-cream md:text-xl">
                        {item.name}
                      </h3>
                      <p className="mt-1 max-w-md text-sm text-sand">
                        {item.desc}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-gold">
                      {item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
