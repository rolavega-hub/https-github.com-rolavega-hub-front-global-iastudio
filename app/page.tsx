
import React from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/sections/Hero';
import Footer from '../components/sections/Footer';
import { Cpu, Box, Database, HardDrive, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <main className="relative bg-[#0a111a]">
      <Navbar />
      <Hero />
      
      {/* Technical Specs / Stats Section */}
      <section className="py-24 bg-[#121b28] border-y border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Cpu, label: 'Procesamiento', val: 'Edge IA', desc: 'Control local ultra-rápido' },
              { icon: Box, label: 'Durabilidad', val: 'IP67 Rated', desc: 'Resistencia total al entorno' },
              { icon: Database, label: 'Analytics', val: 'Fleet Cloud', desc: 'Optimización de datos 24/7' },
              { icon: HardDrive, label: 'Chasis', val: 'Aerospace Gr.', desc: 'Aleación de alta resistencia' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                <stat.icon className="text-[#ff5f00] group-hover:scale-110 transition-transform duration-300" size={32} />
                <div className="space-y-1">
                  <p className="mono-label text-[10px] text-slate-500 font-bold uppercase">{stat.label}</p>
                  <h3 className="text-2xl font-black text-white">{stat.val}</h3>
                  <p className="text-xs text-slate-400 font-medium">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Cards - Industrial Design */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Soluciones Verticales.</h2>
            <div className="h-1 w-24 bg-[#ff5f00] shadow-[0_0_10px_#ff5f00]"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { title: 'Core Logic', tech: 'Autonomía Nivel 5', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
              { title: 'Fleet Control', tech: 'Multi-Robot Sync', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800' },
              { title: 'Energy Hub', tech: 'Smart Charging', img: 'https://images.unsplash.com/photo-1558444479-c8a51c97f262?auto=format&fit=crop&q=80&w=800' }
            ].map((card, idx) => (
              <div key={idx} className="group relative bg-[#121b28] industrial-border p-3 overflow-hidden transition-all duration-500 hover:border-[#ff5f00]/50 rounded-sm">
                <div className="aspect-[16/10] overflow-hidden mb-6 rounded-sm">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" />
                </div>
                <div className="p-4 space-y-4">
                  <span className="mono-label text-[#ff5f00] text-[10px] font-bold">{card.tech}</span>
                  <h3 className="text-2xl font-black text-white uppercase">{card.title}</h3>
                  
                  <button className="btn-real-grey w-full py-3 flex items-center justify-center gap-2 text-[10px] font-black text-white tracking-widest rounded-sm group/btn">
                    VER ESPECIFICACIONES 
                    <ChevronRight size={14} className="text-[#ff5f00] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default HomePage;
