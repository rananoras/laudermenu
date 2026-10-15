import { Product, LoyaltyReward, PromoCode, UserProfile, ChatQuickReply } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. SIGNATURES & 3D FEATURED
  {
    id: 'sig-wagyu-truffle',
    nameEn: 'Smoked Black Truffle Wagyu Tenderloin',
    nameAr: 'تندرلوين واغيو بالكمأة السوداء المدخنة',
    category: 'signatures',
    price: 360,
    descriptionEn: 'Grade A5 Australian Wagyu tenderloin, smoked over oak chips, served with Périgord black truffle butter and potato mousseline.',
    descriptionAr: 'قطعة تندرلوين واغيو أسترالي فاخرة مدخنة بخشب البلوط، تقدم مع زبدة الكمأة السوداء والبطاطس الموسيلين الحريرية.',
    longDescriptionEn: 'Our master chef’s signature creation. Ultra-tender Wagyu marble score 9+ seared to perfection, finished with freshly shaved black truffles, bone marrow jus, and micro-herbs.',
    longDescriptionAr: 'تحفة شيف أتيلييه ميرال الخاصة. لحم واغيو بدرجة ترخيم 9+ مطهو بدقة فائقة، تعلوه رقائق الكمأة السوداء وصلصة الجلاس الفاخرة مع بطاطس غنية بالزبدة الفرنسية.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80'
    ],
    tagsEn: ['Chef Signature', 'Best Seller', 'Halal Certified'],
    tagsAr: ['توقيع الشيف', 'الأكثر طلباً', 'حلال معتمد'],
    allergens: [
      { en: 'Dairy (Butter/Cream)', ar: 'مشتقات الحليب (زبدة / قشطة)' }
    ],
    ingredientsEn: ['Wagyu MB9+ Beef', 'Fresh Black Truffle', 'Normandy Butter', 'Bone Marrow Jus', 'Rosemary'],
    ingredientsAr: ['لحم واغيو MB9+', 'كمأة سوداء طازجة', 'زبدة نورماندي', 'مرق العظام المكثف', 'إكليل الجبل'],
    stockStatus: 'in_stock',
    rating: 4.98,
    reviewsCount: 142,
    prepTimeEn: '30-40 mins',
    prepTimeAr: '30-40 دقيقة',
    calories: 680,
    is3DFeatured: true
  },
  {
    id: 'sig-cardamom-saffron-tart',
    nameEn: 'Cardamom Saffron & Sicilian Pistachio Tart',
    nameAr: 'تارت الهيل والزعفران وفستق صقلية',
    category: 'desserts',
    price: 85,
    descriptionEn: 'Golden sable crust filled with roasted Bronte pistachio frangipane, infused with Kashmiri saffron cream and green cardamom glaze.',
    descriptionAr: 'قاعدة سابليه مقرمشة محشوة بفرانجيبان فستق برونتي الصقلي، مع كريمة الزعفران الكشميري وجليز الهيل الأخضر الملكي.',
    longDescriptionEn: 'A poetic fusion of Parisian pastry craftsmanship and rich Arabian heritage. Handcrafted daily with pure saffron threads and stone-ground pistachios, finished with edible 24K gold leaves.',
    longDescriptionAr: 'مزيج شاعري بين تقاليد الباتيسري الفرنسية الراقية والضيافة العربية الأصيلة. يُحضر يومياً بأجود خيوط الزعفران الصافي وفستق صقلية وورق الذهب عيار 24.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Chef Signature', 'Vegetarian', 'Gold Leaf'],
    tagsAr: ['توقيع الشيف', 'نباتي', 'ورق الذهب'],
    allergens: [
      { en: 'Tree Nuts (Pistachio)', ar: 'مكسرات (فستق)' },
      { en: 'Gluten (Wheat)', ar: 'جلوتين (قمح)' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['Bronte Pistachio', 'Kashmiri Saffron', 'Saudi Green Cardamom', 'French Butter', 'Gold Leaf'],
    ingredientsAr: ['فستق برونتي', 'زعفران كشميري', 'هيل سعودي أخضر', 'زبدة فرنسية', 'ورق ذهب عيار 24'],
    stockStatus: 'in_stock',
    rating: 4.96,
    reviewsCount: 188,
    prepTimeEn: 'Instant',
    prepTimeAr: 'جاهز للتقديم',
    calories: 390,
    is3DFeatured: true
  },
  {
    id: 'cake-celeste-celebration',
    nameEn: 'Atelier Miral Royal Celebration Cake',
    nameAr: 'كيكة أتيلييه ميرال الملكية للاحتفالات',
    category: 'cakes',
    price: 340,
    descriptionEn: 'Vanilla bean sponge layered with wild raspberry compote, Taif rose ganache, and frosted in ivory Swiss buttercream with edible gold.',
    descriptionAr: 'سبونج الفانيليا الفاخرة بطبقات كمبوت التوت البري وجناش الورد الطائفي، مغطاة بكريمة الزبدة السويسرية العاجية والذهب.',
    longDescriptionEn: 'The supreme centerpiece for birthdays, graduations, and refined Saudi celebrations. Customize with your handwritten gold calligraphy greeting and choose size portions.',
    longDescriptionAr: 'التحفة الملكية المثالية للأعراس، أعياد الميلاد، والاحتفالات الخاصة في الرياض. تشمل إمكانية كتابة إهداء خاص بخط عربي فاخر وشموع ذهبية مجانية.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80'
    ],
    tagsEn: ['Celebration Cake', 'Custom Message', 'Gold Inscription'],
    tagsAr: ['كيكة مناسبات', 'كتابة إهداء', 'زخرفة ذهبية'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs', ar: 'بيض' }
    ],
    ingredientsEn: ['Tahitian Vanilla', 'Taif Rose Water', 'Organic Flour', 'Raspberries', 'Swiss Butter', '24K Gold Flakes'],
    ingredientsAr: ['فانيليا تاهيتي', 'ماء ورد طائفي', 'دقيق عضوي', 'توت بري', 'زبدة سويسرية', 'رقائق ذهب 24'],
    variants: [
      { id: 'cake-6', nameEn: 'Petite Table (6-8 Servings)', nameAr: 'حجم متوسط (6-8 أشخاص)', price: 340, portionsEn: '6-8 Servings', portionsAr: '6-8 أشخاص' },
      { id: 'cake-12', nameEn: 'Grand Banquet (12-14 Servings)', nameAr: 'حجم كبير (12-14 شخص)', price: 490, portionsEn: '12-14 Servings', portionsAr: '12-14 شخص' },
      { id: 'cake-20', nameEn: 'Royal Two-Tier (20-25 Servings)', nameAr: 'طابقين ملكيين (20-25 شخص)', price: 780, portionsEn: '20-25 Servings', portionsAr: '20-25 شخص' }
    ],
    isCustomizableCake: true,
    stockStatus: 'in_stock',
    rating: 4.99,
    reviewsCount: 215,
    prepTimeEn: '2-3 hours bake lead',
    prepTimeAr: 'تحضير طازج خلال ساعتين',
    calories: 420,
    is3DFeatured: true
  },
  {
    id: 'sig-lamb-shank-freekeh',
    nameEn: 'Slow-Braised Lamb Shank with Smoked Freekeh',
    nameAr: 'موزات الغنم النجدية مع الفريكة المدخنة',
    category: 'mains',
    price: 245,
    descriptionEn: '12-hour slow-cooked local lamb shank, falling off the bone, served over aromatic green freekeh, toasted pine nuts, and pomegranate molasses jus.',
    descriptionAr: 'موزات غنم محلية مطهوة ببطء لمدة 12 ساعة حتى تذوب في الفم، تُقدم على فريكة خضراء مدخنة وصنوبر محمص وصلصة دبس الرمان.',
    longDescriptionEn: 'A celebration of Saudi culinary hospitality elevated with French braising precision. The meat is tender and succulent, infused with cinnamon, black lime, and cardamom.',
    longDescriptionAr: 'احتفاء فاخر بكرم الضيافة السعودية بلمسات طهي فرنسية متقنة. اللحم طري وغني بنكهات اللومي الأسود والهيل والقرفة مع الفريكة المحمصة.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Saudi Heritage', 'Slow Cooked', 'Halal Certified'],
    tagsAr: ['تراث سعودي', 'طهي بطيء', 'حلال معتمد'],
    allergens: [
      { en: 'Gluten (Freekeh)', ar: 'جلوتين (فريكة)' },
      { en: 'Tree Nuts (Pine Nuts)', ar: 'مكسرات (صنوبر)' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Local Lamb Shank', 'Green Freekeh', 'Pomegranate Molasses', 'Pine Nuts', 'Dried Lime'],
    ingredientsAr: ['موزات لحم محلي', 'فريكة خضراء', 'دبس رمان', 'صنوبر بلدي', 'لومي مجفف'],
    stockStatus: 'in_stock',
    rating: 4.94,
    reviewsCount: 167,
    prepTimeEn: '35 mins',
    prepTimeAr: '35 دقيقة',
    calories: 790,
    is3DFeatured: true
  },

  // 2. STARTERS (المقبلات الفاخرة)
  {
    id: 'starter-burrata-figs',
    nameEn: 'Truffle Burrata with Saudi Medina Figs',
    nameAr: 'بوراتا الكمأة مع تين المدينة والبلسمك العتيق',
    category: 'starters',
    price: 115,
    descriptionEn: 'Creamy Italian burrata filled with summer truffle cream, sweet Medina figs, heirloom cherry tomatoes, and 12-year aged Modena balsamic.',
    descriptionAr: 'جبنة بوراتا إيطالية طازجة محشوة بكريمة الكمأة، مع تين المدينة المنورة الحلو، وطماطم كرزية وخل بلسمك معتق 12 عاماً.',
    longDescriptionEn: 'A refreshing and indulgent start to your meal. The creaminess of the burrata pairs harmoniously with sweet sun-ripened Saudi figs and micro basil.',
    longDescriptionAr: 'بداية منعشة وفاخرة لوجبتك. توازن رائع بين قوام البوراتا الكريمي وحلاوة تين المدينة مع لمسات الريحان العطري وزيت الزيتون البكر.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Vegetarian', 'Popular Starter'],
    tagsAr: ['نباتي', 'مقبلات مميزة'],
    allergens: [
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Burrata', 'Medina Fresh Figs', 'Truffle Paste', 'Aged Balsamic', 'Wild Rocket'],
    ingredientsAr: ['جبن بوراتا', 'تين المدينة الطازج', 'معجون الكمأة', 'بلسمك معتق', 'جرجير بري'],
    stockStatus: 'in_stock',
    rating: 4.91,
    reviewsCount: 84,
    calories: 410
  },
  {
    id: 'starter-wagyu-carpaccio',
    nameEn: 'Wagyu Beef Carpaccio with 24K Gold & Truffle',
    nameAr: 'كارباتشيو لحم الواغيو بالذهب وصلصة الكمأة',
    category: 'starters',
    price: 145,
    descriptionEn: 'Paper-thin slices of raw Australian Wagyu tenderloin, Parmesan reggiano shavings, caper berries, truffle aioli, and edible gold flakes.',
    descriptionAr: 'شرائح رقيقة جداً من تندرلوين الواغيو الأسترالي، مع رقائق جبن البارميزان المعتق، توت الكبر، أيولي الكمأة ورقائق الذهب.',
    longDescriptionEn: 'A masterpiece of texture and luxury. The beef dissolves on the palate, elevated by the umami of 24-month Parmigiano and white truffle oil.',
    longDescriptionAr: 'تحفة فنية تذوب في الفم. لحم الواغيو الفاخر مع جبن البارميزان المعتق 24 شهراً وزيت الكمأة البيضاء.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Raw Bar', 'Gluten-Free Friendly'],
    tagsAr: ['راو بار', 'خالي من الجلوتين'],
    allergens: [
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Eggs (Aioli)', ar: 'بيض (أيولي)' }
    ],
    ingredientsEn: ['Wagyu Tenderloin', 'Parmigiano-Reggiano', 'Truffle Oil', 'Capers', 'Edible Gold'],
    ingredientsAr: ['تندرلوين واغيو', 'بارميزان ريجيانو', 'زيت الكمأة', 'كَبَر', 'ذهب صالح للأكل'],
    stockStatus: 'in_stock',
    rating: 4.95,
    reviewsCount: 76,
    calories: 340
  },
  {
    id: 'starter-lobster-brioche',
    nameEn: 'Crispy Butter Lobster Brioche & Oscietra Caviar',
    nameAr: 'توست البريوش بالكركند والزبدة مع كافيار أوسيترا',
    category: 'starters',
    price: 165,
    descriptionEn: 'Poached Brittany blue lobster folded in yuzu-chive mayonnaise, served inside caramelized golden brioche with a spoonful of Oscietra caviar.',
    descriptionAr: 'كركند بريتاني مطهو ببطء في مايونيز اليوزو والأعشاب، داخل خبز بريوش مكرمل بالزبدة مع ملعقة من كافيار أوسيترا الفاخر.',
    longDescriptionEn: 'The ultimate luxury bite. Warm, buttery brioche contrasted with chilled poached lobster tail and saline pearls of premium caviar.',
    longDescriptionAr: 'لقمة مترفة لا مثيل لها. خبز البريوش الدافئ بالزبدة مع قطع الكركند الطرية وحبات كافيار أوسيترا الغنية.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Seafood Caviar', 'Chef Special'],
    tagsAr: ['مأكولات بحرية وكافيار', 'طبق مميز'],
    allergens: [
      { en: 'Crustaceans (Lobster)', ar: 'قشريات (كركند)' },
      { en: 'Fish (Caviar)', ar: 'أسماك (كافيار)' },
      { en: 'Gluten (Brioche)', ar: 'جلوتين (بريوش)' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' }
    ],
    ingredientsEn: ['Brittany Lobster', 'Oscietra Caviar', 'Butter Brioche', 'Yuzu Mayo', 'Chives'],
    ingredientsAr: ['كركند فرنسي', 'كافيار أوسيترا', 'بريوش بالزبدة', 'مايونيز يوزو', 'ثوم معمر'],
    stockStatus: 'in_stock',
    rating: 4.97,
    reviewsCount: 93,
    calories: 430
  },

  // 3. MAIN COURSES (الأطباق الرئيسية)
  {
    id: 'main-chilean-seabass',
    nameEn: 'Pan-Roasted Chilean Seabass with Saffron Velouté',
    nameAr: 'سمك السيباس التشيلي مع صلصة الزعفران والليمون',
    category: 'mains',
    price: 285,
    descriptionEn: 'Pan-roasted Chilean seabass with crispy skin, served atop saffron risotto, sautéed baby asparagus, and citrus velouté sauce.',
    descriptionAr: 'فيليه سمك السيباس التشيلي المشوي بجلد مقرمش ولحم أبيض ناصع، يقدم مع ريزوتو الزعفران والهليون وصلصة الفيلوتيه الحمضية.',
    longDescriptionEn: 'Succulent seabass prized for its rich, buttery flakes, perfectly balanced by fragrant saffron broth and tender spring asparagus.',
    longDescriptionAr: 'سمك سيباس بحري طازج ولحم طري متماسك، مع صلصة الزعفران العطرية وخضار الحديقة الطازجة.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Wild Catch', 'Gluten-Free Friendly'],
    tagsAr: ['صيد بحري', 'خالي من الجلوتين'],
    allergens: [
      { en: 'Fish', ar: 'أسماك' },
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['Chilean Seabass', 'Carnaroli Rice', 'Saffron', 'Butter', 'Asparagus', 'Lemon'],
    ingredientsAr: ['سيباس تشيلي', 'أرز كارنارولي', 'زعفران', 'زبدة', 'هليون', 'ليمون'],
    stockStatus: 'in_stock',
    rating: 4.92,
    reviewsCount: 119,
    calories: 590
  },
  {
    id: 'main-duck-magret',
    nameEn: 'French Duck Magret with Pomegranate & Cardamom Jus',
    nameAr: 'صدر البط الفرنسي بصلصة الرمان والهيل الملكي',
    category: 'mains',
    price: 230,
    descriptionEn: 'Crispy skin duck breast roasted medium-rare, glazed with reduced Taif pomegranate and cardamom jus, baby glazed carrots, and sweet potato purée.',
    descriptionAr: 'صدر بط فرنسي مقرمش مطهو بدرجة نضج مثالية، مغطى بصلصة مركزة من رمان الطائف والهيل، مع جزر مكرمل ومهروس البطاطا الحلوة.',
    longDescriptionEn: 'A magnificent harmony of savory richness and tangy floral sweetness, honoring French gastronomy with Arabian touches.',
    longDescriptionAr: 'تناغم فريد بين نكهة لحم البط الفرنسي الغني وحلاوة رمان الطائف مع الهيل الأخضر الفاخر.',
    image: 'https://images.unsplash.com/photo-1514944298352-78d1205ea8fa?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Halal Certified', 'French Classic'],
    tagsAr: ['حلال معتمد', 'كلاسيك فرنسي'],
    allergens: [
      { en: 'Dairy', ar: 'مشتقات الحليب' }
    ],
    ingredientsEn: ['French Duck Breast', 'Taif Pomegranate', 'Green Cardamom', 'Sweet Potato', 'Butter'],
    ingredientsAr: ['صدر بط فرنسي', 'رمان طائفي', 'هيل أخضر', 'بطاطا حلوة', 'زبدة'],
    stockStatus: 'in_stock',
    rating: 4.89,
    reviewsCount: 68,
    calories: 640
  },

  // 4. CAKES & PATISSERIE (الكيك والحلويات الفرنسية)
  {
    id: 'cake-opera-gold',
    nameEn: 'Grand Cru Valrhona Opéra with 24K Gold Leaf',
    nameAr: 'أوبرا الشوكولاتة الداكنة فالرونا بورق الذهب 24',
    category: 'cakes',
    price: 195,
    descriptionEn: 'Six immaculate micro-layers of almond joconde soaked in espresso, Valrhona Guanaja 70% dark ganache, and French coffee buttercream.',
    descriptionAr: 'ست طبقات متناغمة من بسكويت الجوكوند باللوز المنقوع بالإسبريسو، وجناش شوكولاتة فالرونا 70%، وكريمة القهوة الفرنسية مع الذهب.',
    longDescriptionEn: 'A Parisian legend. Rich, deep, and beautifully balanced, garnished with pure edible 24-karat gold leaf.',
    longDescriptionAr: 'أسطورة الباتيسري الباريسية الكلاسيكية. توازن مذهل بين مرارة الكاكاو وعمق القهوة مع طبقة لمعان الشوكولاتة والذهب.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Valrhona Chocolate', 'French Classic'],
    tagsAr: ['شوكولاتة فالرونا', 'كلاسيك فرنسي'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Tree Nuts (Almonds)', ar: 'مكسرات (لوز)' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' }
    ],
    ingredientsEn: ['Almond Flour', 'Valrhona Guanaja 70%', 'Espresso', 'Normandy Butter', 'Gold Leaf'],
    ingredientsAr: ['دقيق اللوز', 'شوكولاتة فالرونا 70%', 'إسبريسو', 'زبدة نورماندي', 'ورق الذهب'],
    variants: [
      { id: 'op-ind', nameEn: 'Individual Portion', nameAr: 'قطعة فردية', price: 65 },
      { id: 'op-share', nameEn: 'Sharing Bar (6 Servings)', nameAr: 'قالب مشاركة (6 أشخاص)', price: 195 }
    ],
    stockStatus: 'in_stock',
    rating: 4.96,
    reviewsCount: 145,
    calories: 460
  },
  {
    id: 'cake-millefeuille-caramel',
    nameEn: 'Caramelized Mille-Feuille with Tahitian Vanilla',
    nameAr: 'ميل فوي مكرمل بفانيليا تاهيتي والكراميل المملح',
    category: 'cakes',
    price: 75,
    descriptionEn: 'Three layers of caramelized puff pastry alternating with two generous ribbons of Tahitian vanilla mousseline and sea salt caramel.',
    descriptionAr: 'ثلاث طبقات من العجين المورق المكرمل المقرمش تتخللها كريمة الموسيلين بفانيليا تاهيتي وصلصة الكراميل بالملح البحري.',
    longDescriptionEn: 'Inverted puff pastry baked until shatteringly crisp and caramelized, filled with fragrant cream speckled with genuine black vanilla seeds.',
    longDescriptionAr: 'عجين مورق مقرمش يُحضر بحرفية عالية ويُخبز طازجاً كل صباح ليمنحك قرمشة استثنائية مع نعومة الفانيليا والكراميل.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Fresh Daily Bake', 'Best Seller'],
    tagsAr: ['خبز يومي طازج', 'الأكثر طلباً'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' }
    ],
    ingredientsEn: ['French Flour', 'AOP Butter', 'Tahitian Vanilla Pods', 'Guérande Sea Salt', 'Milk'],
    ingredientsAr: ['دقيق فرنسي', 'زبدة AOP', 'قرون فانيليا تاهيتي', 'ملح بحري', 'حليب'],
    stockStatus: 'in_stock',
    rating: 4.93,
    reviewsCount: 172,
    calories: 440
  },
  {
    id: 'cake-ispahan-entremet',
    nameEn: 'Royal Ispahan Rose & Raspberry Entremet',
    nameAr: 'أنتروميه الإسبهان بالورد والتوت واللوز',
    category: 'cakes',
    price: 88,
    descriptionEn: 'Crisp pink macaron biscuit with rosewater cream, fresh red raspberries, and tender lychee fruit compote.',
    descriptionAr: 'بسكويت ماكرون وردي مقرمش مع كريمة ماء الورد العطري، حبات التوت الأحمر الطازج، وكمبوت فاكهة الليتشي اللذيذة.',
    longDescriptionEn: 'An iconic symbol of Parisian haute pâtisserie. Floral, fruity, and delicately balanced with crisp almond biscuit textures.',
    longDescriptionAr: 'أيقونة الحلويات الفرنسية الراقية. عبير الورد الطبيعي يلتقي مع حموضة التوت وحلاوة الليتشي في تجربة لا تُنسى.',
    image: 'https://images.unsplash.com/photo-1558024920-b41e1887dc32?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Floral Essence', 'Gluten-Free Friendly'],
    tagsAr: ['عبير الورد', 'خالي من الجلوتين'],
    allergens: [
      { en: 'Tree Nuts (Almonds)', ar: 'مكسرات (لوز)' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' }
    ],
    ingredientsEn: ['Almond Meal', 'Rosewater', 'Raspberries', 'Lychee', 'Egg Whites', 'Sugar'],
    ingredientsAr: ['دقيق اللوز', 'ماء ورد', 'توت أحمر', 'ليتشي', 'بياض بيض', 'سكر'],
    stockStatus: 'in_stock',
    rating: 4.97,
    reviewsCount: 153,
    calories: 380
  },

  // 5. DESSERTS (الحلويات والأنتروميه)
  {
    id: 'des-date-fondant',
    nameEn: 'Warm Medjool Date Fondant with Camel Milk Ice Cream',
    nameAr: 'فوندان التمر الساخن مع آيس كريم حليب الإبل',
    category: 'desserts',
    price: 90,
    descriptionEn: 'Molten warm cake infused with Qassim Medjool dates, pecan praline center, served with artisanal camel milk and vanilla ice cream.',
    descriptionAr: 'كيكة فوندان دافئة بقلب سائل غني بتمر المجدول القصيمي وحبيبات البيكان، تقدم مع آيس كريم حليب الإبل بالفانيليا.',
    longDescriptionEn: 'A decadent warm dessert celebrating Saudi date heritage with luxurious French fondant texture. Served with warm caramel drizzle.',
    longDescriptionAr: 'حلوى دافئة فاخرة تحتفي بتمر القصيم بجودة لا تضاهى، مع آيس كريم حليب الإبل المنعش وصلصة التوفي بالكراميل.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Saudi Heritage', 'Warm Dessert'],
    tagsAr: ['تراث سعودي', 'حلوى دافئة'],
    allergens: [
      { en: 'Gluten', ar: 'جلوتين' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' },
      { en: 'Tree Nuts (Pecans)', ar: 'مكسرات (بيكان)' }
    ],
    ingredientsEn: ['Medjool Dates', 'Camel Milk', 'Pecans', 'Flour', 'Butter', 'Eggs'],
    ingredientsAr: ['تمر مجدول', 'حليب إبل', 'بيكان', 'دقيق', 'زبدة', 'بيض'],
    stockStatus: 'in_stock',
    rating: 4.95,
    reviewsCount: 128,
    calories: 520
  },
  {
    id: 'des-berry-pavlova',
    nameEn: 'Pavlova Éphémère with Wild Berries & Taif Rose',
    nameAr: 'بافلوفا التوت البري المقرمشة بورد الطائف',
    category: 'desserts',
    price: 82,
    descriptionEn: 'Crisp French meringue shell with marshmallow center, passion fruit curd, Madagascar vanilla chantilly, and a crown of fresh wild berries.',
    descriptionAr: 'قرص ميرانغ فرنسي مقرمش من الخارج وهش من الداخل، محشو بكريمة الباشن فروت وكريمة الشانتيلي وتوت العليق الطازج.',
    longDescriptionEn: 'Feather-light and refreshing. The crisp meringue dissolves effortlessly, accented by tart berries and aromatic rose oil.',
    longDescriptionAr: 'خفيفة كالغيوم. تذوب في الفم مع التوت البري الطازج وكريمة الفانيليا ولمسات ماء الورد.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Gluten-Free', 'Light & Fruity'],
    tagsAr: ['خالي من الجلوتين', 'خفيف ومنعش'],
    allergens: [
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' }
    ],
    ingredientsEn: ['Egg Whites', 'Fresh Berries', 'Cream', 'Passion Fruit', 'Rose Petals'],
    ingredientsAr: ['بياض بيض', 'توت طازج', 'قشطة فرنسية', 'باشن فروت', 'بتلات الورد'],
    stockStatus: 'in_stock',
    rating: 4.88,
    reviewsCount: 82,
    calories: 310
  },

  // 6. COFFEE & BEVERAGES (القهوة المختصة والمشروبات الفاخرة)
  {
    id: 'bev-saudi-gahwa-royal',
    nameEn: 'Royal Saudi Gahwa with Cardamom & Medjool Dates',
    nameAr: 'القهوة السعودية الملكية بالهيل الفاخر ورطب المجدول',
    category: 'beverages',
    price: 65,
    descriptionEn: 'Dallah of premium blonde coffee brewed with royal green cardamom and saffron, served with luxury stuffed Medjool dates and tahini.',
    descriptionAr: 'دلة قهوة سعودية شقراء فاخرة مطبوخة بالهيل الملكي والزعفران الصافي، تقدم مع تمور مجدول محشوة والطحينة الفاخرة.',
    longDescriptionEn: 'The essence of Saudi hospitality. Prepared tableside with highest grade Khawlani coffee beans, offering golden warmth and invigorating spice.',
    longDescriptionAr: 'رمز الضيافة السعودية الأصيلة. نُعدها بأجود حبوب البن الخولاني المحمصة برقة مع خيوط الزعفران والهيل الأخضر الفواح.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Saudi Hospitality', 'Traditional Dallah'],
    tagsAr: ['ضيافة سعودية', 'دلة تقليدية'],
    allergens: [
      { en: 'Sesame (Tahini)', ar: 'سمسم (طحينة)' }
    ],
    ingredientsEn: ['Khawlani Coffee', 'Green Cardamom', 'Saffron', 'Medjool Dates', 'Tahini'],
    ingredientsAr: ['بن خولاني', 'هيل أخضر', 'زعفران', 'تمر مجدول', 'طحينة سمسم'],
    stockStatus: 'in_stock',
    rating: 4.99,
    reviewsCount: 230,
    calories: 80
  },
  {
    id: 'bev-iced-saffron-latte',
    nameEn: 'Iced Saffron Spanish Latte',
    nameAr: 'سبانش لاتيه مثلج بالزعفران الصافي',
    category: 'beverages',
    price: 42,
    descriptionEn: 'Double shot of single-origin espresso, cold condensed milk, organic milk, infused with golden saffron reduction and crushed pistachios.',
    descriptionAr: 'جرعة مزدوجة من إسبريسو القهوة المختصة مع حليب مكثف ومستخلص الزعفران الصافي وفستق مطحون.',
    longDescriptionEn: 'A beloved modern Riyadh classic elevated with whole saffron stigmas and specialty roasted Brazilian beans.',
    longDescriptionAr: 'المشروب المفضل في الرياض بلمسة أتيلييه ميرال الراقية. قهوة غنية بالنكهة مع برودة منعشة ولون ذهبي جذاب.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Specialty Coffee', 'Best Seller'],
    tagsAr: ['قهوة مختصة', 'الأكثر طلباً'],
    allergens: [
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Tree Nuts (Pistachio garnish)', ar: 'مكسرات (تزيين فستق)' }
    ],
    ingredientsEn: ['Specialty Espresso', 'Whole Milk', 'Condensed Milk', 'Kashmiri Saffron'],
    ingredientsAr: ['إسبريسو مختص', 'حليب طازج', 'حليب مكثف', 'زعفران كشميري'],
    stockStatus: 'in_stock',
    rating: 4.94,
    reviewsCount: 195,
    calories: 260
  },
  {
    id: 'bev-sparkling-grape-fizz',
    nameEn: 'Sparkling White Grape & Lavender Elixir',
    nameAr: 'إكسير العنب الأبيض الفوار باللافندر والرمان',
    category: 'beverages',
    price: 48,
    descriptionEn: 'Artisanal non-alcoholic sparkling nectar infused with French lavender, cold-pressed white grape, and ruby pomegranate arils.',
    descriptionAr: 'مشروب فوار غير كحولي فاخر بخلاصة اللافندر الفرنسي وعصير العنب الأبيض مع حبات الرمان الطازج والثلج البلوري.',
    longDescriptionEn: 'Crisp, effervescent, and sophisticated. The perfect celebratory toast for luxury dinners and afternoon teas.',
    longDescriptionAr: 'مشروب منعش راقٍ ومثالي للاحتفالات والمناسبات الراقية. نكهات متوازنة وفقاعات منعشة خالية تماماً من الكحول.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Non-Alcoholic', 'Signature Mocktail'],
    tagsAr: ['غير كحولي', 'موكتيل مميز'],
    allergens: [],
    ingredientsEn: ['White Grape Nectar', 'French Lavender Syrup', 'Sparkling Mineral Water', 'Pomegranate'],
    ingredientsAr: ['عصير عنب أبيض', 'شراب اللافندر', 'مياه فوارة', 'رمان'],
    stockStatus: 'in_stock',
    rating: 4.87,
    reviewsCount: 64,
    calories: 140
  },

  // 7. GIFT BOXES & SPECIAL COLLECTIONS (صناديق الهدايا والمجموعات الفاخرة)
  {
    id: 'gift-royal-macaron-coffret',
    nameEn: 'The Royal Macaron Coffret (12 & 24 Pcs)',
    nameAr: 'صندوق الماكرون الملكي الفاخر (12 و 24 قطعة)',
    category: 'gifts',
    price: 180,
    descriptionEn: 'Assorted handcrafted macarons in our embossed olive and champagne gold keepsake box, tied with double-faced French satin ribbon.',
    descriptionAr: 'تشكيلة ماكرون فاخرة في صندوق هدايا زيتي وذهبي منقوش بشعار ميرال، ومزين برباط ساتان فرنسي فاخر.',
    longDescriptionEn: 'Features our celebrated flavors: Cardamom & Saffron, Taif Rose & Lychee, Bronte Pistachio, Valrhona Dark Chocolate, Salted Caramel, and Tahitian Vanilla.',
    longDescriptionAr: 'يضم نكهاتنا الحصرية: الهيل والزعفران، ورد الطائف والليتشي، فستق برونتي، شوكولاتة فالرونا الداكنة، والكراميل المملح.',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1000&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=80'
    ],
    tagsEn: ['Luxury Gift', 'Gluten-Free Friendly'],
    tagsAr: ['هدية فاخرة', 'خالي من الجلوتين'],
    allergens: [
      { en: 'Tree Nuts (Almonds)', ar: 'مكسرات (لوز)' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' }
    ],
    ingredientsEn: ['Valencia Almond Flour', 'Normandy Butter', 'Valrhona Chocolate', 'Saffron', 'Rosewater'],
    ingredientsAr: ['دقيق لوز فالنسيا', 'زبدة نورماندي', 'شوكولاتة فالرونا', 'زعفران', 'ماء ورد'],
    variants: [
      { id: 'mac-12', nameEn: 'Coffret of 12 Macarons', nameAr: 'صندوق 12 قطعة ماكرون', price: 180 },
      { id: 'mac-24', nameEn: 'Prestige Box of 24 Macarons', nameAr: 'صندوق النخبة 24 قطعة ماكرون', price: 320 }
    ],
    stockStatus: 'in_stock',
    rating: 4.98,
    reviewsCount: 210
  },
  {
    id: 'gift-truffles-dates-hamper',
    nameEn: 'Medjool Date & Camel Milk Chocolate Truffle Box',
    nameAr: 'صندوق ترافل التمر الملكي بحليب الإبل والذهب',
    category: 'gifts',
    price: 260,
    descriptionEn: 'Sixteen handcrafted bonbons filled with slow-cooked Medjool date caramel, roasted almonds, and camel milk milk chocolate with gold leaf.',
    descriptionAr: '16 حبة بونبون مصنوعة يدوياً محشوة بكراميل تمر المجدول واللوز المحمص وشوكولاتة حليب الإبل مع لمسات الذهب.',
    longDescriptionEn: 'The quintessential gift for VIP hosts and special occasions in Riyadh. Housed in a dark olive leather-finish luxury box with magnetic closure.',
    longDescriptionAr: 'الهدية المثالية للضيافة الرفيعة والمناسبات الفاخرة بالرياض. تُقدم في علبة جلدية زيتية فاخرة مع قفل مغناطيسي وبطاقة إهداء مذهبة.',
    image: 'https://images.unsplash.com/photo-1548741487-18d16a145e80?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Artisanal Chocolate', 'VIP Gifting'],
    tagsAr: ['شوكولاتة حرفية', 'هدايا كبار الشخصيات'],
    allergens: [
      { en: 'Dairy', ar: 'مشتقات الحليب' },
      { en: 'Tree Nuts (Almonds)', ar: 'مكسرات (لوز)' }
    ],
    ingredientsEn: ['Single Estate Chocolate', 'Camel Milk Powder', 'Medjool Dates', 'Almonds', 'Gold Leaf'],
    ingredientsAr: ['شوكولاتة أحادية المصدر', 'حليب إبل', 'تمر مجدول', 'لوز', 'ورق ذهب'],
    stockStatus: 'in_stock',
    rating: 4.96,
    reviewsCount: 88
  },
  {
    id: 'gift-executive-trunk',
    nameEn: 'The Executive Miral Hospitality Trunk',
    nameAr: 'صندوق الضيافة الملكي الفاخر لكبار الشخصيات',
    category: 'gifts',
    price: 850,
    descriptionEn: 'The grandest hamper: 24 Royal Macarons, Medjool Truffles, Tin of Imperial Saffron Tea, Bottle of Sparkling Elixir, Scented Candle & Calligraphy Letter.',
    descriptionAr: 'صندوق خشبي فاخر يضم: 24 قطعة ماكرون، ترافل التمر، علبة شاي الزعفران الملكي، زجاجة إكسير فوار، شمعة عطرية وخطاب إهداء بالخط العربي.',
    longDescriptionEn: 'Curated for distinguished corporate gifting, Eid celebrations, and royal gatherings across Saudi Arabia. Delivered in temperature-controlled refrigerated luxury packaging.',
    longDescriptionAr: 'صُمم خصيصاً للشركات المرموقة، احتفالات الأعياد، والهدايا الدبلوماسية في المملكة. يصل بتغليف مبرد فاخر وبطاقة إهداء مخصصة.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    tagsEn: ['Ultimate Luxury', 'Corporate VIP'],
    tagsAr: ['الفخامة المطلقة', 'هدايا الشركات'],
    allergens: [
      { en: 'Tree Nuts', ar: 'مكسرات' },
      { en: 'Dairy & Eggs', ar: 'حليب وبيض' },
      { en: 'Gluten', ar: 'جلوتين' }
    ],
    ingredientsEn: ['Assorted Macarons', 'Date Truffles', 'Saffron Tea', 'Sparkling Nectar', 'Candle'],
    ingredientsAr: ['ماكرون مشكل', 'ترافل التمر', 'شاي الزعفران', 'عصير فوار', 'شمعة عطرية'],
    stockStatus: 'in_stock',
    rating: 5.0,
    reviewsCount: 42
  }
];

