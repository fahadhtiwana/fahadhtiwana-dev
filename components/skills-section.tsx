"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: "Java", level: 55, color: "from-orange-500 to-red-500" },
  { name: "Python", level: 40, color: "from-green-400 to-emerald-500" },
  { name: "Web Development", level: 45, color: "from-blue-400 to-violet-500" },
  { name: "Algorithms & DSA", level: 50, color: "from-yellow-400 to-orange-500" },
  { name: "Problem Solving", level: 60, color: "from-pink-400 to-rose-500" },
]

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
      </div>
      <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skill-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sans text-4xl font-bold text-center mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-pretty max-w-xl mx-auto">
            Currently learning and growing every day. These bars reflect my journey so far.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
