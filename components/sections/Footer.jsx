"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

function Footer() {
    return (
        <footer className="mt-20 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 text-center">
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                    <Link href="/login" className="cursor-default">©</Link> {new Date().getFullYear()} Made with 
                    <Heart className="w-4 h-4 text-primary animate-pulse" /> 
                    by <span className="font-semibold text-foreground">Shubham Gupta</span>
                </p>
                <p className="text-muted-foreground/60 text-xs mt-2">
                    Thanks for visiting!
                </p>
            </div>
        </footer>
    );
}

export default Footer;
