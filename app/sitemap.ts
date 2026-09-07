import type { MetadataRoute } from "next";
import { routes, site } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...routes.map(([slug]) => ({ url: `${site.url}/${slug}/`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
