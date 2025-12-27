
import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Soluciones B2B', href: '/soluciones' },
    { name: 'Catálogo', href: '/catalogo' },
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
              <span className="text-white font-black text-xl tracking-tighter leading-none uppercase">Global</span>
              <span className="text-[#64748b] font-bold text-[10px] tracking-[0.3em] leading-none mt-1 uppercase">Robotics</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-400 hover:text-[#ff5f00] transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/admin/login"
              className="btn-real-grey px-6 py-2.5 text-[11px] font-black text-white flex items-center gap-2 rounded-sm"
            >
              <LayoutGrid size={14} className="text-[#ff5f00]" />
              ACCESO SISTEMA
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0a111a] border-t border-[#1e2d3d] transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block text-sm font-bold text-slate-300 py-3 uppercase tracking-widest">{link.name}</a>
          ))}
          <a href="/admin/login" className="btn-real-orange block w-full text-center py-4 text-white font-black rounded-sm">LOGIN SISTEMA</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
