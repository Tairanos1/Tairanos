import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.tairanos.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://www.tairanos.com/ai-automation",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://www.tairanos.com/ai-chatbot",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://www.tairanos.com/business-automation",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://www.tairanos.com/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: "https://www.tairanos.com/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}