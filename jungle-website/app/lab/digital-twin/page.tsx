'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DigitalTwin() {
  const router = useRouter()
  const [isSimulating, setIsSimulating] = useState(false)

  // 1. Location & Climate States
  const [config, setConfig] = useState({
    location: '',
    season: '',
    baseline: '',
    projection: ''
  })

  // 2. Weather & Soil States
  const [weather, setWeather] = useState({ temp: 32, rain: 12, solar: 18.5 })
  const [soil, setSoil] = useState({ salinity: 1.2, moisture: 85, ph: 6.5 })

  // 3. Stress Timeline State
  const [stresses, setStresses] = useState({ heat: 40, flood: 20 })

  const handleRunSimulation = () => {
    setIsSimulating(true)
    // Simulate computational time before navigating to analysis
    setTimeout(() => {
      router.push('/lab/deep-analysis')
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-[#F7F4D5] text-[#0A3323] font-inter pb-20 relative z-[200]">
      {/* Subtle organic gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#839958]/10 via-transparent to-[#105666]/5 pointer-events-none" />

      <header className="bg-[#105666] border-b border-[#0A3323]/20 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/lab/build-hybrid" className="text-[#F7F4D5]/70 hover:text-[#F7F4D5] transition-all text-[10px] font-bold uppercase tracking-widest">
            ← BACK TO SUITE
          </Link>
          <div className="h-4 w-px bg-[#F7F4D5]/20" />
          <h1 className="font-bold text-sm tracking-[0.2em] text-[#F7F4D5] uppercase">NISARG | DIGITAL TWIN SIMULATOR</h1>
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto mt-12 px-6 space-y-8 relative z-10">
        
        {/* 1. Location & Climate Configuration */}
        <section className="bg-white/40 backdrop-blur-xl border border-[#105666]/10 p-8 rounded-sm shadow-xl shadow-[#0A3323]/5">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#105666] mb-8 border-b border-[#0A3323]/10 pb-4 flex items-center gap-3">
            <span className="w-5 h-5 bg-[#105666] text-[#F7F4D5] rounded-full flex items-center justify-center text-[9px]">1</span>
            Location & Climate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[9px] font-bold text-[#105666]/60 uppercase mb-2 tracking-widest">Location</label>
              <select className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-xs outline-none focus:border-[#839958] transition-colors" onChange={(e) => setConfig({...config, location: e.target.value})}>
                <option value="">Select Location...</option>
                <option>Bhubaneswar (Odisha)</option>
                <option>Cuttack (Odisha)</option>
                <option>Sambalpur (Odisha)</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-[#105666]/60 uppercase mb-2 tracking-widest">Season</label>
              <select className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-xs outline-none focus:border-[#839958] transition-colors" onChange={(e) => setConfig({...config, season: e.target.value})}>
                <option value="">Select Season...</option>
                <option>Kharif (Jun–Dec)</option>
                <option>Rabi (Nov–Apr)</option>
                <option>Summer/Zaid (Mar–Jun)</option>
                <option>Perennial / Multi-season</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-[#105666]/60 uppercase mb-2 tracking-widest">Baseline Year</label>
              <select className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-xs outline-none focus:border-[#839958] transition-colors" onChange={(e) => setConfig({...config, baseline: e.target.value})}>
                <option value="">Select Baseline...</option>
                <option>1991–2020 Climatology</option>
                <option>2001–2020 Recent baseline</option>
                <option>2010–2019 NRRI trials</option>
              </select>
            </div>
            <div>
              <label className="block text-[9px] font-bold text-[#105666]/60 uppercase mb-2 tracking-widest">Projection</label>
              <select className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-xs outline-none focus:border-[#839958] transition-colors" onChange={(e) => setConfig({...config, projection: e.target.value})}>
                <option value="">Select Projection...</option>
                <option>2030 CMIP6 +1°C</option>
                <option>2030 CMIP6 Heat+2°C</option>
                <option>2050 CMIP6 +2.5°C</option>
                <option>2050 CMIP6 Hot+Dry</option>
                <option>2050 CMIP6 Hot+Wet</option>
              </select>
            </div>
          </div>
        </section>

        {/* 2. Weather & Soil Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white/40 backdrop-blur-xl border border-[#105666]/10 p-8 rounded-sm shadow-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#105666] mb-6">Weather Profile</h2>
            <div className="space-y-4">
              <input type="number" value={weather.temp} onChange={(e) => setWeather({...weather, temp: Number(e.target.value)})} placeholder="Max Temp (°C)" className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-sm outline-none text-[#0A3323]" />
              <input type="number" value={weather.rain} onChange={(e) => setWeather({...weather, rain: Number(e.target.value)})} placeholder="Rainfall (mm)" className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-sm outline-none text-[#0A3323]" />
              <input type="number" value={weather.solar} onChange={(e) => setWeather({...weather, solar: Number(e.target.value)})} placeholder="Solar Rad" className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-sm outline-none text-[#0A3323]" />
            </div>
          </section>

          <section className="bg-white/40 backdrop-blur-xl border border-[#105666]/10 p-8 rounded-sm shadow-xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#105666] mb-6">Soil Parameters</h2>
            <div className="space-y-4">
              <input type="number" step="0.1" value={soil.salinity} onChange={(e) => setSoil({...soil, salinity: Number(e.target.value)})} placeholder="Salinity (dS/m)" className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-sm outline-none text-[#0A3323]" />
              <input type="number" value={soil.moisture} onChange={(e) => setSoil({...soil, moisture: Number(e.target.value)})} placeholder="Moisture (%)" className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-sm outline-none text-[#0A3323]" />
              <input type="number" step="0.1" value={soil.ph} onChange={(e) => setSoil({...soil, ph: Number(e.target.value)})} placeholder="Soil pH" className="w-full p-3 bg-[#F7F4D5]/50 border border-[#105666]/20 rounded-sm text-sm outline-none text-[#0A3323]" />
            </div>
          </section>
        </div>

        {/* 3. Interactive Scrollable Stress Timeline */}
        <section className="bg-white/40 backdrop-blur-xl border border-[#105666]/10 p-8 rounded-sm shadow-xl overflow-hidden">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#105666] mb-10">Stress Event Timeline (Day 0 - 120)</h2>
          <div className="overflow-x-auto pb-10 scrollbar-hide">
            <div className="min-w-[1200px] px-4 space-y-16">
              <div className="relative">
                <div className="flex justify-between text-[9px] font-bold text-[#D3968C] mb-4 tracking-[0.2em] uppercase">Heat Stress Intensity: {stresses.heat}%</div>
                <input type="range" min="0" max="100" value={stresses.heat} onChange={(e) => setStresses({...stresses, heat: Number(e.target.value)})} className="w-full h-1.5 bg-[#D3968C]/20 rounded-sm appearance-none cursor-pointer accent-[#D3968C]" />
              </div>
              <div className="relative">
                <div className="flex justify-between text-[9px] font-bold text-[#105666] mb-4 tracking-[0.2em] uppercase">Flood Inundation Level: {stresses.flood}%</div>
                <input type="range" min="0" max="100" value={stresses.flood} onChange={(e) => setStresses({...stresses, flood: Number(e.target.value)})} className="w-full h-1.5 bg-[#105666]/20 rounded-sm appearance-none cursor-pointer accent-[#105666]" />
              </div>
            </div>
          </div>
        </section>

        {/* Action Button using #839958 (Moss Green) */}
        <div className="flex flex-col items-center pt-8">
          <button onClick={handleRunSimulation} disabled={isSimulating} className="w-full max-w-md py-6 bg-[#839958] text-[#F7F4D5] font-black rounded-sm shadow-xl hover:bg-[#0A3323] transition-all uppercase text-[11px] tracking-[0.4em]">
            {isSimulating ? 'Initializing Engine...' : 'Run 1,000 Simulations'}
          </button>
          <p className="mt-6 text-[9px] text-[#105666]/40 uppercase tracking-[0.2em] font-bold">Estimated Comp-Time: 4.2 Minutes</p>
        </div>
      </div>
    </main>
  )
}