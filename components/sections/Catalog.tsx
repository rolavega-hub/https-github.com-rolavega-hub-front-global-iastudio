
import React from 'react';
import { ChevronRight, Maximize, Cpu, Zap, Battery, ShieldCheck } from 'lucide-react';

const ROBOT_MODELS = [
  { 
    id: '01', 
    name: 'GreetingBot Mini', 
    type: 'Asistente Compacto', 
    img: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=600',
    specs: ['Pantalla 14"', 'VSLAM', 'Agilidad Máxima'] 
  },
  { 
    id: '02', 
    name: 'GreetingBot', 
    type: 'Recepción y Guía', 
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=600',
    specs: ['Pantalla 27"', 'IA NLP', 'Marketing'] 
  },
  { 
    id: '03', 
    name: 'DeliveryBot', 
    type: 'Entrega Segura', 
    img: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=600',
    specs: ['Cabina PIN', 'Hotel/Oficina', '30kg Carga'] 
  },
  { 
    id: '04', 
    name: 'Lucki Pro', 
    type: 'Entrega Premium', 
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
    specs: ['Detección 360°', 'Suspensión', '40kg Carga'] 
  },
  { 
    id: '05', 
    name: 'Lucki', 
    type: 'Delivery Estándar', 
    img: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=600',
    specs: ['4 Bandejas', 'Voz Personalizable', 'Eficiente'] 
  },
  { 
    id: '06', 
    name: 'DeliveryBot Pro', 
    type: 'Logística Pesada', 
    img: 'https://images.unsplash.com/photo-1495055154266-57bbdeada43e?auto=format&fit=crop&q=80&w=600',
    specs: ['Grado Industrial', '60kg Carga', 'AWD'] 
  },
  { 
    id: '07', 
    name: 'Dr. Robot', 
    type: 'Esterilización', 
    img: 'https://images.unsplash.com/photo-1558444479-c8a51c97f262?auto=format&fit=crop&q=80&w=600',
    specs: ['UV-C + Spray', '99.9% Patógenos', 'Autónomo'] 
  },
  { 
    id: '08', 
    name: 'Coffee Master', 
    type: 'Brazo Robótico', 
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    specs: ['6-Axis', 'Precisión 0.1mm', 'Consistente'] 
  }
];

const Catalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-32 bg-[#121b28] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff5f00]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#ff5f00]"></div>
              <span className="mono-label text-[#ff5f00] text-[11px] font-black uppercase tracking-[0.3em]">Official Technical Lineup</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">Catálogo <br/> Corporativo.</h2>
          </div>
          <p className="text-slate-500 max-w-md text-base leading-relaxed font-medium border-l border-slate-800 pl-8">
            Cada unidad OrionStar integra hardware de precisión con nuestro ecosistema de IA avanzada para maximizar el retorno de inversión en su sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5">
          {ROBOT_MODELS.map((robot) => (
            <div key={robot.id} className="group bg-[#0a111a] hover:bg-[#121b28] transition-all duration-500 relative flex flex-col h-full overflow-hidden">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#1a2632] border-b border-white/5">
                <img 
                  src={robot.img} 
                  alt={robot.name} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-3xl font-black text-[#ff5f00]/40 group-hover:text-[#ff5f00] transition-colors duration-500">{robot.id}</span>
                </div>
                <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm">
                   <Maximize size={16} className="text-slate-500 group-hover:text-[#ff5f00] transition-colors" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="space-y-1 mb-8">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">{robot.name}</h3>
                    <p className="text-[#ff5f00] text-[9px] font-black tracking-[0.2em] uppercase">{robot.type}</p>
                  </div>

                  <ul className="space-y-3 mb-10">
                    {robot.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <div className="w-1 h-1 bg-[#ff5f00] rounded-full"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-4 border border-white/10 text-[10px] font-black text-white tracking-[0.2em] uppercase hover:bg-[#ff5f00] hover:border-[#ff5f00] transition-all flex items-center justify-center gap-3">
                  Especificaciones <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
