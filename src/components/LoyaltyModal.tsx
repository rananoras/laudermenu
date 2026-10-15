import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  X, 
  Crown, 
  Gift, 
  Sparkles, 
  Check, 
  Copy, 
  Tag, 
  Clock 
} from 'lucide-react';
import { LoyaltyReward } from '../types';

const LoyaltyModalContent: React.FC = () => {
  const { 
    setIsLoyaltyOpen, 
    user, 
    rewards, 
    redeemReward, 
    applyPromoCode, 
    setIsCartOpen, 
    language, 
    t 
  } = useRestaurant();

  const [activeTab, setActiveTab] = useState<'catalog' | 'history' | 'referrals'>('catalog');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Tier info & progress
  const tierTargets = {
    Silver: { next: 'Gold', target: 500, labelAr: 'الفضي', nextLabelAr: 'الذهبي' },
    Gold: { next: 'Diamond', target: 1500, labelAr: 'الذهبي', nextLabelAr: 'الألماسي' },
    Diamond: { next: 'Royal VIP', target: 3000, labelAr: 'الألماسي', nextLabelAr: 'الملكي الخاص' }
  };

  const currentTierInfo = tierTargets[user.tier];
  const progressPercent = Math.min(100, Math.round((user.lifetimePoints / currentTierInfo.target) * 100));

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleRedeem = (r: LoyaltyReward) => {
    const res = redeemReward(r);
    if (res.success && res.voucherCode) {
      handleCopy(res.voucherCode);
    }
  };

  const handleApplyVoucher = (code: string) => {
    applyPromoCode(code);
    setIsLoyaltyOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#F7F1E7] border border-[#C8A96B]/50 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EADFCF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#202D23] border border-[#C8A96B] flex items-center justify-center text-[#C8A96B]">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-[#C8A96B] font-bold">
                {language === 'ar' ? 'برنامج العضوية والامتيازات' : 'VIP Loyalty & Privileges'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#202D23] font-bold leading-tight">
                {t.loyaltyTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setIsLoyaltyOpen(false)}
            className="p-1.5 rounded-full text-[#665D52] hover:text-[#202D23] hover:bg-[#F7F1E7]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Member Status Card with celebration animation */}
        <div className="bg-gradient-to-r from-[#202D23] via-[#2A3B2E] to-[#17211A] text-[#F7F1E7] p-6 sm:p-8 m-6 rounded-3xl shadow-xl relative overflow-hidden border border-[#C8A96B]/40">
          <div className="absolute end-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pe-6">
            <Crown className="w-48 h-48 text-[#C8A96B]" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#DFC89B]">
                  {language === 'ar' ? 'عضو النخبة' : 'Distinguished Member'}
                </span>
                <h4 className="font-serif text-2xl text-white font-bold">
                  {user.name}
                </h4>
              </div>
              <div className="flex items-center gap-2 bg-[#F7F1E7]/10 backdrop-blur-md border border-[#C8A96B]/50 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span className="text-xs uppercase tracking-widest text-[#DFC89B] font-bold">
                  {language === 'ar' ? `المستوى: ${currentTierInfo.labelAr}` : `Tier: ${user.tier}`}
                </span>
              </div>
            </div>

            {/* Points Counters */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs text-[#DFC89B] block font-medium">
                  {t.availablePoints}
                </span>
                <span className="text-3xl font-serif font-bold text-white">
                  {user.points}
                </span>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs text-[#DFC89B] block font-medium">
                  {language === 'ar' ? 'إجمالي النقاط المكتسبة' : 'Lifetime Accrued'}
                </span>
                <span className="text-3xl font-serif font-bold text-white">
                  {user.lifetimePoints}
                </span>
              </div>
            </div>

            {/* Next Tier Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs text-[#DFC89B]">
                <span>{language === 'ar' ? `الترقية إلى المستوى ${currentTierInfo.nextLabelAr}` : `Progress to ${currentTierInfo.next}`}</span>
                <span className="font-mono">{user.lifetimePoints} / {currentTierInfo.target} pts</span>
              </div>
              <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-[#C8A96B]/30">
                <div 
                  className="h-full bg-gradient-to-r from-[#C8A96B] to-[#F7F1E7] rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#EADFCF] px-6 text-xs font-semibold gap-6 bg-white">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`py-3 uppercase tracking-wider transition-colors relative ${
              activeTab === 'catalog'
                ? 'text-[#202D23] font-bold border-b-2 border-[#C8A96B]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            {t.rewardsCatalog}
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-3 uppercase tracking-wider transition-colors relative ${
              activeTab === 'history'
                ? 'text-[#202D23] font-bold border-b-2 border-[#C8A96B]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            {t.pointsHistory}
          </button>
          <button
            onClick={() => setActiveTab('referrals')}
            className={`py-3 uppercase tracking-wider transition-colors relative ${
              activeTab === 'referrals'
                ? 'text-[#202D23] font-bold border-b-2 border-[#C8A96B]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            {language === 'ar' ? 'دعوة صديق وكسب النقاط' : 'Referral Program'}
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'catalog' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewards.map(reward => {
                  const canRedeem = user.points >= reward.pointsRequired;
                  const title = language === 'ar' ? reward.titleAr : reward.titleEn;
                  const desc = language === 'ar' ? reward.descriptionAr : reward.descriptionEn;

                  return (
                    <div 
                      key={reward.id}
                      className="bg-white border border-[#EADFCF] rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#C8A96B] transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-3 bg-[#FAF7F2] rounded-xl text-[#C8A96B] border border-[#EADFCF]">
                          <Gift className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-[#202D23]">
                            {title}
                          </h5>
                          <p className="text-xs text-[#665D52] mt-0.5 leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#F2ECE1]">
                        <span className="font-serif font-bold text-sm text-[#C8A96B]">
                          {reward.pointsRequired} {language === 'ar' ? 'نقطة' : 'pts'}
                        </span>

                        <button
                          onClick={() => handleRedeem(reward)}
                          disabled={!canRedeem}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                            canRedeem
                              ? 'bg-[#202D23] hover:bg-[#33251E] text-white cursor-pointer hover:shadow-md'
                              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                          }`}
                        >
                          {canRedeem ? t.redeemReward : (language === 'ar' ? 'رصيد غير كافٍ' : 'Need More Points')}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Vouchers in possession */}
              {user.redeemedVouchers && user.redeemedVouchers.filter(v => !v.used).length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#EADFCF]">
                  <h5 className="text-xs uppercase font-bold tracking-wider text-[#8F8172] mb-3 flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-[#C8A96B]" />
                    <span>{language === 'ar' ? 'قسائمك ومكافآتك النشطة القابلة للاستخدام:' : 'Your Active Unused Vouchers:'}</span>
                  </h5>

                  <div className="space-y-2">
                    {user.redeemedVouchers.filter(v => !v.used).map((v, i) => (
                      <div 
                        key={i}
                        className="bg-[#FAF2DF] border border-[#C8A96B]/50 p-3 rounded-xl flex items-center justify-between text-xs"
                      >
                        <div className="space-y-0.5">
                          <span className="font-mono font-bold text-[#202D23] tracking-wider text-sm block">
                            {v.code}
                          </span>
                          <span className="text-[#665D52] text-[11px]">
                            {language === 'ar' ? v.titleAr : v.titleEn} • {v.discountSar} SAR
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopy(v.code)}
                            className="p-2 rounded-lg bg-white border border-[#EADFCF] hover:bg-stone-50 text-[#202D23]"
                            title="Copy Code"
                          >
                            {copiedCode === v.code ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => handleApplyVoucher(v.code)}
                            className="bg-[#202D23] text-white px-3 py-1.5 rounded-lg font-bold text-[11px] hover:bg-[#33251E]"
                          >
                            {language === 'ar' ? 'تطبيق بالسلة' : 'Apply to Cart'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-3">
              {user.pointsHistory.length === 0 ? (
                <div className="text-center py-10 text-stone-400 text-xs">
                  {language === 'ar' ? 'لا يوجد سجل نقاط حتى الآن.' : 'No points activity recorded yet.'}
                </div>
              ) : (
                user.pointsHistory.map(item => (
                  <div 
                    key={item.id}
                    className="p-3.5 bg-white border border-[#EADFCF] rounded-xl flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-full ${item.pointsChange > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-bold text-[#202D23] block">
                          {language === 'ar' ? item.descriptionAr : item.descriptionEn}
                        </span>
                        <span className="text-[10px] text-[#8F8172]">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <span className={`font-mono font-bold text-sm ${item.pointsChange > 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {item.pointsChange > 0 ? `+${item.pointsChange}` : item.pointsChange} pts
                    </span>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'referrals' && (
            <div className="bg-white border border-[#EADFCF] p-6 rounded-2xl text-center space-y-4">
              <div className="w-12 h-12 bg-[#FAF7F2] border border-[#C8A96B] text-[#C8A96B] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#202D23]">
                {language === 'ar' ? 'شارك الذوق الرفيع مع أحبائك' : 'Share the Haute Culinary Experience'}
              </h4>
              <p className="text-xs text-[#665D52] max-w-sm mx-auto leading-relaxed">
                {language === 'ar'
                  ? 'امنح أصدقاءك قسيمة خصم بقيمة 30 ر.س على طلبهم الأول (أكثر من 150 ر.س)، وعند إتمام طلبهم ستُضاف 200 نقطة مجانية إلى رصيدك.'
                  : 'Gift your friends 30 SAR off their first order of 150 SAR+. When they complete their debut purchase, you will receive 200 bonus points.'}
              </p>

              <div className="bg-[#F7F1E7] p-4 rounded-xl border border-[#EADFCF] flex items-center justify-between max-w-md mx-auto">
                <div className="text-start">
                  <span className="text-[10px] uppercase text-[#8F8172] block">{language === 'ar' ? 'رمز الدعوة الخاص بك:' : 'Your Referral Code:'}</span>
                  <span className="font-mono text-sm font-bold text-[#202D23]">{user.referralCode}</span>
                </div>
                <button
                  onClick={() => handleCopy(user.referralCode)}
                  className="bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  {copiedCode === user.referralCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === user.referralCode ? t.copied : t.copyCode}</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export const LoyaltyModal: React.FC = () => {
  const { isLoyaltyOpen } = useRestaurant();

  if (!isLoyaltyOpen) return null;

  return <LoyaltyModalContent />;
};
