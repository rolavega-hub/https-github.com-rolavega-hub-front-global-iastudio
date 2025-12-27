
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, Activity, ShieldCheck, Zap } from 'lucide-react';

const ROBOTS = [
  {
    name: 'GreetingBot Mini',
    tag: 'Recepción Inteligente',
    desc: 'El robot de recepción más ágil. Ideal para retail, clínicas y espacios reducidos con interacción vocal premium.',
    specs: { pantalla: '14" HD', giro: '0m (In Situ)', sensores: 'Lidar + VSLAM' },
    img: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'GreetingBot',
    tag: 'Marketing e Interacción',
    desc: 'Punto de información y publicidad con pantalla de 27". Atrae clientes y guía a los visitantes de forma autónoma.',
    specs: { pantalla: '27" 4K', voz: 'AI Multilingüe', marketing: 'Digital Signage' },
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'DeliveryBot',
    tag: 'Logística de Interior',
    desc: 'Cabina cerrada y segura para hoteles y oficinas. Garantiza la privacidad y seguridad en la entrega de paquetes.',
    specs: { seguridad: 'PIN/QR Code', carga: '30kg', compartimentos: 'Cerrados' },
    img: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Lucki Pro',
    tag: 'Entrega Premium',
    desc: 'La evolución de la entrega en hostelería. Suspensión independiente y detección de obstáculos 360°.',
    specs: { carga: '40kg', suspension: 'Activa', sensores: '3D VSLAM' },
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Lucki',
    tag: 'Delivery Estándar',
    desc: 'El robot de servicio más vendido. Eficiencia absoluta en restaurantes de alto tráfico con 4 bandejas.',
    specs: { bandejas: '4 Ajustables', velocidad: '1.2m/s', carga: '40kg' },
    img: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'DeliveryBot Pro',
    tag: 'Logística Industrial',
    desc: 'Chasis reforzado para transporte pesado en almacenes y centros logísticos. Capacidad de carga superior.',
    specs: { carga: '60kg', traccion: 'AWD', entorno: 'Industrial' },
    img: 'https://images.unsplash.com/photo-1495055154266-57bbdeada43e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Dr. Robot',
    tag: 'Desinfección UV-C',
    desc: 'Eliminación autónoma de patógenos mediante atomización ultrasónica y radiación UV-C certificada.',
    specs: { area: '1000m²/h', modo: 'Dual (UV+Spray)', seguridad: 'Radar Humano' },
    img: 'https://images.unsplash.com/photo-1558444479-c8a51c97f262?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Coffee Robot Master',
    tag: 'Barista Robótico',
    desc: 'Brazo robótico de 6 ejes de alta precisión para la elaboración de café de especialidad y coctelería.',
    specs: { precision: '0.1mm', ejes: '6-Axis', consistencia: '100%' },
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

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

  useEffect(() => {
    const timer = setInterval(handleNext, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0a111a]">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className={`space-y-10 transition-all duration-500 ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ff5f00] shadow-[0_0_8px_#ff5f00]"></div>
              <span className="mono-label text-[#ff5f00] text-xs font-bold tracking-[0.3em]">ORIONSTAR TECHNOLOGY</span>
            </div>
            
            <div className="min-h-[320px]">
              <p className="text-[#ff5f00] font-black text-xs tracking-[0.3em] mb-4 uppercase flex items-center gap-2">
                <Activity size={14} className="animate-pulse" /> {ROBOTS[current].tag}
              </p>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                {ROBOTS[current].name.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 italic">
                  {ROBOTS[current].name.split(' ').slice(1).join(' ') || 'SYSTEM'}
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium border-l-2 border-slate-800 pl-6">
                {ROBOTS[current].desc}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
               {Object.entries(ROBOTS[current].specs).map(([key, val]) => (
                 <div key={key} className="space-y-1">
                    <p className="mono-label text-[10px] text-slate-500 font-bold uppercase">{key}</p>
                    <p className="text-white font-black text-sm uppercase">{val}</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#solicitar-estudio" className="group px-10 py-5 bg-[#ff5f00] text-white font-black text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#ff7a22] transition-all shadow-xl shadow-orange-950/20 active:scale-95 uppercase">
                Estudio a medida
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-2">
                <button onClick={handlePrev} className="p-5 bg-[#121b28] border border-[#1e2d3d] text-white hover:border-[#ff5f00] hover:text-[#ff5f00] transition-all active:scale-90">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={handleNext} className="p-5 bg-[#121b28] border border-[#1e2d3d] text-white hover:border-[#ff5f00] hover:text-[#ff5f00] transition-all active:scale-90">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative group">
             <div className="absolute -inset-10 bg-[#ff5f00]/10 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className={`relative industrial-border bg-[#121b28] p-4 transition-all duration-500 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="aspect-square overflow-hidden relative">
                   <img 
                     src={ROBOTS[current].img} 
                     alt={ROBOTS[current].name} 
                     className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                   />
                   
                   <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-2">
                      <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-mono text-green-400">
                        LINK_STATUS: STABLE
                      </div>
                      <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-mono text-white">
                        ID: OS_ROBOT_{100 + current}
                      </div>
                   </div>

                   <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                      <div className="flex justify-between items-end">
                         <div className="space-y-2">
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                               <p className="text-[10px] font-mono text-white/70 uppercase">Telemetry stream active</p>
                            </div>
                            <p className="text-white font-black text-2xl uppercase tracking-tighter">AI NEURAL CORE V5</p>
                         </div>
                         <div className="p-4 bg-[#ff5f00] text-white">
                            <Cpu size={24} className="animate-spin-slow" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
