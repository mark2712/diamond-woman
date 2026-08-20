import React from "react";

export interface LoopStep {
  title: string;
  desc: string;
}

export default function LoopStepCard({ step }: { step: LoopStep }) {
  return (
    <div className="p-3.5 rounded-xl bg-[#f6f3f2] border border-[#d0c5af]/50 flex flex-col items-center justify-center relative shadow-sm">
      <span className="text-xs font-bold text-[#1b1c1c] mb-1">
        {step.title}
      </span>
      <span className="text-[10px] text-[#605e58] leading-tight font-medium">
        {step.desc}
      </span>
    </div>
  );
}
