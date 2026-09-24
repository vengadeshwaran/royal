import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { WORK_PROCESS_STEPS } from '../../data/marineData';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          kicker="Methodology & Quality Control"
          title="How We Execute Marine Projects"
          subtitle="A structured 6-phase engineering lifecycle ensuring transparency, safety, and exact volumetric delivery from tender to handover."
          align="center"
        />

        {/* Horizontal Engineering Timeline */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          
          {WORK_PROCESS_STEPS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#D9E4EC] rounded-lg p-5 shadow-sm hover:border-[#0B4F8A] hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-extrabold text-[#0B4F8A]">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0B78B5] group-hover:scale-125 transition-transform"></div>
                </div>

                <h4 className="text-sm font-bold text-[#062A4D] mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-[#52606D] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D9E4EC]/60 text-[10px] font-mono uppercase tracking-wider text-[#0B78B5]">
                Phase {idx + 1} of 6
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
