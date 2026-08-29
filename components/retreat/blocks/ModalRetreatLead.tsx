"use client";

import React, { useState } from "react";
import { CrossIcon, FlameIcon, CheckIcon, ShieldIcon, PhoneIcon } from "./icons";
import { retreatData } from "../data/retreatData";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    date: selectedDate || "26 сентября 2026",
    intention: "",
    consent: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              Координатор пространства свяжется с вами по указанному телефону (WhatsApp / звонок) в течение 24 часов для согласования закрытого собеседования с проводниками.
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
                Заполните анкету для связи по телефону и согласования закрытого собеседования с Татьяной Мунтяну или Юрием Бузько.
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
                    Номер телефона (WhatsApp / звонок) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
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

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e65c00] via-[#F9D423] to-[#e65c00] bg-[length:200%_auto] hover:bg-right text-[#0c0d12] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_25px_rgba(230,92,0,0.4)] cursor-pointer active:scale-[0.99]"
              >
                Отправить заявку на отбор
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#6d6b67] pt-1">
                <ShieldIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Полная конфиденциальность и соблюдение NDA</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
