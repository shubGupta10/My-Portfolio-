'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';

function Header({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="pt-20">
                {children}
            </div>
        </>
    );
}

export default Header;