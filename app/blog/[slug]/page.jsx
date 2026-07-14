import { fetchBlogBySlug } from "@/lib/actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import GoBackButton from "@/components/GoBack";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
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
    <div className="w-full pb-16">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />



      <main className="relative z-10 w-full">
        <Section>
          <Container>
            <article>
            {/* Back Button */}
            <div className="mb-10">
              <GoBackButton label="Back to Blog" />
            </div>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-2xl sm:text-[28px] font-medium text-foreground tracking-tight mb-4">
                {blog.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-2 text-[14px] font-medium text-muted-foreground mb-6">
                {blog.created_at && (
                  <time dateTime={blog.created_at}>
                    {formatDate(blog.created_at)}
                  </time>
                )}
                {readTime > 0 && (
                  <>
                    <span>|</span>
                    <span>{readTime} min read</span>
                  </>
                )}
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
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-[12px] font-medium border border-border bg-transparent text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Cover Image */}
            {blog.cover_img && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 border border-border">
                <Image
                  src={blog.cover_img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            )}

            <hr className="border-border mb-12" />

            {/* Article Content */}
            <div
              className="prose prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:font-medium prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:sm:text-3xl prose-h3:font-bold prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-[17px] prose-p:sm:text-[19px] prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-foreground prose-a:underline prose-a:decoration-border prose-a:underline-offset-4 hover:prose-a:decoration-foreground
                prose-strong:text-foreground prose-strong:font-bold
                prose-code:text-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
                prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:rounded-lg
                prose-img:rounded-lg prose-img:border prose-img:border-border
                prose-li:text-muted-foreground prose-li:text-[17px] prose-li:sm:text-[19px]
                prose-blockquote:border-l-border prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </Container>
        </Section>
      </main>
    </div>
  );
}
