import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Download, Star, Shield, Zap, CheckCircle, XCircle,
 Trophy, Wallet, Users, Gift, Gamepad2, Monitor,
 Globe, MessageCircle, ChevronRight, Clock, Phone,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import {
 SITE, APP_INFO, FEATURES, BONUSES, GAMES, FAQS,
 PROS, CONS, REVIEWS, DEPOSIT_METHODS, COMPETITORS,
} from "@/data/site";
import {
 softwareApplicationSchema, faqSchema, breadcrumbSchema,
 howToSchema, reviewSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet App Download 2026 | Official GoldsBet APK for Real Cash in Pakistan",
 description:
 "Download the official GoldsBet app (latest APK v6.0.6) and play casino, cricket, teen patti and live sports with secure JazzCash & EasyPaisa deposits in Pakistan. Claim your GoldsBet welcome bonus today.",
 alternates: { canonical: SITE.url },
};

const ICON_MAP: Record<string, React.ReactNode> = {
 Gift: <Gift className="w-6 h-6"/>,
 Trophy: <Trophy className="w-6 h-6"/>,
 Monitor: <Monitor className="w-6 h-6"/>,
 Gamepad2: <Gamepad2 className="w-6 h-6"/>,
 Wallet: <Wallet className="w-6 h-6"/>,
 Users: <Users className="w-6 h-6"/>,
 Star: <Star className="w-6 h-6"/>,
 Globe: <Globe className="w-6 h-6"/>,
};

const androidSteps = [
 { name: "Enable Unknown Sources", text: "Go to Settings → Security → enable 'Install from Unknown Sources' on your Android device."},
 { name: "Visit Official Site", text: "Open Chrome and visit the official GoldsBet website."},
 { name: "Download APK", text: "Tap the green 'Download GoldsBet APK v6.0.6' button. The 77 MB file downloads in under 60 seconds on 4G."},
 { name: "Install APK", text: "Open the file from your Downloads folder and tap 'Install'. Wait 10–15 seconds."},
 { name: "Launch & Claim Bonus", text: "Tap 'Open', register your account and claim your 200% welcome bonus."},
];

const registerSteps = [
 { name: "Launch GoldsBet", text: "Open the GoldsBet app on your device."},
 { name: "Tap Register", text: "Tap the 'Register' button in the top right of the home screen."},
 { name: "Enter Mobile Number", text: "Enter your Pakistani mobile number (+92). This becomes your login username."},
 { name: "Create Password", text: "Choose a strong password: 8+ characters, 1 number, 1 symbol."},
 { name: "Verify OTP", text: "Enter the 6-digit OTP sent to your mobile number via SMS."},
 { name: "Sign Up", text: "Add an optional referral code and tap 'Sign Up'. Your account is ready."},
];

const depositSteps = [
 { name: "Open Wallet", text: "Open GoldsBet and tap the 'Wallet' icon at the bottom."},
 { name: "Select Deposit", text: "Tap 'Deposit' from the wallet menu."},
 { name: "Choose Method", text: "Select JazzCash or EasyPaisa as your payment method."},
 { name: "Enter Amount", text: "Enter the amount (minimum Rs. 100)."},
 { name: "Confirm with MPIN", text: "Confirm on your JazzCash or EasyPaisa app using your MPIN."},
 { name: "Funds Credited", text: "Your balance appears in under 60 seconds."},
];

const withdrawSteps = [
 { name: "Open Wallet", text: "Tap 'Wallet' → 'Withdraw' inside the GoldsBet app."},
 { name: "Select Payout", text: "Choose JazzCash, EasyPaisa or Bank as your payout wallet."},
 { name: "Enter Amount", text: "Enter the withdrawal amount (minimum Rs. 300)."},
 { name: "Security PIN", text: "Enter your GoldsBet security PIN."},
 { name: "Confirm", text: "Tap 'Confirm'. Money arrives in your wallet in 3–10 minutes."},
];

function SectionTag({ children }: { children: React.ReactNode }) {
 return (
 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
 {children}
 </span>
 );
}

