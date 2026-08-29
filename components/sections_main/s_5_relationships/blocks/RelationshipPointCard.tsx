import React from "react";
import { CheckIcon } from "../../../blocks/icons";

export default function RelationshipPointCard({ text }: { text: string }) {
  return (
    <div className="glass-card rounded-2xl p-5 flex items-start gap-4 border border-[#d0c5af]/40 hover:border-[#735c00]/50 bg-white/85 shadow-sm">
      <div className="w-7 h-7 rounded-full bg-[#735c00]/10 border border-[#735c00]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#735c00]">
        <CheckIcon className="w-4 h-4" />
      </div>
      <span className="text-sm sm:text-base text-[#1b1c1c] font-medium">
        {text}
      </span>
    </div>
  );
}
