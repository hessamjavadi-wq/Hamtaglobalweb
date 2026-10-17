import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { CheckCircle2, ShieldCheck, Ship, ArrowRight } from 'lucide-react';

interface SourcingPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const SourcingPage: React.FC<SourcingPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-14 pb-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            {t.sourcingPage.heroKicker}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.sourcingPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {t.sourcingPage.heroDescription}
          </p>
        </div>
      </section>

      {/* 2. The Four-Phase Procurement Lifecycle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t.sourcingPage.processTitle}
          </h2>
          <p className="text-sm text-slate-300">
            {t.sourcingPage.processDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.sourcingPage.phases.map((phase) => (
            <div
              key={phase.num}
              className="bg-[#0F172A] border border-slate-800 rounded-xl p-8 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider">
                    {phase.num}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {phase.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                {phase.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0 mt-1.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Incoterms 2020 Commercial Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            Trade Regulations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t.sourcingPage.incotermsTitle}
          </h2>
          <p className="text-sm text-slate-300">
            {t.sourcingPage.incotermsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.sourcingPage.incotermsList.map((item) => (
            <div
              key={item.term}
              className="bg-[#0F172A] border border-slate-800 rounded-xl p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-white">
                  {item.term}
                </span>
                <Ship className="w-4 h-4 text-[#C5A880]" />
              </div>

              <div className="text-xs font-semibold text-[#C5A880]">
                {item.fullName}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Quality Assurance Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A]/80 border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Inspection Protocol</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.sourcingPage.qualityTitle}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.sourcingPage.qualityP1}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.sourcingPage.qualityP2}
          </p>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] rounded-lg transition-colors cursor-pointer"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isFa ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
