import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const siteUrl = "https://www.forgeframe.media"
const siteName = "ForgeFrame Media"
const siteTitle = "ForgeFrame Media — AI Video Content for HVAC Companies | Texas"
const siteDescription =
  "ForgeFrame Media turns 2 minutes of your time into 12–20 professional HVAC video reels a month — your face, your service area, posted everywhere that matters. AI-built HVAC video content, HVAC social media, and HVAC marketing across the Texas Triangle. One partner per territory."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "HVAC marketing",
    "HVAC video content",
    "HVAC social media",
    "HVAC marketing Texas",
    "AI video content for HVAC",
    "HVAC reels",
    "HVAC lead generation",
    "HVAC content marketing San Antonio",
    "HVAC video marketing Texas Triangle",
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
    a: "Once, for about 2 minutes. We build your digital spokesperson from that footage and handle everything else.",
  },
  {
    q: "Is this AI?",
    a: "Yes — your face, our AI production line. It's how you get studio-level volume without studio-level cost or time. You approve every reel before it posts.",
  },
  {
    q: "Will this make me go viral?",
    a: "We don't sell viral. A million views in Ohio books zero calls in Houston. We build a professional, active presence in front of homeowners in YOUR service area — and put your best content on their phones as ads.",
  },
  {
    q: "Who writes and posts everything?",
    a: "We do. You get a monthly calendar to approve, then it runs without you.",
  },
  {
    q: "Can my competitor sign up too?",
    a: "No. One partner per territory. That's the point.",
  },
  {
    q: "What's the commitment?",
    a: "90 days to start, month-to-month after. Presence compounds — quitting in week 3 wastes your money and our work.",
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
        { "@type": "City", name: "Austin" },
        { "@type": "City", name: "Houston" },
        { "@type": "City", name: "Dallas" },
        { "@type": "City", name: "Fort Worth" },
        { "@type": "State", name: "Texas" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "San Antonio", addressRegion: "TX", addressCountry: "US" },
      priceRange: "$$",
      serviceType: [
        "HVAC video content",
        "HVAC social media marketing",
        "AI spokesperson video",
        "Done-for-you video posting",
      ],
      slogan: "Look like the biggest HVAC company in your service area.",
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
      <body className={`${serif.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="grain" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
