import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Anchor, 
  Building2 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_INFO } from '../../data/marineData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    department: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Direct Corporate Access</span>
              <span className="opacity-40">·</span>
              <span>Tender & Technical Desks</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact Royal Swalf
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              Connect with our marine engineers, dredge operations managers, and tender specialists 
              in Mumbai and Chennai for commercial proposals and technical inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Offices & Operations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Office Locations & Departments (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              
              <div>
                <SectionHeader
                  kicker="Operational Hubs & Yards"
                  title="Indian Headquarters & Coastal Base"
                  subtitle="Serving maritime projects across the Arabian Sea, Bay of Bengal, and Indian River basins."
                />
              </div>

              {/* Mumbai Corporate Office */}
              <div className="bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-[#D9E4EC] pb-3">
                  <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#062A4D]">
                      Corporate Registered Office — Mumbai
                    </h3>
                    <div className="text-xs text-[#52606D]">Swalf Immanuel International India Pvt. Ltd.</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#52606D]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                    <span>Swalf Marine Towers, Nariman Point / CBD Belapur, Mumbai, Maharashtra 400021, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0B4F8A] shrink-0" />
                    <span className="font-mono text-[#062A4D] font-semibold">+91 (022) 2756 8920 / +91 98201 44520</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0B4F8A] shrink-0" />
                    <span className="font-mono text-[#0B4F8A]">{COMPANY_INFO.generalEmail}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#0B4F8A] shrink-0" />
                    <span>Mon - Sat: 09:00 - 18:00 IST (24/7 Fleet Emergency Desk Active)</span>
                  </div>
                </div>
              </div>

              {/* Chennai Engineering Yard */}
              <div className="bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-[#D9E4EC] pb-3">
                  <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#062A4D]">
                      Engineering Yard & Marine Operations — Chennai
                    </h3>
                    <div className="text-xs text-[#52606D]">Vessel Staging, Spares Warehouse & Survey Launch Base</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#52606D]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                    <span>Swalf Engineering Yard, Old Mahabalipuram Road (OMR), Chennai, Tamil Nadu 600096, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0B4F8A] shrink-0" />
                    <span className="font-mono text-[#062A4D] font-semibold">+91 (044) 4289 1100 / +91 94440 23180</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0B4F8A] shrink-0" />
                    <span className="font-mono text-[#0B4F8A]">{COMPANY_INFO.supportEmail}</span>
                  </div>
                </div>
              </div>

              {/* Department Direct Routing Strip */}
              <div className="p-4 bg-white border border-[#D9E4EC] rounded-lg text-xs space-y-2">
                <div className="font-bold text-[#062A4D] uppercase tracking-wider text-[11px]">
                  Specialized Tender Desks:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#52606D]">
                  <div>
                    <span className="font-semibold text-[#102A43]">Tenders & Contracts: </span>
                    <span className="font-mono text-[#0B4F8A]">{COMPANY_INFO.tenderEmail}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#102A43]">Equipment Sales: </span>
                    <span className="font-mono text-[#0B4F8A]">{COMPANY_INFO.salesEmail}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Direct Message Form (6 cols) */}
            <div className="lg:col-span-6 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#062A4D] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#52606D] mb-6">
                Please provide your project context and department of interest. We respond within 1 business day.
              </p>

              {submitted ? (
                <div className="p-8 bg-white border border-[#D9E4EC] rounded-lg text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#062A4D]">Message Received</h4>
                  <p className="text-xs text-[#52606D] leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting Royal Swalf. Your inquiry has been routed to our technical desk. 
                    Reference ID: <span className="font-mono font-bold text-[#0B4F8A]">SWALF-MSG-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#0B4F8A] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g., Er. Arvind Mehta"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Organization / Port / Company *</label>
                      <input 
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="e.g., Maritime Board / EPC Contractor"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Official Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@company.com"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Contact Phone / Mobile *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98200 00000"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#102A43] mb-1">Select Department / Subject</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                    >
                      <option value="general">General Corporate Inquiry</option>
                      <option value="dredging">Dredging Contracting & Tenders</option>
                      <option value="equipment">Dredger / Equipment Purchase & Brokerage</option>
                      <option value="survey">Hydrographic & ROV Surveys</option>
                      <option value="spares">Pipes, Floaters & Slurry Pumps</option>
                      <option value="manning">Fleet Chartering & Crew Manning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#102A43] mb-1">Project Details / Message *</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please specify location, target depth, soil type, or equipment requirement..."
                      className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#52606D]">
                    <ShieldCheck className="w-4 h-4 text-[#0B78B5] shrink-0" />
                    <span>Your technical and commercial specifications are held strictly confidential.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold py-3 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message to Royal Swalf</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
