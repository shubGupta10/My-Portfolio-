import { fetchPendingTestimonials, approveTestimonial, rejectTestimonial } from "@/lib/actions";
import { Check, X, Clock } from "lucide-react";

export default async function TestimonialsPage() {
    const { data: testimonials, error } = await fetchPendingTestimonials();

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Pending Testimonials</h2>
                <p className="text-muted-foreground">Review and approve testimonials from users</p>
            </div>

            {error && (
                <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                    <p className="text-destructive text-sm">{error.message}</p>
                </div>
            )}

            {testimonials?.length === 0 ? (
                <div className="p-10 text-center border border-border bg-card rounded-lg">
                    <p className="text-muted-foreground">No pending testimonials</p>
                </div>
            ) : (
                <div className="space-y-4 sm:space-y-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="p-6 sm:p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
                        >
                            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start sm:items-center gap-4 mb-4">
                                        {t.image_url && (
                                            <img
                                                src={t.image_url}
                                                alt={t.name}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-border shrink-0"
                                            />
                                        )}

                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-card-foreground truncate">{t.name}</h3>
                                            <p className="text-cyan-400 text-sm truncate">{t.role}</p>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                                <Clock className="w-3 h-3" />
                                                Pending Review
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-card-foreground/90 leading-relaxed break-words">
                                        &quot;{t.content}&quot;
                                    </p>
                                </div>

                                <div className="flex flex-row sm:flex-col gap-2 shrink-0">
                                    <form action={approveTestimonial} className="inline">
                                        <input type="hidden" name="id" value={t.id} />
                                        <button 
                                            type="submit"
                                            className="p-2 rounded-lg w-10 h-10 bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-white transition-all flex items-center justify-center"
                                            aria-label="Approve testimonial"
                                        >
                                            <Check className="w-5 h-5" />
                                        </button>
                                    </form>

                                    <form action={rejectTestimonial} className="inline">
                                        <input type="hidden" name="id" value={t.id} />
                                        <button 
                                            type="submit"
                                            className="p-2 rounded-lg w-10 h-10 bg-destructive/20 text-destructive border border-destructive/30 hover:bg-destructive hover:text-destructive-foreground transition-all flex items-center justify-center"
                                            aria-label="Reject testimonial"
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
    );
}
