'use server';

import supabaseAdmin from "@/utils/supabaseAdmin";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTestimonial(formData) {
    try {
        const { error } = await supabaseAdmin
            .from('testimonials')
            .insert([
                {
                    name: formData.name,
                    role: formData.role,
                    content: formData.content,
                    image_url: formData.image_url,
                }
            ]);

        if (error) {
            throw new Error(error.message);
        }

        return { success: true };

    } catch (error) {
        console.error("Error adding testimonial:", error);
        return { error: 'Failed to submit testimonial.' };
    }
}

export async function signInWithEmail(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                    } catch (error) {
                        // Server Component context - cookies will be set by middleware
                    }
                }
            }
        }
    );

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return { error: 'Could not authenticate user. Please check your credentials.' };
    }

    return { success: true };
}

export async function signOut() {
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                    } catch (error) {
                        // Server Component context - cookies will be set by middleware
                    }
                }
            }
        }
    );

    await supabase.auth.signOut();
    return redirect("/login");
}

export async function approveTestimonial(formData) {
    const id = formData.get('id');


    const { error } = await supabaseAdmin
        .from('testimonials')
        .update({ status: 'approved' })
        .eq('id', id);

    if (error) {
        return { error: 'Failed to approve testimonial.' };
    }

    revalidatePath('/admin');
    return { success: true };
}

export async function rejectTestimonial(formData) {
    const id = formData.get('id');

    const { error } = await supabaseAdmin
        .from('testimonials')
        .delete()
        .eq('id', id);

    if (error) {
        return { error: 'Failed to reject testimonial.' };
    }

    revalidatePath('/admin');
    return { success: true };
}

export async function fetchPendingTestimonials() {

    const { data, error } = await supabaseAdmin
        .from('testimonials')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching pending testimonials:", error.message);
        return { error: 'Could not fetch testimonials.' };
    }

    return { data };
}

export async function fetchTestimonials() {
    const { data, error } = await supabaseAdmin
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

    if (error) {
        throw new Error('Failed to fetch testimonials.');
    }

    return data;
}

export async function createBlog(formData) {
    const title = formData.get("title");
    const slug = formData.get("slug");
    const cover_img = formData.get("cover_img");
    const content = formData.get("content");
    const tagsString = formData.get("tags");

    // Parse tags from JSON string to array
    let tags = [];
    try {
        tags = tagsString ? JSON.parse(tagsString) : [];
    } catch (e) {
        console.error('Error parsing tags:', e);
        tags = [];
    }

    const { error } = await supabaseAdmin
        .from('blogs')
        .insert([
            { title, slug, content, cover_img, tags, published: false }
        ]);

    if (error) {
        console.error('Error creating blog:', error);
        return { error: 'Failed to create blog.' };
    }

    revalidatePath('/admin/blogs');
    return { success: true };
}

export async function publishBlog(formData) {
    const id = formData.get('id');

    const { error } = await supabaseAdmin
        .from('blogs')
        .update({ published: true })
        .eq('id', id);

    if (error) {
        console.error('Error publishing blog:', error);
        return { error: 'Failed to publish blog.' };
    }

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    return { success: true };
}

export async function fetchBlogBySlug(slug) {
    const { data, error } = await supabaseAdmin
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) {
        console.error('Error fetching blog by slug:', error);
        console.error('Slug attempted:', slug);
    }
    return data;
}

export async function fetchPublishedBlogs() {
    const { data, error } = await supabaseAdmin
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching published blogs:', error);
    }
    return data;
}

export async function fetchAllBlogs() {
    const { data, error } = await supabaseAdmin
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching all blogs:', error);
        return [];
    }

    return data || [];
}

export async function fetchBlogById(id) {
    const { data, error } = await supabaseAdmin
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching blog by id:', error);
        return null;
    }

    return data;
}

