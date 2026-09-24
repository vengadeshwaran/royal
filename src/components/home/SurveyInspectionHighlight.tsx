import React, { useState } from 'react';
import { 
  Compass, 
  Activity, 
  Cpu, 
  Layers, 
  Eye, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';
import { SURVEY_CAPABILITIES } from '../../data/marineData';

interface SurveyInspectionHighlightProps {
  onNavigate: (page: NavigationPage) => void;
}

export const SurveyInspectionHighlight: React.FC<SurveyInspectionHighlightProps> = ({ onNavigate }) => {
  const [selectedSurvey, setSelectedSurvey] = useState(SURVEY_CAPABILITIES[0]);

  return (
    <section className="py-20 bg-white border-b border-[#D9E4EC] relative overflow-hidden">
      {/* Subtle bathymetric background grid */}
      <div className="absolute inset-0 marine-grid-pattern opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            kicker="Geodesy & Subsea Diagnostics"
            title="Hydrographic Survey & Inspection Suite"
            subtitle="IHO Order 1a compliant multi-beam acoustic sounding, side-scan sonar seabed mosaics, and subsea ROV non-destructive testing."
            className="mb-0 max-w-3xl"
          />

          <button
            onClick={() => onNavigate('survey')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4F8A] hover:text-[#062A4D] transition-colors cursor-pointer group"
          >
            <span>Explore All Survey Disciplines</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Survey Capabilities Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Capability Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-[#52606D] font-bold px-1 mb-2">
              Select Acoustic / Subsea Capability:
            </div>

            {SURVEY_CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setSelectedSurvey(cap)}
                className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between group ${
                  selectedSurvey.id === cap.id 
                    ? 'bg-[#062A4D] text-white border-[#062A4D] shadow-md' 
                    : 'bg-[#F5FAFD] hover:bg-[#EAF4FA] text-[#102A43] border-[#D9E4EC]'
                }`}
              >
                <div>
                  <div className={`text-[11px] font-mono uppercase tracking-wider mb-1 ${
                    selectedSurvey.id === cap.id ? 'text-[#0B78B5]' : 'text-[#0B4F8A]'
                  }`}>
                    {cap.type}
                  </div>
                  <div className="font-bold text-sm sm:text-base leading-snug">
                    {cap.title}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ml-3 transition-colors ${
                  selectedSurvey.id === cap.id 
                    ? 'bg-[#0B4F8A] text-white' 
                    : 'bg-white text-[#52606D] border border-[#D9E4EC]'
                }`}>
                  <Compass className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Technical Specification Display & Acoustic Blueprint View (7 cols) */}
          <div className="lg:col-span-7 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 sm:p-8 shadow-sm">
            
            {/* Header of Active Selection */}
            <div className="border-b border-[#D9E4EC] pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B4F8A] bg-[#EAF4FA] px-3 py-1 rounded">
                  {selectedSurvey.type}
                </span>
                <span className="text-xs font-mono font-bold text-[#062A4D] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0B78B5]" />
                  <span>{selectedSurvey.ihoClass}</span>
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#062A4D] mt-2">
                {selectedSurvey.title}
              </h3>

              <p className="text-sm sm:text-base text-[#52606D] mt-3 leading-relaxed">
                {selectedSurvey.description}
              </p>
            </div>

            {/* Equipment Deployed Box */}
            <div className="mt-6 p-4 bg-white border border-[#D9E4EC] rounded-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#062A4D] flex items-center gap-2 mb-1.5">
                <Radio className="w-4 h-4 text-[#0B4F8A]" />
                <span>Standard Sensor & Processing Array:</span>
              </div>
              <div className="text-sm font-mono text-[#102A43] bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                {selectedSurvey.equipment}
              </div>
            </div>

            {/* Certified Deliverables */}
            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                Standard Client Deliverables & Certifications:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSurvey.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#102A43] bg-white p-2.5 rounded border border-[#D9E4EC]">
                    <CheckCircle2 className="w-4 h-4 text-[#0B4F8A] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout & Quick Action */}
            <div className="mt-8 pt-6 border-t border-[#D9E4EC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#52606D] text-center sm:text-left">
                Accredited for National Hydrographic Office (NHO) & Port Trust submission.
              </div>

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
  );
};
