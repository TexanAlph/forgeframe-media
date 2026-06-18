import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { APPLE_TOUCH_PNG_B64, decodeBase64, FAVICON_ICO_B64, FAVICON_PNG_B64 } from "@/lib/favicon-assets"

const NO_CACHE = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/favicon.ico" || pathname === "/forgeframe-favicon.ico") {
    return new NextResponse(decodeBase64(FAVICON_ICO_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/x-icon" },
    })
  }

  if (
    pathname === "/apple-touch-icon.png" ||
    pathname === "/forgeframe-apple-touch.png" ||
    pathname === "/apple-touch-icon-precomposed.png"
  ) {
    return new NextResponse(decodeBase64(APPLE_TOUCH_PNG_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/png" },
    })
  }

  if (
    pathname === "/forgeframe-icon-32.png" ||
    pathname === "/icon.png" ||
    pathname === "/icon.svg"
  ) {
    return new NextResponse(decodeBase64(FAVICON_PNG_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/png" },
    })
  }

  if (pathname === "/forgeframe-icon-48.png") {
    return new NextResponse(decodeBase64(FAVICON_PNG_B64), {
      headers: { ...NO_CACHE, "Content-Type": "image/png" },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/favicon.ico",
    "/forgeframe-favicon.ico",
    "/apple-touch-icon.png",
    "/apple-touch-icon-precomposed.png",
    "/forgeframe-apple-touch.png",
    "/forgeframe-icon-32.png",
    "/forgeframe-icon-48.png",
    "/icon.png",
    "/icon.svg",
  ],
}
