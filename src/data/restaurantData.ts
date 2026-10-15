import { Product, LoyaltyReward, PromoCode, UserProfile, ChatQuickReply, MacaronFlavor, LadureeSalon } from '../types';

export const LADUREE_MACARON_FLAVORS: MacaronFlavor[] = [
  {
    id: 'flv-pistache',
    nameEn: 'Pistachio',
    nameAr: 'الفستق الصقلي',
    frenchName: 'Pistache de Sicile',
    colorHex: '#A2C2A7',
    badgeBg: '#EBF3EC',
    descriptionEn: 'Almond macaron shell filled with pure roasted Sicilian pistachio cream.',
    descriptionAr: 'قشرة لوز ناعمة محشوة بكريمة فستق صقلية الغنية والمحمصة بمهارة باريسية.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-rose',
    nameEn: 'Rose Petal',
    nameAr: 'ورد دمشق',
    frenchName: 'Pétale de Rose',
    colorHex: '#F3C4C4',
    badgeBg: '#FDF0F0',
    descriptionEn: 'Delicate macaron infused with essence of Taif and Damascus rose petals.',
    descriptionAr: 'نكهة شاعريّة ممزوجة بخلاصة بتلات الورد الطبيعي ونفحات باريسية كلاسيكية.',
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-vanille',
    nameEn: 'Madagascar Vanilla',
    nameAr: 'فانيليا بوربون مدغشقر',
    frenchName: 'Vanille de Madagascar',
    colorHex: '#F6EED8',
    badgeBg: '#FDFBF4',
    descriptionEn: 'White shell speckled with natural Madagascar Bourbon vanilla beans.',
    descriptionAr: 'مستخلص حبوب الفانيليا الطبيعية من جزيرة مدغشقر مع كريمة بيضاء حريرية.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-caramel',
    nameEn: 'Salted Butter Caramel',
    nameAr: 'كراميل بالزبدة المملحة',
    frenchName: 'Caramel au Beurre Salé',
    colorHex: '#D89F6B',
    badgeBg: '#FDF5EC',
    descriptionEn: 'Tender shell filled with house caramel and Guérande fleur de sel.',
    descriptionAr: 'كراميل فرنسي مطبوخ ببطء مع زبدة بريتاني وزهرة ملح غيراند الشهيرة.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-chocolat',
    nameEn: 'Pure Dark Chocolate',
    nameAr: 'الشوكولاتة الداكنة غواناخا',
    frenchName: 'Chocolat Noir Pure Origine',
    colorHex: '#4A2F22',
    badgeBg: '#F3ECE7',
    descriptionEn: 'Intense 70% Valrhona dark chocolate ganache for true chocolate connoisseurs.',
    descriptionAr: 'جناش غني ومكثف من أجود أنواع الشوكولاتة الداكنة بنسبة كاكاو 70%.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-framboise',
    nameEn: 'Wild Raspberry',
    nameAr: 'توت العليق البري',
    frenchName: 'Framboise Sauvage',
    colorHex: '#C83B55',
    badgeBg: '#FCECEF',
    descriptionEn: 'Vibrant shell packed with tangy, fragrant natural raspberry confit.',
    descriptionAr: 'مربى التوت العليق الطبيعي الطازج بنكهة منعشة وتوازن مثالي بين الحلاوة والحموضة.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-citron',
    nameEn: 'Lemon',
    nameAr: 'الليمون الصقلي',
    frenchName: 'Citron Jaune',
    colorHex: '#F0DF65',
    badgeBg: '#FEFCE8',
    descriptionEn: 'Zesty and sparkling Sicilian lemon curd encased in a sun-yellow shell.',
    descriptionAr: 'كريمة ليمون صقلية المنعشة في قشرة صفراء براقة تمنح إحساساً بالحيوية والانتعاش.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-marie-antoinette',
    nameEn: 'Marie-Antoinette Tea',
    nameAr: 'شاي ماري أنطوانيت',
    frenchName: 'Thé Marie-Antoinette',
    colorHex: '#6B9D8F',
    badgeBg: '#EDF5F3',
    descriptionEn: 'Infused with Ladurée’s signature black tea, honey, and citrus fruits.',
    descriptionAr: 'نكهة لادوريه الحصرية بمزيج شاي ماري أنطوانيت الأسود مع العسل وزهر البرتقال.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-cafe',
    nameEn: 'Pure Arabica Coffee',
    nameAr: 'قهوة أرابيكا الفاخرة',
    frenchName: 'Café Pur Arabica',
    colorHex: '#80614C',
    badgeBg: '#F5ECE6',
    descriptionEn: 'Aromatic buttercream infused with freshly roasted Ethiopian Arabica.',
    descriptionAr: 'كريمة ناعمة غنية بخلاصة بن أرابيكا المحمص بنكهة عميقة ومميزة.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-fleur-oranger',
    nameEn: 'Orange Blossom',
    nameAr: 'زهر البرتقال',
    frenchName: 'Fleur d\'Oranger',
    colorHex: '#F5D3B3',
    badgeBg: '#FEF8F3',
    descriptionEn: 'Delicate floral aroma reminiscent of sunny Mediterranean gardens.',
    descriptionAr: 'أريج زهر البرتقال الطبيعي الرقيق الذي يعكس دفء حدائق المتوسط والضيافة الشرقية.',
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'flv-cassis',
    nameEn: 'Blackcurrant Violet',
    nameAr: 'الكشمش والبنفسج',
    frenchName: 'Cassis Violette',
    colorHex: '#7C4F77',
    badgeBg: '#F8F0F7',
    descriptionEn: 'Velvety blackcurrant confit accented with subtle French violet petals.',
    descriptionAr: 'مزيج فاخر بين الكشمش الأسود الحامض والعبير الهادئ لزهور البنفسج الفرنسية.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    isSeasonal: true
  },
  {
    id: 'flv-noisette',
    nameEn: 'Piedmont Hazelnut',
    nameAr: 'بندق بييمونتي',
    frenchName: 'Noisette du Piémont',
    colorHex: '#BFA175',
    badgeBg: '#FAF5ED',
    descriptionEn: 'Crunchy praline and silky hazelnut paste from northern Italy.',
    descriptionAr: 'برالينيه مقرمش مع معجون البندق الإيطالي الفاخر في قشرة مذهبة.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80',
    isSeasonal: true
  }
];

export const LADUREE_BOX_OPTIONS = [
  {
    id: 'box-8',
    nameEn: 'Coffret Napoléon III (8 Macarons)',
    nameAr: 'صندوق نابليون الثالث (٨ حبات)',
    capacity: 8,
    price: 191,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'The historic Ladurée oval green coffret embossed in gold leaf.',
    descriptionAr: 'الصندوق التاريخي الأخضر الأيقوني من لادوريه المزخرف بورق الذهب.'
  },
  {
    id: 'box-12',
    nameEn: 'Coffret Arabesque (12 Macarons)',
    nameAr: 'صندوق أرابيسك الملكي (١٢ حبة)',
    capacity: 12,
    price: 267,
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'Our most sought-after gift coffret available in Pistachio Green or Marie-Antoinette Pink.',
    descriptionAr: 'الصندوق الأكثر طلباً للهدايا، متوفر بالأخضر البستاشيو أو الوردي الملكي.'
  },
  {
    id: 'box-18',
    nameEn: 'Coffret Prestige Paris (18 Macarons)',
    nameAr: 'صندوق برستيج باريس (١٨ حبة)',
    capacity: 18,
    price: 405,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'Sophisticated coffret showcasing an abundant assortment of 18 macarons.',
    descriptionAr: 'صندوق فخم بتشطيب مخملي راقٍ يضم تشكيلة سخية من ١٨ ماكرون فاخر.'
  },
  {
    id: 'box-24',
    nameEn: 'Coffret Merveilleux (24 Macarons)',
    nameAr: 'صندوق ميرفيّو الفاخر (٢٤ حبة)',
    capacity: 24,
    price: 530,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'The supreme celebration box for gatherings, wedding favors, and VIP gifts.',
    descriptionAr: 'صندوق الاحتفالات الفاخر الأمثل للضيافة الراقية ومناسبات الزفاف والهدايا الكبرى.'
  }
];

