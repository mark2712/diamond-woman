"use client";

import React from "react";
import { retreatData } from "../../data/retreatData";
import { CalendarIcon, FlameIcon } from "../../blocks/icons";
import RetreatCtaButton from "../../blocks/RetreatCtaButton";

interface SectionCalendarProps {
  onOpenModalWithDate: (date: string) => void;
}

export default function SectionCalendar({ onOpenModalWithDate }: SectionCalendarProps) {
  const { calendar } = retreatData;

  return (
    <section id="calendar" className="py-24 sm:py-32 bg-[#090a0d] text-[#f2efe9] relative z-10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff7b25]/10 border border-[#ff7b25]/30 text-[#ff7b25] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>График заездов</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Ближайшие ретриты
          </h2>
          <p className="text-xs sm:text-sm text-[#9f9c94] max-w-xl mx-auto">
            Даты могут корректироваться на 2–3 дня. Финальные даты подтверждаются командой после собеседования.
          </p>
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {calendar.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-3xl bg-[#12141d] border border-[#252834] hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl flex flex-col justify-between gap-5 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-[#1a1c26] text-[#d4af37] border border-[#d4af37]/20">
                    {c.statusLabel}
                  </span>
                  <FlameIcon className="w-4 h-4 text-[#ff7b25] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-serif text-2xl text-white font-bold tracking-wide">
                  {c.date}
                </h3>
                <p className="text-xs text-[#8c8983] mt-1">
                  5 дней в закрытой хасиенде · VIP 4–6 мест
                </p>
              </div>

              <RetreatCtaButton
                onClick={() => onOpenModalWithDate(c.date)}
                size="sm"
                variant={c.status === "few_spots" ? "primary" : "outline"}
                fullWidth
              >
                Оставить заявку
              </RetreatCtaButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
