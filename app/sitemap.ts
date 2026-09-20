import type { MetadataRoute } from "next";

const siteUrl = "https://newlegacytaxservice.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/life-health-insurance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
