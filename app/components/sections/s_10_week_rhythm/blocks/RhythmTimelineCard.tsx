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
    <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border-t-2 hover:border-[#e9c349] transition-all">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194] font-semibold">
          {item.day}
        </span>
        <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider text-white font-medium border border-white/10">
          {item.badge}
        </span>
      </div>

      <h3 className={`font-serif-luxury text-xl sm:text-2xl font-bold mb-3 ${item.color}`}>
        {item.phase}
      </h3>

      <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}
