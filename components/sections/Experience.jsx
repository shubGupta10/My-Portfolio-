import React from 'react'
import ReviewOnScroll from '../ReviewOnScroll'

function Experience() {
    const experiences = [
        {
            id: 1,
            position: "Product Engineer",
            company: "HUZL.IN",
            duration: "June 2025 - Present",
            status: "Current",
            description: "Working as a Product Engineer, contributing across both frontend and backend. Building new features, improving the landing page, and enhancing the platform experience for freelancers to share gigs and connect.",
            technologies: ["Next.js", "React.js", "Node.js", "AWS"],
            liveUrl: "[https://huzl.in](https://huzl.in)",
            borderColor: "border-cyan-500",
            companyColor: "text-cyan-400",
            bgGradient: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
            statusColor: "bg-green-500/20 text-green-300 border-green-500/30"
        },
        {
            id: 2,
            position: "Freelance Full Stack Developer",
            company: "DIGNIFY A GIRL LTD",
            duration: "Nov 2024 - Present",
            status: "Completed",
            description: "Worked with the founder of Dignify a Girl to develop BuildMyCV, a resume builder using Next.js, Node.js, TypeScript, and Firebase. Integrated LangChain and Gemini AI for resume creation and job analysis.",
            technologies: ["Next.js", "Node.js", "TypeScript", "Firebase", "LangChain", "Gemini AI"],
            borderColor: "border-cyan-500",
            companyColor: "text-cyan-400",
            bgGradient: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
            statusColor: "bg-green-500/20 text-green-300 border-green-500/30"
        },
        {
            id: 3,
            position: "Freelance Full Stack Developer",
            company: "Biostrive Energies",
            duration: "May 2024 - Nov 2024",
            status: "Completed",
            description: "Developed a full-stack platform for BioStrive Energies using Next.js, Node.js, and MongoDB. Built an admin panel with role-based access, a real-time notice system, secure JWT authentication, and optimized SEO with caching and efficient asset loading.",
            technologies: ["Next.js", "Node.js", "MongoDB", "JWT", "Admin Panel", "SEO"],
            borderColor: "border-blue-500",
            companyColor: "text-blue-400",
            bgGradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
            statusColor: "bg-blue-500/20 text-blue-300 border-blue-500/30"
        }
    ];

    return (
        <ReviewOnScroll>
            <section
                id='experience'
                className='min-h-[60vh] flex items-center justify-center py-12 sm:py-16 lg:py-20'
            >
                <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                        Work Experience
                    </h2>

                    <div className='relative'>
                        {/* Timeline Line */}
                        <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 opacity-30'></div>

                        <div className='space-y-12'>
                            {experiences.map((experience, index) => (
                                <div
                                    key={experience.id}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className='absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-4 border-gray-900 z-10'></div>

                                    {/* Experience Card */}
                                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className={`${experience.bgGradient} rounded-xl p-6 sm:p-8 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                                            {/* Background Pattern */}
                                            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16'></div>

                                            <div className='relative z-10'>
                                                {/* Header */}
                                                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6'>
                                                    <div className='flex-1'>
                                                        <div className={`border-l-4 ${experience.borderColor} pl-4 mb-4`}>
                                                            <h3 className='text-xl sm:text-2xl font-bold text-white mb-2'>
                                                                {experience.position}
                                                            </h3>
                                                            <p className={`${experience.companyColor} text-base sm:text-lg font-semibold mb-2`}>
                                                                {experience.company}
                                                            </p>
                                                            <div className='flex flex-wrap items-center gap-3'>
                                                                <p className='text-gray-400 text-sm'>
                                                                    {experience.duration}
                                                                </p>
                                                                <span className={`${experience.statusColor} py-1 px-3 rounded-full text-xs font-medium border`}>
                                                                    {experience.status}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className='mb-6'>
                                                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                                                        {experience.description}
                                                    </p>
                                                </div>

                                                {/* Technologies */}
                                                <div className='space-y-3'>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400'></div>
                                                        <h4 className='text-white font-semibold text-sm'>Technologies & Tools</h4>
                                                    </div>
                                                    <div className='flex flex-wrap gap-2'>
                                                        {experience.technologies.map((tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className='bg-white/10 backdrop-blur-sm text-gray-200 py-2 px-3 rounded-lg text-xs font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200'
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty space for timeline balance on larger screens */}
                                    <div className='hidden md:block flex-1'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {experiences.length === 0 && (
                        <div className='text-center py-12'>
                            <div className='bg-white/5 rounded-xl p-8 border border-white/10'>
                                <p className='text-gray-400 text-lg mb-4'>No work experience added yet.</p>
                                <p className='text-gray-500 text-sm'>Add your first experience to get started!</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </ReviewOnScroll>
    )
}

export default Experience