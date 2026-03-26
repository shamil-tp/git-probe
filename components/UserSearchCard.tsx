import Image from "next/image"
import Link from "next/link"

type Props = {
  username: string
  name?: string
  avatar: string
  repos: number
}

export default function UserSearchCard({
  username,
  name,
  avatar,
  repos,
}: Props) {
  return (
    <Link href={`/probe/${username}`} className="max-w-xl mx-auto mt-5 flex items-center justify-between gap-3 bg-neutral-900 border border-neutral-800 rounded-lg px-5 py-4 hover:border-neutral-700 transition">

      {/* Left */}
      <div className="flex items-center gap-3">

        <Image
          src={avatar}
          alt="avatar"
          width={44}
          height={44}
          className="rounded-full"
        />

        <div className="leading-tight">
          <p className="text-sm font-medium">
            {name || username}
          </p>

          <p className="text-xs text-neutral-400">
            @{username}
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-md px-3 py-1.5">

        <p className="text-sm font-semibold">
          {repos}
        </p>

        <p className="text-xs text-neutral-500">
          repos
        </p>

      </div>

    </Link>
  )
}