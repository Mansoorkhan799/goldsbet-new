import { SITE } from "@/data/site";

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main pages + blog posts sitemap -->
  <sitemap>
    <loc>${SITE.url}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>

  <!-- Image sitemap -->
  <sitemap>
    <loc>${SITE.url}/image-sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>

</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
