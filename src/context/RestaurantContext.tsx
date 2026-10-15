import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  Product, 
  CartItem, 
  ProductVariant, 
  Order, 
  LoyaltyReward, 
  PromoCode, 
  UserProfile, 
  ProductCategory 
} from '../types';
import { 
  INITIAL_PRODUCTS, 
  INITIAL_REWARDS, 
  INITIAL_PROMO_CODES, 
  DEFAULT_USER, 
  SAUDI_DELIVERY_ZONES 
} from '../data/restaurantData';
import { TRANSLATIONS } from '../data/translations';

interface ToastNotification {
  id: string;
  type: 'gold' | 'success' | 'info';
  title: string;
  message: string;
}

interface WhatsAppModalContext {
  mode: 'cart' | 'product';
  product?: Product;
  quantity?: number;
  variant?: ProductVariant;
  customMessage?: string;
}

interface RestaurantContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof TRANSLATIONS['ar'];
  isRtl: boolean;

  // Catalog
  products: Product[];
  activeCategory: ProductCategory;
  setActiveCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  formatPrice: (amountInSar: number) => string;

  // Cart
  cart: CartItem[];
  addToCart: (
    product: Product, 
    quantity?: number, 
    variant?: ProductVariant, 
    customCakeMessage?: string, 
    selectedCandles?: boolean, 
    specialInstructions?: string
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  deliveryFee: number;
  calculatedDiscount: number;
  vatAmount: number;
  cartTotal: number;
  appliedPromo: PromoCode | null;
  applyPromoCode: (codeStr: string) => { success: boolean; message: string };
  removePromoCode: () => void;

  // Delivery Zone
  selectedZoneId: string;
  setSelectedZoneId: (id: string) => void;
  currentDeliveryZone: typeof SAUDI_DELIVERY_ZONES[0];

  // Settings
  restaurantWhatsApp: string;
  setRestaurantWhatsApp: (phone: string) => void;

  // Modals
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isQuickViewOpen: boolean;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isWhatsAppModalOpen: boolean;
  setIsWhatsAppModalOpen: (open: boolean) => void;
  whatsAppModalData: WhatsAppModalContext;
  openWhatsAppForProduct: (product: Product, quantity?: number, variant?: ProductVariant, customMessage?: string) => void;
  openWhatsAppForCart: () => void;
  isLoyaltyOpen: boolean;
  setIsLoyaltyOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isSupportChatOpen: boolean;
  setIsSupportChatOpen: (open: boolean) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;

  // User & Rewards
  user: UserProfile;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  rewards: LoyaltyReward[];
  redeemReward: (reward: LoyaltyReward) => { success: boolean; message: string; voucherCode?: string };

  // Orders
  orders: Order[];
  placeOrder: (orderData: Partial<Order>) => Order;
  selectedReceiptOrder: Order | null;
  setSelectedReceiptOrder: (order: Order | null) => void;

  // CMS
  promoCodes: PromoCode[];
  updateProduct: (updated: Product) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  addPromoCode: (promo: PromoCode) => void;
  resetAllData: () => void;

  // Toasts
  toasts: ToastNotification[];
  addToast: (title: string, message: string, type?: 'gold' | 'success' | 'info') => void;
  removeToast: (id: string) => void;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language & Direction
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('miral_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const isRtl = language === 'ar';
  const t = TRANSLATIONS[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('miral_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };

  // Sync html attributes for RTL/LTR
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Persisted state
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('miral_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('miral_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('miral_user');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('miral_orders');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'ord-initial-1',
        orderNumber: 'AM-89421',
        date: '2026-10-10',
        items: [
          {
            id: 'item-init-1',
            product: INITIAL_PRODUCTS[2], // Celebration Cake
            quantity: 1,
            selectedVariant: INITIAL_PRODUCTS[2].variants?.[0],
            customCakeMessage: 'مبروك التخرج يا نورة • Mabrouk Noura'
          },
          {
            id: 'item-init-2',
            product: INITIAL_PRODUCTS[11], // Royal Gahwa
            quantity: 1
          }
        ],
        subtotal: 405,
        deliveryFee: 0,
        discount: 0,
        vatAmount: 52.8,
        total: 405,
        customerName: 'فيصل آل سعود',
        phone: '+966 50 491 8820',
        fulfillmentType: 'delivery',
        deliveryZoneEn: 'North Riyadh (Hittin & Malqa)',
        deliveryZoneAr: 'شمال الرياض (حطين والملقا)',
        deliveryAddress: 'طريق الأمير تركي بن عبد العزيز الأول، فيلا حطين',
        deliveryDate: '2026-10-11',
        deliverySlotEn: '14:00 - 17:00 (Afternoon)',
        deliverySlotAr: '14:00 - 17:00 (الفترة المسائية)',
        paymentMethod: 'mada',
        status: 'delivered',
        pointsEarned: 405,
        isWhatsAppOrder: false
      }
    ];
  });

  const [promoCodes, setPromoCodes] = useState<PromoCode[]>(() => {
    const saved = localStorage.getItem('miral_promos');
    return saved ? JSON.parse(saved) : INITIAL_PROMO_CODES;
  });

  const [restaurantWhatsApp, setRestaurantWhatsApp] = useState<string>(() => {
    return localStorage.getItem('miral_whatsapp') || '966501234567';
  });

  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZoneId, setSelectedZoneId] = useState<string>(SAUDI_DELIVERY_ZONES[0].id);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppModalData, setWhatsAppModalData] = useState<WhatsAppModalContext>({ mode: 'cart' });
  const [isLoyaltyOpen, setIsLoyaltyOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedReceiptOrder, setSelectedReceiptOrder] = useState<Order | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = (title: string, message: string, type: 'gold' | 'success' | 'info' = 'gold') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('miral_products', JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem('miral_cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('miral_user', JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem('miral_orders', JSON.stringify(orders));
  }, [orders]);
  useEffect(() => {
    localStorage.setItem('miral_promos', JSON.stringify(promoCodes));
  }, [promoCodes]);
  useEffect(() => {
    localStorage.setItem('miral_whatsapp', restaurantWhatsApp);
  }, [restaurantWhatsApp]);

  // Current delivery zone object
  const currentDeliveryZone = SAUDI_DELIVERY_ZONES.find(z => z.id === selectedZoneId) || SAUDI_DELIVERY_ZONES[0];

  // Currency formatting
  const formatPrice = (amountInSar: number): string => {
    if (language === 'ar') {
      return `${amountInSar.toFixed(0)} ر.س`;
    }
    return `${amountInSar.toFixed(0)} SAR`;
  };

  // Cart operations
  const addToCart = (
    product: Product, 
    quantity = 1, 
    variant?: ProductVariant, 
    customCakeMessage?: string, 
    selectedCandles?: boolean, 
    specialInstructions?: string
  ) => {
    setCart(prev => {
      const activeVariant = variant || (product.variants && product.variants.length > 0 ? product.variants[0] : undefined);
      const existingIdx = prev.findIndex(item => 
        item.product.id === product.id &&
        item.selectedVariant?.id === activeVariant?.id &&
        item.customCakeMessage === customCakeMessage
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }

      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        product,
        quantity,
        selectedVariant: activeVariant,
        customCakeMessage,
        selectedCandles,
        specialInstructions
      };
      return [...prev, newItem];
    });

    addToast(
      language === 'ar' ? 'أُضيف إلى السلة' : 'Added to Bag',
      language === 'ar' 
        ? `تمت إضافة ${quantity}x ${product.nameAr} إلى سلة طلباتك.`
        : `${quantity}x ${product.nameEn} added to your bag.`,
      'gold'
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => item.id === cartItemId ? { ...item, quantity } : item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotal = cart.reduce((acc, item) => {
    const itemPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
    return acc + (itemPrice * item.quantity);
  }, 0);

  // Delivery fee calculation based on selected zone & free delivery threshold
  const deliveryFee = (cartSubtotal >= currentDeliveryZone.minForFree || cartSubtotal === 0) 
    ? 0 
    : currentDeliveryZone.fee;

  // Promo code calculation
  const calculatedDiscount = React.useMemo(() => {
    if (!appliedPromo) return 0;
    if (appliedPromo.minSpendSar && cartSubtotal < appliedPromo.minSpendSar) return 0;
    if (appliedPromo.discountPercent) {
      return (cartSubtotal * appliedPromo.discountPercent) / 100;
    }
    if (appliedPromo.discountFlatSar) {
      return Math.min(cartSubtotal, appliedPromo.discountFlatSar);
    }
    return 0;
  }, [appliedPromo, cartSubtotal]);

  // VAT (15% Saudi Standard) calculated as standard part of total
  const cartTotal = Math.max(0, cartSubtotal - calculatedDiscount + (cartSubtotal > 0 ? deliveryFee : 0));
  const vatAmount = (cartTotal * 15) / 115; // 15% inclusive

  const applyPromoCode = (codeStr: string) => {
    const cleaned = codeStr.trim().toUpperCase();
    const found = promoCodes.find(p => p.code.toUpperCase() === cleaned && p.active);
    if (!found) {
      return { 
        success: false, 
        message: language === 'ar' ? 'رمز القسيمة غير صالح أو منتهي الصلاحية.' : 'Invalid or expired promotional code.' 
      };
    }
    if (found.minSpendSar && cartSubtotal < found.minSpendSar) {
      return { 
        success: false, 
        message: language === 'ar' 
          ? `يتطلب هذا الكود طلباً بقيمة لا تقل عن ${found.minSpendSar} ر.س.`
          : `This code requires a minimum order of ${found.minSpendSar} SAR.` 
      };
    }
    setAppliedPromo(found);
    addToast(
      language === 'ar' ? 'تم تطبيق القسيمة' : 'Voucher Applied',
      language === 'ar' ? `تم تفعيل خصم ${found.code} بنجاح.` : `Code ${found.code} successfully applied.`,
      'gold'
    );
    return { 
      success: true, 
      message: language === 'ar' ? `تم تطبيق الرمز ${found.code} بنجاح!` : `Promo code ${found.code} applied!` 
    };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  // Quick View
  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  // WhatsApp Context Openers
  const openWhatsAppForProduct = (product: Product, quantity = 1, variant?: ProductVariant, customMessage?: string) => {
    setWhatsAppModalData({
      mode: 'product',
      product,
      quantity,
      variant,
      customMessage
    });
    setIsWhatsAppModalOpen(true);
  };

  const openWhatsAppForCart = () => {
    setWhatsAppModalData({
      mode: 'cart'
    });
    setIsWhatsAppModalOpen(true);
  };

  // Wishlist
  const toggleWishlist = (productId: string) => {
    setUser(prev => {
      const exists = prev.wishlistIds.includes(productId);
      const updatedWishlist = exists 
        ? prev.wishlistIds.filter(id => id !== productId)
        : [...prev.wishlistIds, productId];

      const prod = products.find(p => p.id === productId);
      const prodName = language === 'ar' ? prod?.nameAr : prod?.nameEn;

      if (exists) {
        addToast(
          language === 'ar' ? 'أُزيل من المفضلة' : 'Removed from Wishlist',
          `${prodName} ${language === 'ar' ? 'تم حذفه من قائمتك' : 'removed from your wishlist'}.`,
          'info'
        );
      } else {
        addToast(
          language === 'ar' ? 'أُضيف للمفضلة' : 'Saved to Wishlist',
          `${prodName} ${language === 'ar' ? 'تم حفظه في قائمتك' : 'saved to your wishlist'}.`,
          'gold'
        );
      }

      return { ...prev, wishlistIds: updatedWishlist };
    });
  };

  const isWishlisted = (productId: string) => {
    return user.wishlistIds.includes(productId);
  };

  // Loyalty Rewards
  const rewards = INITIAL_REWARDS;

  const redeemReward = (reward: LoyaltyReward) => {
    if (user.points < reward.pointsRequired) {
      return { 
        success: false, 
        message: language === 'ar'
          ? `تحتاج إلى ${reward.pointsRequired} نقطة للاستبدال. رصيدك الحالي: ${user.points} نقطة.`
          : `You need ${reward.pointsRequired} points. Current balance: ${user.points} pts.` 
      };
    }

    const uniqueCode = `${reward.voucherCode}-${Math.floor(1000 + Math.random() * 9000)}`;

    setUser(prev => {
      const newPoints = prev.points - reward.pointsRequired;
      const newTx = {
        id: `tx-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        descriptionEn: `Redeemed: ${reward.titleEn}`,
        descriptionAr: `استبدال: ${reward.titleAr}`,
        pointsChange: -reward.pointsRequired,
        type: 'redemption' as const
      };

      const newVoucher = {
        code: uniqueCode,
        titleEn: reward.titleEn,
        titleAr: reward.titleAr,
        discountSar: reward.discountSar,
        used: false,
        date: new Date().toISOString().split('T')[0]
      };

      return {
        ...prev,
        points: newPoints,
        pointsHistory: [newTx, ...prev.pointsHistory],
        redeemedVouchers: [newVoucher, ...prev.redeemedVouchers]
      };
    });

    // Make this voucher immediately active in promo codes!
    const newPromo: PromoCode = {
      code: uniqueCode,
      discountFlatSar: reward.discountSar,
      descriptionEn: `Loyalty Voucher: ${reward.titleEn}`,
      descriptionAr: `قسيمة ولاء: ${reward.titleAr}`,
      active: true
    };
    setPromoCodes(prev => [newPromo, ...prev]);

    addToast(
      language === 'ar' ? 'تم استبدال المكافأة!' : 'Reward Redeemed!',
      language === 'ar' ? `رمز قسيمتك: ${uniqueCode}` : `Your voucher code: ${uniqueCode}`,
      'gold'
    );

    return { 
      success: true, 
      message: language === 'ar' ? `تم تفعيل قسيمتك: ${uniqueCode}` : `Your voucher code is: ${uniqueCode}`,
      voucherCode: uniqueCode 
    };
  };

  // Place Order
  const placeOrder = (orderData: Partial<Order>): Order => {
    const orderNum = `AM-${Math.floor(10000 + Math.random() * 90000)}`;
    const ptsEarned = Math.floor(cartTotal * 1); // 1 point per 1 SAR

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: orderNum,
      date: new Date().toISOString().split('T')[0],
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee: deliveryFee,
      discount: calculatedDiscount,
      vatAmount: vatAmount,
      total: cartTotal,
      customerName: orderData.customerName || user.name,
      phone: orderData.phone || user.phone,
      email: orderData.email || user.email,
      fulfillmentType: orderData.fulfillmentType || 'delivery',
      deliveryZoneEn: currentDeliveryZone.nameEn,
      deliveryZoneAr: currentDeliveryZone.nameAr,
      deliveryAddress: orderData.deliveryAddress,
      pickupBranchEn: 'Atelier Miral Hittin Flagship, Riyadh',
      pickupBranchAr: 'فرع حطين الرئيسي، الرياض',
      deliveryDate: orderData.deliveryDate || 'اليوم • Today',
      deliverySlotEn: orderData.deliverySlotEn || 'Evening Slot (18:00 - 21:00)',
      deliverySlotAr: orderData.deliverySlotAr || 'الفترة المسائية (18:00 - 21:00)',
      paymentMethod: orderData.paymentMethod || 'mada',
      status: 'received',
      pointsEarned: ptsEarned,
      isWhatsAppOrder: false,
      notes: orderData.notes
    };

    setOrders(prev => [newOrder, ...prev]);

    // Update user points and tier
    setUser(prev => {
      const updatedLifetime = prev.lifetimePoints + ptsEarned;
      const updatedBalance = prev.points + ptsEarned;
      let newTier: 'Silver' | 'Gold' | 'Diamond' = 'Silver';
      if (updatedLifetime >= 1500) newTier = 'Diamond';
      else if (updatedLifetime >= 500) newTier = 'Gold';

      const orderTx = {
        id: `tx-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        descriptionEn: `Order #${orderNum}: ${cart.length} items (+${ptsEarned} pts)`,
        descriptionAr: `طلب #${orderNum}: ${cart.length} أطباق (+${ptsEarned} نقطة)`,
        pointsChange: ptsEarned,
        type: 'order' as const
      };

      return {
        ...prev,
        points: updatedBalance,
        lifetimePoints: updatedLifetime,
        tier: newTier,
        pointsHistory: [orderTx, ...prev.pointsHistory]
      };
    });

    clearCart();
    setAppliedPromo(null);
    setSelectedReceiptOrder(newOrder);

    addToast(
      language === 'ar' ? 'تم تأكيد طلبك' : 'Order Confirmed',
      language === 'ar' 
        ? `طلب رقم #${orderNum} تم بنجاح. حصلت على +${ptsEarned} نقطة في ميرال.`
        : `Order #${orderNum} placed. You earned +${ptsEarned} points.`,
      'gold'
    );

    return newOrder;
  };

  // CMS
  const updateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
    addToast(
      language === 'ar' ? 'تحديث المنتج' : 'Product Updated',
      `${language === 'ar' ? updated.nameAr : updated.nameEn} ${language === 'ar' ? 'تم تحديثه بنجاح' : 'updated'}.`,
      'info'
    );
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    addToast(
      language === 'ar' ? 'حالة الطلب' : 'Order Status',
      `${language === 'ar' ? 'تم تعديل حالة الطلب إلى' : 'Order status changed to'} ${status}`,
      'info'
    );
  };

  const addPromoCode = (promo: PromoCode) => {
    setPromoCodes(prev => [promo, ...prev]);
    addToast(
      language === 'ar' ? 'رمز ترويجي جديد' : 'New Promo Code',
      `${promo.code} ${language === 'ar' ? 'تمت إضافته بنجاح' : 'created successfully'}.`,
      'gold'
    );
  };

  const resetAllData = () => {
    setProducts(INITIAL_PRODUCTS);
    setPromoCodes(INITIAL_PROMO_CODES);
    setUser(DEFAULT_USER);
    setCart([]);
    localStorage.removeItem('miral_products');
    localStorage.removeItem('miral_cart');
    localStorage.removeItem('miral_user');
    localStorage.removeItem('miral_orders');
    localStorage.removeItem('miral_promos');
    addToast(
      language === 'ar' ? 'إعادة ضبط البيانات' : 'Data Reset',
      language === 'ar' ? 'تمت استعادة القوائم والبيانات الافتراضية' : 'Restored default catalog data',
      'info'
    );
  };

  return (
    <RestaurantContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isRtl,
        products,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        formatPrice,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        deliveryFee,
        calculatedDiscount,
        vatAmount,
        cartTotal,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        selectedZoneId,
        setSelectedZoneId,
        currentDeliveryZone,
        restaurantWhatsApp,
        setRestaurantWhatsApp,
        isCartOpen,
        setIsCartOpen,
        isQuickViewOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isWhatsAppModalOpen,
        setIsWhatsAppModalOpen,
        whatsAppModalData,
        openWhatsAppForProduct,
        openWhatsAppForCart,
        isLoyaltyOpen,
        setIsLoyaltyOpen,
        isAccountOpen,
        setIsAccountOpen,
        isSupportChatOpen,
        setIsSupportChatOpen,
        isAdminOpen,
        setIsAdminOpen,
        user,
        toggleWishlist,
        isWishlisted,
        rewards,
        redeemReward,
        orders,
        placeOrder,
        selectedReceiptOrder,
        setSelectedReceiptOrder,
        promoCodes,
        updateProduct,
        updateOrderStatus,
        addPromoCode,
        resetAllData,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
};
