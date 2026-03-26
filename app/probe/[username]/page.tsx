// import Image from "next/image";
// <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
// import ProbeBar from "@/components/ProbeBar";
import ProfilePreview from "@/components/ProfilePreview"
export default async function Probe({params}:{params:Promise<{username:string}>}) {
    const {username} = await params

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">

      {/* Navbar */}
      


      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 h-screen">

        <ProfilePreview username={username}/>

      </section>


      {/* Footer */}
      <footer className="border-t border-neutral-900 py-10 text-center text-sm text-neutral-500">
        GitProbe — Built with Next.js
      </footer>

    </main>
  );
}