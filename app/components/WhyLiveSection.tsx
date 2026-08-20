import React from "react";
import DiamondDivider from "./DiamondDivider";
import { SparklesIcon, DiamondIcon } from "./icons";

export default function WhyLiveSection() {
  const dynamicChanges = [
    "Новый вопрос.",
    "Новый конфликт.",
    "Новая эмоция.",
    "Новый инсайт.",
  ];

  const fieldPillars = [
    { title: "Живые эфиры", desc: "прямое взаимодействие и ответы на горячие запросы" },
    { title: "Живые диагностики", desc: "персонализированный разбор текущего состояния" },
    { title: "Гипнотерапия вживую", desc: "глубокая трансформация подсознательных программ" },
    { title: "Живое присутствие", desc: "внимание и поле Татьяны Мунтяну и Юрия Бузько" },
  ];

  return (
    <section className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* BLOCK 7: Почему записанный курс не может дать этой глубины */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            ЖИВОЙ ФОРМАТ ПРОТИВ ЗАПИСЕЙ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Почему записанный курс не может дать этой глубины?
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] italic">
            «Потому что твоя ситуация не записана заранее.»
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 max-w-3xl mx-auto text-center border-white/10">
          <p className="text-sm sm:text-base text-[#8f9194] mb-3">
            Видео было записано вчера.
          </p>
          <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-6">
            А сегодня ты уже другая.
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {dynamicChanges.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#e1e2e7] font-medium"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-[#c5c7c9] mb-2">Каждая женщина уникальна.</p>
            <p className="text-sm text-[#8f9194] mb-4">Поэтому ей нужна не только информация.</p>
            <div className="inline-block px-6 py-3 rounded-full bg-white/10 border border-[#e9c349]/40 text-[#e9c349] font-serif-luxury text-base sm:text-lg font-bold tracking-wide">
              Ей нужна обратная связь в моменте.
            </div>
          </div>
        </div>

        {/* BLOCK 8: Живое поле */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-[#e9c349]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium">
              КЛЮЧЕВОЕ ПРЕИМУЩЕСТВО
            </span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-bold mb-4">
            Живое поле — сила моментального присутствия
          </h3>
          <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed max-w-2xl mx-auto">
            Есть работа, которую невозможно передать записью.
            <br />
            Когда мы встречаемся с женщиной вживую, происходит не только обмен информацией.
            <br />
            Есть <strong className="text-white">живое поле человека и поле проводников</strong>.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {fieldPillars.map((item, idx) => (
            <div
              key={idx}
              className="glass-card-glow rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-[#e9c349]"
            >
              <div className="w-9 h-9 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 flex items-center justify-center mb-4 text-[#e9c349]">
                <DiamondIcon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-lg text-white font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8f9194] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#8f9194] italic font-serif-luxury">
            «Именно поэтому мы не хотим превращать эту работу в библиотеку записанных видео.»
          </p>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
