'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DeepAnalysis() {
  const results = [
    { stage: 'Tillering', days: '1-25', temp: '32.4°C', water: '450', salinity: '0.2', rad: '18.5', survival: '98.2%', loss: '0.05%', status: 'PASS' },
    { stage: 'Booting', days: '26-55', temp: '34.1°C', water: '600', salinity: '0.8', rad: '21.2', survival: '96.5%', loss: '1.2%', status: 'PASS' },
    { stage: 'Panicle', days: '56-80', temp: '38.9°C', water: '520', salinity: '2.4', rad: '24.5', survival: '84.1%', loss: '4.8%', status: 'CRITICAL' },
    { stage: 'Grain Fill', days: '81-110', temp: '31.2°C', water: '380', salinity: '0.4', rad: '19.8', survival: '94.8%', loss: '0.8%', status: 'PASS' },
  ]

  return (
    <main className="min-h-screen bg-[#F7F4D5] text-[#0A3323] font-inter pb-32 relative z-[200]">
      {/* Dynamic Header using #839958 (Moss Green) for success */}
      <header className="bg-[#839958] px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-4 text-[#F7F4D5]">
          <Link href="/lab/digital-twin" className="font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
            ← Return to Setup
          </Link>
          <div className="h-4 w-px bg-[#F7F4D5]/30" />
          <h1 className="font-black text-sm tracking-tighter uppercase">✓ SIMULATION COMPLETE | HYBRID #47</h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#0A3323]/20 px-4 py-1 rounded-full text-[10px] font-bold text-[#F7F4D5] uppercase tracking-widest">
            92% Elite
          </div>
          <div className="bg-[#0A3323]/20 px-4 py-1 rounded-full text-[10px] font-bold text-[#F7F4D5] uppercase tracking-widest">
            Batch ID: PSRM-2026-NIS
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto mt-8 px-8 space-y-8">
        
        {/* PSRM Results Table using #105666 (Teal) for the header */}
        <section className="bg-white/50 backdrop-blur-md rounded-sm border border-[#105666]/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#105666]/10 flex justify-between items-center bg-[#105666]">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F7F4D5]">PSRM Results Table</h2>
            <span className="text-[9px] font-bold text-[#F7F4D5]/60 uppercase tracking-widest">Digital Twin Performance Metrics</span>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-[#105666] uppercase tracking-widest bg-[#105666]/5 border-b border-[#105666]/10">
                <th className="px-8 py-4">Stage</th>
                <th className="px-4 py-4">Days</th>
                <th className="px-4 py-4">MaxTemp</th>
                <th className="px-4 py-4">Salinity</th>
                <th className="px-4 py-4">Survival%</th>
                <th className="px-4 py-4">YieldLoss</th>
                <th className="px-4 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium">
              {results.map((row) => (
                <tr key={row.stage} className={`border-b border-[#105666]/5 hover:bg-white/80 transition-colors ${row.status === 'CRITICAL' ? 'bg-[#D3968C]/10' : ''}`}>
                  <td className="px-8 py-6 font-bold text-[#0A3323]">{row.stage}</td>
                  <td className="px-4 py-6 text-[#105666]/60">{row.days}</td>
                  <td className={`px-4 py-6 ${row.status === 'CRITICAL' ? 'text-[#D3968C] font-black' : ''}`}>{row.temp}</td>
                  <td className={`px-4 py-6 ${row.status === 'CRITICAL' ? 'text-[#D3968C] font-black' : ''}`}>{row.salinity} ds/m</td>
                  <td className={`px-4 py-6 font-black ${row.status === 'CRITICAL' ? 'text-[#D3968C]' : 'text-[#839958]'}`}>{row.survival}</td>
                  <td className="px-4 py-6 text-red-700 font-bold">{row.loss}</td>
                  <td className="px-4 py-6 text-right">
                    <span className={`px-3 py-1 rounded-sm text-[9px] font-black tracking-widest ${row.status === 'PASS' ? 'bg-[#839958] text-[#F7F4D5]' : 'bg-[#D3968C] text-[#F7F4D5]'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 4D Stability Visualization using SVG */}
          <section className="lg:col-span-8 bg-white/40 p-8 rounded-sm border border-[#105666]/10 shadow-sm relative overflow-hidden h-[500px]">
             <div className="flex justify-between items-center mb-12">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#105666]">4D Stability Visualization</h3>
                <div className="flex gap-6 text-[9px] font-bold uppercase tracking-widest text-[#0A3323]">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#839958]"/> Survival%</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D3968C]"/> Temperature</span>
                </div>
             </div>
             
             <div className="relative h-64 w-full mt-10">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200">
                  {/* Survival Line (Moss Green) */}
                  <path d="M0,40 Q250,30 500,50 L600,160 L700,50 L1000,60" fill="none" stroke="#839958" strokeWidth="4" strokeLinecap="round" />
                  {/* Temperature Line (Clay/Rose) */}
                  <path d="M0,160 Q250,150 450,100 Q550,20 650,130 L1000,180" fill="none" stroke="#D3968C" strokeWidth="2" strokeDasharray="6" />
                  
                  {/* Critical Event Tooltip */}
                  <g transform="translate(600, 160)">
                    <circle r="12" fill="#D3968C" className="animate-ping opacity-20" />
                    <circle r="4" fill="#D3968C" />
                    <rect x="-65" y="-90" width="130" height="70" rx="2" fill="#0A3323" />
                    <text x="0" y="-70" textAnchor="middle" className="text-[10px] font-black fill-[#F7F4D5] uppercase tracking-tighter">Day 65: Extreme Event</text>
                    <text x="0" y="-55" textAnchor="middle" className="text-[8px] font-medium fill-[#F7F4D5]/60">Survival: 84.1%</text>
                    <text x="0" y="-42" textAnchor="middle" className="text-[9px] font-bold fill-[#D3968C] uppercase">Salinity: 2.4 (CRITICAL)</text>
                  </g>
                </svg>

                <div className="flex justify-between mt-12 text-[9px] font-bold text-[#105666]/40 uppercase tracking-[0.3em] border-t border-[#105666]/10 pt-4">
                  <span>Day 1</span><span>Day 30</span><span>Day 60</span><span>Day 90</span><span>Day 120</span>
                </div>
             </div>
          </section>

          {/* Right Sidebar */}
          <section className="lg:col-span-4 space-y-8">
            <div className="bg-[#0A3323] p-10 rounded-sm text-center shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#839958] mb-10">Resilience Index</h4>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-36 h-36 transform -rotate-90">
                  <circle cx="72" cy="72" r="64" stroke="#F7F4D5" strokeOpacity="0.1" strokeWidth="8" fill="transparent" />
                  <circle cx="72" cy="72" r="64" stroke="#839958" strokeWidth="10" fill="transparent" strokeDasharray="402" strokeDashoffset="40" strokeLinecap="square" />
                </svg>
                <span className="absolute text-5xl font-black text-[#F7F4D5] tracking-tighter italic">9.3</span>
              </div>
              <p className="text-[10px] text-[#F7F4D5]/60 font-medium leading-relaxed mt-10 uppercase tracking-widest">
                Exceeds Recovery Mean by <span className="text-[#839958] font-black">14.2%</span>
              </p>
            </div>

            <div className="bg-white/40 p-8 rounded-sm border border-[#105666]/10">
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#105666] mb-6">Simulation Context</h4>
               <div className="space-y-4 text-[11px] font-bold text-[#0A3323]">
                  <div className="flex justify-between border-b border-[#105666]/5 pb-3 uppercase tracking-tighter"><span>Soil Type</span><span className="text-[#105666]">Clay-Loam 4B</span></div>
                  <div className="flex justify-between border-b border-[#105666]/5 pb-3 uppercase tracking-tighter"><span>Region</span><span className="text-[#105666]">SE Asia (Odisha)</span></div>
                  <div className="flex justify-between border-b border-[#105666]/5 pb-3 uppercase tracking-tighter"><span>Treatment</span><span className="text-[#105666]">NanoCoat v3</span></div>
               </div>
            </div>
          </section>
        </div>
      </div>

      {/* Persistent Footer with #105666 (Teal Deep) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#105666] border-t border-[#0A3323]/40 p-6 z-[300] shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
        <div className="max-w-[1400px] mx-auto flex gap-6">
          <button className="flex-1 py-4 bg-[#839958] text-[#F7F4D5] font-black rounded-sm uppercase text-[10px] tracking-[0.3em] hover:bg-[#0A3323] transition-all">☆ Mark Field Elite</button>
          <button className="flex-1 py-4 bg-transparent border border-[#F7F4D5]/20 text-[#F7F4D5] font-black rounded-sm uppercase text-[10px] tracking-[0.3em] hover:bg-[#F7F4D5]/10">Export PSRM Excel</button>
          <button onClick={() => window.location.reload()} className="flex-1 py-4 bg-[#0A3323] text-[#F7F4D5] font-black rounded-sm uppercase text-[10px] tracking-[0.3em] hover:brightness-125">+ New Simulation Test</button>
        </div>
      </div>
    </main>
  )
}