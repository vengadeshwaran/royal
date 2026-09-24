import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Send, 
  FileCheck, 
  Clock, 
  ShieldCheck, 
  UploadCloud 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { CAREER_POSITIONS, COMPANY_INFO } from '../../data/marineData';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(CAREER_POSITIONS[0].id);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cdcNumber: '',
    experienceYears: '3-5 years',
    coverNote: ''
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
              <span>Join Swalf Maritime</span>
              <span className="opacity-40">·</span>
              <span>People & Fleet Crew</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Careers in Marine Engineering
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              Be part of a dynamic team operating heavy cutter suction dredgers, cutting-edge acoustic bathymetric sonars, 
              and turn-key maritime port infrastructure projects across India and international waters.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Working at Swalf */}
      <section className="py-16 border-b border-[#D9E4EC] bg-[#F5FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-[#D9E4EC]">
              <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#062A4D] mb-2">Uncompromised Safety (QHSE)</h3>
              <p className="text-xs text-[#52606D] leading-relaxed">
                We prioritize crew wellbeing with ISO 45001 certified PPE, modern galley and crew quarters, and regular emergency sea survival drills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D9E4EC]">
              <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#062A4D] mb-2">Advanced Marine Machinery</h3>
              <p className="text-xs text-[#52606D] leading-relaxed">
                Work with high-technology hydraulic cutter heads, Caterpillar marine engines, Teledyne multi-beam sonars, and automated spud systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#D9E4EC]">
              <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#062A4D] mb-2">Career Advancement & Sea Time</h3>
              <p className="text-xs text-[#52606D] leading-relaxed">
                Certified sea service time logs for marine engineering officers, dredge operators, and hydrographic surveyors seeking competency certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="Current Fleet & Yard Openings"
            title="Open Opportunities"
            subtitle="Explore active openings for onboard dredge crew, hydrographic field specialists, and yard fabrication personnel."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
            
            {/* Left: Job Openings List (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {CAREER_POSITIONS.map((job) => (
                <div 
                  key={job.id}
                  className={`p-6 rounded-lg border transition-all ${
                    selectedPosition === job.id 
                      ? 'bg-white border-[#0B4F8A] shadow-md ring-1 ring-[#0B4F8A]' 
                      : 'bg-white border-[#D9E4EC] hover:border-[#0B4F8A]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold uppercase text-[#0B4F8A] bg-[#EAF4FA] px-2.5 py-1 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#52606D] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{job.location}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#062A4D]">
                    {job.title}
                  </h3>

                  <p className="text-xs text-[#52606D] mt-2 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#D9E4EC] flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="text-[#102A43]">
                      <span className="font-semibold">Experience: </span>
                      <span>{job.experience}</span>
                    </div>

                    <button
                      onClick={() => setSelectedPosition(job.id)}
                      className="text-xs font-bold text-[#0B4F8A] hover:text-[#062A4D] cursor-pointer"
                    >
                      {selectedPosition === job.id ? '✓ Selected for Application' : 'Select Position'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Working Application Form (5 cols) */}
            <div className="lg:col-span-5 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#062A4D] mb-1">
                Submit Crew / Officer Application
              </h3>
              <p className="text-xs text-[#52606D] mb-6">
                Our Marine HR crew management team will review your credentials and contact shortlisted officers.
              </p>

              {submitted ? (
                <div className="p-6 bg-white border border-[#D9E4EC] rounded-lg text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#062A4D]">Application Transmitted</h4>
                  <p className="text-xs text-[#52606D] leading-relaxed">
                    Thank you for applying to Royal Swalf. Your CV and marine service summary have been routed to our Crewing Department ({COMPANY_INFO.careersEmail}).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#0B4F8A] hover:underline cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#102A43] mb-1">Applying For Position:</label>
                    <select
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                    >
                      {CAREER_POSITIONS.map(p => (
                        <option key={p.id} value={p.id}>{p.title} ({p.location})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#102A43] mb-1">Full Legal Name *</label>
                    <input 
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="e.g., Capt. Rajesh Kumar"
                      className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43] focus:border-[#0B4F8A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@domain.com"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Phone Number *</label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">CDC / CoC Number</label>
                      <input 
                        type="text"
                        value={formData.cdcNumber}
                        onChange={(e) => setFormData({...formData, cdcNumber: e.target.value})}
                        placeholder="e.g., IND-123456"
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Total Marine Experience</label>
                      <select 
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({...formData, experienceYears: e.target.value})}
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      >
                        <option value="1-3 years">1 - 3 Years</option>
                        <option value="3-5 years">3 - 5 Years</option>
                        <option value="5-10 years">5 - 10 Years</option>
                        <option value="10+ years">10+ Years (Senior)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#102A43] mb-1">Vessels Handled / Experience Summary</label>
                    <textarea 
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({...formData, coverNote: e.target.value})}
                      placeholder="Mention dredger models, dredging depth, or survey equipment used..."
                      className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                    />
                  </div>

                  {/* Simulated CV Upload Button */}
                  <div className="p-3 border border-dashed border-[#D9E4EC] rounded bg-white text-center">
                    <UploadCloud className="w-5 h-5 text-[#0B4F8A] mx-auto mb-1" />
                    <span className="text-[11px] text-[#52606D] block">Attach CV / Sea Service Book (PDF, DOCX up to 5MB)</span>
                    <span className="text-[10px] text-[#0B78B5] font-mono mt-0.5 block">File attached: Candidate_Profile_2026.pdf (Simulated)</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold py-3 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application to Marine HR</span>
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
