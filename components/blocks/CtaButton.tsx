"use client";

import React from "react";
import { CtaActionType, triggerCtaAction } from "@/config/cta";
import { DiamondIcon } from "./icons";

interface CtaButtonProps {
  actionType?: CtaActionType;
  label?: string;
  subLabel?: string;
  variant?: "primary" | "gold" | "white" | "ghost" | "glass" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  customUrl?: string;
  modalSource?: string;
  onClick?: () => void;
  onOpenModal?: (source: string) => void;
  children?: React.ReactNode;
}

export default function CtaButton({
  actionType = "TRY_7_DAYS",
  label,
  subLabel,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
  icon,
  customUrl,
  modalSource,
  onClick,
  onOpenModal,
  children,
}: CtaButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    triggerCtaAction(actionType, {
      customUrl,
      modalSource: modalSource || label || "CTA Button",
      onOpenModal,
    });
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-[11px] tracking-[0.15em]",
    md: "px-7 py-3.5 text-[12px] tracking-[0.18em]",
    lg: "px-9 py-4.5 text-[13px] tracking-[0.2em]",
    xl: "px-10 py-5 text-[14px] tracking-[0.22em]",
  }[size];

  let variantClasses = "";
  let glowElement: React.ReactNode = null;

  switch (variant) {
    case "primary":
    case "gold":
      // Сияющее чистое золото со сверкающим ореолом (не коричневое!)
      variantClasses =
        "bg-gradient-to-r from-[#e6c35c] via-[#ffd978] to-[#d4af37] text-[#1c1400] font-bold border border-[#fff6c8] shadow-[0_6px_28px_rgba(212,175,55,0.45),0_0_15px_rgba(255,217,120,0.3)] hover:shadow-[0_10px_38px_rgba(212,175,55,0.7),0_0_25px_rgba(255,217,120,0.55)] hover:scale-[1.02]";
      glowElement = (
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/35 blur-xl group-hover:blur-2xl transition-all -z-10" />
      );
      break;

    case "white":
      // Сверкающе-белая с золотым обрамлением и свечением
      variantClasses =
        "bg-white text-[#111417] font-bold border-2 border-[#d4af37] shadow-[0_6px_30px_rgba(212,175,55,0.35),0_0_20px_rgba(255,255,255,0.9)] hover:border-[#ffd978] hover:shadow-[0_10px_40px_rgba(212,175,55,0.55),0_0_30px_rgba(255,255,255,1)] hover:scale-[1.02]";
      glowElement = (
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/25 blur-lg group-hover:blur-xl transition-all -z-10" />
      );
      break;

    case "ghost":
      variantClasses =
        "bg-white text-[#111417] hover:text-[#b89628] border border-[#d4af37]/60 hover:border-[#d4af37] shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.25)] hover:scale-[1.01]";
      break;

    case "glass":
      variantClasses =
        "bg-white/95 backdrop-blur-xl text-[#111417] hover:text-[#b89628] border border-[#d4af37]/50 hover:border-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:scale-[1.01]";
      break;

    case "dark":
      variantClasses =
        "bg-[#111417] text-white font-semibold border border-[#d4af37]/60 shadow-[0_6px_25px_rgba(17,20,23,0.3)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.45)] hover:scale-[1.02]";
      glowElement = (
        <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-xl group-hover:blur-2xl transition-all -z-10" />
      );
      break;
  }

  const defaultText = label || (actionType === "TRY_7_DAYS" ? "Попробовать 7 дней" : "Начать диагностику");

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        type="button"
        className={`relative group inline-flex items-center justify-center gap-2.5 rounded-full uppercase font-bold transition-all duration-300 active:scale-95 cursor-pointer select-none text-center ${sizeClasses} ${variantClasses} ${className}`}
      >
        {glowElement}

        {showIcon && (
          <span className="shrink-0 transition-transform duration-300 group-hover:rotate-45">
            {icon || <DiamondIcon className="w-4 h-4" />}
          </span>
        )}

        <span>{children || defaultText}</span>
      </button>

      {subLabel && (
        <span className="mt-2 text-[12px] text-[#787b80] font-medium tracking-normal">
          {subLabel}
        </span>
      )}
    </div>
  );
}
