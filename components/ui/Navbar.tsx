
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, LayoutGrid, Globe, BrainCircuit, Cpu, Code2 } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4 bg-[#0a111a]/95 backdrop-blur-md border-b border-[#1e2d3d]' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-4 group">
            <div className="grid grid-cols-4 gap-1 p-1.5 bg-[#121b28] rounded-sm industrial-border">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#ff5f00] shadow-[0_0_8px_rgba(255,95,0,0.6)] group-hover:scale-110 transition-transform" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tighter leading-none uppercase">GLOBAL</span>
              <span className="text-[#64748b] font-bold text-[10px] tracking-[0.3em] leading-none mt-1 uppercase">ROBOTICS</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#catalogo" className="text-[11px] font-black text-slate-400 hover:text-[#ff5f00] transition-colors tracking-[0.2em] uppercase">Catálogo Técnico</a>
            <a href="#sectores" className="text-[11px] font-black text-slate-400 hover:text-[#ff5f00] transition-colors tracking-[0.2em] uppercase">Sectores</a>
            <a href="#soluciones-medida" className="text-[11px] font-black text-slate-400 hover:text-[#ff5f00] transition-colors tracking-[0.2em] uppercase">Soluciones a medida</a>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setTechOpen(!techOpen)}
                className={`flex items-center gap-2 text-[11px] font-black transition-colors tracking-[0.2em] uppercase ${techOpen ? 'text-[#ff5f00]' : 'text-slate-400 hover:text-[#ff5f00]'}`}
              >
                Tecnología OrionStar <ChevronDown size={14} className={`transition-transform duration-300 ${techOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {techOpen && (
                <div className="absolute top-full left-0 mt-4 w-72 bg-[#121b28] border border-[#1e2d3d] p-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <div className="grid grid-cols-1 gap-1">
                    {techLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href}
                        className="flex items-center gap-4 p-3 text-[10px] font-black text-slate-400 hover:text-white hover:bg-[#1e2d3d] transition-all uppercase tracking-widest border border-transparent hover:border-[#ff5f00]/20"
                        onClick={() => setTechOpen(false)}
                      >
                        <link.icon size={18} className="text-[#ff5f00]" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#solicitar-estudio"
              className="px-8 py-3 bg-[#ff5f00] text-[11px] font-black text-white hover:bg-[#ff7a22] transition-all flex items-center gap-2 active:scale-95 shadow-xl shadow-orange-950/20 uppercase tracking-widest"
            >
              Solicitar estudio a medida
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0a111a] border-t border-[#1e2d3d] transition-all duration-300 ${isOpen ? 'opacity-100 max-h-screen border-b' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="p-8 space-y-6">
          <a href="#catalogo" onClick={() => setIsOpen(false)} className="block text-sm font-black text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Catálogo Técnico</a>
          <a href="#sectores" onClick={() => setIsOpen(false)} className="block text-sm font-black text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Sectores</a>
          <a href="#soluciones-medida" onClick={() => setIsOpen(false)} className="block text-sm font-black text-slate-300 uppercase tracking-widest border-b border-slate-800 pb-2">Soluciones a medida</a>
          
          <div className="space-y-4">
            <p className="text-[10px] text-[#ff5f00] font-black uppercase tracking-[0.3em]">Tecnología OrionStar</p>
            <div className="grid grid-cols-1 gap-3 pl-4">
              {techLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xs font-bold text-slate-400 uppercase tracking-widest">{link.name}</a>
              ))}
            </div>
          </div>
          
          <a href="#solicitar-estudio" onClick={() => setIsOpen(false)} className="block w-full text-center py-5 bg-[#ff5f00] text-white font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform">Solicitar estudio a medida</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
