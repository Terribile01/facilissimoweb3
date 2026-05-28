import React, { useState, useEffect } from 'react';
import { Shield, X, Check, Eye } from 'lucide-react';
import { Page } from '../types';

interface CookieBannerProps {
  setCurrentPage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function CookieBanner({ setCurrentPage, isOpen, setIsOpen }: CookieBannerProps) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Show banner after 1.2s if session consent not registered
    const consent = sessionStorage.getItem('cookie_accepted_facilissimoweb');
    if (consent !== 'true' && consent !== 'false') {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [setIsOpen]);

  const handleAccept = () => {
    sessionStorage.setItem('cookie_accepted_facilissimoweb', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem('cookie_accepted_facilissimoweb', 'false');
    setIsOpen(false);
  };

  const handleReadPolicy = () => {
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-[#1A1A1A] text-[#FAF8F5] border border-white/10 rounded-none p-6 shadow-2xl z-50 animate-fadeIn font-sans text-left space-y-4">
      
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-none bg-[#8B7E66]/20 border border-[#8B7E66]/30 flex items-center justify-center">
            <Shield className="w-4 h-4 text-[#8B7E66]" />
          </div>
          <div>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8B7E66] block">Informativa Sessione & GDPR</span>
            <span className="font-serif italic font-bold text-sm text-[#FAF8F5]">Nessun Cookie Persistente</span>
          </div>
        </div>
        <button 
          onClick={handleDecline}
          className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
          title="Chiudi / Rifiuta"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* CORE TEXT */}
      <div className="text-zinc-300 text-xs font-light leading-relaxed space-y-2">
        <p>
          Non memorizziamo alcun cookie persistente o tracciamento duraturo sul tuo dispositivo. Questa informativa si azzera e si ricarica completamente a ogni sessione del browser. Gestito da <b>Maria Teresa Rogani (FacilissimoWeb)</b>.
        </p>
        
        {showDetails && (
          <div className="bg-white/5 border border-white/5 rounded-none p-3 mt-2 space-y-2 font-mono text-[9px] text-zinc-400">
            <p>✔ <b>cookie_accepted_facilissimoweb</b>: Memorizza temporaneamente la tua scelta per questa sessione d'uso.</p>
            <p>✔ <b>Stati Dinamici</b>: Permettono l'uso temporaneo dei simulatori e preventivatori interattivi.</p>
          </div>
        )}
      </div>

      {/* INTERACTIONS */}
      <div className="flex flex-wrap gap-2.5 pt-2 border-t border-white/5 items-center">
        <button
          onClick={handleAccept}
          className="bg-[#8B7E66] hover:bg-[#5F5542] text-[#F5F2ED] text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2.5 rounded-none transition-all duration-200 cursor-pointer shadow-sm shrink-0 flex items-center space-x-1"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Accetta per questa sessione</span>
        </button>
        
        <button
          onClick={handleDecline}
          className="bg-transparent hover:bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-2.5 rounded-none transition-all duration-205 cursor-pointer shrink-0"
        >
          Rifiuta
        </button>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-[9px] font-mono tracking-wider font-bold text-[#8B7E66] hover:text-[#5F5542] shrink-0"
        >
          {showDetails ? 'Nascondi Info' : 'Mostra Info'}
        </button>

        <button
          onClick={handleReadPolicy}
          className="text-[9px] font-mono tracking-wider text-zinc-500 hover:text-zinc-300 ml-auto flex items-center space-x-1"
        >
          <Eye className="w-3 h-3" />
          <span>Policy Completa</span>
        </button>
      </div>

    </div>
  );
}
