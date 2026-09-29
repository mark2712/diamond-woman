"use client";

import React, { useState } from "react";
import { CrossIcon, FlameIcon, CheckIcon, ShieldIcon, PhoneIcon } from "./icons";
import { retreatData } from "../data/retreatData";
import { sendLead } from "@/lib/sendLead";
import { reachGoal } from "@/lib/metrika";

interface ModalRetreatLeadProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: string;
}

export default function ModalRetreatLead({
  isOpen,
  onClose,
  selectedDate = "",
}: ModalRetreatLeadProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [preferredMessenger, setPreferredMessenger] = useState<"Telegram" | "WhatsApp">("Telegram");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    date: selectedDate || "26 октября 2026",
    intention: "",
    consent: true,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await sendLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      country: formData.country,
      date: formData.date,
      intention: `[Связь: ${preferredMessenger}] ${formData.intention}`.trim(),
      source: "Ретрит (модальное окно бронирования даты)",
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      reachGoal("zakaz", {
        form: "retreat_modal_form",
        messenger: preferredMessenger,
      });
    } else {
      setErrorMessage(res.error || "Не удалось отправить заявку. Попробуйте еще раз.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#16181f] via-[#101116] to-[#0a0b0e] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-8 text-[#f2efe9] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.15)] my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1c1e26] text-[#a09e99] hover:text-white hover:bg-[#252834] transition-colors cursor-pointer border border-[#d4af37]/20"
          aria-label="Закрыть"
        >
          <CrossIcon className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e65c00] to-[#F9D423] p-[2px] mx-auto">
              <div className="w-full h-full bg-[#101116] rounded-full flex items-center justify-center text-[#F9D423]">
                <CheckIcon className="w-8 h-8" />
              </div>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f2efe9] font-bold">
              Ваша заявка принята
            </h3>
            <p className="text-sm text-[#b0ada6] leading-relaxed max-w-md mx-auto">
              Координатор пространства свяжется с вами в {preferredMessenger} в течение 24 часов для согласования закрытого собеседования с проводниками.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3.5 rounded-xl bg-[#1c1e26] border border-[#d4af37]/40 text-[#d4af37] font-semibold text-xs tracking-widest uppercase hover:bg-[#d4af37]/10 transition-colors"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e65c00]/15 border border-[#e65c00]/30 text-[#ff8c42] text-[11px] font-semibold uppercase tracking-widest mb-3">
                <FlameIcon className="w-3.5 h-3.5" />
                <span>Предварительный отбор · VIP 4–6 мест</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-wide">
                ЗА ПРЕДЕЛАМИ СИЛЫ
              </h2>
              <p className="text-xs sm:text-sm text-[#a8a59f] mt-1.5 leading-relaxed">
                Заполните анкету для связи и согласования закрытого собеседования с Татьяной Мунтяну или Юрием Бузько.
              </p>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Александр Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0f14] border border-[#2a2c35] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                    Страна / Город *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Россия / Москва"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0f14] border border-[#2a2c35] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                    Номер телефона / логин *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00 или @username"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0f14] border border-[#2a2c35] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0f14] border border-[#2a2c35] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                  Удобный способ связи для координатора *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPreferredMessenger("Telegram");
                      reachGoal("zakaz_telegram", { action: "select_preferred_messenger_modal" });
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      preferredMessenger === "Telegram"
                        ? "bg-[#2AABEE]/20 border-[#2AABEE] text-[#2AABEE]"
                        : "bg-[#0b0c10] border-[#252834] text-[#8c8983] hover:border-[#2AABEE]/50"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                    <span>Telegram</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPreferredMessenger("WhatsApp");
                      reachGoal("whatsapp", { action: "select_preferred_messenger_modal" });
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      preferredMessenger === "WhatsApp"
                        ? "bg-[#25D366]/20 border-[#25D366] text-[#25D366]"
                        : "bg-[#0b0c10] border-[#252834] text-[#8c8983] hover:border-[#25D366]/50"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.53 1.37 5.08L2 22l5.16-1.35a9.88 9.88 0 004.88 1.28h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.14.11-3.69-.95-3.26-1.35-5.35-4.66-5.51-4.88-.16-.22-1.33-1.77-1.33-3.38 0-1.61.84-2.4 1.14-2.73.3-.33.65-.41.87-.41.22 0 .43.01.62.02.2.01.47-.08.73.55.27.65.92 2.25 1 2.41.08.16.13.36.03.57-.11.22-.16.35-.32.55-.16.19-.34.43-.49.58-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.2-.22.84-.98 1.07-1.32.22-.33.45-.27.75-.16.31.11 1.95.92 2.28 1.09.33.16.55.25.63.39.08.13.08.79-.16 1.47z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                  Желаемая дата ретрита
                </label>
                <select
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0e0f14] border border-[#2a2c35] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                >
                  {retreatData.calendar.map((c) => (
                    <option key={c.id} value={c.date} className="bg-[#101116] text-white">
                      {c.date} ({c.statusLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                  С каким главным запросом хотите приехать? (кратко)
                </label>
                <textarea
                  rows={2}
                  placeholder="Перезагрузка, масштабирование, поиск нового вектора, выход из выгорания..."
                  value={formData.intention}
                  onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0e0f14] border border-[#2a2c35] focus:border-[#d4af37] text-white text-sm outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="modal-retreat-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="mt-1 accent-[#d4af37] w-4 h-4 rounded"
                />
                <label htmlFor="modal-retreat-consent" className="text-[11px] text-[#8c8983] leading-relaxed">
                  Я даю согласие на обработку персональных данных в соответствии с{" "}
                  <a href="/privacy-policy.html" target="_blank" className="underline text-[#d4af37]">
                    политикой конфиденциальности
                  </a>{" "}
                  и подтверждаю готовность к звонку/собеседованию.
                </label>
              </div>

              {errorMessage && (
                <div className="p-3 text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e65c00] via-[#F9D423] to-[#e65c00] bg-[length:200%_auto] hover:bg-right text-[#0c0d12] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_25px_rgba(230,92,0,0.4)] cursor-pointer active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку на отбор"}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#6d6b67] pt-1">
                <ShieldIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Полная конфиденциальность и соблюдение NDA</span>
              </div>

              <div className="pt-3 mt-2 border-t border-[#1e202c] text-center">
                <a
                  href="https://t.me/Hypno_light_therapist"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal("zakaz_telegram", { location: "retreat_modal_bottom" })}
                  className="inline-flex items-center gap-1.5 text-xs text-[#2AABEE] hover:underline"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  <span>Или напишите лично в Telegram (@Hypno_light_therapist)</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
