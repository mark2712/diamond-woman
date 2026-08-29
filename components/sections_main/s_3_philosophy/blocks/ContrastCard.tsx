import React from "react";

export interface ContrastItem {
  desire: string;
  reality: string;
}

export default function ContrastCard({ item }: { item: ContrastItem }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-[#735c00] bg-white/85 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#735c00]" />
        <span className="text-sm font-semibold uppercase tracking-wider text-[#1b1c1c]">
          {item.desire}
        </span>
      </div>
      <div className="text-sm sm:text-base text-[#4d4635] pl-5 border-l border-[#d0c5af]/50 italic">
        {item.reality}
      </div>
    </div>
  );
}
