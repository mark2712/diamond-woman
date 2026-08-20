import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { siteData } from "../../../data/data";
import { ShieldCheckIcon } from "../../blocks/icons";
import GuideBioCard from "./blocks/GuideBioCard";

export default function Section8Guides() {
  const [tatiana, yuri] = siteData.brand.authors;

  const depths = [
    { title: "К контакту с собой", desc: "восстановление связи со своими истинными желаниями и телом" },
    { title: "К душе", desc: "исцеление травматического опыта и возвращение чувствительности" },
    { title: "К духу", desc: "обретение внутренней вертикали, достоинства и несокрушимой опоры" },
    { title: "К внутреннему пространству", desc: "где женщина начинает слышать себя чисто и ясно без шума ума" },
  ];

  return (
    <section id="guides" className="relative w-full py-24 px-5 sm:px-8 z-10 bg-[#fcf9f8]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#b89628] font-bold block mb-3">
            ПРОВОДНИКИ ПРОСТРАНСТВА
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl text-[#111417] font-bold mb-4 leading-tight">
            Наш путь как проводников
          </h2>
          <p className="text-sm sm:text-base text-[#4a4d52] leading-relaxed max-w-2xl mx-auto">
            Мы более 15 лет изучаем и практикуем работу с человеком, его состояниями и внутренними процессами. Обучались и продолжаем обучаться шаманизму — традициям работы с тонким планом, энергиями и состояниями человека.
          </p>
        </div>

        {/* Guides Bios Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <GuideBioCard
            name={tatiana.name}
            role={tatiana.role}
            bio={tatiana.bio}
            quote="«Проводник должен сам пройти путь, чтобы вести глубже границы собственных ограничений.»"
            accentColor="gold"
          />

          <GuideBioCard
            name={yuri.name}
            role={yuri.role}
            bio={yuri.bio}
            quote="«Видеть сценарий со стороны мужчины — значит дать женщине полную ясность реальности.»"
            accentColor="mist"
          />
        </div>

        {/* Depth levels */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold mb-2">
              Мы стремимся вести глубже
            </h3>
            <p className="text-xs sm:text-sm text-[#787b80]">
              Туда, где начинается настоящее преображение
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {depths.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#e5e0d5] flex flex-col justify-between shadow-sm"
              >
                <span className="font-serif-luxury text-xs text-[#d4af37] font-bold mb-2">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-serif-luxury text-lg text-[#111417] font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#4a4d52] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 10: Открытое поле и ответственность */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)]">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold mb-4">
            Открытое поле и ответственность
          </h3>

          <p className="text-sm sm:text-base text-[#4a4d52] leading-relaxed mb-6">
            Мы понимаем, что значит открыть пространство глубокой работы. Поэтому относимся к этому с большой ответственностью.
            <br />
            Наши сердца прошли большой путь, чтобы сегодня мы могли направлять своё внимание на вас максимально глубоко.
          </p>

          <div className="pt-6 border-t border-[#e5e0d5]">
            <p className="text-xs uppercase tracking-wider text-[#787b80] mb-2 font-medium">
              Не для того, чтобы дать вам готовую жизнь.
            </p>
            <p className="font-serif-luxury text-lg sm:text-2xl text-[#b89628] font-bold">
              А чтобы помочь вам соприкоснуться с собой.
            </p>
          </div>
        </div>

        <DiamondDivider />
      </div>
    </section>
  );
}
