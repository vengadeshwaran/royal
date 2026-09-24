import React from 'react';
import { Wrench, CheckCircle2, ArrowRight, Settings, ShieldCheck, Compass, GitMerge } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';

interface CustomEngineeringProps {
  onNavigate: (page: NavigationPage) => void;
}

export const CustomEngineering: React.FC<CustomEngineeringProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Marine Engineering Workshop Visual (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#D9E4EC] shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                alt="Precision Marine Machinery Engineering & Cutter Head Fabrication" 
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/80 via-transparent to-transparent"></div>

              {/* Floating technical callout */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded border border-[#D9E4EC] text-[#102A43]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0B4F8A] mb-1">
                  <span>SWALF NAVAL ENGINEERING LAB</span>
                  <span>CAD / FEA VALIDATED</span>
                </div>
                <div className="text-sm font-bold text-[#062A4D]">
                  Custom Strata-Matched Cutter Heads & Slurry Pipeline Optimization
                </div>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute -top-4 -left-4 bg-[#062A4D] text-white p-3 rounded-lg shadow-lg border border-[#0B4F8A]/40 hidden sm:flex items-center gap-3">
              <Settings className="w-5 h-5 text-[#0B78B5] animate-spin-slow" />
              <div>
                <div className="text-xs font-mono font-bold">100% BESPOKE</div>
                <div className="text-[10px] text-[#EAF4FA]/80">Site-Specific Sizing</div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Solutions Narrative & Value Points (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              kicker="Naval Architecture & Turn-Key Fabrication"
              title="Custom Marine & Dredging Solutions"
              subtitle="Every waterway, port basin, and mine tailings lagoon presents distinct geotechnical challenges. We engineer purpose-built vessels when off-the-shelf equipment falls short."
            />

            <div className="space-y-4 text-sm sm:text-base text-[#52606D] leading-relaxed">
              <p>
                From calculating hydro-transport head loss across 3-kilometer discharge lines to reinforcing cutter shafts for basalt and granite dredging, 
                our in-house engineering team designs and fabricates tailored equipment packages built to your exact site requirements.
              </p>
            </div>

            {/* Value Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-[#F5FAFD] p-3.5 rounded-lg border border-[#D9E4EC]">
                <div className="w-8 h-8 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center shrink-0 mt-0.5">
                  <GitMerge className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#062A4D]">Bespoke Pontoon & Draft Optimization</h4>
                  <p className="text-xs text-[#52606D] mt-0.5">
                    Ultra-shallow draft hulls engineered to operate smoothly in water depths as low as 1.0m, or sectional hulls built for low overhead highway bridge clearances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F5FAFD] p-3.5 rounded-lg border border-[#D9E4EC]">
                <div className="w-8 h-8 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#062A4D]">Strata-Specific Cutter Head Metallurgy</h4>
                  <p className="text-xs text-[#52606D] mt-0.5">
                    Specialized crown heads featuring forged alloy pick points for cemented sandstone, serrated chisels for compact clay, or smooth blades for clean quartz sands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F5FAFD] p-3.5 rounded-lg border border-[#D9E4EC]">
                <div className="w-8 h-8 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#062A4D]">Submerged Slurry Pump Retrofits</h4>
                  <p className="text-xs text-[#52606D] mt-0.5">
                    Ladder-mounted submerged dredge pumps eliminating vacuum cavitation, enabling high solid mixture density recovery at water depths down to 35 meters.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-sm px-6 py-3.5 rounded flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
