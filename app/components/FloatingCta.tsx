"use client";

import React, { useState, useEffect } from "react";
import { DiamondIcon } from "./icons";
import { triggerCtaAction } from "../config/cta";

interface FloatingCtaProps {
  onOpenModal?: (source: string) => void;
}

export default function FloatingCta({ onOpenModal }: FloatingCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показывать плавающую кнопку после прокрутки первого экрана (350px)
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
        className="group relative flex items-center gap-2.5 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full bg-white text-[#111417] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] shadow-[0_10px_35px_rgba(255,255,255,0.25)] hover:shadow-[0_15px_45px_rgba(255,255,255,0.4)] border border-white/50 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <span className="w-6 h-6 rounded-full bg-[#111417] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
          <DiamondIcon className="w-3.5 h-3.5 text-[#e9c349]" />
        </span>
        <span>Попробовать 7 дней</span>
        <div className="absolute inset-0 rounded-full bg-[#e9c349]/20 blur-md group-hover:blur-xl transition-all -z-10" />
      </button>
    </div>
  );
}
