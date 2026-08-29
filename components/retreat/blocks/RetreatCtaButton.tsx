"use client";

import React from "react";
import { FlameIcon, ArrowRightIcon } from "./icons";

interface RetreatCtaButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  icon?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

export default function RetreatCtaButton({
  children = "Оставить заявку на участие",
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon = true,
  fullWidth = false,
  type = "button",
}: RetreatCtaButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs tracking-wider",
    md: "px-7 py-3.5 text-xs sm:text-sm tracking-widest",
    lg: "px-9 py-4 text-sm sm:text-base tracking-[0.18em]",
    xl: "px-10 py-5 text-sm sm:text-base tracking-[0.2em] font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#e65c00] via-[#F9D423] to-[#e65c00] bg-[length:200%_auto] hover:bg-right text-[#0c0d12] font-bold shadow-[0_0_25px_rgba(230,92,0,0.35)] hover:shadow-[0_0_40px_rgba(249,212,35,0.6)] border border-[#ffd166]/50",
    gold:
      "bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] bg-[length:200%_auto] hover:bg-right text-[#0c0d12] font-bold shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] border border-[#f3e5ab]/60",
    secondary:
      "bg-[#1c1e24] hover:bg-[#252830] text-[#f2efe9] border border-[#d4af37]/30 hover:border-[#d4af37]/70 shadow-lg",
    outline:
      "bg-transparent hover:bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/50 hover:border-[#d4af37] shadow-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center uppercase transition-all duration-300 rounded-xl cursor-pointer active:scale-[0.98] select-none ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2.5">
        {icon && (
          <FlameIcon className="w-4 h-4 text-current transition-transform duration-300 group-hover:scale-110" />
        )}
        <span>{children}</span>
        <ArrowRightIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </span>
    </button>
  );
}
