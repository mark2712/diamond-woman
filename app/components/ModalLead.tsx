"use client";

import React, { useState } from "react";
import { CrossIcon, DiamondIcon, TelegramIcon, CheckIcon } from "./icons";
import { siteData } from "../data/data";

interface ModalLeadProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  source?: string;
}

export default function ModalLead({
  isOpen,
  onClose,
  title = "Попробовать 7 дней внутри сообщества",
  source = "Главный экран",
}: ModalLeadProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Диспатч пользовательского события для внешних систем аналитики / CRM
    if (typeof window !== "undefined") {
      try {
        const leadEvent = new CustomEvent("woman-diamond:lead", {
          detail: {
            name,
            contact,
            comment,
            source,
            timestamp: new Date().toISOString(),
          },
        });
        window.dispatchEvent(leadEvent);
      } catch {
        // noop
      }
    }
  };

  const handleTelegramDirect = () => {
    const tgUrl = `${siteData.footer.contacts.telegramUrl}?start=${encodeURIComponent(
      source.slice(0, 32)
    )}`;
    window.open(tgUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      {/* Overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-lg bg-[#191c1f]/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-10 overflow-hidden text-[#e1e2e7]">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#e9c349]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#dde1ff]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-[#c5c7c9] hover:text-white transition-colors cursor-pointer"
        >
          <CrossIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#e9c349]/20 border border-[#e9c349]/50 flex items-center justify-center mb-6 text-[#e9c349]">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white mb-3">
              Благодарим за доверие
            </h3>
            <p className="text-[#c5c7c9] text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
              Ваша заявка принята. Проводники свяжутся с вами в Telegram или WhatsApp для открытия доступа к живому полю.
            </p>
            <button
              onClick={onClose}
              type="button"
              className="px-8 py-3.5 rounded-full bg-white text-[#111417] font-medium uppercase tracking-[0.15em] text-xs hover:bg-[#f5f5f7] transition-all cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <DiamondIcon className="w-4 h-4 text-[#e9c349]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#e9c349] font-medium">
                Пространство трансформации
              </span>
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl text-white mb-2 leading-tight">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-[#c5c7c9] mb-6 leading-relaxed">
              Оставьте контактные данные или перейдите напрямую в Telegram, чтобы начать соприкосновение со своей истинной глубиной.
            </p>

            {/* Быстрый переход в Telegram */}
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left">
                <div className="text-xs font-semibold text-white">Мгновенный старт через Telegram</div>
                <div className="text-[11px] text-[#c5c7c9]">Без ожидания ответа оператора</div>
              </div>
              <button
                type="button"
                onClick={handleTelegramDirect}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#2AABEE]/20 hover:bg-[#2AABEE]/30 border border-[#2AABEE]/50 text-white text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <TelegramIcon className="w-4 h-4 text-[#2AABEE]" />
                Открыть Telegram
              </button>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="h-[1px] w-full bg-white/10" />
              <span className="absolute px-3 bg-[#191c1f] text-[11px] uppercase tracking-wider text-[#8f9194]">
                или отправьте форму
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#c5c7c9] mb-1.5 font-medium">
                  Ваше Имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Как к вам обращаться?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#e9c349] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#c5c7c9] mb-1.5 font-medium">
                  Телефон или Telegram
                </label>
                <input
                  type="text"
                  required
                  placeholder="+7 (999) 000-00-00 или @username"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#e9c349] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#c5c7c9] mb-1.5 font-medium">
                  Ваш запрос / Вопрос (по желанию)
                </label>
                <textarea
                  rows={2}
                  placeholder="С чем вы хотите поработать?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#e9c349] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-white text-[#111417] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#f5f5f7] shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98] cursor-pointer mt-2"
              >
                Отправить заявку
              </button>

              <div className="text-[10px] text-center text-[#8f9194] leading-normal pt-1">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a
                  href={siteData.footer.links.privacyPolicy}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white"
                >
                  политикой конфиденциальности
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
