import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { EyeIcon, SparklesIcon, InfinityIcon } from "../../blocks/icons";
import GuideScopeCard from "./blocks/GuideScopeCard";

export default function Section9InnerWork() {
  const tatianaItems = [
    "глубинные подсознательные сценарии;",
    "убеждения и внутренние запреты;",
    "эмоциональные реакции и травматический опыт;",
    "гипнотерапия и трансформация состояний;",
    "регрессивные и прогрессивные практики;",
    "исцеление связи с родом и душой.",
  ];

  const yuriItems = [
    "паттерны поведения в отношениях;",
    "автоматические реакции и триггеры;",
    "скрытые зоны контроля и тревоги;",
    "выстраивание здоровых личных границ;",
    "критерии осознанного выбора партнёра;",
    "новое поведение и проявление внутри союза.",
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
            title="ТАТЬЯНА"
            subtitle="ГЛУБИНА · ПОДСОЗНАНИЕ"
            desc="Работа с бессознательными процессами и корнями сценария:"
            items={tatianaItems}
            focusQuestion="Откуда начинается этот сценарий?"
            icon={<SparklesIcon className="w-5 h-5" />}
            theme="gold"
          />

          <GuideScopeCard
            title="ЮРИЙ"
            subtitle="ИНТЕГРАЦИЯ · ПАТТЕРНЫ И ДЕЙСТВИЯ"
            desc="Работа с поведением, мужским восприятием и границами:"
            items={yuriItems}
            focusQuestion="Как теперь начать жить и действовать иначе?"
            icon={<EyeIcon className="w-5 h-5" />}
            theme="mist"
          />
        </div>

        {/* Synergy Result Box with TZ Formula */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
            <InfinityIcon className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ОБЪЕДИНЯЮЩАЯ ФОРМУЛА
          </span>
          <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold mb-4 leading-snug">
            Недостаточно понять, почему ты живёшь именно так.
            <br />
            <span className="text-[#b89628]">Нужно научиться жить иначе.</span>
          </h3>

          <div className="pt-6 border-t border-[#e5e0d5] space-y-2 text-sm sm:text-base text-[#4a4d52]">
            <p>
              <strong className="text-[#111417]">Татьяна</strong> помогает трансформировать внутренний сценарий.
            </p>
            <p>
              <strong className="text-[#111417]">Юрий</strong> помогает переносить изменения в реальные отношения и жизнь.
            </p>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
