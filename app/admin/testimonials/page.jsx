import { fetchPendingTestimonials, approveTestimonial, rejectTestimonial } from "@/lib/actions";
import { Check, X, Clock } from "lucide-react";

export default async function TestimonialsPage() {
    const { data: testimonials, error } = await fetchPendingTestimonials();

    return (
        <div>
            <h2 className="text-2xl font-semibold text-white mb-8">Pending Testimonials</h2>

            {error && <p className="text-red-500">{error.message}</p>}

            {testimonials?.length === 0 ? (
                <div className="p-10 text-center border border-white/10 bg-white/5 rounded-2xl">
                    <p className="text-gray-400">No pending testimonials</p>
                </div>
            ) : (
                <div className="space-y-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all"
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
                                        <button className="p-2 rounded-lg w-10 h-10 bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-white transition-all">
                                            <Check className="w-5 h-5" />
                                        </button>
                                    </form>

                                    <form action={rejectTestimonial}>
                                        <input type="hidden" name="id" value={t.id} />
                                        <button className="p-2 rounded-lg w-10 h-10 bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all">
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
    );
}
