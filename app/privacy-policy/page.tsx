import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "Privacy Policy | GoldsBet Pakistan",
 description: "Read the privacy policy for goldsbetapp.com.pk. How we collect, use and protect your information.",
 alternates: { canonical: `${SITE.url}/privacy-policy` },
};

export default function PrivacyPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Privacy Policy", url: `${SITE.url}/privacy-policy` }])) }} />
 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Privacy Policy"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
 <p className="text-gray-400">Last updated: January 2026</p>
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
 {[
 {
 title: "1. Introduction",
 content: `This Privacy Policy explains how ${SITE.domain} ("we", "our", "the website") collects, uses and protects any information that you provide when using this website. We are committed to ensuring your privacy is protected.`,
 },
 {
 title: "2. Information We Collect",
 content: "We may collect the following information: your IP address for analytics purposes, pages you visit on this site, the browser and device type you use, and any information you voluntarily submit through contact forms. We do NOT collect your GoldsBet account credentials, payment information, or CNIC details – that data is handled directly by GoldsBet Incorporated.",
 },
 {
 title: "3. How We Use Your Information",
 content: "We use the collected data to: analyse website traffic and improve our content, understand which pages and guides are most helpful to Pakistani users, and improve site performance and user experience. We do not sell, rent or share your personal information with third parties for marketing purposes.",
 },
 {
 title: "4. Cookies",
 content: "This website uses cookies to enhance the browsing experience. Cookies are small files stored on your device that help us remember your preferences (such as dark/light theme) and analyse site traffic. You can disable cookies in your browser settings, though this may affect some site functionality.",
 },
 {
 title: "5. Third-Party Links",
 content: `This website contains links to GoldsBet (${SITE.downloadUrl}) and other external sites. Once you click a link to an external site, you are subject to that site's privacy policy. We are not responsible for the privacy practices of external websites.`,
 },
 {
 title: "6. Analytics",
 content: "We use Google Analytics to understand how visitors use our site. Google Analytics collects anonymised data about page views, session duration and device type. This data is aggregated and does not personally identify individual users.",
 },
 {
 title: "7. Affiliate Relationships",
 content: "This website participates in affiliate programs. When you click a download or registration link and create a GoldsBet account, we may receive a commission. This does not increase your costs in any way and does not affect our editorial independence.",
 },
 {
 title: "8. Children's Privacy",
 content: "This website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us immediately.",
 },
 {
 title: "9. Contact",
 content: `For any questions about this Privacy Policy, please contact us at ${SITE.supportEmail} or visit our Contact page.`,
 },
 ].map((section) => (
 <div key={section.title} className="pb-6 border-b border-white/5 dark:border-white/10 last:border-0">
 <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
 <p className="text-gray-300 leading-relaxed">{section.content}</p>
 </div>
 ))}
 </div>
 </section>
 </div>
 </>
 );
}
