import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { Sparkles, CheckCircle2, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast, isRtl } = useRestaurant();

  if (toasts.length === 0) return null;

  return (
    <div 
      className={`fixed bottom-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none ${
        isRtl ? 'left-6' : 'right-6'
      }`}
    >
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#202D23] border border-[#C8A96B]/50 text-[#F7F1E7] shadow-2xl rounded-xl p-4 flex items-start gap-3 transition-all duration-300 animate-in slide-in-from-bottom-5"
          style={{
            boxShadow: '0 10px 25px -5px rgba(200, 169, 107, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div className="p-1.5 rounded-full bg-[#C8A96B]/20 text-[#C8A96B] shrink-0 mt-0.5">
            {toast.type === 'gold' ? (
              <Sparkles className="w-4 h-4 text-[#C8A96B]" />
            ) : toast.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-[#E8C9C5]" />
            ) : (
              <Info className="w-4 h-4 text-[#DFC89B]" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-semibold tracking-wider text-[#C8A96B]">
              {toast.title}
            </h4>
            <p className="text-xs text-[#EFE8DC] mt-0.5 leading-snug">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#C8A96B]/60 hover:text-white transition-colors p-1 -mr-1 -mt-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
