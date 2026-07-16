import projectsData from "@/lib/data/project.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Shubham Gupta",
    };
  }

  const description = Array.isArray(project.description) 
    ? project.description.join(" ") 
    : project.description;

  return {
    title: `${project.title} | Shubham Gupta Portfolio`,
    description: description.substring(0, 160),
    alternates: {
      canonical: `https://www.shubhamgupta.online/project-details/${project.slug}`,
    },
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
