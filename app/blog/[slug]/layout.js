import { fetchBlogBySlug } from "@/lib/actions";

export async function generateMetadata({ params }) {
    const blog = await fetchBlogBySlug(params.slug);

    if (!blog) {
        return {
            title: "Blog not found — Shubham Gupta",
            description: "This blog does not exist.",
        };
    }

    const url = `https://www.shubhamgupta.online/blog/${blog.slug}`;
    const description = blog.excerpt || blog.content.slice(0, 160);

    return {
        title: `${blog.title} — Shubham Gupta`,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: blog.title,
            description,
            url,
            type: "article",
            images: blog.cover_img ? [blog.cover_img] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description,
            images: blog.cover_img ? [blog.cover_img] : [],
        },
    };
}

export default function BlogSlugLayout({ children }) {
    return <>{children}</>;
}
