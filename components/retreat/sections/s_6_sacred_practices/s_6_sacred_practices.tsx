import React from "react";
import { retreatData } from "../../data/retreatData";
import {
  FlameIcon,
  SunIcon,
  CompassIcon,
  SparklesIcon,
  ShieldIcon,
  MoonIcon,
  EyeIcon,
  FeatherIcon,
  MusicIcon,
} from "../../blocks/icons";

export default function SectionSacredPractices() {
  const { sacredPractices } = retreatData;

  const renderIcon = (name: string) => {
    switch (name) {
      case "FlameIcon":
        return <FlameIcon className="w-5 h-5 text-[#ff7b25]" />;
      case "SunIcon":
        return <SunIcon className="w-5 h-5 text-[#F9D423]" />;
      case "CompassIcon":
        return <CompassIcon className="w-5 h-5 text-[#38ef7d]" />;
      case "SparklesIcon":
        return <SparklesIcon className="w-5 h-5 text-[#d4af37]" />;
      case "ShieldIcon":
        return <ShieldIcon className="w-5 h-5 text-[#ff5722]" />;
      case "MoonIcon":
        return <MoonIcon className="w-5 h-5 text-[#a8c0ff]" />;
      case "EyeIcon":
        return <EyeIcon className="w-5 h-5 text-[#f3e5ab]" />;
      case "FeatherIcon":
        return <FeatherIcon className="w-5 h-5 text-[#ffd166]" />;
      case "MusicIcon":
        return <MusicIcon className="w-5 h-5 text-[#ff9a9e]" />;
      default:
        return <FlameIcon className="w-5 h-5 text-[#ff7b25]" />;
    }
  };

  return (
    <section id="practices" className="py-24 sm:py-32 bg-[#08090c] text-[#f2efe9] relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e65c00]/10 border border-[#e65c00]/30 text-[#ff8c42] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <FlameIcon className="w-3.5 h-3.5" />
            <span>Сакральное наполнение</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Что входит в ретрит
          </h2>
          <p className="text-sm sm:text-base text-[#a8a59f] max-w-xl mx-auto">
            10 сакральных практик и ритуалов, открывающих доступ к глубине вашего бессознательного и силе Духа
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sacredPractices.map((p) => (
            <div
              key={p.id}
              className={`p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0e0f15] border transition-all duration-300 shadow-xl group flex flex-col justify-between ${
                p.highlight
                  ? "border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                  : "border-[#252834] hover:border-[#d4af37]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#1c1e2a] border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderIcon(p.iconName)}
                  </div>
                  {p.highlight && (
                    <span className="px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#F9D423] text-[10px] uppercase font-bold tracking-wider">
                      {p.highlight}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-1.5 group-hover:text-[#F9D423] transition-colors leading-snug">
                  {p.title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#d4af37] font-medium mb-3">
                  {p.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-[#9f9c94] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
