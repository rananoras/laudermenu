import React, { useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';
import { 
  MessageSquare, 
  X, 
  Send, 
  MessageCircle, 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  Bot
} from 'lucide-react';
import { CHAT_QUICK_REPLIES } from '../data/restaurantData';
import { ChatQuickReply } from '../types';

export const SupportChatWidget: React.FC = () => {
  const { 
    isSupportChatOpen, 
    setIsSupportChatOpen, 
    restaurantWhatsApp, 
    language, 
    isRtl, 
    t 
  } = useRestaurant();

  const [chatLog, setChatLog] = useState<{ sender: 'bot' | 'user'; text: string }[]>([
    {
      sender: 'bot',
      text: t.chatWelcome
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(CHAT_QUICK_REPLIES.map(q => language === 'ar' ? q.categoryAr : q.categoryEn)));

  const handleSelectQuestion = (item: ChatQuickReply) => {
    const qText = language === 'ar' ? item.questionAr : item.questionEn;
    const aText = language === 'ar' ? item.answerAr : item.answerEn;

    setChatLog(prev => [
      ...prev,
      { sender: 'user', text: qText },
      { sender: 'bot', text: aText }
    ]);
  };

  const handleOpenWhatsAppHuman = () => {
    const msg = encodeURIComponent(
      language === 'ar'
        ? 'مرحباً، أود التحدث مع موظف خدمة العملاء في أتيلييه ميرال بالرياض بخصوص استفسار خاص.'
        : 'Hello, I would like to speak directly with an Atelier Miral concierge regarding a private inquiry.'
    );
    window.open(`https://wa.me/${restaurantWhatsApp.replace(/\+/g, '')}?text=${msg}`, '_blank');
  };

  const ArrowIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <>
      {/* Floating Launcher Button */}
      <div className={`fixed bottom-6 z-40 ${isRtl ? 'right-6' : 'left-6'}`}>
        <button
          onClick={() => setIsSupportChatOpen(!isSupportChatOpen)}
          className="flex items-center gap-2.5 bg-[#202D23] hover:bg-[#33251E] text-[#C8A96B] border border-[#C8A96B] px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105"
          aria-label={t.chatTitle}
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#C8A96B]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          </div>
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-white">
            {language === 'ar' ? 'المساعد الفوري' : 'Concierge Chat'}
          </span>
        </button>
      </div>

      {/* Chat Window Dialog */}
      {isSupportChatOpen && (
        <div 
          className={`fixed bottom-22 z-50 w-full max-w-sm sm:max-w-md bg-[#F7F1E7] border border-[#C8A96B] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px] max-h-[80vh] animate-in slide-in-from-bottom-5 ${
            isRtl ? 'right-4 sm:right-6' : 'left-4 sm:left-6'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-[#202D23] text-white flex items-center justify-between border-b border-[#33251E]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C8A96B] text-[#202D23] flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold leading-tight">
                  {t.chatTitle}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{language === 'ar' ? 'متصل الآن • رد فوري' : 'Online • Instant FAQ'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsSupportChatOpen(false)}
              className="p-1 rounded-full text-[#A89886] hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-[#F7F1E7]">
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#202D23] text-[#DFC89B] rounded-br-none'
                      : 'bg-white border border-[#EADFCF] text-[#202D23] rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ Questions Picker */}
          <div className="p-3 bg-white border-t border-[#EADFCF] space-y-2 max-h-48 overflow-y-auto">
            <span className="text-[10px] uppercase font-bold text-[#8F8172] block">
              {t.quickFaqCategories}
            </span>

            <div className="flex flex-col gap-1.5">
              {CHAT_QUICK_REPLIES.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleSelectQuestion(item)}
                  className="w-full text-start p-2 rounded-xl bg-[#F7F1E7] hover:bg-[#FAF2DF] text-xs text-[#202D23] font-medium transition-colors flex items-center justify-between"
                >
                  <span className="truncate">{language === 'ar' ? item.questionAr : item.questionEn}</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-[#C8A96B] shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp Escalation Action */}
          <div className="p-3 bg-[#17211A] text-white flex items-center justify-between gap-2 border-t border-[#33251E]">
            <span className="text-[11px] text-[#C7B7A4]">
              {t.needHumanHelp}
            </span>
            <button
              onClick={handleOpenWhatsAppHuman}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب موظف ميرال</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
