"use client"

import { useState, useEffect, useRef, useCallback } from "react"

// Pixel art fox frames as SVG paths
const FOX_IDLE_1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44">
  <!-- Ears -->
  <rect x="6" y="2" width="4" height="6" fill="#E87B35"/>
  <rect x="22" y="2" width="4" height="6" fill="#E87B35"/>
  <rect x="7" y="3" width="2" height="4" fill="#F4A460"/>
  <rect x="23" y="3" width="2" height="4" fill="#F4A460"/>
  <!-- Head -->
  <rect x="6" y="6" width="20" height="12" rx="2" fill="#E87B35"/>
  <rect x="8" y="8" width="16" height="8" fill="#F4A460"/>
  <!-- Eyes -->
  <rect x="10" y="9" width="3" height="3" rx="1" fill="#1a1a2e"/>
  <rect x="19" y="9" width="3" height="3" rx="1" fill="#1a1a2e"/>
  <rect x="11" y="10" width="1" height="1" fill="#fff"/>
  <rect x="20" y="10" width="1" height="1" fill="#fff"/>
  <!-- Nose -->
  <rect x="14" y="13" width="4" height="2" rx="1" fill="#2d2d2d"/>
  <!-- Body -->
  <rect x="8" y="18" width="16" height="8" rx="2" fill="#E87B35"/>
  <rect x="10" y="19" width="12" height="6" fill="#F4A460"/>
  <!-- White belly -->
  <rect x="12" y="20" width="8" height="4" rx="1" fill="#FFF5E6"/>
  <!-- Legs -->
  <rect x="9" y="26" width="4" height="4" rx="1" fill="#E87B35"/>
  <rect x="19" y="26" width="4" height="4" rx="1" fill="#E87B35"/>
  <!-- Tail -->
  <rect x="24" y="20" width="6" height="3" rx="1" fill="#E87B35"/>
  <rect x="28" y="18" width="3" height="3" rx="1" fill="#FFF5E6"/>
</svg>
`

const FOX_IDLE_2 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44">
  <!-- Ears - slightly tilted -->
  <rect x="6" y="3" width="4" height="6" fill="#E87B35"/>
  <rect x="22" y="3" width="4" height="6" fill="#E87B35"/>
  <rect x="7" y="4" width="2" height="4" fill="#F4A460"/>
  <rect x="23" y="4" width="2" height="4" fill="#F4A460"/>
  <!-- Head -->
  <rect x="6" y="7" width="20" height="12" rx="2" fill="#E87B35"/>
  <rect x="8" y="9" width="16" height="8" fill="#F4A460"/>
  <!-- Eyes - blink -->
  <rect x="10" y="11" width="3" height="1" rx="0.5" fill="#1a1a2e"/>
  <rect x="19" y="11" width="3" height="1" rx="0.5" fill="#1a1a2e"/>
  <!-- Nose -->
  <rect x="14" y="14" width="4" height="2" rx="1" fill="#2d2d2d"/>
  <!-- Body -->
  <rect x="8" y="19" width="16" height="8" rx="2" fill="#E87B35"/>
  <rect x="10" y="20" width="12" height="6" fill="#F4A460"/>
  <!-- White belly -->
  <rect x="12" y="21" width="8" height="4" rx="1" fill="#FFF5E6"/>
  <!-- Legs -->
  <rect x="9" y="27" width="4" height="3" rx="1" fill="#E87B35"/>
  <rect x="19" y="27" width="4" height="3" rx="1" fill="#E87B35"/>
  <!-- Tail - wagging -->
  <rect x="24" y="21" width="6" height="3" rx="1" fill="#E87B35"/>
  <rect x="29" y="19" width="3" height="3" rx="1" fill="#FFF5E6"/>
</svg>
`

const FOX_WALK_1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44">
  <!-- Ears -->
  <rect x="6" y="2" width="4" height="5" fill="#E87B35"/>
  <rect x="22" y="2" width="4" height="5" fill="#E87B35"/>
  <rect x="7" y="3" width="2" height="3" fill="#F4A460"/>
  <rect x="23" y="3" width="2" height="3" fill="#F4A460"/>
  <!-- Head -->
  <rect x="6" y="5" width="20" height="11" rx="2" fill="#E87B35"/>
  <rect x="8" y="7" width="16" height="7" fill="#F4A460"/>
  <!-- Eyes -->
  <rect x="10" y="8" width="3" height="3" rx="1" fill="#1a1a2e"/>
  <rect x="19" y="8" width="3" height="3" rx="1" fill="#1a1a2e"/>
  <rect x="11" y="9" width="1" height="1" fill="#fff"/>
  <rect x="20" y="9" width="1" height="1" fill="#fff"/>
  <!-- Nose -->
  <rect x="14" y="12" width="4" height="2" rx="1" fill="#2d2d2d"/>
  <!-- Body -->
  <rect x="8" y="16" width="16" height="8" rx="2" fill="#E87B35"/>
  <rect x="10" y="17" width="12" height="6" fill="#F4A460"/>
  <rect x="12" y="18" width="8" height="4" rx="1" fill="#FFF5E6"/>
  <!-- Legs - walking pose 1 -->
  <rect x="9" y="24" width="3" height="5" rx="1" fill="#E87B35" transform="rotate(-15 10 24)"/>
  <rect x="20" y="24" width="3" height="5" rx="1" fill="#E87B35" transform="rotate(15 21 24)"/>
  <!-- Tail -->
  <rect x="24" y="17" width="6" height="3" rx="1" fill="#E87B35"/>
  <rect x="28" y="15" width="3" height="3" rx="1" fill="#FFF5E6"/>
