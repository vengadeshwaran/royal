import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Compass,
  Anchor,
  Ship,
  Layers,
  Activity,
  Cpu,
  Wrench,
  FileText
} from 'lucide-react';
import { NavigationPage } from '../../types/marine';
import { COMPANY_INFO } from '../../data/marineData';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage, params?: { productId?: string; serviceId?: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: NavigationPage, params?: { productId?: string; serviceId?: string }) => {
    onNavigate(page, params);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#062A4D] text-white border-b border-[#0B4F8A]/40 text-xs py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-[95%] mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Contact details & location */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#EAF4FA]/90">
              <Compass className="w-3.5 h-3.5 text-[#0B78B5]" />
              <span>Corporate HQ: Mumbai | Marine Base: Chennai</span>
            </div>
            <div className="flex items-center gap-2 text-[#EAF4FA]/90">
              <Phone className="w-3.5 h-3.5 text-[#0B78B5]" />
              <a href="tel:+919820144520" className="hover:text-white transition-colors">
                +91 (022) 2756 8920 / +91 98201 44520
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#EAF4FA]/90">
              <Mail className="w-3.5 h-3.5 text-[#0B78B5]" />
              <a href="mailto:info@royalswalf.com" className="hover:text-white transition-colors">
                {COMPANY_INFO.generalEmail}
              </a>
            </div>
          </div>

          {/* Quality standards & fast quote link */}
          <div className="flex items-center gap-4 text-[#EAF4FA]/80">
            <span className="font-mono text-[11px] text-[#0B78B5]">ISO 9001:2015 · IHO S-44 COMPLIANT</span>
            <span className="opacity-40">|</span>
            <button
              onClick={() => handleLinkClick('quote')}
              className="text-white hover:text-[#EAF4FA] font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Project Tender Desk</span>
              <ArrowRight className="w-3 h-3 text-[#0B78B5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full bg-white border-b transition-all duration-200 ${isScrolled ? 'border-[#D9E4EC] shadow-sm py-3' : 'border-[#D9E4EC] py-4'
        }`}>
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <svg fill="#062A4D" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
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

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-[#062A4D]">ROYAL SWALF</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold text-[#0B4F8A]">
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'home'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'about'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              About Us
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('products')}
                className={`px-3 py-2 text-sm font-semibold rounded flex items-center gap-1 transition-colors cursor-pointer ${currentPage === 'products' || currentPage === 'product-detail'
                  ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                  : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                  }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#52606D]" />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#D9E4EC] shadow-xl rounded-lg py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-[#D9E4EC]/60 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F8A]">Marine Equipment & Fleet</span>
                  </div>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Ship className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Cutter Suction Dredgers</div>
                      <div className="text-xs text-[#52606D]">CSD 350 to CSD 650 & Custom Heavy Strata Dredgers</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Activity className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Specialized Dredgers</div>
                      <div className="text-xs text-[#52606D]">Amphibious, Jet Suction, Gold Mining & Dam Desilters</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Dredging Accessories & Pipes</div>
                      <div className="text-xs text-[#52606D]">HDPE Pipes, PE Floaters, Rubber Hoses & Booster Pumps</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Dredger Buying & Selling</div>
                      <div className="text-xs text-[#52606D]">Pre-purchase surveys, brokerage & vessel refit</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('services')}
                className={`px-3 py-2 text-sm font-semibold rounded flex items-center gap-1 transition-colors cursor-pointer ${currentPage === 'services' || currentPage === 'dredging' || currentPage === 'survey'
                  ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                  : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#52606D]" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-88 bg-white border border-[#D9E4EC] shadow-xl rounded-lg py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-[#D9E4EC]/60 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F8A]">Maritime Contracting & Surveys</span>
                  </div>
                  <button
                    onClick={() => handleLinkClick('dredging')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Ship className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Dredging Contracting</div>
                      <div className="text-xs text-[#52606D]">Capital & Maintenance, Port & River Dredging</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('survey')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Hydrographic & Sonar Survey</div>
                      <div className="text-xs text-[#52606D]">Single & Multi-beam Bathymetry, Side-Scan Sonar</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Cpu className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">Subsea ROV & Underwater Services</div>
                      <div className="text-xs text-[#52606D]">Hull cleaning, propeller polish & underwater NDT</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#EAF4FA] flex items-start gap-3 transition-colors cursor-pointer"
                  >
                    <Wrench className="w-4 h-4 text-[#0B4F8A] mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#062A4D]">PMC & Manning Services</div>
                      <div className="text-xs text-[#52606D]">DPR consultancy, certified dredge crew & operations</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Direct Dredging Link */}
            <button
              onClick={() => handleLinkClick('dredging')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'dredging'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              Dredging
            </button>

            {/* Direct Survey Link */}
            <button
              onClick={() => handleLinkClick('survey')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'survey'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              Surveys
            </button>

            {/* Applications */}
            <button
              onClick={() => handleLinkClick('applications')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'applications'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              Applications
            </button>

            {/* Careers */}
            <button
              onClick={() => handleLinkClick('careers')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'careers'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              Careers
            </button>

            {/* Contact */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${currentPage === 'contact'
                ? 'text-[#0B4F8A] bg-[#EAF4FA]'
                : 'text-[#102A43] hover:text-[#0B4F8A] hover:bg-[#F5FAFD]'
                }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('quote')}
              className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white text-sm font-bold px-4 sm:px-5 py-2.5 rounded shadow-sm flex items-center gap-2 transition-all cursor-pointer border border-[#062A4D]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#EAF4FA]" />
            </button>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-md text-[#102A43] hover:bg-[#EAF4FA] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white z-50 overflow-y-auto border-t border-[#D9E4EC] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left py-3 px-3 rounded font-bold text-base ${currentPage === 'home' ? 'bg-[#EAF4FA] text-[#0B4F8A]' : 'text-[#062A4D]'}`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`text-left py-3 px-3 rounded font-bold text-base ${currentPage === 'about' ? 'bg-[#EAF4FA] text-[#0B4F8A]' : 'text-[#062A4D]'}`}
            >
              About Royal Swalf
            </button>

            {/* Products Collapsible */}
            <div className="border border-[#D9E4EC] rounded-lg overflow-hidden">
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between p-3 bg-[#F5FAFD] text-left font-bold text-[#062A4D]"
              >
                <span>Products & Fleet</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectionOpen === 'products' && (
                <div className="p-3 bg-white space-y-2 border-t border-[#D9E4EC]">
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left py-2 text-sm text-[#0B4F8A] font-semibold"
                  >
                    View All Products & Specifications →
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left py-1 text-sm text-[#52606D]"
                  >
                    • Cutter Suction Dredgers (CSD 350 - 650)
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left py-1 text-sm text-[#52606D]"
                  >
                    • Multi-Purpose Amphibious Dredgers
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left py-1 text-sm text-[#52606D]"
                  >
                    • Dredge Slurry Pumps & Wear Spares
                  </button>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="w-full text-left py-1 text-sm text-[#52606D]"
                  >
                    • HDPE Pipes & Polyethylene Floaters
                  </button>
                </div>
              )}
            </div>

            {/* Services Collapsible */}
            <div className="border border-[#D9E4EC] rounded-lg overflow-hidden">
              <button
                onClick={() => setMobileSectionOpen(mobileSectionOpen === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between p-3 bg-[#F5FAFD] text-left font-bold text-[#062A4D]"
              >
                <span>Services & Survey</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectionOpen === 'services' && (
                <div className="p-3 bg-white space-y-2 border-t border-[#D9E4EC]">
                  <button
                    onClick={() => handleLinkClick('dredging')}
                    className="w-full text-left py-2 text-sm text-[#0B4F8A] font-semibold"
                  >
                    • Dredging Contracting (Capital & Maintenance)
                  </button>
                  <button
                    onClick={() => handleLinkClick('survey')}
                    className="w-full text-left py-2 text-sm text-[#0B4F8A] font-semibold"
                  >
                    • Hydrographic & Bathymetric Sonar Survey
                  </button>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-left py-1 text-sm text-[#52606D]"
                  >
                    • ROV Subsea Inspection & Hull Cleaning
                  </button>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="w-full text-left py-1 text-sm text-[#52606D]"
                  >
                    • Project Management Consultancy (PMC)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('applications')}
              className={`text-left py-3 px-3 rounded font-bold text-base ${currentPage === 'applications' ? 'bg-[#EAF4FA] text-[#0B4F8A]' : 'text-[#062A4D]'}`}
            >
              Marine Applications
            </button>

            <button
              onClick={() => handleLinkClick('careers')}
              className={`text-left py-3 px-3 rounded font-bold text-base ${currentPage === 'careers' ? 'bg-[#EAF4FA] text-[#0B4F8A]' : 'text-[#062A4D]'}`}
            >
              Careers
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-left py-3 px-3 rounded font-bold text-base ${currentPage === 'contact' ? 'bg-[#EAF4FA] text-[#0B4F8A]' : 'text-[#062A4D]'}`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-[#D9E4EC] space-y-3">
            <button
              onClick={() => handleLinkClick('quote')}
              className="w-full bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold py-3 px-4 rounded text-center block"
            >
              Request a Project Quotation
            </button>
            <div className="text-center text-xs text-[#52606D]">
              Direct Mumbai Tender Desk: +91 98201 44520
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