export async function editBlog(formData) {
    const id = formData.get('id');
    const title = formData.get('title');
    const slug = formData.get('slug');
    const content = formData.get('content');
    const cover_img = formData.get('cover_img');
    const tagsString = formData.get('tags');

    // Parse tags from JSON string to array
    let tags = [];
    try {
        tags = tagsString ? JSON.parse(tagsString) : [];
    } catch (e) {
        console.error('Error parsing tags:', e);
        tags = [];
    }

    const { error } = await supabaseAdmin
        .from('blogs')
        .update({ title, slug, content, cover_img, tags, updated_at: new Date().toISOString() })
        .eq('id', id);

    if (error) {
        console.error('Error editing blog:', error);
        return { error: 'Failed to update blog.' };
    }

    revalidatePath('/admin/blogs');
    revalidatePath(`/blog/${slug}`);
    return { success: true };
}

export async function deleteBlog(formData) {
    const id = formData.get('id');

    const { error } = await supabaseAdmin
        .from('blogs')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting blog:', error);
        return { error: 'Failed to delete blog.' };
    }

    revalidatePath('/admin/blogs');
    revalidatePath('/blog');
    return { success: true };
}

export async function incrementBlogLikes(slug) {
    try {
        const { data: blog, error: blogError } = await supabaseAdmin
            .from('blogs')
            .select('id, likes_count')
            .eq('slug', slug)
            .single();

        if (blogError || !blog) {
            return { error: 'Blog not found' };
        }

        const { data: updated, error: upErr } = await supabaseAdmin
            .from('blogs')
            .update({ likes_count: (blog.likes_count || 0) + 1 })
            .eq('id', blog.id)
            .select('likes_count')
            .single();

        if (upErr) {
            console.error('Failed to update likes_count:', upErr);
            return { error: 'Failed to update like count' };
        }

        return { success: true, likes_count: updated.likes_count };
    } catch (e) {
        console.error('Error incrementing like:', e);
        return { error: 'Failed to increment like' };
    }
}

export async function incrementBlogShares(slug) {
    try {
        const { data: blog, error: blogError } = await supabaseAdmin
            .from('blogs')
            .select('id, shares_count')
            .eq('slug', slug)
            .single();

        if (blogError || !blog) {
            return { error: 'Blog not found' };
        }

        const { data: updated, error: upErr } = await supabaseAdmin
            .from('blogs')
            .update({ shares_count: (blog.shares_count || 0) + 1 })
            .eq('id', blog.id)
            .select('shares_count')
            .single();

        if (upErr) {
            console.error('Failed to update shares_count:', upErr);
            return { error: 'Failed to update share count' };
        }

        return { success: true, shares_count: updated.shares_count };
    } catch (e) {
        console.error('Error incrementing share:', e);
        return { error: 'Failed to increment share' };
    }
}

export async function incrementBlogViews(slug) {
    try {
        const { data: blog, error: blogError } = await supabaseAdmin
            .from('blogs')
            .select('id, views_count')
            .eq('slug', slug)
            .single();

        if (blogError || !blog) {
            return { error: 'Blog not found' };
        }

        const { data: updated, error: updErr } = await supabaseAdmin
            .from('blogs')
            .update({ views_count: (blog.views_count || 0) + 1 })
            .eq('id', blog.id)
            .select('views_count')
            .single();

        if (updErr) {
            console.error('Failed to update views_count:', updErr);
            return { error: 'Failed to update view count' };
        }

        return { success: true, views_count: updated.views_count };
    } catch (e) {
        console.error('Error recording view:', e);
        return { error: 'Failed to record view' };
    }
}

export async function getBlogCounts(slug) {
    try {
        const { data: blog, error: blogError } = await supabaseAdmin
            .from('blogs')
            .select('views_count, likes_count, shares_count')
            .eq('slug', slug)
            .single();

        if (blogError || !blog) {
            return { error: 'Blog not found' };
        }

        return { 
            success: true, 
            views_count: blog.views_count || 0, 
            likes_count: blog.likes_count || 0, 
            shares_count: blog.shares_count || 0 
        };
    } catch (e) {
        console.error('Error fetching counts:', e);
        return { error: 'Failed to fetch counts' };
    }
}