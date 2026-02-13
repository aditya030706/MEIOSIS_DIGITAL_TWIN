'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Updated links to match your new "Source" and "About Us" structure
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/source', label: 'Source' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-forest-deep/90 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Updated Logo to NISARG */}
        <Link href="/" className="group">
          <h2 className="text-2xl font-bold text-off-white transition-colors duration-300 group-hover:text-sage-light tracking-tighter uppercase">
            Nisarg
          </h2>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-sage-light'
                    : 'text-off-white hover:text-sage'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-sage-light" />
                )}
              </Link>
            </li>
          ))}
          {/* Added a subtle Login link for quick access */}
          <li>
             <Link 
               href="/login" 
               className="text-xs font-bold bg-sage/10 border border-sage/20 px-4 py-1.5 rounded-sm text-sage-light hover:bg-sage hover:text-forest-deep transition-all duration-300 uppercase tracking-widest"
             >
               Login
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}