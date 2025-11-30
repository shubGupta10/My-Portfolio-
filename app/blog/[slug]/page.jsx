import { fetchBlogBySlug } from "@/lib/actions";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/GoBack";
import Container from "@/components/ui/Container";

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const blog = await fetchBlogBySlug(slug);
    console.log("Here is blog", blog);
    

    if (!blog) {
        notFound();
    }

    const readTime = calculateReadTime(blog.content || '');

    return (
        <div className="min-h-screen relative" style={{ backgroundImage: "url('/backgroundImage2.png')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <Container className="relative z-10 py-32">
                <article className="max-w-4xl mx-auto">

                    <GoBackButton/>
                    
                    {/* Cover Image */}
                    {blog.cover_img && (
                        <div className="glass-card relative w-full h-64 sm:h-96 mb-8 overflow-hidden p-0">
                            <Image
                                src={blog.cover_img}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}

                    {/* Header */}
                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-400">
                            {blog.created_at && (
                                <time dateTime={blog.created_at}>
                                    {formatDate(blog.created_at)}
                                </time>
                            )}
                            {readTime > 0 && (
                                <>
                                    <span>•</span>
                                    <span>{readTime} min read</span>
                                </>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="glass-pill text-xs px-3 py-1.5 text-blue-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Content */}
                    <div className="glass-card p-8 md:p-12">
                        <div className="prose prose-invert max-w-none 
                            prose-headings:text-white prose-headings:font-bold
                            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base
                            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                            prose-strong:text-white prose-strong:font-semibold
                            prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                            prose-img:rounded-xl prose-img:border prose-img:border-white/10
                            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:text-gray-300 prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
                            prose-ul:text-gray-300 prose-ol:text-gray-300
                            prose-li:text-gray-300 prose-li:leading-relaxed
                            prose-hr:border-white/10">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                            >
                                {blog.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    );
}

