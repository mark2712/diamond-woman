import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import PointBQuestionCard from "./blocks/PointBQuestionCard";

export default function Section12PointB() {
  const explorationQuestions = [
    "Какие отношения я действительно хочу?",
    "Какие ценности для меня важны?",
    "Как мы смотрим на жизнь?",
    "Как я хочу себя чувствовать рядом?",
    "Какой я хочу быть в этих отношениях?",
    "Что для меня теперь является нормой?",
    "Что я больше не готова принимать?",
  ];

  return (
    <section className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            НОВАЯ РЕАЛЬНОСТЬ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Точка B
          </h2>
          <p className="text-base sm:text-xl text-[#4a4d52] font-light">
            Мы не просто создаём образ «идеального мужчины».
            <br />
            Мы исследуем глубину:
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 max-w-4xl mx-auto">
          {explorationQuestions.map((q, idx) => (
            <PointBQuestionCard key={idx} question={q} index={idx} />
          ))}
        </div>

        {/* The Ultimate Question Callout */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto relative overflow-hidden bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff2b2]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#787b80] block mb-3 font-bold">
              И главный вопрос:
            </span>

            <h3 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold leading-tight max-w-2xl">
              «Кто такая женщина, которая{" "}
              <span className="text-[#b89628] underline decoration-[#d4af37] underline-offset-8">
                создаёт
              </span>{" "}
              такие отношения?»
            </h3>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
