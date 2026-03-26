import Image from "next/image"
export default function ProfilePreview({username}:{username:string | null}) {
  return (
    <div className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 rounded-xl p-7 mt-5">

      {/* Profile Header */}
      <div className="flex items-start justify-between my-6">

        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/583231"
            alt="profile image"
            className="rounded-full"
            height={"64"}
            width={"64"}
          />

          <div>
            <h2 className="text-xl font-semibold">{username?username:"The Octocat"}</h2>
            <p className="text-sm text-neutral-400">{username?"@"+username:"The Octocat"}</p>

            <p className="text-sm text-neutral-400 mt-1">
              Open source enthusiast • Developer
            </p>
          </div>
        </div>

        <button className="px-4 py-2 text-sm bg-neutral-800 rounded-lg border border-neutral-700 hover:bg-neutral-700">
          View Profile
        </button>

      </div>


      {/* Metadata */}
      {/* <div className="flex justify-between items-end md:justify-center gap-6 text-sm text-neutral-400 mb-6"> */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400 mb-6">
        <p>San Francisco</p>
        <p>github.blog</p>
        <p>Joined 2011</p>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Repositories</p>
    <p className="text-xl font-semibold mt-1">84</p>
  </div>

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Stars</p>
    <p className="text-xl font-semibold mt-1">12.4K</p>
  </div>

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Followers</p>
    <p className="text-xl font-semibold mt-1">3.1K</p>
  </div>

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Following</p>
    <p className="text-xl font-semibold mt-1">120</p>
  </div>

</div>


      {/* Language usage */}
      <div className="mb-8">

        <p className="text-sm text-neutral-400 mb-3">Top Languages</p>

        <div className="flex h-3 rounded-full overflow-hidden">

          <div className="bg-yellow-500 w-[40%]"></div>
          <div className="bg-blue-500 w-[25%]"></div>
          <div className="bg-green-500 w-[20%]"></div>
          <div className="bg-purple-500 w-[15%]"></div>

        </div>

        <div className="flex justify-between text-xs text-neutral-400 mt-2">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Go</span>
          <span>Rust</span>
        </div>

      </div>


      {/* Top repositories */}
      <div>

        <p className="text-sm text-neutral-400 mb-3">
          <button className="px-4 py-2 text-sm bg-neutral-800 rounded-lg border border-neutral-700 hover:bg-neutral-700">
          Top Repositories
        </button>
        </p>
      </div>

    </div>
  )
}