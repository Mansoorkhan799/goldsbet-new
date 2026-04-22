import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, Trophy } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, COMPETITORS } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Alternatives 2026 | Best Betting Apps in Pakistan Compared",
 description: "Compare GoldsBet with Spin Win PK, 788 Wine and other betting apps in Pakistan. Honest side-by-side comparison for 2026.",
 alternates: { canonical: `${SITE.url}/goldsbet-alternatives` },
};

const apps = [
 {
 name: "GoldsBet",
 rating: "4.8/5",
 bonus: "200%",
 minDeposit: "Rs. 100",
 minWithdrawal: "Rs. 300",
 withdrawalSpeed: "3–10 min",
 jazzcash: true,
 urduSupport: true,
 liveGames: true,
 recommended: true,
 downloadUrl: SITE.downloadUrl,
 },
 {
 name: "Spin Win PK",
 rating: "4.3/5",
 bonus: "100%",
 minDeposit: "Rs. 200",
 minWithdrawal: "Rs. 500",
 withdrawalSpeed: "15–60 min",
 jazzcash: true,
 urduSupport: false,
 liveGames: false,
 recommended: false,
 downloadUrl: "#",
 },
 {
 name: "788 Wine",
 rating: "4.1/5",
 bonus: "150%",
 minDeposit: "Rs. 300",
 minWithdrawal: "Rs. 1,000",
 withdrawalSpeed: "1–24 hrs",
 jazzcash: false,
 urduSupport: true,
 liveGames: true,
 recommended: false,
 downloadUrl: "#",
 },
];

export default function AlternativesPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "GoldsBet Alternatives", url: `${SITE.url}/goldsbet-alternatives` }])) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "GoldsBet Alternatives"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 GoldsBet <span className="text-gold-gradient">Alternatives</span> 2026
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
 Honest comparison of GoldsBet vs other top betting apps available in Pakistan in 2026.
 </p>
 </div>
 </div>
 </section>

 {/* App cards */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-3 gap-6 mb-12">
 {apps.map((app) => (
 <div key={app.name} className={`relative p-6 rounded-3xl border ${app.recommended ? "border-[#D4AF37] bg-gradient-to-b from-[#D4AF37]/10 to-transparent": "border-white/10 bg-white/5"}`}>
 {app.recommended && (
 <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#D4AF37] text-black text-xs font-black rounded-full flex items-center gap-1">
 <Trophy className="w-3 h-3"/> #1 Recommended
 </div>
 )}
 <h3 className={`text-xl font-black mb-4 ${app.recommended ? "text-[#D4AF37]": "text-white"}`}>
 {app.name}
 </h3>
 <div className="space-y-3 text-sm mb-5">
 {[
 { label: "Rating", value: app.rating },
 { label: "Welcome Bonus", value: app.bonus },
 { label: "Min Deposit", value: app.minDeposit },
 { label: "Min Withdrawal", value: app.minWithdrawal },
 { label: "Withdrawal Speed", value: app.withdrawalSpeed },
 ].map((row) => (
 <div key={row.label} className="flex justify-between items-center">
 <span className="text-gray-400">{row.label}</span>
 <span className="font-semibold text-white">{row.value}</span>
 </div>
 ))}
 <div className="flex justify-between items-center">
 <span className="text-gray-400">JazzCash</span>
 {app.jazzcash ? <CheckCircle className="w-4 h-4 text-green-500"/> : <XCircle className="w-4 h-4 text-red-400"/>}
 </div>
 <div className="flex justify-between items-center">
 <span className="text-gray-400">Urdu Support</span>
 {app.urduSupport ? <CheckCircle className="w-4 h-4 text-green-500"/> : <XCircle className="w-4 h-4 text-red-400"/>}
 </div>
 <div className="flex justify-between items-center">
 <span className="text-gray-400">Live Casino</span>
 {app.liveGames ? <CheckCircle className="w-4 h-4 text-green-500"/> : <XCircle className="w-4 h-4 text-red-400"/>}
 </div>
 </div>
 <a
 href={app.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className={`w-full flex items-center justify-center py-3 rounded-xl font-bold text-sm transition-all ${
 app.recommended
 ? "bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black hover:shadow-lg hover:shadow-[#D4AF37]/30"
 : "bg-gray-200 dark:bg-white/10 text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20"
 }`}
 >
 {app.recommended ? "Download GoldsBet →": `Visit ${app.name}`}
 </a>
 </div>
 ))}
 </div>

 {/* Comparison table */}
 <h2 className="text-2xl font-black text-white mb-6">
 Full Feature Comparison
 </h2>
 <div className="bg-white/5 rounded-3xl border border-white/10 overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="bg-[#D4AF37]/15">
 <th className="px-5 py-4 text-left text-sm font-bold text-white">Feature</th>
 <th className="px-5 py-4 text-center text-sm font-bold text-[#D4AF37]">GoldsBet</th>
 <th className="px-5 py-4 text-center text-sm font-bold text-gray-300">Spin Win PK</th>
 <th className="px-5 py-4 text-center text-sm font-bold text-gray-300">788 Wine</th>
 </tr>
 </thead>
 <tbody>
 {COMPETITORS.map((row, i) => (
 <tr key={row.feature} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/5": ""}`}>
 <td className="px-5 py-3.5 text-sm font-semibold text-gray-300">{row.feature}</td>
 <td className="px-5 py-3.5 text-center text-sm font-bold text-[#D4AF37]">{row.goldsbet}</td>
 <td className="px-5 py-3.5 text-center text-sm text-gray-300">{row.spinwin}</td>
 <td className="px-5 py-3.5 text-center text-sm text-gray-300">{row.wine788}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 {/* Verdict */}
 <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30">
 <h3 className="font-black text-white text-lg mb-3">
 Our Recommendation: GoldsBet is the #1 Choice for Pakistani Players
 </h3>
 <p className="text-gray-300 text-sm leading-relaxed mb-4">
 GoldsBet wins in 7 out of 9 categories – including withdrawal speed, welcome bonus, Urdu support and minimum deposit. It is the best all-round betting app for Pakistan in 2026.
 </p>
 <a href={SITE.downloadUrl} target="_blank"rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-xl hover:scale-105 transition-all">
 Download GoldsBet Free →
 </a>
 </div>
 </div>
 </section>

 <section className="py-10 bg-[#111111] border-t border-white/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
 {[
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake"},
 { label: "Download GoldsBet", href: "/download-goldsbet-apk"},
 { label: "Withdrawal Proof", href: "/goldsbet-withdrawal-proof"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet"},
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
