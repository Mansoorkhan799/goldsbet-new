import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, CheckCircle, Shield, Download, ChevronRight, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet for iOS 2026 | How to Install GoldsBet on iPhone & iPad in Pakistan",
 description: "How to install GoldsBet on iPhone and iPad in Pakistan. Step-by-step iOS guide for Safari download, developer profile trust and login. Works on iOS 12+.",
 alternates: { canonical: `${SITE.url}/goldsbet-for-ios` },
};

const steps = [
 { name: "Open Safari on iPhone", text: "Use Safari (not Chrome or Firefox). Safari is required for iOS profile downloads. Tap the Safari icon on your home screen."},
 { name: "Visit Official GoldsBet Site", text: "Type the official GoldsBet website URL in the Safari address bar and load the page."},
 { name: "Tap Download for iOS", text: "Tap the 'Download for iOS' or 'iPhone Download' button on the website. A prompt to install a configuration profile will appear."},
 { name: "Allow Profile Download", text: "Tap 'Allow' when Safari asks permission to download the profile. The profile is saved to your iPhone settings."},
 { name: "Go to Settings", text: "Open your iPhone Settings → General → VPN & Device Management (or 'Profiles & Device Management' on older iOS)."},
 { name: "Trust the Developer Profile", text: "Find the GoldsBet developer profile in the list. Tap it, then tap 'Trust [GoldsBet]' and confirm with 'Trust'."},
 { name: "Launch GoldsBet", text: "Return to your Home Screen. The GoldsBet icon has appeared. Tap it to open the app and log in or register."},
];

const faqs = [
 { q: "What iOS version is required for GoldsBet?", a: "GoldsBet requires iOS 12.0 or higher. It works on iPhone 6s and newer, all iPad models running iOS 12+."},
 { q: "Why do I need to trust the developer profile?", a: "Because GoldsBet is a real-money app not on the App Store, it uses an enterprise certificate. Trusting the profile simply tells your iPhone that you approve this developer."},
 { q: "Does GoldsBet work on iPad?", a: "Yes. GoldsBet is fully compatible with all iPad models running iPadOS 12 or higher. The interface scales to the tablet screen size."},
 { q: "Will GoldsBet be removed after an iOS update?", a: "iOS updates occasionally require you to re-trust the developer profile. If the app stops working after an update, go back to Settings → VPN & Device Management and re-trust the profile."},
 { q: "Can I use Face ID or Touch ID on GoldsBet iOS?", a: "Yes. After logging in for the first time, go to GoldsBet Settings → Security and enable biometric login."},
 { q: "Is the iOS version of GoldsBet safe?", a: "Yes. The GoldsBet iOS package uses 256-bit SSL, is malware-free and identical to the Android version in features."},
];

export default function ForIOSPage() {
 const schemaData = [
 breadcrumbSchema([
 { name: "Home", url: SITE.url },
 { name: "GoldsBet for iOS", url: `${SITE.url}/goldsbet-for-ios` },
 ]),
 howToSchema({
 name: "How to Install GoldsBet on iPhone / iOS",
 description: "Step-by-step guide to install GoldsBet on iPhone and iPad in Pakistan",
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
 { label: "GoldsBet for iOS", href: "/goldsbet-for-ios"},
 ]}
 />
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium mb-5">
 <Smartphone className="w-4 h-4"/>
 iPhone &amp; iPad
 </div>
 <h1 className="text-3xl sm:text-5xl font-black mb-5">
 GoldsBet for <span className="text-[#D4AF37]">iOS</span> – iPhone &amp; iPad Guide
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
 Install GoldsBet on your iPhone or iPad in under 5 minutes. Works on iOS 12+. No App Store required.
 </p>
 <div className="flex flex-wrap justify-center gap-4 text-sm">
 {[
 { icon: <CheckCircle className="w-4 h-4 text-green-400"/>, text: "iOS 12+ compatible"},
 { icon: <Shield className="w-4 h-4 text-blue-400"/>, text: "SSL encrypted"},
 { icon: <Smartphone className="w-4 h-4 text-[#D4AF37]"/>, text: "iPhone 6s & newer"},
 ].map((item) => (
 <span key={item.text} className="flex items-center gap-1.5 text-gray-400">
 {item.icon} {item.text}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* Important note */}
 <section className="py-8 bg-[#D4AF37]/10 border-y border-[#D4AF37]/20">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-start gap-3">
 <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5"/>
 <div>
 <p className="font-semibold text-white text-sm">Important – Use Safari Only</p>
 <p className="text-gray-400 text-sm mt-1">
 You <strong>must use Safari</strong> to download GoldsBet on iOS. Chrome and Firefox cannot install developer profiles. The process takes about 3 minutes.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Steps */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 How to Install GoldsBet on iPhone – Step by Step
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

 <div className="mt-8">
 <div className="relative rounded-3xl overflow-hidden h-52 border border-white/10">
 <Image src="/goldsbet-app-pakistan.webp"alt="GoldsBet iOS iPhone Pakistan"fill sizes="(max-width: 768px) 100vw, 800px"className="object-cover object-center"/>
 <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-8">
 <div>
 <h3 className="text-white font-black text-xl">GoldsBet on iPhone</h3>
 <p className="text-gray-300 text-sm mt-1">Full HD · Touch optimised · Face ID login</p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-black font-bold rounded-xl text-sm hover:bg-[#B8960C] transition-colors"
 >
 <Download className="w-4 h-4"/>
 Download Now
 </a>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Compatibility */}
 <section className="py-12 bg-[#111111]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-xl font-black text-white mb-6 text-center">
 GoldsBet iOS Compatibility
 </h2>
 <div className="grid sm:grid-cols-2 gap-4">
 {[
 { device: "iPhone 6s / 6s Plus", ios: "iOS 15 (max)", status: "✓ Supported"},
 { device: "iPhone 7 / 8 series", ios: "iOS 16", status: "✓ Supported"},
 { device: "iPhone X / XR / XS", ios: "iOS 16", status: "✓ Supported"},
 { device: "iPhone 11 / 12 series", ios: "iOS 17", status: "✓ Fully optimised"},
 { device: "iPhone 13 / 14 / 15 / 16", ios: "iOS 18", status: "✓ Fully optimised"},
 { device: "iPad (all models)", ios: "iPadOS 12+", status: "✓ Supported"},
 ].map((row) => (
 <div key={row.device} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
 <div>
 <p className="font-semibold text-sm text-white">{row.device}</p>
 <p className="text-xs text-gray-400">{row.ios}</p>
 </div>
 <span className="text-xs font-semibold text-green-400">{row.status}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 GoldsBet iOS – Frequently Asked Questions
 </h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 {/* Related */}
 <section className="py-12 bg-[#111111] border-t border-white/10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-lg font-bold text-white mb-4">Related Guides</h2>
 <div className="grid sm:grid-cols-3 gap-4">
 {[
 { label: "Download APK (Android)", href: "/download-goldsbet-apk", desc: "Official Android guide"},
 { label: "GoldsBet for PC", href: "/goldsbet-for-pc", desc: "Windows & Mac guide"},
 { label: "Register on GoldsBet", href: "/how-to-register-on-goldsbet", desc: "Create your account"},
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
