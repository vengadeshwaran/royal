import React, { useState } from 'react';
import { 
  Ship, 
  Search, 
  Layers, 
  SlidersHorizontal, 
  ArrowRight, 
  ChevronRight, 
  Gauge, 
  Filter, 
  Check, 
  FileText 
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DREDGER_PRODUCTS } from '../../data/marineData';
import { DredgerProduct, NavigationPage, ProductCategory } from '../../types/marine';

interface ProductsPageProps {
  onNavigate: (page: NavigationPage, params?: { productId?: string }) => void;
  onSelectProduct: (product: DredgerProduct) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onNavigate, 
  onSelectProduct 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: ProductCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Equipment & Vessels', count: DREDGER_PRODUCTS.length },
    { key: 'dredgers', label: 'Dredgers & Vessels', count: DREDGER_PRODUCTS.filter(p => p.category === 'dredgers').length },
    { key: 'accessories', label: 'Pipes, Pumps & Spares', count: DREDGER_PRODUCTS.filter(p => p.category === 'accessories').length },
    { key: 'marine-equipment', label: 'Marine Support Crafts', count: DREDGER_PRODUCTS.filter(p => p.category === 'marine-equipment').length },
    { key: 'brokerage', label: 'Brokerage / Buy & Sell', count: DREDGER_PRODUCTS.filter(p => p.category === 'brokerage').length }
  ];

  const filteredProducts = DREDGER_PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.applications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Subpage Header Banner */}
      <section className="bg-[#062A4D] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#0B4F8A]">
        <div className="absolute inset-0 marine-grid-dark opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#0B78B5] font-semibold">
              <span>Maritime Equipment Catalog</span>
              <span className="opacity-40">·</span>
              <span>Engineering Fleet</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Dredgers & Marine Equipment
            </h1>
            <p className="text-base sm:text-lg text-[#EAF4FA]/90 leading-relaxed pt-2">
              High-efficiency stationary cutter suction dredgers, specialized amphibious desilters, 
              high-chrome slurry pumps, HDPE discharge pipelines, and certified auxiliary workboats.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Controls Bar: Filter Tabs & Search */}
      <section className="bg-[#F5FAFD] border-b border-[#D9E4EC] py-6 sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.key
                      ? 'bg-[#062A4D] text-white shadow-sm'
                      : 'bg-white text-[#52606D] hover:text-[#062A4D] border border-[#D9E4EC]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    selectedCategory === cat.key ? 'bg-[#0B4F8A] text-[#EAF4FA]' : 'bg-[#EAF4FA] text-[#0B4F8A]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#52606D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search dredgers, pumps, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#D9E4EC] rounded text-xs text-[#102A43] focus:outline-none focus:border-[#0B4F8A] shadow-xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#52606D] hover:text-[#062A4D]"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#F5FAFD] rounded-lg border border-[#D9E4EC] p-8">
              <Ship className="w-12 h-12 text-[#0B4F8A] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-[#062A4D]">No matching marine equipment found</h3>
              <p className="text-xs text-[#52606D] mt-1 max-w-md mx-auto">
                Try searching for broader keywords like "Cutter", "Pump", "HDPE", or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 bg-[#0B4F8A] text-white text-xs font-bold px-4 py-2 rounded cursor-pointer"
              >
                Reset Catalog Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-[#D9E4EC] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-[#0B4F8A] transition-all flex flex-col justify-between group"
                >
                  {/* Product Visual */}
                  <div className="relative h-56 overflow-hidden bg-[#062A4D]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062A4D]/85 via-[#062A4D]/10 to-transparent"></div>
                    
                    {/* Discharge diameter or category tag */}
                    <div className="absolute top-3 left-3 bg-[#062A4D]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-mono font-bold border border-[#0B4F8A]/40">
                      {product.dischargeDiameter ? `Discharge: ${product.dischargeDiameter}` : product.category.toUpperCase()}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] font-mono text-[#EAF4FA] uppercase">
                        {product.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#062A4D] group-hover:text-[#0B4F8A] transition-colors leading-snug">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-xs text-[#52606D] leading-relaxed line-clamp-3">
                        {product.shortDesc}
                      </p>

                      {/* Specs Row */}
                      <div className="mt-4 pt-3 border-t border-[#D9E4EC] grid grid-cols-2 gap-2 text-[11px]">
                        {product.maxDredgingDepth && (
                          <div className="bg-[#F5FAFD] p-2 rounded">
                            <span className="text-[#52606D] block">Max Depth:</span>
                            <span className="font-mono font-bold text-[#062A4D]">{product.maxDredgingDepth}</span>
                          </div>
                        )}
                        {product.waterFlowCapacity && (
                          <div className="bg-[#F5FAFD] p-2 rounded">
                            <span className="text-[#52606D] block">Water Flow:</span>
                            <span className="font-mono font-bold text-[#062A4D]">{product.waterFlowCapacity}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-[#D9E4EC] flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="text-xs font-bold text-[#0B4F8A] hover:text-[#062A4D] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>View Tech Specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onNavigate('quote', { productId: product.id })}
                        className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-[11px] px-3.5 py-1.5 rounded transition-colors cursor-pointer"
                      >
                        Inquire
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Brokerage & Pre-Owned Dredgers Special Section */}
      <section className="py-16 bg-[#F5FAFD] border-t border-[#D9E4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#D9E4EC] rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#0B78B5] font-bold">
                  Certified Maritime Asset Trading
                </div>
                <h3 className="text-2xl font-extrabold text-[#062A4D]">
                  Looking to Buy, Sell, or Charter Pre-Owned Dredgers & Barges?
                </h3>
                <p className="text-sm text-[#52606D] leading-relaxed">
                  Royal Swalf provides certified pre-purchase ultrasonic thickness testing, pump wear audits, 
                  engine overhaul, shipyard refits, and Indian flag registry transfers for high-value marine dredging assets.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => onNavigate('quote')}
                  className="bg-[#0B4F8A] hover:bg-[#062A4D] text-white font-bold text-sm px-6 py-3 rounded transition-colors shadow-sm cursor-pointer"
                >
                  Contact Brokerage Division
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
