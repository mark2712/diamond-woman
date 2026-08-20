import React from "react";
import { DiamondIcon } from "../../../blocks/icons";

export interface FacetItem {
  title: string;
  desc: string;
}

export default function FacetCard({ facet }: { facet: FacetItem }) {
  return (
    <div className="glass-card rounded-2xl p-5 flex flex-col items-start justify-between border-t border-t-white/20 hover:border-t-[#e9c349]">
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
        <DiamondIcon className="w-3.5 h-3.5 text-[#e9c349]" />
      </div>
      <div>
        <h3 className="font-serif-luxury text-base text-white font-semibold mb-1">
          {facet.title}
        </h3>
        <p className="text-xs text-[#8f9194] leading-relaxed">
          {facet.desc}
        </p>
      </div>
    </div>
  );
}
