"use client";

import React from "react";
import CtaButton from "../../blocks/CtaButton";
import { SparklesIcon, DiamondIcon } from "../../blocks/icons";
import HeroFeatureList from "./blocks/HeroFeatureList";

interface HeroSectionProps {
  onOpenModal?: (source: string) => void;
}

export default function Section1Hero({ onOpenModal }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-5 sm:px-8 text-center bg-white overflow-hidden"
    >
      {/* Soft Luminous Ambient Glows (No grainy texture) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-[#d4af37]/12 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#fff2b2]/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center z-10">
        {/* Top luxury badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 shadow-sm mb-6 animate-fade-in">
          <SparklesIcon className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold">
            ЖЕНЩИНА-БРИЛЛИАНТ
          </span>
        </div>

        {/* Majestic Dis1-inspired Hero Heading */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#111417] font-bold leading-[1.08] tracking-tight mb-4 max-w-4xl drop-shadow-sm">
          ЖЕНЩИНА<br />
          <span className="italic font-normal text-[#d4af37]">
            - БРИЛЛИАНТ -
          </span>
        </h1>

        {/* Subtitle / Essence Headline */}
        <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#111417] font-medium max-w-3xl mb-4 leading-snug">
          Стань Женщиной-Бриллиантом —{" "}
          <span className="italic text-[#b89628] font-semibold">
            и тебе больше не придётся
          </span>{" "}
          искать свою ценность через мужчину. И разочаровываться.
        </h2>

        <p className="text-base sm:text-lg text-[#4a4d52] font-normal max-w-2xl mb-8 leading-relaxed">
          Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями.
        </p>

        {/* Guides Badge */}
        <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#f7f5f2] border border-[#e5e0d5] mb-8 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#787b80] font-semibold">
            Проводники:
          </span>
          <span className="text-xs sm:text-sm text-[#111417] font-bold">
            Татьяна Мунтяну &amp; Юрий Бузько
          </span>
        </div>

        {/* Differentiators list */}
        <HeroFeatureList />

        {/* The Core Truth Highlight */}
        <div className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#f7f5f2] border border-[#d4af37]/50 text-xs sm:text-sm font-bold text-[#111417] mb-10 shadow-[0_4px_20px_rgba(212,175,55,0.12)]">
          <DiamondIcon className="w-4 h-4 text-[#d4af37] mr-2.5 shrink-0" />
          <span>Живая работа. Живое поле. Живое сообщество.</span>
        </div>

        {/* CTA Button with Sparkling Gold Glow */}
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
