"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, Terminal, Bot, Orbit, Grid } from "lucide-react"
import Card3D from "./Card3D"
import ThreeSkillSphere from "./ThreeSkillSphere"

const skillTiers = [
  {
    tier: "Agentic AI & AI Agents",
    tagline: "Autonomous multi-agent workflows, tool execution & governance",
    icon: <Bot className="w-5 h-5" />,
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    glowColor: "rgba(129, 140, 248, 0.15)",
    items: [
      "LangGraph (Stateful Multi-Agent Graphs)",
      "Model Context Protocol (MCP)",
      "Autonomous Self-Healing Loops",
      "Human-in-the-Loop Approval Gates",
      "Prompt-Injection & IDOR Guardrails",
      "PII Redaction & Financial Caps",
      "Docker Execution Sandboxes",
      "Multi-Agent Evaluation Benchmarks",
      "Emergency Circuit Breakers",
      "Chained SHA-256 Audit Trails"
    ],
  },
  {
    tier: "Generative AI & LLM Systems (Gen-AI)",
    tagline: "Hybrid RAG, multimodal vision, and semantic retrieval",
    icon: <Brain className="w-5 h-5" />,
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glowColor: "rgba(192, 132, 252, 0.15)",
    items: [
      "Hybrid RAG (Dense + Sparse Search)",
      "pgvector & ChromaDB",
      "Google Gemini & Gemini Vision",
      "Tree-sitter AST Code Chunking",
      "Reciprocal Rank Fusion (RRF)",
      "Cross-Encoder Reranking",
      "Parallel Query Decomposition",
      "LLM-as-a-Judge Evaluation",
      "Pydantic Schema Validation",
      "Citation Auditing & Verification"
    ],
  },
  {
    tier: "Backend & Production Full-Stack",
    tagline: "High-throughput Node.js & Python backend architectures, modern web",
    icon: <Code className="w-5 h-5" />,
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glowColor: "rgba(52, 211, 153, 0.15)",
    items: [
      "Node.js (Backend Runtime)",
      "Express.js (REST APIs)",
      "FastAPI (Async Python)",
      "Next.js 15 (App Router)",
      "React 19",
      "Python 3.12",
      "JavaScript (ES6+) & TypeScript",
      "RESTful APIs & Middleware",
      "Server-Sent Events (SSE)",
      "Tailwind CSS v4",
      "State Management",
      "Responsive UI Design"
    ],
  },
  {
    tier: "Databases, Cloud & Infrastructure",
    tagline: "Storage, isolated containerization, caching & observability",
    icon: <Database className="w-5 h-5" />,
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glowColor: "rgba(96, 165, 250, 0.15)",
    items: [
      "Docker Container Sandboxes",
      "PostgreSQL",
      "Redis (Caching & Rate Limiting)",
      "SQLAlchemy & Prisma ORM",
      "Role-Based Access Control (RBAC)",
      "Prometheus Metrics",
      "MongoDB",
      "Git & Linux",
      "GitHub REST & GraphQL API",
      "Turbopack & Vercel CI/CD"
    ],
  },
]

export default function Skills() {
  const [viewMode, setViewMode] = useState("cards") // 'cards' | 'sphere'

  return (
    <section id="skills" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 font-mono"
          >
            <Terminal size={14} />
            <span>Technical Capabilities</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            Engineering <span className="text-primary">Toolbox</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-8"
          >
            Organized across Agentic AI, Gen-AI architectures, Node.js &amp; Python backend systems, and modern cloud infrastructure.
          </motion.p>

          {/* 3D View Switcher Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center p-1.5 rounded-2xl bg-background/80 border border-border/80 shadow-md backdrop-blur-md"
          >
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                viewMode === "cards"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid size={15} />
              <span>3D Parallax Cards</span>
            </button>
            <button
              onClick={() => setViewMode("sphere")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                viewMode === "sphere"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Orbit size={15} />
              <span>3D Orbit Sphere</span>
            </button>
          </motion.div>
        </div>

        {/* View 1: 3D Interactive Orbit Sphere */}
        {viewMode === "sphere" && (
          <motion.div
            key="sphere-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <ThreeSkillSphere />
          </motion.div>
        )}

        {/* View 2: 3D Parallax Cards Grid (Adjusted balanced width max-w-5xl) */}
        {viewMode === "cards" && (
          <motion.div
            key="cards-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-6 items-stretch"
          >
            {skillTiers.map((tierGroup, idx) => (
              <motion.div
                key={tierGroup.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="h-full"
              >
                <Card3D depth={9} className="h-full rounded-3xl bg-background/90 border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between overflow-hidden">
                  <div className="p-7 flex flex-col justify-between h-full" style={{ transformStyle: "preserve-3d" }}>
                    
                    {/* Header with 3D elevation */}
                    <div style={{ transform: "translateZ(28px)" }} className="mb-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 rounded-2xl bg-muted text-primary border border-border/60 shadow-sm">
                          {tierGroup.icon}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold font-heading text-foreground">
                            {tierGroup.tier}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-snug">
                            {tierGroup.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="h-[1px] w-full bg-border/50 mt-3" />
                    </div>

                    {/* Skill Badges with 3D Pop-out Depth */}
                    <div
                      style={{ transform: "translateZ(20px)" }}
                      className="flex flex-wrap gap-2 pt-1"
                    >
                      {tierGroup.items.map((item) => {
                        const isNodeOrExpress = item.includes("Node.js") || item.includes("Express.js")
                        return (
                          <span
                            key={item}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default shadow-sm ${
                              isNodeOrExpress
                                ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-semibold ring-1 ring-emerald-500/30 hover:scale-105 hover:bg-emerald-500/25"
                                : "bg-muted/60 border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-muted hover:scale-105 hover:shadow-md"
                            }`}
                          >
                            {isNodeOrExpress ? `★ ${item}` : item}
                          </span>
                        )
                      })}
                    </div>

                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  )
}
