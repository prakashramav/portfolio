"use client"

import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Sparkles, Terminal, FileText, ArrowUpRight, Compass, ShieldCheck, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-28 bg-muted/10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Background */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <GraduationCap size={14} />
              <span>Background &amp; Philosophy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold font-heading mb-6"
            >
              Engineering with <span className="text-primary">First Principles</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
            >
              <p>
                I am a <span className="text-foreground font-semibold">third-year Computer Science undergraduate</span> who builds full-stack web applications and production-grade AI platforms. Rather than relying on black-box wrappers, I focus on the underlying engineering mechanics — parsing AST syntax trees, building hybrid dense/sparse retrieval engines, and implementing strict API schemas.
              </p>
              <p>
                My goal is to join a high-caliber engineering team as a <span className="text-foreground font-semibold">Software Engineering Intern</span> where I can contribute clean, tested code to distributed services, user-facing web applications, and intelligent systems.
              </p>
            </motion.div>

            {/* How I Engineer Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-background border border-border">
                <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 mb-3">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-sm font-bold font-heading mb-1 text-foreground">Production Hygiene</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pydantic schemas, automated test suites (24 tests), and Redis rate limiting.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border">
                <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-3">
                  <Zap size={18} />
                </div>
                <h4 className="text-sm font-bold font-heading mb-1 text-foreground">Grounded AI</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hallucination-resistant RAG with AST chunking, spatial grounding &amp; citations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background border border-border">
                <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400 mb-3">
                  <Compass size={18} />
                </div>
                <h4 className="text-sm font-bold font-heading mb-1 text-foreground">Fast Iteration</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Async FastAPI backends paired with high-polish Next.js &amp; Tailwind frontends.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Focus + Open Source Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently / Now Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-background border border-border shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Terminal size={15} />
                  <span>Currently / What I&apos;m Building</span>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <span className="text-foreground font-semibold block mb-1">
                    Graph-Augmented Code RAG
                  </span>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Benchmarking call-graph traversal with NetworkX vs dense embeddings for multi-hop code reasoning queries.
                  </p>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <span className="text-foreground font-semibold block mb-1">
                    Internship Search
                  </span>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Actively applying for Summer SWE / Full-Stack Internships (open to relocation or remote).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Connect & Profiles Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="text-primary w-5 h-5" />
                  <h4 className="font-bold font-heading text-foreground">Open Source &amp; Code</h4>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-primary/20 text-primary">
                  116 REPOS
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                Explore all open-source repositories, architectural prototypes, and problem-solving benchmarks.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/prakashramav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-primary text-white text-xs font-bold text-center hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-primary/25"
                >
                  <span>Explore GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://linkedin.com/in/prakashramavath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-muted transition-all border border-border"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