export const SAUDI_DELIVERY_ZONES = [
  {
    id: 'zone-north',
    nameEn: 'North Riyadh (Hittin, Al Malqa, Al Yasmin, Al Narjis, Al Sahafa)',
    nameAr: 'شمال الرياض (حطين، الملقا، الياسمين، النرجس، الصحافة)',
    fee: 25,
    minForFree: 250,
    estimatedMinutes: '35 - 50 mins'
  },
  {
    id: 'zone-central',
    nameEn: 'Central Riyadh (Al Olaya, Al Sulaimaniya, Al Nakheel, Al Muhammadiyah)',
    nameAr: 'وسط الرياض (العليا، السليمانية، النخيل، المحمدية)',
    fee: 30,
    minForFree: 250,
    estimatedMinutes: '40 - 55 mins'
  },
  {
    id: 'zone-west-dq',
    nameEn: 'West Riyadh & Diplomatic Quarter (DQ, Al Hada, Umm Al Hamam)',
    nameAr: 'غرب الرياض والحي الدبلوماسي (السفارات، الهدا، أم الحمام)',
    fee: 35,
    minForFree: 250,
    estimatedMinutes: '45 - 60 mins'
  },
  {
    id: 'zone-east-south',
    nameEn: 'East & South Riyadh (Al Rawdah, Al Yarmouk, Al Rayyan)',
    nameAr: 'شرق وجنوب الرياض (الروضة، اليرموك، الريان، الملز)',
    fee: 40,
    minForFree: 250,
    estimatedMinutes: '50 - 70 mins'
  }
];

