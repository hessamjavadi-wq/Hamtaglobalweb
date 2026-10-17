import React from 'react';

interface SectorGraphicProps {
  sectorId: string;
  className?: string;
  heightClass?: string;
}

export const SectorGraphic: React.FC<SectorGraphicProps> = ({
  sectorId,
  className = '',
  heightClass = 'h-52',
}) => {
  switch (sectorId) {
    case 'hero':
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A1120] border border-slate-800 p-6 flex flex-col justify-between ${className}`}>
          {/* Subtle Nautical & International Trade Coordinate Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94A3B8" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            {/* Compass rose & trade routes */}
            <circle cx="75%" cy="40%" r="90" fill="none" stroke="#C5A880" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="75%" cy="40%" r="50" fill="none" stroke="#0D9488" strokeWidth="1" opacity="0.6" />
            <path d="M 50 180 Q 200 80 450 110 T 800 60" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
          </svg>

          {/* Foreground Graphic: Global Logistics & Cargo Vessel Silhouette */}
          <div className="relative z-10 flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>TRANSIT PROTOCOL · INCOTERMS 2020</span>
            <span className="text-[#C5A880]">EST. 2010 · IR / UAE / CN</span>
          </div>

          <div className="relative z-10 flex items-end justify-between">
            <div className="space-y-1">
              <div className="text-xl font-bold text-white tracking-tight">Global Trade & Supply Lines</div>
              <div className="text-xs text-slate-300">Cross-Border Procurement · Sea, Air & Multimodal Freight</div>
            </div>
            
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono text-[#C5A880] bg-[#C5A880]/10 border border-[#C5A880]/20 rounded">FOB / CIF / CFR</span>
              <span className="px-2.5 py-1 text-[11px] font-mono text-[#0D9488] bg-[#0D9488]/10 border border-[#0D9488]/20 rounded">QA Audited</span>
            </div>
          </div>
        </div>
      );

    case 'tech-electronics':
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-slate-800 p-5 flex flex-col justify-between ${className}`}>
          <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Electronic PCB Trace Pattern */}
            <path d="M 20 20 H 90 V 60 H 160 V 30 H 220" fill="none" stroke="#0D9488" strokeWidth="2" />
            <circle cx="20" cy="20" r="3" fill="#0D9488" />
            <circle cx="220" cy="30" r="3" fill="#0D9488" />
            <path d="M 60 140 H 130 V 90 H 250" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="130" cy="90" r="2.5" fill="#C5A880" />
            {/* Integrated Circuit Chip Silhouette */}
            <rect x="230" y="40" width="70" height="70" rx="6" fill="#0B1120" stroke="#475569" strokeWidth="1.5" />
            <text x="265" y="78" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">IC BATCH</text>
          </svg>
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-teal-400">
            <span>SECTOR 01</span>
            <span>CE / RoHS COMPLIANT</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold text-slate-300">Electronics & Micro-Components</span>
            <div className="text-[11px] text-slate-400 mt-0.5">Direct Factory Batches · Verified Provenance</div>
          </div>
        </div>
      );

    case 'it-hardware':
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#0B132B] to-[#1C2541] border border-slate-800 p-5 flex flex-col justify-between ${className}`}>
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Enterprise Rack Server Bays */}
            <rect x="30" y="30" width="260" height="28" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <circle cx="45" cy="44" r="3" fill="#0D9488" />
            <circle cx="58" cy="44" r="2" fill="#C5A880" />
            <line x1="75" y1="44" x2="270" y2="44" stroke="#334155" strokeWidth="2" strokeDasharray="6 3" />

            <rect x="30" y="66" width="260" height="28" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <circle cx="45" cy="80" r="3" fill="#0D9488" />
            <circle cx="58" cy="80" r="2" fill="#C5A880" />
            <line x1="75" y1="80" x2="270" y2="80" stroke="#334155" strokeWidth="2" strokeDasharray="6 3" />

            <rect x="30" y="102" width="260" height="28" rx="3" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
            <circle cx="45" cy="116" r="3" fill="#0D9488" />
            <circle cx="58" cy="116" r="2" fill="#C5A880" />
            <line x1="75" y1="116" x2="270" y2="116" stroke="#334155" strokeWidth="2" strokeDasharray="6 3" />
          </svg>
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-cyan-400">
            <span>SECTOR 02</span>
            <span>ENTERPRISE SPEC</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold text-slate-300">Servers, Storage & IT Infrastructure</span>
            <div className="text-[11px] text-slate-400 mt-0.5">Xeon/EPYC CPUs · ECC RAM · Enterprise NVMe</div>
          </div>
        </div>
      );

    case 'refurbished-computers':
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-slate-800 p-5 flex flex-col justify-between ${className}`}>
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Modern Workstation & Laptop Outline */}
            <rect x="70" y="30" width="160" height="90" rx="6" fill="#0B1120" stroke="#475569" strokeWidth="1.5" />
            <rect x="76" y="36" width="148" height="78" rx="2" fill="#1E293B" />
            <line x1="100" y1="65" x2="160" y2="65" stroke="#0D9488" strokeWidth="2" />
            <line x1="100" y1="75" x2="200" y2="75" stroke="#64748B" strokeWidth="1.5" />
            <polygon points="50,126 250,126 230,140 70,140" fill="#0B1120" stroke="#475569" strokeWidth="1" />
          </svg>
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-amber-300">
            <span>SECTOR 03</span>
            <span>GRADE A / B+ TESTED</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold text-slate-300">Used & Refurbished Computers</span>
            <div className="text-[11px] text-slate-400 mt-0.5">Corporate Lease-Return · Stress Tested</div>
          </div>
        </div>
      );

    case 'refurbished-smartphones':
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#0B132B] to-[#1E293B] border border-slate-800 p-5 flex flex-col justify-between ${className}`}>
          <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Precision Smartphone Silhouettes with Dynamic Island & Camera System */}
            <rect x="50" y="25" width="80" height="150" rx="14" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <rect x="72" y="34" width="36" height="8" rx="4" fill="#020617" />
            <circle cx="90" cy="155" r="4" fill="#334155" />

            <rect x="150" y="20" width="85" height="155" rx="14" fill="#0A1120" stroke="#C5A880" strokeWidth="1.5" strokeOpacity="0.6" />
            <rect x="172" y="30" width="40" height="9" rx="4.5" fill="#020617" />
            <circle cx="168" cy="48" r="7" fill="#1E293B" stroke="#475569" />
            <circle cx="192" cy="48" r="7" fill="#1E293B" stroke="#475569" />
          </svg>
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-[#C5A880]">
            <span>SECTOR 04</span>
            <span>BATTERY & IMEI VERIFIED</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold text-slate-300">Refurbished iPhones & Smartphones</span>
            <div className="text-[11px] text-slate-400 mt-0.5">Bulk Wholesale · CTIA Grading Standard</div>
          </div>
        </div>
      );

    case 'fragrance-raw-materials':
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#121B24] to-[#1A2634] border border-slate-800 p-5 flex flex-col justify-between ${className}`}>
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Organic Chemistry Hexagonal Aromatics & Flask Silhouette */}
            <polygon points="120,40 145,55 145,85 120,100 95,85 95,55" fill="none" stroke="#C5A880" strokeWidth="1.5" />
            <circle cx="120" cy="70" r="18" fill="none" stroke="#C5A880" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="145" y1="70" x2="175" y2="70" stroke="#0D9488" strokeWidth="1.5" />
            <polygon points="200,55 225,70 225,100 200,115 175,100 175,70" fill="none" stroke="#0D9488" strokeWidth="1.5" />
            {/* Laboratory Dropper / Pipette Silhouette */}
            <path d="M 50 130 Q 70 80 85 40" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="85" cy="40" r="4" fill="#C5A880" />
          </svg>
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-emerald-400">
            <span>SECTOR 05</span>
            <span>COA & MSDS DOCUMENTED</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold text-slate-300">Fragrance Oils & Hygiene Raw Materials</span>
            <div className="text-[11px] text-slate-400 mt-0.5">Surfactant Inputs · Aroma Compounds · Drums</div>
          </div>
        </div>
      );

    case 'international-sourcing':
    default:
      return (
        <div className={`relative w-full ${heightClass} overflow-hidden rounded-lg bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-slate-800 p-5 flex flex-col justify-between ${className}`}>
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Cross-Border Trade Vectors & Container Shield */}
            <circle cx="150" cy="85" r="60" fill="none" stroke="#475569" strokeWidth="1" />
            <ellipse cx="150" cy="85" rx="60" ry="22" fill="none" stroke="#475569" strokeWidth="1" />
            <line x1="150" y1="25" x2="150" y2="145" stroke="#475569" strokeWidth="1" />
            <path d="M 60 120 L 150 40 L 240 120" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="5 3" />
            <circle cx="60" cy="120" r="3" fill="#C5A880" />
            <circle cx="150" cy="40" r="3" fill="#0D9488" />
            <circle cx="240" cy="120" r="3" fill="#C5A880" />
          </svg>
          <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-teal-400">
            <span>SECTOR 06</span>
            <span>END-TO-END PROCUREMENT</span>
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold text-slate-300">International Sourcing & Trade</span>
            <div className="text-[11px] text-slate-400 mt-0.5">Vendor Due Diligence · Customs Documentation</div>
          </div>
        </div>
      );
  }
};
