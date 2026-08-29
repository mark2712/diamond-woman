import React from "react";
import { retreatData } from "../../data/retreatData";
import { ShieldIcon } from "../../blocks/icons";

export default function SectionPreparation() {
  const { preparation } = retreatData;

  return (
    <section id="preparation" className="py-24 sm:py-32 bg-[#090a0d] text-[#f2efe9] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38ef7d]/10 border border-[#38ef7d]/30 text-[#38ef7d] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <ShieldIcon className="w-3.5 h-3.5" />
            <span>Фундамент безопасности</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {preparation.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-2xl mx-auto">
            {preparation.subheading}
          </p>
        </div>

        {/* 6 Preparation Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preparation.steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-[#12141c] border border-[#252834] hover:border-[#38ef7d]/40 transition-all duration-300 shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-[#38ef7d] tracking-widest uppercase mb-3">
                  ЭТАП {step.num}
                </div>
                <h3 className="font-serif text-xl text-white font-semibold mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
