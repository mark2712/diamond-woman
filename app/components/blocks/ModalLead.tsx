"use client";

import React, { useState } from "react";
import { CrossIcon, DiamondIcon, TelegramIcon, CheckIcon } from "./icons";
import { siteData } from "../../../data/data";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white border border-[#e5e0d5] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(17,20,23,0.15)] z-10 overflow-hidden text-[#111417]">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fff2b2]/40 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-[#787b80] hover:text-[#111417] transition-colors cursor-pointer"
        >
          <CrossIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-6 text-[#b89628]">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#111417] mb-3">
              Благодарим за доверие
            </h3>
            <p className="text-[#4a4d52] text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
              Ваша заявка принята. Проводники свяжутся с вами в Telegram или WhatsApp для открытия доступа к живому полю.
            </p>
            <button
              onClick={onClose}
              type="button"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e6c35c] via-[#ffd978] to-[#d4af37] text-[#1c1400] font-bold uppercase tracking-[0.15em] text-xs shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DiamondIcon className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#b89628] font-bold">
                Пространство трансформации
              </span>
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111417] mb-2 leading-tight font-bold">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-[#4a4d52] mb-6 leading-relaxed">
              Оставьте контактные данные или перейдите напрямую в Telegram, чтобы начать соприкосновение со своей истинной глубиной.
            </p>

            <div className="mb-6 p-4 rounded-2xl bg-[#f7f5f2] border border-[#e5e0d5] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left">
                <div className="text-xs font-bold text-[#111417]">Мгновенный старт через Telegram</div>
                <div className="text-[11px] text-[#787b80]">Без ожидания ответа оператора</div>
              </div>
              <button
                type="button"
                onClick={handleTelegramDirect}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#2AABEE] text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-[#229ed9] transition-all cursor-pointer shadow-sm"
              >
                <TelegramIcon className="w-4 h-4 text-white" />
                Открыть Telegram
              </button>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="h-[1px] w-full bg-[#e5e0d5]" />
              <span className="absolute px-3 bg-white text-[11px] uppercase tracking-wider text-[#787b80] font-semibold">
                или отправьте форму
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#4a4d52] mb-1 font-bold">
                  Ваше Имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Как к вам обращаться?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f5f2] border border-[#e5e0d5] text-[#111417] placeholder-[#787b80]/60 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#4a4d52] mb-1 font-bold">
                  Телефон или Telegram
                </label>
                <input
                  type="text"
                  required
                  placeholder="+7 (999) 000-00-00 или @username"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f7f5f2] border border-[#e5e0d5] text-[#111417] placeholder-[#787b80]/60 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#4a4d52] mb-1 font-bold">
                  Ваш запрос / Вопрос (по желанию)
                </label>
                <textarea
                  rows={2}
                  placeholder="С чем вы хотите поработать?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f7f5f2] border border-[#e5e0d5] text-[#111417] placeholder-[#787b80]/60 text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#e6c35c] via-[#ffd978] to-[#d4af37] text-[#1c1400] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_6px_28px_rgba(212,175,55,0.45)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.6)] transition-all active:scale-[0.98] cursor-pointer mt-2"
              >
                Отправить заявку
              </button>

              <div className="text-[10px] text-center text-[#787b80] leading-normal pt-1">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a
                  href={siteData.footer.links.privacyPolicy}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[#b89628]"
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
