import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { approveTestimonial, rejectTestimonial, signOut, fetchPendingTestimonials } from '@/lib/actions';
import { Check, X, LogOut } from 'lucide-react';

export default async function AdminPage() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const { data: { session } } = await supabase.auth.getSession();

    const { data: testimonials, error } = await fetchPendingTestimonials();

    return (
        <main className="min-h-screen bg-gray-950 text-white p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Admin Panel</h1>
                        <p className='text-sm text-gray-400'>Logged in as: {session?.user?.email}</p>
                    </div>
                    <form action={signOut}>
                        <button className='flex items-center gap-2 text-sm text-gray-300 hover:text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10'>
                            <LogOut className='w-4 h-4' />
                            Sign Out
                        </button>
                    </form>
                </div>

                <h2 className='text-xl font-bold mb-6'>Pending Testimonials</h2>

                {error && <p className="text-red-500">Error fetching testimonials: {error.message}</p>}

                {testimonials && testimonials.length === 0 ? (
                    <p className="text-gray-400">No pending testimonials to review.</p>
                ) : (
                    <div className="space-y-6">
                        {testimonials?.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            {testimonial.image_url && (
                                                <img src={testimonial.image_url} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                            )}
                                            <div>
                                                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                                <p className="text-sm text-cyan-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 italic">"{testimonial.content}"</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <form action={approveTestimonial}>
                                            <input type="hidden" name="id" value={testimonial.id} />
                                            <button type="submit" title="Approve" className="p-2 w-full rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 flex items-center justify-center">
                                                <Check className="w-5 h-5" />
                                            </button>
                                        </form>
                                        <form action={rejectTestimonial}>
                                            <input type="hidden" name="id" value={testimonial.id} />
                                            <button type="submit" title="Reject" className="p-2 w-full rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 flex items-center justify-center">
                                                <X className="w-5 h-5" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}