import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { WavyBackground3D } from './WavyBackground3D';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  MessageCircle, 
  ShieldCheck, 
  Utensils, 
  Truck, 
  Award,
  Crown
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { 
    t, 
    isRtl, 
    language,
    setActiveCategory, 
    openWhatsAppForCart, 
    setIsCartOpen 
  } = useRestaurant();

  const handleExplore = () => {
    setActiveCategory('all');
    const catalog = document.getElementById('product-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderNow = () => {
    const catalog = document.getElementById('product-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1A251D] via-[#202D23] to-[#17211A] text-[#F7F1E7] border-b border-[#33251E] min-h-[550px] flex items-center">
      {/* 3D Wavy Luxury Canvas Backdrop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-90">
        <WavyBackground3D interactive={true} showControls={true} />
      </div>

      {/* Subtle radial background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17211A] border border-[#C8A96B]/50 text-xs text-[#DFC89B] tracking-wider uppercase shadow-md">
              <Crown className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>{t.heroSubtitle}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.2] tracking-tight">
              {t.heroTitle}
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm md:text-base text-[#D0C4B4] leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
              {t.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
              <button
                onClick={handleExplore}
                className="group flex items-center gap-2 bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:-translate-y-0.5"
              >
                <span>{t.exploreMenu}</span>
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={handleOrderNow}
                className="flex items-center gap-2 bg-[#202D23] hover:bg-[#33251E] text-[#F7F1E7] border border-[#C8A96B]/60 px-6 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <Utensils className="w-4 h-4 text-[#C8A96B]" />
                <span>{t.orderNow}</span>
              </button>

              <button
                onClick={openWhatsAppForCart}
                className="flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/40 px-4 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors"
                title="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.orderViaWhatsApp}</span>
              </button>
            </div>

            {/* Location & Delivery Guarantee Announcement */}
            <div className="pt-2 text-xs text-[#DFC89B] flex items-center justify-center lg:justify-start gap-2">
              <Truck className="w-4 h-4 text-[#C8A96B]" />
              <span>{t.announcement}</span>
            </div>
          </div>

          {/* Right Cinematic Food Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative gilded ring */}
              <div className="absolute -inset-2 md:-inset-4 border border-[#C8A96B]/30 rounded-2xl pointer-events-none transform rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#33251E] bg-[#17211A] aspect-4/3 sm:aspect-16/12">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
                  alt="Atelier Miral Wagyu and Truffle"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Plate Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#202D23]/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-[#C8A96B]/40 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-serif tracking-widest text-[#C8A96B]">
                      {t.carouselBadge}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base text-white font-medium">
                      {isRtl ? 'تندرلوين واغيو بالكمأة السوداء' : 'Smoked Black Truffle Wagyu'}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-bold text-[#C8A96B] block">
                      360 {t.currencySar}
                    </span>
                    <button
                      onClick={handleOrderNow}
                      className="text-[11px] underline text-[#DFC89B] hover:text-white"
                    >
                      {t.quickView} →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Hallmarks Bar */}
        <div className="mt-14 pt-8 border-t border-[#33251E] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-full bg-[#17211A] border border-[#C8A96B]/40 text-[#C8A96B] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-xs uppercase font-serif tracking-widest text-white font-semibold">
              {t.pillar1Title}
            </h4>
            <p className="text-[11px] text-[#A89886]">
              {t.pillar1Desc}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-full bg-[#17211A] border border-[#C8A96B]/40 text-[#C8A96B] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-xs uppercase font-serif tracking-widest text-white font-semibold">
              {t.pillar2Title}
            </h4>
            <p className="text-[11px] text-[#A89886]">
              {t.pillar2Desc}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-full bg-[#17211A] border border-[#C8A96B]/40 text-[#C8A96B] flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
            <h4 className="text-xs uppercase font-serif tracking-widest text-white font-semibold">
              {t.pillar3Title}
            </h4>
            <p className="text-[11px] text-[#A89886]">
              {t.pillar3Desc}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 p-2">
            <div className="w-8 h-8 rounded-full bg-[#17211A] border border-[#C8A96B]/40 text-[#C8A96B] flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-xs uppercase font-serif tracking-widest text-white font-semibold">
              {language === 'ar' ? 'نادي ميرال الذهبي' : 'Le Cercle Miral'}
            </h4>
            <p className="text-[11px] text-[#A89886]">
              {language === 'ar' ? 'نقطة مقابل كل 1 ر.س وقسائم فورية' : '1 pt per 1 SAR & luxury vouchers'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
