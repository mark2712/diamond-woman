import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { EyeIcon, SparklesIcon, InfinityIcon } from "../../blocks/icons";
import GuideScopeCard from "./blocks/GuideScopeCard";

export default function Section9InnerWork() {
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
    <section className="relative w-full py-24 px-5 sm:px-8 z-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            СИНЕРГИЯ ДВУХ ВЗГЛЯДОВ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Что происходит внутри
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] italic font-bold">
            Два проводника. Два взгляда. Одна женщина.
          </p>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <GuideScopeCard
            title="ЮРИЙ"
            subtitle="Поведение и паттерны отношений"
            desc="Отслеживает поведение и паттерны отношений:"
            items={yuriItems}
            icon={<EyeIcon className="w-5 h-5" />}
            theme="mist"
          />

          <GuideScopeCard
            title="ТАТЬЯНА"
            subtitle="Подсознательные процессы и гипнотерапия"
            desc="Работает с подсознательными и бессознательными процессами:"
            items={tatianaItems}
            icon={<SparklesIcon className="w-5 h-5" />}
            theme="gold"
          />
        </div>

        {/* Synergy Result Box */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)]">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
            <InfinityIcon className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-2">
            ВМЕСТЕ
          </span>
          <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold mb-3">
            Мы смотрим на женщину не с одной стороны.
          </h3>
          <p className="font-serif-luxury text-base sm:text-xl text-[#b89628] italic font-semibold">
            «Мы исследуем, что создаёт её нынешнюю реальность.»
          </p>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
