import { fetchPublishedBlogs } from "@/lib/actions";
import projectsData from "@/lib/data/project.json";

export default async function sitemap() {
  const baseUrl = "https://www.shubhamgupta.online";
  const today = new Date().toISOString().split("T")[0]; 

  const blogs = await fetchPublishedBlogs();

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: (blog.updated_at || blog.created_at).split("T")[0], 
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/project-details/${project.slug}`,
    lastModified: today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
    ...blogUrls,
  ];
}
