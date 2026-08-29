import React from "react";

export default function HeroFeatureList() {
  const differentiators = [
    "Не записанный курс",
    "Не марафон",
    "Не универсальная программа",
  ];

  return (
    <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
      {differentiators.map((item, idx) => (
        <div
          key={idx}
          className="px-4 py-3 rounded-2xl bg-white border border-[#e5e0d5] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center justify-center gap-2 text-xs sm:text-sm text-[#4a4d52] font-medium"
        >
          <span className="text-[#ba1a1a] font-bold">✕</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
