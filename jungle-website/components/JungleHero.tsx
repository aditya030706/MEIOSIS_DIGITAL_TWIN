'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function JungleHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null) // Foreground - closest to camera
  const layer2Ref = useRef<HTMLDivElement>(null)
  const layer3Ref = useRef<HTMLDivElement>(null)
  const layer4Ref = useRef<HTMLDivElement>(null)
  const layer5Ref = useRef<HTMLDivElement>(null) // Background - deepest
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    tl.to(layer1Ref.current, {
      scale: 2.5,
      y: -400,
      opacity: 0,
      ease: 'power2.out',
    }, 0)

    tl.to(layer2Ref.current, {
      scale: 1.8,
      y: -300,
      opacity: 0.3,
      ease: 'power2.out',
    }, 0)

    tl.to(layer3Ref.current, {
      scale: 1.4,
      y: -200,
      opacity: 0.6,
      ease: 'power2.out',
    }, 0)

    tl.to(layer4Ref.current, {
      y: -100,
      opacity: 0.8,
      ease: 'power2.out',
    }, 0)

    tl.to(layer5Ref.current, {
      y: -50,
      scale: 0.95,
      ease: 'power2.out',
    }, 0)

    tl.to(titleRef.current, {
      y: 200,
      opacity: 0,
      ease: 'power2.in',
    }, 0)

    tl.to(subtitleRef.current, {
      y: 150,
      opacity: 0,
      ease: 'power2.in',
    }, 0)

  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef}
      className="relative h-[150vh] overflow-hidden gradient-depth"
    >
      {/* Background Layers */}
      {[layer5Ref, layer4Ref, layer3Ref, layer2Ref, layer1Ref].map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className={`absolute inset-0 z-${(i + 1) * 10} ${
            i === 0 ? 'blur-none' : i < 3 ? 'blur-midground' : 'blur-foreground'
          }`}
          style={{
            backgroundImage: `url(/leaves/layer-${5 - i}.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* NISARG Branding Content */}
      <div className="absolute inset-0 z-[60] flex items-center justify-center">
        <div className="text-center px-6">
          <h1
            ref={titleRef}
            className="text-7xl md:text-[10rem] font-playfair font-bold text-off-white mb-6 tracking-tighter leading-none uppercase"
          >
            Nisarg
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-sage-light font-inter font-light tracking-[0.4em] uppercase"
          >
            Breeding Resilience into Every Seed
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-[70] animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-sage-light to-transparent opacity-50" />
      </div>
    </div>
  )
}