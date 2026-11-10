import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, Building2, Briefcase } from 'lucide-react';
import { Language } from '../data/translations.ts';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;

  const [role, setRole] = useState<'concesionario' | 'inversionista'>('concesionario');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLogged(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#08121A] border-2 border-[#1C384D] rounded-3xl shadow-2xl text-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0E1F2C] border-b border-[#1C384D]">
          <div className="flex items-center gap-3">
            <img
              src="./assets/aistudio/coslink_mark.png"
              alt="Coslink"
              className="w-7 h-7 object-contain"
            />
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Portal Privado Coslink
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isLogged ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-display">
                ¡Bienvenido a Coslink!
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Has iniciado sesión como <strong className="text-amber-400 uppercase">{role}</strong>. Tu bóveda de proyectos y catálogo seguro están activos.
              </p>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#C67321] hover:bg-[#DE8633] text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Ingresar al Dashboard
              </button>
            </div>
          ) : (
            <>
              {/* Role switcher */}
              <div className="flex rounded-xl bg-[#0E1F2C] p-1 border border-[#1C384D] mb-6">
                <button
                  type="button"
                  onClick={() => setRole('concesionario')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    role === 'concesionario'
                      ? 'bg-[#C67321] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Concesionario</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole('inversionista')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    role === 'inversionista'
                      ? 'bg-[#07526E] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Inversionista</span>
                </button>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-black font-display text-white uppercase mb-1">
                  Acceso Seguro
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  Consulta de Data Rooms y seguimiento de activos mineros
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Correo Corporativo
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="usuario@empresa.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0E1F2C] border border-[#1C384D] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#C67321]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0E1F2C] border border-[#1C384D] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#C67321]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-[#C67321] rounded" />
                    <span>Recordar sesión</span>
                  </label>
                  <a href="#recuperar" className="text-[#DE8633] hover:underline">
                    ¿Olvidaste tu clave?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C67321] to-[#DE8633] hover:from-[#B5671B] hover:to-[#CF7723] text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Validando credenciales...</span>
                  ) : (
                    <>
                      <span>Iniciar Sesión en Coslink</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-[#1C384D] text-center text-xs text-slate-400">
                <span>¿Aún no tienes cuenta en Coslink? </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-cyan-400 hover:underline font-bold cursor-pointer"
                >
                  Registra tu concesión o solicita acceso
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
