import Image from "next/image"
import Link from "next/link"
type Props = {
  username: string | null,
  name: string | null,
  avatar_url: string,
  html_url:string,
  bio:string | null,
  blog:string | null,
  location:string | null,
  followers:number,
  following:number,
  public_repos:number | string | null,
  public_gists:number | string | null,
  created_at:Date

}

export default function ProfilePreview({username,name,avatar_url,html_url,bio,blog,location,followers,following,public_repos,public_gists,created_at}:Props) {
  return (
    <div className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 rounded-xl p-7 mt-5">

      {/* Profile Header */}
      <div className="flex items-start justify-between my-6">

        <div className="flex items-center gap-4">
          <Image
            src={avatar_url}
            alt="profile image"
            className="rounded-full"
            height={"64"}
            width={"64"}
          />

          <div>
            <h2 className="text-xl font-semibold">{name?name:"The Octocat"}</h2>
            <p className="text-sm text-neutral-400">{username?"@"+username:"The Octocat"}</p>

            
            {bio && <p className="text-sm text-neutral-400 mt-1">
              {bio}
            </p>}
          </div>
        </div>

        <Link href={html_url} className="px-4 py-2 text-sm bg-neutral-800 rounded-lg border border-neutral-700 hover:bg-neutral-700">
          View Profile
        </Link>

      </div>


      {/* Metadata */}
      {/* <div className="flex justify-between items-end md:justify-center gap-6 text-sm text-neutral-400 mb-6"> */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400 mb-6">
        {location?<p>{location}</p>:<p>Not Available</p>}
        {blog?<p>{blog}</p>:<p>Not Available</p>}
        {new Date(created_at).getFullYear()}
      </div>


      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Repositories</p>
    <p className="text-xl font-semibold mt-1">{public_repos?public_repos:0}</p>
  </div>

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Gists</p>
    <p className="text-xl font-semibold mt-1">{public_gists?public_gists:0}</p>
  </div>

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Followers</p>
    <p className="text-xl font-semibold mt-1">{new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1
}).format(followers)}</p>
  </div>

  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
    <p className="text-xs text-neutral-500">Following</p>
    <p className="text-xl font-semibold mt-1">{new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1
}).format(following)}</p>
  </div>

</div>


      {/* Language usage */}
      {/* <div className="mb-8">

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

      </div> */}


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