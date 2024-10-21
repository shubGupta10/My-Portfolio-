'use client';

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import {  Twitter } from 'lucide-react';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [active, setActive] = useState<string | null>(null);

  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(sectionId); 
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 rounded-full border",
        resolvedTheme === 'dark' ? 'border-white' : 'border-black',
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem 
          setActive={() => handleScrollTo("about")} 
          active={active === "about" ? "about" : null} 
          item="About" 
        />
        <MenuItem 
          setActive={() => handleScrollTo("projects")} 
          active={active === "projects" ? "projects" : null} 
          item="Projects" 
        />
        <MenuItem 
          setActive={() => handleScrollTo("experience")} 
          active={active === "experience" ? "experience" : null} 
          item="Experience" 
        />
        <div className={`border ${resolvedTheme === 'dark' ? 'border-white' : 'border-black'}`} />
        <ThemeSwitcher />
        <div className="flex gap-1 md:gap-4">
          <a href="https://x.com/i_m_shubham45" target="_blank" rel="noopener noreferrer">
            <Twitter aria-label="Twitter profile" />
          </a>
        </div>
      </Menu>
    </div>
  );
}
