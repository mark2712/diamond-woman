import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon } from "../../blocks/icons";
import LoopStepCard, { LoopStep } from "./blocks/LoopStepCard";

export default function Section11AdaptiveProgram() {
  const steps: LoopStep[] = [
    { title: "Вопросы", desc: "ваши живые запросы" },
    { title: "Диагностика", desc: "выявление корня ситуации" },
    { title: "Тема", desc: "фокус внимания группы" },
    { title: "Глубокая работа", desc: "живые практики и сессии" },
    { title: "Интеграция", desc: "закрепление в жизни" },
    { title: "Новые вопросы", desc: "переход на новый уровень" },
  ];

  const processPoints = [
    "Мы слушаем ваши вопросы.",
    "Смотрим ваши процессы.",
    "Видим повторяющиеся темы.",
    "Проводим диагностику.",
    "И из этого рождается следующая глубокая работа.",
  ];

  return (
    <section className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            ЖИВОЕ РАЗВИТИЕ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Программа рождается из вас
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] mb-3 italic">
            «У нас нет программы, написанной на год вперёд. Потому что мы не знаем заранее, с чем придёт женщина.»
          </p>
        </div>

        {/* Process Points */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-14 max-w-3xl mx-auto">
          <div className="space-y-4 mb-8">
            {processPoints.map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#e1e2e7]">
                <div className="w-2 h-2 rounded-full bg-[#e9c349]" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Transformation Loop Ribbon */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194] block mb-4 text-center">
              Цикл непрерывной трансформации:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center">
              {steps.map((step, idx) => (
                <LoopStepCard key={idx} step={step} />
              ))}
            </div>
          </div>
        </div>

        {/* Community Growth Statement */}
        <div className="text-center max-w-xl mx-auto py-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-[#e9c349]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194]">
              Живое поле
            </span>
          </div>
          <h3 className="font-serif-luxury text-xl sm:text-3xl text-white font-semibold">
            Сообщество развивается вместе с женщинами внутри него.
          </h3>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
