import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tairanos.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.tairanos.com/ai-automation",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.tairanos.com/ai-chatbot",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.tairanos.com/business-automation",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.tairanos.com/terms",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.tairanos.com/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}