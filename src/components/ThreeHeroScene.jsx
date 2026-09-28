"use client"

import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { Bot, Sparkles, Orbit } from "lucide-react"

export default function ThreeHeroScene() {
  const mountRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const [fpsReady, setFpsReady] = useState(false)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    
    const width = container.clientWidth || 500
    const height = container.clientHeight || 500
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 7.5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 20) // Cyan
    pointLight1.position.set(4, 3, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 20) // Violet
    pointLight2.position.set(-4, -3, -3)
    scene.add(pointLight2)

    const pointLight3 = new THREE.PointLight(0x10b981, 2, 20) // Emerald
    pointLight3.position.set(0, 4, -2)
    scene.add(pointLight3)

    // Main 3D Nexus Root Group
    const nexusGroup = new THREE.Group()
    scene.add(nexusGroup)

    // 1. Core Icosahedron Solid Mesh
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 2)
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1128,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.18,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    nexusGroup.add(coreMesh)

    // 2. Core Glowing Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(1.43, 2)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    })
    const wireMesh = new THREE.Mesh(wireGeo, wireMat)
    nexusGroup.add(wireMesh)

    // 3. Inner Pulsing Core
    const innerGeo = new THREE.OctahedronGeometry(0.7, 0)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    nexusGroup.add(innerMesh)

    // 4. Orbital Gyroscopic Rings
    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGroup = new THREE.Group()
      ringGroup.rotation.x = rotX
      ringGroup.rotation.y = rotY

      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100)
      const ringMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.9,
        transparent: true,
        opacity: 0.75
      })
      const ringMesh = new THREE.Mesh(ringGeo, ringMat)
      ringGroup.add(ringMesh)

      // Satellite beacon on the ring
      const beaconGeo = new THREE.SphereGeometry(0.09, 16, 16)
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat)
      beaconMesh.position.x = radius
      ringGroup.add(beaconMesh)

      return { group: ringGroup, beacon: beaconMesh, radius }
    }

    const ring1 = createRing(2.0, 0.02, 0x06b6d4, Math.PI / 4, 0) // Cyan
    const ring2 = createRing(2.4, 0.018, 0x8b5cf6, -Math.PI / 3, Math.PI / 6) // Purple
    const ring3 = createRing(2.8, 0.015, 0x10b981, Math.PI / 6, -Math.PI / 4) // Emerald

    nexusGroup.add(ring1.group)
    nexusGroup.add(ring2.group)
    nexusGroup.add(ring3.group)

    // 5. Constellation Ambient Particle Cloud
    const particleCount = 450
    const particleGeo = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)

    const colorChoices = [
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x8b5cf6), // Violet
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0x38bdf8), // Sky
      new THREE.Color(0xffffff)  // White
    ]

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const dist = 1.8 + Math.random() * 3.5

      particlePositions[i * 3] = dist * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta)
      particlePositions[i * 3 + 2] = dist * Math.cos(phi)

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)]
      particleColors[i * 3] = color.r
      particleColors[i * 3 + 1] = color.g
      particleColors[i * 3 + 2] = color.b
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    })
    const particleCloud = new THREE.Points(particleGeo, particleMat)
    nexusGroup.add(particleCloud)

    // Mouse & Touch Controls with Smooth Inertia
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let dragVelocityX = 0
    let dragVelocityY = 0

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0

      mouseX = ((clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((clientY - rect.top) / rect.height) * 2 - 1)

      if (isDragging) {
        const deltaX = clientX - prevMouseX
        const deltaY = clientY - prevMouseY
        dragVelocityX = deltaX * 0.005
        dragVelocityY = deltaY * 0.005
        nexusGroup.rotation.y += dragVelocityX
        nexusGroup.rotation.x += dragVelocityY
        prevMouseX = clientX
        prevMouseY = clientY
      }
    }

    const handlePointerDown = (e) => {
      isDragging = true
      setIsInteracting(true)
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0
      prevMouseX = clientX
      prevMouseY = clientY
    }

    const handlePointerUp = () => {
      isDragging = false
      setTimeout(() => setIsInteracting(false), 800)
    }

    window.addEventListener("pointermove", handlePointerMove)
    container.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("pointerup", handlePointerUp)

    // Visibility Observer to pause when off-screen
    let isVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    // Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isVisible) return

      const elapsedTime = clock.getElapsedTime()

      // Damped mouse parallax
      targetX += (mouseX * 0.45 - targetX) * 0.05
      targetY += (mouseY * 0.45 - targetY) * 0.05

      if (!isDragging) {
        dragVelocityX *= 0.94
        dragVelocityY *= 0.94
        nexusGroup.rotation.y += dragVelocityX
        nexusGroup.rotation.x += dragVelocityY

        // Ambient idle rotation
        nexusGroup.rotation.y += 0.004
        nexusGroup.rotation.x = targetY * 0.5 + Math.sin(elapsedTime * 0.4) * 0.08
        nexusGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.05
      }

      // Gyro ring rotations at differential speeds
      ring1.group.rotation.z += 0.015
      ring2.group.rotation.z -= 0.012
      ring3.group.rotation.z += 0.008

      // Pulsing inner core breathing effect
      const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.06
      coreMesh.scale.set(scale, scale, scale)
      wireMesh.scale.set(scale, scale, scale)
      innerMesh.rotation.y += 0.02
      innerMesh.rotation.x += 0.01

      // Gentle cloud drift
      particleCloud.rotation.y -= 0.0015

      renderer.render(scene, camera)
    }

    animate()
    setFpsReady(true)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("pointermove", handlePointerMove)
      container.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("pointerup", handlePointerUp)
      window.removeEventListener("resize", handleResize)
      observer.disconnect()

      coreGeo.dispose()
      coreMat.dispose()
      wireGeo.dispose()
      wireMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none">
      
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none z-10"
      />

      {/* Futuristic Orbit Status Badges */}
      <div className="absolute top-2 right-2 z-20 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 border border-primary/30 backdrop-blur-md text-[11px] font-mono text-primary shadow-lg shadow-primary/10">
          <Orbit size={13} className="animate-spin text-cyan-400" />
          <span>AGENTIC NEXUS // 3D</span>
        </div>
      </div>

      <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border/80 backdrop-blur-md text-[10px] font-mono text-muted-foreground shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{isInteracting ? "Tracking 3D Orbit" : "Drag to Rotate • 60 FPS"}</span>
        </div>
      </div>

      {/* Floating Holographic Technology Nodes */}
      <div className="absolute top-10 left-0 z-20 pointer-events-none hidden sm:block animate-bounce [animation-duration:4s]">
        <div className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300 shadow-md shadow-cyan-500/10">
          ⚡ LangGraph
        </div>
      </div>

      <div className="absolute bottom-16 right-0 z-20 pointer-events-none hidden sm:block animate-bounce [animation-duration:5s] [animation-delay:1s]">
        <div className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 backdrop-blur-md text-[11px] font-mono text-purple-300 shadow-md shadow-purple-500/10">
          🛡️ MCP Protocol
        </div>
      </div>

      <div className="absolute bottom-4 left-10 z-20 pointer-events-none hidden sm:block animate-bounce [animation-duration:4.5s] [animation-delay:2s]">
        <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md text-[11px] font-mono text-emerald-300 shadow-md shadow-emerald-500/10">
          🐳 Docker Sandboxes
        </div>
      </div>

      {/* Ambient Radial Glow Backdrop */}
      <div className="absolute inset-0 -z-10 bg-radial from-primary/20 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />
    </div>
  )
}
