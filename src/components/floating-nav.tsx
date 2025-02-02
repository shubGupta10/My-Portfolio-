"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function FloatingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <ul className="flex space-x-1 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm font-medium px-3 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

