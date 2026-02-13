'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leaf1Ref = useRef<HTMLDivElement>(null)
  const leaf2Ref = useRef<HTMLDivElement>(null)
  const leaf3Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Floating leaf animations
    if (leaf1Ref.current) {
      gsap.to(leaf1Ref.current, {
        y: -30,
        x: 20,
        rotation: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }

    if (leaf2Ref.current) {
      gsap.to(leaf2Ref.current, {
        y: -40,
        x: -15,
        rotation: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }

    if (leaf3Ref.current) {
      gsap.to(leaf3Ref.current, {
        y: -25,
        x: 10,
        rotation: 10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }

    // Fade in content on scroll
    const sections = containerRef.current?.querySelectorAll('.fade-in-section')
    sections?.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative min-h-screen bg-off-white">
      {/* Floating Leaves - Decorative */}
      <div
        ref={leaf1Ref}
        className="fixed top-20 right-20 w-24 h-24 opacity-20 pointer-events-none z-10"
        style={{
          backgroundImage: 'url(/leaves/floating-1.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        ref={leaf2Ref}
        className="fixed bottom-40 left-20 w-32 h-32 opacity-15 pointer-events-none z-10"
        style={{
          backgroundImage: 'url(/leaves/floating-2.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        ref={leaf3Ref}
        className="fixed top-1/2 right-40 w-20 h-20 opacity-25 pointer-events-none z-10"
        style={{
          backgroundImage: 'url(/leaves/floating-3.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold text-forest-deep mb-8 fade-in-section">
            The <span className="text-forest-mid">Greenhouse</span>
          </h1>
          <p className="text-2xl text-sage leading-relaxed fade-in-section">
            A controlled environment where creativity flourishes under careful cultivation.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Philosophy */}
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Philosophy
            </h2>
            <p className="text-lg text-sage leading-relaxed mb-4">
              Like a forest ecosystem, great design emerges from interconnected layers. 
              Each element serves a purpose, supporting and enhancing the whole while 
              maintaining its individual integrity.
            </p>
            <p className="text-lg text-sage leading-relaxed">
              I approach every project as a living system—observing, nurturing, and 
              allowing natural patterns to guide the creative process.
            </p>
          </div>

          {/* Expertise */}
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Areas of Growth
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Frontend Development',
                  skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP Animations'],
                },
                {
                  title: 'Design Systems',
                  skills: ['Component Architecture', 'Accessibility', 'Performance', 'Scalability'],
                },
                {
                  title: 'User Experience',
                  skills: ['Interaction Design', 'Micro-interactions', 'Motion Design', 'User Research'],
                },
                {
                  title: 'Creative Code',
                  skills: ['WebGL', 'Canvas API', 'Generative Art', 'Data Visualization'],
                },
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-forest-deep/5 p-6 border border-forest-deep/10 rounded-sm hover:border-sage/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-forest-deep mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.skills.map((skill, idx) => (
                      <li key={idx} className="text-sage flex items-center">
                        <span className="w-2 h-2 bg-sage rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold text-forest-deep mb-6">
              Core Values
            </h2>
            <div className="space-y-6">
              {[
                {
                  value: 'Sustainability',
                  description: 'Building solutions that stand the test of time, like ancient trees.',
                },
                {
                  value: 'Clarity',
                  description: 'Cutting through complexity to reveal the essential, natural path forward.',
                },
                {
                  value: 'Craftsmanship',
                  description: 'Attention to detail in every layer, from root to canopy.',
                },
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-sage pl-6">
                  <h3 className="text-2xl font-bold text-forest-deep mb-2">
                    {item.value}
                  </h3>
                  <p className="text-sage leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-forest-deep/5">
        <div className="container mx-auto max-w-4xl text-center fade-in-section">
          <h2 className="text-5xl font-bold text-forest-deep mb-6">
            Let's Grow Together
          </h2>
          <p className="text-xl text-sage mb-8">
            Ready to cultivate something extraordinary?
          </p>
          <a
            href="mailto:hello@jungle.dev"
            className="inline-block bg-forest-deep text-off-white px-10 py-4 text-lg font-medium tracking-wide hover:bg-forest-mid transition-all duration-300 rounded-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
