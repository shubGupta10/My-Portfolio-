"use client";

import React from "react";
import { ArrowUp, Heart, Code, Coffee } from "lucide-react";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative mt-24 border-t border-white/10 bg-black/40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Tech + Scroll */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-blue-400" />
                            Built with Next.js
                        </span>
                        <span className="flex items-center gap-2">
                            <Coffee className="w-4 h-4 text-cyan-400" />
                            Fueled by Coffee
                        </span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group w-11 h-11 rounded-full border border-blue-500/30 bg-blue-500/10 
            flex items-center justify-center text-blue-300 transition-all duration-300
            hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            active:scale-95"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </button>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-gray-300 text-sm flex items-center justify-center gap-1">
                        © {new Date().getFullYear()} Made with{" "}
                        <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by
                        <span className="font-semibold text-white">Shubham Gupta</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        All rights reserved. Thanks for visiting!
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
