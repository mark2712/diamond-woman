"use client";

import React from "react";
import { FlameIcon, ShieldIcon, CheckIcon } from "../../blocks/icons";

export default function SectionSelectionStages() {
  const stages = [
    {
      step: "01",
      title: "Заявка на сайте",
      time: "1 минута",
      desc: "Заполнение краткой анкеты ниже: контактные данные, удобный мессенджер и предварительный запрос на ретрит.",
    },
    {
      step: "02",
      title: "Связь с координатором",
      time: "В течение 24 часов",
      desc: "Координатор свяжется с вами в Telegram или WhatsApp, ответит на организационные вопросы и подберет удобное время для закрытого созвона.",
    },
    {
      step: "03",
      title: "Личное видео-собеседование",
      time: "30–40 минут",
      desc: "Индивидуальный видеодиалог с Татьяной Мунтяну или Юрием Бузько. Взаимная калибровка ценностей, уточнение запроса и подтверждение готовности к опыту.",
    },
    {
      step: "04",
      title: "Медицинский скрининг",
      time: "Индивидуально",
      desc: "Заполнение расширенной анкеты здоровья. Анализ соматического статуса и медикаментов для гарантии абсолютной безопасности на церемониях.",
    },
    {
      step: "05",
      title: "Бронирование и NDA",
      time: "Камерная группа 4–6 мест",
      desc: "Фиксация вашего персонального места в выбранном заезде и подписание соглашения о полной конфиденциальности.",
    },
    {
      step: "06",
      title: "3 недели подготовки",
      time: "Фундамент глубины",
      desc: "Получение протокола диеты, авторских гипнопрактик для расслабления ума и кристаллизация намерения перед прибытием в Мексику.",
    },
  ];

  return (
    <section id="selection-stages" className="py-20 sm:py-28 bg-[#07080b] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <ShieldIcon className="w-3.5 h-3.5 text-[#ff7b25]" />
            <span>Прозрачность и безопасность</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Как попасть в группу: 6 этапов отбора
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto leading-relaxed">
            Мы не продаем места автоматически. Каждый участник проходит персональный фильтр проводников ради сильнейшего поля группы и вашей личной безопасности.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#13151f] to-[#0c0d12] border border-[#252834] hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d4af37]/10 to-transparent pointer-events-none rounded-bl-full" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-serif text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#e65c00] to-[#F9D423]">
                    {stage.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1b1e2a] border border-[#2e3244] text-[11px] font-medium text-[#d4af37]">
                    {stage.time}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-2.5 group-hover:text-[#F9D423] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#1c1f2b] flex items-center gap-2 text-xs text-[#d4af37]">
                <CheckIcon className="w-4 h-4 text-[#38ef7d]" />
                <span className="text-[11px] uppercase tracking-wider text-[#a09e99]">
                  Этап {idx + 1} из 6
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
