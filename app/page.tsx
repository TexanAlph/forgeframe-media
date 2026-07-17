import Link from "next/link"
import { Check, ArrowRight, Phone } from "lucide-react"
import { LeadForm } from "@/components/lead-form"

/* ------------------------------------------------------------------ *
 * TODO before launch (see README.md):
 *  - PHONE / EMAIL below (currently placeholders, confirm before ship)
 *  - CALENDLY_URL below
 *  - Reel videos in the phone frames (currently temporary placeholders —
 *    swap /showcase/*.mp4 for real HVAC reels: /showcase/hvac-reel-1.mp4 …)
 *  - Owner photos (none fabricated — add when real assets exist)
 * ------------------------------------------------------------------ */
const PHONE = "210-920-4223" // TODO: confirm the HVAC line before launch
const PHONE_TEL = "+12109204223" // TODO: confirm
const EMAIL = "hello@forgeframe.media" // TODO: confirm public inbox
const CALENDLY_URL = "#" // TODO: paste Calendly scheduling URL

// Temporary motion placeholders for the hero phone rack.
// TODO: replace src/poster with real HVAC reels (e.g. /showcase/hvac-reel-1.mp4).
const HERO_REELS = [
  { src: "/showcase/roofing.mp4", poster: "/showcase/roofing.jpg" },
  { src: "/showcase/peptide.mp4", poster: "/showcase/peptide.jpg" },
  { src: "/showcase/chamoy.mp4", poster: "/showcase/chamoy.jpg" },
]

const MARQUEE = [
  "Seasonal know-how",
  "Straight-talk pricing",
  "Scam warnings",
  "Tune-up offers",
  "Financing spots",
  "Recruiting reels",
]

const FORGE = [
  {
    n: "01",
    t: "Film once — 2 minutes.",
    d: "That’s your total on-camera time. Ever. We build your digital spokesperson from it, so every reel features you — without you leaving the truck.",
  },
  {
    n: "02",
    t: "We forge your content.",
    d: "12–20 reels a month, built for your service area: seasonal know-how, straight-talk pricing, scam warnings, seasonal offers — even recruiting spots that bring you techs, not just customers.",
  },
  {
    n: "03",
    t: "Posted everywhere that matters.",
    d: "Facebook, Instagram, YouTube Shorts, TikTok, and your Google Business Profile. Your customers are 35–65 and they live on Facebook. That’s where we win.",
  },
  {
    n: "04",
    t: "Winners become ads.",
    d: "On Growth plans, your best-performing reels get promoted directly into the zip codes you serve — so the content books calls, not just likes.",
  },
]

const PILLARS = [
  {
    tag: "Seasonal urgency",
    hook: "“3 signs your AC won’t survive August.”",
    note: "The reels homeowners search for before it breaks.",
  },
  {
    tag: "Straight-talk pricing",
    hook: "“What a new unit actually costs in 2026 — and when repair beats replace.”",
    note: "The honest answer that earns the quote.",
  },
  {
    tag: "Scam protection",
    hook: "“5 lines a shady tech will tell you.”",
    note: "Positioning you as the honest company in town.",
  },
  {
    tag: "Offers & financing",
    hook: "Tune-up specials and financing spots that fill the shoulder seasons.",
    note: "Content that works when the phones go quiet.",
  },
  {
    tag: "Recruiting reels",
    hook: "Finding techs is as hard as finding leads.",
    note: "We make the reels that bring you both.",
  },
]

const PLANS = [
  {
    name: "Starter",
    price: "$1,599",
    per: "/mo",
    blurb: "Get seen every week.",
    features: [
      "8 reels a month",
      "Your custom AI spokesperson",
      "Posting across all 5 platforms",
      "Monthly content calendar, approved by you",
    ],
    cta: "Book a call",
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,399",
    per: "/mo",
    blurb: "Turn presence into booked calls.",
    features: [
      "12 reels a month",
      "Everything in Starter",
      "Winning reels promoted as ads in your zip codes",
      "Recruiting reels included",
      "Monthly report: views, calls, cost per lead",
    ],
    cta: "Book a call",
    featured: true,
  },
  {
    name: "Territory Partner",
    price: "$3,799",
    per: "/mo",
    blurb: "Lock your whole service area.",
    features: [
      "20 reels a month",
      "Everything in Growth",
      "Hard exclusivity for your full service area",
      "Priority production & same-week turnarounds",
    ],
    cta: "Claim your territory",
    featured: false,
  },
]

