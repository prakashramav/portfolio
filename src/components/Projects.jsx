"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight, Cpu, Layers, AlertCircle, CheckCircle2, Brain, Sparkles, Globe, Bot } from "lucide-react"
import Card3D from "@/components/Card3D"

const agenticProjects = [
  {
    id: "resolve-ai",
    title: "ResolveAI: Autonomous Customer Support & Resolution Engine",
    category: "Agentic AI / AI Agents",
    type: "agentic",
    tagline: "Multi-agent support system that resolves tickets end to end under strict guardrails",
    description: "Multi-agent support system that resolves tickets end to end (refunds, replacements, order checks) under strict guardrails: prompt-injection defense, IDOR protection, financial caps, PII redaction, and human-in-the-loop escalation. 49 automated tests and a 20-scenario evaluation benchmark.",
    tags: ["LangGraph", "FastAPI", "Next.js", "Multi-Agent", "Guardrails", "Docker"],
    tech: ["LangGraph", "FastAPI", "Next.js", "Multi-Agent", "Guardrails", "Docker"],
    image: "/projects/resolve-ai.png",
    problem: "Customer support workflows need automated execution (refunds, replacements, order checks), but raw LLMs risk prompt injection, unauthorized account access (IDOR), and unconstrained financial actions.",
    solution: "LangGraph-powered stateful multi-agent system orchestrating ticket triage, verification, and resolution with deterministic guardrails (PII redaction, financial limits) and human approval checkpoints.",
    architecture: "Multi-agent state graph with deterministic guardrails (prompt injection defense, IDOR protection, PII redaction, financial spending limits) and automated human-in-the-loop escalation.",
    terminalFile: "resolve_support_graph.py",
    terminalLines: [
      { num: "01", text: "graph = StateGraph(SupportTicketState).compile()", color: "text-emerald-400 font-semibold" },
      { num: "02", text: "guardrails.verify(prompt_injection=False, idor=False)", color: "text-rose-400" },
      { num: "03", text: "action = router.dispatch(cap=100, pii_redact=True)", color: "text-indigo-300" },
      { num: "04", text: "eval_benchmark: 20/20 passed • 49 tests green", color: "text-amber-300/90" }
    ],
    highlights: [
      "Multi-agent resolution pipeline executing end-to-end refunds, replacements, and order status inquiries",
      "Multi-layered defense: prompt-injection prevention, IDOR protection, and automated PII redaction",
      "Enforced financial caps and safety thresholds with automated human-in-the-loop escalation gates",
      "49 automated test suites and a comprehensive 20-scenario evaluation benchmark"
    ],
    learnings: [
      "Balancing deterministic safety guardrails with non-deterministic agent workflows without introducing latency penalties",
      "Structuring LangGraph human-in-the-loop interrupt states to preserve session consistency during manual escalation"
    ],
    links: { demo: "https://resolution-agent-u9bo.vercel.app/", repo: "https://github.com/prakashramav/resolution_agent" }
  },
  {
    id: "auto-dev-agent",
    title: "AutoDev-Agent: Autonomous AI Software Engineer",
    category: "Agentic AI / AI Agents",
    type: "agentic",
    tagline: "Autonomous coding agent with Docker execution sandboxing, test-driven self-healing, and PR creation",
    description: "Takes a GitHub repo and an issue, then plans, codes, tests in an isolated Docker sandbox, self-heals failing tests (up to 3 retries), reviews the diff for leaked secrets, and opens a Pull Request automatically.",
    tags: ["LangGraph", "Gemini", "Docker Sandbox", "FastAPI", "Next.js", "GitHub API"],
    tech: ["LangGraph", "Gemini", "Docker Sandbox", "FastAPI", "Next.js", "GitHub API"],
    image: "/projects/auto-dev-agent.png",
    problem: "Autonomous code generation without isolated execution environments risks destructive file mutations, infinite failure loops on broken tests, and committing leaked API keys or credentials directly into repositories.",
    solution: "LangGraph orchestration agent that analyzes issues, plans file changes, runs tests inside isolated Docker sandboxes, iterates through an automated self-healing loop, and reviews diffs before PR creation.",
    architecture: "LangGraph agent executing repository analysis, sandbox isolation in Docker, automated test execution, self-healing code iteration (up to 3 retries), secret auditing, and GitHub PR creation.",
    terminalFile: "autodev_sandbox_worker.py",
    terminalLines: [
      { num: "01", text: "sandbox = docker.create_isolated_sandbox(repo_id)", color: "text-cyan-400 font-semibold" },
      { num: "02", text: "agent.plan_and_patch(github_issue_context)", color: "text-slate-400" },
      { num: "03", text: "pytest.run() -> self_heal(max_retries=3) -> PASS", color: "text-emerald-400" },
      { num: "04", text: "secret_scan.clean() -> github.create_pull_request()", color: "text-indigo-300" }
    ],
    highlights: [
      "Autonomous issue-to-PR cycle: repository cloning, patch planning, and automated PR generation",
      "Isolated Docker container sandbox for safe code compilation, dependency resolution, and test execution",
      "Self-healing test runner with automated error diagnosis and up to 3 repair retry cycles",
      "Pre-commit security scanning auditing code diffs for leaked secrets and exposed API credentials"
    ],
    learnings: [
      "Constraining agent self-healing loops to prevent circular test regressions and runaway token consumption",
      "Isolating execution environments in Docker to prevent malicious or malformed code from affecting host systems"
    ],
    links: { demo: "https://auto-dev-agent.vercel.app/", repo: "https://github.com/prakashramav/AutoDev-Agent" }
  },
  {
    id: "enterprise-ops-agent",
    title: "EnterpriseOps Agent: Autonomous Operations Agent",
    category: "Agentic AI / AI Agents",
    type: "agentic",
    tagline: "Governed autonomous operations engine coordinating enterprise tools via Model Context Protocol (MCP)",
    description: "Turns one natural-language directive into a governed multi-step workflow across Drive, Gmail, Slack, Calendar and task tools via MCP. Includes RBAC, human approval gates, an emergency circuit breaker, a SHA-256 chained audit log, RAG over company docs, and an analytics dashboard.",
    tags: ["LangGraph", "MCP", "RAG", "pgvector", "RBAC", "FastAPI", "Next.js"],
    tech: ["LangGraph", "MCP", "RAG", "pgvector", "RBAC", "FastAPI", "Next.js"],
    image: "/projects/enterprise-ops-agent.png",
    problem: "Cross-platform enterprise task automation lacks centralized governance, verifiable auditability, role-based permission boundaries, and safety circuit breakers when executing high-impact write operations.",
    solution: "Model Context Protocol (MCP) tool integration layer governed by a LangGraph controller with pgvector semantic retrieval, RBAC authorization, SHA-256 hash-chained audit logging, and human approval gates.",
    architecture: "MCP tool server layer connecting Drive, Gmail, Slack, and Calendar, governed by a LangGraph controller, RBAC validation, SHA-256 chained audit logging, emergency circuit breaker, and company doc RAG.",
    terminalFile: "enterprise_mcp_governance.py",
    terminalLines: [
      { num: "01", text: "directive.parse() -> mcp.dispatch([Drive, Slack, Cal])", color: "text-amber-400 font-semibold" },
      { num: "02", text: "rbac.enforce(role=\"ops_admin\", circuit_breaker=ACTIVE)", color: "text-emerald-400" },
      { num: "03", text: "audit.append_sha256_chain(prev_hash, action_payload)", color: "text-indigo-300" },
      { num: "04", text: "pgvector_rag.query(company_docs) -> approval_gate()", color: "text-cyan-300" }
    ],
    highlights: [
      "Multi-step tool orchestration across Google Drive, Gmail, Slack, Calendar, and task management via MCP",
      "Enterprise governance: Role-Based Access Control (RBAC) and human-in-the-loop approval gates for destructive actions",
      "SHA-256 hash-chained immutable audit log providing tamper-evident tracking for every automated step",
      "Emergency circuit breaker mechanism to instantly halt agent execution across all integrated services",
      "Grounded pgvector RAG pipeline over internal company documentation with operational analytics dashboard"
    ],
    learnings: [
      "Standardizing disparate enterprise tool APIs into unified Model Context Protocol (MCP) server endpoints",
      "Implementing cryptographic hash-chaining to ensure tamper-proof audit trails for autonomous actions"
    ],
    links: { demo: "https://autonomous-operations-agent-ys6l.vercel.app/", repo: "https://github.com/prakashramav/Autonomous_Operations_Agent" }
  },
  {
    id: "deep-research-agent",
    title: "DeepResearch Agent",
    category: "Agentic AI / AI Agents",
    type: "agentic",
    tagline: "8-stage multi-agent research pipeline with parallel search, claim cross-checking, and cited export",
    description: "8-stage multi-agent research pipeline: plans sub-questions, searches the web in parallel, extracts and cross-checks claims, detects conflicting data, and produces a cited report with PDF/Markdown export. Every citation is audited against real sources.",
    tags: ["LangGraph", "Gemini", "Tavily", "PostgreSQL", "FastAPI", "Next.js"],
    tech: ["LangGraph", "Gemini", "Tavily", "PostgreSQL", "FastAPI", "Next.js"],
    image: "/projects/deep-research-agent.png",
    problem: "Single-turn LLM research generates superficial, generic summaries that miss conflicting perspectives, hallucinate source citations, and fail to cross-verify claims against real independent web sources.",
    solution: "8-stage multi-agent pipeline orchestrated with LangGraph: sub-question decomposition, parallel web search via Tavily, claim extraction, conflict detection, source auditing, and structured report synthesis.",
    architecture: "8-stage multi-agent pipeline orchestrated with LangGraph: topic decomposition, parallel Tavily web search, claim extraction, conflict and contradiction mapping, citation auditing against real sources, and PDF/Markdown export.",
    terminalFile: "deep_research_pipeline.py",
    terminalLines: [
      { num: "01", text: "stages = [Decompose, ParallelSearch, CrossCheck, Synthesis]", color: "text-purple-400 font-semibold" },
      { num: "02", text: "tavily_pool.parallel_search(sub_questions, depth=3)", color: "text-cyan-300" },
      { num: "03", text: "contradiction_detector.cross_check(extracted_claims)", color: "text-amber-300" },
      { num: "04", text: "audit_citations(100% grounded) -> export_pdf_markdown()", color: "text-emerald-400" }
    ],
    highlights: [
      "8-stage multi-agent pipeline orchestrating topic decomposition, evidence gathering, and synthesis",
      "Parallel web search execution querying multiple angles simultaneously with Tavily API",
      "Automated claim extraction and cross-checking to detect conflicting data across independent sources",
      "Full source auditing verifying that every cited statement directly maps to retrieved source material",
      "Editorial report generation with comprehensive references and one-click PDF and Markdown export"
    ],
    learnings: [
      "Coordinating concurrent sub-agent web retrieval while managing rate limits and deduplicating source corpora",
      "Designing algorithmic conflict detection between opposing empirical claims across disparate web sources"
    ],
    links: { demo: "https://deepsearch-agent-ng7h.vercel.app/", repo: "https://github.com/prakashramav/deepsearch_agent" }
  }
]

