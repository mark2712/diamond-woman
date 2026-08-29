import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon, CheckIcon } from "../../blocks/icons";

export default function SectionMeetingSelf() {
  const selfQualities = [
    "Знает, кто она",
    "Знает свои истинные желания",
    "Чувствует свои границы",
    "Не пытается быть хорошей для всех",
    "Не боится быть настоящей",
    "Умеет принимать заботу и любовь",
    "Слышит свой внутренний голос",
    "Чувствует своё тело",
    "Доверяет себе и миру",
    "Любит, творит и создаёт",
  ];

  return (
    <section id="meeting-self" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            БОЛЬШАЯ ИДЕЯ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Самая важная встреча в твоей жизни — встреча с собой
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] italic font-semibold">
            «Прежде чем строить союз с другим, важно соединиться с собой.»
          </p>
        </div>

        {/* Narrative Box */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 max-w-4xl mx-auto mb-14 bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-base sm:text-lg text-[#4a4d52] leading-relaxed">
              Возможно, ты пришла сюда, потому что хочешь встретить мужчину или изменить существующие отношения.
              <br />
              <span className="text-[#111417] font-bold">
                Но прежде может произойти другая, самая главная встреча — с собой:
              </span>
            </p>
          </div>

          {/* Qualities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
            {selfQualities.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-[#f7f5f2] border border-[#e5e0d5] flex items-center gap-3.5 text-xs sm:text-sm text-[#111417] font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-[#d4af37]/15 flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-[#b89628]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Climax Conclusion */}
          <div className="pt-8 border-t border-[#e5e0d5] text-center">
            <p className="text-sm sm:text-base text-[#787b80] mb-2 font-light">
              Отношения перестают быть местом, где ты ищешь себя.
            </p>
            <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold">
              Они становятся пространством, куда ты приходишь{" "}
              <span className="text-[#b89628] italic">уже собой</span>.
            </h3>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
