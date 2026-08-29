import React from "react";
import { retreatData } from "../../data/retreatData";
import { FlameIcon } from "../../blocks/icons";

export default function SectionUniqueFormula() {
  const { formula } = retreatData;

  return (
    <section id="formula" className="py-24 sm:py-32 bg-[#0b0c10] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff7b25] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <FlameIcon className="w-3.5 h-3.5" />
            <span>Архитектура метода</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {formula.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            {formula.subheading}
          </p>
        </div>

        {/* Formula Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch">
          {formula.pillars.map((p, index) => (
            <div
              key={index}
              className="relative p-5 rounded-2xl bg-[#13151e] border border-[#252834] hover:border-[#F9D423]/50 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="text-[11px] font-bold text-[#F9D423] tracking-widest uppercase mb-2">
                  ШАГ {p.step}
                </div>
                <h3 className="font-serif text-base text-white font-semibold mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[11px] text-[#9a978f] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {index < formula.pillars.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#d4af37] font-bold text-xs">
                  +
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
