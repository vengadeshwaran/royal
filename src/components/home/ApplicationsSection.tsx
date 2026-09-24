import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';
import { MARINE_APPLICATIONS } from '../../data/marineData';

interface ApplicationsSectionProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            kicker="Sectors & Operating Environments"
            title="Projects & Marine Applications"
            subtitle="Providing mission-critical dredging, marine equipment, and bathymetric surveys across diverse maritime and inland environments."
            className="mb-0 max-w-2xl"
          />

          <button
            onClick={() => onNavigate('applications')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4F8A] hover:text-[#062A4D] transition-colors cursor-pointer group"
          >
            <span>View All Operational Sectors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Large Visual Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MARINE_APPLICATIONS.map((app) => (
            <div 
              key={app.id}
              className="bg-white border border-[#D9E4EC] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#0B4F8A] transition-all flex flex-col justify-between group"
            >
              {/* Image with Sector Tag */}
              <div className="relative h-52 overflow-hidden bg-[#062A4D]">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/85 via-[#062A4D]/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#062A4D] px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider">
                  {app.sector}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold">
                    {app.title}
                  </h3>
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                  {app.description}
                </p>

                {/* Challenges & Solutions Brief */}
                <div className="pt-3 border-t border-[#D9E4EC] space-y-2 text-xs">
                  <div>
                    <span className="text-[#102A43] font-bold block mb-1">Key Technical Demands:</span>
                    <ul className="space-y-1 text-[#52606D]">
                      {app.typicalChallenges.slice(0, 2).map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#0B4F8A] font-bold">›</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-3 border-t border-[#D9E4EC]">
                  <button
                    onClick={() => onNavigate('applications')}
                    className="w-full text-left text-xs font-bold text-[#0B4F8A] group-hover:text-[#062A4D] flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span>Explore Solutions for this Sector</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
