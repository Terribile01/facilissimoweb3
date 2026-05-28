import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Zap, MessageSquare, ShieldCheck, 
  ArrowUpRight, Share2, Users, Database, Clock, Calendar, 
  CheckCircle2, AlertCircle, HelpCircle, ChevronRight, Calculator,
  Smartphone, Terminal, Layers, TrendingUp
} from 'lucide-react';
import { Page } from '../types';

interface SocialLeadGenViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function SocialLeadGenView({ setCurrentPage }: SocialLeadGenViewProps) {
  // Sliders State with requested defaults
  const [reach, setReach] = useState<number>(2000); // 2000 views
  const [keywordRate, setKeywordRate] = useState<number>(1.5); // 1.5%
  const [formRate, setFormRate] = useState<number>(35); // 35%
  const [bookingRate, setBookingRate] = useState<number>(25); // 25%
  const [dealValue, setDealValue] = useState<number>(1000); // Default average client value €1000

  // Clickable 5-phase active step state
  const [activeStep, setActiveStep] = useState<number>(0);

  // Math conversions
  const triggersCount = Math.round(reach * (keywordRate / 100));
  const qualifiedLeadsCount = Math.round(triggersCount * (formRate / 100));
  const appointmentsCount = Math.round(qualifiedLeadsCount * (bookingRate / 100));
  
  // Custom estimations
  const totalValueEstimated = appointmentsCount * dealValue;
  // Let's assume on average each manual conversation and booking takes 35 mins.
  // Plus doing it automatically saves manual copy-pasting to CRM. 15 hours saved overall is typical or based on lead volume!
  const estimatedHoursSaved = Math.round((triggersCount * 10 + qualifiedLeadsCount * 15 + appointmentsCount * 30) / 60);

  interface Step {
    number: string;
    title: string;
    shortDesc: string;
    detailedDesc: string;
    icon: React.ReactNode;
    mockupLabel: string;
    mockupContent: any;
  }

