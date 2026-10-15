import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  X, 
  User, 
  ShoppingBag, 
  MapPin, 
  Heart, 
  Award, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Eye, 
  Sparkles,
  QrCode
} from 'lucide-react';
import { Order } from '../types';

const AccountModalContent: React.FC = () => {
  const { 
    setIsAccountOpen, 
    user, 
    orders, 
    products, 
    formatPrice, 
    addToCart, 
    toggleWishlist, 
    setSelectedReceiptOrder, 
    setIsCheckoutOpen, 
    setIsLoyaltyOpen,
    language, 
    t 
  } = useRestaurant();

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'profile'>('orders');
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newDistrict, setNewDistrict] = useState('حي الملقا');
  const [newStreet, setNewStreet] = useState('');
  const [newLabel, setNewLabel] = useState('منزل الرياض');

  const handleViewReceipt = (order: Order) => {
    setSelectedReceiptOrder(order);
    setIsAccountOpen(false);
    setIsCheckoutOpen(true);
  };

  const wishlistProducts = products.filter(p => user.wishlistIds.includes(p.id));

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'received':
        return <span className="bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full text-[10px] font-bold">{language === 'ar' ? 'تم استلام الطلب' : 'Order Received'}</span>;
      case 'preparing':
        return <span className="bg-purple-100 text-purple-800 border border-purple-300 px-2 py-0.5 rounded-full text-[10px] font-bold">{language === 'ar' ? 'قيد التحضير في المطبخ' : 'Preparing in Kitchen'}</span>;
      case 'in_transit':
        return <span className="bg-blue-100 text-blue-800 border border-blue-300 px-2 py-0.5 rounded-full text-[10px] font-bold">{language === 'ar' ? 'مع المندوب المبرد' : 'In Chilled Transit'}</span>;
      case 'delivered':
        return <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full text-[10px] font-bold">{language === 'ar' ? 'تم التوصيل بنجاح' : 'Delivered with Care'}</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#F7F1E7] border border-[#C8A96B]/50 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EADFCF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#202D23] text-[#DFC89B] flex items-center justify-center font-serif font-bold text-base border border-[#C8A96B]">
              {user.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <div>
              <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-[#C8A96B] font-bold">
                {language === 'ar' ? 'بوابة العميل والطلبات' : 'Customer Account & Orders'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#202D23] font-bold leading-tight">
                {user.name}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 rounded-full text-[#665D52] hover:text-[#202D23] hover:bg-[#F7F1E7]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-[#EADFCF] bg-white flex gap-6 text-xs font-bold uppercase tracking-wider overflow-x-auto">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 transition-colors shrink-0 flex items-center gap-1.5 ${
              activeTab === 'orders'
                ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'الطلبات وسجل الفواتير' : 'Orders & Invoices'} ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`pb-3 transition-colors shrink-0 flex items-center gap-1.5 ${
              activeTab === 'wishlist'
                ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'المفضلة' : 'Wishlist'} ({user.wishlistIds.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`pb-3 transition-colors shrink-0 flex items-center gap-1.5 ${
              activeTab === 'addresses'
                ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'عناوين التوصيل بالرياض' : 'Saved Addresses'} ({user.addresses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 transition-colors shrink-0 flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                : 'text-[#8F8172] hover:text-[#202D23]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'الملف الشخصي والمكافآت' : 'Profile & Rewards'}</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-[#202D23]">
                  {language === 'ar' ? 'الطلبات المسجلة والتتبع المباشر' : 'Live Order Tracking & History'}
                </h4>
                <span className="text-xs text-[#C8A96B] font-bold">
                  {language === 'ar' ? 'تحديث لحظي من المطبخ والأسطول' : 'Real-time kitchen & fleet updates'}
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-[#EADFCF] space-y-2">
                  <ShoppingBag className="w-8 h-8 text-[#C8A96B] mx-auto" />
                  <p className="font-bold text-[#202D23]">{language === 'ar' ? 'لا توجد طلبات سابقة' : 'No past orders yet'}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {orders.map(order => (
                    <div 
                      key={order.id}
                      className="bg-white border border-[#EADFCF] rounded-2xl p-5 shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F7F1E7] pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-[#202D23]">{order.orderNumber}</span>
                            {getStatusBadge(order.status)}
                          </div>
                          <span className="text-xs text-[#8F8172]">{order.date}</span>
                        </div>

                        <div className="text-end">
                          <span className="font-serif text-base font-bold text-[#202D23]">
                            {formatPrice(order.total)}
                          </span>
                          <span className="text-[11px] text-emerald-700 block font-bold">
                            +{order.pointsEarned} {language === 'ar' ? 'نقطة مكتسبة' : 'pts earned'}
                          </span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="space-y-1 py-1 text-xs">
                        {order.items.map((it, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span className="text-[#33251E]">
                              <strong>{it.quantity}x</strong> {language === 'ar' ? it.product.nameAr : it.product.nameEn}
                            </span>
                            <span className="font-bold text-[#202D23]">
                              {formatPrice((it.selectedVariant ? it.selectedVariant.price : it.product.price) * it.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F7F1E7] text-xs">
                        <div className="text-[11px] text-[#665D52] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#C8A96B]" />
                          <span>{order.deliveryDate} ({order.deliverySlotAr || order.deliverySlotEn})</span>
                        </div>

                        <button
                          onClick={() => handleViewReceipt(order)}
                          className="flex items-center gap-1 text-[#202D23] hover:text-[#C8A96B] font-bold text-xs"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C8A96B]" />
                          <span>{t.printReceipt}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#202D23]">
                {language === 'ar' ? 'قائمتك المفضلة' : 'Your Wishlist'}
              </h4>

              {wishlistProducts.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-[#EADFCF] space-y-2">
                  <Heart className="w-8 h-8 text-[#C8A96B] mx-auto" />
                  <p className="font-bold text-[#202D23]">{language === 'ar' ? 'لا توجد أطباق محفوظة' : 'No saved dishes'}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistProducts.map(p => (
                    <div key={p.id} className="bg-white border border-[#EADFCF] rounded-2xl p-4 flex gap-3 shadow-xs">
                      <img src={p.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h5 className="font-serif text-sm font-bold text-[#202D23] line-clamp-1">
                            {language === 'ar' ? p.nameAr : p.nameEn}
                          </h5>
                          <div className="font-serif font-bold text-sm text-[#C8A96B] mt-0.5">
                            {formatPrice(p.price)}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <button
                            onClick={() => addToCart(p, 1)}
                            className="bg-[#202D23] text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-[#33251E]"
                          >
                            {t.addToBag}
                          </button>
                          <button
                            onClick={() => toggleWishlist(p.id)}
                            className="text-gray-400 hover:text-red-700 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ADDRESSES */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-[#202D23]">
                  {language === 'ar' ? 'عناوين التوصيل بالرياض' : 'Saved Delivery Addresses'}
                </h4>
                <button
                  onClick={() => setIsAddingAddress(!isAddingAddress)}
                  className="flex items-center gap-1.5 text-xs text-[#202D23] hover:text-[#C8A96B] font-bold"
                >
                  <Plus className="w-4 h-4 text-[#C8A96B]" />
                  <span>{isAddingAddress ? (language === 'ar' ? 'إلغاء' : 'Cancel') : (language === 'ar' ? 'إضافة عنوان جديد' : 'Add New Address')}</span>
                </button>
              </div>

              {isAddingAddress && (
                <div className="bg-white p-4 rounded-2xl border border-[#C8A96B] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'التسمية (مثال: المنزل / المكتب)' : 'Label'}</label>
                      <input
                        type="text"
                        value={newLabel}
                        onChange={e => setNewLabel(e.target.value)}
                        className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5"
                      />
                    </div>
                    <div>
                      <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'الحي بالرياض' : 'District'}</label>
                      <input
                        type="text"
                        value={newDistrict}
                        onChange={e => setNewDistrict(e.target.value)}
                        className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'الشارع ورقم الفيلا' : 'Street & Villa'}</label>
                      <input
                        type="text"
                        value={newStreet}
                        onChange={e => setNewStreet(e.target.value)}
                        placeholder="طريق الملك فهد، فيلا 12..."
                        className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (!newStreet) return;
                      user.addresses.push({
                        id: `addr-${Date.now()}`,
                        labelEn: newLabel,
                        labelAr: newLabel,
                        recipientName: user.name,
                        city: 'الرياض',
                        districtEn: newDistrict,
                        districtAr: newDistrict,
                        street: newStreet,
                        phone: user.phone
                      });
                      setIsAddingAddress(false);
                      setNewStreet('');
                    }}
                    className="bg-[#202D23] text-white px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    {language === 'ar' ? 'حفظ العنوان' : 'Save Address'}
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.addresses.map(addr => (
                  <div key={addr.id} className="bg-white border border-[#EADFCF] rounded-2xl p-4 space-y-1.5 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#202D23] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                        <span>{language === 'ar' ? addr.labelAr : addr.labelEn}</span>
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10px] bg-[#202D23] text-[#DFC89B] px-2 py-0.5 rounded-full font-bold">
                          {language === 'ar' ? 'افتراضي' : 'Default'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#665D52]">
                      {language === 'ar' ? addr.districtAr : addr.districtEn}، {addr.street}
                    </p>
                    <div className="text-[11px] text-[#C8A96B]">
                      {addr.recipientName} ({addr.phone})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] space-y-3 text-xs">
                <h4 className="font-serif text-sm font-bold text-[#202D23] border-b border-[#F7F1E7] pb-2">
                  {language === 'ar' ? 'البيانات الشخصية المسجلة' : 'Account Details'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#8F8172] block">{t.customerName}:</label>
                    <div className="font-bold text-sm text-[#202D23] mt-0.5">{user.name}</div>
                  </div>
                  <div>
                    <label className="text-[#8F8172] block">{t.mobileNumber}:</label>
                    <div className="font-bold text-sm text-[#202D23] mt-0.5">{user.phone}</div>
                  </div>
                  <div>
                    <label className="text-[#8F8172] block">{t.emailAddress}:</label>
                    <div className="font-bold text-sm text-[#202D23] mt-0.5">{user.email}</div>
                  </div>
                  <div>
                    <label className="text-[#8F8172] block">{t.tierStatus}:</label>
                    <div className="font-bold text-sm text-[#C8A96B] mt-0.5">{user.tier}</div>
                  </div>
                </div>
              </div>

              {/* Loyalty Quick Shortcut */}
              <div className="bg-[#202D23] text-white p-5 rounded-2xl border border-[#C8A96B] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#DFC89B] font-bold text-sm">
                    <Award className="w-4 h-4 text-[#C8A96B]" />
                    <span>{t.loyaltyTitle}: {user.points} {language === 'ar' ? 'نقطة متاحة' : 'pts'}</span>
                  </div>
                  <p className="text-xs text-[#A89886] mt-0.5">
                    {t.loyaltySubtitle}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsAccountOpen(false);
                    setIsLoyaltyOpen(true);
                  }}
                  className="bg-[#C8A96B] text-[#202D23] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#DFC89B]"
                >
                  {language === 'ar' ? 'دليل المكافآت' : 'Rewards'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export const AccountModal: React.FC = () => {
  const { isAccountOpen } = useRestaurant();
  if (!isAccountOpen) return null;
  return <AccountModalContent />;
};

