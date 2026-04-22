import { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.url, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${SITE.url}/download-goldsbet-apk`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/how-to-register-on-goldsbet`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/goldsbet-login`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/how-to-earn-money-on-goldsbet`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/is-goldsbet-real-or-fake`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/goldsbet-withdrawal-proof`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/goldsbet-alternatives`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/how-to-deposit-on-goldsbet`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/how-to-withdraw-from-goldsbet`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/goldsbet-for-pc`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/goldsbet-for-ios`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${SITE.url}/about-goldsbet`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${SITE.url}/contact`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${SITE.url}/disclaimer`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${SITE.url}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...blogPages].map((page) => ({
    url: page.url,
    lastModified: "lastModified" in page && page.lastModified instanceof Date ? page.lastModified : new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
