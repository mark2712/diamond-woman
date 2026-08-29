import React from "react";
import { retreatData } from "../../data/retreatData";
import { SparklesIcon } from "../../blocks/icons";

export default function SectionResults() {
  const { results } = retreatData;

  return (
    <section id="results" className="py-24 sm:py-32 bg-[#08090c] text-[#f2efe9] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9D423]/10 border border-[#F9D423]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Внутренняя трансформация</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {results.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-2xl mx-auto">
            {results.subheading}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#13151e] to-[#0c0d12] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-bold text-[#d4af37]/40 group-hover:text-[#F9D423] transition-colors">
                  {item.num}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#1b1e2a] flex items-center justify-center text-[#ff7b25] group-hover:rotate-45 transition-transform">
                  ✦
                </div>
              </div>
              <h3 className="font-serif text-xl text-white font-semibold mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
