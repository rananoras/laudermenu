import { Language } from '../types';

export const TRANSLATIONS = {
  ar: {
    // Brand & Header
    brandName: 'لادوريه باريس',
    brandSubtitle: 'دار الماكرون والحلويات الباريسية الراقية منذ ١٨٦٢ • المملكة العربية السعودية',
    flagshipLocation: 'فروع الرياض وجدة',
    announcement: '✨ توصيل مبرد في نفس اليوم لجميع أحياء الرياض وجدة • توصيل مجاني للطلبات فوق ٢٥٠ ر.س بكود RIYADH',
    search: 'بحث',
    searchPlaceholder: 'ابحث عن صناديق الماكرون، الإسبهان، شاي ماري أنطوانيت، كيكات الاحتفال...',
    account: 'حسابي',
    bag: 'سلة التسوق',
    orderNow: 'تسوق الآن',
    exploreMenu: 'استكشف قائمة لادوريه',
    viewAllMenu: 'عرض تشكيلة المتجر',
    cmsPortal: 'إدارة المتجر',
    conciergePhone: 'خدمة عملاء لادوريه: 4567 123 50 966+',

    // Multi-Page Navigation
    pageHome: 'الرئيسية',
    pageMacarons: 'الماكرون وصناديق الهدايا',
    pagePatisseries: 'الحلويات والكيك',
    pageDelicacies: 'الشاي والشوكولاتة',
    pageGifting: 'الأهرامات والهدايا الفاخرة',
    pageSalons: 'صالونات الشاي والفروع',
    pageHeritage: 'تاريخ لادوريه ١٨٦٢',
    pageLoyalty: 'نادي لادوريه VIP',

    // Hero
    heroTitle: 'أيقونة الماكرون وفنون الحلويات الباريسية في المملكة',
    heroSubtitle: 'تاريخ عريق من الأناقة والضيافة الملكية منذ عام ١٨٦٢',
    heroDescription: 'منذ ابتكار الماكرون ذي الطبقتين في قلب باريس، تقدم لادوريه أرقى اللحظات الحلوة في صالونات الشاي الفاخرة بالرياض وجدة وتوصيلها مبردة إلى عتبة بابكم.',
    orderViaWhatsApp: 'طلب سريع عبر واتساب',
    buildCustomBox: 'صمّم صندوق ماكرون على ذوقك',

    // Box Builder
    boxBuilderTitle: 'ابتكر صندوق الماكرون الخاص بك',
    boxBuilderSubtitle: 'اختر حجم الصندوق، ولون الشريط الفاخر، ونسق نكهات الماكرون المفضلة لديك حبة بحبة',
    selectedFlavorsCount: 'الحبات المختارة:',
    selectRibbon: 'لون شريط الساتان:',
    ribbonGreen: 'أخضر لادوريه الأيقوني',
    ribbonPink: 'وردي ماري أنطوانيت',
    ribbonGold: 'ذهبي إمبراطوري',
    ribbonBlack: 'أسود مخملي باريسي',
    boxFullNotice: 'اكتملت حبات الصندوق! يمكنك إضافته إلى سلة التسوق الآن.',
    addBespokeBoxToBag: 'أضف الصندوق المخصص للسلة',

    // 3D Carousel & Highlights
    carouselBadge: 'مختارات لادوريه الأيقونية',
    carouselTitle: 'إبداعات باريسية خالدة',
    carouselSubtitle: 'اسحب لتصفح المنتجات في العرض ثلاثي الأبعاد الفاخر',
    dragHint: 'اسحب يميناً أو يساراً للتنقل بين الإبداعات',
    prev: 'السابق',
    next: 'التالي',
    addedToBag: 'تمت الإضافة للسلة',
    quickView: 'تفاصيل سريعة',
    addToBag: 'أضف للسلة',
    currencySar: 'ر.س',

    // Categories
    catAll: 'كامل التشكيلة',
    catMacarons: 'الماكرون والصناديق',
    catPatisseries: 'الحلويات الباريسية',
    catCakes: 'كيكات المناسبات',
    catChocolates: 'الشوكولاتة وبسكويت أوجيني',
    catTeas: 'شاي لادوريه الفاخر',
    catPyramids: 'أهرامات الماكرون الملكية',
    catGifting: 'سلال الهدايا الفخمة',

    // Legacy categories mapped
    catStarters: 'مأكولات صالون الشاي',
    catMains: 'أطباق البرنش والفطور',
    catSignatures: 'توقيع لادوريه',
    catDesserts: 'الحلويات الفاخرة',
    catBeverages: 'المشروبات والشاي',
    catGifts: 'الهدايا',

    // Product Card & Details
    price: 'السعر',
    portions: 'الحجم / الحصص',
    allergens: 'مسببات الحساسية',
    ingredients: 'المكونات النبيلة',
    prepTime: 'مدة التجهيز',
    lowStock: 'كمية محدودة اليوم',
    customMessagePrompt: 'عبارة إهداء خاصة على الكيكة (مجاناً):',
    customMessagePlaceholder: 'مثال: ألف مبروك التخرج، عيد ميلاد سعيد يا نورة...',
    candleOption: 'إضافة شموع لادوريه الذهبية الاحتفالية (مجاناً)',
    specialNotes: 'ملاحظات وتفضيلات إضافية',

    // Cart & Drawer
    cartTitle: 'سلة مشتريات لادوريه',
    emptyCart: 'سلتك فارغة حالياً',
    emptyCartSub: 'استكشف صناديق الماكرون الأيقونية والحلويات الفرنسية الفاخرة.',
    subtotal: 'المجموع الفرعي',
    deliveryFee: 'رسوم التوصيل المبرد',
    freeDelivery: 'توصيل مجاني',
    discount: 'الخصم المطبق',
    vatNotice: 'شامل ضريبة القيمة المضافة (١٥٪)',
    total: 'الإجمالي النهائي',
    promoPlaceholder: 'أدخل كود الخصم (مثل LADUREE10 أو RIYADH)',
    applyPromo: 'تطبيق',
    freeDeliveryProgress: 'أضف ما قيمته {amount} ر.س للحصول على توصيل مبرد مجاني!',
    freeDeliveryUnlocked: 'تهانينا! حصلت على توصيل مجاني لطلبك.',
    proceedToCheckout: 'متابعة الدفع الإلكتروني',
    orWhatsAppOrder: 'أو اطلب مباشرة عبر واتساب',
    deliveryZone: 'منطقة التوصيل المبرد:',

    // Checkout Modal
    checkoutTitle: 'إتمام الطلب والدفع الآمن',
    checkoutSecureBadge: 'دفع مشفر ومحمي ٢٥٦ بت • مدى وآبل باي',
    stepDetails: 'بيانات التوصيل',
    stepPayment: 'طريقة الدفع',
    stepConfirmation: 'تأكيد الطلب',
    recipientInfo: 'بيانات المستلم',
    fullName: 'الاسم الكريم',
    mobileNumber: 'رقم الجوال (للتنسيق مع المندوب)',
    emailAddress: 'البريد الإلكتروني للإيصال',
    streetAddress: 'العنوان بالتفصيل (الحي، اسم الشارع، رقم الفيلا/الشقة)',
    deliverySlotLabel: 'الفترة المفضلة للاستلام:',
    orderNotesLabel: 'ملاحظات إضافية بخصوص التوصيل أو الإهداء:',
    paymentMethodMada: 'بطاقة مدى السعودية (Mada)',
    paymentMethodApplePay: 'آبل باي (Apple Pay)',
    paymentMethodCard: 'البطاقات الائتمانية (Visa / Mastercard)',
    orderConfirmed: 'تم استلام طلبك بنجاح في لادوريه باريس!',
    orderNumberText: 'رقم الطلب:',
    printReceipt: 'طباعة الفاتورة الضريبية الفاخرة',
    trackOrderWhatsApp: 'متابعة حالة التوصيل عبر واتساب',
    viewInAccount: 'عرض في سجل طلباتي',

    // Loyalty
    loyaltyTitle: 'نادي لادوريه للمكافآت والامتيازات VIP',
    loyaltySubtitle: 'اكسب نقطة واحدة مقابل كل ١ ر.س تنفقه في المتجر واستبدلها بقسائم فورية وهدايا ماكرون مجانية.',
    availablePoints: 'رصيد نقاطك الحالي',
    rewardsCatalog: 'دليل المكافآت المتاحة',
    pointsHistory: 'سجل حركات النقاط',
    redeemReward: 'استبدال الآن',
    copyCode: 'نسخ الكود',
    copied: 'تم النسخ بنجاح',

    // Support Chat
    chatTitle: 'خدمة عملاء لادوريه باريس',
    chatSubtitle: 'إجابات فورية ومعتمدة على مدار الساعة',
    chatWelcome: 'مرحباً بكم في لادوريه باريس بالمملكة العربية السعودية. كيف يمكننا خدمتكم اليوم بخصوص صناديق الماكرون أو الحجوزات أو التوصيل المبرد؟',
    quickQuestions: 'الأسئلة الشائعة والاستفسارات السريعة:',
    speakToConcierge: 'التحدث مع موظف خدمة العملاء في واتساب',

    // Heritage
    heritageTitle: 'تاريخ لادوريه باريس منذ ١٨٦٢',
    heritageSubtitle: 'قصة ابتكار أول ماكرون في العالم ونشأة صالونات الشاي الباريسية',
    heritageStory1: 'بدأت الحكاية في عام ١٨٦٢ عندما أسس لويس إرنست لادوريه مخبزه في شارع رويال بقلب باريس. وبعد حريق أتى على المخبز، أعيد تصميمه كصالون شاي فاخر زينه الرسام الشهير جول شيريه بلوحات جدارية تجسد ملائكة الباتيسري.',
    heritageStory2: 'في ثلاثينيات القرن العشرين، خطرت لبيير ديفونتين، حفيد لادوريه، الفكرة العبقرية التي غيرت مسار تاريخ الحلويات: أخذ قشرتي ماكرون من اللوز وجمعهما معاً بحشوة غنية ومذابة من الجناش. هكذا وُلد الماكرون الباريسي ذو الطبقتين الذي تعشقه الملايين اليوم.',

    // Footer
    footerBrandDesc: 'العنوان الأرقى لفنون الماكرون والحلويات الباريسية في المملكة العربية السعودية. صالونات شاي متميزة في الرياض وجدة وتوصيل مبرد محافظ على أعلى درجات الجودة.',
    footerSalonsHeading: 'صالوناتنا وبوتيكاتنا',
    footerQuickLinks: 'روابط المتجر',
    footerContactHeading: 'خدمة العملاء والطلبات الخاصة',
    footerCopyright: '© ٢٠٢٦ لادوريه باريس - المملكة العربية السعودية. جميع الحقوق محفوظة.'
  },

  en: {
    // Brand & Header
    brandName: 'Ladurée Paris',
    brandSubtitle: 'Haute Pâtisserie & Macarons Parisienne since 1862 • Saudi Arabia',
    flagshipLocation: 'Riyadh & Jeddah Boutiques',
    announcement: '✨ Chilled Same-Day Delivery in Riyadh & Jeddah • Free delivery above 250 SAR with code RIYADH',
    search: 'Search',
    searchPlaceholder: 'Search macaron boxes, Ispahan, Marie-Antoinette tea, celebration cakes...',
    account: 'My Account',
    bag: 'Shopping Bag',
    orderNow: 'Shop Now',
    exploreMenu: 'Explore the Menu',
    viewAllMenu: 'View Full Collection',
    cmsPortal: 'Store Admin',
    conciergePhone: 'Ladurée Concierge: +966 50 123 4567',

    // Multi-Page Navigation
    pageHome: 'Home',
    pageMacarons: 'Macarons & Boxes',
    pagePatisseries: 'Pâtisseries & Cakes',
    pageDelicacies: 'Teas & Chocolates',
    pageGifting: 'Pyramids & Gifting',
    pageSalons: 'Tea Salons & Boutiques',
    pageHeritage: 'Heritage 1862',
    pageLoyalty: 'Le Cercle Ladurée VIP',

    // Hero
    heroTitle: 'The Art of the Parisian Macaron in Saudi Arabia',
    heroSubtitle: 'A legacy of French elegance and royal hospitality since 1862',
    heroDescription: 'From the historic invention of the double-decker macaron in Paris, Ladurée brings refined art de vivre to our tea salons in Riyadh and Jeddah, with chilled delivery directly to your door.',
    orderViaWhatsApp: 'Quick Order via WhatsApp',
    buildCustomBox: 'Build Your Custom Box',

    // Box Builder
    boxBuilderTitle: 'Create Your Bespoke Macaron Coffret',
    boxBuilderSubtitle: 'Choose your box size, ribbon styling, and compose your flavor selection piece by piece',
    selectedFlavorsCount: 'Selected pieces:',
    selectRibbon: 'Satin Ribbon Color:',
    ribbonGreen: 'Ladurée Signature Pistachio Green',
    ribbonPink: 'Marie-Antoinette Powder Pink',
    ribbonGold: 'Imperial Gilded Gold',
    ribbonBlack: 'Velvet Parisian Noir',
    boxFullNotice: 'Your box is full! You can now add it to your shopping bag.',
    addBespokeBoxToBag: 'Add Bespoke Box to Bag',

    // 3D Carousel & Highlights
    carouselBadge: 'Ladurée Icons',
    carouselTitle: 'Artisanal Parisian Masterpieces',
    carouselSubtitle: 'Swipe to rotate and explore our signature creations in luxury 3D',
    dragHint: 'Drag left or right to explore',
    prev: 'Previous',
    next: 'Next',
    addedToBag: 'Added to Bag',
    quickView: 'Quick View',
    addToBag: 'Add to Bag',
    currencySar: 'SAR',

    // Categories
    catAll: 'All Collections',
    catMacarons: 'Macarons & Coffrets',
    catPatisseries: 'French Pâtisseries',
    catCakes: 'Celebration Cakes',
    catChocolates: 'Chocolates & Eugénie',
    catTeas: 'Ladurée Fine Teas',
    catPyramids: 'Royal Macaron Pyramids',
    catGifting: 'Luxury Gift Hampers',

    // Legacy categories mapped
    catStarters: 'Salon Savouries',
    catMains: 'Brunch & Breakfast',
    catSignatures: 'Ladurée Signatures',
    catDesserts: 'Fine Desserts',
    catBeverages: 'Teas & Coffee',
    catGifts: 'Gifting',

    // Product Card & Details
    price: 'Price',
    portions: 'Size / Servings',
    allergens: 'Allergen Information',
    ingredients: 'Noble Ingredients',
    prepTime: 'Preparation',
    lowStock: 'Limited Quantity Today',
    customMessagePrompt: 'Complimentary Gold Cake Inscription:',
    customMessagePlaceholder: 'E.g., Congratulations Noura, Happy Birthday...',
    candleOption: 'Complimentary celebratory gold candles included',
    specialNotes: 'Special Instructions & Requests',

    // Cart & Drawer
    cartTitle: 'Your Ladurée Bag',
    emptyCart: 'Your bag is currently empty',
    emptyCartSub: 'Explore our iconic macaron coffrets and French pastries.',
    subtotal: 'Subtotal',
    deliveryFee: 'Chilled Delivery Fee',
    freeDelivery: 'Complimentary',
    discount: 'Applied Privilege Discount',
    vatNotice: 'Inclusive of 15% Saudi VAT',
    total: 'Total Amount',
    promoPlaceholder: 'Enter promo code (e.g., LADUREE10, RIYADH)',
    applyPromo: 'Apply',
    freeDeliveryProgress: 'Add {amount} SAR more to unlock complimentary chilled delivery!',
    freeDeliveryUnlocked: 'You have unlocked complimentary chilled delivery!',
    proceedToCheckout: 'Proceed to Secure Checkout',
    orWhatsAppOrder: 'Or Order directly via WhatsApp',
    deliveryZone: 'Chilled Delivery Zone:',

    // Checkout Modal
    checkoutTitle: 'Secure Checkout & Payment',
    checkoutSecureBadge: '256-bit SSL Encrypted • Mada & Apple Pay',
    stepDetails: 'Delivery Details',
    stepPayment: 'Payment Method',
    stepConfirmation: 'Confirmation',
    recipientInfo: 'Recipient Information',
    fullName: 'Full Name',
    mobileNumber: 'Mobile Phone (for delivery coordination)',
    emailAddress: 'Email Address (for VAT invoice)',
    streetAddress: 'Detailed Street Address (District, Villa/Apt number)',
    deliverySlotLabel: 'Preferred Delivery Time Window:',
    orderNotesLabel: 'Order Notes & Gift Inscription:',
    paymentMethodMada: 'Saudi Mada Debit Card',
    paymentMethodApplePay: 'Apple Pay',
    paymentMethodCard: 'Credit Card (Visa / Mastercard)',
    orderConfirmed: 'Your order has been received at Maison Ladurée!',
    orderNumberText: 'Order Number:',
    printReceipt: 'Print Luxury VAT Invoice',
    trackOrderWhatsApp: 'Track Delivery on WhatsApp',
    viewInAccount: 'View in Order History',

    // Loyalty
    loyaltyTitle: 'Le Cercle Ladurée VIP Rewards',
    loyaltySubtitle: 'Earn 1 point for every 1 SAR spent and redeem for instant dining credit vouchers and sweet complimentary gifts.',
    availablePoints: 'Available Points Balance',
    rewardsCatalog: 'Rewards Catalog',
    pointsHistory: 'Points Activity History',
    redeemReward: 'Redeem Now',
    copyCode: 'Copy Code',
    copied: 'Copied!',

    // Support Chat
    chatTitle: 'Ladurée Paris Concierge',
    chatSubtitle: 'Instant Verified Answers 24/7',
    chatWelcome: 'Welcome to Ladurée Paris Saudi Arabia. How may we assist you with macaron coffrets, salon bookings, or chilled delivery today?',
    quickQuestions: 'Frequently Asked Questions:',
    speakToConcierge: 'Speak with Ladurée Concierge on WhatsApp',

    // Heritage
    heritageTitle: 'The Story of Maison Ladurée 1862',
    heritageSubtitle: 'The invention of the double-decker macaron and the dawn of Parisian tea salons',
    heritageStory1: 'In 1862, Louis Ernest Ladurée opened a bakery on Rue Royale in Paris. Following a fire, it was rebuilt and decorated by celebrated painter Jules Chéret with cherubic pastry angels, transforming it into one of Paris’s very first tea salons where women could gather freely.',
    heritageStory2: 'In the 1930s, Pierre Desfontaines, grandson of Ladurée, had the stroke of genius to take two delicate almond macaron shells and sandwich them with rich chocolate ganache. The modern Parisian macaron was born, becoming a global symbol of refined French taste.',

    // Footer
    footerBrandDesc: 'The quintessential French macaron boutique and tea salon in Saudi Arabia. Renowned tea salons in Riyadh and Jeddah, with temperature-controlled chilled delivery at peak quality.',
    footerSalonsHeading: 'Salons & Boutiques',
    footerQuickLinks: 'Quick Links',
    footerContactHeading: 'Concierge & VIP Inquiries',
    footerCopyright: '© 2026 Ladurée Paris - Saudi Arabia. All rights reserved.'
  }
};
