'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => (
    <div className="relative flex flex-col justify-between min-h-[280px] w-full max-w-3xl mx-auto p-10 bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
        <Quote className="absolute top-6 right-6 w-20 h-20 text-cyan-400/20" strokeWidth={1.5} />
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
                <p className="text-gray-400 leading-tight">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchTestimonials = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching testimonials:', error);
            } else {
                setTestimonials(data || []);
            }
            setIsLoading(false);
        };

        fetchTestimonials();
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='mb-12'>
                    <h3 className='text-2xl font-bold text-white'>What People Are Saying</h3>
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {isLoading ? (
                    <p className="text-center text-gray-400">Loading testimonials...</p>
                ) : testimonials.length === 0 ? (
                    <div className="flex justify-center">
                        <div className="relative flex flex-col items-center justify-center min-h-[280px] w-full max-w-3xl p-10 bg-white/5 rounded-2xl border border-dashed border-white/20 backdrop-blur-sm">
                            <Quote className="w-16 h-16 text-white/10 mb-4" strokeWidth={1} />
                            <p className="text-center text-gray-400 text-lg">No testimonials yet.</p>
                            <p className="text-center text-gray-500 mt-2">Be the first to leave a review!</p>
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
                                                    ? 'w-8 bg-cyan-400'
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
    );
}