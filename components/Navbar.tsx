"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { SITE } from "@/data/site";

const NAV_GROUPS = [
 {
 label: "Get App",
 items: [
 { label: "Download APK", href: "/download-goldsbet-apk", desc: "Latest v6.0.6 · 77 MB"},
 { label: "For PC", href: "/goldsbet-for-pc", desc: "Play on Windows & Mac"},
 { label: "For iOS", href: "/goldsbet-for-ios", desc: "iPhone & iPad guide"},
 ],
 },
 {
 label: "Account",
 items: [
 { label: "Register", href: "/how-to-register-on-goldsbet", desc: "Create new account"},
 { label: "Login", href: "/goldsbet-login", desc: "Access your account"},
 ],
 },
 {
 label: "Payments",
 items: [
 { label: "Deposit", href: "/how-to-deposit-on-goldsbet", desc: "Add funds instantly"},
 { label: "Withdraw", href: "/how-to-withdraw-from-goldsbet", desc: "Cash out winnings"},
 ],
 },
];

const NAV_SINGLES = [
 { label: "How to Earn", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Blog", href: "/blog"},
 { label: "Is It Real?", href: "/is-goldsbet-real-or-fake"},
];

export default function Navbar() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [openGroup, setOpenGroup] = useState<string | null>(null);
 const [mobileOpen, setMobileOpen] = useState<string | null>(null);
 const navRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // Close dropdown on outside click
 useEffect(() => {
 const handleClick = (e: MouseEvent) => {
 if (navRef.current && !navRef.current.contains(e.target as Node)) {
 setOpenGroup(null);
 }
 };
 document.addEventListener("mousedown", handleClick);
 return () => document.removeEventListener("mousedown", handleClick);
 }, []);

 return (
 <nav
 ref={navRef}
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
 scrolled
 ? "bg-[#0A0A0A] backdrop-blur-md shadow-lg border-white/10"
 : "bg-[#0A0A0A]/90 backdrop-blur-sm border-white/10"
 }`}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16">

 {/* Logo */}
 <Link href="/"className="flex items-center group flex-shrink-0">
 <Image
 src="/goldsbet-logo.webp"
 alt="GoldsBet Pakistan"
 width={0}
 height={0}
 sizes="150px"
 style={{ width: "auto", height: "36px" }}
 className="object-contain group-hover:scale-105 transition-transform"
 priority
 />
 </Link>

 {/* Desktop Nav */}
 <div className="hidden lg:flex items-center gap-0.5">

 {/* Dropdown groups */}
 {NAV_GROUPS.map((group) => (
 <div key={group.label} className="relative">
 <button
 onClick={() =>
 setOpenGroup(openGroup === group.label ? null : group.label)
 }
 className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
 openGroup === group.label
 ? "text-[#D4AF37] bg-[#D4AF37]/10"
 : "text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
 }`}
 >
 {group.label}
 <ChevronDown
 className={`w-3.5 h-3.5 transition-transform duration-200 ${
 openGroup === group.label ? "rotate-180": ""
 }`}
 />
 </button>

 {/* Dropdown panel */}
 {openGroup === group.label && (
 <div className="absolute top-full left-0 mt-2 w-52 bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-50">
 {group.items.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => setOpenGroup(null)}
 className="flex flex-col px-4 py-3 hover:bg-[#D4AF37]/10 transition-colors group border-b border-white/5 last:border-0"
 >
 <span className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
 {item.label}
 </span>
 <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>
 </Link>
 ))}
 </div>
 )}
 </div>
 ))}

 {/* Single links */}
 {NAV_SINGLES.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
 >
 {link.label}
 </Link>
 ))}
 </div>

 {/* Right Actions */}
 <div className="flex items-center gap-3">
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
 >
 <Download className="w-4 h-4"/>
 Download APK
 </a>

 {/* Hamburger */}
 <button
 onClick={() => { setMenuOpen(!menuOpen); setMobileOpen(null); }}
 className="lg:hidden p-2 rounded-lg bg-white/10"
 aria-label="Toggle menu"
 >
 {menuOpen ? (
 <X className="w-5 h-5 text-white"/>
 ) : (
 <Menu className="w-5 h-5 text-white"/>
 )}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Menu */}
 {menuOpen && (
 <div className="lg:hidden bg-[#111111] border-t border-white/10 shadow-xl max-h-[80vh] overflow-y-auto">
 <div className="px-4 py-4 space-y-1">

 {/* Dropdown groups as accordions */}
 {NAV_GROUPS.map((group) => (
 <div key={group.label}>
 <button
 onClick={() =>
 setMobileOpen(mobileOpen === group.label ? null : group.label)
 }
 className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all"
 >
 {group.label}
 <ChevronDown
 className={`w-4 h-4 transition-transform duration-200 ${
 mobileOpen === group.label ? "rotate-180 text-[#D4AF37]": ""
 }`}
 />
 </button>
 {mobileOpen === group.label && (
 <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#D4AF37]/30 pl-3">
 {group.items.map((item) => (
 <Link
 key={item.href}
 href={item.href}
 onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
 className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[#D4AF37]/10 transition-colors group"
 >
 <span className="text-sm font-medium text-gray-300 group-hover:text-[#D4AF37]">
 {item.label}
 </span>
 <span className="text-xs text-gray-400">{item.desc}</span>
 </Link>
 ))}
 </div>
 )}
 </div>
 ))}

 {/* Single links */}
 {NAV_SINGLES.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setMenuOpen(false)}
 className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all"
 >
 {link.label}
 </Link>
 ))}

 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-xl"
 >
 <Download className="w-4 h-4"/>
 Download GoldsBet APK
 </a>
 </div>
 </div>
 )}
 </nav>
 );
}
