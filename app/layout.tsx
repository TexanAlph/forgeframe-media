import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { APPLE_TOUCH_DATA_URI, FAVICON_DATA_URI } from "@/lib/favicon-assets"
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
  icons: {
    icon: [{ url: FAVICON_DATA_URI, sizes: "32x32", type: "image/png" }],
    shortcut: FAVICON_DATA_URI,
    apple: APPLE_TOUCH_DATA_URI,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICON_DATA_URI} />
        <link rel="shortcut icon" href={FAVICON_DATA_URI} />
        <link rel="apple-touch-icon" href={APPLE_TOUCH_DATA_URI} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${bebasNeue.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
