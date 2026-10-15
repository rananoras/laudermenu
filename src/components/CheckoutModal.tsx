import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  X, 
  Lock, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  MapPin, 
  Award,
  QrCode
} from 'lucide-react';
import { SAUDI_DELIVERY_ZONES } from '../data/restaurantData';
import { Order } from '../types';

const CheckoutModalContent: React.FC = () => {
  const {
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    deliveryFee,
    calculatedDiscount,
    vatAmount,
    cartTotal,
    formatPrice,
    selectedZoneId,
    setSelectedZoneId,
    currentDeliveryZone,
    placeOrder,
    user,
    selectedReceiptOrder,
    setSelectedReceiptOrder,
    setIsAccountOpen,
    language,
    isRtl,
    t
  } = useRestaurant();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>(
    selectedReceiptOrder ? 'confirmation' : 'details'
  );

  // Form inputs
  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [streetAddress, setStreetAddress] = useState(user.addresses[0]?.street || 'طريق الأمير تركي بن عبد العزيز الأول، فيلا 24');
  const [deliveryDate, setDeliveryDate] = useState('اليوم • Today');
  const [deliverySlot, setDeliverySlot] = useState(language === 'ar' ? 'الفترة المسائية (18:00 - 21:00)' : 'Evening (18:00 - 21:00)');
  const [orderNotes, setOrderNotes] = useState('');

  // Payment inputs (Sandbox Demo Gateway)
  const [selectedMethod, setSelectedMethod] = useState<'mada' | 'apple_pay' | 'card'>('mada');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardholderName, setCardholderName] = useState(user.name);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(selectedReceiptOrder);

  const handleFillDemoMada = () => {
    setSelectedMethod('mada');
    setCardNumber('5888 •••• •••• 1928');
    setCardExpiry('10/28');
    setCardCvc('928');
    setCardholderName(user.name);
  };

  const handleProcessOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const newOrder = placeOrder({
        customerName,
        phone,
        email,
        fulfillmentType,
        deliveryZoneEn: currentDeliveryZone.nameEn,
        deliveryZoneAr: currentDeliveryZone.nameAr,
        deliveryAddress: fulfillmentType === 'delivery' ? `${currentDeliveryZone.nameAr} - ${streetAddress}` : undefined,
        pickupBranchEn: 'Atelier Miral Hittin Flagship, Riyadh',
        pickupBranchAr: 'فرع حطين الرئيسي، الرياض',
        deliveryDate,
        deliverySlotAr: deliverySlot,
        deliverySlotEn: deliverySlot,
        paymentMethod: selectedMethod,
        notes: orderNotes
      });
      setCompletedOrder(newOrder);
      setStep('confirmation');
    }, 1500);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setSelectedReceiptOrder(null);
    setCompletedOrder(null);
    setStep('details');
  };

  const ArrowBackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ArrowNextIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#F7F1E7] border border-[#C8A96B]/50 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EADFCF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#C8A96B]" />
            <h3 className="font-serif text-lg text-[#202D23] font-bold">
              {t.checkoutTitle}
            </h3>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-[#665D52] hover:text-[#202D23] hover:bg-[#F7F1E7]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step indicator */}
        {step !== 'confirmation' && (
          <div className="bg-[#202D23] text-[#F7F1E7] px-6 py-2.5 flex items-center justify-between text-xs font-semibold">
            <div className={`flex items-center gap-1.5 ${step === 'details' ? 'text-[#C8A96B]' : 'text-gray-400'}`}>
              <span className="w-5 h-5 rounded-full bg-[#C8A96B] text-[#202D23] text-[11px] flex items-center justify-center font-bold">1</span>
              <span>{language === 'ar' ? 'بيانات التوصيل' : 'Delivery Details'}</span>
            </div>
            <span className="text-[#33251E]">―</span>
            <div className={`flex items-center gap-1.5 ${step === 'payment' ? 'text-[#C8A96B]' : 'text-gray-400'}`}>
              <span className="w-5 h-5 rounded-full bg-[#C8A96B] text-[#202D23] text-[11px] flex items-center justify-center font-bold">2</span>
              <span>{language === 'ar' ? 'بوابة الدفع (مدى)' : 'Payment Gateway'}</span>
            </div>
            <span className="text-[#33251E]">―</span>
            <div className="flex items-center gap-1.5 text-gray-500">
              <span className="w-5 h-5 rounded-full bg-[#33251E] text-white text-[11px] flex items-center justify-center font-bold">3</span>
              <span>{language === 'ar' ? 'الفاتورة والتأكيد' : 'Tax Receipt'}</span>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: DETAILS & FULFILLMENT */}
          {step === 'details' && (
            <div className="space-y-5">
              
              {/* Method choice */}
              <div>
                <label className="text-xs uppercase font-bold text-[#8F8172] block mb-2">
                  {t.fulfillmentMethod}:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setFulfillmentType('delivery')}
                    className={`p-3.5 rounded-2xl border text-start flex items-start gap-3 transition-all ${
                      fulfillmentType === 'delivery'
                        ? 'border-[#C8A96B] bg-[#202D23] text-white shadow-md ring-2 ring-[#C8A96B]/30'
                        : 'border-[#EADFCF] bg-white hover:bg-[#F7F1E7]'
                    }`}
                  >
                    <MapPin className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{t.chilledDelivery}</div>
                      <div className="text-[11px] opacity-80 mt-0.5">
                        {language === 'ar' ? 'سيارات مبردة بدرجة 4 مئوية مخصصة للرياض' : 'Dedicated refrigerated 4°C vehicles in Riyadh'}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setFulfillmentType('pickup')}
                    className={`p-3.5 rounded-2xl border text-start flex items-start gap-3 transition-all ${
                      fulfillmentType === 'pickup'
                        ? 'border-[#C8A96B] bg-[#202D23] text-white shadow-md ring-2 ring-[#C8A96B]/30'
                        : 'border-[#EADFCF] bg-white hover:bg-[#F7F1E7]'
                    }`}
                  >
                    <Clock className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{t.boutiquePickup}</div>
                      <div className="text-[11px] opacity-80 mt-0.5">
                        {language === 'ar' ? 'طريق الأمير تركي بن عبد العزيز الأول' : 'Prince Turki Al Awwal Rd, Riyadh'}
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#202D23] border-b border-[#F7F1E7] pb-2">
                  {language === 'ar' ? 'معلومات العميل والتواصل' : 'Customer Contact Details'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[#8F8172] block mb-1">{t.customerName}</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>
                  <div>
                    <label className="text-[#8F8172] block mb-1">{t.mobileNumber}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[#8F8172] block mb-1">{t.emailAddress}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address or Zone */}
              {fulfillmentType === 'delivery' && (
                <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] space-y-3">
                  <h4 className="font-serif text-sm font-bold text-[#202D23] border-b border-[#F7F1E7] pb-2">
                    {language === 'ar' ? 'عنوان التوصيل بالرياض' : 'Riyadh Delivery Address'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="text-[#8F8172] block mb-1">{t.deliveryZone}</label>
                      <select
                        value={selectedZoneId}
                        onChange={e => setSelectedZoneId(e.target.value)}
                        className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                      >
                        {SAUDI_DELIVERY_ZONES.map(z => (
                          <option key={z.id} value={z.id}>
                            {language === 'ar' ? z.nameAr : z.nameEn} ({z.fee} {t.currencySar})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-[#8F8172] block mb-1">{t.streetAddress}</label>
                      <input
                        type="text"
                        value={streetAddress}
                        onChange={e => setStreetAddress(e.target.value)}
                        placeholder="اسم الشارع، رقم الفيلا، رقم المبنى..."
                        className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Timing */}
              <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] space-y-3 text-xs">
                <h4 className="font-serif text-sm font-bold text-[#202D23] border-b border-[#F7F1E7] pb-2">
                  {t.deliveryTime}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'تاريخ التوصيل / الاستلام:' : 'Date:'}</label>
                    <select
                      value={deliveryDate}
                      onChange={e => setDeliveryDate(e.target.value)}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2"
                    >
                      <option value="اليوم • Today">{language === 'ar' ? 'اليوم (تجهيز فوري)' : 'Today (Fresh Bake)'}</option>
                      <option value="غداً • Tomorrow">{language === 'ar' ? 'غداً (صباحاً)' : 'Tomorrow (Morning)'}</option>
                      <option value="حجز نهاية الأسبوع">{language === 'ar' ? 'حجز نهاية الأسبوع' : 'Weekend Reservation'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[#8F8172] block mb-1">{language === 'ar' ? 'الفترة الزمنية:' : 'Time Slot:'}</label>
                    <select
                      value={deliverySlot}
                      onChange={e => setDeliverySlot(e.target.value)}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2"
                    >
                      <option value="الفترة الأولى (12:00 - 15:00)">{language === 'ar' ? 'الفترة الأولى (12:00 - 15:00)' : 'Lunch (12:00 - 15:00)'}</option>
                      <option value="الفترة المسائية (18:00 - 21:00)">{language === 'ar' ? 'الفترة المسائية (18:00 - 21:00)' : 'Dinner (18:00 - 21:00)'}</option>
                      <option value="فترة السهرة (21:30 - 00:30)">{language === 'ar' ? 'فترة السهرة (21:30 - 00:30)' : 'Late Evening (21:30 - 00:30)'}</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* STEP 2: PAYMENT GATEWAY (MADA / APPLE PAY / CARD) */}
          {step === 'payment' && (
            <div className="space-y-6">
              
              {/* CLEAR VISUAL DISTINCTION AS REQUIRED BY PROMPT */}
              <div className="bg-[#202D23] text-[#F7F1E7] border-2 border-[#C8A96B] rounded-2xl p-4 text-xs space-y-1.5 shadow-md">
                <div className="flex items-center gap-2 font-bold text-sm text-[#DFC89B]">
                  <AlertCircle className="w-5 h-5 text-[#C8A96B]" />
                  <span>{t.sandboxNoticeTitle}</span>
                </div>
                <p className="text-[11px] text-[#D0C4B4] leading-relaxed">
                  {t.sandboxNoticeDesc}
                </p>
                <div className="pt-1">
                  <button
                    onClick={handleFillDemoMada}
                    className="bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm"
                  >
                    {t.autoFillDemoCard}
                  </button>
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => setSelectedMethod('mada')}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                    selectedMethod === 'mada'
                      ? 'border-[#C8A96B] bg-[#202D23] text-white shadow-md'
                      : 'border-[#EADFCF] bg-white text-[#202D23] hover:bg-[#F7F1E7]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#C8A96B]" />
                  <span className="font-bold text-xs">{language === 'ar' ? 'مدى (Mada)' : 'Mada Debit'}</span>
                </button>

                <button
                  onClick={() => setSelectedMethod('apple_pay')}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                    selectedMethod === 'apple_pay'
                      ? 'border-[#C8A96B] bg-[#202D23] text-white shadow-md'
                      : 'border-[#EADFCF] bg-white text-[#202D23] hover:bg-[#F7F1E7]'
                  }`}
                >
                  <span className="text-base font-bold">Pay</span>
                  <span className="font-bold text-xs">{language === 'ar' ? 'آبل باي' : 'Apple Pay'}</span>
                </button>

                <button
                  onClick={() => setSelectedMethod('card')}
                  className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                    selectedMethod === 'card'
                      ? 'border-[#C8A96B] bg-[#202D23] text-white shadow-md'
                      : 'border-[#EADFCF] bg-white text-[#202D23] hover:bg-[#F7F1E7]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#C8A96B]" />
                  <span className="font-bold text-xs">Visa / MC</span>
                </button>
              </div>

              {/* Card Form */}
              <div className="bg-white p-5 rounded-2xl border border-[#EADFCF] space-y-3.5 text-xs">
                <div>
                  <label className="text-[#8F8172] block mb-1">{t.cardholderName}</label>
                  <input
                    type="text"
                    value={cardholderName}
                    onChange={e => setCardholderName(e.target.value)}
                    className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>

                <div>
                  <label className="text-[#8F8172] block mb-1">{t.cardNumber}</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    placeholder="5888 •••• •••• 1928"
                    className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] font-mono focus:outline-none focus:border-[#C8A96B]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#8F8172] block mb-1">{t.expiryDate}</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={e => setCardExpiry(e.target.value)}
                      placeholder="10/28"
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] font-mono focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>
                  <div>
                    <label className="text-[#8F8172] block mb-1">{t.cvv}</label>
                    <input
                      type="password"
                      value={cardCvc}
                      onChange={e => setCardCvc(e.target.value)}
                      placeholder="•••"
                      maxLength={4}
                      className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-2 text-[#202D23] font-mono focus:outline-none focus:border-[#C8A96B]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#8F8172]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>{language === 'ar' ? 'تشفير آمن 256 بت بمعايير مدى الوطنية' : '256-bit Mada national gateway security'}</span>
                  </span>
                  <span>Saudi Payments Network</span>
                </div>
              </div>

              {/* Order Total Recap */}
              <div className="bg-[#202D23] text-[#F7F1E7] p-4 rounded-2xl border border-[#33251E] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#A89886]">{t.subtotal}:</span>
                  <span>{formatPrice(cartSubtotal)}</span>
                </div>
                {calculatedDiscount > 0 && (
                  <div className="flex justify-between text-[#C8A96B]">
                    <span>{t.discount}:</span>
                    <span>-{formatPrice(calculatedDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#A89886]">{t.deliveryFee}:</span>
                  <span>{deliveryFee === 0 ? t.complimentary : formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-white pt-2 border-t border-[#33251E]">
                  <span>{t.grandTotal}:</span>
                  <span className="text-xl text-[#C8A96B]">{formatPrice(cartTotal)}</span>
                </div>
                <div className="text-[11px] text-[#DFC89B] pt-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span>
                    {language === 'ar'
                      ? `ستكسب +${Math.floor(cartTotal)} نقطة في نادي ميرال الذهبي عند إتمام هذا الطلب.`
                      : `You will earn +${Math.floor(cartTotal)} loyalty points in Le Cercle Miral.`}
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* STEP 3: ORDER CONFIRMATION & OFFICIAL SAUDI VAT RECEIPT */}
          {step === 'confirmation' && completedOrder && (
            <div className="space-y-6 animate-in zoom-in-95">
              
              <div className="text-center space-y-2 py-2">
                <div className="w-16 h-16 rounded-full bg-[#202D23] text-[#C8A96B] flex items-center justify-center mx-auto shadow-xl border border-[#C8A96B]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#C8A96B] font-bold">
                  {completedOrder.orderNumber}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#202D23] font-bold">
                  {t.receiptTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#665D52] max-w-md mx-auto">
                  {t.receiptSubtitle}
                </p>
              </div>

              {/* Saudi Tax Invoice Card */}
              <div className="bg-white border-2 border-[#C8A96B] rounded-2xl p-6 sm:p-8 shadow-xl relative" id="saudi-tax-invoice">
                <div className="flex items-start justify-between border-b border-[#EADFCF] pb-4">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#202D23]">ATELIER MIRAL • أتيلييه ميرال</h4>
                    <p className="text-[11px] text-[#8F8172]">فاتورة ضريبية مبسطة • Simplified Tax Invoice</p>
                    <p className="text-[10px] text-[#665D52]">الرقم الضريبي: 300948210900003 • VAT: 300948210900003</p>
                  </div>

                  {/* QR Code Placeholder for ZATCA standard */}
                  <div className="w-14 h-14 bg-[#202D23] text-[#C8A96B] rounded-lg p-1.5 flex flex-col items-center justify-center text-center">
                    <QrCode className="w-7 h-7" />
                    <span className="text-[7px] text-[#DFC89B] uppercase font-mono mt-0.5">ZATCA QR</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-b border-[#EADFCF] text-xs">
                  <div>
                    <span className="text-[#8F8172] block">{language === 'ar' ? 'العميل:' : 'Customer:'}</span>
                    <span className="font-bold text-[#202D23]">{completedOrder.customerName}</span>
                    <div className="text-[11px] text-[#665D52] mt-0.5">{completedOrder.phone}</div>
                  </div>
                  <div>
                    <span className="text-[#8F8172] block">{language === 'ar' ? 'العنوان / الاستلام:' : 'Address / Branch:'}</span>
                    <span className="font-bold text-[#202D23]">
                      {completedOrder.fulfillmentType === 'delivery' ? completedOrder.deliveryZoneAr || completedOrder.deliveryZoneEn : completedOrder.pickupBranchAr}
                    </span>
                    <div className="text-[11px] text-[#665D52] mt-0.5">{completedOrder.deliverySlotAr}</div>
                  </div>
                </div>

                {/* Items */}
                <div className="py-4 border-b border-[#EADFCF] space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#8F8172] block">
                    {language === 'ar' ? 'الأطباق والحلويات المحضرة:' : 'Ordered Items:'}
                  </span>
                  {completedOrder.items.map((it, idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <div className="max-w-[75%]">
                        <span className="font-bold text-[#202D23]">{it.quantity}x {language === 'ar' ? it.product.nameAr : it.product.nameEn}</span>
                        {it.selectedVariant && (
                          <span className="text-[11px] text-[#C8A96B] block">
                            {language === 'ar' ? it.selectedVariant.nameAr : it.selectedVariant.nameEn}
                          </span>
                        )}
                        {it.customCakeMessage && (
                          <span className="text-[10px] text-gray-500 italic block">
                            {language === 'ar' ? `إهداء: "${it.customCakeMessage}"` : `Inscription: "${it.customCakeMessage}"`}
                          </span>
                        )}
                      </div>
                      <span className="font-serif font-bold text-[#202D23]">
                        {formatPrice((it.selectedVariant ? it.selectedVariant.price : it.product.price) * it.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals & VAT Breakdown */}
                <div className="pt-4 space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#665D52]">
                    <span>{t.subtotal}:</span>
                    <span>{formatPrice(completedOrder.subtotal)}</span>
                  </div>
                  {completedOrder.discount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>{t.discount}:</span>
                      <span>-{formatPrice(completedOrder.discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#665D52]">
                    <span>{t.deliveryFee}:</span>
                    <span>{completedOrder.deliveryFee === 0 ? t.complimentary : formatPrice(completedOrder.deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between text-[#8F8172] text-[11px]">
                    <span>ضريبة القيمة المضافة 15% (VAT 15%):</span>
                    <span>{formatPrice(completedOrder.vatAmount)}</span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-bold text-[#202D23] pt-2 border-t border-[#EADFCF]">
                    <span>{t.grandTotal}:</span>
                    <span className="text-xl text-[#202D23]">{formatPrice(completedOrder.total)}</span>
                  </div>
                </div>

                {/* Loyalty points credit banner */}
                <div className="mt-4 bg-[#202D23] text-[#F7F1E7] border border-[#C8A96B] rounded-xl p-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C8A96B]" />
                    <span>{language === 'ar' ? 'النقاط المكتسبة في نادي ميرال:' : 'Loyalty Points Credited:'}</span>
                  </div>
                  <span className="font-bold text-sm text-[#C8A96B]">+{completedOrder.pointsEarned} pts</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        <div className="p-5 border-t border-[#EADFCF] bg-white flex items-center justify-between gap-3">
          {step === 'details' && (
            <>
              <button
                onClick={handleClose}
                className="px-4 py-2.5 text-xs font-bold text-[#8F8172] hover:text-[#202D23]"
              >
                {language === 'ar' ? 'العودة للسلة' : 'Back to Bag'}
              </button>
              <button
                onClick={() => setStep('payment')}
                className="bg-[#202D23] hover:bg-[#33251E] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all"
              >
                <span>{language === 'ar' ? 'متابعة للدفع الآمن' : 'Proceed to Payment'}</span>
                <ArrowNextIcon className="w-4 h-4 text-[#C8A96B]" />
              </button>
            </>
          )}

          {step === 'payment' && (
            <>
              <button
                onClick={() => setStep('details')}
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#8F8172] hover:text-[#202D23]"
              >
                <ArrowBackIcon className="w-4 h-4" />
                <span>{language === 'ar' ? 'تعديل البيانات' : 'Edit Details'}</span>
              </button>

              <button
                onClick={handleProcessOrder}
                disabled={isProcessing}
                className="bg-[#C8A96B] hover:bg-[#DFC89B] text-[#202D23] px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all"
              >
                {isProcessing ? (
                  <>
                    <Sparkles className="w-4 h-4 text-[#202D23] animate-spin" />
                    <span>{t.processingPayment}</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-[#202D23]" />
                    <span>{t.confirmAndPay} • {formatPrice(cartTotal)}</span>
                  </>
                )}
              </button>
            </>
          )}

          {step === 'confirmation' && (
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 text-xs font-bold border border-[#EADFCF] px-5 py-2.5 rounded-full hover:bg-[#F7F1E7] text-[#202D23]"
              >
                <Printer className="w-4 h-4 text-[#C8A96B]" />
                <span>{t.printReceipt}</span>
              </button>

              <button
                onClick={() => {
                  handleClose();
                  setIsAccountOpen(true);
                }}
                className="bg-[#202D23] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#33251E]"
              >
                {t.viewInAccount} →
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen } = useRestaurant();
  if (!isCheckoutOpen) return null;
  return <CheckoutModalContent />;
};

