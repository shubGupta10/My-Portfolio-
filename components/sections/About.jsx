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

                    <div className='bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 mb-8'>
                        <p className='text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto'>
                            I am a full-stack developer with experience in building web applications using Next.js, TypeScript, and Node.js. I specialize
                            in developing scalable SaaS platforms, AI-powered tools, and secure authentication systems. I have a strong understanding
                            of modern web technologies, DevOps practices, and cloud deployment.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                        {/* Left Side - Technical Skills */}
                        <div className='space-y-6'>
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <h3 className='text-xl font-bold mb-4 text-white'>Frontend</h3>
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
                                <h3 className='text-xl font-bold mb-4 text-white'>Backend</h3>
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
                                <h3 className='text-xl font-bold mb-4 text-white'>DevOps & Tools</h3>
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
                                <h3 className='text-xl font-bold mb-4 text-white'>Database</h3>
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

                        {/* Right Side - Education & Experience */}
                        <div className='space-y-6'>
                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <h3 className='text-xl font-bold mb-6 text-white'>Education</h3>
                                <div className='space-y-4'>
                                    {/* Education Item 1 */}
                                    <div className='border-l-4 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white text-lg'>Bachelor of Computer Applications</h4>
                                        <p className='text-gray-400 text-sm mt-1'>Babu Banarasi Das University</p>
                                        <p className='text-gray-400 text-sm'>2021 - 2024</p>
                                        <div className='mt-2 flex items-center'>
                                            <span className='text-gray-300 text-sm'>CGPA: </span>
                                            <span className='ml-2 text-blue-400 font-semibold'>8.4/10</span>
                                        </div>
                                    </div>

                                    {/* Education Item 2 */}
                                    <div className='border-l-4 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white text-lg'>Masters of Computer Applications</h4>
                                        <p className='text-gray-400 text-sm mt-1'>Chandigarh University</p>
                                        <p className='text-gray-400 text-sm'>2024 - Present</p>
                                        <div className='mt-2 flex items-center'>
                                            <span className='text-gray-300 text-sm'>CGPA: </span>
                                            <span className='ml-2 text-blue-400 font-semibold'>8.8/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='bg-white/5 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all duration-300'>
                                <h3 className='text-xl font-bold mb-6 text-white'>Work Experience</h3>
                                <div className='space-y-6'>
                                    <div className='border-l-4 border-cyan-500 pl-4'>
                                        <h4 className='font-semibold text-white text-lg'>Freelance Full Stack Developer</h4>
                                        <p className='text-cyan-400 text-sm font-medium'>DIGNIFY A GIRL LTD</p>
                                        <p className='text-gray-400 text-sm'>Nov 2024 - Present</p>
                                        <p className='text-gray-300 text-sm mt-2 leading-relaxed'>
                                            Worked with the founder of Dignify a Girl to develop BuildMyCV, a resume builder using Next.js, Node.js, TypeScript, and Firebase. Integrated LangChain and Gemini AI for resume creation and job analysis.
                                        </p>
                                    </div>

                                    <div className='border-l-4 border-blue-500 pl-4'>
                                        <h4 className='font-semibold text-white text-lg'>Freelance Full Stack Developer</h4>
                                        <p className='text-blue-400 text-sm font-medium'>Biostrive Energies</p>
                                        <p className='text-gray-400 text-sm'>May 2024 - Nov 2024</p>
                                        <p className='text-gray-300 text-sm mt-2 leading-relaxed'>
                                            Developed a full-stack platform for BioStrive Energies using Next.js, Node.js, and MongoDB. Built an admin panel with role-based access, a real-time notice system, secure JWT authentication, and optimized SEO with caching and efficient asset loading.
                                        </p>
                                    </div>
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