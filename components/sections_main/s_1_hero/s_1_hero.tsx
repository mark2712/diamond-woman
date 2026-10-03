"use client";

import React from "react";
import CtaButton from "../../blocks/CtaButton";
import { SparklesIcon, DiamondIcon } from "../../blocks/icons";
import HeroFeatureList from "./blocks/HeroFeatureList";
import { getAssetPath } from "@/data/data";

interface HeroSectionProps {
  onOpenModal?: (source: string) => void;
}

export default function Section1Hero({ onOpenModal }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative w-full min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-5 sm:px-8 text-center bg-white overflow-hidden"
    >
      {/* Soft Luminous Ambient Glows */}
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

        {/* Majestic Hero Heading (Будь Женщиной-Бриллиантом) */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#111417] font-bold leading-[1.08] tracking-tight mb-4 max-w-4xl drop-shadow-sm">
          БУДЬ ЖЕНЩИНОЙ<br />
          <span className="italic font-normal text-[#d4af37]">
            - БРИЛЛИАНТОМ -
          </span>
        </h1>

        {/* Subtitle / Essence Headline */}
        <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#111417] font-medium max-w-3xl mb-4 leading-snug">
          Женщиной, которая знает свою ценность{" "}
          <span className="italic text-[#b89628] font-semibold">
            и больше не ищет её подтверждения
          </span>{" "}
          через мужчину.
        </h2>

        <p className="text-base sm:text-lg text-[#111417] font-medium max-w-2xl mb-4 leading-relaxed">
          Перестань повторять сценарии, в которых приходится заслуживать любовь, всё тащить на себе и снова разочаровываться.
        </p>

        <p className="text-sm sm:text-base text-[#787b80] font-normal max-w-2xl mb-8 leading-relaxed">
          Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями.
        </p>

        {/* Featured Hero Photo */}
        <div className="relative w-full max-w-4xl my-4 sm:my-6 animate-fade-in group">
          {/* Ambient Gold Halo */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#d4af37]/35 via-[#F9D423]/25 to-[#d4af37]/35 rounded-[28px] sm:rounded-[36px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Image Container */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#d4af37]/40 bg-[#0f1115] shadow-[0_25px_70px_rgba(0,0,0,0.15)] aspect-[16/9]">
            <img
              src={getAssetPath("/photo_5330246163610933977_y.jpg")}
              alt="Татьяна Мунтяну — Автор пространства Женщина-Бриллиант"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              loading="eager"
            />

            {/* Subtle Vignette Gradient for Depth and Badge Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

            {/* Top-Right Badge: Live Online Field */}
            {/* <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 backdrop-blur-md bg-white/90 border border-[#d4af37]/50 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-lg flex items-center gap-2">
              <SparklesIcon className="w-3.5 h-3.5 text-[#b89628]" />
              <span className="text-[11px] sm:text-xs text-[#111417] font-bold tracking-wide">
                Живое поле · 100% онлайн
              </span>
            </div> */}

            {/* Bottom-Left Glass Badge: Author Info */}
            <div className="absolute bottom-3.5 left-3.5 sm:bottom-6 sm:left-6 backdrop-blur-md bg-black/70 border border-white/20 rounded-2xl p-3 sm:p-4 text-left shadow-2xl max-w-[270px] sm:max-w-md">
              <div className="flex items-center gap-2 mb-1">
                <DiamondIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                  Автор и ведущая
                </span>
              </div>
              <h3 className="text-white text-sm sm:text-lg font-bold font-serif-luxury leading-tight mb-1">
                Татьяна Мунтяну
              </h3>
              <p className="text-[#e2ded6] text-[11px] sm:text-xs leading-relaxed hidden sm:block">
                Глубинная терапия сценариев, возвращение в тело и раскрытие истинной женской самоценности
              </p>
            </div>
          </div>
        </div>

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
        <div className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#f7f5f2] border border-[#d4af37]/50 text-xs sm:text-sm font-bold text-[#111417] mb-8 shadow-[0_4px_20px_rgba(212,175,55,0.12)]">
          <DiamondIcon className="w-4 h-4 text-[#d4af37] mr-2.5 shrink-0" />
          <span>Живая работа. Живая обратная связь. Живое сообщество.</span>
        </div>

        {/* CTA Button with Sparkling Gold Glow */}
        <div className="flex flex-col items-center">
          <CtaButton
            actionType="TRY_7_DAYS"
            variant="primary"
            size="xl"
            label="Попробовать 7 дней"
            modalSource="Первый экран (Hero)"
            onOpenModal={onOpenModal}
          />
          <p className="text-xs sm:text-sm text-[#787b80] mt-3.5 max-w-md text-center leading-relaxed">
            7 дней, чтобы начать видеть свой сценарий отношений и понять, что именно мешает тебе создавать отношения, которых ты действительно хочешь.
          </p>
        </div>
      </div>
    </section>
  );
}
