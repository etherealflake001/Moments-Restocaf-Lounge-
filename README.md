# Moments Resto Café & Lounge — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## What's here

A one-page marketing site (`/`) plus a full menu page (`/menu`) and a
reservation/contact page (`/contact`). Motion is used deliberately, not
decoratively:

- Page-load sequence on the hero (staggered headline + CTA reveal)
- A signature "candlelight bokeh" glow drifting behind the hero — the
  recurring warm-light mood from the brand's evening lounge photography
- Scroll-triggered reveals on section headings, the menu list, and the gallery
- A horizontal scroll-snap gallery strip
- An auto-scrolling testimonials marquee
- `prefers-reduced-motion` is respected globally (see `app/globals.css`)

## Everything is placeholder content right now

I could not pull content directly from Instagram (the platform blocks
automated access), so **all copy, menu items, prices, hours, address, and
photos in this build are placeholders** clearly marked for you to replace.
Real photos you send over should be dropped into `/public/images/` and
referenced from `lib/content.ts`.

Two places hold everything worth editing:

1. **`lib/content.ts`** — every text string on the site: name, tagline,
   hours, address, phone, menu items, testimonials, image list. Edit this
   one file and it updates the whole site.
2. **`/public/images/`** — drop real photos here (see naming used in
   `lib/content.ts` → `galleryImages`), then swap the `Photo placeholder`
   `<div>` blocks in `components/About.tsx` and `components/Gallery.tsx`
   for `next/image` tags pointing at them.

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

1. Push this folder to a new GitHub repo.
2. Import the repo in Vercel — no configuration needed, Vercel detects
   Next.js automatically.
3. Add any environment variables you introduce (e.g. for the contact
   form's email service) in the Vercel project settings.

## Contact form

The `/contact` form is front-end only right now — submitting shows a
confirmation state but doesn't send anywhere. Wire it up to a service like
Formspree, Resend, or a custom API route before launch.

## Budget note

This build keeps scope deliberately lean (single design system, CSS/Framer
Motion animation rather than heavy video or 3D, no CMS) to fit a modest
budget while still giving the site a distinct, motion-forward identity.
If you later want a booking system, a CMS so staff can edit the menu
without touching code, or multilingual support, those are good next
additions — just scoped separately since they add real build time.
