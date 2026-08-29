import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { ShieldCheckIcon, EyeIcon } from "../../blocks/icons";
import CurrentStateItem from "./blocks/CurrentStateItem";

export default function Section6InRelationship() {
  const currentStates = [
    "всё тащишь на себе;",
    "чувствуешь, что ваши отношения перестали развиваться;",
    "чувствуешь, что мужчина перестал проявлять инициативу;",
    "устала всё контролировать;",
    "потеряла эмоциональную и чувственную близость;",
    "раздумываешь, уходить или ещё можно всё изменить;",
    "хочешь вернуть притяжение и изменить динамику пары —",
  ];

  const diagnosticQuestions = [
    "Что на самом деле происходит между вами?",
    "Какую роль в этой динамике играешь ты?",
    "Какие глубинные сценарии повторяются?",
    "Что может измениться, если изменить внутреннее состояние?",
  ];

  return (
    <section className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            СОХРАНЕНИЕ И РАЗВИТИЕ СОЮЗА
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Если ты уже в отношениях
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] mb-3 font-bold">
            Тебе не обязательно быть одной, чтобы прийти к нам.
          </p>
          <p className="text-sm sm:text-base text-[#4a4d52] max-w-xl mx-auto leading-relaxed">
            Мы за сохранение семьи и отношений, если ты хочешь развивать этот союз и вывести его на новый уровень.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left Column: Если ты */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between bg-white shadow-sm border border-[#e5e0d5]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#787b80] font-bold block mb-5">
                Если сейчас в паре ты:
              </span>
              <ul className="space-y-3.5">
                {currentStates.map((item, idx) => (
                  <CurrentStateItem key={idx} text={item} />
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e5e0d5]">
              <p className="text-xs uppercase tracking-wider text-[#787b80] mb-2 font-medium">
                мы не будем давать тебе автоматический совет:
              </p>
              <div className="inline-block px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 font-serif-luxury text-lg sm:text-xl font-bold line-through">
                «Уходи»
              </div>
            </div>
          </div>

          {/* Right Column: Мы сначала посмотрим */}
          <div className="lg:col-span-6 glass-card-glow rounded-3xl p-7 sm:p-9 flex flex-col justify-between bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#d4af37]">
                <EyeIcon className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b89628]">
                  Глубинное исследование
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111417] font-bold mb-6">
                Мы сначала посмотрим:
              </h3>
              <div className="space-y-3.5">
                {diagnosticQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#f7f5f2] border border-[#e5e0d5] flex items-center gap-3.5"
                  >
                    <span className="font-serif-luxury text-sm text-[#d4af37] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-[#111417] font-semibold">
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e5e0d5] flex items-center gap-3 text-xs text-[#4a4d52]">
              <ShieldCheckIcon className="w-5 h-5 text-[#d4af37] shrink-0" />
              <span>
                Бережный подход к паре, сохранение эмоциональной безопасности и поиск истинных опор.
              </span>
            </div>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
