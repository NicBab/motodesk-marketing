import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/constants/site";

const ROUTES = [
  "",
  "/about",
  "/contact",
  "/security",
  "/privacy",
  "/terms",
  "/dpa",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}