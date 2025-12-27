
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, BrainCircuit, Cpu, Code2, Menu, X, Bot, Truck, Sparkles, TableProperties, Utensils, HeartPulse, ShoppingBag, Building2, FileSearch, Wrench, Trophy, Layers } from 'lucide-react';

// Configuration for all navigation dropdowns
const NAV_ITEMS = [
  {
    id: 'catalogo',
    label: 'Catálogo Técnico',
    href: '#catalogo',
    items: [
      { name: 'Series GreetingBot', icon: Bot, href: '#catalogo' },
      { name: 'Series Delivery', icon: Truck, href: '#catalogo' },
      { name: 'Series Service', icon: Sparkles, href: '#catalogo' },
      { name: 'Comparativa Técnica', icon: TableProperties, href: '#catalogo' }
    ]
  },
  {
    id: 'sectores',
    label: 'Sectores',
    href: '#sectores',
    items: [
      { name: 'Horeca & Restauración', icon: Utensils, href: '#sectores' },
      { name: 'Salud & Hospitales', icon: HeartPulse, href: '#sectores' },
      { name: 'Retail & Shopping', icon: ShoppingBag, href: '#sectores' },
      { name: 'Oficinas & Corporate', icon: Building2, href: '#sectores' }
    ]
  },
  {
    id: 'soluciones',
    label: 'Soluciones a Medida',
    href: '#soluciones-medida',
    items: [
      { name: 'Consultoría Técnica', icon: FileSearch, href: '#soluciones-medida' },
      { name: 'Integración API', icon: Layers, href: '#soluciones-medida' },
      { name: 'Mantenimiento Flota', icon: Wrench, href: '#soluciones-medida' },
      { name: 'Casos de Éxito', icon: Trophy, href: '#soluciones-medida' }
    ]
  },
  {
    id: 'tecnologia',
    label: 'Tecnología OrionStar',
    href: '#tecnologia',
    items: [
      { name: 'Navegación VSLAM', icon: Globe, href: '#tecnologia' },
      { name: 'IA Generativa OpenAI', icon: BrainCircuit, href: '#tecnologia' },
      { name: 'Flota Enjambre', icon: Cpu, href: '#tecnologia' },
      { name: 'Dev Ecosystem', icon: Code2, href: '#tecnologia' }
    ]
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<'ES' | 'EN' | 'CA'>('ES');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveDropdown(null);

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

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navLinkClass = "text-[11px] font-black text-slate-400 hover:text-white transition-colors tracking-[0.2em] uppercase flex items-center gap-1 cursor-pointer";

  // Reusable Language Selector Component
  const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center bg-[#121b28] border border-[#1e2d3d] p-[2px] ${mobile ? 'w-fit mt-4' : ''}`}>
      {(['ES', 'EN', 'CA'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setCurrentLang(lang)}
          className={`
            px-3 py-1.5 text-[9px] font-black tracking-widest transition-all
            ${currentLang === lang 
              ? 'bg-[#ff5f00] text-white shadow-[0_0_10px_rgba(255,95,0,0.3)]' 
              : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
          `}
        >
          {lang}
        </button>
      ))}
    </div>
  );

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-0 bg-[#0a111a]/95 backdrop-blur-xl border-b border-[#1e2d3d]' : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-24 gap-8">
          
          {/* LOGO */}
          <div className="flex items-center gap-5 min-w-fit">
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="flex items-center gap-4 group"
            >
              <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-[#121b28] rounded-sm industrial-border">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ff5f00] shadow-[0_0_8px_rgba(255,95,0,0.8)]" />
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white font-black text-2xl tracking-tighter leading-none group-hover:text-slate-200 transition-colors">GLOBAL</span>
                <span className="text-slate-500 font-bold text-[10px] tracking-[0.25em] leading-none mt-1.5 uppercase">ROBOTICS</span>
              </div>
            </a>
          </div>

          {/* DESKTOP NAVIGATION - DYNAMIC DROPDOWNS */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 ml-auto mr-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="relative">
                <button 
                  onClick={() => toggleDropdown(item.id)}
                  className={`${navLinkClass} ${activeDropdown === item.id ? 'text-[#ff5f00]' : ''}`}
                >
                  {item.label}
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-[#ff5f00]' : ''}`} />
                </button>
                
                {activeDropdown === item.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-64 bg-[#121b28] border border-[#1e2d3d] shadow-2xl animate-in fade-in slide-in-from-top-2 p-1">
                    {item.items.map((subItem) => (
                      <a 
                        key={subItem.name} 
                        href={subItem.href}
                        className="flex items-center gap-3 p-3 text-[10px] font-bold text-slate-400 hover:text-white hover:bg-[#1e2d3d] transition-all uppercase tracking-wider group border-b border-transparent hover:border-[#ff5f00]/20 last:border-0"
                        onClick={(e) => handleNavClick(e, subItem.href)}
                      >
                        <subItem.icon size={14} className="text-[#ff5f00] group-hover:scale-110 transition-transform" />
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP ACTION AREA */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSelector />
            <a
              href="#solicitar-estudio"
              onClick={(e) => handleNavClick(e, '#solicitar-estudio')}
              className="
                relative px-5 py-2.5 
                bg-[#ff5f00] 
                text-white text-[10px] font-black uppercase tracking-[0.15em] 
                transition-all duration-200 ease-out
                border border-white/10 
                hover:bg-[#ff7a22] hover:border-[#ff5f00]
                flex items-center gap-2
                group
              "
            >
              <span className="relative z-10">Solicitar Estudio</span>
              <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white group-hover:shadow-[0_0_4px_white] transition-all"></div>
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
        <div className="flex flex-col p-6 space-y-2">
          
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="border-b border-slate-800 pb-2">
               <button 
                onClick={() => toggleDropdown(item.id)}
                className="w-full flex items-center justify-between text-sm font-bold text-slate-300 uppercase tracking-wider py-2 hover:text-white"
               >
                 {item.label}
                 <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-[#ff5f00]' : ''}`} />
               </button>
               
               <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.id ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                 <div className="grid grid-cols-1 gap-1 pl-4 bg-[#121b28]/50 py-2">
                    {item.items.map(subItem => (
                       <a key={subItem.name} href={subItem.href} onClick={(e) => handleNavClick(e, subItem.href)} className="text-[10px] text-slate-400 hover:text-[#ff5f00] uppercase tracking-wider flex items-center gap-2 py-2">
                          <subItem.icon size={12} /> {subItem.name}
                       </a>
                    ))}
                 </div>
               </div>
            </div>
          ))}

          <div className="py-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Configuración Regional</p>
            <LanguageSelector mobile />
          </div>

          <a 
            href="#solicitar-estudio" 
            onClick={(e) => handleNavClick(e, '#solicitar-estudio')} 
            className="
              mt-4 w-full py-3 text-center 
              bg-[#ff5f00] text-white font-black text-xs uppercase tracking-widest 
              border border-white/10
              hover:bg-[#ff7a22] transition-all
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
