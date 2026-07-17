# ForgeFrame Media — HVAC site

AI video content for HVAC companies across the Texas Triangle. Next.js 16 (App Router) + Tailwind v4,
deployed on Vercel. Dark editorial style system (Playfair + Inter, amber accent, film grain).

```bash
npm install --legacy-peer-deps
npm run dev
```

## ⚠️ Swap before launch (every placeholder / TODO)

| Where | What to change |
| --- | --- |
| `app/page.tsx` → `PHONE` / `PHONE_TEL` | Real HVAC phone line (currently `210-920-4223`, **confirm**) |
| `app/page.tsx` → `EMAIL` | Public inbox (currently `hello@forgeframe.media`, **confirm**) |
| `app/page.tsx` → `CALENDLY_URL` | Paste your Calendly scheduling URL, then swap the button for the real inline embed (comment is in-file) |
| `app/page.tsx` → `HERO_REELS` | Temporary placeholder reels. Replace `src`/`poster` with real HVAC reels (`/showcase/hvac-reel-1.mp4` …) |
| `app/page.tsx` → hidden testimonials `<section hidden>` | Un-hide and fill with **real, permissioned** testimonials only. No fabricated quotes/stars/logos. |
| `app/api/lead/route.ts` (or `.env`) | Lead delivery. Uses **Resend** — set `RESEND_API_KEY`, `LEAD_NOTIFICATION_EMAIL`, `LEAD_FROM_EMAIL` (see `.env.example`). Until a key is set, leads are logged server-side and the form still succeeds. |
| Owner photos | None fabricated. Add real photos when available. |

### Lead form / Formspree note
The brief specified a **Formspree** endpoint. This site keeps the existing **Next.js `/api/lead` → Resend**
route instead (server-side, no third-party form, already wired). To switch to Formspree, replace the `fetch("/api/lead", …)`
call in `components/lead-form.tsx` with your Formspree endpoint. Territory form fields: name, company, city, service area/ZIPs, phone.

## Decisions worth confirming
- **Brand name:** kept **ForgeFrame Media** (your live brand + domain `forgeframe.media`). The source brief said
  "Forged For Media." If you want the site to read "Forged For Media" instead, tell me and I'll flip the nav/footer/SEO/hero copy.
- **Design:** the brief's "FORGED" steel/ember system was **not** applied — per your instruction the HVAC content was poured
  into the existing amber/editorial style. The brief's "heat treatment" (one accent word per headline) is rendered as the
  existing `.amber italic` accent (biggest / Forged / locked out / won't).

## Guardrails honored
- The forbidden price from the brief never appears anywhere (code, comments, or metadata).
- No fabricated testimonials, review stars, client logos, "as seen on" bars, or invented stats.
- No guarantees of leads, rankings, or revenue.
- Mobile-first; `prefers-reduced-motion` respected; visible keyboard focus states; semantic HTML.
