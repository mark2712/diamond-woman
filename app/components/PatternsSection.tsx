import React from "react";
import DiamondDivider from "./DiamondDivider";

export default function PatternsSection() {
  const patterns = [
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
    <section id="patterns" className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            Осознание паттернов
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-white font-semibold mb-4 leading-tight">
            «Почему я снова оказалась здесь?»
          </h2>
          <p className="text-base sm:text-lg text-[#e9c349] font-serif-luxury italic mb-3">
            Мужчины могут быть разными. А сценарий — одним и тем же.
          </p>
          <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed">
            Ты можешь быть сильной, успешной, самостоятельной.
            <br />
            Но в отношениях снова происходит что-то знакомое...
          </p>
        </div>

        {/* Pattern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {patterns.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between ${
                item.highlight ? "border-[#e9c349]/40 bg-[#1d2023]/60" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-luxury text-xs text-[#e9c349] font-semibold tracking-widest">
                  {item.number}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>

              <div>
                <h3 className="font-serif-luxury text-lg text-white font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#c5c7c9] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Realization Quote Box */}
        <div className="relative glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#e9c349]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-[#e9c349] to-transparent mb-4" />
            <blockquote className="font-serif-luxury text-lg sm:text-2xl text-white italic font-normal leading-relaxed mb-4">
              «Возможно, дело не только в мужчине.
              <br />
              <span className="text-[#ffe088] not-italic font-medium">
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
