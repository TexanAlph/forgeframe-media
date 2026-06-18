import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FAVICON_SVG_DATA_URI } from "@/lib/favicon"
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

export const metadata: Metadata = {
  title: "ForgeFrame Media | Social Media Marketing for Trades",
  description:
    "AI-powered short-form video for local businesses. We script, produce, and post scroll-stopping content to TikTok, Instagram, Facebook, and YouTube.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={FAVICON_SVG_DATA_URI} />
      </head>
      <body className={`${bebasNeue.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
