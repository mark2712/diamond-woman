import React from "react";
import { retreatData } from "../../data/retreatData";
import { FlameIcon } from "../../blocks/icons";

export default function SectionGuardians() {
  const { guardians } = retreatData;

  return (
    <section id="guardians" className="py-24 sm:py-32 bg-[#090a0d] text-[#f2efe9] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff7b25]/10 border border-[#ff7b25]/30 text-[#ff7b25] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <FlameIcon className="w-3.5 h-3.5" />
            <span>Проводники и наставники</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Хранители силы
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            Синтез 30-летней родовой шаманской традиции Мексики, академической науки и глубинной гипнотерапии
          </p>
        </div>

        {/* Guardians Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {guardians.map((g, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gradient-to-b from-[#141620] to-[#0e0f14] border border-[#252834] hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Optional Portrait Image */}
              {g.image && (
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0c0d12]">
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141620] via-transparent to-transparent" />
                </div>
              )}

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  {g.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#F9D423] text-[10px] uppercase font-bold tracking-wider mb-3">
                      {g.badge}
                    </span>
                  )}

                  <h3 className="font-serif text-2xl text-white font-bold mb-1 group-hover:text-[#F9D423] transition-colors">
                    {g.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#d4af37] font-medium mb-2.5">
                    {g.role}
                  </div>
                  <div className="text-[11px] text-[#ff7b25] font-semibold mb-4 pb-3 border-b border-[#252834]">
                    {g.credentials}
                  </div>
                  <p className="text-xs sm:text-sm text-[#a09e99] leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