function PhoneMockup({
 src,
 alt,
 className = "",
 objectPosition = "object-center",
 imageLoading = "lazy",
 imagePriority = false,
}: {
 src: string;
 alt: string;
 className?: string;
 objectPosition?: string;
 imageLoading?: "lazy" | "eager";
 imagePriority?: boolean;
}) {
 return (
 <div className={`relative flex-shrink-0 ${className}`}>
 {/* Outer glow */}
 <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-[3.5rem] blur-2xl"/>
 {/* Phone frame */}
 <div className="relative w-[220px] h-[455px] bg-[#1C1C1E] rounded-[3.2rem] border-[5px] border-[#2C2C2E] shadow-2xl shadow-black/60">
 {/* Screen */}
 <div className="absolute inset-[3px] bg-black rounded-[2.7rem] overflow-hidden">
 {/* Dynamic island */}
 <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 border border-[#2A2A2A]"/>
 <Image
 src={src}
 alt={alt}
 fill
 sizes="220px"
      loading={imageLoading}
      priority={imagePriority}
 className={`object-cover ${objectPosition}`}
 />
 {/* Screen glare */}
 <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"/>
 </div>
 {/* Home indicator */}
 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-white/20 rounded-full"/>
 {/* Volume buttons */}
 <div className="absolute left-[-7px] top-[95px] w-[5px] h-7 bg-[#2C2C2E] rounded-l-md"/>
 <div className="absolute left-[-7px] top-[133px] w-[5px] h-7 bg-[#2C2C2E] rounded-l-md"/>
 {/* Power button */}
 <div className="absolute right-[-7px] top-[115px] w-[5px] h-10 bg-[#2C2C2E] rounded-r-md"/>
 </div>
 {/* Glow under phone */}
 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-6 bg-[#D4AF37]/20 rounded-full blur-xl"/>
 </div>
 );
}

function StepCard({ step, index }: { step: { name: string; text: string }; index: number }) {
 return (
 <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
 <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
 {index + 1}
 </div>
 <div>
 <h4 className="font-semibold text-white text-sm mb-1">
 {step.name}
 </h4>
 <p className="text-gray-400 text-sm leading-relaxed">
 {step.text}
 </p>
 </div>
 </div>
 );
}

export default function HomePage() {
 return (
 <>
 {/* Schemas */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(
 breadcrumbSchema([{ name: "GoldsBet App Download", url: SITE.url }])
 ),
 }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(
 howToSchema({
 name: "How to Download GoldsBet APK",
 description: "Step-by-step guide to download and install GoldsBet APK on Android",
 steps: androidSteps,
 })
 ),
 }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema()) }}
 />

 {/* ───────────────────── HERO ───────────────────── */}
 <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]">
 {/* Background glows */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37]/8 rounded-full blur-3xl"/>
 <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"/>
 <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/3 rounded-full blur-3xl"/>
 </div>

 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
 <div className="grid lg:grid-cols-2 gap-10 items-center">

 {/* ── Left: text content ── */}
 <div className="animate-fade-in order-1 lg:order-1">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-5">
 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
 Pakistan&apos;s #1 Real-Cash Gaming App 2026
 </div>

 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                GoldsBet App Download 2026{" "}
 <span className="text-gold-gradient">Official APK</span> for Pakistan
 </h1>

 <p className="text-gray-400 text-lg leading-relaxed mb-7 max-w-xl">
 Download the official GoldsBet APK v6.0.6 (77 MB, free) and play cricket betting, live casino, Teen Patti, slots and more. Instant JazzCash & EasyPaisa cashouts. 200% welcome bonus.
 </p>

 {/* Stats */}
 <div className="grid grid-cols-3 gap-3 mb-7">
 {[
 { label: "Downloads", value: "1M+"},
 { label: "User Rating", value: "4.8★"},
 { label: "Welcome Bonus", value: "200%"},
 ].map((stat) => (
 <div key={stat.label} className="text-center p-3 rounded-2xl bg-white/5 border border-white/10">
 <div className="text-xl sm:text-2xl font-black text-[#D4AF37]">{stat.value}</div>
 <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
 </div>
 ))}
 </div>

 {/* CTAs */}
 <div className="flex flex-col sm:flex-row gap-3">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Download className="w-5 h-5"/>
 Download APK Free
 </a>
 <Link
 href="/how-to-register-on-goldsbet"
 className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
 >
 Register Now →
 </Link>
 </div>

 {/* Trust signals */}
 <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-gray-400">
 <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-green-400"/>SSL Encrypted</span>
 <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-blue-400"/>Curaçao Licensed</span>
 <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#D4AF37]"/>3-Min Withdrawal</span>
 <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-purple-400"/>JazzCash & EasyPaisa</span>
 </div>
 </div>

 {/* ── Right: dual phone mockups ── */}
 <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
 <div className="relative flex items-end justify-center gap-0">

 {/* Phone 2 – back / left, slightly rotated (hidden on mobile) */}
 <div className="hidden sm:block relative flex-shrink-0 -mr-8 mb-6 rotate-[-8deg] opacity-80 z-0">
 {/* Phone frame */}
 <div className="relative w-[200px] h-[410px] bg-[#1C1C1E] rounded-[2.8rem] border-[5px] border-[#2C2C2E] shadow-2xl shadow-black/60">
 {/* Screen */}
 <div className="absolute inset-[3px] bg-black rounded-[2.3rem] overflow-hidden">
 {/* Dynamic island */}
 <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 border border-[#333]"/>
 <Image
 src="/goldsbet-app-pakistan.webp"
 alt="GoldsBet App Pakistan"
 fill
 sizes="200px"
 className="object-cover object-center"
 />
 {/* Screen glare */}
 <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"/>
 </div>
 {/* Home indicator */}
 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-white/20 rounded-full"/>
 {/* Volume buttons */}
 <div className="absolute left-[-7px] top-[90px] w-[5px] h-7 bg-[#2C2C2E] rounded-l-md"/>
 <div className="absolute left-[-7px] top-[128px] w-[5px] h-7 bg-[#2C2C2E] rounded-l-md"/>
 {/* Power button */}
 <div className="absolute right-[-7px] top-[110px] w-[5px] h-10 bg-[#2C2C2E] rounded-r-md"/>
 </div>
 {/* Glow under phone 2 */}
 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#D4AF37]/20 rounded-full blur-xl"/>
 </div>

 {/* Phone 1 – front / main */}
 <div className="relative flex-shrink-0 z-10">
 {/* Phone frame */}
 <div className="relative w-[240px] h-[500px] sm:w-[260px] sm:h-[535px] bg-[#1C1C1E] rounded-[3.2rem] border-[6px] border-[#2C2C2E] shadow-2xl shadow-black/70">
 {/* Screen */}
 <div className="absolute inset-[3px] bg-black rounded-[2.7rem] overflow-hidden">
 {/* Dynamic island */}
 <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 border border-[#333]"/>
 <Image
 src="/goldsbet-app-pakistan-interface.webp"
 alt="GoldsBet App Interface Pakistan"
 fill
 sizes="(max-width: 640px) 240px, 260px"
 className="object-cover object-center"
 priority
 loading="eager"
 />
 {/* Screen glare */}
 <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"/>
 </div>
 {/* Home indicator */}
 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-white/25 rounded-full"/>
 {/* Volume buttons */}
 <div className="absolute left-[-8px] top-[100px] w-[6px] h-8 bg-[#2C2C2E] rounded-l-md"/>
 <div className="absolute left-[-8px] top-[142px] w-[6px] h-8 bg-[#2C2C2E] rounded-l-md"/>
 {/* Power button */}
 <div className="absolute right-[-8px] top-[120px] w-[6px] h-12 bg-[#2C2C2E] rounded-r-md"/>
 </div>
 {/* Glow under phone 1 */}
 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-44 h-8 bg-[#D4AF37]/25 rounded-full blur-2xl"/>

 {/* Floating rating badge */}
 <div className="absolute -bottom-5 -left-6 bg-[#1A1A1A] border border-[#D4AF37]/40 rounded-2xl px-3 py-2.5 shadow-xl z-20">
 <div className="flex items-center gap-1.5">
 <div className="flex text-[#D4AF37]">
 {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current"/>)}
 </div>
 <span className="text-white text-xs font-bold">4.8/5</span>
 </div>
 <p className="text-gray-400 text-[10px] mt-0.5">1.08M+ Reviews</p>
 </div>

 {/* Floating APK badge */}
 <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#D4AF37] to-[#B8960C] rounded-2xl px-3 py-2 shadow-xl z-20">
 <p className="text-black text-xs font-black">v6.0.6</p>
 <p className="text-black/70 text-[10px]">77 MB</p>
 </div>
 </div>

 </div>
 </div>

 </div>
 </div>
 </section>

 {/* ───────────────────── TL;DR / AEO BOX ───────────────────── */}
 <section className="bg-[#111111] border-y border-white/10 py-8">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 rounded-2xl p-6">
 <div className="flex items-start gap-3">
 <div className="p-2 rounded-xl bg-[#D4AF37]/20 flex-shrink-0">
 <Zap className="w-5 h-5 text-[#D4AF37]"/>
 </div>
 <div>
 <h2 className="font-bold text-white mb-3">
 Quick Answer – GoldsBet Pakistan (2026)
 </h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
 {[
 { label: "Latest APK", value: "v6.0.6 (77 MB)"},
 { label: "Welcome Bonus", value: "200% on first deposit"},
 { label: "Min Deposit", value: "Rs. 100 via JazzCash"},
 { label: "Withdrawal Speed", value: "3–10 minutes"},
 ].map((item) => (
 <div key={item.label} className="flex items-center gap-2">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0"/>
 <div>
 <span className="text-gray-400">{item.label}: </span>
 <span className="font-semibold text-white">{item.value}</span>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── WHAT IS GOLDSBET ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A] overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <SectionTag>About GoldsBet</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
 What Is <span className="text-[#D4AF37]">GoldsBet</span>?
 </h2>
 <p className="text-gray-300 leading-relaxed mb-5">
 GoldsBet is a <strong className="text-white">licensed real-money online betting and casino application</strong> that lets users in Pakistan, India and Bangladesh play 500+ games and bet on live sports from a single mobile app.
 </p>
 <p className="text-gray-300 leading-relaxed mb-6">
 Launched by GoldsBet Incorporated and trusted by over 1 million active players, GoldsBet combines a sportsbook, live dealer casino, Teen Patti, Andar Bahar, slots and crash games with locally-integrated payment rails such as JazzCash and EasyPaisa. In simple words: GoldsBet is where South Asian players go for smooth HD gameplay, fast withdrawals in Pakistani Rupees, and genuine welcome bonuses.
 </p>
 <div className="grid grid-cols-2 gap-3">
 {[
 "PKR localized – no currency fees",
 "92% withdrawals in under 5 minutes",
 "Certified RNG & SSL encryption",
 "Budget Android friendly (77 MB)",
 ].map((point) => (
 <div key={point} className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"/>
 <span className="text-gray-300">{point}</span>
 </div>
 ))}
 </div>
 </div>
 {/* Phone mockup – visible on all screen sizes */}
 <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
 <PhoneMockup
 src="/goldsbet-account-pakistan.webp"
 alt="GoldsBet Account Pakistan"
 objectPosition="object-center"
 />
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── APP INFO TABLE ───────────────────── */}
 <section className="py-16 bg-[#111111]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <SectionTag>Quick Information</SectionTag>
 <h2 className="text-3xl font-black text-white">
 GoldsBet App – Quick Information (2026)
 </h2>
 </div>
 <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-xl">
 {APP_INFO.map((row, i) => (
 <div
 key={row.field}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0
                    ? "bg-white/5"
                    : "bg-[#1A1A1A]"
                } border-b border-white/5 last:border-0`}
 >
 <span className="text-sm font-semibold text-gray-400 w-40">
 {row.field}
 </span>
 <span className="text-sm font-semibold text-white text-right">
 {row.details}
 </span>
 </div>
 ))}
 </div>
 <div className="mt-6 text-center">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-2xl hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Download className="w-5 h-5"/>
 Download GoldsBet APK v6.0.6 – Free
 </a>
 </div>
 </div>
 </section>

 {/* ───────────────────── WHY #1 ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Why GoldsBet</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 Why GoldsBet Is the <span className="text-[#D4AF37]">#1 Real-Cash</span> Gaming App in Pakistan (2026)
 </h2>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: <Wallet className="w-7 h-7"/>, title: "PKR Localized", desc: "No currency conversion fees. Deposit and withdraw directly to JazzCash or EasyPaisa."},
 { icon: <Zap className="w-7 h-7"/>, title: "Instant Cashout", desc: "92% of GoldsBet withdrawals are processed in under 5 minutes."},
 { icon: <Shield className="w-7 h-7"/>, title: "Fairness Certified", desc: "Every game uses certified RNG and SSL-encrypted transactions."},
 { icon: <Phone className="w-7 h-7"/>, title: "Mobile-First", desc: "77 MB APK opens in under 2 seconds even on budget Android devices."},
 ].map((item) => (
 <div
 key={item.title}
 className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:shadow-xl hover:shadow-[#D4AF37]/5 transition-all group"
 >
 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8960C]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
 {item.icon}
 </div>
 <h3 className="font-bold text-white mb-2">{item.title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ───────────────────── FEATURES ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Key Features</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 GoldsBet Key Features at a Glance
 </h2>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {FEATURES.map((f) => (
 <div
 key={f.title}
 className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-all group"
 >
 <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/25 transition-colors">
 {ICON_MAP[f.icon]}
 </div>
 <h3 className="font-bold text-white mb-2 text-sm">
 {f.title}
 </h3>
 <p className="text-gray-400 text-xs leading-relaxed">
 {f.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ───────────────────── GAMES ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Games Library</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 Complete List of Games on GoldsBet
 </h2>
 <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
 GoldsBet offers one of the widest game libraries in South Asia – 500+ games across sports, casino and slots.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { title: "Sports Betting", icon: <Trophy className="w-6 h-6"/>, items: GAMES.sports, color: "from-blue-500/20 to-blue-600/10"},
 { title: "Casino & Card Games", icon: <Gamepad2 className="w-6 h-6"/>, items: GAMES.casino, color: "from-purple-500/20 to-purple-600/10"},
 { title: "Slots & Instant Win", icon: <Star className="w-6 h-6"/>, items: GAMES.slots, color: "from-[#D4AF37]/20 to-[#B8960C]/10"},
 ].map((cat) => (
 <div
 key={cat.title}
 className={`p-6 rounded-3xl bg-gradient-to-br ${cat.color} border border-white/10`}
 >
 <div className="flex items-center gap-3 mb-5">
 <div className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 flex items-center justify-center text-[#D4AF37]">
 {cat.icon}
 </div>
 <h3 className="font-bold text-white">{cat.title}</h3>
 </div>
 <ul className="space-y-2">
 {cat.items.map((item) => (
 <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
 <ChevronRight className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5"/>
 {item}
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ───────────────────── DOWNLOAD STEPS ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Step-by-Step</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 How to Download GoldsBet APK (Android)
 </h2>
 </div>
 <div className="grid md:grid-cols-2 gap-8 items-center">
 <div className="space-y-3 order-2 md:order-1">
 {androidSteps.map((step, i) => (
 <StepCard key={step.name} step={step} index={i} />
 ))}
 <div className="pt-4">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-2xl hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all"
 >
 <Download className="w-5 h-5"/>
 Download GoldsBet APK Now
 </a>
 </div>
 </div>
 {/* Phone mockup */}
 <div className="flex justify-center order-1 md:order-2 mb-4 md:mb-0">
 <PhoneMockup
 src="/goldsbet-app-pakistan-interface.webp"
 alt="GoldsBet App Download Pakistan"
 objectPosition="object-center"
              imageLoading="eager"
              imagePriority
 />
 </div>
 </div>

 {/* iOS */}
 <div className="mt-14">
 <h3 className="text-2xl font-bold text-white mb-6 text-center">
 How to Install GoldsBet on iPhone / iOS
 </h3>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {[
 { num: 1, text: "Open Safari on your iPhone (not Chrome)."},
 { num: 2, text: "Visit the official GoldsBet website and tap 'Download for iOS'."},
 { num: 3, text: "Allow the developer profile to download."},
 { num: 4, text: "Go to Settings → General → VPN & Device Management."},
 { num: 5, text: "Find the GoldsBet profile and tap 'Trust'."},
 { num: 6, text: "Return to home screen. Tap the GoldsBet icon to log in."},
 ].map((step) => (
 <div key={step.num} className="flex gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
 <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-black flex items-center justify-center flex-shrink-0">
 {step.num}
 </span>
 <p className="text-sm text-gray-300">{step.text}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── REGISTER & LOGIN ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Account Setup</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 How to Register & Login on GoldsBet
 </h2>
 </div>
 {/* Registration row */}
 <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
 <div className="space-y-3">
 <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
 <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-sm font-black">R</span>
 Register on GoldsBet
 </h3>
 {registerSteps.map((step, i) => (
 <StepCard key={step.name} step={step} index={i} />
 ))}
 <div className="pt-2">
 <Link
 href="/how-to-register-on-goldsbet"
 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-xl border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 transition-all"
 >
 Full Registration Guide →
 </Link>
 </div>
 </div>
 <div className="flex justify-center">
 <PhoneMockup
 src="/goldsbet-registration-pakistan.webp"
 alt="GoldsBet Registration Pakistan"
 objectPosition="object-center"
 />
 </div>
 </div>

 {/* Login row */}
 <div className="grid md:grid-cols-2 gap-8 items-center">
 <div className="flex justify-center order-2 md:order-1">
 <PhoneMockup
 src="/goldsbet-login-pakistan.webp"
 alt="GoldsBet Login Pakistan"
 objectPosition="object-center"
 />
 </div>
 <div className="order-1 md:order-2 space-y-3">
 <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
 <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-sm font-black">L</span>
 Login to GoldsBet
 </h3>
 {[
 { name: "Open GoldsBet App", text: "Launch the GoldsBet app on your Android or iOS device."},
 { name: "Enter Mobile Number", text: "Enter your registered Pakistani mobile number (+92)."},
 { name: "Enter Password", text: "Type your password and tap 'Login'."},
 { name: "Biometric Login", text: "Enable Face ID or fingerprint login in Settings → Security for faster access next time."},
 ].map((step, i) => (
 <StepCard key={step.name} step={step} index={i} />
 ))}
 <div className="pt-2">
 <Link
 href="/goldsbet-login"
 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-xl border border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 transition-all"
 >
 Full Login Guide →
 </Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── DEPOSIT & WITHDRAWAL ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Payments</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 Deposit & Withdrawal on GoldsBet
 </h2>
 </div>

 {/* Deposit methods table */}
 <div className="mb-12">
 <h3 className="text-xl font-bold text-white mb-5">GoldsBet Deposit Methods</h3>
 <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
 <div className="grid grid-cols-4 bg-[#D4AF37]/15 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider">
 <span>Method</span>
 <span>Limits</span>
 <span>Speed</span>
 <span>Fee</span>
 </div>
 {DEPOSIT_METHODS.map((m, i) => (
 <div
 key={m.method}
 className={`grid grid-cols-4 px-6 py-4 border-t border-white/5 text-sm ${
 i % 2 === 0 ? "bg-white/5": ""
 }`}
 >
 <span className="font-semibold text-white">{m.method}</span>
 <span className="text-gray-400">{m.limits}</span>
 <span className="text-green-500 font-medium">{m.speed}</span>
 <span className="text-green-500 font-medium">{m.fee}</span>
 </div>
 ))}
 </div>
 </div>

 {/* Deposit */}
 <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
 <div className="space-y-3">
 <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
 <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-sm font-black">↓</span>
 How to Deposit on GoldsBet
 </h3>
 {depositSteps.map((step, i) => (
 <StepCard key={step.name} step={step} index={i} />
 ))}
 </div>
 <div className="flex justify-center">
 <PhoneMockup
 src="/goldsbet-deposit-money.webp"
 alt="GoldsBet Deposit Money Pakistan"
 objectPosition="object-center"
 />
 </div>
 </div>

 {/* Withdrawal */}
 <div className="grid md:grid-cols-2 gap-8 items-center">
 <div className="flex justify-center order-2 md:order-1">
 <PhoneMockup
 src="/goldsbet-withdraw-money.webp"
 alt="GoldsBet Withdraw Money Pakistan"
 objectPosition="object-center"
 />
 </div>
 <div className="order-1 md:order-2">
 <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
 <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-sm font-black">↑</span>
 How to Withdraw (Instant Cashout)
 </h3>
 <div className="space-y-3">
 {withdrawSteps.map((step, i) => (
 <StepCard key={step.name} step={step} index={i} />
 ))}
 </div>
 <div className="mt-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
 <p className="text-sm text-green-400 font-semibold">✓ Zero withdrawal fees · Up to 5 cashouts/day · 3–10 min average</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── BONUSES ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>Promotions</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white">
 GoldsBet Bonuses & Promotions 2026
 </h2>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {BONUSES.map((bonus) => (
 <div
 key={bonus.title}
 className="relative p-6 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group"
 >
 <div className="absolute top-4 right-4 text-3xl font-black text-[#D4AF37]/20">
 %
 </div>
 <div className="text-3xl font-black text-[#D4AF37] mb-2">{bonus.value}</div>
 <h3 className="font-bold text-white mb-2">{bonus.title}</h3>
 <p className="text-gray-400 text-sm">{bonus.desc}</p>
 </div>
 ))}
 </div>
 <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
 {/* Welcome Bonus phone */}
 <div className="flex flex-col sm:flex-row items-center gap-8">
 <PhoneMockup
 src="/golds-bet-app-bonuses.webp"
 alt="GoldsBet Bonuses Pakistan"
 objectPosition="object-center"
 />
 <div>
 <h3 className="text-white font-black text-xl mb-2">200% Welcome Bonus</h3>
 <p className="text-gray-400 text-sm mb-4">Register now and double your first deposit instantly.</p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-black font-bold rounded-xl text-sm hover:bg-[#B8960C] transition-colors"
 >
 Claim Bonus →
 </a>
 </div>
 </div>

 {/* Invite & Earn phone */}
 <div className="flex flex-col sm:flex-row items-center gap-8">
 <PhoneMockup
 src="/goldsbet-invite-and-earn-pakistan.webp"
 alt="GoldsBet Invite and Earn Pakistan"
 objectPosition="object-center"
 />
 <div>
 <h3 className="text-white font-black text-xl mb-2">Invite &amp; Earn</h3>
 <p className="text-gray-400 text-sm mb-4">Refer friends and earn real PKR cash rewards every time they deposit.</p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-black font-bold rounded-xl text-sm hover:bg-[#B8960C] transition-colors"
 >
 Start Earning →
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── SAFETY / LEGAL ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <SectionTag>Safety & Legal</SectionTag>
 <h2 className="text-3xl font-black text-white mb-6">
 Is GoldsBet Safe and Legal in Pakistan?
 </h2>
 <p className="text-gray-300 leading-relaxed mb-5">
 GoldsBet is operated offshore under a valid <strong className="text-white">Curaçao eGaming license</strong>, which legally allows it to accept Pakistani players. The app uses 256-bit SSL encryption, KYC verification and segregated player funds.
 </p>
 <div className="space-y-3">
 {[
 { icon: <Shield className="w-5 h-5 text-green-400"/>, label: "256-bit SSL Encryption"},
 { icon: <CheckCircle className="w-5 h-5 text-blue-400"/>, label: "Curaçao eGaming License"},
 { icon: <Users className="w-5 h-5 text-purple-400"/>, label: "KYC Verified Platform"},
 { icon: <Wallet className="w-5 h-5 text-[#D4AF37]"/>, label: "Segregated Player Funds"},
 ].map((item) => (
 <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
 {item.icon}
 <span className="text-sm font-medium text-gray-300">{item.label}</span>
 </div>
 ))}
 </div>
 </div>
 <div className="flex justify-center lg:justify-end">
 <PhoneMockup
 src="/goldsbet-app-pakistan.webp"
 alt="GoldsBet Security Pakistan"
 objectPosition="object-center"
 />
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── COMPARISON ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <SectionTag>Comparison</SectionTag>
 <h2 className="text-3xl font-black text-white">
 GoldsBet vs Competitors – Honest Comparison
 </h2>
 </div>
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
 <tr
 key={row.feature}
 className={`border-t border-white/5 ${
 i % 2 === 0 ? "bg-white/5": ""
 }`}
 >
 <td className="px-5 py-3.5 text-sm font-semibold text-gray-300">{row.feature}</td>
 <td className="px-5 py-3.5 text-center text-sm font-bold text-[#D4AF37]">{row.goldsbet}</td>
 <td className="px-5 py-3.5 text-center text-sm text-gray-300">{row.spinwin}</td>
 <td className="px-5 py-3.5 text-center text-sm text-gray-300">{row.wine788}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* ───────────────────── TIPS ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <SectionTag>Expert Tips</SectionTag>
 <h2 className="text-3xl font-black text-white">
 Winning Strategies & Expert Tips for GoldsBet
 </h2>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {[
 { tip: "Always claim the welcome bonus – it doubles your starting bankroll."},
 { tip: "In cricket betting, bet on live in-play odds after the 6-over powerplay when prices are sharpest."},
 { tip: "In Teen Patti, use the blind strategy only when stakes are low."},
 { tip: "In slots, choose games with RTP above 96% – GoldsBet shows RTP on every slot."},
 { tip: "Never chase losses – set a daily deposit limit in GoldsBet Settings."},
 { tip: "Use the Lucky Spin every single day – it is free money."},
 { tip: "Refer at least 3 friends a month to unlock the top referral tier."},
 { tip: "For live casino, join tables with smaller minimum bets to extend playtime."},
 ].map((item, i) => (
 <div
 key={i}
 className="p-5 rounded-2xl bg-white/5 border border-white/10"
 >
 <div className="w-7 h-7 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-black flex items-center justify-center mb-3">
 {i + 1}
 </div>
 <p className="text-sm text-gray-300 leading-relaxed">{item.tip}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ───────────────────── PROS & CONS ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <SectionTag>Pros & Cons</SectionTag>
 <h2 className="text-3xl font-black text-white">
 Pros and Cons of GoldsBet
 </h2>
 </div>
 <div className="grid md:grid-cols-2 gap-6">
 <div className="p-6 rounded-3xl bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20">
 <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
 <CheckCircle className="w-5 h-5"/> Pros
 </h3>
 <ul className="space-y-3">
 {PROS.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-300">
 <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"/>
 {pro}
 </li>
 ))}
 </ul>
 </div>
 <div className="p-6 rounded-3xl bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/20">
 <h3 className="font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
 <XCircle className="w-5 h-5"/> Cons
 </h3>
 <ul className="space-y-3">
 {CONS.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-gray-800 dark:text-gray-300">
 <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"/>
 {con}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* ───────────────────── REVIEWS ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14">
 <SectionTag>User Reviews</SectionTag>
 <h2 className="text-3xl font-black text-white">
 What Pakistani Players Say About GoldsBet
 </h2>
 <div className="flex items-center justify-center gap-2 mt-3">
 <div className="flex text-[#D4AF37]">
 {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current"/>)}
 </div>
 <span className="font-bold text-white">4.8/5</span>
 <span className="text-gray-400 text-sm">from 1.08M+ reviews</span>
 </div>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {REVIEWS.map((review) => (
 <div
 key={review.name}
 className="p-5 rounded-3xl bg-white/5 border border-white/10"
 >
 <div className="mb-4">
 <p className="font-semibold text-white text-sm">{review.name}</p>
 <p className="text-xs text-gray-400 mt-0.5">{review.city} · {review.date}</p>
 </div>
 <div className="flex text-[#D4AF37] mb-3">
 {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current"/>)}
 </div>
 <p className="text-xs text-gray-300 leading-relaxed">{review.text}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ───────────────────── SUPPORT ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <SectionTag>Support</SectionTag>
 <h2 className="text-3xl font-black text-white">
 GoldsBet Customer Support
 </h2>
 <p className="text-gray-400 mt-3">
 Available 24/7 including Eid and public holidays
 </p>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {[
 { icon: <MessageCircle className="w-6 h-6"/>, title: "Live Chat", desc: "Average reply under 2 minutes", color: "text-blue-400", href: "https://chat.ssrchat.com/service/gcb95j"},
 { icon: <Phone className="w-6 h-6"/>, title: "WhatsApp", desc: "Urdu & English 24/7", color: "text-green-400", href: "https://chat.ssrchat.com/service/gcb95j"},
 { icon: <Clock className="w-6 h-6"/>, title: "Live Support", desc: "chat.ssrchat.com · Online Consultant", color: "text-[#D4AF37]", href: "https://chat.ssrchat.com/service/gcb95j"},
 { icon: <Send className="w-6 h-6"/>, title: "Telegram", desc: "Bonus alerts & promotions", color: "text-purple-400", href: "https://chat.ssrchat.com/service/gcb95j"},
 ].map((ch) => (
 <a
 key={ch.title}
 href={ch.href}
 target="_blank"
 rel="noopener noreferrer"
 className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-[#D4AF37]/40 transition-all"
 >
 <div className={`w-12 h-12 mx-auto rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center ${ch.color} mb-3`}>
 {ch.icon}
 </div>
 <h3 className="font-bold text-white text-sm">{ch.title}</h3>
 <p className="text-xs text-gray-400 mt-1">{ch.desc}</p>
 </a>
 ))}
 </div>
 </div>
 </section>

 {/* ───────────────────── FAQ ───────────────────── */}
 <section className="py-20 bg-[#111111]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-10">
 <SectionTag>FAQ</SectionTag>
 <h2 className="text-3xl font-black text-white">
 Frequently Asked Questions – GoldsBet
 </h2>
 </div>
 <FAQAccordion faqs={FAQS} />
 </div>
 </section>

 {/* ───────────────────── FINAL VERDICT ───────────────────── */}
 <section className="py-20 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <SectionTag>Final Verdict</SectionTag>
 <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
 Should You Download GoldsBet in 2026?
 </h2>
 <p className="text-gray-300 leading-relaxed text-lg mb-8">
 If you are a Pakistani player looking for a single app that combines live cricket betting, casino classics like Teen Patti and Andar Bahar, fast HD slots and genuine JazzCash / EasyPaisa cashouts – <strong className="text-white">GoldsBet is currently the best choice on the market.</strong> The 200% welcome bonus, 4.8-star user rating and industry-leading 3-minute withdrawal speed make it a clear step above older apps.
 </p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black text-xl rounded-2xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Download className="w-6 h-6"/>
 Download GoldsBet APK v6.0.6 – Free
 </a>
 <p className="text-gray-400 text-xs mt-4">
 77 MB · Android 6.0+ · iOS 12+ · No registration required to download
 </p>
 </div>
 </section>

 {/* ───────────────────── INTERNAL LINKS ───────────────────── */}
 <section className="py-16 bg-[#111111] border-t border-white/10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-xl font-bold text-white mb-6">
 Explore More GoldsBet Guides
 </h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
 {[
 { label: "Download APK Guide", href: "/download-goldsbet-apk", desc: "Safe download instructions"},
 { label: "Register on GoldsBet", href: "/how-to-register-on-goldsbet", desc: "Create your account today"},
 { label: "Login to GoldsBet", href: "/goldsbet-login", desc: "Access your account"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet", desc: "Tips to maximize earnings"},
 { label: "Withdrawal Proof", href: "/goldsbet-withdrawal-proof", desc: "Verified payment records"},
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake", desc: "Honest legitimacy review"},
 { label: "GoldsBet Alternatives", href: "/goldsbet-alternatives", desc: "Compare other apps"},
 { label: "GoldsBet Blog", href: "/blog", desc: "Expert guides and tips"},
 ].map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all group"
 >
 <p className="font-semibold text-white text-sm group-hover:text-[#D4AF37] transition-colors">
 {link.label}
 </p>
 <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
 <ChevronRight className="w-4 h-4 text-[#D4AF37] mt-2 group-hover:translate-x-1 transition-transform"/>
 </Link>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Send({ className }: { className: string }) {
 return (
 <svg className={className} viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth={2}>
 <line x1="22"y1="2"x2="11"y2="13"/>
 <polygon points="22 2 15 22 11 13 2 9 22 2"/>
 </svg>
 );
}
