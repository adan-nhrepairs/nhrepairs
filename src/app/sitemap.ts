import { MetadataRoute } from "next";
import { FLORIDA_MARKETS } from "@/lib/constants";

const BASE_URL = "https://nhrepairs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/fleet-maintenance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/breakdown-membership`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const cityPages: MetadataRoute.Sitemap = FLORIDA_MARKETS.map((market) => ({
    url: `${BASE_URL}/areas/${market.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages];
}
