import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  ArrowLeft,
  Tag, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { SAUDI_DELIVERY_ZONES } from '../data/restaurantData';

const CartDrawerContent: React.FC = () => {
  const {
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartSubtotal,
    deliveryFee,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    calculatedDiscount,
    vatAmount,
    cartTotal,
    formatPrice,
    selectedZoneId,
    setSelectedZoneId,
    currentDeliveryZone,
    openWhatsAppForCart,
    setIsCheckoutOpen,
    isRtl,
    language,
    t
  } = useRestaurant();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const freeDeliveryThreshold = 250;
  const progressPercent = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);
  const amountNeededForFree = Math.max(0, freeDeliveryThreshold - cartSubtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError('');
      setPromoInput('');
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOpenWhatsApp = () => {
    setIsCartOpen(false);
    openWhatsAppForCart();
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#F7F1E7] h-full shadow-2xl flex flex-col justify-between border-s border-[#EADFCF] animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EADFCF] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C8A96B]" />
            <h3 className="font-serif text-lg text-[#202D23] font-bold">
              {t.cartTitle}
            </h3>
            <span className="text-xs bg-[#202D23] text-[#DFC89B] px-2 py-0.5 rounded-full font-bold">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full text-[#665D52] hover:text-[#202D23] hover:bg-[#F7F1E7] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Meter across Riyadh */}
        <div className="bg-[#202D23] text-[#F7F1E7] px-5 py-3 border-b border-[#33251E]">
          <div className="flex items-center justify-between text-xs text-[#DFC89B] mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C8A96B]" />
              {amountNeededForFree === 0 ? (
                <span className="text-[#C8A96B] font-bold">{t.freeDeliveryUnlocked}</span>
              ) : (
                <span>
                  {language === 'ar' 
                    ? `أضف بقيمة ${formatPrice(amountNeededForFree)} لتوصيل مبرد مجاني بالرياض` 
                    : `Add ${formatPrice(amountNeededForFree)} for free chilled delivery in Riyadh`}
                </span>
              )}
            </span>
            <span className="font-bold text-xs">{progressPercent.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-[#C8A96B] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-white border border-[#EADFCF] text-[#C8A96B] flex items-center justify-center mx-auto shadow-sm">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg text-[#202D23] font-bold">
                {t.emptyCart}
              </h4>
              <p className="text-xs text-[#665D52] max-w-xs mx-auto">
                {t.emptyCartDesc}
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-3 inline-block bg-[#202D23] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#33251E]"
              >
                {t.exploreMenu}
              </button>
            </div>
          ) : (
            cart.map(item => {
              const itemPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
              const name = language === 'ar' ? item.product.nameAr : item.product.nameEn;
              const variantName = item.selectedVariant 
                ? (language === 'ar' ? item.selectedVariant.nameAr : item.selectedVariant.nameEn)
                : null;

              return (
                <div 
                  key={item.id}
                  className="bg-white border border-[#EADFCF] rounded-2xl p-3 flex gap-3 shadow-xs relative"
                >
                  <img
                    src={item.product.image}
                    alt={name}
                    className="w-18 h-18 rounded-xl object-cover shrink-0 border border-[#F7F1E7]"
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-sm font-semibold text-[#202D23] truncate">
                          {name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-700 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {variantName && (
                        <div className="text-[11px] text-[#C8A96B] font-medium">
                          {variantName}
                        </div>
                      )}

                      {item.customCakeMessage && (
                        <div className="text-[10px] text-[#33251E] bg-[#FAF2DF] p-1 rounded mt-1 line-clamp-1">
                          <strong>{language === 'ar' ? 'الإهداء:' : 'Inscription:'}</strong> {item.customCakeMessage}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F7F1E7]">
                      <div className="text-xs font-serif font-bold text-[#202D23]">
                        {formatPrice(itemPrice * item.quantity)}
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center border border-[#EADFCF] rounded-full bg-[#F7F1E7] p-0.5 text-xs">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#202D23] rounded-full hover:bg-white"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#202D23]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#202D23] rounded-full hover:bg-white"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Delivery Zone Selector */}
          {cart.length > 0 && (
            <div className="bg-white border border-[#EADFCF] rounded-2xl p-3.5 space-y-2">
              <label className="text-xs font-semibold text-[#202D23] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>{t.deliveryZone}:</span>
              </label>

              <select
                value={selectedZoneId}
                onChange={e => setSelectedZoneId(e.target.value)}
                className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-xs text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
              >
                {SAUDI_DELIVERY_ZONES.map(z => (
                  <option key={z.id} value={z.id}>
                    {language === 'ar' ? z.nameAr : z.nameEn} ({z.fee} {t.currencySar})
                  </option>
                ))}
              </select>
              <div className="text-[11px] text-[#8F8172] flex items-center justify-between">
                <span>{language === 'ar' ? 'الوقت التقديري:' : 'Estimated Window:'} {currentDeliveryZone.estimatedMinutes}</span>
                <span>{language === 'ar' ? 'مجاني فوق 250 ر.س' : 'Free over 250 SAR'}</span>
              </div>
            </div>
          )}

          {/* Promo Code Box */}
          {cart.length > 0 && (
            <div className="bg-white border border-[#EADFCF] rounded-2xl p-3.5 space-y-2">
              <label className="text-xs font-semibold text-[#202D23] flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>{language === 'ar' ? 'رمز القسيمة أو الخصم:' : 'Privilege Promo Code:'}</span>
              </label>

              {appliedPromo ? (
                <div className="flex items-center justify-between bg-[#FAF2DF] border border-[#C8A96B] rounded-xl p-2.5 text-xs">
                  <div>
                    <span className="font-bold text-[#202D23]">{appliedPromo.code}</span>
                    <span className="text-[#8F8172] text-[11px] block">
                      {language === 'ar' ? appliedPromo.descriptionAr : appliedPromo.descriptionEn}
                    </span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-red-700 underline text-xs font-bold"
                  >
                    {language === 'ar' ? 'إلغاء' : 'Remove'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={e => {
                      setPromoInput(e.target.value);
                      setPromoError('');
                    }}
                    placeholder={t.couponPlaceholder}
                    className="flex-1 bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5 text-xs uppercase placeholder:normal-case focus:outline-none focus:border-[#C8A96B]"
                  />
                  <button
                    type="submit"
                    className="bg-[#202D23] text-white px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-[#33251E]"
                  >
                    {t.applyCoupon}
                  </button>
                </form>
              )}

              {promoError && (
                <p className="text-[11px] text-red-600 mt-1">{promoError}</p>
              )}
            </div>
          )}
        </div>

        {/* Totals & Ordering Actions */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#EADFCF] bg-white space-y-3">
            {/* Breakdown */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#665D52]">
                <span>{t.subtotal}:</span>
                <span className="font-semibold text-[#202D23]">{formatPrice(cartSubtotal)}</span>
              </div>

              {calculatedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>{t.discount}:</span>
                  <span>-{formatPrice(calculatedDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between text-[#665D52]">
                <span>{t.deliveryFee}:</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-700">{t.complimentary}</strong> : formatPrice(deliveryFee)}</span>
              </div>

              <div className="flex justify-between text-[11px] text-[#8F8172]">
                <span>{t.vatNotice}:</span>
                <span>{formatPrice(vatAmount)}</span>
              </div>

              <div className="flex justify-between text-base font-serif font-bold text-[#202D23] pt-2 border-t border-[#F2EAE0]">
                <span>{t.grandTotal}:</span>
                <span className="text-xl text-[#202D23]">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {/* DUAL ORDERING BUTTONS (WHATSAPP + ONLINE CHECKOUT) */}
            <div className="space-y-2 pt-1">
              
              {/* WhatsApp Ordering */}
              <button
                onClick={handleOpenWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>{t.orderWhatsAppCart}</span>
              </button>

              {/* Online Checkout */}
              <button
                onClick={handleProceedCheckout}
                className="w-full bg-[#202D23] hover:bg-[#33251E] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all hover:shadow-lg"
              >
                <span>{t.proceedToCheckout}</span>
                <ArrowIcon className="w-4 h-4 text-[#C8A96B]" />
              </button>
            </div>

            <div className="text-[10px] text-center text-[#8F8172] flex items-center justify-center gap-2 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{language === 'ar' ? 'توصيل مبرد 4 درجات مئوية • دفع آمن ومشفر' : 'Chilled preservation (4°C) • 256-bit SSL encrypted'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const CartDrawer: React.FC = () => {
  const { isCartOpen } = useRestaurant();
  if (!isCartOpen) return null;
  return <CartDrawerContent />;
};

