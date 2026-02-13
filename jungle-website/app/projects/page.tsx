'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Canopy',
    category: 'Web Application',
    description: 'A tree-structured knowledge management system that grows with your ideas.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    color: '#0a4d2a',
  },
  {
    title: 'Roots',
    category: 'Design System',
    description: 'Component library built from the ground up with accessibility at its core.',
    tech: ['React', 'Storybook', 'Tailwind'],
    color: '#8ca89d',
  },
  {
    title: 'Photosynthesis',
    category: 'Data Visualization',
    description: 'Interactive dashboard that transforms raw data into beautiful, living insights.',
    tech: ['D3.js', 'WebGL', 'Python'],
    color: '#052c16',
  },
  {
    title: 'Undergrowth',
    category: 'Mobile App',
    description: 'Community platform connecting urban gardeners and nature enthusiasts.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    color: '#b8cbc3',
  },
  {
    title: 'Verdant',
    category: 'E-commerce',
    description: 'Sustainable fashion marketplace with immersive product experiences.',
    tech: ['Next.js', 'Stripe', 'Shopify'],
    color: '#0a4d2a',
  },
  {
    title: 'Mycelium',
    category: 'Collaboration Tool',
    description: 'Network-based workspace that connects ideas like a living organism.',
    tech: ['Vue.js', 'WebSockets', 'GraphQL'],
    color: '#8ca89d',
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Vine reveal animation for project cards
    const cards = containerRef.current?.querySelectorAll('.project-card')
    
    cards?.forEach((card, index) => {
      // Vine overlay effect
      const vine = card.querySelector('.vine-overlay')
      
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      )

      // Vine pull-back effect
      gsap.fromTo(
        vine,
        {
          scaleX: 1,
        },
        {
          scaleX: 0,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1,
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-screen bg-forest-deep">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-7xl md:text-8xl font-bold text-off-white mb-8">
            The <span className="text-sage-light">Garden</span>
          </h1>
          <p className="text-2xl text-sage leading-relaxed max-w-3xl">
            A collection of projects cultivated with care, each one revealing itself 
            as you pull back the vines.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card relative group cursor-pointer"
              >
                {/* Vine Overlay - pulls back on scroll */}
                <div
                  className="vine-overlay absolute inset-0 z-10 origin-left"
                  style={{
                    background: `linear-gradient(135deg, ${project.color} 0%, rgba(5, 44, 22, 0.9) 100%)`,
                    backgroundImage: `url(/vines/vine-pattern.png), linear-gradient(135deg, ${project.color} 0%, rgba(5, 44, 22, 0.9) 100%)`,
                    backgroundBlendMode: 'overlay',
                  }}
                />

                {/* Card Content */}
                <div className="glass-card p-8 h-full flex flex-col justify-between hover:border-sage-light/30 transition-all duration-500 rounded-sm min-h-[320px]">
                  <div>
                    <span className="text-sm text-sage-light uppercase tracking-wider mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-off-white mb-4 group-hover:text-sage-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sage leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-forest-mid/50 text-sage-light px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-off-white mb-6">
            More Seeds Germinating
          </h2>
          <p className="text-xl text-sage mb-8">
            These are just a few specimens from the garden. Want to see the full ecosystem?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass-card px-10 py-4 text-lg font-medium tracking-wide text-off-white hover:bg-sage/10 transition-all duration-300 rounded-sm"
          >
            Explore on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
