import { NextResponse } from "next/server"

export const runtime = "nodejs"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const TO = process.env.LEAD_NOTIFICATION_EMAIL || "ldcalvo1@gmail.com"
const FROM = process.env.LEAD_FROM_EMAIL || "ForgeFrame Leads <leads@apexbuildpartners.com>"

function esc(s: string) {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string))
}

export async function POST(req: Request) {
  let data: Record<string, string> = {}
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 })
  }

  const name = (data.name || "").trim()
  const phone = (data.phone || "").trim()
  const company = (data.company || data.business || "").trim()
  const city = (data.city || "").trim()
  const serviceArea = (data.serviceArea || "").trim()

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 422 })
  }

  if (!RESEND_API_KEY) {
    // Don't lose the lead if email isn't configured — log it and still succeed for the user.
    console.error("[forgeframe lead] RESEND_API_KEY missing. Lead:", { name, phone, company, city, serviceArea })
    return NextResponse.json({ ok: true, warning: "logged" })
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company || "—"],
    ["City", city || "—"],
    ["Service area / ZIPs", serviceArea || "—"],
    ["Phone", phone],
  ]
  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="margin:0 0 4px">New ForgeFrame HVAC territory request 🔥</h2>
      <p style="color:#666;margin:0 0 16px">They want to know if their service area is open.</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#fafafa;white-space:nowrap">${k}</td><td style="padding:8px 12px;border:1px solid #eee">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
    </div>`

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject: `New ForgeFrame HVAC lead — ${name}${company ? ` (${company})` : ""}`,
        html,
      }),
    })
    if (!res.ok) {
      const detail = await res.text()
      console.error("[forgeframe lead] Resend error:", res.status, detail)
      return NextResponse.json({ ok: false, error: "Could not send. Please call/text 210-920-4223." }, { status: 502 })
    }
  } catch (err) {
    console.error("[forgeframe lead] send failed:", err)
    return NextResponse.json({ ok: false, error: "Could not send. Please call/text 210-920-4223." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
