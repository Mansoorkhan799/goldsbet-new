import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/site";
import { Download, MessageCircle, Mail, Send } from "lucide-react";

const footerLinks = {
 "Quick Links": [
 { label: "Download APK", href: "/download-goldsbet-apk"},
 { label: "Register", href: "/how-to-register-on-goldsbet"},
 { label: "Login", href: "/goldsbet-login"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Withdrawal Proof", href: "/goldsbet-withdrawal-proof"},
 ],
 "Information": [
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake"},
 { label: "Alternatives", href: "/goldsbet-alternatives"},
 { label: "Blog", href: "/blog"},
 { label: "About Us", href: "/about-goldsbet"},
 { label: "Contact", href: "/contact"},
 ],
 "Legal": [
 { label: "Disclaimer", href: "/disclaimer"},
 { label: "Privacy Policy", href: "/privacy-policy"},
 ],
};

export default function Footer() {
 const currentYear = new Date().getFullYear();
 return (
 <footer className="bg-[#0A0A0A] border-t border-white/10 text-white">
 {/* CTA Banner */}
 <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8960C]/20 border-b border-[#D4AF37]/20">
 <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
 <div>
 <h3 className="text-xl font-bold text-white">
 Ready to Play & Win Real Cash?
 </h3>
 <p className="text-gray-400 text-sm mt-1">
 Download GoldsBet APK v6.0.6 – Free, 77 MB, works on Android 6.0+
 </p>
 </div>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all whitespace-nowrap"
 >
 <Download className="w-5 h-5"/>
 Download Free APK
 </a>
 </div>
 </div>

 <div className="max-w-7xl mx-auto px-4 py-12">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
 {/* Brand */}
 <div>
 <Link href="/"className="flex items-center mb-4">
 <Image
 src="/goldsbet-logo.webp"
 alt="GoldsBet Pakistan"
 width={0}
 height={0}
 sizes="150px"
 style={{ width: "auto", height: "40px" }}
 className="object-contain brightness-0 invert"
 />
 </Link>
 <p className="text-gray-400 text-sm leading-relaxed mb-5">
 Pakistan&apos;s #1 real-cash gaming and sports betting app. JazzCash & EasyPaisa supported. Over 1 million active players.
 </p>
 <div className="flex items-center gap-3">
 <a
 href={SITE.social.whatsapp}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-lg bg-white/10 hover:bg-green-500/20 transition-all"
 aria-label="WhatsApp"
 >
 <MessageCircle className="w-4 h-4 text-green-400"/>
 </a>
 <a
 href={SITE.social.telegram}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-lg bg-white/10 hover:bg-blue-500/20 transition-all"
 aria-label="Telegram"
 >
 <Send className="w-4 h-4 text-blue-400"/>
 </a>
 <a
 href={SITE.supportChat}
 target="_blank"
 rel="noopener noreferrer"
 className="p-2 rounded-lg bg-white/10 hover:bg-[#D4AF37]/20 transition-all"
 aria-label="Live Support Chat"
 >
 <Mail className="w-4 h-4 text-[#D4AF37]"/>
 </a>
 </div>
 </div>

 {/* Link columns */}
 {Object.entries(footerLinks).map(([heading, links]) => (
 <div key={heading}>
 <h4 className="font-semibold text-white mb-4">{heading}</h4>
 <ul className="space-y-2">
 {links.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>

 {/* Disclaimer */}
 <div className="mt-10 pt-8 border-t border-white/10">
 <div className="bg-white/5 rounded-xl p-4 mb-6 text-xs text-gray-400 leading-relaxed">
 <strong className="text-gray-400">⚠️ Disclaimer:</strong> GoldsBet is strictly for users 18 years or older. Gambling involves financial risk and can be addictive. Please play responsibly and only with funds you can afford to lose. This website is an independent affiliate review site – we are not the official GoldsBet operator. We may earn a commission when you click download links.
 </div>
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
 <p>© {currentYear} <a href={SITE.url} className="hover:text-[#D4AF37] transition-colors">{SITE.domain}</a> – All rights reserved.</p>
 <p>18+ Only | Play Responsibly | Offshore Licensed</p>
 </div>
 </div>
 </div>
 </footer>
 );
}
