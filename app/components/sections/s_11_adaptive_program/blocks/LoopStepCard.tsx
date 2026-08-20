import React from "react";

export interface LoopStep {
  title: string;
  desc: string;
}

export default function LoopStepCard({ step }: { step: LoopStep }) {
  return (
    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative">
      <span className="text-xs font-bold text-white mb-1">
        {step.title}
      </span>
      <span className="text-[10px] text-[#8f9194] leading-tight">
        {step.desc}
      </span>
    </div>
  );
}
