import { fetchBlogBySlug } from "@/lib/actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/GoBack";
import Container from "@/components/ui/Container";
import BlogActionsClient from "@/components/BlogActionsClient";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
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

  if (!blog) notFound();

  const readTime = calculateReadTime(blog.content || "");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.content.substring(0, 160),
    image: blog.cover_img,
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    url: `https://www.shubhamgupta.online/blog/${blog.slug}`,
    author: {
      "@type": "Person",
      name: "Shubham Gupta",
    },
    publisher: {
      "@type": "Organization",
      name: "Shubham Gupta",
      logo: {
        "@type": "ImageObject",
        url: "https://www.shubhamgupta.online/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.shubhamgupta.online/blog/${blog.slug}`,
    },
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundImage: "url('/backgroundImage2.png')" }}
    >
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero */}
      {blog.cover_img && (
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src={blog.cover_img}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />
          <div className="absolute top-8 left-0 right-0 z-20">
            <Container>
              <GoBackButton />
            </Container>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <Container className="relative z-10 -mt-32 pb-16 md:pb-24">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
              {blog.created_at && (
                <time dateTime={blog.created_at}>
                  {formatDate(blog.created_at)}
                </time>
              )}
              <span className="text-gray-600">•</span>
              <span>{readTime} min read</span>
            </div>

            {/* Blog Actions */}
            <div className="mb-6">
              <BlogActionsClient
                slug={blog.slug}
                initialCounts={{
                  views_count: blog.views_count || 0,
                  likes_count: blog.likes_count || 0,
                  shares_count: blog.shares_count || 0,
                  liked_by_user: false,
                }}
              />
            </div>

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Render HTML Content */}
          <div
            className="prose prose-invert max-w-none
              prose-h2:text-3xl
              prose-h3:text-2xl
              prose-p:text-lg
              prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </Container>
    </div>
  );
}
