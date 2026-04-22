import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "Disclaimer | GoldsBet Pakistan – Legal & Risk Disclosure",
 description: "Read the GoldsBet Pakistan disclaimer. Important information about real-money gambling risks, affiliate disclosure, and legal status in Pakistan.",
 alternates: { canonical: `${SITE.url}/disclaimer` },
};

export default function DisclaimerPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Disclaimer", url: `${SITE.url}/disclaimer` }])) }} />
 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Disclaimer"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">Disclaimer</h1>
 <p className="text-gray-400">Last updated: January 2026</p>
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-custom space-y-8">
 <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
 <p className="text-red-700 dark:text-red-300 font-bold">⚠️ 18+ Only. Gambling involves financial risk and can be addictive. Only gamble with funds you can afford to lose.</p>
 </div>

 {[
 {
 title: "1. Affiliate Disclosure",
 content: `${SITE.domain} is an independent affiliate review and information website. We are NOT the official GoldsBet operator (GoldsBet Incorporated). We review, compare and provide information about online gaming platforms. We may earn a commission or referral fee when you click download or registration links on this site. This does not affect our editorial independence or the honesty of our reviews.`,
 },
 {
 title: "2. Gambling Risk Warning",
 content: "All forms of gambling involve a risk of financial loss. GoldsBet, like all real-money gaming platforms, can result in you losing the money you deposit. Never gamble with money you cannot afford to lose. Gambling is not a reliable way to make a living or earn consistent income. Past winnings do not guarantee future results.",
 },
 {
 title: "3. Age Restriction",
 content: "GoldsBet is strictly for individuals who are 18 years of age or older. It is illegal for minors to gamble. If you are under 18, you must not use GoldsBet or any real-money gaming platform. Parents and guardians should use parental controls to prevent minors from accessing gambling sites.",
 },
 {
 title: "4. Legal Status in Pakistan",
 content: "Online gambling operates in a legal grey area in Pakistan. GoldsBet operates offshore under a Curaçao eGaming license. While gambling at physical establishments is restricted under Pakistan's Prevention of Gambling Act 1977, individual use of licensed offshore online platforms is generally not prosecuted. Always check your local laws and regulations before playing.",
 },
 {
 title: "5. Accuracy of Information",
 content: `The information on ${SITE.domain} is provided for informational purposes only. We make every effort to ensure accuracy but cannot guarantee that all information about game odds, bonus terms, withdrawal times or legal status is current at all times. Always check the official GoldsBet website for the latest terms and conditions.`,
 },
 {
 title: "6. Responsible Gaming",
 content: "If gambling is causing problems in your life – financial, emotional, or social – please seek help immediately. GoldsBet offers self-exclusion and deposit limit tools within the app. External support is available through local mental health services and gambling addiction helplines.",
 },
 {
 title: "7. No Liability",
 content: `${SITE.domain} accepts no liability for financial losses incurred through the use of GoldsBet or any other gaming platform reviewed on this site. All decisions to gamble are made by the individual user at their own risk.`,
 },
 ].map((section) => (
 <div key={section.title}>
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
