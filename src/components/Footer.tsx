import React from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Clock, Globe2 } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenSitemapModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  onOpenSitemapModal,
}) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  const sectorLinks = t.sectorsSection.sectors;

  return (
    <footer className="bg-[#070D18] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer focus:outline-none"
            >
              <Logo lang={lang} variant="full" />
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="pt-2 text-xs font-mono text-[#C5A880]/90">
              <span>{isFa ? 'سال تأسیس: ۱۳۸۹ (2010)' : 'Established: 2010 · Commercial Trading License'}</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sectors')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.sectors}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sourcing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.sourcing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.privacy}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Sectors */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              {t.footer.sectorsHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              {sectorLinks.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => onNavigate('sectors')}
                    className="hover:text-white transition-colors text-left line-clamp-1 cursor-pointer"
                  >
                    {sec.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Verified Coordinates & Editable Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              {t.footer.complianceHeading}
            </h4>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>{t.contactPage.addressValue}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span dir="ltr">{t.contactPage.phoneCoordValue}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span dir="ltr">{t.contactPage.emailCoordValue}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>{t.contactPage.workingHoursValue}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
              <Globe2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
              <span>{t.contactPage.partnerHubsValue}</span>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-start">
            <span>
              © 2010 – 2026 {isFa ? 'همتا تندر جهان' : 'Hamta Tondar Jahan'}. {t.footer.allRightsReserved}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="text-slate-400">{t.footer.registeredInfo}</span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenSitemapModal}
              className="text-[#C5A880] hover:text-[#D5B890] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{t.footer.sitemapRobots}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
