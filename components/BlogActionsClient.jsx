"use client";

import { useEffect, useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';
import { incrementBlogLikes, incrementBlogShares, incrementBlogViews, getBlogCounts } from '@/lib/actions';

export default function BlogActionsClient({ slug, initialCounts = null }) {
    const [counts, setCounts] = useState(initialCounts || { views_count: 0, likes_count: 0, shares_count: 0 });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        
        (async () => {
            try {
                const result = await getBlogCounts(slug);
                if (mounted && result.success) {
                    setCounts({
                        views_count: result.views_count,
                        likes_count: result.likes_count,
                        shares_count: result.shares_count
                    });
                }
                
                const viewResult = await incrementBlogViews(slug);
                if (mounted && viewResult.success) {
                    setCounts(prev => ({ ...prev, views_count: viewResult.views_count }));
                }
            } catch (e) {
                console.error('Error with blog counts:', e);
            }
        })();

        return () => { mounted = false; };
    }, [slug]);

    async function toggleLike() {
        setLoading(true);
        setCounts(prev => ({ ...prev, likes_count: prev.likes_count + 1 }));

        try {
            const result = await incrementBlogLikes(slug);
            
            if (!result.success) {
                console.error('Like action error:', result.error);
                setCounts(prev => ({ ...prev, likes_count: Math.max(prev.likes_count - 1, 0) }));
                return;
            }

            if (result && typeof result.likes_count !== 'undefined') {
                setCounts(prev => ({ ...prev, likes_count: result.likes_count }));
            }
        } catch (e) {
            console.error('Like action exception:', e);
            setCounts(prev => ({ ...prev, likes_count: Math.max(prev.likes_count - 1, 0) }));
        } finally {
            setLoading(false);
        }
    }

    async function registerShare() {
        let shared = false;

        // Try native share first
        if (navigator.share) {
            try {
                await navigator.share({ title: document.title, url: window.location.href });
                shared = true;
            } catch (e) {
                // ignore and fallback
            }
        }

        // Fallback: copy link
        if (!shared) {
            try {
                await navigator.clipboard.writeText(window.location.href);
                shared = true;
                alert('Link copied to clipboard');
            } catch (e) {
                console.error('Share fallback failed:', e);
            }
        }

        if (!shared) return;

        setCounts(prev => ({ ...prev, shares_count: prev.shares_count + 1 }));

        try {
            const result = await incrementBlogShares(slug);
            if (result.success && typeof result.shares_count !== 'undefined') {
                setCounts(prev => ({ ...prev, shares_count: result.shares_count }));
            }
        } catch (e) {
            console.error('Share action error:', e);
        }
    }

    return (
        <div className="flex items-center gap-4 sm:gap-6">
            {/* Views */}
            <div className="flex items-center gap-2 text-sm">
                <Eye className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{counts.views_count}</span>
            </div>

            {/* Likes */}
            <button
                onClick={toggleLike}
                disabled={loading}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity disabled:opacity-50"
                aria-label="Like this post"
            >
                <Heart className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">{counts.likes_count}</span>
            </button>

            {/* Shares */}
            <button
                onClick={registerShare}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                aria-label="Share this post"
            >
                <Share2 className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">{counts.shares_count}</span>
            </button>
        </div>
    );
}
