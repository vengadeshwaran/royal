import React, { useState } from 'react';
import { 
  Compass, 
  Activity, 
  Cpu, 
  Layers, 
  Radio, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2, 
  Eye,
  Sliders
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { SURVEY_CAPABILITIES } from '../../data/marineData';
import { NavigationPage } from '../../types/marine';

interface SurveyPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const SurveyPage: React.FC<SurveyPageProps> = ({ onNavigate }) => {
  const [activeCap, setActiveCap] = useState(SURVEY_CAPABILITIES[0]);

  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Hydrographic Geomatics & Subsea Robotics</span>
              <span className="opacity-40">·</span>
              <span>Survey Division</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Hydrographic, Sonar & ROV Surveys
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              IHO Order 1a bathymetric mapping, side-scan sonar seafloor imaging, sub-bottom seismic profiling, 
              and subsea ROV video inspection for ports, offshore channels, and river waterways.
            </p>
          </div>
        </div>
      </section>

      {/* Survey Capabilities Interactive Deep-Dive */}
      <section className="py-20 border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="Geodetic Precision & Acoustic Imaging"
            title="Survey Capabilities & Sensors"
            subtitle="Employing cutting-edge dual-frequency multibeam sonars, motion sensors, and ROV inspection systems."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
            
            {/* Left Column: Capability Selector Tabs (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              {SURVEY_CAPABILITIES.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveCap(cap)}
                  className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    activeCap.id === cap.id
                      ? 'bg-[#062A4D] text-white border-[#062A4D] shadow-sm'
                      : 'bg-[#F5FAFD] hover:bg-[#EAF4FA] text-[#102A43] border-[#D9E4EC]'
                  }`}
                >
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider font-bold mb-1 ${
                      activeCap.id === cap.id ? 'text-[#0B78B5]' : 'text-[#0B4F8A]'
                    }`}>
                      {cap.type}
                    </div>
                    <div className="font-bold text-sm leading-snug">
                      {cap.title}
                    </div>
                  </div>
                  <Compass className={`w-4 h-4 ml-2 shrink-0 ${activeCap.id === cap.id ? 'text-[#0B78B5]' : 'text-[#52606D]'}`} />
                </button>
              ))}
            </div>

            {/* Right Column: In-depth Technical Spec Sheet (8 cols) */}
            <div className="lg:col-span-8 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-[#D9E4EC] pb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#0B4F8A] bg-[#EAF4FA] px-2.5 py-1 rounded">
                    {activeCap.type}
                  </span>
                  <h3 className="text-2xl font-bold text-[#062A4D] mt-2">
                    {activeCap.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#062A4D] bg-white px-3 py-1.5 rounded border border-[#D9E4EC]">
                  <ShieldCheck className="w-4 h-4 text-[#0B78B5]" />
                  <span>{activeCap.ihoClass}</span>
                </div>
              </div>

              <p className="text-sm text-[#52606D] leading-relaxed">
                {activeCap.description}
              </p>

              {/* Hardware & Sensor Spread */}
              <div className="bg-white border border-[#D9E4EC] rounded-md p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#062A4D] flex items-center gap-2 mb-1.5">
                  <Radio className="w-4 h-4 text-[#0B4F8A]" />
                  <span>Primary Sensor & Positioning Array:</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#102A43] bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                  {activeCap.equipment}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                  Certified Deliverables for Port Trust & Contractor Submission:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCap.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-3 rounded border border-[#D9E4EC] text-xs text-[#102A43]">
                      <CheckCircle2 className="w-4 h-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Mobilization Button */}
              <div className="pt-4 border-t border-[#D9E4EC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#52606D]">
                  Survey vessels mobilizable within 48-72 hours across Indian ports.
                </span>

                <button
                  onClick={() => onNavigate('quote')}
                  className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-xs px-5 py-2.5 rounded transition-colors cursor-pointer shrink-0"
                >
                  Request Survey Mobilization Quote
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Underwater Inspection & Hull Cleaning Sub-Section */}
      <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <SectionHeader
                kicker="Subsea Visual & Non-Destructive Testing"
                title="ROV Inspections & Commercial Diving"
                subtitle="Deploying high-definition micro-ROVs and certified commercial divers for jetty pile audits, sea chest cleaning, and propeller super-polishing."
              />

              <div className="space-y-3 text-sm text-[#52606D] leading-relaxed">
                <p>
                  Underwater structures such as wharf pile jackets, intake screens, and ship hulls require meticulous, 
                  certified non-destructive examination. Royal Swalf provides observation-class ROVs equipped with 4K UHD video, 
                  acoustic imaging sonars for zero-visibility water, and Cygnus subsea ultrasonic thickness gauges.
                </p>
                <p>
                  Our commercial diving teams carry out In-Water Survey in Lieu of Drydocking (UWILD) for ship classification societies 
                  (DNV, IRS, ABS, BV), reducing vessel downtime and drydock expense.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102A43] pt-2">
                <div className="p-2.5 bg-white rounded border border-[#D9E4EC]">
                  • 4K Video Logging with Depth Stamp
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D9E4EC]">
                  • Ultrasonic Metal Thickness Gauging
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D9E4EC]">
                  • Propeller Super-Polishing (Rupert Scale A)
                </div>
                <div className="p-2.5 bg-white rounded border border-[#D9E4EC]">
                  • Jetty Piling Scour & Concrete Jacketing
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-[#D9E4EC] shadow-md bg-[#062A4D]">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" 
                  alt="Subsea Inspection & ROV Operations"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 text-white">
                  <div className="text-xs font-mono text-[#0B78B5] uppercase font-bold">Subsea Robotics</div>
                  <div className="text-base font-bold mt-1">High-Definition ROV Inspection Spread</div>
                  <p className="text-xs text-[#EAF4FA]/80 mt-1">
                    Operating in restricted intake channels, deep dam headworks, and hazardous marine zones.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
