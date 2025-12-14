import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

// ✨ PROFESSIONAL PORTFOLIO — Modern, Clean, Interactive
export default function Portfolio() {
  // Theme State
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Theme Change
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Navigation Links
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Professional Data
  const profile = {
    name: "Prakash Ramavath (Arjun)",
    role: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies.",
    bio: "I am a passionate software engineer specializing in the MERN stack. I build accessible, pixel-perfect, and performant web experiences. With a strong foundation in both frontend and backend development, I create seamless solutions that solve real-world problems.",
    social: {
      github: "https://github.com/prakashramav",
      linkedin: "https://www.linkedin.com/in/prakashramavath/",
      email: "ramavathprakash82@gmail.com",
      resume: "#"
    }
  };

  const skills = [
    { category: "Frontend", icon: <Code2 className="w-6 h-6" />, items: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"] },
    { category: "Backend", icon: <Terminal className="w-6 h-6" />, items: ["Node.js", "Express", "REST APIs", "Python", "Java"] },
    { category: "Database & Tools", icon: <Database className="w-6 h-6" />, items: ["MongoDB", "SQL", "Git", "GitHub", "VS Code"] },
  ];

  const projects = [
    {
      title: "GrowWise Financial Dashboard",
      description: "A comprehensive financial tracking system featuring interactive charts, income/expense management, and GST calculations.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      links: { demo: "https://group-15-financial-dash-board-eight.vercel.app/", repo: "https://github.com/TanishqBhosle/Group-15-Financial-DashBoard-" }
    },
    {
      title: "Job Portal Platform",
      description: "Full-featured recruitment platform with role-based access control, resume parsing, and application tracking.",
      tech: ["MERN Stack", "JWT", "Redux"],
      links: { demo: "https://recruiter-ashen.vercel.app/", repo: "https://github.com/prakashramav/recruiter" }
    },
    {
      title: "E-commerce Store",
      description: "Scalable online marketplace with secure checkout, inventory management, and an admin dashboard.",
      tech: ["React", "Express", "Stripe API"],
      links: { demo: "https://zentra.ccbp.tech/", repo: "https://github.com/prakashramav/e-comm" }
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"} font-sans selection:bg-indigo-500 selection:text-white`}>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${dark ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="text-indigo-600 dark:text-indigo-400">&lt;</span>
            {profile.name}
            <span className="text-indigo-600 dark:text-indigo-400">/&gt;</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className={`fixed inset-0 z-50 flex flex-col p-6 ${dark ? "bg-slate-950" : "bg-white"}`}
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-8 mt-10 text-2xl font-semibold text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* HERO */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 ml-1">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{profile.name}.</h1>
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              {profile.role}
            </h2>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
              {profile.tagline} {profile.bio}
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/20">
                Check out my work
              </a>
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="p-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors">
                <Github size={20} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="p-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-2xl font-bold mb-12"
          >
            <span className="text-indigo-600">01.</span> Skills & Technologies
            <span className="h-px bg-slate-300 dark:bg-slate-700 flex-1 max-w-[200px]"></span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl border ${dark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4 text-indigo-600 dark:text-indigo-400">
                  {skillGroup.icon}
                  <h4 className="font-semibold text-lg">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className={`text-sm px-3 py-1 rounded-full ${dark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-2xl font-bold mb-12"
          >
            <span className="text-indigo-600">02.</span> Projects
            <span className="h-px bg-slate-300 dark:bg-slate-700 flex-1 max-w-[200px]"></span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`h-full p-8 rounded-2xl transition-all duration-300 border ${dark ? "bg-slate-900 border-slate-800 group-hover:bg-slate-800/80" : "bg-white border-slate-200 group-hover:shadow-lg"} flex flex-col`}>

                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                      <ExternalLink size={24} />
                    </div>
                    <div className="flex gap-4 text-slate-500 dark:text-slate-400">
                      <a href={project.links.repo} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><Github size={20} /></a>
                      <a href={project.links.demo} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-3 text-xs font-mono text-slate-500 dark:text-slate-500">
                    {project.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-indigo-600 font-mono mb-4">03. What's Next?</h4>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <a href={profile.social.email} className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              <Mail size={18} />
              Say Hello
            </a>
          </motion.div>
        </section>

      </main>

      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-500">
        <p>Designed & Built by {profile.name}</p>
      </footer>

    </div>
  );
}
