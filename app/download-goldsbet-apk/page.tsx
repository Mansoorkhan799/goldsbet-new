import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Shield, CheckCircle, AlertCircle, Smartphone, Apple } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "Download GoldsBet APK 2026 | Official GoldsBet APK v6.0.6 for Android & iOS Pakistan",
 description:
 "Download the official GoldsBet APK v6.0.6 (77 MB) for Android and iOS in Pakistan. Safe, free and takes less than 2 minutes to install. Step-by-step guide.",
 alternates: { canonical: `${SITE.url}/download-goldsbet-apk` },
};

const androidSteps = [
 { name: "Enable Unknown Sources", text: "Go to Settings → Security → enable 'Install from Unknown Sources' on your Android device (Android 10+: 'Allow from this source' in browser settings)."},
 { name: "Visit Official GoldsBet Site", text: "Open Chrome browser and navigate to the official GoldsBet website. Do not use third-party APK sites."},
 { name: "Tap Download APK Button", text: "Tap the green 'Download GoldsBet APK v6.0.6' button. The 77 MB file begins downloading immediately."},
 { name: "Wait for Download", text: "On a 4G connection, download completes in under 60 seconds. Wait for the notification to confirm completion."},
 { name: "Open and Install", text: "Tap the downloaded file from your Downloads folder or notification bar. Tap 'Install' and wait 10–15 seconds."},
 { name: "Launch GoldsBet", text: "Tap 'Open' to launch GoldsBet. Register or log in and claim your 200% welcome bonus."},
];

const iossteps = [
 { name: "Open Safari on iPhone", text: "Launch Safari (not Chrome or Firefox – iOS installation only works through Safari for profile trust)."},
 { name: "Visit Official Site", text: "Navigate to the official GoldsBet website and tap 'Download for iOS'."},
 { name: "Allow Profile Download", text: "When prompted, allow the configuration profile to download to your device."},
 { name: "Go to Device Management", text: "Open Settings → General → VPN & Device Management on your iPhone."},
 { name: "Trust the Profile", text: "Find the GoldsBet developer profile and tap 'Trust'. Confirm when prompted."},
 { name: "Launch App", text: "Return to your home screen. The GoldsBet app icon is now available. Tap to open and login."},
];

const faqs = [
 { q: "Is the GoldsBet APK safe to download?", a: "Yes. The official GoldsBet APK uses 256-bit SSL encryption and is malware-free. Always download only from the official GoldsBet website."},
 { q: "Why is GoldsBet not on the Google Play Store?", a: "Google's Play Store policies prohibit real-money betting apps. The official APK is distributed directly through the GoldsBet website – this is standard practice for all legitimate betting apps in Pakistan."},
 { q: "What Android version does GoldsBet require?", a: "GoldsBet requires Android 6.0 (Marshmallow) or higher. iOS users need iOS 12 or above."},
 { q: "How do I update my GoldsBet APK?", a: "Open the GoldsBet app – an 'Update Available' popup appears automatically. Tap Update, or download the latest APK from the official site."},
 { q: "Can I install GoldsBet on a PC?", a: "Yes. Use Android emulators such as BlueStacks, LDPlayer or NoxPlayer to run the GoldsBet APK on Windows or Mac."},
];

export default function DownloadPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Download GoldsBet APK", url: `${SITE.url}/download-goldsbet-apk` }])) }} />
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema({ name: "How to Download GoldsBet APK on Android", description: "Step-by-step guide to download and install GoldsBet APK v6.0.6", steps: androidSteps })) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 {/* Hero */}
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-16">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Download GoldsBet APK"}]} />
 <div className="text-center mt-6">
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-sm font-medium mb-5">
 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
 Latest Version: v6.0.6
 </span>
 <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
 Download <span className="text-gold-gradient">GoldsBet APK</span> 2026
 </h1>
 <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
 Official GoldsBet APK v6.0.6 for Android (77 MB) and iOS. Free download, works on Android 6.0+ and iOS 12+. Takes less than 2 minutes to install.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Smartphone className="w-5 h-5"/>
 Download for Android
 </a>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
 >
 <Apple className="w-5 h-5"/>
 Download for iOS
 </a>
 </div>
 <div className="flex flex-wrap items-center justify-center gap-5 mt-6 text-xs text-gray-400">
 <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-green-400"/>SSL Secure</span>
 <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-blue-400"/>Virus Free</span>
 <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5 text-[#D4AF37]"/>77 MB Only</span>
 <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-purple-400"/>1M+ Downloads</span>
 </div>
 </div>
 </div>
 </section>

 {/* App Info */}
 <section className="py-12 bg-[#111111]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
 {[
 { label: "Version", value: "v6.0.6"},
 { label: "File Size", value: "77 MB"},
 { label: "Android", value: "6.0+"},
 { label: "iOS", value: "12+"},
 ].map((item) => (
 <div key={item.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
 <div className="text-2xl font-black text-[#D4AF37]">{item.value}</div>
 <div className="text-xs text-gray-400 mt-1">{item.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Android Steps */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-2 gap-10 items-start">
 <div>
 <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
 <Smartphone className="w-6 h-6 text-[#D4AF37]"/>
 Download GoldsBet APK – Android
 </h2>
 <div className="space-y-3">
 {androidSteps.map((step, i) => (
 <div key={step.name} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
 <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
 {i + 1}
 </div>
 <div>
 <p className="font-semibold text-white text-sm mb-1">{step.name}</p>
 <p className="text-gray-400 text-xs leading-relaxed">{step.text}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div>
 <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
 <Apple className="w-6 h-6 text-[#D4AF37]"/>
 Install GoldsBet – iPhone / iOS
 </h2>
 <div className="space-y-3">
 {iossteps.map((step, i) => (
 <div key={step.name} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
 <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
 {i + 1}
 </div>
 <div>
 <p className="font-semibold text-white text-sm mb-1">{step.name}</p>
 <p className="text-gray-400 text-xs leading-relaxed">{step.text}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Safety Warning */}
 <section className="py-10 bg-[#111111]">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 flex items-start gap-3">
 <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"/>
 <div>
 <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Safety Warning</p>
 <p className="text-amber-600 dark:text-amber-300 text-xs mt-1 leading-relaxed">
 Only download GoldsBet from the official website. Fake APKs distributed via WhatsApp groups or third-party sites may contain malware. The official APK is exactly 77 MB and is signed by GoldsBet Incorporated.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-black text-white mb-8 text-center">
 Download FAQs
 </h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 {/* Internal links */}
 <section className="py-10 bg-[#111111] border-t border-white/10">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-wrap gap-3">
 {[
 { label: "Register on GoldsBet", href: "/how-to-register-on-goldsbet"},
 { label: "Login Guide", href: "/goldsbet-login"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake"},
 ].map((link) => (
 <Link key={link.href} href={link.href} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all">
 {link.label} →
 </Link>
 ))}
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
