import type { MetadataRoute } from "next"

const siteUrl = "https://www.forgeframe.media"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/#work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/#pricing`, changeFrequency: "monthly", priority: 0.8 },
  ]
}
