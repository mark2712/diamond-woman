import React from "react";
import { retreatData } from "../../data/retreatData";
import { UsersIcon, ShieldIcon } from "../../blocks/icons";

export default function SectionVipFormat() {
  const { vipFormat } = retreatData;

  return (
    <section id="vip-format" className="py-24 sm:py-32 bg-[#0c0d12] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Big Contrast Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff7b25] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <UsersIcon className="w-3.5 h-3.5" />
            <span>Камерность и элитарность</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            {vipFormat.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#b8b5ad] max-w-2xl mx-auto leading-relaxed">
            {vipFormat.subheading}
          </p>
        </div>

        {/* 4 Pillars of VIP format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {vipFormat.features.map((feat, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[#12141d] border border-[#252834] hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1a1c26] border border-[#d4af37]/30 flex items-center justify-center text-[#F9D423] mb-4 group-hover:scale-110 transition-transform">
                <ShieldIcon className="w-5 h-5 text-[#ff7b25]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-2 leading-snug">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
