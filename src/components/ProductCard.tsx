import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  Heart, 
  Plus, 
  Minus, 
  Eye, 
  Check, 
  Star, 
  MessageCircle,
  Clock,
  Sparkles 
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    formatPrice, 
    addToCart, 
    openQuickView, 
    openWhatsAppForProduct, 
    toggleWishlist, 
    isWishlisted, 
    language, 
    t 
  } = useRestaurant();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const isFavorite = isWishlisted(product.id);
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  const productName = language === 'ar' ? product.nameAr : product.nameEn;
  const productDesc = language === 'ar' ? product.descriptionAr : product.descriptionEn;
  const tags = language === 'ar' ? product.tagsAr : product.tagsEn;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, quantity, selectedVariant);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 2000);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    openWhatsAppForProduct(product, quantity, selectedVariant);
  };

  return (
    <div 
      className="group bg-white border border-[#EADFCF] rounded-2xl overflow-hidden flex flex-col justify-between card-elevation shadow-sm"
    >
      {/* 1. Image Container */}
      <div 
        className="relative aspect-square w-full overflow-hidden bg-[#202D23]/5 cursor-pointer"
        onClick={() => openQuickView(product)}
      >
        <img
          src={product.image}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
          loading="lazy"
        />

        {/* Dark subtle gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Tags */}
        <div className="absolute top-3 start-3 flex flex-col gap-1.5 z-10">
          {tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs ${
                tag.includes('شيف') || tag.includes('Chef')
                  ? 'bg-[#C8A96B] text-[#202D23]'
                  : tag.includes('طلب') || tag.includes('Best')
                  ? 'bg-[#33251E] text-white'
                  : 'bg-[#202D23] text-[#F7F1E7]'
              }`}
            >
              {tag}
            </span>
          ))}

          {product.stockStatus === 'low_stock' && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 font-semibold">
              {t.lowStock}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 end-3 p-2 rounded-full backdrop-blur-md shadow-md transition-all z-10 ${
            isFavorite
              ? 'bg-[#E8C9C5] text-[#33251E] scale-110'
              : 'bg-white/80 text-[#33251E] hover:bg-white hover:text-[#C8A96B]'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Button */}
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="flex items-center gap-1.5 bg-[#202D23]/95 hover:bg-[#33251E] text-[#DFC89B] text-xs font-serif uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-[#C8A96B]/50 backdrop-blur-sm transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>{t.quickView}</span>
          </button>
        </div>
      </div>

      {/* 2. Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#8F8172]">
            <span className="uppercase font-semibold tracking-wider text-[#C8A96B]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#202D23] font-medium text-[11px]">
              <Star className="w-3.5 h-3.5 fill-[#C8A96B] text-[#C8A96B]" />
              <span>{product.rating.toFixed(2)}</span>
              <span className="text-gray-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => openQuickView(product)}
            className="font-serif text-base sm:text-lg text-[#202D23] font-semibold leading-snug cursor-pointer hover:text-[#C8A96B] transition-colors"
          >
            {productName}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#665D52] line-clamp-2 leading-relaxed">
            {productDesc}
          </p>

          {/* Preparation lead or custom message hint */}
          {product.isCustomizableCake && (
            <div className="text-[10px] text-[#C8A96B] font-semibold flex items-center gap-1 pt-0.5">
              <Sparkles className="w-3 h-3" />
              <span>{language === 'ar' ? 'يشمل كتابة إهداء خاص وشموع مجاناً' : 'Includes complimentary calligraphy inscription'}</span>
            </div>
          )}
        </div>

        {/* 3. Variants Selection (if multiple) */}
        {product.variants && product.variants.length > 1 && (
          <div className="mt-3 pt-3 border-t border-[#F2EAE0]">
            <label className="text-[10px] uppercase font-semibold text-[#8F8172] block mb-1">
              {t.portions}:
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`text-start px-2 py-1.5 rounded-lg text-[11px] border transition-all ${
                    selectedVariant?.id === v.id
                      ? 'border-[#C8A96B] bg-[#F7F1E7] text-[#202D23] font-bold shadow-2xs'
                      : 'border-[#EADFCF] bg-white text-[#665D52] hover:border-[#C8A96B]/50'
                  }`}
                >
                  <div className="truncate">{language === 'ar' ? v.nameAr : v.nameEn}</div>
                  <div className="text-[#C8A96B] font-bold">{formatPrice(v.price)}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 4. Price & Stepper Row */}
        <div className="mt-4 pt-3 border-t border-[#F2EAE0] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-[#8F8172] block uppercase tracking-wider">{t.price}</span>
            <div className="text-lg sm:text-xl font-serif font-bold text-[#202D23]">
              {formatPrice(currentPrice)}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Stepper */}
            <div className="flex items-center border border-[#EADFCF] rounded-full bg-[#F7F1E7] p-0.5 text-xs">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 flex items-center justify-center text-[#202D23] hover:bg-white rounded-full transition-colors"
                aria-label="Decrease"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-5 text-center font-bold text-xs text-[#202D23]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-6 h-6 flex items-center justify-center text-[#202D23] hover:bg-white rounded-full transition-colors"
                aria-label="Increase"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Direct WhatsApp Order Button */}
            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] transition-colors"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Add to Bag Button */}
            <button
              onClick={handleAdd}
              disabled={product.stockStatus === 'sold_out'}
              className={`px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                product.stockStatus === 'sold_out'
                  ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  : isAddedRecently
                  ? 'bg-[#202D23] text-white shadow-md'
                  : 'bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] shadow-sm hover:shadow-md'
              }`}
            >
              {isAddedRecently ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.addedToBag}</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t.addToBag}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
