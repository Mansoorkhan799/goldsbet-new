import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ChevronRight, Download } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/data/site";
import { BLOG_POSTS } from "@/data/blog";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

interface Props {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const post = BLOG_POSTS.find((p) => p.slug === slug);
 if (!post) return {};
 return {
 title: post.metaTitle,
 description: post.metaDescription,
 alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
 openGraph: {
 title: post.metaTitle,
 description: post.metaDescription,
 images: [{ url: post.thumbnail, alt: post.title }],
 type: "article",
 },
 };
}

function renderContent(content: string) {
 const lines = content.trim().split("\n");
 const elements: React.ReactNode[] = [];
 let inTable = false;
 let tableRows: string[][] = [];
 let tableHeader: string[] = [];
 let tableIndex = 0;

 const flushTable = () => {
 if (tableRows.length === 0) return;
 elements.push(
 <div key={`table-${tableIndex++}`} className="overflow-x-auto mb-6">
 <table className="w-full border-collapse rounded-xl overflow-hidden">
 <thead>
 <tr className="bg-[#D4AF37]/15">
 {tableHeader.map((h, i) => (
 <th key={i} className="px-4 py-3 text-left text-sm font-bold text-white">{h.trim()}</th>
 ))}
 </tr>
 </thead>
 <tbody>
 {tableRows.map((row, ri) => (
 <tr key={ri} className={`border-t border-white/5 ${ri % 2 === 0 ? "bg-white/5": ""}`}>
 {row.map((cell, ci) => (
 <td key={ci} className="px-4 py-3 text-sm text-gray-300">{cell.trim()}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
 tableRows = [];
 tableHeader = [];
 inTable = false;
 };

 lines.forEach((line, i) => {
 const trimmed = line.trim();

 if (trimmed.startsWith("|")) {
 const cells = trimmed.split("|").filter((c) => c.trim() !== "");
 if (trimmed.includes("---")) {
 // separator row – skip
 } else if (!inTable) {
 inTable = true;
 tableHeader = cells;
 } else {
 tableRows.push(cells);
 }
 return;
 } else if (inTable) {
 flushTable();
 }

 if (trimmed.startsWith("## ")) {
 elements.push(
 <h2 key={i} className="text-2xl font-black text-white mt-10 mb-4 border-b border-white/10 pb-3">
 {trimmed.slice(3)}
 </h2>
 );
 } else if (trimmed.startsWith("### ")) {
 elements.push(
 <h3 key={i} className="text-xl font-bold text-gray-100 mt-8 mb-3">
 {trimmed.slice(4)}
 </h3>
 );
 } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
 elements.push(
 <p key={i} className="font-bold text-white mb-3">
 {trimmed.slice(2, -2)}
 </p>
 );
 } else if (trimmed.startsWith("- ")) {
 elements.push(
 <div key={i} className="flex items-start gap-2 mb-2">
 <span className="text-[#D4AF37] font-bold mt-0.5">✓</span>
 <p className="text-gray-300 text-sm leading-relaxed"dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
 </div>
 );
 } else if (/^\d+\.\s/.test(trimmed)) {
 elements.push(
 <div key={i} className="flex items-start gap-2 mb-2">
 <span className="text-[#D4AF37] font-bold mt-0.5">{trimmed.match(/^\d+/)?.[0]}.</span>
 <p className="text-gray-300 text-sm leading-relaxed"dangerouslySetInnerHTML={{ __html: trimmed.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
 </div>
 );
 } else if (trimmed === "") {
 elements.push(<div key={i} className="h-2"/>);
 } else {
 elements.push(
 <p key={i} className="text-gray-300 leading-relaxed mb-4"
 dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>") }} />
 );
 }
 });

 if (inTable) flushTable();
 return elements;
}

export default async function BlogPostPage({ params }: Props) {
 const { slug } = await params;
 const post = BLOG_POSTS.find((p) => p.slug === slug);
 if (!post) notFound();

 const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: post.title, description: post.metaDescription, url: `${SITE.url}/blog/${post.slug}`, datePublished: post.date, image: post.thumbnail })) }} />
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Blog", url: `${SITE.url}/blog` }, { name: post.title, url: `${SITE.url}/blog/${post.slug}` }])) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 {/* Hero */}
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Blog", href: "/blog"}, { label: post.category }]} />
 <div className="mt-6">
 <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold mb-4">
 {post.category}
 </span>
 <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
 {post.title}
 </h1>
 <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
 <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/>{post.readTime}</span>
 <span>{post.date}</span>
 <span className="px-2 py-0.5 rounded-lg bg-white/10 text-xs">{SITE.name}</span>
 </div>
 </div>
 </div>
 </section>

 {/* Featured Image */}
 <div className="relative h-64 sm:h-80 bg-gray-100 dark:bg-[#111111]">
 <Image src={post.thumbnail} alt={post.title} fill sizes="100vw" className="object-cover" priority />
 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] to-transparent"/>
 </div>

 {/* Content */}
 <section className="py-10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid lg:grid-cols-3 gap-10">
 {/* Main content */}
 <div className="lg:col-span-2">
 {renderContent(post.content)}

 {/* Download CTA */}
 <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/30">
 <h3 className="font-black text-white text-lg mb-2">
 Ready to Try GoldsBet?
 </h3>
 <p className="text-gray-400 text-sm mb-4">
 Download the official GoldsBet APK v6.0.6 for free and claim your 200% welcome bonus.
 </p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-xl hover:scale-105 transition-all"
 >
 <Download className="w-4 h-4"/>
 Download GoldsBet Free
 </a>
 </div>

 {/* Disclaimer */}
 <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400 leading-relaxed">
 <strong>Disclaimer:</strong> This article is for informational purposes only. GoldsBet is strictly for users 18+. Real-money gambling involves financial risk. Play responsibly.
 </div>
 </div>

 {/* Sidebar */}
 <div className="space-y-6">
 {/* Download box */}
 <div className="p-5 rounded-2xl bg-gradient-to-b from-[#D4AF37]/15 to-transparent border border-[#D4AF37]/30 text-center sticky top-24">
 <p className="text-xs text-gray-400 mb-2">Official GoldsBet APK</p>
 <p className="text-2xl font-black text-[#D4AF37] mb-1">v6.0.6</p>
 <p className="text-xs text-gray-400 mb-4">77 MB · Free · Android 6.0+</p>
 <a
 href={SITE.downloadUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-xl hover:scale-105 transition-all text-sm"
 >
 <Download className="w-4 h-4"/>
 Download Free
 </a>
 <div className="mt-4 space-y-2 text-left">
 {[
 { label: "Download", href: "/download-goldsbet-apk"},
 { label: "Register", href: "/how-to-register-on-goldsbet"},
 { label: "How to Earn", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Is It Real?", href: "/is-goldsbet-real-or-fake"},
 ].map((l) => (
 <Link key={l.href} href={l.href} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#D4AF37] transition-colors">
 <ChevronRight className="w-3 h-3"/>{l.label}
 </Link>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Related posts */}
 <div className="mt-16 pt-10 border-t border-white/10">
 <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
 <div className="grid sm:grid-cols-3 gap-5">
 {related.map((rp) => (
 <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all">
 <div className="relative h-36 overflow-hidden">
 <Image src={rp.thumbnail} alt={rp.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500"/>
 </div>
 <div className="p-4">
 <p className="text-xs text-[#D4AF37] font-semibold mb-1">{rp.category}</p>
 <h3 className="font-bold text-white text-xs leading-tight line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
 {rp.title}
 </h3>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
