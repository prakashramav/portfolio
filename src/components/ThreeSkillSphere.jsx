"use client"

import React, { useRef, useEffect, useState, useMemo } from "react"
import * as THREE from "three"

// Flattened list of skills with tier metadata for color-coding
const allSkills = [
  // Agentic AI
  { name: "LangGraph", tier: "agentic", color: "#818cf8" },
  { name: "MCP Protocol", tier: "agentic", color: "#818cf8" },
  { name: "Self-Healing Loops", tier: "agentic", color: "#818cf8" },
  { name: "HITL Gates", tier: "agentic", color: "#818cf8" },
  { name: "Guardrails", tier: "agentic", color: "#818cf8" },
  { name: "Docker Sandboxes", tier: "agentic", color: "#818cf8" },
  { name: "Agent Benchmarks", tier: "agentic", color: "#818cf8" },
  { name: "Circuit Breakers", tier: "agentic", color: "#818cf8" },
  // GenAI & LLMs
  { name: "Hybrid RAG", tier: "genai", color: "#c084fc" },
  { name: "pgvector", tier: "genai", color: "#c084fc" },
  { name: "ChromaDB", tier: "genai", color: "#c084fc" },
  { name: "Google Gemini", tier: "genai", color: "#c084fc" },
  { name: "AST Chunking", tier: "genai", color: "#c084fc" },
  { name: "RRF Fusion", tier: "genai", color: "#c084fc" },
  { name: "Cross-Encoder", tier: "genai", color: "#c084fc" },
  { name: "Query Planner", tier: "genai", color: "#c084fc" },
  { name: "Pydantic", tier: "genai", color: "#c084fc" },
  // Backend & Full-Stack (featuring Node.js & Express.js)
  { name: "Node.js", tier: "backend", color: "#34d399", highlight: true },
  { name: "Express.js", tier: "backend", color: "#34d399", highlight: true },
  { name: "FastAPI", tier: "backend", color: "#34d399" },
  { name: "Python", tier: "backend", color: "#34d399" },
  { name: "Next.js 15", tier: "backend", color: "#34d399" },
  { name: "React 19", tier: "backend", color: "#34d399" },
  { name: "JavaScript ES6+", tier: "backend", color: "#34d399" },
  { name: "RESTful APIs", tier: "backend", color: "#34d399" },
  { name: "Tailwind CSS v4", tier: "backend", color: "#34d399" },
  { name: "SSE Streams", tier: "backend", color: "#34d399" },
  // Databases & Cloud
  { name: "PostgreSQL", tier: "infra", color: "#60a5fa" },
  { name: "Redis", tier: "infra", color: "#60a5fa" },
  { name: "MongoDB", tier: "infra", color: "#60a5fa" },
  { name: "Docker", tier: "infra", color: "#60a5fa" },
  { name: "SQLAlchemy", tier: "infra", color: "#60a5fa" },
  { name: "Prisma ORM", tier: "infra", color: "#60a5fa" },
  { name: "Linux & Bash", tier: "infra", color: "#60a5fa" },
  { name: "Prometheus", tier: "infra", color: "#60a5fa" },
  { name: "Git & CI/CD", tier: "infra", color: "#60a5fa" },
]

