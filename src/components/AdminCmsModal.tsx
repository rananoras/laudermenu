import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  X, 
  Settings, 
  Package, 
  ShoppingBag, 
  Tag, 
  RotateCcw, 
  Save, 
  Edit3, 
  Plus, 
  Sliders, 
  MessageCircle, 
  Phone 
} from 'lucide-react';
import { Product, Order, PromoCode } from '../types';

const AdminCmsModalContent: React.FC = () => {
  const { 
    setIsAdminOpen, 
    products, 
    updateProduct, 
    orders, 
    updateOrderStatus, 
    promoCodes, 
    addPromoCode, 
    restaurantWhatsApp, 
    setRestaurantWhatsApp, 
    resetAllData, 
    formatPrice, 
    language, 
    t 
  } = useRestaurant();

  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'promos' | 'settings'>('products');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editStock, setEditStock] = useState<Product['stockStatus']>('in_stock');

  // New promo state
  const [newPromoCode, setNewPromoCode] = useState('');
  const [newPromoDiscount, setNewPromoDiscount] = useState<number>(15);
  const [newPromoMinSpend, setNewPromoMinSpend] = useState<number>(150);
  const [newPromoDesc, setNewPromoDesc] = useState('');

  // Store WhatsApp setting
  const [tempWhatsApp, setTempWhatsApp] = useState(restaurantWhatsApp);

  const startEdit = (p: Product) => {
    setEditingId(p.id);
    setEditPrice(p.price);
    setEditStock(p.stockStatus);
  };

  const saveEdit = (p: Product) => {
    updateProduct({
      ...p,
      price: editPrice,
      stockStatus: editStock
    });
    setEditingId(null);
  };

  const handleCreatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromoCode.trim()) return;

    addPromoCode({
      code: newPromoCode.trim().toUpperCase(),
      discountPercent: newPromoDiscount,
      minSpendSar: newPromoMinSpend,
      descriptionEn: newPromoDesc || `${newPromoDiscount}% off on orders above ${newPromoMinSpend} SAR`,
      descriptionAr: newPromoDesc || `خصم ${newPromoDiscount}% للطلبات فوق ${newPromoMinSpend} ر.س`,
      active: true
    });

    setNewPromoCode('');
    setNewPromoDesc('');
  };

  const handleSaveSettings = () => {
    setRestaurantWhatsApp(tempWhatsApp);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#F7F1E7] border border-[#C8A96B]/50 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#33251E] bg-[#202D23] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-[#C8A96B]" />
            <div>
              <h3 className="font-serif text-lg font-bold leading-none">
                {language === 'ar' ? 'لوحة تحكم وإدارة المتجر (CMS)' : 'Atelier Miral Store Admin & CMS'}
              </h3>
              <span className="text-[11px] text-[#A89886]">
                {language === 'ar' ? 'إدارة المنتجات، الأسعار، الطلبات، الواتساب، والقسائم' : 'Catalog, live orders, WhatsApp line, & promotions'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-[#EADFCF] bg-white flex items-center justify-between overflow-x-auto">
          <div className="flex gap-6 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('products')}
              className={`py-3 flex items-center gap-1.5 transition-colors ${
                activeTab === 'products'
                  ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                  : 'text-[#8F8172] hover:text-[#202D23]'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'المنتجات والأسعار' : 'Products & Pricing'} ({products.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`py-3 flex items-center gap-1.5 transition-colors ${
                activeTab === 'orders'
                  ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                  : 'text-[#8F8172] hover:text-[#202D23]'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'الطلبات المباشرة' : 'Live Orders'} ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('promos')}
              className={`py-3 flex items-center gap-1.5 transition-colors ${
                activeTab === 'promos'
                  ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                  : 'text-[#8F8172] hover:text-[#202D23]'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'قسائم الخصم' : 'Promo Codes'} ({promoCodes.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`py-3 flex items-center gap-1.5 transition-colors ${
                activeTab === 'settings'
                  ? 'border-b-2 border-[#C8A96B] text-[#202D23]'
                  : 'text-[#8F8172] hover:text-[#202D23]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'إعدادات الفرع والواتساب' : 'Store Settings'}</span>
            </button>
          </div>

          <button
            onClick={resetAllData}
            className="text-[11px] text-red-700 hover:underline flex items-center gap-1 shrink-0"
            title="Reset to factory demo data"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{language === 'ar' ? 'إعادة ضبط البيانات' : 'Reset Demo'}</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* PRODUCTS TAB */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="bg-white border border-[#EADFCF] rounded-2xl divide-y divide-[#F7F1E7] overflow-hidden">
                {products.map(prod => {
                  const isEditing = editingId === prod.id;
                  return (
                    <div key={prod.id} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <img src={prod.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <h5 className="font-serif text-sm font-bold text-[#202D23]">
                            {language === 'ar' ? prod.nameAr : prod.nameEn}
                          </h5>
                          <span className="text-[10px] text-[#8F8172] uppercase font-semibold">{prod.category}</span>
                        </div>
                      </div>

                      {isEditing ? (
                        <div className="flex items-center gap-3 bg-[#F7F1E7] p-2 rounded-xl border border-[#C8A96B]">
                          <div>
                            <label className="text-[10px] block text-[#8F8172]">{language === 'ar' ? 'السعر (ر.س):' : 'Price (SAR):'}</label>
                            <input
                              type="number"
                              value={editPrice}
                              onChange={e => setEditPrice(Number(e.target.value))}
                              className="w-20 bg-white border rounded px-2 py-0.5 text-xs font-bold"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] block text-[#8F8172]">{language === 'ar' ? 'الحالة:' : 'Stock:'}</label>
                            <select
                              value={editStock}
                              onChange={e => setEditStock(e.target.value as any)}
                              className="bg-white border rounded px-2 py-0.5 text-xs"
                            >
                              <option value="in_stock">{language === 'ar' ? 'متوفر' : 'In Stock'}</option>
                              <option value="low_stock">{language === 'ar' ? 'كمية محدودة' : 'Low Stock'}</option>
                              <option value="sold_out">{language === 'ar' ? 'نفد اليوم' : 'Sold Out'}</option>
                            </select>
                          </div>

                          <button
                            onClick={() => saveEdit(prod)}
                            className="bg-[#202D23] text-white p-2 rounded-lg hover:bg-[#33251E]"
                            title="Save"
                          >
                            <Save className="w-4 h-4 text-[#C8A96B]" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="text-end">
                            <span className="font-serif font-bold text-sm text-[#202D23] block">
                              {formatPrice(prod.price)}
                            </span>
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                              prod.stockStatus === 'in_stock'
                                ? 'bg-emerald-100 text-emerald-800'
                                : prod.stockStatus === 'low_stock'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {prod.stockStatus.replace('_', ' ')}
                            </span>
                          </div>

                          <button
                            onClick={() => startEdit(prod)}
                            className="p-1.5 rounded-lg border border-[#EADFCF] hover:bg-[#F7F1E7] text-[#202D23]"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="bg-white border border-[#EADFCF] rounded-2xl p-4 space-y-3 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F7F1E7] pb-2">
                    <div>
                      <span className="font-mono font-bold text-sm text-[#202D23]">{order.orderNumber}</span>
                      <span className="text-[#8F8172] ms-2">{order.customerName} ({order.phone})</span>
                    </div>
                    <span className="font-serif font-bold text-sm text-[#202D23]">{formatPrice(order.total)}</span>
                  </div>

                  <div>
                    <span className="text-[#8F8172] block">{language === 'ar' ? 'الأطباق:' : 'Items:'}</span>
                    <p className="text-[#202D23] font-medium">
                      {order.items.map(it => `${it.quantity}x ${it.product.nameAr}`).join(', ')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#F7F1E7]">
                    <span className="text-[11px] text-[#8F8172]">
                      {order.deliveryDate} ({order.deliverySlotAr})
                    </span>

                    <div className="flex items-center gap-2">
                      <label className="text-[11px] font-bold text-[#8F8172]">
                        {language === 'ar' ? 'حالة الطلب التشغيلية:' : 'Operational Status:'}
                      </label>
                      <select
                        value={order.status}
                        onChange={e => updateOrderStatus(order.id, e.target.value as any)}
                        className="bg-[#F7F1E7] border border-[#EADFCF] rounded-lg px-2.5 py-1 text-xs font-bold text-[#202D23]"
                      >
                        <option value="received">{language === 'ar' ? 'تم استلام الطلب' : 'Received'}</option>
                        <option value="preparing">{language === 'ar' ? 'قيد التحضير بالمطبخ' : 'Preparing'}</option>
                        <option value="in_transit">{language === 'ar' ? 'مع المندوب المبرد' : 'In Chilled Transit'}</option>
                        <option value="delivered">{language === 'ar' ? 'تم التوصيل' : 'Delivered'}</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PROMOTIONS TAB */}
          {activeTab === 'promos' && (
            <div className="space-y-6">
              <form onSubmit={handleCreatePromo} className="bg-white p-5 rounded-2xl border border-[#EADFCF] space-y-3 text-xs">
                <h4 className="font-serif text-sm font-bold text-[#202D23] flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#C8A96B]" />
                  <span>{language === 'ar' ? 'إنشاء قسيمة خصم جديدة' : 'Create New Voucher'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'رمز الكود:' : 'Code:'}</label>
                    <input
                      type="text"
                      value={newPromoCode}
                      onChange={e => setNewPromoCode(e.target.value)}
                      placeholder="E.g. EID2026"
                      required
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5 font-mono uppercase"
                    />
                  </div>

                  <div>
                    <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'نسبة الخصم (%):' : 'Discount (%):'}</label>
                    <input
                      type="number"
                      value={newPromoDiscount}
                      onChange={e => setNewPromoDiscount(Number(e.target.value))}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5"
                    />
                  </div>

                  <div>
                    <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'الحد الأدنى للطلب (ر.س):' : 'Min Spend (SAR):'}</label>
                    <input
                      type="number"
                      value={newPromoMinSpend}
                      onChange={e => setNewPromoMinSpend(Number(e.target.value))}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'الوصف:' : 'Description:'}</label>
                    <input
                      type="text"
                      value={newPromoDesc}
                      onChange={e => setNewPromoDesc(e.target.value)}
                      placeholder="خصم خاص لموسم الأعياد"
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#202D23] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#33251E]"
                >
                  {language === 'ar' ? 'تفعيل القسيمة' : 'Activate Promo'}
                </button>
              </form>

              <div className="bg-white border border-[#EADFCF] rounded-2xl divide-y divide-[#F7F1E7] overflow-hidden text-xs">
                {promoCodes.map((p, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-mono font-bold text-sm text-[#202D23]">{p.code}</span>
                      <p className="text-[11px] text-[#665D52]">{language === 'ar' ? p.descriptionAr : p.descriptionEn}</p>
                    </div>
                    <div className="text-end">
                      <span className="font-bold text-[#C8A96B] block">
                        {p.discountPercent ? `${p.discountPercent}%` : `${p.discountFlatSar} SAR`}
                      </span>
                      {p.minSpendSar && (
                        <span className="text-[10px] text-gray-400">فوق {p.minSpendSar} ر.س</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STORE SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-2xl border border-[#EADFCF] space-y-4 text-xs">
              <h4 className="font-serif text-sm font-bold text-[#202D23] border-b border-[#F7F1E7] pb-2">
                {language === 'ar' ? 'إعدادات الفرع ورقم الواتساب الرسمي' : 'Store & WhatsApp Settings'}
              </h4>

              <div className="space-y-3">
                <div>
                  <label className="text-[#8F8172] block mb-1 font-bold">
                    {language === 'ar' ? 'رقم الواتساب المعتمد لتلقي الطلبات:' : 'Restaurant WhatsApp Number:'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={tempWhatsApp}
                      onChange={e => setTempWhatsApp(e.target.value)}
                      placeholder="966501234567"
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-xs font-mono"
                    />
                  </div>
                  <span className="text-[10px] text-[#8F8172] mt-0.5 block">
                    {language === 'ar' ? 'بالصيغة الدولية بدون علامة + (مثال: 966501234567)' : 'International format without + symbol (e.g. 966501234567)'}
                  </span>
                </div>

                <button
                  onClick={handleSaveSettings}
                  className="bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm"
                >
                  {language === 'ar' ? 'حفظ إعدادات المتجر' : 'Save Store Settings'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export const AdminCmsModal: React.FC = () => {
  const { isAdminOpen } = useRestaurant();
  if (!isAdminOpen) return null;
  return <AdminCmsModalContent />;
};

