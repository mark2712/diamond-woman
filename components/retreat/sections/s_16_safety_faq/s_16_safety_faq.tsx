"use client";

import React, { useState } from "react";
import { retreatData } from "../../data/retreatData";
import { ShieldIcon, ChevronDownIcon } from "../../blocks/icons";

export default function SectionSafetyFaq() {
  const { safety, faq } = retreatData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#090a0d] text-[#f2efe9] relative z-10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Safety Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#38ef7d]/10 border border-[#38ef7d]/30 text-[#38ef7d] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <ShieldIcon className="w-3.5 h-3.5" />
            <span>{safety.ageLimit}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {safety.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            Опыт с растениями силы требует высочайшей квалификации проводников и строгого соблюдения регламентов безопасности
          </p>
        </div>

        {/* Safety Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {safety.points.map((p, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[#12141c] border border-[#252834] flex flex-col justify-between"
            >
              <h3 className="font-serif text-lg text-white font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-[#9f9c94] leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold text-center mb-8">
            Часто задаваемые вопросы
          </h3>

          <div className="space-y-3.5">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#12141c] border border-[#252834] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#F9D423] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-semibold text-white">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#a8a59f] leading-relaxed border-t border-[#20222c] pt-4 animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
