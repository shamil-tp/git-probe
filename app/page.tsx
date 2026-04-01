// import Image from "next/image";
// <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
import SearchManager from "@/components/SearchManager"
// import ProfilePreview from "@/components/ProfilePreview"
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">

      {/* Navbar */}
      


      {/* Hero */}
      <section className="flex flex-col items-center justify-center border-4 border-blue-200 text-center h-screen search-section">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Probe GitHub Profiles
          <span className="text-neutral-400 block mt-2">
            Instantly
          </span>
        </h1>

        <p className="text-neutral-400 mt-6 max-w-xl text-lg">
          Enter any GitHub username and GitProbe analyzes repositories,
          stars, languages, and developer activity in seconds.
        </p>
        <SearchManager/>
       
      </section>


      {/* Features */}
      <section
        id="features"
        className="px-8 py-24 border-t border-neutral-900"
      >
        <h2 className="text-3xl font-semibold text-center mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="font-semibold text-lg mb-2">
              Profile Insights
            </h3>
            <p className="text-neutral-400 text-sm">
              View repository counts, followers, stars, and developer
              profile statistics instantly.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="font-semibold text-lg mb-2">
              Repository Analysis
            </h3>
            <p className="text-neutral-400 text-sm">
              Inspect repositories including stars, forks, and
              language usage.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
            <h3 className="font-semibold text-lg mb-2">
              Fast & Lightweight
            </h3>
            <p className="text-neutral-400 text-sm">
              Built with Next.js and optimized for fast
              profile exploration.
            </p>
          </div>

        </div>
      </section>


      {/* How it works */}
      <section
        id="how"
        className="px-8 py-24 border-t border-neutral-900"
      >
        <h2 className="text-3xl font-semibold text-center mb-16">
          How it Works
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Enter Username
            </h3>
            <p className="text-neutral-400 text-sm">
              Provide any public GitHub username.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Fetch Data
            </h3>
            <p className="text-neutral-400 text-sm">
              GitProbe retrieves profile data using GitHub APIs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Analyze
            </h3>
            <p className="text-neutral-400 text-sm">
              Get structured insights about repositories,
              stars, and languages.
            </p>
          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-neutral-900 py-10 text-center text-sm text-neutral-500">
        GitProbe — Built with Next.js
      </footer>

    </main>
  );
}