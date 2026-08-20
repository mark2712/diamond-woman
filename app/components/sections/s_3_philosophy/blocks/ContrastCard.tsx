import React from "react";

export interface ContrastItem {
  desire: string;
  reality: string;
}

export default function ContrastCard({ item }: { item: ContrastItem }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-l-2 border-l-[#e9c349]/70">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#e9c349]" />
        <span className="text-sm font-semibold uppercase tracking-wider text-white">
          {item.desire}
        </span>
      </div>
      <div className="text-sm sm:text-base text-[#c5c7c9] pl-5 border-l border-white/10 italic">
        {item.reality}
      </div>
    </div>
  );
}
