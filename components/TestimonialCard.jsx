import { Quote } from "lucide-react";
import HoverGlow from "./ui/HoverGlow";

const TestimonialCard = ({ testimonial }) => (
    <div className="
        group relative flex flex-col w-full max-w-3xl mx-auto
        rounded-2xl bg-card border border-border
        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 transition-all duration-300
        p-8 md:p-10
        min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] h-auto
        justify-between overflow-hidden cursor-pointer
    ">
        <HoverGlow />
        <Quote className="absolute top-6 right-8 w-10 h-10 sm:w-16 sm:h-16 text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500 pointer-events-none" strokeWidth={1} />

        <div className="flex-1 flex items-center relative z-10 mb-8 mt-4">
            <p className="
                text-muted-foreground font-normal italic
                text-[16px] sm:text-[18px] md:text-[20px]
                leading-relaxed text-left
                group-hover:text-foreground transition-colors duration-300
                w-full
            ">
                "{testimonial.content}"
            </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-border transition-colors duration-300 relative z-10 w-full">
            <div className="flex items-center gap-4">
                {testimonial.image_url ? (
                    <img
                        src={testimonial.image_url}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                            {testimonial.name?.charAt(0) || "U"}
                        </span>
                    </div>
                )}

                <div className="flex flex-col text-left">
                    <p className="text-foreground font-bold text-lg group-hover:text-primary transition-colors duration-300 tracking-tight">
                        {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs font-bold tracking-widest uppercase mt-0.5 group-hover:text-primary/80 transition-colors">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
