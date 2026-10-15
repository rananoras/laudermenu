import React, { useState, useEffect, useRef } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Eye, 
  MessageCircle, 
  Sparkles, 
  Star,
  Check
} from 'lucide-react';
import { Product } from '../types';

export const FoodCarousel3D: React.FC = () => {
  const { 
    products, 
    formatPrice, 
    addToCart, 
    openQuickView, 
    openWhatsAppForProduct, 
    t, 
    isRtl, 
    language 
  } = useRestaurant();

  // Featured 3D items
  const featuredItems = products.filter(p => p.is3DFeatured || p.category === 'signatures' || p.category === 'cakes').slice(0, 5);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // Auto-slide every 6 seconds unless user paused
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % featuredItems.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [featuredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (isRtl) handleNext();
        else handlePrev();
      } else if (e.key === 'ArrowRight') {
        if (isRtl) handlePrev();
        else handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [featuredItems.length, isRtl]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % featuredItems.length);
  };

  // Touch and drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const diff = e.clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Dragged right
        if (isRtl) handleNext();
        else handlePrev();
      } else {
        // Dragged left
        if (isRtl) handlePrev();
        else handleNext();
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="carousel-3d" className="py-16 md:py-24 bg-[#17211A] text-[#F7F1E7] border-b border-[#33251E] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202D23] border border-[#C8A96B]/40 text-xs font-semibold text-[#DFC89B] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>{t.carouselBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight">
            {t.carouselTitle}
          </h2>

          <p className="text-xs sm:text-sm text-[#A89886] font-light max-w-lg mx-auto">
            {t.carouselSubtitle}
          </p>
        </div>

        {/* 3D Perspective Carousel Stage */}
        <div 
          className="relative h-[480px] sm:h-[530px] w-full flex items-center justify-center perspective-container touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          role="region"
          aria-label="Interactive 3D Food Showcase"
        >
          {featuredItems.map((item, index) => {
            // Calculate distance offset from activeIndex: -2, -1, 0, 1, 2
            let offset = index - activeIndex;
            if (offset > featuredItems.length / 2) offset -= featuredItems.length;
            if (offset < -featuredItems.length / 2) offset += featuredItems.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1 || (offset < -1 && offset > -3);
            const isRight = offset === 1 || (offset > 1 && offset < 3);
            const isHidden = Math.abs(offset) > 2;

            if (isHidden) return null;

            // 3D Transform mathematics
            const xShift = offset * (window.innerWidth < 640 ? 160 : 320);
            const zShift = Math.abs(offset) * -120;
            const rotateY = isRtl ? offset * 25 : offset * -25;
            const scale = isCenter ? 1.05 : 0.82;
            const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.65 : 0.3;
            const zIndex = 30 - Math.abs(offset) * 10;

            const itemName = language === 'ar' ? item.nameAr : item.nameEn;
            const itemDesc = language === 'ar' ? item.descriptionAr : item.descriptionEn;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
                className={`absolute w-[290px] sm:w-[380px] rounded-2xl overflow-hidden cursor-pointer carousel-card-3d bg-[#202D23] border ${
                  isCenter ? 'border-[#C8A96B] shadow-2xl ring-2 ring-[#C8A96B]/30' : 'border-[#33251E] shadow-xl'
                }`}
                style={{
                  transform: `translateX(${xShift}px) translateZ(${zShift}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex
                }}
              >
                {/* Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={itemName}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202D23] via-transparent to-black/20" />

                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-[#17211A]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-[#DFC89B] flex items-center gap-1 border border-[#C8A96B]/30">
                    <Star className="w-3 h-3 fill-[#C8A96B] text-[#C8A96B]" />
                    <span>{item.rating.toFixed(2)}</span>
                  </div>

                  {/* 3D Highlight badge */}
                  <div className="absolute top-3 right-3 bg-[#C8A96B] text-[#202D23] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {language === 'ar' ? 'توقيع الشيف' : 'Signature'}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-white line-clamp-1">
                      {itemName}
                    </h3>
                    <p className="text-xs text-[#C7B7A4] line-clamp-2 mt-1 leading-relaxed">
                      {itemDesc}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-2 border-t border-[#33251E] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-[#A89886] block">
                        {t.price}
                      </span>
                      <div className="font-serif text-lg sm:text-xl font-bold text-[#C8A96B]">
                        {formatPrice(item.price)}
                      </div>
                    </div>

                    {/* Actions if center card */}
                    {isCenter ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openQuickView(item);
                          }}
                          className="p-2 rounded-full bg-[#17211A] text-[#DFC89B] hover:text-white border border-[#33251E] transition-colors"
                          title={t.quickView}
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openWhatsAppForProduct(item, 1);
                          }}
                          className="p-2 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
                          title="WhatsApp Order"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </button>

                        <button
                          onClick={(e) => handleAddToCart(item, e)}
                          className="flex items-center gap-1.5 bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] px-3.5 py-2 rounded-full text-xs font-bold transition-all shadow-md"
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>{t.addedToBag}</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>{t.addToBag}</span>
                            </>
                          )}
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-[#C8A96B] font-medium">
                        {language === 'ar' ? 'انقر للعرض' : 'Click to Focus'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={isRtl ? handleNext : handlePrev}
            className="w-10 h-10 rounded-full bg-[#202D23] border border-[#C8A96B]/50 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#202D23] flex items-center justify-center transition-all shadow-md"
            aria-label={t.prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {featuredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 transition-all rounded-full ${
                  activeIndex === idx ? 'w-8 bg-[#C8A96B]' : 'w-2 bg-[#33251E] hover:bg-[#8F8172]'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={isRtl ? handlePrev : handleNext}
            className="w-10 h-10 rounded-full bg-[#202D23] border border-[#C8A96B]/50 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#202D23] flex items-center justify-center transition-all shadow-md"
            aria-label={t.next}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center text-[11px] text-[#A89886] mt-3">
          {t.dragHint}
        </div>

      </div>
    </section>
  );
};
