"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setError("")
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      business: String(fd.get("business") || ""),
      handle: String(fd.get("handle") || ""),
      message: String(fd.get("message") || ""),
    }
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) {
        setError(json.error || "Something went wrong. Please try again.")
        setStatus("error")
        return
      }
      setStatus("done")
      form.reset()
    } catch {
      setError("Network error. Please try again.")
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <div className="ff-glass rounded-2xl p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a2f] text-black ff-glow">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display italic text-3xl">You&rsquo;re in.</h3>
        <p className="mt-2 text-white/70">We&rsquo;ll reach out shortly to build your free sample reel. Keep an eye on your phone.</p>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-[#ff7a2f]/70 focus:bg-white/[0.06]"

  return (
    <form onSubmit={onSubmit} className="ff-glass rounded-2xl p-6 sm:p-8 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Name *</label>
          <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Phone *</label>
          <input name="phone" required type="tel" autoComplete="tel" placeholder="(210) 555-0123" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Business</label>
          <input name="business" placeholder="Business name & type" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Instagram / website</label>
          <input name="handle" placeholder="@handle or yoursite.com" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">What do you want more of?</label>
          <textarea name="message" rows={3} placeholder="Calls, bookings, walk-ins… tell us the goal (optional)" className={inputClass} />
        </div>
      </div>

      {status === "error" && <p className="mt-3 text-sm text-[#ff7a2f]">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="ff-shine mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-black ff-glow transition hover:brightness-105 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Get my free sample reel"}
        {status !== "loading" && <ArrowRight className="h-4 w-4" />}
      </button>
      <p className="mt-3 text-center text-xs text-white/40">Free sample of your business · No camera required · No contract</p>
    </form>
  )
}
