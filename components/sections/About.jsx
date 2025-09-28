import React from 'react'
import ReviewOnScroll from '../ReviewOnScroll'

function About() {

    const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "Appwrite", "Framer Motion"];
    const backendSkills = ["Node.js", "Go", "Express", "REST APIs", "GraphQL", "LangChain", "WebSockets"];
    const devopsSkills = ["Docker", "Docker Hub", "AWS", "Git", "GitHub Actions", "Vercel", "Netlify"];
    const databaseSkills = ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"];

    return (
        <ReviewOnScroll>
            <section
                id='about'
                className='min-h-[60vh] flex items-center justify-center py-12 sm:py-16 lg:py-20'
            >
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        About Me
                    </h2>

                    {/* Introduction */}
                    <div className='bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 mb-12'>
                        <p className='text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto'>
                            I am a full-stack developer with experience in building web applications using Next.js, TypeScript, and Node.js. I specialize
                            in developing scalable SaaS platforms, AI-powered tools, and secure authentication systems. I have a strong understanding
                            of modern web technologies, DevOps practices, and cloud deployment.
                        </p>
                    </div>

                    {/* Education Section */}
                    <div className='mb-16'>
                        <div className='text-center mb-8'>
                            <h3 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2'>
                                Education
                            </h3>
                            <div className='w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full'></div>
                        </div>
                        
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                            {/* Bachelor's Degree */}
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
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

                            {/* Master's Degree */}
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
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

                    {/* Technical Skills Section */}
                    <div>
                        <div className='text-center mb-8'>
                            <h3 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                                Technical Skills
                            </h3>
                            <div className='w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full'></div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center'>
                                        <div className='w-4 h-4 rounded bg-blue-500'></div>
                                    </div>
                                    <h4 className='text-xl font-bold text-white'>Frontend</h4>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className='bg-blue-500/20 text-blue-300 py-2 px-3 rounded-lg text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-200'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center'>
                                        <div className='w-4 h-4 rounded bg-cyan-500'></div>
                                    </div>
                                    <h4 className='text-xl font-bold text-white'>Backend</h4>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className='bg-cyan-500/20 text-cyan-300 py-2 px-3 rounded-lg text-sm border border-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-200'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center'>
                                        <div className='w-4 h-4 rounded bg-purple-500'></div>
                                    </div>
                                    <h4 className='text-xl font-bold text-white'>DevOps & Tools</h4>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {devopsSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className='bg-purple-500/20 text-purple-300 py-2 px-3 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-200'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div className='w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center'>
                                        <div className='w-4 h-4 rounded bg-green-500'></div>
                                    </div>
                                    <h4 className='text-xl font-bold text-white'>Database</h4>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {databaseSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className='bg-green-500/20 text-green-300 py-2 px-3 rounded-lg text-sm border border-green-500/30 hover:bg-green-500/30 transition-all duration-200'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ReviewOnScroll>
    )
}

export default About