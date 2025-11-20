import React from 'react'

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-transparent" />
      <div className="container mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-cyan-300 bg-cyan-300/10 px-3 py-1 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
            HVAC • Instalații termice profesionale
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Confort termic de top, instalat corect de la prima intervenție
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            Proiectare, montaj și service pentru încălzire în pardoseală, calorifere și centrale termice.
            Rapid, corect și garantat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={onCTAClick} className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-lg font-semibold bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/20 transition">
              Cere Ofertă în 60s
            </button>
            <a href="#servicii" className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-lg font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur transition">
              Vezi Servicii
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-300">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjbGllbnR8ZW58MHwwfHx8MTc2MzYzMjc5NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="client" />
              <img className="w-8 h-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="client" />
              <img className="w-8 h-8 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="client" />
            </div>
            <p className="text-sm">Peste 200+ proiecte finalizate</p>
          </div>
        </div>
      </div>
      <svg className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[140%] text-slate-900" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor"><path d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"/></svg>
    </section>
  )
}

export default Hero
