import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus, CheckCircle, Gift, Shield } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Register 2026 | How to Sign Up on GoldsBet in Pakistan",
 description: "Create your GoldsBet account in 2 minutes. Step-by-step registration guide for Pakistani players. Claim 200% welcome bonus on signup.",
 alternates: { canonical: `${SITE.url}/how-to-register-on-goldsbet` },
};

const steps = [
 { name: "Download GoldsBet", text: "Download the official GoldsBet APK v6.0.6 from the official site and install it on your device."},
 { name: "Tap Register", text: "Open GoldsBet and tap the 'Register' button at the top right of the home screen."},
 { name: "Enter Mobile Number", text: "Enter your Pakistani mobile number with country code (+92). This becomes your permanent login username."},
 { name: "Create Strong Password", text: "Choose a password with 8+ characters, at least 1 number and 1 symbol (e.g., @, #, !)."},
 { name: "Verify OTP", text: "Enter the 6-digit OTP sent to your number via SMS within 5 minutes. Tap 'Resend OTP' if needed."},
 { name: "Add Referral Code", text: "Optionally enter a referral code from a friend for extra bonus rewards."},
 { name: "Tap Sign Up", text: "Tap the green 'Sign Up' button. Your GoldsBet account is now active."},
 { name: "Claim Welcome Bonus", text: "Go to Wallet → Deposit → make your first deposit of Rs. 500+ to receive the 200% welcome bonus automatically."},
];

const faqs = [
 { q: "What do I need to register on GoldsBet?", a: "You only need an active Pakistani mobile number (+92) and a strong password. No bank card is required to register."},
 { q: "Is there an age requirement for GoldsBet?", a: "Yes. You must be 18 years or older to create a GoldsBet account. Age verification is required during KYC."},
 { q: "Can I have multiple GoldsBet accounts?", a: "No. GoldsBet allows only one account per person, verified by mobile number and CNIC. Duplicate accounts are closed."},
 { q: "How do I claim the 200% welcome bonus?", a: "Register, verify your number, and make your first deposit of at least Rs. 500. The bonus credits automatically."},
 { q: "What if I don't receive the OTP?", a: "Check your signal. Tap 'Resend OTP' after 60 seconds. If still not received, contact GoldsBet live chat support."},
];

export default function RegisterPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Register", url: `${SITE.url}/how-to-register-on-goldsbet` }])) }} />
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ name: "How to Register on GoldsBet", description: "Create your GoldsBet account in Pakistan step by step", steps })) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Register on GoldsBet"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 GoldsBet <span className="text-gold-gradient">Register</span> 2026
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
 Create your GoldsBet account in under 2 minutes and claim a 200% welcome bonus on your first deposit.
 </p>
 </div>
 </div>
 </section>

 {/* Bonus Banner */}
 <section className="py-8 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-b border-white/10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/5 border border-[#D4AF37]/30">
 <div className="flex items-center gap-3">
 <Gift className="w-8 h-8 text-[#D4AF37]"/>
 <div>
 <p className="font-bold text-white">New User Welcome Bonus</p>
 <p className="text-sm text-gray-400">200% match on your first deposit – up to Rs. 20,000</p>
 </div>
 </div>
 <a href={SITE.downloadUrl} target="_blank"rel="noopener noreferrer"
 className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-xl hover:scale-105 transition-all whitespace-nowrap">
 Register & Claim Bonus
 </a>
 </div>
 </div>
 </section>

 {/* Steps */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
 <UserPlus className="w-6 h-6 text-[#D4AF37]"/>
 How to Register on GoldsBet – Step by Step
 </h2>
 <div className="space-y-3">
 {steps.map((step, i) => (
 <div key={step.name} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
 <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
 {i + 1}
 </div>
 <div>
 <p className="font-semibold text-white mb-1">{step.name}</p>
 <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Security tips */}
 <section className="py-12 bg-[#111111]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
 <Shield className="w-5 h-5 text-green-400"/> Account Security Tips
 </h2>
 <div className="grid sm:grid-cols-2 gap-4">
 {[
 "Enable 2FA in Settings → Security after registration",
 "Never share your GoldsBet password – support will never ask for it",
 "Use a unique password not used on JazzCash or EasyPaisa",
 "Enable Face ID / fingerprint login for faster secure access",
 "Log out from shared devices after every session",
 "Complete KYC early to unlock higher withdrawal limits",
 ].map((tip) => (
 <div key={tip} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-sm">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"/>
 <span className="text-gray-300">{tip}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-bold text-white mb-8 text-center">Registration FAQs</h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 {/* Links */}
 <section className="py-10 bg-[#111111] border-t border-white/10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
 {[
 { label: "Download GoldsBet APK", href: "/download-goldsbet-apk"},
 { label: "Login Guide", href: "/goldsbet-login"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Withdrawal Proof", href: "/goldsbet-withdrawal-proof"},
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
