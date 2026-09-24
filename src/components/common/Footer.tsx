import React from 'react';
import { 
  Anchor, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Compass, 
  Clock, 
  FileText 
} from 'lucide-react';
import { NavigationPage } from '../../types/marine';
import { COMPANY_INFO } from '../../data/marineData';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#062A4D] text-white pt-16 pb-12 border-t-4 border-[#0B4F8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Corporate Summary & Quote Callout */}
        <div className="pb-12 border-b border-[#0B4F8A]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#0B4F8A] flex items-center justify-center text-white border border-[#1268A5]/40">
            <svg fill="white" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 480.156 480.156" xml:space="preserve">
              <g id="XMLID_187_">
                <path id="XMLID_190_" d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557
		h114.27V16.538z"/>
                <path id="XMLID_189_" d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27
		v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z"
                />
                <path id="XMLID_188_" d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038
		c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172
		c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172
		C426.643,258.296,423.262,250.88,416.603,248.266z"/>
              </g>
            </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight">ROYAL SWALF</span>
                <span className="text-xs uppercase tracking-widest text-[#0B78B5] font-semibold block">
                  SWALF GROUP · MARINE ENGINEERING & DREDGING
                </span>
              </div>
            </div>
            <p className="text-[#EAF4FA]/80 text-sm max-w-2xl leading-relaxed">
              Royal Swalf (Swalf Group) provides industrial marine engineering, cutter suction dredgers, 
              capital and maintenance dredging contracting, hydrographic surveys, and certified maritime support 
              for government port authorities, marine contractors, and infrastructure developers across India and international waters.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#0B78B5] hover:bg-[#1268A5] text-white font-bold py-3 px-6 rounded text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Submit Project Specification / RFQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-[#EAF4FA]/70 text-center lg:text-right font-mono">
              Direct Tender Desk: tenders@royalswalf.com
            </div>
          </div>
        </div>

        {/* 5-Column Sitemap & Corporate Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-[#0B4F8A]/40 text-sm">
          {/* Col 1: Organization */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#0B78B5] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-[#EAF4FA]/80">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Swalf Group
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Vision, Mission & Values
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  QHSE & Quality Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Careers in Marine Industry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Corporate Directory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#0B78B5] mb-4">
              Dredging Products
            </h3>
            <ul className="space-y-2.5 text-[#EAF4FA]/80">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cutter Suction Dredgers (CSD)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Amphibious Multipurpose Dredgers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Jet Suction & Deep Sand Dredgers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Dam & Reservoir Desilters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  HDPE Slurry Pipes & Floaters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Slurry Dredge Pumps & Spares
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#0B78B5] mb-4">
              Marine Services
            </h3>
            <ul className="space-y-2.5 text-[#EAF4FA]/80">
              <li>
                <button onClick={() => onNavigate('dredging')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Capital & Maintenance Dredging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dredging')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Inland River & Canal Desilting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('survey')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hydrographic & Bathymetric Survey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('survey')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Side-Scan Sonar & Sub-Bottom Profiling
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  ROV Subsea Video Inspection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Dredger Operation & Crew Manning
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Applications */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#0B78B5] mb-4">
              Applications
            </h3>
            <ul className="space-y-2.5 text-[#EAF4FA]/80">
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Commercial Ports & Jetties
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-white transition-colors cursor-pointer text-left">
                  National Waterways (IWAI)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Hydroelectric Dam Reservoirs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Mining Tailings & Industrial Lagoons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Coastal Land Reclamation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quote')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Request Equipment Specification
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Hubs */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#0B78B5] mb-4">
              Indian Operations
            </h3>
            <div className="space-y-3 text-xs text-[#EAF4FA]/80">
              <div>
                <span className="text-white font-semibold block">Mumbai Corporate HQ:</span>
                <span className="text-[#EAF4FA]/70">Nariman Point / CBD Belapur, Mumbai, MH 400021</span>
                <span className="block mt-0.5 text-[#0B78B5]">+91 (022) 2756 8920</span>
              </div>
              <div className="pt-2 border-t border-[#0B4F8A]/40">
                <span className="text-white font-semibold block">Chennai Marine Yard:</span>
                <span className="text-[#EAF4FA]/70">OMR / Port Corridor, Chennai, TN 600096</span>
                <span className="block mt-0.5 text-[#0B78B5]">+91 (044) 4289 1100</span>
              </div>
              <div className="pt-2 border-t border-[#0B4F8A]/40">
                <span className="text-white font-semibold block">Official Communications:</span>
                <a href="mailto:info@royalswalf.com" className="text-[#0B78B5] hover:underline block">info@royalswalf.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Compliance strip */}
        <div className="py-6 border-b border-[#0B4F8A]/40 flex flex-wrap items-center justify-between gap-4 text-xs text-[#EAF4FA]/75 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0B78B5]" />
            <span>CERTIFIED QUALITY SYSTEM: ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018</span>
          </div>
          <div className="flex items-center gap-4">
            <span>HYDROGRAPHIC STANDARDS: IHO S-44</span>
            <span>·</span>
            <span>VESSEL CLASSIFICATION: IRS / IACS COMPLIANT</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#EAF4FA]/60">
          <div>
            © {new Date().getFullYear()} Royal Swalf / Swalf Group. All Rights Reserved. Legal entity: Swalf Immanuel International India Pvt. Ltd.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              Terms of Maritime Service
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Global Support Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
