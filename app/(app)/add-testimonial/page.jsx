import React from 'react';
import TestimonialForm from '@/components/TestimonialForm';

function AddTestimonialPage() {
    return (
        <main
            className='relative min-h-screen flex items-center justify-center px-4 py-20'
            style={{ backgroundImage: "url('/backgroundImage2.png')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className='relative z-10 w-full max-w-2xl'>
                <div className='text-center mb-10'>
                    <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                        Add a Testimonial
                    </h1>
                    <p className='text-gray-400 mt-2'>Thank you for taking the time to share your feedback.</p>
                </div>

                <TestimonialForm />
            </div>
        </main>
    );
}

export default AddTestimonialPage;