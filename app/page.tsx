import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { GitHubStats } from "@/components/github-stats"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B612_20250811_111051_215.jpg-RfzRKYiyEiHpSFZOrG7CeUloynXVYB.jpeg"
            alt="Malik Fahad Hayat - Computer Science Student from Pakistan"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <header>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Malik Fahad Hayat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
              Smart enough to solve, bold enough to build.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Grade 12 Computer Science student from Pakistan, passionate about algorithms, problem-solving, and
              creating meaningful impact through technology.
            </p>
          </header>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Badge variant="secondary" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Khushab, Pakistan
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              UTC +5:00
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="font-medium" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="font-medium bg-transparent" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <article>
              <h3 className="font-serif text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a Grade 12 student with a deep passion for Computer Science, I'm currently building strong
                fundamentals in Core Java while preparing for the SAT. My curiosity drives me to explore algorithms,
                problem-solving techniques, and computational thinking.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I believe that technology is not just a tool it's the bridge to meaningful impact. My vision is to
                contribute meaningfully to the global tech ecosystem and create solutions that matter.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Core Java</Badge>
                <Badge>Python</Badge>
                <Badge>Algorithms</Badge>
                <Badge>Problem Solving</Badge>
                <Badge>Web Development</Badge>
              </div>
            </article>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="font-serif">Tech Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <p className="text-sm text-muted-foreground">
                    Core Java (learning), exploring Python & Web Development
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Focus Areas</h4>
                  <p className="text-sm text-muted-foreground">Algorithms, Problem-Solving, Software Development</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Philosophy</h4>
                  <p className="text-sm text-muted-foreground">Always eager to learn, innovate, and grow</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-balance">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GitHubStats />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-8 text-balance">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            I'm always excited to discuss technology, share ideas, or collaborate on interesting projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="flex items-center gap-2" asChild>
              <a href="mailto:fahadhayattiwana@gmail.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
              <a href="https://github.com/fahadhtiwana" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold mb-2">Malik Fahad Hayat</h3>
              <p className="text-sm text-muted-foreground">
                "Technology is not just a tool it's the bridge to meaningful impact."
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/fahadhtiwana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/malik-fahad-hayat-t-1b880031a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:fahadhayattiwana@gmail.com" aria-label="Send Email">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Malik Fahad Hayat. Built with passion and purpose.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
