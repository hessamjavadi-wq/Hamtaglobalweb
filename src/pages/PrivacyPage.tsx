import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';

interface PrivacyPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-14 pb-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A880] hover:text-[#D5B890] transition-colors cursor-pointer"
          >
            {isFa ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            <span>{isFa ? 'بازگشت به صفحه اصلی' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            <ShieldCheck className="w-4 h-4" />
            <span>Compliance & Legal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.privacyPage.title}
          </h1>

          <p className="text-xs font-mono text-slate-400">
            {t.privacyPage.lastUpdated}
          </p>
        </div>
      </section>

      {/* 2. Privacy Policy Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-6 bg-[#0F172A] border border-slate-800 rounded-xl text-sm sm:text-base text-slate-300 leading-relaxed">
          {t.privacyPage.intro}
        </div>

        <div className="space-y-6">
          {t.privacyPage.sections.map((section, idx) => (
            <article
              key={idx}
              className="bg-[#0F172A]/70 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-3"
            >
              <h2 className="text-lg font-bold text-white tracking-tight">
                {section.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {section.content}
              </p>
            </article>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Hamta Tondar Jahan Commercial Legal Desk</span>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[#C5A880] hover:underline cursor-pointer"
          >
            {isFa ? 'ارتباط با واحد بازرگانی' : 'Contact Commercial Desk'}
          </button>
        </div>
      </section>
    </div>
  );
};
