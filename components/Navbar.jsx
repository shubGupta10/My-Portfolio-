"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const pathname = usePathname();
    const isHome = pathname === "/";

    const navLinks = [
        { href: isHome ? "#home" : "/", label: "Home", isRoute: !isHome },
        { href: "/about", label: "About", isRoute: true },
        { href: "/experience", label: "Experience", isRoute: true },
        { href: "/services", label: "Services", isRoute: true },
        { href: "/blog", label: "Blog", isRoute: true },
        { href: "/contact", label: "Contact", isRoute: true },
    ];



    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            const sections = ["home", "projects"];
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
        <nav className="w-full pt-8 sm:pt-10 pb-2 sm:pb-4">
            <div className="max-w-3xl mx-auto px-5 sm:px-8">

                {/* Container for Desktop & Mobile */}
                <div className="w-full">

                    {/* Links Row */}
                    <div className="flex flex-row flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-3 w-full">
                        {navLinks.map((link) => {
                            const isActive =
                                link.isRoute
                                    ? pathname === link.href
                                    : isHome && activeLink === link.href.substring(1);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative text-[15px] sm:text-[16px] transition-colors duration-300 tracking-tight group/nav pb-1
                                        ${isActive
                                            ? "text-foreground font-bold"
                                            : "text-muted-foreground hover:text-foreground font-medium"
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-foreground transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`}></span>
                                </Link>
                            );
                        })}

                        {/* Book a Call Button */}
                        <div className="ml-auto">
                            <Magnetic intensity={0.15}>
                                <a
                                    href="https://calendar.app.google/zHFHaC97WvQrXr5W7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 rounded-md text-[13px] font-medium bg-secondary text-secondary-foreground hover:bg-secondary border border-border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Book Call</span>
                                </a>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
