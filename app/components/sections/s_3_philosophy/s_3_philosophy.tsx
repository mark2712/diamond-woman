import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { CompassIcon } from "../../blocks/icons";
import ContrastCard, { ContrastItem } from "./blocks/ContrastCard";

export default function Section3Philosophy() {
  const contrasts: ContrastItem[] = [
    {
      desire: "Хотеть любви",
      reality: "но жить из глубокого страха отвержения",
    },
    {
      desire: "Хотеть искренней близости",
      reality: "но не позволять себе по-настоящему доверять",
    },
    {
      desire: "Хотеть сильного мужчину",
      reality: "но привыкнуть всё держать под контролем самой",
    },
    {
      desire: "Хотеть, чтобы тебя ценили",
      reality: "но внутри продолжать доказывать свою ценность",
    },
  ];

  return (
    <section id="philosophy" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ГЛАВНАЯ ФИЛОСОФИЯ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-6 leading-tight">
            Мы притягиваем в свою жизнь не то, что хотим умом, а то, кем являемся по своей сути глубоко внутри.
          </h2>
        </div>

        {/* Contrasts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {contrasts.map((item, idx) => (
            <ContrastCard key={idx} item={item} />
          ))}
        </div>

        {/* Paradigm Shift Container */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto relative overflow-hidden bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#fff2b2]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mb-6 text-[#d4af37]">
              <CompassIcon className="w-6 h-6" />
            </div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#787b80] mb-2 font-semibold">
              Поэтому мы не начинаем с вопроса:
            </p>
            <div className="text-base sm:text-xl text-[#787b80] line-through mb-8 font-serif-luxury">
              «Где найти нужного мужчину?»
            </div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#b89628] font-bold mb-3">
              Мы начинаем с другого:
            </p>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold leading-tight max-w-xl">
              «Кто я внутри — и какую реальность создаёт эта женщина?»
            </h3>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
