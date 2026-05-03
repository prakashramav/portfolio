"use client"

import React from "react"
import { motion } from "framer-motion"
import { Layout, Server, Settings, Brain } from "lucide-react"

const skills = [
  {
    category: "AI & LLM",
    icon: <Brain className="w-6 h-6" />,
    items: ["Gemini AI", "OpenAI", "LangChain", "Numpy", "Pandas"],
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "HTML5"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Express", "Flask", "Prisma", "Python", "Java"],
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    category: "Database & Tools",
    icon: <Settings className="w-6 h-6" />,
    items: ["MongoDB", "PostgreSQL", "Vercel", "Render", "Firebase", "Supabase"],
    color: "bg-purple-500/10 text-purple-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of my tech stack and the tools I use to build intelligent, scalable applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-colors shadow-sm group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${skill.color} group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-6">{skill.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-muted text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
