"use client";

import React from "react";
import { SparklesIcon, ShieldIcon } from "../../blocks/icons";
import RetreatCtaButton from "../../blocks/RetreatCtaButton";

interface SectionAuthorsProps {
  onOpenModal: () => void;
}

export default function SectionAuthors({ onOpenModal }: SectionAuthorsProps) {
  const authors = [
    {
      name: "Татьяна Мунтяну",
      role: "Проводник ретритов, гипнотерапевт, мастер глубинных состояний",
      badge: "Глубина и гипноз",
      credentials: "15+ лет практики работы с людьми, 5+ лет в глубоких трансформациях",
      description:
        "Эксперт по работе с бессознательными блоками, родовыми программами и тонкими состояниями. Обеспечивает психологическую безопасность, материнскую заботу и точную навигацию в измененных состояниях сознания.",
      image: "/retreat/tatiana-muntyanu-terrace.jpg",
    },
    {
      name: "Юрий Бузько",
      role: "Исследователь сознания, специалист по интеграции опыта",
      badge: "Наука и интеграция",
      credentials: "Основатель Института Исследований Сознания, автор книги «Последняя иллюзия»",
      description:
        "15 лет практики. Автор доказательной методологии переноса трансцендентного опыта в структуру реального поведения, бизнес-решения и устойчивое состояние лидера.",
      image: "/retreat/yuri-buzko-office.jpg",
    },
  ];

  return (
    <section id="authors" className="py-24 sm:py-32 bg-[#090a0e] text-[#f2efe9] relative z-10 border-t border-[#181a24]">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#d4af37]/10 via-[#e65c00]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#F9D423] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Основатели и проводники</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Авторы и ведущие ретрита
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto leading-relaxed">
            Синтез академической науки о мозге, глубинной гипнотерапии и 15-летнего практического опыта ведения трансформационных процессов
          </p>
        </div>

        {/* Duo Wide Banner */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#d4af37]/30 group">
          <img
            src="/retreat/authors-tatiana-yuri-terrace-wide.jpg"
            alt="Татьяна Мунтяну и Юрий Бузько"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0e] via-black/40 to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-2xl">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F9D423] font-bold block mb-1">
                Личное ведение каждого участника
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold mb-2">
                Татьяна Мунтяну и Юрий Бузько
              </h3>
              <p className="text-xs sm:text-sm text-[#d0cdc5] leading-relaxed hidden sm:block">
                «Мы лично проводим предварительные собеседования, находимся рядом на каждой церемонии и ведем вас на протяжении всех 4 месяцев интеграции после возвращения из Мексики.»
              </p>
            </div>
          </div>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {authors.map((author, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gradient-to-b from-[#141620] to-[#0e0f14] border border-[#252834] hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Portrait */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#0c0d12]">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141620] via-transparent to-transparent" />
              </div>

              {/* Bio content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#F9D423] text-[10px] uppercase font-bold tracking-wider mb-3">
                    {author.badge}
                  </span>

                  <h3 className="font-serif text-2xl text-white font-bold mb-1.5 group-hover:text-[#F9D423] transition-colors">
                    {author.name}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#d4af37] font-medium mb-2.5">
                    {author.role}
                  </div>
                  <div className="text-[11px] text-[#ff7b25] font-semibold mb-4 pb-3 border-b border-[#252834]">
                    {author.credentials}
                  </div>
                  <p className="text-xs sm:text-sm text-[#a09e99] leading-relaxed">
                    {author.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141620] via-[#10121a] to-[#141620] border border-[#d4af37]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-bold mb-1">
              Личное собеседование с Татьяной или Юрием
            </h4>
            <p className="text-xs sm:text-sm text-[#a09e99]">
              Закрытый 30-минутный диалог перед принятием решения о вашем участии в ретрите
            </p>
          </div>
          <RetreatCtaButton onClick={onOpenModal} size="lg" variant="primary">
            Записаться на собеседование
          </RetreatCtaButton>
        </div>
      </div>
    </section>
  );
}
