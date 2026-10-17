import React, { useEffect } from 'react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface SeoHeadProps {
  lang: Language;
  currentPage: PageId;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ lang, currentPage }) => {
  const t = translations[lang];
  const pageSeo = t.seo[currentPage] || t.seo.home;

  useEffect(() => {
    // 1. Update Document Title
    document.title = pageSeo.title;

    // 2. Update HTML lang & dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // 3. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageSeo.description);

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageSeo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageSeo.description);

    // 5. Update Canonical & Hreflang Tags
    const origin = window.location.origin;
    const currentPath = `/${lang}/${currentPage === 'home' ? '' : currentPage}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${origin}${currentPath}`);

    // Hreflang alternates
    const updateHreflang = (targetLang: Language, hreflangValue: string) => {
      const targetPath = `/${targetLang}/${currentPage === 'home' ? '' : currentPage}`;
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflangValue}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflangValue);
        document.head.appendChild(link);
      }
      link.setAttribute('href', `${origin}${targetPath}`);
    };

    updateHreflang('en', 'en');
    updateHreflang('fa', 'fa');
    updateHreflang('en', 'x-default');

    // 6. Schema.org JSON-LD Structured Data
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${origin}/#organization`,
          name: 'Hamta Tondar Jahan',
          alternateName: 'همتا تندر جهان',
          foundingDate: '2010',
          description:
            'International trading company specializing in computer hardware, certified refurbished IT & smartphones, fragrance raw materials, and global B2B procurement.',
          url: origin,
          knowsAbout: [
            'International Trading',
            'Computer Hardware Import',
            'Refurbished Laptops & Desktops',
            'Used and Refurbished iPhones',
            'Fragrance Raw Materials & Hygiene Compounds',
            'Cross-Border B2B Sourcing',
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'Commercial Trading Desk',
              telephone: '+98-21-88000000',
              email: 'trade@hamtatondar.com',
              availableLanguage: ['en', 'fa'],
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${origin}/#website`,
          url: origin,
          name: 'Hamta Tondar Jahan',
          inLanguage: ['en', 'fa'],
          publisher: {
            '@id': `${origin}/#organization`,
          },
        },
      ],
    };

    let schemaScript = document.querySelector('#schema-jsonld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'schema-jsonld');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(organizationSchema);
  }, [lang, currentPage, pageSeo]);

  return null;
};
