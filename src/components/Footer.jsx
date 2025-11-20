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
          <p>Telefon: <a href="tel:+40700000000" className="text-slate-200 hover:text-white">+40 700 000 000</a></p>
          <p>Email: <a href="mailto:contact@hvacpro.ro" className="text-slate-200 hover:text-white">contact@hvacpro.ro</a></p>
          <p>Program: Luni - Vineri, 9:00 - 18:00</p>
        </div>
        <div className="text-slate-400 md:text-right">
          <p>© {new Date().getFullYear()} HVAC Pro Systems. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
