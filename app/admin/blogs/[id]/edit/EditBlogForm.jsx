"use client";

import { useState } from "react";
import { editBlog } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import RichTextEditor from "@/components/RichTextEditor";

export default function EditBlogForm({ blog, blogId }) {
    const router = useRouter();

    const [title, setTitle] = useState(blog.title || "");
    const [slug, setSlug] = useState(blog.slug || "");
    const [coverImg, setCoverImg] = useState(blog.cover_img || "");
    const [tags, setTags] = useState(blog.tags || []);
    const [tagInput, setTagInput] = useState("");
    const [content, setContent] = useState(blog.content || "");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setSlug(
            newTitle
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "")
        );
    };

    const addTag = () => {
        if (!tagInput.trim()) return;
        if (tags.includes(tagInput.trim())) return;
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
    };

    const removeTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };

    async function onSubmit(formData) {
        setIsSubmitting(true);
        try {
            formData.set("id", blogId);
            formData.set("title", title);
            formData.set("slug", slug);
            formData.set("cover_img", coverImg);
            formData.set("tags", JSON.stringify(tags));
            formData.set("content", content);

            const res = await editBlog(formData);
            if (res.success) {
                router.push("/admin/blogs");
                router.refresh();
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Edit Blog</h2>
                <p className="text-muted-foreground">Update your blog post</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 items-start">
                {/* EDITOR */}
                <form action={onSubmit} className="space-y-6 p-6 border border-border bg-card rounded-lg shadow-sm">
                    {isSubmitting && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ButtonLoader />
                            Saving changes...
                        </div>
                    )}
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Blog Title</label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                value={title}
                                onChange={handleTitleChange}
                                className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Slug</label>
                            <input
                                type="text"
                                value={slug}
                                readOnly
                                placeholder="auto-generated-slug"
                                className="w-full p-3 rounded-lg border border-border bg-muted text-muted-foreground cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Cover Image URL</label>
                            <input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                value={coverImg}
                                onChange={(e) => setCoverImg(e.target.value)}
                                className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>

                        {/* TAGS */}
                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Tags</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            addTag();
                                        }
                                    }}
                                    placeholder="Add a tag and press Enter"
                                    className="flex-1 p-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                />
                                <button
                                    type="button"
                                    onClick={addTag}
                                    className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition whitespace-nowrap"
                                >
                                    Add
                                </button>
                            </div>

                            <div className="flex gap-2 flex-wrap mt-3">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        onClick={() => removeTag(tag)}
                                        className="cursor-pointer text-xs px-2 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 hover:bg-blue-500/40 transition"
                                    >
                                        {tag} ✕
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Content</label>
                            <RichTextEditor
                                value={content}
                                onChange={setContent}
                                className="min-h-[520px]"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!content.trim() || !title.trim() || isSubmitting}
                        className={cn(
                            "w-full py-3 rounded-lg transition font-medium flex items-center justify-center gap-2",
                            content.trim() && title.trim() && !isSubmitting
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                        )}
                    >
                        {isSubmitting && <ButtonLoader />}
                        {isSubmitting ? "Saving..." : "Update Blog"}
                    </button>
                </form>

                {/* PREVIEW */}
                <div className="p-6 border border-border bg-card rounded-lg shadow-sm overflow-auto max-h-[calc(100vh-200px)] lg:sticky lg:top-6">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">Live Preview</h3>

                    {coverImg && (
                        <img 
                            src={coverImg} 
                            alt="Cover" 
                            className="rounded-lg mb-4 w-full max-h-56 object-cover border border-border" 
                        />
                    )}

                    <div
                        className="prose prose-invert max-w-none prose-headings:text-card-foreground prose-p:text-card-foreground/90 prose-a:text-blue-400 prose-strong:text-card-foreground prose-code:text-blue-300 prose-pre:bg-muted prose-pre:border prose-pre:border-border"
                        dangerouslySetInnerHTML={{
                            __html:
                                content?.trim() ||
                                "<p><em>Start writing to see the preview...</em></p>",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function ButtonLoader() {
    return (
        <svg
            className="h-4 w-4 animate-spin text-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a10 10 0 00-10 10h4z"
            />
        </svg>
    );
}
