import { fetchPublishedBlogs } from "@/lib/actions";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function calculateReadTime(content) {
    if (!content) return 0;
    const wordsPerMinute = 200;
    const plainText = content.replace(/<[^>]*>/g, ' ');
    const wordCount = plainText.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

// Helper function to get excerpt from HTML content
function getExcerpt(content, length = 150) {
    if (!content) return '';

    // Strip all HTML tags
    const plainText = content.replace(/<[^>]*>/g, ' ');

    // Remove extra whitespace
    const cleaned = plainText.replace(/\s+/g, ' ').trim();

    // Truncate and add ellipsis
    return cleaned.length > length
        ? cleaned.substring(0, length).trim() + '...'
        : cleaned;
}

export default async function BlogPage() {
    const blogs = await fetchPublishedBlogs();

    return (
        <div className="min-h-screen relative" style={{ backgroundImage: "url('/backgroundImage2.png')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Gradient orbs for visual interest */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <Container className="relative z-10 py-16 md:py-24">
                {/* Heading */}
                <div className="mb-16">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight">
                        Blog
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Latest dev content, tutorials & tech thoughts
                    </p>
                </div>

                {/* Blog Cards Grid */}
                {blogs?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => {
                            const readTime = calculateReadTime(blog.content || "");
                            const excerpt = getExcerpt(blog.content || "");

                            return (
                                <Link
                                    key={blog.id}
                                    href={`/blog/${blog.slug}`}
                                    className="group block"
                                >
                                    <article className="h-full bg-white/8 backdrop-blur-md border border-white/15 rounded-xl overflow-hidden hover:bg-white/12 hover:border-white/25 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                                        {/* Image */}
                                        {blog.cover_img && (
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={blog.cover_img}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-5 space-y-3">
                                            {/* Tags */}
                                            {blog.tags?.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {blog.tags.slice(0, 2).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs px-2.5 py-1 bg-blue-500/15 border border-blue-400/25 rounded-full text-blue-300 font-medium"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h2 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors leading-snug">
                                                {blog.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                                {excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="text-gray-500 text-xs flex items-center gap-2 pt-1">
                                                {blog.created_at && (
                                                    <time>{formatDate(blog.created_at)}</time>
                                                )}
                                                {readTime > 0 && (
                                                    <>
                                                        <span className="text-gray-600">•</span>
                                                        <span>{readTime} min</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                        <p className="text-gray-400 text-lg">No blogs yet.</p>
                    </div>
                )}
            </Container>
        </div>
    );
}