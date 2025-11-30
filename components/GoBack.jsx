"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer px-4 py-2.5 mb-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
    >
      <ArrowLeft className="w-5 h-5" />
      Go Back
    </button>
  );
}
