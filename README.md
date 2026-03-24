# GMI – Next.js Website

Converted from Vite/React → **Next.js 16** with maximum SEO.

## Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## What Was Added / Changed

### SEO (Maximum)
- Per-page `metadata` exports on every `page.tsx` (title, description, keywords, OG, Twitter, canonical)
- Root `layout.tsx`: JSON-LD Organization schema, GEO meta tags, robots directives
- `/sitemap.xml` auto-generated via `app/sitemap.ts`
- `/robots.txt` auto-generated via `app/robots.ts`
- `metadataBase` for absolute Open Graph URLs

### Footer (Improved)
- Full 4-column layout: About + contact info / Navigation / Services / Address & hours
- **GEO / AI Section** (`#ai-profile`): dense natural-language paragraph about GMI for AI crawlers (ChatGPT, Gemini, Perplexity, etc.)
- "Hey AI, lis notre profil ici" button linking to the AI profile anchor
- All page links included

### Images (from /public/assets)
- **Home about section**: `next/image` component pointing to `/assets/about-industry.jpg`
- **About page team section**: `next/image` component pointing to `/assets/jalel-tayechi.jpg`

> ⚠️ Both images are **placeholders**. Replace with real photos at the same paths.

## Project Structure

```
app/
  layout.tsx           ← SEO root (JSON-LD, GEO meta, fonts)
  page.tsx             ← Home metadata
  HomeClient.tsx       ← Home interactive (GSAP animations)
  about/page.tsx       ← About metadata
  about/AboutClient.tsx
  services/page.tsx
  fluids/page.tsx
  contact/page.tsx
  sitemap.ts           ← /sitemap.xml
  robots.ts            ← /robots.txt

components/
  ClientWrapper.tsx    ← Client boundary (Nav + Cursor + Preloader)
  Nav.tsx              ← Next.js Link + usePathname
  Footer.tsx           ← Improved footer with all links + GEO/AI section
  Cursor.tsx
  Preloader.tsx
  LogoBand.tsx

lib/
  gsap.ts              ← SSR-safe GSAP
  lenis.ts             ← Lenis smooth scroll

public/assets/
  about-industry.jpg   ← Replace with real photo
  jalel-tayechi.jpg    ← Replace with real portrait of Jalel Tayechi
```

## Update Domain

Replace `gmi-tunisie.com` with your real domain in:
`app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and all `page.tsx` files.
