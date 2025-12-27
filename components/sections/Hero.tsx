
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Activity, Info, BarChart3, Binary, X } from 'lucide-react';

const ROBOTS = [
  {
    name: 'GreetingBot Mini',
    tag: 'Recepción y Guía Inteligente',
    desc: 'El robot más ágil para espacios dinámicos. Su pantalla de 14" y su radio de giro cero lo hacen perfecto para retail y clínicas de alta rotación.',
    specs: { pantalla: '14" FHD', giro: '0.0m', sensores: 'Lidar + VSLAM' },
    techDetails: {
      pantalla: 'Panel táctil industrial IPS de alta definición. Ángulo de visión de 178º optimizado para niños y adultos.',
      giro: 'Radio de giro cero absoluto. Capacidad de maniobra en pasillos estrechos de hasta 55cm.',
      sensores: 'Fusión de Lidar de 25m y cámaras estéreo 3D para una navegación segura en entornos con personas.'
    },
    img: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200' 
  },
  {
    name: 'GreetingBot Max',
    tag: 'Marketing y Bienvenida Premium',
    desc: 'Atrae y fideliza con una pantalla de 27" 4K. El anfitrión definitivo para hoteles, eventos corporativos y centros de exposiciones.',
    specs: { pantalla: '27" 4K', voz: '6-Mic Array', marketing: 'Digital CMS' },
    techDetails: {
      pantalla: 'Pantalla publicitaria de gran formato con gestión remota de contenidos vía nube (OrionStar CMS).',
      voz: 'Matriz de 6 micrófonos con cancelación de ruido activa para reconocimiento de voz a 5 metros.',
      marketing: 'Recopilación de datos analíticos: tiempo de interacción, demografía básica y mapas de calor.'
    },
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'DeliveryBot Pro',
    tag: 'Logística de Interior Segura',
    desc: 'Compartimentos cerrados con acceso por código PIN. Garantiza entregas privadas y seguras en oficinas, hoteles y hospitales.',
    specs: { cabina: '3 Bandejas', carga: '35kg', seguridad: 'PIN/QR' },
    techDetails: {
      cabina: 'Estructura modular con apertura automática. Desinfección interna opcional por luz UV-C.',
      carga: 'Sensores de peso integrados que notifican al receptor la llegada exacta del paquete.',
      seguridad: 'Cierre electromecánico de seguridad y cámara de vigilancia frontal integrada.'
    },
    img: 'https://images.unsplash.com/photo-1558444479-c8a51c97f262?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Lucki Pro',
    tag: 'Servicio Gastronómico Avanzado',
    desc: 'La referencia mundial en hostelería. Suspensión activa de barra de torsión y detección de obstáculos bajos de 360°.',
    specs: { carga: '40kg', suspension: 'Activa 3D', vision: '3D ToF' },
    techDetails: {
      carga: '4 bandejas ajustables con sensores de inducción que detectan cuando se retira el plato.',
      suspension: 'Sistema de amortiguación inteligente que permite el transporte de líquidos sin derrames a 1.2m/s.',
      vision: 'Algoritmo de evitación de obstáculos 3D VSLAM que detecta incluso pies y mascotas en movimiento.'
    },
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
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
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase break-words">
                  {ROBOTS[current].name.split(' ')[0]} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500 italic font-light">
                    {ROBOTS[current].name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-medium border-l-2 border-[#ff5f00] pl-6 italic mb-12">
              {ROBOTS[current].desc}
            </p>

            {/* SPECS & CONTROLS - REFINED SPACING */}
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

          {/* VISUAL PANEL - NO CLIPPING */}
          <div className="relative group">
             <div className="absolute -inset-20 bg-[#ff5f00]/5 blur-[120px] rounded-full opacity-50"></div>
             <div className={`relative bg-[#0d151f] p-4 transition-all duration-700 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} border border-[#1e2d3d]`}>
                <div className="aspect-square lg:aspect-[4/5] overflow-hidden relative">
                   <img 
                     src={ROBOTS[current].img} 
                     alt={ROBOTS[current].name} 
                     className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                   
                   <div className="absolute top-6 left-6">
                      <div className="bg-[#ff5f00] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,95,0,0.4)]">
                        OS_UNIT_READY
                      </div>
                   </div>

                   <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[10px] font-mono text-green-400 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                           LINK_ACTIVE_0{current}
                         </p>
                         <p className="text-white font-black text-xl uppercase tracking-tighter">ORION OS v5.2</p>
                      </div>
                      <div className="p-3 bg-white/5 backdrop-blur-md border border-white/10 text-white/40 group-hover:text-[#ff5f00] transition-colors">
                         <Cpu size={24} />
                      </div>
                   </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-[#ff5f00]/50 pointer-events-none"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-[#ff5f00]/50 pointer-events-none"></div>
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
