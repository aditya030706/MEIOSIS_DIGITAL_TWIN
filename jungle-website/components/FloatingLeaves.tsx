'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Different leaf SVG shapes
const LeafShapes = {
  simple: (
    <path
      d="M50 10 Q70 30 75 50 Q70 70 50 90 Q30 70 25 50 Q30 30 50 10"
      fill="currentColor"
    />
  ),
  monstera: (
    <path
      d="M50 5 Q65 20 70 40 Q75 60 70 80 Q55 95 50 95 Q45 95 30 80 Q25 60 30 40 Q35 20 50 5 M45 30 L45 70 M55 30 L55 70 M35 50 L65 50"
      fill="currentColor"
    />
  ),
  fern: (
    <path
      d="M50 10 L50 90 M50 20 Q40 25 35 30 M50 20 Q60 25 65 30 M50 40 Q40 45 35 50 M50 40 Q60 45 65 50 M50 60 Q40 65 35 70 M50 60 Q60 65 65 70"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  ),
  heart: (
    <path
      d="M50 85 Q30 60 30 45 Q30 30 40 25 Q50 20 50 30 Q50 20 60 25 Q70 30 70 45 Q70 60 50 85"
      fill="currentColor"
    />
  ),
}

export default function FloatingLeaves() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate floating leaves rising from bottom
    const leaves = containerRef.current?.querySelectorAll('.floating-leaf')
    
    leaves?.forEach((leaf, index) => {
      const randomDelay = Math.random() * 5
      const randomDuration = 12 + Math.random() * 8
      const randomX = -50 + Math.random() * 100
      const randomRotation = -180 + Math.random() * 360

      gsap.fromTo(
        leaf,
        {
          y: '110vh',
          x: 0,
          rotation: 0,
          opacity: 0,
          scale: 0.3,
        },
        {
          y: '-10vh',
          x: randomX,
          rotation: randomRotation,
          opacity: 0.5,
          scale: 1,
          duration: randomDuration,
          delay: randomDelay,
          repeat: -1,
          ease: 'none',
        }
      )

      // Add swaying motion
      gsap.to(leaf, {
        x: `+=${30 + Math.random() * 40}`,
        rotation: `+=${-20 + Math.random() * 40}`,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Animate growing vines
    const vines = containerRef.current?.querySelectorAll('.growing-vine')
    vines?.forEach((vine, index) => {
      gsap.fromTo(
        vine,
        {
          scaleY: 0,
          transformOrigin: 'bottom',
        },
        {
          scaleY: 1,
          duration: 3 + index * 0.5,
          delay: index * 0.3,
          ease: 'power2.out',
        }
      )

      // Add gentle swaying to vines
      gsap.to(vine, {
        x: -5 + Math.random() * 10,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, { scope: containerRef })

  const leafShapes = Object.values(LeafShapes)
  
  // Generate leaves for left side
  const leftLeaves = Array.from({ length: 10 }, (_, i) => ({
    id: `left-${i}`,
    size: 20 + Math.random() * 50,
    left: Math.random() * 12,
    shape: leafShapes[Math.floor(Math.random() * leafShapes.length)],
    color: i % 2 === 0 ? 'text-sage/40' : 'text-sage-light/30',
  }))

  // Generate leaves for right side
  const rightLeaves = Array.from({ length: 10 }, (_, i) => ({
    id: `right-${i}`,
    size: 20 + Math.random() * 50,
    right: Math.random() * 12,
    shape: leafShapes[Math.floor(Math.random() * leafShapes.length)],
    color: i % 2 === 0 ? 'text-sage/40' : 'text-sage-light/30',
  }))

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {/* Left side floating leaves */}
      {leftLeaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`floating-leaf absolute ${leaf.color}`}
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            {leaf.shape}
          </svg>
        </div>
      ))}

      {/* Right side floating leaves */}
      {rightLeaves.map((leaf) => (
        <div
          key={leaf.id}
          className={`floating-leaf absolute ${leaf.color}`}
          style={{
            right: `${leaf.right}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            {leaf.shape}
          </svg>
        </div>
      ))}

      {/* Growing vines from bottom - Left side */}
      <div className="growing-vine absolute bottom-0 left-8 w-1 h-[35vh] bg-gradient-to-t from-sage/30 to-transparent rounded-full" />
      <div className="growing-vine absolute bottom-0 left-16 w-1 h-[45vh] bg-gradient-to-t from-sage-light/20 to-transparent rounded-full" />
      <div className="growing-vine absolute bottom-0 left-24 w-0.5 h-[30vh] bg-gradient-to-t from-sage/25 to-transparent rounded-full" />
      
      {/* Growing vines from bottom - Right side */}
      <div className="growing-vine absolute bottom-0 right-8 w-1 h-[40vh] bg-gradient-to-t from-sage/30 to-transparent rounded-full" />
      <div className="growing-vine absolute bottom-0 right-16 w-1 h-[35vh] bg-gradient-to-t from-sage-light/20 to-transparent rounded-full" />
      <div className="growing-vine absolute bottom-0 right-24 w-0.5 h-[50vh] bg-gradient-to-t from-sage/25 to-transparent rounded-full" />

      {/* Decorative small leaves on vines */}
      <div className="absolute bottom-[15vh] left-8 w-4 h-4 text-sage/40">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 Q70 30 75 50 Q70 70 50 90 Q30 70 25 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-[25vh] left-16 w-5 h-5 text-sage-light/30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 Q70 30 75 50 Q70 70 50 90 Q30 70 25 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-[20vh] right-8 w-4 h-4 text-sage/40">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 Q70 30 75 50 Q70 70 50 90 Q30 70 25 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-[30vh] right-16 w-5 h-5 text-sage-light/30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 Q70 30 75 50 Q70 70 50 90 Q30 70 25 50 Q30 30 50 10" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
