import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Banknote, CheckCircle, Zap, Shield, ChevronRight, Download } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Withdraw 2026 | How to Cash Out via JazzCash & EasyPaisa in Pakistan",
 description: "How to withdraw money from GoldsBet Pakistan. Instant JazzCash & EasyPaisa cashouts in 3–10 minutes. Zero fees. Minimum Rs. 300 withdrawal guide.",
 alternates: { canonical: `${SITE.url}/how-to-withdraw-from-goldsbet` },
};

const steps = [
 { name: "Open GoldsBet App", text: "Launch the GoldsBet app and log in to your verified account."},
 { name: "Tap Wallet", text: "Tap the 'Wallet' icon at the bottom of the home screen."},
 { name: "Select Withdraw", text: "Tap the 'Withdraw' button from the wallet menu."},
 { name: "Choose Payout Method", text: "Select JazzCash, EasyPaisa or Bank Transfer as your cashout destination."},
 { name: "Enter Amount", text: "Enter the withdrawal amount. Minimum is Rs. 300. Up to 5 withdrawals per day are allowed."},
 { name: "Enter Security PIN", text: "Type your GoldsBet 4-digit security PIN to authorise the request."},
 { name: "Tap Confirm", text: "Tap 'Confirm'. Your money arrives in your JazzCash/EasyPaisa wallet in 3–10 minutes."},
];

const faqs = [
 { q: "What is the minimum withdrawal on GoldsBet?", a: "The minimum withdrawal on GoldsBet Pakistan is Rs. 300 via JazzCash or EasyPaisa."},
 { q: "How fast are GoldsBet withdrawals?", a: "92% of GoldsBet withdrawals are processed in under 5 minutes. The maximum processing time is 24 hours for bank transfers."},
 { q: "Are there withdrawal fees on GoldsBet?", a: "No. GoldsBet charges zero withdrawal fees. You receive 100% of your requested amount."},
 { q: "How many withdrawals can I make per day?", a: "GoldsBet allows up to 5 withdrawals per day. VIP players may have higher daily limits."},
 { q: "Why is my withdrawal pending?", a: "Withdrawals go through a quick security check. If pending for more than 30 minutes, contact live chat with your withdrawal ID."},
 { q: "Do I need KYC to withdraw?", a: "Yes. You must complete basic KYC (verify mobile number and CNIC) before your first withdrawal is approved."},
];

export default function WithdrawPage() {
 const schemaData = [
 breadcrumbSchema([
 { name: "Home", url: SITE.url },
 { name: "Withdraw", url: `${SITE.url}/how-to-withdraw-from-goldsbet` },
 ]),
 howToSchema({
 name: "How to Withdraw Money from GoldsBet",
 description: "Step-by-step guide to withdraw money from GoldsBet Pakistan via JazzCash and EasyPaisa",
 steps,
 }),
 ];

 return (
 <>
 {schemaData.map((schema, i) => (
 <script key={i} type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 ))}

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 {/* Hero */}
 <section className="py-16 bg-gradient-to-b from-[#0A0A0A] to-[#111111] text-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <Breadcrumb
 items={[
 { label: "Home", href: "/"},
 { label: "Withdraw Money", href: "/how-to-withdraw-from-goldsbet"},
 ]}
 />
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-5">
 <Banknote className="w-4 h-4"/>
 Instant Cashout
 </div>
 <h1 className="text-3xl sm:text-5xl font-black mb-5">
 How to <span className="text-[#D4AF37]">Withdraw Money</span> from GoldsBet
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
 Cash out your GoldsBet winnings in 3–10 minutes via JazzCash or EasyPaisa. Minimum Rs. 300 · Zero fees · Up to 5 withdrawals/day.
 </p>
 <div className="flex flex-wrap justify-center gap-4 text-sm">
 {[
 { icon: <Zap className="w-4 h-4 text-[#D4AF37]"/>, text: "3–10 min cashout"},
 { icon: <Shield className="w-4 h-4 text-green-400"/>, text: "Secure & verified"},
 { icon: <CheckCircle className="w-4 h-4 text-blue-400"/>, text: "Zero withdrawal fees"},
 ].map((item) => (
 <span key={item.text} className="flex items-center gap-1.5 text-gray-400">
 {item.icon} {item.text}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* Stats */}
 <section className="py-10 bg-[#111111]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
 {[
 { value: "3–10 min", label: "Average cashout time"},
 { value: "Rs. 300", label: "Minimum withdrawal"},
 { value: "0%", label: "Withdrawal fee"},
 { value: "5×/day", label: "Max daily withdrawals"},
 ].map((stat) => (
 <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
 <div className="text-2xl font-black text-[#D4AF37]">{stat.value}</div>
 <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
 </div>
 ))}
 </div>

 {/* Image */}
 <div className="mt-8 relative rounded-3xl overflow-hidden h-52 border border-white/10">
 <Image src="/goldsbet-withdraw-money.webp"alt="GoldsBet Withdraw Money Pakistan"fill sizes="(max-width: 768px) 100vw, 900px"className="object-cover"/>
 <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-8">
 <div>
 <h3 className="text-white font-black text-xl">Instant Cashout Technology</h3>
 <p className="text-gray-300 text-sm mt-1">92% of withdrawals processed in under 5 minutes</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Steps */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 Step-by-Step: How to Withdraw from GoldsBet
 </h2>
 <ol className="space-y-4">
 {steps.map((step, i) => (
 <li key={step.name} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
 <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
 {i + 1}
 </div>
 <div>
 <h3 className="font-semibold text-white text-sm mb-1">{step.name}</h3>
 <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
 </div>
 </li>
 ))}
 </ol>

 <div className="mt-6 p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
 <p className="text-sm text-green-400 font-semibold text-center">
 ✓ Zero withdrawal fees · Up to 5 cashouts/day · 3–10 min average · JazzCash & EasyPaisa
 </p>
 </div>

 <div className="mt-6 text-center">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-2xl hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Download className="w-5 h-5"/>
 Download GoldsBet &amp; Start Winning
 </a>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-[#111111]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 GoldsBet Withdrawal – Frequently Asked Questions
 </h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 {/* Related links */}
 <section className="py-12 bg-[#0A0A0A] border-t border-white/10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
 <div className="grid sm:grid-cols-3 gap-4">
 {[
 { label: "How to Deposit", href: "/how-to-deposit-on-goldsbet", desc: "Add funds to your account"},
 { label: "Withdrawal Proof", href: "/goldsbet-withdrawal-proof", desc: "See verified payments"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet", desc: "Tips to maximize earnings"},
 ].map((link) => (
 <Link key={link.href} href={link.href} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-all group">
 <p className="font-semibold text-sm text-white group-hover:text-[#D4AF37] transition-colors">{link.label}</p>
 <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
 <ChevronRight className="w-4 h-4 text-[#D4AF37] mt-2 group-hover:translate-x-1 transition-transform"/>
 </Link>
 ))}
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
