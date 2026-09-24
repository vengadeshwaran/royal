import React from 'react';
import { ShieldCheck, Compass, Anchor, ArrowRight, Award, CheckCircle2, Cpu, FileCheck } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';
import { COMPANY_INFO } from '../../data/marineData';

interface TrustIntroProps {
  onNavigate: (page: NavigationPage) => void;
}

export const TrustIntro: React.FC<TrustIntroProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Corporate Profile & Verified Capability (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              kicker="Corporate Overview · Swalf Group"
              title="Integrated Marine Engineering & Dredging Infrastructure"
              subtitle="Specializing in Cutter Suction Dredging, Maritime Equipment Manufacturing, Hydrographic Bathymetry, and Offshore Project Execution."
              coordinates="MUMBAI 18.9220° N, 72.8347° E · CHENNAI 12.9716° N, 80.2435° E"
            />

            <div className="space-y-4 text-base text-[#52606D] leading-relaxed">
              <p>
                <strong className="text-[#102A43]">Royal Swalf</strong> (operating under Swalf Immanuel International India Pvt. Ltd. and the wider Swalf Group) 
                stands at the forefront of Indian maritime infrastructure. We bridge the gap between heavy marine machinery trading and precision field execution, 
                serving major port trusts, maritime boards, national waterway authorities, private infrastructure developers, and international contractors.
              </p>
              <p>
                From deploying heavy-duty stationary cutter suction dredgers in tidal approach channels to executing millimeter-accurate multi-beam bathymetric soundings, 
                our dual operating model provides end-to-end assurance. Every dredger, pipeline system, and survey vessel is engineered to withstand abrasive tropical sands, 
                heavy siltation, and rigorous round-the-clock duty cycles.
              </p>
            </div>

            {/* Verified capability pill-free checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#102A43]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B4F8A] mt-0.5 shrink-0" />
                <span>Stationary & Amphibious Cutter Suction Dredgers</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B4F8A] mt-0.5 shrink-0" />
                <span>IHO S-44 Compliant Multi-Beam Bathymetry</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B4F8A] mt-0.5 shrink-0" />
                <span>Abrasion-Resistant HDPE Slurry Pipelines & Floaters</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0B4F8A] mt-0.5 shrink-0" />
                <span>Certified Marine Crew, Dredge Masters & Marine Surveyors</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={() => onNavigate('about')}
                className="text-[#0B4F8A] hover:text-[#062A4D] font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer group"
              >
                <span>Read Full Corporate Profile & Heritage</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="text-[#52606D] hover:text-[#102A43] font-semibold text-sm transition-colors cursor-pointer"
              >
                Contact Headquarters
              </button>
            </div>
          </div>

          {/* Right Side: Engineering Visual Showcase & Trust Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-[#D9E4EC] shadow-md group">
              <img 
                src="https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80" 
                alt="Marine Engineering and Dredger Assembly" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/90 via-[#062A4D]/30 to-transparent"></div>
              
              {/* Overlay engineering annotation */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-mono tracking-widest text-[#EAF4FA] uppercase">
                  Dredging Spread Mobilization
                </div>
                <div className="text-base font-bold mt-1">
                  High-Productivity Heavy Slurry Transport
                </div>
                <div className="text-xs text-[#EAF4FA]/80 mt-0.5">
                  Engineered for Indian maritime coastal & inland conditions
                </div>
              </div>
            </div>

            {/* Key Capability Grid Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg">
                <div className="flex items-center gap-2 text-[#0B4F8A] mb-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Quality Systems</span>
                </div>
                <div className="text-base font-bold text-[#062A4D]">ISO 9001:2015</div>
                <div className="text-xs text-[#52606D] mt-1">Certified QHSE management for marine contracting</div>
              </div>

              <div className="p-4 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg">
                <div className="flex items-center gap-2 text-[#0B4F8A] mb-1.5">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Acoustic Sonar</span>
                </div>
                <div className="text-base font-bold text-[#062A4D]">IHO Order 1a</div>
                <div className="text-xs text-[#52606D] mt-1">Special Order multi-beam volume audits</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
