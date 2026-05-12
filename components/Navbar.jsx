"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

function Navbar({ menuOpen, setMenuOpen }) {
    const [activeLink, setActiveLink] = useState("home");
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const initCal = async () => {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#ffffff" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        };
        initCal();
    }, []);

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
        <nav className="fixed top-0 z-50 w-full bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-wide text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
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
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 active:scale-95 border
                  ${isActive
                                            ? "text-foreground bg-accent border-border"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent border-transparent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* Book a Call */}
                        <button
                            data-cal-link="shubham-gupta-1012"
                            data-cal-config='{"layout":"month_view"}'
                            className="ml-2 px-4 py-2 rounded-lg text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Call</span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition"
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
