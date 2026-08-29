"use client";

import React from "react";
import { FlameIcon, ShieldIcon } from "../../blocks/icons";
import { retreatData } from "../../data/retreatData";
import RetreatCtaButton from "../../blocks/RetreatCtaButton";

interface SectionHeroProps {
  onOpenModal: () => void;
}

export default function SectionHero({ onOpenModal }: SectionHeroProps) {
  const { hero } = retreatData;

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#07080b]">
      {/* Background Ceremony Image from Stitch */}
      {hero.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
        />
      )}

      {/* Cinematic Ambient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-[#07080b]/80 to-[#07080b]/50" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080b]/60 to-[#07080b]" />

      {/* Ambient Fire / Sun Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#e65c00]/25 via-[#F9D423]/15 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Top Sacred Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181a24]/90 border border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)] mb-8 animate-fade-in backdrop-blur-md">
          <FlameIcon className="w-4 h-4 text-[#ff7b25]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#F9D423]">
            {hero.tagline}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f3e5ab] to-[#c9a032] drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] max-w-5xl leading-[1.08] mb-6">
          {hero.title}
        </h1>

        {/* Subtitle / Essence */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#f5ecd8] max-w-3xl leading-relaxed mb-6 drop-shadow-lg">
          «{hero.subtitle}»
        </p>

        {/* Lead Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#c8c5bd] max-w-2xl leading-relaxed font-light mb-10 drop-shadow-md">
          {hero.leadDescription}
        </p>

        {/* Key Format Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10">
          {hero.formatBadges.map((badge, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#12141c]/85 border border-[#d4af37]/30 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-2xl hover:border-[#d4af37]/70 transition-colors"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e6e2d8] uppercase">
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button & Note */}
        <div className="flex flex-col items-center gap-4">
          <RetreatCtaButton onClick={onOpenModal} size="xl" variant="primary">
            {hero.ctaText}
          </RetreatCtaButton>

          <div className="flex items-center gap-2 text-xs text-[#a09e99] max-w-md text-center">
            <ShieldIcon className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{hero.disclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
