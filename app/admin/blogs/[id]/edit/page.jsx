import { fetchBlogById } from "@/lib/actions";
import EditBlogForm from "./EditBlogForm";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }) {
    const { id } = await params;
    const blog = await fetchBlogById(id);

    if (!blog) {
        notFound();
    }

    return <EditBlogForm blog={blog} blogId={id} />;
}
