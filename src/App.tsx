/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedProduct, setSelectedProduct] = useState<DredgerProduct | null>(null);
  const [quoteProductId, setQuoteProductId] = useState<string | undefined>(undefined);

  // Scroll to top upon page navigation
  const handleNavigate = (page: NavigationPage, params?: { productId?: string; serviceId?: string }) => {
    setCurrentPage(page);
    if (params?.productId) {
      setQuoteProductId(params.productId);
      const matched = DREDGER_PRODUCTS.find(p => p.id === params.productId);
      if (matched && page === 'products') {
        setSelectedProduct(matched);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        {currentPage === 'home' && (
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
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            onNavigate={handleNavigate} 
            onSelectProduct={handleSelectProduct} 
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'dredging' && (
          <DredgingPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'survey' && (
          <SurveyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'applications' && (
          <ApplicationsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'careers' && (
          <CareersPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'quote' && (
          <QuotePage initialProductId={quoteProductId} />
        )}
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
