'use client'

import { useState } from 'react'
import ProbeBar from './ProbeBar'
import UserSearchCard from './UserSearchCard'

export default function SearchManager() {
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col items-center w-full">
      {/* Pass a custom handler to ProbeBar */}
      <ProbeBar onSearchResult={(data) => setUserData(data)} setIsSearching={setLoading} />

      {loading && <p className="mt-4 text-neutral-500 animate-pulse">Probing GitHub...</p>}

      {userData && !userData.error && (
        <UserSearchCard
          username={userData.login}
          name={userData.name}
          avatar={userData.avatar}
          repos={userData.repos}
        />
      )}
      
      {userData?.error && <p className="mt-4 text-red-400">{userData.error}</p>}
    </div>
  )
}