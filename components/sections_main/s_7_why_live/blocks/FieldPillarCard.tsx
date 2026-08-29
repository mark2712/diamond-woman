import React from "react";
import { DiamondIcon } from "../../../blocks/icons";

export interface FieldPillarItem {
  title: string;
  desc: string;
}

export default function FieldPillarCard({ item }: { item: FieldPillarItem }) {
  return (
    <div className="glass-card-glow rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-[#735c00] bg-white/95 shadow-sm hover:shadow-md">
      <div className="w-9 h-9 rounded-full bg-[#735c00]/10 border border-[#735c00]/30 flex items-center justify-center mb-4 text-[#735c00]">
        <DiamondIcon className="w-4 h-4" />
      </div>
      <div>
        <h4 className="font-serif-luxury text-lg text-[#1b1c1c] font-bold mb-2">
          {item.title}
        </h4>
        <p className="text-xs text-[#605e58] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
