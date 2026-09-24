import React from 'react';
import { ArrowRight, ChevronRight, Gauge, Anchor, Droplets, Maximize2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DredgerProduct, NavigationPage } from '../../types/marine';
import { DREDGER_PRODUCTS } from '../../data/marineData';

interface FeaturedDredgersProps {
  onNavigate: (page: NavigationPage, params?: { productId?: string }) => void;
  onSelectProduct: (product: DredgerProduct) => void;
}

export const FeaturedDredgers: React.FC<FeaturedDredgersProps> = ({ 
  onNavigate, 
  onSelectProduct 
}) => {
  // Select 4 prime showcase products for Home page
  const featured = DREDGER_PRODUCTS.slice(0, 4);

  return (
    <section className="py-20 bg-white border-b border-[#D9E4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            kicker="Marine Machinery & Vessel Catalog"
            title="Dredgers & Marine Equipment"
            subtitle="Engineered for high solids concentrations, harsh marine strata, and unyielding industrial duty cycles."
            className="mb-0 max-w-2xl"
          />

          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B4F8A] hover:text-[#062A4D] transition-colors cursor-pointer group"
          >
            <span>View Complete Product Catalog (10+ Vessel Series)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2x2 Large Image-Based Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-[#D9E4EC] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Marine Tag */}
              <div className="relative h-64 overflow-hidden bg-[#062A4D]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/80 via-transparent to-transparent"></div>
                
                {/* Engineering discharge bore badge */}
                {product.dischargeDiameter && (
                  <div className="absolute top-4 left-4 bg-[#062A4D]/90 backdrop-blur-sm text-white border border-[#0B4F8A]/40 px-3 py-1 rounded text-xs font-mono font-bold">
                    Discharge: {product.dischargeDiameter}
                  </div>
                )}

                {/* Subtitle tag at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#EAF4FA] font-medium font-mono">
                    {product.tagline}
                  </div>
                </div>
              </div>

              {/* Technical Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#062A4D] group-hover:text-[#0B4F8A] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="mt-2 text-sm text-[#52606D] leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Key Specifications Grid */}
                  <div className="mt-4 pt-4 border-t border-[#D9E4EC] grid grid-cols-2 gap-3 text-xs">
                    {product.maxDredgingDepth && (
                      <div className="bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                        <span className="text-[#52606D] block">Max Depth:</span>
                        <span className="font-mono font-bold text-[#062A4D]">{product.maxDredgingDepth}</span>
                      </div>
                    )}
                    {product.waterFlowCapacity && (
                      <div className="bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                        <span className="text-[#52606D] block">Water Flow:</span>
                        <span className="font-mono font-bold text-[#062A4D]">{product.waterFlowCapacity}</span>
                      </div>
                    )}
                    {product.totalInstalledPower && (
                      <div className="bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                        <span className="text-[#52606D] block">Installed Power:</span>
                        <span className="font-mono font-bold text-[#062A4D]">{product.totalInstalledPower}</span>
                      </div>
                    )}
                    {product.solidProduction && (
                      <div className="bg-[#F5FAFD] p-2.5 rounded border border-[#D9E4EC]/60">
                        <span className="text-[#52606D] block">Solid Output:</span>
                        <span className="font-mono font-bold text-[#062A4D]">{product.solidProduction}</span>
                      </div>
                    )}
                  </div>

                  {/* Typical Applications */}
                  <div className="mt-4">
                    <span className="text-xs font-semibold text-[#102A43] block mb-1.5">Primary Applications:</span>
                    <div className="flex flex-wrap gap-1.5 text-xs text-[#52606D]">
                      {product.applications.slice(0, 3).map((app, i) => (
                        <span key={i} className="bg-[#EAF4FA] text-[#062A4D] px-2.5 py-1 rounded text-[11px] font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#D9E4EC] flex items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B4F8A] hover:text-[#062A4D] transition-colors cursor-pointer"
                  >
                    <span>View Technical Specifications</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('quote', { productId: product.id })}
                    className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white text-xs font-bold px-4 py-2 rounded transition-colors cursor-pointer"
                  >
                    Request Quotation
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Builds */}
        <div className="mt-12 bg-[#EAF4FA] border border-[#D9E4EC] rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#062A4D]">
              Need a Custom-Built Dredger or Tailored Hydraulic Pump Configuration?
            </h4>
            <p className="text-sm text-[#52606D]">
              Our naval architects and marine engineers custom-design pontoon drafts, cutter torque, and slurry heads for site-specific constraints.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('quote')}
              className="bg-[#0B4F8A] hover:bg-[#062A4D] text-white font-bold text-sm px-6 py-3 rounded transition-colors cursor-pointer shadow-sm"
            >
              Discuss Custom Engineering
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
