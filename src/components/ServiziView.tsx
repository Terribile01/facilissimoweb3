import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Zap, Globe, Code, ArrowUpRight, 
  Workflow, Bot, RefreshCcw, Check, Users, Sparkles 
} from 'lucide-react';
import { Page } from '../types';

interface ServiziViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function ServiziView({ setCurrentPage }: ServiziViewProps) {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      name: 'Fase 01: Curiosità',
      badge: 'TRAFFIC INBOUND',
      title: 'L\'utente atterra sul tuo ecosistema',
      desc: 'Il potenziale cliente legge un tuo post su Instagram/LinkedIn o una ricerca SEO su Google e clicca per approfondire. Atterra su una Landing Page ad altissimo impatto estetico e velocità fulminea.',
      tools: ['Web / Landing Page', 'Copywriting Empatico', 'SEO Attivo'],
      conversionMetric: 'Tasso di Rimbalzo: < 22%',
      colorTheme: 'border-[#8B7E66] text-[#8B7E66] bg-[#8B7E66]/10'
    },
    {
      id: 2,
      name: 'Fase 02: Ingaggio AI',
      badge: 'INTERACTION',
      title: 'L\'assistente virtuale accoglie il lead',
      desc: 'Invece di compilare un form noioso, l\'utente interagisce con un assistente intelligente (come l\'AI di FacilissimoWeb). Risolve i dubbi di primo livello ed esplicita i propri bisogni ed il budget approssimativo.',
      tools: ['AI Conversazionale', 'FAQ istantanee', 'Screening di base'],
      conversionMetric: 'Tempo di Risposta: < 3 Secondi',
      colorTheme: 'border-[#1A1A1A] text-[#1A1A1A] bg-[#1A1A1A]/5'
    },
    {
      id: 3,
      name: 'Fase 03: Profilazione',
      badge: 'SYNCHRONIZATION',
      title: 'I dati viaggiano in automatico',
      desc: 'Senza alcun intervento umano, le risposte del lead vengono estratte, formattate e spedite direttamente al tuo CRM (es. Notion, HubSpot) e caricate in un file Excel protetto. Ricevi una notifica Slack/WhatsApp istantanea.',
      tools: ['Make / Zapier Bridges', 'CRM Sync', 'Notifica push su Smartphone'],
      conversionMetric: 'Errori di Inserimento: 0%',
      colorTheme: 'border-[#8B7E66] text-[#8B7E66] bg-[#8B7E66]/10'
    },
    {
      id: 4,
      name: 'Traguardo: Lead Caldo',
      badge: 'CONVERSION',
      title: 'La vendita si chiude con un clic',
      desc: 'Il potenziale cliente è già stato informato sul posizionamento di prezzo ed è altamente motivato. Ha già prenotato uno slot libero sul tuo calendario. Tu apri la videochiamata e chiudi l\'accordo.',
      tools: ['Calendly Integration', 'Notifiche SMS reminder', 'Onboarding automatico'],
      conversionMetric: 'Tasso di Chiusura: +45%',
      colorTheme: 'border-[#1A1A1A] text-[#1A1A1A] bg-[#1A1A1A]/5'
    }
  ];

  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] overflow-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-[#8B7E66]/10 border border-[#8B7E66]/20 px-4 py-2 rounded-full text-[10px] font-mono font-bold text-[#8B7E66] uppercase tracking-widest">
            <span>Servizi & Soluzioni Digitali</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
            Trasformiamo la complessità tecnologica in <span className="not-italic font-sans font-black text-[#8B7E66]">vantaggio competitivo</span>.
          </h1>
          <p className="text-[#1A1A1A]/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Soluzioni su misura per micro-imprenditori e freelance: dal Web Development ad alte prestazioni a sistemi di Lead Generation completamente automatizzati.
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICES CLUSTERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Cluster A: Sviluppo Web */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#1A1A1A]/10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
                  <Globe className="w-6 h-6 text-[#8B7E66]" />
                </div>
                <div>
                  <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">Web Development</h3>
                  <span className="font-mono text-[10px] text-[#8B7E66] uppercase tracking-[0.2em]">Siti web che acquisiscono</span>
                </div>
              </div>

              <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
                Il tuo sito non deve essere un depliant dimenticato, ma uno strumento attivo di vendita. Sviluppiamo soluzioni pulite, sicure e con prestazioni da record.
              </p>

              <div className="space-y-6 pt-2">
                {/* Custom Sub-card 1 */}
                <div className="p-5 bg-white border border-[#1A1A1A]/10 rounded-2xl space-y-2">
                  <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A] flex items-center justify-between">
                    <span>WordPress Strategico Custom</span>
                    <span className="text-[9px] font-mono font-bold text-[#8B7E66] bg-[#8B7E66]/10 border border-[#8B7E66]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Ottimizzato</span>
                  </h4>
                  <p className="text-[#1A1A1A]/60 text-xs font-light leading-relaxed">
                    Nessun template commerciale pesante o copiato. Costruiamo strutture personalizzate e leggere focalizzate su una navigazione impeccabile, integrando sistemi SEO avanzati.
                  </p>
                </div>

                {/* Custom Sub-card 2 */}
                <div className="p-5 bg-white border border-[#1A1A1A]/10 rounded-2xl space-y-2">
                  <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A] flex items-center justify-between">
                    <span>Pure Code & Generative</span>
                    <span className="text-[9px] font-mono font-bold text-[#1A1A1A] bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Massima Velocità</span>
                  </h4>
                  <p className="text-[#1A1A1A]/60 text-xs font-light leading-relaxed">
                    Sviluppiamo applicazioni web scrivendo codice statico o in React super performante. Adatto a chi esige carichi istantanei, design originalissimi e zero spese di manutenzione plugin.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-[10px] text-zinc-400 font-mono">*Include ottimizzazione mobile e certificato SSL</span>
              <button 
                onClick={() => { setCurrentPage('contatti'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-[#1A1A1A] hover:bg-[#8B7E66] text-[#F5F2ED] rounded-none py-3.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                Inizia Progetto
              </button>
            </div>
          </div>

          {/* Cluster B: Marketing Automation */}
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#1A1A1A]/10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
                  <Workflow className="w-6 h-6 text-[#8B7E66]" />
                </div>
                <div>
                  <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">Marketing Automation</h3>
                  <span className="font-mono text-[10px] text-[#8B7E66] uppercase tracking-[0.2em]">Sistemi che lavorano per te</span>
                </div>
              </div>

              <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
                Mettiamo in comunicazione ogni componente del tuo set di applicazioni digitali, azzerando le perdite di tempo e velocizzando il servizio clienti.
              </p>

              <div className="space-y-4 pt-2">
                {/* Detail 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif italic font-bold text-[#1A1A1A] text-base">"Il Sistema che Vende" (Funnel)</h4>
                    <p className="text-[#1A1A1A]/60 text-xs font-light leading-relaxed mt-0.5">
                      Configuriamo flussi automatici che catturano i lead sui social, inviano mail automatiche sequenziali e conducono l'acquirente all'acquisto senza il tuo intervento diretto.
                    </p>
                  </div>
                </div>

                {/* Detail 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif italic font-bold text-[#1A1A1A] text-base">AI-Driven Dialogues (Chatbot AI)</h4>
                    <p className="text-[#1A1A1A]/60 text-xs font-light leading-relaxed mt-0.5">
                      Costruiamo assistenti virtuali intelligenti istruiti in modo univoco sulla tua attività per accogliere, profilare e qualificare i lead h24 per conto tuo.
                    </p>
                  </div>
                </div>

                {/* Detail 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B7E66] shrink-0 mt-2" />
                  <div>
                    <h4 className="font-serif italic font-bold text-[#1A1A1A] text-base">Automated Bridges (Integrazioni)</h4>
                    <p className="text-[#1A1A1A]/60 text-xs font-light leading-relaxed mt-0.5">
                      Connettiamo form del sito, CRM (Notion, HubSpot, Excel), e mail marketing con ponti infallibili (Make, Zapier) eliminando lo stress del copia-incolla manuale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-[10px] text-zinc-400 font-mono">*Meno stress amministrativo, più conversioni</span>
              <button 
                onClick={() => { setCurrentPage('contatti'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-[#1A1A1A] hover:bg-[#8B7E66] text-[#F5F2ED] rounded-none py-3.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                Inizia Automazione
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CUSTOMER JOURNEY VISUALIZER */}
      <section className="py-24 bg-[#FAF8F5] border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
              Simulatore di Processo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl italic font-bold tracking-tight text-[#1A1A1A]">
              Il Viaggio del Lead (Customer Journey Visualizer)
            </h2>
            <p className="text-[#1A1A1A]/70 text-sm font-light max-w-xl mx-auto">
              Fai clic su ciascuna fase sottostante per scoprire l'impatto visivo di un workflow ottimizzato e come la tecnologia gestisce il tuo cliente dall'inizio fino al traguardo.
            </p>
          </div>

          {/* Interactive Steps menu */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stages.map((stg) => (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                className={`py-4 px-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  activeStage === stg.id
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#F5F2ED] shadow-sm font-bold'
                    : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:bg-[#FAF8F5] font-semibold'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono">0{stg.id}</span>
                  <span className={`w-2 h-2 rounded-full ${activeStage === stg.id ? 'bg-[#8B7E66] animate-pulse' : 'bg-zinc-300'}`} />
                </div>
                <h4 className="text-xs uppercase tracking-wider mt-2 font-sans">{stg.name.split(':')[1] || stg.name}</h4>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Display Panel */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur border border-[#1A1A1A]/10 rounded-3xl p-8 sm:p-10 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Stage copy */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-[9px] font-mono font-bold border border-[#8B7E66]/20 bg-[#8B7E66]/10 text-[#8B7E66] px-3 py-1 rounded-full uppercase tracking-wider">
                  {stages[activeStage - 1].badge}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 font-medium">FASE 0{activeStage} SU 04</span>
              </div>

              <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {stages[activeStage - 1].title}
              </h3>
              
              <p className="text-[#1A1A1A]/75 text-sm sm:text-base font-light leading-relaxed">
                {stages[activeStage - 1].desc}
              </p>

              <div className="space-y-3">
                <h5 className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#8B7E66]">Tecnologie & Metodo</h5>
                <div className="flex flex-wrap gap-2">
                  {stages[activeStage - 1].tools.map((t, i) => (
                    <span key={i} className="bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-full px-4 py-1.5 text-xs text-[#1A1A1A] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage stats/visual right side */}
            <div className="md:col-span-5 bg-[#FAF8F5] border border-[#1A1A1A]/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-4 shadow-sm">
              <span className="font-mono text-[9px] uppercase text-[#8B7E66] tracking-[0.15em] font-semibold">Metrica d'Efficienza Chiave</span>
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border border-[#1A1A1A]/10 shadow-xs">
                <Sparkles className="w-8 h-8 text-[#8B7E66]" />
              </div>
              <div className="space-y-1">
                <div className="font-serif italic font-bold text-2xl text-[#1A1A1A]">
                  {stages[activeStage - 1].conversionMetric.split(':')[1]}
                </div>
                <div className="text-[10px] text-[#8B7E66] font-mono lowercase tracking-wider">
                  {stages[activeStage - 1].conversionMetric.split(':')[0]}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="bg-[#1A1A1A] py-20 my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7E66]/10 rounded-full blur-3xl -z-5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
            Pronto ad Automatizzare?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl italic font-bold tracking-tight text-[#FAF8F5] leading-tight">
            Pronto ad automatizzare la tua crescita?
          </h2>
          <p className="text-[#FAF8F5]/75 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Non lasciare che l'accumulo di incombenze giornaliere ti allontani dalla tua strategia. Lascia che la struttura digitale sbrighi tutto il resto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => {
                setCurrentPage('contatti');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#8B7E66] hover:bg-[#5F5542] text-[#F5F2ED] font-bold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 shadow-md cursor-pointer"
            >
              Prenota Consulenza
            </button>
            <button
              onClick={() => {
                setCurrentPage('journal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-[#FAF8F5]/30 hover:border-[#FAF8F5] hover:bg-[#FAF8F5]/10 text-[#FAF8F5] font-bold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 cursor-pointer"
            >
              Vedi Casi Studio
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
