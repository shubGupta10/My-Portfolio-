"use client";

import { Share2 } from 'lucide-react';

export default function ShareButton({ onShare, count = 0 }) {
    async function onClickShare() {
        if (navigator.share) {
            try {
                await navigator.share({ title: document.title, url: window.location.href });
                onShare && onShare('native');
                return;
            } catch (e) {
                // fallback
            }
        }

        // Fallback copy to clipboard
        try {
            await navigator.clipboard.writeText(window.location.href);
            onShare && onShare('copy-link');
            alert('Link copied to clipboard');
        } catch (e) {
            // ignore
            onShare && onShare('copy-link');
        }
    }

    return (
        <button onClick={onClickShare} className="flex items-center gap-2 text-sm text-gray-300">
            <Share2 className="h-5 w-5" />
            <span>{count}</span>
        </button>
    );
}
