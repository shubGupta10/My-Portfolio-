"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  skill: string
  delay: number
}

export default function SkillBar({ skill, delay }: SkillBarProps) {
  const randomPercentage = Math.floor(Math.random() * (100 - 70 + 1) + 70)

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium text-muted-foreground">{randomPercentage}%</span>
      </div>
      <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-foreground"
          initial={{ width: 0 }}
          whileInView={{ width: `${randomPercentage}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

