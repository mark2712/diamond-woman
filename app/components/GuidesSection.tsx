import React from "react";
import DiamondDivider from "./DiamondDivider";
import { siteData } from "../data/data";
import { SparklesIcon, ShieldCheckIcon } from "./icons";

export default function GuidesSection() {
  const [tatiana, yuri] = siteData.brand.authors;

  const depths = [
    { title: "К контакту с собой", desc: "восстановление связи со своими истинными желаниями и телом" },
    { title: "К душе", desc: "исцеление травматического опыта и возвращение чувствительности" },
    { title: "К духу", desc: "обретение внутренней вертикали, достоинства и несокрушимой опоры" },
    { title: "К внутреннему пространству", desc: "где женщина начинает слышать себя чисто и ясно без шума ума" },
  ];

  return (
    <section id="guides" className="relative w-full py-20 px-5 sm:px-8 z-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c349] font-medium block mb-3">
            ПРОВОДНИКИ ПРОСТРАНСТВА
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight">
            Наш путь как проводников
          </h2>
          <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed max-w-2xl mx-auto">
            Мы более 15 лет изучаем и практикуем работу с человеком, его состояниями и внутренними процессами. Обучались и продолжаем обучаться шаманизму — традициям работы с тонким планом, энергиями и состояниями человека.
          </p>
        </div>

        {/* Guides Bios Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card: Tatiana */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 border-t-[#e9c349]/80">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#e9c349]">
                <SparklesIcon className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                  Проводник
                </span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold mb-2">
                {tatiana.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#ffe088] font-medium mb-4">
                {tatiana.role}
              </p>
              <p className="text-sm text-[#c5c7c9] leading-relaxed">
                {tatiana.bio}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8f9194] italic font-serif-luxury">
              «Проводник должен сам пройти путь, чтобы вести глубже границы собственных ограничений.»
            </div>
          </div>

          {/* Card: Yuri */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-t-2 border-t-[#dde1ff]/80">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#dde1ff]">
                <SparklesIcon className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                  Проводник
                </span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold mb-2">
                {yuri.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#dde1ff] font-medium mb-4">
                {yuri.role}
              </p>
              <p className="text-sm text-[#c5c7c9] leading-relaxed">
                {yuri.bio}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8f9194] italic font-serif-luxury">
              «Видеть сценарий со стороны мужчины — значит дать женщине полную ясность реальности.»
            </div>
          </div>
        </div>

        {/* Depth levels */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif-luxury text-xl sm:text-3xl text-white font-semibold mb-2">
              Мы стремимся вести глубже
            </h3>
            <p className="text-xs sm:text-sm text-[#8f9194]">
              Туда, где начинается настоящее преображение
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {depths.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <span className="font-serif-luxury text-xs text-[#e9c349] font-bold mb-2">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-serif-luxury text-lg text-white font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8f9194] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 10: Открытое поле и ответственность */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border-[#e9c349]/30">
          <div className="w-12 h-12 rounded-full bg-[#e9c349]/10 border border-[#e9c349]/40 flex items-center justify-center mx-auto mb-6 text-[#e9c349]">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-3xl text-white font-bold mb-4">
            Открытое поле и ответственность
          </h3>

          <p className="text-sm sm:text-base text-[#c5c7c9] leading-relaxed mb-6">
            Мы понимаем, что значит открыть пространство глубокой работы. Поэтому относимся к этому с большой ответственностью.
            <br />
            Наши сердца прошли большой путь, чтобы сегодня мы могли направлять своё внимание на вас максимально глубоко.
          </p>

          <div className="pt-6 border-t border-white/10">
            <p className="text-xs uppercase tracking-wider text-[#8f9194] mb-2">
              Не для того, чтобы дать вам готовую жизнь.
            </p>
            <p className="font-serif-luxury text-lg sm:text-2xl text-[#ffe088] font-semibold">
              А чтобы помочь вам соприкоснуться с собой.
            </p>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
