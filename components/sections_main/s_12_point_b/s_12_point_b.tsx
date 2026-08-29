import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon, HeartHandshakeIcon, DiamondIcon } from "../../blocks/icons";

export default function Section12PointB() {
  const relationshipQuestions = [
    "Какого мужчину я действительно хочу видеть рядом?",
    "Каких отношений и какой глубины близости я хочу?",
    "Как я хочу чувствовать себя рядом с ним?",
    "Какие ценности должны нас по-настоящему объединять?",
  ];

  const selfQuestions = [
    "Как я хочу жить и чем наполнять свои дни?",
    "Что меня по-настоящему зажигает и вдохновляет?",
    "Как я хочу проявляться в социуме и своём деле?",
    "Как я хочу чувствовать своё тело, лёгкость и сексуальность?",
    "Как я хочу зарабатывать и создавать изобилие?",
    "Что для меня теперь является безусловной нормой?",
    "Что я больше никогда не готова принимать в отношении себя?",
  ];

  return (
    <section className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ОБРАЗ ЖЕЛАЕМОГО БУДУЩЕГО
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Точка B
          </h2>
          <p className="text-base sm:text-xl text-[#4a4d52] font-light">
            Мы начинаем с отношений, но ведём тебя гораздо глубже:
          </p>
        </div>

        {/* 2-Part Deep Exploration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Part 1: Отношения */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-9 bg-white shadow-sm border border-[#e5e0d5] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#d4af37]">
                <HeartHandshakeIcon className="w-5 h-5 text-[#b89628]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b89628]">
                  Уровень отношений
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111417] font-bold mb-6">
                Образ союза:
              </h3>
              <div className="space-y-3">
                {relationshipQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#f7f5f2] border border-[#e5e0d5] text-xs sm:text-sm text-[#111417] font-medium leading-snug"
                  >
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Part 2: Внутренняя женщина */}
          <div className="lg:col-span-7 glass-card-glow rounded-3xl p-7 sm:p-9 bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)] border border-[#d4af37]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#d4af37]">
                <DiamondIcon className="w-5 h-5 text-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b89628]">
                  Глубинный уровень
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111417] font-bold mb-2">
                Какой женщиной я хочу быть?
              </h3>
              <p className="text-xs text-[#787b80] mb-5">
                В этих отношениях и во всей своей жизни:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selfQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#fcfaf7] border border-[#e5e0d5] text-xs text-[#111417] font-medium leading-snug"
                  >
                    • {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The Ultimate Point B Definition Callout */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto relative overflow-hidden bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff2b2]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#787b80] block mb-3 font-bold">
              Суть трансформации
            </span>

            <p className="text-sm sm:text-base text-[#787b80] line-through mb-2 font-serif-luxury">
              Точка B — «у меня просто появился мужчина»
            </p>

            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold leading-tight max-w-2xl">
              Точка B —{" "}
              <span className="text-[#b89628] underline decoration-[#d4af37] underline-offset-8">
                «Мне нравится женщина, которой я являюсь»
              </span>
            </h3>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
