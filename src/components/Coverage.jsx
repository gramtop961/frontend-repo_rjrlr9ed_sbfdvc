import React from 'react'

const Coverage = () => {
  const zones = ['București', 'Ilfov', 'Ploiești', 'Târgoviște', 'Pitești']
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="zone">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Zone acoperire</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Intervenim rapid în următoarele orașe și localități învecinate.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {zones.map((z) => (
            <span key={z} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 shadow-sm">{z}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coverage
