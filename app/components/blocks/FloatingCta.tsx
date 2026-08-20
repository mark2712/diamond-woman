"use client";

import React, { useState, useEffect } from "react";
import { DiamondIcon } from "./icons";
import { triggerCtaAction } from "../../config/cta";

interface FloatingCtaProps {
  onOpenModal?: (source: string) => void;
}

export default function FloatingCta({ onOpenModal }: FloatingCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    triggerCtaAction("TRY_7_DAYS", {
      modalSource: "Плавающая кнопка (Floating CTA)",
      onOpenModal,
    });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-40 animate-fade-in">
      <button
        onClick={handleClick}
        type="button"
        className="group relative flex items-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-gradient-to-r from-[#e6c35c] via-[#ffd978] to-[#d4af37] text-[#1c1400] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] shadow-[0_8px_32px_rgba(212,175,55,0.55),0_0_15px_rgba(255,217,120,0.4)] hover:shadow-[0_12px_45px_rgba(212,175,55,0.75),0_0_25px_rgba(255,217,120,0.6)] border border-[#fff6c8] transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <span className="w-6 h-6 rounded-full bg-[#1c1400]/10 flex items-center justify-center transition-transform group-hover:rotate-45">
          <DiamondIcon className="w-3.5 h-3.5 text-[#1c1400]" />
        </span>
        <span>Попробовать 7 дней</span>
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/35 blur-xl group-hover:blur-2xl transition-all -z-10" />
      </button>
    </div>
  );
}
