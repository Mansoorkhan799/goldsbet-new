import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
 label: string;
 href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
 return (
 <nav aria-label="Breadcrumb"className="py-3">
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
 {items.map((item, index) => (
 <li key={index} className="flex items-center gap-1">
 <ChevronRight className="w-3.5 h-3.5 text-gray-400"/>
 {item.href && index < items.length - 1 ? (
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
