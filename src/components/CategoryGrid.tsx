import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { ProductCategory } from '../types';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCardItem {
  id: ProductCategory;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  image: string;
}

export const CategoryGrid: React.FC = () => {
  const { setActiveCategory, isRtl, language } = useRestaurant();

  const categoriesData: CategoryCardItem[] = [
    {
      id: 'starters',
      titleEn: 'Haute Starters & Crudo',
      titleAr: 'المقبلات الفاخرة',
      subtitleEn: 'Truffle burrata, lobster brioche & Wagyu carpaccio',
      subtitleAr: 'بوراتا الكمأة، توست الكركند، وكارباتشيو الواغيو',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mains',
      titleEn: 'Signature Main Courses',
      titleAr: 'الأطباق الرئيسية',
      subtitleEn: 'Chilean seabass, duck magret & braised lamb shanks',
      subtitleAr: 'سيباس تشيلي، صدر البط، وموزات الغنم بالفريكة',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'signatures',
      titleEn: 'Chef’s Wagyu & Gold Creations',
      titleAr: 'أطباق الشيف الخاصة',
      subtitleEn: 'Grade A5 Wagyu tenderloin with black Périgord truffle',
      subtitleAr: 'تندرلوين واغيو A5 بالكمأة السوداء وورق الذهب',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cakes',
      titleEn: 'Cakes & French Pâtisserie',
      titleAr: 'الكيك والحلويات الفرنسية',
      subtitleEn: 'Celebration cakes, mille-feuille & grand cru Opéra',
      subtitleAr: 'كيكات المناسبات، الميل فوي، وكيكة الأوبرا بالذهب',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'desserts',
      titleEn: 'Desserts & Tartes Fines',
      titleAr: 'الحلويات والأنتروميه',
      subtitleEn: 'Cardamom saffron tart, warm date fondant & pavlova',
      subtitleAr: 'تارت الهيل والزعفران، فوندان التمر، وبافلوفا الورد',
      image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'beverages',
      titleEn: 'Specialty Coffee & Elixirs',
      titleAr: 'القهوة المختصة والمشروبات',
      subtitleEn: 'Royal Saudi Gahwa, iced saffron latte & sparkling fizzy nectars',
      subtitleAr: 'القهوة السعودية بدلة النحاس، سبانش لاتيه، وعصائر فوّارة',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gifts',
      titleEn: 'Royal Hampers & Keepsakes',
      titleAr: 'صناديق الهدايا الملكية',
      subtitleEn: 'Macaron coffrets, Medjool date truffles & VIP trunks',
      subtitleAr: 'صناديق الماكرون الملكي، ترافل التمر، وحقائب الضيافة',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleSelect = (catId: ProductCategory) => {
    setActiveCategory(catId);
    const catalogEl = document.getElementById('product-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="category-showcase" className="py-16 md:py-24 bg-[#F7F1E7] border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#C8A96B] font-bold">
            {language === 'ar' ? 'التشكيلات الحصرية' : 'Exclusive Collections'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#202D23] font-normal tracking-tight">
            {language === 'ar' ? 'تصنيفات قائمة أتيلييه ميرال' : 'Signature Menu Categories'}
          </h2>
          <p className="text-xs md:text-sm text-[#665D52] font-light max-w-lg mx-auto">
            {language === 'ar' 
              ? 'تصفح أركان المطبخ والحلويات الفرنسية الفاخرة واختر ما يناسب مناسبتك الرفيعة.'
              : 'Explore each culinary discipline from savory starters to royal celebration cakes.'}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesData.map((cat, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg card-elevation bg-[#202D23] border border-[#C8A96B]/30 ${
                  isWide ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className="aspect-16/10 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={language === 'ar' ? cat.titleAr : cat.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:via-black/20 transition-all" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide group-hover:text-[#DFC89B] transition-colors">
                      {language === 'ar' ? cat.titleAr : cat.titleEn}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-[#C8A96B]/40 flex items-center justify-center text-[#C8A96B] group-hover:bg-[#C8A96B] group-hover:text-[#202D23] transition-all">
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#EFE8DC] font-light line-clamp-1">
                    {language === 'ar' ? cat.subtitleAr : cat.subtitleEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
