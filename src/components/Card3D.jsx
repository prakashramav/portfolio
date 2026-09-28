"use client"

import React, { useRef, useState } from "react"

export default function Card3D({ children, className = "", depth = 12 }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState("")
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handlePointerMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -((y - centerY) / centerY) * depth
    const rotateY = ((x - centerX) / centerX) * depth

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`)
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    })
  }

  const handlePointerLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out"
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Specular 3D Holographic Glare */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`
        }}
      />
      {children}
    </div>
  )
}
