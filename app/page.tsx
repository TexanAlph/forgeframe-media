import Link from "next/link"
import { Instagram, Check, Zap, Flame, Video, Sparkles, ArrowRight, Phone, Star } from "lucide-react"
import { SiteEffects } from "@/components/site-effects"

const SHOWCASE = [
  { src: "/showcase/roofing.mp4", poster: "/showcase/roofing.jpg", tag: "Home Services", title: "Roofing — storm-damage hook" },
  { src: "/showcase/chamoy.mp4", poster: "/showcase/chamoy.jpg", tag: "Local / Food", title: "Chamoy candy — ASMR crave-bait" },
  { src: "/showcase/peptide.mp4", poster: "/showcase/peptide.jpg", tag: "Health / E-com", title: "Founder talking-head" },
]

const SERVICES = [
  { icon: Video, title: "AI Talking-Head Videos", body: "Star in daily videos without ever picking up a camera. We build your digital twin from a few photos and a short voice clip — you just approve the script." },
  { icon: Flame, title: "Scroll-Stopping Content", body: "Product, ASMR, and hook-driven edits engineered to get watched, saved, and shared — built on what actually goes viral, not guesswork." },
  { icon: Zap, title: "Done-For-You, Everywhere", body: "We script, generate, edit, caption, and post to TikTok, Instagram, Facebook, and YouTube. You run your business — we make you famous." },
]

const STEPS = [
  { n: "01", t: "Quick onboarding", d: "Send a few photos and a 30-second voice clip. That's all we ever need from you." },
  { n: "02", t: "We produce your batch", d: "Our AI studio generates a month of scroll-stopping videos in your voice, on-brand." },
  { n: "03", t: "We post daily, everywhere", d: "Consistent presence across every platform. You get the views, the calls, the customers." },
]

const PLANS = [
  { name: "STARTER", price: "999", blurb: "Stay top-of-mind with a steady presence.", videos: "12 reels / month",
    features: ["Posted to Facebook & Instagram", "Professional editing", "Content strategy", "Captions & hashtags"], featured: false },
  { name: "GROWTH", price: "1,499", blurb: "Grow your audience aggressively.", videos: "20 reels / month",
    features: ["Everything in Starter", "Posted to every platform", "Monthly strategy call", "Trending-audio matching"], featured: true },
  { name: "DOMINATE", price: "1,999", blurb: "Own your local market, period.", videos: "30 reels / month",
    features: ["Everything in Growth", "AI talking-head videos", "Priority support", "Lead-funnel landing page"], featured: false },
]

