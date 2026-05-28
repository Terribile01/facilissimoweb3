import React, { useState } from 'react';
import { 
  ArrowRight, Zap, RefreshCw, Cpu, Users, Layers, Award, Target, 
  Hourglass, AlertTriangle, ArrowUpRight, ShieldCheck, Mail, Database, Bot 
} from 'lucide-react';
import { Page } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

const LEAD_TEMPLATES = [
  {
    nome: "Stefano Bianchi",
    azienda: "MecUtensili Srl",
    tipo: "PMI Metalmeccanica",
    messaggio: "Dobbiamo automatizzare l meesaggi ordini dal form web al nostro CRM e inviare notifiche immediate a 5 agenti commerciali. Budget stimato: 10.000€.",
    punteggio: "95/100 (LEAD CALDO - ALTA PRIORITÀ)",
    aiReasoning: "Esigenza tecnica ad alta intensità con budget rilevante. Integrabile completamente con flussi avanzati Make ed Express.",
    aiAction: "Sincronizzato istantaneamente su CRM Notion, inviata notifica push urgente via Slack a Maria Teresa e programmato slot Meet."
  },
  {
    nome: "Marco Rossi",
    azienda: "Pasticceria Dolci Momenti",
    tipo: "Attività Locale",
    messaggio: "Vorremmo un sito vetrina moderno per esporre le torte della nostra pasticceria a Macerata, con contatti e orari visibili. Budget: 1.500€.",
    punteggio: "70/100 (LEAD VALIDO - CONVERSIONE STANDARD)",
    aiReasoning: "Richiesta lineare di sviluppo web locale (WordPress o React statico). Soluzione standard scalabile.",
    aiAction: "Registrato in Notion, inviato listino informativo in automatico via email e link per prenotazione autonoma call di 15 min."
  },
  {
    nome: "SEO Backlink Bot",
    azienda: "Unknown spammer",
    tipo: "Spam / Robot Crawler",
    messaggio: "Boost your rank overnight with 5000 cheap backlinks for just 49 dollars! Purchase here traffic-booster.xyz guaranteed success!",
    punteggio: "0/100 (CESTINATO AUTOMATICAMENTE)",
    aiReasoning: "Incongruenza linguistica (inglese commerciale), presenza di domini ad alto rischio e keyword promozionali tipiche dei crawler.",
    aiAction: "Cestinato direttamente. ID bloccato temporaneamente. Nessuna distrazione o interruzione generata per Maria Teresa."
  }
];

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(0);
  const [simulationStep, setSimulationStep] = useState(0); // 0: Idle, 1: Received, 2: Analyzed, 3: Completed, 4: Done
  const [leadSimulationRunning, setLeadSimulationRunning] = useState(false);

  const startLeadSimulation = () => {
    if (leadSimulationRunning) return;
    setLeadSimulationRunning(true);
    setSimulationStep(1); // Stage 1: Form Ricevuto

    setTimeout(() => {
      setSimulationStep(2); // Stage 2: Profilazione AI
      
      setTimeout(() => {
        setSimulationStep(3); // Stage 3: CRM & Notifica
        
        setTimeout(() => {
          setSimulationStep(4); // Stage 4: Fine
          setLeadSimulationRunning(false);
        }, 2000);
      }, 2000);
    }, 1500);
  };

  const currentLead = LEAD_TEMPLATES[selectedLeadIndex];
  const leadProgress = 
    simulationStep === 0 ? 0 :
    simulationStep === 1 ? 33 :
    simulationStep === 2 ? 66 :
    simulationStep === 3 ? 90 : 100;

  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#8B7E66]/10 border border-[#8B7E66]/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#8B7E66] animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-[#8B7E66] tracking-[0.2em] uppercase">
                Volume 01 / Web Strategy & AI Automation
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl italic font-bold tracking-tight text-[#1A1A1A] leading-tight">
              Abbatto la barriera <br />
              <span className="not-italic font-sans font-black tracking-tight text-[#8B7E66]">
                tecnologica
              </span> per far fiorire il tuo business.
            </h1>

            <p className="text-[#1A1A1A]/70 text-base sm:text-lg max-w-xl leading-relaxed font-light">
              Sviluppo siti web ad alte prestazioni e realizzo flussi intelligenti che lavorano per te 24 ore su 24.
              Recupera fino a <span className="font-semibold text-[#1A1A1A]">15 ore a settimana</span> azzerando i compiti amministrativi ripetitivi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="hero-cta-primary"
                onClick={() => {
                  setCurrentPage('contatti');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#1A1A1A] hover:bg-[#8B7E66] text-[#F5F2ED] font-semibold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-sm cursor-pointer"
              >
                <span>Semplifica il tuo Business</span>
                <ArrowRight className="w-5 h-5 text-[#8B7E66]" />
              </button>
              
              <button
                id="hero-cta-secondary"
                onClick={() => {
                  setCurrentPage('servizi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] text-[#1A1A1A] font-semibold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Scopri i Servizi</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1A1A1A]/10 max-w-md">
              <div className="flex flex-col">
                <span className="font-serif italic font-bold text-3xl text-[#1A1A1A]">100%</span>
                <span className="text-[10px] text-[#8B7E66] font-mono tracking-widest uppercase mt-1">Lavoro customizzato</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif italic font-bold text-3xl text-[#1A1A1A]">-80%</span>
                <span className="text-[10px] text-[#8B7E66] font-mono tracking-widest uppercase mt-1">Tempo di risposta</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Billboard - The Lead Process Simulator */}
          <div className="lg:col-span-12 xl:col-span-5 relative">
            <div className="absolute inset-0 bg-[#8B7E66]/5 -z-10 rounded-none scale-110" />
            
            <div className="bg-white/80 backdrop-blur-md rounded-none p-6 shadow-xl border border-[#1A1A1A]/10 custom-shadow">
              <div className="flex justify-between items-center pb-4 border-b border-[#1A1A1A]/10">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-[#8B7E66]/40" />
                  <span className="w-2.5 h-2.5 bg-[#8B7E66]/70" />
                  <span className="w-2.5 h-2.5 bg-[#8B7E66]" />
                </div>
                <span className="font-mono text-[9px] text-[#8B7E66] uppercase tracking-[0.2em] bg-[#F5F2ED] border border-[#1A1A1A]/10 px-2.5 py-1 rounded-none">
                  Simulatore di Automazione Attivo
                </span>
              </div>

              {/* Simulation Configuration tabs */}
              <div className="mt-4 space-y-2 text-left">
                <label className="text-[10px] uppercase font-mono tracking-widest text-[#8B7E66] font-bold block">
                  1. Scegli un caso di esempio:
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {LEAD_TEMPLATES.map((item, idx) => (
                    <button
                      key={idx}
                      disabled={leadSimulationRunning}
                      onClick={() => {
                        setSelectedLeadIndex(idx);
                        setSimulationStep(0);
                      }}
                      className={`text-[10px] font-mono py-2 px-1 border uppercase tracking-wider transition-all cursor-pointer ${
                        selectedLeadIndex === idx
                          ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold'
                          : 'bg-[#FAF8F5] border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:bg-[#F5F2ED] hover:text-[#1A1A1A]'
                      } ${leadSimulationRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {idx === 0 ? '🏢 PMI' : idx === 1 ? '🍰 Negozio' : '🤖 Spam Bot'}
                    </button>
                  ))}
                </div>

                {/* Input Preview */}
                <div className="bg-[#FAF8F5]/90 border border-[#1A1A1A]/10 p-3 mt-2 text-left space-y-1">
                  <div className="flex justify-between items-center text-[9px] font-mono text-[#8B7E66]">
                    <span>MITTENTE: {currentLead.nome}</span>
                    <span className="font-bold">{currentLead.tipo}</span>
                  </div>
                  <p className="text-xs italic text-zinc-650 leading-relaxed font-serif">
                    "{currentLead.messaggio}"
                  </p>
                </div>
              </div>

              {/* Simulation Stage */}
              <div className="relative py-4 flex flex-col space-y-4">
                
                {/* Visual Pipeline nodes */}
                <div className="grid grid-cols-1 gap-2.5 z-10 text-left">
                  {/* Node 1 */}
                  <div className={`p-3.5 border transition-all duration-300 flex items-center justify-between ${
                    simulationStep >= 1 ? 'bg-[#8B7E66]/10 border-[#8B7E66] text-[#1A1A1A]' : 'bg-[#FAF8F5]/80 border-[#1A1A1A]/10 opacity-60'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A] border border-[#1A1A1A]/10">
                        <Mail className="w-4 h-4 text-[#8B7E66]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold">1. Trigger: Ricezione Form</span>
                        <span className="text-[10px] text-zinc-400 font-mono">Innesco automatico istantaneo</span>
                      </div>
                    </div>
                    {simulationStep >= 1 && (
                      <span className="text-[9px] font-mono bg-[#8B7E66] text-[#FAF8F5] px-1.5 py-0.5 uppercase tracking-widest font-bold">
                        Ricevuto
                      </span>
                    )}
                  </div>

                  {/* Node 2 */}
                  <div className={`p-3.5 border transition-all duration-300 flex items-center justify-between ${
                    simulationStep >= 2 ? 'bg-[#8B7E66]/10 border-[#8B7E66] text-[#1A1A1A]' : 'bg-[#FAF8F5]/80 border-[#1A1A1A]/10 opacity-60'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A] border border-[#1A1A1A]/10">
                        <Bot className="w-4 h-4 text-[#8B7E66]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold">2. Intelligenza: Screening AI</span>
                        <span className="text-[10px] text-zinc-400 font-mono">Valutazione budget, intenti e spam</span>
                      </div>
                    </div>
                    {simulationStep >= 2 && (
                      <span className="text-[9px] font-mono bg-emerald-700 text-[#FAF8F5] px-1.5 py-0.5 uppercase tracking-widest font-bold">
                        Profilato
                      </span>
                    )}
                  </div>

                  {/* Node 3 */}
                  <div className={`p-3.5 border transition-all duration-300 flex items-center justify-between ${
                    simulationStep >= 3 ? 'bg-[#8B7E66]/10 border-[#8B7E66] text-[#1A1A1A]' : 'bg-[#FAF8F5]/80 border-[#1A1A1A]/10 opacity-60'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A] border border-[#1A1A1A]/10">
                        <Database className="w-4 h-4 text-[#8B7E66]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold">3. Azione: Sync CRM & Notifica</span>
                        <span className="text-[10px] text-zinc-400 font-mono">Notifica Slack / Trello / Email</span>
                      </div>
                    </div>
                    {simulationStep >= 3 && (
                      <span className="text-[9px] font-mono bg-blue-700 text-[#FAF8F5] px-1.5 py-0.5 uppercase tracking-widest font-bold">
                        Eseguito
                      </span>
                    )}
                  </div>
                </div>

                {/* AI Reasoning engine panel */}
                {simulationStep >= 2 && (
                  <div className="bg-[#1A1A1A] text-emerald-400 font-mono text-[10px] p-4 text-left border-l-2 border-[#8B7E66] space-y-2 mt-1 leading-relaxed animate-fadeIn">
                    <div className="flex items-center space-x-2 text-emerald-500 border-b border-zinc-800 pb-1.5 font-bold">
                      <Bot className="w-3.5 h-3.5 animate-pulse" />
                      <span>LOG DEL CERVELLO AUTOMATICO</span>
                    </div>
                    
                    <div>
                      <span className="text-zinc-500">PUNTEGGIO COMPLIANCE:</span>{' '}
                      <span className="font-bold text-white">{currentLead.punteggio}</span>
                    </div>
                    
                    <div>
                      <span className="text-zinc-500">RAGIONAMENTO LOGICO:</span>{' '}
                      <span className="text-zinc-200">{currentLead.aiReasoning}</span>
                    </div>

                    {simulationStep >= 3 && (
                      <div className="pt-1.5 border-t border-zinc-800 mt-1.5">
                        <span className="text-zinc-500">AZIONI DI AUTOMAZIONE:</span>{' '}
                        <span className="text-emerald-300 font-bold">{currentLead.aiAction}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Progress bar and button */}
                <div className="pt-2 text-center">
                  <div className="w-full bg-[#F5F2ED] h-2 overflow-hidden mb-4 border border-[#1A1A1A]/10">
                    <div 
                      className="bg-[#8B7E66] h-full transition-all duration-300" 
                      style={{ width: `${leadProgress}%` }}
                    />
                  </div>

                  <button
                    onClick={startLeadSimulation}
                    disabled={leadSimulationRunning}
                    className={`w-full font-mono text-xs tracking-widest uppercase py-4 px-5 border transition-all ${
                      leadSimulationRunning 
                        ? 'bg-[#F5F2ED] border-[#1A1A1A]/10 text-zinc-400 cursor-not-allowed' 
                        : 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F5F2ED] hover:bg-[#8B7E66] hover:border-[#8B7E66] cursor-pointer'
                    }`}
                  >
                    {leadSimulationRunning 
                      ? `Fase ${simulationStep}: Elaborazione attiva...` 
                      : simulationStep === 4 
                        ? 'Riavvia Simulazione Flusso' 
                        : 'Simula Flusso di Lead Corrente'}
                  </button>
                </div>

              </div>
            </div>
            
            {/* Context Floating elements */}
            <div className="absolute -top-6 -right-5 bg-white shadow-md border border-[#1A1A1A]/10 rounded-full px-4 py-2 flex items-center space-x-2 text-[10px] font-mono font-bold text-[#8B7E66] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#8B7E66] animate-pulse fill-[#8B7E66]" />
              <span>Attivo 24/7/365</span>
            </div>

            <div className="absolute -bottom-6 -left-5 bg-white shadow-md border border-[#1A1A1A]/10 rounded-full px-4 py-2 flex items-center space-x-2 text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5 text-[#8B7E66] animate-spin" />
              <span>Massima Efficienza</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. I PILASTRI DEL SUCCESSO DIGITALE */}
      <section className="py-24 bg-[#FAF8F5] border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
              Infrastruttura Digitale
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl italic font-bold tracking-tight text-[#1A1A1A]">
              I Pilastri del Successo Digitale
            </h2>
            <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Non assembliamo blocchi pronti. Concepiamo ogni singolo sito web o integrazione logica per produrre lead profilati e alleviare il tuo carico lavorativo ordinario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#FAF8F5] border border-[#1A1A1A]/10 p-8 sm:p-10 rounded-3xl text-left space-y-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-[#8B7E66]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">
                    Web Strategy & Generative Code
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed font-light">
                    Sviluppiamo architetture stabili ad alte prestazioni, con SEO integrato dal primo pixel. Dalla robustezza di WordPress customizzato fino a capolavori scritti a mano in Pure Code (React).
                  </p>
                </div>
                <ul className="space-y-3 text-[#1A1A1A]/80 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0" />
                    <span>Velocità di caricamento inferiore a 1.2 secondi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-[#8B7E66]" />
                    <span>Copywriting orientato all'acquisizione lead</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0" />
                    <span>Interfacce reattive ottimizzate per dispositivi mobile</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => { setCurrentPage('servizi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center space-x-2 text-[11px] uppercase tracking-[0.15em] font-bold text-[#1A1A1A] hover:text-[#8B7E66] pt-4 cursor-pointer"
              >
                <span>Esplora opzioni web</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FAF8F5] border border-[#1A1A1A]/10 p-8 sm:p-10 rounded-3xl text-left space-y-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10 rounded-full flex items-center justify-center">
                  <Layers className="w-6 h-6 text-[#8B7E66]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">
                    Social Lead Gen & Automation
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm leading-relaxed font-light">
                    Costruiamo imbuti digitali logici in grado di catturare l'attenzione dei lead sui social o sul web e gestirli in modo asincrono, pronti per essere chiusi tramite CRM o email.
                  </p>
                </div>
                <ul className="space-y-3 text-[#1A1A1A]/80 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0" />
                    <span>Integrazione automatica di form con CRM professionali</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0" />
                    <span>Chatbot AI qualitativi attivi giorno e notte</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0" />
                    <span>Sincronizzazione dati impeccabile con Make & Zapier</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => { setCurrentPage('servizi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex items-center space-x-2 text-[11px] uppercase tracking-[0.15em] font-bold text-[#1A1A1A] hover:text-[#8B7E66] pt-4 cursor-pointer"
              >
                <span>Esplora i flussi e-mail</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. L'AUTOMAZIONE CHE LAVORA PER TE */}
      <section className="py-24 bg-[#F5F2ED] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1 - Custom Art placeholder + branding */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-[#8B7E66]/20 rounded-3xl blur-md opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-[#FAF8F5] border border-[#1A1A1A]/10 p-8 rounded-3xl shadow-sm text-center space-y-6">
                
                {/* Visual Avatar outline representating Maria Teresa Rogani */}
                <div className="relative w-36 h-36 mx-auto rounded-full bg-[#FAF8F5] border border-[#1A1A1A]/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8B7E66]/15 to-transparent" />
                  <span className="font-serif italic font-black text-4xl text-[#1A1A1A]">MTR</span>
                  
                  {/* Digital particles */}
                  <span className="absolute bottom-4 right-4 w-3.5 h-3.5 bg-emerald-600 border-2 border-white rounded-full animate-ping" />
                  <span className="absolute bottom-4 right-4 w-3.5 h-3.5 bg-emerald-600 border-2 border-white rounded-full" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif italic font-bold text-xl text-[#1A1A1A]">Maria Teresa Rogani</h4>
                  <p className="text-[10px] uppercase font-mono text-[#8B7E66] tracking-[0.2em]">Fondatrice & Partner Strategica</p>
                </div>

                <blockquote className="text-sm font-light text-[#1A1A1A]/70 italic leading-relaxed">
                  "Don't design for brands. Design for people interacting with brands. L'automazione non elimina l'aspetto umano: lo esalta liberandoci dalle catene del lavoro ripetitivo più frustrante."
                </blockquote>

                <div className="flex justify-center space-x-2 pt-2">
                  <span className="px-3 py-1 bg-[#F5F2ED] hover:bg-[#8B7E66]/10 text-[#1A1A1A] cursor-default rounded-md text-[10px] font-mono font-medium transition-colors border border-[#1A1A1A]/10">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#F5F2ED] hover:bg-[#8B7E66]/10 text-[#1A1A1A] cursor-default rounded-md text-[10px] font-mono font-medium transition-colors border border-[#1A1A1A]/10">
                    Make Automation
                  </span>
                  <span className="px-3 py-1 bg-[#F5F2ED] hover:bg-[#8B7E66]/10 text-[#1A1A1A] cursor-default rounded-md text-[10px] font-mono font-medium transition-colors border border-[#1A1A1A]/10">
                    No-Spam
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
              Automazione Etica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl italic font-bold text-[#1A1A1A] leading-tight">
              L'automazione che lavora per te.<br />
              <span className="not-italic font-sans font-black text-[#8B7E66]">Risparmio di tempo, zero errori.</span>
            </h2>
            
            <p className="text-[#1A1A1A]/70 text-sm sm:text-base font-light leading-relaxed">
              Disegniamo l'infrastruttura di acquisizione e gestione clienti in modo da minimizzare la necessità del tuo intervento in ogni fase ripetitiva. Un sistema automatico risponde istantaneamente e indirizza le azioni giuste.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8B7E66]/10 text-[#8B7E66] rounded-full flex items-center justify-center shrink-0 mt-1 border border-[#1A1A1A]/5">
                  <Hourglass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#1A1A1A] text-lg">Risparmio di Tempo Enorme</h4>
                  <p className="text-[#1A1A1A]/60 text-sm font-light leading-relaxed mt-0.5">
                    Recupera fino a 15 ore a settimana di pura e faticosa burocrazia o smistamento dati. I form, le email, e i preventivi viaggiano istantaneamente senza sforzi.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8B7E66]/10 text-[#8B7E66] rounded-full flex items-center justify-center shrink-0 mt-1 border border-[#1A1A1A]/5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#1A1A1A] text-lg">Zero Errori di Copia-Incolla</h4>
                  <p className="text-[#1A1A1A]/60 text-sm font-light leading-relaxed mt-0.5">
                    Unificando tutte le applicazioni con ponti di integrazione (Zapier, Make), non perderai più nessun contatto caldo e nessun dato per strada.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8B7E66]/10 text-[#8B7E66] rounded-full flex items-center justify-center shrink-0 mt-1 border border-[#1A1A1A]/5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif italic font-bold text-[#1A1A1A] text-lg">Reattività Istantanea (H24)</h4>
                  <p className="text-[#1A1A1A]/60 text-sm font-light leading-relaxed mt-0.5">
                    I lead pronti ad acquistare ricevono risposte, preventivi, materiali e link di prenotazione nel giro di 3 minuti dalla prima richiesta sul sito.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentPage('chi-sono');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#8B7E66] font-bold group cursor-pointer pt-2"
            >
              <span>Leggi di più sulla mia metodologia</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. BANNER DIGITALE FINALE */}
      <section className="bg-[#1A1A1A] py-20 my-12 relative overflow-hidden">
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7E66]/10 rounded-full blur-3xl -z-5" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAF8F5]/5 rounded-full blur-3xl -z-5" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
            Pronto al Cambiamento?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl italic font-bold tracking-tight text-[#FAF8F5] leading-tight">
            Pronto a trasformare il tuo Business?
          </h2>
          <p className="text-[#FAF8F5]/70 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Non lasciare che la tecnologia obsoleta o la paura del digitale blocchino i tuoi sogni commerciali. Uniamo forze e creiamo un sistema logico impeccabile che vende per te.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              id="cta-banner-primary"
              onClick={() => {
                setCurrentPage('contatti');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#8B7E66] hover:bg-[#5F5542] text-[#F5F2ED] font-bold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 shadow-md cursor-pointer"
            >
              Prenota Consulenza Gratuita
            </button>
            <button
              id="cta-banner-secondary"
              onClick={() => {
                setCurrentPage('journal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-[#FAF8F5]/30 hover:border-[#FAF8F5] hover:bg-[#FAF8F5]/10 text-[#FAF8F5] font-bold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 cursor-pointer"
            >
              Leggi Casi Studio
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
