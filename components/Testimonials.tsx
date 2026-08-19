import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-panel py-20">
      <div className="no-scrollbar flex w-max animate-marquee gap-16">
        {doubled.map((t, i) => (
          <div key={i} className="flex w-[420px] shrink-0 flex-col gap-4">
            <p className="font-display text-xl italic leading-snug text-cream md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <span className="font-body text-xs uppercase tracking-widest text-gold">
              {t.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
