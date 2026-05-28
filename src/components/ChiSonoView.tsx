import React from 'react';
import { 
  ArrowRight, Award, Zap, Heart, CheckCircle2, ShieldCheck, 
  Sparkles, Coffee, BookOpen, Clock, RefreshCcw, Smile 
} from 'lucide-react';
import { Page } from '../types';

interface ChiSonoViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function ChiSonoView({ setCurrentPage }: ChiSonoViewProps) {
  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] overflow-hidden">
      
      {/* 1. HERO BIO SECTION */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1 - Text Description */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-[#8B7E66]/10 border border-[#8B7E66]/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#8B7E66]" />
              <span className="text-[10px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.2em]">
                La Mia Filosofia
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
              La mia storia accademica e la mia passione <span className="not-italic font-sans font-black text-[#8B7E66]">informatica</span>.
            </h1>

            <blockquote className="border-l-4 border-[#8B7E66] pl-4 py-1 italic text-[#1A1A1A]/70 text-lg leading-relaxed font-light font-serif">
              "Non creo decorazioni, realizzo motori di conversione."
            </blockquote>

            <div className="space-y-4 text-[#1A1A1A]/75 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Sono <strong className="font-bold text-[#1A1A1A]">diplomata in grafica pubblicitaria</strong> e <strong className="font-bold text-[#1A1A1A]">laureata in Comunicazione Visiva Multimediale</strong>. Il mio percorso professionale nasce sotto il segno della precisione tipografica, della teoria del colore, e del rigore compositivo tipico del design accademico italiano.
              </p>
              <p>
                Tuttavia, fin dai primi progetti, ho capito che una magnifica veste estetica è inconcludente senza una tecnologia performante che la sostenga. Questo mi ha spinto a <strong className="font-bold text-[#1A1A1A]">immergermi con dedizione nello sviluppo software</strong> e nell’amministrazione di sistemi integrati.
              </p>
              <p>
                Oggi trasformo questa sinergia in strumenti concreti ed eleganti, lavorando con un unico dogma: ogni scelta visiva, funzionale o tecnologica deve essere supportata da una solida motivazione strategica.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1A1A1A]/10">
              <div className="space-y-2">
                <span className="font-serif italic font-bold text-[#1A1A1A] text-lg flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66]" />
                  <span>Logica Rigorosa</span>
                </span>
                <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">Analisi dei flussi e del codice sviluppato su misura.</p>
              </div>
              <div className="space-y-2">
                <span className="font-serif italic font-bold text-[#1A1A1A] text-lg flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66]" />
                  <span>Empatia Estetica</span>
                </span>
                <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">Prodotti digitali accoglienti e facili da navigare.</p>
              </div>
              <div className="space-y-2">
                <span className="font-serif italic font-bold text-[#1A1A1A] text-lg flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7E66]" />
                  <span>Focus sul Tempo</span>
                </span>
                <p className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed">Eliminazione assoluta del lavoro manuale frustrante.</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Styled Portrait Placeholder / Graphic badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#1A1A1A]/10 shadow-md relative w-full max-w-sm">
              <div className="aspect-[4/5] rounded-2xl bg-white overflow-hidden relative flex flex-col justify-between p-6 border border-[#1A1A1A]/5">
                
                {/* Visual canvas grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                {/* Card tag */}
                <span className="z-10 font-mono text-[9px] uppercase tracking-widest bg-[#1A1A1A] text-[#FAF8F5] py-2 px-3.5 rounded-full self-start">
                  Senior Developer & Automator
                </span>

                {/* Styled profile sketch / design placeholder */}
                <div className="my-auto text-center space-y-4 z-10">
                  <div className="w-24 h-24 rounded-full bg-[#8B7E66]/10 border-2 border-[#8B7E66]/20 mx-auto flex items-center justify-center text-[#8B7E66] animate-pulse">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif italic font-bold text-2xl text-[#1A1A1A] block">Maria Teresa Rogani</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold">Fondatrice di FacilissimoWeb</span>
                  </div>
                </div>

                {/* Foot indicators */}
                <div className="z-10 bg-[#1A1A1A] text-[#F5F2ED] rounded-xl p-3.5 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider">
                  <span>DISPONIBILITÀ: LIVE</span>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PARTNER STRATEGICA, NON SOLO FORNITRICE */}
      <section className="py-24 bg-[#FAF8F5] border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context Header and copy */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">Approccio Boutique</span>
              <h2 className="font-serif text-3xl sm:text-4xl italic font-bold tracking-tight text-[#1A1A1A] leading-tight">
                Partner Strategica, non solo fornitrice
              </h2>
              <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
                Chi lavora con me non acquista un banale prodotto inscatolato. Costruiamo una collaborazione solida indirizzata al risparmio reale di tempo e all'incremento del fatturato.
              </p>
            </div>

            {/* Concrete Value Propositions Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-2xl space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66]">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Qualità Certificata</h4>
                <p className="text-[#1A1A1A]/70 text-xs font-light leading-relaxed">
                  Ogni frammento di codice, pixel posizionato e parola scritta ha uno scopo preciso: convertire il visitatore in lead profilato e soddisfare l'utente.
                </p>
              </div>

              <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-2xl space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66]">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Efficienza AI</h4>
                <p className="text-[#1A1A1A]/70 text-xs font-light leading-relaxed">
                  Utilizziamo l'Intelligenza Artificiale Generativa per abbreviare i tempi di sviluppo ed accelerare i processi, salvando ditte e micro-imprese da noiosi compiti manuali.
                </p>
              </div>

              <div className="bg-white border border-[#1A1A1A]/10 p-6 rounded-2xl space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#8B7E66]/10 flex items-center justify-center text-[#8B7E66]">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Design Boutique</h4>
                <p className="text-[#1A1A1A]/70 text-xs font-light leading-relaxed">
                  Nessun template prefabbricato svogliato o duplicati. Riceverai un'opera modellata attentamente sulla base della personalità ed i bisogni specifici del tuo brand.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENTO GRID - METODOLOGIA RIGOROSA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">Organizzazione Logica</span>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-bold text-[#1A1A1A]">Il Nostro Metodo di Lavoro</h2>
          <p className="text-[#1A1A1A]/70 text-sm font-light max-w-lg mx-auto">
            Procediamo per tappe chiare, senza spazi per equivoci o ritardi imprevisti. La nostra trasparenza tecnica è assoluta.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left max-w-5xl mx-auto">
          
          {/* Card 1: Metodologia Rigorosa (Size: Medium-large - col span 7) */}
          <div className="md:col-span-7 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 font-mono text-[9px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#8B7E66]" />
                <span>Roadmap Chiara</span>
              </div>
              <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">Metodologia Rigorosa</h3>
              <p className="text-[#1A1A1A]/75 text-sm font-light leading-relaxed">
                Analizziamo minuziosamente i colli di bottiglia e i punti critici prima di avviare lo sviluppo. Stabiliamo una roadmap chiarissima affinché tu sappia in ogni istante cosa stiamo integrando e perché.
              </p>
            </div>
            {/* Visual preview list inside card */}
            <div className="bg-white border border-[#1A1A1A]/10 p-5 rounded-xl space-y-3 text-xs text-[#1A1A1A]/85 font-mono">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B7E66] shrink-0" />
                <span>Analisi preliminare dei colli di bottiglia amministrativi</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B7E66] shrink-0" />
                <span>Definizione esatta dello schema logico (Zapier / Make)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8B7E66] shrink-0" />
                <span>Sviluppo reattivo e testing su scenari reali</span>
              </div>
            </div>
          </div>

          {/* Card 2: Automazione Etica (Size: Medium - col span 5) */}
          <div className="md:col-span-5 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 font-mono text-[9px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#8B7E66]" />
                <span>Keep human touch</span>
              </div>
              <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">Automazione Etica</h3>
              <p className="text-[#1A1A1A]/75 text-sm font-light leading-relaxed">
                Meno fatiche ripetitive significa più spazio per il contatto empatico reale con i clienti. Rimuoviamo il rumore amministrativo di fondo.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#8B7E66] font-bold uppercase tracking-[0.15em] font-mono">
              <Smile className="w-4 h-4" />
              <span>Nessun Bot Spazzatura</span>
            </div>
          </div>

          {/* Card 3: +Tempo, -Stress (Size: Medium - col span 5) */}
          <div className="md:col-span-5 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 font-mono text-[9px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#8B7E66]" />
                <span>Focus sul Risultato</span>
              </div>
              <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">+ Tempo, - Stress</h3>
              <p className="text-[#1A1A1A]/75 text-sm font-light leading-relaxed">
                Recupera fino all'80% del tempo sprecato in attività di segreteria e immissione dati. I form, le conferme e i CRM lavorano compatti e compiono le azioni istantaneamente.
              </p>
            </div>
            <span className="text-3xl font-serif italic font-bold text-[#1A1A1A]">-15h <span className="text-xs font-mono font-medium text-zinc-400 not-italic lowercase tracking-wider">mensili stimate</span></span>
          </div>

          {/* Card 4: Collaborazione Continua (Size: Medium-large - col span 7) */}
          <div className="md:col-span-7 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 font-mono text-[9px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
                <RefreshCcw className="w-3.5 h-3.5 text-[#8B7E66]" />
                <span>Nessun mistero tecnico</span>
              </div>
              <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">Collaborazione Continua</h3>
              <p className="text-[#1A1A1A]/75 text-sm font-light leading-relaxed">
                Lavoriamo in completa sintonia tramite canali dedicati. Aggiornamenti regolari e trasparenza totale sui progressi, perché tu sia padrone consenziente della tua infrastruttura logica.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]/80 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Sincronizzazione Slack, Trello, Email</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-[#1A1A1A] py-20 my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7E66]/10 rounded-full blur-3xl -z-5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
            Crea la tua Strategia
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl italic font-bold tracking-tight text-[#FAF8F5] leading-tight">
            Sei stanco di investire tempo e raccogliere zero contatti?
          </h2>
          <p className="text-[#FAF8F5]/75 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Pianifichiamo insieme il setup perfetto per il tuo modello di business, eliminando le perdite di tempo una volta per tutte.
          </p>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                setCurrentPage('contatti');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#8B7E66] hover:bg-[#5F5542] text-[#F5F2ED] font-bold text-xs uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 shadow-md cursor-pointer"
            >
              Inizia Ora con una Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
