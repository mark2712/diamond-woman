import React from "react";
import { retreatData } from "../../data/retreatData";
import { UsersIcon } from "../../blocks/icons";

export default function SectionTargetAudience() {
  const { targetAudience } = retreatData;

  return (
    <section id="target-audience" className="py-24 sm:py-32 bg-[#0d0e14] text-[#f2efe9] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <UsersIcon className="w-3.5 h-3.5" />
            <span>Камерное поле равных</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {targetAudience.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            {targetAudience.subheading}
          </p>
        </div>

        {/* 6 Target Audience Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.groups.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-[#12141c] border border-[#252834] hover:border-[#d4af37]/40 hover:bg-[#161824] transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff7b25] group-hover:scale-125 transition-transform" />
                <h3 className="font-serif text-lg sm:text-xl text-white font-semibold group-hover:text-[#F9D423] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed pl-5.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
