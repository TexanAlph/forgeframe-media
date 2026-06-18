/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
      {
        source: "/apple-icon.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
      {
        source: "/icon.svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/icon-light-32x32.png", destination: "/favicon.ico", permanent: true },
      { source: "/icon-dark-32x32.png", destination: "/favicon.ico", permanent: true },
      { source: "/apple-touch-icon.png", destination: "/apple-icon.png", permanent: true },
      { source: "/apple-touch-icon-precomposed.png", destination: "/apple-icon.png", permanent: true },
    ]
  },
}

export default nextConfig
