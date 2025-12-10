"use client";

import { Heart } from 'lucide-react';

export default function LikeButton({ liked = false, onToggle, loading = false, count = 0 }) {
    return (
        <button
            onClick={onToggle}
            disabled={loading}
            className={`flex items-center gap-2 text-sm ${liked ? 'text-pink-400' : 'text-gray-300'}`}
            aria-pressed={liked}
        >
            <Heart className="h-5 w-5" fill={liked ? 'currentColor' : 'none'} />
            <span>{count}</span>
        </button>
    );
}
