import React from "react";
import { DiamondIcon } from "../../../blocks/icons";

export interface FieldPillarItem {
  title: string;
  desc: string;
}

export default function FieldPillarCard({ item }: { item: FieldPillarItem }) {
  return (
    <div className="glass-card-glow rounded-2xl p-6 flex flex-col justify-between border-t-2 border-t-[#e9c349]">
      <div className="w-9 h-9 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 flex items-center justify-center mb-4 text-[#e9c349]">
        <DiamondIcon className="w-4 h-4" />
      </div>
      <div>
        <h4 className="font-serif-luxury text-lg text-white font-semibold mb-2">
          {item.title}
        </h4>
        <p className="text-xs text-[#8f9194] leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
