import React from "react";

export default function PointBQuestionCard({
  question,
  index,
}: {
  question: string;
  index: number;
}) {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 flex items-center gap-4 border border-[#d0c5af]/40 hover:border-[#735c00]/50 bg-white/90 shadow-sm hover:shadow-md transition-all">
      <div className="w-8 h-8 rounded-full bg-[#735c00]/10 border border-[#735c00]/30 flex items-center justify-center shrink-0 text-[#735c00] font-serif-luxury font-bold text-xs">
        0{index + 1}
      </div>
      <span className="text-sm sm:text-base text-[#1b1c1c] font-medium">
        {question}
      </span>
    </div>
  );
}
