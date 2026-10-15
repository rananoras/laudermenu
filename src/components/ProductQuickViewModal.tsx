import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { Product, ProductVariant } from '../types';
import { 
  X, 
  Star, 
  Heart, 
  Plus, 
  Minus, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  MessageCircle,
  Flame
} from 'lucide-react';

interface ProductQuickViewModalContentProps {
  product: Product;
}

const ProductQuickViewModalContent: React.FC<ProductQuickViewModalContentProps> = ({ product }) => {
  const { 
    closeQuickView, 
    formatPrice, 
    addToCart, 
    openWhatsAppForProduct, 
    toggleWishlist, 
    isWishlisted, 
    language, 
    t 
  } = useRestaurant();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0
      ? product.variants[0]
      : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [customCakeMessage, setCustomCakeMessage] = useState('');
  const [selectedCandles, setSelectedCandles] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'allergens'>('details');

  const allImages = [product.image, ...(product.secondaryImages || [])];
  const isFavorite = isWishlisted(product.id);
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;

  const productName = language === 'ar' ? product.nameAr : product.nameEn;
  const productDesc = language === 'ar' ? (product.longDescriptionAr || product.descriptionAr) : (product.longDescriptionEn || product.descriptionEn);
  const ingredients = language === 'ar' ? product.ingredientsAr : product.ingredientsEn;
  const prepTime = language === 'ar' ? product.prepTimeAr : product.prepTimeEn;

  const handleAddToCart = () => {
    addToCart(
      product, 
      quantity, 
      selectedVariant, 
      customCakeMessage, 
      selectedCandles, 
      specialInstructions
    );
    closeQuickView();
  };

  const handleWhatsApp = () => {
    openWhatsAppForProduct(
      product, 
      quantity, 
      selectedVariant, 
      customCakeMessage
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#F7F1E7] border border-[#C8A96B]/50 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 end-4 z-20 p-2 rounded-full bg-[#202D23]/80 hover:bg-[#202D23] text-white shadow-lg transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 p-6 bg-[#202D23] text-white flex flex-col justify-between border-b md:border-b-0 md:border-e border-[#33251E]">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black shadow-inner mb-4">
            <img
              src={allImages[activeImage] || product.image}
              alt={productName}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {product.stockStatus === 'low_stock' && (
              <span className="absolute top-3 start-3 bg-amber-500 text-[#202D23] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                {t.lowStock}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-2 justify-center">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-[#C8A96B] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Preparation & Calorie Specs */}
          <div className="mt-4 p-3 bg-[#17211A] rounded-xl border border-[#33251E] flex items-center justify-around text-xs text-[#DFC89B]">
            {prepTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>{prepTime}</span>
              </div>
            )}
            {product.calories && (
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>{product.calories} {language === 'ar' ? 'سعرة حرارية' : 'kcal'}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#C8A96B] text-[#C8A96B]" />
              <span className="text-white font-bold">{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Customization & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between text-xs text-[#C8A96B] mb-1 font-semibold uppercase tracking-wider">
                <span>{product.category}</span>
                <span className="text-[11px] text-[#665D52]">
                  {product.reviewsCount} {language === 'ar' ? 'تقييم معتمد' : 'reviews'}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#202D23] font-bold leading-tight">
                {productName}
              </h2>

              <div className="mt-2 text-2xl font-serif font-bold text-[#202D23]">
                {formatPrice(currentPrice)}
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-[#EADFCF] text-xs font-semibold">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 px-3 uppercase tracking-wider transition-colors ${
                  activeTab === 'details'
                    ? 'border-b-2 border-[#C8A96B] text-[#202D23] font-bold'
                    : 'text-[#8F8172] hover:text-[#202D23]'
                }`}
              >
                {language === 'ar' ? 'التفاصيل' : 'Details'}
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-2 px-3 uppercase tracking-wider transition-colors ${
                  activeTab === 'ingredients'
                    ? 'border-b-2 border-[#C8A96B] text-[#202D23] font-bold'
                    : 'text-[#8F8172] hover:text-[#202D23]'
                }`}
              >
                {t.ingredients}
              </button>
              <button
                onClick={() => setActiveTab('allergens')}
                className={`pb-2 px-3 uppercase tracking-wider transition-colors ${
                  activeTab === 'allergens'
                    ? 'border-b-2 border-[#C8A96B] text-[#202D23] font-bold'
                    : 'text-[#8F8172] hover:text-[#202D23]'
                }`}
              >
                {t.allergens}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="text-xs text-[#574F47] leading-relaxed min-h-[70px]">
              {activeTab === 'details' && (
                <p>{productDesc}</p>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-1">
                  <span className="font-semibold text-[#202D23] block mb-1">
                    {language === 'ar' ? 'المكونات الأصيلة:' : 'Authentic Ingredients:'}
                  </span>
                  <p className="text-[#665D52]">{ingredients.join(' • ')}</p>
                </div>
              )}

              {activeTab === 'allergens' && (
                <div className="space-y-2">
                  <div className="bg-[#FAF2DF] p-3 rounded-xl border border-[#E6D3A3]">
                    <div className="flex items-center gap-1.5 text-[#5C420D] font-bold mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'تنبيه مسببات الحساسية:' : 'Allergen Notice:'}</span>
                    </div>
                    <p className="text-[11px] text-[#7A5B18]">
                      {product.allergens.length > 0
                        ? product.allergens.map(a => language === 'ar' ? a.ar : a.en).join(', ')
                        : (language === 'ar' ? 'لا توجد مسببات حساسية شائعة في هذا الطبق.' : 'No common allergens identified.')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Variations / Portions Selection */}
            {product.variants && product.variants.length > 1 && (
              <div className="pt-2">
                <label className="text-[11px] uppercase font-bold text-[#8F8172] block mb-1.5">
                  {t.portions}:
                </label>
                <div className="space-y-1.5">
                  {product.variants.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs border text-start transition-all ${
                        selectedVariant?.id === v.id
                          ? 'border-[#C8A96B] bg-[#202D23] text-[#DFC89B] font-bold shadow-xs'
                          : 'border-[#EADFCF] bg-white text-[#504841] hover:bg-[#F7F1E7]'
                      }`}
                    >
                      <div>
                        <div>{language === 'ar' ? v.nameAr : v.nameEn}</div>
                        {(v.portionsAr || v.portionsEn) && (
                          <div className="text-[10px] text-[#A89886]">
                            {language === 'ar' ? v.portionsAr : v.portionsEn}
                          </div>
                        )}
                      </div>
                      <span className="font-serif font-bold text-[#C8A96B]">
                        {formatPrice(v.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Cake Inscription Message */}
            {product.isCustomizableCake && (
              <div className="pt-2 space-y-2 bg-white p-3.5 rounded-xl border border-[#EADFCF]">
                <label className="text-xs font-semibold text-[#202D23] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span>{t.customMessagePrompt}</span>
                </label>
                <input
                  type="text"
                  value={customCakeMessage}
                  onChange={e => setCustomCakeMessage(e.target.value)}
                  placeholder={t.customMessagePlaceholder}
                  className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#C8A96B]"
                  maxLength={90}
                />

                <label className="flex items-center gap-2 text-xs text-[#504841] cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={selectedCandles}
                    onChange={e => setSelectedCandles(e.target.checked)}
                    className="accent-[#C8A96B]"
                  />
                  <span>{t.candleOption}</span>
                </label>
              </div>
            )}

            {/* Special Instructions */}
            <div className="pt-1">
              <label className="text-[11px] text-[#8F8172] block mb-1">
                {t.specialNotes}:
              </label>
              <input
                type="text"
                value={specialInstructions}
                onChange={e => setSpecialInstructions(e.target.value)}
                placeholder={language === 'ar' ? 'أي ملاحظات تخص درجة الاستواء أو التقديم...' : 'E.g. Sauce on the side, specific doneness...'}
                className="w-full bg-white border border-[#EADFCF] rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#C8A96B]"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#EADFCF] mt-4 flex items-center justify-between gap-2.5">
            {/* Stepper */}
            <div className="flex items-center border border-[#EADFCF] rounded-full bg-white p-1 text-xs">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 flex items-center justify-center text-[#202D23] rounded-full hover:bg-[#F7F1E7]"
                aria-label="Decrease"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-bold text-sm text-[#202D23]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 flex items-center justify-center text-[#202D23] rounded-full hover:bg-[#F7F1E7]"
                aria-label="Increase"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Wishlist */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-3 rounded-full border transition-all ${
                isFavorite
                  ? 'border-[#E8C9C5] bg-[#E8C9C5] text-[#33251E]'
                  : 'border-[#EADFCF] bg-white text-[#665D52] hover:text-[#C8A96B]'
              }`}
              title="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Direct WhatsApp Order */}
            <button
              onClick={handleWhatsApp}
              className="p-3 rounded-full bg-[#25D366] text-white hover:bg-[#20BA5A] transition-colors shadow-sm"
              title="WhatsApp Order"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Add to Bag CTA */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#202D23] hover:bg-[#33251E] text-white py-3 px-4 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#C8A96B]" />
              <span>{t.addToBag} • {formatPrice(currentPrice * quantity)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductQuickViewModal: React.FC = () => {
  const { isQuickViewOpen, quickViewProduct } = useRestaurant();

  if (!isQuickViewOpen || !quickViewProduct) return null;

  return <ProductQuickViewModalContent product={quickViewProduct} />;
};