export const INITIAL_REWARDS: LoyaltyReward[] = [
  {
    id: 'rew-voucher-50',
    titleEn: '50 SAR Dining Credit Voucher',
    titleAr: 'قسيمة رصيد بقيمة 50 ر.س',
    descriptionEn: 'Valid on all dining and patisserie orders above 150 SAR.',
    descriptionAr: 'صالحة على جميع طلبات الطعام والحلويات التي تزيد عن 150 ر.س.',
    pointsRequired: 500,
    voucherCode: 'MIRAL50SAR',
    discountSar: 50,
    tierRequired: 'Silver',
    tagEn: 'Fast Reward',
    tagAr: 'مكافأة سريعة'
  },
  {
    id: 'rew-free-tart',
    titleEn: 'Complimentary Cardamom Saffron Tart',
    titleAr: 'تارت الهيل والزعفران مجاناً',
    descriptionEn: 'Enjoy our signature saffron pistachio tart with your next order.',
    descriptionAr: 'استمتع بتارت الهيل والزعفران والفستق مجاناً مع طلبك القادم.',
    pointsRequired: 800,
    voucherCode: 'FREETART800',
    discountSar: 85,
    tierRequired: 'Silver',
    tagEn: 'Signature Treat',
    tagAr: 'تحفة الشيف'
  },
  {
    id: 'rew-voucher-150',
    titleEn: '150 SAR Haute Gastronomy Voucher',
    titleAr: 'قسيمة طعام فاخرة بقيمة 150 ر.س',
    descriptionEn: 'Generous dining credit valid on celebration cakes and fine dining.',
    descriptionAr: 'رصيد سخي يمكن استخدامه على كيكات المناسبات أو الأطباق الرئيسية.',
    pointsRequired: 1400,
    voucherCode: 'MIRAL150SAR',
    discountSar: 150,
    tierRequired: 'Gold',
    tagEn: 'Gold Privilege',
    tagAr: 'ميزة الأعضاء الذهبيين'
  },
  {
    id: 'rew-macaron-box',
    titleEn: 'Complimentary Royal Macaron Coffret (12 Pcs)',
    titleAr: 'صندوق ماكرون ملكي فاخر (12 قطعة) مجاناً',
    descriptionEn: 'A luxury keepsake box of 12 handcrafted French macarons.',
    descriptionAr: 'صندوق هدايا فاخر يحتوي على 12 قطعة ماكرون فرنسي طازج.',
    pointsRequired: 1800,
    voucherCode: 'FREEMACARONS',
    discountSar: 180,
    tierRequired: 'Diamond',
    tagEn: 'Diamond Elite',
    tagAr: 'نخبة الألماس'
  }
];

