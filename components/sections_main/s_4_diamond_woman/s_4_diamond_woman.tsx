import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon, DiamondIcon } from "../../blocks/icons";
import FacetCard, { FacetItem } from "./blocks/FacetCard";

export default function Section4DiamondWoman() {
  const facets: FacetItem[] = [
    { title: "Выбирать", desc: "свое окружение, свой путь и свои правила жизни" },
    { title: "Доверять", desc: "миру, мужчине и собственному глубинному чувству правды" },
    { title: "Принимать", desc: "любовь, заботу, изобилие и признание без чувства вины" },
    { title: "Отдавать", desc: "из состояния внутреннего наполнения, а не из дефицита" },
    { title: "Говорить «нет»", desc: "легко и спокойно всему, что разрушает её достоинство" },
    { title: "Быть сильной", desc: "в своем духе, опоре на себя и ясности намерений" },
    { title: "Быть мягкой", desc: "в теле, сердце, нежности и женской текучести" },
    { title: "Наслаждаться", desc: "процессом жизни, моментом, собой и отношениями" },
    { title: "Создавать близость", desc: "глубокий контакт, тепло и безопасное пространство" },
    { title: "Оставаться собой", desc: "не предавая свои ценности и суть рядом с мужчиной" },
  ];

  return (
    <section id="diamond-woman" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            СУТЬ И СОСТОЯНИЕ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-6 leading-tight">
            Кто такая Женщина-Бриллиант?
          </h2>
        </div>

        {/* Big Metaphor & Diamond Value Callout Box */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-14 mb-16 text-center max-w-3xl mx-auto bg-white shadow-[0_12px_40px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
            <DiamondIcon className="w-6 h-6" />
          </div>

          <p className="font-serif-luxury text-lg sm:text-2xl text-[#111417] leading-relaxed mb-6 font-medium">
            Бриллиант не становится ценным в тот момент, когда кто-то увидел его ценность.
          </p>

          <div className="space-y-3 text-sm sm:text-base text-[#4a4d52] max-w-2xl mx-auto mb-8 leading-relaxed">
            <p>
              Так и женщина. Её ценность <strong className="text-[#111417]">не появляется</strong>, когда её выбирает мужчина.
              И <strong className="text-[#111417]">не исчезает</strong>, когда мужчина уходит.
            </p>
            <p>
              Но под грузом жизненного опыта, разочарований, страхов и привычки быть сильной женщина может перестать чувствовать собственную самоценность.
            </p>
          </div>

          <div className="pt-6 border-t border-[#e5e0d5]">
            <p className="text-xs uppercase tracking-wider text-[#787b80] mb-2 font-bold">
              Огранка внутренней сути:
            </p>
            <p className="font-serif-luxury text-base sm:text-xl text-[#b89628] font-bold">
              Мы не создаём из тебя другую женщину. Мы помогаем тебе увидеть и проявить ту, которая уже есть внутри.
            </p>
          </div>
        </div>

        {/* Facets Grid */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#787b80] font-bold">
              Она умеет:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {facets.map((facet, idx) => (
              <FacetCard key={idx} facet={facet} />
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center max-w-xl mx-auto py-4">
          <div className="inline-flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#787b80] font-bold">
              Трансформация
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#4a4d52] mb-2">
            И в какой-то момент ей уже не нужно искать, кем стать.
          </p>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold tracking-wide">
            Она узнаёт себя.
          </h3>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
