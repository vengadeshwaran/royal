/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { TrustIntro } from './components/home/TrustIntro';
import { CoreBusinessSection } from './components/home/CoreBusinessSection';
import { FeaturedDredgers } from './components/home/FeaturedDredgers';
import { DredgingServicesOverview } from './components/home/DredgingServicesOverview';
import { SurveyInspectionHighlight } from './components/home/SurveyInspectionHighlight';
import { CustomEngineering } from './components/home/CustomEngineering';
import { ApplicationsSection } from './components/home/ApplicationsSection';
import { WhySwalf } from './components/home/WhySwalf';
import { ProcessTimeline } from './components/home/ProcessTimeline';
import { ProjectCta } from './components/home/ProjectCta';

import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { DredgingPage } from './components/pages/DredgingPage';
import { SurveyPage } from './components/pages/SurveyPage';
import { ApplicationsPage } from './components/pages/ApplicationsPage';
import { CareersPage } from './components/pages/CareersPage';
import { ContactPage } from './components/pages/ContactPage';
import { QuotePage } from './components/pages/QuotePage';
import { ProductDetailModal } from './components/pages/ProductDetailModal';

import { DredgerProduct, NavigationPage } from './types/marine';
import { DREDGER_PRODUCTS } from './data/marineData';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = useMemo(() => {
    const path = location.pathname.split('/')[1] || 'home';
    return path as NavigationPage;
  }, [location.pathname]);

  const [selectedProduct, setSelectedProduct] = useState<DredgerProduct | null>(null);
  const [quoteProductId, setQuoteProductId] = useState<string | undefined>(undefined);

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = (page: NavigationPage, params?: { productId?: string; serviceId?: string }) => {
    if (params?.productId) {
      setQuoteProductId(params.productId);
      const matched = DREDGER_PRODUCTS.find(p => p.id === params.productId);
      if (matched && page === 'products') {
        setSelectedProduct(matched);
      }
    }
    
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  const handleSelectProduct = (product: DredgerProduct) => {
    setSelectedProduct(product);
  };

  const handleRequestQuoteForProduct = (productId: string) => {
    setQuoteProductId(productId);
    handleNavigate('quote', { productId });
  };

  return (
    <div className="min-h-screen bg-white text-[#102A43] flex flex-col font-sans selection:bg-[#EAF4FA] selection:text-[#062A4D]">
      {/* Global Corporate Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content Body */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <Hero onNavigate={handleNavigate} />
              <TrustIntro onNavigate={handleNavigate} />
              <CoreBusinessSection onNavigate={handleNavigate} />
              <FeaturedDredgers 
                onNavigate={handleNavigate} 
                onSelectProduct={handleSelectProduct} 
              />
              <DredgingServicesOverview onNavigate={handleNavigate} />
              <SurveyInspectionHighlight onNavigate={handleNavigate} />
              <CustomEngineering onNavigate={handleNavigate} />
              <ApplicationsSection onNavigate={handleNavigate} />
              <WhySwalf />
              <ProcessTimeline />
              <ProjectCta onNavigate={handleNavigate} />
            </>
          } />

          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/products" element={<ProductsPage onNavigate={handleNavigate} onSelectProduct={handleSelectProduct} />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/dredging" element={<DredgingPage onNavigate={handleNavigate} />} />
          <Route path="/survey" element={<SurveyPage onNavigate={handleNavigate} />} />
          <Route path="/applications" element={<ApplicationsPage onNavigate={handleNavigate} />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage initialProductId={quoteProductId} />} />
        </Routes>
      </main>

      {/* Modal for In-depth Product Technical Specifications */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteForProduct}
      />

      {/* Global Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
