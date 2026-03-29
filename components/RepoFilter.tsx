"use client"

import { useState } from "react"
import RepoListItem from "./RepoListItem"

export default function RepoFilter({ repos }: any) {

  const [query, setQuery] = useState("")

  const filteredRepos = repos.filter((repo: any) =>
    repo.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <input
        placeholder="Search repositories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 px-4 py-2 w-full bg-neutral-900 border border-neutral-700 rounded"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {filteredRepos.map((repo: any) => (
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
    </>
  )
}