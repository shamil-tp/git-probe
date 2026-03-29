import RepoListItem from "@/components/RepoListItem"

type Repo = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  created_at: string
  updated_at: string
  size: number
  stargazers_count: number
  language: string
  open_issues: number
  forks: number
}

async function getRepos(username:string): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch repos")
  }

  return res.json()
}

export default async function Page({params}:{params:Promise<{username:string}>}) {
  const username=await params
  const repos = await getRepos(username)
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok)return <div className="text-red-600 text-3xl flex justify-center items-center">Error finding user</div>
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        Shamil's Repositories
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {repos.map(repo => (
          <RepoListItem
            key={repo.id}
            name={repo.name}
            full_name={repo.full_name}
            html_url={repo.html_url}
            description={repo.description}
            created_at={new Date(repo.created_at)}
            updated_at={new Date(repo.updated_at)}
            size={repo.size}
            stargazers_count={repo.stargazers_count}
            language={repo.language}
            open_issues={repo.open_issues}
            forks={repo.forks}
          />
        ))}

      </div>

    </main>
  )
}