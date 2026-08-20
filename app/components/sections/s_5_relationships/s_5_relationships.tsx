import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { WavesIcon } from "../../blocks/icons";
import RelationshipPointCard from "./blocks/RelationshipPointCard";

export default function Section5Relationships() {
  const points = [
    "совпадают ценности;",
    "вы смотрите в одну сторону;",
    "есть притяжение и алхимия;",
    "есть доверие;",
    "есть близость;",
    "нет постоянной борьбы и конкуренции;",
    "можно говорить обо всём;",
    "можно молчать вместе;",
    "хочется делать жизнь вместе;",
    "есть желание отдавать друг другу;",
    "есть тихое удовольствие от совместной жизни.",
  ];

  return (
    <section id="relationships" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ОРИЕНТИР И БЛИЗОСТЬ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Отношения на одной волне
          </h2>
          <p className="text-base sm:text-xl text-[#4a4d52] font-light">
            Мы не обещаем «идеального мужчину».
            <br />
            Мы говорим об отношениях, в которых:
          </p>
        </div>

        {/* List of Relationship Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {points.map((point, idx) => (
            <RelationshipPointCard key={idx} text={point} />
          ))}
        </div>

        {/* Climax Quote */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)]">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
            <WavesIcon className="w-6 h-6" />
          </div>

          <p className="text-sm sm:text-base text-[#787b80] mb-2 font-serif-luxury">
            Когда рядом не тот, с кем приходится бороться за любовь.
          </p>
          <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-semibold italic leading-relaxed">
            «А тот, с кем можно быть{" "}
            <span className="text-[#b89628] not-italic font-bold">
              на одной волне
            </span>
            .»
          </h3>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
