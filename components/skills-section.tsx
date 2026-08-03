"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

interface Skill {
  name: string
  icon: string
  gradient: string
  glow: string
}

const skills: Skill[] = [
  { name: "Java", icon: "☕", gradient: "from-orange-500 via-red-500 to-amber-500", glow: "hover:shadow-orange-500/30" },
  { name: "Python", icon: "🐍", gradient: "from-green-400 via-emerald-500 to-teal-500", glow: "hover:shadow-green-500/30" },
  { name: "Web Development", icon: "🌐", gradient: "from-blue-400 via-violet-500 to-indigo-500", glow: "hover:shadow-blue-500/30" },
  { name: "Algorithms & DSA", icon: "🧩", gradient: "from-yellow-400 via-orange-500 to-red-400", glow: "hover:shadow-yellow-500/30" },
  { name: "Problem Solving", icon: "💡", gradient: "from-pink-400 via-rose-500 to-fuchsia-500", glow: "hover:shadow-pink-500/30" },
  { name: "Git & GitHub", icon: "🔀", gradient: "from-gray-400 via-slate-500 to-zinc-400", glow: "hover:shadow-gray-500/30" },
  { name: "Data Structures", icon: "🏗️", gradient: "from-cyan-400 via-sky-500 to-blue-500", glow: "hover:shadow-cyan-500/30" },
  { name: "OOP", icon: "⚙️", gradient: "from-purple-400 via-violet-500 to-indigo-400", glow: "hover:shadow-purple-500/30" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.08,
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.97 }}
      className={`skill-card group relative cursor-default rounded-2xl p-[1.5px] ${skill.glow} hover:shadow-2xl transition-shadow duration-500`}
    >
      {/* Animated gradient border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500 skill-border-spin`} />

      {/* Inner card with glassmorphism */}
      <div className="relative rounded-2xl bg-background/90 dark:bg-background/80 backdrop-blur-xl px-6 py-5 flex flex-col items-center gap-3 overflow-hidden">
        {/* Floating background glow */}
        <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`} />

        {/* Icon with float animation */}
        <motion.span
          className="text-3xl relative z-10 skill-float"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {skill.icon}
        </motion.span>

        {/* Skill name */}
        <span className="text-sm font-semibold text-foreground relative z-10 text-center leading-tight">
          {skill.name}
        </span>

        {/* Animated underline on hover */}
        <div className={`h-0.5 w-0 group-hover:w-3/4 bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-500 ease-out`} />
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sans text-4xl font-bold text-center mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-14 text-pretty max-w-xl mx-auto">
            Currently learning and growing every day. Here are the technologies and concepts I work with.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
