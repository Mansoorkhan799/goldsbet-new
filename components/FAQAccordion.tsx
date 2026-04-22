"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
 q: string;
 a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
 const [open, setOpen] = useState<number | null>(null);

 return (
 <div className="space-y-3">
 {faqs.map((faq, i) => (
 <div
 key={i}
 className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-[#D4AF37]/40 transition-colors"
 >
 <button
 className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
 onClick={() => setOpen(open === i ? null : i)}
 aria-expanded={open === i}
 >
 <span className="font-semibold text-white text-sm md:text-base">
 {faq.q}
 </span>
 <ChevronDown
 className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
 open === i ? "rotate-180": ""
 }`}
 />
 </button>
 {open === i && (
 <div className="px-6 pb-5">
 <p className="text-gray-300 text-sm leading-relaxed border-t border-white/5 dark:border-white/10 pt-4">
 {faq.a}
 </p>
 </div>
 )}
 </div>
 ))}
 </div>
 );
}
