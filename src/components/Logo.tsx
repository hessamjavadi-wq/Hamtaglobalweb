import React from 'react';
import { Language } from '../types';

interface LogoProps {
  lang: Language;
  variant?: 'full' | 'mark' | 'footer' | 'hero' | 'header';
  theme?: 'dark' | 'light';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  lang,
  variant = 'full',
  theme = 'dark',
  className = '',
  showTagline = true,
}) => {
  const isFa = lang === 'fa';
  const isLight = theme === 'light';

  // Palette from the official header layout:
  // Primary Navy: #0D233A (light theme) or #F8FAFC with deep navy core (dark theme)
  // Accent Gold: #C19A5B / #D4AF37
  const navyColor = isLight ? '#0D233A' : '#F8FAFC';
  const navyBevel = isLight ? '#1B385D' : '#94A3B8';
  const goldColor = '#C19A5B';
  const goldHighlight = '#DFCA9D';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Standalone HG Arrow Monogram Emblem */}
      <div
        className={`relative shrink-0 ${
          variant === 'hero'
            ? 'w-14 h-14 sm:w-16 sm:h-16'
            : variant === 'footer'
            ? 'w-11 h-11'
            : 'w-10 h-10 sm:w-11 sm:h-11'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-label="Hamta Global Official Logo Emblem"
        >
          <defs>
            <linearGradient id="logo-navy-grad" x1="20%" y1="10%" x2="80%" y2="90%">
              <stop offset="0%" stopColor={navyColor} />
              <stop offset="100%" stopColor={isLight ? '#0A1B2D' : '#CBD5E1'} />
            </linearGradient>

            <linearGradient id="logo-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldHighlight} />
              <stop offset="60%" stopColor={goldColor} />
              <stop offset="100%" stopColor="#A57D3C" />
            </linearGradient>
          </defs>

          {/* 1. Left Angled Stem (Pillar of H) */}
          <path
            d="M37 26 L42 34 L34 50 L39.5 50 C 35 60, 29 68, 25 74 L19 74 C 23.5 65, 30.5 48, 37 26 Z"
            fill="url(#logo-navy-grad)"
            stroke={navyBevel}
            strokeWidth="0.5"
            strokeLinejoin="round"
          />

          {/* 2. Lower Geometric 'G' Chevron Foundation */}
          <path
            d="M36 53 L58 79 L80 54 H68 L58 65 L44 53 Z"
            fill="url(#logo-navy-grad)"
            stroke={navyBevel}
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          {/* G Horizontal Shelf */}
          <path
            d="M57 49 H80 V54 H57 Z"
            fill="url(#logo-navy-grad)"
            stroke={navyBevel}
            strokeWidth="0.5"
          />

          {/* 3. Upper Curved Gold Blade / Feather Wing */}
          <path
            d="M44 48 C 45 41, 51 33, 65 27 C 63 33, 56 40, 44 48 Z"
            fill="url(#logo-gold-grad)"
            stroke="#F0DEB7"
            strokeWidth="0.4"
          />

          {/* 4. Lower-Right Gold Rhombus Accent */}
          <polygon
            points="73,42 80,36.5 76,32.5 69,38"
            fill="url(#logo-gold-grad)"
            stroke="#F0DEB7"
            strokeWidth="0.4"
          />

          {/* 5. Sweeping Ascending Arrow */}
          {/* Sweeping Curved Tail */}
          <path
            d="M32 53 C 43 53, 57 45, 68 34 L73 39 C 60 51, 43 60, 32 53 Z"
            fill="url(#logo-navy-grad)"
            stroke={navyBevel}
            strokeWidth="0.5"
          />
          {/* Sharp Upward Arrowhead */}
          <polygon
            points="81,14 85,38 75,32 63,37"
            fill="url(#logo-navy-grad)"
            stroke={navyBevel}
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Official Typography from Image: HAMTA GLOBAL */}
      {variant !== 'mark' && (
        <div className="flex flex-col justify-center leading-none">
          {/* Row 1: Brand Wordmark: HAMTA GLOBAL */}
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span
              className={`font-extrabold tracking-tight whitespace-nowrap ${
                isLight ? 'text-[#0D233A]' : 'text-white'
              } ${
                variant === 'hero'
                  ? 'text-2xl sm:text-3xl'
                  : 'text-base sm:text-lg'
              }`}
            >
              HAMTA
            </span>
            <span
              className={`font-light tracking-[0.14em] whitespace-nowrap ${
                isLight ? 'text-[#1E3A5F]' : 'text-slate-200'
              } ${
                variant === 'hero'
                  ? 'text-2xl sm:text-3xl'
                  : 'text-base sm:text-lg'
              }`}
            >
              GLOBAL
            </span>

            {/* Persian Co-Branding Tag for Hamta Tondar Jahan */}
            {isFa && (
              <span className="text-xs sm:text-sm font-semibold text-[#C19A5B] ps-1 border-s border-slate-700 whitespace-nowrap">
                همتا تندر جهان
              </span>
            )}
          </div>

          {/* Row 2: Tagline from uploaded brand image */}
          {showTagline && (
            <span
              className={`text-[10px] sm:text-[11px] font-normal tracking-tight mt-1 whitespace-nowrap ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {isFa
                ? 'پیوند بازارها · خلق فرصت‌ها (تأسیس ۱۳۸۹)'
                : 'Connecting Markets. Creating Opportunities.'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
