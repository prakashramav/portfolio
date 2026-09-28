"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, ArrowUpRight, Github, Trophy } from "lucide-react"
import Card3D from "./Card3D"

export default function CodingProfiles() {
  const [stats, setStats] = useState({
    github: {
      username: "prakashramav",
      publicRepos: 120,
      followers: 0,
      flagshipSystems: 8,
      status: "Live"
    },
    leetcode: {
      username: "ArjunRathod01",
      totalSolved: 143,
      easySolved: 66,
      mediumSolved: 68,
      hardSolved: 9,
      ranking: "1,221,819",
      status: "Live"
    },
    codechef: {
      username: "ms240410700098",
      name: "Ramavath Prakash",
      league: "Rookie League",
      status: "Active"
    },
    geeksforgeeks: {
      username: "ramavama78",
      name: "Ramavath Prakash",
      score: 11,
      problemsSolved: 5,
      status: "Active"
    },
    liveSynced: false
  })

  useEffect(() => {
    // Fetch live data across GitHub, LeetCode, CodeChef, and GeeksforGeeks
    fetch("/api/coding-stats")
      .then((res) => {
        if (!res.ok) throw new Error("Network error")
        return res.json()
      })
      .then((data) => {
        if (data) {
          setStats((prev) => ({
            ...prev,
            ...data,
            liveSynced: true
          }))
        }
      })
      .catch((err) => {
        console.warn("Using offline coding stats fallback:", err)
      })
  }, [])

  return (
    <section id="coding" className="py-28 bg-muted/15 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 font-mono"
          >
            <Trophy size={14} />
            <span>Problem Solving &amp; Algorithms</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Coding &amp; <span className="text-primary">DSA Profiles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
          >
            Live-synced metrics across competitive programming and open-source platforms with a strong focus on data structures, algorithms, and system architecture.
          </motion.p>
        </div>

        {/* Profiles Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LeetCode Feature Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-full"
          >
            <Card3D depth={8} className="p-7 md:p-8 rounded-3xl bg-background border border-border hover:border-primary/40 transition-all flex flex-col justify-between shadow-sm h-full">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-xl">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold font-heading">LeetCode</h3>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          @{stats.leetcode.username}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Primary Language: <span className="text-foreground font-semibold">Java</span> &bull; {stats.leetcode.mediumSolved} Mediums Solved
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Live
                    </span>
                    <a
                      href={`https://leetcode.com/u/${stats.leetcode.username}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-primary transition-colors border border-border"
                      aria-label={`View ${stats.leetcode.username} on LeetCode`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Total Solved Metric Callout */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono">
                  <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/60 text-center">
                    <span className="text-xs text-muted-foreground block mb-0.5">Total Solved</span>
                    <span className="text-2xl font-bold text-foreground">{stats.leetcode.totalSolved}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center">
                    <span className="text-xs text-emerald-400 block mb-0.5">Easy</span>
                    <span className="text-2xl font-bold text-emerald-400">{stats.leetcode.easySolved}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center">
                    <span className="text-xs text-amber-400 block mb-0.5">Medium</span>
                    <span className="text-2xl font-bold text-amber-400">{stats.leetcode.mediumSolved}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-center">
                    <span className="text-xs text-rose-400 block mb-0.5">Hard</span>
                    <span className="text-2xl font-bold text-rose-400">{stats.leetcode.hardSolved}</span>
                  </div>
                </div>

                {/* Solved Distribution Progress Bar */}
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground font-mono">
                    <span>Problem Distribution</span>
                    <span>{Math.round((stats.leetcode.mediumSolved / stats.leetcode.totalSolved) * 100)}% Mediums &bull; High Algorithmic Ratio</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-muted overflow-hidden flex">
                    <div
                      style={{ width: `${(stats.leetcode.easySolved / stats.leetcode.totalSolved) * 100}%` }}
                      className="bg-emerald-500 h-full"
                      title={`Easy: ${stats.leetcode.easySolved}`}
                    ></div>
                    <div
                      style={{ width: `${(stats.leetcode.mediumSolved / stats.leetcode.totalSolved) * 100}%` }}
                      className="bg-amber-500 h-full"
                      title={`Medium: ${stats.leetcode.mediumSolved}`}
                    ></div>
                    <div
                      style={{ width: `${(stats.leetcode.hardSolved / stats.leetcode.totalSolved) * 100}%` }}
                      className="bg-rose-500 h-full"
                      title={`Hard: ${stats.leetcode.hardSolved}`}
                    ></div>
                  </div>
                </div>

                {/* Core Strengths Topics */}
                <div className="space-y-2 text-xs">
                  <span className="font-semibold text-muted-foreground uppercase tracking-wider text-[11px] block">
                    Core Topic Focus
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Binary Trees & BST", "Dynamic Programming", "Two Pointers", "Depth-First Search", "Sliding Window", "Subsets & Backtracking"].map((topic) => (
                      <span key={topic} className="px-3 py-1 rounded-xl bg-muted/60 border border-border/60 text-muted-foreground text-xs font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">
                  Global Rank: #{stats.leetcode.ranking}
                </span>
                <a
                  href={`https://leetcode.com/u/${stats.leetcode.username}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  <span>Full LeetCode Profile</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Card3D>
          </motion.div>

          {/* GitHub & Competitive Profiles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* GitHub Activity Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1"
            >
              <Card3D depth={8} className="p-7 rounded-3xl bg-background border border-border hover:border-primary/40 transition-all flex flex-col justify-between shadow-sm h-full">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                        <Github size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold font-heading text-lg">GitHub Activity</h3>
                        <span className="text-xs text-muted-foreground font-mono">@{stats.github.username}</span>
                      </div>
                    </div>
                    <a
                      href={`https://github.com/${stats.github.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors border border-border"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-center">
                    <div className="p-3 rounded-2xl bg-muted/40 border border-border/60">
                      <span className="text-[11px] text-muted-foreground block">Public Repos</span>
                      <span className="text-xl font-bold text-foreground">{stats.github.publicRepos}</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-muted/40 border border-border/60">
                      <span className="text-[11px] text-muted-foreground block">Flagship Systems</span>
                      <span className="text-xl font-bold text-primary">{stats.github.flagshipSystems}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Consistent open-source builder focusing on autonomous AI agents, multi-agent workflows, FastAPI microservices, and modern Next.js platforms.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Synced &bull; {stats.github.publicRepos} Repos
                  </span>
                  <a
                    href={`https://github.com/${stats.github.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Explore Repos</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </Card3D>
            </motion.div>

            {/* Supporting Competitive Platforms: CodeChef & GeeksforGeeks */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* CodeChef */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="h-full"
              >
                <Card3D depth={6} className="p-5 rounded-3xl bg-background border border-border hover:border-amber-500/40 transition-all shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-900/10 border border-amber-900/20 text-amber-500 flex items-center justify-center font-bold text-base">
                        <Trophy size={18} />
                      </div>
                      <a
                        href={`https://www.codechef.com/users/${stats.codechef.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-amber-400 transition-colors border border-border"
                        aria-label="View CodeChef Profile"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h4 className="font-bold font-heading text-sm text-foreground">CodeChef</h4>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {stats.codechef.league}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono truncate">
                        @{stats.codechef.username}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>{stats.codechef.name}</span>
                    <span className="text-amber-400">Active</span>
                  </div>
                </Card3D>
              </motion.div>

              {/* GeeksforGeeks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-full"
              >
                <Card3D depth={6} className="p-5 rounded-3xl bg-background border border-border hover:border-emerald-500/40 transition-all shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base">
                        <Code2 size={18} />
                      </div>
                      <a
                        href={`https://www.geeksforgeeks.org/profile/${stats.geeksforgeeks.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-emerald-400 transition-colors border border-border"
                        aria-label="View GeeksforGeeks Profile"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h4 className="font-bold font-heading text-sm text-foreground">GeeksforGeeks</h4>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Score: {stats.geeksforgeeks.score}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono truncate">
                        @{stats.geeksforgeeks.username}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>Solved: {stats.geeksforgeeks.problemsSolved}</span>
                    <span className="text-emerald-400">Active</span>
                  </div>
                </Card3D>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
