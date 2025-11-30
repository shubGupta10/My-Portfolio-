import Link from "next/link";
import { FileText, MessageSquare, Home } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen flex bg-black text-gray-200">
            
            {/* SIDEBAR */}
            <aside className="w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col gap-6">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Admin Panel
                </h1>

                <nav className="flex flex-col gap-2 text-gray-400">
                    <Link
                        href="/admin"
                        className="hover:text-white transition flex items-center gap-2"
                    >
                        <Home size={18} /> Dashboard
                    </Link>

                    <Link
                        href="/admin/blogs"
                        className="hover:text-white transition flex items-center gap-2"
                    >
                        <FileText size={18} /> Blogs
                    </Link>

                    <Link
                        href="/admin/testimonials"
                        className="hover:text-white transition flex items-center gap-2"
                    >
                        <MessageSquare size={18} /> Testimonials
                    </Link>
                </nav>

                <LogoutButton />
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-10">{children}</main>
        </div>
    );
}
