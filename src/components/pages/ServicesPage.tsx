import React, { useState } from 'react';
import { 
  Ship, 
  Compass, 
  Activity, 
  Wrench, 
  Anchor, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sliders, 
  Layers 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { MARINE_SERVICES } from '../../data/marineData';
import { MarineService, NavigationPage } from '../../types/marine';

interface ServicesPageProps {
  onNavigate: (page: NavigationPage, params?: { serviceId?: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Marine Services' },
    { key: 'dredging', label: 'Dredging Contracting' },
    { key: 'survey', label: 'Hydrographic & Sonar Surveys' },
    { key: 'marine-support', label: 'Fleet Manning & Support' },
    { key: 'consultancy', label: 'PMC & Project Consultancy' }
  ];

  const filteredServices = MARINE_SERVICES.filter(service => {
    if (filterCategory === 'all') return true;
    return service.category === filterCategory;
  });

  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Marine Contracting & Technical Solutions</span>
              <span className="opacity-40">·</span>
              <span>Services Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Marine Engineering & Survey Services
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              Turn-key capital & maintenance dredging, IHO compliant acoustic bathymetry, 
              ROV subsea video diagnostics, certified crew manning, and maritime project management.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-[#F5FAFD] border-b border-[#D9E4EC] py-4 sticky top-[73px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilterCategory(cat.key)}
                className={`px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat.key
                    ? 'bg-[#062A4D] text-white shadow-sm'
                    : 'bg-white text-[#52606D] hover:text-[#062A4D] border border-[#D9E4EC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredServices.map((service, idx) => (
            <div 
              key={service.id}
              className="bg-white border border-[#D9E4EC] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#0B4F8A] transition-all p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Image and Service Badge (5 cols) */}
              <div className="lg:col-span-5 rounded-lg overflow-hidden relative border border-[#D9E4EC] bg-[#062A4D] group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-[#062A4D]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-mono uppercase font-bold">
                  {service.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-sm font-bold">
                    {service.title}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Capabilities, Standards & CTAs (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0B78B5] font-bold">
                  Engineering Capability 0{idx + 1}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#062A4D]">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                  {service.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                    Execution Scope:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#102A43]">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-1.5 bg-[#F5FAFD] p-2 rounded border border-[#D9E4EC]/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B4F8A] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standards & Equipment used */}
                <div className="pt-2 border-t border-[#D9E4EC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#52606D]">
                  <div>
                    <span className="font-semibold text-[#062A4D]">Standards: </span>
                    <span>{service.standards.join(' · ')}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#D9E4EC] flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-xs px-5 py-2.5 rounded transition-colors cursor-pointer"
                  >
                    Request Tender Pricing
                  </button>

                  {service.category === 'dredging' && (
                    <button
                      onClick={() => onNavigate('dredging')}
                      className="text-[#0B4F8A] hover:text-[#062A4D] font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Dredging Division</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {service.category === 'survey' && (
                    <button
                      onClick={() => onNavigate('survey')}
                      className="text-[#0B4F8A] hover:text-[#062A4D] font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Survey Division</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Bottom Callout Banner */}
      <section className="py-16 bg-[#F5FAFD] border-t border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-[#062A4D]">
            Require a Complete Dredging Spread with Certified Operations Crew?
          </h3>
          <p className="text-sm text-[#52606D] max-w-xl mx-auto">
            We provide full chartering, mobilization, pipeline rigging, and certified master mariners for government and industrial port projects.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#0B4F8A] hover:bg-[#062A4D] text-white font-bold text-sm px-6 py-3 rounded transition-colors shadow-sm cursor-pointer"
            >
              Submit Fleet Charter & Manning Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
