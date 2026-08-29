"use client";

import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import { FlameIcon, ShieldIcon, CheckIcon } from "../../blocks/icons";

export default function SectionApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    date: "26 сентября 2026",
    intention: "",
    consent: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="application" className="py-24 sm:py-32 bg-[#060709] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff7b25] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              <FlameIcon className="w-3.5 h-3.5" />
              <span>Предварительный отбор</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Подать заявку на участие
            </h2>
            <p className="text-sm sm:text-base text-[#a8a59f] max-w-lg mx-auto">
              Количество мест в каждой группе строго ограничено (4–6 участников). Укажите ваш телефон для связи координатора и назначения личного собеседования с Татьяной или Юрием.
            </p>
          </div>

          {/* Card Container */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#13151f] via-[#0f1016] to-[#0a0b0e] border border-[#d4af37]/30 shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e65c00] to-[#F9D423] p-[2px] mx-auto">
                  <div className="w-full h-full bg-[#101116] rounded-full flex items-center justify-center text-[#F9D423]">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                  Заявка успешно отправлена
                </h3>
                <p className="text-sm text-[#a8a59f] leading-relaxed max-w-md mx-auto">
                  Координатор пространства свяжется с вами по указанному номеру телефона (WhatsApp / звонок) в течение 24 часов для выбора удобного времени закрытого собеседования.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                        Имя и Фамилия *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Александр Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0b0c10] border border-[#252834] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                        Страна / Город проживания *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Швейцария / Цюрих"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0b0c10] border border-[#252834] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                        Номер телефона (WhatsApp / звонок) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0b0c10] border border-[#252834] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                        Email для материалов подготовки
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0b0c10] border border-[#252834] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                      Желаемая дата ретрита
                    </label>
                    <select
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0b0c10] border border-[#252834] focus:border-[#d4af37] text-white text-sm outline-none transition-colors"
                    >
                      {retreatData.calendar.map((c) => (
                        <option key={c.id} value={c.date} className="bg-[#101116] text-white">
                          {c.date} ({c.statusLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#9f9c96] mb-1.5 font-medium">
                      С каким запросом хотите приехать? (кратко)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Масштабирование бизнеса, преодоление выгорания, поиск глубинного смысла, восстановление личной силы..."
                      value={formData.intention}
                      onChange={(e) => setFormData({ ...formData, intention: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0b0c10] border border-[#252834] focus:border-[#d4af37] text-white text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="retreat-consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      required
                      className="mt-1 accent-[#d4af37] w-4 h-4 rounded"
                    />
                    <label htmlFor="retreat-consent" className="text-xs text-[#8c8983] leading-relaxed">
                      Я даю согласие на обработку персональных данных в соответствии с{" "}
                      <a href="/privacy-policy.html" target="_blank" className="underline text-[#d4af37]">
                        политикой конфиденциальности
                      </a>{" "}
                      и подтверждаю готовность к звонку/собеседованию.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#e65c00] via-[#F9D423] to-[#e65c00] bg-[length:200%_auto] hover:bg-right text-[#0c0d12] font-bold text-sm sm:text-base uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(230,92,0,0.4)] cursor-pointer active:scale-[0.99]"
                  >
                    Оставить заявку и получить подробности
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#6d6b67] pt-2">
                    <ShieldIcon className="w-4 h-4 text-[#d4af37]" />
                    <span>Участие строго после предварительного отбора. Конфиденциальность гарантирована.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
