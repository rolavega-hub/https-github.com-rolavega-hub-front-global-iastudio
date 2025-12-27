
import React from 'react';
import { ChevronRight, Maximize, Cpu } from 'lucide-react';

const ROBOT_MODELS = [
  { id: '01', name: 'GreetingBot Mini', type: 'Asistente Compacto', img: '/images/greetingbot-mini.png', specs: ['14" FHD', 'Giro 0m', '10h Batería'] },
  { id: '02', name: 'GreetingBot Max', type: 'Recepción y Guía AI', img: '/images/greetingbot-max.png', specs: ['27" 4K', 'IA OpenAI', '30 Idiomas'] },
  { id: '03', name: 'Delivery X1', type: 'Entrega Segura', img: '/images/delivery-x1.png', specs: ['Cierre IP54', 'Hotel VIP', '30kg Carga'] },
  { id: '04', name: 'Lucki Pro', type: 'Entrega Premium', img: '/images/lucki-pro.png', specs: ['Suspension 3D', '360° Vision', '60kg Carga'] },
  { id: '05', name: 'Lucki Bot', type: 'Delivery Estándar', img: '/images/lucki-bot.png', specs: ['4 Bandejas', 'Paso 70cm', 'Interacción IA'] },
  { id: '06', name: 'Humidifier Bot', type: 'Control Ambiental', img: '/images/delivery-x1.png', specs: ['15L Tanque', 'Atomización', 'Áreas Grandes'] }, // Placeholder img for variant
  { id: '07', name: 'Service Robot', type: 'Gestión Eventos', img: '/images/greetingbot-max.png', specs: ['Check-in', 'Tickets', 'Voz Natural'] }, // Placeholder img
  { id: '08', name: 'Coffee Master', type: 'Barista Biónico', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', specs: ['Brazo 6-Ejes', '3000h Vida', 'Seguridad Colab.'] } // External placeholder until file provided
];

const Catalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-32 bg-[#121b28] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff5f00]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#ff5f00]"></div>
              <span className="mono-label text-[#ff5f00] text-[11px] font-black uppercase tracking-[0.3em]">Official OrionStar Lineup</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">Catálogo <br/> Oficial.</h2>
          </div>
          <p className="text-slate-500 max-w-md text-base leading-relaxed font-medium border-l border-slate-800 pl-8">
            Nuestros sistemas robóticos integran ingeniería de precisión con IA avanzada para transformar la eficiencia de su sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5">
          {ROBOT_MODELS.map((robot) => (
            <div key={robot.id} className="group bg-[#0a111a] hover:bg-[#121b28] transition-all duration-500 relative flex flex-col h-full overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-[#1a2632] border-b border-white/5 p-6 flex items-center justify-center">
                <img 
                  src={robot.img} 
                  alt={robot.name} 
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                   <div className="bg-[#ff5f00] p-2 rounded-full shadow-lg shadow-[#ff5f00]/20">
                     <Cpu size={16} className="text-white" />
                   </div>
                </div>
                <div className="absolute bottom-4 left-6 z-10">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-[#ff5f00] transition-colors duration-500">{robot.id}</span>
                </div>
              </div>

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

                <button className="w-full py-4 border border-white/10 text-[10px] font-black text-white tracking-[0.2em] uppercase hover:bg-[#ff5f00] hover:border-[#ff5f00] transition-all flex items-center justify-center gap-3 group-hover:bg-white/5">
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
