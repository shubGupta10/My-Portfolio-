import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
    <div className="
        glass-card relative w-full max-w-3xl mx-auto
        rounded-2xl border border-white/10
        h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px]
        px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10
        flex flex-col justify-between
    ">
        <Quote className="absolute top-3 right-3 w-7 h-7 sm:w-9 sm:h-9 text-white/15" strokeWidth={1.5} />

        <div className="flex-1 flex items-center">
            <p className="
                text-gray-100
                text-[15px] sm:text-[17px] md:text-[19px]
                leading-snug sm:leading-normal
                text-center line-clamp-5
                mx-auto max-w-[90%] sm:max-w-3xl
            ">
                "{testimonial.content}"
            </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 justify-center mt-3 sm:mt-4">
            {testimonial.image_url ? (
                <img
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/20"
                />
            ) : (
                <div className="glass-card w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-200">
                        {testimonial.name.charAt(0)}
                    </span>
                </div>
            )}

            <div className="text-center">
                <p className="text-blue-100 font-semibold text-sm sm:text-base">
                    {testimonial.name}
                </p>
                <p className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
                    {testimonial.role}
                </p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
