import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/data/site";
import { BLOG_POSTS } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Blog 2026 | Expert Guides, Tips & Strategies for Pakistan",
 description: "Read expert GoldsBet guides for Pakistani players – download guides, betting strategies, bonus tips, withdrawal help and cricket betting analysis.",
 alternates: { canonical: `${SITE.url}/blog` },
};

const categories = ["All", "Download Guide", "Bonuses", "Comparison", "Strategy", "Payments", "Review", "Sports Betting", "Casino Guide", "Guide"];

export default function BlogPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Blog", url: `${SITE.url}/blog` }])) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "Blog"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 GoldsBet <span className="text-gold-gradient">Blog</span> 2026
 </h1>
 <p className="text-gray-400 text-lg max-w-2xl mx-auto">
 Expert guides, betting strategies, bonus tips and real-cash gaming advice for Pakistani GoldsBet players.
 </p>
 </div>
 </div>
 </section>

 {/* Categories */}
 <section className="py-6 bg-[#111111] border-b border-white/10">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-wrap gap-2">
 {categories.map((cat) => (
<span key={cat} className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${cat === "All"? "bg-[#D4AF37] text-black": "bg-white text-gray-700 border border-gray-200 hover:text-black hover:border-[#D4AF37]/40"}`}>
 {cat}
 </span>
 ))}
 </div>
 </div>
 </section>

 {/* Featured post */}
 <section className="py-10 bg-[#0A0A0A]">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link
 href={`/blog/${BLOG_POSTS[0].slug}`}
 className="group relative flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all bg-white/5"
 >
 <div className="relative md:w-1/2 h-56 md:h-80 flex-shrink-0">
 <Image src={BLOG_POSTS[0].thumbnail} alt={BLOG_POSTS[0].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500"/>
 <div className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full">
 Featured
 </div>
 </div>
 <div className="p-8 flex flex-col justify-center">
 <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">{BLOG_POSTS[0].category}</span>
 <h2 className="text-2xl font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">
 {BLOG_POSTS[0].title}
 </h2>
 <p className="text-gray-400 text-sm leading-relaxed mb-5">{BLOG_POSTS[0].excerpt}</p>
 <div className="flex items-center gap-4 text-xs text-gray-400">
 <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{BLOG_POSTS[0].readTime}</span>
 <span>{BLOG_POSTS[0].date}</span>
 </div>
 <div className="mt-4 flex items-center gap-2 text-[#D4AF37] font-semibold text-sm">
 Read Full Guide <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
 </div>
 </div>
 </Link>
 </div>
 </section>

 {/* Blog grid */}
 <section className="pb-16 bg-[#0A0A0A]">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center gap-2 mb-8">
 <BookOpen className="w-5 h-5 text-[#D4AF37]"/>
 <h2 className="text-xl font-bold text-white">All Articles</h2>
 </div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {BLOG_POSTS.slice(1).map((post) => (
 <Link
 key={post.slug}
 href={`/blog/${post.slug}`}
 className="group rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/40 transition-all bg-white/5"
 >
 <div className="relative h-48 overflow-hidden">
            <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
 <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-[#D4AF37] font-semibold">
 {post.category}
 </div>
 </div>
 <div className="p-5">
 <h3 className="font-bold text-white text-sm leading-tight mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
 {post.title}
 </h3>
 <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
 {post.excerpt}
 </p>
 <div className="flex items-center justify-between text-xs text-gray-400">
 <span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{post.readTime}</span>
 <span className="text-[#D4AF37] font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
 Read <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"/>
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 </div>
 </>
 );
}
