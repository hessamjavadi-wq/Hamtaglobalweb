import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { SectorGraphic } from '../components/SectorGraphic';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId, sectorId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-8 sm:pt-14 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-start">
              {/* Unboxed Kicker Metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                <span>{t.hero.kicker}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">{t.hero.badgeYear}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
                {t.hero.titleMain}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2D4BC] via-[#C5A880] to-[#0D9488]">
                  {t.hero.titleAccent}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] active:scale-[0.98] rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                >
                  {t.hero.primaryCta}
                </button>

                <button
                  onClick={() => onNavigate('sectors')}
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 rounded-lg transition-all cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight className={`w-4 h-4 ${isFa ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Right Column: Hero Graphic Carrier */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/50 to-slate-800/20 shadow-2xl">
                <SectorGraphic sectorId="hero" heightClass="h-72 sm:h-80" />
              </div>
            </div>
          </div>

          {/* KPI Proof Strip Below Hero Split */}
          <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight tabular-nums">
                {t.hero.metricYearsTrading}
              </div>
              <div className="text-xs text-slate-400">{t.hero.metricYearsLabel}</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight tabular-nums">
                {t.hero.metricSectors}
              </div>
              <div className="text-xs text-slate-400">{t.hero.metricSectorsLabel}</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {t.hero.metricTradeFocus}
              </div>
              <div className="text-xs text-slate-400">{t.hero.metricTradeFocusLabel}</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0D9488] tracking-tight">
                {t.hero.metricCompliance}
              </div>
              <div className="text-xs text-slate-400">{t.hero.metricComplianceLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Foundation & About Brief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A]/80 border border-slate-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                {t.aboutBrief.kicker}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {t.aboutBrief.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.aboutBrief.p1}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.aboutBrief.p2}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A880] hover:text-[#D5B890] transition-colors cursor-pointer group"
                >
                  <span>{t.aboutBrief.readMore}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isFa ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {/* Pillar 1 */}
              <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>{t.aboutBrief.pillar1Title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t.aboutBrief.pillar1Desc}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{t.aboutBrief.pillar2Title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t.aboutBrief.pillar2Desc}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FileCheck2 className="w-4 h-4 text-[#C5A880]" />
                  <span>{t.aboutBrief.pillar3Title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t.aboutBrief.pillar3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Commercial Sectors Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              {t.sectorsSection.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.sectorsSection.title}
            </h2>
            <p className="text-sm text-slate-300">
              {t.sectorsSection.description}
            </p>
          </div>

          <button
            onClick={() => onNavigate('sectors')}
            className="flex items-center gap-1.5 text-sm font-semibold text-[#C5A880] hover:text-[#D5B890] transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{t.sectorsSection.viewAll}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.sectorsSection.sectors.map((sector) => (
            <div
              key={sector.id}
              className="group bg-[#0F172A] border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between transition-all duration-200"
            >
              <div className="space-y-4">
                <SectorGraphic sectorId={sector.id} heightClass="h-36" />

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-xs text-[#C5A880]/90 font-medium">
                    {sector.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {sector.description}
                  </p>
                </div>

                {/* Unboxed Metadata Capabilities */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                  {sector.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-[#C5A880] shrink-0" />
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Inquire Sector */}
              <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-400">
                  <span>MOQ: {sector.moq}</span>
                </div>
                <button
                  onClick={() => onNavigate('contact', sector.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  <span>{t.sectorsSection.inquireSector}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isFa ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sourcing Methodology / 4-Phase Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            {t.sourcingOverview.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t.sourcingOverview.title}
          </h2>
          <p className="text-sm text-slate-300">
            {t.sourcingOverview.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.sourcingOverview.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#0F172A] border border-slate-800 rounded-xl p-6 space-y-3 relative overflow-hidden"
            >
              {/* Editorial Clean Numbering */}
              <div className="text-2xl font-mono font-bold text-[#C5A880]/80">
                {step.stepNumber}
              </div>

              <h3 className="text-sm font-bold text-white tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('sourcing')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <span>{t.sourcingOverview.cta}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isFa ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* 5. Commercial Inquiry CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1A2634] to-[#0F172A] border border-slate-700/80 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.ctaBanner.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.ctaBanner.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 text-sm font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] active:scale-[0.98] rounded-lg shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              {t.ctaBanner.button}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
            <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{t.ctaBanner.note}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
