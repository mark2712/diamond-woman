import React from "react";
import DiamondDivider from "./DiamondDivider";
import { SparklesIcon } from "./icons";

export default function WeekRhythmSection() {
  const schedule = [
    {
      day: "ПОНЕДЕЛЬНИК",
      phase: "ГЛУБИНА",
      color: "border-[#e9c349] text-[#e9c349]",
      desc: "Глубокая живая сессия. Перед сессией персонализированная диагностика — выявление с чем работать, что действительно требует внимания сейчас.",
      badge: "Живая сессия",
    },
    {
      day: "ВТОРНИК",
      phase: "РАЗВОРАЧИВАНИЕ",
      color: "border-[#dde1ff] text-[#dde1ff]",
      desc: "Что поднялось после сессии? Что стало понятно? Какие вопросы появились? Что с этим делать? Как интегрировать изменения?",
      badge: "Осознание",
    },
    {
      day: "СРЕДА — СУББОТА",
      phase: "ПРОЖИВАНИЕ",
      color: "border-[#ffe088] text-[#ffe088]",
      desc: "Женщина наблюдает за собой, выполняет задания и переносит изменения в реальную жизнь в непрерывном живом поле поддержки.",
      badge: "Практика в жизни",
    },
    {
      day: "ВОСКРЕСЕНЬЕ",
      phase: "ИНТЕГРАЦИЯ",
      color: "border-white text-white",
      desc: "Живая встреча в формате «Вопросы — Ответы». Что изменилось? Что проявилось? Что ещё требует внимания?",
      badge: "Q&A Эфир",
    },
  ];

  return (
    <section id="week-rhythm" className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            СТРУКТУРА И ДИНАМИКА
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Как проходит неделя
          </h2>
          <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] italic">
            Живой ритм сообщества
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative mb-14">
          {/* Vertical line indicator */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#e9c349]/50 via-white/20 to-[#e9c349]/50 -translate-x-1/2" />

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
                  {/* Content card */}
                  <div className="w-full md:w-[46%]">
                    <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border-t-2 hover:border-[#e9c349] transition-all">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194] font-semibold">
                          {item.day}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider text-white font-medium border border-white/10">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className={`font-serif-luxury text-xl sm:text-2xl font-bold mb-3 ${item.color}`}>
                        {item.phase}
                      </h3>

                      <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node on Desktop */}
                  <div className="hidden md:flex w-[8%] items-center justify-center relative">
                    <div className="w-8 h-8 rounded-full bg-[#111417] border-2 border-[#e9c349] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(233,195,73,0.4)]">
                      <div className="w-2 h-2 rotate-45 bg-white" />
                    </div>
                  </div>

                  {/* Empty Spacer */}
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
