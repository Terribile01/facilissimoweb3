import React, { useState } from 'react';
import { 
  Search, BookOpen, Clock, ArrowRight, X, ArrowLeft, 
  MapPin, User, Calendar, BookOpenCheck, ArrowUpRight, CheckCircle2,
  Share2, Linkedin, Facebook, Link, Mail
} from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function JournalView() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'automazione' | 'strategia' | 'academy'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: { label: string; value: typeof selectedCategory }[] = [
    { label: 'Tutti gli Articoli', value: 'all' },
    { label: 'Design & Code', value: 'design' },
    { label: 'Automazione', value: 'automazione' },
    { label: 'Strategie', value: 'strategia' },
    { label: 'Academy & Prompt', value: 'academy' }
  ];

  return (
    <div className="font-sans text-[#1A1A1A] bg-[#F5F2ED] min-h-screen pb-16">
      
      {/* 1. JOURNAL HEADER (only if reading no article) */}
      {!activeArticle ? (
        <>
          <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#8B7E66] uppercase tracking-[0.25em] block">
              Studio & Insights
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl italic font-bold text-[#1A1A1A] leading-tight">
              Insight, Strategia e <span className="not-italic font-sans font-black text-[#8B7E66]">Automazione</span>.
            </h1>
            <p className="text-[#1A1A1A]/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Condividiamo analisi pragmatiche su come automatizzare compiti ricorrenti, ottimizzare WordPress e applicare l'AI nel micro-business quotidiano.
            </p>
          </section>

          {/* Search & Filter section */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8 border-b border-[#1A1A1A]/10 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-none text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-200 border cursor-pointer ${
                      selectedCategory === cat.value
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-[#FAF8F5]'
                        : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#8B7E66] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cerca articoli..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#1A1A1A]/10 rounded-none pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] placeholder-zinc-450 focus:outline-none focus:border-[#8B7E66] shadow-3xs"
                  aria-label="Search articles"
                />
              </div>
            </div>
          </section>

          {/* 2. ARTICLES GRID */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-[#FAF8F5] rounded-3xl border border-[#1A1A1A]/10 overflow-hidden shadow-3xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] uppercase font-mono tracking-widest bg-[#8B7E66]/10 border border-[#8B7E66]/20 text-[#8B7E66] px-2.5 py-1 rounded-md font-bold">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1 text-zinc-400 font-mono text-[10px]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-left">
                        <h3 className="font-serif italic font-bold text-xl text-[#1A1A1A] leading-snug line-clamp-2 hover:text-[#8B7E66] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#1A1A1A]/70 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-5 border-t border-[#1A1A1A]/10 bg-white/40 flex justify-between items-center sm:px-8">
                      <span className="text-[10px] text-zinc-400 font-mono">{post.date}</span>
                      <button
                        onClick={() => {
                          setActiveArticle(post);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="group flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#8B7E66] transition-colors cursor-pointer"
                      >
                        <span>Leggi Articolo</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center space-y-4">
                <BookOpen className="w-12 h-12 text-zinc-300 mx-auto" />
                <h3 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Nessun articolo trovato</h3>
                <p className="text-zinc-500 text-sm max-w-sm mx-auto font-light">
                  Prova ad esaminare altre categorie di ricerca o correggi le parole immesse.
                </p>
              </div>
            )}
          </section>
        </>
      ) : (
        /* 4. IMMERSIVE ARTICLE VIEWER */
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 animate-fadeIn pb-24">
          
          {/* Back button */}
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center space-x-2 text-[#1A1A1A]/70 hover:text-[#8B7E66] font-semibold text-xs uppercase tracking-widest mb-10 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Torna al Journal</span>
          </button>

          {/* Post Header Metadata */}
          <div className="space-y-6 text-left pb-8 border-b border-[#1A1A1A]/10">
            <div className="flex items-center space-x-3">
              <span className="text-[9px] uppercase font-mono tracking-widest bg-[#8B7E66]/10 border border-[#8B7E66]/20 text-[#8B7E66] px-3 py-1 rounded-full font-bold">
                {activeArticle.category}
              </span>
              <div className="flex items-center space-x-1 text-zinc-400 font-mono text-[10px]">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeArticle.readTime} di lettura</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl italic font-bold text-[#1A1A1A] leading-tight">
              {activeArticle.title}
            </h1>

             <div className="flex items-center space-x-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#8B7E66]/15 border border-[#8B7E66]/20 flex items-center justify-center font-serif italic text-[#1A1A1A] font-bold text-sm">
                MTR
              </div>
              <div className="flex flex-col text-xs text-left">
                <span className="font-bold text-[#1A1A1A]">Scritto da Maria Teresa Rogani</span>
                <span className="text-zinc-400 font-mono mt-0.5">{activeArticle.date}</span>
              </div>
            </div>

            {/* Sharing buttons bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-[#1A1A1A]/10 mt-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B7E66] font-bold flex items-center mr-1">
                <Share2 className="w-3.5 h-3.5 mr-1.5" /> Condividi:
              </span>
              <div className="flex items-center gap-2">
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] hover:bg-[#8B7E66]/5 flex items-center justify-center text-zinc-650 hover:text-[#8B7E66] transition-all duration-200"
                  title="Condividi su LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(activeArticle.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] hover:bg-[#8B7E66]/5 flex items-center justify-center text-zinc-650 hover:text-[#8B7E66] transition-all duration-200"
                  title="Condividi su Twitter / X"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] hover:bg-[#8B7E66]/5 flex items-center justify-center text-zinc-650 hover:text-[#8B7E66] transition-all duration-200"
                  title="Condividi su Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(activeArticle.title + ' ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] hover:bg-[#8B7E66]/5 flex items-center justify-center text-zinc-650 hover:text-[#8B7E66] transition-all duration-200"
                  title="Invia su WhatsApp"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.452 4.715 1.453 5.4 0 9.795-4.378 9.798-9.76.002-2.606-1.01-5.059-2.853-6.905C16.408 2.093 13.97 1.08 11.998 1.08c-5.402 0-9.802 4.381-9.802 9.76 0 1.905.5 3.754 1.45 5.394l-.95 3.473 3.56-.933zm11.755-4.73c-.27-.134-1.59-.783-1.838-.872-.248-.09-.427-.134-.607.134-.18.271-.697.872-.855 1.053-.157.18-.315.203-.584.068-1.543-.77-2.658-1.432-3.553-2.964-.236-.405-.236-.679-.068-.946.12-.178.27-.315.4-.472.046-.056.09-.112.135-.168.09-.12.134-.203.203-.338.07-.135.034-.248-.016-.349-.05-.101-.427-1.03-.585-1.41-.153-.374-.325-.323-.427-.323h-.36C8.89 4.31 8.526 4.45 8.21 4.793c-.315.343-1.203 1.173-1.203 2.861 0 1.688 1.225 3.32 1.395 3.545.168.225 2.41 3.682 5.833 5.158.813.352 1.448.562 1.944.72.817.26 1.562.223 2.15.134.656-.098 1.59-.65 1.816-1.248.226-.597.226-1.11.157-1.217-.067-.105-.248-.168-.518-.302z"></path>
                  </svg>
                </a>
                <a 
                  href={`mailto:?subject=${encodeURIComponent(activeArticle.title)}&body=${encodeURIComponent(window.location.href)}`}
                  className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] hover:bg-[#8B7E66]/5 flex items-center justify-center text-zinc-650 hover:text-[#8B7E66] transition-all duration-200"
                  title="Invia per Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="h-8 px-3.5 rounded-full bg-white border border-[#1A1A1A]/10 hover:border-[#8B7E66] hover:bg-[#8B7E66]/5 flex items-center justify-center text-zinc-650 hover:text-[#8B7E66] transition-all duration-205 space-x-1.5"
                  title="Copia Link"
                >
                  <Link className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-wider font-bold">
                    {copied ? 'Copiato!' : 'Copia link'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Post Body (Clean Editorial Styling) */}
          <div className="py-10 text-left text-zinc-800 text-sm sm:text-base leading-relaxed font-light space-y-6">
            {activeArticle.content.split('\n\n').map((block, idx) => {
              const text = block.trim();
              if (!text) return null;

              if (text.startsWith('# ')) {
                // Header 1
                return (
                  <h2 key={idx} className="font-serif italic font-bold text-2xl sm:text-3xl text-[#1A1A1A] pt-6 pb-2 border-b border-[#1A1A1A]/5">
                    {text.replace('# ', '')}
                  </h2>
                );
              }
              if (text.startsWith('## ')) {
                // Header 2
                return (
                  <h3 key={idx} className="font-serif italic font-bold text-xl text-[#1A1A1A] pt-5 pb-1">
                    {text.replace('## ', '')}
                  </h3>
                );
              }
              if (text.startsWith('> ')) {
                // Quote block
                return (
                  <blockquote key={idx} className="border-l-4 border-[#8B7E66] bg-[#8B7E66]/5 px-5 py-4 italic rounded-r-2xl text-[#1A1A1A] my-4 text-xs sm:text-sm font-serif">
                    {text.replace('> ', '').replace(/"/g, '')}
                  </blockquote>
                );
              }
              if (text.startsWith('- ')) {
                // List
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 my-3 text-zinc-650 text-xs sm:text-sm">
                    {text.split('\n').map((item, i) => (
                      <li key={i} className="text-[#1A1A1A]/75">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }

              // Normal paragraph with bold highlights support
              return (
                <p key={idx} className="font-sans font-light text-[#1A1A1A]/80 leading-relaxed text-xs sm:text-sm">
                  {text.split('**').map((chunk, cIdx) => {
                    if (cIdx % 2 === 1) {
                      return <strong key={cIdx} className="font-bold text-[#1A1A1A]">{chunk}</strong>;
                    }
                    return chunk;
                  })}
                </p>
              );
            })}
          </div>

          {/* Article Footer CTA */}
          <div className="mt-12 p-8 bg-[#FAF8F5] border border-[#1A1A1A]/10 rounded-3xl text-left flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
            <div className="space-y-1">
              <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A]">Ti è piaciuto questo articolo?</h4>
              <p className="text-[#1A1A1A]/60 text-xs font-light">Contattami per ideare la soluzione esatta per il tuo workflow.</p>
            </div>
            <button
              onClick={() => {
                setActiveArticle(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#1A1A1A] hover:bg-[#8B7E66] text-[#FAF8F5] rounded-none py-3.5 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
            >
              Torna al Journal
            </button>
          </div>

        </article>
      )}

    </div>
  );
}
