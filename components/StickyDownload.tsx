"use client";
import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { SITE } from "@/data/site";

export default function StickyDownload() {
 const [visible, setVisible] = useState(false);
 const [dismissed, setDismissed] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 if (!dismissed) setVisible(window.scrollY > 400);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, [dismissed]);

 if (!visible || dismissed) return null;

 return (
 <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:w-auto animate-slide-up">
 <div className="flex items-center gap-3 bg-[#0A0A0A] border border-[#D4AF37]/40 shadow-2xl shadow-[#D4AF37]/20 px-4 py-3 md:rounded-2xl">
 <div className="flex-1 md:flex-none">
 <p className="text-xs text-gray-400">GoldsBet APK v6.0.6 – Free</p>
 <p className="text-xs text-gray-400">77 MB · Android 6.0+ · iOS 12+</p>
 </div>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all whitespace-nowrap"
 >
 <Download className="w-4 h-4"/>
 Download Free
 </a>
 <button
 onClick={() => setDismissed(true)}
 className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
 aria-label="Dismiss"
 >
 <X className="w-4 h-4 text-gray-400"/>
 </button>
 </div>
 </div>
 );
}
