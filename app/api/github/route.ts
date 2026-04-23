import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = "fahadhtiwana"

    // Fetch user profile
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-Website",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data")
    }

    const userData = await userResponse.json()

    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-Website",
      },
      next: { revalidate: 3600 },
    })

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch repositories")
    }

    const reposData = await reposResponse.json()

    // Calculate total stars and forks
    const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0)
    const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0)

    // Get languages for each repo
    const reposWithLanguages = await Promise.all(
      reposData.slice(0, 6).map(async (repo: any) => {
        try {
          const langResponse = await fetch(repo.languages_url, {
            headers: {
              Accept: "application/vnd.github.v3+json",
              "User-Agent": "Portfolio-Website",
            },
            next: { revalidate: 3600 },
          })

          const languages = langResponse.ok ? await langResponse.json() : {}
          const primaryLanguage = Object.keys(languages)[0] || repo.language || "Unknown"

          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: primaryLanguage,
            updated_at: repo.updated_at,
            created_at: repo.created_at,
          }
        } catch (error) {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language || "Unknown",
            updated_at: repo.updated_at,
            created_at: repo.created_at,
          }
        }
      }),
    )

    return NextResponse.json({
      user: {
        login: userData.login,
        name: userData.name,
        bio: userData.bio,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        avatar_url: userData.avatar_url,
      },
      repositories: reposWithLanguages,
      stats: {
        totalStars,
        totalForks,
        totalRepos: userData.public_repos,
      },
    })
  } catch (error) {
    console.error("GitHub API Error:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}
