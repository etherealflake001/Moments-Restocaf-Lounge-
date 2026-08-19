"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/lib/content";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // NOTE: this form is front-end only. Wire it up to an email/booking
    // service (e.g. Formspree, Resend, or your own API route) before launch.
    setSubmitted(true);
  }

  return (
    <main className="bg-espresso pb-28 pt-40">
      <div className="container-px mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">Reserve a table</p>
          <h1 className="font-display text-4xl leading-tight text-cream sm:text-5xl">
            We&rsquo;ll save
            <br />
            you a moment.
          </h1>

          <div className="mt-12 space-y-8 text-sand">
            <div>
              <p className="mb-2 font-body text-xs uppercase tracking-widest text-gold">
                Address
              </p>
              <p>{brand.address}</p>
            </div>
            <div>
              <p className="mb-2 font-body text-xs uppercase tracking-widest text-gold">
                Contact
              </p>
              <p>{brand.phone}</p>
              <p>{brand.email}</p>
            </div>
            <div>
              <p className="mb-2 font-body text-xs uppercase tracking-widest text-gold">
                Hours
              </p>
              <ul className="space-y-1">
                {brand.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-8">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-sm border border-sand/15 bg-panel p-10 text-center">
              <p className="font-display text-2xl text-gold">
                Request received
              </p>
              <p className="mt-3 text-sand">
                Placeholder confirmation — once the form is wired to a real
                backend, this is where you&rsquo;d confirm next steps.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-sm border border-sand/15 bg-panel p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid gap-6 sm:grid-cols-3">
                <Field label="Date" name="date" type="date" required />
                <Field label="Time" name="time" type="time" required />
                <Field label="Guests" name="guests" type="number" required />
              </div>
              <div>
                <label className="mb-2 block font-body text-xs uppercase tracking-widest text-sand">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-sm border border-sand/20 bg-espresso px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gold px-8 py-3 font-body text-sm uppercase tracking-widest text-espresso transition-transform hover:scale-[1.02]"
              >
                Request reservation
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-body text-xs uppercase tracking-widest text-sand">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-sand/20 bg-espresso px-4 py-3 text-cream outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
