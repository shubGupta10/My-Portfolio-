"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, KeyRound } from "lucide-react";

function Navbar({ menuOpen, setMenuOpen }) {
    const [activeLink, setActiveLink] = useState("home");
    const pathname = usePathname();
    const isHome = pathname === "/";

    const navLinks = isHome
        ? [
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "/blog", label: "Blog", isRoute: true },
            { href: "#contact", label: "Contact" },
        ]
        : [
            { href: "/", label: "Home", isRoute: true },
            { href: "/blog", label: "Blog", isRoute: true },
        ];

    // Disable scroll locking on other pages
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            const sections = ["about", "experience", "projects", "contact"];
            const scrollPosition = window.scrollY + 120;

            for (const id of sections) {
                const section = document.getElementById(id);
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveLink(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    return (
        <nav className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-semibold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:opacity-90 transition-all cursor-pointer"
                    >
                        SHUBHAM
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive =
                                link.isRoute
                                    ? pathname === link.href
                                    : isHome && activeLink === link.href.substring(1);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActive
                                            ? "text-white bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.3)] border border-blue-500/40"
                                            : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* Login */}
                        <Link
                            href="/login"
                            className="ml-2 px-4 py-2 rounded-lg text-sm font-medium text-cyan-300 
              border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:text-white 
              hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-2"
                        >
                            <KeyRound className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
