import React, { useState, useEffect } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X, 
  Award, 
  Settings, 
  Globe, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { ProductCategory } from '../types';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    t,
    isRtl,
    cartCount,
    cartTotal,
    formatPrice,
    setIsCartOpen,
    user,
    setIsAccountOpen,
    setIsLoyaltyOpen,
    setIsAdminOpen,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery
  } = useRestaurant();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCategory = (catId: ProductCategory) => {
    setActiveCategory(catId);
    setIsMobileMenuOpen(false);
    const catalogEl = document.getElementById('product-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#202D23]/95 backdrop-blur-md text-[#F7F1E7] border-b border-[#33251E] transition-all duration-300">
      
      {/* 1. Upper Announcement & Concierge Strip */}
      <div className="bg-[#17211A] text-[#DFC89B] text-xs py-2 px-4 border-b border-[#33251E]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Location & Hours */}
          <div className="hidden md:flex items-center gap-4 text-[11px] text-[#C7B7A4]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>{t.flagshipLocation}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>12:00 PM – 01:00 AM</span>
            </div>
          </div>

          {/* Cycling announcement */}
          <div className="flex-1 text-center font-medium text-xs text-[#F7F1E7] px-2 truncate">
            {t.announcement}
          </div>

          {/* Language Switcher & WhatsApp Concierge */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-[#202D23] hover:bg-[#33251E] text-[#C8A96B] px-2.5 py-1 rounded-full border border-[#C8A96B]/40 text-xs font-semibold transition-all"
              title="Toggle Language / تغيير اللغة"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            <a
              href="tel:+966501234567"
              className="hidden sm:flex items-center gap-1 text-[11px] text-[#C8A96B] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span dir="ltr">+966 50 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Left: Mobile menu & Search */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F7F1E7] hover:text-[#C8A96B] lg:hidden transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-wider text-[#DFC89B] hover:text-white px-3 py-1.5 rounded-full border border-[#33251E] hover:border-[#C8A96B]/50 transition-all"
            >
              <Search className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>{t.search}</span>
            </button>
          </div>

          {/* Center: Original Brand Emblem & Monogram */}
          <div 
            className="flex flex-col items-center justify-center text-center cursor-pointer select-none"
            onClick={() => handleNavCategory('all')}
          >
            <div className="flex items-center gap-2">
              <span className="hidden sm:block h-[1px] w-8 md:w-12 bg-[#C8A96B]/50" />
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-[#C8A96B] bg-[#17211A] flex items-center justify-center shadow-lg">
                <span className="font-serif font-bold text-base md:text-lg text-[#C8A96B] tracking-tight">
                  AM
                </span>
              </div>
              <span className="hidden sm:block h-[1px] w-8 md:w-12 bg-[#C8A96B]/50" />
            </div>

            <h1 className="text-xl md:text-3xl font-serif tracking-[0.2em] text-[#F7F1E7] font-medium uppercase mt-1">
              {t.brandName}
            </h1>
            <p className="text-[10px] md:text-xs font-serif tracking-[0.2em] text-[#C8A96B]">
              {t.brandSubtitle}
            </p>
          </div>

          {/* Right: Loyalty, Account, Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Loyalty Quick Pill */}
            <button
              onClick={() => setIsLoyaltyOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17211A] border border-[#C8A96B]/40 text-xs text-[#DFC89B] hover:bg-[#33251E] transition-all"
              title="Le Cercle Miral Rewards"
            >
              <Award className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span className="font-semibold">{user.points} pts</span>
              <span className="text-[10px] bg-[#C8A96B] text-[#202D23] px-1.5 py-0.2 rounded-full font-bold">
                {user.tier}
              </span>
            </button>

            {/* Customer Account */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-2 text-[#F7F1E7] hover:text-[#C8A96B] rounded-full hover:bg-[#33251E] transition-all"
              title={t.account}
              aria-label={t.account}
            >
              <User className="w-5 h-5" />
            </button>

            {/* Admin CMS */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="hidden md:flex p-2 text-[#DFC89B] hover:text-[#C8A96B] rounded-full hover:bg-[#33251E] transition-all"
              title={t.cmsPortal}
              aria-label={t.cmsPortal}
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] px-3.5 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg font-bold transition-all hover:scale-105"
              aria-label={t.bag}
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-[#202D23]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-[#202D23] text-[#C8A96B] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
                {cartTotal > 0 ? formatPrice(cartTotal) : t.bag}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar Expander */}
        {isSearchOpen && (
          <div className="pb-4 pt-1 animate-in fade-in duration-200">
            <div className="relative max-w-xl mx-auto">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A96B] ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className={`w-full bg-[#17211A] border border-[#C8A96B]/50 rounded-full py-2.5 text-xs sm:text-sm text-white placeholder-[#8F8172] focus:outline-none focus:ring-2 focus:ring-[#C8A96B]/60 ${
                  isRtl ? 'pr-10 pl-10' : 'pl-10 pr-10'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-white ${isRtl ? 'left-3.5' : 'right-3.5'}`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* 3. Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8 py-3 border-t border-[#33251E]/90 text-xs font-medium uppercase tracking-widest text-[#DFC89B]">
          <button
            onClick={() => handleNavCategory('all')}
            className={`hover:text-white transition-colors pb-1 border-b-2 ${
              activeCategory === 'all' ? 'border-[#C8A96B] text-white font-bold' : 'border-transparent'
            }`}
          >
            {t.navMenu}
          </button>

          <button
            onClick={() => scrollToSection('category-showcase')}
            className="hover:text-white transition-colors pb-1 border-b-2 border-transparent"
          >
            {t.navCategories}
          </button>

          <button
            onClick={() => scrollToSection('carousel-3d')}
            className="hover:text-white transition-colors pb-1 border-b-2 border-transparent flex items-center gap-1 text-[#C8A96B]"
          >
            <Sparkles className="w-3 h-3" />
            <span>{language === 'ar' ? 'أطباق الشيف 3D' : '3D Signatures'}</span>
          </button>

          <button
            onClick={() => scrollToSection('story-section')}
            className="hover:text-white transition-colors pb-1 border-b-2 border-transparent"
          >
            {t.navStory}
          </button>

          <button
            onClick={() => setIsLoyaltyOpen(true)}
            className="hover:text-white transition-colors pb-1 border-b-2 border-transparent"
          >
            {t.navRewards}
          </button>

          <button
            onClick={() => scrollToSection('footer-section')}
            className="hover:text-white transition-colors pb-1 border-b-2 border-transparent"
          >
            {t.navSupport}
          </button>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="hover:text-white transition-colors pb-1 border-b-2 border-transparent text-[#E8C9C5]"
          >
            {t.cmsPortal}
          </button>
        </nav>
      </div>

      {/* 4. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#17211A] border-t border-[#33251E] px-4 py-6 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
          {/* Mobile Search */}
          <div className="relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A96B] ${isRtl ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full bg-[#202D23] border border-[#33251E] rounded-full py-2 text-xs text-white placeholder-gray-400 ${
                isRtl ? 'pr-9 pl-3' : 'pl-9 pr-3'
              }`}
            />
          </div>

          {/* Links */}
          <div className="space-y-1 border-b border-[#33251E] pb-3">
            <button
              onClick={() => handleNavCategory('all')}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#202D23] text-sm text-[#F7F1E7]"
            >
              {t.navMenu}
            </button>
            <button
              onClick={() => scrollToSection('carousel-3d')}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#202D23] text-sm text-[#C8A96B] flex items-center justify-between"
            >
              <span>{language === 'ar' ? 'أطباق الشيف 3D' : '3D Signatures'}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => scrollToSection('story-section')}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#202D23] text-sm text-[#F7F1E7]"
            >
              {t.navStory}
            </button>
            <button
              onClick={() => {
                setIsLoyaltyOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#202D23] text-sm text-[#DFC89B]"
            >
              {t.navRewards} ({user.points} pts)
            </button>
            <button
              onClick={() => {
                setIsAccountOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#202D23] text-sm text-[#F7F1E7]"
            >
              {t.account}
            </button>
            <button
              onClick={() => {
                setIsAdminOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#202D23] text-sm text-[#E8C9C5]"
            >
              {t.cmsPortal}
            </button>
          </div>

          {/* Language Switcher in Mobile Drawer */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-[#8F8172]">Language / اللغة:</span>
            <button
              onClick={toggleLanguage}
              className="bg-[#C8A96B] text-[#202D23] px-4 py-1.5 rounded-full text-xs font-bold"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
