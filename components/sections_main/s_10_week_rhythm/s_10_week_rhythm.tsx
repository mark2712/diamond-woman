import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import RhythmTimelineCard, { ScheduleDayItem } from "./blocks/RhythmTimelineCard";

export default function Section10WeekRhythm() {
  const schedule: ScheduleDayItem[] = [
    {
      day: "ПОНЕДЕЛЬНИК",
      phase: "ГЛУБИНА",
      color: "text-[#d4af37]",
      desc: "Глубокая живая сессия + предварительная диагностика. Фокус на корневых бессознательных процессах и текущем запросе группы.",
      badge: "Живая сессия",
    },
    {
      day: "ВТОРНИК",
      phase: "РАЗВОРАЧИВАНИЕ",
      color: "text-[#d4af37]",
      desc: "Что поднялось после сессии? Что стало понятно? Какие вопросы появились? Осмысление и бережное распаковывание смыслов.",
      badge: "Осознание",
    },
    {
      day: "СРЕДА — СУББОТА",
      phase: "ПРОЖИВАНИЕ И ИНТЕГРАЦИЯ",
      color: "text-[#d4af37]",
      desc: "Задания. Наблюдение за собой. Перенос изменений в реальную жизнь. Работа с новыми реакциями и поведением в паре.",
      badge: "Практика в жизни",
    },
    {
      day: "ВОСКРЕСЕНЬЕ",
      phase: "ОТНОШЕНИЯ — ВОПРОСЫ И ОТВЕТЫ",
      color: "text-[#d4af37]",
      desc: "Разбор реальных ситуаций участниц в прямом эфире. Мы работаем не с придуманными примерами — мы работаем с вашей жизнью.",
      badge: "Живой Q&A разбор",
    },
  ];

  return (
    <section id="week-rhythm" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            СТРУКТУРА И ДИНАМИКА
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Как проходит неделя
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] italic font-bold">
            Живой ритм сообщества
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative mb-14">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#d4af37] via-[#e5e0d5] to-[#d4af37] -translate-x-1/2" />

          <div className="space-y-6 md:space-y-12">
            {schedule.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-[46%]">
                    <RhythmTimelineCard item={item} />
                  </div>

                  <div className="hidden md:flex w-[8%] items-center justify-center relative">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-[#d4af37] flex items-center justify-center z-10 shadow-md">
                      <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
                    </div>
                  </div>

                  <div className="hidden md:block w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
