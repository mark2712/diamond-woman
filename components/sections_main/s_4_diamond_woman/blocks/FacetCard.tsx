import React from "react";
import { DiamondIcon } from "../../../blocks/icons";

export interface FacetItem {
  title: string;
  desc: string;
}

export default function FacetCard({ facet }: { facet: FacetItem }) {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col items-start justify-between border-t-2 border-t-[#d4af37] bg-white/90 shadow-sm hover:shadow-md">
      <div className="w-8 h-8 rounded-full bg-[#735c00]/10 border border-[#735c00]/30 flex items-center justify-center mb-3">
        <DiamondIcon className="w-3.5 h-3.5 text-[#735c00]" />
      </div>
      <div>
        <h3 className="font-serif-luxury text-base text-[#1b1c1c] font-bold mb-1">
          {facet.title}
        </h3>
        <p className="text-xs text-[#605e58] leading-relaxed">
          {facet.desc}
        </p>
      </div>
    </div>
  );
}
