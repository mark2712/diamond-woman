import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { ShieldCheckIcon, EyeIcon } from "../../blocks/icons";
import CurrentStateItem from "./blocks/CurrentStateItem";

export default function Section6InRelationship() {
  const currentStates = [
    "всё тащишь на себе;",
    "чувствуешь, что мужчина отстаёт;",
    "устала контролировать;",
    "потеряла близость;",
    "раздумываешь, уходить или оставаться;",
    "хочешь вернуть притяжение;",
    "хочешь изменить динамику пары —",
  ];

  const diagnosticQuestions = [
    "Что происходит между вами?",
    "Какую роль в этой динамике играешь ты?",
    "Какие сценарии повторяются?",
    "Что может измениться?",
  ];

  return (
    <section className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            СОХРАНЕНИЕ И РАЗВИТИЕ СОЮЗА
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Если ты уже в отношениях
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] mb-3">
            Тебе не обязательно быть одинокой.
          </p>
          <p className="text-sm sm:text-base text-[#c5c7c9] max-w-xl mx-auto leading-relaxed">
            Мы за сохранение семьи и отношений, если ты хочешь этот союз развивать.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left Column: Если ты */}
          <div className="lg:col-span-6 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194] font-medium block mb-5">
                Если сейчас в паре:
              </span>
              <ul className="space-y-3.5">
                {currentStates.map((item, idx) => (
                  <CurrentStateItem key={idx} text={item} />
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-[#8f9194] mb-2">
                мы не будем давать тебе автоматический совет:
              </p>
              <div className="inline-block px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 font-serif-luxury text-lg sm:text-xl font-bold line-through">
                «Уходи»
              </div>
            </div>
          </div>

          {/* Right Column: Мы сначала посмотрим */}
          <div className="lg:col-span-6 glass-card-glow rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-[#e9c349]/30">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#e9c349]">
                <EyeIcon className="w-5 h-5" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  Глубинное исследование
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-6">
                Мы сначала посмотрим:
              </h3>
              <div className="space-y-4">
                {diagnosticQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5"
                  >
                    <span className="font-serif-luxury text-sm text-[#e9c349] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium">
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#c5c7c9]">
              <ShieldCheckIcon className="w-5 h-5 text-[#e9c349] shrink-0" />
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
