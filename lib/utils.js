import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getExcerpt(content, maxLength = 160) {
    const plainText = content
        .replace(/[#*`_~\[\]()]/g, "")
        .replace(/\n/g, " ")
        .trim();

    return plainText.length > maxLength
        ? plainText.substring(0, maxLength).trim() + "..."
        : plainText;
}