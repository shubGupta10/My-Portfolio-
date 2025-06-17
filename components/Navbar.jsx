import React, { useEffect } from 'react'

function Navbar({menuOpen, setMenuOpen}) {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

  return (
    <nav className='fixed top-0 w-full z-40 bg-transparent backdrop-blur-[2px] border-b border-white/10 rounded-b-full shadow-lg'>
        
        <div className='max-w-5xl mx-auto px-4 '>
            <div className='flex justify-between items-center h-16'>
                
                <a className='font-mono text-xl bg-gradient-to-r from-blue-200 via-blue-300 to-cyan-400 bg-clip-text text-transparent leading-tight' href="#home">SHUBHAM</a>

                <div onClick={() => setMenuOpen((prev) => !prev)}  className='w-7 h-5 relative cursor-pointer z-40 md:hidden'>
                    &#9776;
                </div>

                <div className='hidden md:flex items-center space-x-8'>

                    <a href="#home" className='text-gray-300 hover:text-white transition-colors'>Home</a>

                    <a href="#about" className='text-gray-300 hover:text-white transition-colors'>About</a>

                    <a href="#projects" className='text-gray-300 hover:text-white transition-colors'>Projects</a>

                    <a href="#contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a>

                </div>
            </div>
        </div>
    </nav> 
  )
}

export default Navbar