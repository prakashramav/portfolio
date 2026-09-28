"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, ArrowRight, Linkedin, Github, Sparkles, Send } from "lucide-react"
import Card3D from "./Card3D"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("ramavathprakash83@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="py-28 bg-muted/20 relative overflow-hidden">
      {/* Ambient background glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 3D Interactive Card */}
        <Card3D depth={11} className="w-full">
          <div
            className="rounded-[3rem] bg-gradient-to-b from-background/95 via-background/80 to-[#070b14]/95 border border-primary/30 p-10 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 3D Holographic Edge Highlights & Ambient Grid */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/15 blur-[90px] rounded-full pointer-events-none" />
            
            {/* Subtle 3D Depth Grid Line */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
              style={{ transform: "translateZ(-10px)" }}
            />

            {/* Layer 1: Availability Status Badge */}
            <div
              style={{ transform: "translateZ(35px)" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering &amp; AI Roles</span>
            </div>

            {/* Layer 2: 3D Holographic Heading */}
            <h2
              style={{ transform: "translateZ(48px)" }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight"
            >
              Let&apos;s build something <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-300 to-emerald-400">
                extraordinary
              </span>{" "}
              together.
            </h2>

            {/* Layer 3: Narrative Text */}
            <p
              style={{ transform: "translateZ(30px)" }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              3rd-year Computer Science student actively seeking <span className="text-foreground font-semibold">Software Engineering &amp; Full-Stack Internships</span>. Whether you have an open position, an autonomous AI systems challenge, or want to review my code, let&apos;s talk!
            </p>

            {/* Layer 4: Interactive 3D Action Buttons */}
            <div
              style={{ transform: "translateZ(42px)" }}
              className="flex flex-wrap justify-center items-center gap-4 mb-10"
            >
              <a
                href="mailto:ramavathprakash83@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] text-sm group"
              >
                <Mail size={18} />
                <span>Send an Email</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/prakashramavath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-secondary/80 text-secondary-foreground font-bold rounded-2xl hover:bg-secondary transition-all duration-300 border border-border hover:border-primary/40 hover:scale-[1.03] text-sm group shadow-sm"
              >
                <Linkedin size={18} className="text-primary" />
                <span>Connect on LinkedIn</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 bg-muted/60 text-muted-foreground hover:text-foreground font-mono text-xs font-semibold rounded-2xl hover:bg-muted transition-all border border-border/80 hover:border-primary/30"
                title="Click to copy email address"
              >
                <Sparkles size={14} className="text-amber-400" />
                <span>{copied ? "✓ Copied to Clipboard!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Layer 5: Fast Contact & Social Links */}
            <div
              style={{ transform: "translateZ(24px)" }}
              className="pt-8 border-t border-border/60 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono text-muted-foreground"
            >
              <a
                href="https://github.com/prakashramav"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Github size={15} />
                <span>github.com/prakashramav</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prakashramavath/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <Linkedin size={15} />
                <span>linkedin.com/in/prakashramavath</span>
              </a>
              <span className="text-slate-400">
                ramavathprakash83@gmail.com
              </span>
            </div>

          </div>
        </Card3D>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Prakash Ramavath &bull; Full-Stack &amp; AI Systems Engineer</p>
        </footer>

      </div>
    </section>
  )
}
