import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Anchor, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Target, 
  Eye, 
  HeartHandshake, 
  Users, 
  Wrench,
  ArrowRight
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_INFO } from '../../data/marineData';
import { NavigationPage } from '../../types/marine';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Corporate Profile</span>
              <span className="opacity-40">·</span>
              <span>Swalf Group</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Royal Swalf
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              An established Indian marine engineering organization delivering world-class dredging vessels, 
              port contracting, high-precision hydrography, and turn-key maritime technical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Profile & Heritage */}
      <section className="py-20 border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                kicker="Engineering Precision · Maritime Reliability"
                title="Building Certainty in Challenging Waters"
                subtitle="From our roots in heavy marine engineering to executing complex port dredging and hydrographic operations across India."
              />

              <div className="space-y-4 text-base text-[#52606D] leading-relaxed">
                <p>
                  <strong className="text-[#102A43]">Royal Swalf</strong> (operating under Swalf Immanuel International India Private Limited and the Swalf Group) 
                  was founded with a steadfast commitment: to engineer, supply, and operate high-capacity dredging machinery and marine solutions that conquer 
                  India's challenging coastal conditions and siltation-heavy river basins.
                </p>
                <p>
                  Over more than a decade of focused marine operations, we have grown into a comprehensive maritime services partner. 
                  Our dual capability spans the <span className="text-[#062A4D] font-semibold">Trading & Equipment Division</span> (supplying cutter suction dredgers, 
                  high-chrome slurry pumps, HDPE pipelines, and auxiliary workboats) and the <span className="text-[#062A4D] font-semibold">Marine Contracting & Survey Division</span> 
                  (executing capital and maintenance dredging, subsea ROV inspection, and IHO Order 1a bathymetric hydrography).
                </p>
                <p>
                  Whether deepening berths for major port trusts, clearing river channels under National Waterways development schemes, 
                  or removing decades of consolidated silt from hydroelectric dams, Royal Swalf delivers verified volumetric performance with unyielding safety standards.
                </p>
              </div>

              {/* Verified Credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9E4EC]">
                <div className="p-3.5 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                  <div className="font-mono text-xl font-bold text-[#0B4F8A]">Est. 2010</div>
                  <div className="text-xs text-[#52606D] mt-0.5">Indian Incorporation</div>
                </div>
                <div className="p-3.5 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                  <div className="font-mono text-xl font-bold text-[#0B4F8A]">ISO Certified</div>
                  <div className="text-xs text-[#52606D] mt-0.5">9001, 14001, 45001</div>
                </div>
                <div className="p-3.5 bg-[#F5FAFD] rounded border border-[#D9E4EC]">
                  <div className="font-mono text-xl font-bold text-[#0B4F8A]">IHO S-44</div>
                  <div className="text-xs text-[#52606D] mt-0.5">Hydrographic Standards</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-lg overflow-hidden border border-[#D9E4EC] shadow-md bg-[#062A4D]">
                <img 
                  src="/images/1544620347-c4fd4a3d5957.jpg" 
                  alt="Royal Swalf Marine Operations Fleet"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 text-white">
                  <div className="text-xs font-mono text-[#0B78B5] uppercase font-bold">Pan-India Reach</div>
                  <div className="text-base font-bold mt-1">Mumbai Headquarters & Chennai Operations Yard</div>
                  <p className="text-xs text-[#EAF4FA]/80 mt-2 leading-relaxed">
                    Strategically located near major maritime shipping routes on India's Western and Eastern seaboards for rapid vessel mobilization.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-[#F5FAFD] border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="Guiding Corporate Principles"
            title="Vision, Mission & Core Values"
            subtitle="The operational philosophy guiding our naval architects, dredge masters, hydrographic surveyors, and leadership."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            {/* Vision */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-8 shadow-sm hover:border-[#0B4F8A] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062A4D] mb-3">Our Vision</h3>
              <p className="text-sm text-[#52606D] leading-relaxed">
                To be India’s most trusted and technically proficient marine engineering partner, recognized globally 
                for innovative dredging machinery, unyielding survey precision, and environmentally conscious maritime stewardship.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-8 shadow-sm hover:border-[#0B4F8A] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062A4D] mb-3">Our Mission</h3>
              <p className="text-sm text-[#52606D] leading-relaxed">
                To deliver robust, high-availability cutter suction dredgers and marine contracting services that exceed client volume expectations, 
                maintain waterway accessibility, and uphold the highest international safety, environmental, and engineering benchmarks.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white border border-[#D9E4EC] rounded-lg p-8 shadow-sm hover:border-[#0B4F8A] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#EAF4FA] text-[#0B4F8A] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062A4D] mb-3">Core Values</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#52606D]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0B4F8A] font-bold">·</span>
                  <span><strong>Engineering Precision:</strong> Zero compromise on design calculations and equipment metallurgy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0B4F8A] font-bold">·</span>
                  <span><strong>Safety & QHSE:</strong> Zero harm to crew, vessels, and delicate marine ecosystems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0B4F8A] font-bold">·</span>
                  <span><strong>Client Partnership:</strong> Transparent bathymetric volume reporting and mutual trust.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* QHSE Policy & Certifications */}
      <section className="py-20 border-b border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                kicker="QHSE Integrated Management System"
                title="Quality, Health, Safety & Environmental Standards"
                subtitle="Complying with international marine safety codes and national environmental statutes on every mobilization."
              />

              <div className="space-y-4 text-sm sm:text-base text-[#52606D] leading-relaxed">
                <p>
                  At Royal Swalf, safety is an operational imperative. Marine environments present inherent physical, hydraulic, 
                  and ecological hazards. Our Integrated Management System (IMS) governs every procedure—from spud walking and pipeline towing 
                  to deep ROV dive logging and hazardous material disposal.
                </p>
                <p>
                  We actively control dredging turbidity plumes with real-time nephelometric sensors, deploy silt containment curtains 
                  around fragile coral beds and intake structures, and ensure 100% of our onboard machinery uses biodegradable hydraulic fluids 
                  when operating in sensitive national waterways.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#102A43]">
                <div className="flex items-center gap-2 bg-[#F5FAFD] p-3 rounded border border-[#D9E4EC]">
                  <ShieldCheck className="w-5 h-5 text-[#0B4F8A]" />
                  <span>ISO 9001:2015 Quality Management</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5FAFD] p-3 rounded border border-[#D9E4EC]">
                  <ShieldCheck className="w-5 h-5 text-[#0B4F8A]" />
                  <span>ISO 14001:2015 Environmental Management</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5FAFD] p-3 rounded border border-[#D9E4EC]">
                  <ShieldCheck className="w-5 h-5 text-[#0B4F8A]" />
                  <span>ISO 45001:2018 Occupational Health & Safety</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F5FAFD] p-3 rounded border border-[#D9E4EC]">
                  <ShieldCheck className="w-5 h-5 text-[#0B4F8A]" />
                  <span>IHO S-44 Special Order Bathymetry</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#062A4D] text-white p-8 rounded-lg shadow-xl border border-[#0B4F8A]">
              <h3 className="text-xl font-bold mb-4">
                Our Corporate Registration & Operational Hubs
              </h3>
              <div className="space-y-5 text-sm text-[#EAF4FA]/90">
                <div className="border-b border-[#0B4F8A]/60 pb-4">
                  <div className="font-mono text-xs text-[#0B78B5] uppercase font-bold">Corporate Registered Office</div>
                  <div className="font-bold text-white mt-1">Swalf Marine Towers, Mumbai</div>
                  <div className="text-xs text-[#EAF4FA]/70 mt-0.5">Nariman Point / CBD Belapur, Mumbai, Maharashtra 400021</div>
                  <div className="text-xs text-[#0B78B5] mt-1 font-mono">+91 (022) 2756 8920 / +91 98201 44520</div>
                </div>

                <div className="border-b border-[#0B4F8A]/60 pb-4">
                  <div className="font-mono text-xs text-[#0B78B5] uppercase font-bold">Engineering Yard & Operations Hub</div>
                  <div className="font-bold text-white mt-1">Swalf Engineering Yard, Chennai</div>
                  <div className="text-xs text-[#EAF4FA]/70 mt-0.5">Old Mahabalipuram Road (OMR), Chennai, Tamil Nadu 600096</div>
                  <div className="text-xs text-[#0B78B5] mt-1 font-mono">+91 (044) 4289 1100 / +91 94440 23180</div>
                </div>

                <div>
                  <div className="font-mono text-xs text-[#0B78B5] uppercase font-bold">International Project Desk</div>
                  <div className="text-xs text-[#EAF4FA]/70 mt-0.5">Sri Lanka, Maldives, Middle East & Southeast Asia Operations</div>
                  <div className="text-xs text-[#0B78B5] mt-1 font-mono">projects@royalswalf.com</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0B4F8A]/60 flex items-center justify-between">
                <span className="text-xs text-[#EAF4FA]/70">Explore our marine fleet & capability:</span>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-xs font-bold text-[#EAF4FA] hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>View Vessels</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
