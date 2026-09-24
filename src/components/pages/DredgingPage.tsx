import React from 'react';
import { 
  Ship, 
  Layers, 
  Waves, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Anchor, 
  Compass, 
  Cpu, 
  PhoneCall 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';

interface DredgingPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const DredgingPage: React.FC<DredgingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Turn-Key Marine Contracting</span>
              <span className="opacity-40">·</span>
              <span>Dredging Division</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Capital & Maintenance Dredging Services
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              High-production stationary cutter suction dredging, port approach channel deepening, 
              inland national waterway clearing, and deep reservoir desilting across India and international waters.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Methodology */}
      <section className="py-20 border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                kicker="Engineering Execution & Fleet Management"
                title="Dredging Precision Under Complex Conditions"
                subtitle="Tackling compact marine strata, high siltation accretion rates, and tight navigational berths with zero interruption to commercial ship traffic."
              />

              <div className="space-y-4 text-base text-[#52606D] leading-relaxed">
                <p>
                  As an established Indian marine engineering contractor, Royal Swalf deploys heavy-duty cutter suction dredgers (CSD) 
                  capable of pumping slurry up to 3,500 meters without external booster stations. 
                  Our operations are monitored in real time using RTK-DGPS cutter head visualization software, 
                  ensuring exact design depths and eliminating costly over-dredging or under-dredging.
                </p>
                <p>
                  Whether working in the high tidal variations of the Gulf of Khambhat, the deep draft requirements of Western and Eastern coast ports, 
                  or the shallow navigational shoals along National Waterways 1, 2, and 4, our marine spreads are engineered for continuous 24/7 duty cycles.
                </p>
              </div>

              {/* Strata Handled Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                  Geological Strata & Soil Formations Dredged:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                    <span className="font-bold text-[#062A4D] block">Fluid Mud & Silt</span>
                    <span className="text-[#52606D]">Berth pockets & river deltas</span>
                  </div>
                  <div className="p-3 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                    <span className="font-bold text-[#062A4D] block">Compacted Fine Sand</span>
                    <span className="text-[#52606D]">Approach channels & bars</span>
                  </div>
                  <div className="p-3 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                    <span className="font-bold text-[#062A4D] block">Stiff Marine Clay</span>
                    <span className="text-[#52606D]">Capital port basin deepening</span>
                  </div>
                  <div className="p-3 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                    <span className="font-bold text-[#062A4D] block">Gravel & Pebbles</span>
                    <span className="text-[#52606D]">River training & alluvial beds</span>
                  </div>
                  <div className="p-3 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                    <span className="font-bold text-[#062A4D] block">Weathered Rock</span>
                    <span className="text-[#52606D]">Pick-point cutter chisels</span>
                  </div>
                  <div className="p-3 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                    <span className="font-bold text-[#062A4D] block">Reservoir Sludge</span>
                    <span className="text-[#52606D]">Deep-suction submerged pumps</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-lg overflow-hidden border border-[#D9E4EC] shadow-md bg-[#062A4D]">
                <img 
                  src="/images/1544620347-c4fd4a3d5957.jpg" 
                  alt="Stationary Cutter Suction Dredger in Harbor"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 text-white">
                  <div className="text-xs font-mono text-[#0B78B5] uppercase font-bold">Equipment Spread</div>
                  <div className="text-base font-bold mt-1">CSD 500 Deep-Sea Dredging Spread</div>
                  <p className="text-xs text-[#EAF4FA]/80 mt-2 leading-relaxed">
                    Equipped with twin 19m spuds, 180 kW hydraulic cutter head, Cr27 slurry pump, and real-time cutter profile automation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 6 Core Dredging Operations */}
      <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="Comprehensive Scope of Work"
            title="Dredging Operational Disciplines"
            subtitle="Full-scope contracting capabilities executed in accordance with Indian Ministry of Ports, Shipping & Waterways guidelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            
            {/* 1. Capital Dredging */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-[#062A4D] mb-2">Capital Port Dredging</h3>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Excavating previously undisturbed virgin seabed to achieve new draft depths for LNG berths, container terminals, and dry docks.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[#102A43]">
                  <li>• High-torque rock cutter heads</li>
                  <li>• Depth creation down to 18.0+ meters</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[11px] font-mono text-[#0B78B5]">
                Target: Major & Non-Major Ports
              </div>
            </div>

            {/* 2. Maintenance Dredging */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-[#062A4D] mb-2">Port Maintenance Desilting</h3>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Continuous removal of monsoon sedimentation deposits along entrance channels, turning basins, and commercial berth pockets.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[#102A43]">
                  <li>• Round-the-clock 24/7 production</li>
                  <li>• Submerged sink pipeline fairways</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[11px] font-mono text-[#0B78B5]">
                Target: Shipping Fairways
              </div>
            </div>

            {/* 3. National Waterways */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-[#062A4D] mb-2">Inland River & Waterways (IWAI)</h3>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Maintaining Least Available Depth (LAD) across national rivers to enable safe inland cargo barge traffic and ferry operations.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[#102A43]">
                  <li>• Shallow-draft road-transportable CSDs</li>
                  <li>• River training & geotube bank fill</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[11px] font-mono text-[#0B78B5]">
                Target: National Waterways NW-1, 2, 4
              </div>
            </div>

            {/* 4. Dam Desilting */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm mb-4">
                  04
                </div>
                <h3 className="text-base font-bold text-[#062A4D] mb-2">Reservoir & Dam Desilting</h3>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Extracting fine consolidated silt down to 35 meters to restore water holding capacity without draining the reservoir or disrupting power.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[#102A43]">
                  <li>• Submerged deep slurry pumps</li>
                  <li>• Environmental turbidity shrouds</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[11px] font-mono text-[#0B78B5]">
                Target: Hydro Dams & Water Reservoirs
              </div>
            </div>

            {/* 5. Coastal Reclamation */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm mb-4">
                  05
                </div>
                <h3 className="text-base font-bold text-[#062A4D] mb-2">Coastal Reclamation & Engineered Fill</h3>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Borrow pit marine sand excavation and long-distance hydraulic pumping for creating new port land and coastal protection embankments.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[#102A43]">
                  <li>• Up to 3.5 km discharge spreads</li>
                  <li>• Polyethylene floaters & sink lines</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[11px] font-mono text-[#0B78B5]">
                Target: Port Expansion & Land Creation
              </div>
            </div>

            {/* 6. Environmental Sludge */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm mb-4">
                  06
                </div>
                <h3 className="text-base font-bold text-[#062A4D] mb-2">Environmental Sludge Remediation</h3>
                <p className="text-xs text-[#52606D] leading-relaxed">
                  Precision removal of industrial mine tailings, contaminated organic sediments, and toxic sludge from municipal lakes.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[#102A43]">
                  <li>• Horizontal auger dredgers</li>
                  <li>• Geotextile dewatering bags</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[11px] font-mono text-[#0B78B5]">
                Target: Mine Tailings & Industrial Lagoons
              </div>
            </div>

          </div>

          {/* Quick Tender RFQ Action */}
          <div className="mt-12 bg-[#062A4D] text-white rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <h4 className="text-lg font-bold">Have a Dredging Tender or Port Project Under Preparation?</h4>
              <p className="text-xs text-[#EAF4FA]/80 mt-1">
                Our estimation team will review your geotechnical boreholes and calculate production schedules.
              </p>
            </div>
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#0B78B5] hover:bg-[#1268A5] text-white font-bold text-xs px-6 py-3 rounded transition-colors cursor-pointer shrink-0"
            >
              Submit Dredging RFQ
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
