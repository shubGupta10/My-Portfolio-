'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

function Header({ children }) {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
        </>
    );
}

export default Header;