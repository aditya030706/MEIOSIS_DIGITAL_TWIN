'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function BuildHybrid() {
  const router = useRouter()
  const [parent1, setParent1] = useState('')
  const [parent2, setParent2] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Full Genetic Database
  const parentAVarieties = [
    "Padma", "Bala", "Kiron", "Krishna", "Ratna", "Vijaya", "Saket-4", "Jayanti", "Kalinga-I", "Kalinga-II", "Shakti", "Supriya", "Vani", "Naikichili", "Anamika", "Indira", "Pallavi", "Ramakrishna", "Samalei", "Sattari", "Narendra-1", "Savitri", "Khitish", "CR 138-928", "Kalinga-III", "Utkalprabha", "Neela", "Sarasa", "Udaya", "Annada", "CR 1014", "Dharitri", "Gayatri", "Kalashree", "Kalyani-II", "Kshira", "Moti", "Padmini", "Panidhan", "Tara", "Tulasi", "Vanaprabha", "Heera", "Shaktiman", "CR 1002", "Lunishree", "Seema", "Sneha", "Vandana", "Dhala Heera", "Radhi", "Sonamani", "Tapaswini", "Pooja", "Sarala", "Durga", "Shatabdi", "Anjali", "Hazaridhan", "Sadabahar", "Abhishek", "Chandrama", "Virender", "Geetanjali", "Ketekijoha", "Naveen", "Rajalaxmi", "Ajay", "Varshadhan", "Satya Krishna", "Nua Kalajeera", "Nua Dhusara", "Chandan", "Hanseswari", "CR Dhan 40", "Swarna-Sub1", "Sahbhagidhan", "Phalguni", "Reeta", "Luna Suvarna", "Luna Sampad", "Nua Chinikamini", "CR Dhan 501", "CR Dhan 601", "CR Dhan 701", "CR Dhan 500", "Satyabhama", "Pyari", "Hue", "Improved Lalat", "Improved Tapaswini", "Sumit", "Poorna Bhog", "Jalamani", "Jayanti Dhan", "Luna Barial", "Luna Sankhi", "CR Sugandh Dhan 907", "CR Dhan 300", "CR Dhan 303", "CR Dhan 305", "CR Dhan 304", "CR Dhan 201", "CR Dhan 202", "CR Dhan 407", "CR Dhan 505", "CR Dhan 101 (Ankit)", "CR Dhan 203 (Sachala)", "CR Dhan 206 (Gopinath)", "CR Dhan 307 (Maudamani)", "CR Dhan 408 (Chaka Akhi)", "CR Dhan 306", "CR Dhan 310", "CR Dhan 207 (Srimati)", "CR Dhan 209 (Priya)", "CR Dhan 409 (Pradhan Dhan)", "CR Dhan 507 (Prasant)", "CR Dhan 800", "CR Sugandh Dhan 910", "CR Dhan 508", "CR Dhan 506", "CR Sugandh Dhan 908", "CR Sugandh Dhan 909", "Gangavati Ageti", "Purna", "CR Dhan 204", "CR Dhan 205", "Mukul", "CR Dhan 309", "Subhas", "CR Dhan 511", "CR Dhan 801", "CR Dhan 510", "Bhima", "Sarumina", "Mahamani", "CR Dhan 312", "CR Dhan 313", "CR Dhan 602"
  ]
  const parentBVarieties = ["FR 13A (Sub1)", "N22", "IR 64", "Geetanjali", "IRBB-60"]

  const handleGenerate = () => {
    if (!parent1 || !parent2) return alert("Please select both genetic parents.")
    setIsGenerating(true)
    setShowResults(false)
    setTimeout(() => {
      setIsGenerating(false)
      setShowResults(true)
    }, 2000)
  }

  const downloadCSV = () => {
    const data = [
      ["NISARG Breeding Suite - Hybrid Analysis Report"],
      ["Date", new Date().toLocaleDateString()],
      ["Location", "Rourkela Research Site"],
      [],
      ["Parameter", "Value"],
      ["Parent A (Female)", parent1],
      ["Parent B (Male)", parent2],
      ["Predicted Yield", "7.4 t/ha"],
      ["Predicted Maturity", "128 Days"],
      ["Heat Tolerance", "82%"],
      ["Flood Tolerance", "91%"],
      ["Drought Resilience", "65%"],
      ["Blast Resistance", "78%"],
      ["Overall Stability", "High"]
    ];

    const csvContent = "data:text/csv;charset=utf-8," 
      + data.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `NISARG_Hybrid_${parent1}_${parent2}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <main className="min-h-screen bg-[#EDE4C2] text-[#254F22] font-inter pb-20 relative z-[200]">
      {/* Workspace Header - Uses #254F22 (Deep Green) */}
      <header className="bg-[#254F22] border-b border-black/10 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-4">
          <Link href="/lab" className="group flex items-center gap-2 text-[#EDE4C2]/70 hover:text-[#EDE4C2] transition-all text-xs uppercase tracking-widest font-bold">
            <span className="text-lg">←</span> EXIT SUITE
          </Link>
          <div className="h-4 w-px bg-[#EDE4C2]/20" />
          <h1 className="font-bold text-sm tracking-[0.2em] text-[#EDE4C2] uppercase">NISARG | BREEDING SUITE</h1>
        </div>
        {showResults && (
          <button 
            onClick={downloadCSV}
            className="px-6 py-2 bg-[#F5824A] text-[#EDE4C2] text-[10px] font-bold rounded-sm hover:bg-[#A03A13] transition-all uppercase tracking-widest flex items-center gap-2 shadow-sm"
          >
            <span>↓</span> Export Analysis (.CSV)
          </button>
        )}
      </header>

      <div className="max-w-[1400px] mx-auto mt-10 px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Section */}
        <section className="lg:col-span-4">
          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-sm border border-[#254F22]/10 shadow-sm sticky top-24">
            <h2 className="text-[#A03A13] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-[#F5824A]/20 pb-4">Genetic Selection</h2>
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-[#254F22]/60 uppercase mb-3 tracking-widest">Parent A (Female Line)</label>
                <select value={parent1} onChange={(e) => setParent1(e.target.value)} className="w-full p-4 bg-[#EDE4C2]/30 border border-[#254F22]/20 rounded-sm text-sm outline-none focus:border-[#F5824A] transition-colors appearance-none text-[#254F22] font-medium">
                  <option value="">Select Seed Variety...</option>
                  {parentAVarieties.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#254F22]/60 uppercase mb-3 tracking-widest">Parent B (Male Line)</label>
                <select value={parent2} onChange={(e) => setParent2(e.target.value)} className="w-full p-4 bg-[#EDE4C2]/30 border border-[#254F22]/20 rounded-sm text-sm outline-none focus:border-[#F5824A] transition-colors appearance-none text-[#254F22] font-medium">
                  <option value="">Select Seed Variety...</option>
                  {parentBVarieties.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
              </div>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full py-5 bg-[#254F22] text-[#EDE4C2] font-bold rounded-sm uppercase text-[10px] tracking-[0.3em] mt-12 transition-all shadow-lg ${isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#A03A13] shadow-orange-900/20'}`}
            >
              {isGenerating ? 'Analyzing Trait Expressivity...' : 'Generate Hybrid Profile'}
            </button>
          </div>
        </section>

        {/* Results Section */}
        <section className="lg:col-span-8">
          <div className="bg-white/60 p-10 rounded-sm border border-[#254F22]/10 shadow-sm min-h-[700px] relative overflow-hidden">
            
            {!showResults && !isGenerating && (
              <div className="h-full flex flex-col items-center justify-center py-48 text-center">
                <div className="w-20 h-20 border border-dashed border-[#F5824A] rounded-full mb-8 flex items-center justify-center text-[#F5824A] text-2xl">⬢</div>
                <p className="text-[#A03A13] font-bold italic tracking-widest uppercase text-xs opacity-60">Awaiting Genetic Parameters</p>
              </div>
            )}

            {isGenerating && (
              <div className="h-full flex flex-col items-center justify-center py-48 text-[#A03A13]">
                <div className="w-16 h-16 border-4 border-[#EDE4C2] border-t-[#A03A13] rounded-full animate-spin mb-8" />
                <p className="font-black uppercase text-[10px] tracking-[0.5em] animate-pulse">NISARG Engine Processing</p>
              </div>
            )}

            {showResults && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <header className="flex justify-between items-start mb-16">
                  <div>
                    <span className="text-[10px] font-black text-[#A03A13] uppercase tracking-[0.4em] mb-2 block">Experimental Configuration</span>
                    <h3 className="text-4xl font-bold text-[#254F22] tracking-tighter">{parent1} <span className="text-[#F5824A] font-light italic">×</span> {parent2}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-4 py-1.5 bg-[#A03A13] text-[#EDE4C2] text-[9px] font-bold rounded-sm uppercase tracking-widest border border-[#A03A13]">Stability: Optimal</span>
                  </div>
                </header>

                <div className="grid grid-cols-2 gap-8 mb-16">
                  <div className="p-8 bg-[#EDE4C2] rounded-sm border border-[#254F22]/10 hover:border-[#F5824A]/40 transition-colors">
                    <span className="text-[10px] font-black text-[#A03A13] uppercase tracking-[0.2em]">Predicted Yield Potential</span>
                    <div className="text-5xl font-bold text-[#254F22] mt-4 tracking-tighter">7.4 <span className="text-xs font-normal text-[#A03A13] uppercase">t/ha</span></div>
                    <p className="text-[9px] text-[#A03A13] mt-3 font-bold uppercase tracking-widest italic">↑ Elite Performance</p>
                  </div>
                  <div className="p-8 bg-[#EDE4C2] rounded-sm border border-[#254F22]/10 hover:border-[#F5824A]/40 transition-colors">
                    <span className="text-[10px] font-black text-[#F5824A] uppercase tracking-[0.2em]">Anticipated Maturity</span>
                    <div className="text-5xl font-bold text-[#254F22] mt-4 tracking-tighter">128 <span className="text-xs font-normal text-[#A03A13] uppercase">Days</span></div>
                    <p className="text-[9px] text-[#F5824A] mt-3 font-bold uppercase tracking-widest italic">Mid-Duration Cycle</p>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="flex items-center gap-4">
                    <h4 className="text-[10px] font-black text-[#A03A13] uppercase tracking-[0.4em]">Resilience Profile</h4>
                    <div className="h-px flex-1 bg-[#254F22] opacity-10" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                    {[
                      { l: 'Heat Tolerance', v: '82%', c: 'bg-[#A03A13]' },
                      { l: 'Flood Tolerance', v: '91%', c: 'bg-[#254F22]' },
                      { l: 'Drought Resilience', v: '65%', c: 'bg-[#F5824A]' },
                      { l: 'Blast Resistance', v: '78%', c: 'bg-black' }
                    ].map((t) => (
                      <div key={t.l}>
                        <div className="flex justify-between text-[10px] font-black mb-4 tracking-widest uppercase text-[#254F22]">
                          <span>{t.l}</span><span>{t.v}</span>
                        </div>
                        <div className="h-2 w-full bg-[#EDE4C2] rounded-sm overflow-hidden border border-black/5">
                          <div className={`h-full ${t.c} transition-all duration-1000`} style={{ width: t.v }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation to Digital Twin using #A03A13 */}
                <div className="mt-20 pt-10 border-t border-[#254F22]/10 flex flex-col items-center space-y-6">
                   <p className="text-[10px] text-[#254F22]/60 uppercase tracking-widest font-bold italic">Ready to observe growth vulnerability?</p>
                   <button 
                    onClick={() => router.push('/lab/digital-twin')}
                    className="px-12 py-5 bg-[#A03A13] text-[#EDE4C2] text-[10px] font-black rounded-sm hover:bg-[#254F22] transition-all uppercase tracking-[0.4em] shadow-xl"
                   >
                     Initialize Digital Twin Simulation
                   </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}