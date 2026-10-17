import { Language, PageId } from '../types';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
}

export interface Translations {
  companyName: string;
  companyNameEn: string;
  companyNameFa: string;
  tagline: string;
  establishedYear: string;
  establishedText: string;
  
  nav: {
    home: string;
    about: string;
    sectors: string;
    sourcing: string;
    contact: string;
    privacy: string;
    requestQuote: string;
    languageName: string;
    switchLang: string;
    menu: string;
    close: string;
  };

  hero: {
    kicker: string;
    titleMain: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    badgeYear: string;
    metricYearsTrading: string;
    metricYearsLabel: string;
    metricSectors: string;
    metricSectorsLabel: string;
    metricTradeFocus: string;
    metricTradeFocusLabel: string;
    metricCompliance: string;
    metricComplianceLabel: string;
  };

  aboutBrief: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    readMore: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };

  sectorsSection: {
    kicker: string;
    title: string;
    description: string;
    viewAll: string;
    inquireSector: string;
    sectors: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      capabilities: string[];
      standards: string;
      moq: string;
    }>;
  };

  sourcingOverview: {
    kicker: string;
    title: string;
    description: string;
    steps: Array<{
      stepNumber: string;
      title: string;
      description: string;
    }>;
    cta: string;
  };

  ctaBanner: {
    title: string;
    description: string;
    button: string;
    note: string;
  };

  aboutPage: {
    heroKicker: string;
    heroTitle: string;
    heroDescription: string;
    historyTitle: string;
    historyP1: string;
    historyP2: string;
    historyP3: string;
    foundationYearTitle: string;
    foundationYearDesc: string;
    valuesTitle: string;
    values: Array<{
      title: string;
      desc: string;
    }>;
    complianceTitle: string;
    complianceP1: string;
    complianceP2: string;
  };

  sectorsPage: {
    heroKicker: string;
    heroTitle: string;
    heroDescription: string;
    detailedSpecsTitle: string;
    commercialTermsTitle: string;
    moqLabel: string;
    incotermsLabel: string;
    standardsLabel: string;
    inquireButton: string;
  };

  sourcingPage: {
    heroKicker: string;
    heroTitle: string;
    heroDescription: string;
    processTitle: string;
    processDescription: string;
    phases: Array<{
      num: string;
      title: string;
      desc: string;
      details: string[];
    }>;
    incotermsTitle: string;
    incotermsDesc: string;
    incotermsList: Array<{
      term: string;
      fullName: string;
      description: string;
    }>;
    qualityTitle: string;
    qualityP1: string;
    qualityP2: string;
  };

  contactPage: {
    heroKicker: string;
    heroTitle: string;
    heroDescription: string;
    formTitle: string;
    formSubtitle: string;
    orgLabel: string;
    orgPlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    sectorLabel: string;
    sectorSelectPlaceholder: string;
    volumeLabel: string;
    volumePlaceholder: string;
    incotermLabel: string;
    incotermPlaceholder: string;
    portLabel: string;
    portPlaceholder: string;
    specsLabel: string;
    specsPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    validationError: string;
    successTitle: string;
    successMessage: string;
    successRefLabel: string;
    newInquiryButton: string;
    downloadSummary: string;
    
    // Coordinates & editable placeholders
    coordinatesTitle: string;
    coordinatesSubtitle: string;
    addressLabel: string;
    addressValue: string;
    addressNote: string;
    phoneCoordLabel: string;
    phoneCoordValue: string;
    phoneCoordNote: string;
    emailCoordLabel: string;
    emailCoordValue: string;
    workingHoursLabel: string;
    workingHoursValue: string;
    partnerHubsLabel: string;
    partnerHubsValue: string;
    placeholderNotice: string;
  };

  privacyPage: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
  };

  footer: {
    aboutText: string;
    quickLinks: string;
    sectorsHeading: string;
    complianceHeading: string;
    registeredInfo: string;
    allRightsReserved: string;
    privacyPolicy: string;
    sitemapRobots: string;
    placeholderDisclaimer: string;
  };

  seo: Record<PageId, SeoMetadata>;
}

