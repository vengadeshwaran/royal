import React from 'react';
import { 
  Anchor, 
  Waves, 
  Ship, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { MARINE_APPLICATIONS } from '../../data/marineData';
import { NavigationPage } from '../../types/marine';

interface ApplicationsPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Operating Environments & Sectors</span>
              <span className="opacity-40">·</span>
              <span>Maritime Infrastructure</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Marine & Industrial Applications
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              From commercial mega-ports and national river corridors to high-altitude hydroelectric dams 
              and industrial mining lagoons, our marine engineering systems solve severe hydrological challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Directory */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {MARINE_APPLICATIONS.map((app, idx) => (
            <div 
              key={app.id}
              className="bg-white border border-[#D9E4EC] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Visual Display (5 cols) */}
              <div className="lg:col-span-5 rounded-lg overflow-hidden relative border border-[#D9E4EC] bg-[#062A4D] group">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/85 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#062A4D] px-3 py-1 rounded text-xs font-mono font-bold uppercase">
                  {app.sector}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg font-bold">
                    {app.title}
                  </div>
                </div>
              </div>

              {/* Engineering Demands & Solutions (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0B78B5] font-bold">
                  Sector Application 0{idx + 1}
                </div>

                <h2 className="text-2xl font-bold text-[#062A4D]">
                  {app.title}
                </h2>

                <p className="text-sm text-[#52606D] leading-relaxed">
                  {app.description}
                </p>

                {/* Challenges & Recommended Equipment */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F5FAFD] p-4 rounded-lg border border-[#D9E4EC]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#062A4D] mb-2">
                      Typical Hydrological Challenges:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#52606D]">
                      {app.typicalChallenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#0B4F8A] font-bold">›</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F5FAFD] p-4 rounded-lg border border-[#D9E4EC]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#062A4D] mb-2">
                      Recommended Royal Swalf Spread:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#52606D]">
                      {app.recommendedSolutions.map((eq: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#0B78B5] font-bold">✓</span>
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-xs px-5 py-2.5 rounded transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Request Engineering Proposal for {app.sector}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};
