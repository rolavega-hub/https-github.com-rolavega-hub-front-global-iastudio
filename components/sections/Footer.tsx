
import React, { useActionState, useRef } from 'react';
import { Send, Linkedin, Twitter, Globe, Cpu } from 'lucide-react';

const initialState = { message: '', success: false };

// TODO: Importar submitLead de @/app/actions
async function submitLead(prevState: any, formData: FormData) {
  await new Promise(res => setTimeout(res, 1000));
  const email = formData.get('email');
  if (!email || !String(email).includes('@')) {
    return { message: 'Protocolo de validación fallido: Email no válido.', success: false };
  }
  return { message: 'Suscripción confirmada. Enlace de datos establecido.', success: true };
}

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitLead, initialState);

  return (
    <footer className="bg-[#0a111a] pt-32 pb-10 border-t border-[#1e2d3d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-4 gap-1 p-1.5 bg-[#121b28] industrial-border">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ff5f00] shadow-[0_0_5px_#ff5f00]" />
                ))}
              </div>
              <span className="text-white font-black text-xl uppercase tracking-tighter">Global Robotics</span>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
              Sistemas de automatización de grado militar para entornos comerciales de alto tráfico. Fiabilidad demostrada.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center border border-[#1e2d3d] text-slate-400 hover:text-[#ff5f00] hover:border-[#ff5f00] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
              <h4 className="mono-label text-[10px] text-white font-black border-l-2 border-[#ff5f00] pl-3">Navegación</h4>
              <ul className="space-y-3">
                {['Ingeniería', 'Casos de Éxito', 'Partners', 'Documentación'].map((item) => (
                  <li key={item}><a href="#" className="text-slate-500 hover:text-white text-xs font-bold transition-colors uppercase tracking-widest">{item}</a></li>
                ))}
              </ul>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#121b28] industrial-border rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Cpu size={20} className="text-[#ff5f00]" />
                <h4 className="text-lg font-black text-white uppercase tracking-tight">Suscripción Técnica</h4>
              </div>
              <p className="text-slate-400 text-xs font-medium mb-6">
                Reciba informes de actualización de firmware, whitepapers de ingeniería y noticias corporativas exclusivas.
              </p>
              
              <form action={formAction} ref={formRef} className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="ID_USUARIO@DOMINIO.COM"
                    required
                    className="flex-1 bg-[#0a111a] border border-[#1e2d3d] px-4 py-4 text-[11px] font-mono text-white focus:outline-none focus:border-[#ff5f00] transition-colors rounded-sm"
                  />
                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-real-orange px-6 text-white font-black text-[11px] uppercase tracking-widest flex items-center gap-2 rounded-sm disabled:opacity-50 disabled:active:translate-y-0"
                  >
                    <Send size={14} />
                    {isPending ? 'ENVIANDO...' : 'VINCULAR'}
                  </button>
                </div>
                {state?.message && (
                  <p className={`text-[10px] font-mono uppercase ${state.success ? 'text-green-500' : 'text-[#ff5f00]'}`}>
                    [{state.success ? 'OK' : 'ERROR'}] {state.message}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-[#1e2d3d] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="mono-label text-[10px] text-slate-700">© 2024 GLOBAL ROBOTICS S.A.</span>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
            <span className="mono-label text-[10px] text-slate-700">ST_001_BARCELONA</span>
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Términos Legales</a>
            <a href="#" className="hover:text-white transition-colors">Compliance ISO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
