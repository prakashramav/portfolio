import { NextResponse } from "next/server";

export const revalidate = 300; // Cache for 5 minutes

export async function GET() {
  const stats = {
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
    }
  };

  // 1. Fetch GitHub Live Stats
  try {
    const ghRes = await fetch("https://api.github.com/users/prakashramav", {
      headers: { "User-Agent": "PrakashRamavath-Portfolio" },
      next: { revalidate: 300 }
    });
    if (ghRes.ok) {
      const gh = await ghRes.json();
      stats.github.publicRepos = gh.public_repos ?? stats.github.publicRepos;
      stats.github.followers = gh.followers ?? stats.github.followers;
    }
  } catch (err) {
    console.error("GitHub fetch fallback used:", err.message);
  }

  // 2. Fetch LeetCode Live Stats
  try {
    const lcRes = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/ArjunRathod01", {
      next: { revalidate: 300 }
    });
    if (lcRes.ok) {
      const lc = await lcRes.json();
      if (lc && lc.totalSolved) {
        stats.leetcode.totalSolved = lc.totalSolved;
        stats.leetcode.easySolved = lc.easySolved ?? stats.leetcode.easySolved;
        stats.leetcode.mediumSolved = lc.mediumSolved ?? stats.leetcode.mediumSolved;
        stats.leetcode.hardSolved = lc.hardSolved ?? stats.leetcode.hardSolved;
        stats.leetcode.ranking = lc.ranking ? Number(lc.ranking).toLocaleString() : stats.leetcode.ranking;
      }
    }
  } catch (err) {
    console.error("LeetCode fetch fallback used:", err.message);
  }

  // 3. Fetch CodeChef Live Stats
  try {
    const ccRes = await fetch("https://www.codechef.com/users/ms240410700098", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      next: { revalidate: 300 }
    });
    if (ccRes.ok) {
      const ccHtml = await ccRes.text();
      const leagueMatch = ccHtml.match(/alt="([^"]+League)"/i);
      if (leagueMatch) {
        stats.codechef.league = leagueMatch[1];
      }
      const ratingMatch = ccHtml.match(/<div class="rating-number">([^<]+)<\/div>/);
      if (ratingMatch && ratingMatch[1] && !ratingMatch[1].includes("?")) {
        stats.codechef.rating = ratingMatch[1];
      }
    }
  } catch (err) {
    console.error("CodeChef fetch fallback used:", err.message);
  }

  // 4. Fetch GeeksforGeeks Live Stats
  try {
    const gfgRes = await fetch("https://www.geeksforgeeks.org/profile/ramavama78", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      next: { revalidate: 300 }
    });
    if (gfgRes.ok) {
      const gfgHtml = await gfgRes.text();
      const solvedMatch = gfgHtml.match(/total_problems_solved\\?":\s*([0-9]+)/i);
      if (solvedMatch) {
        stats.geeksforgeeks.problemsSolved = parseInt(solvedMatch[1], 10);
      }
      const scoreMatch = gfgHtml.match(/score\\?":\s*([0-9]+)/i);
      if (scoreMatch) {
        stats.geeksforgeeks.score = parseInt(scoreMatch[1], 10);
      }
    }
  } catch (err) {
    console.error("GeeksforGeeks fetch fallback used:", err.message);
  }

  return NextResponse.json(stats);
}
