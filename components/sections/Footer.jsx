"use client";

import React from "react";
import { Heart } from "lucide-react";

function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 py-10 text-center">
                <p className="text-gray-300 text-sm flex items-center justify-center gap-1">
                    © {new Date().getFullYear()} Made with 
                    <Heart className="w-4 h-4 text-red-400 animate-pulse" /> 
                    by <span className="font-semibold text-white">Shubham Gupta</span>
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Thanks for visiting!
                </p>
            </div>
        </footer>
    );
}

export default Footer;
