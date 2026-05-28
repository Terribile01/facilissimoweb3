import React, { useState } from 'react';
import { 
  Cpu, LayoutGrid, Award, Terminal, Compass, 
  ExternalLink, Layers, Sparkles, CheckCircle, Database, Check
} from 'lucide-react';
import { Page } from '../types';

interface TeamAiViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function TeamAiView({ setCurrentPage }: TeamAiViewProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] overflow-hidden min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left relative">
        <div className="absolute top-10 right-10 w-48 h-48 bg-[#8B7E66]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#8B7E66]/10 border border-[#8B7E66]/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8B7E66]" />
            <span className="text-[10px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.2em]">
              AI Operative Ecosystem
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
            Il mio <span className="not-italic font-sans font-black text-[#8B7E66]">Team di IA</span> di fiducia
          </h1>

          <p className="border-l-4 border-[#8B7E66] pl-4 py-1 italic text-[#1A1A1A]/70 text-lg sm:text-xl leading-relaxed font-light font-serif max-w-3xl">
            "Chi unisce maestria artigianale e velocità futuristica non lavora mai solo. Per costruire questo sito ho orchestrato un team di intelligenze artificiali d'élite di casa Google."
          </p>

          <p className="max-w-2xl text-[#1A1A1A]/75 text-sm sm:text-base font-light leading-relaxed pt-2">
            Immagina uno studio d'architettura digitale dove la visione strategica, l'accuratezza estetica ed il pragmatismo ingegneristico collaborano in frazioni di secondo per darti un sito super-pulito, reattivo e ottimizzato al millisecondo.
          </p>
        </div>
      </section>

      {/* 2. THE THREE PARTNERS CARDS WITH LOGOS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Google AI Studio */}
          <div 
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-8 space-y-6 transition-all duration-300 hover:shadow-xl hover:border-[#8B7E66] relative flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Custom SVG Emblem for Google AI Studio (Combining architectural blueprints and Gemini stars) */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a73e8]/10 to-[#8B7E66]/10 flex items-center justify-center border border-[#1a73e8]/20 relative overflow-hidden">
                <svg className="w-10 h-10 text-[#1a73e8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer structural blueprint grid */}
                  <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
                  {/* Beautiful core node */}
                  <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 189" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Architect logic curves */}
                  <circle cx="12" cy="12" r="3" fill="#8B7E66" fillOpacity="0.6" className="animate-pulse" />
                  <path d="M12 3L15 12L12 21L9 12Z" fill="currentColor" fillOpacity="0.15" />
                </svg>
                {/* Micro branding */}
                <div className="absolute bottom-1 right-2 text-[6px] font-mono text-[#1a73e8] font-bold">STUDIO</div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#8B7E66] font-bold uppercase tracking-widest">
                  La Mente Architettonica
                </span>
                <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A] flex items-center justify-between">
                  <span>Google AI Studio</span>
                  <span className="text-[11px] font-mono font-normal not-italic px-2 py-0.5 bg-zinc-100 rounded-sm text-zinc-650 border border-zinc-200">
                    Mente
                  </span>
                </h3>
              </div>

              <p className="text-zinc-650 text-xs sm:text-sm font-light leading-relaxed">
                È la mia <b>Mente Architettonica</b>. La utilizzo per definire la logica di alto livello del sito, la struttura dei contenuti (modello dei dati) e la gerarchia delle informazioni. È qui che nasce il "progetto" prima ancora di scrivere una riga di codice.
              </p>

              <div className="border-t border-zinc-100 pt-4">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-450 block mb-2">Attività Chiave:</span>
                <ul className="space-y-2 text-xs text-zinc-650 font-light">
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Mappatura logica e alberatura delle pagine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Sincronizzazione dati e logiche CRM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Progettazione database strategici</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between mt-auto">
              <span className="font-mono text-[9px] text-[#8B7E66] tracking-widest uppercase">STRATEGY LAYER</span>
              <Compass className="w-4 h-4 text-zinc-400" />
            </div>
          </div>

          {/* Card 2: Stitch (Google Labs) */}
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-8 space-y-6 transition-all duration-300 hover:shadow-xl hover:border-[#8B7E66] relative flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Custom SVG Design for Stitch of Google Labs */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9c27b0]/10 to-[#8B7E66]/10 flex items-center justify-center border border-[#9c27b0]/20 relative overflow-hidden">
                <svg className="w-10 h-10 text-[#9c27b0]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stitched aesthetic representation (needle thread & dynamic organic web) */}
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Eye of the needle */}
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                  {/* Dynamic labs beaker styling overlay */}
                  <path d="M10 11H14V16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16V11Z" fill="#8B7E66" fillOpacity="0.5" />
                </svg>
                {/* Micro Google Labs star mark */}
                <div className="absolute top-1 right-2 text-[6px] font-mono text-[#9c27b0] font-bold">LABS</div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#8B7E66] font-bold uppercase tracking-widest">
                  Il Designer Visivo
                </span>
                <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A] flex items-center justify-between">
                  <span>Stitch (Google Labs)</span>
                  <span className="text-[11px] font-mono font-normal not-italic px-2 py-0.5 bg-zinc-100 rounded-sm text-zinc-650 border border-zinc-200">
                    Designer
                  </span>
                </h3>
              </div>

              <p className="text-zinc-650 text-xs sm:text-sm font-light leading-relaxed">
                È il mio <b>Designer Visivo</b>. Lo utilizzo per trasformare le idee in interfacce (UI) concrete. Si occupa di generare il codice HTML/CSS "essenzialista" che definisce l'estetica e la responsività del sito, seguendo gli stili che gli richiedo.
              </p>

              <div className="border-t border-zinc-100 pt-4">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-450 block mb-2">Attività Chiave:</span>
                <ul className="space-y-2 text-xs text-zinc-650 font-light">
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Costruzione del Design System & Colori</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Generazione layout HTML/CSS puliti ed essenziali</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Ottimizzazione della reattività per cellulari e PC</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between mt-auto">
              <span className="font-mono text-[9px] text-[#8B7E66] tracking-widest uppercase">VISUAL LAYER</span>
              <LayoutGrid className="w-4 h-4 text-zinc-405" />
            </div>
          </div>

          {/* Card 3: Jules */}
          <div 
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-8 space-y-6 transition-all duration-300 hover:shadow-xl hover:border-[#8B7E66] relative flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Custom SVG Design for Jules agent (The AI developer senior chip) */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e01d5a]/10 to-[#8B7E66]/10 flex items-center justify-center border border-[#e01d5a]/20 relative overflow-hidden">
                <svg className="w-10 h-10 text-[#e01d5a]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Compiler / Agent Code brackets layout */}
                  <path d="M8 5L3 12L8 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 5L21 12L16 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Terminal cursor blink & structural lines */}
                  <path d="M10 16H14" stroke="#8B7E66" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 8L11 16" stroke="currentColor" strokeWidth="1" />
                </svg>
                {/* Micro branding */}
                <div className="absolute bottom-1 right-2 text-[6px] font-mono text-[#e01d5a] font-bold">AGENT</div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#8B7E66] font-bold uppercase tracking-widest">
                  Architetto del Codice e Sviluppatore Senior
                </span>
                <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A] flex items-center justify-between">
                  <span>Jules (Agente AI)</span>
                  <span className="text-[11px] font-mono font-normal not-italic px-2 py-0.5 bg-zinc-100 rounded-sm text-zinc-650 border border-zinc-200">
                    Sviluppatore
                  </span>
                </h3>
              </div>

              <p className="text-zinc-650 text-xs sm:text-sm font-light leading-relaxed">
                È il mio <b>Architetto del Codice e Sviluppatore Senior</b>. È l'IA che "cuce" (stitch) insieme il lavoro di AI Studio e Stitch. Jules legge il tuo repository, integra i componenti, pulisce il codice, gestisce la logica (TypeScript/JS/CSS) e garantisce che tutto sia ottimizzato per la SEO, la velocità e la pulizia estrema.
              </p>

              <div className="border-t border-zinc-100 pt-4">
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-450 block mb-2">Attività Chiave:</span>
                <ul className="space-y-2 text-xs text-zinc-650 font-light">
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Integrazione di moduli logici complessi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Refactoring, pulizia del codice e SEO</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#8B7E66]" />
                    <span>Garanzia di compilazione ed esecuzione sicura</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 flex items-center justify-between mt-auto">
              <span className="font-mono text-[9px] text-[#8B7E66] tracking-widest uppercase">CODE ENGINE</span>
              <Terminal className="w-4 h-4 text-zinc-400" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. ECOSYSTEM SYNTHESIS TABLE */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-3 mb-12 text-center md:text-left">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
              Quadro Operativo
            </span>
            <h2 className="font-serif text-3xl italic font-bold text-[#1A1A1A]">
              Sintesi del mio ecosistema operativo
            </h2>
            <p className="text-[#1A1A1A]/70 text-sm font-light">
              Ecco come si dividono compiti e ruoli le mie tre intelligenze artificiali coordinate, ottimizzando tempi di consegna e pulizia del codice.
            </p>
          </div>

          {/* Majestic Responsive Table Cards on Mobile, Clean Grid/Rows on Desktop */}
          <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl overflow-hidden shadow-xs">
            
            {/* Table Header (Desktop) */}
            <div className="hidden md:grid grid-cols-12 gap-4 bg-zinc-50 px-6 py-4.5 border-b border-[#1A1A1A]/10 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              <div className="col-span-3">IA</div>
              <div className="col-span-4">Ruolo nel progetto</div>
              <div className="col-span-5">Output principale</div>
            </div>

            {/* Row 1: AI Studio */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-6 border-b border-[#1A1A1A]/5 items-center">
              <div className="col-span-3 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#1a73e8]/10 flex items-center justify-center font-bold text-[#1a73e8] text-xs">A</div>
                <span className="font-serif italic font-bold text-base text-[#1A1A1A]">AI Studio</span>
              </div>
              <div className="col-span-4 text-xs font-mono text-zinc-650 font-semibold tracking-wide">
                Strategia & Struttura
              </div>
              <div className="col-span-5 text-sm font-light text-zinc-700">
                Architettura dati, logica strategica, mappa del sito
              </div>
            </div>

            {/* Row 2: Stitch */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-6 border-b border-[#1A1A1A]/5 items-center">
              <div className="col-span-3 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#9c27b0]/10 flex items-center justify-center font-bold text-[#9c27b0] text-xs">S</div>
                <span className="font-serif italic font-bold text-base text-[#1A1A1A]">Stitch</span>
              </div>
              <div className="col-span-4 text-xs font-mono text-zinc-650 font-semibold tracking-wide">
                Interfaccia & Estetica
              </div>
              <div className="col-span-5 text-sm font-light text-zinc-700">
                Componenti UI (HTML/CSS), Design System essenziale
              </div>
            </div>

            {/* Row 3: Jules */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-6 items-center">
              <div className="col-span-3 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#e01d5a]/10 flex items-center justify-center font-bold text-[#e01d5a] text-xs">J</div>
                <span className="font-serif italic font-bold text-base text-[#1A1A1A]">Jules</span>
              </div>
              <div className="col-span-4 text-xs font-mono text-zinc-650 font-semibold tracking-wide">
                Integrazione & Sviluppo
              </div>
              <div className="col-span-5 text-sm font-light text-zinc-700">
                Codice finito, refactoring intelligente, manutenzione robusta
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE CRAFTSMANSHIP PHILOSOPHY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
            Il Risultato per Te
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-bold text-[#1A1A1A]">
            Che valore ha questo per il tuo Business?
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
            Avere un team integrato non significa delegare la qualità. Significa liberarsi dal caos tecnico e concentrare la propria passione sui dettagli unici del tuo brand commerciale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          
          <div className="bg-white/40 p-6 rounded-2xl border border-[#1A1A1A]/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66] font-bold text-sm">
              01
            </div>
            <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Velocità Inaudita</h4>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              Tagliamo dal 60% all'80% del tempo speso a scrivere markup base ed effettuare debug ripetitivi. Ricevi il tuo progetto online in tempi brevissimi.
            </p>
          </div>

          <div className="bg-white/40 p-6 rounded-2xl border border-[#1A1A1A]/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66] font-bold text-sm">
              02
            </div>
            <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Pulizia Estrema</h4>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              Niente codice arrugginito o dipendenze superflue. Jules garantisce algoritmi snelli che i motori di ricerca come Google adorano per la SEO.
            </p>
          </div>

          <div className="bg-white/40 p-6 rounded-2xl border border-[#1A1A1A]/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66] font-bold text-sm">
              03
            </div>
            <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Lavoro Umano, Mente AI</h4>
            <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
              L'IA funge da braccio esecutivo ultra-rapido. Tu mantieni il pieno controllo strategico del tono di voce, dell'anima e del posizionamento d'impresa.
            </p>
          </div>

        </div>
      </section>

      {/* 5. CTA PANEL */}
      <section className="bg-[#1A1A1A] py-16 text-[#FAF8F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7E66]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl italic font-bold text-white">
            Vuoi connettere le tue idee a flussi automatici intelligenti?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Contattaci. Analizzeremo i tuoi canali digitali e le tue necessità quotidiane per inserire intelligenze su misura nei tuoi processi aziendali.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setCurrentPage('contatti');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#8B7E66] hover:bg-[#5F5542] text-[#F5F2ED] text-xs font-bold uppercase tracking-[0.2em] py-4 px-8 rounded-none transition-all duration-300 cursor-pointer shadow-md inline-flex items-center space-x-2"
            >
              <span>Parla con me e le mie AI</span>
              <Sparkles className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
