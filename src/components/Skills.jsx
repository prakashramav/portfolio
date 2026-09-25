"use client"

import React from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, Sparkles, Terminal } from "lucide-react"

const skillTiers = [
  {
    tier: "Core / Production Stack",
    tagline: "What I reach for first & build full-stack systems with",
    icon: <Code className="w-5 h-5" />,
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    items: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "REST & SSE APIs"
    ],
  },
  {
    tier: "AI, RAG & Search Systems",
    tagline: "Vector retrieval, AST parsing, and multimodal extraction",
    icon: <Brain className="w-5 h-5" />,
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    items: [
      "Hybrid RAG (Dense + Sparse)",
      "pgvector & ChromaDB",
      "Gemini & Gemini Vision",
      "Tree-sitter AST",
      "RRF & Reranking",
      "LangChain",
      "scikit-learn"
    ],
  },
  {
    tier: "Databases & Infrastructure",
    tagline: "Storage, caching, containerization, and monitoring",
    icon: <Database className="w-5 h-5" />,
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    items: [
      "Docker",
      "Redis (Caching & Rate Limiting)",
      "SQLAlchemy & Pydantic",
      "Prometheus & Metrics",
      "MongoDB",
      "Git & Linux"
    ],
  },
  {
    tier: "Currently Exploring & Deepening",
    tagline: "Active engineering research & advanced architectures",
    icon: <Sparkles className="w-5 h-5" />,
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    items: [
      "LLM Evaluation (LLM-as-a-Judge)",
      "Graph RAG (NetworkX)",
      "Distributed Tracing",
      "Cross-Encoder Fine-Tuning"
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Terminal size={14} />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Engineering <span className="text-primary">Toolbox</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
          >
            Organized by real-world usage — from daily production drivers to specialized AI architectures and active areas of study.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillTiers.map((tierGroup, idx) => (
            <motion.div
              key={tierGroup.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-border hover:border-primary/40 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-muted text-primary">
                      {tierGroup.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-foreground">
                        {tierGroup.tier}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {tierGroup.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-4">
                  {tierGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-xl bg-muted/60 border border-border/60 text-xs sm:text-sm font-medium hover:border-primary/60 hover:text-foreground transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
