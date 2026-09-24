import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  FileSpreadsheet, 
  Send, 
  ShieldCheck, 
  Ship, 
  Compass, 
  UploadCloud, 
  Printer 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DREDGER_PRODUCTS } from '../../data/marineData';

interface QuotePageProps {
  initialProductId?: string;
  initialServiceId?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({ initialProductId }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [rfqNumber, setRfqNumber] = useState<string>('');

  const [form, setForm] = useState({
    // Step 1: Contact
    fullName: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    country: 'India',
    projectLocation: '',

    // Step 2: Scope
    projectType: 'port',
    requiredService: 'dredging-contract',
    selectedProduct: initialProductId || '',

    // Step 3: Technical
    targetDepth: '',
    expectedVolume: '',
    soilType: 'silt-sand',
    pumpingDistance: '',

    // Step 4: Schedule & Details
    timeline: '1-3 months',
    description: '',
    fileName: ''
  });

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRfq = `RS-RFQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setRfqNumber(generatedRfq);
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
              <span>Tender Desk & Estimation</span>
              <span className="opacity-40">·</span>
              <span>Commercial Proposal</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Request for Quotation (RFQ)
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              Provide project parameters, volume targets, and geotechnical data. 
              Our marine estimation team will analyze equipment availability and deliver a comprehensive commercial proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Wizard Container */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            /* Submission Confirmation Screen */
            <div className="bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-8 sm:p-12 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mx-auto border-2 border-[#0B4F8A]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0B78B5] font-bold">
                  Proposal Request Logged
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062A4D]">
                  RFQ Successfully Generated
                </h2>
                <div className="text-sm font-mono text-[#0B4F8A] font-bold py-1 px-3 bg-white inline-block rounded border border-[#D9E4EC]">
                  Tracking Code: {rfqNumber}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#52606D] max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-[#062A4D]">{form.fullName}</strong>. Your project specification for{' '}
                <strong className="text-[#062A4D]">{form.company || 'your organization'}</strong> has been assigned to our Chief Estimator. 
                A technical review and indicative equipment spread will be issued to <strong className="text-[#062A4D]">{form.email}</strong> within 24–48 hours.
              </p>

              {/* Summary Parameter Snapshot */}
              <div className="max-w-lg mx-auto bg-white p-4 rounded-lg border border-[#D9E4EC] text-left text-xs space-y-2">
                <div className="font-bold text-[#062A4D] border-b border-[#D9E4EC] pb-2">
                  Specification Snapshot:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[#52606D]">
                  <div>Location: <span className="text-[#102A43] font-semibold">{form.projectLocation || 'Unspecified'}</span></div>
                  <div>Service: <span className="text-[#102A43] font-semibold">{form.requiredService}</span></div>
                  <div>Estimated Volume: <span className="text-[#102A43] font-semibold">{form.expectedVolume || 'N/A'}</span></div>
                  <div>Target Depth: <span className="text-[#102A43] font-semibold">{form.targetDepth || 'N/A'}</span></div>
                  <div>Strata: <span className="text-[#102A43] font-semibold">{form.soilType}</span></div>
                  <div>Timeline: <span className="text-[#102A43] font-semibold">{form.timeline}</span></div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="bg-white border border-[#D9E4EC] hover:bg-[#F5FAFD] text-[#062A4D] font-bold text-xs px-5 py-2.5 rounded flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#0B4F8A]" />
                  <span>Print RFQ Record</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-xs px-5 py-2.5 rounded cursor-pointer"
                >
                  Create Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Multi-Step Wizard */
            <div className="bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 sm:p-10 shadow-sm">
              
              {/* Step Progress Bar */}
              <div className="mb-8">
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono font-bold mb-2">
                  <span className={step >= 1 ? 'text-[#0B4F8A]' : 'text-[#52606D]'}>01. Profile</span>
                  <span className={step >= 2 ? 'text-[#0B4F8A]' : 'text-[#52606D]'}>02. Scope</span>
                  <span className={step >= 3 ? 'text-[#0B4F8A]' : 'text-[#52606D]'}>03. Technical</span>
                  <span className={step >= 4 ? 'text-[#0B4F8A]' : 'text-[#52606D]'}>04. Review</span>
                </div>
                <div className="w-full bg-[#D9E4EC] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#0B4F8A] h-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: Organization & Contact */}
                {step === 1 && (
                  <div className="space-y-4 text-xs animate-in fade-in duration-200">
                    <div className="border-b border-[#D9E4EC] pb-3">
                      <h3 className="text-base font-bold text-[#062A4D]">Step 1: Client & Project Location Profile</h3>
                      <p className="text-[#52606D] mt-0.5">Please provide your organization details and project site coordinates.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Full Legal Name *</label>
                        <input 
                          type="text"
                          required
                          value={form.fullName}
                          onChange={(e) => setForm({...form, fullName: e.target.value})}
                          placeholder="e.g., Rajesh Sharma"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Organization / Port Authority / EPC *</label>
                        <input 
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({...form, company: e.target.value})}
                          placeholder="e.g., Gujarat Maritime Board / L&T Infra"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Official Email Address *</label>
                        <input 
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({...form, email: e.target.value})}
                          placeholder="tender@organization.com"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Direct Telephone / Mobile *</label>
                        <input 
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({...form, phone: e.target.value})}
                          placeholder="+91 98200 00000"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Country / Region *</label>
                        <input 
                          type="text"
                          required
                          value={form.country}
                          onChange={(e) => setForm({...form, country: e.target.value})}
                          placeholder="India / UAE / Maldives / Sri Lanka"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Project Site / Port Location *</label>
                        <input 
                          type="text"
                          required
                          value={form.projectLocation}
                          onChange={(e) => setForm({...form, projectLocation: e.target.value})}
                          placeholder="e.g., Kandla Port Berth 4 / NW-1 Farakka"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Scope & Required Solutions */}
                {step === 2 && (
                  <div className="space-y-4 text-xs animate-in fade-in duration-200">
                    <div className="border-b border-[#D9E4EC] pb-3">
                      <h3 className="text-base font-bold text-[#062A4D]">Step 2: Marine Sector & Service Scope</h3>
                      <p className="text-[#52606D] mt-0.5">Select your primary sector and the category of support required.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Sector Environment</label>
                        <select 
                          value={form.projectType}
                          onChange={(e) => setForm({...form, projectType: e.target.value})}
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        >
                          <option value="port">Commercial Port / Harbour / Jetty</option>
                          <option value="inland-river">Inland River / Canal (IWAI)</option>
                          <option value="reservoir-dam">Hydroelectric Dam / Water Reservoir</option>
                          <option value="mining-lagoon">Mining Lagoon / Tailings Pond</option>
                          <option value="coastal-reclamation">Coastal Land Reclamation</option>
                          <option value="shipyard">Shipyard / Dry Dock Basin</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Required Solution Type</label>
                        <select 
                          value={form.requiredService}
                          onChange={(e) => setForm({...form, requiredService: e.target.value})}
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        >
                          <option value="dredging-contract">Turn-Key Dredging Contracting</option>
                          <option value="equipment-purchase">Dredger / Equipment Purchase</option>
                          <option value="survey">Hydrographic & Sonar Survey</option>
                          <option value="spares-pipes">HDPE Slurry Pipes & Floaters Supply</option>
                          <option value="charter-manning">Fleet Charter & Crew Manning</option>
                          <option value="pmc">Project Management Consultancy (PMC)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Specific Equipment Interest (Optional):</label>
                      <select 
                        value={form.selectedProduct}
                        onChange={(e) => setForm({...form, selectedProduct: e.target.value})}
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      >
                        <option value="">-- No specific dredger model pre-selected --</option>
                        {DREDGER_PRODUCTS.map(p => (
                          <option key={p.id} value={p.id}>{p.name} ({p.tagline})</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3: Technical Parameters */}
                {step === 3 && (
                  <div className="space-y-4 text-xs animate-in fade-in duration-200">
                    <div className="border-b border-[#D9E4EC] pb-3">
                      <h3 className="text-base font-bold text-[#062A4D]">Step 3: Geotechnical & Technical Targets</h3>
                      <p className="text-[#52606D] mt-0.5">Estimated volumetric and depth figures enable accurate spread calculations.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Target Dredging Depth (Meters)</label>
                        <input 
                          type="text"
                          value={form.targetDepth}
                          onChange={(e) => setForm({...form, targetDepth: e.target.value})}
                          placeholder="e.g., -14.5m CD"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Expected In-Situ Volume (m³)</label>
                        <input 
                          type="text"
                          value={form.expectedVolume}
                          onChange={(e) => setForm({...form, expectedVolume: e.target.value})}
                          placeholder="e.g., 250,000 m³"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Seabed / Strata Type</label>
                        <select 
                          value={form.soilType}
                          onChange={(e) => setForm({...form, soilType: e.target.value})}
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        >
                          <option value="silt-sand">Loose Silt / Fine Coastal Sand</option>
                          <option value="compact-sand">Dense Compact Sand</option>
                          <option value="stiff-clay">Stiff Marine Clay</option>
                          <option value="gravel-cobbles">Gravel, Cobbles & River Alluvium</option>
                          <option value="weathered-rock">Weathered Sedimentary Rock / Sandstone</option>
                          <option value="dam-sludge">Consolidated Reservoir Sludge</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-[#102A43] mb-1">Discharge Pumping Distance (Meters)</label>
                        <input 
                          type="text"
                          value={form.pumpingDistance}
                          onChange={(e) => setForm({...form, pumpingDistance: e.target.value})}
                          placeholder="e.g., 1,500m to reclamation ground"
                          className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Review & Schedule */}
                {step === 4 && (
                  <div className="space-y-4 text-xs animate-in fade-in duration-200">
                    <div className="border-b border-[#D9E4EC] pb-3">
                      <h3 className="text-base font-bold text-[#062A4D]">Step 4: Timeline & Technical Documentation</h3>
                      <p className="text-[#52606D] mt-0.5">Finalize project schedule and upload borehole or bathymetric reports.</p>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Target Mobilization Timeline</label>
                      <select 
                        value={form.timeline}
                        onChange={(e) => setForm({...form, timeline: e.target.value})}
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      >
                        <option value="Immediate (Under 30 days)">Immediate Mobilization (Under 30 Days)</option>
                        <option value="1-3 months">1 - 3 Months</option>
                        <option value="3-6 months">3 - 6 Months</option>
                        <option value="Budgetary / Tender Stage">Budgetary / Tender Planning Stage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#102A43] mb-1">Project Notes / Strata Details / Site Specifics</label>
                      <textarea 
                        rows={3}
                        value={form.description}
                        onChange={(e) => setForm({...form, description: e.target.value})}
                        placeholder="Mention tidal ranges, overhead clearance, dumping grounds, or tender terms..."
                        className="w-full p-2.5 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43]"
                      />
                    </div>

                    {/* Simulated File Upload Box */}
                    <div className="p-3.5 border border-dashed border-[#D9E4EC] rounded bg-white text-center">
                      <UploadCloud className="w-5 h-5 text-[#0B4F8A] mx-auto mb-1" />
                      <span className="text-[11px] text-[#52606D] block">Attach Geotechnical Borehole Log / Bathymetric Chart (PDF, DWG up to 25MB)</span>
                      <span className="text-[10px] text-[#0B78B5] font-mono mt-0.5 block">File attached: GMB_Borehole_Geotech_Summary.pdf (Simulated)</span>
                    </div>

                    {/* Summary confirmation banner */}
                    <div className="p-3 bg-[#EAF4FA] rounded border border-[#D9E4EC] flex items-center gap-2 text-[11px] text-[#062A4D]">
                      <ShieldCheck className="w-4 h-4 text-[#0B4F8A] shrink-0" />
                      <span>Ready to transmit to Swalf Commercial Estimation Desk. An engineer will review all parameters.</span>
                    </div>
                  </div>
                )}

                {/* Form Nav Buttons */}
                <div className="mt-8 pt-4 border-t border-[#D9E4EC] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 text-xs font-bold text-[#52606D] hover:text-[#062A4D] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Step 0{step - 1}</span>
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-xs px-6 py-2.5 rounded flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Proceed to Step 0{step + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#0B78B5] hover:bg-[#1268A5] text-white font-bold text-xs px-8 py-3 rounded flex items-center gap-2 transition-colors cursor-pointer shadow-sm border border-[#0B78B5]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project RFQ to Swalf Group</span>
                    </button>
                  )}
                </div>

              </form>

            </div>
          )}

        </div>
      </section>
    </div>
  );
};
