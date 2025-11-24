import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
    <div className="glass-card relative flex flex-col justify-between w-full max-w-3xl mx-auto rounded-2xl p-10 border border-white/10">

        <Quote className="absolute top-6 right-6 w-10 h-10 text-white/15" strokeWidth={1.5} />

        <p className="text-gray-200 text-lg leading-relaxed mb-8">
            "{testimonial.content}"
        </p>

        <div className="flex items-center gap-4">
            {testimonial.image_url ? (
                <img
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
            ) : (
                <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-200">
                        {testimonial.name.charAt(0)}
                    </span>
                </div>
            )}

            <div>
                <p className="text-white font-semibold text-base leading-tight">
                    {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm leading-tight">
                    {testimonial.role}
                </p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
