import { MetadataRoute } from "next";

import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/experience", priority: 0.8 },
    { path: "/dashboard", priority: 0.8 },
    { path: "/skills", priority: 0.8 },
    { path: "/contributions", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/resume", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = Experiences.map((exp) => ({
    url: `${baseUrl}/experience/${exp.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...experienceRoutes];
}
