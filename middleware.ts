import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { APPLE_TOUCH_PNG_B64, decodeBase64, FAVICON_ICO_B64, FAVICON_PNG_B64 } from "@/lib/favicon-bytes"
import { FAVICON_SVG } from "@/lib/favicon"

const NO_CACHE = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/favicon.ico") {
    return new NextResponse(decodeBase64(FAVICON_ICO_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/x-icon" },
    })
  }

  if (pathname === "/apple-touch-icon.png" || pathname === "/apple-touch-icon-precomposed.png") {
    return new NextResponse(decodeBase64(APPLE_TOUCH_PNG_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/png" },
    })
  }

  if (pathname === "/icon.svg" || pathname.endsWith(".svg")) {
    return new NextResponse(FAVICON_SVG, {
      headers: { ...NO_CACHE, "Content-Type": "image/svg+xml" },
    })
  }

  if (pathname === "/icon.png" || pathname.endsWith("icon-32.png")) {
    return new NextResponse(decodeBase64(FAVICON_PNG_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/png" },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/favicon.ico", "/apple-touch-icon.png", "/apple-touch-icon-precomposed.png", "/icon.svg", "/icon.png"],
}
