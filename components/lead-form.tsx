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
      company: String(fd.get("company") || ""),
      city: String(fd.get("city") || ""),
      serviceArea: String(fd.get("serviceArea") || ""),
      phone: String(fd.get("phone") || ""),
    }
    try {
      // Wired to the built-in Next.js route (/api/lead → Resend).
      // TODO: if you'd rather use Formspree, swap this fetch for your Formspree endpoint.
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
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--amber)] text-[#0b0a08]">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-3xl">Territory request in.</h3>
        <p className="mt-2 text-white/70">
          We&rsquo;ll check if your service area is still open and reach out shortly. Keep an eye on your phone.
        </p>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[color:var(--amber)] focus:bg-white/[0.05]"
  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70"

  return (
    <form onSubmit={onSubmit} className="ff-glass rounded-2xl p-6 sm:p-8 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="lf-name" className={labelClass}>
            Name *
          </label>
          <input id="lf-name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="lf-company" className={labelClass}>
            Company *
          </label>
          <input id="lf-company" name="company" required autoComplete="organization" placeholder="Your HVAC company" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="lf-city" className={labelClass}>
            City *
          </label>
          <input id="lf-city" name="city" required autoComplete="address-level2" placeholder="e.g. San Antonio" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="lf-phone" className={labelClass}>
            Phone *
          </label>
          <input id="lf-phone" name="phone" required type="tel" autoComplete="tel" placeholder="(210) 555-0123" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="lf-area" className={labelClass}>
            Service area / ZIPs *
          </label>
          <input id="lf-area" name="serviceArea" required placeholder="The zips or towns you cover" className={inputClass} />
        </div>
      </div>

      {status === "error" && <p className="mt-3 text-sm text-[color:var(--amber)]">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="ff-btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold transition hover:brightness-105 disabled:opacity-60"
      >
        {status === "loading" ? "Checking…" : "Check availability"}
        {status !== "loading" && <ArrowRight className="h-4 w-4" />}
      </button>
      <p className="mt-3 text-center text-xs text-white/40">One partner per territory · Texas Triangle</p>
    </form>
  )
}
