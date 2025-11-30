'use client';

import React, { useState } from 'react';
import { LogIn, Loader2 } from 'lucide-react';
import { signInWithEmail } from '@/lib/actions'; 
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        const formData = new FormData(e.currentTarget);
        
        try {
            const result = await signInWithEmail(formData);

            if (result.error) {
                setError(result.error);
                setIsLoading(false);
            } else {
                router.push('/admin');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <main 
            className='relative min-h-screen flex items-center justify-center px-4'
            style={{ backgroundImage: "url('/backgroundImage2.png')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className='relative z-10 w-full max-w-md'>
                <div className='bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm'>
                    <h1 className='text-2xl font-bold text-center text-white mb-6'>Admin Login</h1>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>Email</label>
                            <input 
                                id='email' 
                                name='email' 
                                type='email' 
                                required 
                                disabled={isLoading}
                                placeholder='admin@email.com' 
                                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-900 focus:bg-blue-900/5 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-2'>Password</label>
                            <input 
                                id='password' 
                                name='password' 
                                type='password' 
                                required 
                                disabled={isLoading}
                                placeholder='••••••••' 
                                className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-900 focus:bg-blue-900/5 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed'
                            />
                        </div>
                        {error && <p className='text-sm text-red-400'>{error}</p>}
                        <button 
                            type='submit' 
                            disabled={isLoading}
                            className='w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-blue-950 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-blue-800/30 hover:bg-blue-900 hover:shadow-[0_4px_20px_rgba(15,23,42,0.45)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none'
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className='w-4 h-4 animate-spin' />
                                    Signing In...
                                </>
                            ) : (
                                <>
                                    <LogIn className='w-4 h-4' />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}