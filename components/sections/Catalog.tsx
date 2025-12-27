
import React, { useState } from 'react';
import { ChevronRight, Scan, ImageOff, Loader2 } from 'lucide-react';

// Updated with reliable placeholder URLs matching brand colors (Navy #16202e / Orange #ff5f00)
const ROBOT_MODELS = [
  { id: '01', name: 'GreetingBot Mini', type: 'Asistente Compacto', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=GreetingBot+Mini', specs: ['14" FHD Screen', 'Giro 0m Radius', '10h Autonomía'] },
  { id: '02', name: 'GreetingBot Max', type: 'Recepción y Guía AI', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=GreetingBot+Max', specs: ['27" 4K Display', 'IA Generativa', '30+ Idiomas'] },
  { id: '03', name: 'Delivery X1', type: 'Entrega Segura', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=Delivery+X1', specs: ['Cierre IP54', 'Ascensor IoT', '30kg Carga'] },
  { id: '04', name: 'Lucki Pro', type: 'Entrega Premium', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=Lucki+Pro', specs: ['Suspensión Indep.', 'Visión 360°', '60kg Carga'] },
  { id: '05', name: 'Lucki Bot', type: 'Delivery Estándar', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=Lucki+Bot', specs: ['4 Bandejas', 'Paso 70cm', 'Interacción IA'] },
  { id: '06', name: 'Humidifier Bot', type: 'Control Ambiental', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=Humidifier+Bot', specs: ['15L Tanque', 'Atomización', '500m² Área'] },
  { id: '07', name: 'Service Robot', type: 'Gestión Eventos', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=Service+Robot', specs: ['Check-in Facial', 'Tickets Print', 'Voz Natural'] },
  { id: '08', name: 'Coffee Master', type: 'Barista Biónico', img: 'https://placehold.co/600x600/16202e/ff5f00.png?text=Coffee+Master', specs: ['Brazo 6-Ejes', '3000h Vida', 'Seguridad Dual'] }
];

interface RobotProps {
  robot: typeof ROBOT_MODELS[0];
}

const RobotCard: React.FC<RobotProps> = ({ robot }) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className="group bg-[#121b28] border border-white/5 hover:border-[#ff5f00]/30 transition-all duration-500 relative flex flex-col h-full overflow-hidden hover:shadow-2xl hover:shadow-[#ff5f00]/5">
      
      {/* ID Watermark */}
      <div className="absolute top-2 right-4 text-5xl font-black text-white/[0.03] select-none group-hover:text-[#ff5f00]/10 transition-colors z-0">
        {robot.id}
      </div>

      {/* Image Container - Responsive Height */}
      <div className="relative h-64 sm:h-72 w-full p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-[#16202e] to-[#121b28] border-b border-white/5 overflow-hidden">
        
        {/* Loading Spinner */}
        {imageState === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#16202e]">
            <Loader2 className="text-[#ff5f00] animate-spin" size={24} />
          </div>
        )}

        {/* Error State */}
        {imageState === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#16202e] text-slate-600">
            <ImageOff size={32} strokeWidth={1.5} />
            <span className="text-[10px] font-mono mt-2 uppercase tracking-wider">Image Offline</span>
          </div>
        )}

        {/* Image Glow Background */}
        <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
        
        <img 
          src={robot.img} 
          alt={robot.name} 
          loading="lazy"
          onLoad={() => setImageState('loaded')}
          onError={() => setImageState('error')}
          className={`
            h-full w-full object-contain filter drop-shadow-xl z-10 
            transition-all duration-700 ease-out
            group-hover:scale-110 group-hover:-translate-y-2
            ${imageState === 'loaded' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        />

        {/* Status Indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
            <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] transition-colors duration-300 ${imageState === 'error' ? 'bg-red-500 shadow-red-500' : 'bg-emerald-500 shadow-emerald-500'}`}></div>
            <span className={`text-[9px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity delay-100 ${imageState === 'error' ? 'text-red-500' : 'text-emerald-500'}`}>
              {imageState === 'error' ? 'Error' : 'Ready'}
            </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-[#121b28] relative z-10">
        <div>
          <div className="mb-6 space-y-2">
            <span className="inline-block px-2 py-1 bg-[#ff5f00]/10 border border-[#ff5f00]/20 text-[#ff5f00] text-[9px] font-black tracking-[0.2em] uppercase rounded-sm">
                {robot.type}
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#ff5f00] transition-colors duration-300">
              {robot.name}
            </h3>
          </div>

          {/* Specs Grid */}
          <div className="space-y-3 mb-8">
            {robot.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-2 group/spec hover:border-white/10 transition-colors">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">
                    <Scan size={10} className="text-slate-700 group-hover/spec:text-[#ff5f00]" />
                    Spec_0{idx + 1}
                </span>
                <span className="text-[10px] text-slate-300 font-mono text-right">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 bg-[#0a111a] border border-white/10 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] hover:bg-[#ff5f00] hover:text-white hover:border-[#ff5f00] transition-all flex items-center justify-center gap-3 group-hover:translate-x-1">
          Especificaciones <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
};

const Catalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-32 bg-[#0a111a] border-y border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff5f00]/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#ff5f00]"></div>
              <span className="mono-label text-[#ff5f00] text-[11px] font-black uppercase tracking-[0.3em]">Official Lineup</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              Catálogo <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600">Series 2024.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
             <p className="text-slate-500 max-w-md text-sm leading-relaxed font-medium border-l-2 border-[#1e2d3d] pl-6">
               Despliegue flotas inteligentes adaptadas a cada necesidad operativa. Desde recepción hasta logística pesada.
             </p>
             <button className="text-[#ff5f00] text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
               Ver Tabla Comparativa <ChevronRight size={14} />
             </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROBOT_MODELS.map((robot) => (
            <RobotCard key={robot.id} robot={robot} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
