import React, { useState, useEffect } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import TestimonialCard from "../TestimonialCard";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { fetchTestimonials } from "@/lib/actions";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const loadTestimonials = async () => {
            setIsLoading(true);
            try {
                const data = await fetchTestimonials();
                setTestimonials(data || []);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadTestimonials();
    }, []);

    const goNext = () => {
        if (!testimonials.length) return;
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goPrev = () => {
        if (!testimonials.length) return;
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <ReviewOnScroll>
            {/* APPLIED: Industry Standard 24py breathing room for global consistency */}
            <Section id="testimonials" className="py-20 lg:py-24">
                {/* APPLIED: Master 7xl alignment / px-12 to match Hero, About, Projects, Experience, and Contact */}
                <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                    
                    {/* APPLIED: Symmetrical heading alignment matching the rest of the site */}
                    <h2 className="section-title mb-16 text-center lg:text-left">
                        Feedback From People I’ve Worked With
                    </h2>

                    {isLoading ? (
                        <p className="text-center text-gray-300 py-10 font-light">Loading testimonials...</p>
                    ) : testimonials.length === 0 ? (
                        <p className="text-center text-gray-300 py-10 font-light">No testimonials yet.</p>
                    ) : (
                        <div className="flex flex-col items-center w-full">

                            {/* Centered carousel window respecting the 7xl parent alignment */}
                            <div className="w-full max-w-3xl min-h-[300px] flex items-center">
                                <div className="w-full transition-all duration-500 ease-in-out">
                                    <TestimonialCard testimonial={testimonials[currentIndex]} />
                                </div>
                            </div>

                            {testimonials.length > 1 && (
                                <div className="flex flex-col items-center gap-8 mt-12">
                                    {/* Clean, high-visibility navigation controls */}
                                    <div className="flex items-center justify-center gap-6">
                                        <button
                                            aria-label="Previous"
                                            onClick={goPrev}
                                            className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all border border-white/10 hover:border-blue-500/50 text-white cursor-pointer shadow-xl active:scale-95"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            aria-label="Next"
                                            onClick={goNext}
                                            className="bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all border border-white/10 hover:border-blue-500/50 text-white cursor-pointer shadow-xl active:scale-95"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* Minimalist slide indicators */}
                                    <div className="flex justify-center gap-2.5">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                aria-label={`Slide ${index + 1}`}
                                                onClick={() => setCurrentIndex(index)}
                                                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                                                    index === currentIndex
                                                        ? "w-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                                        : "w-2.5 bg-white/10 hover:bg-white/30"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}
