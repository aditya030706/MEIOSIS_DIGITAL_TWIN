import Link from 'next/link'

export default function LabPage() {
  return (
    <main className="min-h-screen bg-forest-deep p-8 md:p-20 relative overflow-hidden">
      {/* Background glow effects for the Lab atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-forest-mid/10 blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16 flex justify-between items-end">
          <div>
            <span className="text-sage-light text-xs uppercase tracking-[0.4em] mb-4 block">
              Experimental Workspace
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-off-white tracking-tight uppercase">
              The Lab
            </h1>
          </div>
          <Link 
            href="/" 
            className="text-sage/40 hover:text-sage-light text-[10px] uppercase tracking-widest transition-colors mb-2 border-b border-transparent hover:border-sage-light pb-1"
          >
            ← Exit to NISARG
          </Link>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Option 1: BUILD HYBRID (Breeding Suite) */}
          <Link href="/lab/build-hybrid" className="group">
            <div className="glass-card p-12 rounded-sm border border-white/5 hover:border-sage/40 transition-all duration-700 h-full cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/[0.02] transition-colors duration-700" />
              
              <h3 className="text-3xl font-bold text-off-white mb-6 group-hover:text-sage-light transition-colors relative z-10">
                BUILD HYBRID
              </h3>
              <p className="text-sage font-light leading-relaxed mb-8 relative z-10">
                Access the Breeding Suite to merge organic parent traits. 
                Simulate yield, maturity, and stress resilience for new seed varieties.
              </p>
              <div className="text-off-white text-xs uppercase tracking-widest border-b border-sage/30 pb-2 group-hover:border-sage transition-all inline-block relative z-10">
                Initialize Suite →
              </div>
            </div>
          </Link>

          {/* Option 2: DIGITAL TWIN (Simulator) */}
          <Link href="/lab/digital-twin" className="group">
            <div className="glass-card p-12 rounded-sm border border-white/5 hover:border-sage/40 transition-all duration-700 h-full cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/[0.02] transition-colors duration-700" />
              
              <h3 className="text-3xl font-bold text-off-white mb-6 group-hover:text-sage-light transition-colors relative z-10">
                DIGITAL TWIN
              </h3>
              <p className="text-sage font-light leading-relaxed mb-8 relative z-10">
                Synchronize physical data with virtual replicas. Monitor real-time growth 
                and environmental shifts in a controlled digital space.
              </p>
              <div className="text-off-white text-xs uppercase tracking-widest border-b border-sage/30 pb-2 group-hover:border-sage transition-all inline-block relative z-10">
                Configure Twin →
              </div>
            </div>
          </Link>

        </div>

        {/* System Status Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-4 text-[10px] text-sage/30 uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            Core System: Active
          </div>
          <div>Simulation Engine: Ready</div>
          <div>Location: Rourkela / NISARG-01</div>
          <div className="ml-auto opacity-20">v1.0.4-stable</div>
        </footer>
      </div>
    </main>
  )
}