export const LADUREE_SAUDI_SALONS: LadureeSalon[] = [
  {
    id: 'salon-riyadh-park',
    nameEn: 'Ladurée Salon de Thé • Riyadh Park',
    nameAr: 'لادوريه صالون دو تي • الرياض بارك',
    cityEn: 'Riyadh',
    cityAr: 'الرياض',
    mallEn: 'Riyadh Park Mall • Ground Floor, Gate 2',
    mallAr: 'الرياض بارك مول • الدور الأرضي، بوابة ٢',
    hoursEn: '09:00 AM – 12:00 AM (Weekends until 01:00 AM)',
    hoursAr: '٩:٠٠ ص – ١٢:٠٠ منتصف الليل (نهاية الأسبوع حتى ١:٠٠ ص)',
    phone: '+966 11 200 4881',
    addressEn: 'Northern Ring Branch Rd, Al Aqiq, Riyadh 13511',
    addressAr: 'طريق الدائري الشمالي الفرعي، حي العقيق، الرياض',
    hasAfternoonTea: true,
    hasTerrace: true,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'salon-centria',
    nameEn: 'Ladurée Boutique & Salon • Centria Mall',
    nameAr: 'لادوريه بوتيك وصالون • سنتريا مول',
    cityEn: 'Riyadh',
    cityAr: 'الرياض',
    mallEn: 'Centria Mall • First Floor Luxury Wing',
    mallAr: 'سنتريا مول • الدور الأول، جناح العلامات الفاخرة',
    hoursEn: '10:00 AM – 11:30 PM',
    hoursAr: '١٠:٠٠ ص – ١١:٣٠ م',
    phone: '+966 11 288 5030',
    addressEn: 'Olaya St, Al Olaya, Riyadh 12241',
    addressAr: 'شارع العليا، حي العليا، الرياض',
    hasAfternoonTea: true,
    hasTerrace: false,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'salon-kingdom',
    nameEn: 'Ladurée Salon • Kingdom Centre',
    nameAr: 'لادوريه صالون • مركز المملكة',
    cityEn: 'Riyadh',
    cityAr: 'الرياض',
    mallEn: 'Kingdom Centre Mall • Sky Level',
    mallAr: 'مركز المملكة • طابق الجسر المعلق',
    hoursEn: '09:30 AM – 11:30 PM',
    hoursAr: '٩:٣٠ ص – ١١:٣٠ م',
    phone: '+966 11 211 2055',
    addressEn: 'King Fahd Rd, Al Olaya, Riyadh 12214',
    addressAr: 'طريق الملك فهد، حي العليا، الرياض',
    hasAfternoonTea: true,
    hasTerrace: false,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'salon-roshn-front',
    nameEn: 'Ladurée Coffee Shop • Roshn Front',
    nameAr: 'لادوريه كوفي شوب • واجهة روشن',
    cityEn: 'Riyadh',
    cityAr: 'الرياض',
    mallEn: 'Roshn Front (Business & Shopping Gate)',
    mallAr: 'واجهة روشن (بوابة التسوق والأعمال)',
    hoursEn: '08:00 AM – 12:30 AM',
    hoursAr: '٨:٠٠ ص – ١٢:٣٠ بعد منتصف الليل',
    phone: '+966 11 245 9188',
    addressEn: 'Airport Road, King Khalid International Airport, Riyadh',
    addressAr: 'طريق المطار، الرياض',
    hasAfternoonTea: true,
    hasTerrace: true,
    isCoffeeShopConcept: true,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'salon-laysen-valley',
    nameEn: 'Ladurée Boutique • Laysen Valley',
    nameAr: 'لادوريه بوتيك • ليسن فالي',
    cityEn: 'Riyadh',
    cityAr: 'الرياض',
    mallEn: 'Laysen Valley • Building 14 Plaza',
    mallAr: 'ليسن فالي • مبنى ١٤، الساحة الرئيسية',
    hoursEn: '08:00 AM – 12:00 AM',
    hoursAr: '٨:٠٠ ص – ١٢:٠٠ منتصف الليل',
    phone: '+966 11 204 8812',
    addressEn: 'Umm Al Hamam Al Gharbi, Riyadh',
    addressAr: 'حي أم الحمام الغربي، الرياض',
    hasAfternoonTea: true,
    hasTerrace: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'salon-solitaire',
    nameEn: 'Ladurée Salon • Solitaire Mall',
    nameAr: 'لادوريه صالون دو تي • سوليتير مول',
    cityEn: 'Riyadh',
    cityAr: 'الرياض',
    mallEn: 'Solitaire Mall • Promenade Boulevard',
    mallAr: 'سوليتير مول • الممشى الخارجي الفاخر',
    hoursEn: '09:00 AM – 12:00 AM',
    hoursAr: '٩:٠٠ ص – ١٢:٠٠ منتصف الليل',
    phone: '+966 11 204 9911',
    addressEn: 'Al Thumamah Rd, Al Sahafah, Riyadh',
    addressAr: 'طريق الثمامة، حي الصحافة، الرياض',
    hasAfternoonTea: true,
    hasTerrace: true,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'salon-red-sea-mall',
    nameEn: 'Ladurée Salon • Red Sea Mall Jeddah',
    nameAr: 'لادوريه صالون • رد سي مول جدة',
    cityEn: 'Jeddah',
    cityAr: 'جدة',
    mallEn: 'Red Sea Mall • Ground Floor, Gate 4',
    mallAr: 'رد سي مول • الدور الأرضي، بوابة ٤',
    hoursEn: '10:00 AM – 12:00 AM (Fridays from 01:00 PM)',
    hoursAr: '١٠:٠٠ ص – ١٢:٠٠ منتصف الليل (الجمعة من ١:٠٠ م)',
    phone: '+966 12 215 0505',
    addressEn: 'King Abdulaziz Rd, Ash Shati, Jeddah',
    addressAr: 'طريق الملك عبدالعزيز، حي الشاطئ، جدة',
    hasAfternoonTea: true,
    hasTerrace: true,
    image: 'https://images.unsplash.com/photo-1445116572660-238429888259?auto=format&fit=crop&w=1000&q=80'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  // 1. MACARONS & COFFRETS
  {
    id: 'macaron-napoleon-8',
    nameEn: 'Coffret Napoléon III • 8 Macarons',
    nameAr: 'صندوق نابليون الثالث • ٨ حبات ماكرون',
    category: 'macarons',
    price: 191,
    descriptionEn: 'The quintessential Ladurée green oval coffret adorned with historic gold arabesques. Includes 8 assorted Parisian macarons.',
    descriptionAr: 'الصندوق الأخضر البيضاوي التاريخي المزين بزخارف ذهبية مستوحاة من عهد الإمبراطورية الفرنسية. يضم ٨ حبات ماكرون منتقاة بعناية.',
    longDescriptionEn: 'A true icon of French culinary luxury since 1862. Handcrafted in our Parisian ateliers with almond meringue shells and velvety ganache fillings. Keep chilled and enjoy at room temperature.',
    longDescriptionAr: 'رمز خالد للأناقة والذوق الفرنسي الرفيع منذ عام ١٨٦٢. يُحضر بأيدي طهاة لادوريه المهرة بقشور لوز طرية وحشوات غنية بنكهات الفستق والورد والفانيليا والشوكولاتة.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&w=1000&q=80'
    ],
    tagsEn: ['Ladurée Icon', 'Best Seller', 'Signature Gift'],
    tagsAr: ['أيقونة لادوريه', 'الأكثر مبيعاً', 'هدية فاخرة'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['French Almond Flour', 'Cane Sugar', 'Egg Whites', 'Valrhona Cocoa', 'Tahitian Vanilla', 'Sicilian Pistachio Paste'],
    ingredientsAr: ['دقيق لوز فرنسي نقي', 'سكر قصب طبيعي', 'بياض بيض طازج', 'كاكاو فالرونا', 'فانيليا تاهيتي', 'معجون فستق صقلي'],
    stockStatus: 'in_stock',
    rating: 4.99,
    reviewsCount: 342,
    prepTimeEn: 'Ready for chilled dispatch',
    prepTimeAr: 'جاهز للإرسال المبرد الفوري',
    calories: 120,
    is3DFeatured: true
  },
  {
    id: 'macaron-arabesque-12',
    nameEn: 'Coffret Arabesque • 12 Macarons',
    nameAr: 'صندوق أرابيسك الملكي • ١٢ حبة ماكرون',
    category: 'macarons',
    price: 267,
    descriptionEn: 'Presented in our signature pastel pistachio green box with gold foil lettering, featuring 12 delicate double-decker macarons.',
    descriptionAr: 'مقدم في صندوق لادوريه الأخضر الفاتح الأيقوني المزين بخطوط مذهبة، يضم ١٢ حبة ماكرون ذات طبقتين بحشوات استثنائية.',
    longDescriptionEn: 'The premier luxury choice for Riyadh dinner hosts, royal welcomes, and family celebrations. Each box represents over 160 years of patisserie perfection.',
    longDescriptionAr: 'الخيار الأرقى للضيافة في الرياض وجدة، والهدية المثالية للمناسبات الخاصة. يحتوي على نكهات لادوريه الشهيرة: فستق، كراميل مملح، ورد، شاي ماري أنطوانيت، توت، وشوكولاتة.',
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Ladurée Icon', 'Best Seller', 'Gifting Choice'],
    tagsAr: ['أيقونة لادوريه', 'الأكثر طلباً', 'صندوق الهدايا'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Almond Powder', 'Sugar', 'Butter', 'Fruit Pulp', 'Dark Chocolate', 'Natural Extracts'],
    ingredientsAr: ['بودرة اللوز الفاخرة', 'سكر نقي', 'زبدة فرنسية AOP', 'لب الفواكه الطبيعية', 'شوكولاتة داكنة', 'مستخلصات عطرية'],
    stockStatus: 'in_stock',
    rating: 4.98,
    reviewsCount: 418,
    prepTimeEn: 'Same-day delivery',
    prepTimeAr: 'توصيل خلال اليوم',
    calories: 120,
    is3DFeatured: true
  },
  {
    id: 'macaron-prestige-18',
    nameEn: 'Coffret Prestige Paris • 18 Macarons',
    nameAr: 'صندوق برستيج باريس • ١٨ حبة ماكرون',
    category: 'macarons',
    price: 405,
    descriptionEn: 'A magnificent large coffret adorned with gilded medallions, carrying 18 artisanal macarons of the season.',
    descriptionAr: 'صندوق فسيح فخم مزين بمداليات ذهبية ناتئة، يحتوي على ١٨ حبة ماكرون من أشهى النكهات الكلاسيكية والموسمية.',
    longDescriptionEn: 'An opulent journey across the gardens of Versailles and Parisian salons. Generous and sophisticated, wrapped in our hand-tied satin ribbon.',
    longDescriptionAr: 'رحلة حالمة في قلب باريس وحدائق فرساي. هدية ملكية فخمة مربوطة بشريط ساتان لادوريه الأخضر أو الوردي المميز.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Prestige Collection', 'Exclusive'],
    tagsAr: ['تشكيلة برستيج', 'حصري'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['French Almonds', 'Organic Eggs', 'Natural Fruits', 'Guérande Sea Salt', 'Tahitian Vanilla'],
    ingredientsAr: ['لوز فرنسي مطحون', 'بيض طازج', 'فواكه طبيعية', 'ملح غيراند البحري', 'فانيليا طبيعية'],
    stockStatus: 'in_stock',
    rating: 4.97,
    reviewsCount: 195,
    prepTimeEn: 'Immediate chilled dispatch',
    prepTimeAr: 'شحن مبرد فوري',
    calories: 120,
    is3DFeatured: true
  },
  {
    id: 'macaron-merveilleux-24',
    nameEn: 'Coffret Merveilleux • 24 Macarons',
    nameAr: 'صندوق ميرفيّو الفاخر • ٢٤ حبة ماكرون',
    category: 'macarons',
    price: 530,
    descriptionEn: 'Our grandest presentation box with 24 exquisite macarons in two elegant rows, perfect for major celebrations and corporate gifting.',
    descriptionAr: 'الصندوق الاحتفالي الأكبر بصفين من الماكرون الباريسي الفاخر (٢٤ حبة)، مثالي للمناسبات الكبرى وهدايا كبار الشخصيات.',
    longDescriptionEn: 'Created for life’s grandest milestones: weddings, graduations, and prestigious executive gifts. Customized ribbon choices included.',
    longDescriptionAr: 'صُمم خصيصاً لأهم اللحظات والاحتفالات الكبرى: حفلات الزفاف، التخرج، والتهنئة الخاصة. يتضمن اختيار لون شريط الساتان وبطاقة إهداء.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Grand Celebration', 'VIP Gift'],
    tagsAr: ['احتفالات كبرى', 'هدية VIP'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Ladurée Secret Almond Mix', 'Fresh Butter', 'Valrhona Cocoa', 'Madagascar Vanilla Beans'],
    ingredientsAr: ['خلطة لوز لادوريه السرية', 'زبدة طازجة', 'كاكاو فالرونا', 'حبوب فانيليا مدغشقر'],
    stockStatus: 'in_stock',
    rating: 5.0,
    reviewsCount: 289,
    prepTimeEn: 'Same-day delivery in Riyadh & Jeddah',
    prepTimeAr: 'توصيل في نفس اليوم في الرياض وجدة',
    calories: 120,
    is3DFeatured: true
  },
  {
    id: 'macaron-single-piece',
    nameEn: 'Ladurée Individual Macaron',
    nameAr: 'حبة ماكرون لادوريه الفردية',
    category: 'macarons',
    price: 16,
    descriptionEn: 'Select your personal single favorite flavor from our fresh daily Parisian boutique display.',
    descriptionAr: 'اختر نكهتك المفضلة الطازجة المحضرة يومياً والمقدمة في غلاف لادوريه الواقي الخاص.',
    longDescriptionEn: 'Baked fresh every morning with crisp light meringue shells and melt-in-your-mouth ganache. Choose between Pistachio, Rose, Salted Caramel, Vanilla, Lemon, Dark Chocolate, or Marie-Antoinette Tea.',
    longDescriptionAr: 'تُخبز طازجة كل صباح بقشرة ميرينغ خفيفة ومقرمشة وحشوة تذوب في الفم. اختر نكهتك المفضلة من تشكيلتنا الأيقونية.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Daily Fresh', 'Iconic'],
    tagsAr: ['طازج يومياً', 'أيقوني'],
    allergens: [
      { en: 'Tree Nuts', ar: 'مكسرات' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Almonds', 'Sugar', 'Egg Whites', 'Natural Extracts'],
    ingredientsAr: ['لوز نقي', 'سكر', 'بياض بيض', 'مستخلصات طبيعية'],
    stockStatus: 'in_stock',
    rating: 4.95,
    reviewsCount: 520,
    prepTimeEn: 'Immediate',
    prepTimeAr: 'فوري',
    calories: 120
  },

  // 2. HAUTE PÂTISSERIES & CELEBRATION CAKES
  {
    id: 'patisserie-ispahan',
    nameEn: 'L\'Ispahan Signature Pâtisserie',
    nameAr: 'حلوى الإسبهان الأيقونية من لادوريه',
    category: 'patisseries',
    price: 75,
    descriptionEn: 'Rose macaron biscuit filled with delicate rose petal cream, fresh whole raspberries, and sweet lychees.',
    descriptionAr: 'بسكويت ماكرون الورد محشو بكريمة بتلات الورد الخفيفة مع حبات التوت العليق الطازجة والليتشي الحلوة.',
    longDescriptionEn: 'The internationally celebrated masterpiece created exclusively by Ladurée. An extraordinary symphony of Taif and Damascene rose aromas, tart wild raspberries, and exotic lychee nectar.',
    longDescriptionAr: 'التحفة الأكثر شهرة وإبهاراً في تاريخ الباتيسري العالمي. تناغم ساحر يجمع عبير الورد الدمشقي مع حموضة التوت البري الطازج وحلاوة فاكهة الليتشي الاستوائية.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80'
    ],
    tagsEn: ['Ladurée Icon', 'Best Seller', 'Fresh Daily'],
    tagsAr: ['أيقونة لادوريه', 'الأكثر شهرة', 'طازج يومياً'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Rose Macaron Shells', 'Rose Petal Mousseline', 'Fresh Raspberries', 'Lychees', 'Rose Dew'],
    ingredientsAr: ['قشرة ماكرون الورد', 'موسيلين بتلات الورد', 'توت عليق طازج', 'ثمار ليتشي', 'قطرات ماء الورد'],
    stockStatus: 'in_stock',
    rating: 4.99,
    reviewsCount: 612,
    prepTimeEn: 'Prepared chilled daily',
    prepTimeAr: 'محضر مبرداً يومياً',
    calories: 340,
    is3DFeatured: true
  },
  {
    id: 'patisserie-plaisir-sucre',
    nameEn: 'Le Plaisir Sucré',
    nameAr: 'حلوى بليزير سوكريه بالشوكولاتة والبندق',
    category: 'patisseries',
    price: 72,
    descriptionEn: 'Hazelnut dacquoise biscuit with crispy praline, milk chocolate leaves, and whipped chocolate ganache.',
    descriptionAr: 'بسكويت داكواز البندق مع طبقة برالينيه مقرمشة، ورقائق شوكولاتة الحليب الفاخرة وجناش مخفوق.',
    longDescriptionEn: 'A temple of textures for chocolate lovers. Layers of hazelnut crunch, velvety milk chocolate sheets, and airy chantilly cream.',
    longDescriptionAr: 'جنة لعشاق الشوكولاتة والبندق. تدرج ساحر في القوام بين قرمشة البرالينيه ونعومة الجناش وحريرية الشوكولاتة الفرنسية.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Chocolate Masterpiece', 'Chef Favorite'],
    tagsAr: ['تحفة الشوكولاتة', 'اختيار الشيف'],
    allergens: [
      { en: 'Tree Nuts (Hazelnut)', ar: 'مكسرات (بندق)' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['Piedmont Hazelnuts', 'Valrhona Milk Chocolate', 'Butter Biscuit', 'Whipped Ganache'],
    ingredientsAr: ['بندق بييمونتي الإيطالي', 'شوكولاتة حليب فالرونا', 'بسكويت زبدة مقرمش', 'جناش مخفوق'],
    stockStatus: 'in_stock',
    rating: 4.96,
    reviewsCount: 310,
    prepTimeEn: 'Chilled delivery',
    prepTimeAr: 'توصيل مبرد',
    calories: 410,
    is3DFeatured: true
  },
  {
    id: 'patisserie-saint-honore',
    nameEn: 'Saint-Honoré Rose Framboise',
    nameAr: 'سان أونوريه بالورد وتوت العليق',
    category: 'patisseries',
    price: 78,
    descriptionEn: 'Crisp caramelized puff pastry, glazed choux buns filled with rose cream, fresh raspberries, and rose chantilly.',
    descriptionAr: 'عجينة باف كاراميل مقرمشة مع كرات شو محشوة بكريمة الورد ومربى التوت العليق وكريمة الشانتيلي المخفوقة.',
    longDescriptionEn: 'Named after the French patron saint of bakers. Reinterpreted with delicate floral notes and ruby raspberries in true Parisian salon style.',
    longDescriptionAr: 'الحلوى الباريسية التاريخية العريقة، أعادت لادوريه ابتكارها بلمسة عصرية من الورد والتوت والشانتيلي الخفيفة.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Classic French', 'Artisanal'],
    tagsAr: ['كلاسيك فرنسي', 'حرفي فاخر'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['Puff Pastry', 'Choux Paste', 'Rose Infused Cream', 'Raspberry Confit', 'French Butter'],
    ingredientsAr: ['عجينة بف باستري مكرملة', 'عجينة شو فرنسية', 'كريمة الورد الخفيفة', 'كمبوت التوت', 'زبدة نورماندي'],
    stockStatus: 'in_stock',
    rating: 4.95,
    reviewsCount: 220,
    prepTimeEn: 'Freshly assembled',
    prepTimeAr: 'تجهيز طازج',
    calories: 380
  },
  {
    id: 'patisserie-millefeuille',
    nameEn: 'Millefeuille Vanille Bourbon',
    nameAr: 'ميل فاي بالفانيليا البوربون الطبيعية',
    category: 'patisseries',
    price: 68,
    descriptionEn: 'Three layers of caramelized puff pastry alternating with smooth Madagascar vanilla cream.',
    descriptionAr: 'ثلاث طبقات هشة ومقرمشة من البف باستري المكرمل تتخللها كريمة الفانيليا الطبيعية الحريرية.',
    longDescriptionEn: 'The quintessential French classic. Delicate, shatteringly crisp pastry layers paired with dense, specked Bourbon vanilla pastry cream.',
    longDescriptionAr: 'الأصل في فن الحلويات الفرنسية. قرمشة استثنائية ونكهة فانيليا حقيقية عميقة تُحضر بأعلى درجات الإتقان.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['French Classic', 'Best Seller'],
    tagsAr: ['كلاسيك باريسي', 'الأكثر طلباً'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['Pure Butter Puff Pastry', 'Bourbon Vanilla Bean', 'Custard Cream', 'Icing Sugar'],
    ingredientsAr: ['بف باستري بالزبدة النقية', 'فانيليا بوربون طبيعية', 'كريمة كاسترد غنية', 'سكر بودرة'],
    stockStatus: 'in_stock',
    rating: 4.98,
    reviewsCount: 380,
    prepTimeEn: 'Ready for delivery',
    prepTimeAr: 'جاهز للتوصيل',
    calories: 360
  },
  {
    id: 'cake-ispahan-celebration',
    nameEn: 'Grand Ispahan Celebration Cake',
    nameAr: 'كيكة الإسبهان الملكية للاحتفالات والمناسبات',
    category: 'cakes',
    price: 380,
    descriptionEn: 'The giant celebration edition of our famed Ispahan. Feeds 6 to 8 people with custom gold calligraphy inscription.',
    descriptionAr: 'النسخة الاحتفالية الكبيرة من حلوى الإسبهان الأيقونية. تكفي من ٦ إلى ٨ أشخاص مع خدمة كتابة الإهداء الذهبي مجاناً.',
    longDescriptionEn: 'The ultimate royal centerpiece for birthdays, anniversaries, and luxury Saudi gatherings. Two grand rose macaron biscuits crowned with glistening raspberries and delicate rose petals.',
    longDescriptionAr: 'أجمل كيكة تزيّن موائدكم في المناسبات السعيدة وحفلات التخرج وأعياد الميلاد في الرياض وجدة. تأتي مع شموع ذهبية وبطاقة إهداء فاخرة.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80'
    ],
    tagsEn: ['Celebration Cake', 'Custom Message', 'Prestige'],
    tagsAr: ['كيكة مناسبات', 'كتابة إهداء', 'فاخر ملكي'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Grand Rose Macaron', 'Rose Petal Cream', 'Fresh Raspberries', 'Lychees', '24K Edible Gold'],
    ingredientsAr: ['ماكرون ورد كبير', 'كريمة بتلات الورد', 'توت عليق طازج', 'ليتشي', 'ورق ذهب عيار ٢٤'],
    variants: [
      { id: 'cake-ispahan-6', nameEn: 'Petite Table (6-8 Servings)', nameAr: 'حجم متوسط (٦-٨ أشخاص)', price: 380, portionsEn: '6-8 Servings', portionsAr: '٦-٨ أشخاص' },
      { id: 'cake-ispahan-12', nameEn: 'Grand Banquet (12-14 Servings)', nameAr: 'حجم كبير (١٢-١٤ شخص)', price: 590, portionsEn: '12-14 Servings', portionsAr: '١٢-١٤ شخص' }
    ],
    isCustomizableCake: true,
    stockStatus: 'in_stock',
    rating: 5.0,
    reviewsCount: 450,
    prepTimeEn: '2-3 hours chilled delivery lead',
    prepTimeAr: 'تحضير مبرد خلال ساعتين إلى ٣ ساعات',
    calories: 390,
    is3DFeatured: true
  },
  {
    id: 'patisserie-pain-perdu',
    nameEn: 'Le Pain Perdu Brioché Ladurée',
    nameAr: 'فرنش توست لادوريه البريوش الشهير',
    category: 'patisseries',
    price: 65,
    descriptionEn: 'The world-famous Ladurée French toast made with golden buttery brioche, salted butter caramel, and vanilla bean chantilly.',
    descriptionAr: 'الفرنش توست الأكثر شهرة عالمياً بخبز البريوش الفرنسي الذهبي المغطى بكراميل الزبدة المملحة وكريمة الفانيليا.',
    longDescriptionEn: 'Served warm in our Salons de Thé. Soft, melt-in-the-middle brioche pan-seared with vanilla butter and served with our signature salted butter caramel sauce.',
    longDescriptionAr: 'الطبق الأسطوري المحبوب في صالونات الشاي لدى لادوريه. بريوش دافئ وغني بالزبدة الذائبة يُقدم مع صوص الكراميل المركز وآيس كريم الفانيليا.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Salon de Thé Favorite', 'Breakfast & Brunch'],
    tagsAr: ['مفضل صالونات الشاي', 'الفطور والبرنش'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['Artisanal Brioche', 'Normandy Butter', 'Caramel au Beurre Salé', 'Madagascar Vanilla Cream'],
    ingredientsAr: ['خبز بريوش فرنسي أصيل', 'زبدة نورماندي', 'كراميل الزبدة المملحة', 'كريمة فانيليا مدغشقر'],
    stockStatus: 'in_stock',
    rating: 4.97,
    reviewsCount: 512,
    prepTimeEn: 'Prepared hot to order',
    prepTimeAr: 'يُحضر ساخناً فور الطلب',
    calories: 460
  },

  // 3. CHOCOLATES, TEAS & DELICACIES
  {
    id: 'tea-marie-antoinette',
    nameEn: 'Thé Marie-Antoinette (100g Loose Leaf)',
    nameAr: 'شاي ماري أنطوانيت الفاخر (علبة ١٠٠ غرام)',
    category: 'teas',
    price: 135,
    descriptionEn: 'Exclusive Chinese black tea scented with Taif rose petals, citrus fruit, and wild lavender honey.',
    descriptionAr: 'شاي أسود فاخر معطر ببتلات ورد الطائف والحمضيات وعسل اللافندر، في علبة معدنية مذهبة أيقونية.',
    longDescriptionEn: 'The signature tea blend of Maison Ladurée. Elegantly packaged in our pastel turquoise tin adorned with Marie-Antoinette’s monogram.',
    longDescriptionAr: 'الشاي الأيقوني الرسمي لدار لادوريه باريس. يقدم في علبة فاخرة تعكس ذوق قصر فرساي وأجواء صالونات الشاي الباريسية.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Ladurée Tea', 'Luxury Tin', 'Direct from Paris'],
    tagsAr: ['شاي لادوريه', 'علبة فاخرة', 'مستورد من باريس'],
    allergens: [],
    ingredientsEn: ['Black Tea from China', 'Rose Petals', 'Citrus Peel', 'Honey Aromas'],
    ingredientsAr: ['شاي صيني أسود فاخر', 'بتلات الورد المجففة', 'قشور الحمضيات', 'نكهة العسل الطبيعي'],
    stockStatus: 'in_stock',
    rating: 4.99,
    reviewsCount: 178,
    prepTimeEn: 'Ready for shipping',
    prepTimeAr: 'جاهز للشحن الفوري',
    calories: 0
  },
  {
    id: 'tea-melange-laduree',
    nameEn: 'Thé Mélange Spécial Ladurée',
    nameAr: 'شاي توليفة لادوريه الخاصة',
    category: 'teas',
    price: 130,
    descriptionEn: 'A balanced blend of Ceylon and China black teas, delicately flavored with sweet orange, vanilla, and bergamot.',
    descriptionAr: 'مزيج متوازن من أجود أوراق الشاي السيلاني والصيني، منكه بالبرتقال الحلو والفانيليا والبرغموت العطري.',
    longDescriptionEn: 'Specially created to pair harmoniously with our sweet pastries and almond macarons. Packaged in an embossed pastel green collector’s tin.',
    longDescriptionAr: 'ابُتكر خصيصاً ليتناغم مع حلاوة الماكرون والحلويات الفرنسية. يقدم في علبة لادوريه الخضراء القابلة لإعادة الاستخدام.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Signature Blend', 'Collector Tin'],
    tagsAr: ['توليفة خاصة', 'علبة كلاسيكية'],
    allergens: [],
    ingredientsEn: ['Ceylon Black Tea', 'China Black Tea', 'Orange Essence', 'Bergamot', 'Vanilla'],
    ingredientsAr: ['شاي سيلاني أسود', 'شاي صيني أسود', 'خلاصة البرتقال', 'برغموت', 'فانيليا'],
    stockStatus: 'in_stock',
    rating: 4.94,
    reviewsCount: 140,
    prepTimeEn: 'Instant dispatch',
    prepTimeAr: 'شحن فوري',
    calories: 0
  },
  {
    id: 'choc-eugenie-box',
    nameEn: 'Coffret Eugénie • 12 Pièces',
    nameAr: 'صندوق بسكويت أوجيني الفاخر • ١٢ قطعة',
    category: 'chocolates',
    price: 185,
    descriptionEn: 'Crisp gluten-free sablé biscuit, a melting caramel or fruit heart, enveloped in a crisp chocolate coating.',
    descriptionAr: 'بسكويت سابليه مقرمش محشو بقلب ذائب من الكراميل أو الفاكهة ومغلف بغلاف شوكولاتة فاخر ومزين بشعار لادوريه.',
    longDescriptionEn: 'Named after Empress Eugénie, the patron of Parisian elegance. Includes flavours of Vanilla, Pistachio, Caramel, Marie-Antoinette Tea, and Chocolate.',
    longDescriptionAr: 'سُمي تيمناً بالإمبراطورة أوجيني راعية الأناقة الباريسية. ابتكار لادوريه الأحدث الذي يجمع بين القرمشة والذوبان في آن واحد.',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Eugénie Creation', 'Gluten Free Biscuit'],
    tagsAr: ['ابتكار أوجيني', 'خالي من الجلوتين'],
    allergens: [
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Tree Nuts', ar: 'مكسرات' }
    ],
    ingredientsEn: ['Gluten-Free Flour', 'Cocoa Butter', 'Caramel', 'Hazelnut Paste', 'Sugar'],
    ingredientsAr: ['دقيق خالي من الجلوتين', 'زبدة كاكاو', 'كراميل', 'معجون بندق', 'سكر نقي'],
    stockStatus: 'in_stock',
    rating: 4.96,
    reviewsCount: 204,
    prepTimeEn: 'Chilled delivery',
    prepTimeAr: 'توصيل مبرد',
    calories: 140
  },
  {
    id: 'choc-hot-chocolate',
    nameEn: 'Chocolat Chaud Traditionnel Ladurée',
    nameAr: 'بودرة الشوكولاتة الساخنة الباريسية الأصلية',
    category: 'chocolates',
    price: 115,
    descriptionEn: 'Authentic Parisian hot chocolate powder mix, crafted with intense dark cocoa for thick, decadent hot cocoa.',
    descriptionAr: 'خلطة الشوكولاتة الساخنة الباريسية الشهيرة، محضرة بأفخر أنواع الكاكاو المركز لقوام مخملي غني ودافئ.',
    longDescriptionEn: 'Recreate the celebrated Ladurée Salon de Thé breakfast experience in your own home. Simply simmer with whole milk and enjoy.',
    longDescriptionAr: 'استمتع بطعم الشوكولاتة الساخنة الأسطورية التي تُقدم في فروع لادوريه بباريس والرياض. تُخلط مع الحليب الساخن لتمنحك دلالاً استثنائياً.',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Parisian Recipe', 'Home Luxury'],
    tagsAr: ['وصفة باريسية', 'رفاهية منزلية'],
    allergens: [],
    ingredientsEn: ['Pure Cocoa Powder', 'Dark Chocolate Shavings', 'Vanilla', 'Brown Cane Sugar'],
    ingredientsAr: ['بودرة كاكاو نقي', 'رقائق شوكولاتة داكنة', 'فانيليا', 'سكر قصب بني'],
    stockStatus: 'in_stock',
    rating: 4.98,
    reviewsCount: 165,
    prepTimeEn: 'Available now',
    prepTimeAr: 'متوفر فوراً',
    calories: 180
  },

  // 4. PYRAMIDS & LUXURY GIFTING
  {
    id: 'pyramid-taille-1',
    nameEn: 'Pyramide de Macarons • Taille 1 (30 Macarons)',
    nameAr: 'هرم ماكرون لادوريه الملكي • الحجم ١ (٣٠ حبة)',
    category: 'pyramids',
    price: 590,
    descriptionEn: 'Majestic 4-tier macaron pyramid assembled by master artisans. An unforgettable focal point for baby showers and intimate parties.',
    descriptionAr: 'هرم ماكرون فخم من ٤ طبقات يُركّب بعناية فائقة. تحفة استعراضية مبهرة لحفلات الاستقبال والمواليد والمناسبات الخاصة.',
    longDescriptionEn: 'The crowning glory of French celebration banquets. Features 30 fresh macarons in a harmonious pastel palette of your choice, adorned with gold ribbons.',
    longDescriptionAr: 'قمة الضيافة في الاحتفالات الراقية. يضم ٣٠ حبة ماكرون طازجة بألوان متناسقة تختارها بنفسك مع إمكانية التوصيل الخاص بعربة مبردة.',
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Luxury Pyramid', 'Event Centerpiece'],
    tagsAr: ['هرم فاخر', 'قطعة المناسبات المركزية'],
    allergens: [
      { en: 'Tree Nuts (Almond)', ar: 'مكسرات (لوز)' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['30 Assorted Ladurée Macarons', 'Food-Safe Decorative Pyramid Cone', 'Satin Ribbons'],
    ingredientsAr: ['٣٠ حبة ماكرون لادوريه مشكلة', 'هيكل هرمي غذائي فاخر', 'أشرطة ساتان مذهبة'],
    stockStatus: 'in_stock',
    rating: 5.0,
    reviewsCount: 180,
    prepTimeEn: 'Hand-assembled in salon',
    prepTimeAr: 'تركيب يدوي في صالون لادوريه',
    calories: 120,
    is3DFeatured: true
  },
  {
    id: 'pyramid-taille-3',
    nameEn: 'Pyramide de Macarons • Taille 3 (75 Macarons)',
    nameAr: 'هرم ماكرون لادوريه الإمبراطوري • الحجم ٣ (٧٥ حبة)',
    category: 'pyramids',
    price: 1390,
    descriptionEn: 'Magnificent 6-tier monumental pyramid with 75 delicate macarons for Saudi weddings, galas, and VIP corporate banquets.',
    descriptionAr: 'هرم إمبراطوري شامخ من ٦ طبقات يضم ٧٥ حبة ماكرون فرنسي، مخصص لحفلات الزفاف والمؤتمرات الكبرى وكبار الضيوف.',
    longDescriptionEn: 'Delivered in dedicated temperature-controlled vans with white-glove setup. Customized to match your wedding color theme (Pastel Greens, Rose Pinks, Creams, Gold).',
    longDescriptionAr: 'يصلكم مع خدمة التوصيل المبرد الفاخر والتجهيز على طاولة الضيافة. يمكن تنسيق ألوان ونكهات الماكرون لتناسب ثيم مناسبتكم بالضبط.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Royal Wedding Choice', 'VIP Catering'],
    tagsAr: ['خيار الأعراس الملكية', 'ضيافة VIP'],
    allergens: [
      { en: 'Almonds', ar: 'لوز' },
      { en: 'Eggs', ar: 'بيض' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['75 Fresh Macarons', 'Ladurée Decorative Stand'],
    ingredientsAr: ['٧٥ حبة ماكرون طازجة', 'حامل لادوريه الهرمي المذهب'],
    stockStatus: 'in_stock',
    rating: 5.0,
    reviewsCount: 92,
    prepTimeEn: '24 hours notice required',
    prepTimeAr: 'يتطلب حجزاً مسبقاً قبل ٢٤ ساعة',
    calories: 120
  },
  {
    id: 'hamper-panier-royal',
    nameEn: 'Le Panier Royal Ladurée Hamper',
    nameAr: 'سلة الهدايا الملكية الكاملة من لادوريه',
    category: 'gifting',
    price: 950,
    descriptionEn: 'The supreme luxury gift hamper: Coffret of 18 macarons, Marie-Antoinette tea tin, Eugénie chocolate box, rose jam, and scented candle.',
    descriptionAr: 'سلة الهدايا الفخمة المتكاملة: صندوق ١٨ ماكرون، علبة شاي ماري أنطوانيت، بسكويت أوجيني، مربى الورد، وشمعة لادوريه المعطرة.',
    longDescriptionEn: 'The ultimate expression of French affection and hospitality. Hand-packed in our wicker gift hamper with plush satin lining and bespoke calligraphy card.',
    longDescriptionAr: 'التعبير الأصدق عن التقدير والكرم الراقي. تأتي السلة مغلفة بأناقة ومزودة ببطاقة خط عربي مذهبة مخصصة للإهداء.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Supreme Gift', 'Curated Hamper'],
    tagsAr: ['الهدية الأسمى', 'سلة فاخرة'],
    allergens: [
      { en: 'Almonds', ar: 'لوز' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['18 Macarons Coffret', '100g Marie-Antoinette Tea', '12 Eugénie Biscuits', 'Rose Confiture Jar', 'Ladurée Scented Candle'],
    ingredientsAr: ['صندوق ١٨ ماكرون', 'شاي ماري أنطوانيت ١٠٠غ', '١٢ بسكويت أوجيني', 'مربى ورد دمشق', 'شمعة لادوريه'],
    stockStatus: 'in_stock',
    rating: 5.0,
    reviewsCount: 145,
    prepTimeEn: 'Same-day gift delivery',
    prepTimeAr: 'توصيل هدايا في نفس اليوم',
    calories: 0,
    is3DFeatured: true
  }
];

export const INITIAL_REWARDS: LoyaltyReward[] = [
  {
    id: 'rew-voucher-30',
    titleEn: '30 SAR Boutique Credit Voucher',
    titleAr: 'قسيمة مشتريات بقيمة ٣٠ ر.س',
    descriptionEn: 'Instantly apply a 30 SAR deduction on your next macaron or salon order.',
    descriptionAr: 'خصم فوري بقيمة ٣٠ ر.س يُطبق مباشرة على طلبك القادم من الماكرون أو الباتيسري.',
    pointsRequired: 300,
    voucherCode: 'LADUREE-30SAR',
    discountSar: 30,
    tierRequired: 'Silver',
    tagEn: 'Instant Credit',
    tagAr: 'رصيد فوري'
  },
  {
    id: 'rew-free-macarons-2',
    titleEn: 'Complimentary Duo of Parisian Macarons',
    titleAr: 'حبتان ماكرون باريسي مجاناً',
    descriptionEn: 'Receive 2 complimentary fresh macarons added to your delivery.',
    descriptionAr: 'احصل على حبتين ماكرون فاخرتين من اختيارك تضاف مجاناً مع طلبك.',
    pointsRequired: 450,
    voucherCode: 'DUO-MACARONS',
    discountSar: 32,
    tierRequired: 'Silver',
    tagEn: 'Sweet Gift',
    tagAr: 'هدية حلوة'
  },
  {
    id: 'rew-voucher-75',
    titleEn: '75 SAR Haute Dining Voucher',
    titleAr: 'قسيمة خصم فاخرة بقيمة ٧٥ ر.س',
    descriptionEn: 'Valid for high tea sets, celebration cakes, and signature coffrets.',
    descriptionAr: 'صالحة لكيكات الاحتفالات الكبرى وتشكيلات صناديق الماكرون وجلسات الشاي.',
    pointsRequired: 700,
    voucherCode: 'LADUREE-75SAR',
    discountSar: 75,
    tierRequired: 'Gold',
    tagEn: 'Gold Privilege',
    tagAr: 'امتياز ذهبي'
  },
  {
    id: 'rew-tea-tin-gift',
    titleEn: 'Complimentary Thé Marie-Antoinette Tin',
    titleAr: 'علبة شاي ماري أنطوانيت الفاخرة هدية',
    descriptionEn: 'Receive a full collector’s tin of Ladurée’s signature floral tea blend.',
    descriptionAr: 'علبة كاملة مذهبة من شاي لادوريه الأيقوني هدية مع طلبك.',
    pointsRequired: 1200,
    voucherCode: 'FREE-ROYAL-TEA',
    discountSar: 135,
    tierRequired: 'Diamond',
    tagEn: 'VIP Royal Gift',
    tagAr: 'هدية ملكية VIP'
  }
];

export const INITIAL_PROMO_CODES: PromoCode[] = [
  {
    code: 'LADUREE10',
    discountPercent: 10,
    minSpendSar: 150,
    descriptionEn: '10% privilege discount on debut online orders of 150 SAR+',
    descriptionAr: 'خصم ١٠٪ ترحيبي على أول طلب بقيمة ١٥٠ ر.س فأكثر',
    active: true
  },
  {
    code: 'RIYADH',
    discountFlatSar: 35,
    minSpendSar: 250,
    descriptionEn: 'Complimentary 35 SAR delivery fee offset for Riyadh orders above 250 SAR',
    descriptionAr: 'تغطية رسوم التوصيل المجاني للطلبات فوق ٢٥٠ ر.س في الرياض',
    active: true
  },
  {
    code: 'ROYAL20',
    discountPercent: 20,
    minSpendSar: 500,
    descriptionEn: '20% exclusive privilege discount on orders above 500 SAR',
    descriptionAr: 'خصم ٢٠٪ حصري لكبار العملاء على الطلبات فوق ٥٠٠ ر.س',
    active: true
  }
];

export const SAUDI_DELIVERY_ZONES = [
  {
    id: 'zone-riyadh-north',
    nameEn: 'Riyadh North (Hittin, Al Malqa, Al Yasmin, Al Aqiq, Al Nakheel)',
    nameAr: 'شمال الرياض (حطين، الملقا، الياسمين، العقيق، النخيل)',
    deliveryFeeSar: 0,
    estimatedMinutes: '45-60 دقيقة',
    minOrderFreeDelivery: 200,
    city: 'Riyadh'
  },
  {
    id: 'zone-riyadh-central',
    nameEn: 'Riyadh Central & Olaya (Al Olaya, Al Sulaimaniyah, Al Wurud)',
    nameAr: 'وسط الرياض والعليا (العليا، السليمانية، الورود، الملك فهد)',
    deliveryFeeSar: 25,
    estimatedMinutes: '50-70 دقيقة',
    minOrderFreeDelivery: 250,
    city: 'Riyadh'
  },
  {
    id: 'zone-riyadh-west',
    nameEn: 'Riyadh West & Diplomatic Quarter (DQ, Umm Al Hamam, Al Hada)',
    nameAr: 'غرب الرياض والحي الدبلوماسي (السفارات، أم الحمام، الهدا)',
    deliveryFeeSar: 30,
    estimatedMinutes: '50-70 دقيقة',
    minOrderFreeDelivery: 250,
    city: 'Riyadh'
  },
  {
    id: 'zone-riyadh-east',
    nameEn: 'Riyadh East (Al Rawdah, Al Hamra, Cordoba, Yarmouk)',
    nameAr: 'شرق الرياض (الروضة، الحمراء، قرطبة، اليرموك)',
    deliveryFeeSar: 35,
    estimatedMinutes: '60-80 دقيقة',
    minOrderFreeDelivery: 300,
    city: 'Riyadh'
  },
  {
    id: 'zone-jeddah',
    nameEn: 'Jeddah Coastal & Central (Ash Shati, Al Rawdah, Al Zahra)',
    nameAr: 'جدة الساحلية ووسط جدة (الشاطئ، الروضة، الزهراء)',
    deliveryFeeSar: 35,
    estimatedMinutes: '60-90 دقيقة',
    minOrderFreeDelivery: 300,
    city: 'Jeddah'
  }
];

export const DEFAULT_USER: UserProfile = {
  name: 'صاحبة السمو / نورة آل سعود',
  email: 'noura@laduree.sa',
  phone: '+966 50 882 1862',
  points: 620,
  lifetimePoints: 1240,
  tier: 'Gold',
  referralCode: 'LADUREE-NOURA62',
  addresses: [
    {
      id: 'addr-1',
      recipientName: 'نورة آل سعود',
      city: 'الرياض',
      districtEn: 'Hittin Luxury Villas',
      districtAr: 'حي حطين الفاخر',
      street: 'طريق الأمير تركي بن عبد العزيز الأول، فيلا 18',
      phone: '+966 50 882 1862',
      isDefault: true
    },
    {
      id: 'addr-2',
      recipientName: 'نورة آل سعود',
      city: 'الرياض',
      districtEn: 'Diplomatic Quarter',
      districtAr: 'حي السفارات',
      street: 'ساحة الكندي، مبنى السفراء',
      phone: '+966 50 882 1862'
    }
  ],
  wishlistIds: [
    'macaron-arabesque-12',
    'patisserie-ispahan',
    'tea-marie-antoinette'
  ],
  pointsHistory: [
    {
      id: 'tx-1',
      date: '2026-10-12',
      descriptionEn: 'Order AM-9281 Accrual (Coffret Arabesque & Ispahan)',
      descriptionAr: 'نقاط طلب صندوق أرابيسك وحلوى الإسبهان',
      pointsChange: 342,
      type: 'order'
    },
    {
      id: 'tx-2',
      date: '2026-10-01',
      descriptionEn: 'Friend Referral Reward (Sara Al Otaibi)',
      descriptionAr: 'مكافأة دعوة صديقة للتسوق في لادوريه',
      pointsChange: 200,
      type: 'referral'
    },
    {
      id: 'tx-3',
      date: '2026-09-28',
      descriptionEn: 'Redeemed: 50 SAR Dining Credit Voucher',
      descriptionAr: 'استبدال: قسيمة رصيد بقيمة 50 ر.س',
      pointsChange: -500,
      type: 'redemption'
    }
  ],
  redeemedVouchers: [
    {
      code: 'LADUREE50SAR-8192',
      titleEn: '50 SAR Boutique Credit Voucher',
      titleAr: 'قسيمة رصيد بقيمة ٥٠ ر.س',
      discountSar: 50,
      used: false,
      date: '2026-09-28'
    }
  ]
};

export const CHAT_QUICK_REPLIES: ChatQuickReply[] = [
  {
    id: 'faq-macaron-boxes',
    categoryEn: 'Macaron Boxes & Sizes',
    categoryAr: 'صناديق الماكرون والأحجام',
    questionEn: 'What macaron box sizes and prices are available?',
    questionAr: 'ما هي أحجام صناديق الماكرون وأسعارها؟',
    answerEn: 'Ladurée Saudi Arabia offers 4 signature coffret sizes: Napoléon III Box of 8 (191 SAR), Arabesque Box of 12 (267 SAR), Prestige Box of 18 (405 SAR), and Merveilleux Box of 24 (530 SAR). Individual macarons are 16 SAR each.',
    answerAr: 'توفر لادوريه السعودية ٤ أحجام رئيسية من صناديق الماكرون الأيقونية: صندوق نابليون ٨ حبات (١٩١ ر.س)، صندوق أرابيسك ١٢ حبة (٢٦٧ ر.س)، صندوق برستيج ١٨ حبة (٤٠٥ ر.س)، وصندوق ميرفيّو ٢٤ حبة (٥٣٠ ر.س). سعر حبة الماكرون الفردية ١٦ ر.س.'
  },
  {
    id: 'faq-ispahan',
    categoryEn: 'Signature Pâtisserie',
    categoryAr: 'الحلويات والكيك الأيقوني',
    questionEn: 'Tell me about the famous Ispahan and celebration cakes.',
    questionAr: 'حدثني عن حلوى الإسبهان وكيكات الاحتفالات.',
    answerEn: 'The Ispahan (75 SAR) is our world-acclaimed creation combining rose macaron biscuit, fresh raspberries, and sweet lychee cream. We also offer celebration cakes (Ispahan, Plaisir Sucré, Saint-Honoré) for 6-14 people with custom gold calligraphy inscriptions.',
    answerAr: 'تعتبر حلوى الإسبهان (٧٥ ر.س) التحفة الأكثر شهرة لدار لادوريه باريس وتجمع بين ماكرون الورد والتوت العليق الطازج والليتشي. كما تتوفر كيكات احتفالات لـ ٦ إلى ١٤ شخصاً مع كتابة إهداء بالخط العربي والشموع مجاناً.'
  },
  {
    id: 'faq-salons',
    categoryEn: 'Salons & Boutiques',
    categoryAr: 'فروع صالونات الشاي في المملكة',
    questionEn: 'Where are Ladurée tea salons located in Saudi Arabia?',
    questionAr: 'أين تقع فروع وصالونات شاي لادوريه في السعودية؟',
    answerEn: 'In Riyadh, visit us at Riyadh Park Mall, Centria Mall (Olaya), Kingdom Centre Mall, Roshn Front (Ladurée Coffee Shop), Laysen Valley, and Solitaire Mall. In Jeddah, we welcome you at Red Sea Mall.',
    answerAr: 'في الرياض: الرياض بارك مول، سنتريا مول (شارع العليا)، مركز المملكة، واجهة روشن (كوفي شوب لادوريه)، ليسن فالي، وسوليتير مول. وفي جدة نتشرف باستقبالكم في رد سي مول.'
  },
  {
    id: 'faq-delivery',
    categoryEn: 'Chilled Delivery',
    categoryAr: 'التوصيل المبرد في الرياض وجدة',
    questionEn: 'What are your delivery hours, fees, and preservation methods?',
    questionAr: 'ما هي رسوم التوصيل المبرد وسرعة التوصيل؟',
    answerEn: 'All macarons and pastries are delivered in specialized chilled vehicles at 4°C across all districts of Riyadh and Jeddah. Delivery is complimentary on orders of 250 SAR or more. Same-day delivery is available.',
    answerAr: 'يتم نقل جميع منتجات لادوريه في سيارات مخصصة مبردة عند درجة حرارة ٤ درجات مئوية للحفاظ على طراوة الماكرون وجودة الكريمة. التوصيل مجاني للطلبات بقيمة ٢٥٠ ر.س فأكثر، مع توفر التوصيل السريع خلال نفس اليوم.'
  },
  {
    id: 'faq-payments',
    categoryEn: 'Payment Options',
    categoryAr: 'طرق الدفع ومدى وآبل باي',
    questionEn: 'Which payment methods are accepted online?',
    questionAr: 'ما هي طرق الدفع المتاحة على المتجر الإلكتروني؟',
    answerEn: 'We accept Saudi Mada cards, Apple Pay, Visa, Mastercard with 3D Secure 256-bit encryption, as well as direct order coordination through our WhatsApp Business concierge.',
    answerAr: 'نقبل بطاقات مدى (Mada) السعودية، آبل باي (Apple Pay)، وفيزا وماستركارد بأعلى معايير الأمان والتشفير البنكي، بالإضافة إلى خيار تأكيد وإرسال الطلب عبر محادثة واتساب الرسمية.'
  },
  {
    id: 'faq-pyramids',
    categoryEn: 'Macaron Pyramids & Events',
    categoryAr: 'أهرامات الماكرون وحفلات الزفاف',
    questionEn: 'Can I order macaron pyramids for weddings and private events?',
    questionAr: 'هل يمكن طلب أهرامات الماكرون للأعراس والمناسبات الخاصة؟',
    answerEn: 'Yes! We offer 4 pyramid sizes (30, 45, 75, and 120 macarons) with bespoke color coordination and white-glove setup service for weddings, VIP receptions, and luxury hospitality.',
    answerAr: 'نعم بالتأكيد! نوفر ٤ أحجام من أهرامات الماكرون الملكية (٣٠، ٤٥، ٧٥، و١٢٠ حبة) مع تنسيق الألوان وفق ثيم الحفل وخدمة التوصيل والتركيب الفاخر في صالات الأفراح وقصور الضيافة.'
  }
];
