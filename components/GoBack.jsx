"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton({ label = "Go Back" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group flex items-center gap-2 text-[14px] font-bold text-muted-foreground hover:text-foreground uppercase tracking-widest cursor-pointer transition-colors"
      aria-label={label}
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      <span>{label}</span>
    </button>
  );
}
