import Image from "next/image"
import Link from "next/link"

type Props = {
  username: string | null
  name: string | null
  avatar_url: string
  html_url: string
  bio: string | null
  blog: string | null
  location: string | null
  followers: number
  following: number
  public_repos: number | string | null
  public_gists: number | string | null
  created_at: Date
}

export default function ProfilePreview({
  username,
  name,
  avatar_url,
  html_url,
  bio,
  blog,
  location,
  followers,
  following,
  public_repos,
  public_gists,
  created_at,
}: Props) {

  const compact = (n:number)=>
    new Intl.NumberFormat("en-US",{notation:"compact"}).format(n)

  const joined = new Date(created_at).getFullYear()

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6 shadow-sm">

      {/* PROFILE STRIP */}
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">

        <Image
          src={avatar_url}
          alt="avatar"
          width={72}
          height={72}
          className="rounded-full border border-neutral-700"
        />

        <div className="flex-1 text-center sm:text-left space-y-2">

          <div>
            <h2 className="text-lg font-semibold text-white">
              {name ?? "The Octocat"}
            </h2>

            <p className="text-sm text-neutral-400">
              {username ? `@${username}` : "@octocat"}
            </p>
          </div>

          {bio && (
            <p className="text-sm text-neutral-300 max-w-xl">
              {bio}
            </p>
          )}

          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-neutral-500">

            {location && <span>📍 {location}</span>}
            {blog && <span className="text-blue-400">{blog}</span>}
            <span>Joined {joined}</span>

          </div>

        </div>

        <Link
  href={html_url}
  className="group inline-flex items-center gap-2 text-sm px-3 py-1.5 border border-neutral-700 rounded-md text-neutral-300
  hover:text-white hover:border-neutral-500 hover:shadow-[0_0_10px_rgba(255,255,255,0.08)]
  transition-all duration-200"
>
  View Profile
  <span className="transition-transform group-hover:translate-x-1">
    →
  </span>
</Link>

      </div>


      {/* STATS BAR */}
      <div className="flex flex-wrap justify-between gap-3">

        <Stat label="Repos" value={public_repos ?? 0} color="blue"/>
        <Stat label="Gists" value={public_gists ?? 0} color="purple"/>
        <Stat label="Followers" value={compact(followers)} color="emerald"/>
        <Stat label="Following" value={compact(following)} color="amber"/>

      </div>


      {/* REPOSITORIES HEADER */}
      <div className="flex items-center justify-between border-t border-neutral-800 pt-4">

        <p className="text-sm text-neutral-400">
          Top Repositories
        </p>

        <button className="text-xs px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-md hover:bg-neutral-700 transition">
          View All
        </button>

      </div>

    </div>
  )
}


function Stat({
  label,
  value,
  color
}:{label:string,value:string|number,color:"blue"|"purple"|"emerald"|"amber"}){

  const colors = {
    blue:"bg-blue-500/10 text-blue-400",
    purple:"bg-purple-500/10 text-purple-400",
    emerald:"bg-emerald-500/10 text-emerald-400",
    amber:"bg-amber-500/10 text-amber-400"
  }

  return(
    <div className={`flex flex-col items-center flex-1 rounded-lg p-3 ${colors[color]}`}>

      <span className="text-lg font-semibold">
        {value}
      </span>

      <span className="text-xs opacity-80">
        {label}
      </span>

    </div>
  )
}