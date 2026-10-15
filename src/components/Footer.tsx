import React from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Award,
  Crown,
  Settings
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    setActiveCategory, 
    setIsLoyaltyOpen, 
    setIsAdminOpen, 
    restaurantWhatsApp, 
    language, 
    t 
  } = useRestaurant();

  return (
    <footer id="footer-section" className="bg-[#17211A] text-[#F7F1E7] border-t border-[#33251E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A96B] bg-[#202D23] flex items-center justify-center text-[#C8A96B] font-bold font-serif text-sm">
                AM
              </div>
              <div>
                <h3 className="font-serif text-xl tracking-[0.2em] uppercase text-white font-bold">
                  {t.brandName}
                </h3>
                <p className="text-[10px] font-serif tracking-[0.2em] text-[#C8A96B]">
                  {t.brandSubtitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A89886] leading-relaxed font-light max-w-sm">
              {t.footerAbout}
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#DFC89B]">
              <ShieldCheck className="w-4 h-4 text-[#C8A96B]" />
              <span>{language === 'ar' ? 'لحوم حلال معتمدة 100% • مكونات فرنسية أصيلة' : '100% Halal Certified • Noble French Ingredients'}</span>
            </div>
          </div>

          {/* Riyadh Flagship Location & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-bold">
              {language === 'ar' ? 'فرع الرياض الرئيسي وساعات العمل' : 'Riyadh Flagship & Hours'}
            </h4>
            <div className="space-y-3 text-xs text-[#D0C4B4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                <span>{t.footerAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                <span>{t.footerOpeningHours}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#C8A96B]" />
                <a href="tel:+966501234567" className="hover:text-white" dir="ltr">
                  +966 50 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Service (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-[#C8A96B] font-bold">
              {language === 'ar' ? 'خدمات الضيافة والحجوزات' : 'Hospitality & Services'}
            </h4>
            
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${restaurantWhatsApp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#202D23] hover:bg-[#33251E] border border-[#C8A96B]/40 p-3 rounded-2xl text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <div>
                  <div className="font-bold text-white text-xs">{language === 'ar' ? 'واتساب خدمة العملاء والحجوزات' : 'WhatsApp Concierge & Bookings'}</div>
                  <div className="text-[10px] text-[#A89886]" dir="ltr">+{restaurantWhatsApp}</div>
                </div>
              </a>

              <button
                onClick={() => setIsLoyaltyOpen(true)}
                className="w-full text-start bg-[#202D23] hover:bg-[#33251E] border border-[#C8A96B]/40 p-3 rounded-2xl text-[#DFC89B] transition-colors"
              >
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#C8A96B]">
                  <Award className="w-4 h-4" />
                  <span>{t.loyaltyTitle}</span>
                </div>
                <div className="text-[10px] text-[#A89886] mt-0.5">
                  {language === 'ar' ? 'اكسب نقطة لكل 1 ر.س واستبدلها بقسائم فورية' : 'Earn 1 pt per 1 SAR on all dining orders'}
                </div>
              </button>

              <div className="pt-1 flex items-center justify-between text-[11px] text-[#8F8172]">
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="hover:text-[#C8A96B] flex items-center gap-1"
                >
                  <Settings className="w-3 h-3" />
                  <span>{t.cmsPortal}</span>
                </button>
                <span>{language === 'ar' ? 'الرقم الضريبي: 300948210900003' : 'Tax ID: 300948210900003'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-12 pt-6 border-t border-[#33251E] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A6F62] gap-4">
          <div>
            {t.allRightsReserved}
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">{language === 'ar' ? 'سياسة التوصيل المبرد' : 'Chilled Delivery Policy'}</span>
            <span className="hover:text-white cursor-pointer">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
            <span className="hover:text-white cursor-pointer">{language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
