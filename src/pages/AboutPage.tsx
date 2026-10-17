import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Shield, CheckCircle, Scale, Building2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  const icons = [Shield, CheckCircle, Scale, Building2];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-14 pb-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            {t.aboutPage.heroKicker}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.aboutPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {t.aboutPage.heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Corporate History & Foundation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {t.aboutPage.historyTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.historyP1}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.historyP2}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.historyP3}
            </p>
          </div>

          {/* Sticky Trust Card */}
          <div className="lg:col-span-4 bg-[#0F172A] border border-slate-800 rounded-xl p-6 space-y-5">
            <div className="space-y-1">
              <div className="text-3xl font-mono font-bold text-[#C5A880]">
                {t.establishedYear}
              </div>
              <h3 className="text-sm font-bold text-white">
                {t.aboutPage.foundationYearTitle}
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.aboutPage.foundationYearDesc}
            </p>

            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>B2B Commercial Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Standardized ICC Incoterms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Direct Supplier Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Operating Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            Core Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t.aboutPage.valuesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.aboutPage.values.map((val, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={val.title}
                className="bg-[#0F172A] border border-slate-800 rounded-xl p-6 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-[#C5A880]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Trade Standards & Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A]/70 border border-slate-800 rounded-2xl p-8 sm:p-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.aboutPage.complianceTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.aboutPage.complianceP1}
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.aboutPage.complianceP2}
          </p>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] rounded-lg transition-colors cursor-pointer"
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
