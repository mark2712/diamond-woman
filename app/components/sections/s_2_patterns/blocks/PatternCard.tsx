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
        item.highlight ? "border-[#e9c349]/40 bg-[#1d2023]/60" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-serif-luxury text-xs text-[#e9c349] font-semibold tracking-widest">
          {item.number}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>

      <div>
        <h3 className="font-serif-luxury text-lg text-white font-medium mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-[#c5c7c9] leading-relaxed">
          {item.text}
        </p>
      </div>
    </div>
  );
}
