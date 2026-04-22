import { SITE, FAQS } from "@/data/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE.supportEmail,
      availableLanguage: ["English", "Urdu"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: "Android 6.0+, iOS 12+",
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      ratingCount: "1080000",
      bestRating: "5",
      worstRating: "1",
    },
    downloadUrl: SITE.downloadUrl,
    softwareVersion: SITE.version,
    fileSize: SITE.apkSize,
    description: SITE.description,
  };
}

export function faqSchema(faqs?: { q: string; a: string }[]) {
  const items = faqs || FAQS;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    image: image || `${SITE.url}/goldsbet-logo.webp`,
    author: {
      "@type": "Organization",
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
      },
    },
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: SITE.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: SITE.rating,
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "GoldsBet Pakistan Review Team",
    },
    reviewBody: `GoldsBet is Pakistan's top-rated real-money gaming app with instant JazzCash and EasyPaisa cashouts, 500+ games, and a 200% welcome bonus.`,
  };
}
