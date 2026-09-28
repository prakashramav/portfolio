"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 25

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    container.appendChild(renderer.domElement)

    // Particle field
    const count = 350
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const color1 = new THREE.Color(0x06b6d4) // Cyan
    const color2 = new THREE.Color(0x8b5cf6) // Violet
    const color3 = new THREE.Color(0x38bdf8) // Blue

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35

      const c = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.5
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // Mouse and scroll parallax
    let scrollY = 0
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onScroll = () => {
      scrollY = window.scrollY
    }

    const onPointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("pointermove", onPointerMove, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", onResize)

    let reqId
    const clock = new THREE.Clock()

    const animate = () => {
      reqId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      targetX += (mouseX * 2 - targetX) * 0.05
      targetY += (mouseY * 2 - targetY) * 0.05

      points.rotation.y = elapsed * 0.02 + targetX * 0.1
      points.rotation.x = targetY * 0.1 - scrollY * 0.0005

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("resize", onResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden opacity-60 dark:opacity-80 transition-opacity"
      aria-hidden="true"
    />
  )
}
