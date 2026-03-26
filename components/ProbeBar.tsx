import { SiGithub } from '@icons-pack/react-simple-icons';
export default function ProbeBar(){
    return (
        <form action="">
            <div className="mt-10 flex w-full max-w-xl gap-3">
          <input
            type="text"
            placeholder="Enter GitHub username"
            className="flex-1 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-neutral-600"
          />
          <button className="px-6 py-3 rounded-lg bg-white text-black font-medium flex items-center justify-center">
            <SiGithub className='w-10 h-5'/>Probe
          </button>
        </div>
        </form>
    )
}