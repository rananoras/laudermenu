import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { Crown, ShieldCheck, Sparkles, Truck, Award } from 'lucide-react';

export const StorySection: React.FC = () => {
  const { t, language } = useRestaurant();

  return (
    <section id="story-section" className="py-20 bg-[#202D23] text-[#F7F1E7] border-b border-[#33251E] relative overflow-hidden">
      {/* Decorative gold background watermark */}
      <div className="absolute end-0 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[28rem] font-serif font-bold text-[#C8A96B]">AM</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Top Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#C8A96B]/40 aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1000&q=80"
                  alt="Executive Chef at Atelier Miral"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset secondary image */}
              <div className="hidden sm:block absolute -bottom-8 -end-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#202D23]">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                  alt="French croissant & morning bake"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Riyadh Heritage Badge */}
              <div className="absolute top-6 start-2 sm:-start-6 bg-[#17211A]/95 backdrop-blur-md border border-[#C8A96B] p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C8A96B] text-[#202D23] flex items-center justify-center font-serif font-bold text-sm">
                  AM
                </div>
                <div>
                  <div className="text-[10px] uppercase font-serif tracking-widest text-[#DFC89B]">
                    {language === 'ar' ? 'الرياض • حي حطين' : 'Riyadh • Hittin Flagship'}
                  </div>
                  <div className="font-serif text-xs font-semibold text-white">
                    {language === 'ar' ? 'أصالة الطهي وكرم الضيافة' : 'Culinary Eminence'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17211A] border border-[#C8A96B]/40 text-xs text-[#DFC89B] tracking-wider uppercase">
              <Crown className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>{t.storyBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal leading-[1.2]">
              {t.storyTitle}
            </h2>

            <p className="text-sm md:text-base text-[#D0C4B4] leading-relaxed font-light">
              {t.storyParagraph1}
            </p>

            <p className="text-sm md:text-base text-[#D0C4B4] leading-relaxed font-light">
              {t.storyParagraph2}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#33251E]">
              <div className="space-y-1">
                <div className="font-serif text-lg font-bold text-[#C8A96B]">01</div>
                <h4 className="text-xs uppercase font-serif tracking-wider text-white font-semibold">
                  {t.pillar1Title}
                </h4>
                <p className="text-[11px] text-[#A89886]">
                  {t.pillar1Desc}
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-serif text-lg font-bold text-[#C8A96B]">02</div>
                <h4 className="text-xs uppercase font-serif tracking-wider text-white font-semibold">
                  {t.pillar2Title}
                </h4>
                <p className="text-[11px] text-[#A89886]">
                  {t.pillar2Desc}
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-serif text-lg font-bold text-[#C8A96B]">03</div>
                <h4 className="text-xs uppercase font-serif tracking-wider text-white font-semibold">
                  {t.pillar3Title}
                </h4>
                <p className="text-[11px] text-[#A89886]">
                  {t.pillar3Desc}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="pt-2">
              <blockquote className="font-serif italic text-sm text-[#DFC89B] border-s-2 border-[#C8A96B] ps-4">
                {language === 'ar'
                  ? '«الطهي الفاخر ليس مجرد وجبة، بل هو لحظة احتفالية تتجاوز المكان والزمان لتلامس الوجدان.»'
                  : '“Haute gastronomy is not merely sustenance; it is an unforgettable celebration of shared time and noble terroirs.”'}
              </blockquote>
              <div className="text-xs font-semibold text-white mt-1.5 ps-4">
                Chef Alexandre & Najdi Culinary Brigade
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
