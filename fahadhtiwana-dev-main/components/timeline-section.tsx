"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { GraduationCap, Code, Rocket } from "lucide-react"

const timelineItems = [
  {
    title: "Matriculation",
    subtitle: "Scored 97%",
    description: "Achieved a brilliant 97% in Matric, laying the groundwork for a future in technology.",
    icon: <GraduationCap className="w-5 h-5" />,
    status: "completed" as const,
  },
  {
    title: "FSc Part 1",
    subtitle: "Scored 91%",
    description: "Completed FSc Part 1 with outstanding results, building a strong academic foundation.",
    icon: <GraduationCap className="w-5 h-5" />,
    status: "completed" as const,
  },
  {
    title: "FSc Part 2",
    subtitle: "Currently Studying",
    description: "Preparing for FSc Part 2 and SAT while deepening knowledge in Core Java and algorithms.",
    icon: <Code className="w-5 h-5" />,
    status: "current" as const,
  },
  {
    title: "Building Projects",
    subtitle: "Active on GitHub",
    description: "Creating real-world projects, contributing to open source, and turning ideas into code.",
    icon: <Rocket className="w-5 h-5" />,
    status: "current" as const,
  },
]

function getStyles(status: string) {
  if (status === "completed") return {
    dot: "bg-green-500 shadow-green-500/40",
    badge: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    icon: "bg-green-500/10 text-green-600 dark:text-green-400",
  }
  return {
    dot: "bg-primary animate-pulse shadow-primary/40",
    badge: "bg-primary/10 text-primary border-primary/20",
    icon: "bg-primary/10 text-primary",
  }
}

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sans text-4xl font-bold text-center mb-4">My Journey</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            From academic excellence to building real-world projects
          </p>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-[1px]" />
          {timelineItems.map((item, index) => {
            const s = getStyles(item.status)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full ${s.dot} shadow-lg -translate-x-[5px] md:-translate-x-[6px] mt-6 z-10`} />
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="bg-card border border-border rounded-xl p-5 card-hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.icon}`}>{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${s.badge}`}>{item.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
