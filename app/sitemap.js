import { fetchPublishedBlogs } from "@/lib/actions";

export default async function sitemap() {
  const baseUrl = "https://www.shubhamgupta.online";
  const today = new Date().toISOString().split("T")[0]; 

  const blogs = await fetchPublishedBlogs();

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: (blog.updated_at || blog.created_at).split("T")[0], 
  }));

  return [
    {
      url: baseUrl,
      lastModified: today,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
    },
    ...blogUrls,
  ];
}
