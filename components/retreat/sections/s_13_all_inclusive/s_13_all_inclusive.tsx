import React from "react";
import { retreatData } from "../../data/retreatData";
import { CheckIcon, SparklesIcon } from "../../blocks/icons";

export default function SectionAllInclusive() {
  const { allInclusive } = retreatData;

  return (
    <section id="all-inclusive" className="py-24 sm:py-32 bg-[#0c0d12] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Всестороннее обеспечение</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {allInclusive.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            {allInclusive.subheading}
          </p>
        </div>

        {/* Included List Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#151722] via-[#10121a] to-[#0c0d12] border border-[#d4af37]/30 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {allInclusive.includedList.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#12141c] border border-[#252834]"
              >
                <div className="w-6 h-6 rounded-full bg-[#e65c00]/15 border border-[#e65c00]/40 flex items-center justify-center text-[#ff7b25] shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-[#e0ddd5] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#181a24] border border-[#d4af37]/20 text-xs text-[#a09e99] text-center leading-relaxed">
            <span className="text-[#F9D423] font-bold uppercase tracking-wider block mb-1">
              Авиаперелет
            </span>
            {allInclusive.notIncludedText}
          </div>
        </div>
      </div>
    </section>
  );
}
