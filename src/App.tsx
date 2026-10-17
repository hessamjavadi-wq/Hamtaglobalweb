/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Language, PageId } from './types';
import { SeoHead } from './components/SeoHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SitemapModal } from './components/SitemapModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SectorsPage } from './pages/SectorsPage';
import { SourcingPage } from './pages/SourcingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedSectorId, setSelectedSectorId] = useState<string>('');
  const [isSitemapModalOpen, setIsSitemapModalOpen] = useState<boolean>(false);

  // Helper to parse URL into language and pageId
  const parseUrl = useCallback((): { language: Language; page: PageId; sector?: string } => {
    const path = window.location.pathname.toLowerCase();
    const segments = path.split('/').filter(Boolean);

    let detectedLang: Language = 'en';
    let detectedPage: PageId = 'home';

    if (segments.length > 0) {
      if (segments[0] === 'fa') {
        detectedLang = 'fa';
      } else if (segments[0] === 'en') {
        detectedLang = 'en';
      }

      if (segments.length > 1) {
        const rawPage = segments[1];
        if (
          rawPage === 'about' ||
          rawPage === 'sectors' ||
          rawPage === 'sourcing' ||
          rawPage === 'contact' ||
          rawPage === 'privacy'
        ) {
          detectedPage = rawPage as PageId;
        }
      }
    }

    // Check search params for pre-selected sector
    const searchParams = new URLSearchParams(window.location.search);
    const sectorParam = searchParams.get('sector') || '';

    return { language: detectedLang, page: detectedPage, sector: sectorParam };
  }, []);

  // Sync state to URL without reloading
  const updateUrl = useCallback((newLang: Language, newPage: PageId, sector?: string) => {
    const pageSegment = newPage === 'home' ? '' : `/${newPage}`;
    const query = sector ? `?sector=${encodeURIComponent(sector)}` : '';
    const newPath = `/${newLang}${pageSegment}${query}`;

    if (window.location.pathname !== `/${newLang}${pageSegment}` || window.location.search !== query) {
      window.history.pushState({ lang: newLang, page: newPage, sector }, '', newPath);
    }
  }, []);

  // Initialize from current URL
  useEffect(() => {
    const { language, page, sector } = parseUrl();
    setLang(language);
    setCurrentPage(page);
    if (sector) setSelectedSectorId(sector);

    // If root path "/" was hit without language prefix, normalize to /en/
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.history.replaceState({ lang: 'en', page: 'home' }, '', '/en/');
    }
  }, [parseUrl]);

  // Listen to browser forward/backward buttons
  useEffect(() => {
    const handlePopState = () => {
      const { language, page, sector } = parseUrl();
      setLang(language);
      setCurrentPage(page);
      if (sector) setSelectedSectorId(sector);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseUrl]);

  // Synchronize document direction and class on language switch
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  // Navigation handlers
  const handleNavigate = (page: PageId, sectorId?: string) => {
    setCurrentPage(page);
    if (sectorId) {
      setSelectedSectorId(sectorId);
    }
    updateUrl(lang, page, sectorId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    updateUrl(newLang, currentPage, selectedSectorId);
  };

  return (
    <div
      className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col font-sans transition-all duration-150"
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
    >
      {/* SEO & Structured Data Management */}
      <SeoHead lang={lang} currentPage={currentPage} />

      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'sectors' && (
          <SectorsPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'sourcing' && (
          <SourcingPage lang={lang} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            lang={lang}
            preselectedSectorId={selectedSectorId}
          />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage lang={lang} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenSitemapModal={() => setIsSitemapModalOpen(true)}
      />

      {/* XML Sitemap & Robots.txt Modal */}
      <SitemapModal
        isOpen={isSitemapModalOpen}
        onClose={() => setIsSitemapModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
