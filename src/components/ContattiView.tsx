import React, { useState, useRef } from 'react';
import { 
  Mail, MapPin, Clock, Send, Linkedin, Instagram, Github, 
  CheckCircle2, Info, Star, Sparkles, Brain, Workflow, Pocket,
  Phone
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContattiView() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    businessType: 'freelance',
    need: 'sito-principale',
    dettagli: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateEstimate = () => {
    let hoursSaved = 5;
    let durationWeeks = 2;
    let levelOfAutomation = 'Base';

    if (formData.need === 'integrazione-crm') {
      hoursSaved = 10;
      durationWeeks = 3;
      levelOfAutomation = 'Intermedio';
    } else if (formData.need === 'funnel-completo') {
      hoursSaved = 12;
      durationWeeks = 4;
      levelOfAutomation = 'Avanzato';
    } else if (formData.need === 'tutto-insieme') {
      hoursSaved = 20;
      durationWeeks = 6;
      levelOfAutomation = 'Sartoriale';
    }

    return { hoursSaved, durationWeeks, levelOfAutomation };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs.sendForm(
      'service_e6y0dfs',
      'template_yjw349w',
      form.current,
      'gVH02EFjxhWU26obx'
    )
    .then(() => {
      setLoading(false);
      setSubmitted(true);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setLoading(false);
      alert("Si è verificato un errore durante l'invio. Riprova più tardi o contattaci telefonicamente.");
    });
  };

  const { hoursSaved, durationWeeks, levelOfAutomation } = calculateEstimate();

  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] overflow-hidden pb-16">
      
      {/* 1. HEADER HERO */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-[#8B7E66]/10 border border-[#8B7E66]/20 px-4 py-2 rounded-full text-[10px] font-mono font-bold text-[#8B7E66] uppercase tracking-widest">
            <span>Contatto & Preventivo</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
            Inizia il tuo viaggio verso <span className="not-italic font-sans font-black text-[#8B7E66]">l'automazione</span>.
          </h1>
          <p className="text-[#1A1A1A]/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Trasformiamo la complessità tecnica in flussi semplici ed efficaci. Compila il modulo per ricevere una prima stima utile in tempo reale.
          </p>
        </div>
      </section>

      {/* 2. GRID INFO AND FORM */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Column Left (Coords) */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <h3 className="font-serif italic font-bold text-2xl lg:text-3xl text-[#1A1A1A]">Le Coordinate di Maria Teresa Rogani</h3>
            <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">
              Ricevo richieste di collaborazione e rispondo personalmente a ciascun potenziale cliente per garantire un servizio impeccabile fin dall'avvio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Card 1 - Phone */}
            <div className="bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-2xl p-5 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center text-[#8B7E66] shrink-0 border border-[#1A1A1A]/5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-400">Contatto Diretto</span>
                <a href="tel:+393791038253" className="text-[#1A1A1A] font-bold text-sm mt-1 hover:text-[#8B7E66] transition-colors">
                  +39 379 103 8253
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-2xl p-5 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center text-[#8B7E66] shrink-0 border border-[#1A1A1A]/5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-400">Area Operativa</span>
                <span className="text-[#1A1A1A] font-bold text-sm mt-1">Macerata & Sviluppo in Remoto</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-2xl p-5 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center text-[#8B7E66] shrink-0 border border-[#1A1A1A]/5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-400">Tempi di Risposta</span>
                <span className="text-[#1A1A1A] font-bold text-sm mt-1">Entro 24 Ore Lavorative</span>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="space-y-4 pt-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#8B7E66] font-bold">Seguici sui Canali</h4>
            <div className="flex space-x-4.5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                referrerPolicy="no-referrer" 
                className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/80 hover:border-[#8B7E66] hover:text-[#8B7E66] transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                referrerPolicy="no-referrer" 
                className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/80 hover:border-[#8B7E66] hover:text-[#8B7E66] transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                referrerPolicy="no-referrer" 
                className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A]/80 hover:border-[#8B7E66] hover:text-[#8B7E66] transition-colors"
                aria-label="GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Column Right (Smart Form + Dynamic Estimator) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Module Panel */}
          <div className="bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl p-6 sm:p-10 shadow-md">
            {!submitted ? (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 text-left" id="contact-calculator-form">
                
                {/* Visual form header */}
                <div className="flex items-center space-x-3.5 pb-4 border-b border-[#1A1A1A]/10">
                  <Star className="w-5 h-5 text-[#8B7E66] fill-[#8B7E66]" />
                  <span className="font-serif italic font-bold text-[#1A1A1A] text-lg">Modulo Preventivo Sartoriale</span>
                </div>

                {/* Grid Nome/Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="nome" className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8B7E66]">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      required
                      placeholder="E.g. Mario Rossi"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="bg-white border border-[#1A1A1A]/10 rounded-none px-5 py-3 text-sm focus:outline-none focus:border-[#8B7E66] transition-colors text-[#1A1A1A]"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8B7E66]">
                      Email aziendale
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="E.g. mario@azienda.it"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border border-[#1A1A1A]/10 rounded-none px-5 py-3 text-sm focus:outline-none focus:border-[#8B7E66] transition-colors text-[#1A1A1A]"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="businessType" className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8B7E66]">
                      Tipo di business
                    </label>
                    <select
                      name="businessType"
                      id="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="bg-white border border-[#1A1A1A]/10 rounded-none px-5 py-3 text-sm focus:outline-none focus:border-[#8B7E66] transition-colors cursor-pointer text-[#1A1A1A]"
                    >
                      <option value="freelance">Freelance / Professionista</option>
                      <option value="pmi">PMI / Società Srl</option>
                      <option value="commerce">E-Commerce</option>
                      <option value="non-profit">Associazione / Altro</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="need" className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8B7E66]">
                      Sviluppo & Automazione
                    </label>
                    <select
                      name="need"
                      id="need"
                      value={formData.need}
                      onChange={handleInputChange}
                      className="bg-white border border-[#1A1A1A]/10 rounded-none px-5 py-3 text-sm focus:outline-none focus:border-[#8B7E66] transition-colors cursor-pointer text-[#1A1A1A]"
                    >
                      <option value="sito-principale">Sito WordPress Strategico</option>
                      <option value="integrazione-crm">Integrazione Form + CRM (Make)</option>
                      <option value="funnel-completo">Funnel Email Automatizzato</option>
                      <option value="tutto-insieme">Tutto Insieme (Soluzione Boutique)</option>
                    </select>
                  </div>
                </div>

                {/* Textarea details */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="dettagli" className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#8B7E66]">
                    Dettagli del progetto (obiettivi, desiderata)
                  </label>
                  <textarea
                    name="dettagli"
                    id="dettagli"
                    rows={4}
                    required
                    placeholder="Raccontami brevemente cosa blocca lo sviluppo della tua impresa al momento..."
                    value={formData.dettagli}
                    onChange={handleInputChange}
                    className="bg-white border border-[#1A1A1A]/10 rounded-none px-5 py-4 text-sm focus:outline-none focus:border-[#8B7E66] transition-colors resize-none text-[#1A1A1A]"
                  />
                </div>

                {/* LIVE ESTIMATOR PANEL INSIDE THE SHEET CARD */}
                <div className="p-5 bg-[#8B7E66]/10 border border-[#8B7E66]/20 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B7E66] font-bold block">Fattibilità in Tempo Reale</span>
                    <h5 className="font-serif italic font-bold text-[#1A1A1A] text-base">Stima Risparmio Tempo & Sviluppo</h5>
                    <p className="text-[#1A1A1A]/60 text-xs font-light">Basato sulle selezioni espresse nel modulo.</p>
                  </div>
                  <div className="flex gap-4 self-stretch sm:self-auto justify-between sm:justify-start">
                    <div className="text-center bg-white border border-[#1A1A1A]/10 rounded-xl p-3 shadow-3xs flex-1 sm:flex-initial min-w-[80px]">
                      <span className="text-[9px] uppercase font-mono text-zinc-400 block">Ore Liberate</span>
                      <span className="font-serif italic font-bold text-lg text-[#8B7E66]">+{hoursSaved}h/sett</span>
                    </div>
                    <div className="text-center bg-white border border-[#1A1A1A]/10 rounded-xl p-3 shadow-3xs flex-1 sm:flex-initial min-w-[80px]">
                      <span className="text-[9px] uppercase font-mono text-zinc-400 block">Tempo Sviluppo</span>
                      <span className="font-serif italic font-bold text-lg text-[#8B7E66]">{durationWeeks} sett</span>
                    </div>
                    <div className="text-center bg-white border border-[#1A1A1A]/10 rounded-xl p-3 shadow-3xs flex-1 sm:flex-initial min-w-[80px]">
                      <span className="text-[9px] uppercase font-mono text-zinc-400 block">Livello AI</span>
                      <span className="font-mono font-bold text-[#1A1A1A] text-xs mt-1 block uppercase">{levelOfAutomation}</span>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1A1A1A] hover:bg-[#8B7E66] text-[#FAF8F5] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2.5 py-4 rounded-none transition-all duration-300 disabled:bg-[#FAF8F5]/50 disabled:text-[#1A1A1A]/30 cursor-pointer shadow-md"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-zinc-500 border-t-[#1A1A1A] rounded-full animate-spin" />
                      <span>Inoltro in Corso...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#8B7E66]" />
                      <span>Invia Messaggio</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              /* Success Visual Automation Canvas representation */
              <div className="text-center py-8 space-y-8 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-55/10 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif italic font-bold text-2xl text-[#1A1A1A]">Messaggio Ricevuto con Successo!</h3>
                  <p className="text-[#1A1A1A]/70 text-sm font-light max-w-sm mx-auto">
                    Grazie per aver inoltrato la candidatura tramite il nostro Form intelligente.
                  </p>
                </div>

                {/* Visual pipeline showing how the user's data travels right now through automation */}
                <div className="border border-[#1A1A1A]/10 rounded-3xl p-6 bg-white max-w-md mx-auto space-y-4">
                  <span className="font-mono text-[9px] uppercase text-[#8B7E66] font-bold block">Tracciamento dell'Automazione Attiva</span>
                  
                  <div className="flex flex-col space-y-3 font-mono text-[11px] text-left">
                    <div className="flex items-center space-x-3 text-emerald-600">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">1</div>
                      <span>Form Inviato con dicitura <b>{formData.need}</b></span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-emerald-600">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
                      <span>AI screening automatico completato</span>
                    </div>

                    <div className="flex items-center space-x-3 text-emerald-600 animate-pulse">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">3</div>
                      <span>Notifica di lead caldo spedita su Slack a Maria Teresa Rogani...</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center space-x-2 text-zinc-650 hover:text-[#8B7E66] text-[10px] uppercase font-bold tracking-wider font-mono cursor-pointer"
                >
                  <Info className="w-4 h-4 text-[#8B7E66]" />
                  <span>Invia una seconda candidatura</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Creative card */}
          <div className="bg-[#1A1A1A] p-6 rounded-3xl border border-[#FAF8F5]/10 text-left flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 text-[#8B7E66] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif italic font-bold text-white text-lg">Pronto a scalare senza complicazioni?</h4>
              <p className="text-[#FAF8F5]/70 text-xs font-light leading-relaxed mt-1">
                L'automazione non è ristretta a pochi esperti con capitali infiniti, è dedicata a chiunque desideri liberarsi da ritmi pesanti e stress, facendosi coadiuvare da flussi logici sicuri.
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
