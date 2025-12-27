
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Activity, Info, BarChart3, Binary, X } from 'lucide-react';

const ROBOTS = [
  {
    name: 'GreetingBot Mini',
    tag: 'Recepción Compacta & Guía',
    desc: 'El anfitrión perfecto para espacios reducidos. Pantalla HD de 14" y navegación ágil para bienvenida y guiado en clínicas, retail y oficinas.',
    specs: { pantalla: '14" FHD', cpu: 'Qualcomm', voz: '2-Way AI' },
    techDetails: {
      pantalla: 'Panel táctil 1080p de 14 pulgadas. Interfaz optimizada para interacción rápida y visualización de catálogos.',
      cpu: 'Procesador Qualcomm Snapdragon de 8 núcleos para procesamiento de IA en el borde (Edge AI) sin latencia.',
      voz: 'Sistema de diálogo bidireccional con cancelación de eco y reconocimiento de voz natural en entornos ruidosos.'
    },
    img: '/images/greetingbot-mini.png' 
  },
  {
    name: 'GreetingBot Max',
    tag: 'Marketing & Asistente Premium',
    desc: 'Impacto visual garantizado. Su pantalla 4K de 27" convierte la interacción en una experiencia inmersiva para hoteles y showrooms corporativos.',
    specs: { pantalla: '27" 4K', mic: '6-Array Mic', sensor: 'Lidar + RGBD' },
    techDetails: {
      pantalla: 'Display 4K ultra-brillante para señalización digital y publicidad dinámica. Gestión de contenido remota en tiempo real.',
      mic: 'Matriz circular de 6 micrófonos capaz de localizar la fuente de sonido en 360 grados y filtrar ruido ambiental.',
      sensor: 'Navegación híbrida visual y láser (VSLAM) para un posicionamiento preciso en grandes vestíbulos y pasillos.'
    },
    img: '/images/greetingbot-max.png'
  },
  {
    name: 'Delivery X1',
    tag: 'Logística Segura & Privada',
    desc: 'Entrega autónoma con privacidad total. Compartimentos cerrados de 50L y cierre magnético, ideal para hoteles VIP y transporte de documentos.',
    specs: { carga: '30kg Max', seguridad: 'Auto-Door', bateria: '10h+ Ops' },
    techDetails: {
      carga: 'Capacidad de 30kg distribuida en compartimentos estancos. Sensores de presencia que evitan el cierre accidental.',
      seguridad: 'Sistema de bloqueo inteligente. Apertura mediante código PIN, escaneo QR o reconocimiento facial.',
      bateria: 'Batería de polímero de litio de alta densidad con retorno automático a base de carga (Auto-Docking).'
    },
    img: '/images/delivery-x1.png'
  },
  {
    name: 'Lucki Pro',
    tag: 'Delivery Master AI',
    desc: 'El estándar de oro en hostelería. Suspensión independiente y percepción 360° para un servicio de mesas fluido y sin derrames.',
    specs: { bandejas: '4 Capas', vision: '3 x RGBD', suspension: 'Torsión Indep.' },
    techDetails: {
      bandejas: '4 bandejas ajustables de gran superficie (50x40cm) con capacidad de carga total de 60kg. Detección de recogida por IR.',
      vision: 'Triple cámara de profundidad RGBD + Lidar para una evasión de obstáculos superior, detectando objetos de hasta 2cm.',
      suspension: 'Sistema de suspensión por barra de torsión de grado automotriz. Estabilidad garantizada en suelos irregulares y alfombras.'
    },
    img: '/images/lucki-pro.png'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeSpec, setActiveSpec] = useState<{key: string, val: string} | null>(null);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % ROBOTS.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + ROBOTS.length) % ROBOTS.length);
      setFade(true);
    }, 300);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-12 overflow-visible bg-[#0a111a]">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          
          <div className={`transition-all duration-500 ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 mb-10">
              <p className="text-[#ff5f00] font-black text-xs tracking-[0.4em] uppercase flex items-center gap-2">
                <Activity size={14} className="animate-pulse" /> {ROBOTS[current].tag}
              </p>
              <div className="relative">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tighter uppercase break-words flex flex-col items-start">
                  <span className="block">{ROBOTS[current].name.split(' ')[0]}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500 italic font-light pb-2 pr-4">
                    {ROBOTS[current].name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-medium border-l-2 border-[#ff5f00] pl-6 italic mb-12">
              {ROBOTS[current].desc}
            </p>

            {/* SPECS & CONTROLS */}
            <div className="p-6 md:p-8 bg-[#121b28] border border-[#1e2d3d] shadow-2xl relative">
              <div className="grid grid-cols-3 gap-6 mb-8">
                 {Object.entries(ROBOTS[current].specs).map(([key, val]) => (
                   <button 
                    key={key} 
                    onClick={() => setActiveSpec({key, val})}
                    className="space-y-1 text-left group/spec transition-all"
                   >
                      <p className="mono-label text-[9px] text-slate-500 font-bold uppercase tracking-widest">{key}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-white font-black text-xs md:text-sm uppercase group-hover/spec:text-[#ff5f00] whitespace-nowrap">{val}</p>
                        <Info size={10} className="text-slate-700 group-hover/spec:text-[#ff5f00]" />
                      </div>
                   </button>
                 ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-2">
                  <button onClick={handlePrev} className="p-4 bg-[#0a111a] border border-[#1e2d3d] text-white hover:border-[#ff5f00] hover:text-[#ff5f00] transition-all active:scale-95 shadow-inner">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={handleNext} className="p-4 bg-[#0a111a] border border-[#1e2d3d] text-white hover:border-[#ff5f00] hover:text-[#ff5f00] transition-all active:scale-95 shadow-inner">
                    <ChevronRight size={18} />
                  </button>
                </div>
                <a href="#catalogo" className="hidden sm:flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-white transition-colors tracking-[0.2em] uppercase border-b border-transparent hover:border-[#ff5f00]">
                  Ficha Técnica <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* VISUAL PANEL - CLEAN RENDER (NO GRAYSCALE) */}
          <div className="relative group perspective-[1000px]">
             <div className="absolute -inset-20 bg-[#ff5f00]/5 blur-[120px] rounded-full opacity-30"></div>
             <div className={`relative transition-all duration-700 ${fade ? 'opacity-100 rotate-y-0 scale-100' : 'opacity-0 rotate-y-12 scale-95'}`}>
                {/* Robot Image Container - Optimized for PNG Cutouts */}
                <div className="aspect-square lg:aspect-[4/5] relative flex items-center justify-center">
                   <img 
                     src={ROBOTS[current].img} 
                     alt={ROBOTS[current].name} 
                     className="max-h-[110%] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 hover:scale-105 transition-transform duration-500"
                   />
                   
                   {/* Background Glow Effect behind robot */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-b from-white/5 to-transparent blur-3xl rounded-full -z-10"></div>
                   
                   <div className="absolute top-0 right-0">
                      <div className="bg-[#ff5f00] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,95,0,0.4)]">
                        ORIONSTAR_OFFICIAL
                      </div>
                   </div>

                   <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-6">
                      <div className="space-y-1">
                         <p className="text-[10px] font-mono text-cyan-400 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                           AI_CORE_ONLINE
                         </p>
                      </div>
                      <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 text-white/40 group-hover:text-[#ff5f00] transition-colors rounded-full">
                         <Cpu size={24} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>

      {/* MODAL TECNICO */}
      {activeSpec && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0a111a]/95 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#121b28] border border-[#ff5f00]/30 p-10 shadow-2xl">
            <button onClick={() => setActiveSpec(null)} className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>

            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 bg-[#ff5f00]/10 border border-[#ff5f00]/20">
                <BarChart3 className="text-[#ff5f00]" size={28} />
              </div>
              <div>
                <p className="mono-label text-[10px] text-[#ff5f00] font-black tracking-widest mb-1">Análisis Técnico</p>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none">{activeSpec.key}</h3>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-slate-400 text-base leading-relaxed border-l-2 border-[#ff5f00] pl-6 italic font-medium">
                {(ROBOTS[current].techDetails as any)[activeSpec.key]}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Protocolo Red</p>
                  <p className="text-white text-xs font-mono">TLS_V3_ENCRYPTED</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Muestreo RT</p>
                  <p className="text-green-400 text-xs font-mono">&lt; 15ms RT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
