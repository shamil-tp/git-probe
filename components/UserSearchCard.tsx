import Image from "next/image"

type Props = {
  username: string
  name?: string
  bio?: string
  avatar: string
  repos: number
  followers: number
  onViewAnalytics?: () => void
}

export default function UserSearchCard({
  username,
  name,
  bio,
  avatar,
  repos,
  followers,
  onViewAnalytics
}: Props) {
  return (
    <div className="max-w-xl mx-auto bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <Image
          src={avatar}
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div>
          <p className="font-medium">
            {name || username}
          </p>

          <p className="text-xs text-neutral-400">
            @{username}
          </p>

          {bio && (
            <p className="text-xs text-neutral-500 mt-1 max-w-[240px] truncate">
              {bio}
            </p>
          )}
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <div className="text-center text-sm">
          <p className="font-semibold">{repos}</p>
          <p className="text-xs text-neutral-500">repos</p>
        </div>

        <div className="text-center text-sm">
          <p className="font-semibold">{followers}</p>
          <p className="text-xs text-neutral-500">followers</p>
        </div>

        <button
          onClick={onViewAnalytics}
          className="px-4 py-2 text-xs bg-neutral-800 rounded-md border border-neutral-700 hover:bg-neutral-700"
        >
          View Analytics
        </button>

      </div>

    </div>
  )
}