import Link from "next/link";
import { brand } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="hairline bg-espresso py-16">
      <div className="container-px mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-script italic text-2xl text-cream">
            {brand.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-sand">
            {brand.fullName}
          </p>
        </div>

        <div>
          <p className="mb-3 font-body text-xs uppercase tracking-widest text-gold">
            Hours
          </p>
          <ul className="space-y-1 text-sm text-sand">
            {brand.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-8">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-body text-xs uppercase tracking-widest text-gold">
            Find us
          </p>
          <ul className="space-y-1 text-sm text-sand">
            <li>{brand.address}</li>
            <li>{brand.phone}</li>
            <li>{brand.email}</li>
            <li>
              <Link
                href={brand.instagram}
                target="_blank"
                className="transition-colors hover:text-gold"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto mt-12 max-w-6xl text-xs text-sand/50">
        © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
      </div>
    </footer>
  );
}
