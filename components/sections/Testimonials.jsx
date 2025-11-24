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

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <ReviewOnScroll>
            <Section id="testimonials">
                <Container>
                    <h2 className="section-title mb-16">What People Are Saying</h2>

                    {isLoading ? (
                        <p className="text-center text-gray-300">Loading testimonials...</p>
                    ) : testimonials.length === 0 ? (
                        <div className="flex justify-center">
                            <div className="glass-card p-10 text-center max-w-lg">
                                <Quote className="w-16 h-16 text-white/10 mx-auto mb-4" />
                                <p className="text-white text-lg">No testimonials yet.</p>
                                <p className="text-white/60 mt-2">Be the first to leave a review!</p>
                            </div>
                        </div>
                    ) : (
                        <div className="relative flex flex-col items-center">
                            <TestimonialCard testimonial={testimonials[currentIndex]} />

                            {testimonials.length > 1 && (
                                <>
                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevTestimonial}
                                        aria-label="Previous"
                                        className="nav-btn left-0 -translate-x-6 md:left-1/2 md:-translate-x-[150%]"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    <button
                                        onClick={nextTestimonial}
                                        aria-label="Next"
                                        className="nav-btn right-0 translate-x-6 md:right-1/2 md:translate-x-[150%]"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    {/* Dots */}
                                    <div className="flex justify-center gap-2 mt-8">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                aria-label={`Slide ${index + 1}`}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
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
