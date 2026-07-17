import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
 label: string;
 href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
 // Component always renders Home first — drop any Home items callers also pass
 const crumbs = items.filter(
  (item) => item.label.toLowerCase() !== "home" && item.href !== "/"
 );

 return (
 <nav aria-label="Breadcrumb" className="py-3">
 <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
 <li className="flex items-center gap-1">
 <Link
 href="/"
 className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
 >
 <Home className="w-3.5 h-3.5"/>
 <span>Home</span>
 </Link>
 </li>
 {crumbs.map((item, index) => (
 <li key={`${item.label}-${index}`} className="flex items-center gap-1">
 <ChevronRight className="w-3.5 h-3.5 text-gray-400"/>
 {item.href && index < crumbs.length - 1 ? (
 <Link
 href={item.href}
 className="hover:text-[#D4AF37] transition-colors"
 >
 {item.label}
 </Link>
 ) : (
 <span className="text-gray-200 font-medium">
 {item.label}
 </span>
 )}
 </li>
 ))}
 </ol>
 </nav>
 );
}
