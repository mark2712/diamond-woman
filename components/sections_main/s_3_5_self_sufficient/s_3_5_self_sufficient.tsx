import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon, CheckIcon, HeartHandshakeIcon } from "../../blocks/icons";

export default function SectionSelfSufficient() {
  const independentSkills = [
    "Заработать",
    "Решить",
    "Организовать",
    "Начать сначала",
    "Вытащить себя из сложной ситуации",
  ];

  const selfSufficientQualities = [
    { from: "не только отдавать", to: "принимать" },
    { from: "не только контролировать", to: "доверять" },
    { from: "не только действовать", to: "чувствовать" },
    { from: "не только помогать", to: "позволять помогать себе" },
    { from: "не только быть нужной", to: "быть любимой" },
  ];

  return (
    <section id="self-sufficient" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ГРАНИ ЗРЕЛОСТИ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Самостоятельная — ещё не значит самодостаточная
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] italic font-semibold">
            «Ты умеешь всё сама. Но какой ценой?»
          </p>
        </div>

        {/* 2 Comparison Cards (Я сама vs Мне хорошо с собой) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left: Самостоятельность */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between bg-white shadow-sm border border-[#e5e0d5]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#787b80] font-bold block mb-3">
                Ты умеешь сама:
              </span>
              <div className="space-y-2.5 mb-6">
                {independentSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#f7f5f2] border border-[#e5e0d5] flex items-center gap-3 text-xs sm:text-sm text-[#111417] font-medium"
                  >
                    <CheckIcon className="w-4 h-4 text-[#b89628] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e0d5] text-center">
              <p className="text-xs text-[#787b80] uppercase tracking-wider mb-2 font-medium">
                Но это часто позиция:
              </p>
              <div className="inline-block px-5 py-2.5 rounded-2xl bg-[#f7f5f2] border border-[#d4af37]/40 text-[#111417] font-serif-luxury text-base sm:text-lg font-bold">
                «Я всё могу сама»
              </div>
            </div>
          </div>

          {/* Right: Самодостаточность */}
          <div className="lg:col-span-7 glass-card-glow rounded-3xl p-7 sm:p-9 flex flex-col justify-between bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#d4af37]">
                <HeartHandshakeIcon className="w-5 h-5 text-[#b89628]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b89628]">
                  Самодостаточная женщина умеет:
                </span>
              </div>

              <div className="space-y-2.5 mb-6">
                {selfSufficientQualities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#fcfaf7] border border-[#e5e0d5] flex items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <span className="text-[#787b80] font-normal">{item.from} —</span>
                    <span className="text-[#111417] font-bold text-right text-sm sm:text-base text-[#b89628]">
                      {item.to}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e0d5] text-center">
              <p className="text-xs text-[#787b80] uppercase tracking-wider mb-2 font-medium">
                И это рождает состояние:
              </p>
              <div className="inline-block px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#f7f5f2] to-[#fff2b2]/30 border border-[#d4af37] text-[#111417] font-serif-luxury text-base sm:text-lg font-bold shadow-sm">
                «Мне хорошо с собой»
              </div>
            </div>
          </div>
        </div>

        {/* Relieving Truth Callout Box */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/40">
          <div className="w-10 h-10 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
            <SparklesIcon className="w-5 h-5" />
          </div>

          <p className="font-serif-luxury text-lg sm:text-2xl text-[#111417] leading-relaxed mb-3">
            Тебе <span className="text-[#b89628] font-bold">не нужно становиться слабее</span>, чтобы рядом появился сильный мужчина.
          </p>
          <p className="font-serif-luxury text-base sm:text-xl text-[#787b80] italic">
            Но тебе больше не обязательно тащить всё самой.
          </p>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
