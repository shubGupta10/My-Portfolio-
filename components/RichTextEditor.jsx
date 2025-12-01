"use client";

import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { cn } from "@/lib/utils";

/**
 * Shared rich-text editor wrapper so create/edit blog forms stay DRY.
 */
export default function RichTextEditor({
    value = "",
    onChange,
    className,
    placeholder = "Start writing your blog post...",
}) {
    const editor = useEditor({
        extensions: [StarterKit, Image.configure({ inline: false })],
        content: value || "",
        editorProps: {
            attributes: {
                class:
                    "prose prose-invert max-w-none focus:outline-none min-h-[400px]",
            },
        },
        onUpdate({ editor }) {
            onChange?.(editor.getHTML());
        },
        immediatelyRender: false,
    });

    // Sync external value (e.g. when editing an existing blog) into Tiptap.
    useEffect(() => {
        if (!editor) return;
        const currentHTML = editor.getHTML();
        if (value && value !== currentHTML) {
            editor.commands.setContent(value, false);
        }
        if (!value && currentHTML !== "") {
            editor.commands.clearContent();
        }
    }, [editor, value]);

    return (
        <div
            className={cn(
                "rounded-lg border border-border bg-background text-foreground",
                className
            )}
        >
            {!editor ? (
                <div className="w-full p-3 text-muted-foreground">Loading editor...</div>
            ) : (
                <>
                    <div className="flex flex-wrap gap-2 border-b border-border px-3 py-2">
                        {TOOLBAR_BUTTONS.map((btn) => (
                            <ToolbarButton key={btn.label} editor={editor} {...btn} />
                        ))}
                    </div>
                    <div className="relative">
                        {editor.isEmpty && !editor.isFocused && (
                            <span className="pointer-events-none absolute left-4 top-3 text-muted-foreground">
                                {placeholder}
                            </span>
                        )}
                        <EditorContent editor={editor} className="px-4 py-3" />
                    </div>
                </>
            )}
        </div>
    );
}

const TOOLBAR_BUTTONS = [
    { label: "H1", command: "toggleHeading", attrs: { level: 1 } },
    { label: "H2", command: "toggleHeading", attrs: { level: 2 } },
    { label: "H3", command: "toggleHeading", attrs: { level: 3 } },
    { label: "Bold", command: "toggleBold" },
    { label: "Italic", command: "toggleItalic" },
    { label: "Strike", command: "toggleStrike" },
    { label: "Bullet", command: "toggleBulletList" },
    { label: "Number", command: "toggleOrderedList" },
    { label: "Code", command: "toggleCodeBlock" },
    { label: "Quote", command: "toggleBlockquote" },
    {
        label: "Image",
        command: "setImage",
        attrs: () => {
            const url = window.prompt("Enter image URL");
            if (!url?.trim()) return false;
            return { src: url.trim() };
        },
    },
];

function ToolbarButton({ editor, command, label, attrs }) {
    const handleClick = () => {
        const resolvedAttrs = typeof attrs === "function" ? attrs() : attrs;
        if (resolvedAttrs === false) return;
        editor.chain().focus()[command](resolvedAttrs).run();
    };

    const activeAttrs = typeof attrs === "function" ? undefined : attrs;
    const isToggleCommand = command.startsWith("toggle");
    const isActive = isToggleCommand
        ? editor.isActive(getActiveMark(command), activeAttrs)
        : false;

    return (
        <button
            type="button"
            onClick={handleClick}
            className={cn(
                "text-xs px-3 py-1 rounded-md border transition",
                isActive
                    ? "bg-primary/20 border-primary/50 text-primary-foreground"
                    : "bg-transparent border-border text-foreground hover:bg-muted/60"
            )}
        >
            {label}
        </button>
    );
}

function getActiveMark(command) {
    switch (command) {
        case "toggleHeading":
            return "heading";
        case "toggleBold":
            return "bold";
        case "toggleItalic":
            return "italic";
        case "toggleStrike":
            return "strike";
        case "toggleBulletList":
            return "bulletList";
        case "toggleOrderedList":
            return "orderedList";
        case "toggleCodeBlock":
            return "codeBlock";
        case "toggleBlockquote":
            return "blockquote";
        default:
            return "";
    }
}

