import React from "react";
import DiamondDivider from "./DiamondDivider";
import { EyeIcon, SparklesIcon, InfinityIcon } from "./icons";

export default function InnerWorkSection() {
  const yuriItems = [
    "кого ты выбираешь;",
    "как ведёшь себя с мужчиной;",
    "что терпишь;",
    "где контролируешь;",
    "где отказываешься от себя;",
    "какие сценарии повторяешь.",
  ];

  const tatianaItems = [
    "внутренними установками;",
    "убеждениями;",
    "эмоциональными реакциями;",
    "глубинными сценариями;",
    "регрессивными и прогрессивными практиками;",
    "гипнотерапией.",
  ];

  return (
    <section className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            СИНЕРГИЯ ДВУХ ВЗГЛЯДОВ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Что происходит внутри
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] italic">
            Два проводника. Два взгляда. Одна женщина.
          </p>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Col 1: Yuri */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 border-t-[#dde1ff]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#dde1ff]/10 border border-[#dde1ff]/40 flex items-center justify-center text-[#dde1ff]">
                  <EyeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl text-white font-bold tracking-wide">
                    ЮРИЙ
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#dde1ff]">
                    Поведение и паттерны отношений
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8f9194] mb-4">
                Отслеживает поведение и паттерны отношений:
              </p>

              <ul className="space-y-3">
                {yuriItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#e1e2e7]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#dde1ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 2: Tatiana */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 border-t-[#e9c349]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 flex items-center justify-center text-[#e9c349]">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl text-white font-bold tracking-wide">
                    ТАТЬЯНА
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#e9c349]">
                    Подсознательные процессы и гипнотерапия
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8f9194] mb-4">
                Работает с подсознательными и бессознательными процессами:
              </p>

              <ul className="space-y-3">
                {tatianaItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#e1e2e7]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e9c349]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Synergy Result Box */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border-white/20">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-[#e9c349]">
            <InfinityIcon className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-2">
            ВМЕСТЕ
          </span>
          <h3 className="font-serif-luxury text-xl sm:text-3xl text-white font-bold mb-3">
            Мы смотрим на женщину не с одной стороны.
          </h3>
          <p className="font-serif-luxury text-base sm:text-xl text-[#ffe088] italic">
            «Мы исследуем, что создаёт её нынешнюю реальность.»
          </p>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
