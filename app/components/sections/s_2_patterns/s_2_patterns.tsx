import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import PatternCard, { PatternItem } from "./blocks/PatternCard";

export default function Section2Patterns() {
  const patterns: PatternItem[] = [
    {
      number: "01",
      title: "Притяжение и разочарование",
      text: "Ты выбираешь мужчину, который сначала сильно притягивает, а потом разочаровывает.",
    },
    {
      number: "02",
      title: "Всё на себе",
      text: "Или всё начинаешь тащить сама, закрывая потребности и забывая о себе.",
    },
    {
      number: "03",
      title: "Заслужить любовь",
      text: "Или пытаешься заслужить любовь через идеальность, уступки и бесконечное терпение.",
    },
    {
      number: "04",
      title: "Тотальный контроль",
      text: "Или контролируешь каждый шаг, потому что опереться на мужчину кажется небезопасным.",
    },
    {
      number: "05",
      title: "Страх открыться",
      text: "Или боишься доверять до конца, держа дистанцию и закрывая сердце от боли.",
    },
    {
      number: "06",
      title: "Вечные сомнения",
      text: "Или находишься в отношениях и постоянно думаешь: «Мне уходить или ещё можно всё изменить?»",
      highlight: true,
    },
  ];

  return (
    <section id="patterns" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            Осознание паттернов
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold mb-4 leading-tight">
            «Почему я снова оказалась здесь?»
          </h2>
          <p className="text-base sm:text-lg text-[#d4af37] font-serif-luxury italic mb-3 font-semibold">
            Мужчины могут быть разными. А сценарий — одним и тем же.
          </p>
          <p className="text-sm sm:text-base text-[#4a4d52] leading-relaxed">
            Ты можешь быть сильной, успешной, самостоятельной.
            <br />
            Но в отношениях снова происходит что-то знакомое...
          </p>
        </div>

        {/* Pattern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {patterns.map((item, idx) => (
            <PatternCard key={idx} item={item} />
          ))}
        </div>

        {/* Deep Realization Quote Box */}
        <div className="relative glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto overflow-hidden bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)]">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#fff2b2]/40 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-[#d4af37] to-transparent mb-4" />
            <blockquote className="font-serif-luxury text-lg sm:text-2xl text-[#111417] italic font-normal leading-relaxed mb-4">
              «Возможно, дело не только в мужчине.
              <br />
              <span className="text-[#b89628] not-italic font-bold">
                Возможно, пришло время посмотреть на то, что происходит внутри тебя.»
              </span>
            </blockquote>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
