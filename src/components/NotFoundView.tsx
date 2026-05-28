import React from 'react';
import { HelpCircle, RefreshCcw, Home, Terminal, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface NotFoundViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function NotFoundView({ setCurrentPage }: NotFoundViewProps) {
  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] min-h-[70vh] flex flex-col items-center justify-center p-6 sm:p-12 text-center my-6">
      
      <div className="max-w-md space-y-8">
        
        {/* Playful terminal illustration */}
        <div className="relative group mx-auto w-48 h-48 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-6 shadow-md flex items-center justify-center">
          
          <div className="absolute inset-0 bg-radial-gradient from-[#8B7E66]/5 via-transparent rounded-3xl" />
          
          {/* Main Visual */}
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#8B7E66]/10 border border-[#8B7E66]/20 flex items-center justify-center text-[#8B7E66] mx-auto animate-bounce">
              <HelpCircle className="w-10 h-10" />
            </div>
            <div className="flex items-center justify-center space-x-2 font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-[#8B7E66]/50" />
              <span>STATUS_404_NOT_FOUND</span>
            </div>
          </div>

          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#8B7E66] animate-pulse border-2 border-white" />
        </div>

        {/* Text descriptions */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8B7E66]">Rotta interrotta</span>
          <h1 className="font-serif italic font-bold text-3xl sm:text-4xl text-[#1A1A1A]">
            Arresto del Flusso Informativo
          </h1>
          <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
            La pagina digitale cercata non fa parte della nostra pipeline logica. Non lasciare che questo piccolo collo di bottiglia fermi lo sviluppo della tua impresa.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#8B7E66] text-[#FAF8F5] text-[10px] font-bold py-3.5 px-6 rounded-full uppercase tracking-[0.2em] transition-all duration-350 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#8B7E66]" />
            <span>Home Page</span>
          </button>
          
          <button
            onClick={() => {
              window.history.back();
            }}
            className="w-full sm:w-auto bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] text-[#1A1A1A]/80 text-[10px] font-bold py-3.5 px-6 rounded-full uppercase tracking-[0.2em] transition-all duration-350 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <RefreshCcw className="w-4 h-4 text-[#8B7E66]" />
            <span>Indietro</span>
          </button>
        </div>

        {/* Dynamic support tag */}
        <p className="text-[10px] text-zinc-450 font-mono">
          *Se riscontri anomalie persistenti, scrivi a info@facilissimoweb.it
        </p>

      </div>

    </div>
  );
}
