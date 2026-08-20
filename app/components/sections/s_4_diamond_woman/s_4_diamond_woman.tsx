import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { SparklesIcon } from "../../blocks/icons";
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
    <section id="diamond-woman" className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            СУТЬ И СОСТОЯНИЕ
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
            Кто такая Женщина-Бриллиант?
          </h2>
          <div className="space-y-2 text-sm sm:text-base text-[#c5c7c9] max-w-2xl mx-auto">
            <p className="text-white/80 font-medium">
              Женщина-Бриллиант — это не идеальная женщина.
            </p>
            <p>И не женщина, которая становится лучше ради мужчины.</p>
          </div>
        </div>

        {/* Big Definition Callout */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 mb-16 text-center max-w-3xl mx-auto">
          <p className="font-serif-luxury text-lg sm:text-2xl text-white leading-relaxed">
            «Это женщина, которая{" "}
            <span className="text-[#ffe088] underline decoration-[#e9c349]/40 underline-offset-8">
              знает свою ценность настолько глубоко
            </span>
            , что ей больше не нужно искать подтверждение этой ценности через отношения.»
          </p>
        </div>

        {/* Facets Grid */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194]">
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
        <div className="text-center max-w-xl mx-auto py-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <SparklesIcon className="w-4 h-4 text-[#e9c349]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#8f9194]">
              Трансформация
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#c5c7c9] mb-2">
            И в какой-то момент ей уже не нужно искать, кем стать.
          </p>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-bold tracking-wide">
            Она узнаёт себя.
          </h3>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
