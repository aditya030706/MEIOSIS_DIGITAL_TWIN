import JungleHero from '@/components/JungleHero'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* This component likely contains the big scrolling text */}
      <JungleHero />
      
      {/* Welcome Section */}
      <section className="relative bg-forest-deep py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-off-white tracking-tight">
            Welcome to Project <span className="text-sage-light">NISARG</span>
          </h2>
          <p className="text-xl md:text-2xl text-sage font-light tracking-wide italic">
            "Breeding Resilience into Every Seed"
          </p>
          <p className="text-lg text-sage/70 leading-relaxed font-light max-w-2xl mx-auto">
            A digital sanctuary where biology meets tech. We are engineering 
            the future of organic growth through resilient digital frameworks.
          </p>
          
          <div className="flex gap-6 justify-center pt-10">
            <Link
              href="/signup"
              className="glass-card px-10 py-4 text-off-white font-light tracking-[0.3em] hover:bg-sage/10 transition-all duration-500 rounded-sm uppercase text-xs"
            >
              Signup
            </Link>
            <Link
              href="/login"
              className="bg-sage px-10 py-4 text-forest-deep font-bold tracking-[0.3em] hover:bg-sage-light transition-all duration-500 rounded-sm uppercase text-xs"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Lab Entrance Section */}
      <section className="relative bg-forest-mid py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            <Link href="/source" className="group">
              <div className="glass-card p-12 rounded-sm border border-white/5 hover:border-sage/40 transition-all duration-700 h-full bg-white/[0.01]">
                <h3 className="text-4xl font-bold text-off-white mb-6 group-hover:text-sage-light transition-colors duration-500">
                  Source
                </h3>
                <p className="text-sage leading-relaxed font-light text-lg">
                  Access the genetic repository of NISARG. Explore the scripts and 
                  data structures defining our resilient ecosystem.
                </p>
                <div className="mt-10 text-sage-light text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                  Open Repository —
                </div>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="glass-card p-12 rounded-sm border border-white/5 hover:border-sage/40 transition-all duration-700 h-full bg-white/[0.01]">
                <h3 className="text-4xl font-bold text-off-white mb-6 group-hover:text-sage-light transition-colors duration-500">
                  About Us
                </h3>
                <p className="text-sage leading-relaxed font-light text-lg">
                  Merging environmental ethics with high-performance computing to 
                  ensure nature survives the digital age.
                </p>
                <div className="mt-10 text-sage-light text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
                  Learn More —
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}