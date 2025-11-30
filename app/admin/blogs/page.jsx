import { fetchAllBlogs, deleteBlog, publishBlog } from "@/lib/actions";
import Link from "next/link";
import { Pencil, Trash2, Rocket } from "lucide-react";

export default async function AdminBlogsPage() {
  const blogs = await fetchAllBlogs();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Blog Management</h2>
          <p className="text-muted-foreground">Create, edit, and manage your blog posts</p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition whitespace-nowrap"
        >
          + New Blog
        </Link>
      </div>

      <div className="space-y-4">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="border border-border bg-card p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-lg transition-all"
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-2 truncate">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Status:{" "}
                <span className={blog.published ? "text-green-400" : "text-yellow-400"}>
                  {blog.published ? "Published" : "Draft"}
                </span>
                {blog.slug && (
                  <span className="text-muted-foreground ml-2">• /{blog.slug}</span>
                )}
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 shrink-0">
              {/* Edit */}
              <Link
                href={`/admin/blogs/${blog.id}/edit`}
                className="p-2 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/40 transition"
                title="Edit"
              >
                <Pencil size={18} />
              </Link>

              {/* Publish */}
              {!blog.published && (
                <form action={publishBlog}>
                  <input type="hidden" name="id" value={blog.id} />
                  <button
                    type="submit"
                    title="Publish"
                    className="p-2 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30 hover:bg-green-500/40 transition"
                  >
                    <Rocket size={18} />
                  </button>
                </form>
              )}

              {/* Delete */}
              <form action={deleteBlog}>
                <input type="hidden" name="id" value={blog.id} />
                <button
                  type="submit"
                  title="Delete"
                  className="p-2 rounded-lg bg-destructive/20 text-destructive border border-destructive/30 hover:bg-destructive/40 transition"
                >
                  <Trash2 size={18} />
                </button>
              </form>
            </div>
          </div>
        ))}

        {blogs?.length === 0 && (
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">No blogs yet. Time to write your first post ✍️</p>
          </div>
        )}
      </div>
    </div>
  );
}
