import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
    <div className="relative flex flex-col justify-between min-h-[280px] w-full max-w-3xl mx-auto p-10 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        <Quote className="absolute top-6 right-6 w-20 h-20 text-blue-500/80" strokeWidth={1.5} />
        <div className="relative z-10">
            <p className="text-white text-lg leading-relaxed mb-8">"{testimonial.content}"</p>
        </div>
        <div className="relative z-10 flex items-center">
            {testimonial.image_url ? (
                <img src={testimonial.image_url} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-cyan-400/30" />
            ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                </div>
            )}
            <div>
                <p className="font-bold text-white text-lg leading-tight">{testimonial.name}</p>
                <p className="text-white/70 leading-tight">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

export default TestimonialCard