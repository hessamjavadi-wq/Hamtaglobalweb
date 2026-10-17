export type Language = 'en' | 'fa';

export type PageId = 'home' | 'about' | 'sectors' | 'sourcing' | 'contact' | 'privacy';

export interface SectorItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  procurementSpecs: string[];
  moq: string;
  tradeIncoterms: string[];
}

export interface InquiryFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  sectorId: string;
  estimatedVolume: string;
  targetIncoterm: string;
  destinationPort: string;
  specifications: string;
}

export interface InquirySubmissionReceipt {
  referenceId: string;
  timestamp: string;
  data: InquiryFormData;
}