export default function ThreeSkillSphere() {
  const containerRef = useRef(null)
  const [activeSkill, setActiveSkill] = useState(null)
  const [positions, setPositions] = useState([])

  // Compute 3D Fibonacci sphere distribution points
  const points = useMemo(() => {
    const pts = []
    const total = allSkills.length
    const radius = 210

    for (let i = 0; i < total; i++) {
      const phi = Math.acos(-1 + (2 * i) / total)
      const theta = Math.sqrt(total * Math.PI) * phi

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)

      pts.push(new THREE.Vector3(x, y, z))
    }
    return pts
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene & Camera setup
    const scene = new THREE.Scene()
    const width = container.clientWidth || 600
    const height = container.clientHeight || 500
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.z = 480

    // WebGL Renderer for background orbital rings and core glow
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    container.appendChild(renderer.domElement)
    renderer.domElement.style.position = "absolute"
    renderer.domElement.style.inset = "0"
    renderer.domElement.style.pointerEvents = "none"

    // Group for 3D rotation
    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    // Glowing wireframe central core
    const coreGeo = new THREE.IcosahedronGeometry(75, 1)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    globeGroup.add(coreMesh)

    // Inner glowing nucleus
    const nucleusGeo = new THREE.SphereGeometry(30, 16, 16)
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.25,
    })
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat)
    globeGroup.add(nucleus)

    // Orbital ring
    const ringGeo = new THREE.RingGeometry(215, 218, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 3
    globeGroup.add(ringMesh)

    // Interaction variables
    let isDragging = false
    let prevMousePos = { x: 0, y: 0 }
    let rotSpeed = { x: 0.0015, y: 0.002 }
    let targetRotSpeed = { x: 0.0015, y: 0.002 }

    const onPointerDown = (e) => {
      isDragging = true
      prevMousePos = { x: e.clientX, y: e.clientY }
    }

    const onPointerMove = (e) => {
      if (!isDragging) return
      const deltaX = e.clientX - prevMousePos.x
      const deltaY = e.clientY - prevMousePos.y
      prevMousePos = { x: e.clientX, y: e.clientY }

      globeGroup.rotation.y += deltaX * 0.006
      globeGroup.rotation.x += deltaY * 0.006
      targetRotSpeed = { x: deltaY * 0.001, y: deltaX * 0.001 }
    }

    const onPointerUp = () => {
      isDragging = false
    }

    container.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    // Animation loop
    let animId
    let isVisible = true

    const obs = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    obs.observe(container)

    const projectedPos = new Array(points.length)

    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (!isVisible) return

      if (!isDragging) {
        // Smoothly decay rotational inertia back to gentle idle spin
        rotSpeed.x += (0.0012 - rotSpeed.x) * 0.05
        rotSpeed.y += (0.0022 - rotSpeed.y) * 0.05
        globeGroup.rotation.x += rotSpeed.x
        globeGroup.rotation.y += rotSpeed.y
      }

      coreMesh.rotation.y -= 0.003
      coreMesh.rotation.x += 0.002
      nucleus.rotation.y += 0.005

      // Project 3D points to 2D screen positions
      globeGroup.updateMatrixWorld()
      const halfW = width / 2
      const halfH = height / 2

      for (let i = 0; i < points.length; i++) {
        const p = points[i].clone().applyMatrix4(globeGroup.matrixWorld)
        const depth = p.z
        p.project(camera)

        const screenX = p.x * halfW + halfW
        const screenY = -(p.y * halfH) + halfH
        const scale = THREE.MathUtils.clamp((depth + 240) / 480, 0.65, 1.25)
        const opacity = THREE.MathUtils.clamp((depth + 220) / 440, 0.22, 1)
        const zIndex = Math.round((depth + 300) * 10)

        projectedPos[i] = {
          x: screenX,
          y: screenY,
          scale,
          opacity,
          zIndex,
          front: depth > -40,
        }
      }

      setPositions([...projectedPos])
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      obs.disconnect()
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", handleResize)
      container.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [points])

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* 3D Interactive Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[480px] sm:h-[540px] rounded-3xl bg-[#060a12]/80 border border-primary/20 overflow-hidden cursor-grab active:cursor-grabbing select-none shadow-2xl backdrop-blur-md"
      >
        {/* Ambient Overlay Hint */}
        <div className="absolute top-4 left-6 z-20 flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
            3D Interactive Skill Sphere &bull; Drag to Spin
          </span>
        </div>

        {/* Legend pills */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-center gap-2 pointer-events-none font-mono text-[10px]">
          <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
            &bull; Agentic AI
          </span>
          <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
            &bull; Gen-AI Systems
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
            &bull; Node.js &amp; Full-Stack
          </span>
          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
            &bull; Cloud &amp; Infra
          </span>
        </div>

        {/* Projected 3D Interactive HTML Badges */}
        {positions.map((pos, idx) => {
          if (!pos) return null
          const skill = allSkills[idx]
          if (!skill) return null

          const isHovered = activeSkill === skill.name
          const isNodeOrExpress = skill.highlight

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              style={{
                position: "absolute",
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `translate(-50%, -50%) scale(${isHovered ? pos.scale * 1.25 : pos.scale})`,
                opacity: isHovered ? 1 : pos.opacity,
                zIndex: isHovered ? 9999 : pos.zIndex,
                pointerEvents: pos.front ? "auto" : "none",
                transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
              }}
              className="will-change-transform cursor-pointer"
            >
              <div
                style={{
                  borderColor: isHovered || isNodeOrExpress ? skill.color : "rgba(255,255,255,0.15)",
                  backgroundColor: isHovered
                    ? "rgba(10, 15, 30, 0.95)"
                    : isNodeOrExpress
                    ? "rgba(16, 185, 129, 0.18)"
                    : "rgba(15, 23, 42, 0.75)",
                  boxShadow: isHovered
                    ? `0 0 25px ${skill.color}`
                    : isNodeOrExpress
                    ? "0 0 14px rgba(52, 211, 153, 0.4)"
                    : "0 2px 8px rgba(0,0,0,0.5)",
                }}
                className={`px-3 py-1 rounded-xl border text-[11px] sm:text-xs font-mono font-medium backdrop-blur-md whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                  isNodeOrExpress ? "font-bold ring-1 ring-emerald-400/40" : ""
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: skill.color }}
                />
                <span style={{ color: isHovered ? "#ffffff" : isNodeOrExpress ? "#a7f3d0" : "#e2e8f0" }}>
                  {skill.name}
                </span>
                {isNodeOrExpress && (
                  <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 ml-0.5">
                    Core
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
