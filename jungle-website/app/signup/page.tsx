import Link from 'next/link'

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-forest-deep flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-sage/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-forest-mid/20 blur-[120px] rounded-full" />

      <div className="glass-card p-10 w-full max-w-md rounded-sm border border-white/5 relative z-10 backdrop-blur-md">
        <div className="text-center mb-10">
          <Link href="/" className="text-sage-light text-xs uppercase tracking-[0.3em] hover:text-off-white transition-colors duration-300 mb-8 inline-block">
            ← Back to Forest
          </Link>
          <h1 className="text-4xl font-bold text-off-white mb-2 tracking-tight">Join the Grove</h1>
          <p className="text-sage font-light">Start your journey where ideas take root.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sage-light text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-off-white focus:outline-none focus:border-sage/50 transition-all placeholder:text-white/10 font-light"
              placeholder="Dk"
              required
            />
          </div>

          <div>
            <label className="block text-sage-light text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-off-white focus:outline-none focus:border-sage/50 transition-all placeholder:text-white/10 font-light"
              placeholder="explorer@jungle.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sage-light text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold">Password</label>
            <input 
              type="password" 
              className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-off-white focus:outline-none focus:border-sage/50 transition-all placeholder:text-white/10 font-light"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="w-full bg-sage py-4 text-forest-deep font-bold tracking-[0.2em] hover:bg-sage-light transition-all duration-500 rounded-sm uppercase text-[11px] mt-6">
            Create Account
          </button>
        </form>

        <p className="text-center mt-10 text-sage/60 text-xs font-light tracking-wide">
          Already a member?{' '}
          <Link href="/login" className="text-off-white hover:text-sage-light underline underline-offset-8 transition-colors duration-300">
            Login here
          </Link>
        </p>
      </div>
    </main>
  )
}