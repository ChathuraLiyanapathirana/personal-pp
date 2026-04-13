import { professionalProjects } from "@/constants/appConstant";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/react-native-engineer",
    "/mobile-software-engineer",
    "/senior-software-engineer",
    ...professionalProjects
      .filter((project) => project.slug)
      .map((project) => `/projects/${project.slug}`),
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  ];
}