  const steps: Step[] = [
    {
      number: '01',
      title: 'Social Touchpoint',
      shortDesc: "L'utente visualizza un post o reel strategico su Instagram o LinkedIn in target coi suoi dolori.",
      detailedDesc: "Sfrutta l'interesse immediato dell'utente. Invece di dirgli 'clicca sul link in bio' (che riduce la portata organica dei post del 70%), lo inviti a lasciare un commento naturale sotto il post con una specifica Parola Chiave strategica.",
      icon: <Users className="w-5 h-5 text-[#8B7E66]" />,
      mockupLabel: "Interazione Social",
      mockupContent: {
        platform: "Instagram",
        author: "@il_tuo_brand",
        caption: "Vuoi eliminare la contabilità manuale? 📑 Commenta 'INFO' sotto questo reel e ti invio istantaneamente la guida completa per impostare Make & Zapier sui tuoi form! 👇",
        metrics: "1,248 visualizzazioni • 48 commenti"
      }
    },
    {
      number: '02',
      title: 'Chat-Trigger istantaneo',
      shortDesc: "Commentando con la Parola Chiave, il nostro webhook attiva una chat privata in frazione di secondo.",
      detailedDesc: "I nostri server ascoltano costantemente l'API dei tuoi canali social tramite webhook sicuri. Quando viene rilevata la parola chiave, il sistema reagisce in meno di 500ms inviando una risposta personalizzata ed amichevole in direct message (DM).",
      icon: <Zap className="w-5 h-5 text-amber-500 animate-pulse" />,
      mockupLabel: "Webhook Attivo (Zapier/Make)",
      mockupContent: {
        logHeader: "LOGS WEBHOOK #38290 - INSTANT CHAT",
        logItems: [
          "🕒 Status: MONITORING ACTIVE",
          "📥 Ricevuto commento da utente: @mario_rossi",
          "📥 Testo commento rilevato: 'INFO'",
          "⚡ Condizione soddisfatta! Esecuzione scenario DM...",
          "📤 Inviato messaggio privato: 'Ciao Mario! Ecco la guida...'"
        ]
      }
    },
    {
      number: '03',
      title: 'Qualificazione Chiara',
      shortDesc: "L'utente compila un modulo leggero per richiedere la guida energetica, inserendo email e necessità.",
      detailedDesc: "All'interno del Direct Message viene presentato un link personalizzato o un form interattivo ultra-leggero. Qui l'utente fornisce i dati sensibili necessari a verificare l'interesse reale, inserendo in totale armonia e comfort il proprio indirizzo email.",
      icon: <MessageSquare className="w-5 h-5 text-[#8B7E66]" />,
      mockupLabel: "Schermata DM Qualificazione",
      mockupContent: {
        msg1: "Ciao Mario! Felice della tua richiesta. Ecco la Guida Promessa.",
        msg2: "Prima di scaricarla, inserisci l'indirizzo email aziendale dove vuoi che arrivi il file pdf, e indicami la tua esigenza principale:",
        formPreview: {
          email: "mario.rossi@azienda.it",
          need: "Integrazione Form + CRM (Make)"
        }
      }
    },
    {
      number: '04',
      title: 'Algoritmo Lead-Scoring',
      shortDesc: "Il sistema calcola l'urgenza e la compatibilità economica prima di inviare i dati nel CRM aziendale.",
      detailedDesc: "Non tutti i contatti hanno la stessa maturità o budget. L'algoritmo analizza le risposte inserite, calcola un punteggio di compatibilità (Lead Scoring) e sincronizza l'email nel tuo CRM (ActiveCampaign, HubSpot o un comodo foglio Google) taggando il livello di priorità.",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      mockupLabel: "Valutazione Algoritmo",
      mockupContent: {
        logHeader: "PROCESSO DI LEAD SCORING #77291",
        metrics: [
          "🔍 Dominio: azienda.it (Profilo Aziendale)",
          "🔍 Need selezionato: Integrazione Form + CRM (Fattore Alto)",
          "📊 Lead Score Generato: 88/100",
          "🏷️ Classificazione: LEAD CALDO (PRIORITÀ ALTA)",
          "🔄 Sync: Inviato a CRM & Notificato su Slack a Maria Teresa Rogani"
        ]
      }
    },
    {
      number: '05',
      title: 'Instant Booking',
      shortDesc: "Il contatto compatibile prenota direttamente lo slot di consulenza telefonica. Contatto Convertito!",
      detailedDesc: "I lead dotati di un punteggio elevato non vengono lasciati nel congelatore: vengono reindirizzati istantaneamente ad una pagina di prenotazione (Calendly o WordPress integrato) che mostra solo gli slot liberi compatibili della tua agenda. Niente più email infinte 'tu quando ci sei?'.",
      icon: <Calendar className="w-5 h-5 text-indigo-500" />,
      mockupLabel: "Calendario Strategico",
      mockupContent: {
        slotLabel: "PRENOTAZIONE COMPLETATA!",
        event: "Call Strategica di 30 Minuti - Maria Teresa Rogani (FacilissimoWeb) <> Mario Rossi",
        time: "Venerdì alle ore 10:30 (Ora Locale)",
        notif: "📩 Inviti automatici spediti su Google Calendar con Google Meet link integrato!"
      }
    }
  ];

  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] overflow-hidden min-h-screen">
      
      {/* 1. HERO BIO SECTION */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-[#8B7E66]/10 border border-[#8B7E66]/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#8B7E66]" />
            <span className="text-[10px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.2em]">
              Social Integration & Lead Gen
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
            La Macchina Automatica <br /> 
            di <span className="not-italic font-sans font-black text-[#8B7E66]">Lead Generation</span>.
          </h1>

          <blockquote className="border-l-4 border-[#8B7E66] pl-4 py-1 italic text-[#1A1A1A]/70 text-lg sm:text-xl leading-relaxed font-light font-serif max-w-3xl">
            "Mappiamo, connettiamo e automatizziamo il viaggio del lead dai tuoi post social fino al calendario commerciale. Senza sprecare un solo centesimo."
          </blockquote>

          <div className="max-w-2xl text-[#1A1A1A]/75 text-sm sm:text-base font-light leading-relaxed pt-2">
            <p>
              Un grande seguito sui social è inutile se non possiedi un'infrastruttura immediata per convertire i commenti in email e contratti commerciali. Costruiamo algoritmi invisibili che catturano l'interesse dei tuoi utenti immediatamente sul post, pre-qualificando il budget ed indirizzando il contatto qualificato direttamente al CRM aziendale.
            </p>
          </div>
        </div>
      </section>

      {/* 2. UN MECCANISMO PERFETTO: 5 FASI IN ZERO SECONDI */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-left space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
              Automazione Flussi Direct
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl italic font-bold tracking-tight text-[#1A1A1A]">
              Un Meccanismo Perfetto: Il Viaggio del Lead in 5 Fasi
            </h2>
            <p className="text-[#1A1A1A]/70 text-sm font-light max-w-2xl">
              Fai clic su ciascuna fase per simulare in diretta cosa vede l'utente finale e come rispondono i nostri bot e algoritmi silenziosi in frazioni di secondo.
            </p>
          </div>

          {/* Interactive Flow Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Steps Timeline Buttons */}
            <div className="lg:col-span-6 space-y-4">
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                      isSelected 
                        ? 'bg-white border-[#8B7E66] shadow-sm transform translate-x-1.5' 
                        : 'bg-white/40 border-[#1A1A1A]/5 hover:border-[#1A1A1A]/10 hover:bg-white/70'
                    }`}
                  >
                    {/* Index circle */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shrink-0 ${
                      isSelected ? 'bg-[#8B7E66] text-white' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/60'
                    }`}>
                      {step.number}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-serif italic font-bold text-lg text-[#1A1A1A]">
                          {step.title}
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />}
                      </div>
                      <p className="text-[#1A1A1A]/70 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                        {step.shortDesc}
                      </p>
                    </div>

                    <div className="text-zinc-350 shrink-0 self-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Simulated Live Device/Terminal Visual Screen */}
            <div className="lg:col-span-6">
              <div className="bg-[#1A1A1A] text-[#FAF8F5] rounded-3xl p-6 shadow-xl border border-white/10 relative overflow-hidden transition-all duration-300 min-h-[380px] flex flex-col justify-between">
                
                {/* Header screen decoration */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-[9px] uppercase tracking-widest text-[#FAF8F5]/50">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8B7E66]" />
                    <span>{steps[activeStep].mockupLabel}</span>
                  </div>
                  <span className="flex items-center space-x-1 font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live Simulator</span>
                  </span>
                </div>

                {/* Simulated Content Screen depending on active index selection */}
                <div className="py-6 flex-grow flex flex-col justify-center text-left">
                  
                  {activeStep === 0 && (
                    <div className="space-y-4 font-sans max-w-md mx-auto w-full">
                      <div className="bg-[#FAF8F5]/5 border border-white/5 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-[#8B7E66] flex items-center justify-center text-xs font-serif font-black">FW</div>
                          <div>
                            <span className="text-xs font-bold block text-white">{steps[0].mockupContent.author}</span>
                            <span className="text-[9px] text-zinc-400 font-mono">{steps[0].mockupContent.platform} • Promosso</span>
                          </div>
                        </div>
                        <p className="text-xs text-zinc-250 italic leading-relaxed">
                          "{steps[0].mockupContent.caption}"
                        </p>
                      </div>

                      {/* Comment Simulation UI */}
                      <div className="bg-[#FAF8F5]/10 rounded-xl p-3 flex justify-between items-center text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[8px] font-bold">MR</div>
                          <span className="font-semibold text-white">mario_rossi:</span>
                          <span className="text-amber-300 font-bold tracking-wider">"INFO"</span>
                        </div>
                        <span className="text-[8px] text-zinc-400 font-mono italic">Adesso commentato</span>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="font-mono text-xs text-left max-w-md mx-auto w-full space-y-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <div className="flex items-center justify-between text-[10px] text-white/40 pb-2 border-b border-white/5">
                        <span>{steps[1].mockupContent.logHeader}</span>
                        <Terminal className="w-3.5 h-3.5 text-[#8B7E66]" />
                      </div>
                      <div className="space-y-1.5 font-light">
                        {steps[1].mockupContent.logItems?.map((log, lIdx) => (
                          <div key={lIdx} className={`leading-relaxed ${
                            log.includes('⚡') ? 'text-amber-400 font-semibold' :
                            log.includes('📥') ? 'text-blue-300' :
                            log.includes('📤') ? 'text-emerald-400' : 'text-zinc-300'
                          }`}>
                            {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3 font-sans max-w-md mx-auto w-full text-xs">
                      {/* DM Bubbles */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 rounded-full bg-[#8B7E66] flex items-center justify-center text-[10px] font-serif shrink-0">FW</div>
                        <div className="bg-zinc-800 rounded-2xl p-3 rounded-tl-sm text-zinc-200">
                          {steps[2].mockupContent.msg1}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 rounded-full bg-[#8B7E66] flex items-center justify-center text-[10px] font-serif shrink-0">FW</div>
                        <div className="bg-zinc-800 rounded-2xl p-3 rounded-tl-sm text-zinc-200 space-y-3">
                          <p>{steps[2].mockupContent.msg2}</p>
                          
                          {/* Inside chat light form simulation */}
                          <div className="bg-white text-zinc-900 rounded-xl p-3 space-y-2 text-left font-sans shadow-md border-t-2 border-[#8B7E66]">
                            <div>
                              <label className="text-[8px] uppercase tracking-widest text-[#8B7E66] font-bold block">La tua email aziendale</label>
                              <div className="bg-zinc-50 border border-zinc-250 text-xs px-2.5 py-1.5 rounded-md mt-0.5 text-zinc-700">
                                {steps[2].mockupContent.formPreview?.email}
                              </div>
                            </div>
                            <div>
                              <label className="text-[8px] uppercase tracking-widest text-[#8B7E66] font-bold block">Esigenza Principale</label>
                              <div className="bg-zinc-50 border border-zinc-250 text-xs px-2.5 py-1.5 rounded-md mt-0.5 text-zinc-700 font-bold">
                                {steps[2].mockupContent.formPreview?.need}
                              </div>
                            </div>
                            <span className="text-[8px] text-zinc-400 block pb-1">🔒 Consenso GDPR attivo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="font-mono text-xs text-left max-w-md mx-auto w-full space-y-3 bg-black/40 p-5 rounded-2xl border border-white/5">
                      <div className="flex items-center justify-between text-[10px] text-white/40 pb-2 border-b border-white/5">
                        <span>{steps[3].mockupContent.logHeader}</span>
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="space-y-1.5">
                        {steps[3].mockupContent.metrics?.map((metric, mIdx) => (
                          <div key={mIdx} className={`leading-relaxed ${
                            metric.includes('LEAD CALDO') ? 'bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 font-bold px-2 py-1 rounded-md' :
                            metric.includes('88/100') ? 'text-emerald-400 font-semibold' : 'text-zinc-300'
                          }`}>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 4 && (
                    <div className="space-y-4 font-sans max-w-md mx-auto w-full text-xs">
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center space-x-2 text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="font-bold uppercase tracking-wider text-[10px]">{steps[4].mockupContent.slotLabel}</span>
                        </div>
                        <h4 className="text-white font-bold text-sm italic font-serif">
                          {steps[4].mockupContent.event}
                        </h4>
                        <p className="text-zinc-200 mt-1">
                          🗓️ <b>Orario Confermato:</b> {steps[4].mockupContent.time}
                        </p>
                        <p className="text-[10px] text-zinc-400 leading-relaxed italic">
                          {steps[4].mockupContent.notif}
                        </p>
                      </div>

                      <div className="text-center py-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8B7E66] font-bold">
                          🎉 Ciclo di Conversione Completato in Remoto!
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Foot detailed insights explanation */}
                <div className="pt-4 border-t border-white/10 text-left space-y-1">
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#8B7E66]">Funzionamento Interno</span>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">
                    {steps[activeStep].detailedDesc}
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MODELLATORE DI CONVERSIONI: SIMULA I TUOI RICAVI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
            Strumento Interattivo di Proiezione
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-bold text-[#1A1A1A]">
            Modellatore di Conversioni
          </h2>
          <p className="text-zinc-650 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Regola i cursori di conversione per analizzare quanti contatti e quanti appuntamenti commerciali puoi generare partendo dal tuo attuale seguito social mensile.
          </p>
        </div>

        {/* Double-Panel Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Slider Panel (Left) */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            
            <div className="space-y-1 pb-4 border-b border-[#1A1A1A]/10">
              <span className="font-serif italic font-bold text-[#1A1A1A] text-lg block">Parametri di Traffico & Tassi</span>
              <p className="text-xs text-zinc-500 font-light">Esegui test regolando i traguardi per ciascun livello.</p>
            </div>

            {/* Sliders Container */}
            <div className="space-y-6 flex-grow">
              
              {/* Reach Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider font-mono">
                    Social Reach Mensile
                  </span>
                  <span className="font-serif font-bold italic text-base text-[#8B7E66]">
                    {reach.toLocaleString()} <span className="text-[10px] font-mono font-normal not-italic text-zinc-400">views</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={reach}
                  onChange={(e) => setReach(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#8B7E66]"
                />
                <span className="text-[9px] text-zinc-450 block font-light">Visualizzazioni uniche complessive stimate prodotte da post e reel correlati.</span>
              </div>

              {/* Keyword Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider font-mono">
                    Tasso Parola Chiave (% commenti)
                  </span>
                  <span className="font-serif font-bold italic text-base text-[#8B7E66]">
                    {keywordRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10.0"
                  step="0.1"
                  value={keywordRate}
                  onChange={(e) => setKeywordRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#8B7E66]"
                />
                <span className="text-[9px] text-zinc-450 block font-light">Percentuale di spettatori che commentano il post con la parola chiave attivando la chat.</span>
              </div>

              {/* Form Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider font-mono">
                    Tasso Sottomissione Form
                  </span>
                  <span className="font-serif font-bold italic text-base text-[#8B7E66]">
                    {formRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={formRate}
                  onChange={(e) => setFormRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#8B7E66]"
                />
                <span className="text-[9px] text-zinc-450 block font-light">Percentuale di utenti in chat che compilano il questionario di pre-qualificazione.</span>
              </div>

              {/* Booking Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider font-mono">
                    Tasso Prenotazione Chiamata
                  </span>
                  <span className="font-serif font-bold italic text-base text-[#8B7E66]">
                    {bookingRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={bookingRate}
                  onChange={(e) => setBookingRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#8B7E66]"
                />
                <span className="text-[9px] text-zinc-450 block font-light">Percentuale di lead qualificati che prenota autonomamente un appuntamento telefonico.</span>
              </div>

              {/* Ticket size helper input */}
              <div className="pt-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="dealValueInput" className="text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-500">
                    Valore Medio Singolo Cliente (Ticket €)
                  </label>
                  <span className="font-mono text-xs text-[#8B7E66] font-bold">€ {dealValue.toLocaleString()}</span>
                </div>
                <input
                  id="dealValueInput"
                  type="number"
                  min="100"
                  max="100000"
                  step="100"
                  value={dealValue}
                  onChange={(e) => setDealValue(Math.max(100, Number(e.target.value)))}
                  className="w-full bg-white border border-[#1A1A1A]/10 rounded-lg px-4 py-2 mt-1.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#8B7E66]"
                />
              </div>

            </div>

          </div>

          {/* Core Visual Funnel / Graph Performance Panel (Right) */}
          <div className="lg:col-span-6 bg-[#1A1A1A] text-[#FAF8F5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B7E66]/10 rounded-full blur-3xl -z-5" />
            
            <div className="pb-4 border-b border-white/10 flex justify-between items-center">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8B7E66] block">Proiezione ad Automazione Attiva</span>
                <span className="font-serif italic font-bold text-lg text-white">I Risultati della Tua Macchina</span>
              </div>
              <Calculator className="w-5 h-5 text-[#8B7E66]" />
            </div>

            {/* Simulated Dynamic Funnel Graph Visualizer */}
            <div className="py-6 space-y-4">
              
              {/* Step 1: Reach bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>1. Reach Social Totale</span>
                  <span className="text-white font-bold">{reach.toLocaleString()} visualizzazioni</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div className="bg-zinc-650 h-full transition-all duration-300" style={{ width: '100%' }} />
                </div>
              </div>

              {/* Step 2: Key Trigger bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>2. Commenti ('INFO') Innescati</span>
                  <span className="text-[#8B7E66] font-bold">{triggersCount} interazioni (DM)</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full transition-all duration-300" 
                    style={{ width: `${Math.max(5, Math.min(100, (triggersCount / reach) * 500))}%` }} 
                  />
                </div>
              </div>

              {/* Step 3: Qualified leads bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>3. Moduli Compilati (Lead Qualificati)</span>
                  <span className="text-emerald-400 font-bold">{qualifiedLeadsCount} email registrate</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300" 
                    style={{ width: `${Math.max(3, Math.min(100, (qualifiedLeadsCount / reach) * 1500))}%` }} 
                  />
                </div>
              </div>

              {/* Step 4: Booked appointments bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>4. Telefonate Strategiche Prenotate</span>
                  <span className="text-indigo-400 font-bold">{appointmentsCount} appuntamenti</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-indigo-500 h-full transition-all duration-300" 
                    style={{ width: `${Math.max(2, Math.min(100, (appointmentsCount / reach) * 5000))}%` }} 
                  />
                </div>
              </div>

            </div>

            {/* Calculations summaries Box */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-left flex flex-col justify-between">
                <span className="text-[9px] uppercase font-mono text-zinc-400 leading-none">Bookings Mensili</span>
                <span className="font-serif italic font-bold text-xl sm:text-2xl text-[#FAF8F5] block mt-1">
                  {appointmentsCount}
                </span>
                <span className="text-[8px] text-zinc-500 font-mono mt-0.5">Call commerciali stimate</span>
              </div>

              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-left flex flex-col justify-between">
                <span className="text-[9px] uppercase font-mono text-zinc-400 leading-none">Valore Pipeline</span>
                <span className="font-serif italic font-bold text-xl sm:text-2xl text-[#8B7E66] block mt-1">
                  €{totalValueEstimated.toLocaleString()}
                </span>
                <span className="text-[8px] text-zinc-500 font-mono mt-0.5">Valore mensile potenziale</span>
              </div>

              <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-left flex flex-col justify-between col-span-2 md:col-span-1">
                <span className="text-[9px] uppercase font-mono text-zinc-400 leading-none">Ore Liberate</span>
                <span className="font-serif italic font-bold text-xl sm:text-2xl text-emerald-400 block mt-1">
                  +{estimatedHoursSaved}h
                </span>
                <span className="text-[8px] text-zinc-500 font-mono mt-0.5">Lavoro manuale risparmiato</span>
              </div>

            </div>

            {/* Performance highlight notice */}
            <div className="mt-4 p-3.5 bg-[#8B7E66]/10 border border-[#8B7E66]/20 rounded-xl text-left text-xs text-[#FAF8F5]/85 font-light leading-relaxed flex items-center space-x-3.5">
              <TrendingUp className="w-5 h-5 text-[#8B7E66] shrink-0" />
              <span>
                <b>Potenziale di Conversione Social:</b> Automatizzare i messaggi diretti riduce il tasso di abbandono nel percorso di prenotazione fino al <b>300%</b> rispetto ai tradizionali link in bio.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMPARISON - AUTOMAZIONE VS MANUALE */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#1A1A1A]/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3 max-w-2xl mx-auto text-center">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">Analisi Comparativa</span>
            <h2 className="font-serif text-3xl sm:text-4xl italic font-bold text-[#1A1A1A]">La Differenza è nel Tempo sprecato</h2>
            <p className="text-[#1A1A1A]/70 text-sm font-light">
              Metti a confronto il costo amministrativo del lavoro manuale quotidiano rispetto alla stabilità silenziosa della nostra pipeline integrata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            {/* Manual block */}
            <div className="bg-white border border-[#1A1A1A]/10 p-8 rounded-3xl space-y-6">
              <div className="flex items-center space-x-3 text-red-600">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">Gestione Manuale (Tradizionale)</span>
              </div>
              <h3 className="font-serif italic font-bold text-xl text-[#1A1A1A]">Caos Conversazioni & Abbandoni</h3>
              
              <ul className="space-y-4 font-sans text-xs sm:text-sm text-zinc-650 font-light">
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Devi copiare e incollare manualmente i link a ciascun utente che commenta sotto i post. Era dopo era.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Il DM arriva con ore di ritardo: l'interesse caldo dell'utente è svanito completamente nel rumore dei social.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-550 font-bold shrink-0">✕</span>
                  <span>I dati non sono strutturati: devi scrivere tu l'email sul CRM di lavoro e sperare di ricordarti di seguirlo.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-red-550 font-bold shrink-0">✕</span>
                  <span>Scambi di email continui per allineare l'agenda telefonica. Ore sprecate prima ancora della telefonata.</span>
                </li>
              </ul>
            </div>

            {/* Automated block */}
            <div className="bg-white border-2 border-[#8B7E66] p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#8B7E66] text-[#FAF8F5] text-[8px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-bl-xl">
                Consigliato
              </div>
              
              <div className="flex items-center space-x-3 text-emerald-600">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">La Macchina Automatica</span>
              </div>
              <h3 className="font-serif italic font-bold text-xl text-[#1A1A1A]">Flusso Immediato & Convertito</h3>
              
              <ul className="space-y-4 font-sans text-xs sm:text-sm text-zinc-650 font-light">
                <li className="flex items-start space-x-2.5">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Istanze web automatiche sbloccano i DM in millisecondi: l'utente riceve immediatamente ciò che desidera.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Nessuna dispersione: l'utente compila spontaneamente il light-form qualificante direttamente nel flusso.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>L'algoritmo sincronizza il lead ed inserisce i dati e le note necessarie sul CRM taggando la priorità.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>L'utente prenota lo slot libero in autonomia. Apri l'agenda la mattina e trovi le call già programmate!</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-[#1A1A1A] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7E66]/10 rounded-full blur-3xl -z-5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
            Automazione senza confini
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl italic font-bold tracking-tight text-[#FAF8F5] leading-tight">
            Pronto a trasformare i social <br />in un motore di cassa continuo?
          </h2>
          <p className="text-[#FAF8F5]/75 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Elimina le fatiche manuali e non perdere mai più un contatto caldo interessato alla tua offerta commerciale. Parliamone in videochiamata gratuita.
          </p>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                setCurrentPage('contatti');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#8B7E66] hover:bg-[#5F5542] text-[#F5F2ED] font-bold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 shadow-md cursor-pointer"
            >
              Richiedi la tua Macchina
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
