import Link from "next/link"
import { Instagram, Check, ArrowRight } from "lucide-react"
import { LeadForm } from "@/components/lead-form"

const SHOWCASE = [
  { src: "/showcase/roofing.mp4", poster: "/showcase/roofing.jpg", tag: "Home Services", title: "Storm-damage hook that books estimates" },
  { src: "/showcase/chamoy.mp4", poster: "/showcase/chamoy.jpg", tag: "Local / Food", title: "Crave-bait that drives walk-ins" },
  { src: "/showcase/peptide.mp4", poster: "/showcase/peptide.jpg", tag: "Health / E-com", title: "Founder talking-head, built from photos" },
]

const MARQUEE = ["Realtors", "Dentists", "Med Spas", "Attorneys", "Plastic Surgeons", "Roofers", "Chiropractors", "Auto Dealers", "Financial Advisors", "Dermatologists", "HVAC", "Mortgage Brokers"]

const DIFFERENCE = [
  { bad: "Chases views and likes", good: "Chases booked customers and calls" },
  { bad: "Posts whatever's trending that week", good: "Leads with the hook that sells your offer" },
  { bad: "Cheap, templated, and forgettable", good: "Broadcast-grade production that stops the scroll" },
  { bad: "Looks like every other local business", good: "Premium quality that matches your price point" },
  { bad: "You film it, edit it, and quit by week three", good: "Fully done-for-you — you just approve" },
]

const SERVICES = [
  { n: "01", title: "You, on camera — without the camera", body: "We build your digital twin from a few photos and a short voice clip, then put you in daily videos you never had to film. You just approve the script." },
  { n: "02", title: "Content built to convert", body: "Hook-first product, ASMR, and story edits built on what actually makes a stranger stop, save, and call — not guesswork, and not another trend." },
  { n: "03", title: "Done-for-you, everywhere", body: "We script, produce, edit, caption, and post to TikTok, Instagram, Facebook, and YouTube. You run your business — we keep you unmissable." },
]

const STEPS = [
  { n: "01", t: "Send a few photos + 30 seconds of voice", d: "That's the entire lift on your end. Ever. We handle everything from here." },
  { n: "02", t: "We produce your batch", d: "A month of scroll-stopping video in your voice, on-brand, built around what gets you called." },
  { n: "03", t: "We post daily, everywhere", d: "A steady presence across every platform — so you're the name they already know when they need you." },
]

const PLANS = [
  { name: "Stay Seen", price: "1,500", blurb: "Never disappear from the feed again.", videos: "12 reels / month",
    features: ["Posted to Facebook & Instagram", "Hook-first editing", "Content strategy for your offer", "Captions & hashtags"], featured: false },
  { name: "Get Booked", price: "2,900", blurb: "Turn attention into booked clients.", videos: "20 reels / month",
    features: ["Everything in Stay Seen", "Posted to every platform", "Monthly strategy call", "Trending-audio matching", "Your digital-twin talking-head"], featured: true },
  { name: "Own the Market", price: "3,900", blurb: "Become the obvious choice in your market.", videos: "30 reels / month",
    features: ["Everything in Get Booked", "Daily posting cadence", "Priority production", "Lead-funnel landing page", "Lower cost per reel than Get Booked"], featured: false },
]

const FAQS = [
  { q: "Do I have to be on camera?", a: "No. We build a digital twin of you from a few photos and a 30-second voice clip, then produce talking-head videos in your likeness and voice. You never film anything — you just approve the script." },
  { q: "Will it look cheap or obviously AI?", a: "Watch the work above — that's the bar. If it looks like the slop you've seen, we don't ship it. Production quality is the entire reason we exist." },
  { q: "Does this actually get customers, or just views?", a: "Views are the vanity metric everyone else sells. We build every video around a hook that makes the right person stop and book — and we measure presence and inbound, not likes." },
  { q: "Am I locked into a contract?", a: "No. Month-to-month, cancel anytime. We earn the next month with the work, not with a contract." },
  { q: "What do you actually need from me?", a: "A few photos, a 30-second voice clip, and your offer. That's it. From there it's fully done-for-you: we script, produce, caption, and post." },
]

