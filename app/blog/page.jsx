import { fetchPublishedBlogs } from "@/lib/actions";
import Link from "next/link";
import Image from "next/image";
import { calculateReadTime, formatDate, getExcerpt } from "@/lib/utils";
import Container from "@/components/ui/Container";

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

            <Container className="relative z-10 py-5">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Blog
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Latest dev content, tutorials & tech thoughts
                    </p>
                </div>

                {/* Blog Cards Grid */}
                {blogs?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => {
                            const readTime = calculateReadTime(blog.content || "");
                            const excerpt = getExcerpt(blog.content || "");

                            return (
                                <Link
                                    key={blog.id}
                                    href={`/blog/${blog.slug}`}
                                    className="glass-card hover-lift overflow-hidden group"
                                >
                                    {/* Image */}
                                    {blog.cover_img && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={blog.cover_img}
                                                alt={blog.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        </div>
                                    )}

                                    {/* Inner content */}
                                    <div className="p-6 space-y-3">
                                        {/* Tags */}
                                        {blog.tags?.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {blog.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="glass-pill text-xs px-3 py-1 text-blue-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-400 transition-colors">
                                            {blog.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                            {excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div className="text-gray-400 text-xs flex gap-2 pt-2">
                                            {blog.created_at && (
                                                <time>{formatDate(blog.created_at)}</time>
                                            )}
                                            <span>•</span>
                                            <span>{readTime} min read</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="glass-card p-12 text-center">
                        <p className="text-gray-300 text-lg">No blogs yet.</p>
                    </div>
                )}
            </Container>
        </div>
    );
}