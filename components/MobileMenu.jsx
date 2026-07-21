'use client';

import { X } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MobileMenu({ menuOpen, setMenuOpen }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const menuLinks = [
        { href: isHome ? "#home" : "/", label: "Home", isRoute: !isHome },
        { href: "/about", label: "About", isRoute: true },
        { href: "/projects", label: "Projects", isRoute: true },
        { href: isHome ? "#experience" : "/#experience", label: "Experience", isRoute: false },
        { href: "/services", label: "Services", isRoute: true },
        { href: "/blog", label: "Blog", isRoute: true },
        { href: "/contact", label: "Contact", isRoute: true },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
`}>

            <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer' aria-label='Close Menu'>
                <X className='h-5 w-5' />
            </button>

            {menuLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    {link.label}
                </Link>
            ))}

            <Link 
                href="/login"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Login</Link>
        </div>
    )
}

export default MobileMenu