const PX = "px-5 sm:px-8 lg:px-12"
const MAX = "mx-auto max-w-[1180px]"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className={`${MAX} ${PX} flex items-center justify-between py-5`}>
          <Link href="/" className="font-display text-2xl tracking-tight">
            ForgeFrame<span className="amber"> Media</span>
          </Link>
          <nav className="hidden items-center gap-9 text-sm t-dim sm:flex">
            <Link href="#work" className="transition-colors hover:text-[var(--ink)]">Work</Link>
            <Link href="#pricing" className="transition-colors hover:text-[var(--ink)]">Pricing</Link>
          </nav>
          <Link href="#contact" className="ff-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm">
            Get a free reel <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 md:pb-24">
        <div className="aurora -left-[10vw] -top-[14vw] h-[46vw] w-[46vw] opacity-40" aria-hidden />
        <div className={`${MAX} ${PX} relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16`}>
          <div>
            <p className="eyebrow reveal">Short-form video studio · San Antonio</p>
            <h1 className="font-display reveal mt-7 text-[clamp(2.7rem,7vw,5.4rem)]">
              Most reels chase views.
              <br />
              Ours chase <em className="amber italic">customers.</em>
            </h1>
            <p className="reveal mt-7 max-w-lg text-[17px] leading-[1.65] t-dim">
              We produce scroll-stopping short-form video — talking-head, product, and hook-driven — built on what actually converts, then post it everywhere. You never touch a camera. You run your business. We make the phone ring.
            </p>
            <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="ff-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px]">
                Get a free sample reel <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#work" className="ff-btn-ghost inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px]">
                See the work
              </Link>
            </div>
            <p className="reveal mt-4 text-[13px] t-faint">Free sample of your business · No camera · No contract</p>
          </div>

          {/* hero reel */}
          <div className="reveal relative mx-auto w-full max-w-[300px] lg:mx-0 lg:ml-auto">
            <div className="ff-film aspect-[9/16]">
              <video className="h-full w-full object-cover" src="/showcase/peptide.mp4" poster="/showcase/peptide.jpg" autoPlay muted loop playsInline preload="metadata" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
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

      {/* WORK */}
      <section id="work" className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal grid gap-6 border-b pb-10 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <p className="eyebrow">Selected work</p>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)]">
              Content that stops the scroll — <span className="t-dim">no crew, no studio days.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {SHOWCASE.map((v) => (
              <figure key={v.src} className="reveal">
                <div className="ff-film mx-auto aspect-[9/16] w-full max-w-[300px]">
                  <video className="h-full w-full object-cover" src={v.src} poster={v.poster} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <figcaption className="mx-auto mt-5 max-w-[300px]">
                  <span className="eyebrow amber">{v.tag}</span>
                  <p className="mt-2 text-[15px] leading-snug t-dim">{v.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT — light paper section */}
      <section className="bg-[#efe9dd] text-[#191510]">
        <div className={`${MAX} ${PX} py-24 md:py-36`}>
          <div className="grid gap-10 md:grid-cols-[.5fr_1.5fr] md:gap-16">
            <p className="eyebrow reveal" style={{ color: "#8a7f6d" }}>The real problem</p>
            <div className="reveal">
              <p className="font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08]">
                You&rsquo;re not losing to a better business. You&rsquo;re losing to the one that simply
                <span style={{ color: "#191510" }}> shows up every day.</span>
              </p>
              <p className="mt-8 max-w-xl text-[16px] leading-[1.7]" style={{ color: "#5b5348" }}>
                You film something, it flops, and you stop. Meanwhile the guy across town — who isn&rsquo;t better at the work than you — is in the feed every single day. So when someone needs what you both sell, his name is the one they already know. That&rsquo;s not a talent gap. It&rsquo;s a presence gap — and it&rsquo;s costing you the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <p className="eyebrow reveal">What we do</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.n} className="reveal bg-[var(--bg-soft)] p-8 md:p-10">
                <span className="font-display text-3xl amber">{s.n}</span>
                <h3 className="font-display mt-5 text-[1.6rem] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] t-dim">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal text-center">
            <p className="eyebrow">The difference</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)]">
              Why yours will <em className="amber italic">actually work.</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 md:items-stretch">
            <div className="reveal flex flex-col rounded-2xl border p-8 sm:p-10">
              <p className="eyebrow t-faint">The typical content guy</p>
              <p className="font-display mt-3 text-3xl t-faint">$99-a-month spray &amp; pray</p>
              <ul className="mt-8 space-y-4">
                {DIFFERENCE.map((d) => (
                  <li key={d.bad} className="flex items-start gap-3 t-faint">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px]">✕</span>
                    <span className="text-[15px] leading-snug">{d.bad}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal ff-glow relative flex flex-col overflow-hidden rounded-2xl border p-8 sm:p-10" style={{ borderColor: "rgba(201,161,95,.4)" }}>
              <div className="aurora -right-16 -top-20 h-52 w-52 opacity-30" aria-hidden />
              <p className="eyebrow amber">ForgeFrame</p>
              <p className="font-display mt-3 text-3xl">Premium, built to convert</p>
              <ul className="mt-8 space-y-4">
                {DIFFERENCE.map((d) => (
                  <li key={d.good} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--amber)] text-[#0b0a08]"><Check className="h-3 w-3" strokeWidth={3} /></span>
                    <span className="text-[15px] leading-snug">{d.good}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="reveal mx-auto mt-9 max-w-2xl text-center text-[15px] leading-[1.7] t-dim">
            You can see the difference in the first frame: broadcast-grade production that makes a $2M listing or a top practice look the part. Our rule — if it isn&rsquo;t good enough to run as a paid ad, we don&rsquo;t ship it.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--bg-soft)] py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal grid gap-4 border-b pb-10 md:grid-cols-[.9fr_1.1fr] md:items-end">
            <p className="eyebrow">How it works</p>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)]">Dead simple on your end.</h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="reveal">
                <span className="font-display text-5xl" style={{ color: "rgba(201,161,95,.4)" }}>{s.n}</span>
                <h3 className="font-display mt-3 text-2xl">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] t-dim">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28">
        <div className={`${MAX} ${PX}`}>
          <div className="reveal text-center">
            <p className="eyebrow">Simple pricing</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)]">Month-to-month. Cancel anytime.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3 md:items-start">
            {PLANS.map((p) => (
              <div key={p.name} className={`reveal relative flex flex-col rounded-2xl border p-8 ${p.featured ? "ff-halo md:-translate-y-3" : ""}`} style={p.featured ? { borderColor: "rgba(201,161,95,.45)" } : undefined}>
                {p.featured && <span className="eyebrow absolute -top-3 left-8 rounded-full bg-[var(--amber)] px-3 py-1 text-[10px] text-[#0b0a08]">Recommended</span>}
                <h3 className="font-display text-[1.7rem]">{p.name}</h3>
                <p className="mt-1 text-[14px] t-dim">{p.blurb}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl">${p.price}</span>
                  <span className="mb-2 text-sm t-faint">/mo</span>
                </div>
                <p className="mt-1 text-[14px] font-medium amber">{p.videos}</p>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] t-dim">
                      <Check className="mt-0.5 h-4 w-4 flex-none amber" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`mt-8 block rounded-full py-3 text-center text-[15px] font-semibold transition ${p.featured ? "ff-btn" : "ff-btn-ghost"}`}>
                  Choose {p.name}
                </Link>
              </div>
            ))}
          </div>
          <p className="reveal mx-auto mt-9 max-w-2xl text-center text-[14px] leading-[1.7] t-faint">
            Each plan starts with a one-time setup from <span className="t-dim">$500</span> — we build your digital twin and dial in your content strategy. Running paid ads? Ad spend is billed separately at cost, never marked up.
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

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <div className="aurora left-1/2 top-0 h-[42vw] w-[42vw] -translate-x-1/2 opacity-30" aria-hidden />
        <div className={`${MAX} ${PX} relative`}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow reveal">Start free</p>
            <h2 className="font-display reveal mt-4 text-[clamp(2.4rem,6vw,4.4rem)]">
              Be the name they <em className="amber italic">already know.</em>
            </h2>
            <p className="reveal mx-auto mt-5 mb-10 max-w-xl text-[16px] leading-[1.65] t-dim">
              Tell us about your business and we&rsquo;ll build you a free sample reel of it — so you see exactly what your content will look like before you pay a dime.
            </p>
          </div>
          <div className="reveal mx-auto max-w-xl">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-12">
        <div className={`${MAX} ${PX} flex flex-col items-center justify-between gap-5 sm:flex-row`}>
          <span className="font-display text-xl">ForgeFrame<span className="amber"> Media</span></span>
          <div className="flex items-center gap-6 text-sm t-dim">
            <a href="https://instagram.com" className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href="#contact" className="transition-colors hover:text-[var(--ink)]">Get a free reel</a>
          </div>
          <span className="text-[13px] t-faint">© ForgeFrame Media · San Antonio, TX</span>
        </div>
      </footer>
    </div>
  )
}
