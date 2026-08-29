"use client";

import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import { ClockIcon, CheckIcon } from "../../blocks/icons";

export default function SectionProgramDays() {
  const { program } = retreatData;
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="program" className="py-24 sm:py-32 bg-[#0c0d12] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <ClockIcon className="w-3.5 h-3.5" />
            <span>Путешествие длиною в 5 дней</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Программа ретрита
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            Каждый день выстроен в строгой терапевтической и сакральной последовательности
          </p>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {program.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                activeDay === idx
                  ? "bg-gradient-to-r from-[#e65c00] to-[#F9D423] text-[#0c0d12] border-[#F9D423] shadow-[0_0_20px_rgba(249,212,35,0.4)] scale-105"
                  : "bg-[#141620] text-[#a09e99] border-[#252834] hover:border-[#d4af37]/40 hover:text-white"
              }`}
            >
              {p.day}
            </button>
          ))}
        </div>

        {/* Active Day Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#151722] via-[#10121a] to-[#0c0d12] border border-[#d4af37]/30 shadow-2xl animate-fade-in max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#252834] mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#ff7b25] font-bold block mb-1">
                {program[activeDay].day}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                {program[activeDay].title}
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#1b1e2b] border border-[#d4af37]/20 text-[#d4af37] text-xs font-medium self-start md:self-auto">
              {program[activeDay].focus}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#b8b5ad] leading-relaxed mb-8">
            {program[activeDay].description}
          </p>

          <div>
            <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
              Ключевые процессы дня:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program[activeDay].activities.map((act, actIdx) => (
                <div
                  key={actIdx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12141c] border border-[#252834]"
                >
                  <CheckIcon className="w-4 h-4 text-[#ff7b25] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#e0ddd5]">{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
