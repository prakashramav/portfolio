"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background Mesh Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for SWE Internships &bull; 3rd-Year CS Student</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
              Prakash <span className="text-primary">Ramavath</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              <span className="text-foreground font-semibold">Full-stack developer &amp; Agentic AI builder</span> creating production-grade systems. Specializing in autonomous multi-agent workflows (LangGraph, MCP), Generative AI architectures, and high-throughput Python &amp; Next.js platforms.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <Link
                href="#projects"
                className="group px-7 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 text-sm"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="px-7 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-muted transition-all border border-border text-sm"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Github, href: "https://github.com/prakashramav", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/prakashramavath/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ramavathprakash83@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 bg-secondary rounded-xl text-muted-foreground hover:text-primary transition-colors border border-border"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