export const translations: Record<Language, Translations> = {
  en: {
    companyName: 'Hamta Tondar Jahan',
    companyNameEn: 'Hamta Tondar Jahan',
    companyNameFa: 'همتا تندر جهان',
    tagline: 'Connecting Markets. Creating Opportunities.',
    establishedYear: '2010',
    establishedText: 'Established in 2010',

    nav: {
      home: 'Home',
      about: 'About Us',
      sectors: 'Business Sectors',
      sourcing: 'Trading & Sourcing',
      contact: 'Contact & Inquiries',
      privacy: 'Privacy Policy',
      requestQuote: 'Request Quote',
      languageName: 'English',
      switchLang: 'فارسی',
      menu: 'Menu',
      close: 'Close',
    },

    hero: {
      kicker: 'Global Commercial Trading · Established 2010',
      titleMain: 'Connecting Global Markets with',
      titleAccent: 'Precision Sourcing & Reliable Supply',
      description: 'Hamta Tondar Jahan provides disciplined international import-export operations, technology distribution, refurbished enterprise IT hardware, graded smartphones, fragrance raw materials, and cross-border commercial procurement.',
      primaryCta: 'Request a Quotation',
      secondaryCta: 'Explore Business Sectors',
      badgeYear: 'Established 2010',
      metricYearsTrading: '16+ Years',
      metricYearsLabel: 'Trading Foundation (Est. 2010)',
      metricSectors: '6 Core',
      metricSectorsLabel: 'Commercial Sectors',
      metricTradeFocus: 'B2B Wholesale',
      metricTradeFocusLabel: 'Institutional Supply Focus',
      metricCompliance: 'Strict QA',
      metricComplianceLabel: 'Pre-Shipment Inspection',
    },

    aboutBrief: {
      kicker: 'Company Foundation',
      title: 'Built on Fourteen Plus Years of Commercial Integrity',
      p1: 'Founded in 2010, Hamta Tondar Jahan has operated as a dedicated international commercial entity engaged in global procurement, cross-border import and export, and strategic product sourcing.',
      p2: 'Our approach is grounded in direct vendor accountability, rigorous pre-shipment quality verification, transparent contract fulfillment, and adherence to international trade regulations.',
      readMore: 'Learn More About Our Company',
      pillar1Title: 'Verified Supply Chains',
      pillar1Desc: 'Direct procurement protocols bypassing unverified intermediaries to ensure origin authenticity.',
      pillar2Title: 'Technical Inspection',
      pillar2Desc: 'Hardware testing, diagnostic benchmarking, and laboratory analysis before dispatch.',
      pillar3Title: 'Incoterms Compliance',
      pillar3Desc: 'Structured shipping arrangements under standard international commercial terms (FOB, CIF, CFR, EXW).',
    },

    sectorsSection: {
      kicker: 'Commercial Capabilities',
      title: 'Our Core Business Sectors',
      description: 'Specialized wholesale procurement and distribution across electronics, certified IT hardware, consumer mobile technology, industrial fragrance ingredients, and general international trade.',
      viewAll: 'View All Sectors in Detail',
      inquireSector: 'Inquire About This Sector',
      sectors: [
        {
          id: 'tech-electronics',
          title: 'Technology & Consumer Electronics',
          subtitle: 'Wholesale components, peripheral devices, and consumer tech systems',
          description: 'Sourcing of high-demand technology products, electronic modules, audio-visual devices, and commercial peripheral infrastructure from reputable manufacturing regions.',
          capabilities: ['Factory-direct electronic component batches', 'Consumer electronics wholesale', 'Regional customs clearance assistance'],
          standards: 'CE, FCC, and RoHS factory compliance',
          moq: 'Commercial wholesale volumes',
        },
        {
          id: 'it-hardware',
          title: 'Computer Hardware & IT Equipment',
          subtitle: 'Enterprise servers, storage systems, and workstation components',
          description: 'Procurement of enterprise-grade server units, networking switches, processors, ECC memory modules, solid-state drives, and computing infrastructure for business deployment.',
          capabilities: ['Rackmount servers & blade chassis', 'High-end CPUs & server-grade RAM', 'Commercial storage arrays (NVMe & SAS)'],
          standards: 'OEM-grade verification & benchmark testing',
          moq: 'Pallet & container wholesale shipments',
        },
        {
          id: 'refurbished-computers',
          title: 'Used & Refurbished Computers',
          subtitle: 'Professionally graded desktop units, enterprise laptops, and workstations',
          description: 'Secondary market procurement of corporate lease-return computers and professionally refurbished laptops. Every batch undergoes diagnostic health inspection and cosmetic grading.',
          capabilities: ['Corporate lease-return business laptops', 'Refurbished micro and SFF desktop towers', 'Standardized cosmetic grading (Grade A / B+)'],
          standards: 'Diagnostic stress testing & hardware audit',
          moq: 'Wholesale batch orders (50+ units)',
        },
        {
          id: 'refurbished-smartphones',
          title: 'Used & Refurbished iPhones & Smartphones',
          subtitle: 'Graded mobile devices with battery health verification and clean IMEI audits',
          description: 'Bulk sourcing of pre-owned and professionally refurbished Apple iPhones and premium smartphones. Systematic inspection covering screen condition, logic board integrity, and camera modules.',
          capabilities: ['Fully tested Apple iPhone model generations', 'Grade A / A- / B cosmetic classification', 'Original OEM parts & battery health verification'],
          standards: 'Automated diagnostic software testing & clean IMEI checks',
          moq: 'Commercial wholesale lots (100+ units)',
        },
        {
          id: 'fragrance-raw-materials',
          title: 'Fragrance Ingredients & Personal Care Materials',
          subtitle: 'Aroma chemicals, essential oils, and raw compounds for hygiene formulation',
          description: 'Direct import of chemical inputs, fragrance oils, essential essences, surfactant bases, and preservative raw materials utilized in household hygiene, soap, detergents, and cosmetic formulations.',
          capabilities: ['Aroma chemicals & perfumery compounds', 'Raw surfactant inputs & cosmetic bases', 'Industrial drum and IBC container supply'],
          standards: 'COA (Certificate of Analysis) & MSDS documentation with each lot',
          moq: 'Drum & container volume shipments',
        },
        {
          id: 'international-sourcing',
          title: 'International Sourcing & General Trading',
          subtitle: 'Customs navigation, vendor due diligence, and cross-border commercial execution',
          description: 'Comprehensive B2B procurement services for corporate clients. We handle international supplier discovery, sample verification, contract negotiation, shipping coordination, and customs documentation.',
          capabilities: ['Multi-origin factory audits & supplier vetting', 'Bilingual contract negotiation & trade terms', 'Freight coordination & customs tariff documentation'],
          standards: 'Standardized Incoterms (FOB, CIF, CFR, DDP)',
          moq: 'Project-based commercial trade agreements',
        },
      ],
    },

    sourcingOverview: {
      kicker: 'Operational Methodology',
      title: 'Four-Phase Commercial Sourcing Framework',
      description: 'A structured, transparent procurement process developed over 16+ years of international trading experience.',
      steps: [
        {
          stepNumber: '01',
          title: 'Requirement Definition & Sourcing Brief',
          description: 'We review your technical specifications, required volume, acceptable grades, target delivery timeline, and commercial pricing expectations.',
        },
        {
          stepNumber: '02',
          title: 'Supplier Verification & Origin Audit',
          description: 'Our sourcing network audits manufacturing facilities and primary distributors, verifying legal standing, production capacity, and export permits.',
        },
        {
          stepNumber: '03',
          title: 'Physical Inspection & Quality Assurance',
          description: 'Prior to dispatch, goods undergo systematic physical audits, functional testing, cosmetic grading, or chemical COA verification.',
        },
        {
          stepNumber: '04',
          title: 'Customs Clearance & International Logistics',
          description: 'Preparation of international shipping documents, bill of lading, commercial invoices, packing lists, and freight management to port of destination.',
        },
      ],
      cta: 'View Sourcing Details & Incoterms',
    },

    ctaBanner: {
      title: 'Ready to Discuss Your Commercial Requirements?',
      description: 'Whether you require bulk enterprise IT hardware, graded smartphones, industrial fragrance ingredients, or custom international sourcing, submit an official Request for Quotation (RFQ).',
      button: 'Initiate Commercial Inquiry',
      note: 'Direct review by our commercial procurement desk · Official response within 24–48 business hours.',
    },

    aboutPage: {
      heroKicker: 'Corporate Profile · Established 2010',
      heroTitle: 'About Hamta Tondar Jahan',
      heroDescription: 'Over a decade of steadfast international commerce, supply chain facilitation, and cross-border trading solutions.',
      historyTitle: 'Corporate Foundation & Growth',
      historyP1: 'Hamta Tondar Jahan (همتا تندر جهان) was established in 2010 as a specialized commercial trading house. From its inception, the company focused on bridging international manufacturing hubs with regional wholesale demands through disciplined procurement practices.',
      historyP2: 'Over the years, the company expanded its commercial footprint across diverse sectors, establishing reliable supply channels for enterprise computing hardware, certified refurbished electronics, premium graded smartphones, and industrial fragrance ingredients used in personal hygiene products.',
      historyP3: 'Unlike speculative trading intermediaries, Hamta Tondar Jahan prioritizes direct vendor auditing, transparent contract documentation, realistic commercial timelines, and stringent quality control protocols at every stage of the transaction.',
      foundationYearTitle: 'Established in 2010',
      foundationYearDesc: 'Continuous commercial presence and international trading operations since 2010.',
      valuesTitle: 'Our Operating Principles',
      values: [
        {
          title: 'Uncompromising Authenticity',
          desc: 'We never compromise on origin transparency or product grade honesty. Specifications quoted are strictly what is delivered.',
        },
        {
          title: 'Strict Quality Control',
          desc: 'Every hardware batch is tested for component health, and every chemical lot is backed by valid Certificates of Analysis (COA).',
        },
        {
          title: 'Regulatory & Trade Compliance',
          desc: 'Full alignment with international customs classifications, export regulations, banking standards, and shipping safety protocols.',
        },
        {
          title: 'Long-Term B2B Partnerships',
          desc: 'We focus on recurring wholesale commercial agreements built on predictable delivery cycles rather than one-off opportunistic trades.',
        },
      ],
      complianceTitle: 'Trade Standards & Commercial Integrity',
      complianceP1: 'In international commerce, trust is the product of continuous verification. Our contracts are structured strictly under internationally recognized International Chamber of Commerce (ICC) Incoterms rules, ensuring that risks, freight obligations, and title transfers are explicitly defined.',
      complianceP2: 'We do not claim phantom offices or fictitious certifications. Our reputation is built on authentic commercial deliveries, honest grading methodologies, and straightforward communication.',
    },

    sectorsPage: {
      heroKicker: 'Commercial Catalog',
      heroTitle: 'Business Sectors & Trading Portfolios',
      heroDescription: 'Explore our six specialized commercial sectors, wholesale specifications, inspection standards, and minimum order capacities.',
      detailedSpecsTitle: 'Commercial Specifications & Scope',
      commercialTermsTitle: 'Trade & Logistics Information',
      moqLabel: 'Wholesale Capacity / MOQ',
      incotermsLabel: 'Standard Incoterms',
      standardsLabel: 'Verification Standards',
      inquireButton: 'Submit RFQ for this Sector',
    },

    sourcingPage: {
      heroKicker: 'Supply Chain Operations',
      heroTitle: 'International Trading & Sourcing Methodology',
      heroDescription: 'How Hamta Tondar Jahan manages end-to-end global procurement, supplier due diligence, quality assurance, and multimodal freight logistics.',
      processTitle: 'The Four-Phase Procurement Lifecycle',
      processDescription: 'Every commercial agreement follows our standardized governance framework to eliminate supply risks.',
      phases: [
        {
          num: 'Phase 01',
          title: 'Requirement Ingestion & Technical Scoping',
          desc: 'Detailed alignment on required hardware generations, cosmetic tolerances, chemical purities, target volumes, and budget parameters.',
          details: [
            'Technical specification matrix sign-off',
            'Volume threshold and timeline feasibility review',
            'Target price benchmarking against global spot markets',
          ],
        },
        {
          num: 'Phase 02',
          title: 'Supplier Qualification & Origin Audits',
          desc: 'Direct engagement with authorized manufacturers, tier-1 recyclers, and chemical synthesis plants.',
          details: [
            'Vendor legal identity and export license validation',
            'Factory production capacity & batch lot consistency audit',
            'Sanctions, anti-counterfeit, and provenance checks',
          ],
        },
        {
          num: 'Phase 03',
          title: 'Physical Pre-Shipment Inspection (PSI)',
          desc: 'Independent and internal diagnostic verification before release of commercial payment.',
          details: [
            'Diagnostic CPU/RAM/Motherboard benchmark stress testing',
            'Cosmetic grading audits according to CTIA standards',
            'COA & GC-MS chemical analysis review for fragrance compounds',
          ],
        },
        {
          num: 'Phase 04',
          title: 'Incoterms Execution & Freight Forwarding',
          desc: 'Multimodal logistics management from source warehouse to destination port of arrival.',
          details: [
            'Export customs clearance and commercial invoice preparation',
            'Bill of Lading (B/L) and air waybill issuance',
            'Cargo transit insurance and container seal integrity verification',
          ],
        },
      ],
      incotermsTitle: 'Supported Incoterms® 2020 Frameworks',
      incotermsDesc: 'We structure commercial agreements under international standard rules to match client risk tolerance and logistics infrastructure.',
      incotermsList: [
        {
          term: 'FOB',
          fullName: 'Free On Board',
          description: 'Seller clears goods for export and loads onto vessel. Ideal for buyers with their own nominated freight forwarders.',
        },
        {
          term: 'CIF / CFR',
          fullName: 'Cost, Insurance and Freight',
          description: 'Seller arranges freight and basic maritime cargo insurance up to the agreed destination seaport.',
        },
        {
          term: 'EXW',
          fullName: 'Ex Works',
          description: 'Buyer assumes all transport risks and costs directly from the manufacturing or consolidation warehouse.',
        },
        {
          term: 'CPT / CIP',
          fullName: 'Carriage and Insurance Paid To',
          description: 'Applicable for multimodal container and air freight consignments to designated international airport or inland depot.',
        },
      ],
      qualityTitle: 'Quality Assurance Protocol',
      qualityP1: 'In the electronics and IT sectors, cosmetic expectations and functional reliability can vary significantly between markets. Hamta Tondar Jahan utilizes strict, non-negotiable grading criteria. For refurbished iPhones, devices are audited using industry-standard diagnostic tools to check display authenticity, battery health thresholds, baseband functions, and logic board repair history.',
      qualityP2: 'For fragrance raw materials and hygiene inputs, we supply complete batch-specific Certificates of Analysis (COA) detailing optical rotation, refractive index, purity percentages, and flash points. Samples can be dispatched for laboratory testing prior to commercial container shipping.',
    },

    contactPage: {
      heroKicker: 'Commercial Desk',
      heroTitle: 'Request a Quotation & Contact Us',
      heroDescription: 'Submit an official Request for Quotation (RFQ) or connect directly with our international trading representatives.',
      formTitle: 'Request for Quotation (RFQ)',
      formSubtitle: 'Complete the form below to receive a formal commercial proposal from our procurement team.',
      orgLabel: 'Company / Organization Name *',
      orgPlaceholder: 'e.g. Acme Trading Ltd.',
      contactLabel: 'Contact Person & Title *',
      contactPlaceholder: 'e.g. John Doe, Head of Procurement',
      emailLabel: 'Corporate Email Address *',
      emailPlaceholder: 'e.g. procurement@company.com',
      phoneLabel: 'Direct Phone / WhatsApp Number *',
      phonePlaceholder: 'e.g. +1 555 123 4567 or +98 21 ...',
      sectorLabel: 'Primary Business Sector of Interest *',
      sectorSelectPlaceholder: 'Select a business sector...',
      volumeLabel: 'Estimated Order Volume / Units *',
      volumePlaceholder: 'e.g. 500 units, 2 x 40ft containers, 5 MT',
      incotermLabel: 'Preferred Incoterm',
      incotermPlaceholder: 'e.g. FOB, CIF, EXW, CFR',
      portLabel: 'Destination Port / Country',
      portPlaceholder: 'e.g. Port of Bandar Abbas, Jebel Ali, Hamburg',
      specsLabel: 'Technical Specifications & Commercial Requirements *',
      specsPlaceholder: 'Detail specific product models, acceptable cosmetic grades (Grade A/B), RAM/SSD configurations, CAS numbers for fragrance compounds, or delivery timelines...',
      submitButton: 'Submit Official RFQ',
      submittingButton: 'Transmitting Commercial Inquiry...',
      validationError: 'Please complete all required fields marked with an asterisk (*).',
      successTitle: 'Commercial Inquiry Transmitted Successfully',
      successMessage: 'Your Request for Quotation has been logged into our commercial system. An international trading representative will review your technical requirements and contact you with preliminary pricing or feasibility within 24–48 business hours.',
      successRefLabel: 'Inquiry Reference ID:',
      newInquiryButton: 'Submit Another Inquiry',
      downloadSummary: 'Print / Save RFQ Copy',

      coordinatesTitle: 'Corporate Contact Coordinates',
      coordinatesSubtitle: 'Direct communication channels for institutional clients and supply partners.',
      addressLabel: 'Registered Head Office Address',
      addressValue: '[Building Name / Commercial Tower, Suite 400, Valiasr Avenue / Mirdamad Boulevard]',
      addressNote: 'Tehran, Islamic Republic of Iran (Postal Code: [Placeholder])',
      phoneCoordLabel: 'Commercial Trading Telephones',
      phoneCoordValue: '[+98 21 8800 XXXX] / [+98 21 8800 YYYY]',
      phoneCoordNote: 'Sunday to Thursday: 09:00 - 17:00 (GMT+3:30)',
      emailCoordLabel: 'Commercial Desk Email',
      emailCoordValue: '[info@hamtatondar.com / trade@hamtatondar.com]',
      workingHoursLabel: 'Trading Desk Working Hours',
      workingHoursValue: 'Sunday - Thursday: 09:00 - 17:00 | Saturday: By Appointment',
      partnerHubsLabel: 'Regional Sourcing & Consolidation Points',
      partnerHubsValue: '[International Partner Consolidation Points: Dubai, UAE / Shenzhen, China]',
      placeholderNotice: 'Note: Specific suite numbers, direct extensions, and physical warehouse pickup coordinates are provided to verified commercial buyers upon execution of formal trade inquiries.',
    },

    privacyPage: {
      title: 'Commercial Privacy & Non-Disclosure Policy',
      lastUpdated: 'Effective Date: October 2026',
      intro: 'Hamta Tondar Jahan ("Company", "we", "our") takes commercial confidentiality, client proprietary specifications, and data integrity with the utmost seriousness. This document outlines how commercial communications, RFQ submissions, and trade documentation are handled.',
      sections: [
        {
          heading: '1. Commercial Data Collection & Purpose',
          content: 'We collect company names, authorized representative contact information, destination ports, product technical specifications, and transaction volumes solely for the purpose of evaluating commercial feasibility, preparing official quotations, issuing proforma invoices, and coordinating international customs logistics.',
        },
        {
          heading: '2. Non-Disclosure of Proprietary Sourcing Information',
          content: 'Technical briefs, formula requirements for fragrance inputs, volume distributions, and custom hardware configurations provided by clients are treated as proprietary commercial secrets. We do not sell, rent, or distribute client trade details to third-party marketing brokers.',
        },
        {
          heading: '3. Customs & Regulatory Disclosure',
          content: 'Where required by applicable maritime, aviation, or customs authorities, information contained in bills of lading, packing lists, and commercial invoices will be disclosed strictly to certified customs brokers, freight carriers, and authorized regulatory bodies.',
        },
        {
          heading: '4. Data Retention & Security',
          content: 'Inquiry and transaction records are retained in compliance with standard commercial audit requirements. We utilize modern encryption protocols and administrative safeguards to protect transaction data from unauthorized interception.',
        },
        {
          heading: '5. Inquiries & Contact',
          content: 'For questions regarding commercial confidentiality, mutual Non-Disclosure Agreements (NDAs), or data updates, please contact our legal desk via [legal@hamtatondar.com] or our registered commercial address.',
        },
      ],
    },

    footer: {
      aboutText: 'Hamta Tondar Jahan (همتا تندر جهان) is an international trading company established in 2010. We specialize in cross-border procurement, IT equipment, certified refurbished electronics, fragrance raw materials, and enterprise B2B trade services.',
      quickLinks: 'Navigation',
      sectorsHeading: 'Business Sectors',
      complianceHeading: 'Corporate Information',
      registeredInfo: 'Hamta Tondar Jahan Company · Established 2010 · Reg. No. [Placeholder]',
      allRightsReserved: 'All rights reserved. International Trading & Commercial Sourcing.',
      privacyPolicy: 'Privacy Policy',
      sitemapRobots: 'SEO & Sitemap Inspector',
      placeholderDisclaimer: 'Corporate placeholders will be replaced with verified executive registration data upon corporate publication.',
    },

    seo: {
      home: {
        title: 'Hamta Tondar Jahan | International Trading & Sourcing (Est. 2010)',
        description: 'Hamta Tondar Jahan (همتا تندر جهان) - International trading company established in 2010. Computer hardware, refurbished IT & iPhones, fragrance raw materials, and B2B sourcing.',
        keywords: 'Hamta Tondar Jahan, همتا تندر جهان, international trading, computer hardware import, refurbished laptops, refurbished iPhones wholesale, fragrance raw materials, B2B product sourcing',
      },
      about: {
        title: 'About Hamta Tondar Jahan | Established 2010 Trading Company',
        description: 'Learn about the history, corporate foundation, and international trading principles of Hamta Tondar Jahan, established in 2010.',
        keywords: 'about Hamta Tondar Jahan, history 2010, international trade company, procurement integrity, vendor vetting',
      },
      sectors: {
        title: 'Business Sectors | Hamta Tondar Jahan',
        description: 'Explore our 6 commercial sectors: Technology, Computer Hardware, Refurbished Computers, Used iPhones, Fragrance Raw Materials, and International Sourcing.',
        keywords: 'computer hardware imports, server equipment, refurbished iPhone wholesale, aroma chemicals, cosmetics raw materials, wholesale trade sectors',
      },
      sourcing: {
        title: 'International Sourcing & Trading Framework | Hamta Tondar Jahan',
        description: 'Our 4-phase international procurement methodology, supplier audits, quality testing protocols, and Incoterms 2020 compliance.',
        keywords: 'global sourcing process, supplier audit, FOB CIF trade terms, quality inspection, customs clearance, international logistics',
      },
      contact: {
        title: 'Contact Us & Request a Quotation (RFQ) | Hamta Tondar Jahan',
        description: 'Submit an official Request for Quotation (RFQ) for bulk IT hardware, graded smartphones, fragrance ingredients, or custom international sourcing.',
        keywords: 'request quotation, RFQ trading, wholesale inquiry, Hamta Tondar Jahan contact, Tehran commercial desk',
      },
      privacy: {
        title: 'Privacy Policy & Commercial Confidentiality | Hamta Tondar Jahan',
        description: 'Our commercial privacy policy and non-disclosure standards for international B2B inquiries and trade transactions.',
        keywords: 'commercial privacy, NDA policy, B2B confidentiality, trade documentation security',
      },
    },
  },

  fa: {
    companyName: 'همتا تندر جهان',
    companyNameEn: 'Hamta Tondar Jahan',
    companyNameFa: 'همتا تندر جهان',
    tagline: 'پیوند بازارها، خلق فرصت‌ها (Connecting Markets. Creating Opportunities.)',
    establishedYear: '۱۳۸۹',
    establishedText: 'تأسیس: ۱۳۸۹ (2010)',

    nav: {
      home: 'صفحه اصلی',
      about: 'درباره ما',
      sectors: 'حوزه‌های فعالیت',
      sourcing: 'بازرگانی و تأمین کالا',
      contact: 'تماس و استعلام قیمت',
      privacy: 'سیاست حفظ حریم تجاری',
      requestQuote: 'درخواست استعلام قیمت',
      languageName: 'فارسی',
      switchLang: 'English',
      menu: 'منو',
      close: 'بستن',
    },

    hero: {
      kicker: 'بازرگانی و تجارت بین‌الملل · تأسیس سال ۱۳۸۹ (2010)',
      titleMain: 'ارتباط مستقیم با بازارهای جهانی با',
      titleAccent: 'تأمین دقیق و زنجیره تأمین پایدار',
      description: 'شرکت همتا تندر جهان ارائه‌دهنده خدمات تخصصی صادرات و واردات، تأمین تجهیزات فناوری، سخت‌افزار سرور و رایانه، رایانه‌ها و آیفون‌های کارکرده و بازسازی‌شده (Refurbished)، مواد اولیه اسانس و بهداشتی، و منبع‌یابی تجاری در سطح بین‌المللی است.',
      primaryCta: 'ثبت استعلام رسمی قیمت (RFQ)',
      secondaryCta: 'مشاهده حوزه‌های فعالیت',
      badgeYear: 'تأسیس سال ۱۳۸۹ (2010)',
      metricYearsTrading: '+۱۶ سال',
      metricYearsLabel: 'پیشینه فعالیت بازرگانی (از ۲۰۱۰)',
      metricSectors: '۶ حوزه اصلی',
      metricSectorsLabel: 'پوشش تخصصی زنجیره تأمین',
      metricTradeFocus: 'عمده‌فروشی B2B',
      metricTradeFocusLabel: 'تأمین نهادی و سازمانی',
      metricCompliance: 'تست و کنترل کیفی',
      metricComplianceLabel: 'ارزیابی دقیق پیش از حمل',
    },

    aboutBrief: {
      kicker: 'اصالت و پیشینه شرکتی',
      title: 'بیش از یک دهه و نیم تعهد، اعتبار و شفافیت تجاری',
      p1: 'شرکت همتا تندر جهان در سال ۱۳۸۹ (2010) تأسیس شد و از همان ابتدا فعالیت خود را بر پایه مبادلات بازرگانی قانون‌مند، واردات و صادرات تخصصی و شناسایی منابع معتبر تولیدی در سطح بین‌المللی بنا نهاد.',
      p2: 'رویکرد ما متکی بر ارتباط مستقیم با زنجیره‌های اصلی تأمین، راستی‌آزمایی کیفیت پیش از بارگیری، انطباق کامل با قواعد اینکوترمز و اجرای بی‌نقص تشریفات گمرکی است.',
      readMore: 'مطالعه بیشتر درباره شرکت',
      pillar1Title: 'زنجیره تأمین راستی‌آزمایی‌شده',
      pillar1Desc: 'خرید مستقیم از مبادی معتبر بدون واسطه‌های ناشناخته جهت تضمین اصالت کالا.',
      pillar2Title: 'کنترل کیفی و تست فنی',
      pillar2Desc: 'بررسی سلامت سخت‌افزار، بنچمارک قطعات و آزمایش‌های شیمیایی پیش از ترخیص.',
      pillar3Title: 'انطباق با قواعد اینکوترمز',
      pillar3Desc: 'انعقاد قراردادهای تجاری تحت ضوابط اتاق بازرگانی بین‌المللی (FOB, CIF, CFR, EXW).',
    },

    sectorsSection: {
      kicker: 'توانمندی‌های تجاری',
      title: 'حوزه‌های اصلی فعالیت و تأمین کالا',
      description: 'تأمین عمده و توزیع تخصصی در بخش‌های الکترونیک، تجهیزات سرور و رایانه، تجهیزات دیجیتال استوک و ریفربیشد، مواد اولیه اسانس‌های آرایشی و بهداشتی و خدمات جامع بازرگانی.',
      viewAll: 'مشاهده جزئیات تمام حوزه‌ها',
      inquireSector: 'استعلام این حوزه',
      sectors: [
        {
          id: 'tech-electronics',
          title: 'فناوری و قطعات الکترونیک',
          subtitle: 'تأمین عمده بردهای صنعتی، قطعات الکترونیک و تجهیزات جانبی دیجیتال',
          description: 'واردات و تأمین تجهیزات دیجیتال پرکاربرد، ماژول‌های الکترونیکی، ادوات صوتی و تصویری و ملزومات اداری و صنعتی از معتبرترین مراکز تولیدی جهانی.',
          capabilities: ['خرید عمده قطعات الکترونیکی کارخانه‌ای', 'تأمین اقلام جانبی تجاری و مصرفی', 'مشاوره و پشتیبانی تشریفات واردات قانونی'],
          standards: 'انطباق با استانداردهای کارخانه‌ای CE و RoHS',
          moq: 'حجم‌های تجاری عمده',
        },
        {
          id: 'it-hardware',
          title: 'سخت‌افزار رایانه و تجهیزات شبکه و IT',
          subtitle: 'تأمین سرورهای سازمانی، استوریج، پردازنده‌ها و حافظه‌های تخصصی',
          description: 'تأمین سرورهای رک‌مونت و بلید، سوئیچ‌های شبکه، پردازنده‌های سروری، حافظه‌های RAM مجهز به ECC، و درایوهای ذخیره‌سازی سازمانی (SAS/NVMe) ویژه شرکت‌ها و دیتاسنترها.',
          capabilities: ['سرورهای سازمانی و رک‌شاسی‌های استاندارد', 'پردازنده‌ها و حافظه‌های سازمانی اورجینال', 'آرایه‌های ذخیره‌سازی داده سازمانی'],
          standards: 'تست سلامت سخت‌افزاری و استرس‌تست بنچمارک',
          moq: 'محموله‌های پالت و کانتینری',
        },
        {
          id: 'refurbished-computers',
          title: 'رایانه‌ها و لپ‌تاپ‌های کارکرده و ریفربیشد',
          subtitle: 'لپ‌تاپ‌های سازمانی وارداتی و رایانه‌های رومیزی با گریدبندی استاندارد',
          description: 'خرید عمده لپ‌تاپ‌های تجاری برگشتی از لیزینگ‌های معتبر شرکتی و کیس‌های استوک مینی و تاور. تمامی محموله‌ها تحت تست عیب‌یابی دقیق و تفکیک ظاهری گرید A و B+ قرار می‌گیرند.',
          capabilities: ['لپ‌تاپ‌های تجاری سازمانی تست‌شده', 'کیس‌های مینی و SFF بازسازی‌شده با قطعات سالم', 'گریدبندی ظاهری استاندارد و شفاف'],
          standards: 'تست نرم‌افزاری جامع سلامت هارد، رم و باتری',
          moq: 'سفارش‌های عمده از ۵۰ دستگاه به بالا',
        },
        {
          id: 'refurbished-smartphones',
          title: 'گوشی‌های آیفون و هوشمند کارکرده و ریفربیشد',
          subtitle: 'تأمین عمده آیفون با گریدبندی دقیق، درصد باتری واقعی و استعلام IMEI',
          description: 'تأمین پارت‌های عمده آیفون و گوشی‌های هوشمند پرچمدار در گریدهای مختلف. بازرسی کامل بورد، عدم تعویض قطعات کلیدی، سلامت باتری و استعلام قانونی شناسه سریال و IMEI.',
          capabilities: ['پارت‌های عمده نسل‌های مختلف Apple iPhone', 'دسته‌بندی ظاهری شفاف (Grade A / A- / B)', 'تست سخت‌افزاری تاچ، فیس‌آیدی و سلامت مدار'],
          standards: 'آزمون نرم‌افزاری عیب‌یابی سخت‌افزار و سریال‌نامبر پاک',
          moq: 'پارت‌های عمده از ۱۰۰ دستگاه به بالا',
        },
        {
          id: 'fragrance-raw-materials',
          title: 'مواد اولیه اسانس، عطر و محصولات بهداشتی',
          subtitle: 'اسانس‌های روغنی، ترکیبات آروماتیک و مواد اولیه شوینده‌ها و بهداشتی',
          description: 'واردات مستقیم اسانس‌های طبیعی و سنتتیک، مواد پایه سورفکتانت، ترکیبات معطرکننده صابون و شامپو و پایه‌های فرمولاسیون محصولات مراقبت شخصی با تأییدیه‌های آنالیز آزمایشگاهی.',
          capabilities: ['اسانس‌های باکیفیت بهداشتی و صنعتی', 'مواد شیمیایی مجاز آرایشی و پاک‌کننده', 'تأمین در بشکه‌های استاندارد صنعتی و مخازن IBC'],
          standards: 'ارائه برگه آنالیز کیفی (COA) و برگه اطلاعات ایمنی (MSDS)',
          moq: 'محموله‌های بشکه‌ای و کانتینری',
        },
        {
          id: 'international-sourcing',
          title: 'بازرگانی عمومی و منبع‌یابی بین‌المللی',
          subtitle: 'سورسینگ سفارشی، ممیزی تأمین‌کننده، مدیریت اسناد و پشتیبانی لجستیک',
          description: 'خدمات جامع منبع‌یابی برای سازمان‌ها و بازرگانان: از جستجوی تأمین‌کننده دسته اول، بررسی اسناد ثبتی کارخانه، مذاکره قرارداد و ارسال نمونه تا هماهنگی حمل بین‌المللی و اسناد ترخیص.',
          capabilities: ['ممیزی کارخانه‌ها و راستی‌آزمایی مجوزهای صادرات', 'مذاکره قراردادهای بازرگانی دوزبانه', 'مدیریت اسناد حمل دریایی، هوایی و زمینی'],
          standards: 'انطباق با چارچوب‌های استاندارد اینکوترمز ۲۰۲۰',
          moq: 'قراردادهای تجاری و ارزیابی پروژه‌ای',
        },
      ],
    },

    sourcingOverview: {
      kicker: 'متدولوژی عملیاتی',
      title: 'چارچوب چهار مرحله‌ای سورسینگ و بازرگانی',
      description: 'فرآیندی شفاف، گام‌به‌گام و آزموده‌شده که بر مبنای بیش از ۱۶ سال تجربه تجاری همتا تندر جهان طراحی شده است.',
      steps: [
        {
          stepNumber: '۰۱',
          title: 'تعریف دقیق نیاز و آنالیز مشخصات',
          description: 'بررسی مشخصات فنی کالا، پارت نامبرها، حجم درخواستی، تلورانس گرید، بودجه هدف و زمان‌بندی تحویل مورد انتظار مشتری.',
        },
        {
          stepNumber: '۰۲',
          title: 'ممیزی کارخانه و ارزیابی منشأ',
          description: 'شبکه تجاری ما اصالت تولیدکننده، مجوزهای صادراتی، ظرفیت خروجی خط تولید و سوابق حقوقی فروشنده را بررسی می‌کند.',
        },
        {
          stepNumber: '۰۳',
          title: 'بازرسی فیزیکی و آزمون‌های کیفی (PSI)',
          description: 'قبل از تسویه نهایی، محموله تحت ارزیابی فیزیکی، استرس‌تست‌های سخت‌افزاری یا آزمایش‌های کنترل کیفی آزمایشگاهی قرار می‌گیرد.',
        },
        {
          stepNumber: '۰۴',
          title: 'ترخیص، بارنامه‌نویسی و لجستیک بین‌المللی',
          description: 'تنظیم دقیق اسناد حمل (سیاهه تجاری، پکینگ‌لیست، گواهی مبدأ، بارنامه) و هماهنگی مسیرهای حمل بهینه تا گمرک مقصد.',
        },
      ],
      cta: 'مشاهده جزئیات روش‌های تأمین و اینکوترمز',
    },

    ctaBanner: {
      title: 'آماده گفت‌وگو پیرامون نیازمندی‌های بازرگانی خود هستید؟',
      description: 'چه به دنبال خرید عمده سرور و قطعات IT باشید، چه پارت‌های تفکیک‌شده آیفون‌های ریفربیشد، مواد اولیه اسانس یا سورسینگ اختصاصی کالا، استعلام رسمی خود را برای کارشناسان ما ارسال کنید.',
      button: 'ثبت استعلام رسمی قیمت',
      note: 'بررسی مستقیم توسط دپارتمان بازرگانی خارجی · ارائه پاسخ اولیه ظرف ۲۴ الی ۴۸ ساعت کاری.',
    },

    aboutPage: {
      heroKicker: 'شناسنامه شرکتی · تأسیس ۱۳۸۹',
      heroTitle: 'درباره شرکت همتا تندر جهان',
      heroDescription: 'بیش از یک دهه و نیم حضور مستمر در بازرگانی خارجی، پیوند زنجیره‌های تأمین و تسهیل مبادلات بازرگانی B2B.',
      historyTitle: 'تاریخچه تأسیس و مسیر توسعه',
      historyP1: 'شرکت همتا تندر جهان در سال ۱۳۸۹ به عنوان یک مجموعه تخصصی در زمینه خدمات بازرگانی، واردات و صادرات و منبع‌یابی کالا به ثبت رسید. از نخستین روزهای فعالیت، هدف اصلی ما ایجاد ارتباطی مطمئن و مستقیم میان تولیدکنندگان تراز اول جهان و بنگاه‌های اقتصادی داخلی بود.',
      historyP2: 'با گذشت سال‌ها، دامنه فعالیت شرکت با تمرکز بر نیازهای زیرساختی توسعه یافت؛ از تجهیزات رایانه‌ای پیشرفته و سرورهای دیتاسنتری گرفته تا ورود به بازار ثانویه دستگاه‌های الکترونیکی تست‌شده (لپ‌تاپ‌ها و آیفون‌های ریفربیشد) و واردات مواد اولیه معطر و بهداشتی مورد نیاز کارخانجات صنایع شوینده.',
      historyP3: 'برخلاف واسطه‌های غیرتخصصی، همتا تندر جهان کلیه تعهدات تجاری خود را بر اساس شفافیت کامل اسنادی، ممیزی حضوری یا آزمایشگاهی محموله‌ها و حفظ منافع دوطرفه در قالب قراردادهای حقوقی مستحکم به انجام می‌رساند.',
      foundationYearTitle: 'تأسیس سال ۱۳۸۹ (2010)',
      foundationYearDesc: 'پیشینه تجاری مستمر و فعالیت حرفه‌ای در بازارهای بازرگانی از سال ۲۰۱۰ میلادی.',
      valuesTitle: 'ارزش‌های بنیادین عملیاتی ما',
      values: [
        {
          title: 'صداقت کامل در مشخصات و گریدبندی',
          desc: 'ما مشخصات فنی و گرید ظاهری کالاها را با دقت مطلق اعلام می‌کنیم و هرگز کیفیت اقلام را بالاتر از واقعیت جلوه نمی‌دهیم.',
        },
        {
          title: 'کنترل کیفی موشکافانه',
          desc: 'آزمون سلامت قطعات سخت‌افزاری با ابزارهای استاندارد و تطابق مواد اولیه شیمیایی با آنالیز آزمایشگاهی ارائه‌شده.',
        },
        {
          title: 'انطباق حقوقی و گمرکی',
          desc: 'رعایت کلیه موازین گمرکی، کدهای تعرفه، استانداردهای بازرگانی و رویه‌های بانکی و تبادل ارز.',
        },
        {
          title: 'همکاری پایدار B2B',
          desc: 'هدف ما ایجاد روابط تجاری بلندمدت بر پایه خوش‌حسابی و تحویل منظم کالا است، نه مبادلات کوتاه‌مدت و پراکنده.',
        },
      ],
      complianceTitle: 'تعهد به انضباط و استانداردهای بین‌المللی',
      complianceP1: 'در بازرگانی خارجی، اعتماد از طریق استمرار انضباط حاصل می‌شود. قراردادهای ما کاملاً بر اساس آخرین نگارش قواعد اینکوترمز اتاق بازرگانی بین‌المللی (ICC Incoterms 2020) منعقد می‌گردند تا مرزهای دقیق تعهدات، انتقال ریسک و هزینه‌های حمل کاملاً شفاف و مشخص باشند.',
      complianceP2: 'ما از ادعاهای واهی، درج دفاتر غیرواقعی یا گواهینامه‌های صوری پرهیز می‌کنیم. اعتبار همتا تندر جهان ثمره کالاهای تحویل‌شده در سلامت کامل، بسته‌بندی استاندارد و پایبندی به تعهدات مالی و فنی است.',
    },

    sectorsPage: {
      heroKicker: 'کاتالوگ تخصصی بازرگانی',
      heroTitle: 'حوزه‌های فعالیت و سبدهای کالایی',
      heroDescription: 'بررسی مشخصات فنی شش شاخه تخصصی بازرگانی شرکت، استانداردهای ارزیابی کیفیت، حداقل حجم سفارش و شرایط تجاری.',
      detailedSpecsTitle: 'مشخصات بازرگانی و گستره کالاها',
      commercialTermsTitle: 'اطلاعات لجستیک و شرایط تجاری',
      moqLabel: 'حداقل سفارش (MOQ)',
      incotermsLabel: 'اینکوترمز قابل توافق',
      standardsLabel: 'استانداردهای کنترل کیفی',
      inquireButton: 'ثبت استعلام (RFQ) برای این حوزه',
    },

    sourcingPage: {
      heroKicker: 'فرآیند زنجیره تأمین',
      heroTitle: 'متدولوژی بازرگانی و سورسینگ بین‌المللی',
      heroDescription: 'چگونه همتا تندر جهان فرآیند منبع‌یابی، ممیزی تولیدکننده، اعتبارسنجی کیفیت و لجستیک چندوجهی را با دقت حداکثری به انجام می‌رساند.',
      processTitle: 'چرخه چهار مرحله‌ای تأمین کالا',
      processDescription: 'تمامی سفارش‌های تجاری طبق یک منشور کاری مشخص اجرا می‌گردند تا خطرات مالی و فنی به حداقل برسند.',
      phases: [
        {
          num: 'گام نخست',
          title: 'دریافت تقاضا و بررسی فنی مشخصات',
          desc: 'تدوین مشخصات دقیق کالا، نسل قطعات، تلورانس گرید ظاهری، خلوص شیمیایی، پارت نامبرها و حجم درخواستی خریدار.',
          details: [
            'تکمیل و تأیید ماتریس فنی کالا با کارشناس بازرگانی',
            'بررسی امکان‌سنجی تیراژ و تطابق با زمان‌بندی تحویل',
            'مقایسه قیمت هدف با آخرین نرخ‌های مبادلاتی بازار جهانی',
          ],
        },
        {
          num: 'گام دوم',
          title: 'ممیزی کارخانه و اعتبارسنجی منبع تأمین',
          desc: 'ارتباط مستقیم با کارخانه‌های تولیدکننده اصلی، توزیع‌کنندگان تراز اول یا تأمین‌کنندگان معتبر تجهیزات بازسازی‌شده.',
          details: [
            'استعلام هویت حقوقی، مجوزهای صادرات و گواهی‌های استاندارد تولیدکننده',
            'بررسی ظرفیت خط تولید و یکنواختی بچ‌های تولیدی',
            'بررسی عدم قرارگیری در لیست‌های مسدود و تأیید اصالت برند',
          ],
        },
        {
          num: 'گام سوم',
          title: 'بازرسی فیزیکی پیش از حمل (PSI)',
          desc: 'ارزیابی میدانی و تست‌های عملکردی پیش از آزادسازی پرداخت نهایی و مهروموم کانتینر.',
          details: [
            'استرس‌تست نرم‌افزاری پردازنده، مادربرد و رم در تجهیزات سرور',
            'دسته‌بندی ظاهری و تست سلامت باتری و نمایشگر در آیفون‌های استوک',
            'بررسی آنالیزهای GC-MS و تأییدیه COA برای ترکیبات اسانس و عطر',
          ],
        },
        {
          num: 'گام چهارم',
          title: 'اجرای اینکوترمز و تشریفات حمل و ترخیص',
          desc: 'مدیریت کلیه اسناد بازرگانی خارجی و انتقال کالا از انبار مبدأ تا بندر یا گمرک ورودی کشور.',
          details: [
            'تنظیم سیاهه تجاری (Commercial Invoice)، پکینگ لیست و گواهی مبدأ',
            'اخذ بارنامه دریایی یا هوایی و بررسی شماره پلمب کانتینر',
            'هماهنگی بیمه‌نامه ترانزیت کالا و پشتیبانی تشریفات اظهار گمرکی',
          ],
        },
      ],
      incotermsTitle: 'اصطلاحات تجاری اینکوترمز ۲۰۲۰ (Incoterms®)',
      incotermsDesc: 'ما قراردادهای تجاری را مطابق ترجیح خریدار و نحوه تقسیم ریسک و کرایه حمل تنظیم می‌کنیم.',
      incotermsList: [
        {
          term: 'FOB',
          fullName: 'تحویل روی عرشه کشتی (Free On Board)',
          description: 'فروشنده کالا را از گمرک مبدأ ترخیص و روی کشتی بارگیری می‌کند؛ مناسب خریدارانی که فورواردر حمل اختصاصی دارند.',
        },
        {
          term: 'CIF / CFR',
          fullName: 'هزینه، بیمه و کرایه حمل (Cost, Insurance & Freight)',
          description: 'فروشنده کرایه حمل و بیمه دریایی کالا تا بندر مقصد توافق‌شده را تقبل و سازماندهی می‌کند.',
        },
        {
          term: 'EXW',
          fullName: 'تحویل درب کارخانه (Ex Works)',
          description: 'خریدار تمامی ریسک‌ها و هزینه‌های بارگیری و حمل را مستقیماً از محل انبار تولیدکننده بر عهده می‌گیرد.',
        },
        {
          term: 'CPT / CIP',
          fullName: 'کرایه و بیمه پرداخت‌شده تا مقصد (Carriage & Insurance Paid)',
          description: 'قابل استفاده در حمل‌های هوایی و چندوجهی تا فرودگاه یا پایانه گمرکی داخلی توافق‌شده.',
        },
      ],
      qualityTitle: 'منشور کنترل کیفیت و گریدبندی شفاف',
      qualityP1: 'در حوزه‌های الکترونیک و سخت‌افزارهای IT، شفافیت در معیارهای کارکرد و ظاهر دستگاه حیاتی است. همتا تندر جهان از شیوه‌نامه‌های سخت‌گیرانه گریدبندی استفاده می‌کند. در آیفون‌های استوک و ریفربیشد، تست‌های اتوماتیک تمامی عملکردهای تاچ، حسگرها، دوربین، و درصد سلامت باتری را ثبت و بررسی می‌کنند تا هیچ‌گونه قطعه غیراصلی در پارت‌ها قرار نگیرد.',
      qualityP2: 'در زمینه اسانس‌ها و ترکیبات روغنی و بهداشتی، همراه با هر بچ، برگه‌های رسمی آنالیز کیفی (COA) شامل شاخص شکست نور، چگالی نسبی، درصد خلوص و نقطه اشتعال تقدیم می‌شود و امکان ارسال سمپل برای آزمون در آزمایشگاه معتمد مشتری پیش از خرید بار کانتینری مهیاست.',
    },

    contactPage: {
      heroKicker: 'دپارتمان بازرگانی خارجی',
      heroTitle: 'ثبت استعلام قیمت و ارتباط با ما',
      heroDescription: 'فرم رسمی استعلام قیمت (RFQ) را تکمیل فرمایید تا کارشناسان دپارتمان بازرگانی همتا تندر جهان ظرف کوتاه‌ترین زمان با شما تماس بگیرند.',
      formTitle: 'فرم درخواست استعلام رسمی قیمت (RFQ)',
      formSubtitle: 'لطفاً مشخصات مورد نیاز خود را دقیق ثبت نمایید تا پیش‌فاکتور یا برآورد امکان‌سنجی ارسال گردد.',
      orgLabel: 'نام شرکت یا مجموعه متقاضی *',
      orgPlaceholder: 'مثال: شرکت بازرگانی پارس / توسعه فناوری مهر',
      contactLabel: 'نام و سمت مسئول پیگیری *',
      contactPlaceholder: 'مثال: رضا احمدی، مدیر بازرگانی',
      emailLabel: 'پست الکترونیکی رسمی *',
      emailPlaceholder: 'مثال: trade@company.ir',
      phoneLabel: 'شماره تماس مستقیم یا واتساپ *',
      phonePlaceholder: 'مثال: ۰۹۱۲xxxxxxx یا ۰۲۱xxxxxxxx',
      sectorLabel: 'حوزه کالایی مورد تقاضا *',
      sectorSelectPlaceholder: 'انتخاب حوزه فعالیت...',
      volumeLabel: 'حجم تخمینی سفارش یا تعداد مورد نیاز *',
      volumePlaceholder: 'مثال: ۵۰۰ عدد، ۲ پالت، ۵ تن، ۱ کانتینر ۴۰ فوت',
      incotermLabel: 'شرایط اینکوترمز مد نظر',
      incotermPlaceholder: 'مثال: FOB, CIF بندرعباس, EXW, CFR',
      portLabel: 'بندر یا گمرک مقصد ترخیص',
      portPlaceholder: 'مثال: گمرک شهید رجایی بندرعباس، فرودگاه امام خمینی، جبل علی',
      specsLabel: 'مشخصات فنی دقیق و الزامات تجاری *',
      specsPlaceholder: 'پارت‌نامبرها، مدل‌های دقیق، گرید ظاهری مورد قبول (A/B)، کانفیگ رم و هارد، مشخصات شیمیایی اسانس و بازه زمانی تحویل مد نظر را مرقوم فرمایید...',
      submitButton: 'ارسال رسمی استعلام قیمت',
      submittingButton: 'در حال ارسال اطلاعات استعلام...',
      validationError: 'لطفاً تمامی موارد الزامی ستاره‌دار (*) را تکمیل نمایید.',
      successTitle: 'استعلام تجاری شما با موفقیت ثبت شد',
      successMessage: 'درخواست استعلام قیمت شما در سیستم تجاری همتا تندر جهان ثبت گردید. کارشناسان دپارتمان بازرگانی مشخصات فنی و تجاری ارسالی را بررسی نموده و ظرف ۲۴ الی ۴۸ ساعت کاری با شما ارتباط برقرار خواهند کرد.',
      successRefLabel: 'کد پیگیری استعلام:',
      newInquiryButton: 'ثبت استعلام جدید',
      downloadSummary: 'چاپ / ذخیره نسخه استعلام',

      coordinatesTitle: 'اطلاعات تماس و نشانی شرکت',
      coordinatesSubtitle: 'راه‌های ارتباطی مستقیم با دفتر مرکزی و دپارتمان بازرگانی.',
      addressLabel: 'نشانی دفتر مرکزی شرکت',
      addressValue: '[نام ساختمان / برج تجاری، طبقه ۴، خیابان ولیعصر / بلوار میرداماد]',
      addressNote: 'تهران، جمهوری اسلامی ایران (کد پستی: [جایگزین خواهد شد])',
      phoneCoordLabel: 'تلفن‌های واحد بازرگانی خارجی',
      phoneCoordValue: '[۰۲۱-۸۸۰۰XXXX] / [۰۲۱-۸۸۰۰YYYY]',
      phoneCoordNote: 'شنبه تا چهارشنبه: ۹:۰۰ الی ۱۷:۰۰',
      emailCoordLabel: 'پست الکترونیکی دپارتمان بازرگانی',
      emailCoordValue: '[info@hamtatondar.com / trade@hamtatondar.com]',
      workingHoursLabel: 'ساعات کاری دپارتمان بازرگانی',
      workingHoursValue: 'شنبه تا چهارشنبه: ۰۹:۰۰ الی ۱۷:۰۰ | پنج‌شنبه‌ها: با هماهنگی قبلی',
      partnerHubsLabel: 'مراکز همکار در خارج از کشور',
      partnerHubsValue: '[مراکز هاب تحویل و تجمیع کالا در امارات (دبی) و چین (شنزن)]',
      placeholderNotice: 'یادداشت: جزئیات دقیق طبقات، داخلی‌های تلفنی و هماهنگی بازدید از نمونه‌های بار، پس از احراز هویت اولیه تجاری به مشتریان محترم اعلام خواهد شد.',
    },

    privacyPage: {
      title: 'سیاست حفظ حریم تجاری و عدم افشای اطلاعات',
      lastUpdated: 'تاریخ به‌روزرسانی: مهر ۱۴۰۵ (October 2026)',
      intro: 'شرکت همتا تندر جهان اصل محرمانگی اسناد بازرگانی، فرمولاسیون‌های فنی و مشخصات تجاری مشتریان را سرلوحه منشور کاری خود قرار داده است. در این بخش نحوه حفاظت از اطلاعات دریافتی شرح داده می‌شود.',
      sections: [
        {
          heading: '۱. گردآوری اطلاعات تجاری و هدف از آن',
          content: 'اطلاعاتی نظیر نام شرکت، مشخصات فرد رابط، مشخصات فنی کالای مورد نیاز، بنادر مقصد و حجم مبادلات، صرفاً در راستای برآورد هزینه‌ها، صدور پیش‌فاکتور رسمی، اخذ استعلام نرخ از خطوط کشتیرانی و اجرای تشریفات گمرکی پردازش می‌گردد.',
        },
        {
          heading: '۲. محرمانگی کامل مشخصات سورسینگ و فرمولاسیون',
          content: 'مشخصات فنی اختصاصی خریداران، نیازمندی‌های فرمولاسیون اسانس‌ها و آنالیزهای سفارشی به عنوان اسرار تجاری تلقی می‌گردد. ما هیچ‌یک از این اطلاعات را به اشخاص ثالث، بازاریابان یا شرکت‌های رقیب واگذار نخواهیم کرد.',
        },
        {
          heading: '۳. ارائه اسناد به مراجع قانونی و گمرکی',
          content: 'تنها مواردی که طبق قوانین گمرکی، کشتیرانی یا بانکی بین‌المللی برای صدور بارنامه، پکینگ‌لیست و اظهارنامه گمرکی الزامی است، به کارگزاران رسمی حمل و مراجع ناظر ترخیص ارائه خواهد شد.',
        },
        {
          heading: '۴. امنیت و نگهداری سوابق',
          content: 'سوابق مکاتبات و استعلام‌های بازرگانی با بهره‌گیری از زیرساخت‌های استاندارد الکترونیکی امن نگهداری شده و دسترسی به آن‌ها محدود به پرسنل دپارتمان بازرگانی مربوطه است.',
        },
        {
          heading: '۵. توافق‌نامه رسمی عدم افشا (NDA)',
          content: 'برای قراردادهای کلان و سفارش‌های اختصاصی، شرکت همتا تندر جهان آمادگی دارد پیش از دریافت جزئیات فنی، توافق‌نامه رسمی عدم افشای دوجانبه (Mutual NDA) را با مشتریان حقوقی به امضا برساند.',
        },
      ],
    },

    footer: {
      aboutText: 'شرکت همتا تندر جهان تأسیس سال ۱۳۸۹ (2010)، ارائه‌دهنده خدمات بازرگانی بین‌المللی، واردات و صادرات تخصصی سخت‌افزار IT، تجهیزات ریفربیشد و استوک، مواد اولیه اسانس‌های بهداشتی و سورسینگ تجاری B2B.',
      quickLinks: 'دسترسی سریع',
      sectorsHeading: 'حوزه‌های فعالیت',
      complianceHeading: 'اطلاعات هویتی',
      registeredInfo: 'شرکت همتا تندر جهان · تأسیس ۱۳۸۹ · شماره ثبت: [در حال تکمیل]',
      allRightsReserved: 'تمامی حقوق متعلق به شرکت همتا تندر جهان است. بازرگانی و تأمین کالا.',
      privacyPolicy: 'سیاست حفظ حریم تجاری',
      sitemapRobots: 'بازرس نقشه سایت و سئو',
      placeholderDisclaimer: 'اطلاعات نشان‌دار جایگزین پس از انتشار عمومی با سربرگ ثبتی شرکت تطبیق خواهند یافت.',
    },

    seo: {
      home: {
        title: 'همتا تندر جهان | بازرگانی بین‌المللی و تأمین کالا (تأسیس ۱۳۸۹)',
        description: 'شرکت همتا تندر جهان (تأسیس 2010) - بازرگانی خارجی، واردات سخت‌افزار و سرور، آیفون و لپ‌تاپ‌های ریفربیشد و استوک، مواد اولیه اسانس و خدمات سورسینگ B2B.',
        keywords: 'همتا تندر جهان, بازرگانی بین المللی, واردات قطعات کامپیوتر, لپ تاپ استوک عمده, آیفون استوک ریفربیشد, مواد اولیه اسانس بهداشتی, سورسینگ کالا, تامین B2B',
      },
      about: {
        title: 'درباره ما | شرکت بازرگانی همتا تندر جهان (تأسیس ۱۳۸۹)',
        description: 'آشنایی با تاریخچه، ارزش‌های عملیاتی و اصول انضباط بازرگانی شرکت همتا تندر جهان از سال ۲۰۱۰ تاکنون.',
        keywords: 'درباره همتا تندر جهان, تاریخچه بازرگانی, واردات و صادرات کالا, اصول تامین مطمئن',
      },
      sectors: {
        title: 'حوزه‌های فعالیت و سبد کالا | همتا تندر جهان',
        description: 'بررسی ۶ حوزه تخصصی فعالیت: قطعات الکترونیک، سخت‌افزار سرور و IT، رایانه‌های ریفربیشد، آیفون‌های کارکرده، مواد اولیه اسانس، و بازرگانی عمومی.',
        keywords: 'سخت افزار سرور, آیفون عمده استوک, اسانس های روغنی صنعتی, سورسینگ خارجی',
      },
      sourcing: {
        title: 'فرآیند بازرگانی و سورسینگ کالا | همتا تندر جهان',
        description: 'مراحل چهارگانه منبع‌یابی بین‌المللی، ارزیابی کارخانه‌ها، بازرسی کیفی و انطباق با اینکوترمز ۲۰۲۰ در همتا تندر جهان.',
        keywords: 'مراحل واردات, قواعد اینکوترمز, بازرسی کالا پیش از حمل, ممیزی کارخانه خارجی',
      },
      contact: {
        title: 'تماس با ما و استعلام قیمت (RFQ) | همتا تندر جهان',
        description: 'ثبت استعلام رسمی قیمت خرید عمده سخت‌افزار سرور، آیفون‌های ریفربیشد، مواد اولیه اسانس و سفارش‌های بازرگانی B2B.',
        keywords: 'فرم استعلام قیمت, پیش فاکتور بازرگانی, تماس با همتا تندر جهان, دفتر تهران',
      },
      privacy: {
        title: 'سیاست حفظ حریم تجاری و محرمانگی | همتا تندر جهان',
        description: 'اصول شرکت همتا تندر جهان در حفظ اسرار تجاری، مشخصات کالاها و داده‌های بازرگانی مشتریان.',
        keywords: 'محرمانگی تجاری, قرارداد NDA بازرگانی, حریم خصوصی B2B',
      },
    },
  },
};
