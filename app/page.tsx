import Link from "next/link"
import { Instagram, Check, Zap, Flame, Video, Sparkles, ArrowRight } from "lucide-react"
import { SiteEffects } from "@/components/site-effects"
import { LeadForm } from "@/components/lead-form"

const SHOWCASE = [
  { src: "/showcase/roofing.mp4", poster: "/showcase/roofing.jpg", tag: "Home Services", title: "Roofing — storm-damage hook that books estimates" },
  { src: "/showcase/chamoy.mp4", poster: "/showcase/chamoy.jpg", tag: "Local / Food", title: "Chamoy candy — crave-bait that drives walk-ins" },
  { src: "/showcase/peptide.mp4", poster: "/showcase/peptide.jpg", tag: "Health / E-com", title: "Founder talking-head — built from photos, no camera" },
]

const DIFFERENCE = [
  { bad: "Chases views and likes", good: "Chases booked customers" },
  { bad: "Posts whatever's trending", good: "Leads with the hook that sells YOUR thing" },
  { bad: "Looks like everyone else's", good: "Stops the scroll in the first second" },
  { bad: "You film it, edit it, and quit by week three", good: "Fully done-for-you — you approve, we ship" },
]

const SERVICES = [
  { icon: Video, title: "You, on camera — without the camera", body: "We build your digital twin from a few photos and a short voice clip, then put you in daily videos you never had to film. You just approve the script." },
  { icon: Flame, title: "Content engineered to convert", body: "Hook-first product, ASMR, and story edits built on what actually makes a stranger stop, save, and call — not guesswork, and not another dance trend." },
  { icon: Zap, title: "Done-for-you, everywhere", body: "We script, generate, edit, caption, and post to TikTok, Instagram, Facebook, and YouTube. You run your business — we keep you unmissable." },
]

const STEPS = [
  { n: "01", t: "Send a few photos + 30 seconds of voice", d: "That's the entire lift on your end. Ever. We handle the rest from here." },
  { n: "02", t: "We produce your batch", d: "A month of scroll-stopping video in your voice, on-brand, engineered around what gets you called." },
  { n: "03", t: "We post daily, everywhere", d: "Consistent presence across every platform — so you're the name they already recognize when they need you." },
]

const PLANS = [
  { name: "STAY SEEN", price: "999", blurb: "Never disappear from the feed again.", videos: "12 reels / month",
    features: ["Posted to Facebook & Instagram", "Hook-first editing", "Content strategy for your offer", "Captions & hashtags"], featured: false },
  { name: "GET BOOKED", price: "1,499", blurb: "Turn attention into booked jobs.", videos: "20 reels / month",
    features: ["Everything in Stay Seen", "Posted to every platform", "Monthly strategy call", "Trending-audio matching", "Your digital-twin talking-head"], featured: true },
  { name: "OWN THE MARKET", price: "1,999", blurb: "Become the obvious choice in your city.", videos: "30 reels / month",
    features: ["Everything in Get Booked", "Daily posting cadence", "Priority production", "Lead-funnel landing page"], featured: false },
]

