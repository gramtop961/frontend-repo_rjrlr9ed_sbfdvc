import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <h3 className="text-white font-bold text-xl">HVAC Pro Systems</h3>
          <p className="text-slate-400 mt-2">Instalații termice și climatizare</p>
        </div>
        <div className="text-slate-400">
          <p>Telefon: <a href="tel:+40700000000" className="text-blue-300 hover:text-white">+40 700 000 000</a></p>
          <p>Email: <a href="mailto:contact@hvacpro.ro" className="text-blue-300 hover:text-white">contact@hvacpro.ro</a></p>
          <p>Program: Luni - Vineri, 9:00 - 18:00</p>
        </div>
        <div className="text-slate-400 md:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/20 mb-2">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            Disponibili pentru urgențe
          </div>
          <p>© {new Date().getFullYear()} HVAC Pro Systems. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
