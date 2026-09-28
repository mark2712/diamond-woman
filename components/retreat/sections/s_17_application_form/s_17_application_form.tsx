"use client";

import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import { FlameIcon, ShieldIcon, CheckIcon } from "../../blocks/icons";
import { sendLead } from "@/lib/sendLead";

export default function SectionApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [preferredMessenger, setPreferredMessenger] = useState<"Telegram" | "WhatsApp">("Telegram");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    date: "26 октября 2026",
    intention: "",
    consent: true,
  });

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
      source: "Ретрит (форма отбора на странице)",
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(res.error || "Не удалось отправить заявку. Попробуйте еще раз.");
    }
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
                        Номер телефона / логин *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00 или @username"
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
                      Удобный способ связи для координатора *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPreferredMessenger("Telegram")}
                        className={`py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                          preferredMessenger === "Telegram"
                            ? "bg-[#2AABEE]/20 border-[#2AABEE] text-[#2AABEE]"
                            : "bg-[#0b0c10] border-[#252834] text-[#8c8983] hover:border-[#2AABEE]/50"
                        }`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                        </svg>
                        <span>Telegram</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferredMessenger("WhatsApp")}
                        className={`py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                          preferredMessenger === "WhatsApp"
                            ? "bg-[#25D366]/20 border-[#25D366] text-[#25D366]"
                            : "bg-[#0b0c10] border-[#252834] text-[#8c8983] hover:border-[#25D366]/50"
                        }`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.53 1.37 5.08L2 22l5.16-1.35a9.88 9.88 0 004.88 1.28h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.94 1.33-.5.08-1.14.11-3.69-.95-3.26-1.35-5.35-4.66-5.51-4.88-.16-.22-1.33-1.77-1.33-3.38 0-1.61.84-2.4 1.14-2.73.3-.33.65-.41.87-.41.22 0 .43.01.62.02.2.01.47-.08.73.55.27.65.92 2.25 1 2.41.08.16.13.36.03.57-.11.22-.16.35-.32.55-.16.19-.34.43-.49.58-.16.16-.33.34-.14.67.19.33.84 1.39 1.8 2.25 1.24 1.1 2.28 1.44 2.61 1.6.33.16.52.14.71-.08.2-.22.84-.98 1.07-1.32.22-.33.45-.27.75-.16.31.11 1.95.92 2.28 1.09.33.16.55.25.63.39.08.13.08.79-.16 1.47z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </button>
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

                  {errorMessage && (
                    <div className="p-3 text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#e65c00] via-[#F9D423] to-[#e65c00] bg-[length:200%_auto] hover:bg-right text-[#0c0d12] font-bold text-sm sm:text-base uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(230,92,0,0.4)] cursor-pointer active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Отправка..." : "Оставить заявку и получить подробности"}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#6d6b67] pt-2">
                    <ShieldIcon className="w-4 h-4 text-[#d4af37]" />
                    <span>Участие строго после предварительного отбора. Конфиденциальность гарантирована.</span>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#1c1e28] text-center">
                    <p className="text-xs text-[#a09e99] mb-2.5">
                      Предпочитаете сразу написать в мессенджер?
                    </p>
                    <a
                      href="https://t.me/Hypno_light_therapist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2AABEE]/15 border border-[#2AABEE]/40 text-[#2AABEE] text-xs font-semibold hover:bg-[#2AABEE]/25 transition-all shadow-[0_0_20px_rgba(42,171,238,0.15)]"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                      <span>Написать лично в Telegram (@Hypno_light_therapist)</span>
                    </a>
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
