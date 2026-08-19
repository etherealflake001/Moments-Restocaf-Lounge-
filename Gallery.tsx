"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-espresso py-28 md:py-36">
      <div className="container-px mx-auto mb-14 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="eyebrow mb-4"
        >
          The gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl text-cream sm:text-4xl md:text-5xl"
        >
          Moments, captured
        </motion.h2>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-20">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="relative aspect-[3/4] w-[72vw] shrink-0 snap-center overflow-hidden rounded-sm bg-panel sm:w-[38vw] md:w-[26vw] lg:w-[22vw]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 72vw, (max-width: 768px) 38vw, (max-width: 1024px) 26vw, 22vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
