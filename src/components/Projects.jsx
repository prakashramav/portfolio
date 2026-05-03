"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "ResumeAI – Intelligent Resume & Career Optimization",
    description: "Built an AI system to generate ATS-optimized resumes tailored to job descriptions. Implemented multi-step AI pipeline to improve accuracy and reduce hallucinations. Added keyword optimization & job matching to increase interview success rate.",
    tech: ["Next.js", "AI Pipeline", "LLMs", "Tailwind"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    links: { demo: "https://resumeaii.vercel.app/", repo: "https://github.com/prakashramav/ResumeAI" }
  },
  {
    title: "Interview-AI – Real-Time AI Interview Assistant",
    description: "Developed AI tool for mock interviews with real-time question generation. Supports technical & behavioral interview preparation. Built low-latency system for instant AI responses.",
    tech: ["Next.js", "Real-time AI", "LLMs", "Socket.io"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    links: { demo: "https://interviewaii-i.vercel.app/", repo: "https://github.com/prakashramav/Interview-AI" }
  },
  {
    title: "AI Growise – Smart Financial Assistant",
    description: "Created AI-powered system for financial tracking and smart recommendations. Generates personalized insights on spending, saving, and budgeting. Integrated real-time analytics and visualization dashboards.",
    tech: ["MERN Stack", "AI Insights", "Data Vis", "Express"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    links: { demo: "https://growise-ai-finance8.vercel.app/", repo: "https://github.com/prakashramav/growiseAI" }
  },
  {
    title: "Recruitment Portal (Multi-Role Application)",
    description: "Built platform with Applicant, Recruiter, and Admin roles. Implemented JWT authentication & role-based access control. Developed 20+ REST APIs for job and candidate management.",
    tech: ["MERN Stack", "JWT", "RBAC", "REST API"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    links: { demo: "https://recruiter-ashen.vercel.app/", repo: "https://github.com/prakashramav/recruiter" }
  },
  {
    title: "E-Commerce Website",
    description: "Developed full-stack e-commerce app with product, cart, and order flow. Integrated REST APIs and optimized async calls for better performance.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    links: { demo: "https://zentra.ccbp.tech/", repo: "https://github.com/prakashramav/e-comm" }
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-heading mb-4"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              A selection of my recent work, focusing on performance, usability, and AI integration.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/prakashramav"
            target="_blank"
            className="flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Projects <ArrowUpRight size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-background border border-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.links.repo}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-8 flex items-center justify-between pt-6 border-t border-border">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-bold group/link"
                  >
                    Live Preview 
                    <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
