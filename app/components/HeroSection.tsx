"use client";

import React from "react";
import CtaButton from "./CtaButton";
import { SparklesIcon, DiamondIcon } from "./icons";

interface HeroSectionProps {
  onOpenModal?: (source: string) => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-5 sm:px-8 text-center overflow-hidden"
    >
      {/* Ambient Luminous Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#dde1ff]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#e9c349]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center z-10">
        {/* Top luxury badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#e9c349]/30 backdrop-blur-md mb-8 animate-fade-in">
          <SparklesIcon className="w-3.5 h-3.5 text-[#e9c349]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium">
            ЖЕНЩИНА-БРИЛЛИАНТ
          </span>
        </div>

        {/* Main Title / H1 */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-white font-bold leading-[1.15] tracking-tight mb-6 max-w-4xl drop-shadow-2xl">
          Стань Женщиной-Бриллиантом —{" "}
          <span className="italic font-normal bg-gradient-to-r from-white via-[#ffe088] to-[#e9c349] bg-clip-text text-transparent">
            и тебе больше не придётся
          </span>{" "}
          искать свою ценность через мужчину. И разочаровываться.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-[#c5c7c9] font-light max-w-2xl mb-8 leading-relaxed">
          Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями.
        </p>

        {/* Guides Badge */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#1d2023]/60 border border-white/10 backdrop-blur-md mb-10">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#8f9194]">
            Проводники:
          </span>
          <span className="text-xs sm:text-sm text-white font-medium">
            Татьяна Мунтяну &amp; Юрий Бузько
          </span>
        </div>

        {/* 3 Negatives + 1 Core Positive Statement */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8f9194]">
            <span className="text-white/40">✕</span>
            <span>Не записанный курс</span>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8f9194]">
            <span className="text-white/40">✕</span>
            <span>Не марафон</span>
          </div>
          <div className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8f9194]">
            <span className="text-white/40">✕</span>
            <span>Не универсальная программа</span>
          </div>
        </div>

        {/* The Core Truth Highlight */}
        <div className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#1d2023]/80 border border-[#e9c349]/30 text-xs sm:text-base font-medium text-white mb-10 shadow-[0_0_30px_rgba(233,195,73,0.08)]">
          <DiamondIcon className="w-4 h-4 text-[#e9c349] mr-2.5 shrink-0" />
          <span>Живая работа. Живое поле. Живое сообщество.</span>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <CtaButton
            actionType="TRY_7_DAYS"
            variant="primary"
            size="xl"
            label="Попробовать 7 дней"
            subLabel="7 дней внутри настоящего сообщества"
            modalSource="Первый экран (Hero)"
            onOpenModal={onOpenModal}
          />
        </div>
      </div>
    </section>
  );
}
