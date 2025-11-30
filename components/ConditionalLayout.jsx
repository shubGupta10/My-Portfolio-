'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();

    const isAdminOrAuth = pathname?.startsWith('/admin') || pathname?.startsWith('/login');

    if (isAdminOrAuth) {
        return <>{children}</>;
    }

    return (
        <>
            <Header>
                {children}
            </Header>
            <Footer />
        </>
    );
}
