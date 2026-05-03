"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="about"
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
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              AI Product Builder | Full Stack Developer
            </span>
            <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
              Prakash <span className="text-primary">Ramavath</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              I build **AI-powered, scalable web applications** that solve real-world problems. 
              Passionate about combining **full-stack development with AI** to create impactful products.
            </p>

            <div className="flex flex-wrap gap-5 items-center mb-12">
              <Link
                href="#projects"
                className="group px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-muted transition-all"
              >
                Let&apos;s Talk
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
