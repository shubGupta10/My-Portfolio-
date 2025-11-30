'use server';

import { supabase } from "@/utils/supabaseClient";
import supabaseAdmin from "@/utils/supabaseAdmin";
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTestimonial(formData) {
    try {
        const { error } = await supabase
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
    const cookieStore = cookies();
    const supabase = createServerActionClient({ cookies: () => cookieStore });

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
    const cookieStore = cookies();
    const supabase = createServerActionClient({ cookies: () => cookieStore });
    await supabase.auth.signOut();
    return redirect("/login")
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
    const cookieStore = cookies();
    const supabase = createServerActionClient({ cookies: () => cookieStore });

    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching testimonials:', error);
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