import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { SectorGraphic } from '../components/SectorGraphic';
import { ArrowRight, Check, Package, ShieldCheck, FileSpreadsheet } from 'lucide-react';

interface SectorsPageProps {
  lang: Language;
  onNavigate: (page: PageId, sectorId?: string) => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  const sectors = t.sectorsSection.sectors;

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-14 pb-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            {t.sectorsPage.heroKicker}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.sectorsPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {t.sectorsPage.heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Detailed Sectors Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sectors.map((sector, index) => (
          <div
            key={sector.id}
            id={sector.id}
            className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 transition-all hover:border-slate-700 space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sector Graphic / Diagram */}
              <div className="lg:col-span-5 space-y-3">
                <SectorGraphic sectorId={sector.id} heightClass="h-48 sm:h-56" />
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <span>INDEX {String(index + 1).padStart(2, '0')}</span>
                  <span className="text-[#C5A880]">HTJ SPEC</span>
                </div>
              </div>

              {/* Sector Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1.5">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {sector.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-[#C5A880]">
                    {sector.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {sector.description}
                </p>

                {/* Capabilities Grid */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.sectorsPage.detailedSpecsTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {sector.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Specifications Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Package className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">{t.sectorsPage.moqLabel}</div>
                      <div className="text-slate-400">{sector.moq}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">{t.sectorsPage.standardsLabel}</div>
                      <div className="text-slate-400">{sector.standards}</div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('contact', sector.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] rounded-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>{t.sectorsPage.inquireButton}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isFa ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
