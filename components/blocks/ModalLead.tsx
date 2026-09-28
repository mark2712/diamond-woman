"use client";

import React, { useState } from "react";
import { CrossIcon, DiamondIcon, TelegramIcon, CheckIcon, SparklesIcon, ArrowRightIcon } from "./icons";
import { siteData } from "@/data/data";
import { sendLead } from "@/lib/sendLead";

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
  const [showManualForm, setShowManualForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await sendLead({
      name,
      contact,
      comment,
      source: `Diamond Woman: ${source} (${title})`,
    });

    setIsSubmitting(false);

    if (res.success) {
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
    } else {
      setErrorMessage(res.error || "Не удалось отправить заявку. Попробуйте еще раз.");
    }
  };

  const handleTelegramDirect = () => {
    const tgUrl = siteData.footer.contacts.telegramUrl || "https://t.me/Hypno_light_therapist";
    window.open(tgUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleReset = () => {
    setShowManualForm(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity">
      <div className="fixed inset-0" onClick={handleReset} />

      <div className="relative w-full max-w-lg bg-white border border-[#d4af37]/40 rounded-3xl p-6 sm:p-9 shadow-[0_25px_70px_rgba(17,20,23,0.25)] z-10 overflow-hidden text-[#111417] max-h-[90vh] overflow-y-auto">
        {/* Decorative ambient glows */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#fff2b2]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          type="button"
          aria-label="Закрыть модальное окно"
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#f7f5f2] hover:bg-[#eae6de] text-[#787b80] hover:text-[#111417] transition-all cursor-pointer z-20 border border-[#e5e0d5]"
        >
          <CrossIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center mb-6 text-[#b89628]">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#111417] mb-3 font-bold">
              Благодарим за доверие
            </h3>
            <p className="text-[#4a4d52] text-sm sm:text-base max-w-sm mb-6 leading-relaxed">
              Ваша заявка успешно принята. Мы свяжемся с вами в ближайшее время для подключения к пространству.
            </p>
            <button
              onClick={handleReset}
              type="button"
              className="px-8 py-3.5 rounded-full bg-[#111417] text-white font-bold uppercase tracking-[0.15em] text-xs hover:bg-[#b89628] transition-all cursor-pointer shadow-md"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div className="relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 mb-3">
              <DiamondIcon className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#b89628] font-bold">
                ЖЕНЩИНА-БРИЛЛИАНТ
              </span>
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111417] mb-2 leading-tight font-bold">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-[#4a4d52] mb-6 leading-relaxed">
              Выберите удобный для вас способ входа в пространство:
            </p>

            {/* TWO EQUALLY SOLID & PROMINENT ACTION BUTTONS */}
            <div className="space-y-3.5 mb-6">
              {/* 1. TELEGRAM BUTTON (Primary) */}
              <button
                type="button"
                onClick={handleTelegramDirect}
                className="w-full p-4 sm:p-5 rounded-2xl bg-[#2AABEE] hover:bg-[#229ed9] text-white font-bold flex items-center justify-between gap-4 transition-all transform active:scale-[0.99] cursor-pointer shadow-[0_6px_22px_rgba(42,171,238,0.35)] border border-[#2AABEE] text-left group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <TelegramIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold uppercase tracking-wider text-xs sm:text-sm text-white">
                      НАПИСАТЬ В TELEGRAM
                    </div>
                    <div className="text-[11px] sm:text-xs font-normal text-white/90">
                      Прямой контакт: @Hypno_light_therapist
                    </div>
                  </div>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              {/* 2. MANUAL FORM BUTTON (Equal visual weight, luxury gold style) */}
              <button
                type="button"
                onClick={() => setShowManualForm(!showManualForm)}
                className={`w-full p-4 sm:p-5 rounded-2xl border-2 transition-all transform active:scale-[0.99] cursor-pointer text-left flex items-center justify-between gap-4 group ${showManualForm
                    ? "bg-[#fffdfa] border-[#d4af37] shadow-[0_6px_22px_rgba(212,175,55,0.25)]"
                    : "bg-[#fcfaf7] hover:bg-[#f7f5f2] border-[#d4af37]/60 hover:border-[#d4af37] shadow-sm"
                  }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <SparklesIcon className="w-5 h-5 text-[#b89628]" />
                  </div>
                  <div>
                    <div className="font-extrabold uppercase tracking-wider text-xs sm:text-sm text-[#111417]">
                      ОСТАВИТЬ ЗАЯВКУ НА САЙТЕ
                    </div>
                    <div className="text-[11px] sm:text-xs font-normal text-[#787b80]">
                      {showManualForm ? "Скрыть форму ввода" : "Если у вас не установлен Telegram"}
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-colors shrink-0 ${showManualForm
                    ? "bg-[#d4af37] text-white border-[#d4af37]"
                    : "bg-white text-[#b89628] border-[#d4af37]/40 group-hover:border-[#d4af37]"
                  }`}>
                  {showManualForm ? "Свернуть" : "Открыть"}
                </span>
              </button>
            </div>

            {/* EXPANDABLE FORM */}
            {showManualForm && (
              <div className="p-5 rounded-2xl bg-[#fcfaf7] border border-[#e5e0d5] mb-4 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#111417] font-bold">
                    Заполните контакты:
                  </span>
                  <span className="text-[10px] text-[#787b80]">
                    Мы свяжемся с вами
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#4a4d52] mb-1 font-bold">
                      Ваше Имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Как к вам обращаться?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e5e0d5] text-[#111417] placeholder-[#787b80]/60 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#4a4d52] mb-1 font-bold">
                      Телефон или WhatsApp
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+7 (999) 000-00-00"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e5e0d5] text-[#111417] placeholder-[#787b80]/60 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#4a4d52] mb-1 font-bold">
                      Ваш запрос (по желанию)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Что для вас сейчас важнее всего?"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#e5e0d5] text-[#111417] placeholder-[#787b80]/60 text-xs focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#e6c35c] via-[#ffd978] to-[#d4af37] text-[#1c1400] font-bold text-xs uppercase tracking-[0.15em] shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </button>
                </form>
              </div>
            )}

            {/* Privacy note */}
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
          </div>
        )}
      </div>
    </div>
  );
}
