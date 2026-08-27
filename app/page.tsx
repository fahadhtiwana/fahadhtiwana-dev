"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { GitHubStats } from "@/components/github-stats"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { TypingEffect } from "@/components/typing-effect"
import { AnimatedSection } from "@/components/animated-section"
import { SkillsSection } from "@/components/skills-section"
import { TimelineSection } from "@/components/timeline-section"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const skillBadges = [
  "Core Java",
  "Python",
  "Algorithms",
  "Problem Solving",
  "Web Development",
]

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Hero Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg"
            alt="Malik Fahad Hayat - Computer Science Student from Pakistan"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Animated gradient overlay to keep the cool effect */}
          <div className="absolute inset-0 z-[1] hero-dark-gradient opacity-60 mix-blend-multiply" />
          {/* Dark overlay with blur for readability */}
          <div className="absolute inset-0 z-[2] bg-black/50 backdrop-blur-[2px]" />
        </div>

        {/* Subtle floating particles (dots slowly drifting) */}
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
          {mounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["-20%", "120%"],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 20,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
          <header>
            <motion.h1
              className="text-5xl md:text-8xl font-bold text-white mb-6 text-balance tracking-tight"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              Malik Fahad Hayat
            </motion.h1>
            <p className="text-xl md:text-3xl text-white/90 mb-6 text-pretty min-h-[2em] font-medium">
              <TypingEffect
                text="Driven by financial strategy. Powered by technology."
                speed={45}
                delay={800}
              />
            </p>
            <motion.p
              className="text-lg text-white/70 mb-10 max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              Accounting & Finance (ACF) student at SDSB, LUMS — passionate about financial decision-making and business strategy, backed by self-taught web development in Next.js and TypeScript.
            </motion.p>
          </header>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-tight">LUMS</span>
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-semibold">SDSB School</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-tight">ACF</span>
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-semibold">Intended Major</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-tight">CS</span>
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-semibold">Intended Minor</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight italic">Next.js & TS</span>
              <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-semibold">Self-Taught Dev</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <Button
              size="lg"
              className="font-medium bg-white text-black hover:bg-white/90 transition-all rounded-full px-8 shadow-lg shadow-white/10"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-medium border-white/20 text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>

        {/* Bouncing scroll down arrow */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/40 animate-bounce-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-balance">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <article>
                <h3 className="text-2xl font-semibold mb-6">
                  My Background & Vision
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  I’m a business student at LUMS Suleman Dawood School of Business (SDSB), with an intended major in Accounting & Finance (ACF). I’m drawn to the analytical and strategic side of business—understanding how financial decisions drive organizations forward—and I’m building my foundation in this direction through my coursework at LUMS.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Alongside my business studies, I’ve picked up computer science skills on my own, including web development with Next.js, TypeScript, and JavaScript. I plan to pursue this further as a minor, using it as a complementary skill set rather than a primary focus, since my core interest lies in finance and business strategy.
                </p>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg font-medium text-foreground/90">
                  I’m always open to connecting with peers, mentors, and professionals in finance and business.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Accounting & Finance",
                    "Business Strategy",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Financial Analytics",
                    "Web Development",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-1 rounded-full text-sm font-medium border-border/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="border-border/50 shadow-2xl shadow-black/5 dark:shadow-white/5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="pb-4 relative">
                  <CardTitle className="text-xl">Academic & Technical Focus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90">
                      University & School
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      LUMS — Suleman Dawood School of Business (SDSB)
                    </p>
                  </div>
                  <div className="h-[1px] bg-border/50" />
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90">Primary Focus (Major)</h4>
                    <p className="text-sm text-muted-foreground">
                      Accounting & Finance (ACF) • Corporate Strategy & Financial Analytics
                    </p>
                  </div>
                  <div className="h-[1px] bg-border/50" />
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground/90">Complementary Skill Set</h4>
                    <p className="text-sm text-muted-foreground">
                      Intended CS Minor • Self-taught Web Development (Next.js, TypeScript, JS)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* New Skills Section with progress bars */}
      <SkillsSection />

      {/* New Timeline Section */}
      <TimelineSection />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-balance">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GitHubStats />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-balance">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              I'm always excited to discuss technology, share ideas, or
              collaborate on interesting projects.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="flex items-center gap-2 btn-glow rounded-full px-8"
                asChild
              >
                <a href="mailto:fahadhayattiwana@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 btn-outline-hover rounded-full px-8"
                asChild
              >
                <a
                  href="https://github.com/fahadhtiwana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 btn-outline-hover rounded-full px-8"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/malik-fahad-hayat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Malik Fahad Hayat
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  "Technology is not just a tool it's the bridge to meaningful
                  impact."
                </p>
              </div>

              <div className="flex items-center gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/fahadhtiwana", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/malik-fahad-hayat/", label: "LinkedIn" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:fahadhayattiwana@gmail.com", label: "Email" }
                ].map((social) => (
                  <Button key={social.label} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Malik Fahad Hayat. Built with passion and purpose.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
