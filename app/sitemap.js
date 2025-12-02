import { fetchPublishedBlogs } from "@/lib/actions";

export default async function sitemap() {
  const baseUrl = "https://www.shubhamgupta.online";

  const blogs = await fetchPublishedBlogs();

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updated_at || blog.created_at,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
    },
    ...blogUrls,
  ];
}
