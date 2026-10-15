export type Language = 'ar' | 'en';

export type PageId = 
  | 'home' 
  | 'macarons' 
  | 'patisseries' 
  | 'delicacies' 
  | 'gifting' 
  | 'salons' 
  | 'heritage' 
  | 'loyalty';

export type ProductCategory = 
  | 'all' 
  | 'macarons' 
  | 'patisseries' 
  | 'cakes' 
  | 'chocolates' 
  | 'teas' 
  | 'pyramids' 
  | 'gifting'
  | 'signatures'
  | 'desserts'
  | 'beverages'
  | 'starters'
  | 'mains'
  | 'gifts';

export interface MacaronFlavor {
  id: string;
  nameEn: string;
  nameAr: string;
  frenchName: string;
  colorHex: string;
  badgeBg: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  isSeasonal?: boolean;
}

export interface LadureeSalon {
  id: string;
  nameEn: string;
  nameAr: string;
  cityEn: string;
  cityAr: string;
  mallEn: string;
  mallAr: string;
  hoursEn: string;
  hoursAr: string;
  phone: string;
  addressEn: string;
  addressAr: string;
  hasAfternoonTea: boolean;
  hasTerrace: boolean;
  isCoffeeShopConcept?: boolean;
  image: string;
  coordinates?: { lat: number; lng: number };
}

export interface ProductVariant {
  id: string;
  nameEn: string;
  nameAr: string;
  price: number; // in SAR
  portionsEn?: string;
  portionsAr?: string;
}

export interface ProductAllergen {
  en: string;
  ar: string;
}

export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  category: ProductCategory;
  price: number; // in SAR
  salePrice?: number;
  descriptionEn: string;
  descriptionAr: string;
  longDescriptionEn: string;
  longDescriptionAr: string;
  image: string;
  secondaryImages?: string[];
  tagsEn: string[];
  tagsAr: string[];
  allergens: ProductAllergen[];
  ingredientsEn: string[];
  ingredientsAr: string[];
  variants?: ProductVariant[];
  isCustomizableCake?: boolean;
  stockStatus: 'in_stock' | 'low_stock' | 'sold_out';
  rating: number;
  reviewsCount: number;
  prepTimeEn?: string;
  prepTimeAr?: string;
  calories?: number;
  is3DFeatured?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedVariant?: ProductVariant;
  customCakeMessage?: string;
  selectedCandles?: boolean;
  specialInstructions?: string;
  customMacaronFlavors?: { flavorName: string; quantity: number }[];
  ribbonColor?: string;
  boxStyle?: string;
}

export interface SaudiAddress {
  id: string;
  labelEn: string;
  labelAr: string;
  recipientName: string;
  city: string; // e.g. Riyadh
  districtEn: string;
  districtAr: string;
  street: string;
  phone: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  orderNumber: string; // e.g. "AM-89421"
  date: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  vatAmount: number; // 15% Saudi VAT
  total: number;
  customerName: string;
  phone: string;
  email?: string;
  fulfillmentType: 'delivery' | 'pickup';
  deliveryZoneEn?: string;
  deliveryZoneAr?: string;
  deliveryAddress?: string;
  pickupBranchEn?: string;
  pickupBranchAr?: string;
  deliveryDate: string;
  deliverySlotEn: string;
  deliverySlotAr: string;
  paymentMethod: 'mada' | 'apple_pay' | 'card' | 'whatsapp';
  status: 'received' | 'preparing' | 'in_transit' | 'delivered';
  pointsEarned: number;
  isWhatsAppOrder?: boolean;
  notes?: string;
}

export interface LoyaltyReward {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  pointsRequired: number;
  voucherCode: string;
  discountSar: number;
  tierRequired: 'Silver' | 'Gold' | 'Diamond';
  tagEn: string;
  tagAr: string;
}

export interface LoyaltyTransaction {
  id: string;
  date: string;
  descriptionEn: string;
  descriptionAr: string;
  pointsChange: number;
  type: 'order' | 'redemption' | 'bonus' | 'referral';
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  points: number;
  lifetimePoints: number;
  tier: 'Silver' | 'Gold' | 'Diamond';
  referralCode: string;
  addresses: SaudiAddress[];
  wishlistIds: string[];
  pointsHistory: LoyaltyTransaction[];
  redeemedVouchers: {
    code: string;
    titleEn: string;
    titleAr: string;
    discountSar: number;
    used: boolean;
    date: string;
  }[];
}

export interface PromoCode {
  code: string;
  discountPercent?: number;
  discountFlatSar?: number;
  minSpendSar?: number;
  descriptionEn: string;
  descriptionAr: string;
  active: boolean;
}

export interface ChatQuickReply {
  id: string;
  categoryEn: string;
  categoryAr: string;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}
