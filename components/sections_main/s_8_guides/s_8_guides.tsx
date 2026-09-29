import React from "react";
import DiamondDivider from "../../blocks/DiamondDivider";
import { siteData } from "@/data";
import { getAssetPath } from "@/data/data";
import { ShieldCheckIcon } from "../../blocks/icons";
import GuideBioCard from "./blocks/GuideBioCard";

export default function Section8Guides() {
  const [tatiana, yuri] = siteData.brand.authors;

  const depths = [
    { title: "Тело и чувственность", desc: "возвращение в тело, снятие зажимов и раскрытие женской сексуальности" },
    { title: "Границы и голос", desc: "обретение права говорить «нет» и смело звучать в отношениях и социуме" },
    { title: "Сердце и интуиция", desc: "исцеление травм прошлого, доверие миру и тонкому внутреннему чутью" },
    { title: "Реализация и деньги", desc: "проявление своего масштаба и изобилия из наполненного состояния" },
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
            Опыт, академическая база и духовная глубина для бережного ведения женщины к её истинной самоценности.
          </p>
        </div>

        {/* Duo Banner */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] mb-12 shadow-xl border border-[#d4af37]/30 group">
          <img
            src={getAssetPath("/authors-tatiana-yuri-terrace-wide.jpg")}
            alt="Татьяна Мунтяну и Юрий Бузько"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6 sm:p-10">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-1">
                Основатели проекта
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-3xl text-white font-bold">
                Татьяна Мунтяну и Юрий Бузько
              </h3>
            </div>
          </div>
        </div>

        {/* Guides Bios Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <GuideBioCard
            name={tatiana.name}
            role={tatiana.role}
            bio={tatiana.bio}
            quote={tatiana.quote || "«Мы помогаем увидеть и проявить ту женщину, которая уже есть внутри.»"}
            accentColor="gold"
            image={getAssetPath("/tatiana-muntyanu-sea-landscape.jpg")}
          />

          <GuideBioCard
            name={yuri.name}
            role={yuri.role}
            bio={yuri.bio}
            quote={yuri.quote || "«Недостаточно понять сценарий. Нужно научиться жить и действовать иначе.»"}
            accentColor="mist"
            image={getAssetPath("/yuri-buzko-office-landscape.jpg")}
          />
        </div>

        {/* Depth levels / Horizons of Growth */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold mb-2">
              Отношения — лишь точка входа в твою силу
            </h3>
            <p className="text-xs sm:text-sm text-[#787b80] max-w-xl mx-auto">
              Постепенно внутренняя работа раскрывает все ключевые сферы жизни женщины:
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

        {/* BLOCK: Открытое пространство и ответственность */}
        <div className="glass-card-glow rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto bg-white shadow-[0_12px_35px_rgba(212,175,55,0.12)] border border-[#d4af37]/30">
          <div className="w-12 h-12 rounded-full bg-[#f7f5f2] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-3xl text-[#111417] font-bold mb-4">
            Бережное пространство и ответственность
          </h3>

          <p className="text-sm sm:text-base text-[#4a4d52] leading-relaxed mb-6">
            Мы понимаем, насколько хрупким может быть процесс трансформации. Профессиональный опыт и многолетняя личная практика позволяют нам создавать безопасное, экологичное пространство глубокой работы.
          </p>

          <div className="pt-6 border-t border-[#e5e0d5]">
            <p className="text-xs uppercase tracking-wider text-[#787b80] mb-2 font-medium">
              Не для того, чтобы дать вам чужие шаблоны.
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
