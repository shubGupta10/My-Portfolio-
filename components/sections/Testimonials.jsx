"use client";

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
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <ReviewOnScroll>
            <Section id="testimonials">
                <Container>
                    <h2 className="section-title mb-14 text-center">
                        Feedback From People I’ve Worked With
                    </h2>

                    {isLoading ? (
                        <p className="text-center text-gray-300">Loading testimonials...</p>
                    ) : testimonials.length === 0 ? (
                        <p className="text-center text-gray-300">No testimonials yet.</p>
                    ) : (
                        <div className="flex flex-col items-center w-full">

                            <div className="w-full max-w-3xl min-h-[320px] flex items-center">
                                <div className="w-full transition-all duration-300">
                                    <TestimonialCard testimonial={testimonials[currentIndex]} />
                                </div>
                            </div>

                            {testimonials.length > 1 && (
                                <>
                                    <div className="flex items-center justify-center gap-6 mt-10">
                                        <button
                                            aria-label="Previous"
                                            onClick={goPrev}
                                            className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition border border-gray-600 cursor-pointer"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            aria-label="Next"
                                            onClick={goNext}
                                            className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition border border-gray-600 cursor-pointer"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>

                                    <div className="flex justify-center gap-2 mt-6">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                aria-label={`Slide ${index + 1}`}
                                                onClick={() => setCurrentIndex(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                        ? "w-7 bg-blue-500"
                                                        : "w-2 bg-white/20 hover:bg-white/40"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </Container>
            </Section>
        </ReviewOnScroll>
    );
}
