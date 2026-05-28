import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Ciao! Sono l'assistente virtuale di FacilissimoWeb. Sono stata istruita da Maria Teresa Rogani per guidarti tra le opportunità dell'automazione e dello sviluppo web strategico. Come posso aiutarti oggi?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "🤖 Come funziona l'automazione?",
    "💻 Quale sito fa per me?",
    "📞 Come prenoto una consulenza?",
    "💰 Quanto costa un progetto?"
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Hide badge notification after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Prepare API chat payload
    const apiMessages = [
      ...messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text
      })),
      { role: 'user', content: text }
    ];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) {
        throw new Error('Servizio temporaneamente occupato');
      }

      const data = await response.json();
      
      const aiMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'ai',
        text: data.reply,
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, aiMsg]);
    } catch (e) {
      console.error(e);
      const errorMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'ai',
        text: "Scusami, ho riscontrato una leggera interruzione nella connessione. Puoi scriverci direttamente tramite il form di contatto per ricevere un aiuto immediato!",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Pulse notification badge */}
      {showNotification && !isOpen && (
        <div 
          onClick={() => { setIsOpen(true); setShowNotification(false); }}
          className="absolute bottom-18 right-2 bg-[#1A1A1A] text-[#FAF8F5] text-xs px-4 py-3 rounded-2xl shadow-xl border border-[#FAF8F5]/10 flex items-center space-x-2 animate-bounce cursor-pointer whitespace-nowrap"
          role="button"
          aria-label="Open chat assistant"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B7E66] fill-[#8B7E66] shrink-0" />
          <span>Chiedimi come liberare 15 ore!</span>
        </div>
      )}

      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        id="chat-toggle-widget"
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
          isOpen 
            ? 'bg-[#1A1A1A] text-white rotate-90 scale-100' 
            : 'bg-[#8B7E66] hover:bg-[#5F5542] text-white scale-100 hover:scale-105'
        }`}
        aria-label="Toggle live AI Assistant Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat window container */}
      {isOpen && (
        <div 
          className="absolute bottom-18 right-0 w-80 sm:w-96 h-[480px] bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#1A1A1A]/10 flex flex-col overflow-hidden animate-slideUp"
          id="chat-window-panel"
        >
          {/* Header */}
          <div className="bg-[#1A1A1A] px-5 py-4 flex items-center justify-between border-b border-[#FAF8F5]/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 flex items-center justify-center text-[#8B7E66]">
                <Bot className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[#F5F2ED] font-serif font-bold text-sm">FacilissimoWeb AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <span className="text-[9px] text-zinc-400 font-mono">Consulente automatico</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors duration-200"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages view */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-[#F5F2ED]/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#8B7E66] text-[#F5F2ED] rounded-br-sm shadow-sm'
                      : 'bg-[#FAF8F5] text-[#1A1A1A] rounded-bl-sm border border-[#1A1A1A]/10 shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                  <span
                    className={`text-[9px] block text-right mt-1.5 ${
                      m.sender === 'user' ? 'text-[#F5F2ED]/70' : 'text-zinc-400'
                    }`}
                  >
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#FAF8F5] text-[#1A1A1A] rounded-2xl rounded-bl-sm border border-[#1A1A1A]/10 shadow-xs px-4 py-3 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#8B7E66] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-[#8B7E66] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-[#8B7E66] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick choices if no user message has been typed yet */}
          {messages.length === 1 && (
            <div className="p-3 bg-white border-t border-[#1A1A1A]/5 flex flex-wrap gap-1.5 justify-center">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-[10px] text-[#1A1A1A]/70 hover:text-[#8B7E66] hover:border-[#8B7E66]/50 bg-[#FAF8F5] hover:bg-[#8B7E66]/5 border border-[#1A1A1A]/10 hover:border-[#8B7E66]/20 rounded-full px-3 py-1.5 transition-all duration-200 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Chat Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-3 bg-white border-t border-[#1A1A1A]/5 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Scrivi una domanda..."
              className="flex-grow bg-[#F5F2ED]/50 text-[#1A1A1A] text-xs px-4 py-2.5 rounded-full border border-[#1A1A1A]/15 focus:outline-none focus:border-[#8B7E66] placeholder-[#1A1A1A]/40"
              disabled={isLoading}
              aria-label="Type your research question"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                inputValue.trim() && !isLoading
                  ? 'bg-[#8B7E66] hover:bg-[#5F5542] text-white'
                  : 'bg-zinc-100 text-zinc-300'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
