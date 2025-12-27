
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTechOpen(false);

    if (targetId === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', targetId);
    }
  };

  const techLinks = [
    { name: 'Navegación VSLAM', icon: Globe, href: '#tecnologia' },
    { name: 'IA Generativa OpenAI', icon: BrainCircuit, href: '#tecnologia' },
    { name: 'Flota Enjambre', icon: Cpu, href: '#tecnologia' },
    { name: 'Integración API', icon: Code2, href: '#tecnologia' },
  ];

  const navLinkClass = "text-[11px] font-black text-slate-400 hover:text-white transition-colors tracking-[0.2em] uppercase flex items-center gap-1 cursor-pointer";

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-0 bg-[#0a111a]/95 backdrop-blur-xl border-b border-[#1e2d3d]' : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-24 gap-8">
          
          {/* LOGO - INCREASED SIZE */}
          <div className="flex items-center gap-5 min-w-fit">
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center gap-4 group"
            >
              {/* Logo Icon Larger */}
              <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-[#121b28] rounded-sm industrial-border">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ff5f00] shadow-[0_0_8px_rgba(255,95,0,0.8)]" />
                ))}
              </div>
              {/* Logo Text Larger */}
              <div className="flex flex-col justify-center">
                <span className="text-white font-black text-2xl tracking-tighter leading-none group-hover:text-slate-200 transition-colors">GLOBAL</span>
                <span className="text-slate-500 font-bold text-[10px] tracking-[0.25em] leading-none mt-1.5 uppercase">ROBOTICS</span>
              </div>
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 ml-auto mr-8">
            <a href="#catalogo" onClick={(e) => handleNavClick(e, '#catalogo')} className={navLinkClass}>
              Catálogo Técnico
            </a>
            
            <a href="#sectores" onClick={(e) => handleNavClick(e, '#sectores')} className={navLinkClass}>
              Sectores
            </a>
            
            <a href="#soluciones-medida" onClick={(e) => handleNavClick(e, '#soluciones-medida')} className={navLinkClass}>
              Soluciones a Medida
            </a>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setTechOpen(!techOpen)}
                className={`${navLinkClass} ${techOpen ? 'text-[#ff5f00]' : ''}`}
              >
                Tecnología OrionStar
                <ChevronDown size={12} className={`transition-transform duration-300 ${techOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {techOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-64 bg-[#121b28] border border-[#1e2d3d] shadow-2xl animate-in fade-in slide-in-from-top-2 p-1">
                  {techLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      className="flex items-center gap-3 p-3 text-[10px] font-bold text-slate-400 hover:text-white hover:bg-[#1e2d3d] transition-all uppercase tracking-wider group border-b border-transparent hover:border-[#ff5f00]/20 last:border-0"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <link.icon size={14} className="text-[#ff5f00] group-hover:scale-110 transition-transform" />
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA BUTTON - COMPACT INDUSTRIAL PHYSICAL BUTTON */}
          <div className="hidden lg:block">
            <a
              href="#solicitar-estudio"
              onClick={(e) => handleNavClick(e, '#solicitar-estudio')}
              className="
                relative px-7 py-3 
                bg-[#ff5f00] 
                text-white text-[10px] font-black uppercase tracking-[0.2em] 
                transition-all duration-100 ease-out
                border-t border-l border-white/20 
                shadow-[4px_4px_0_#7c2d00]
                hover:-translate-y-[1px] hover:shadow-[5px_5px_0_#7c2d00] hover:bg-[#ff6a1a]
                active:translate-y-[2px] active:shadow-[2px_2px_0_#7c2d00]
                flex items-center gap-3
                group
              "
            >
              <span className="relative z-10">Solicitar Estudio</span>
              {/* Micro-interaction: Status Light */}
              <div className="w-1.5 h-1.5 bg-black/20 rounded-full group-hover:bg-white group-hover:shadow-[0_0_6px_white] transition-all duration-300"></div>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 hover:bg-white/5 rounded-md transition-colors ml-auto">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0a111a] border-b border-[#1e2d3d] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          <a href="#catalogo" onClick={(e) => handleNavClick(e, '#catalogo')} className="text-sm font-bold text-slate-300 uppercase tracking-wider py-2 border-b border-slate-800">Catálogo Técnico</a>
          <a href="#sectores" onClick={(e) => handleNavClick(e, '#sectores')} className="text-sm font-bold text-slate-300 uppercase tracking-wider py-2 border-b border-slate-800">Sectores</a>
          <a href="#soluciones-medida" onClick={(e) => handleNavClick(e, '#soluciones-medida')} className="text-sm font-bold text-slate-300 uppercase tracking-wider py-2 border-b border-slate-800">Soluciones a Medida</a>
          
          <div className="py-2 border-b border-slate-800">
             <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Tecnología OrionStar</p>
             <div className="grid grid-cols-1 gap-2 pl-4">
                {techLinks.map(link => (
                   <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-xs text-slate-400 hover:text-[#ff5f00] uppercase tracking-wider flex items-center gap-2 py-1">
                      <link.icon size={12} /> {link.name}
                   </a>
                ))}
             </div>
          </div>

          <a 
            href="#solicitar-estudio" 
            onClick={(e) => handleNavClick(e, '#solicitar-estudio')} 
            className="
              mt-6 w-full py-4 text-center 
              bg-[#ff5f00] text-white font-black text-xs uppercase tracking-widest 
              border-t border-l border-white/20 
              shadow-[4px_4px_0_#7c2d00]
              active:translate-y-[2px] active:shadow-[2px_2px_0_#7c2d00] transition-all
            "
          >
            Solicitar Estudio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
