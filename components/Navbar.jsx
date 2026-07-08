"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import Magnetic from "@/components/ui/Magnetic";

function Navbar() {
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

    const navLinks = [
        { href: isHome ? "#home" : "/", label: "Home", isRoute: !isHome },
        { href: "/about", label: "About", isRoute: true },
        { href: isHome ? "#experience" : "/#experience", label: "Experience", isRoute: false },
        { href: "/services", label: "Services", isRoute: true },
        { href: "/blog", label: "Blog", isRoute: true },
        { href: "/contact", label: "Contact", isRoute: true },
    ];



    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            const sections = ["home", "experience", "projects"];
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
        <nav className="w-full pt-8 sm:pt-12 pb-6 sm:pb-10">
            <div className="max-w-2xl mx-auto px-5 sm:px-8">
                
                {/* Container for Desktop & Mobile */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4">
                    
                    {/* Links Row */}
                    <div className="flex flex-row flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-3">
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
                    </div>

                    {/* Book a Call Button (Replacing Time Badge position) */}
                    <div className="w-fit">
                        <Magnetic intensity={0.15}>
                            <button
                                data-cal-link="shubham-gupta-1012"
                                data-cal-config='{"layout":"month_view"}'
                                className="px-3 py-1.5 rounded-md text-[13px] font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Book Call</span>
                            </button>
                        </Magnetic>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
