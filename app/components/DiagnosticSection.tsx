"use client";

import React from "react";
import CtaButton from "./CtaButton";
import { DiamondIcon, SparklesIcon, EyeIcon } from "./icons";
import { siteData } from "../data/data";

interface DiagnosticSectionProps {
  onOpenModal?: (source: string) => void;
}

export default function DiagnosticSection({ onOpenModal }: DiagnosticSectionProps) {
  return (
    <section id="diagnostic" className="relative w-full py-24 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            ПЕРСОНАЛЬНЫЙ СТАРТ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Диагностика
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] mb-3 italic">
            «Мы не ведём тебя по заранее написанному маршруту.»
          </p>
        </div>

        {/* Narrative Box */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 max-w-3xl mx-auto mb-16 border-[#e9c349]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e9c349]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-base sm:text-lg text-white mb-4 leading-relaxed font-light">
              Например, ты приходишь с готовым портретом «идеального мужчины»...
            </p>

            <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#ffe088] font-semibold mb-6">
              Но… за этим часто скрывается совсем другой внутренний процесс.
            </h3>

            <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed mb-8">
              В процессе персональной диагностики Татьяна и Юрий помогают точно определить, в какой точке ты находишься сейчас: где происходит утечка энергии, какие родовые или бессознательные сценарии управляют выбором и что действительно нужно трансформировать в первую очередь.
            </p>

            {/* Diagnostic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-[#8f9194] block mb-1">
                  Формат
                </span>
                <span className="text-sm font-semibold text-white">
                  Персональный разбор
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-[#8f9194] block mb-1">
                  Длительность
                </span>
                <span className="text-sm font-semibold text-white">
                  Точечный фокус
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs uppercase tracking-wider text-[#8f9194] block mb-1">
                  Результат
                </span>
                <span className="text-sm font-semibold text-white">
                  Ясная карта шагов
                </span>
              </div>
            </div>

            {/* Dual Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CtaButton
                actionType="START_DIAGNOSTIC"
                variant="gold"
                size="lg"
                label="Начать диагностику"
                modalSource="Секция Диагностика (Кнопка 1)"
                onOpenModal={onOpenModal}
              />
              <CtaButton
                actionType="TRY_7_DAYS"
                variant="ghost"
                size="lg"
                label="Попробовать 7 дней"
                modalSource="Секция Диагностика (Кнопка 2)"
                onOpenModal={onOpenModal}
              />
            </div>
          </div>
        </div>

        {/* Final Spiritual Invitation */}
        <div className="text-center max-w-2xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <DiamondIcon className="w-4 h-4 text-[#e9c349]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8f9194]">
              Пространство открыто
            </span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-bold mb-4">
            Готова встретиться с собой настоящей?
          </h3>
          <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed mb-8">
            Этот путь начинается с одного шага. Программа рождается из живого поля — твой процесс будет абсолютно уникальным.
          </p>

          <CtaButton
            actionType="TRY_7_DAYS"
            variant="primary"
            size="xl"
            label="Войти в живое пространство"
            subLabel="7 дней внутри сообщества"
            modalSource="Финальный экран (Bottom CTA)"
            onOpenModal={onOpenModal}
          />
        </div>
      </div>
    </section>
  );
}
