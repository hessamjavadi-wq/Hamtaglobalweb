import React, { useState } from 'react';
import { Language, InquiryFormData, InquirySubmissionReceipt } from '../types';
import { translations } from '../translations';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Printer,
  RotateCcw,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
} from 'lucide-react';

interface ContactPageProps {
  lang: Language;
  preselectedSectorId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  preselectedSectorId = '',
}) => {
  const t = translations[lang];
  const isFa = lang === 'fa';

  const [formData, setFormData] = useState<InquiryFormData>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    sectorId: preselectedSectorId || 'it-hardware',
    estimatedVolume: '',
    targetIncoterm: 'FOB',
    destinationPort: '',
    specifications: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [receipt, setReceipt] = useState<InquirySubmissionReceipt | null>(null);

  const sectorOptions = t.sectorsSection.sectors;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.organizationName.trim() ||
      !formData.contactPerson.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.sectorId ||
      !formData.estimatedVolume.trim() ||
      !formData.specifications.trim()
    ) {
      setErrorMessage(t.contactPage.validationError);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(
        lang === 'fa'
          ? 'لطفاً یک آدرس ایمیل معتبر سازمانی وارد نمایید.'
          : 'Please provide a valid corporate email address.'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable async commercial server dispatch
    setTimeout(() => {
      const generatedRef = `HTJ-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const submissionReceipt: InquirySubmissionReceipt = {
        referenceId: generatedRef,
        timestamp: new Date().toISOString(),
        data: { ...formData },
      };

      setReceipt(submissionReceipt);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setReceipt(null);
    setFormData({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      sectorId: 'it-hardware',
      estimatedVolume: '',
      targetIncoterm: 'FOB',
      destinationPort: '',
      specifications: '',
    });
    setErrorMessage('');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-14 pb-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
            {t.contactPage.heroKicker}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contactPage.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {t.contactPage.heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Main Content: Form & Coordinates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Quotation Request Form / Success State */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            {!receipt ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {t.contactPage.formTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {t.contactPage.formSubtitle}
                  </p>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2.5 p-3.5 bg-red-950/40 border border-red-800/80 rounded-lg text-xs text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Grid 1: Org & Contact Person */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.orgLabel}
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder={t.contactPage.orgPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.contactLabel}
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder={t.contactPage.contactPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Grid 2: Corporate Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contactPage.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                      required
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.phoneLabel}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contactPage.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                      required
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Sector Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    {t.contactPage.sectorLabel}
                  </label>
                  <select
                    name="sectorId"
                    value={formData.sectorId}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                  >
                    {sectorOptions.map((sec) => (
                      <option key={sec.id} value={sec.id}>
                        {sec.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid 3: Volume & Target Incoterm */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1 space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.volumeLabel}
                    </label>
                    <input
                      type="text"
                      name="estimatedVolume"
                      value={formData.estimatedVolume}
                      onChange={handleChange}
                      placeholder={t.contactPage.volumePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.incotermLabel}
                    </label>
                    <select
                      name="targetIncoterm"
                      value={formData.targetIncoterm}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
                    >
                      <option value="FOB">FOB (Free On Board)</option>
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="EXW">EXW (Ex Works)</option>
                      <option value="CIP">CIP / CPT (Carriage Paid)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {t.contactPage.portLabel}
                    </label>
                    <input
                      type="text"
                      name="destinationPort"
                      value={formData.destinationPort}
                      onChange={handleChange}
                      placeholder={t.contactPage.portPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                {/* Technical Specifications & Requirements */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    {t.contactPage.specsLabel}
                  </label>
                  <textarea
                    name="specifications"
                    rows={4}
                    value={formData.specifications}
                    onChange={handleChange}
                    placeholder={t.contactPage.specsPlaceholder}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors resize-y"
                    required
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-slate-950 bg-[#C5A880] hover:bg-[#D5B890] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>{t.contactPage.submittingButton}</span>
                      </>
                    ) : (
                      <>
                        <Send className={`w-4 h-4 ${isFa ? 'rotate-180' : ''}`} />
                        <span>{t.contactPage.submitButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Receipt View */
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center gap-3 p-4 bg-emerald-950/40 border border-emerald-800/80 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {t.contactPage.successTitle}
                    </h3>
                    <p className="text-xs text-emerald-200 mt-0.5">
                      {t.contactPage.successMessage}
                    </p>
                  </div>
                </div>

                {/* Printable RFQ Summary Slip */}
                <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-slate-400">{t.contactPage.successRefLabel}</span>
                    <span className="text-sm font-bold text-[#C5A880]">{receipt.referenceId}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-slate-300">
                    <div>
                      <span className="text-slate-500 block">Company:</span>
                      <span className="font-sans font-semibold">{receipt.data.organizationName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Contact:</span>
                      <span className="font-sans font-semibold">{receipt.data.contactPerson}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Sector:</span>
                      <span className="font-sans font-semibold">
                        {sectorOptions.find((s) => s.id === receipt.data.sectorId)?.title || receipt.data.sectorId}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Volume & Term:</span>
                      <span className="font-sans font-semibold">
                        {receipt.data.estimatedVolume} · {receipt.data.targetIncoterm}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-slate-500 block">Specifications:</span>
                    <p className="font-sans text-slate-300 mt-1 line-clamp-3">
                      {receipt.data.specifications}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-[#C5A880]" />
                    <span>{t.contactPage.downloadSummary}</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-teal-400" />
                    <span>{t.contactPage.newInquiryButton}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Verified Corporate Coordinates & Editable Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                  <Building className="w-3.5 h-3.5" />
                  <span>{t.contactPage.coordinatesTitle}</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Hamta Tondar Jahan (همتا تندر جهان)
                </h3>
                <p className="text-xs text-slate-400">
                  {t.contactPage.coordinatesSubtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
                {/* Registered Address */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-slate-200">
                    <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{t.contactPage.addressLabel}</span>
                  </div>
                  <div className="ps-6 text-slate-400">
                    <p>{t.contactPage.addressValue}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{t.contactPage.addressNote}</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-slate-200">
                    <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{t.contactPage.phoneCoordLabel}</span>
                  </div>
                  <div className="ps-6 text-slate-400" dir="ltr">
                    <p>{t.contactPage.phoneCoordValue}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5" dir={isFa ? 'rtl' : 'ltr'}>
                      {t.contactPage.phoneCoordNote}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-slate-200">
                    <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{t.contactPage.emailCoordLabel}</span>
                  </div>
                  <div className="ps-6 text-slate-400" dir="ltr">
                    <p>{t.contactPage.emailCoordValue}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-slate-200">
                    <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{t.contactPage.workingHoursLabel}</span>
                  </div>
                  <div className="ps-6 text-slate-400">
                    <p>{t.contactPage.workingHoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Editable Placeholder Transparency Callout */}
              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-[11px] text-slate-400 leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#C5A880] font-semibold mb-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isFa ? 'یادداشت اداری' : 'Commercial Note'}</span>
                </div>
                <span>{t.contactPage.placeholderNotice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
