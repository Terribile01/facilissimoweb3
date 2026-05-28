import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import HomeView from './components/HomeView';
import ServiziView from './components/ServiziView';
import ChiSonoView from './components/ChiSonoView';
import JournalView from './components/JournalView';
import ContattiView from './components/ContattiView';
import NotFoundView from './components/NotFoundView';
import SocialLeadGenView from './components/SocialLeadGenView';
import TeamAiView from './components/TeamAiView';
import PrivacyView from './components/PrivacyView';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cookieBannerOpen, setCookieBannerOpen] = useState(false);

  // Handle URL hash routing to enable real multipage bookmarking and refreshing!
  // This is a superb "wow factor" that ensures clicking browser refresh or back/forward buttons behaves like a real multipage site!
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'servizi', 'social-leadgen', 'team-ai', 'chi-sono', 'journal', 'contatti', 'privacy'];
      
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home'); // Default root
      } else {
        // Keeps state but we can show NotFound implicitly if they entered a garbage hash
        setCurrentPage(hash); 
      }
    };

    // Run once on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync hash when state updates
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={handlePageChange} />;
      case 'servizi':
        return <ServiziView setCurrentPage={handlePageChange} />;
      case 'chi-sono':
        return <ChiSonoView setCurrentPage={handlePageChange} />;
      case 'journal':
        return <JournalView />;
      case 'contatti':
        return <ContattiView />;
      case 'social-leadgen':
        return <SocialLeadGenView setCurrentPage={handlePageChange} />;
      case 'team-ai':
        return <TeamAiView setCurrentPage={handlePageChange} />;
      case 'privacy':
        return <PrivacyView setCurrentPage={handlePageChange} />;
      default:
        // Handle custom 404 router
        return <NotFoundView setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* Prime Navigation Header bar */}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Main Ecosytem Page stage */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Bottom Footer block */}
      <Footer setCurrentPage={handlePageChange} onOpenCookieBanner={() => setCookieBannerOpen(true)} />

      {/* Floating AI Consultant Assistant Widget */}
      <ChatWidget />

      {/* Interactive Cookie Compliance Consent Banner */}
      <CookieBanner setCurrentPage={handlePageChange} isOpen={cookieBannerOpen} setIsOpen={setCookieBannerOpen} />

    </div>
  );
}
