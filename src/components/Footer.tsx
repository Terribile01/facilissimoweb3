import React, { useState } from 'react';
import { Mail, Shield, Zap, Send, CheckCircle2, Heart } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onOpenCookieBanner?: () => void;
}

export default function Footer({ setCurrentPage, onOpenCookieBanner }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-zinc-400 pt-20 pb-12 border-t border-[#FAF8F5]/10 mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F5]/10">
          
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div 
              className="flex items-center space-x-3.5 cursor-pointer group"
              onClick={() => handleNavigate('home')}
              id="footer-logo"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-zinc-950 transition-all duration-300 group-hover:scale-105">
                <Zap className="w-5 h-5 text-[#8B7E66] fill-[#8B7E66]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-[#F5F2ED] leading-none">
                  Facilissimo<span className="text-[#8B7E66]">Web</span>
                </span>
                <span className="font-mono text-[9px] text-[#8B7E66] tracking-widest uppercase leading-none mt-1">
                  Strategy & Automation
                </span>
              </div>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light">
              Abbattiamo la barriera tecnologica per far fiorire il business di freelance, boutique e micro-imprenditori.
              Siti web strategici e automazioni intelligenti su misura.
            </p>

            <div className="flex flex-col space-y-2 text-xs">
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#FAF8F5]/50 font-mono text-[9px] uppercase tracking-widest">Sviluppo & Automazione: Remoto / Macerata</span>
              </span>
              <a href="mailto:info@facilissimoweb.it" className="text-zinc-300 hover:text-[#8B7E66] transition-colors duration-200">
                info@facilissimoweb.it
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="lg:col-span-3 sm:grid sm:grid-cols-2 lg:block lg:space-y-6 gap-6">
            <div>
              <h3 className="text-[11px] font-mono font-bold text-[#8B7E66] tracking-[0.2em] uppercase mb-4">
                Navigazione
              </h3>
              <ul className="space-y-3.5 text-xs uppercase tracking-widest font-bold text-zinc-350">
                <li>
                  <button 
                    onClick={() => handleNavigate('home')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('servizi')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    Servizi Strategici
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('social-leadgen')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    Social & Lead
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('team-ai')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    AI Team Partner
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('chi-sono')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    La Mia Storia
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('journal')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    Journal (Insight)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('contatti')} 
                    className="hover:text-[#8B7E66] transition-all cursor-pointer text-left"
                  >
                    Inizia il Viaggio
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Trasparenza & Sicurezza (Cookie / Privacy) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
            <h3 className="text-[11px] font-mono font-bold text-[#8B7E66] tracking-[0.2em] uppercase">
              Sicurezza & Trasparenza
            </h3>
            <p className="text-zinc-405 text-sm font-light leading-relaxed">
              Trattiamo i tuoi recapiti con il massimo rigore etico in conformità alla normativa europea GDPR. Nessuna iscrizione indesiderata, solo chiarezza.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  handleNavigate('privacy');
                  onOpenCookieBanner?.();
                }}
                className="bg-zinc-800 hover:bg-[#8B7E66]/20 border border-white/10 hover:border-[#8B7E66] text-[#FAF8F5] px-6 py-3.5 rounded-none transition-all duration-300 text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center space-x-2 cursor-pointer shadow-md w-fit"
              >
                <Shield className="w-4 h-4 text-[#8B7E66]" />
                <span>Gestisci Cookie e Privacy</span>
              </button>
            </div>
            <span className="text-[10px] text-zinc-650 flex items-center tracking-wide mt-1">
              <Shield className="w-3.5 h-3.5 mr-1 text-zinc-650" />
              Sito web protetto con connettività TLS / SSL cifrata.
            </span>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs text-zinc-650 tracking-wide">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} FacilissimoWeb di Maria Teresa Rogani. Tutti i diritti riservati.</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Codificato con passione per micro-imprese ed esseri umani</span>
            <Heart className="w-3.5 h-3.5 text-[#8B7E66] fill-[#8B7E66]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
