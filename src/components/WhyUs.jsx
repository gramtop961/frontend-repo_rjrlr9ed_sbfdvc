import React from 'react'

const Feature = ({ title, desc, icon }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 text-2xl font-bold">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </div>
)

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="dece-noi">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">De ce noi?</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Alegându-ne, primești servicii HVAC executate corect, la timp și cu garanție scrisă.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <Feature title="Rapid" desc="Programare promptă și execuție fără întârzieri." icon="⚡" />
          <Feature title="Corect" desc="Deviz transparent și soluții potrivite nevoilor tale." icon="✔️" />
          <Feature title="Garantat" desc="Garanție reală pentru manoperă și echipamente." icon="🛡️" />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
