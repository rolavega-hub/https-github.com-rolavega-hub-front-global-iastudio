
import React from 'react';
import { Utensils, Hospital, ShoppingBag, Landmark } from 'lucide-react';

const SECTORS = [
  { icon: Utensils, name: 'Hostelería', desc: 'Optimización de servicios de mesa y entrega en restaurantes y hoteles.' },
  { icon: Hospital, name: 'Salud', desc: 'Distribución de medicación y desinfección en entornos hospitalarios.' },
  { icon: ShoppingBag, name: 'Retail', desc: 'Guía de clientes, promoción de productos y gestión de inventario.' },
  { icon: Landmark, name: 'Administración', desc: 'Recepción inteligente y gestión de turnos en oficinas públicas.' }
];

const Sectors: React.FC = () => {
  return (
    <section id="sectores" className="py-32 bg-[#0a111a] border-b border-[#1e2d3d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <span className="mono-label text-[#ff5f00] text-xs font-bold uppercase tracking-widest">Escenarios de Despliegue</span>
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Sectores <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5f00] to-orange-400">Impactados.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              La versatilidad de OrionStar permite su despliegue en múltiples verticales de negocio, garantizando un ROI rápido a través de la eficiencia operativa.
            </p>
            <div className="pt-8 flex gap-12">
               <div>
                  <p className="text-4xl font-black text-white">40%+</p>
                  <p className="text-[10px] text-slate-500 mono-label uppercase">Eficiencia Operativa</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-white">24/7</p>
                  <p className="text-[10px] text-slate-500 mono-label uppercase">Disponibilidad</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {SECTORS.map((sector) => (
              <div key={sector.name} className="p-10 bg-[#121b28] industrial-border group hover:border-[#ff5f00]/40 transition-all duration-500">
                <sector.icon className="text-[#ff5f00] mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{sector.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
