"use client";

import React from "react";
import CtaButton from "../../blocks/CtaButton";
import DiamondDivider from "../../blocks/DiamondDivider";
import { DiamondIcon, SparklesIcon, CheckIcon, ArrowRightIcon } from "../../blocks/icons";

interface DiagnosticSectionProps {
  onOpenModal?: (source: string) => void;
}

export default function Section13Diagnostic({ onOpenModal }: DiagnosticSectionProps) {
  const chainSteps = [
    { title: "УБЕЖДЕНИЕ", desc: "глубинная программа ума" },
    { title: "ЧУВСТВО", desc: "эмоциональный отклик" },
    { title: "СТРАХ", desc: "базовое сопротивление" },
    { title: "РЕАКЦИЯ", desc: "автоматическое поведение" },
    { title: "РЕЗУЛЬТАТ", desc: "повторяющийся сценарий" },
  ];

  const first7DaysBenefits = [
    "Начать ясно видеть свой повторяющийся сценарий в отношениях.",
    "Понять, какие глубинные убеждения, чувства и страхи его запускают.",
    "Честно и бережно увидеть свою истинную точку А.",
    "Сформулировать желаемую точку B (образ союза и себя в нём).",
    "Определить понятные направления и следующие шаги дальнейшей работы.",
  ];

  const manifestItems = [
    "Я знаю, кто я.",
    "Я ценна самим фактом своего существования.",
    "Мне больше не нужно заслуживать любовь.",
    "Мне не нужно доказывать свою ценность через мужчину.",
    "Мне хорошо и спокойно с собой.",
    "Я умею выбирать сердцем и разумом.",
    "Я умею принимать любовь, заботу и изобилие.",
    "Я умею доверять себе и миру.",
    "Я могу любить мужчину, не теряя себя.",
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. БЛОК ДИАГНОСТИКИ */}
      <section id="diagnostic" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
              ПЕРСОНАЛЬНЫЙ СТАРТ
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
              Диагностика внутреннего сценария
            </h2>
            <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] mb-3 italic font-bold">
              «Мы не ведём тебя по шаблонному маршруту.»
            </p>
          </div>

          {/* Narrative Box */}
          <div className="glass-card-glow rounded-3xl p-8 sm:p-14 max-w-4xl mx-auto mb-16 relative overflow-hidden bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#fff2b2]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-base sm:text-lg text-[#111417] mb-4 leading-relaxed font-light">
                Например, ты приходишь с готовым запросом или портретом «идеального мужчины»...
              </p>

              <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#b89628] font-bold mb-6">
                Но за этим часто скрывается совсем другой внутренний процесс.
              </h3>

              <p className="text-sm sm:text-base text-[#4a4d52] leading-relaxed mb-8">
                В процессе живой диагностики проводники помогают увидеть ключевые повторяющиеся сценарии: куда в действительности уходит твоё внимание и внутренний ресурс, какие бессознательные установки управляют выбором и что требует трансформации в первую очередь.
              </p>

              {/* Chain Steps: Убеждение -> Чувство -> Страх -> Реакция -> Результат */}
              <div className="pt-6 pb-4 mb-8 border-t border-[#e5e0d5]">
                <span className="text-xs uppercase tracking-[0.2em] text-[#787b80] font-bold block mb-5 text-center">
                  Цепочка формирования твоего сценария:
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center">
                  {chainSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-[#fcfaf7] border border-[#e5e0d5] flex flex-col justify-center items-center shadow-sm"
                    >
                      <span className="text-[10px] text-[#b89628] font-bold tracking-wider mb-1">
                        0{idx + 1}
                      </span>
                      <span className="font-serif-luxury text-xs sm:text-sm font-bold text-[#111417] mb-1">
                        {step.title}
                      </span>
                      <span className="text-[10px] text-[#787b80] leading-tight">
                        {step.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CtaButton
                  actionType="TRY_7_DAYS"
                  variant="primary"
                  size="lg"
                  label="Пройти диагностику в первые 7 дней"
                  modalSource="Секция Диагностика"
                  onOpenModal={onOpenModal}
                />
              </div>
            </div>
          </div>

          <DiamondDivider />
        </div>
      </section>

      {/* 2. БЛОК: ЧТО ДАДУТ ТЕБЕ ПЕРВЫЕ 7 ДНЕЙ (Пункт 16 ТЗ) */}
      <section id="first-7-days" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
              ПРОЗРАЧНЫЙ СТАРТ
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
              Что дадут тебе первые 7 дней?
            </h2>
            <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] italic font-bold">
              «Тебе не нужно сразу принимать решение надолго. Сначала попробуй.»
            </p>
          </div>

          <div className="glass-card-glow rounded-3xl p-8 sm:p-14 max-w-4xl mx-auto bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/30 mb-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#787b80] font-bold block mb-2">
                Наша главная задача за первые 7 дней — дать тебе:
              </span>
              <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-[#fbf9f5] via-[#fff2b2]/40 to-[#fbf9f5] border border-[#d4af37] text-2xl sm:text-3xl font-serif-luxury font-bold text-[#111417] tracking-widest shadow-sm">
                ЯСНОСТЬ
              </div>
            </div>

            <div className="space-y-3.5 mb-10 max-w-2xl mx-auto">
              {first7DaysBenefits.map((text, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f7f5f2] border border-[#e5e0d5] flex items-center gap-3.5 text-xs sm:text-sm text-[#111417] font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-[#b89628]" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-6 border-t border-[#e5e0d5]">
              <p className="text-sm sm:text-base text-[#4a4d52] mb-6 font-light">
                Ты не обязана верить нам на слово. Зайди и посмотри, что эта живая работа откроет именно тебе.
              </p>
              <CtaButton
                actionType="TRY_7_DAYS"
                variant="primary"
                size="xl"
                label="Попробовать 7 дней"
                subLabel="Доступ к живому пространству"
                modalSource="Блок Первые 7 дней"
                onOpenModal={onOpenModal}
              />
            </div>
          </div>

          <DiamondDivider />
        </div>
      </section>

      {/* 3. ФИНАЛЬНЫЙ ЭКРАН / МАНИФЕСТ ЖЕНЩИНЫ-БРИЛЛИАНТА (Пункт 19 ТЗ) */}
      <section className="relative w-full py-28 px-5 sm:px-8 z-10 bg-white text-center overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-[900px] mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mb-6 text-[#d4af37] shadow-sm">
            <DiamondIcon className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            МАНИФЕСТ САМОЦЕННОСТИ
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#111417] font-bold mb-4 leading-tight">
            БУДЬ ЖЕНЩИНОЙ-БРИЛЛИАНТОМ
          </h2>

          <p className="font-serif-luxury text-lg sm:text-2xl text-[#787b80] italic mb-10 max-w-2xl">
            «Не потому, что мужчина признал твою ценность.
            <br />
            <span className="text-[#111417] not-italic font-bold">
              А потому, что ты знаешь её сама.»
            </span>
          </p>

          {/* Manifest Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12 w-full max-w-3xl text-left">
            {manifestItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#fcfaf7] border border-[#e5e0d5] flex items-center gap-3 text-xs sm:text-sm text-[#111417] font-medium shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#d4af37] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#787b80] mb-2 font-bold">
              Главный вывод:
            </p>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold">
              Самая важная встреча в твоей жизни —{" "}
              <span className="text-[#b89628] italic">встреча с собой</span>.
            </h3>
          </div>

          <CtaButton
            actionType="TRY_7_DAYS"
            variant="primary"
            size="xl"
            label="Попробовать 7 дней"
            subLabel="Начать соприкосновение с собой"
            modalSource="Финальный экран (Манифест)"
            onOpenModal={onOpenModal}
          />
        </div>
      </section>
    </div>
  );
}
