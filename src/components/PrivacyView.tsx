import React from 'react';
import { ShieldCheck, Eye, Lock, FileText, ChevronRight, Scale } from 'lucide-react';
import { Page } from '../types';

interface PrivacyViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function PrivacyView({ setCurrentPage }: PrivacyViewProps) {
  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left space-y-4">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-widest">
            GDPR & Compliance
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
          Privacy & <span className="not-italic font-sans font-black text-[#8B7E66]">Cookie Policy</span>.
        </h1>
        <p className="border-l-4 border-[#8B7E66] pl-4 py-1 italic text-[#1A1A1A]/70 text-base sm:text-lg leading-relaxed font-light font-serif max-w-2xl">
          "Trasparenza prima di tutto. Proteggiamo i tuoi dati nello stesso modo in cui desideriamo che vengano protetti i nostri: con cura, rigore e buon senso."
        </p>
        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
          Ultimo aggiornamento: 28 Maggio 2026
        </p>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="bg-white border border-[#1A1A1A]/10 rounded-3xl p-8 sm:p-12 space-y-10 shadow-xs">
          
          {/* Titolare del Trattamento */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] flex items-center space-x-2">
              <Scale className="w-5 h-5 text-[#8B7E66] shrink-0" />
              <span>1. Titolare del Trattamento Dei Dati</span>
            </h2>
            <div className="text-zinc-750 text-xs sm:text-sm font-light space-y-2 leading-relaxed">
              <p>
                Il titolare del trattamento dei dati raccolti tramite questa piattaforma web è:
              </p>
              <div className="bg-[#FAF8F5] border border-zinc-200 rounded-xl p-4 font-mono text-zinc-600 text-xs space-y-1">
                <p className="font-bold text-[#1A1A1A]">Maria Teresa Rogani • FacilissimoWeb</p>
                <p>Sede Amministrativa: <b>Macerata, Italia</b></p>
                <p>Email di contatto: <b>info@facilissimoweb.it</b></p>
                <p>Ambito Operativo: Sviluppo Web, Strategie di Automazioni & No-Code Consulting</p>
              </div>
            </div>
          </div>

          <hr className="border-zinc-150" />

          {/* Tipologia di Dati Raccolti */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] flex items-center space-x-2">
              <Eye className="w-5 h-5 text-[#8B7E66] shrink-0" />
              <span>2. Tipologia dei Dati Trattati</span>
            </h2>
            <p className="text-zinc-750 text-xs sm:text-sm font-light leading-relaxed">
              Trattiamo esclusivamente i dati strettamente necessari a fornirti i servizi richiesti o le risposte commerciali espresse. In particolare:
            </p>
            <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-zinc-750 font-light">
              <li>
                <b>Dati di contatto spontanei</b>: Nome, cognome, indirizzo email aziendale, recapito telefonico o link social inviati volontariamente tramite i nostri form di contatto o chatbot interattivi.
              </li>
              <li>
                <b>Dati dei moduli di calcolo / preventivatori</b>: Risposte espresse circa la tua tipologia di business, ore sprecate e tassi di conversione al fine esclusivo di elaborare e mostrare le simulazioni di pipeline in tempo reale.
              </li>
              <li>
                <b>Dati di navigazione anonimizzati</b>: Indirizzo IP, dati del browser o metriche di visita aggregate (pagine lette, permanenza) utilizzate esclusivamente in formula statistica o di sicurezza antispam.
              </li>
            </ul>
          </div>

          <hr className="border-zinc-150" />

          {/* Finalità del trattamento */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] flex items-center space-x-2">
              <Lock className="w-5 h-5 text-[#8B7E66] shrink-0" />
              <span>3. Finalità e Base Giuridica del Trattamento</span>
            </h2>
            <p className="text-zinc-750 text-xs sm:text-sm font-light leading-relaxed">
              Tutti i dati personali degli utenti vengono trattati su basi giuridiche solide e trasparenti quali:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-zinc-750 font-light">
              <li><b>Consenso dell'Interessato</b>: Per finalità di risposte e ricontatti commerciali formulati via form.</li>
              <li><b>Esecuzione di Misure Precontrattuali</b>: Per calcolare e strutturare preventivi e flussi di lavoro su misura del potenziale cliente.</li>
              <li><b>Legittimo Interesse del Titolare</b>: Per garantire la resilienza, l'integrità e la sicurezza tecnologica dello spazio web.</li>
            </ul>
          </div>

