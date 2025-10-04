'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { addTestimonial } from '@/lib/actions';

export default function TestimonialForm() {
    const [formData, setFormData] = useState({ name: '', role: '', content: '', image_url: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await addTestimonial(formData);

        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success('Thank you! Your testimonial has been submitted for review.');
            setFormData({ name: '', role: '', content: '', image_url: '' });
        }

        setIsSubmitting(false);
    };

    return (
        <div className='bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm'>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>Your Name</label>
                    <input id='name' name='name' type='text' required value={formData.name} onChange={handleChange} placeholder='John Doe' className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500' />
                </div>
                <div>
                    <label htmlFor='role' className='block text-sm font-medium text-gray-300 mb-2'>Your Role / Company</label>
                    <input id='role' name='role' type='text' required value={formData.role} onChange={handleChange} placeholder='Engineer at Acme Inc.' className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 placeholder-gray-500' />
                </div>
                
                {/* 3. Add the new input field for the image URL */}    
                <div>
                    <label htmlFor='image_url' className='block text-sm font-medium text-gray-300 mb-2'>Profile Picture URL (Optional)</label>
                    <input id='image_url' name='image_url' type='url' value={formData.image_url} onChange={handleChange} placeholder='https://linkedin.com/in/your-profile/image.jpg' className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500' />
                </div>

                <div>
                    <label htmlFor='content' className='block text-sm font-medium text-gray-300 mb-2'>Testimonial</label>
                    <textarea id='content' name='content' required rows={5} value={formData.content} onChange={handleChange} placeholder='Write a few words about your experience...' className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500 resize-none' />
                </div>

                <button type='submit' disabled={isSubmitting} className='w-full inline-flex items-center justify-center gap-2 bg-blue-500/20 text-blue-300 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-blue-500/30 hover:bg-blue-500 hover:text-white hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed'>
                    <Send className='w-4 h-4' />
                    {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
                </button>
            </form>
        </div>
    );
}