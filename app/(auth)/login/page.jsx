'use client';

import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { signInWithEmail } from '@/lib/actions'; 
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        const result = await signInWithEmail(formData);

        if (result.error) {
            setError(result.error);
        } else {
            router.push('/admin-panel');
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
                            <input id='email' name='email' type='email' required placeholder='admin@email.com' className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500'/>
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-2'>Password</label>
                            <input id='password' name='password' type='password' required placeholder='••••••••' className='w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 placeholder-gray-500'/>
                        </div>
                        {error && <p className='text-sm text-red-400'>{error}</p>}
                        <button type='submit' className='w-full inline-flex items-center justify-center gap-2 bg-blue-500/20 text-blue-300 py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-blue-500/30 hover:bg-blue-500 hover:text-white'>
                            <LogIn className='w-4 h-4' />
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}