import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Wallet, CheckCircle, Zap, Shield, ChevronRight, Download } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE, DEPOSIT_METHODS } from "@/data/site";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Deposit 2026 | How to Add Money via JazzCash & EasyPaisa in Pakistan",
 description: "Learn how to deposit money on GoldsBet Pakistan. Step-by-step guide for JazzCash, EasyPaisa and bank deposits. Minimum Rs. 100, instant credit.",
 alternates: { canonical: `${SITE.url}/how-to-deposit-on-goldsbet` },
};

const steps = [
 { name: "Open GoldsBet App", text: "Launch the GoldsBet app on your Android or iOS device and log in to your account."},
 { name: "Tap Wallet Icon", text: "Tap the 'Wallet' icon at the bottom navigation bar of the home screen."},
 { name: "Select Deposit", text: "Tap the green 'Deposit' button from the wallet menu."},
 { name: "Choose Payment Method", text: "Select JazzCash, EasyPaisa or Bank Transfer as your payment method."},
 { name: "Enter Amount", text: "Type the deposit amount. Minimum deposit is Rs. 100. Maximum is Rs. 500,000 per transaction."},
 { name: "Confirm with MPIN", text: "Confirm the payment on your JazzCash or EasyPaisa app using your 4-digit MPIN."},
 { name: "Funds Credited", text: "Your GoldsBet balance updates within 60 seconds. You are ready to play."},
];

const faqs = [
 { q: "What is the minimum deposit on GoldsBet?", a: "The minimum deposit on GoldsBet Pakistan is Rs. 100 via JazzCash or EasyPaisa."},
 { q: "How long does a GoldsBet deposit take?", a: "JazzCash and EasyPaisa deposits are credited instantly – usually within 30–60 seconds of confirmation."},
 { q: "Is there a deposit fee on GoldsBet?", a: "No. GoldsBet charges zero fees on all deposits. You receive 100% of the amount you transfer."},
 { q: "Can I deposit from a friend's JazzCash account?", a: "No. For security and KYC compliance, deposits must be made from a payment account registered in your own name."},
 { q: "What if my deposit is not credited?", a: "If your balance does not update within 5 minutes, contact GoldsBet live chat with your transaction ID. They resolve it in under 10 minutes."},
 { q: "Is there a maximum daily deposit limit?", a: "Yes. The standard daily limit is Rs. 500,000. VIP players may have higher limits assigned by their account manager."},
];

export default function DepositPage() {
 const schemaData = [
 breadcrumbSchema([
 { name: "Home", url: SITE.url },
 { name: "Deposit", url: `${SITE.url}/how-to-deposit-on-goldsbet` },
 ]),
 howToSchema({
 name: "How to Deposit Money on GoldsBet",
 description: "Step-by-step guide to deposit money on GoldsBet Pakistan via JazzCash and EasyPaisa",
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
 { label: "Deposit Money", href: "/how-to-deposit-on-goldsbet"},
 ]}
 />
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-5">
 <Wallet className="w-4 h-4"/>
 Instant Deposits
 </div>
 <h1 className="text-3xl sm:text-5xl font-black mb-5">
 How to <span className="text-[#D4AF37]">Deposit Money</span> on GoldsBet Pakistan
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
 Fund your GoldsBet account in under 60 seconds using JazzCash, EasyPaisa or Bank Transfer. Minimum Rs. 100 · Zero fees · Instant credit.
 </p>
 <div className="flex flex-wrap justify-center gap-4 text-sm">
 {[
 { icon: <Zap className="w-4 h-4 text-[#D4AF37]"/>, text: "Instant credit"},
 { icon: <Shield className="w-4 h-4 text-green-400"/>, text: "SSL encrypted"},
 { icon: <CheckCircle className="w-4 h-4 text-blue-400"/>, text: "Zero deposit fees"},
 ].map((item) => (
 <span key={item.text} className="flex items-center gap-1.5 text-gray-400">
 {item.icon} {item.text}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* Deposit Methods */}
 <section className="py-16 bg-[#111111]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-6">GoldsBet Deposit Methods – Pakistan</h2>
 <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-xl mb-8">
 <div className="grid grid-cols-4 bg-[#D4AF37]/15 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
 <span>Method</span>
 <span>Limits</span>
 <span>Speed</span>
 <span>Fee</span>
 </div>
 {DEPOSIT_METHODS.map((m, i) => (
 <div
 key={m.method}
 className={`grid grid-cols-4 px-6 py-4 border-t border-white/5 text-sm ${i % 2 === 0 ? "bg-white/5": ""}`}
 >
 <span className="font-semibold text-white">{m.method}</span>
 <span className="text-gray-400">{m.limits}</span>
 <span className="text-green-500 font-medium">{m.speed}</span>
 <span className="text-green-500 font-medium">{m.fee}</span>
 </div>
 ))}
 </div>

 {/* Image */}
 <div className="relative rounded-3xl overflow-hidden h-52 border border-white/10">
 <Image src="/goldsbet-deposit-money.webp"alt="GoldsBet Deposit Money Pakistan"fill sizes="(max-width: 768px) 100vw, 900px"className="object-cover"/>
 <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-8">
 <div>
 <h3 className="text-white font-black text-xl">Deposit in 60 Seconds</h3>
 <p className="text-gray-300 text-sm mt-1">JazzCash · EasyPaisa · Bank Transfer</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Step-by-step */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 Step-by-Step: How to Deposit on GoldsBet
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

 <div className="mt-8 text-center">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-2xl hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Download className="w-5 h-5"/>
 Download GoldsBet &amp; Deposit Now
 </a>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-[#111111]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 GoldsBet Deposit – Frequently Asked Questions
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
 { label: "How to Withdraw", href: "/how-to-withdraw-from-goldsbet", desc: "Cash out your winnings"},
 { label: "Register on GoldsBet", href: "/how-to-register-on-goldsbet", desc: "Create your account"},
 { label: "Download APK", href: "/download-goldsbet-apk", desc: "Get the app first"},
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
