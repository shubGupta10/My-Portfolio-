import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session && req.nextUrl.pathname.startsWith('/admin-panel')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (session && req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/admin-panel', req.url));
    }

    return res;
}

export const config = {
    matcher: ['/admin-panel/:path*', '/login'],
};