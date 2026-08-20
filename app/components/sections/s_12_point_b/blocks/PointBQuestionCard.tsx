import React from "react";

export default function PointBQuestionCard({
  question,
  index,
}: {
  question: string;
  index: number;
}) {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-center gap-4 border border-white/10 hover:border-[#e9c349]/40">
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0 text-[#e9c349] font-serif-luxury font-bold text-xs">
        0{index + 1}
      </div>
      <span className="text-sm sm:text-base text-white font-medium">
        {question}
      </span>
    </div>
  );
}
