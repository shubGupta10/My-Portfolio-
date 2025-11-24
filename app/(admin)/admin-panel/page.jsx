import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
    approveTestimonial,
    rejectTestimonial,
    signOut,
    fetchPendingTestimonials,
} from "@/lib/actions";
import { Check, X, LogOut, Clock } from "lucide-react";

export default async function AdminPage() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
        cookies: () => cookieStore,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const { data: testimonials, error } = await fetchPendingTestimonials();

    return (
        <main className="min-h-screen bg-black text-gray-100">
            {/* HEADER */}
            <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Admin Panel
                    </h1>

                    <form action={signOut}>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-red-500/10 text-gray-300 transition-all">
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </form>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <p className="text-sm text-gray-400 mb-10">
                    Logged in as <span className="text-white">{session?.user?.email}</span>
                </p>

                <h2 className="text-xl font-semibold mb-6">Pending Testimonials</h2>

                {error && <p className="text-red-500">{error.message}</p>}

                {testimonials?.length === 0 ? (
                    <div className="glass-card p-10 text-center border border-white/10 bg-white/5 rounded-2xl">
                        <p className="text-gray-400">No pending testimonials 🎉</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {testimonials?.map((t) => (
                            <div
                                key={t.id}
                                className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all"
                            >
                                <div className="flex justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            {t.image_url && (
                                                <img
                                                    src={t.image_url}
                                                    alt={t.name}
                                                    className="w-14 h-14 rounded-full object-cover border border-white/10"
                                                />
                                            )}

                                            <div>
                                                <h3 className="text-lg font-semibold">{t.name}</h3>
                                                <p className="text-cyan-400 text-sm">{t.role}</p>
                                                <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                    <Clock className="w-3 h-3" />
                                                    Pending Review
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 leading-relaxed">
                                            &quot;{t.content}&quot;
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <form action={approveTestimonial}>
                                            <input type="hidden" name="id" value={t.id} />
                                            <button
                                                title="Approve"
                                                className="p-2 rounded-lg w-10 h-10 bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-white transition-all"
                                            >
                                                <Check className="w-5 h-5" />
                                            </button>
                                        </form>

                                        <form action={rejectTestimonial}>
                                            <input type="hidden" name="id" value={t.id} />
                                            <button
                                                title="Reject"
                                                className="p-2 rounded-lg w-10 h-10 bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
