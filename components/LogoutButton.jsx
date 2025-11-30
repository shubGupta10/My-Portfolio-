"use client";

import { signOut } from "@/lib/actions";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    return (
        <form action={signOut}>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/40 text-red-400 transition-all">
                <LogOut size={18} /> Logout
            </button>
        </form>
    );
}
