import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { ShoppingBag } from 'lucide-react';

export const FloatingCartButton: React.FC = () => {
  const { cartCount, cartTotal, formatPrice, setIsCartOpen, isRtl, language, t } = useRestaurant();

  if (cartCount === 0) return null;

  return (
    <div 
      className={`fixed bottom-6 z-40 sm:hidden animate-in slide-in-from-bottom-4 duration-300 ${
        isRtl ? 'left-6' : 'right-6'
      }`}
    >
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex items-center gap-3 bg-[#202D23] text-[#F7F1E7] border border-[#C8A96B] px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all"
        aria-label={t.bag}
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-[#C8A96B]" />
          <span className="absolute -top-2 -right-2 bg-[#C8A96B] text-[#202D23] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </div>
        <div className="text-start">
          <div className="text-[10px] uppercase font-bold text-[#DFC89B] tracking-wider leading-none">
            {t.bag}
          </div>
          <div className="text-xs font-bold text-white leading-none mt-1">
            {formatPrice(cartTotal)}
          </div>
        </div>
      </button>
    </div>
  );
};
