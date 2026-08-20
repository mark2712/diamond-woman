import React from "react";
import { CheckIcon } from "../../../blocks/icons";

export default function RelationshipPointCard({ text }: { text: string }) {
  return (
    <div className="glass-card rounded-2xl p-5 flex items-start gap-4 border border-white/5 hover:border-[#e9c349]/30">
      <div className="w-7 h-7 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#e9c349]">
        <CheckIcon className="w-4 h-4" />
      </div>
      <span className="text-sm sm:text-base text-[#e1e2e7] font-medium">
        {text}
      </span>
    </div>
  );
}
