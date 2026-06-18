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

const FAVICON_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAc0lEQVR4nGP8////f4YBBEwDafmoA0ZDYDQERkNgUIQAC0EV9WYMDH9+YYrzCDMwVO4lXs3QDQEYqD3MwMDBy0CxmqEbAs22qPy0+QwM8oakqxm6IVA7TNMA04h3AONoo5Rh1AEDDJhGHcAw6oABBgPuAAA07xm9F/1fxAAAAABJRU5ErkJggg=="

export const metadata: Metadata = {
  title: "ForgeFrame Media | Social Media Marketing for Trades",
  description:
    "AI-powered short-form video for local businesses. We script, produce, and post scroll-stopping content to TikTok, Instagram, Facebook, and YouTube.",
  icons: {
    icon: [{ url: FAVICON_DATA_URI, sizes: "32x32", type: "image/png" }],
    shortcut: FAVICON_DATA_URI,
    apple: "/forgeframe-apple-touch.png?v=4",
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
