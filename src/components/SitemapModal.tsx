import React, { useState } from 'react';
import { Language } from '../types';
import { X, Copy, Check, FileCode, ShieldCheck } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'robots'>('sitemap');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const origin = window.location.origin;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- English Routes -->
  <url>
    <loc>${origin}/en/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/"/>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/en/about</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/about"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/about"/>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/en/sectors</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/sectors"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/sectors"/>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${origin}/en/sourcing</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/sourcing"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/sourcing"/>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/en/contact</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/contact"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/contact"/>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${origin}/en/privacy</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/privacy"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/privacy"/>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>

  <!-- Persian (Farsi) Routes -->
  <url>
    <loc>${origin}/fa/</loc>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/"/>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${origin}/fa/about</loc>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/about"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/about"/>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/fa/sectors</loc>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/sectors"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/sectors"/>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${origin}/fa/sourcing</loc>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/sourcing"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/sourcing"/>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${origin}/fa/contact</loc>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/contact"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/contact"/>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${origin}/fa/privacy</loc>
    <xhtml:link rel="alternate" hreflang="fa" href="${origin}/fa/privacy"/>
    <xhtml:link rel="alternate" hreflang="en" href="${origin}/en/privacy"/>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /

# Multilingual XML Sitemaps
Sitemap: ${origin}/sitemap.xml
`;

  const currentContent = activeTab === 'sitemap' ? sitemapXml : robotsTxt;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-3xl bg-[#0F172A] border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B1120]">
          <div className="flex items-center gap-3">
            <FileCode className="w-5 h-5 text-[#C5A880]" />
            <div>
              <h3 className="text-sm font-bold text-white">
                {lang === 'fa' ? 'ابزار بازرسی سئو، نقشه سایت و robots.txt' : 'SEO, XML Sitemap & robots.txt Inspector'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'fa' ? 'ساختار کامل صفحات دوزبانه (EN/FA) و تگ‌های hreflang' : 'Complete bilingual hreflang structure & crawler rules'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-900 border-b border-slate-800">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('sitemap')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'sitemap'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              sitemap.xml (Bilingual)
            </button>
            <button
              onClick={() => setActiveTab('robots')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'robots'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              robots.txt
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'fa' ? 'کپی شد' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>{lang === 'fa' ? 'کپی محتوا' : 'Copy Code'}</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Box */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-slate-300 bg-[#090D16] space-y-2 select-all leading-relaxed" dir="ltr">
          <pre className="whitespace-pre-wrap">{currentContent}</pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0B1120] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Valid XML Schema & Google hreflang standard compliant</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium rounded-md transition-colors"
          >
            {lang === 'fa' ? 'بستن' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
