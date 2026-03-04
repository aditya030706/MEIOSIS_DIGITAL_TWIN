'use client'

import { useRef, useEffect, useState } from 'react'

export default function PlantBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth || window.innerWidth
      canvas.height = canvas.offsetHeight || window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const leaves = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 40 + Math.random() * 80,
      angle: Math.random() * Math.PI * 2,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.005 + Math.random() * 0.005,
      opacity: 0.08 + Math.random() * 0.14,
      color: ['#2d5a27','#3d7a35','#4a8f40','#557a4a','#2a4f25'][Math.floor(Math.random() * 5)]
    }))

    const spores = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 0.5 + Math.random() * 1.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -0.1 - Math.random() * 0.3,
      opacity: 0.15 + Math.random() * 0.4,
    }))

    function drawLeaf(x: number, y: number, size: number, angle: number, sway: number, opacity: number, color: string) {
      ctx!.save()
      ctx!.translate(x, y)
      ctx!.rotate(angle + Math.sin(sway) * 0.15)
      ctx!.globalAlpha = opacity
      ctx!.beginPath()
      ctx!.moveTo(0, 0)
      ctx!.bezierCurveTo(size * 0.3, -size * 0.4, size * 0.4, -size * 0.8, 0, -size)
      ctx!.bezierCurveTo(-size * 0.4, -size * 0.8, -size * 0.3, -size * 0.4, 0, 0)
      ctx!.fillStyle = color
      ctx!.fill()
      ctx!.beginPath()
      ctx!.moveTo(0, 0)
      ctx!.lineTo(0, -size)
      ctx!.strokeStyle = color
      ctx!.globalAlpha = opacity * 0.4
      ctx!.lineWidth = 1
      ctx!.stroke()
      ctx!.restore()
    }

    let animId: number

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      spores.forEach(s => {
        s.x += s.speedX
        s.y += s.speedY
        if (s.y < -5) { s.y = canvas!.height + 5; s.x = Math.random() * canvas!.width }
        if (s.x < -5) s.x = canvas!.width + 5
        if (s.x > canvas!.width + 5) s.x = -5
        ctx!.beginPath()
        ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(125, 180, 110, ${s.opacity})`
        ctx!.fill()
      })

      leaves.forEach(l => {
        l.sway += l.swaySpeed
        l.y -= 0.2
        if (l.y < -l.size) l.y = canvas!.height + l.size
        drawLeaf(l.x, l.y, l.size, l.angle, l.sway, l.opacity, l.color)
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minHeight: '600px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}