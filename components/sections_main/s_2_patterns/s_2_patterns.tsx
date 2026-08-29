import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import PatternCard, { PatternItem } from "./blocks/PatternCard";

export default function Section2Patterns() {
  const patterns: PatternItem[] = [
    {
      number: "01",
      title: "«Я устала быть сильной»",
      text: "Ты привыкла всё контролировать и решать в жизни, но в глубине души мечтаешь расслабиться и безопасно опереться на мужчину.",
    },
    {
      number: "02",
      title: "«Я устала всё тащить на себе»",
      text: "В отношениях ты незаметно берешь ответственность за двоих, закрывая быт и проблемы, но забывая о своих истинных желаниях.",
    },
    {
      number: "03",
      title: "«Почему мне снова попадаются не те?»",
      text: "Мужчина сначала сильно притягивает и очаровывает, а затем наступает эмоциональный холод, безответственность или разочарование.",
    },
    {
      number: "04",
      title: "«Те, кому нравлюсь я — не нравятся мне»",
      text: "Когда мужчина проявляет искреннюю заботу, становится скучно, а влечение возникает только там, где есть дистанция или тревога.",
    },
    {
      number: "05",
      title: "«Почему достойных мужчин так мало?»",
      text: "Кажется, что сильных, зрелых и надежных партнеров не осталось, либо с ними приходится постоянно бороться и конкурировать.",
    },
    {
      number: "06",
      title: "«Может быть, со мной что-то не так?»",
      text: "Попытки быть идеальной, заслуживать любовь, терпеть и подстраиваться приводят к выгоранию и потере контакта с собой.",
      highlight: true,
    },
  ];

  return (
    <section id="patterns" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            Осознание паттернов
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#111417] font-bold mb-4 leading-tight">
            «Почему я снова оказалась здесь?»
          </h2>
          <p className="text-base sm:text-xl text-[#d4af37] font-serif-luxury italic mb-4 font-semibold">
            «Мужчины могут быть разными. А сценарий — одним и тем же.»
          </p>
          <div className="text-sm sm:text-base text-[#4a4d52] leading-relaxed space-y-2">
            <p>
              Ты можешь быть успешной. Самостоятельной. Зарабатывать. Управлять бизнесом. Принимать сложные решения.
            </p>
            <p className="font-semibold text-[#111417]">
              Но почему именно в отношениях твоя жизнь снова складывается не так, как ты хочешь?
            </p>
          </div>
        </div>

        {/* Pattern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {patterns.map((item, idx) => (
            <PatternCard key={idx} item={item} />
          ))}
        </div>

        {/* Deep Realization Quote Box */}
        <div className="relative glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto overflow-hidden bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)]">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#fff2b2]/40 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-[#d4af37] to-transparent mb-4" />
            <blockquote className="font-serif-luxury text-lg sm:text-2xl text-[#111417] font-normal leading-relaxed mb-4">
              Ты уже знаешь, как больше не хочешь.
              <br />
              <span className="text-[#b89628] font-bold">
                Но пока не понимаешь, что должно измениться внутри, чтобы отношения стали такими, как хочешь ты.
              </span>
            </blockquote>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
