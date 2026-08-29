import React from "react";
import { retreatData } from "../../data/retreatData";
import { SparklesIcon } from "../../blocks/icons";

export default function SectionTestimonials() {
  const { testimonials } = retreatData;

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#0c0d12] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Опыт участников</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Истории возвращения к себе
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            Конфиденциальные отзывы лидеров и предпринимателей после прохождения ретрита и 4 месяцев интеграции
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0e0f14] border border-[#252834] hover:border-[#d4af37]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {t.tag && (
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#1a1c26] text-[#d4af37] text-[10px] uppercase font-bold tracking-wider">
                    {t.tag}
                  </span>
                )}
                <p className="font-serif text-lg text-[#ece9df] italic leading-relaxed">
                  «{t.quote}»
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#252834]">
                <div className="font-serif text-base font-bold text-white group-hover:text-[#F9D423] transition-colors">
                  {t.author}
                </div>
                <div className="text-xs text-[#8a8780] mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
