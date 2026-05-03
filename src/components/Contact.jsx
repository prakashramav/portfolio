"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, ArrowRight, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-[3rem] glass p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
              <MessageSquare size={16} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
              Let&apos;s build something <span className="text-primary">extraordinary</span> together.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I&apos;m currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, I&apos;ll get back to you!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:ramavathprakash83@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 group"
              >
                <Mail size={20} />
                Say Hello via Email
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/prakashramavath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-secondary-foreground font-bold rounded-full hover:bg-muted transition-all border border-border group"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <a href="https://github.com/prakashramav" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/prakashramavath/" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="mailto:ramavathprakash83@gmail.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </motion.div>
        </div>
        
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prakash Ramavath. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
