import React from "react";

export interface PatternItem {
  number: string;
  title: string;
  text: string;
  highlight?: boolean;
}

export default function PatternCard({ item }: { item: PatternItem }) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between ${
        item.highlight
          ? "border-[#d4af37] bg-white/95 shadow-[0_10px_30px_rgba(212,175,55,0.12)]"
          : "bg-white/80"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-serif-luxury text-xs text-[#735c00] font-bold tracking-widest">
          {item.number}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#d0c5af]" />
      </div>

      <div>
        <h3 className="font-serif-luxury text-lg text-[#1b1c1c] font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-[#4d4635] leading-relaxed">
          {item.text}
        </p>
      </div>
    </div>
  );
}
