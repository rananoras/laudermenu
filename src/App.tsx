/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RestaurantProvider } from './context/RestaurantContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoodCarousel3D } from './components/FoodCarousel3D';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCatalog } from './components/ProductCatalog';
import { StorySection } from './components/StorySection';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LoyaltyModal } from './components/LoyaltyModal';
import { AccountModal } from './components/AccountModal';
import { AdminCmsModal } from './components/AdminCmsModal';
import { SupportChatWidget } from './components/SupportChatWidget';
import { FloatingCartButton } from './components/FloatingCartButton';
import { ToastContainer } from './components/ToastContainer';

export default function App() {
  return (
    <RestaurantProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F1E7] text-[#202D23] selection:bg-[#E8C9C5] selection:text-[#202D23]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-1">
          {/* 1. Cinematic Hero */}
          <Hero />

          {/* 2. Interactive 3D-Style Food Carousel */}
          <FoodCarousel3D />

          {/* 3. Signature Menu Categories */}
          <CategoryGrid />

          {/* 4. Complete Online Product Catalog & Filters */}
          <ProductCatalog />

          {/* 5. Restaurant Heritage & Culinary Story */}
          <StorySection />
        </main>

        {/* Luxury Footer */}
        <Footer />

        {/* Modals & Interactive Drawers */}
        <CartDrawer />
        <ProductQuickViewModal />
        <WhatsAppModal />
        <CheckoutModal />
        <LoyaltyModal />
        <AccountModal />
        <AdminCmsModal />

        {/* Customer Support Chat Widget (Predefined FAQ) */}
        <SupportChatWidget />

        {/* Mobile Floating Cart Shortcut */}
        <FloatingCartButton />

        {/* Gold Toast Notifications */}
        <ToastContainer />
      </div>
    </RestaurantProvider>
  );
}
