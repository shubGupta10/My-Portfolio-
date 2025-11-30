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
    const { title, slug, content, cover_img, tags } = Object.fromEntries(formData);

    const { error } = await supabaseAdmin
        .from('blogs')
        .insert([
            { title, slug, content, cover_img, tags, published: false }
        ])

    if (error) {
        console.error('Error creating blog:', error);
    }

    revalidatePath('/admin/blogs');
    return { success: true };
}

export async function publishBlog(id) {
    const { error } = await supabaseAdmin
        .from('blogs')
        .update({ published: true })
        .eq('id', id)

    if (error) {
        console.error('Error publishing blog:', error);
    }

    revalidatePath('/blogs');

    return { success: true };
}

export async function fetchBlogBySlug(slug) {
    const { data, error } = await supabase
        .form('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) {
        console.error('Error fetching blog by slug:', error);
    }

    return data;
}

export async function fetchPublishedBlogs() {
    const { data, error } = await supabase
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
    }

    return data;
}

export async function editBlog(formData) {
    const { id, title, slug, content, cover_img, tags } = Object.fromEntries(formData);

    const { error } = await supabaseAdmin
        .from('blogs')
        .update({ title, slug, content, cover_img, tags })
        .eq('id', id);

    if (error) {
        console.error('Error editing blog:', error);
    }

    revalidatePath('/admin/blogs');
    return { success: true };
}

export async function deleteBlog(id) {
    const { error } = await supabaseAdmin
        .from('blogs')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting blog:', error);
    }

    revalidatePath('/admin/blogs');
    return { success: true };
}