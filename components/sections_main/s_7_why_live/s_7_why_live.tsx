import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon } from "../../blocks/icons";
import FieldPillarCard, { FieldPillarItem } from "./blocks/FieldPillarCard";

export default function Section7WhyLive() {
  const dynamicChanges = [
    "Новый вопрос.",
    "Новая ситуация.",
    "Новая эмоция.",
    "Новый инсайт.",
  ];

  const fieldPillars: FieldPillarItem[] = [
    { title: "Живые диагностики", desc: "персонализированный разбор текущего состояния и сценария" },
    { title: "Живая гипнотерапия", desc: "глубокая работа с подсознательными установками и сценариями" },
    { title: "Живые разборы", desc: "прямая обратная связь и работа с реальными ситуациями" },
    { title: "Живое присутствие", desc: "внимание, поддержка и опыт Татьяны Мунтяну и Юрия Бузько" },
  ];

  return (
    <section className="relative w-full py-24 px-5 sm:px-8 z-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* BLOCK: Почему записанный курс не может дать этой глубины */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ЖИВОЙ ФОРМАТ ПРОТИВ ЗАПИСЕЙ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Почему записанный курс не может дать этой глубины?
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] italic font-semibold">
            «Потому что твоя жизненная ситуация не записана заранее.»
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 max-w-3xl mx-auto text-center bg-white shadow-sm border border-[#e5e0d5]">
          <p className="text-sm sm:text-base text-[#787b80] mb-3">
            Видео в записи было снято когда-то.
          </p>
          <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111417] font-bold mb-6">
            А сегодня в твоей жизни происходит реальный процесс:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {dynamicChanges.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f7f5f2] border border-[#e5e0d5] text-xs sm:text-sm text-[#111417] font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#e5e0d5]">
            <p className="text-sm sm:text-base text-[#4a4d52] mb-2 font-medium">Каждая женщина уникальна.</p>
            <p className="text-xs sm:text-sm text-[#787b80] mb-4">Поэтому ей нужна не только сухая информация.</p>
            <div className="inline-block px-6 py-3 rounded-full bg-[#f7f5f2] border border-[#d4af37]/50 text-[#b89628] font-serif-luxury text-base sm:text-lg font-bold tracking-wide shadow-sm">
              Ей нужна обратная связь именно в тот момент, когда начинают происходить изменения.
            </div>
          </div>
        </div>

        {/* BLOCK: Сила живого присутствия */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold">
              КЛЮЧЕВОЕ ОТЛИЧИЕ
            </span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold mb-4">
            Сила живого присутствия проводников
          </h3>
          <p className="text-sm sm:text-base text-[#4a4d52] leading-relaxed max-w-2xl mx-auto">
            Есть внутренняя работа, которую невозможно передать записью.
            <br />
            Когда мы встречаемся с женщиной вживую, происходит глубокая сонастройка, точечная диагностика и прямая трансформация в моменте.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {fieldPillars.map((item, idx) => (
            <FieldPillarCard key={idx} item={item} />
          ))}
        </div>

        {/* Closing Note */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#787b80] italic font-serif-luxury">
            «Именно поэтому мы не превращаем этот проект в библиотеку мёртвых записанных видео.»
          </p>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
