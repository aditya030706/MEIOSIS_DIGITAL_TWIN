"use client" // Important: Logic only works in Client Components

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter() // This is the 'mover'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // In the future, you will put your Python/API check here.
    // For now, we tell the browser to go to the Lab:
    router.push('/lab')
  }

  return (
    <main className="min-h-screen bg-forest-deep flex items-center justify-center px-6">
      <div className="glass-card p-10 w-full max-w-md border border-white/5">
        <form onSubmit={handleLogin} className="space-y-6">
          {/* ... your email/password inputs ... */}
          
          <button type="submit" className="w-full bg-sage py-4 text-forest-deep font-bold tracking-[0.2em] uppercase text-[11px]">
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}