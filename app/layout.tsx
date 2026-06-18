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

export const metadata: Metadata = {
  title: "ForgeFrame Media | Social Media Marketing for Trades",
  description:
    "AI-powered short-form video for local businesses. We script, produce, and post scroll-stopping content to TikTok, Instagram, Facebook, and YouTube.",
  icons: {
    icon: [
      { url: "/forgeframe-icon-32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/forgeframe-icon-48.png?v=3", sizes: "48x48", type: "image/png" },
      { url: "/forgeframe-favicon.ico?v=3", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/forgeframe-favicon.ico?v=3",
    apple: "/forgeframe-apple-touch.png?v=3",
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
