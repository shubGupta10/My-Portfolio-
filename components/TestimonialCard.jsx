import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
    /* EXACT DNA SYNC: bg-[#111111]/60, border-white/[0.08], hover:[#161616], rounded-2xl */
    <div className="
        group relative flex flex-col w-full max-w-3xl mx-auto
        rounded-2xl bg-[#111111]/60 border border-white/[0.08]
        hover:bg-[#161616] hover:border-white/20 transition-all duration-500 shadow-2xl
        p-8 md:p-10
        min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] h-auto
        justify-between overflow-hidden cursor-pointer
    ">
        {/* Subtle Brand Glow Sync (from Projects) */}
        <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 mix-blend-overlay pointer-events-none"></div>

        <Quote className="absolute top-6 right-8 w-10 h-10 sm:w-16 sm:h-16 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-500 pointer-events-none" strokeWidth={1} />

        <div className="flex-1 flex items-center relative z-10 mb-8 mt-4">
            <p className="
                text-gray-200 font-normal italic
                text-[16px] sm:text-[18px] md:text-[20px]
                leading-relaxed text-left
                group-hover:text-white transition-colors duration-500
                w-full
            ">
                "{testimonial.content}"
            </p>
        </div>

        {/* EXACT BORDER TOP SYNC: border-t border-white/[0.04] */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.04] group-hover:border-white/10 transition-colors duration-500 relative z-10 w-full">
            <div className="flex items-center gap-4">
                {testimonial.image_url ? (
                    <img
                        src={testimonial.image_url}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-white/20 transition-colors"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                        <span className="text-sm font-bold text-gray-400 group-hover:text-blue-400 transition-colors">
                            {testimonial.name?.charAt(0) || "U"}
                        </span>
                    </div>
                )}

                <div className="flex flex-col text-left">
                    {/* EXACT TITLE SYNC: text-gray-100 font-bold tracking-tight */}
                    <p className="text-gray-100 font-bold text-lg group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                        {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 group-hover:text-blue-400 transition-colors">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
