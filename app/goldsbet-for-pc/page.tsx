import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Monitor, CheckCircle, Zap, Download, ChevronRight, Globe } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet for PC 2026 | Play GoldsBet on Windows & Mac in Pakistan",
 description: "How to play GoldsBet on PC in Pakistan. Use BlueStacks emulator or the GoldsBet web browser version. Full guide for Windows 10/11 and Mac.",
 alternates: { canonical: `${SITE.url}/goldsbet-for-pc` },
};

const emulatorSteps = [
 { name: "Download BlueStacks", text: "Go to bluestacks.com and download the free BlueStacks Android emulator for Windows or Mac. File size is ~500 MB."},
 { name: "Install BlueStacks", text: "Run the installer and follow the setup wizard. BlueStacks installs in 3–5 minutes."},
 { name: "Download GoldsBet APK", text: "On your PC browser, visit the official GoldsBet website and download the APK v6.0.6 file (77 MB)."},
 { name: "Open APK in BlueStacks", text: "Double-click the downloaded .apk file. BlueStacks will automatically install GoldsBet."},
 { name: "Launch GoldsBet", text: "Open GoldsBet from the BlueStacks home screen. Log in or register your account."},
 { name: "Enable Full Screen", text: "Press F11 for full-screen mode. Use your mouse and keyboard to navigate the app."},
];

const webSteps = [
 { name: "Open Your Browser", text: "Open Chrome, Firefox, Edge or Safari on your PC or Mac."},
 { name: "Visit GoldsBet Website", text: "Go to the official GoldsBet website in your browser."},
 { name: "Log In or Register", text: "Click 'Login' or 'Register' and enter your credentials."},
 { name: "Start Playing", text: "Access all casino games, sports betting and crash games directly in your browser – no download required."},
];

const faqs = [
 { q: "Can I play GoldsBet on PC without BlueStacks?", a: "Yes. GoldsBet has a full web version accessible from any browser on PC or Mac. Go to the official website, log in and play directly."},
 { q: "Which emulator is best for GoldsBet on PC?", a: "BlueStacks 5 is the most widely tested emulator for GoldsBet. LDPlayer and NoxPlayer also work well on Windows 10/11."},
 { q: "Can I use JazzCash to deposit while playing on PC?", a: "Yes. You can deposit via JazzCash or EasyPaisa from the GoldsBet web interface on PC the same way as on mobile."},
 { q: "Is GoldsBet PC experience the same as mobile?", a: "The web version has all the same games and features. The Android emulator version gives you the exact mobile app experience on a bigger screen."},
 { q: "What are the PC system requirements for BlueStacks + GoldsBet?", a: "Windows 10/11 or macOS 11+, 8 GB RAM, Intel Core i5 or better, and a stable internet connection. BlueStacks uses your GPU for smooth graphics."},
];

