"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Calendar, ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
  created_at: string
}

interface GitHubUser {
  login: string
  name: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
  avatar_url: string
}

interface GitHubData {
  user: GitHubUser
  repositories: GitHubRepo[]
  stats: {
    totalStars: number
    totalForks: number
    totalRepos: number
  }
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 border-yellow-400/30",
  TypeScript: "bg-blue-400/20 text-blue-700 dark:text-blue-400 border-blue-400/30",
  Python: "bg-green-400/20 text-green-700 dark:text-green-400 border-green-400/30",
  Java: "bg-orange-400/20 text-orange-700 dark:text-orange-400 border-orange-400/30",
  HTML: "bg-red-400/20 text-red-700 dark:text-red-400 border-red-400/30",
  CSS: "bg-purple-400/20 text-purple-700 dark:text-purple-400 border-purple-400/30",
  "C++": "bg-pink-400/20 text-pink-700 dark:text-pink-400 border-pink-400/30",
  C: "bg-gray-400/20 text-gray-700 dark:text-gray-400 border-gray-400/30",
  Shell: "bg-emerald-400/20 text-emerald-700 dark:text-emerald-400 border-emerald-400/30",
  Dart: "bg-cyan-400/20 text-cyan-700 dark:text-cyan-400 border-cyan-400/30",
}

const languageDots: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  Java: "bg-orange-500",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  "C++": "bg-pink-500",
  C: "bg-gray-500",
  Shell: "bg-emerald-500",
  Dart: "bg-cyan-500",
}

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch("/api/github")
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data")
        }
        const githubData = await response.json()
        setData(githubData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error || !data) {
    return (
      <Card className="col-span-full">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">{error || "Unable to load GitHub data"}</p>
        </CardContent>
      </Card>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  return (
    <>
      {/* GitHub Stats Overview */}
      <AnimatedSection className="md:col-span-2 lg:col-span-3 mb-8">
        <Card className="overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub Activity
            </CardTitle>
            <CardDescription>Real-time statistics from @fahadhtiwana</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: data.stats.totalRepos, label: "Repositories" },
                { value: data.stats.totalStars, label: "Total Stars" },
                { value: data.user.followers, label: "Followers" },
                { value: data.user.following, label: "Following" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Repository Cards */}
      {data.repositories.map((repo, index) => (
        <AnimatedSection key={repo.id} delay={index * 0.08}>
          <Card className="group card-hover-lift h-full flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardHeader className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="font-serif text-lg leading-tight">{repo.name}</CardTitle>
                <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0 ml-2">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-primary/70" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
              <CardDescription className="line-clamp-2 text-[0.85rem] leading-relaxed">
                {repo.description || "No description available"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                {repo.language ? (
                  <Badge
                    variant="outline"
                    className={`text-xs font-medium ${languageColors[repo.language] || "bg-muted text-muted-foreground"}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full mr-1.5 inline-block ${languageDots[repo.language] || "bg-muted-foreground"}`}
                    />
                    {repo.language}
                  </Badge>
                ) : (
                  <span />
                )}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  Updated {formatDate(repo.updated_at)}
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent btn-outline-hover" asChild>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Repository
                </a>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}

      {/* View All Repositories Card */}
      <AnimatedSection delay={data.repositories.length * 0.08}>
        <Card className="group card-hover-lift h-full flex flex-col overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <CardHeader>
            <CardTitle className="font-serif">View All Projects</CardTitle>
            <CardDescription>Explore my complete GitHub profile</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-end">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span>Member since</span>
                <span className="font-semibold">{formatDate(data.user.created_at)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total contributions</span>
                <span className="font-semibold">Growing daily</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full bg-transparent btn-outline-hover" asChild>
              <a href="https://github.com/fahadhtiwana" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                @fahadhtiwana
              </a>
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    </>
  )
}
