
import React from 'react';
import { ArrowRight, Terminal, Shield, Workflow } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0a111a]">
      <div className="absolute inset-0 tech-grid opacity-25"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff5f00]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#ff5f00] shadow-[0_0_8px_#ff5f00]"></div>
              <span className="mono-label text-[#ff5f00] text-xs font-bold">Industrial Grade v4.0</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              Robustez <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-600">Técnica.</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
              Sistemas robóticos de alta disponibilidad diseñados para el sector B2B. Ingeniería de precisión que garantiza la continuidad de su negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <a 
                href="/soluciones"
                className="btn-real-orange px-10 py-5 text-white font-black text-sm tracking-widest flex items-center justify-center gap-3 rounded-sm group"
              >
                SOLUCIONES B2B
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/catalogo"
                className="btn-real-grey px-10 py-5 text-white font-black text-sm tracking-widest flex items-center justify-center rounded-sm"
              >
                CATÁLOGO TÉCNICO
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-[#1e2d3d]">
               <div className="space-y-2">
                  <Terminal size={20} className="text-[#ff5f00]" />
                  <p className="mono-label text-[10px] text-slate-500">Kernel RTOS</p>
                  <p className="text-white font-bold text-sm">Real-Time</p>
               </div>
               <div className="space-y-2">
                  <Shield size={20} className="text-[#ff5f00]" />
                  <p className="mono-label text-[10px] text-slate-500">Security</p>
                  <p className="text-white font-bold text-sm">Encrypted</p>
               </div>
               <div className="space-y-2">
                  <Workflow size={20} className="text-[#ff5f00]" />
                  <p className="mono-label text-[10px] text-slate-500">Fleet Mgmt</p>
                  <p className="text-white font-bold text-sm">Automated</p>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 border-[16px] border-[#121b28] translate-x-6 translate-y-6 -z-10 shadow-2xl"></div>
             <div className="relative industrial-border bg-[#121b28] p-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="High Tech Robotics" 
                  className="w-full grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
                
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                   <div className="px-3 py-1 bg-[#ff5f00] text-[10px] font-black text-white uppercase tracking-tighter shadow-lg shadow-orange-950/50">System Live</div>
                   <div className="px-3 py-1 bg-black/70 backdrop-blur-md text-[10px] font-mono text-green-400 border border-green-500/20">POS: 41.3851° N, 2.1734° E</div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
