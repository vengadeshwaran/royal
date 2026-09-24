import React from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  FileText, 
  ShieldCheck, 
  Anchor, 
  Layers, 
  Gauge, 
  Sliders 
} from 'lucide-react';
import { DredgerProduct } from '../../types/marine';

interface ProductDetailModalProps {
  product: DredgerProduct | null;
  onClose: () => void;
  onRequestQuote: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#062A4D]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D9E4EC]">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#D9E4EC] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B4F8A] bg-[#EAF4FA] px-2.5 py-1 rounded">
              Specification Sheet
            </span>
            <span className="text-xs text-[#52606D] font-mono hidden sm:inline">
              REF: SWALF-TECH-{product.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Print Specification Sheet"
              className="p-2 text-[#52606D] hover:text-[#062A4D] hover:bg-[#F5FAFD] rounded transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#52606D] hover:text-[#062A4D] hover:bg-[#F5FAFD] rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Hero Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-lg overflow-hidden border border-[#D9E4EC] bg-[#062A4D] shadow-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {product.dischargeDiameter && (
                <div className="p-3 bg-[#062A4D] text-white text-xs font-mono flex justify-between">
                  <span>Discharge Bore:</span>
                  <span className="font-bold text-[#EAF4FA]">{product.dischargeDiameter}</span>
                </div>
              )}
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#0B78B5] font-semibold">
                {product.tagline}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062A4D]">
                {product.name}
              </h2>
              <p className="text-sm text-[#52606D] leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Quick Specs Highlight Box */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                {product.maxDredgingDepth && (
                  <div className="bg-[#F5FAFD] p-2 rounded border border-[#D9E4EC]">
                    <span className="text-[#52606D] block">Max Dredging Depth:</span>
                    <span className="font-mono font-bold text-[#062A4D]">{product.maxDredgingDepth}</span>
                  </div>
                )}
                {product.waterFlowCapacity && (
                  <div className="bg-[#F5FAFD] p-2 rounded border border-[#D9E4EC]">
                    <span className="text-[#52606D] block">Water Flow Capacity:</span>
                    <span className="font-mono font-bold text-[#062A4D]">{product.waterFlowCapacity}</span>
                  </div>
                )}
                {product.totalInstalledPower && (
                  <div className="bg-[#F5FAFD] p-2 rounded border border-[#D9E4EC]">
                    <span className="text-[#52606D] block">Installed Power:</span>
                    <span className="font-mono font-bold text-[#062A4D]">{product.totalInstalledPower}</span>
                  </div>
                )}
                {product.dischargeDistance && (
                  <div className="bg-[#F5FAFD] p-2 rounded border border-[#D9E4EC]">
                    <span className="text-[#52606D] block">Pumping Distance:</span>
                    <span className="font-mono font-bold text-[#062A4D]">{product.dischargeDistance}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Technical Parameters Table */}
          {product.technicalSpecs && product.technicalSpecs.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#D9E4EC]">
                <Gauge className="w-4 h-4 text-[#0B4F8A]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#062A4D]">
                  Technical Parameters & Dimensions
                </h3>
              </div>

              <div className="border border-[#D9E4EC] rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F5FAFD] text-[#062A4D] border-b border-[#D9E4EC] font-bold">
                    <tr>
                      <th className="p-3">Specification Parameter</th>
                      <th className="p-3">Standard Engineering Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9E4EC]">
                    {product.technicalSpecs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5FAFD]/40'}>
                        <td className="p-3 font-semibold text-[#102A43]">{spec.label}</td>
                        <td className="p-3 font-mono font-medium text-[#0B4F8A]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Design Features */}
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#D9E4EC]">
              <CheckCircle2 className="w-4 h-4 text-[#0B4F8A]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#062A4D]">
                Design Advantages & Mechanical Features
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#F5FAFD] p-3 rounded border border-[#D9E4EC] text-xs text-[#102A43]">
                  <CheckCircle2 className="w-4 h-4 text-[#0B78B5] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard vs Optional Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-[#F5FAFD] border border-[#D9E4EC] rounded-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#062A4D] mb-2">
                Standard Equipment Included:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#52606D]">
                {product.standardEquipment.map((eq, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0B4F8A] font-bold">✓</span>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white border border-[#D9E4EC] rounded-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#062A4D] mb-2">
                Optional Upgrades & Attachments:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#52606D]">
                {product.optionalEquipment.map((opt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0B78B5] font-bold">+</span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-10 bg-[#F5FAFD] border-t border-[#D9E4EC] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#52606D]">
            Compliant with Indian Register of Shipping (IRS) and DNV guidelines.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#52606D] hover:text-[#062A4D] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.id);
              }}
              className="bg-[#062A4D] hover:bg-[#0B4F8A] text-white font-bold text-xs px-6 py-2.5 rounded flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <span>Request Quotation for {product.name.split('(')[0].trim()}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
