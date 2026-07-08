import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
    <div className="relative flex flex-col w-full max-w-3xl mx-auto h-[380px] sm:h-[300px] md:h-[260px] justify-between py-4">
        
        <Quote className="absolute -top-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 text-secondary pointer-events-none" strokeWidth={1} />

        <div className="flex-1 flex items-center relative z-10 mb-8 mt-6">
            <p className="text-foreground font-normal italic text-[16px] sm:text-[18px] leading-relaxed text-left w-full">
                "{testimonial.content}"
            </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-border relative z-10 w-full">
            <div className="flex items-center gap-4">
                {testimonial.image_url ? (
                    <img
                        src={testimonial.image_url}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                        <span className="text-sm font-bold text-muted-foreground">
                            {testimonial.name?.charAt(0) || "U"}
                        </span>
                    </div>
                )}

                <div className="flex flex-col text-left">
                    <p className="text-foreground font-bold text-lg tracking-tight">
                        {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs font-bold tracking-widest uppercase mt-0.5">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
