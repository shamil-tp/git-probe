'use client'
import { SiGithub } from '@icons-pack/react-simple-icons';
import { searchUser } from '@/actions/searchUser';

interface ProbeBarProps {
  onSearchResult: (data: any) => void;
  setIsSearching: (val: boolean) => void;
}

export default function ProbeBar({ onSearchResult, setIsSearching }: ProbeBarProps) {
    async function handleSubmit(formData: FormData) {
        setIsSearching(true);
        const result = await searchUser(formData);
        onSearchResult(result);
        setIsSearching(false);
    }

    return (
        <form action={handleSubmit}> {/* Use the wrapper function here */}
            <div className="mt-10 flex w-[90vw] md:w-full flex-col md:flex-row max-w-xl gap-3">
                <input
                    type="text"
                    name="username"
                    required
                    placeholder="Enter GitHub username"
                    className="flex-1 w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-neutral-600"
                />
                <button type='submit' className="px-6 py-3 rounded-lg w-full md:w-auto bg-white text-black font-medium flex items-center justify-center">
                    <SiGithub className='w-10 h-5 mr-2'/>Probe
                </button>
            </div>
        </form>
    )
}
