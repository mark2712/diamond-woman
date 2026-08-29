import React from "react";

export interface ScheduleDayItem {
  day: string;
  phase: string;
  color: string;
  desc: string;
  badge: string;
}

export default function RhythmTimelineCard({ item }: { item: ScheduleDayItem }) {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border-t-4 border-t-[#735c00] bg-white/90 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7f7663] font-semibold">
          {item.day}
        </span>
        <span className="px-3 py-1 rounded-full bg-[#f6f3f2] text-[10px] uppercase tracking-wider text-[#735c00] font-bold border border-[#d0c5af]/50">
          {item.badge}
        </span>
      </div>

      <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold mb-3 text-[#1b1c1c]">
        {item.phase}
      </h3>

      <p className="text-sm sm:text-base text-[#4d4635] leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}
