import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const siteUrl = "https://www.forgeframe.media"
const siteDescription =
  "AI-powered short-form video for local businesses. We script, produce, and post scroll-stopping content to TikTok, Instagram, Facebook, and YouTube."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ForgeFrame Media | Social Media Marketing for Trades",
  description: siteDescription,
  icons: {
    icon: [
      {
        url: "/forgeframe-mark.svg?v=20260619",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/forgeframe-mark.svg?v=20260619",
    apple: "/apple-icon.png?v=20260619",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ForgeFrame Media",
    title: "ForgeFrame Media | Social Media Marketing for Trades",
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: "ForgeFrame Media | Social Media Marketing for Trades",
    description: siteDescription,
  },
  appleWebApp: {
    title: "ForgeFrame Media",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