export const INITIAL_PROMO_CODES: PromoCode[] = [
  {
    code: 'MIRAL10',
    discountPercent: 10,
    minSpendSar: 100,
    descriptionEn: '10% Welcome discount on your debut order',
    descriptionAr: 'خصم 10% ترحيبي على أول طلب لك في ميرال',
    active: true
  },
  {
    code: 'RIYADH',
    discountFlatSar: 30,
    minSpendSar: 180,
    descriptionEn: 'Complimentary chilled delivery privilege across Riyadh',
    descriptionAr: 'توصيل مبرد مجاني في جميع أنحاء الرياض',
    active: true
  },
  {
    code: 'HAUTE15',
    discountPercent: 15,
    minSpendSar: 300,
    descriptionEn: '15% Privilege discount for celebration cakes and hampers',
    descriptionAr: 'خصم 15% على كيكات الاحتفالات وصناديق الهدايا الملكية',
    active: true
  }
];

export const DEFAULT_USER: UserProfile = {
  name: 'صاحب السمو الأمير فيصل آل سعود',
  email: 'faisal.alsaud@miral-riyadh.sa',
  phone: '+966 50 491 8820',
  points: 1250,
  lifetimePoints: 2450,
  tier: 'Gold',
  referralCode: 'MIRAL-FAISAL-77',
  addresses: [
    {
      id: 'addr-1',
      labelEn: 'Hittin Private Residence',
      labelAr: 'فيلا حطين الخاصة',
      recipientName: 'فيصل آل سعود',
      city: 'الرياض',
      districtEn: 'Hittin District',
      districtAr: 'حي حطين',
      street: 'طريق الأمير تركي بن عبد العزيز الأول',
      phone: '+966 50 491 8820',
      isDefault: true
    },
    {
      id: 'addr-2',
      labelEn: 'Diplomatic Quarter Office',
      labelAr: 'مكتب الحي الدبلوماسي',
      recipientName: 'فيصل آل سعود',
      city: 'الرياض',
      districtEn: 'Diplomatic Quarter',
      districtAr: 'حي السفارات',
      street: 'ساحة الفزاري، مجمع الأعمال',
      phone: '+966 50 491 8820',
      isDefault: false
    }
  ],
  wishlistIds: ['sig-wagyu-truffle', 'cake-celeste-celebration', 'sig-cardamom-saffron-tart'],
  pointsHistory: [
    {
      id: 'tx-1',
      date: '2026-10-10',
      descriptionEn: 'Order #AM-89421: Royal Celebration Cake & Coffee',
      descriptionAr: 'طلب #AM-89421: كيكة الاحتفال الملكية ودلة القهوة',
      pointsChange: 405,
      type: 'order'
    },
    {
      id: 'tx-2',
      date: '2026-09-28',
      descriptionEn: 'Redeemed: 50 SAR Dining Credit Voucher',
      descriptionAr: 'استبدال: قسيمة رصيد بقيمة 50 ر.س',
      pointsChange: -500,
      type: 'redemption'
    },
    {
      id: 'tx-3',
      date: '2026-09-15',
      descriptionEn: 'Order #AM-78102: Executive Miral Trunk & Wagyu',
      descriptionAr: 'طلب #AM-78102: صندوق الضيافة الفاخر وستيك الواغيو',
      pointsChange: 1210,
      type: 'order'
    },
    {
      id: 'tx-4',
      date: '2026-08-01',
      descriptionEn: 'Welcome Gold Tier Induction Bonus',
      descriptionAr: 'مكافأة الترحيب بالانضمام للعضوية الذهبية',
      pointsChange: 500,
      type: 'bonus'
    }
  ],
  redeemedVouchers: [
    {
      code: 'MIRAL50SAR-8192',
      titleEn: '50 SAR Dining Credit Voucher',
      titleAr: 'قسيمة رصيد بقيمة 50 ر.س',
      discountSar: 50,
      used: false,
      date: '2026-09-28'
    }
  ]
};