const FAQS = [
  {
    q: "Do I have to be on camera?",
    a: "No. We build a digital twin of you from a few photos and a 30-second voice clip, then produce talking-head videos in your likeness and voice. You never film anything — you just approve the script.",
  },
  {
    q: "Will it look cheap or obviously AI?",
    a: "Watch the work above — that's the bar. If it looks like the slop you've seen, we don't ship it. Production quality is the entire reason we exist.",
  },
  {
    q: "Does this actually get customers, or just views?",
    a: "Views are the vanity metric everyone else sells. We build every video around a hook that makes the right person stop and book — and we measure presence and inbound, not likes. If a video only earns applause, it failed.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. Month-to-month, cancel anytime. We earn the next month with the work, not with a contract.",
  },
  {
    q: "What do you actually need from me?",
    a: "A few photos, a 30-second voice clip, and your offer. That's it. From there it's fully done-for-you: we script, produce, caption, and post.",
  },
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
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#ff7a2f] px-3 py-2 text-xs font-bold text-black ff-glow transition hover:brightness-110 sm:gap-2 sm:px-4 sm:text-sm"
          >
            Free sample reel
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
            <Sparkles className="h-3.5 w-3.5" /> Short-form video, engineered to sell
          </span>
          <h1 className="font-display italic mt-6 text-[12vw] leading-[0.96] md:text-8xl text-balance">
            <span data-word>MOST</span> <span data-word>REELS</span> <span data-word>CHASE</span> <span data-word>VIEWS.</span><br />
            <span data-word>OURS</span> <span data-word>CHASE</span> <span data-word className="ff-hero-accent">CUSTOMERS.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base md:text-lg text-white/70">
            We produce scroll-stopping short-form video — talking-head, product, and hook-driven — built on what actually converts, then post it everywhere. You never touch a camera. You run your business. We make the phone ring.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#contact" data-magnetic className="ff-shine rounded-full px-7 py-3.5 font-bold text-black ff-glow hover:brightness-105 transition inline-flex items-center justify-center gap-2">
              Get a free sample reel <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#work" data-magnetic className="rounded-full ff-glass px-7 py-3.5 font-bold text-white hover:border-white/30 transition">
              See our work
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/40">Free sample of your business · No camera · No contract</p>
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
            <p className="mt-3 text-white/60 max-w-xl mx-auto">Every one of these was produced in our studio — no film crew, no studio days, no owner on camera.</p>
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

      {/* PROBLEM / STAKES */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="ff-reveal font-display italic text-4xl md:text-6xl leading-[1.02]">
            YOU&rsquo;RE NOT LOSING TO A <span className="text-[#ff7a2f]">BETTER BUSINESS.</span>
          </h2>
          <p className="ff-reveal mx-auto mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
            You film something, it flops, and you stop. Meanwhile the guy across town — who isn&rsquo;t better at the actual work than you — shows up in the feed every single day. So when someone needs what you both sell, his name is the one they already know. That&rsquo;s not a talent gap. It&rsquo;s a <span className="text-white">presence</span> gap — and it&rsquo;s costing you the call.
          </p>
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
          <span>REALTORS</span><span className="text-[#ff7a2f]">✦</span><span>DENTISTS</span><span className="text-[#ff7a2f]">✦</span><span>MED SPAS</span><span className="text-[#ff7a2f]">✦</span><span>ATTORNEYS</span><span className="text-[#ff7a2f]">✦</span><span>PLASTIC SURGEONS</span><span className="text-[#ff7a2f]">✦</span><span>ROOFERS</span><span className="text-[#ff7a2f]">✦</span><span>CHIROPRACTORS</span><span className="text-[#ff7a2f]">✦</span><span>AUTO DEALERS</span><span className="text-[#ff7a2f]">✦</span><span>FINANCIAL ADVISORS</span><span className="text-[#ff7a2f]">✦</span><span>DERMATOLOGISTS</span><span className="text-[#ff7a2f]">✦</span><span>HVAC</span><span className="text-[#ff7a2f]">✦</span><span>MORTGAGE BROKERS</span><span className="text-[#ff7a2f]">✦</span>
          <span>REALTORS</span><span className="text-[#ff7a2f]">✦</span><span>DENTISTS</span><span className="text-[#ff7a2f]">✦</span><span>MED SPAS</span><span className="text-[#ff7a2f]">✦</span><span>ATTORNEYS</span><span className="text-[#ff7a2f]">✦</span><span>PLASTIC SURGEONS</span><span className="text-[#ff7a2f]">✦</span><span>ROOFERS</span><span className="text-[#ff7a2f]">✦</span><span>CHIROPRACTORS</span><span className="text-[#ff7a2f]">✦</span><span>AUTO DEALERS</span><span className="text-[#ff7a2f]">✦</span><span>FINANCIAL ADVISORS</span><span className="text-[#ff7a2f]">✦</span><span>DERMATOLOGISTS</span><span className="text-[#ff7a2f]">✦</span><span>HVAC</span><span className="text-[#ff7a2f]">✦</span><span>MORTGAGE BROKERS</span><span className="text-[#ff7a2f]">✦</span>
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

      {/* THE DIFFERENCE */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="ff-reveal font-display italic text-5xl md:text-7xl text-center mb-12">EVERYONE ELSE VS. <span className="text-[#ff7a2f]">US</span></h2>
          <div className="ff-reveal ff-glass rounded-2xl overflow-hidden">
            {DIFFERENCE.map((d, i) => (
              <div key={d.good} className={`grid grid-cols-1 sm:grid-cols-2 ${i > 0 ? "border-t border-white/10" : ""}`}>
                <div className="flex items-start gap-3 p-5 text-white/45 sm:border-r sm:border-white/10">
                  <span className="mt-0.5 text-white/25">✕</span>
                  <span className="text-sm line-through decoration-white/20">{d.bad}</span>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[#ff7a2f]" />
                  <span className="text-sm font-medium text-white/90">{d.good}</span>
                </div>
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
            <p className="mt-3 text-white/60">Month-to-month. Cancel anytime. We earn the next month.</p>
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

      {/* FAQ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="ff-reveal font-display italic text-5xl md:text-7xl text-center mb-12">STRAIGHT <span className="text-[#ff7a2f]">ANSWERS</span></h2>
          <div className="ff-reveal ff-glass rounded-2xl divide-y divide-white/10">
            {FAQS.map((item) => (
              <details key={item.q} className="group px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                  <span className="font-display italic text-xl md:text-2xl">{item.q}</span>
                  <span className="text-2xl text-[#ff7a2f] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-white/70">{item.a}</p>
              </details>
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
          <h2 className="font-display italic text-6xl md:text-8xl">BE THE NAME THEY <span className="text-[#ff7a2f] ff-text-glow">ALREADY KNOW</span></h2>
          <p className="mt-4 mb-8 text-white/70">Tell us about your business and we&rsquo;ll build you a free sample reel of it — so you see exactly what your content will look like before you pay a dime.</p>
          <LeadForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl italic">FORGEFRAME<span className="text-[#ff7a2f]">MEDIA</span></span>
          <div className="flex items-center gap-5 text-sm text-white/50">
            <a href="https://instagram.com" className="inline-flex items-center gap-1.5 hover:text-white transition"><Instagram className="h-4 w-4" /> Instagram</a>
            <a href="#contact" className="hover:text-white transition">Get a free sample reel</a>
          </div>
          <span className="text-xs text-white/30">© ForgeFrame Media · San Antonio, TX</span>
        </div>
      </footer>
    </div>
  )
}
