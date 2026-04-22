import type { Metadata } from "next";
import { MessageCircle, Mail, Send, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "Contact GoldsBet Pakistan | 24/7 Support via WhatsApp, Live Chat & Email",
 description: "Contact GoldsBet support in Pakistan via WhatsApp, live chat, email or Telegram. Available 24/7 in Urdu and English.",
 alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Contact", url: `${SITE.url}/contact` }])) }} />
 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Contact"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 Contact <span className="text-gold-gradient">GoldsBet</span> Pakistan
 </h1>
 <p className="text-gray-400 text-lg max-w-xl mx-auto">
 Our support team is available 24/7 – including Eid and public holidays. Average response time: under 2 minutes.
 </p>
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid sm:grid-cols-2 gap-6">
 {[
 {
 icon: <MessageCircle className="w-8 h-8"/>,
 title: "Live Chat",
 desc: "Open GoldsBet app → tap Support → Live Chat. Fastest method – average reply under 2 minutes.",
 action: "Open App Live Chat",
 href: SITE.downloadUrl,
 color: "text-blue-400 bg-blue-500/10",
 },
 {
 icon: <Send className="w-8 h-8"/>,
 title: "WhatsApp Support",
 desc: "Chat with our Urdu & English speaking team directly on WhatsApp. Available 24/7.",
 action: "Chat on WhatsApp",
 href: SITE.social.whatsapp,
 color: "text-green-400 bg-green-500/10",
 },
 {
 icon: <Mail className="w-8 h-8"/>,
 title: "Live Support Chat",
 desc: "Chat with our online consultant directly. Available 24/7 for instant help.",
 action: "Open Live Chat",
 href: SITE.supportChat,
 color: "text-[#D4AF37] bg-[#D4AF37]/10",
 },
 {
 icon: <Send className="w-8 h-8"/>,
 title: "Telegram Channel",
 desc: "Follow our Telegram channel for bonus alerts, promotions and app update announcements.",
 action: "Join Telegram",
 href: SITE.social.telegram,
 color: "text-purple-400 bg-purple-500/10",
 },
 ].map((channel) => (
 <div key={channel.title} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all">
 <div className={`w-14 h-14 rounded-2xl ${channel.color} flex items-center justify-center mb-4`}>
 {channel.icon}
 </div>
 <h3 className="font-bold text-white text-lg mb-2">{channel.title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed mb-4">{channel.desc}</p>
 <a
 href={channel.href}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold text-sm rounded-xl hover:scale-105 transition-all"
 >
 {channel.action} →
 </a>
 </div>
 ))}
 </div>

 <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
 <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0"/>
 <div>
 <p className="font-semibold text-white">Support Hours</p>
 <p className="text-sm text-gray-400">Available 24 hours a day, 7 days a week – including Eid, public holidays and PSL match nights. Urdu and English supported.</p>
 </div>
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
