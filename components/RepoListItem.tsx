type Props = {
  name: string
  full_name: string
  html_url: string
  description: string | null
  created_at: Date
  updated_at: Date
  size: number
  stargazers_count: number
  language: string
  open_issues: number
  forks: number
}

export default function RepoListItem({
  name,
  full_name,
  html_url,
  description,
  created_at,
  updated_at,
  size,
  stargazers_count,
  language,
  open_issues,
  forks
}: Props) {

  return (
    <div className="group border border-neutral-800 rounded-xl p-5 bg-neutral-900/40 hover:border-blue-500/40 hover:shadow-[0_0_18px_rgba(59,130,246,0.25)] transition-all duration-300">

      {/* Repo Name */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>

        <a
          href={html_url}
          target="_blank"
          className="text-sm text-neutral-400 hover:text-blue-400 transition"
        >
          View Repo →
        </a>
      </div>

      {/* Full name */}
      <p className="text-xs text-neutral-500 mt-1">
        {full_name}
      </p>

      {/* Description */}
      <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
        {description ?? "No description provided."}
      </p>

      {/* Language */}
      {language && (
        <div className="mt-3">
          <span className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md">
            {language}
          </span>
        </div>
      )}

      {/* Stats */}
      <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mt-4">

        <span>⭐ {stargazers_count}</span>
        <span>🍴 {forks}</span>
        <span>🐞 {open_issues}</span>
        <span>📦 {(size / 1024).toFixed(2)} MB</span>

      </div>

      {/* Dates */}
      <div className="flex justify-between text-xs text-neutral-500 mt-4 border-t border-neutral-800 pt-3">

        <span>
          Created: {created_at.toLocaleDateString()}
        </span>

        <span>
          Updated: {updated_at.toLocaleDateString()}
        </span>

      </div>

    </div>
  )
}