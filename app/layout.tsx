import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const siteUrl = "https://www.forgeframe.media"
const siteName = "ForgeFrame Media"
const siteTitle = "ForgeFrame Media — Short-Form Video That Books Customers"
const siteDescription =
  "ForgeFrame Media is a San Antonio short-form video studio that produces scroll-stopping reels engineered to book customers — not just chase views. Done-for-you AI talking-head, product, and hook-driven video, posted everywhere. No camera. No contract."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "short-form video San Antonio",
    "reels for local business",
    "AI talking-head video",
    "done-for-you social media",
    "video content that converts",
    "UGC ads",
    "social media video studio",
    "video marketing San Antonio",
    "TikTok Instagram Reels for business",
  ],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: siteUrl },
  category: "Marketing",
  icons: {
    icon: [{ url: "/forgeframe-mark.svg?v=20260619", type: "image/svg+xml" }],
    shortcut: "/forgeframe-mark.svg?v=20260619",
    apple: "/apple-icon.png?v=20260619",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  appleWebApp: { title: siteName },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const faq = [
  {
    q: "Do I have to be on camera?",
    a: "No. We build a digital twin of you from a few photos and a 30-second voice clip, then produce talking-head videos in your likeness and voice. You never film anything — you just approve the script.",
  },
  {
    q: "Will it look cheap or obviously AI?",
    a: "Production quality is the entire reason we exist. If it looks like low-effort AI slop, we don't ship it.",
  },
  {
    q: "Does this actually get customers, or just views?",
    a: "We build every video around a hook that makes the right person stop and book, and we measure presence and inbound — not vanity likes.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. Month-to-month, cancel anytime. We earn the next month with the work, not with a contract.",
  },
  {
    q: "What do you need from me?",
    a: "A few photos, a 30-second voice clip, and your offer. From there it's fully done-for-you: we script, produce, caption, and post.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      description: siteDescription,
      url: siteUrl,
      telephone: "+1-210-920-4223",
      areaServed: [
        { "@type": "City", name: "San Antonio" },
        { "@type": "Country", name: "United States" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "San Antonio", addressRegion: "TX", addressCountry: "US" },
      priceRange: "$$",
      serviceType: [
        "Short-form video production",
        "AI talking-head video",
        "Social media content",
        "Done-for-you video posting",
      ],
      slogan: "Reels that chase customers, not views.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="grain" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
