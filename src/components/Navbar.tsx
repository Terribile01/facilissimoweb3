import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Chi Sono', value: 'chi-sono' },
    { label: 'Servizi', value: 'servizi' },
    { label: 'Social & Lead', value: 'social-leadgen' },
    { label: 'AI Team', value: 'team-ai' },
    { label: 'Journal', value: 'journal' },
    { label: 'Contatti', value: 'contatti' }
  ];

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5F2ED]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavigate('home')}
            id="nav-logo"
            aria-label="FacilissimoWeb Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-105 border border-[#1A1A1A]/15">
              <Zap className="w-5 h-5 text-[#8B7E66] fill-[#8B7E66]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif italic font-bold text-xl tracking-tight text-[#1A1A1A] leading-none">
                Facilissimo<span className="not-italic font-sans font-black tracking-tight text-[#8B7E66]">Web</span>
              </span>
              <span className="font-mono text-[9px] text-[#8B7E66] tracking-[0.2em] uppercase leading-none mt-1">
                Strategy & Automation
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.value}
                id={`nav-link-${link.value}`}
                onClick={() => handleNavigate(link.value)}
                className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 relative py-2 cursor-pointer ${
                  currentPage === link.value
                    ? 'text-[#1A1A1A] border-b-2 border-[#8B7E66] italic'
                    : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              id="nav-cta-btn"
              onClick={() => handleNavigate('contatti')}
              className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] text-[#1A1A1A] px-5 py-3 rounded-none transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Consulenza Gratuita</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] focus:outline-none p-2 rounded-full hover:bg-[#1A1A1A]/5 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-[#1A1A1A]/10 bg-[#F5F2ED]/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <button
                key={link.value}
                id={`mobile-nav-link-${link.value}`}
                onClick={() => handleNavigate(link.value)}
                className={`flex w-full items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                  currentPage === link.value
                    ? 'bg-[#1A1A1A]/5 text-[#8B7E66]'
                    : 'text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/5 hover:text-[#1A1A1A]'
                }`}
              >
                <span>{link.label}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${currentPage === link.value ? 'bg-[#8B7E66]' : 'bg-transparent'}`} />
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                id="mobile-nav-cta"
                onClick={() => handleNavigate('contatti')}
                className="flex w-full items-center justify-center space-x-2 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] text-[#1A1A1A] font-sans text-xs uppercase tracking-widest font-semibold py-4 rounded-none transition-all duration-300 cursor-pointer"
              >
                <span>Consulenza Gratuita</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
