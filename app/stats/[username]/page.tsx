"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GitHubAdvancedStats({ params }: { params: Promise<{ username: string }> }) {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { username } = await params;
      analyzeUser(username);
    };
    getData();
  }, [params]);

  const analyzeUser = async (targetUser: string) => {
    setLoading(true);
    setError("");
    try {
      const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${targetUser}`),
        fetch(`https://api.github.com/users/${targetUser}/repos?per_page=100&sort=updated`)
      ]);

      if (!userRes.ok) throw new Error("User not found");
      const user = await userRes.json();
      const repos = await repoRes.json();

      // --- Advanced Analytics Logic ---
      const totalStars = repos.reduce((a: number, r: any) => a + r.stargazers_count, 0);
      const totalForks = repos.reduce((a: number, r: any) => a + r.forks_count, 0);
      const hasWiki = repos.filter((r: any) => r.has_wiki).length;
      const totalSize = repos.reduce((a: number, r: any) => a + r.size, 0);
      const openIssues = repos.reduce((a: number, r: any) => a + r.open_issues_count, 0);

      let persona = "Generalist";
      if (totalStars > 500) persona = "Community Leader";
      else if (repos.length > 50) persona = "Prolific Creator";
      else if (totalForks > totalStars) persona = "Utility Provider";

      const healthScore = repos.length > 0 
        ? Math.round(((totalStars * 2) + totalForks + (hasWiki * 5)) / repos.length) 
        : 0;

      const langMap: Record<string, number> = {};
      repos.forEach((r: any) => r.language && (langMap[r.language] = (langMap[r.language] || 0) + 1));
      
      const topLanguages = Object.entries(langMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4);

      setStats({
        profile: user,
        persona,
        healthScore,
        totalSize: (totalSize / 1024).toFixed(2),
        openIssues,
        diversityIndex: Object.keys(langMap).length,
        topLanguages
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="p-8 bg-black min-h-screen text-neutral-500 flex items-center justify-center">
      <div className="animate-pulse">Analyzing GitHub Profile...</div>
    </div>
  );

  return (
    <div className="p-8 bg-black min-h-screen text-white font-sans">
      {error && <p className="text-red-400 mb-6 px-2 text-center">⚠️ {error}</p>}

      {stats && (
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-700">
          
          {/* TOP SECTION: IDENTITY & CORE METRICS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Identity Card */}
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 flex flex-col items-center text-center">
              <Image
  src={stats.profile.avatar_url} 
  className="w-24 h-24 rounded-full border border-neutral-700 mb-4" 
  alt={`${stats.profile.login}'s avatar`} // Better for accessibility
  width={96}  // Matches w-24 (24 * 4px = 96px)
  height={96} // Matches h-24 (24 * 4px = 96px)
  priority    // Add this if the avatar is "above the fold" to load it faster
/>
              <h2 className="text-xl font-bold">{stats.profile.name || stats.profile.login}</h2>
              <p className="text-blue-400 text-sm font-medium mb-3">{stats.persona}</p>
              <p className="text-neutral-400 text-xs italic line-clamp-2">
                {stats.profile.bio || "No bio provided"}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <MetricCard title="Health Score" value={stats.healthScore} color="blue" />
              <MetricCard title="Languages" value={stats.diversityIndex} color="purple" />
              <MetricCard title="Storage" value={`${stats.totalSize}MB`} color="emerald" />
              <MetricCard title="Open Issues" value={stats.openIssues} color="amber" />
            </div>
          </div>

          {/* LANGUAGE ECOSYSTEM */}
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6">
              Language Ecosystem
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {stats.topLanguages.map(([lang, count]: any) => {
                const percentage = Math.round((count / stats.profile.public_repos) * 100);
                return (
                  <div key={lang} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-300 font-medium">{lang}</span>
                      <span className="text-neutral-500">{percentage}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

function MetricCard({ title, value, color }: { title: string; value: string | number; color: "blue" | "purple" | "emerald" | "amber" }) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };

  return (
    <div className={`p-6 rounded-xl border ${colors[color]} flex flex-col justify-center`}>
      <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}