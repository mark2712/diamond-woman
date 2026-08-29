import React from "react";
import { retreatData } from "../../data/retreatData";
import { FlameIcon } from "../../blocks/icons";

export default function SectionBeyondForce() {
  const { beyondForce } = retreatData;

  return (
    <section id="beyond-force" className="py-24 sm:py-32 bg-[#0a0b0e] text-[#f2efe9] relative z-10 border-t border-[#1a1c24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff7b25] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <FlameIcon className="w-3.5 h-3.5" />
            <span>Философия трансформации</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {beyondForce.heading}
          </h2>
          <p className="font-serif text-lg sm:text-xl text-[#d4af37] italic leading-relaxed">
            «{beyondForce.quote}»
          </p>
        </div>

        {/* 3 Meaning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {beyondForce.points.map((point, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-[#14161f] to-[#0d0e14] border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1c1e29] border border-[#d4af37]/30 flex items-center justify-center text-[#F9D423] font-serif text-xl font-bold group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,212,35,0.3)] transition-all">
                  0{index + 1}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm text-[#a8a59f] leading-relaxed">
                  {point.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#252834]">
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#ff6240] to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
