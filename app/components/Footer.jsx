import { Heart } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Experience", url: "/#experience" },
    { name: "Skills", url: "/#skills" },
    { name: "Projects", url: "/#projects" },
  ]

  return (
    <footer className="w-full py-8 px-4 sm:px-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
            Portfolio
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright and Made With */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Shubham. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center mt-2 sm:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" fill="currentColor" /> by Shubham
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer