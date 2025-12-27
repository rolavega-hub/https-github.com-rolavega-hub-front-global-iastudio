
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, BrainCircuit, Cpu, Code2, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTechOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const techLinks = [
    { name: 'Navegación VSLAM', icon: Globe, href: '#tecnologia' },
    { name: 'IA Generativa OpenAI', icon: BrainCircuit, href: '#tecnologia' },
    { name: 'Flota Enjambre', icon: Cpu, href: '#tecnologia' },
    { name: 'Integración API', icon: Code2, href: '#tecnologia' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-0 bg-[#0a111a]/95 backdrop-blur-xl border-b border-[#1e2d3d]' : 'py-2 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-24 gap-4">
          
          {/* LOGO GROUP - COMPACT */}
          <div className="flex items-center gap-4 min-w-fit">
            <a href="/" className="flex items-center gap-4 group">
              <div className="grid grid-cols-4 gap-1 p-1.5 bg-[#121b28] rounded-sm industrial-border">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ff5f00] shadow-[0_0_8px_rgba(255,95,0,0.6)]" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none">GLOBAL</span>
                <span className="text-slate-500 font-bold text-[9px] tracking-[0.2em] leading-none mt-1 uppercase">ROBOTICS</span>
              </div>
            </a>
          </div>

          {/* MAIN NAVIGATION - AUTO-ADJUSTABLE SPACING */}
          <div className="hidden xl:flex items-center justify-center flex-1 px-8 gap-x-[3vw]">
            <a href="#catalogo" className="group flex flex-col items-center">
              <span className="text-[10px] font-black text-slate-500 group-hover:text-[#ff5f00] transition-colors tracking-[0.2em] uppercase">Catálogo</span>
              <span className="text-sm font-black text-white group-hover:text-[#ff5f00] transition-colors tracking-tighter uppercase leading-none mt-1">Técnico</span>
            </a>
            
            <a href="#sectores" className="text-[11px] font-black text-slate-400 hover:text-white transition-colors tracking-[0.2em] uppercase">Sectores</a>
            
            <a href="#soluciones-medida" className="group flex flex-col items-center">
              <span className="text-[10px] font-black text-slate-500 group-hover:text-white transition-colors tracking-[0.2em] uppercase">Soluciones</span>
              <span className="text-sm font-black text-white group-hover:text-[#ff5f00] transition-colors tracking-tighter uppercase leading-none mt-1">A Medida</span>
            </a>

            <div className="relative h-24 flex items-center" ref={dropdownRef}>
              <button 
                onClick={() => setTechOpen(!techOpen)}
                className={`flex items-center gap-2 text-[11px] font-black transition-colors tracking-[0.2em] uppercase h-full ${techOpen ? 'text-[#ff5f00]' : 'text-slate-400 hover:text-white'}`}
              >
                <div className="flex flex-col items-start">
                  <span className="text-[10px] opacity-60">Tecnología</span>
                  <span>OrionStar</span>
                </div>
                <ChevronDown size={14} className={`transition-transform duration-300 ${techOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {techOpen && (
                <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-72 bg-[#121b28] border border-[#1e2d3d] p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  {techLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="flex items-center gap-4 p-4 text-[10px] font-black text-slate-400 hover:text-white hover:bg-[#1e2d3d] transition-all uppercase tracking-widest border border-transparent hover:border-[#ff5f00]/20"
                      onClick={() => setTechOpen(false)}
                    >
                      <link.icon size={18} className="text-[#ff5f00]" />
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA BUTTON - RESPONSIVE SIZE */}
          <div className="hidden lg:block">
            <a
              href="#solicitar-estudio"
              className="px-8 xl:px-12 py-6 bg-[#ff5f00] flex items-center justify-center text-center text-[12px] font-black text-white hover:bg-[#ff7a22] transition-all active:brightness-90 shadow-xl shadow-orange-950/20 uppercase tracking-[0.15em] leading-tight"
            >
              Solicitar estudio <br className="hidden xl:block" /> a medida
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`xl:hidden absolute top-full left-0 w-full bg-[#0a111a] border-t border-[#1e2d3d] transition-all duration-300 ${isOpen ? 'opacity-100 max-h-screen border-b' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="p-8 space-y-6 text-center">
          <a href="#catalogo" onClick={() => setIsOpen(false)} className="block text-sm font-black text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Catálogo Técnico</a>
          <a href="#sectores" onClick={() => setIsOpen(false)} className="block text-sm font-black text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Sectores</a>
          <a href="#soluciones-medida" onClick={() => setIsOpen(false)} className="block text-sm font-black text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Soluciones a medida</a>
          <a href="#solicitar-estudio" onClick={() => setIsOpen(false)} className="block w-full text-center py-6 bg-[#ff5f00] text-white font-black uppercase tracking-widest shadow-lg">Solicitar estudio a medida</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
