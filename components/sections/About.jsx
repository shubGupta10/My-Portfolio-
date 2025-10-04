import React from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import { Code2, Server, Wrench, Database } from 'lucide-react';

function About() {
    const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "Appwrite", "Framer Motion"];
    const backendSkills = ["Node.js", "Go", "Express", "REST APIs", "GraphQL", "LangChain", "WebSockets"];
    const devopsSkills = ["Docker", "Docker Hub", "AWS", "Git", "GitHub Actions", "Vercel", "Netlify"];
    const databaseSkills = ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"];

    const skillCategories = [
        { title: "Frontend", skills: frontendSkills, Icon: Code2 },
        { title: "Backend", skills: backendSkills, Icon: Server },
        { title: "DevOps & Tools", skills: devopsSkills, Icon: Wrench },
        { title: "Database", skills: databaseSkills, Icon: Database },
    ];

    return (
        <ReviewOnScroll>
            <section
                id='about'
                className='py-20 sm:py-24'
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 sm:mb-20'>

                        <div>
                            <h2 className='text-2xl font-bold text-white mb-6'>About Me</h2>
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300'>
                                <p className='text-gray-300 text-base sm:text-lg leading-relaxed'>
                                    I am a full-stack developer with experience in building web applications using Next.js, TypeScript, and Node.js. I specialize
                                    in developing scalable SaaS platforms, AI-powered tools, and secure authentication systems. I have a strong understanding
                                    of modern web technologies, DevOps practices, and cloud deployment.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold text-white mb-6'>Education</h2>
                            <div className='flex flex-col gap-6 h-full'>
                                <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300'>
                                    <div className='border-l-4 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white text-lg'>Bachelor of Computer Applications</h4>
                                        <p className='text-gray-400 text-sm mt-1'>Babu Banarasi Das University</p>
                                        <p className='text-gray-400 text-sm'>2021 - 2024</p>
                                        <div className='mt-2 flex items-center'>
                                            <span className='text-gray-300 text-sm'>CGPA: </span>
                                            <span className='ml-2 text-blue-400 font-semibold'>8.4/10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300'>
                                    <div className='border-l-4 border-cyan-500 pl-4'>
                                        <h4 className='font-semibold text-white text-lg'>Masters of Computer Applications</h4>
                                        <p className='text-gray-400 text-sm mt-1'>Chandigarh University</p>
                                        <p className='text-gray-400 text-sm'>2024 - Present</p>
                                        <div className='mt-2 flex items-center'>
                                            <span className='text-gray-300 text-sm'>CGPA: </span>
                                            <span className='ml-2 text-cyan-400 font-semibold'>8.8/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-7xl mx-auto'>
                        <div className='mb-10'>
                            <h2 className='text-2xl font-bold text-white'>Technical Skills</h2>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {skillCategories.map((category) => (
                                <div key={category.title} className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-transform duration-300'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center'>
                                            <category.Icon className='w-5 h-5 text-blue-400' />
                                        </div>
                                        <h4 className='text-xl font-bold text-white'>{category.title}</h4>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        {category.skills.map((tech) => (
                                            <span
                                                key={tech}
                                                className='bg-blue-500/20 text-blue-300 py-2 px-3 rounded-lg text-sm hover:bg-blue-500/30 transition-colors duration-200'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ReviewOnScroll>
    );
}

export default About;