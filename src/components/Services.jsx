import React from 'react'

const ServiceCard = ({ title, desc, img }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition">
    <div className="h-40 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="servicii">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Servicii</h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Instalații complete pentru confortul casei tale.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="Încălzire în pardoseală"
            desc="Montaj profesionist, distribuție uniformă a căldurii, eficiență energetică."
            img="https://images.unsplash.com/photo-1631540698521-c0900a7f11ab?q=80&w=1200&auto=format&fit=crop"
          />
          <ServiceCard
            title="Montaj calorifere"
            desc="Dimensionare corectă, poziționare optimă și finisaje curate."
            img="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=1200&auto=format&fit=crop"
          />
          <ServiceCard
            title="Montaj centrale termice"
            desc="Consultanță în alegere, instalare autorizată, punere în funcțiune și service."
            img="https://images.unsplash.com/photo-1603883927689-c3c66c0431eb?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