export default function ForPCPage() {
 const schemaData = [
 breadcrumbSchema([
 { name: "Home", url: SITE.url },
 { name: "GoldsBet for PC", url: `${SITE.url}/goldsbet-for-pc` },
 ]),
 howToSchema({
 name: "How to Play GoldsBet on PC",
 description: "Step-by-step guide to install and run GoldsBet on Windows or Mac using BlueStacks",
 steps: emulatorSteps,
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
 { label: "GoldsBet for PC", href: "/goldsbet-for-pc"},
 ]}
 />
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-5">
 <Monitor className="w-4 h-4"/>
 Windows &amp; Mac
 </div>
 <h1 className="text-3xl sm:text-5xl font-black mb-5">
 GoldsBet for <span className="text-[#D4AF37]">PC</span> – Play on Windows &amp; Mac
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
 Play GoldsBet on your PC using the Android emulator (BlueStacks) or the browser web version. Both methods work perfectly in Pakistan.
 </p>
 <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
 <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center">
 <Monitor className="w-6 h-6 text-[#D4AF37] mx-auto mb-2"/>
 <p className="font-bold text-white text-sm">Android Emulator</p>
 <p className="text-gray-400 text-xs mt-1">Full app experience on PC</p>
 </div>
 <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center">
 <Globe className="w-6 h-6 text-blue-400 mx-auto mb-2"/>
 <p className="font-bold text-white text-sm">Web Browser</p>
 <p className="text-gray-400 text-xs mt-1">No download required</p>
 </div>
 </div>
 </div>
 </section>

 {/* Method 1 – Emulator */}
 <section className="py-16 bg-[#111111]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
 <Monitor className="w-5 h-5"/>
 </div>
 <h2 className="text-2xl font-black text-white">
 Method 1: Play via BlueStacks (Recommended)
 </h2>
 </div>
 <p className="text-gray-400 mb-6 text-sm leading-relaxed">
 BlueStacks is a free Android emulator that runs the full GoldsBet mobile app on Windows 10/11 or Mac. This gives you the complete app experience including all games, bonuses and payment features on a large screen.
 </p>
 <ol className="space-y-4">
 {emulatorSteps.map((step, i) => (
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
 </div>
 </section>

 {/* Method 2 – Browser */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
 <Globe className="w-5 h-5"/>
 </div>
 <h2 className="text-2xl font-black text-white">
 Method 2: Play via Web Browser (Quickest)
 </h2>
 </div>
 <p className="text-gray-400 mb-6 text-sm leading-relaxed">
 The easiest way to play GoldsBet on PC – no download required. Just open a browser and go to the official GoldsBet website.
 </p>
 <ol className="space-y-4">
 {webSteps.map((step, i) => (
 <li key={step.name} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
 <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-sm flex-shrink-0">
 {i + 1}
 </div>
 <div>
 <h3 className="font-semibold text-white text-sm mb-1">{step.name}</h3>
 <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
 </div>
 </li>
 ))}
 </ol>

 <div className="mt-8">
 <div className="relative rounded-3xl overflow-hidden h-48 border border-white/10">
 <Image src="/goldsbet-app-pakistan-interface.webp"alt="GoldsBet PC Interface Pakistan"fill sizes="(max-width: 768px) 100vw, 800px"className="object-cover object-center"/>
 <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-8">
 <div>
 <h3 className="text-white font-black text-lg">Full HD on PC</h3>
 <p className="text-gray-300 text-sm mt-1">500+ games on a big screen</p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-black font-bold rounded-xl text-sm hover:bg-[#B8960C] transition-colors"
 >
 <Download className="w-4 h-4"/>
 Get APK for Emulator
 </a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Supported emulators */}
 <section className="py-12 bg-[#111111]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-xl font-black text-white mb-6">Supported Android Emulators</h2>
 <div className="grid sm:grid-cols-3 gap-4">
 {[
 { name: "BlueStacks 5", os: "Windows & Mac", status: "Recommended", color: "text-green-400"},
 { name: "LDPlayer", os: "Windows Only", status: "Supported", color: "text-blue-400"},
 { name: "NoxPlayer", os: "Windows & Mac", status: "Supported", color: "text-blue-400"},
 ].map((em) => (
 <div key={em.name} className="p-4 rounded-2xl bg-white/5 border border-white/10">
 <p className="font-bold text-white text-sm">{em.name}</p>
 <p className="text-xs text-gray-400 mt-0.5">{em.os}</p>
 <span className={`text-xs font-semibold mt-2 block ${em.color}`}>{em.status}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">GoldsBet PC – FAQ</h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 {/* Related */}
 <section className="py-12 bg-[#111111] border-t border-white/10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
 <div className="grid sm:grid-cols-3 gap-4">
 {[
 { label: "Download APK", href: "/download-goldsbet-apk", desc: "Official Android guide"},
 { label: "GoldsBet for iOS", href: "/goldsbet-for-ios", desc: "iPhone & iPad guide"},
 { label: "Register", href: "/how-to-register-on-goldsbet", desc: "Create your account"},
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
