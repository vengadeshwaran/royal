import React, { useState } from 'react';
import { 
  Ship, 
  Layers, 
  Compass, 
  Wrench, 
  Cpu, 
  Activity, 
  Truck, 
  Anchor, 
  ArrowRight, 
  Check, 
  Boxes,
  FileCheck2
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';
import { CORE_BUSINESS_CATEGORIES } from '../../data/marineData';

interface CoreBusinessSectionProps {
  onNavigate: (page: NavigationPage, params?: { productId?: string; serviceId?: string }) => void;
}

export const CoreBusinessSection: React.FC<CoreBusinessSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'trading' | 'service'>('all');

  const tradingCards = [
    {
      title: 'Dredging Equipment & Fleet',
      desc: 'Cutter Suction Dredgers (CSD 350 to 650), Jet Suction, Amphibious and Custom-built dredging vessels engineered for high-density production.',
      icon: Ship,
      actionPage: 'products' as NavigationPage,
      badge: 'Equipment Supply'
    },
    {
      title: 'Dredging Components & Spares',
      desc: 'Heavy-duty cutter heads, pick points, wear rings, impellers, hydraulic winches, and spud assemblies built from high-strength marine alloys.',
      icon: Wrench,
      actionPage: 'products' as NavigationPage,
      badge: 'Wear Components'
    },
    {
      title: 'HDPE Pipes & Floaters',
      desc: 'Virgin PE100 slurry discharge pipelines, quick-latch stub flanges, and rotational-molded UV-resistant polyethylene pipe floaters.',
      icon: Layers,
      actionPage: 'products' as NavigationPage,
      badge: 'Slurry Pipeline'
    },
    {
      title: 'Imported Marine Equipment',
      desc: 'Marine gearboxes, high-efficiency diesel marine engines, hydraulic pumps, deck machinery, and specialized workboat fittings.',
      icon: Boxes,
      actionPage: 'products' as NavigationPage,
      badge: 'Marine Machinery'
    },
    {
      title: 'Mining & Tailing Dredgers',
      desc: 'Specialized gold placer recovery dredgers, mineral sand beneficiation units, and heavy industrial tailings desilting equipment.',
      icon: Activity,
      actionPage: 'products' as NavigationPage,
      badge: 'Mining Solutions'
    },
    {
      title: 'Amphibious Vehicles & Machines',
      desc: 'Tracked amphibious dredgers and marsh excavators designed for soft mud, swamp restoration, and narrow irrigation channels.',
      icon: Truck,
      actionPage: 'products' as NavigationPage,
      badge: 'All-Terrain'
    },
    {
      title: 'Slurry Pumps, Motors & Gensets',
      desc: 'Cr27 high-chrome abrasive slurry pumps, auxiliary marine generator sets, and electric high-torque drive motors.',
      icon: Cpu,
      actionPage: 'products' as NavigationPage,
      badge: 'Power & Pumps'
    }
  ];

  const serviceCards = [
    {
      title: 'Dredging Contractor',
      desc: 'Turn-key execution of capital port deepening, routine berth maintenance desilting, inland river channels, and coastal land reclamation.',
      icon: Ship,
      actionPage: 'dredging' as NavigationPage,
      badge: 'Contracting'
    },
    {
      title: 'Project Management Consultancy',
      desc: 'Comprehensive Detailed Project Reports (DPR), dredgeability borehole assessments, tender preparation, and quantity auditing.',
      icon: FileCheck2,
      actionPage: 'services' as NavigationPage,
      badge: 'Consultancy'
    },
    {
      title: 'Dredger Operation & Manning',
      desc: 'Certified Dredge Masters, 1st Class Marine Chief Engineers, and specialized deck crews for efficient round-the-clock operations.',
      icon: Anchor,
      actionPage: 'services' as NavigationPage,
      badge: 'Fleet Manning'
    },
    {
      title: 'Hydrographic & Bathymetric Survey',
      desc: 'IHO Order 1a multi-beam soundings, dual-frequency single-beam bathymetry, pre/post dredge volume reports, and nautical charting.',
      icon: Compass,
      actionPage: 'survey' as NavigationPage,
      badge: 'Bathymetry'
    },
    {
      title: 'Geophysical & Sonar Survey',
      desc: 'Side-scan sonar acoustic seafloor imaging, sub-bottom seismic profiling for rock head detection, and marine magnetometer surveys.',
      icon: Activity,
      actionPage: 'survey' as NavigationPage,
      badge: 'Geophysics'
    },
    {
      title: 'Underwater Inspection & ROV',
      desc: 'Observation-class ROVs and certified commercial divers providing 4K subsea video logging, jetty piling checks, and ultrasonic NDT testing.',
      icon: Cpu,
      actionPage: 'services' as NavigationPage,
      badge: 'Subsea Inspection'
    },
    {
      title: 'Hull Cleaning & Underwater Maintenance',
      desc: 'In-water propeller super-polishing, hull biofouling removal, sea chest clearing, and underwater cofferdam repairs.',
      icon: Wrench,
      actionPage: 'services' as NavigationPage,
      badge: 'Marine Maintenance'
    },
    {
      title: 'Marine Logistics & Support',
      desc: 'Anchor handling tug charter, split hopper barge operations, workboat deployment, and offshore pipeline towing services.',
      icon: Truck,
      actionPage: 'services' as NavigationPage,
      badge: 'Marine Logistics'
    }
  ];

  return (
    <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            kicker="Two Pillars of Excellence"
            title="Our Core Business"
            subtitle="Divided into Equipment Trading & Manufacturing and Comprehensive Marine Contracting & Surveys."
            className="mb-0 max-w-2xl"
          />

          {/* Interactive Filter Controls */}
          <div className="inline-flex p-1 bg-white border border-[#D9E4EC] rounded-lg self-start md:self-auto shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                activeTab === 'all' 
                  ? 'bg-[#062A4D] text-white shadow-sm' 
                  : 'text-[#52606D] hover:text-[#062A4D]'
              }`}
            >
              All Business Areas
            </button>
            <button
              onClick={() => setActiveTab('trading')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                activeTab === 'trading' 
                  ? 'bg-[#062A4D] text-white shadow-sm' 
                  : 'text-[#52606D] hover:text-[#062A4D]'
              }`}
            >
              Equipment Trading
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                activeTab === 'service' 
                  ? 'bg-[#062A4D] text-white shadow-sm' 
                  : 'text-[#52606D] hover:text-[#062A4D]'
              }`}
            >
              Marine Services
            </button>
          </div>
        </div>

        {/* TRADING SECTION */}
        {(activeTab === 'all' || activeTab === 'trading') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#D9E4EC]">
              <div className="w-8 h-8 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm">
                01
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#062A4D] uppercase tracking-wide">
                  Trading & Equipment Supply
                </h3>
                <p className="text-xs text-[#52606D]">
                  High-capacity dredgers, slurry pipes, floaters, pumps, and specialized marine gear
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tradingCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#0B4F8A] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Quiet unboxed text kicker */}
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#0B78B5] font-semibold mb-3">
                        {card.badge}
                      </div>

                      <div className="w-10 h-10 rounded bg-[#EAF4FA] flex items-center justify-center text-[#0B4F8A] group-hover:bg-[#062A4D] group-hover:text-white transition-colors mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h4 className="text-base font-bold text-[#062A4D] group-hover:text-[#0B4F8A] transition-colors mb-2">
                        {card.title}
                      </h4>

                      <p className="text-xs text-[#52606D] leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(card.actionPage)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4F8A] hover:text-[#062A4D] pt-3 border-t border-[#D9E4EC]/60 transition-colors cursor-pointer"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SERVICE SECTION */}
        {(activeTab === 'all' || activeTab === 'service') && (
          <div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#D9E4EC]">
              <div className="w-8 h-8 rounded bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center font-bold text-sm">
                02
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#062A4D] uppercase tracking-wide">
                  Marine Services & Contracting
                </h3>
                <p className="text-xs text-[#52606D]">
                  Turn-key capital & maintenance dredging, hydrographic acoustic surveys, ROV and manning
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-[#D9E4EC] rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#0B4F8A] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Quiet unboxed text kicker */}
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#0B78B5] font-semibold mb-3">
                        {card.badge}
                      </div>

                      <div className="w-10 h-10 rounded bg-[#EAF4FA] flex items-center justify-center text-[#0B4F8A] group-hover:bg-[#062A4D] group-hover:text-white transition-colors mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h4 className="text-base font-bold text-[#062A4D] group-hover:text-[#0B4F8A] transition-colors mb-2">
                        {card.title}
                      </h4>

                      <p className="text-xs text-[#52606D] leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(card.actionPage)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4F8A] hover:text-[#062A4D] pt-3 border-t border-[#D9E4EC]/60 transition-colors cursor-pointer"
                    >
                      <span>Service Details & Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
