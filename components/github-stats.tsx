"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Calendar, ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

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
      <Card className="md:col-span-2 lg:col-span-3 mb-8">
        <CardHeader>
          <CardTitle className="font-serif flex items-center gap-2">
            <Github className="w-5 h-5" />
            GitHub Activity
          </CardTitle>
          <CardDescription>Real-time statistics from @fahadhtiwana</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{data.stats.totalRepos}</div>
              <div className="text-sm text-muted-foreground">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{data.stats.totalStars}</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{data.user.followers}</div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{data.user.following}</div>
              <div className="text-sm text-muted-foreground">Following</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Repository Cards */}
      {data.repositories.map((repo) => (
        <Card key={repo.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <CardTitle className="font-serif text-lg">{repo.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
            <CardDescription className="line-clamp-2">{repo.description || "No description available"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary">{repo.language}</Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                Updated {formatDate(repo.updated_at)}
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Repository
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* View All Repositories Card */}
      <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader>
          <CardTitle className="font-serif">View All Projects</CardTitle>
          <CardDescription>Explore my complete GitHub profile</CardDescription>
        </CardHeader>
        <CardContent>
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
          <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
            <a href="https://github.com/fahadhtiwana" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              @fahadhtiwana
            </a>
          </Button>
        </CardContent>
      </Card>
    </>
  )
}
