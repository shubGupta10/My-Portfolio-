import React, { useState, useEffect } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import Section from "../ui/Section";
import Container from "../ui/Container";
import TestimonialCard from "../TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
        <Section id="testimonials">
            <div className="relative z-10 w-full">
                
                <ReviewOnScroll>
                    <h2 className="text-2xl sm:text-[28px] font-medium tracking-tight text-foreground mb-6 text-left">
                        What People Say
                    </h2>
                </ReviewOnScroll>

                {isLoading ? (
                    <p className="text-left text-muted-foreground py-10 font-medium">Loading testimonials...</p>
                ) : testimonials.length === 0 ? (
                    <p className="text-left text-muted-foreground py-10 font-medium">No testimonials yet.</p>
                ) : (
                    <div className="flex flex-col items-center w-full">

                        <div className="w-full min-h-[300px] flex items-center">
                            <div className="w-full transition-all duration-500 ease-in-out">
                                <TestimonialCard testimonial={testimonials[currentIndex]} />
                            </div>
                        </div>

                        {testimonials.length > 1 && (
                            <div className="flex flex-col items-center gap-8 mt-12">
                                <div className="flex items-center justify-center gap-6">
                                    <button
                                        aria-label="Previous"
                                        onClick={goPrev}
                                        className="bg-secondary hover:bg-muted p-4 rounded-full transition-all text-foreground cursor-pointer active:scale-95 border border-border"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        aria-label="Next"
                                        onClick={goNext}
                                        className="bg-secondary hover:bg-muted p-4 rounded-full transition-all text-foreground cursor-pointer active:scale-95 border border-border"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-center gap-2.5">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            aria-label={`Slide ${index + 1}`}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                                index === currentIndex
                                                    ? "w-10 bg-foreground"
                                                    : "w-2.5 bg-border hover:bg-muted-foreground"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Section>
    );
}
