"use client";

import React from "react";
import { CtaActionType, triggerCtaAction } from "../../config/cta";
import { DiamondIcon } from "../icons";

interface CtaButtonProps {
  actionType?: CtaActionType;
  label?: string;
  subLabel?: string;
  variant?: "primary" | "gold" | "ghost" | "glass" | "subtle";
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
    sm: "px-4 py-2.5 text-[11px] tracking-[0.15em]",
    md: "px-6 py-3.5 text-[12px] tracking-[0.18em]",
    lg: "px-8 py-4.5 text-[13px] tracking-[0.2em]",
    xl: "px-10 py-5 text-[14px] tracking-[0.22em]",
  }[size];

  let variantClasses = "";
  let glowElement: React.ReactNode = null;

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[#ffffff] text-[#1a1c1d] hover:bg-[#f5f5f7] shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] border border-white/40";
      glowElement = (
        <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl transition-all -z-10" />
      );
      break;

    case "gold":
      variantClasses =
        "bg-gradient-to-r from-[#e9c349] via-[#ffe088] to-[#d4af37] text-[#241a00] font-semibold shadow-[0_0_30px_rgba(233,195,73,0.3)] hover:shadow-[0_0_50px_rgba(233,195,73,0.5)] border border-[#ffe088]/60";
      glowElement = (
        <div className="absolute inset-0 rounded-full bg-[#e9c349]/30 blur-xl group-hover:blur-2xl transition-all -z-10" />
      );
      break;

    case "ghost":
      variantClasses =
        "bg-transparent text-[#e1e2e7] hover:text-white border border-[#e9c349]/50 hover:border-[#e9c349] hover:bg-[#e9c349]/10 shadow-[0_0_20px_rgba(233,195,73,0.1)]";
      break;

    case "glass":
      variantClasses =
        "bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)]";
      break;

    case "subtle":
      variantClasses =
        "bg-[#1d2023]/80 text-[#c5c7c9] hover:text-white border border-white/10 hover:border-white/20";
      break;
  }

  const defaultText = label || (actionType === "TRY_7_DAYS" ? "Попробовать 7 дней" : "Начать диагностику");

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        type="button"
        className={`relative group inline-flex items-center justify-center gap-3 rounded-full uppercase font-medium transition-all duration-300 active:scale-95 cursor-pointer select-none text-center ${sizeClasses} ${variantClasses} ${className}`}
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
        <span className="mt-2 text-[12px] text-[#c5c7c9] font-light tracking-normal opacity-80">
          {subLabel}
        </span>
      )}
    </div>
  );
}
