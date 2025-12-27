
import React from 'react';
import { Settings, FileSearch, ArrowRight, Layers } from 'lucide-react';

const CustomSolutions: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a111a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#ff5f00]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="mono-label text-[#ff5f00] text-xs font-bold uppercase">Tailor-Made Engineering</span>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                Soluciones <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 italic font-light">a Medida.</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              No todas las empresas son iguales. Desarrollamos implementaciones personalizadas que integran el hardware de OrionStar con sus procesos internos específicos.
            </p>

            <div className="space-y-8">
              {[
                { icon: FileSearch, title: 'Análisis de Flujo', desc: 'Estudio detallado de trayectorias y puntos críticos de interacción.' },
                { icon: Layers, title: 'Stack de Integración', desc: 'Conectividad nativa con su software de gestión empresarial.' },
                { icon: Settings, title: 'Soporte Post-Lanzamiento', desc: 'Mantenimiento preventivo y actualizaciones de firmware remotas.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#121b28] border border-[#1e2d3d] flex items-center justify-center group-hover:border-[#ff5f00] transition-colors">
                    <item.icon className="text-[#ff5f00]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="industrial-border bg-[#121b28] p-12 space-y-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Settings size={200} className="animate-[spin_10s_linear_infinite]" />
              </div>
              
              <div className="space-y-2 relative z-10">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">¿Listo para el cambio?</h3>
                <p className="text-[#ff5f00] font-mono text-xs uppercase tracking-[0.2em]">Solicitar Estudio Técnico Gratuito</p>
              </div>

              <div className="space-y-6 relative z-10">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Nuestros ingenieros realizarán una consultoría técnica para determinar el impacto real de la robótica en su modelo de negocio.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="#" className="w-full bg-[#ff5f00] text-white font-black py-5 text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#ff7a22] transition-all active:scale-95">
                    AGENDAR CONSULTA <ArrowRight size={18} />
                  </a>
                  <p className="text-center text-[9px] text-slate-600 font-bold uppercase tracking-widest">
                    Sin compromiso · Respuesta en menos de 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