</svg>
`

const FOX_WALK_2 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44">
  <!-- Ears -->
  <rect x="6" y="3" width="4" height="5" fill="#E87B35"/>
  <rect x="22" y="3" width="4" height="5" fill="#E87B35"/>
  <rect x="7" y="4" width="2" height="3" fill="#F4A460"/>
  <rect x="23" y="4" width="2" height="3" fill="#F4A460"/>
  <!-- Head -->
  <rect x="6" y="6" width="20" height="11" rx="2" fill="#E87B35"/>
  <rect x="8" y="8" width="16" height="7" fill="#F4A460"/>
  <!-- Eyes -->
  <rect x="10" y="9" width="3" height="3" rx="1" fill="#1a1a2e"/>
  <rect x="19" y="9" width="3" height="3" rx="1" fill="#1a1a2e"/>
  <rect x="11" y="10" width="1" height="1" fill="#fff"/>
  <rect x="20" y="10" width="1" height="1" fill="#fff"/>
  <!-- Nose -->
  <rect x="14" y="13" width="4" height="2" rx="1" fill="#2d2d2d"/>
  <!-- Body -->
  <rect x="8" y="17" width="16" height="8" rx="2" fill="#E87B35"/>
  <rect x="10" y="18" width="12" height="6" fill="#F4A460"/>
  <rect x="12" y="19" width="8" height="4" rx="1" fill="#FFF5E6"/>
  <!-- Legs - walking pose 2 -->
  <rect x="9" y="25" width="3" height="5" rx="1" fill="#E87B35" transform="rotate(15 10 25)"/>
  <rect x="20" y="25" width="3" height="5" rx="1" fill="#E87B35" transform="rotate(-15 21 25)"/>
  <!-- Tail - up -->
  <rect x="24" y="19" width="6" height="3" rx="1" fill="#E87B35"/>
  <rect x="29" y="17" width="3" height="3" rx="1" fill="#FFF5E6"/>
</svg>
`

const FOX_SIT = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="44" height="44">
  <!-- Ears -->
  <rect x="6" y="4" width="4" height="6" fill="#E87B35"/>
  <rect x="22" y="4" width="4" height="6" fill="#E87B35"/>
  <rect x="7" y="5" width="2" height="4" fill="#F4A460"/>
  <rect x="23" y="5" width="2" height="4" fill="#F4A460"/>
  <!-- Head -->
  <rect x="6" y="8" width="20" height="12" rx="2" fill="#E87B35"/>
  <rect x="8" y="10" width="16" height="8" fill="#F4A460"/>
  <!-- Eyes - happy/relaxed -->
  <path d="M10 13 Q11.5 11 13 13" stroke="#1a1a2e" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M19 13 Q20.5 11 22 13" stroke="#1a1a2e" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <!-- Nose -->
  <rect x="14" y="15" width="4" height="2" rx="1" fill="#2d2d2d"/>
  <!-- Body - sitting (rounder) -->
  <rect x="7" y="20" width="18" height="9" rx="4" fill="#E87B35"/>
  <rect x="9" y="21" width="14" height="7" rx="3" fill="#F4A460"/>
  <!-- White belly - bigger when sitting -->
  <rect x="11" y="22" width="10" height="5" rx="2" fill="#FFF5E6"/>
  <!-- Front paws -->
  <rect x="9" y="27" width="5" height="3" rx="1" fill="#E87B35"/>
  <rect x="18" y="27" width="5" height="3" rx="1" fill="#E87B35"/>
  <!-- Tail - curled around -->
  <rect x="24" y="22" width="5" height="3" rx="1" fill="#E87B35"/>
  <rect x="27" y="20" width="3" height="4" rx="1" fill="#E87B35"/>
  <rect x="28" y="19" width="3" height="2" rx="1" fill="#FFF5E6"/>
</svg>
`

function svgToDataUrl(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`
}

export function FoxCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isMoving, setIsMoving] = useState(false)
  const [frame, setFrame] = useState(0)
  const [facingLeft, setFacingLeft] = useState(false)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const moveTimeout = useRef<NodeJS.Timeout | null>(null)
  const animFrame = useRef<number>(0)
  const targetPos = useRef({ x: -100, y: -100 })
  const currentPos = useRef({ x: -100, y: -100 })

  // Smooth following with lerp
  const animate = useCallback(() => {
    const lerp = 0.12
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp
    setPosition({ x: currentPos.current.x, y: currentPos.current.y })
    animFrame.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    animFrame.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame.current)
  }, [animate])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x
      if (Math.abs(dx) > 2) {
        setFacingLeft(dx < 0)
      }
      lastMousePos.current = { x: e.clientX, y: e.clientY }
      targetPos.current = { x: e.clientX + 20, y: e.clientY + 5 }
      setIsMoving(true)

      if (moveTimeout.current) clearTimeout(moveTimeout.current)
      moveTimeout.current = setTimeout(() => {
        setIsMoving(false)
      }, 150)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (moveTimeout.current) clearTimeout(moveTimeout.current)
    }
  }, [])

  // Animation frame cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 2)
    }, isMoving ? 150 : 600)
    return () => clearInterval(interval)
  }, [isMoving])

  const getCurrentFrame = () => {
    if (!isMoving) {
      // Sitting after idle for a moment, otherwise blink animation
      return frame === 0 ? FOX_SIT : FOX_IDLE_2
    }
    return frame === 0 ? FOX_WALK_1 : FOX_WALK_2
  }

  // Use mounted state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (!mounted || isTouchDevice) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: `${facingLeft ? "scaleX(-1)" : "scaleX(1)"}`,
        willChange: "left, top, transform",
        transition: "transform 0.15s ease",
      }}
    >
      <img
        src={svgToDataUrl(getCurrentFrame())}
        alt=""
        width={44}
        height={44}
        style={{ imageRendering: "pixelated" }}
        draggable={false}
      />
    </div>
  )
}
