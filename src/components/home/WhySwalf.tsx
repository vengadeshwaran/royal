import React from 'react';
import { 
  Anchor, 
  ShieldCheck, 
  Compass, 
  Truck, 
  Wrench, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { WHY_CHOOSE_POINTS } from '../../data/marineData';

export const WhySwalf: React.FC = () => {
  const icons = [Anchor, Layers, Truck, Compass, ShieldCheck, Wrench];

  return (
    <section className="py-20 bg-white border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Engineering Reliability & Technical Depth"
          title="Why Royal Swalf / Swalf Group"
          subtitle="Delivering certainty in complex marine environments through integrated fleet capability, verified survey precision, and rigorous execution standards."
          align="center"
        />

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_POINTS.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg p-6 shadow-sm hover:border-[#0B4F8A] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#EAF4FA] text-[#0B4F8A] group-hover:bg-[#062A4D] group-hover:text-white transition-colors flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#062A4D] group-hover:text-[#0B4F8A] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D9E4EC]/60 flex items-center gap-2 text-xs font-mono text-[#0B78B5]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SWALF VERIFIED STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
