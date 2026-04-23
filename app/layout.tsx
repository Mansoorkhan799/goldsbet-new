import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyDownload from "@/components/StickyDownload";
import { SITE } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
 metadataBase: new URL(SITE.url),
 title: {
 default: `Goldsbet APP Pakistan | Download Official for Android and iOS`,
 template: `%s | GoldsBet Pakistan`,
 },
 description: SITE.description,
 keywords: [SITE.keywords.primary, ...SITE.keywords.secondary, SITE.keywords.tertiary],
 authors: [{ name: SITE.name }],
 creator: SITE.name,
 publisher: SITE.name,
 icons: {
 icon: "/goldsbet-pakistan.ico",
 shortcut: "/goldsbet-pakistan.ico",
 },
 robots: {
 index: true,
 follow: true,
 googleBot: { index: true, follow: true, "max-image-preview": "large"},
 },
 openGraph: {
 type: "website",
 locale: "en_PK",
 url: SITE.url,
 siteName: SITE.name,
 title: `Goldsbet APP Pakistan | Download Official for Android and iOS`,
 description: SITE.description,
 images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "GoldsBet Pakistan"}],
 },
 twitter: {
 card: "summary_large_image",
 title: `Goldsbet APP Pakistan | Download Official for Android and iOS`,
 description: SITE.description,
 images: ["/og-image.jpg"],
 },
 alternates: {
 canonical: SITE.url,
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning style={{ background: "#0A0A0A"}}>
 <head>
 <link rel="preconnect"href="https://fonts.googleapis.com"/>
 <link rel="preconnect"href="https://fonts.gstatic.com"crossOrigin="anonymous"/>
 <link
 href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
 rel="stylesheet"
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(organizationSchema()),
 }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(websiteSchema()),
 }}
 />
 </head>
 <body className="bg-[#0A0A0A] text-white"suppressHydrationWarning>
 <ThemeProvider>
 <Navbar />
 <main>{children}</main>
 <Footer />
 <StickyDownload />
 </ThemeProvider>
 </body>
 </html>
 );
}
