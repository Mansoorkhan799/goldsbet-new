import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Gift, Users, Star, Trophy, Zap } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "How to Earn Real Money on GoldsBet 2026 | Pakistan Real Cash Guide",
 description: "Complete guide on how to earn and withdraw real money on GoldsBet in Pakistan. Betting strategies, bonus tips, referral income and VIP cashback explained.",
 alternates: { canonical: `${SITE.url}/how-to-earn-money-on-goldsbet` },
};

const methods = [
 {
 icon: <Trophy className="w-7 h-7"/>,
 title: "Sports Betting Winnings",
 desc: "Win real PKR by correctly predicting cricket, football, kabaddi and other sports match outcomes. Live in-play betting gives the best value during PSL and IPL.",
 potential: "Unlimited",
 difficulty: "Medium",
 },
 {
 icon: <Star className="w-7 h-7"/>,
 title: "Casino & Card Games",
 desc: "Play Teen Patti, Andar Bahar, Poker, Roulette and 500+ other games to win real money. RNG-certified fair outcomes on every game.",
 potential: "Unlimited",
 difficulty: "Medium",
 },
 {
 icon: <Gift className="w-7 h-7"/>,
 title: "Welcome Bonus (200%)",
 desc: "Claim the 200% first deposit bonus. Deposit Rs. 5,000 and get Rs. 10,000 in bonus. Use it to win more before wagering is complete.",
 potential: "Up to Rs. 20,000",
 difficulty: "Easy",
 },
 {
 icon: <Zap className="w-7 h-7"/>,
 title: "Daily Lucky Spin",
 desc: "Spin the free wheel every 24 hours. No deposit required. Win cash prizes up to Rs. 5,000, free bets and bonus credits.",
 potential: "Up to Rs. 5,000/day",
 difficulty: "Very Easy",
 },
 {
 icon: <Users className="w-7 h-7"/>,
 title: "Refer & Earn Program",
 desc: "Share your GoldsBet referral code and earn Rs. 200 per referral plus 5% lifetime commission on everything your friends play.",
 potential: "Rs. 200 + 5% forever",
 difficulty: "Easy",
 },
 {
 icon: <TrendingUp className="w-7 h-7"/>,
 title: "VIP Cashback",
 desc: "As a VIP member (Bronze to Royal), earn weekly cashback on losses – from 3% at Bronze up to 15% at Royal level.",
 potential: "Up to 15% cashback",
 difficulty: "Long-term",
 },
];

const faqs = [
 { q: "Can I really earn real money on GoldsBet in Pakistan?", a: "Yes. GoldsBet pays out real PKR to JazzCash and EasyPaisa wallets. Over 1 million Pakistani players have earned and withdrawn money through the platform."},
 { q: "What is the minimum amount I can earn and withdraw?", a: "The minimum withdrawal is Rs. 300. You can win any amount above this and withdraw to your JazzCash or EasyPaisa instantly."},
 { q: "Is there a guaranteed way to earn on GoldsBet?", a: "The Daily Lucky Spin and referral program are the most consistent earning methods. Sports betting and casino games involve risk and no outcome is guaranteed."},
 { q: "How much can I earn from the GoldsBet referral program?", a: "There is no cap. With 10 active referrals each depositing Rs. 5,000/month, your 5% commission = Rs. 2,500/month passively."},
 { q: "How quickly can I withdraw my winnings?", a: "JazzCash and EasyPaisa withdrawals typically complete in 3–10 minutes. Bank transfers take up to 1 hour."},
];

export default function HowToEarnPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "How to Earn Money", url: `${SITE.url}/how-to-earn-money-on-goldsbet` }])) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "How to Earn Money on GoldsBet"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 How to Earn <span className="text-gold-gradient">Real Money</span> on GoldsBet 2026
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
 Six proven ways to earn and withdraw real PKR through GoldsBet – from sports betting and casino games to referral commissions and VIP cashback.
 </p>
 </div>
 </div>
 </section>

 {/* TL;DR */}
 <section className="py-8 bg-[#D4AF37]/5 border-b border-[#D4AF37]/20">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="font-bold text-white mb-3 flex items-center gap-2">
 <Zap className="w-5 h-5 text-[#D4AF37]"/> Quick Answer
 </h2>
 <p className="text-gray-300 text-sm leading-relaxed">
 You earn real money on GoldsBet through: (1) sports betting wins, (2) casino game wins, (3) the 200% welcome bonus, (4) daily free spins, (5) the referral program (Rs. 200 + 5% lifetime), and (6) VIP cashback up to 15%. Minimum withdrawal is Rs. 300 via JazzCash or EasyPaisa in 3–10 minutes.
 </p>
 </div>
 </section>

 {/* Methods */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8">
 6 Ways to Earn Real Money on GoldsBet
 </h2>
 <div className="grid md:grid-cols-2 gap-6">
 {methods.map((m) => (
 <div key={m.title} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
 {m.icon}
 </div>
 <div className="flex-1">
 <h3 className="font-bold text-white mb-2">{m.title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed mb-3">{m.desc}</p>
 <div className="flex gap-4 text-xs">
 <span className="px-2 py-1 rounded-lg bg-green-500/10 text-green-500 font-medium">
 Potential: {m.potential}
 </span>
 <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 font-medium">
 Difficulty: {m.difficulty}
 </span>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Referral calculator */}
 <section className="py-16 bg-[#111111]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-bold text-white mb-6">
 GoldsBet Referral Earnings Estimate
 </h2>
 <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
 <div className="grid grid-cols-4 bg-[#D4AF37]/15 px-5 py-3 text-xs font-bold text-white uppercase">
 <span>Referrals</span>
 <span>Instant Bonus</span>
 <span>Monthly Commission (5%)</span>
 <span>Annual Passive Income</span>
 </div>
 {[
 { refs: 5, bonus: "Rs. 1,000", monthly: "Rs. 1,250", annual: "Rs. 15,000"},
 { refs: 10, bonus: "Rs. 2,000", monthly: "Rs. 2,500", annual: "Rs. 30,000"},
 { refs: 25, bonus: "Rs. 5,000", monthly: "Rs. 6,250", annual: "Rs. 75,000"},
 { refs: 50, bonus: "Rs. 10,000", monthly: "Rs. 12,500", annual: "Rs. 150,000"},
 ].map((row, i) => (
 <div key={i} className={`grid grid-cols-4 px-5 py-4 border-t border-white/5 text-sm ${i % 2 === 0 ? "bg-white/5": ""}`}>
 <span className="font-semibold text-white">{row.refs} Friends</span>
 <span className="text-green-500">{row.bonus}</span>
 <span className="text-[#D4AF37]">{row.monthly}</span>
 <span className="text-blue-400">{row.annual}</span>
 </div>
 ))}
 </div>
 <p className="text-xs text-gray-400 mt-3">*Based on average Rs. 5,000/month activity per referral. Actual results vary.</p>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-bold text-white mb-8 text-center">Earnings FAQs</h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 <section className="py-10 bg-[#111111] border-t border-white/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
 {[
 { label: "Download GoldsBet APK", href: "/download-goldsbet-apk"},
 { label: "Register & Claim Bonus", href: "/how-to-register-on-goldsbet"},
 { label: "Withdrawal Proof", href: "/goldsbet-withdrawal-proof"},
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake"},
 ].map((l) => (
 <Link key={l.href} href={l.href} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all">
 {l.label} →
 </Link>
 ))}
 </div>
 </section>
 </div>
 </>
 );
}
