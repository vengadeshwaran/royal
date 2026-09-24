import React, { useState } from 'react';
import { Ship, CheckCircle2, ArrowRight, ShieldCheck, Waves, Compass, Layers } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { NavigationPage } from '../../types/marine';

interface DredgingServicesOverviewProps {
  onNavigate: (page: NavigationPage) => void;
}

export const DredgingServicesOverview: React.FC<DredgingServicesOverviewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const dredgingCapabilities = [
    {
      id: 'capital-dredging',
      title: 'Capital Dredging & Channel Deepening',
      headline: 'Excavating Virgin Seabed, Hard Stratum & Deep Rock Formations',
      desc: 'Executing capital dredging to create new navigation channels, expand turning basins, and deepen berth pockets to modern design depths. We mobilize heavy stationary cutter suction dredgers capable of cutting dense clay, consolidated gravel, and weathered rock while handling high production rates.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Navigational depth creation for Capesize & post-Panamax container vessels',
        'Rock cutting with heavy-duty cast steel cutter teeth and high-torque drives',
        'Precision positioning with real-time RTK-DGPS cutter monitoring',
        'Managed environmental turbidity with certified silt containment curtains'
      ],
      equipmentSpread: 'CSD 500 / 650 with heavy cutter ladder, twin split hopper barges, anchor handling tugs, and discharge lines.'
    },
    {
      id: 'maintenance-dredging',
      title: 'Port & Harbour Maintenance Dredging',
      headline: 'Restoring Certified Navigational Drafts Along Active Shipping Corridors',
      desc: 'Annual siltation from coastal tidal drifts and monsoon runoffs diminishes safe navigable depth. Royal Swalf provides rapid, scheduled maintenance dredging in congested port basins, LNG terminals, and dry dock approaches with minimal interference to commercial ship movements.',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Continuous 24/7 maintenance desilting with high water-to-solid pumping ratios',
        'Low air-draft dredgers enabling operation under existing jetty cranes and loading arms',
        'Submerged sink pipelines to keep vessel navigational fairways open',
        'Accurate pre-dredge and post-dredge IHO bathymetric progress audits'
      ],
      equipmentSpread: 'CSD 350 / 450 spreads, submersible booster stations, multi-beam survey launch, and flexible rubber delivery lines.'
    },
    {
      id: 'waterway-river-dredging',
      title: 'Inland Waterways & River Dredging',
      headline: 'Supporting National Waterway Navigability & Flood Defense',
      desc: 'Executing channel clearing and shoal removal across river basins to maintain Least Available Depth (LAD) for cargo transportation under Inland Waterways Authority of India (IWAI) guidelines, alongside riverbank desilting for flood mitigation.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Maintaining 2.5m - 3.2m LAD through shallow bars and meandering river shoals',
        'Geotextile containment tube filling for durable riverbank erosion protection',
        'Dismountable modular dredgers mobilized swiftly by road across river ghats',
        'Low ecological impact operation in sensitive riparian ecosystems'
      ],
      equipmentSpread: 'Amphibious multipurpose dredgers, CSD 350 shallow draft units, PE floaters, and pontoon-mounted discharge pipes.'
    },
    {
      id: 'reservoir-dam-desilting',
      title: 'Reservoir & Dam Silt Extraction',
      headline: 'Restoring Lost Live Storage Capacity in Hydroelectric & Water Dams',
      desc: 'Sedimentation severely curtails reservoir water retention and risks turbine intake clogging. Our deep-water suction systems excavate consolidated silt down to 35 meters without requiring reservoir dewatering or disrupting drinking water supplies.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Operating at extreme water depths down to 35.0m using submerged slurry pumps',
        'Zero reservoir draining required—power generation and irrigation continue uninterrupted',
        'Turbidity barrier hoods prevent sediment plume migration into turbine penstocks',
        'Booster stations pump slurry over dam crests to designated upland spoil basins'
      ],
      equipmentSpread: 'Specialized deep-suction reservoir dredgers, high-head booster stations, and anchored silt curtain enclosures.'
    }
  ];

  const current = dredgingCapabilities[activeTab];

  return (
    <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Marine Contracting Division"
          title="Turn-Key Dredging Services"
          subtitle="From capital rock cutting and port maintenance to national inland waterways and deep reservoir restoration."
        />

        {/* Large Editorial Style Presentation */}
        <div className="bg-white border border-[#D9E4EC] rounded-lg shadow-sm overflow-hidden">
          
          {/* Navigation Tabs Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#D9E4EC] bg-[#EAF4FA]/40">
            {dredgingCapabilities.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 text-left font-bold text-xs sm:text-sm border-r last:border-r-0 border-[#D9E4EC] transition-all cursor-pointer ${
                  activeTab === idx 
                    ? 'bg-white text-[#062A4D] border-t-4 border-t-[#0B4F8A] shadow-sm' 
                    : 'text-[#52606D] hover:bg-white/60 hover:text-[#062A4D]'
                }`}
              >
                <div className="text-[10px] uppercase font-mono text-[#0B78B5] mb-1 font-semibold">
                  Capability 0{idx + 1}
                </div>
                <div className="line-clamp-1">{item.title}</div>
              </button>
            ))}
          </div>

          {/* Editorial Content Display */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Image with Industrial Details (5 Cols) */}
              <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-[#D9E4EC] shadow-md group">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/85 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#EAF4FA]">
                    Certified Marine Methodology
                  </div>
                  <div className="text-base font-bold mt-1">
                    {current.title}
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Technical Copy & Capabilities (7 Cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-block text-xs font-mono uppercase tracking-wider font-semibold text-[#0B4F8A] bg-[#EAF4FA] px-3 py-1 rounded">
                  {current.title}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062A4D] leading-tight">
                  {current.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
                  {current.desc}
                </p>

                {/* Key Execution Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                    Operational Standards & Execution Highlights:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#102A43]">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                        <CheckCircle2 className="w-4 h-4 text-[#0B4F8A] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typical Equipment Spread Mention */}
                <div className="pt-3 border-t border-[#D9E4EC] text-xs text-[#52606D]">
                  <strong className="text-[#062A4D]">Typical Spread Deployed: </strong>
                  {current.equipmentSpread}
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('dredging')}
                    className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-sm px-6 py-3 rounded flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>View Dredging Division Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('quote')}
                    className="text-[#0B4F8A] hover:text-[#062A4D] font-bold text-sm flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Request Dredging Tender Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