const PROOF = [
  { name: "Mike Johnson", role: "HVAC Shop Owner", quote: "We went from invisible to booked out. The phone actually rings now." },
  { name: "Steve Ramirez", role: "Electrician", quote: "I never have to be on camera and I'm posting every single day. Game changer." },
  { name: "Tony Garcia", role: "Diesel Mechanic", quote: "Best money I spend on marketing. New customers say they found me on Instagram." },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <SiteEffects />
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4 pointer-events-none">
        <nav className="ff-nav-float pointer-events-auto mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-white/10 px-4 py-2.5 sm:px-6 sm:py-3">
          <span className="font-display text-xl sm:text-2xl md:text-3xl italic tracking-tight">
            FORGEFRAME<span className="text-[#ff7a2f]">MEDIA</span>
          </span>
          <a
            href="tel:2109204223"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#ff7a2f] px-3 py-2 text-xs font-bold text-black ff-glow transition hover:brightness-110 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            210-920-4223
          </a>
        </nav>
      </header>

      {/* HERO */}
      <header className="ff-hero relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <canvas id="ff-gl" />
          <div className="ff-blob a bg-[#ff7a2f] w-[55vw] h-[55vw] -top-[10vw] -left-[10vw]" />
          <div className="ff-blob b bg-[#ff3d3d] w-[45vw] h-[45vw] top-[20vw] right-[-10vw]" />
          <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_-10%,rgba(255,122,47,.08),transparent_55%)]" />
          <div className="ff-hero-scrim" aria-hidden="true" />
          <canvas id="ff-particles" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full ff-glass px-4 py-1.5 text-xs font-bold tracking-widest text-[#ff7a2f] uppercase">
            <Sparkles className="h-3.5 w-3.5" /> AI-Powered Content Studio
          </span>
          <h1 className="font-display italic mt-6 text-[12vw] leading-[0.96] md:text-8xl text-balance">
            <span data-word>BECOME</span> <span data-word>THE</span> <span data-word className="ff-hero-accent">#1</span> <span data-word className="ff-hero-accent">NAME</span><br />
            <span data-word>IN</span> <span data-word>YOUR</span> <span data-word>CITY</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base md:text-lg text-white/70">
            ForgeFrame Media produces scroll-stopping short-form video — AI talking-head videos of you and content that actually gets seen — and posts it everywhere. You run your business. We make you unmissable.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#contact" data-magnetic className="ff-shine rounded-full px-7 py-3.5 font-bold text-black ff-glow hover:brightness-105 transition inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#work" data-magnetic className="rounded-full ff-glass px-7 py-3.5 font-bold text-white hover:border-white/30 transition">
              See Our Work
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-white/40">
            <span>TikTok</span><span className="text-[#ff7a2f]">•</span><span>Instagram</span>
            <span className="text-[#ff7a2f]">•</span><span>Facebook</span><span className="text-[#ff7a2f]">•</span><span>YouTube</span>
          </div>
        </div>
      </header>

      {/* WORK / SHOWCASE */}
      <section id="work" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="ff-reveal text-center mb-10">
            <h2 className="font-display italic text-5xl md:text-7xl">CONTENT THAT <span className="text-[#ff7a2f]">STOPS THE SCROLL</span></h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">Every one of these was produced in our AI studio — no film crew, no studio days.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {SHOWCASE.map((v) => (
              <div key={v.src} data-tilt className="ff-reveal ff-card mx-auto w-full max-w-[280px]">
                <div className="ff-phone aspect-[9/16] w-full">
                  <video className="h-full w-full object-cover" src={v.src} poster={v.poster} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff7a2f]">{v.tag}</span>
                  <p className="text-sm text-white/70">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 grid grid-cols-3 gap-6 text-center">
          <div className="ff-reveal"><div className="font-display text-5xl md:text-7xl text-[#ff7a2f] ff-text-glow" data-count="4">0</div><p className="mt-1 text-[11px] uppercase tracking-widest text-white/50">Platforms</p></div>
          <div className="ff-reveal"><div className="font-display text-5xl md:text-7xl text-[#ff7a2f] ff-text-glow" data-count="30">0</div><p className="mt-1 text-[11px] uppercase tracking-widest text-white/50">Reels / month</p></div>
          <div className="ff-reveal"><div className="font-display text-5xl md:text-7xl text-[#ff7a2f] ff-text-glow" data-count="100" data-suffix="%">0</div><p className="mt-1 text-[11px] uppercase tracking-widest text-white/50">Done-for-you</p></div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y border-white/10 py-5">
        <div className="ff-marquee items-center whitespace-nowrap font-display italic text-3xl md:text-5xl text-white/15">
          <span>ROOFERS</span><span className="text-[#ff7a2f]">✦</span><span>HVAC</span><span className="text-[#ff7a2f]">✦</span><span>ELECTRICIANS</span><span className="text-[#ff7a2f]">✦</span><span>PLUMBERS</span><span className="text-[#ff7a2f]">✦</span><span>MED SPAS</span><span className="text-[#ff7a2f]">✦</span><span>RESTAURANTS</span><span className="text-[#ff7a2f]">✦</span><span>AUTO SHOPS</span><span className="text-[#ff7a2f]">✦</span><span>CONTRACTORS</span><span className="text-[#ff7a2f]">✦</span>
          <span>ROOFERS</span><span className="text-[#ff7a2f]">✦</span><span>HVAC</span><span className="text-[#ff7a2f]">✦</span><span>ELECTRICIANS</span><span className="text-[#ff7a2f]">✦</span><span>PLUMBERS</span><span className="text-[#ff7a2f]">✦</span><span>MED SPAS</span><span className="text-[#ff7a2f]">✦</span><span>RESTAURANTS</span><span className="text-[#ff7a2f]">✦</span><span>AUTO SHOPS</span><span className="text-[#ff7a2f]">✦</span><span>CONTRACTORS</span><span className="text-[#ff7a2f]">✦</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="ff-reveal font-display italic text-5xl md:text-7xl text-center mb-12">WHAT WE <span className="text-[#ff7a2f]">DO</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} data-tilt className="ff-reveal ff-card ff-glass rounded-2xl p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff7a2f]/15 text-[#ff7a2f] ff-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display italic text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="ff-reveal font-display italic text-5xl md:text-7xl text-center mb-12">DEAD <span className="text-[#ff7a2f]">SIMPLE</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className="ff-reveal ff-glass rounded-2xl p-7">
                <span className="font-display text-5xl text-[#ff7a2f]/40">{s.n}</span>
                <h3 className="mt-2 font-display italic text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="ff-reveal text-center mb-12">
            <h2 className="font-display italic text-5xl md:text-7xl">SIMPLE <span className="text-[#ff7a2f]">PRICING</span></h2>
            <p className="mt-3 text-white/60">Month-to-month. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {PLANS.map((p) => (
              <div key={p.name} className={`ff-reveal ff-card relative rounded-2xl p-7 ff-glass ${p.featured ? "ff-halo border-[#ff7a2f]/50 ff-glow md:-translate-y-3" : ""}`}>
                {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ff7a2f] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">Most Popular</span>}
                <h3 className="font-display italic text-3xl">{p.name}</h3>
                <p className="mt-1 text-sm text-white/55">{p.blurb}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-6xl text-[#ff7a2f]">${p.price}</span>
                  <span className="mb-2 text-sm text-white/50">/mo</span>
                </div>
                <p className="mt-1 text-sm font-bold">{p.videos}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[#ff7a2f]" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className={`mt-7 block rounded-full py-3 text-center font-bold transition ${p.featured ? "bg-[#ff7a2f] text-black ff-glow hover:brightness-110" : "ff-glass text-white hover:border-white/30"}`}>
                  Choose {p.name.charAt(0) + p.name.slice(1).toLowerCase()}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="ff-reveal font-display italic text-5xl md:text-7xl text-center mb-12">THE <span className="text-[#ff7a2f]">RESULTS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROOF.map((t) => (
              <div key={t.name} data-tilt className="ff-reveal ff-glass rounded-2xl p-6">
                <div className="flex gap-0.5 text-[#ff7a2f]">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-3 text-white/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-display italic text-lg">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-[#ff7a2f]">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="relative py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ff-blob a bg-[#ff7a2f] w-[60vw] h-[60vw] left-1/2 -translate-x-1/2 -top-[20vw]" />
        </div>
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-display italic text-6xl md:text-8xl">LET&rsquo;S MAKE YOU <span className="text-[#ff7a2f] ff-text-glow">FAMOUS</span></h2>
          <p className="mt-4 text-white/70">Book a free call and we&rsquo;ll show you exactly what your content will look like — before you pay a dime.</p>
          <div className="mt-8 flex justify-center">
            <a href="tel:2109204223" data-magnetic className="ff-shine rounded-full px-8 py-4 text-lg font-bold text-black ff-glow inline-flex items-center justify-center gap-2"><Phone className="h-5 w-5" /> 210-920-4223</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl italic">FORGEFRAME<span className="text-[#ff7a2f]">MEDIA</span></span>
          <div className="flex items-center gap-5 text-sm text-white/50">
            <a href="https://instagram.com" className="inline-flex items-center gap-1.5 hover:text-white transition"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href="tel:2109204223" className="hover:text-white transition">210-920-4223</a>
          </div>
          <span className="text-xs text-white/30">© ForgeFrame Media · San Antonio, TX</span>
        </div>
      </footer>
    </div>
  )
}
