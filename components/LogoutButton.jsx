"use client";

import { signOut } from "@/lib/actions";
import { LogOut } from "lucide-react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

export default function LogoutButton() {
    return (
        <form action={signOut} className="w-full">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild className="text-destructive hover:text-destructive hover:bg-destructive/10">
                        <button type="submit" className="w-full flex items-center gap-2">
                            <LogOut />
                            <span>Logout</span>
                        </button>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </form>
    );
}
