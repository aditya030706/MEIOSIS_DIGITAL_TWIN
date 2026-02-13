'use client'

import { Playfair_Display, Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import './globals.css'
import Navigation from '@/components/Navigation'
import FloatingLeaves from '@/components/FloatingLeaves'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // This check hides the Nav and Leaves on the Lab, Build Hybrid, Login, and Signup pages
  const isLabZone = pathname.startsWith('/lab') || 
                    pathname.startsWith('/login') || 
                    pathname.startsWith('/signup')

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-forest-deep text-off-white antialiased overflow-x-hidden">
        {/* The Navbar and Leaves only show up if we are NOT in the Lab/Auth zones */}
        {!isLabZone && <FloatingLeaves />}
        {!isLabZone && <Navigation />}
        
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}