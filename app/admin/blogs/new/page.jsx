"use client";

import { useState } from "react";
import { createBlog } from "@/lib/actions";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NewBlogPage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [coverImg, setCoverImg] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [content, setContent] = useState("");

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
        formData.set("title", title);
        formData.set("slug", slug);
        formData.set("cover_img", coverImg);
        formData.set("tags", JSON.stringify(tags));
        formData.set("content", content);

        const res = await createBlog(formData);
        if (res.success) {
            router.push("/admin/blogs");
            router.refresh();
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Create New Blog</h2>
                <p className="text-muted-foreground">Write your blog post in markdown format</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* EDITOR */}
                <form action={onSubmit} className="space-y-6">
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
                            <label className="text-sm font-medium text-foreground mb-2 block">Content (Markdown)</label>
                            <textarea
                                rows={15}
                                placeholder="Write your blog in markdown..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!content.trim() || !title.trim()}
                        className={cn(
                            "w-full py-3 rounded-lg transition font-medium",
                            content.trim() && title.trim()
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                        )}
                    >
                        Save as Draft
                    </button>
                </form>

                {/* PREVIEW */}
                <div className="p-6 border border-border bg-card rounded-lg overflow-auto max-h-[calc(100vh-200px)]">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">Live Preview</h3>

                    {coverImg && (
                        <img 
                            src={coverImg} 
                            alt="Cover" 
                            className="rounded-lg mb-4 w-full max-h-56 object-cover border border-border" 
                        />
                    )}

                    <div className="prose prose-invert max-w-none prose-headings:text-card-foreground prose-p:text-card-foreground/90 prose-a:text-blue-400 prose-strong:text-card-foreground prose-code:text-blue-300 prose-pre:bg-muted prose-pre:border prose-pre:border-border">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                        >
                            {content || "*Start writing to see the preview...*"}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
