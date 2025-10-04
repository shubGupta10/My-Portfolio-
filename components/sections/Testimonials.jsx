'use client';

import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../TestimonialCard';
import RevealOnScroll from '../ReviewOnScroll';
import { fetchTestimonials } from '@/lib/actions';

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
        <RevealOnScroll>
            <section id="testimonials" className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='mb-12'>
                        <h3 className='text-2xl font-bold text-white'>What People Are Saying</h3>
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isLoading ? (
                        <p className="text-center text-white">Loading testimonials...</p>
                    ) : testimonials.length === 0 ? (
                        <div className="flex justify-center">
                            <div className="relative flex flex-col items-center justify-center min-h-[280px] w-full max-w-3xl p-10 bg-white/5 rounded-2xl border border-dashed border-white/20 backdrop-blur-sm">
                                <Quote className="w-16 h-16 text-white/10 mb-4" strokeWidth={1} />
                                <p className="text-center text-white text-lg">No testimonials yet.</p>
                                <p className="text-center text-white/60 mt-2">Be the first to leave a review!</p>
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <TestimonialCard testimonial={testimonials[currentIndex]} />

                            {testimonials.length > 1 && (
                                <>
                                    <button
                                        onClick={prevTestimonial}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-all duration-200"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    <div className="flex justify-center gap-2 mt-8">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? 'w-8 bg-blue-500'
                                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                                    }`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </RevealOnScroll>
    );
}