const FAQS = [
  {
    q: "Do I have to be on camera?",
    a: "Once, for about 2 minutes. We build your digital spokesperson from that footage and handle everything else.",
  },
  {
    q: "Is this AI?",
    a: "Yes — your face, our AI production line. It’s how you get studio-level volume without studio-level cost or time. You approve every reel before it posts.",
  },
  {
    q: "Will this make me go viral?",
    a: "We don’t sell viral. A million views in Ohio books zero calls in Houston. We build a professional, active presence in front of homeowners in YOUR service area — and put your best content on their phones as ads.",
  },
  {
    q: "Who writes and posts everything?",
    a: "We do. You get a monthly calendar to approve, then it runs without you.",
  },
  {
    q: "Can my competitor sign up too?",
    a: "No. One partner per territory. That’s the point.",
  },
  {
    q: "What’s the commitment?",
    a: "90 days to start, month-to-month after. Presence compounds — quitting in week 3 wastes your money and our work.",
  },
]

const PX = "px-5 sm:px-8 lg:px-12"
const MAX = "mx-auto max-w-[1180px]"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="ff-nav mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 sm:py-2.5 sm:pl-7 sm:pr-2.5">
          <Link href="/" className="font-display text-lg tracking-tight sm:text-xl">
            ForgeFrame<span className="amber"> Media</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm t-dim md:flex">
            <Link href="#forge" className="transition-colors hover:text-[color:var(--ink)]">
              How it works
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-[color:var(--ink)]">
              Pricing
            </Link>
          </nav>
          <Link
            href="#contact"
            className="ff-btn inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm sm:gap-2 sm:px-5"
          >
            Check territory <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24">
        <div className="aurora -left-[10vw] -top-[14vw] h-[46vw] w-[46vw] opacity-40" aria-hidden />
        <div className={`${MAX} ${PX} relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16`}>
          <div>
            <p className="eyebrow reveal">AI video content for HVAC companies</p>
            <h1 className="font-display reveal mt-7 text-[clamp(2.5rem,6.4vw,5rem)]">
              Look like the <em className="amber italic">biggest</em> HVAC company in your service area.
            </h1>
            <p className="reveal mt-7 max-w-xl text-[17px] leading-[1.65] t-dim">
              Homeowners check you out before they ever call. ForgeFrame Media turns 2 minutes of your time into 12–20
              professional video reels a month — your face, your service area, posted everywhere that matters, running
              while your trucks roll.
            </p>
            <div className="reveal mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="#contact"
                className="ff-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px]"
              >
                Check if my territory is open <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#work"
                className="group inline-flex items-center gap-1.5 text-[15px] t-dim transition-colors hover:text-[color:var(--ink)]"
              >
                See sample reels
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="reveal mt-4 text-[13px] t-faint">One partner per territory · Now serving the Texas Triangle</p>
          </div>

          {/* hero phone rack — tilted 9:16 mockups (TODO: real HVAC reels) */}
          <div id="work" className="reveal relative mx-auto flex w-full max-w-[360px] items-center justify-center gap-3 lg:mx-0 lg:ml-auto">
            <div className="ff-film aspect-[9/16] w-[42%] -rotate-6 translate-y-4">
              <video className="h-full w-full object-cover" src={HERO_REELS[0].src} poster={HERO_REELS[0].poster} autoPlay muted loop playsInline preload="metadata" />
            </div>
            <div className="ff-film ff-glow relative z-10 aspect-[9/16] w-[46%]">
              <video className="h-full w-full object-cover" src={HERO_REELS[1].src} poster={HERO_REELS[1].poster} autoPlay muted loop playsInline preload="metadata" />
            </div>
            <div className="ff-film aspect-[9/16] w-[42%] rotate-6 translate-y-4">
              <video className="h-full w-full object-cover" src={HERO_REELS[2].src} poster={HERO_REELS[2].poster} autoPlay muted loop playsInline preload="metadata" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE — what we make */}
      <section className="overflow-hidden border-y py-6">
        <div className="ff-marquee font-display text-3xl italic md:text-4xl">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap t-faint">
              {m}
              <span className="amber text-base not-italic">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM — light paper section */}
      <section className="bg-[#efe9dd] text-[#191510]">
        <div className={`${MAX} ${PX} py-24 md:py-36`}>
          <div className="grid gap-10 md:grid-cols-[.5fr_1.5fr] md:gap-16">
            <p className="eyebrow reveal" style={{ color: "#6b6152" }}>
              Why your quotes go cold
            </p>
            <div className="reveal">
              <p className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08]">
                Every homeowner does the same thing before signing your quote.
              </p>
              <p className="mt-8 max-w-2xl text-[16px] leading-[1.7]" style={{ color: "#5b5348" }}>
                They look you up. And if they find a dead Facebook page, three posts from 2023, and no face behind the
                trucks — your quote drops to the bottom of the pile. Meanwhile, the company posting every single week
                looks like the market leader. Even if you run more trucks than they do.
              </p>
              <p className="mt-8 max-w-2xl font-display text-[clamp(1.3rem,2.6vw,1.9rem)] leading-[1.25]">
                An active, professional presence isn’t marketing fluff. It’s what closes the quote you already gave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — THE FORGE */}
      <section id="forge" className="bg-[var(--bg-soft)] py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal grid gap-4 border-b pb-10 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <p className="eyebrow">The forge</p>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)]">
              Filmed once. <em className="amber italic">Forged</em> monthly.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {FORGE.map((s) => (
              <div key={s.n} className="reveal">
                <span className="font-display text-5xl" style={{ color: "rgba(201,161,95,.4)" }}>
                  {s.n}
                </span>
                <h3 className="font-display mt-3 text-2xl leading-tight">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] t-dim">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE MAKE — content pillars */}
      <section className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal grid gap-4 border-b pb-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <div>
              <p className="eyebrow">Content that sounds like a contractor, not an agency</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.4rem)]">
                Built from what homeowners actually search, fear, and share.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.tag} className="reveal flex flex-col rounded-2xl border bg-[var(--bg-soft)] p-8">
                <span className="eyebrow amber">{p.tag}</span>
                <p className="font-display mt-4 text-[1.35rem] leading-tight">{p.hook}</p>
                <p className="mt-4 text-[14px] leading-[1.6] t-faint">{p.note}</p>
              </div>
            ))}
            {/* Fifth card visually balances the 3-col grid; on lg it fills the empty cell with a soft CTA. */}
            <div className="reveal ff-glow flex flex-col justify-center rounded-2xl border p-8" style={{ borderColor: "rgba(201,161,95,.4)" }}>
              <p className="font-display text-[1.5rem] leading-tight">Your face on every one of them.</p>
              <p className="mt-3 text-[14px] leading-[1.6] t-dim">
                Every pillar is produced in your likeness and voice — so it all sounds like you, without you filming a thing.
              </p>
              <Link href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-[15px] amber">
                Check territory availability <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORY EXCLUSIVITY — dark high-emphasis panel */}
      <section className="py-8 md:py-14">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal relative overflow-hidden rounded-3xl border p-10 sm:p-14 md:p-20" style={{ borderColor: "rgba(201,161,95,.4)", background: "linear-gradient(180deg, var(--bg-soft), #0b0c10)" }}>
            <div className="aurora -right-16 -top-24 h-72 w-72 opacity-30" aria-hidden />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="eyebrow amber">One partner per territory</p>
              <h2 className="font-display mt-5 text-[clamp(2rem,5vw,3.8rem)]">
                When you’re in, your competitors are <em className="amber italic">locked out.</em>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-[1.7] t-dim">
                We cap every service area. If we work with you, we don’t work with the company across town — period.
                Territories are claimed first-come, and they don’t reopen until a partner leaves.
              </p>
              <p className="mt-8 font-display text-[clamp(1rem,2.2vw,1.35rem)]">
                Now serving the Texas Triangle:{" "}
                <span className="amber">San Antonio · Austin · Houston · Dallas–Fort Worth</span>
              </p>
              <Link
                href="#contact"
                className="ff-btn mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px]"
              >
                Check territory availability <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal text-center">
            <p className="eyebrow">Plans</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)]">Pick your firepower.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3 md:items-start">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`reveal relative flex flex-col rounded-2xl border p-8 ${p.featured ? "ff-halo md:-translate-y-3" : ""}`}
                style={p.featured ? { borderColor: "rgba(201,161,95,.45)" } : undefined}
              >
                {p.featured && (
                  <span className="eyebrow absolute -top-3 left-8 rounded-full bg-[var(--amber)] px-3 py-1 text-[10px] text-[#0b0a08]">
                    Most booked
                  </span>
                )}
                <h3 className="font-display text-[1.7rem]">{p.name}</h3>
                <p className="mt-1 text-[14px] t-dim">{p.blurb}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-[2.6rem] leading-none">{p.price}</span>
                  {p.per && <span className="mb-1 text-sm t-faint">{p.per}</span>}
                </div>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] t-dim">
                      <Check className="mt-0.5 h-4 w-4 flex-none amber" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-8 block rounded-full py-3 text-center text-[15px] font-semibold transition ${p.featured ? "ff-btn" : "ff-btn-ghost"}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="reveal mx-auto mt-9 max-w-2xl text-center text-[14px] leading-[1.7] t-faint">
            90-day partnership minimum, month-to-month after. Content compounds — we don’t do one-month experiments.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className={`${MAX} ${PX} grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-20`}>
          <div className="reveal">
            <p className="eyebrow">Straight answers</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)]">Before you ask.</h2>
          </div>
          <div className="reveal border-t">
            {FAQS.map((item) => (
              <details key={item.q} className="group border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6">
                  <span className="font-display text-xl md:text-[1.4rem]">{item.q}</span>
                  <span className="amber text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 text-[15px] leading-[1.7] t-dim">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * TESTIMONIALS — hidden until REAL partner results exist.
       * Do NOT fabricate quotes, star ratings, logos, or "as seen on".
       * Unhide (remove `hidden`) and fill with verbatim, permissioned
       * testimonials only.
       * ---------------------------------------------------------------- */}
      <section hidden aria-hidden className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <p className="eyebrow">What partners say</p>
          {/* TODO: real testimonials here — name, company, city, verbatim quote. */}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <div className="aurora left-1/2 top-0 h-[42vw] w-[42vw] -translate-x-1/2 opacity-30" aria-hidden />
        <div className={`${MAX} ${PX} relative`}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display reveal text-[clamp(2.4rem,6vw,4.4rem)]">
              Your territory <em className="amber italic">won’t</em> stay open.
            </h2>
            <p className="reveal mx-auto mt-5 mb-10 max-w-xl text-[16px] leading-[1.65] t-dim">
              One partner per service area. First come, first forged.
            </p>
          </div>
          <div className="reveal mx-auto max-w-xl">
            <LeadForm />

            {/* Calendly embed — TODO: paste your scheduling URL into CALENDLY_URL */}
            <div className="mt-6 rounded-2xl border p-6 text-center">
              <p className="text-[14px] t-dim">Prefer to just grab a time?</p>
              <Link
                href={CALENDLY_URL}
                className="ff-btn-ghost mt-4 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px]"
              >
                Book a call on Calendly <ArrowRight className="h-4 w-4" />
              </Link>
              {/* TODO: replace the button above with a real Calendly inline embed:
                  <div className="calendly-inline-widget" data-url="CALENDLY_URL" style={{minWidth:'320px',height:'640px'}} /> */}
            </div>

            <p className="mt-6 text-center text-[15px] t-dim">
              Or call/text{" "}
              <a href={`tel:${PHONE_TEL}`} className="amber inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-12">
        <div className={`${MAX} ${PX} flex flex-col items-center justify-center gap-3 text-center`}>
          <span className="font-display text-xl">
            ForgeFrame<span className="amber"> Media</span>
          </span>
          <p className="text-[13px] t-faint">
            San Antonio, TX · Serving the Texas Triangle ·{" "}
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-[var(--ink)]">
              {EMAIL}
            </a>{" "}
            ·{" "}
            <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-[var(--ink)]">
              {PHONE}
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
