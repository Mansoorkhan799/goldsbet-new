import type { Metadata } from "next";
import { Shield, Users, Star, Globe } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "About GoldsBet Pakistan | Who We Are & Our Mission",
 description: "Learn about GoldsBet Pakistan – our mission, values and commitment to providing a safe, fair and rewarding gaming experience for Pakistani players.",
 alternates: { canonical: `${SITE.url}/about-goldsbet` },
};

export default function AboutPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "About", url: `${SITE.url}/about-goldsbet` }])) }} />
 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "About"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 About <span className="text-gold-gradient">GoldsBet</span> Pakistan
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
 Pakistan&apos;s most trusted real-money gaming and sports betting platform.
 </p>
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
 <div>
 <h2 className="text-2xl font-black text-white mb-4">Our Story</h2>
 <p className="text-gray-300 leading-relaxed mb-4">
 GoldsBet was founded with a single mission: to give Pakistani players access to a world-class online gaming experience that truly understands their needs. We built GoldsBet from the ground up with JazzCash and EasyPaisa integration, Urdu language support, and a game library focused on the sports and card games that Pakistani players love most – cricket, Teen Patti and Andar Bahar.
 </p>
 <p className="text-gray-300 leading-relaxed">
 Today, more than 1 million active players trust GoldsBet for real-money gaming. We have paid out hundreds of millions of rupees in verified withdrawals to JazzCash and EasyPaisa wallets across Pakistan. Our platform is built on principles of fairness, transparency and responsible gaming.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {[
 { icon: <Users className="w-6 h-6"/>, label: "Active Players", value: "1M+"},
 { icon: <Star className="w-6 h-6"/>, label: "User Rating", value: "4.8/5"},
 { icon: <Globe className="w-6 h-6"/>, label: "Countries", value: "3"},
 { icon: <Shield className="w-6 h-6"/>, label: "Licensed Since", value: "2022"},
 ].map((s) => (
 <div key={s.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
 <div className="flex justify-center text-[#D4AF37] mb-2">{s.icon}</div>
 <div className="text-2xl font-black text-[#D4AF37]">{s.value}</div>
 <div className="text-xs text-gray-400 mt-1">{s.label}</div>
 </div>
 ))}
 </div>

 <div>
 <h2 className="text-2xl font-black text-white mb-4">Our Values</h2>
 <div className="grid sm:grid-cols-2 gap-4">
 {[
 { title: "Fairness First", desc: "Every game uses certified RNG technology. We publish RTP rates for all slots openly."},
 { title: "Fast Payments", desc: "92% of withdrawals processed in under 5 minutes. Zero hidden fees on all cashouts."},
 { title: "Player Safety", desc: "Responsible gaming tools built in: deposit limits, loss limits, self-exclusion."},
 { title: "Local Understanding", desc: "Built for Pakistan: JazzCash, EasyPaisa, Urdu support, PKR, cricket odds."},
 ].map((v) => (
 <div key={v.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
 <h3 className="font-bold text-white mb-2">{v.title}</h3>
 <p className="text-sm text-gray-400">{v.desc}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
 <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
 <strong>Affiliate Disclosure:</strong> goldsbetapp.com.pk is an independent affiliate review website. We are not the official GoldsBet operator (GoldsBet Incorporated). We may earn a commission when you click download or registration links on this site. Our reviews are based on independent testing and genuine user feedback.
 </p>
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
