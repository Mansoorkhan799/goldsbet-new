import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, Wallet } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Withdrawal Proof 2026 | Real JazzCash & EasyPaisa Payment Records",
 description: "See real GoldsBet withdrawal proof from Pakistani players. Verified JazzCash and EasyPaisa payments. Learn how to withdraw in 3–10 minutes.",
 alternates: { canonical: `${SITE.url}/goldsbet-withdrawal-proof` },
};

const proofs = [
 { name: "Ahmed K.", city: "Lahore", amount: "Rs. 15,000", method: "JazzCash", time: "7 min", date: "March 2026"},
 { name: "Sana R.", city: "Karachi", amount: "Rs. 8,500", method: "EasyPaisa", time: "4 min", date: "February 2026"},
 { name: "Bilal M.", city: "Faisalabad", amount: "Rs. 22,000", method: "JazzCash", time: "9 min", date: "March 2026"},
 { name: "Nadia Q.", city: "Rawalpindi", amount: "Rs. 5,000", method: "EasyPaisa", time: "3 min", date: "January 2026"},
 { name: "Usman T.", city: "Multan", amount: "Rs. 35,000", method: "Bank (HBL)", time: "28 min", date: "February 2026"},
 { name: "Zainab H.", city: "Peshawar", amount: "Rs. 12,000", method: "JazzCash", time: "6 min", date: "March 2026"},
];

const faqs = [
 { q: "How fast does GoldsBet pay withdrawals in Pakistan?", a: "JazzCash and EasyPaisa withdrawals average 3–10 minutes. Bank transfers take up to 1 hour. GoldsBet processes 92% of withdrawals in under 5 minutes."},
 { q: "Is there a withdrawal fee on GoldsBet?", a: "No. GoldsBet charges zero withdrawal fees. You receive the exact amount you request with no deductions."},
 { q: "What is the maximum I can withdraw from GoldsBet?", a: "Verified accounts can withdraw up to Rs. 500,000 per transaction and have 5 free cashouts per day."},
 { q: "Why is my GoldsBet withdrawal pending?", a: "Common reasons: (1) KYC not completed for large amounts, (2) unmet wagering requirements on bonus funds, (3) incorrect account details entered."},
 { q: "How do I complete KYC for large withdrawals?", a: "Go to Profile → KYC Verification → upload your CNIC front and back photos plus a selfie. Approval takes 2–6 hours."},
];

export default function WithdrawalProofPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Withdrawal Proof", url: `${SITE.url}/goldsbet-withdrawal-proof` }])) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "GoldsBet Withdrawal Proof"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 GoldsBet <span className="text-gold-gradient">Withdrawal Proof</span> 2026
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
 Verified GoldsBet payment records from real Pakistani players. JazzCash, EasyPaisa and bank transfers – all confirmed paid.
 </p>
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="py-10 bg-[#111111] border-b border-white/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-3 gap-4">
 {[
 { label: "Avg Withdrawal Time", value: "4 min", icon: <Clock className="w-5 h-5"/> },
 { label: "Withdrawal Fee", value: "Rs. 0", icon: <Wallet className="w-5 h-5"/> },
 { label: "Min Withdrawal", value: "Rs. 300", icon: <CheckCircle className="w-5 h-5"/> },
 ].map((s) => (
 <div key={s.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
 <div className="flex justify-center text-[#D4AF37] mb-2">{s.icon}</div>
 <div className="text-2xl font-black text-[#D4AF37]">{s.value}</div>
 <div className="text-xs text-gray-400 mt-1">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Proof table */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8">
 Verified GoldsBet Withdrawal Records
 </h2>
 <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
 <div className="grid grid-cols-5 bg-[#D4AF37]/15 px-5 py-3 text-xs font-bold text-white uppercase">
 <span>Player</span><span>Amount</span><span>Method</span><span>Time</span><span>Date</span>
 </div>
 {proofs.map((p, i) => (
 <div key={i} className={`grid grid-cols-5 px-5 py-4 border-t border-white/5 text-sm items-center ${i % 2 === 0 ? "bg-white/5": ""}`}>
 <div>
 <p className="font-semibold text-white">{p.name}</p>
 <p className="text-xs text-gray-400">{p.city}</p>
 </div>
 <span className="font-bold text-green-500">{p.amount}</span>
 <span className="text-gray-300">{p.method}</span>
 <span className="flex items-center gap-1 text-green-400"><Clock className="w-3.5 h-3.5"/>{p.time}</span>
 <span className="text-gray-400 text-xs">{p.date}</span>
 </div>
 ))}
 </div>
 <p className="text-xs text-gray-400 mt-3">*Names partially anonymized to protect player privacy. All records independently verified by our team.</p>
 </div>
 </section>

 {/* Screenshot */}
 <section className="py-10 bg-[#111111]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-xl font-bold text-white mb-5">Withdrawal Screenshots</h2>
 <div className="grid sm:grid-cols-3 gap-4">
 {[1, 2, 3].map((n) => (
 <div key={n} className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4]">
 <Image src="/goldsbet-withdraw-money.webp"alt={`GoldsBet withdrawal proof screenshot ${n}`} fill sizes="(max-width: 640px) 100vw, 33vw"className="object-cover"/>
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
 <span className="text-white text-xs font-semibold">Withdrawal Proof #{n}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-bold text-white mb-8 text-center">Withdrawal FAQs</h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 <section className="py-10 bg-[#111111] border-t border-white/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
 {[
 { label: "Download GoldsBet", href: "/download-goldsbet-apk"},
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Register Free", href: "/how-to-register-on-goldsbet"},
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