          <hr className="border-zinc-150" />

          {/* Cookie Policy */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#8B7E66] shrink-0" />
              <span>4. Informativa Estesa Sui Cookie</span>
            </h2>
            <p className="text-zinc-750 text-xs sm:text-sm font-light leading-relaxed">
              Questo sito web <b>non memorizza alcun cookie persistente o tracciamento d'archivio</b> a lungo termine sui tuoi dispositivi. Qualsiasi elemento tecnico di sessione viene rimosso definitivamente alla chiusura del browser e la finestra di consenso si ripresenta a ogni nuova visita o sessione utente per garantire trasparenza assoluta.
            </p>
            <div className="bg-[#FAF8F5] border border-zinc-150 rounded-none p-5 space-y-3">
              <span className="font-mono text-[9px] font-bold text-[#8B7E66] uppercase tracking-widest block">Stati e Cookie di Sessione Temporanei:</span>
              <ul className="space-y-2 text-xs text-zinc-650 font-light">
                <li className="flex justify-between">
                  <span><b>cookie_accepted_facilissimoweb</b> (Tecnico di sessione)</span>
                  <span className="text-zinc-400 font-mono text-[10px]">Persistenza: Solo sessione attiva</span>
                </li>
                <li className="flex justify-between border-t border-zinc-200/50 pt-2">
                  <span><b>Stati Virtualizzatori</b> (Interazione locale)</span>
                  <span className="text-zinc-400 font-mono text-[10px]">Persistenza: Svanisce alla chiusura</span>
                </li>
              </ul>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-light mt-2 pt-2 border-t border-zinc-200/50">
                La gestione non prevede l'uso di tracker pubblicitari di terze parti o pixel invasivi.
              </p>
            </div>
          </div>

          <hr className="border-zinc-150" />

          {/* Diritti degli interessati */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>5. I Tuoi Diritti (GDPR)</span>
            </h2>
            <p className="text-zinc-750 text-xs sm:text-sm font-light leading-relaxed">
              Ai sensi della regolamentazione europea GDPR, possiedi i seguenti diritti inalienabili:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-zinc-100 rounded-xl space-y-1">
                <h4 className="font-bold text-xs text-[#1A1A1A]">Diritto di Accesso & Rettifica</h4>
                <p className="text-[11px] text-zinc-500 font-light leading-relaxed">Puoi richiedere in qualsiasi momento copia dei dati registrati e la loro correzione.</p>
              </div>
              <div className="p-3 border border-zinc-100 rounded-xl space-y-1">
                <h4 className="font-bold text-xs text-[#1A1A1A]">Cancellazione (Oblio)</h4>
                <p className="text-[11px] text-zinc-500 font-light leading-relaxed">Puoi esigere la cancellazione totale e definitiva dei tuoi dati dai nostri registri d'invio.</p>
              </div>
            </div>
            <p className="text-zinc-500 text-xs font-light leading-relaxed pt-2">
              Per far valere uno qualsiasi dei tuoi diritti, invia semplicemente un'email libera a <a href="mailto:info@facilissimoweb.it" className="text-[#8B7E66] underline">info@facilissimoweb.it</a>, prenderemo in carico ed eseguiremo la richiesta entro 48 ore lavorative.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER ACTION */}
      <section className="py-16 text-center">
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#1A1A1A] hover:bg-[#8B7E66] text-white text-xs font-bold uppercase tracking-[0.2em] py-4.5 px-8 rounded-none transition-all duration-300 cursor-pointer shadow-md"
        >
          Torna all'Homepage
        </button>
      </section>

    </div>
  );
}
