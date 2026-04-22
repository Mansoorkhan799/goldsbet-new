import { SITE } from "@/data/site";
import { BLOG_POSTS } from "@/data/blog";

const BASE = SITE.url;

// Each entry maps a page URL to the images that appear on it
const PAGE_IMAGES: { loc: string; images: { loc: string; title: string; caption?: string }[] }[] = [
  {
    loc: `${BASE}/`,
    images: [
      { loc: `${BASE}/goldsbet-app-pakistan-interface.webp`, title: "GoldsBet App Interface Pakistan", caption: "Official GoldsBet app interface for Pakistani players" },
      { loc: `${BASE}/goldsbet-app-pakistan.webp`,           title: "GoldsBet App Pakistan",           caption: "GoldsBet mobile app on Android in Pakistan" },
      { loc: `${BASE}/goldsbet-account-pakistan.webp`,       title: "GoldsBet Account Pakistan",       caption: "GoldsBet account screen for Pakistani users" },
      { loc: `${BASE}/goldsbet-registration-pakistan.webp`,  title: "GoldsBet Registration Pakistan",  caption: "GoldsBet new user registration screen" },
      { loc: `${BASE}/goldsbet-deposit-money.webp`,          title: "GoldsBet Deposit Money Pakistan",  caption: "Depositing money on GoldsBet via JazzCash / EasyPaisa" },
      { loc: `${BASE}/goldsbet-withdraw-money.webp`,         title: "GoldsBet Withdraw Money Pakistan", caption: "Withdrawing winnings from GoldsBet to JazzCash" },
      { loc: `${BASE}/golds-bet-app-bonuses.webp`,           title: "GoldsBet App Bonuses Pakistan",   caption: "GoldsBet 200% welcome bonus and promotions" },
      { loc: `${BASE}/goldsbet-invite-and-earn-pakistan.webp`, title: "GoldsBet Invite and Earn Pakistan", caption: "GoldsBet referral and invite-to-earn program" },
      { loc: `${BASE}/goldsbet-logo.webp`,                   title: "GoldsBet Logo",                   caption: "Official GoldsBet logo" },
    ],
  },
  {
    loc: `${BASE}/download-goldsbet-apk`,
    images: [
      { loc: `${BASE}/goldsbet-app-pakistan.webp`,          title: "GoldsBet APK Download Pakistan",   caption: "Download official GoldsBet APK v6.0.6 for Android" },
      { loc: `${BASE}/goldsbet-app-pakistan-interface.webp`, title: "GoldsBet App Interface",           caption: "GoldsBet app interface after installation" },
    ],
  },
  {
    loc: `${BASE}/how-to-register-on-goldsbet`,
    images: [
      { loc: `${BASE}/goldsbet-registration-pakistan.webp`, title: "GoldsBet Registration Form Pakistan", caption: "Step-by-step GoldsBet account registration" },
      { loc: `${BASE}/goldsbet-app-pakistan-interface.webp`, title: "GoldsBet App Interface Pakistan",    caption: "GoldsBet app interface after registration" },
    ],
  },
  {
    loc: `${BASE}/goldsbet-login`,
    images: [
      { loc: `${BASE}/goldsbet-login-pakistan.webp`,         title: "GoldsBet Login Pakistan",          caption: "GoldsBet login screen for Pakistani users" },
      { loc: `${BASE}/goldsbet-app-pakistan-interface.webp`, title: "GoldsBet App Interface",           caption: "GoldsBet dashboard after login" },
    ],
  },
  {
    loc: `${BASE}/how-to-deposit-on-goldsbet`,
    images: [
      { loc: `${BASE}/goldsbet-deposit-money.webp`, title: "GoldsBet Deposit Money JazzCash EasyPaisa", caption: "How to deposit money on GoldsBet using JazzCash or EasyPaisa" },
    ],
  },
  {
    loc: `${BASE}/how-to-withdraw-from-goldsbet`,
    images: [
      { loc: `${BASE}/goldsbet-withdraw-money.webp`, title: "GoldsBet Withdrawal Proof Pakistan", caption: "Withdrawing GoldsBet winnings to JazzCash in 3–10 minutes" },
    ],
  },
  {
    loc: `${BASE}/goldsbet-withdrawal-proof`,
    images: [
      { loc: `${BASE}/goldsbet-withdraw-money.webp`, title: "GoldsBet Verified Withdrawal Proof", caption: "Verified GoldsBet withdrawal screenshot – real money paid out" },
    ],
  },
  {
    loc: `${BASE}/is-goldsbet-real-or-fake`,
    images: [
      { loc: `${BASE}/goldsbet-account-pakistan.webp`, title: "GoldsBet Real or Fake Review Pakistan", caption: "GoldsBet account and payment verification review" },
      { loc: `${BASE}/goldsbet-withdraw-money.webp`,   title: "GoldsBet Real Payment Proof",           caption: "Proof that GoldsBet pays real money" },
    ],
  },
  {
    loc: `${BASE}/how-to-earn-money-on-goldsbet`,
    images: [
      { loc: `${BASE}/goldsbet-invite-and-earn-pakistan.webp`, title: "GoldsBet Earn Money Pakistan",   caption: "How to earn money on GoldsBet via referrals and betting" },
      { loc: `${BASE}/golds-bet-app-bonuses.webp`,             title: "GoldsBet Bonuses and Rewards",   caption: "GoldsBet bonus offers to help earn more" },
    ],
  },
  {
    loc: `${BASE}/goldsbet-alternatives`,
    images: [
      { loc: `${BASE}/goldsbet-app-pakistan-interface.webp`, title: "GoldsBet vs Alternatives Pakistan", caption: "GoldsBet compared to other betting apps in Pakistan" },
    ],
  },
  {
    loc: `${BASE}/goldsbet-for-pc`,
    images: [
      { loc: `${BASE}/goldsbet-app-pakistan-interface.webp`, title: "GoldsBet for PC Pakistan", caption: "GoldsBet running on PC via BlueStacks emulator" },
    ],
  },
  {
    loc: `${BASE}/goldsbet-for-ios`,
    images: [
      { loc: `${BASE}/goldsbet-app-pakistan.webp`, title: "GoldsBet for iPhone iOS Pakistan", caption: "Installing GoldsBet on iPhone in Pakistan" },
    ],
  },
  {
    loc: `${BASE}/about-goldsbet`,
    images: [
      { loc: `${BASE}/goldsbet-logo.webp`, title: "About GoldsBet Pakistan", caption: "GoldsBet – Pakistan's #1 real-cash gaming app" },
    ],
  },
  // Blog posts
  ...BLOG_POSTS.map((post) => ({
    loc: `${BASE}/blog/${post.slug}`,
    images: [
      { loc: `${BASE}${post.thumbnail}`, title: post.title, caption: post.excerpt },
    ],
  })),
];

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const urlEntries = PAGE_IMAGES.map(({ loc, images }) => {
    const imageBlocks = images
      .map(
        ({ loc: imgLoc, title, caption }) => `
    <image:image>
      <image:loc>${escapeXml(imgLoc)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>${
        caption
          ? `\n      <image:caption>${escapeXml(caption)}</image:caption>`
          : ""
      }
    </image:image>`
      )
      .join("");

    return `
  <url>
    <loc>${escapeXml(loc)}</loc>${imageBlocks}
  </url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
