
import React, { useState } from 'react';
import { Plus, Minus, Cpu, BrainCircuit, Globe, Code2 } from 'lucide-react';

const TECH_FEATURES = [
  {
    title: 'Navegación VSLAM',
    icon: Globe,
    desc: 'Localización y mapeo visual simultáneo de precisión centimétrica. Permite a los robots navegar en entornos dinámicos sin necesidad de etiquetas o marcadores.',
    details: ['Posicionamiento 3D', 'Mapeo rápido', 'Evitación dinámica']
  },
  {
    title: 'IA Generativa OpenAI',
    icon: BrainCircuit,
    desc: 'Integración profunda con LLM para conversaciones naturales. El robot comprende el contexto y ofrece respuestas humanas y útiles.',
    details: ['NLP Avanzado', 'Multi-idioma', 'Chat Inteligente']
  },
  {
    title: 'Flota Enjambre',
    icon: Cpu,
    desc: 'Coordinación inteligente de múltiples unidades. Los robots se comunican entre sí para optimizar rutas y evitar colisiones.',
    details: ['Gestión de tráfico', 'Tareas dinámicas', 'Sincronización']
  },
  {
    title: 'Integración API',
    icon: Code2,
    desc: 'Ecosistema abierto para desarrolladores. Conecte sus robots con sistemas POS, CRM o ERP existentes para control total.',
    details: ['Webhooks', 'SDK Android', 'Data Analytics']
  }
];

const OrionTech: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="tecnologia" className="py-32 bg-[#121b28] relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-[1px] bg-[#ff5f00]"></div>
            <span className="mono-label text-[#ff5f00] text-xs font-black tracking-[0.3em] uppercase">The Core Ecosystem</span>
            <div className="w-12 h-[1px] bg-[#ff5f00]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">Tecnología OrionStar.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {TECH_FEATURES.map((feature, idx) => (
              <div 
                key={feature.title} 
                className={`border border-[#1e2d3d] overflow-hidden transition-all duration-500 ${openIndex === idx ? 'bg-[#1a2632] border-[#ff5f00]/30 shadow-2xl shadow-black/50' : 'bg-transparent'}`}
              >
                <button 
                  onClick={() => setOpenIndex(idx)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <feature.icon className={`${openIndex === idx ? 'text-[#ff5f00]' : 'text-slate-600 group-hover:text-slate-400'} transition-colors`} size={28} />
                    <span className={`text-xl font-black uppercase tracking-tight ${openIndex === idx ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      {feature.title}
                    </span>
                  </div>
                  {openIndex === idx ? <Minus size={20} className="text-[#ff5f00]" /> : <Plus size={20} className="text-slate-700" />}
                </button>
                
                <div className={`transition-all duration-500 ${openIndex === idx ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 space-y-6">
                    <p className="text-slate-400 leading-relaxed border-l-2 border-[#ff5f00] pl-6 italic text-sm">
                      {feature.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {feature.details.map(tag => (
                         <span key={tag} className="text-[9px] font-black text-[#ff5f00] border border-[#ff5f00]/20 px-3 py-1 uppercase tracking-widest bg-[#ff5f00]/5">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-square">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] border border-[#ff5f00]/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute w-[65%] h-[65%] border border-[#ff5f00]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             </div>
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="industrial-border bg-[#0a111a] p-12 text-center space-y-8 shadow-2xl shadow-orange-950/20">
                   <div className="relative inline-block">
                      <Cpu size={80} className="text-[#ff5f00] mx-auto animate-pulse" />
                      <div className="absolute inset-0 bg-[#ff5f00]/20 blur-2xl rounded-full"></div>
                   </div>
                   <div className="space-y-3">
                      <p className="text-white font-black text-3xl uppercase tracking-tighter">OS-ROBOT-V5</p>
                      <p className="text-[#ff5f00] font-mono text-[10px] uppercase tracking-[0.4em]">Neural Engine v5.0 Active</p>
                   </div>
                   <div className="pt-8 border-t border-[#1e2d3d] grid grid-cols-2 gap-8">
                      <div className="text-left space-y-1">
                         <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Latencia RT</p>
                         <p className="text-white font-black text-lg">0.8ms</p>
                      </div>
                      <div className="text-left space-y-1">
                         <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest">IA-CORE</p>
                         <p className="text-white font-black text-lg">98% OPT</p>
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

export default OrionTech;
