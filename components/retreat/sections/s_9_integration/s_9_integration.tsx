import React from "react";
import { retreatData } from "../../data/retreatData";
import { SparklesIcon } from "../../blocks/icons";

export default function SectionIntegration() {
  const { integration } = retreatData;

  return (
    <section id="integration" className="py-24 sm:py-32 bg-[#0c0d12] text-[#f2efe9] relative z-10 border-t border-[#1a1c24]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Главная ценность проекта</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {integration.heading}
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#d4af37] italic max-w-2xl mx-auto leading-relaxed">
            «{integration.quote}»
          </p>
        </div>

        {/* 4 Months Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integration.phases.map((phase, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#151722] to-[#0e0f14] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#1b1e2a] border border-[#d4af37]/30 flex items-center justify-center text-[#F9D423] font-bold text-xs tracking-widest uppercase mb-6 group-hover:scale-110 transition-transform">
                  {phase.month}
                </div>
                <h3 className="font-serif text-xl text-white font-semibold mb-3 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#252834]">
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37]/60 group-hover:text-[#F9D423] transition-colors">
                  Методология NCI / Бузько
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
