import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  X, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  ShieldAlert,
  AlertCircle 
} from 'lucide-react';

const WhatsAppModalContent: React.FC = () => {
  const {
    setIsWhatsAppModalOpen,
    whatsAppModalData,
    cart,
    cartSubtotal,
    deliveryFee,
    calculatedDiscount,
    cartTotal,
    formatPrice,
    currentDeliveryZone,
    restaurantWhatsApp,
    user,
    language,
    isRtl
  } = useRestaurant();

  const [customerName, setCustomerName] = useState(user.name);
  const [customerPhone, setCustomerPhone] = useState(user.phone);
  const [deliveryAddress, setDeliveryAddress] = useState(
    user.addresses[0] ? `${user.addresses[0].districtAr || user.addresses[0].districtEn} - ${user.addresses[0].street}` : 'الرياض - حي حطين'
  );
  const [preferredTime, setPreferredTime] = useState('اليوم • الفترة المسائية (18:00 - 21:00)');
  const [copied, setCopied] = useState(false);

  const orderRef = `AM-WA-${Math.floor(10000 + Math.random() * 90000)}`;

  let generatedText = '';

  if (whatsAppModalData.mode === 'product' && whatsAppModalData.product) {
    const prod = whatsAppModalData.product;
    const qty = whatsAppModalData.quantity || 1;
    const variantStr = whatsAppModalData.variant ? ` (${whatsAppModalData.variant.nameAr} / ${whatsAppModalData.variant.nameEn})` : '';
    const customMsgStr = whatsAppModalData.customMessage ? `\n✍️ *الإهداء / Inscription:* "${whatsAppModalData.customMessage}"` : '';
    const itemTotal = (whatsAppModalData.variant ? whatsAppModalData.variant.price : prod.price) * qty;

    generatedText = 
`✨ *أتيلييه ميرال • استفسار وطلب طبق* ✨
*ATELIER MIRAL RIYADH*
---------------------------------------
👤 *العميل / Client:* ${customerName}
📞 *الجوال / Phone:* ${customerPhone}
📍 *العنوان / Address:* ${deliveryAddress}
⏰ *الوقت المفضل:* ${preferredTime}

🍽️ *الطلب المحدد / Requested Dish:*
• *${prod.nameAr}* (${prod.nameEn})
• *الكمية:* ${qty}x${variantStr}${customMsgStr}
• *السعر التقديري:* ${formatPrice(itemTotal)}

---------------------------------------
_أرجو تأكيد توفر الطبق ووقت التحضير والتوصيل._`;

  } else {
    // Cart-level message
    const itemsList = cart.map((it, idx) => {
      const vStr = it.selectedVariant ? ` (${it.selectedVariant.nameAr})` : '';
      const cStr = it.customCakeMessage ? ` [إهداء: "${it.customCakeMessage}"]` : '';
      const itPrice = it.selectedVariant ? it.selectedVariant.price : it.product.price;
      return `${idx + 1}. *${it.product.nameAr}* x${it.quantity}${vStr}${cStr} — ${formatPrice(itPrice * it.quantity)}`;
    }).join('\n');

    generatedText = 
`✨ *أتيلييه ميرال • طلب جديد عبر واتساب* ✨
*ATELIER MIRAL RIYADH ORDER*
---------------------------------------
🔖 *رقم المرجع:* ${orderRef}
📌 *الحالة:* قيد المراجعة والتأكيد (Pending confirmation)
🌐 *اللغة:* ${language === 'ar' ? 'العربية' : 'English'}

👤 *العميل / Client:* ${customerName}
📞 *الجوال / Phone:* ${customerPhone}
📍 *منطقة التوصيل بالرياض:* ${currentDeliveryZone.nameAr}
🏡 *العنوان التفصيلي:* ${deliveryAddress}
⏰ *الوقت المفضل:* ${preferredTime}

🍰 *قائمة الأطباق المطلوبة:*
${itemsList}

---------------------------------------
• المجموع الفرعي: ${formatPrice(cartSubtotal)}
${calculatedDiscount > 0 ? `• الخصم المطبق: -${formatPrice(calculatedDiscount)}\n` : ''}• التوصيل المبرد: ${deliveryFee === 0 ? 'مجاني (Complimentary)' : formatPrice(deliveryFee)}
✨ *الإجمالي التقديري:* ${formatPrice(cartTotal)} (شامل 15% ضريبة)
---------------------------------------
_يرجى تأكيد استلام الطلب وتزويدي برابط الدفع أو التأكيد المباشر._`;
  }

  const encodedUrl = `https://wa.me/${restaurantWhatsApp.replace(/\+/g, '')}?text=${encodeURIComponent(generatedText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#F7F1E7] border border-[#C8A96B]/50 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EADFCF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-[#25D366]">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-[#25D366] text-white" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#202D23] font-bold leading-none">
                {language === 'ar' ? 'الطلب الفوري عبر واتساب للفرع' : 'WhatsApp Concierge Ordering'}
              </h3>
              <span className="text-[11px] text-[#665D52]">
                {language === 'ar' ? 'أتيلييه ميرال • فرع حطين بالرياض' : 'Atelier Miral • Hittin Flagship, Riyadh'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsWhatsAppModalOpen(false)}
            className="p-1.5 rounded-full text-[#665D52] hover:text-[#202D23] hover:bg-[#F7F1E7]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {/* Important Notice compliant with prompt */}
          <div className="bg-[#FAF2DF] border border-[#E6D3A3] p-3.5 rounded-2xl flex items-start gap-2.5 text-[#5C420D]">
            <AlertCircle className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              {language === 'ar'
                ? 'ملاحظة: فتح محادثة واتساب لا يُعتبر طلباً مدفوعاً ومؤكداً تلقائياً، بل سيقوم موظف خدمة العملاء بمراجعة تفاصيل طلبك والرد الفوري لتأكيد التحضير والتوصيل.'
                : 'Notice: Opening WhatsApp does not immediately confirm a paid order. Our concierge will review your message and reply promptly to confirm preparation and delivery.'}
            </p>
          </div>

          {/* Customer Delivery Details */}
          <div className="bg-white p-4 rounded-2xl border border-[#EADFCF] space-y-3">
            <h4 className="font-serif text-xs font-bold text-[#202D23] uppercase tracking-wider">
              {language === 'ar' ? 'بيانات التوصيل الخاصة بك:' : 'Your Contact & Delivery Information:'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-[#8F8172] block mb-1">
                  {language === 'ar' ? 'الاسم الكامل:' : 'Full Name:'}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5 text-xs text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                />
              </div>

              <div>
                <label className="text-[11px] text-[#8F8172] block mb-1">
                  {language === 'ar' ? 'رقم الجوال:' : 'Mobile Phone:'}
                </label>
                <input
                  type="text"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5 text-xs text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[11px] text-[#8F8172] block mb-1">
                  {language === 'ar' ? 'العنوان في الرياض:' : 'Riyadh Delivery Address:'}
                </label>
                <input
                  type="text"
                  value={deliveryAddress}
                  onChange={e => setDeliveryAddress(e.target.value)}
                  className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5 text-xs text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[11px] text-[#8F8172] block mb-1">
                  {language === 'ar' ? 'الوقت المفضل للتوصيل:' : 'Preferred Time:'}
                </label>
                <input
                  type="text"
                  value={preferredTime}
                  onChange={e => setPreferredTime(e.target.value)}
                  className="w-full bg-[#F7F1E7] border border-[#EADFCF] rounded-xl px-3 py-1.5 text-xs text-[#202D23] focus:outline-none focus:border-[#C8A96B]"
                />
              </div>
            </div>
          </div>

          {/* Formatted Text Preview */}
          <div>
            <div className="flex items-center justify-between text-xs text-[#202D23] mb-1.5 font-bold">
              <span>{language === 'ar' ? 'نص رسالة الواتساب الجاهزة للإرسال:' : 'Prefilled WhatsApp Message Preview:'}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-[#C8A96B] hover:text-[#202D23] underline text-[11px]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (language === 'ar' ? 'تم النسخ!' : 'Copied!') : (language === 'ar' ? 'نسخ النص' : 'Copy')}</span>
              </button>
            </div>

            <div 
              dir="auto" 
              className="bg-[#1F2C34] text-[#E9EDEF] rounded-2xl p-4 font-mono text-[11px] whitespace-pre-wrap leading-relaxed border border-[#3E4D56] shadow-inner max-h-52 overflow-y-auto"
            >
              {generatedText}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#EADFCF] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2.5 border border-[#EADFCF] text-[#202D23] hover:bg-[#F7F1E7] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (language === 'ar' ? 'تم النسخ للحافظة' : 'Copied') : (language === 'ar' ? 'نسخ الرسالة' : 'Copy Text')}</span>
          </button>

          <a
            href={encodedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{language === 'ar' ? 'فتح المحادثة وإرسال الطلب عبر واتساب' : 'Open WhatsApp & Send Order'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const WhatsAppModal: React.FC = () => {
  const { isWhatsAppModalOpen } = useRestaurant();
  if (!isWhatsAppModalOpen) return null;
  return <WhatsAppModalContent />;
};

