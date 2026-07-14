import { fetchPublishedBlogs } from "@/lib/actions";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

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
        <div className="w-full">
            <Section>
                <Container>
                {/* Heading */}
                <div className="mb-16">
                    <h1 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                        Writing <span className="text-[0.85em]">✍️</span>
                    </h1>
                    <p className="text-muted-foreground text-[16px] sm:text-[18px] font-normal">
                        Thoughts, tutorials, and insights on software development.
                    </p>
                </div>

                {/* Blog List */}
                {blogs?.length > 0 ? (
                    <div className="flex flex-col gap-12">
                        {blogs.map((blog) => {
                            const readTime = calculateReadTime(blog.content || "");
                            const excerpt = getExcerpt(blog.content || "");

                            return (
                                <article key={blog.id} className="flex flex-col pb-12 border-b border-border last:border-0 group">
                                    <Link href={`/blog/${blog.slug}`} className="w-fit mb-3">
                                        <h2 className="text-2xl sm:text-[28px] font-medium text-foreground group-hover:text-primary transition-colors underline underline-offset-[6px]">
                                            {blog.title}
                                        </h2>
                                    </Link>

                                    <div className="text-[14px] font-medium text-muted-foreground mb-5 flex items-center gap-2">
                                        {blog.created_at && (
                                            <time>{formatDate(blog.created_at)}</time>
                                        )}
                                        {readTime > 0 && (
                                            <>
                                                <span>|</span>
                                                <span>{readTime} min read</span>
                                            </>
                                        )}
                                    </div>

                                    <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                                        {excerpt}
                                    </p>

                                    {blog.tags?.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 text-[12px] font-medium border border-border bg-transparent text-muted-foreground rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="py-12">
                        <p className="text-muted-foreground text-lg">No posts yet. Check back soon!</p>
                    </div>
                )}
            </Container>
            </Section>
        </div>
    );
}