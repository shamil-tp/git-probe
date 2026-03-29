import RepoFilter from "@/components/RepoFilter"
import Image from "next/image"
import Link from "next/link"

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

async function getRepos(
  username: string,
  page: number,
  perPage: number,
  sort: string
): Promise<Repo[]> {

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}&sort=${sort}`,
    { cache: "no-store" }
  )

  if (!res.ok) throw new Error("Failed to fetch repos")

  return res.json()
}

export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{ username: string }>
  searchParams: { page?: string; sort?: string }
}) {

  const { username } = await params
  const page = Number(searchParams.page) || 1
  const sort = searchParams.sort || "updated"
  const perPage = 9

  const userRes = await fetch(`https://api.github.com/users/${username}`)

  if (!userRes.ok)
    return (
      <div className="text-red-500 text-3xl flex justify-center items-center min-h-screen">
        User not found ..
      </div>
    )

  const user = await userRes.json()

  const repos = await getRepos(username, page, perPage, sort)

  const totalPages = Math.ceil(user.public_repos / perPage)

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10">

      {/* Profile */}
      <div className="flex items-center gap-6 mb-10">

        <Image
          src={user.avatar_url}
          alt={user.login}
          width={80}
          height={80}
          className="rounded-full border border-neutral-800"
        />

        <div>
          <h1 className="text-3xl font-bold">{user.login}</h1>
          <p className="text-neutral-400">
            {user.public_repos} Public Repositories
          </p>
        </div>

      </div>

      {/* Sort */}
      <div className="mb-6 flex gap-4">

        <Link
          href={`?sort=updated&page=1`}
          className="px-3 py-1 border border-neutral-700 rounded hover:border-white"
        >
          Updated
        </Link>

        <Link
          href={`?sort=created&page=1`}
          className="px-3 py-1 border border-neutral-700 rounded hover:border-white"
        >
          Created
        </Link>

        <Link
          href={`?sort=stars&page=1`}
          className="px-3 py-1 border border-neutral-700 rounded hover:border-white"
        >
          Stars
        </Link>

      </div>

      {/* Filter + Grid */}
      <RepoFilter repos={repos} />

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-10">

        {page > 1 && (
          <Link
            href={`?page=${page - 1}&sort=${sort}`}
            className="px-4 py-2 border border-neutral-700 rounded hover:border-white"
          >
            Previous
          </Link>
        )}

        <span className="text-neutral-400">
          Page {page} / {totalPages}
        </span>

        {page < totalPages && (
          <Link
            href={`?page=${page + 1}&sort=${sort}`}
            className="px-4 py-2 border border-neutral-700 rounded hover:border-white"
          >
            Next
          </Link>
        )}

      </div>

    </main>
  )
}