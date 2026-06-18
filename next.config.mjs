/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    const noCache = [{ key: "Cache-Control", value: "no-store, no-cache, must-revalidate" }]
    return [
      { source: "/favicon.ico", headers: noCache },
      { source: "/apple-touch-icon.png", headers: noCache },
      { source: "/forgeframe-favicon.ico", headers: noCache },
      { source: "/forgeframe-icon-32.png", headers: noCache },
      { source: "/forgeframe-icon-48.png", headers: noCache },
      { source: "/forgeframe-apple-touch.png", headers: noCache },
      { source: "/icon.svg", headers: noCache },
      { source: "/icon.png", headers: noCache },
      { source: "/apple-icon.png", headers: noCache },
    ]
  },
  async redirects() {
    return [
      { source: "/icon-light-32x32.png", destination: "/forgeframe-favicon.ico?v=3", permanent: false },
      { source: "/icon-dark-32x32.png", destination: "/forgeframe-favicon.ico?v=3", permanent: false },
      { source: "/apple-icon.png", destination: "/forgeframe-apple-touch.png?v=3", permanent: false },
      { source: "/icon.png", destination: "/forgeframe-icon-32.png?v=3", permanent: false },
      { source: "/icon.svg", destination: "/forgeframe-icon-48.png?v=3", permanent: false },
    ]
  },
}

export default nextConfig
