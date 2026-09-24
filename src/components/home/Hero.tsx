import React from 'react';
import { ArrowRight, FileText, Anchor, Compass, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';
import { NavigationPage } from '../../types/marine';

interface HeroProps {
  onNavigate: (page: NavigationPage, params?: { productId?: string; serviceId?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#062A4D] text-white overflow-hidden">
      {/* Background Photography with Deep Corporate Blue Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/1544620347-c4fd4a3d5957.jpg" 
          alt="Heavy Industrial Marine Dredger Operation at Sea" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000 ease-out"
        />
        {/* Navy Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062A4D] via-[#062A4D]/90 to-[#0B4F8A]/75"></div>
        {/* Subtle engineering grid */}
        <div className="absolute inset-0 marine-grid-dark opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Engineering Badge / Coordinates kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#0B4F8A]/70 border border-[#1268A5]/60 text-xs font-mono tracking-wider text-[#EAF4FA]">
              <span className="w-2 h-2 rounded-full bg-[#0B78B5] animate-pulse"></span>
              <span>ROYAL SWALF MARITIME · INDIA & INTERNATIONAL</span>
              <span className="opacity-40">|</span>
              <span>EST. 2010</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Engineering Marine Solutions.{' '}
              <span className="text-[#EAF4FA] block font-light">
                Built for Challenging Waters.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-[#EAF4FA]/90 max-w-2xl leading-relaxed font-normal">
              Premier Indian marine engineering enterprise delivering high-efficiency Cutter Suction Dredgers, 
              capital and maintenance dredging contracting, hydrographic bathymetric surveys, and turn-key maritime project support.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('quote')}
                className="bg-[#0B78B5] hover:bg-[#1268A5] text-white text-base font-bold px-7 py-3.5 rounded shadow-lg flex items-center gap-2.5 transition-all cursor-pointer border border-[#0B78B5]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-6 py-3.5 rounded border border-white/30 backdrop-blur-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Fleet & Equipment</span>
                <ChevronRight className="w-4 h-4 text-[#EAF4FA]" />
              </button>
            </div>

            {/* Trust bullet markers */}
            <div className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#EAF4FA]/80 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0B78B5]" />
                <span>IRS & IACS Class Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#0B78B5]" />
                <span>IHO S-44 Survey Order 1a</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Anchor className="w-4 h-4 text-[#0B78B5]" />
                <span>Pan-India Port & River Deployment</span>
              </div>
            </div>

          </div>

          {/* Quick Marine Operations Spec Card (4 Columns) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#0B4F8A]/40 backdrop-blur-md border border-[#1268A5]/50 rounded-lg p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#EAF4FA]/70 font-mono">Operations Fleet</div>
                  <div className="text-lg font-bold text-white">Swalf Dredging Spreads</div>
                </div>
                <div className="w-9 h-9 rounded bg-[#062A4D] flex items-center justify-center text-[#0B78B5] border border-[#1268A5]/40">
                  <Anchor className="w-5 h-5" />
                </div>
              </div>

              {/* Technical metrics */}
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#EAF4FA]/80">Discharge Capacities</span>
                  <span className="font-mono font-bold text-white">350mm to 650mm</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#EAF4FA]/80">Max Dredging Depth</span>
                  <span className="font-mono font-bold text-white">Up to 35.0 Meters</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#EAF4FA]/80">Discharge Distances</span>
                  <span className="font-mono font-bold text-white">Up to 3,500m (w/ Booster)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#EAF4FA]/80">Bathymetric Precision</span>
                  <span className="font-mono font-bold text-white">Multi-beam IHO Order 1a</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[#EAF4FA]/80">Mobilization Readiness</span>
                  <span className="font-mono font-bold text-white">Road & Towable Spreads</span>
                </div>
              </div>

              {/* Direct Tender Desk Callout */}
              <div className="pt-2 border-t border-white/15">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full text-center bg-white text-[#062A4D] hover:bg-[#EAF4FA] font-bold py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#0B4F8A]" />
                  <span>Connect with Marine Engineer</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Engineering Stats Ribbon */}
      <div className="relative z-10 border-t border-[#0B4F8A]/40 bg-[#062A4D]/95 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="border-l-2 border-[#0B78B5] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">14+</div>
            <div className="text-xs uppercase tracking-wider text-[#EAF4FA]/80 mt-1 font-medium">
              Years Marine Track Record
            </div>
          </div>
          <div className="border-l-2 border-[#0B78B5] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">350 - 650 mm</div>
            <div className="text-xs uppercase tracking-wider text-[#EAF4FA]/80 mt-1 font-medium">
              Dredger Discharge Bore Sizes
            </div>
          </div>
          <div className="border-l-2 border-[#0B78B5] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#EAF4FA]/80 mt-1 font-medium">
              IHO Multibeam Swath Mapping
            </div>
          </div>
          <div className="border-l-2 border-[#0B78B5] pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">Pan-India</div>
            <div className="text-xs uppercase tracking-wider text-[#EAF4FA]/80 mt-1 font-medium">
              Coastal & Inland Operational Hubs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
