import React from 'react';
import { ArrowRight, PhoneCall, FileText, Anchor } from 'lucide-react';
import { NavigationPage } from '../../types/marine';
import { COMPANY_INFO } from '../../data/marineData';

interface ProjectCtaProps {
  onNavigate: (page: NavigationPage) => void;
}

export const ProjectCta: React.FC<ProjectCtaProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#062A4D] text-white py-20 overflow-hidden">
      {/* Background Graphic and Marine Pattern */}
      <div className="absolute inset-0 marine-grid-dark opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#0B4F8A]/30 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Engineering Emblem */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0B4F8A] border border-[#1268A5]/50 text-white shadow-md mx-auto">
          <Anchor className="w-7 h-7 stroke-[2.2]" />
        </div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0B78B5] font-semibold">
            Pan-India & International Maritime Tenders
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have a Dredging or Marine Project?
          </h2>
          <p className="text-base sm:text-lg text-[#EAF4FA]/90 max-w-2xl mx-auto leading-relaxed pt-2">
            Tell us about your project requirements, target depth, and strata conditions. Our senior marine engineers and naval architects will help identify the optimal equipment spread and delivery schedule.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('quote')}
            className="bg-[#0B78B5] hover:bg-[#1268A5] text-white font-bold text-base px-8 py-4 rounded shadow-lg flex items-center gap-2.5 transition-all cursor-pointer border border-[#0B78B5]"
          >
            <span>Request a Project Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded border border-white/30 backdrop-blur-sm flex items-center gap-2.5 transition-all cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-[#0B78B5]" />
            <span>Contact Headquarters</span>
          </button>
        </div>

        {/* Direct Contacts Reference */}
        <div className="pt-6 border-t border-white/15 max-w-xl mx-auto flex flex-wrap justify-center items-center gap-6 text-xs text-[#EAF4FA]/80 font-mono">
          <div>
            <span className="opacity-60">Mumbai Office: </span>
            <a href="tel:+919820144520" className="hover:underline font-bold text-white">+91 98201 44520</a>
          </div>
          <span className="opacity-40">|</span>
          <div>
            <span className="opacity-60">Email: </span>
            <a href="mailto:info@royalswalf.com" className="hover:underline font-bold text-white">{COMPANY_INFO.generalEmail}</a>
          </div>
        </div>

      </div>
    </section>
  );
};