export const CHAT_QUICK_REPLIES: ChatQuickReply[] = [
  {
    id: 'faq-menu',
    categoryEn: 'Menu & Prices',
    categoryAr: 'القائمة والأسعار',
    questionEn: 'What are your signature dishes and price ranges?',
    questionAr: 'ما هي الأطباق الأكثر شهرة في القائمة والأسعار؟',
    answerEn: 'Our acclaimed dishes include the Smoked Black Truffle Wagyu (360 SAR), Royal Saffron Pistachio Tart (85 SAR), and slow-cooked Najdi Lamb Shank with Freekeh (245 SAR). We feature 7 full categories including cakes, starters, and luxury gift hampers.',
    answerAr: 'من أبرز أطباقنا: ستيك تندرلوين الواغيو بالكمأة السوداء (360 ر.س)، تارت الهيل والزعفران وفستق صقلية (85 ر.س)، وموزات الغنم النجدية بالفريكة (245 ر.س). القائمة تضم 7 تصنيفات متكاملة تشمل الكيك والحلويات والقهوة وصناديق الهدايا.'
  },
  {
    id: 'faq-hours',
    categoryEn: 'Opening Hours & Location',
    categoryAr: 'ساعات العمل والفروع',
    questionEn: 'Where is Atelier Miral located and what are your opening hours?',
    questionAr: 'أين يقع المطعم وما هي ساعات العمل؟',
    answerEn: 'Our flagship is located in Hittin District, Prince Turki Al Awwal Road, Riyadh. We welcome guests daily from 12:00 PM to 01:00 AM. Breakfast and fresh morning patisserie service begins at 08:00 AM on weekends.',
    answerAr: 'يقع فرعنا الرئيسي في مدينة الرياض، حي حطين، طريق الأمير تركي بن عبد العزيز الأول. نستقبلكم يومياً من الساعة 12:00 ظهراً حتى 01:00 بعد منتصف الليل، ويبدأ فطور نهاية الأسبوع والباتيسري الطازج من 08:00 صباحاً.'
  },
  {
    id: 'faq-delivery',
    categoryEn: 'Delivery Zones & Fees',
    categoryAr: 'مناطق ورسوم التوصيل',
    questionEn: 'Which areas do you deliver to in Riyadh?',
    questionAr: 'ما هي مناطق التوصيل المتاحة في الرياض والرسوم؟',
    answerEn: 'We provide temperature-controlled refrigerated delivery across all Riyadh districts (Hittin, Malqa, Olaya, Nakheel, Diplomatic Quarter, and East Riyadh). Delivery is complimentary on orders of 250 SAR or more. Standard delivery fees range from 25 to 40 SAR.',
    answerAr: 'نوفر خدمة التوصيل المبرد الفاخر في سيارات مخصصة لجميع أحياء الرياض (شمال، وسط، غرب والحي الدبلوماسي، وشرق الرياض). التوصيل مجاني تماماً للطلبات بقيمة 250 ر.س فأكثر، والرسوم الاعتيادية تتراوح بين 25 إلى 40 ر.س.'
  },
  {
    id: 'faq-payments',
    categoryEn: 'Payment Methods',
    categoryAr: 'طرق الدفع والمدى',
    questionEn: 'Which payment methods do you accept?',
    questionAr: 'ما هي طرق الدفع المعتمدة لدى المتجر؟',
    answerEn: 'We support Saudi Mada debit cards, Apple Pay, Visa, and Mastercard with 256-bit encrypted security, as well as direct coordination via WhatsApp Business Concierge.',
    answerAr: 'نقبل بطاقات مدى (Mada) السعودية، آبل باي (Apple Pay)، وفيزا وماستركارد بأعلى معايير التشفير والأمان، بالإضافة إلى إمكانية الطلب المباشر عبر واتساب بيزنس.'
  },
  {
    id: 'faq-cakes',
    categoryEn: 'Celebration Cakes',
    categoryAr: 'كيكات المناسبات المخصصة',
    questionEn: 'Can I add a custom message and candles to celebration cakes?',
    questionAr: 'هل يمكن كتابة عبارة إهداء خاصة وإضافة شموع للكيكة؟',
    answerEn: 'Yes! All celebration cakes include complimentary custom calligraphy inscription (in Arabic or English) and golden celebratory candles. Simply write your message in the custom box when ordering.',
    answerAr: 'نعم بالتأكيد! تشمل جميع كيكات المناسبات خدمة كتابة إهداء خاص بخط عربي مذهب أو إنجليزي مجاناً، بالإضافة لشموع ذهبية أنيقة. يمكنك كتابة عبارتك في خانة الملاحظات أثناء الطلب.'
  },
  {
    id: 'faq-loyalty',
    categoryEn: 'Loyalty Rewards',
    categoryAr: 'نقاط ومكافآت ميرال',
    questionEn: 'How does the Le Cercle Miral rewards program work?',
    questionAr: 'كيف يعمل برنامج مكافآت ونقاط ميرال؟',
    answerEn: 'You earn 1 point for every 1 SAR spent on all eligible orders. Points can be redeemed for instant discount vouchers (up to 150 SAR credit) or complimentary royal pastries and macaron boxes.',
    answerAr: 'تكسب نقطة واحدة مقابل كل 1 ر.س تنفقه في المتجر. يمكنك استبدال النقاط بقسائم خصم نقدية فورية (تصل إلى 150 ر.س) أو حلويات وتارت مجاني وصناديق ماكرون ملكية.'
  },
  {
    id: 'faq-human',
    categoryEn: 'Contact Human Concierge',
    categoryAr: 'التحدث مع موظف خدمة العملاء',
    questionEn: 'I need to speak directly with the restaurant concierge.',
    questionAr: 'أرغب بالتواصل الفوري مع موظف خدمة العملاء أو الحجوزات.',
    answerEn: 'Our concierge is ready to assist you on WhatsApp at +966 50 123 4567 or via telephone for private dining bookings, event catering, and urgent requests.',
    answerAr: 'يسعد فريق خدمة العملاء بخدمتكم مباشرة عبر محادثة واتساب الرسمية على الرقم 4567 123 50 966+ أو الاتصال الهاتفي لترتيب الحجوزات والمناسبات الخاصة.'
  }
];
