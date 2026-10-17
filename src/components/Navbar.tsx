import React, { useState } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Logo } from './Logo';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onLanguageChange: (newLang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  currentPage,
  onNavigate,
  onLanguageChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const isFa = lang === 'fa';

  const navLinks: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'sectors', label: t.nav.sectors },
    { id: 'sourcing', label: t.nav.sourcing },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  const handleToggleLang = () => {
    const nextLang = lang === 'en' ? 'fa' : 'en';
    onLanguageChange(nextLang);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single clean element) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded p-1 -m-1"
            aria-label="Hamta Tondar Jahan Home"
          >
            <Logo lang={lang} variant="full" />
          </button>

          {/* Zone 2: 4–5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#C5A880] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Domain Presence, Language Switcher & Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Domain text from the official header layout image */}
            <a
              href="https://www.hamtaglobal.com"
              target="_blank"
              rel="noreferrer"
              className="hidden xl:inline-block text-xs font-mono font-medium tracking-wide text-slate-300 hover:text-[#C5A880] transition-colors"
              title="Official Portal: www.hamtaglobal.com"
            >
              www.hamtaglobal.com
            </a>

            <span className="hidden xl:inline text-slate-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={handleToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880]"
              aria-label={`Switch language to ${lang === 'en' ? 'Persian' : 'English'}`}
              title={`Switch language to ${lang === 'en' ? 'Persian' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-semibold">{lang === 'en' ? 'FA · فارسی' : 'EN · English'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A880]"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isFa ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>

          {/* Mobile Right Controls: Language toggle + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleToggleLang}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md cursor-pointer"
            >
              <span className="text-[#C5A880]">{lang === 'en' ? 'FA' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0B1120] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-start px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/80 text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-800/60 space-y-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] rounded-lg transition-colors cursor-pointer"
            >
              <span>{t.nav.requestQuote}</span>
              <ArrowUpRight className={`w-4 h-4 ${isFa ? 'rotate-[-90deg]' : ''}`} />
            </button>
            <div className="text-center pt-1">
              <a
                href="https://www.hamtaglobal.com"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-slate-400 hover:text-[#C5A880]"
              >
                www.hamtaglobal.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
