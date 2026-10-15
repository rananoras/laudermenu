import React, { useState, useMemo } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { ProductCard } from './ProductCard';
import { ProductCategory } from '../types';
import { Filter, SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { 
    products, 
    activeCategory, 
    setActiveCategory, 
    searchQuery, 
    setSearchQuery, 
    language, 
    t 
  } = useRestaurant();

  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all' as ProductCategory, label: t.catAll },
    { id: 'starters' as ProductCategory, label: t.catStarters },
    { id: 'mains' as ProductCategory, label: t.catMains },
    { id: 'signatures' as ProductCategory, label: t.catSignatures },
    { id: 'cakes' as ProductCategory, label: t.catCakes },
    { id: 'desserts' as ProductCategory, label: t.catDesserts },
    { id: 'beverages' as ProductCategory, label: t.catBeverages },
    { id: 'gifts' as ProductCategory, label: t.catGifts }
  ];

  const tags = [
    { id: 'all', labelEn: 'All Highlights', labelAr: 'الكل' },
    { id: 'Chef Signature', labelEn: 'Chef Signature', labelAr: 'توقيع الشيف' },
    { id: 'Best Seller', labelEn: 'Best Sellers', labelAr: 'الأكثر طلباً' },
    { id: 'Gluten-Free', labelEn: 'Gluten-Free', labelAr: 'خالي من الجلوتين' },
    { id: 'Vegetarian', labelEn: 'Vegetarian', labelAr: 'نباتي' },
    { id: 'Halal Certified', labelEn: 'Halal Certified', labelAr: 'حلال معتمد' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category match
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }

      // Dietary tag match
      if (selectedTag !== 'all') {
        const matchesEn = p.tagsEn.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()));
        const matchesAr = p.tagsAr.some(tag => tag.includes(selectedTag));
        if (!matchesEn && !matchesAr) return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const mEn = p.nameEn.toLowerCase().includes(q) || p.descriptionEn.toLowerCase().includes(q);
        const mAr = p.nameAr.toLowerCase().includes(q) || p.descriptionAr.toLowerCase().includes(q);
        const mIngr = p.ingredientsEn.some(i => i.toLowerCase().includes(q)) || p.ingredientsAr.some(i => i.includes(q));
        if (!mEn && !mAr && !mIngr) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [products, activeCategory, selectedTag, searchQuery, sortBy]);

  const currentCategoryObj = categories.find(c => c.id === activeCategory);

  return (
    <section id="product-catalog" className="py-16 bg-[#F7F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#C8A96B] font-bold">
            {language === 'ar' ? 'القائمة الملكية' : 'The Royal Menu'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#202D23] font-normal tracking-tight">
            {currentCategoryObj ? currentCategoryObj.label : t.catAll}
          </h2>
          <p className="text-xs md:text-sm text-[#665D52] font-light">
            {language === 'ar'
              ? 'أطباق طازجة ومعدة يدوياً في مطبخ وأتيلييه ميرال بالرياض مع خيارات التوصيل الفوري أو المجدول.'
              : 'Handcrafted with noble ingredients in Riyadh, available for immediate or scheduled delivery.'}
          </p>
        </div>

        {/* 1. Category Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {categories.map(cat => {
            const count = products.filter(p => cat.id === 'all' || p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#202D23] text-white shadow-lg scale-105 border border-[#C8A96B]'
                    : 'bg-white text-[#202D23] border border-[#EADFCF] hover:border-[#C8A96B] hover:text-[#C8A96B]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-[#C8A96B] text-[#202D23]' : 'bg-[#F7F1E7] text-[#8F8172]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. Filters & Sort Bar */}
        <div className="bg-white border border-[#EADFCF] rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs">
          
          {/* Dietary Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-[#8F8172] flex items-center gap-1 me-1">
              <Filter className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>{language === 'ar' ? 'التصفية:' : 'Filter:'}</span>
            </span>
            {tags.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTag(t.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedTag === t.id
                    ? 'bg-[#202D23] text-[#DFC89B] border border-[#C8A96B]'
                    : 'bg-[#F7F1E7] text-[#665D52] hover:text-[#202D23]'
                }`}
              >
                {language === 'ar' ? t.labelAr : t.labelEn}
              </button>
            ))}
          </div>

          {/* Sort Selection & Search Query Indicator */}
          <div className="flex items-center gap-4 ms-auto">
            {searchQuery && (
              <div className="flex items-center gap-1.5 text-xs text-[#C8A96B]">
                <span>&quot;{searchQuery}&quot;</span>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="underline hover:text-[#202D23]"
                >
                  {language === 'ar' ? 'إلغاء' : 'Clear'}
                </button>
              </div>
            )}

            <div className="flex items-center gap-1.5 text-xs text-[#202D23]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8A96B]" />
              <label htmlFor="sort-select" className="font-semibold">{language === 'ar' ? 'الترتيب:' : 'Sort by:'}</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-[#F7F1E7] border border-[#EADFCF] rounded-lg px-2.5 py-1 text-xs text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
              >
                <option value="featured">{language === 'ar' ? 'المميز وتوصيات الشيف' : 'Chef’s Recommendations'}</option>
                <option value="price-asc">{language === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                <option value="price-desc">{language === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                <option value="rating">{language === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white border border-[#EADFCF] rounded-2xl p-8 space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#202D23] text-[#C8A96B] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-[#202D23]">
              {language === 'ar' ? 'لم يتم العثور على أطباق' : 'No Dishes Found'}
            </h3>
            <p className="text-xs text-[#665D52] leading-relaxed">
              {language === 'ar'
                ? 'جرّب تعديل كلمات البحث أو اختيار تصنيف مختلف من القائمة.'
                : 'Try adjusting your search terms or selecting another category.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedTag('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 bg-[#202D23] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#33251E] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.viewAllMenu}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