const flagshipProjects = [
  {
    id: "ai-eng",
    title: "AI Engineering Assistant (Developer Platform)",
    category: "Code Intelligence & DevTools",
    type: "genai",
    tagline: "RAG-driven codebase understanding, automated bug triage, and AST visualization",
    problem: "Naive text-chunking in code RAG breaks function boundaries, loses caller/callee context, and causes hallucinations on symbol references.",
    architecture: "Tree-sitter AST semantic parsing + hybrid retrieval combining ChromaDB dense vector search, exact symbol index, and NetworkX call graph traversal.",
    highlights: [
      "Tree-sitter AST-based code chunking for precise, hallucination-resistant retrieval instead of naive character splitting",
      "Hybrid RAG combining vector similarity + exact symbol matching + call graph traversal with clickable file/line citations",
      "Automated PR review with risk scoring, inline comments, and OSV API dependency vulnerability scanning",
      "Interactive architecture graph (React Flow) with real-time SSE indexing progress"
    ],
    tech: ["Next.js", "FastAPI", "Python", "Tree-sitter", "ChromaDB", "Google Gemini", "NetworkX", "React Flow"],
    links: { demo: "https://ai-engineering-assistent.vercel.app/", repo: "https://github.com/prakashramav/AI_Engineering_Assistent" }
  },
  {
    id: "docintel",
    title: "DocIntel — Multimodal Document Intelligence Platform",
    category: "Multimodal Vision AI",
    type: "genai",
    tagline: "Spatial document extraction with bounding-box grounding and human review workflow",
    problem: "Traditional OCR and unstructured LLM JSON generation lack spatial grounding, hallucinate table data, and produce unreliable outputs on complex invoices.",
    architecture: "Multimodal vision extraction pipeline using Gemini Vision with normalized spatial bounding boxes, field confidence scoring, and strict Pydantic schema validation.",
    highlights: [
      "Multimodal extraction with per-field confidence scores and normalized bounding boxes — click a field to inspect its visual source",
      "Strict Pydantic schema enforcement per document type (invoice, resume, receipt, contract) instead of unvalidated LLM output",
      "Human-in-the-loop review queue that auto-routes low-confidence fields with a full audit trail",
      "Editable table extraction with CSV export and grounded document Q&A drawer"
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "Gemini Vision", "Tailwind CSS"],
    links: { demo: "https://multimodel-ai-system.vercel.app/", repo: "https://github.com/prakashramav/multimodel_ai_system" }
  },
  {
    id: "synthesia",
    title: "Synthesia — AI Research Assistant",
    category: "Autonomous Information Retrieval",
    type: "genai",
    tagline: "Autonomous multi-source research engine with contradiction mapping and cited reports",
    problem: "Raw LLM prompts for broad research yield generic, chat-style summaries with unverified claims, zero source transparency, and missed contradictions.",
    architecture: "Multi-stage query planning decomposing topics into 3–6 targeted angles via Tavily/Serper, clustered via scikit-learn, and synthesized into cited editorial reports.",
    highlights: [
      "Query-planning stage decomposes topics into 3-6 targeted research angles instead of searching verbatim prompts",
      "Structured JSON synthesis (executive summary, findings, source comparison, contradiction mapping) rendered as an editorial report",
      "Real-time SSE progress streaming showing actual sub-queries and live sources being retrieved",
      "Grounded RAG follow-up Q&A strictly scoped to retrieved session sources"
    ],
    tech: ["Next.js", "FastAPI", "Google Gemini", "Tavily", "scikit-learn", "PostgreSQL"],
    links: { demo: "https://ai-research-assistant-topaz.vercel.app/", repo: "https://github.com/prakashramav/AI_Research-_Assistant" }
  },
  {
    id: "rag-asst",
    title: "Enterprise RAG Assistant",
    category: "Enterprise Distributed Systems",
    type: "genai",
    tagline: "Production-grade, multi-tenant RAG SaaS with hybrid search and LLM-as-a-judge evaluation",
    problem: "Enterprise RAG systems suffer from low recall on specific keywords, noisy embeddings, lack of tenant data isolation, and absent retrieval metrics.",
    architecture: "Multi-tenant RAG engine with PostgreSQL full-text sparse search + pgvector dense embeddings fused via Reciprocal Rank Fusion (RRF), cross-encoder reranking, and RBAC.",
    highlights: [
      "Hybrid retrieval: pgvector dense search + PostgreSQL sparse full-text search fused via RRF with cross-encoder reranking",
      "Multi-tenant data isolation and RBAC (Admin/Member/Viewer) enforced at database and API levels",
      "LLM-as-a-judge evaluation harness measuring Precision@K, Recall@K, MRR, and groundedness",
      "Production-hardened: Prometheus metrics, distributed trace IDs, Redis rate limiting, 24 automated tests"
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Google Gemini", "Docker"],
    links: { demo: "https://essistent-rag-assistant.vercel.app/", repo: "https://github.com/prakashramav/essistent_rag_assistent" }
  }
]

const webAndAiProjects = [
  {
    id: "resume-ai",
    title: "ResumeAI – Intelligent Career Optimization",
    type: "ai-integrated",
    category: "AI-Integrated Web App",
    tagline: "ATS optimization engine with multi-step LLM workflows and job matching",
    description: "Built an AI system to generate ATS-optimized resumes tailored to job descriptions. Implemented a multi-step AI pipeline with keyword optimization, skill-gap analysis, and tailored recommendations.",
    highlights: [
      "Multi-step prompt pipeline with keyword optimization algorithms",
      "Job-description matching scoring with skill-gap recommendations",
      "Full Next.js and PostgreSQL integration with Prisma ORM"
    ],
    tech: ["Next.js", "AI Pipeline", "LLMs", "PostgreSQL", "Tailwind CSS"],
    links: { demo: "https://resumeaii.vercel.app/", repo: "https://github.com/prakashramav/ResumeAI" }
  },
  {
    id: "interview-ai",
    title: "Interview-AI – Real-Time Mock Interview Platform",
    type: "ai-integrated",
    category: "AI-Integrated Web App",
    tagline: "Low-latency mock interview platform with live evaluation and rate limiting",
    description: "Developed an AI tool for mock interview simulations with real-time question generation, behavioral rubric scoring, and instant low-latency feedback using Google Gemini API.",
    highlights: [
      "Live mock interview question generation with Google Gemini API",
      "Integrated Clerk authentication and Arcjet middleware for rate limiting",
      "PostgreSQL and Prisma ORM backend architecture"
    ],
    tech: ["Next.js", "Real-time AI", "LLMs", "Prisma", "Clerk", "Arcjet"],
    links: { demo: "https://interviewaii-i.vercel.app/", repo: "https://github.com/prakashramav/Interview-AI" }
  },
  {
    id: "ai-growise",
    title: "AI Growise – Smart Financial Assistant",
    type: "ai-integrated",
    category: "AI-Integrated Web App",
    tagline: "Personal finance tracking with automated spending insights and budgeting",
    description: "Personal finance tracking system with automated spending categorization, AI-driven budgeting recommendations, and interactive real-time visualization dashboards.",
    highlights: [
      "AI-driven spending pattern recognition and budgeting insights",
      "Interactive data visualization dashboards for tracking cash flow",
      "Scalable REST API endpoints built with Express and MongoDB"
    ],
    tech: ["MERN Stack", "AI Insights", "Data Vis", "Express", "MongoDB"],
    links: { demo: "https://growise-ai-finance8.vercel.app/", repo: "https://github.com/prakashramav/growiseAI" }
  },
  {
    id: "recruiter",
    title: "Recruitment Portal (Multi-Role Platform)",
    type: "fullstack",
    category: "Full-Stack Web App",
    tagline: "Role-based hiring platform with Applicant, Recruiter, and Admin portals",
    description: "Full-stack hiring application featuring dedicated Applicant, Recruiter, and Admin portals. Integrated secure JWT authentication, role-based authorization, and 20+ REST API endpoints.",
    highlights: [
      "3-tier Role-Based Access Control (Applicant, Recruiter, Admin)",
      "Secure JWT authentication and session state management",
      "Over 20+ REST API endpoints for candidate tracking and job applications"
    ],
    tech: ["React.js", "Express.js", "MongoDB", "Node.js", "JWT", "RBAC"],
    links: { demo: "https://recruiter-ashen.vercel.app/", repo: "https://github.com/prakashramav/recruiter" }
  },
  {
    id: "e-comm",
    title: "E-Commerce Platform",
    type: "fullstack",
    category: "Full-Stack Web App",
    tagline: "Full-stack shopping application with cart state management and catalog APIs",
    description: "Full-stack store application with product catalogs, shopping cart state management, product filtering, and optimized REST API performance.",
    highlights: [
      "Client-side state management for cart, checkout, and inventory",
      "Optimized asynchronous database queries for product catalogs",
      "Modular component architecture with responsive layout"
    ],
    tech: ["React", "Express", "MongoDB", "Node.js", "REST API"],
    links: { demo: "https://zentra.ccbp.tech/", repo: "https://github.com/prakashramav/e-comm" }
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  // Filter definitions
  const filterTabs = [
    { id: "all", label: "All Projects", count: 13, icon: <Layers size={14} /> },
    { id: "agentic", label: "Agentic AI / AI Agents", count: 4, icon: <Bot size={14} /> },
    { id: "genai", label: "GenAI & Systems", count: 4, icon: <Brain size={14} /> },
    { id: "ai-integrated", label: "AI-Integrated Apps", count: 3, icon: <Sparkles size={14} /> },
    { id: "fullstack", label: "Full-Stack Web", count: 2, icon: <Globe size={14} /> },
  ]

  const showAgentic = activeFilter === "all" || activeFilter === "agentic"
  const showFlagship = activeFilter === "all" || activeFilter === "genai"
  const visibleSecondaryProjects = activeFilter === "all"
    ? webAndAiProjects
    : webAndAiProjects.filter((p) => p.type === activeFilter)

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              <Cpu size={14} />
              <span>Engineered Systems &amp; Web Applications</span>
            </div>
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
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              Filter through my production-grade GenAI platforms, AI-integrated workflows, and full-stack web applications.
            </motion.p>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/prakashramav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm md:text-base shrink-0"
          >
            All GitHub Repositories <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-14 p-1.5 rounded-2xl bg-muted/40 border border-border/80 w-fit">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* SECTION 0: Agentic AI / AI Agents (Rendered when 'all' or 'agentic' selected) */}
        {showAgentic && (
          <div className="mb-20">
            {activeFilter === "all" && (
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  Tier 1 &bull; Agentic AI &amp; Autonomous Systems
                </span>
                <div className="h-[1px] flex-1 bg-border/60"></div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-10">
              {agenticProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="h-full"
                >
                  <Card3D depth={9} className="group flex flex-col h-full bg-background border border-border hover:border-primary/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                    {/* System Architecture Visualization Terminal Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#070b12] border-b border-border p-5 flex flex-col justify-between font-mono text-xs">
                    {/* Window top bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        <span className="ml-2 text-[11px] text-muted-foreground/80">
                          {project.terminalFile}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
                        {project.category}
                      </span>
                    </div>

                    {/* Code/Architecture lines */}
                    <div className="my-auto py-2 space-y-2">
                      <div className="space-y-1.5 text-[11px] text-slate-300">
                        {project.terminalLines.map((line, lIdx) => (
                          <div key={lIdx} className={`${line.color} flex items-center gap-1.5`}>
                            <span className="text-slate-500">{line.num}</span>
                            <span>{line.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Window bottom status bar */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] text-muted-foreground">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>System Live &amp; Verified</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Github size={12} /> Code
                        </a>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1 font-bold text-primary"
                        >
                          <ExternalLink size={12} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-7 md:p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-1.5 mb-4 font-mono">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-6">
                      {project.tagline}
                    </p>

                    {/* Problem vs Architecture breakdown */}
                    <div className="space-y-3.5 mb-6 text-xs md:text-sm">
                      <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60">
                        <div className="flex items-center gap-1.5 font-semibold text-rose-400 mb-1 text-xs">
                          <AlertCircle size={14} />
                          <span>The Engineering Problem</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60">
                        <div className="flex items-center gap-1.5 font-semibold text-emerald-400 mb-1 text-xs">
                          <Layers size={14} />
                          <span>Architecture &amp; Solution</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2.5">
                        Key Highlights
                      </span>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What I Learned */}
                    {project.learnings && project.learnings.length > 0 && (
                      <div className="mb-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 block mb-2.5">
                          What I Learned
                        </span>
                        <ul className="space-y-2">
                          {project.learnings.map((l, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                              <Brain size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:underline group/link"
                      >
                        Live Preview
                        <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 1: Flagship GenAI Systems (Rendered when 'all' or 'genai' selected) */}
        {showFlagship && (
          <div className="mb-20">
            {activeFilter === "all" && (
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  Tier 2 &bull; Flagship GenAI Architectures
                </span>
                <div className="h-[1px] flex-1 bg-border/60"></div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-10">
              {flagshipProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="h-full"
                >
                  <Card3D depth={9} className="group flex flex-col h-full bg-background border border-border hover:border-primary/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                    {/* System Architecture Visualization Terminal Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#070b12] border-b border-border p-5 flex flex-col justify-between font-mono text-xs">
                    {/* Window top bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        <span className="ml-2 text-[11px] text-muted-foreground/80">
                          {idx === 0 && "ast_retrieval_engine.py"}
                          {idx === 1 && "multimodal_vision_pipeline.py"}
                          {idx === 2 && "autonomous_query_planner.py"}
                          {idx === 3 && "multi_tenant_rag_service.py"}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
                        {project.category}
                      </span>
                    </div>

                    {/* Code/Architecture lines */}
                    <div className="my-auto py-2 space-y-2">
                      {idx === 0 && (
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                            <span className="text-slate-500">01</span>
                            <span>tree = tree_sitter.parse(repo_ast)</span>
                          </div>
                          <div className="text-slate-400 flex items-center gap-1.5">
                            <span className="text-slate-500">02</span>
                            <span>call_graph = build_graph(tree.root) # NetworkX</span>
                          </div>
                          <div className="text-indigo-300 flex items-center gap-1.5">
                            <span className="text-slate-500">03</span>
                            <span>chunks = ast_chunker.split_by_scope()</span>
                          </div>
                          <div className="text-amber-300/90 flex items-center gap-1.5">
                            <span className="text-slate-500">04</span>
                            <span>hybrid_rag.search(q, symbol_index) -&gt; utils.py:42</span>
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="text-purple-400 font-semibold flex items-center gap-1.5">
                            <span className="text-slate-500">01</span>
                            <span>vision_res = gemini_15_flash.extract(doc_bytes)</span>
                          </div>
                          <div className="p-2 rounded bg-white/5 border border-white/10 space-y-1">
                            <div className="flex justify-between text-[10px]">
                              <span className="text-emerald-400 font-semibold">[bbox: 0.12, 0.44] Total Due: $4,920.00</span>
                              <span className="text-emerald-300">conf: 99.8%</span>
                            </div>
                            <div className="flex justify-between text-[10px]">
                              <span className="text-cyan-300">[bbox: 0.28, 0.65] Table: 6 line-items</span>
                              <span className="text-muted-foreground">CSV ready</span>
                            </div>
                          </div>
                          <div className="text-emerald-400 flex items-center gap-1.5">
                            <span className="text-slate-500">02</span>
                            <span>PydanticValidator.check(InvoiceSchema) -&gt; VALID</span>
                          </div>
                        </div>
                      )}

                      {idx === 2 && (
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                            <span className="text-slate-500">01</span>
                            <span>query_planner.decompose(topic) -&gt; 4 target angles</span>
                          </div>
                          <div className="space-y-1 text-[10px] pl-3 border-l border-white/20">
                            <div className="text-slate-300">&bull; Angle 1: Dense vs Sparse latency tradeoffs (4 sources)</div>
                            <div className="text-slate-300">&bull; Angle 2: Cross-encoder rerank compute overhead (6 sources)</div>
                            <div className="text-rose-400">&bull; Contradiction: Paper A (O(N)) vs Paper B (O(log N)) mapped</div>
                          </div>
                          <div className="text-indigo-300 text-[10px]">
                            <span>SSE Stream: 100% complete &bull; Cited Editorial Report Ready</span>
                          </div>
                        </div>
                      )}

                      {idx === 3 && (
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                            <span className="text-slate-500">01</span>
                            <span>Tenant: Org_492 (RBAC: Admin) &bull; Isolated Schema</span>
                          </div>
                          <div className="text-slate-300 text-[10px]">
                            <span>pgvector(dense) + pg_trgm(sparse) -&gt; RRF(k=60) -&gt; Cross-Encoder</span>
                          </div>
                          <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[10px]">
                            <span className="text-emerald-400 font-semibold">Precision@5: 0.94</span>
                            <span className="text-cyan-300 font-semibold">MRR: 0.91</span>
                            <span className="text-amber-300 font-semibold">Groundedness: 0.98</span>
                          </div>
                          <div className="text-slate-400 text-[10px]">
                            <span>Observability: Prometheus 200 OK (84ms) &bull; 24 tests passing</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Window bottom status bar */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] text-muted-foreground">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>System Live &amp; Verified</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Github size={12} /> Code
                        </a>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1 font-bold text-primary"
                        >
                          <ExternalLink size={12} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-7 md:p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-1.5 mb-4 font-mono">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-6">
                      {project.tagline}
                    </p>

                    {/* Problem vs Architecture breakdown */}
                    <div className="space-y-3.5 mb-6 text-xs md:text-sm">
                      <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60">
                        <div className="flex items-center gap-1.5 font-semibold text-rose-400 mb-1 text-xs">
                          <AlertCircle size={14} />
                          <span>The Engineering Problem</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60">
                        <div className="flex items-center gap-1.5 font-semibold text-emerald-400 mb-1 text-xs">
                          <Layers size={14} />
                          <span>Architecture &amp; Solution</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2.5">
                        Key Highlights
                      </span>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:underline group/link"
                      >
                        Live Preview
                        <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors"
                      >
                        <Github size={15} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      )}

        {/* SECTION 2: AI-Integrated and Full-Stack Web Applications */}
        {visibleSecondaryProjects.length > 0 && (
          <div>
            {activeFilter === "all" && (
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1 rounded-full bg-muted/60 border border-border">
                  Tier 3 &bull; AI-Integrated &amp; Full-Stack Applications
                </span>
                <div className="h-[1px] flex-1 bg-border/60"></div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleSecondaryProjects.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <Card3D depth={7} className="p-7 rounded-3xl bg-background border border-border flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5 group h-full">
                    <div>
                      {/* Header with category tag */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-muted text-primary border border-border">
                          {proj.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <a
                            href={proj.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`View ${proj.title} on GitHub`}
                          >
                            <Github size={15} />
                          </a>
                          <a
                            href={proj.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`View ${proj.title} live demo`}
                          >
                            <ExternalLink size={15} />
                          </a>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold font-heading mb-1.5 group-hover:text-primary transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-primary font-medium mb-4">
                        {proj.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                        {proj.tech.map((t) => (
                          <span key={t} className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Link Footer */}
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight size={14} />
                      </a>
                      <a
                        href={proj.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
