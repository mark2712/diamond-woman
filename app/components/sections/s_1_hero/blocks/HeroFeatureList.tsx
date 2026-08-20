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
          className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8f9194]"
        >
          <span className="text-white/40">✕</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
